import { Container, Grid } from '@mui/material'
import axios from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Waifus from '../interfaces/Waifus'
import styles from '../styles/Home.module.css'
import WaifuCard from './Components/WaifusList'

const Home: NextPage = ({ waifus }: any) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kibou</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <>
        <Container>
          <Grid spacing={2} direction="row" container>
            {waifus.map((waifu: Waifus, idx: number) => (
              <Grid item xs={4} key={idx}>
                <WaifuCard Waifus={waifu}/>
              </Grid>
            ))}
          </Grid>
        </Container>
      </>

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
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await axios.get("https://api.jikan.moe/v4/characters?page=1&limit=18")
  const waifus: Waifus[] = res.data.data

  return {
    props: {
      waifus,
    },
  }
}

export default Home
