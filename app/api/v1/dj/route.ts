import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	const url = req.nextUrl.searchParams.get('url');
	console.log(url);
	const res = await axios.get(`${process.env.BACKEND_API_URL}/y2s`, {params: {url}})

	console.log("🚀 ~ GET ~ res:", res)
}
