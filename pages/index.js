import AnimatedTitle from '../components/ProjectsTitle'
import Education from '../components/Education'
import Skills from '../components/Skill'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { motion } from 'framer-motion'

import AnimatedLogo from '../components/AnimatedLogo'



export default function Home() {

  const headingText = 'Hello! I Am Yerjan'
  const subtitleText = 'Junior Web Developer And Designer'
  const skills = [{ type: "Web Developing", list: ['HTML', 'CSS', 'JavaScript', 'React', 'NextJs'] }, { type: "Graphic Design", list: ['AdobeIllustrator', 'WiX', 'EditorX'] }]
  const langs = [{ type: "Mother Tongue", list: ['Kazakh'] }, { type: 'Other Languages', list: ['Russian', 'Turkish', 'English'] }]

  return (<>
    <Box bgcolor='#151515' minHeight='100vh' alignItems='center' display='flex'>
      <Box display='flex' justifyContent='center' flexWrap='wrap' minHeight='100vh'>
        <Box
          mt="70px"
          // maxHeight='100vh'
          display='flex'
          alignItems='center'
          justifyContent="center"
          flexDirection='column'
          sx={{ width: { xs: '100vw', lg: '50vw' } }}
        >
          <AnimatedTitle text={headingText} color='#fff' size={5} time={2} />
          <AnimatedTitle text={subtitleText} color='#ccc' size={3} time={3} />
        </Box>
        <Box
          mt="70px"
          display='flex'
          alignItems='center'
          justifyContent="center"
          sx={{ width: { xs: '90vw', sm: '70vw', md: '60vw', lg: '50vw' } }}>
          <AnimatedLogo />
        </Box>
      </Box>
    </Box >
    <Box bgcolor='#151515' minHeight='100vh' display='flex' pb='30px'>
      <Container display='flex' >
        <Box display='flex' sx={{ flexWrap: { xs: 'wrap', md: 'nowrap' } }} justifyContent='center'  >
          <Box mr={5} sx={{ width: { xs: '250px', md: '325px', lg: '375px' }, minWidth: { xs: '250px', md: '325px', lg: '375px' } }}>
            <img src='/photo.jpg' style={{ borderRadius: '50%', maxWidth: '100%' }} />
          </Box>
          <Box display='flex' flexDirection='column' top='70px' justifyContent='end'>
            <AnimatedTitle text='About Me' color='#fff' size={3.5} />
            <Typography variant="body1" color='secondary'>In 2020 I started to work as a freelance graphic designer at IKSAD Institute without any experience of graphic design before. But since then I got more qualified in graphic design as I was keen on it. Later I started to learn web developing from Udemy Courses. And this is my very first website created on NextJs via FramerMotion and MaterialUI. There is a bit more background information about me down below. Feel free to get in touch with me in Contact section.</Typography>
          </Box>
        </Box>

        <Box mt={10} display='flex' justifyContent='space-between' flexWrap='wrap' rowGap={2} >
          <Education />
          <Skills skills={skills} name='Skills' />
          <Skills skills={langs} name='Languages' />
        </Box>
      </Container>
    </Box>
  </>
  )
}
