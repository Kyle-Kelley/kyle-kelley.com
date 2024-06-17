import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const YEXT_API_URL = process.env.YEXT_API_URL;
  const YEXT_API_KEY = process.env.YEXT_API_KEY;
  const requestUrl = `${YEXT_API_URL}?api_key=${YEXT_API_KEY}&v=20240612`;

  if (!YEXT_API_URL || !YEXT_API_KEY) {
    return NextResponse.json({ message: 'Missing API URL or API Key' }, { status: 400 });
  }
  try {
    const apiResponse = await fetch(requestUrl);
    if (!apiResponse.ok) {
      throw new Error(`Yext API request failed: ${apiResponse.statusText}`);
    }

    const data = await apiResponse.json();
    return NextResponse.json({
      message: 'Yext Success',
      data: data,
    });
  } catch (error: any) {
    console.error('Yext API request error:', error);
    return NextResponse.json({ 
      message: 'Yext API request failed', 
      error: error.message }, 
      { status: 500 });
  }

}

