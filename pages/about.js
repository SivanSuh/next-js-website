import Link from "next/dist/client/link";
import Head from "next/head";
import Image from "next/image";
import manzara from "../public/manzara1.jpg";
const About = () => {
  return (
    <div className="w-10/12 mx-auto my-5 h-screen flex flex-col justify-center items-center">
      <Head>
        <title>About Page</title>
      </Head>
      <h2 className="text-2xl text-green-800 my-3">ABOUT</h2>
      <div className="w-auto mx-auto text-center ">
        <Image src={manzara} alt="manzara" width={500} height={400} />
      </div>

      <Link href="/">
        <button className="bg-amber-400">back to Home</button>
      </Link>
    </div>
  );
};

export default About;
