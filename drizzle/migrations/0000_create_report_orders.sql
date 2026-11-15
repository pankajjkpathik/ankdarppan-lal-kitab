CREATE TABLE public.report_orders (
 id uuid PRIMARY KEY,
 access_hash text NOT NULL,
 details jsonb,
 coupon_code text,
 amount_paise integer NOT NULL CHECK (amount_paise IN (94100,75280,47050)),
 currency text NOT NULL DEFAULT 'INR' CHECK (currency='INR'),
 status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','paid','delivered','failed')),
 razorpay_link_id text UNIQUE,
 razorpay_payment_id text UNIQUE,
 created_at timestamptz NOT NULL DEFAULT now(),
 paid_at timestamptz,
 delivered_at timestamptz
);
GRANT ALL ON public.report_orders TO service_role;
ALTER TABLE public.report_orders ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Payment service manages private report orders" ON public.report_orders FOR ALL TO service_role USING (true) WITH CHECK (true);
CREATE FUNCTION public.clear_delivered_report_details() RETURNS trigger LANGUAGE plpgsql SET search_path=public AS $$ BEGIN IF NEW.status='delivered' THEN NEW.details=NULL; NEW.delivered_at=COALESCE(NEW.delivered_at,now()); END IF; RETURN NEW; END; $$;
CREATE TRIGGER clear_delivered_report_details BEFORE UPDATE ON public.report_orders FOR EACH ROW EXECUTE FUNCTION public.clear_delivered_report_details();