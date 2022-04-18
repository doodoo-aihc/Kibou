// utils
import type { NextPage } from 'next'
import Head from 'next/head'
import client from "../lib/apollo-client";

// Interfaces
import Anime from '../interfaces/Anime'
// Components
import { Grid, Typography } from '@mui/material'
import AniSections from '../components/landing-page/AniSections'
import KibouContainer from '../components/KibouContainer';
import HeaderContainer from '../components/landing-page/HeaderContainer';
// Queries
import { landingPageQueryVars, LANDING_PAGE_QUERY } from '../queries/landing-page-queries';
import LandingSection from '../interfaces/LandingSection';

interface IndexProps {
	sections: LandingSection[]
}

const Home: NextPage<IndexProps> = ({ sections }) => {
	return (
		<>
			<Head>
				<title>Kibou</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{
				sections.map((section: LandingSection, idx: number) => (
					<div key={idx}>
						<HeaderContainer>
							<Typography variant='h5'>{section.headerTitle}</Typography>
						</HeaderContainer>
						<KibouContainer>
							<Grid direction="row" justifyContent="space-between" container xl>
								{section.animes.map((anime: Anime, idx: number) => (
									<Grid item xl={2} key={idx}>
										<AniSections anime={anime}/>
									</Grid>
								))}
							</Grid>
						</KibouContainer>
					</div>
				))
			}
		</>
  )
}

export async function getServerSideProps () {
	const { data } = await client.query({
		query: LANDING_PAGE_QUERY,
		variables: landingPageQueryVars
	})

	const trendingAnimes : LandingSection = {
		animes: data['trending']['media'],
		headerTitle: "Trending Now"
	}
	const popularAnimes : LandingSection = {
		animes: data['season']['media'],
		headerTitle: "Popular This Season"
	}
	const trendingSeasonAnimes : LandingSection = {
		animes: data['nextSeason']['media'],
		headerTitle: "Upcoming Next Season"
	}
	const trendingNextSeasonAnimes : LandingSection = {
		animes: data['popular']['media'],
		headerTitle: "All Time Popular"
	}
	const topAnimes : LandingSection = {
		animes: data['top']['media'],
		headerTitle: "Top 100 Anime"
	}

	return {
		props: {
			sections: [
				trendingAnimes,
				popularAnimes,
				trendingSeasonAnimes,
				trendingNextSeasonAnimes,
				topAnimes
			]
		}
	}
}

export default Home