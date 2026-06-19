import { defineField, defineType } from "sanity";

export default defineType({
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 }, validation: (r) => r.required() }),
    defineField({ name: "excerpt", title: "Excerpt", type: "text", rows: 3, validation: (r) => r.required().max(300) }),
    defineField({ name: "body", title: "Body", type: "array", of: [{ type: "block" }, { type: "image", options: { hotspot: true } }] }),
    defineField({ name: "author", title: "Author", type: "string", initialValue: "ITSolvez Team" }),
    defineField({ name: "publishedAt", title: "Published At", type: "datetime" }),
    defineField({ name: "category", title: "Category", type: "string", options: { list: ["Managed IT", "Cloud", "Cybersecurity", "Software Development", "Digital Marketing", "Compliance", "IT Strategy"] } }),
    defineField({ name: "featuredImage", title: "Featured Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "metaTitle", title: "SEO — Meta Title", type: "string", validation: (r) => r.max(65) }),
    defineField({ name: "metaDescription", title: "SEO — Meta Description", type: "text", rows: 2, validation: (r) => r.max(165) }),
    defineField({ name: "ogImage", title: "SEO — OG Image", type: "image" }),
    defineField({ name: "focusKeyword", title: "SEO — Focus Keyword", type: "string" }),
  ],
  preview: { select: { title: "title", subtitle: "category", media: "featuredImage" } },
});
