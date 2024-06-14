import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { NextResponse } from 'next/server'

// export async function GET(req: NextApiRequest, res: NextApiResponse) {
//   axios.get('https://api-sandbox.yext.com/v2/accounts/me/connectors/connectorOne/pushData?v=20210428&api_key=f71911d8bde0caac2f637cbf4c53286f', {
//         headers: {
//             'Authorization': `Bearer ${process.env.YEXT_API_KEY}`,
//             'Content-Type': 'application/json'
//         }
//       })
//       .then(response => {
//         res.json(response.data);
//       })
//       .catch(error => {
//         res.status(error.response.status).json(error.response.data);
//       });
// }

// https://cdn.yextapis.com/v2/accounts/me/content/test1?api_key=8d1247cbeff0ad1fde2cb67eac702be2&v=20240612
export async function GET(request: Request) {
  const YEXT_BLOG_URL = process.env.YEXT_BLOG_URL;
  const YEXT_API_KEY = process.env.YEXT_API_KEY;
  const requestUrl = `${YEXT_BLOG_URL}`;

  if (!YEXT_BLOG_URL) {
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