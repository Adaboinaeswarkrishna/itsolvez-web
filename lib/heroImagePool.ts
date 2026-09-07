// Curated, verified-live Unsplash photos used to give city hero backgrounds visual
// variety instead of one image repeated across dozens of pages. Selection is
// deterministic per slug (same city always gets the same image on every build/request)
// rather than random, so the page doesn't visually flicker between deploys.
const CITY_HERO_POOL = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
  "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df",
  "https://images.unsplash.com/photo-1449824913935-59a10b8d2000",
  "https://images.unsplash.com/photo-1444723121867-7a241cacace9",
  "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b",
  "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
  "https://images.unsplash.com/photo-1554469384-e58fac16e23a",
  "https://images.unsplash.com/photo-1519501025264-65ba15a82390",
];

function hashString(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h << 5) - h + s.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

export function pickCityHeroImage(seed: string, params = "auto=format&fit=crop&w=1920&q=80"): string {
  const base = CITY_HERO_POOL[hashString(seed) % CITY_HERO_POOL.length];
  return `${base}?${params}`;
}
