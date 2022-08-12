import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';

export interface ParamsProps {
}

export default function ParamsPage (props: ParamsProps) {
  const router = useRouter()

  return (
    <div>
        <h1>Post params page</h1>
        <p> Query: {JSON.stringify(router.query)}</p>
    </div>
  );
}

export async function getServerSideProps() {
  //fake 3s delay same with call api
  await new Promise((resolve) => setTimeout(resolve, 3000))
  // with default => no-cache => every users access will wait 3s fetch api 

  return {
    props: {}
  }
}
