import { NextResponse } from "next/server";
import { approveCategory, getApprovedCategories } from "@/lib/categorization-store";

export async function GET() {
  return NextResponse.json(getApprovedCategories());
}

export async function POST(request: Request) {
  const body = await request.json();
  const { transactionId, categoryId } = body as {
    transactionId?: string;
    categoryId?: string;
  };

  if (!transactionId || !categoryId) {
    return NextResponse.json(
      { error: "transactionId and categoryId are required" },
      { status: 400 }
    );
  }

  approveCategory(transactionId, categoryId);
  return NextResponse.json(getApprovedCategories());
}
