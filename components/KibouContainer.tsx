import { styled } from "@mui/material/styles"
import MuiContainer from "@mui/material/Container"
import React from "react"

const Container = styled(MuiContainer)(({ theme }) => ({
	marginBottom: theme.spacing(6),
	// display: 'flex',
	// flexDirection: 'column',
	// justifyContent: 'space-between'
}))

const KibouContainer = (props: any) => {
	return <Container maxWidth="xl">{props.children}</Container>
}

export default KibouContainer
