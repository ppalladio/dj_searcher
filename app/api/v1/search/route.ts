import { NextResponse } from 'next/server';

export async function GET(req: Request, res: Response) {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get('s');

    return new NextResponse(JSON.stringify({ message: 'Hello World' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}
