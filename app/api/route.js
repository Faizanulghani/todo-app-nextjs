import { connectDb } from "@/lib/mongoDb";

export async function GET() {
  await connectDb;
}
