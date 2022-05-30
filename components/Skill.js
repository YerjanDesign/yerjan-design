import { Box, Typography } from "@mui/material";

export default function Skills({ skills, name }) {
    return <Box bgcolor='rgba(204,204,204, 0.1)' padding={3} width={{ xs: '100%', md: '45%' }}>

        <Typography
            variant='h4'
            color='#fff'
            fontWeight={800}
        >
            {name}
        </Typography>

        <Box
            paddingLeft={2}
            sx={{ borderLeft: '3px solid #ccc' }}
        >
            {skills.map(skill => (
                <Box key={skill.type}
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
                        {skill.type}
                    </Typography>

                    <Box
                        display='flex'
                        flexWrap='wrap'
                        width='100%'
                        rowGap={1}
                        columnGap={1}
                    >
                        {skill.list.map(e => (
                            <Typography key={e}
                                variant='body2'
                                borderBottom={1}
                                fontWeight={600}
                                bgcolor='#ccc'
                                padding='6px 10px'
                            >
                                {e}
                            </Typography>
                        ))}
                    </Box>
                </Box>
            ))}
        </Box>
    </Box>
}