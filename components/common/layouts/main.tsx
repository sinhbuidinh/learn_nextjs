import { LayoutProps } from '@/models';
import Link from 'next/link';
import React, { useEffect } from 'react';

export function MainLayout ({ children }: LayoutProps) {
  useEffect(() => {
    console.log('MainLayout mounting')

    return () => console.log('MainLayout unmounting')
  }, [])

  return (
    <div>
      <h1>Main Layout</h1>

      <Link href="/">
        <a>Home</a>
      </Link>
      <br/>
      <Link href="/about">
        <a>About</a>
      </Link>
      <div>{children}</div>
    </div>
  );
}
