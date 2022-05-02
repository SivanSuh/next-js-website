import styles from "../styles/Home.module.css";
import Link from "next/link";
function HomePage() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.wrapper}>
        <h2 className="text-2xl text-white hover:text-yellow-500">
          <Link href={"/"}>LESSCHAR</Link>
        </h2>
        <ul className={styles.navi}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li style={{ margin: "0 20px" }}>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>

          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default HomePage;
