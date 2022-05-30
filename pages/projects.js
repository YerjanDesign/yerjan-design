import Box from '@mui/material/Box'

import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

import ProjectsTitle from '../components/ProjectsTitle'
import WebProjects from '../components/WebProject'

const Projects = () => {

    const projects = [
        {
            index: 0,
            image: '/projects/web-project-1.jpg',
            name: 'ReDesigning on WiX',
            describe: "I started my web designer career in WiX where my client wanted me to redesign their website. And this website was one of the first projects. Back then I hadn't had any experience on WiX or even in working as web designer. I can say that this was my starting point of web developing."
        }, {
            index: 1,
            image: '/projects/web-project-2.jpg',
            name: 'Website on WiX from scratch',
            describe: "This website was my first project that I have made on WiX from the scratch. Still I didn't have much experience of web developing, but I started to learn web designing on YouTube and Udemy courses. The knowledge I have learned was very helpfull at designing of this website."
        },
        {
            index: 2,
            image: '/projects/web-project-3.jpg',
            name: 'Responsive website on EditorX',
            describe: "After the last project I started to learn web developing and responsive website. I was enthusiastic about creating responsive websites. And then I got to know EditorX, new web developing platform for web designers made by Wix team. So asked a permission from my employer to make next website on EditorX. This was the most enjoyeble project I had ever created. And I am proud of the job I have done."
        },
    ]


    return (<>
        <Box height='auto' sx={{ mt: '80px' }}>
            <Container >
                <Box
                    // borderBottom='1px solid #ccc'
                    // position='sticky'
                    // top={69}
                    bgcolor='#fff'
                    // zIndex={3}

                    mb={2}
                >
                    <ProjectsTitle text={'My projects'} size={4} />
                </Box>
                <Box
                    padding={2}
                    bgcolor='rgb(250,250,250)'
                    boxShadow='0 0 5px rgba(0,0,0,0.1)'
                    mb={2}
                >
                    <ProjectsTitle text='Web Design' size={3} />
                    {projects.map(p => (
                        <WebProjects key={p.index} project={p} />
                    ))}
                </Box>
                <Box
                    padding={2}
                    bgcolor='rgb(250,250,250)'
                    boxShadow='0 0 5px rgba(0,0,0,0.1)'
                    mb={2}
                >
                    <ProjectsTitle text='Graphic Design' size={3} />
                    <Typography textAlign='center'>There are some examples of banners and logos that I made</Typography>
                    <Box mt={2} display='flex' justifyContent='space-evenly'
                        flexWrap='wrap'
                        rowGap={3}
                        columnGap={3}
                    >
                        <Box maxWidth={330}>
                            <img src='/projects/banner-1.png' style={{ maxWidth: '330px' }} />
                        </Box>
                        <Box maxWidth={330}>
                            <img src='/projects/banner-2.jpg' style={{ maxWidth: '330px' }} />
                        </Box>
                        <Box maxWidth={330}>
                            <img src='/projects/banner-3.png' style={{ maxWidth: '330px' }} />
                        </Box>

                        <Box maxWidth={330}>
                            <img src='/projects/logo-1.jpg' style={{ maxWidth: '330px' }} />
                        </Box>

                        <Box maxWidth={330} maxHeight={330} display='block'>
                            <img src='/projects/logo-2.png' style={{ maxWidth: '330px', maxHeight: "330px" }} />
                        </Box>


                    </Box>
                </Box>
            </Container>
        </Box>
    </>);
}

export default Projects;