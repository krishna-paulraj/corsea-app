import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
export const getDataFromToken = (request: NextRequest) => {
  try {
    const res = request.cookies.get("token")?.value || "";
    const decode: any = jwt.verify(res, process.env.JWT_SECRET!);
    return decode.id;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
