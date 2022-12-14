import { authApi } from '@/api'
import { ProfileProps } from 'models/auth';
import useSWR from 'swr'
import { PublicConfiguration } from 'swr/dist/types'

const ONE_HOUR_MS = 60 * 60 * 1000

interface AuthReturnInterface {
  firstLoading:boolean,
  profile: ProfileProps|any,
  error: null|Error,
  login: any,
  logout: any
}

export function useAuth(options?: Partial<PublicConfiguration>): AuthReturnInterface {
  const { data: profile, error, mutate } = useSWR('/profile', {
    dedupingInterval: ONE_HOUR_MS,//6s
    revalidateOnFocus: false,
    ...options,
  })

  const firstLoading = (profile === undefined && error === undefined)

  async function login() {
    await authApi.login({
      username: 'sinh-hook-login',
      password: '123123'
    })
    //when empty => trigger user profile
    await mutate()
    // await => wait call api get profile done for update data: profile
  }

  async function logout() {
    await authApi.logout()
    //second params will not call api again
    await mutate({}, false)
  }

  return {
    firstLoading,
    profile,
    error,
    login,
    logout
  }
}