
import { NextResponse } from "next/server"

export default function middleware2(NextRequest,isBan) {

    console.log("am called -------middleware2");
    return NextResponse.redirect(new URL("/matches", NextRequest.url));

}


