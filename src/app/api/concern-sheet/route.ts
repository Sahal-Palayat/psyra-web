import { NextResponse } from "next/server";

export async function POST(req:Request){
    try{
        const body = await req.json();
        const url = process.env.CONCERN_SHEET_URL;
        console.log(url);
        if (!url){
            return NextResponse.json(
                {status:false,message:"Sheet URL missing"},
                {status:500}
            );
        }
        const response = await fetch(url,{
            method:"POST",
            redirect:"follow",
            headers:{"Content-Type":"text/plain"},
            body:JSON.stringify(body),
        });
        console.log("Google status:", response.status);
        const text = await response.text();
        console.log("Google body:", text); 

        const data = JSON.parse(text);
        return NextResponse.json(data);
    }catch(error){
        const message = error instanceof Error ? error.message : String(error);
        return NextResponse.json({status:false,message},{status:500});
    }
}