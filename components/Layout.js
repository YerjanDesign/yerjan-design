import Navbar from "./Navbar";
import Footer from "./Footer";
import { useRouter } from "next/router";
import { Box } from "@mui/material";
import Head from "next/head";



const Layout = ({ children }) => {
    const router = useRouter()

    return (<Box display='flex' flexWrap='wrap' width='100vw' minHeight='100vh' overflow='hidden'>
        <Head>
            <title>Yerjan</title>
            <link rel="icon" href="/yerjan-logo-icon.png" />
        </Head>

        <Box width='100vw'>
            <Navbar />
            {children}
        </Box>
        {router.pathname === '/' ? <></> : <Footer />}
    </Box>);
}

export default Layout;