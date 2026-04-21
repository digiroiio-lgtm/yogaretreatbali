import { NextResponse } from "next/server";

function isValidEmail(value: string) {
  const [localPart, domainPart] = value.split("@");

  if (!localPart || !domainPart || value.split("@").length !== 2) {
    return false;
  }

  if (localPart.startsWith(".") || localPart.endsWith(".") || localPart.includes("..")) {
    return false;
  }

  if (domainPart.startsWith(".") || domainPart.endsWith(".") || domainPart.includes("..")) {
    return false;
  }

  return /^[A-Za-z0-9._%+-]+$/.test(localPart) && /^[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(domainPart);
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const budget = String(formData.get("budget") ?? "").trim();
  const dates = String(formData.get("dates") ?? "").trim();

  if (!name || !email || !budget || !dates || !isValidEmail(email)) {
    return NextResponse.json({ success: false, message: "Invalid lead payload" }, { status: 400 });
  }

  return NextResponse.json({
    success: true,
    message: "Lead captured",
  });
}
