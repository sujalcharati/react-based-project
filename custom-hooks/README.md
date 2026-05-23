# Custom Hooks Practice

Build 5 custom React hooks from scratch. Each hook file in `src/hooks/` is a
stub with the contract spelled out — you write the implementation. The demo
for each hook in `src/demos/` is wired up, so it starts working the moment
your hook is correct.

## Run it

```bash
npm install
npm run dev
```

## Order (easy → hard)

1. `useToggle` ⭐
2. `usePrevious` ⭐⭐
3. `useLocalStorage` ⭐⭐⭐
4. `useDebounce` ⭐⭐⭐
5. `useFetch` ⭐⭐⭐⭐

## What you'll learn

- `useToggle` — functional state updates (`setX(prev => !prev)`)
- `usePrevious` — `useRef` for values that survive renders without triggering them
- `useLocalStorage` — lazy `useState` initializer + syncing state to a side effect
- `useDebounce` — `useEffect` cleanup (the key insight that trips most people up)
- `useFetch` — async effects + the race-condition cleanup pattern

Work top-to-bottom. Don't peek at solutions online — the difficulty curve is
the point.
