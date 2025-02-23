import { Link } from "next-transition-router";
export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/blog">blog</Link>
    </div>
  );
}
