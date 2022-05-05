import Image from "next/image";
import foto from "../public/img-2.jpg";
import image from "../public/manzara3.jpg";
import Head from "next/head";
function HomePage() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <div className="md:w-11/12 w-full h-auto md:h-screen  mx-auto my-5 p-5  flex md:flex-row  flex-col justify-center items-center  ">
        <div className="sm:w-5/12 w-full ">
          <Image objectFit="cover" src={foto} alt="foto" layout="responsive" />
        </div>
        <div className="my-3 mx-2 sm:w-5/12 w-full">
          <Image
            src={image}
            alt="image"
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>
    </>
  );
}

export default HomePage;
