import { NextResponse } from 'next/server';

// Define the middleware function
export function middleware() {
    // Retrieve the current response
    const res = NextResponse.next();

    // Add the CORS headers to the response
    res.headers.append('Access-Control-Allow-Credentials', 'true');
    res.headers.append('Access-Control-Allow-Origin', 'http://localhost:3000'); // Replace this with your actual origin
    res.headers.append('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT');
    res.headers.append(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    return res;
}

// Specify the path regex to apply the middleware to
export const config = {
    matcher: '/projects/:path*',
};
