// src/app/api/news/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.NEWS_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: "Missing API Key" }, { status: 500 });
  }

  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`,
  );

  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to fetch news" },
      { status: 500 },
    );
  }

  const data = await res.json();
  return NextResponse.json(data);
}
