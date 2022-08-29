import { authApi } from '@/api'
import { useAuth } from '@/hooks'
import * as React from 'react'

export default function LoginPage () {
  const { profile, login, logout } = useAuth({
    revalidateOnMount: false, // when begin profile not load profile by swr
  })

  async function handleLoginClick() {
    try {
      await login()
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
    </div>
  );
}
