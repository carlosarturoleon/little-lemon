# Little Lemon Restaurant

A React web application for the Little Lemon Mediterranean restaurant in Chicago. Built as the capstone project for the Meta Frontend Developer Professional Certificate.

## Features

- **Homepage** — Hero section, weekly specials, customer testimonials, and about section
- **Table Reservations** — Booking form with real-time available time slots fetched from an API
- **Form Validation** — Client-side validation with inline error messages and visual field highlighting
- **Multi-page Navigation** — Client-side routing with React Router (About, Menu, Order Online, Login)
- **Accessible UI** — ARIA labels, semantic HTML, and keyboard-navigable components
- **Responsive Design** — Mobile-first layout using CSS Flexbox and Grid

## Tech Stack

- [React 19](https://react.dev/) — UI library
- [React Router DOM v7](https://reactrouter.com/) — Client-side routing
- [Create React App](https://create-react-app.dev/) — Project scaffolding
- [React Testing Library](https://testing-library.com/) + [Jest](https://jestjs.io/) — Unit testing

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (included with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/carlosarturoleon/little-lemon.git
cd little-lemon

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000).

### Running Tests

```bash
npm test
```

Runs the 21 unit tests covering:
- Form validation logic (date, guests)
- HTML5 accessibility attributes on form fields
- API integration (`initializeTimes`, `updateTimes`)
- Form submission behavior

### Building for Production

```bash
npm run build
```

Outputs an optimized production build to the `/build` folder.

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Site header with logo and navigation
│   ├── Nav.js             # Navigation links with active state highlight
│   ├── Main.js            # Route definitions and booking state (useReducer)
│   ├── Footer.js          # Site footer with nav, contact, social links
│   ├── Hero.js            # Homepage hero section
│   ├── Specials.js        # Weekly specials dish cards
│   ├── Testimonials.js    # Customer review cards
│   ├── About.js           # About section with owner photos
│   └── BookingForm.js     # Controlled booking form with validation
├── pages/
│   ├── HomePage.js        # Composes Hero, Specials, Testimonials, About
│   ├── BookingPage.js     # Table reservation page
│   ├── ConfirmedBooking.js# Booking confirmation page
│   ├── AboutPage.js       # About page with team section
│   ├── MenuPage.js        # Full menu organized by category
│   ├── OrderPage.js       # Online order page
│   └── LoginPage.js       # Login form
├── __mocks__/
│   └── react-router-dom.js# CJS mock for Jest ESM compatibility
├── App.js                 # Root component
├── App.css                # Global styles and brand design tokens
└── index.js               # Entry point with BrowserRouter
```

## API Integration

The app integrates with the Little Lemon booking API loaded via a `<script>` tag in `public/index.html`:

- `window.fetchAPI(date)` — Returns available time slots for a given date
- `window.submitAPI(formData)` — Submits a reservation and returns `true` on success

Both calls are guarded with `typeof` checks and fall back to default values if the API script is unavailable (e.g. in test environments).

## Accessibility

- Semantic HTML5 elements throughout (`header`, `nav`, `main`, `footer`, `section`, `article`, `address`)
- `aria-label` on all interactive and landmark elements
- `aria-required` and `aria-describedby` on form fields
- Active navigation link indicated visually and via DOM class
- Error messages linked to their fields via `aria-describedby`
- Visual error highlighting (red border) on invalid form fields
