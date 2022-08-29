import { LayoutProps } from '@/models'
import Link from 'next/link'
import * as React from 'react'
import { Auth } from '@/components/common';
import { useAuth } from '@/hooks';
import { useRouter } from 'next/router';

export function AdminLayout ({ children }: LayoutProps) {
  const { profile, logout } = useAuth()
  const router = useRouter()

  async function handleLogoutClick() {
    try {
      await logout()
      router.push('/login')
    } catch (err) {
      console.error('Fail to logout', err)
    }
  }

  return (
    <Auth>
      <h1>Admin Layout</h1>

      <p>Profile: {JSON.stringify(profile)}</p>
      <button onClick={handleLogoutClick}>Logout</button>

      <div>Sidebar</div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <br/>
      <Link href="/about">
        <a>About</a>
      </Link>
      <div>{children}</div>
    </Auth>
  );
}
