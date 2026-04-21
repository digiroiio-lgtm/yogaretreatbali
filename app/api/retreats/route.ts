import { NextResponse } from "next/server";
import { retreats } from "@/lib/data";

export async function GET() {
  return NextResponse.json({ data: retreats });
}
