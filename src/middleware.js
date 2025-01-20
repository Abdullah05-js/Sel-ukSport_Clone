import axios from "axios"
import { NextResponse } from "next/server"
import middleware2 from "./middleware/BanPageAccess";
import { middleware1 } from "./middleware/BanMiddleware";

export async function middleware(NextRequest) {
    try {
        const response = await axios.post(process.env.URL ? process.env.URL : "http://localhost:5000/api/CheckBan");
        console.log(response.data);
        const isBan = response.data.status
        console.log(isBan,NextRequest.nextUrl.pathname,!isBan && NextRequest.nextUrl.pathname === "/Ban");
        if (!isBan && NextRequest.nextUrl.pathname === "/Ban") {
            return middleware2(NextRequest, isBan);
        }
        else if(isBan && NextRequest.nextUrl.pathname !== "/Ban")
        {
            return middleware1(NextRequest, isBan);
        }



        return NextResponse.next();
    } catch (error) {
        console.log(error);
        return NextResponse.next();
    }
}

export const config = {
    matcher: [
        '/matches',
        '/Watch/:id*',  
        '/aposportAdminLogin',
        '/Ban',
        "/"
    ]
}