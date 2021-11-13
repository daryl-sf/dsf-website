import Home from "./nextjs";

export default Home = () => {
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
    </main>
  </div>
};
