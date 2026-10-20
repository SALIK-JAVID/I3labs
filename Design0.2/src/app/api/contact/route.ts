import { NextResponse } from "next/server";
import { validateContact, type ContactInput } from "@/lib/contact";

export async function POST(request: Request) {
  let body: Partial<ContactInput>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body." }, { status: 400 });
  }

  const errors = validateContact(body);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  // Integration point: forward to email (Resend, SES), a CRM or a database here.
  console.info("[contact] new enquiry", {
    name: body.name,
    email: body.email,
    institution: body.institution,
    interest: body.interest,
  });

  return NextResponse.json({ ok: true });
}
