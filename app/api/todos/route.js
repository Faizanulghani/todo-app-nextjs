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

export async function PATCH(req) {
  await connectDb();
  const { id, completed, title } = await req.json();
  const updateTodo = await todo.findByIdAndUpdate(id, { completed });
  return NextResponse.json(updateTodo);
}

export async function DELETE(req) {
  await connectDb();
  const { id } = await req.json();
  await todo.findByIdAndDelete(id);
}
