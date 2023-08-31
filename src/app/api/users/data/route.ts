import { getDataFromToken } from "@/libs/getDataFromToken";
import { conn } from "@/db/conn";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/schema";

conn();

export async function GET(request: NextRequest) {
  try {
    const id = await getDataFromToken(request);
    const user = await User.findById({ _id: id }).select("-password");
    return NextResponse.json({ message: "data fetched", data: user });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
