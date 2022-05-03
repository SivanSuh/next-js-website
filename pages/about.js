import Link from "next/dist/client/link";
import Head from "next/head";
const About = () => {
  return (
    <div className="w-10/12 mx-auto my-5 h-screen ">
      <Head>
        <title>About Page</title>
      </Head>
      <h3>About</h3>
      <Link href="/">
        <button className="bg-amber-400">back to Home</button>
      </Link>
    </div>
  );
};

export default About;
