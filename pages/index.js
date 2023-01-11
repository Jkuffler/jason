import Head from "next/head"
import Image from "next/image"
import { Inter } from "@next/font/google"
import styles from "../styles/Home.module.css"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <Head>
        <title>J. Küffler</title>
        <meta
          name='description'
          content='Web Developer | Software Engineer'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <meta charset='UTF-8' />
        <meta
          http-equiv='X-UA-Compatible'
          content='IE=edge'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        />

        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
        />
      </Head>
      <main className={styles.main}>
      <header className="container header" id="top">
    <nav class="nav">
      <h2 class="animate animated animate__hinge ">J. Küffler™ Est.1983</h2>
      <div class="nav_menu" id="nav_menu">
        <button class="close_btn" id="close_btn">X</button>

        <ul class="nav_menu_list">
          <li class="nav_menu_item">
            <a href="assets/resume.pdf" class="nav_menu_link">resumé download</a>
          </li>
          <li class="nav_menu_item">
            <a href="#about" class="nav_menu_link">about</a>
          </li>
          <li class="nav_menu_item">
            <a href="#projects" class="nav_menu_link">featured work</a>
          </li>
          <li class="nav_menu_item">
            <a href="#contact" class="nav_menu_link">social</a>
          </li>
        </ul>
      </div>

      <button class="toggle_btn" id="toggle_btn">...</button>
    </nav>
  </header>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src='/next.svg'
            alt='Next.js Logo'
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src='/thirteen.svg'
              alt='13'
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}
            target='_blank'
            rel='noopener noreferrer'>
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}
            target='_blank'
            rel='noopener noreferrer'>
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}
            target='_blank'
            rel='noopener noreferrer'>
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}
            target='_blank'
            rel='noopener noreferrer'>
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
