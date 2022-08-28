// import axiosClient from 'api-client/axios-client'
import * as React from 'react'
import useSWR from 'swr'

export interface StudentDetailProps {
  studentId: string
}

export function StudentDetail ({ studentId }: StudentDetailProps) {
  const { data, error, mutate, isValidating } = useSWR(`/students/${studentId}`, {
    revalidateOnFocus: false,
    dedupingInterval: 10000,//ms
  })
  // way define fetcher
  // const {} = useSWR('path_save_students', () => axiosClient.get(`/students/${studentId}`))

  function handleMutateClick() {
    //options
    // true: re-validate below
    // false: not re-validate
    mutate({ name: 'sinh-test-mutate' }, false)
  }

  return (
    <div>
      Name: {data?.name || '--'}
      <button onClick={handleMutateClick}>Mutate</button>
    </div>
  )
}
