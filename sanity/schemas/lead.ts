import { defineField, defineType } from "sanity";

export default defineType({
  name: "lead",
  title: "Lead / Enquiry",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "phone", title: "Phone", type: "string" }),
    defineField({ name: "company", title: "Company", type: "string" }),
    defineField({ name: "service", title: "Service Interest", type: "string" }),
    defineField({ name: "message", title: "Message", type: "text" }),
    defineField({ name: "source", title: "Source", type: "string", initialValue: "website-contact-form" }),
    defineField({ name: "status", title: "Status", type: "string", options: { list: ["New", "Contacted", "Qualified", "Closed Won", "Closed Lost"] }, initialValue: "New" }),
    defineField({ name: "submittedAt", title: "Submitted At", type: "datetime" }),
    defineField({ name: "notes", title: "Internal Notes", type: "text" }),
  ],
  preview: { select: { title: "name", subtitle: "email" } },
});
