import { todo } from "@/lib/models/Todo";
import { connectDb } from "@/lib/mongoDb";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDb();
  let allTodo = await todo.find();
  return NextResponse.json(allTodo);
}

export async function POST(req) {
  await connectDb();
  const body = await req.json();
  const addTodo = await todo.create({ title: body.title });
  return NextResponse.json(addTodo);
}
