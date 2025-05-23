import axios from "axios"
import { NextResponse } from "next/server"
import middleware2 from "./middleware/BanPageAccess";
import { middleware1 } from "./middleware/BanMiddleware";

export async function middleware(NextRequest) {
    try {
        //örnek middleware gelen kişi banlı mı diye kontrol eder 
        return NextResponse.next();
        // const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}api/CheckBan`);
        // const isBan = response.data.status
        // console.log("controling isBan");
        // if (!isBan && NextRequest.nextUrl.pathname === "/Ban") {
        //      return middleware2(NextRequest, isBan);
        // }
        // else if(isBan && NextRequest.nextUrl.pathname !== "/Ban")
        // {
        //     return middleware1(NextRequest, isBan);
        // }
        // return NextResponse.next();
    } catch (error) {
        
        return NextResponse.next();
    }
}

export const config = {
    matcher: [
        '/matches',
        '/Watch/:id*',  
        '/ThodexAdminLogin',
        '/Ban',
        "/"
    ]
}