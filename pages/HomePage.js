import Image from "next/image";
import foto from "../public/img-2.jpg";
import image from "../public/manzara3.jpg";
function HomePage() {
  return (
    <div className="w-10/12 h-screen  mx-auto my-5 p-5  flex md:flex-row flex-col justify-center items-center  ">
      <div>
        <Image height={300} width={500} src={foto} alt="foto" />
      </div>
      <div className="my-3 mx-2">
        <Image width={500} height={300} src={image} alt="image" priority />
      </div>
    </div>
  );
}

export default HomePage;
