# VIRSA

**Punjabi Cinema. One Home.**

VIRSA is a premium Android-first Punjabi cinema discovery app built with React Native + Expo Router.

## Current features

- Premium dark cinematic UI
- Featured home catalog and movie rails
- Search by title, year and genre
- Movie details screen
- Persistent Favorites
- Profile and discovery navigation
- Official YouTube playback flow
- EAS Android build profiles

## Content model

VIRSA does not download or re-host movie files. Each playable title can store an authorized YouTube video ID and the app opens the official YouTube video.

Only add movies/videos that are officially uploaded or otherwise authorized for linking.

## Run locally

```bash
npm install
npx expo start
```

Then use Expo Go or an Android development build.

## Android build

Install EAS CLI and sign in to your Expo account:

```bash
npm install -g eas-cli
eas login
eas build --platform android --profile preview
```

Use the `preview` profile for an installable internal Android build. Use `production` when the app is ready for release.

## Project structure

- `app/home.tsx` — home/catalog
- `app/search.tsx` — search and genre filters
- `app/movie/[id].tsx` — movie details
- `app/watch/[id].tsx` — official YouTube watch flow
- `app/favorites.tsx` — saved movies
- `app/profile.tsx` — profile/discovery
- `data/movies.ts` — movie catalog
- `lib/favorites.ts` — persistent favorites storage
