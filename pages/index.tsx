import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
          <title>Vinicius Portfolio</title>
      </Head>

        {/*Header*/}
        <Header />
        <h1 className="p-10 text-red-500">awesome s</h1>
    </div>
  )
}

export default Home
