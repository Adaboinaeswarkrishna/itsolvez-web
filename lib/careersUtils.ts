export function slugifyJobTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/[()/]/g, " ")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}
