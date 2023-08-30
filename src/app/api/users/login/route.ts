import { conn } from "@/db/conn";
import User from "@/models/schema";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

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

    // Token Data

    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    // Creating Token

    const token = jwt.sign(tokenData, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });

    const res = NextResponse.json({
      message: "Succesfully Logined",
      error: false,
    });

    res.cookies.set("token", token, {
      httpOnly: true,
    });

    return res;
  } catch (error: any) {
    NextResponse.json({ error: error.message });
  }
}
