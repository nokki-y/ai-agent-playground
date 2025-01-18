import { NextResponse } from 'next/server';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function GET() {
  await sleep(Math.random() * 1500 + 500);
  return NextResponse.json({ message: 'Hello world!' });
} 