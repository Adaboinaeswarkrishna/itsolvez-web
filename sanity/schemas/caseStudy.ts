import { defineField, defineType } from "sanity";

export default defineType({
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "tag", title: "Service Tag", type: "string" }),
    defineField({ name: "industry", title: "Industry", type: "string", options: { list: ["Banking & Finance", "Capital Markets", "Manufacturing", "Healthcare", "Higher Education", "Logistics", "Enterprise Technology"] } }),
    defineField({ name: "summary", title: "Summary", type: "text", rows: 3 }),
    defineField({ name: "result", title: "Key Result", type: "string" }),
    defineField({ name: "timeframe", title: "Timeframe", type: "string" }),
    defineField({ name: "body", title: "Full Story", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "clientName", title: "Client Name (or description)", type: "string" }),
    defineField({ name: "featuredImage", title: "Featured Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "metaTitle", title: "SEO — Meta Title", type: "string" }),
    defineField({ name: "metaDescription", title: "SEO — Meta Description", type: "text" }),
  ],
  preview: { select: { title: "title", subtitle: "industry" } },
});
