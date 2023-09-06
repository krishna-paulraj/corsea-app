import { conn } from "@/db/conn";
import User from "@/models/schema";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

conn();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, username, password } = body;

    const checkUser = await User.findOne({ username });
    const checkEmail = await User.findOne({ email });

    if (checkUser || checkEmail) {
      return NextResponse.json({ message: "User already exists", error: true });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      name,
      email,
      username,
      password: hashedPassword,
    });

    await newUser.save();

    return NextResponse.json({
      message: "User Successfully Created",
      error: false,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
