import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen">
      <Head>
          <title>Vinicius Portfolio</title>
      </Head>

        {/*Header*/}
        <Header />

        {/*Hero*/}
        <section id="hero">
            <Hero />
        </section>
        <h1 className="p-10 text-red-500">awesome s</h1>
</div>
  )
}

export default Home
