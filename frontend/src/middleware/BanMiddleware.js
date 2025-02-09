
import { NextResponse } from "next/server"
export async function middleware1(NextRequest,isBan) {
    try {
            console.log(new URL("/Ban", NextRequest.url));
            return NextResponse.redirect(new URL("/Ban", NextRequest.url));
    } catch (error) {
       
        return NextResponse.next();
    }
}
