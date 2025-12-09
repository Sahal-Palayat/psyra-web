import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const url = process.env.SHEET_WEBAPP_URL;

    if (!url) {
      return NextResponse.json(
        { status: false, message: "Sheet URL missing" },
        { status: 500 }
      );
    }

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  return NextResponse.json(
    { status: false, message },
    { status: 500 }
  );
}
}
