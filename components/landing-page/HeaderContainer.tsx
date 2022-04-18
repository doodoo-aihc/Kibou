import { styled } from '@mui/material/styles';
import MuiContainer from '@mui/material/Container';
import React from 'react'

const Container = styled(MuiContainer)(({ theme }) => ({
    marginBottom: theme.spacing(4)
}))

const HeaderContainer = (props: any) => {
    return (
        <Container maxWidth="xl">
            {props.children}    
        </Container>
    )
}

export default HeaderContainer