
import { NextResponse } from "next/server"
export async function middleware1(NextRequest,isBan) {
    try {
        console.log("am called -------middleware1");
            return NextResponse.redirect(new URL("/Ban", NextRequest.url));
    } catch (error) {
        console.log(error);
        return NextResponse.next();
    }
}
