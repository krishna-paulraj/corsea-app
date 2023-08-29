import { conn } from "@/db/conn";
import User from "@/models/schema";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

conn();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username, password } = body;

    const user = await User.findOne({ username });

    if (!user)
      return NextResponse.json({ message: "user not found", error: true });

    // Bcrypt

    const byPass = await bcryptjs.compare(password, user.password);

    if (!byPass)
      return NextResponse.json({ message: "invaid pass", error: true });

    return NextResponse.json({ message: "Succesfully Logined", error: false });
  } catch (error: any) {
    NextResponse.json({ error: error.message });
  }
}
