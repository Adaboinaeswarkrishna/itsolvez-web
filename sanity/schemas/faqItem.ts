import { defineField, defineType } from "sanity";

export default defineType({
  name: "faqItem",
  title: "FAQ Item",
  type: "document",
  fields: [
    defineField({ name: "question", title: "Question", type: "string", validation: (r) => r.required() }),
    defineField({ name: "answer", title: "Answer", type: "text", rows: 4, validation: (r) => r.required() }),
    defineField({ name: "category", title: "Category", type: "string", options: { list: ["Managed IT & Support", "Cloud & Infrastructure", "Cybersecurity", "Software & Web Development", "Pricing & Engagement", "General"] } }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
  preview: { select: { title: "question", subtitle: "category" } },
});
