import { useEffect } from "react";

import { styled as beStyled } from "@mui/material/styles";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const Title = beStyled(Typography)`
  font-weight: 600;
`;

const Word = styled(motion.span)`
  display: inline-block;
  margin-right: 0.25em;
  white-space: nowrap;
`;

const Character = styled(motion.span)`
  display: inline-block;
  margin-right: -0.05em;
`;


export default function ProjectsTitle({ text, size, color, shadow, time }) {
    // This would normally be passed into this component as a prop!

    const ctrls = useAnimation();

    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            ctrls.start("visible");
        }
        if (!inView) {
            ctrls.start("hidden");
        }

    }, [ctrls, inView]);

    const wordAnimation = {
        hidden: {},
        visible: {},
    };

    const characterAnimation = {
        hidden: {
            opacity: 0,
            y: `0.25em`,
        },

        visible: {
            textShadow: shadow,
            opacity: 1,
            y: `0em`,
            transition: {
                duration: 1,
                ease: [0.2, 0.65, 0.3, 0.9],
            },
        },
    };


    // {color ? { textShadow: '0 0 10px #fff' } : 'none'}

    return (
        <Title aria-label={text} role="heading" sx={{ fontSize: { xs: '1.5em', sm: `${size - 1}em`, md: `${size}em` }, color, textAlign: 'center' }} >
            {text.split(" ").map((word, index) => {
                return (
                    <Word
                        ref={ref}
                        aria-hidden="true"
                        key={index}
                        initial="hidden"
                        animate={ctrls}
                        variants={wordAnimation}
                        transition={time ? {
                            delayChildren: time + index * 0.25,
                            staggerChildren: 0.1,
                        } : {
                            delayChildren: index * 0.25,
                            staggerChildren: 0.1,
                        }}
                    >
                        {word.split("").map((character, index) => {
                            return (
                                <Character
                                    aria-hidden="true"
                                    key={index}
                                    variants={characterAnimation}
                                >
                                    {character}
                                </Character>
                            );
                        })}
                    </Word>
                );
            })}
        </Title>
    );

}