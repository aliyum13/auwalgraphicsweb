# Auwal Graphics website

Print on demand clothing site for Auwal Graphics (auwalgraphics.com). React + Vite, deployed on Render.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Order automation with n8n

The order page (`/order`, `src/pages/Order/Order.jsx`) sends every order to an n8n webhook.

### 1. Create the webhook in n8n

- Add a **Webhook** node.
  - HTTP Method: `POST`
  - Path: e.g. `order`
  - Respond: `Immediately` (the site only needs a 200 response)
  - Options → **Allowed Origins (CORS)**: `https://auwalgraphics.com` (add `http://localhost:5173` for testing)
  - Uploaded designs arrive as binary data named `design_file_1`, `design_file_2`, …; the other fields arrive under `body`.
- Activate the workflow and copy the **Production URL**.

### 2. Tell the website the webhook URL

Set this environment variable on Render (Environment tab), then redeploy:

```
VITE_N8N_ORDER_WEBHOOK=https://YOUR-N8N-DOMAIN/webhook/order
```

Vite reads it at build time, so a redeploy is required after changing it. See `.env.example` for local testing.

If the variable is not set, or the webhook fails, the form opens WhatsApp with the order details instead, so no order is lost.

### 3. What n8n receives

`multipart/form-data` with these fields:

| Field | Example | Notes |
|---|---|---|
| `order_id` | `AG-261123-7K2P` | Generated on the site; shown to the customer |
| `submitted_at` | `2026-11-23T16:28:45.474Z` | ISO time (UTC) |
| `product` | `Cap` | T-Shirt, Polo Shirt, Hoodie, Sweatshirt, Long-Sleeve T-Shirt, Cap, Other |
| `product_other` | | Filled when product is `Other` |
| `colour` | `Navy` | White, Black, Navy, Grey, Red, Other |
| `colour_other` | | Filled when colour is `Other` |
| `sizes` | `{"M":2,"L":1}` | JSON string, size → quantity. Caps use `{"One size":250}` |
| `total_quantity` | `3` | |
| `print_position` | `Front, Side & Back` | Any combination of Front, Side, Back |
| `needs_design_help` | `yes` / `no` | |
| `design_notes` | `Logo on front…` | Free text |
| `delivery_method` | `Delivery within Abuja` | Always this for now (Abuja only) |
| `delivery_address` | | Required; address in Abuja |
| `deadline` | `2026-12-01` | Optional date |
| `customer_name` | | |
| `customer_phone` | | WhatsApp number |
| `customer_email` | | Optional |
| `summary` | | Ready-made plain-text summary to forward on WhatsApp/email |
| `design_file_count` | `2` | Number of uploaded design files (0–5) |
| `design_file_1` … `design_file_5` | (files) | Optional uploads, max 10 MB each |

### Suggested workflow

Webhook → save the order (Google Sheets / Airtable) → save the design files (Google Drive) → notify the business on WhatsApp/Telegram/email with `summary` → send the customer a confirmation with their `order_id`.
