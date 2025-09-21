import { NextResponse } from "next/server";
import { AUTHORS } from "../data";
import type { Author } from "@/app/model/Author.interface";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const a = AUTHORS.find(x => x.id === Number(id));
  return NextResponse.json(a);
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const idx = AUTHORS.findIndex(a => a.id === Number(id));
  const patch = (await req.json()) as Partial<Author>;
  AUTHORS[idx] = { ...AUTHORS[idx], ...patch, id: Number(id) };
  return NextResponse.json(AUTHORS[idx]);
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const remaining = AUTHORS.filter(a => a.id !== Number(id));
  AUTHORS.length = 0;
  AUTHORS.push(...remaining);
  return NextResponse.json({ ok: true });
}
