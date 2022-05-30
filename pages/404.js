import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";
import { Box, Container, Typography } from "@mui/material";

const NotFound = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, []);


    return (<>
        <Box minHeight='70vh' pt='70px' display='flex' flexDirection='column' justifyContent='center'>
            <Container>
                <Box>
                    <Typography variant="h2" fontWeight={600} textAlign='start'>Ooooops...</Typography>
                    <Typography variant="h4" fontWeight={600} textAlign='start'>The page connot be found.</Typography>
                    <Typography variant="body1" fontSize='1.5rem' fontWeight={700} textAlign='start'>
                        Go back to the
                        <Link href='/'><a className="notFound"> Homepage</a></Link>
                    </Typography>
                </Box>
            </Container>
        </Box></>)
}

export default NotFound;