import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({ name: "quote", title: "Quote", type: "text", rows: 4, validation: (r) => r.required() }),
    defineField({ name: "authorName", title: "Author Name or Role", type: "string", validation: (r) => r.required() }),
    defineField({ name: "authorCompany", title: "Company Description", type: "string" }),
    defineField({ name: "rating", title: "Rating (1–5)", type: "number", validation: (r) => r.min(1).max(5) }),
    defineField({ name: "photo", title: "Author Photo (optional)", type: "image" }),
    defineField({ name: "featured", title: "Show on Homepage?", type: "boolean", initialValue: false }),
  ],
  preview: { select: { title: "authorName", subtitle: "authorCompany" } },
});
