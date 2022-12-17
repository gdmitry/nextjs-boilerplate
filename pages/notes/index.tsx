import React from 'react';
import Link from 'next/link';
const Page = () => (
  <>
    <h1>Notes Page</h1>
    <Link href="/notes/[id]" as="/notes/2">
      Notes
    </Link>
    <Link href={`/notes/${encodeURIComponent(2)}`}>Mew</Link>
    <a href={process.env.HELP_APP_URL}>Help</a>
  </>
);

export default Page;
