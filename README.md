# Life Inventory

**HCI Semester Project — Group 13**

An external brain for your physical possessions. Life Inventory is a household item tracker that lets you record where things live, search for them quickly, and manage quantities across rooms in your home.

**Team:** Sonal Dattraj Doiphode, Richard Huang, Samuel Damon

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| UI Library | React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion |
| Icons | Lucide React |
| AI | Google Gemini API |

---

## Application Routes

| Route | Description |
|---|---|
| `/` | Hub — landing page and navigation |
| `/phase3` | Early interactive prototypes |
| `/phase4` | Paper prototyping phase |
| `/phase6` | React MVP (the main application) |

---

## Phase 6 MVP Features

### Item Management
- Add a new item with name, room, specific spot, quantity, and labels/hashtags
- Addition flow ends with a "Catalogued" confirmation screen
- Edit any item's room, spot, and quantity
- Delete an item from the inventory
- Item detail screen showing location, last updated timestamp, and a "Found it!" confirmation action

### Browse and Search
- Browse all items organized by room: Bedroom, Bathroom, Kitchen, Living Room, Office, Garage
- Search items by name or label
- Filter search results by room
- Voice search UI (mock interface)

### Stock Management
- View all items with current quantities
- Filter stock view by room
- Sort by Name, Quantity (ascending), or Quantity (descending)
- Items at zero quantity display a red warning state

### Profile
- Profile screen with expandable account settings panels

---

## Running Locally

**Prerequisites:** Node.js 18+

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env.local` file and add your Gemini API key:
   ```
   GEMINI_API_KEY=your_api_key_here
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Context

This project was developed across multiple phases as part of an HCI course, progressing from concept and paper prototypes through to a functional React MVP. Each route (`/phase3`, `/phase4`, `/phase6`) corresponds to a distinct deliverable phase.
