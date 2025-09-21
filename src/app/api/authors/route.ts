import { NextResponse } from "next/server";
import type { Author } from "@/app/model/Author.interface";
import { AUTHORS } from "./data";

export async function GET() {
  return NextResponse.json(AUTHORS);
}

export async function POST(request: Request) {
  const body = (await request.json()) as Omit<Author, "id">;
  const id = Math.max(0, ...AUTHORS.map(a => a.id)) + 1;
  const created: Author = { id, ...body };
  AUTHORS.unshift(created);
  return NextResponse.json(created, { status: 201 });
}
