import React from 'react';
import Link from 'next/link';
// import Ad from '../../src/components/browser-ad';
import dynamic from 'next/dynamic';
// Should skip SSR as the component has some only browser-specific stuff to do
const Ad = dynamic(() => import('../../src/components/browser-ad'), { ssr: false });

const Page = ({ title, url }) => (
  <>
    <h1>{title}</h1>
    <Link href="/notes/[id]" as="/notes/2">
      Notes
    </Link>
    <Link href={`/notes/${encodeURIComponent(2)}`}>Mew</Link>
    <a href={url}>Help</a>
    <Ad />
  </>
);

export async function getStaticProps(context) {
  // Prepare CMS data for static generation
  console.log('---getStaticProps', context);
  return {
    props: { title: 'Notes Page', url: process.env.HELP_APP_URL },
  };
}

export default Page;
