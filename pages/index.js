import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <>
            <Head>
                <title>Ninja List | Home</title>
                <meta name="keywords" content="ninjas" />
            </Head>
            <div>
                <h1 className={styles.title}>Homepage</h1>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nam id doloremque deserunt neque. Veniam, architecto
                    repudiandae! Maiores hic quos praesentium aliquam sequi?
                    Obcaecati ipsam, saepe assumenda molestiae modi hic a culpa
                    nemo necessitatibus, iure ipsa totam nulla cupiditate, quae
                    unde architecto at odit magnam sit nam rerum? Illum,
                    necessitatibus porro?
                </p>
                <p className={styles.text}>
                    Nihil sequi, eveniet porro ipsa repellendus at quas
                    assumenda et sint! Eius eaque distinctio iusto deserunt,
                    obcaecati accusantium dolores ipsum vero vitae sequi enim
                    accusamus! Beatae perspiciatis eius suscipit recusandae
                    placeat, ab laborum dolorem fugiat provident minus autem
                    atque consequuntur optio fugit nostrum inventore deleniti
                    esse dolor voluptate quidem repellat.
                </p>
                <Link href="/ninjas">
                    <a className={styles.btn}>See Ninja Listing</a>
                </Link>
            </div>
        </>
    );
}
