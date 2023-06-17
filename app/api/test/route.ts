import clientPromise from "../../lib/mongodb"
import { NextResponse } from "next/server"

export async function GET(res: Response) {
  const client = await clientPromise
  const db = client.db("bamzi")

  const products = await db.collection("products").find({}).toArray()

  return NextResponse.json(products)
}
