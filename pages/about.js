import Link from "next/dist/client/link";
import aboutcss from "../styles/Home.module.css";
const About = () => {
  return (
    <div className={aboutcss.about}>
      <h3>About</h3>
      <Link href="/">
        <button className="bg-amber-400">back to Home</button>
      </Link>
    </div>
  );
};

export default About;
