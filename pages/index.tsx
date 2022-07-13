import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container} style={{ backgroundColor: 'black' }}>
      <Head>
        <title>Mario Portillo</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} style={{ backgroundColor: "black" }}>
        <Image src="/background.jpg" alt="Mario Portillo - Background" layout="fill" style={{
          opacity: "0.2",
          backgroundColor: 'black',
          filter: "blur(0.5px)" }} />
        <div className={styles.coverText}>
          <div className={styles.title}>
            Mario Portillo
          </div>
          <div className={styles.subtitle}>
            {/* { activeDescriptor } */}
          </div>
        </div>
      </main>

      <section id="about-me" className="about-me white" style={{ width: '100vw', backgroundColor: 'white' }}>
        <div className="section-content">
          <h2>About Me</h2>
          <div className="divider"></div>
          <div className="content">
            My name is Mario Portillo and I have been working as a professional web developer for the past 9 years. I have experience with a wide range of technologies but enjoy JavaScript the most. When I'm not coding, I enjoy spending time with my family and playing Magic the Gathering or reading a book.
            <div className="signature">
              Mario Portillo
            </div>
          </div>
        </div>
      </section>

      {/* <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}

export default Home
