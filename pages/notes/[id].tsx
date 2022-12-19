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

export async function getStaticPaths(context) {
  // Get all the paths for your posts from API or file system
  // const results = await fetch('/api/posts');
  // const posts = await results.json();
  console.log('---getStaticPaths', context);
  const posts = [{ slug: 'test-1' }];
  const paths = posts.map((post) => ({ params: { id: post.slug } }));

  return { paths, fallback: true };
}

export async function getStaticProps(context) {
  // Prepare CMS data for static generation
  console.log('---getStaticProps', context);
  return {
    props: { title: 'Notes Page', url: process.env.HELP_APP_URL },
  };
}

export default Page;
