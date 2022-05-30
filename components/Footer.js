import { Container, Typography, Box } from "@mui/material";

const Footer = () => {
    return (
        <Box
            width="100vw"
            height='69px'
            margin='5px'
            borderRadius='5px'
            bgcolor='#151515'
            alignSelf='end'
            display='flex'
            alignItems='center'
            justifyContent='center'
        >
            <Box>
                <Typography
                    variant="h6"
                    fontSize={17}
                    fontWeight={500}
                    color='secondary'
                >
                    Made on NextJs
                </Typography>
            </Box>
        </Box>
    );
}

export default Footer;