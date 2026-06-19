import { defineField, defineType } from "sanity";

export default defineType({
  name: "jobOpening",
  title: "Job Opening",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Job Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "department", title: "Department", type: "string", options: { list: ["Managed IT", "Cloud & Infrastructure", "Cybersecurity", "Software Development", "Web Development", "Digital Marketing", "HR & Operations", "Sales"] } }),
    defineField({ name: "type", title: "Employment Type", type: "string", options: { list: ["Full-time", "Part-time", "Contract", "Internship"] } }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "description", title: "Job Description", type: "text", rows: 5 }),
    defineField({ name: "requirements", title: "Requirements", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "open", title: "Currently Open?", type: "boolean", initialValue: true }),
    defineField({ name: "postedDate", title: "Posted Date", type: "date" }),
  ],
  preview: { select: { title: "title", subtitle: "department" } },
});
