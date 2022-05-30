import React from "react";
import { motion } from "framer-motion";


const svgVariants = {
    hidden: {},
    visible: {

        transition: {
            delay: 2,
            duration: 1
        }
    }
}

const pathVariants = {
    hidden: {
        opacity: 0,
        pathLength: 0
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 3,
            ease: 'easeInOut'
        }
    }
}

const circleVariants = {
    hidden: {
        opacity: 0,
        pathLength: 0
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            delay: 2,
            duration: 2,
            ease: 'easeInOut'
        }
    }
}

const logoVariants = {
    hidden: {
        opacity: 0,
        pathLength: 0
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            delay: 4,
            duration: 2,
            ease: 'easeInOut'
        }
    }
}

export default function AnimatedLogo() {

    return <motion.svg variants={svgVariants} initial='hidden' animate='visible' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        viewBox="0 0 1072.6 957.1">

        <g id="lines30">
            <motion.line variants={pathVariants} className="st0" x1="546.4" y1="2.1" x2="1.8" y2="316.5" />
            <motion.line variants={pathVariants} className="st0" x1="586.7" y1="25.3" x2="42.1" y2="339.8" />
            <motion.line variants={pathVariants} className="st0" x1="606.9" y1="37" x2="62.3" y2="351.5" />
            <motion.line variants={pathVariants} className="st0" x1="788.5" y1="141.8" x2="243.8" y2="456.2" />
            <motion.line variants={pathVariants} className="st0" x1="728" y1="106.9" x2="183.3" y2="421.4" />
            <motion.line variants={pathVariants} className="st0" x1="828.8" y1="165.1" x2="284.2" y2="479.5" />
            <motion.line variants={pathVariants} className="st0" x1="869.2" y1="188.4" x2="324.5" y2="502.8" />
            <motion.line variants={pathVariants} className="st0" x1="889.3" y1="223.4" x2="344.7" y2="537.8" />
            <motion.line variants={pathVariants} className="st0" x1="889.3" y1="270" x2="344.7" y2="584.4" />
            <motion.line variants={pathVariants} className="st0" x1="889.3" y1="316.6" x2="344.7" y2="631" />
            <motion.line variants={pathVariants} className="st0" x1="889.3" y1="386.4" x2="344.7" y2="700.9" />
            <motion.line variants={pathVariants} className="st0" x1="889.3" y1="526.2" x2="344.7" y2="840.7" />
            <motion.line variants={pathVariants} className="st0" x1="889.3" y1="596.1" x2="344.7" y2="910.5" />
        </g>
        <g id="lines150">
            <motion.path variants={pathVariants} className="st0" d="M344.7,2.1c181.6,104.8,363.1,209.6,544.7,314.5" />
            <motion.path variants={pathVariants} className="st0" d="M284.2,37.1c181.6,104.8,363.1,209.6,544.7,314.5" />
            <motion.path variants={pathVariants} className="st0" d="M163.1,106.9c181.6,104.8,363.1,209.6,544.7,314.5" />
            <motion.path variants={pathVariants} className="st0" d="M102.6,141.8c181.6,104.8,363.1,209.6,544.7,314.5" />
            <motion.path variants={pathVariants} className="st0" d="M62.3,165.1c181.6,104.8,363.1,209.6,544.7,314.5" />
            <motion.path variants={pathVariants} className="st0" d="M21.9,188.4C203.5,293.2,385,398,566.6,502.8" />
            <motion.path variants={pathVariants} className="st0" d="M1.7,223.4c181.6,104.8,363.1,209.6,544.7,314.5" />
            <motion.path variants={pathVariants} className="st0" d="M1.7,270c181.6,104.8,363.1,209.6,544.7,314.5" />
            <motion.path variants={pathVariants} className="st0" d="M1.7,316.6C183.3,421.4,364.9,526.2,546.4,631" />
            <motion.path variants={pathVariants} className="st0" d="M1.7,386.5c181.6,104.8,363.1,209.6,544.7,314.5" />
            <motion.path variants={pathVariants} className="st0" d="M1.7,526.2C183.3,631,364.9,735.9,546.4,840.7" />
            <motion.path variants={pathVariants} className="st0" d="M1.7,549.5C183.3,654.3,364.9,759.2,546.4,864" />
            <motion.path variants={pathVariants} className="st0" d="M1.7,596.1c181.6,104.8,363.1,209.6,544.7,314.5" />
        </g>
        <g id="lines90">
            <motion.path variants={pathVariants} className="st0" d="M465.7,957.1c0-209.6,0-419.3,0-628.9" />
            <motion.path variants={pathVariants} className="st0" d="M506.1,933.8c0-209.6,0-419.3,0-628.9" />
            <motion.path variants={pathVariants} className="st0" d="M546.4,910.5c0-209.6,0-419.3,0-628.9" />
            <motion.path variants={pathVariants} className="st0" d="M606.9,875.6c0-209.6,0-419.3,0-628.9" />
            <motion.path variants={pathVariants} className="st0" d="M728,805.7c0-209.6,0-419.3,0-628.9" />
            <motion.path variants={pathVariants} className="st0" d="M788.5,770.8c0-209.6,0-419.3,0-628.9" />
            <motion.path variants={pathVariants} className="st0" d="M425.4,957.1c0-209.6,0-419.3,0-628.9" />
            <motion.path variants={pathVariants} className="st0" d="M385,933.8c0-209.6,0-419.3,0-628.9" />
            <motion.path variants={pathVariants} className="st0" d="M344.7,910.5c0-209.6,0-419.3,0-628.9" />
            <motion.path variants={pathVariants} className="st0" d="M284.2,875.6c0-209.6,0-419.3,0-628.9" />
            <motion.path variants={pathVariants} className="st0" d="M163.1,805.7c0-209.6,0-419.3,0-628.9" />
            <motion.path variants={pathVariants} className="st0" d="M102.6,770.8c0-209.6,0-419.3,0-628.9" />
        </g>
        <g id="circles3">
            <motion.circle variants={circleVariants} className="st0" cx="405.2" cy="479.4" r="242.1" />
            <motion.circle variants={circleVariants} className="st0" cx="405.2" cy="479.4" r="302.3" />
        </g>
        <g id="circles2">
            <motion.circle variants={circleVariants} className="st0" cx="566.6" cy="526.2" r="161.4" />
            <motion.circle variants={circleVariants} className="st0" cx="566.6" cy="526.2" r="221.9" />
        </g>
        <g id="circles1">
            <motion.circle variants={circleVariants} className="st0" cx="768.3" cy="642.6" r="161.4" />
            <motion.circle variants={circleVariants} className="st0" cx="768.3" cy="642.6" r="221.9" />
            <motion.circle variants={circleVariants} className="st0" cx="768.3" cy="642.6" r="262.2" />
            <motion.circle variants={circleVariants} className="st0" cx="768.3" cy="642.6" r="302.5" />
        </g>
        <g id="logo">
            <motion.path variants={logoVariants} className="st1" d="M445.5,60.1L203.5,199.8l242.1,139.7l242-139.7L445.5,60.1z M445.5,269.7l-121-69.9l121-69.9l121,69.9
		L445.5,269.7z"/>
            <motion.path variants={logoVariants} className="st1" d="M102.6,374.5v104.1c0,108.5,57.9,208.8,151.9,263l90.2,52.1V514.3L102.6,374.5z M284.2,689L284.2,689
		c-74.9-43.3-121.1-123.2-121.1-209.6l121.1,69.9V689z"/>
            <motion.polygon variants={logoVariants} className="st1" points="425.4,467.7 425.4,793.8 385,770.5 385,491 102.6,327.9 102.6,281.4 	" />
            <motion.polygon variants={logoVariants} className="st1" points="768.3,246.4 445.6,432.7 163.1,269.7 203.5,246.4 445.5,386.2 727.9,223.1 	" />
            <motion.path variants={logoVariants} className="st1" d="M788.5,374.5L657,450.4C588.6,489.9,546.4,563,546.4,642v151.8l131.4-75.9c68.5-39.5,110.6-112.6,110.6-191.6
		L788.5,374.5L788.5,374.5z M727.9,526.3c0,57.4-30.6,110.5-80.4,139.2L606.9,689l0-47c0-57.4,30.6-110.4,80.4-139.1l40.7-23.5
		V526.3z"/>
            <motion.path variants={logoVariants} className="st1" d="M748.1,304.7v46.6l-111.6,64.4C555.8,462.3,506,548.4,506,641.6v175.5l-40.3,23.3V642.5
		c0-108.2,57.7-208.1,151.4-262.2L748.1,304.7z"/>
        </g>
    </motion.svg>
}