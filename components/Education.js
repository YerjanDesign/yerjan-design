import { Box, Typography } from "@mui/material";

export default function Education() {
    return <Box bgcolor='rgba(204,204,204, 0.1)' padding={3} width={{ xs: '100%', md: '45%' }}>

        <Typography
            variant='h4'
            color='#fff'
            fontWeight={800}
        >
            Education
        </Typography>

        <Box
            paddingLeft={2}
            sx={{ borderLeft: '3px solid #ccc' }}
        >
            <Box
                display='flex'
                sx={{ padding: '10px', flexWrap: 'wrap' }}
                borderBottom='1px solid #000'
            >
                <Typography
                    mb={1}
                    variant='h5'
                    fontWeight={600}
                    color='secondary'
                >
                    Master of Math
                </Typography>

                <Box
                    bgcolor='#ccc'
                    padding='8px 12px'
                    width='100%'
                >
                    <Typography
                        variant='body1'
                        borderBottom={1}
                        fontWeight={600}
                    >
                        2019 - Present
                    </Typography>

                    <Typography
                        variant='body1'
                    >
                        Erciyes University, Faculty of Natural Sciences
                    </Typography>
                </Box>
            </Box>

            <Box
                display='flex'
                sx={{ padding: '10px', flexWrap: 'wrap' }}
                borderBottom='1px solid #000'
            >
                <Typography
                    mb={1}
                    variant='h5'
                    fontWeight={600}
                    color='secondary'
                >
                    Bachelor of Math
                </Typography>

                <Box
                    bgcolor='#ccc'
                    padding='8px 12px'
                    width='100%'
                >
                    <Typography
                        variant='body1'
                        borderBottom={1}
                        fontWeight={600}
                    >
                        2015 - 2019
                    </Typography>

                    <Typography
                        variant='body1'
                    >
                        Erciyes University, Faculty of Natural Sciences
                    </Typography>
                </Box>
            </Box>
        </Box>
    </Box>
}