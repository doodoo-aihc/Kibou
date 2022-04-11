import { Container, Grid } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Waifus from '../interfaces/Waifus'
import styles from '../styles/Home.module.css'
import WaifuCard from '../components/WaifusList'

import { gql } from "@apollo/client";
import client from "../lib/apollo-client";
import Anime from '../interfaces/Anime'

interface IndexProps {
	animes: Anime[]
}

const Home: NextPage<IndexProps> = ({ animes }) => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Kibou</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<>
				<Container>
					<Grid spacing={2} direction="row" container>
						{animes.map((anime: Anime, idx: number) => (
						<Grid item xs={4} key={idx}>
							<WaifuCard anime={anime}/>
						</Grid>
						))}
					</Grid>
				</Container>
			</>
		</div>
  )
}

export async function getStaticProps() {
	const { data } = await client.query({
		query: gql`
			query($page: Int = 1, $type: MediaType = ANIME, $sort: [MediaSort] = [TRENDING_DESC]) {
				Page(page: $page, perPage: 10) {
					media(type: $type, sort: $sort) {
						title {
							romaji,
							native,
						},
						coverImage {
							large
						}
					}
				}
			}
		`
	})

	const animes : Anime[] = data['Page']['media']

	return {
		props: {
			animes: animes
		}
	}
}

export default Home