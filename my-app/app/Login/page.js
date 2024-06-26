"use client";

import { Theme } from '@radix-ui/themes';
import Link from 'next/link';

import { Button , Container  , Box } from '@radix-ui/themes';



function Login()
{
    return (
<Box style={{ background: 'var(--gray-a2)', borderRadius: 'var(--radius-6)' , margin:50 , height:600 , marginTop:100 , width:800 , marginLeft:296 , padding:20}}>
  <Container size="1">
   
  <div className="flex flex-col items-center justify-center h-screen relative -top-32 gap-4">
<h1 className="text-5xl font-bold mb-6">Login</h1>
<div className="flex flex-col space-y-4 gap-5">
    <input
        type="text"
        placeholder="      USN"
        className="w-64 h-12 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    />
    <input
        type="password"
        placeholder=".    Password"
        className="w-64 h-12 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    />
    <Link href="/App">
      <button
          className="w-64 h-12 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      
      >
          Submit
      </button>
    </Link>
</div>
</div>
  </Container>
</Box>
    );
}


export default function LoginPage() {
  return (
    <html>
      <body>
        <Theme>
          <Login />
        </Theme>
      </body>
    </html>
  );
}






