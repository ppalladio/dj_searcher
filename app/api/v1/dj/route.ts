import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: Response) {
	const url = req.nextUrl.searchParams.get('url');
	console.log(url);
	return NextResponse.json({ message: 'Hello World' }, { status: 200 });

}
