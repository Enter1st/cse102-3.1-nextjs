import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1>My name is Hyeonmin Choi, and people also call me as Daniel.</h1>
      <h2>I have lived in the Philippines for 13 years. I like playing guitar, watching movies, reading books, and sleeping.</h2>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}
