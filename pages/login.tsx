import { authApi } from '@/api'
import * as React from 'react'

export default function LoginPage () {
  async function handleLoginClick() {
    try {
      await authApi.login({
        username: 'sinh-test-login',
        password: 'password-test'
      })
    } catch (err) {
      console.error('Fail to login', err)
    }
  }
  async function handleGetProfileClick() {
    try {
      await authApi.getProfile()
    } catch (err) {
      console.error('Fail to get profile', err)
    }
  }
  async function handleLogoutClick() {
    try {
      await authApi.logout()
    } catch (err) {
      console.error('Fail to logout', err)
    }
  }

  return (
    <div>
      <h1>Login Page</h1>

      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleGetProfileClick}>Get profile</button>
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
  );
}
