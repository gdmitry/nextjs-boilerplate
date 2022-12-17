import React from 'react';
import { useRouter } from 'next/router';
const Page = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Note Page1111111: {id}</h1>
      <button onClick={() => router.push('/')}>Go Home</button>
    </div>
  );
};

export default Page;
