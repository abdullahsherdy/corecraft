import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({ message: 'Contact form not yet implemented.' }, { status: 501 });
}
