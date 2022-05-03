import Image from "next/image";
import image from "../public/manzara3.jpg";
function HomePage() {
  return (
    <div className="w-10/12 mx-auto my-3 p-5  flex felx-col justify-center items-center ">
      <Image
        className="mx-auto "
        width={500}
        height={400}
        src={image}
        alt="image"
      />
    </div>
  );
}

export default HomePage;
