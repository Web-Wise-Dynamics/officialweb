'use client';

import { motion } from 'framer-motion';
import { TypingText } from '@/components';
import styles from '../styles/index';
import { fadeIn, staggerContainer} from '@/utils/motion';
import Link from 'next/link'; 

const About = () => (
    <section className={`${styles.paddings} relative z-10`}>
        <div className='gradient-02 z-0'/>
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{once:false, amount:.25}}
            className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
        >
            <TypingText
                title="😀 About us"
                textStyles="text-center"
            />
            <motion.p
                variants={fadeIn('up','tween', 0.2, 1)}
                className='text-secondary-white mt-8 font-normal sm:text-[32px] text-[20px] text-center'
            >
                We specialize in the creation of <span className='font-extrabold text-white'>innovative</span> and avant-garde <span className='font-extrabold text-white'>web solutions</span> for companies of all sizes. 
                Founded in the principles of <span className='font-extrabold text-white'>creativity</span>, <span className='font-extrabold text-white'>efficiency</span> and <span className='font-extrabold text-white'>reliability</span>, we commit ourselves to offer adapted <span className='font-extrabold text-white'>high quality</span> software to meet the unique needs and objectives of each client.
            </motion.p>
            <motion.img
                variants={fadeIn('up', 'tween', 0.3, 1)}
                src='/arrow-down.svg'
                alt='arrow down'
                className='w-[18px] h-[28px] object-contain mt-[28px]'
            >

            </motion.img>
        </motion.div>
    </section>
);

export default About;