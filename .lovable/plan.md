# Payments Setup Plan for ApexSalus

Since you'll be selling a mix (one-time consultations, recurring retainers, and digital products), **Stripe via Lovable's built-in payments** is the right fit — no Stripe account or API key setup needed, supports one-time + subscriptions out of the box, and handles tax automation if you want it.

## Prerequisites
1. **Pro plan** — Payments requires Pro or higher.
2. **Lovable Cloud** — Enabled automatically; powers the secure checkout backend and webhook handler.

## Step 1 — Enable Lovable Cloud
Provisions the backend (database + edge functions) needed for Stripe checkout sessions and webhook verification.

## Step 2 — Enable Stripe Payments
Sets up a Stripe **test environment** instantly so you can run end-to-end test purchases with no real money. You can claim/connect your live Stripe account later to start accepting real payments.

## Step 3 — Choose tax handling
Pick one (can be changed per checkout later):
- **Full compliance** (Stripe is merchant of record, handles tax filing) — +3.5% per transaction, digital-only
- **Tax calculation only** (Stripe calculates + collects, you file) — +0.5%
- **No tax automation** (you handle everything)

Recommended for consulting services: **Tax calculation only**.

## Step 4 — Create your products
You'll give me your offerings and prices and I'll create them in Stripe. Suggested starter catalog:
- **Free 30-min consultation** (lead magnet, $0 — booking only)
- **Single consulting session** (one-time, e.g. $250)
- **Monthly retainer — Standard** (subscription, e.g. $1,500/mo)
- **Monthly retainer — Premium** (subscription, e.g. $3,500/mo)
- **Digital product / guide** (one-time, e.g. $49)

## Step 5 — Build checkout UI
- New **Pricing/Services** page with cards for each offering
- "Buy" / "Subscribe" buttons → Stripe Checkout (hosted, secure)
- **Success** and **Cancel** return pages
- Webhook edge function to record completed purchases in the database
- Optional: simple **Customer portal** link so subscribers can manage/cancel their retainer

## Step 6 — Add light auth (recommended for subscriptions)
Email/password login so subscribers can view their plan and access gated content. Skip if you only want one-off checkouts.

## Technical details
- `enable_stripe_payments` provisions the Stripe connection + secrets
- `batch_create_product` creates products/prices in Stripe
- Edge function `create-checkout` creates Stripe Checkout sessions
- Edge function `stripe-webhook` (verify_jwt=false) records `orders` / `subscriptions` rows on `checkout.session.completed` and `customer.subscription.*` events
- `orders` and `subscriptions` tables in Lovable Cloud with RLS tying rows to `auth.uid()`

## What I need from you to proceed
1. Confirm you're on the **Pro plan** (or ready to upgrade)
2. Confirm to enable **Lovable Cloud** + **Stripe payments**
3. Your **product list with prices** (or approve the suggested starter catalog above)
4. Tax handling preference (default: **Tax calculation only**)
5. Whether to include **user login** for subscribers (default: **yes**)