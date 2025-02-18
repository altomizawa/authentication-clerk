import { Tektur } from "next/font/google";
import Link from 'next/link';
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

import { auth, currentUser } from '@clerk/nextjs/server'


const tektur = Tektur({
  variable: "--font-tektur",
  subsets: ["latin"],
});


export const metadata = {
  title: "Cryptexion",
  description: "Simple authentication using Clerk",
};

export default async function RootLayout({ children }) {
  const { userId } = await auth();
  const user = await currentUser();
  const userEmail = user?.emailAddresses[0].emailAddress

  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${tektur.variable} antialiased`}
        >
          <SignedOut><div className='mt-12 px-12 flex items-center '>
              <ul className='flex w-full justify-between items-center'>
                <SignInButton>
                  <button className='text-black w-max border-2 border-black px-4 py-2 rounded-md duration-300 hover:bg-black hover:text-white' style={{ fontFamily: 'var(--font-tektur)' }}>LOG IN</button>
                </SignInButton>
                <li className='font-bold uppercase duration-300 hover:text-gray-400'>
                  <Link href="/">Home</Link>
                </li>
                <li className='font-bold uppercase duration-300 hover:text-gray-400'>
                  <Link href="/dashboard">Dashboard</Link>
                </li>
                <li className='font-bold uppercase duration-300 hover:text-gray-400'>
                  <Link href="/api/auth/signout">My Crypto</Link>
                </li>
              </ul>
            </div>
          </SignedOut>
          <SignedIn>
            <div className='mt-12 pl-8 flex '>
              <div className='flex items-center w-min'>
                <UserButton />
                <p>Hello, {userEmail}</p>

              </div>
              <ul className='flex w-full justify-around'>
                <li className='font-bold uppercase duration-300 hover:text-gray-400'>
                  <Link href="/">Home</Link>
                </li>
                <li className='font-bold uppercase duration-300 hover:text-gray-400'>
                  <Link href="/dashboard">Dashboard</Link>
                </li>
                <li className='font-bold uppercase duration-300 hover:text-gray-400'>
                  <Link href="/api/auth/signout">My Crypto</Link>
                </li>
              </ul>
            </div>
          </SignedIn>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}