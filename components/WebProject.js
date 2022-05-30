import React, { useState, useEffect, useRef } from "react";

import ProjectsTitle from './ProjectsTitle'

import { Typography, Paper, Box, Container } from "@mui/material";
import { useAnimation, motion, useViewportScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";


export default function WebProjects({ project }) {


    const ctrls = useAnimation();

    const { ref: ref1, inView: inView1 } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView1) {
            ctrls.start("visible");
        }
        if (!inView1) {
            ctrls.start("hidden");
        }

    }, [ctrls, inView1]);

    const imageAnimation = {
        hidden: {
            opacity: 0,
            y: `3em`,
        },

        visible: {
            opacity: 1,
            y: `0em`,
            transition: {
                duration: 1.5,
                ease: [0.2, 0.65, 0.3, 0.9],
            },
        },
    };



    const [elementTop, setElementTop] = useState(0)
    const [clientHeight, setClientHeight] = useState(0)
    const ref = useRef(null)

    const initial = elementTop - clientHeight
    const final = elementTop + 80

    const { scrollY } = useViewportScroll();
    const y1 = useTransform(scrollY, [initial, final], [-80, 0])

    useEffect(() => {
        const element = ref.current
        // save our layout measurements in a function in order to trigger
        // it both on mount and on resize
        const onResize = () => {
            // use getBoundingClientRect instead of offsetTop in order to
            // get the offset relative to the viewport
            setElementTop(element.getBoundingClientRect().top + window.scrollY || window.pageYOffset)
            setClientHeight(window.innerHeight)
        }
        onResize()
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [ref])



    return <Box>
        <Box
            component={motion.div}
            ref={ref1}
            aria-hidden="true"
            initial="hidden"
            animate={ctrls}
            variants={imageAnimation}
            elevation={2}
        >

            <img src={project.image} style={{ borderRadius: '5px', maxWidth: '100%' }} />

            <Box paddingBottom={2}>
                <Box
                    ref={ref}
                    component={motion.div}
                    style={{ y: y1 }}
                >
                    <ProjectsTitle
                        size={3.5}
                        color='#fff'
                        shadow='1px 1px 3px #151515'
                        text={project.name}
                    />
                    <Container>
                        <Typography textAlign='center'>
                            {project.describe}
                        </Typography>
                    </Container>
                </Box>
            </Box>
        </Box >
    </Box >
}