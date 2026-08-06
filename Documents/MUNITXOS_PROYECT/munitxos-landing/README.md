# MUNCHOS Landing Page & Owner Dashboard
**"Pinchos aus MUNCHEN" — Boutique Catering & Smart Availability Engine**

Public marketing site and private login-protected **Owner / Staff Control Dashboard (`/#admin`)**.

---

## 🔑 Login Credentials (Admin Area)

Access the dashboard by appending `/#admin` to the site URL (or clicking **Acceso Propietario / Admin** in the footer).

| Role | Demo Email | Demo Password | Permitted Actions |
|---|---|---|---|
| **Owner (Propietario)** | `owner@munchos.de` | `owner` | Full access: Monthly & Annual Heatmap Calendar, Reservation List, Analytics & Financial Metrics, Gourmet Products & Promotions CMS, User & Staff Management. |
| **Staff (Personal)** | `staff@munchos.de` | `staff` | Restricted access: View Monthly & Annual Calendar, view & manage reservations (confirm/pending/cancel), add manual bookings. *Hidden: Revenue metrics, CMS editing, user creation.* |

---

## 📅 Smart Availability & Alternative Dates Engine

The booking widget on the public site features a real-time capacity checker (`src/services/availabilityEngine.js`).

### Capacity Rules
- **Max Events Per Day:** `2` events/day (default)
- **Max Guests Per Day:** `60` comensales/day (default)

### Alternative Dates Selector (Hard Requirement)
If a user selects a date that has reached capacity:
1. The form flags the date as unavailable with the specific reason.
2. An **Alternative Dates Suggester** component searches +/- 14 days and displays the **nearest 3 to 5 open available dates**.
3. Clicking an alternative date automatically selects it and allows the client to submit their reservation request.

---

## 🎨 CMS: Products & Promotions Banner

### Gourmet Delicatessen Products
Located in **CMS Tienda Gourmet** in the admin dashboard:
- Create, edit, delete, and toggle visibility (`active: true/false`).
- Public site reads products live at runtime; hiding an item removes it from the public view instantly without a redeploy.

### Promotions Banner & Carousel System
Located in **CMS Banners Promo** in the admin dashboard:
- Each promotion includes: headline, body text, image, CTA text/link, active toggle, and optional start/end dates.
- **Auto-Detection Mode:**
  - **1 active promotion:** Renders as a single static hero banner.
  - **2+ active promotions:** Automatically renders as an interactive rotating carousel with auto-slide and manual controls.

---

## 🛠️ Developer Setup & Commands

```bash
cd /Users/osmac/Documents/MUNITXOS_PROYECT/munitxos-landing

# Install dependencies
npm install

# Run local development server
npm run dev

# Build for production
npm run build
```
