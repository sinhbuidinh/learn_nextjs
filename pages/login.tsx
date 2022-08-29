import { authApi } from '@/api'
import { useAuth } from '@/hooks'
import { useRouter } from 'next/router'
import React, {} from 'react'

export default function LoginPage () {
  const router = useRouter()
  const { profile, login, logout } = useAuth({
    revalidateOnMount: false, // when begin profile not load profile by swr
  })

  async function handleLoginClick() {
    try {
      await login()
      console.log('login success -> go to about')
      router.push('/about')
    } catch (err) {
      console.error('Fail to login', err)
    }
  }

  async function handleLogoutClick() {
    try {
      await logout()
    } catch (err) {
      console.error('Fail to logout', err)
    }
  }

  return (
    <div>
      <h1>Login Page</h1>

      <p>Profile: {JSON.stringify(profile || {}, null, 4)}</p>

      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleLogoutClick}>Logout</button>
      <button onClick={() => router.push('/about')}>Go to about</button>
    </div>
  );
}
