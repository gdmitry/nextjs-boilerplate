import React from 'react';
import { useRouter } from 'next/router';
// import Ad from '../../src/components/browser-ad';

/**
 * Catches all params in url route
 * @constructor
 */
const Page = ({ data }) => {
  const router = useRouter();
  const { params } = router.query;
  console.log(data);
  return (
    <>
      <h1>Catches all /docs routers including parent route {params}</h1>
      {/*<Ad />*/}
    </>
  );
};

/**
 * Runs on server in build time. Passes data as props, generate static pages
 */
// export async function getStaticProps(context) {
//   // File system
//   // Db work
//   // Get CMS content
//   return {
//     props: {},
//   };
// }

/**
 * Build static paths
 */
// export async function getStaticPaths() {
//   // Get all the paths for your posts from API or file system
//   const results = await fetch('/api/posts');
//   const posts = await results.json();
//   const paths = posts.map((post) => ({ params: { slug: post.slug } }));
//
//   return { paths };
// }

/**
 * Happens on every request. True SSR request comparing to getStaticProps.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function getServerSideProps({ params, req, res }) {
  const response = await fetch('https://catfact.ninja/fact');
  const data = await response.json();

  console.log('---getServerSideProps', params);
  return { props: { data } };
}
export default Page;
