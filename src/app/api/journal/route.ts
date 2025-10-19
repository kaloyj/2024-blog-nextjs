import { readFile } from "fs/promises";
import { join } from "path";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const filePath = join(process.cwd(), "src", "content", "journal", "entries.mdx");
    const content = await readFile(filePath, "utf-8");
    
    return new NextResponse(content, {
      headers: {
        "Content-Type": "text/plain",
      },
    });
  } catch (error) {
    console.error("Error reading journal:", error);
    return new NextResponse("# Error\n\nFailed to load journal entries.", {
      status: 500,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
}

