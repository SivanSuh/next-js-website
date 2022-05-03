import Link from "next/dist/client/link";
const Contact = () => {
  return (
    <div className="w-10/12 mx-auto my-5 flex flex-col justify-center items-center">
      <h2 className="text-xl my-3">CONTACT FORM</h2>
      <form
        action="/send-data-here"
        method="post"
        className="flex flex-col sm:w-3/4 w-full  mx-auto"
      >
        <input
          type="text"
          id="first"
          name="first"
          placeholder="First Name"
          className="border-2 my-2 p-2"
        />
        <input
          type="text"
          id="last"
          name="last"
          placeholder="Last Name"
          className="border-2 my-2 p-2"
        />
        <button type="submit" className="bg-cyan-300 p-3">
          Submit
        </button>
      </form>
      <Link href="/">
        <button className="bg-black text-white p-2 my-3 hover:text-yellow-500">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default Contact;
