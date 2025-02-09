
import { NextResponse } from "next/server"

export default function middleware2(NextRequest,isBan) {

    console.log(new URL("/matches", NextRequest.url));
    return NextResponse.redirect(new URL("/matches", NextRequest.url));

}


