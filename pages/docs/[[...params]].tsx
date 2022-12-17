import React from 'react';
import { useRouter } from 'next/router';

/**
 * Catches all params in url route
 * @constructor
 */
const Page = () => {
  const router = useRouter();
  const { params } = router.query;

  return <h1>Catches all /docs routers including parent route {params}</h1>;
};

/**
 * Runs on server in build time. Passes data as props
 */
export async function getStaticProps(context) {
  // File system
  // Db work
  // etc.
  return {
    props: {},
  };
}

/**
 * Build static paths
 */
export async function getStaticPaths() {
  // Get all the paths for your posts from API or file system
  const results = await fetch('/api/posts');
  const posts = await results.json();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));

  return { paths };
}

export default Page;
