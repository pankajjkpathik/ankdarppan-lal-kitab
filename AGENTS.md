<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

- Keep imported markup and interactive state in its route file, with source styling separate, to preserve capture fidelity.
- Preserve unimported same-site link paths on the preview origin; import additional pages only when requested.
- Use escaped-dot route filenames for imported .html addresses and keep each page stylesheet alongside its original styling to preserve direct links.
- Store explicitly requested local fallback media in public/site-assets so unavailable source URLs are never required to display the page.
- Keep checkout monetary calculations in a browser-safe integer-paise module with rule tests; payment execution must recalculate and verify on the server when connected.
- Keep unconnected checkout submission non-transactional and explicit about unavailable payment; never send discounted orders to a fixed-price payment link.
- Use Razorpay hosted payment links through the connected gateway, with server-priced integer amounts and API-fetched captured payment checks; callbacks alone never prove payment.
- Authorize guest order reads and updates with a hashed per-order capability; keep birth data inaccessible through public database clients and clear it on delivery.
- Resolve Facebook discount eligibility only from protected reviewed records, never customer claims; unverified checkout defaults to full price and discounted release is guarded in the database.
- Generate AI readings only by explicit paid-customer action with an atomic per-order claim and saved result; ambiguous failures require review rather than automatic replay.
- AI readings are labelled Lal Kitab-inspired guidance and must not invent calculated kundli facts when no ephemeris is supplied.

- Derive sitemap URLs from required route-level sitemap decisions; exclude checkout and order pages and omit lastmod without authoritative content timestamps.
- Discount approvals are managed only by admins (user_roles + has_role) through authenticated server functions; private verification codes are stored hashed and never shown again.
