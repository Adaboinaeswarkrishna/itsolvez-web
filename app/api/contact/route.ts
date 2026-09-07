import { NextRequest, NextResponse } from "next/server";

const WAGTAIL_API = process.env.WAGTAIL_API_URL ?? process.env.NEXT_PUBLIC_WAGTAIL_API_URL ?? "http://localhost:8000";

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

    // Forward to Wagtail leads API
    const wagtailRes = await fetch(`${WAGTAIL_API}/api/leads/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        lead_type: "contact",
        name,
        email,
        phone: phone ?? "",
        company: company ?? "",
        service_interest: service ?? "",
        message,
      }),
    });

    if (!wagtailRes.ok) {
      // Log and still return success to user (don't expose backend errors)
      console.error("[Contact API] Wagtail lead save failed:", wagtailRes.status, await wagtailRes.text());
    } else {
      console.log("[Contact API] Lead saved to Wagtail:", { name, email, service });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[Contact API Error]", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
