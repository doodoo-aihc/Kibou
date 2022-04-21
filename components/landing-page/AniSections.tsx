import { styled } from "@mui/material/styles"
import { CardActionArea, CardContent, CardMedia } from "@mui/material"
import MuiCard from "@mui/material/Card"
import MuiTypography from "@mui/material/Typography"
import React from "react"
import Anime from "../../interfaces/Anime"
import Link from "next/link"

// related css fields here
const Typography = styled(MuiTypography)(({ theme }) => ({
	fontSize: theme.spacing(2),
	fontWeight: 600,
	lineHeight: "21px",
	display: "-webkit-box", // https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp
	WebkitBoxOrient: "vertical",
	WebkitLineClamp: 2,
	overflow: "hidden",
}))

const Card = styled(MuiCard)(({ theme }) => ({
	width: "185px",
	height: "350px",
}))

const AniSections = (props: PropTypes) => {
	return (
		<>
			{/* Maybe we have to write it separately to a CSS for modularity sake? */}
			<Card raised>
				<Link href={`/anime/${props.anime.id}`} passHref>
					<CardActionArea>
						<CardMedia
							component="img"
							height="265"
							width="100%"
							image={props.anime.coverImage?.large}
							alt={props.anime.title?.userPreferred}
						/>
						<CardContent>
							<Typography gutterBottom color="text.secondary">
								{props.anime.title?.userPreferred}
							</Typography>
						</CardContent>
					</CardActionArea>
				</Link>
			</Card>
		</>
	)
}

export default AniSections

interface PropTypes {
	anime: Anime
}
