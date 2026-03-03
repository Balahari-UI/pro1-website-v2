// src/app/api/get-openings/route.js
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Darwinbox API endpoint
    const response = await fetch("DARWINBOX_API_ENDPOINT", {
      headers: {
        Authorization: `Bearer ${process.env.DARWINBOX_API_KEY}`,
        "Content-Type": "application/json",
      },
    });

    const text = await response.text();
    console.log("Darwinbox response:", text);

    let jobs = [];
    try {
      jobs = JSON.parse(text);
    } catch (err) {
      console.error("Failed to parse JSON:", err);
    }

    return NextResponse.json(jobs);
  } catch (error) {
    console.error("Error fetching Darwinbox jobs:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
