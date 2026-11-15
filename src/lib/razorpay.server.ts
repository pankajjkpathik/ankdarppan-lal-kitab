import { z } from 'zod';

export const paymentLinkSchema = z.object({
  id: z.string().regex(/^plink_[a-zA-Z0-9]+$/),
  reference_id: z.string().optional(),
  amount: z.number().int(), amount_paid: z.number().int().optional(), currency: z.string(), status: z.string(),
  short_url: z.string().url().optional(),
  payments: z.array(z.object({ payment_id: z.string(), amount: z.number().int(), status: z.string() })).nullish(),
});

export async function razorpayRequest(path: string, body?: unknown) {
  const key = process.env['LOVABLE_API_KEY'];
  const connectionKey = process.env['UDC_RAZORPAY_API_KEY'];
  if (!key || !connectionKey) throw new Error('Razorpay is not connected.');
  const response = await fetch(`https://connector-gateway.lovable.dev/udc_razorpay${path}`, {
    method: body ? 'POST' : 'GET',
    headers: { Authorization: `Bearer ${key}`, 'X-Connection-Api-Key': connectionKey, 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : null,
  });
  if (!response.ok) {
    const errorBody = await response.text();
    console.error(`Razorpay request failed [${response.status}]: ${errorBody}`);
    throw new Error(`Razorpay could not process this request (${response.status}). Please try again or contact Ank Darppan.`);
  }
  return paymentLinkSchema.parse(await response.json());
}

export async function accessToken(order: string) {
  const secret = process.env['REPORT_ORDER_ACCESS_SECRET'];
  if (!secret) throw new Error('Order security is not configured.');
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  return toHex(await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(order)));
}
export async function hashToken(token: string) { return toHex(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(token))); }
function toHex(buffer: ArrayBuffer) { return Array.from(new Uint8Array(buffer), byte => byte.toString(16).padStart(2, '0')).join(''); }
export function safePaymentUrl(url: string | undefined) {
  if (!url) throw new Error('Razorpay did not return a payment page.');
  const parsed = new URL(url);
  if (parsed.protocol !== 'https:' || !['rzp.io', 'rzp.me', 'razorpay.com', 'pages.razorpay.com'].includes(parsed.hostname)) throw new Error('Invalid Razorpay payment address.');
  return parsed.href;
}