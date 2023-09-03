import { conn } from "@/db/conn";
import { NextResponse, NextRequest } from "next/server";
import User from "@/models/schema";
import bcryptjs from "bcryptjs";

conn();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { token, pass } = reqBody;

    const user = await User.findOne({
      verifyUserToken: token,
      verifyUserTokenExpiry: { $gt: Date.now() },
    });

    const f_user = await User.findOne({
      forgotPassToken: token,
      forgotPassTokenExpiry: { $gt: Date.now() },
    });

    if (!user && !f_user)
      return NextResponse.json({ message: "Invalid token !" }, { status: 400 });

    if (user) {
      user.isVerified = true;
      user.verifyUserToken = undefined;
      user.verifyUserTokenExpiry = undefined;
      await user.save();
      return NextResponse.json({ message: "email verified", success: true });
    } else {
      const salt = await bcryptjs.genSalt(10);
      const hashedPassword = await bcryptjs.hash(pass, salt);

      f_user.password = hashedPassword;
      f_user.forgotPassToken = undefined;
      f_user.forgotPassTokenExpiry = undefined;
      await user.save();
      return NextResponse.json({ message: "Password Changed", success: true });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
