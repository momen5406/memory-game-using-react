# Magic Match

A basic card matching game built to learn React, React hooks, and CSS transitions.

I built this while following [Net Ninja's React Memory Game tutorial on YouTube](https://www.youtube.com/playlist?list=PL4cUxeGkcC9iQ7g2eoNXHCJBBBz40S_Lm), with a few tweaks to add TypeScript support.

## What it does
- Shuffles a grid of 12 cards (6 matching pairs) on load or when clicking "New Game".
- Allows the user to click and flip two cards at a time.
- Checks if the two cards match.
- If they match, they stay face-up.
- If they don't match, they flip back over after a 1-second delay.
- Disables clicking other cards while a pair is being checked.
- Tracks and displays the number of turns taken.

## Tech Stack
- **React 19** for state management and UI structure.
- **TypeScript** for type checking.
- **Vite** for the build tool and dev server.
- **Vanilla CSS** for the grid layout and 3D card flipping animations.

## How to run it locally

First, clone this repository, then run:

```bash
# Install dependencies
npm install

# Start the local development server
npm run dev
```

Then open `http://localhost:5173` in your browser.

To run the linter or build the app:
```bash
# Run ESLint
npm run lint

# Build the project
npm run build
```

## Folder Structure
- `public/img/` - Image assets for card fronts and the card cover back.
- `src/components/Card.tsx` - Component for rendering an individual card and triggering clicks.
- `src/interface/card.inteface.ts` - TypeScript interface defining the card object shape (`ICard`).
- `src/App.tsx` - Main app component. Handles the game logic, matching checks, turns counter, and reset state.
- `src/App.css` - Custom styling for the card grid, button, and 3D flip card animations.
