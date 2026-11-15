import { z } from 'zod';
export const readingSchema = z.object({
  title: z.string(), overview: z.string(), limitations: z.string(),
  themes: z.array(z.object({ title: z.string(), insight: z.string() })),
  remedies: z.array(z.object({ title: z.string(), action: z.string(), reason: z.string(), caution: z.string() })),
  closing: z.string(),
});
export type PersonalReading = z.infer<typeof readingSchema>;