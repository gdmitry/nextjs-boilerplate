import React from 'react';
import { useRouter } from 'next/router';

/**
 * Catches all params in url route
 * @constructor
 */
const Page = () => {
  const router = useRouter();
  const { params } = router.query;

  return <h1>Note Page: {params}</h1>;
};

export default Page;
