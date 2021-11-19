import Head from 'next/head'
import { signIn, useSession } from "next-auth/react"
import styles from '../styles/Home.module.css'

const Home = () => {
  const { data: session, status } = useSession();
  return (
    <div className={styles.container}>
      <Head>
        <title>Daryl</title>
        <meta name="description" content="Hobby website for Daryl Findlay" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Daryls hobby website!
        </h1>

        <p className={styles.description}>
          This is the start of a hobby website for Daryl. The goal is to learn 👨🏼‍🎓
        </p>
        <p>
          {status === "authenticated" && `Welcome ${session.user.name || session.user.email}`}
          {status !== "authenticated" && status !== "loading" && <button onClick={() => signIn()}>Sign in</button>}
        </p>
      </main>
    </div>
  );
}

export default Home;
