import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message: string;
}

function validatePayload(body: unknown): body is ContactPayload {
  if (!body || typeof body !== "object") return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.name === "string" && b.name.trim().length > 0 &&
    typeof b.email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b.email) &&
    typeof b.message === "string" && b.message.trim().length > 0
  );
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (!validatePayload(body)) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    const { name, email, phone, company, service, message } = body;

    // Log to console (replace with DB insert + email/CRM webhook)
    console.log("[Contact Form Submission]", {
      name, email, phone, company, service, message,
      timestamp: new Date().toISOString(),
      ip: req.headers.get("x-forwarded-for") ?? "unknown",
    });

    // TODO: Insert into Supabase leads table
    // const { error } = await supabase.from("leads").insert({...});

    // TODO: Send via Resend
    // await resend.emails.send({
    //   from: "noreply@itsolvez.com",
    //   to: "hello@itsolvez.com",
    //   subject: `New enquiry from ${name}`,
    //   html: `<p>...</p>`,
    // });

    // TODO: WhatsApp Business API notification
    // await sendWhatsAppNotification({ name, email, service, message });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[Contact API Error]", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
