'use client';

import { motion } from 'framer-motion';
import styles from '../styles/index';
import { slideIn, staggerContainer, textVariant} from '@/utils/motion';
import Link from 'next/link';

const Hero = () => (
    <section className={`${styles.yPaddings} sm:pl-16`}>
        <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView='show'
            viewport={{once:false, amount:0.25}}
            className={`${styles.innerWidth} mx-auto flex flex-col`}
        >
            <div className='flex justify-center items-center flex-col relative z-10'>
                <h1 className={styles.heroHeading}>
                    <motion.div
                        variants={textVariant(.7)}
                        className={styles.heroHeading}
                    >
                        Web Wise
                    </motion.div>
                    <motion.div
                        variants={textVariant(.9)}
                        className='flex flex-row justify-center item-center text-[#B74495]'
                    >
                        Dynamics
                    </motion.div>
                </h1>
                <motion.h2 variants={slideIn('right', 'tween', .2, .7)} className='text-white md:text-4xl text-2xl text-center'>
                    We create modern web aplication.
                </motion.h2>
            </div>
            <motion.div
                variants={slideIn('right', 'tween', .1, .7)}
                className='relative w-full md:-mt-[20px] -mt-[12px]'
            >
                <div className='absolute w-full h-full hero-gradient rounded-t-[140px] z-[0] -top-[30px] opacity-40'/>
                <img 
                    src="/a.jpg" 
                    alt="cover" 
                    className='w-full sm:h-[500px] h-[350px] object-cover rounded-t-[140px] z-10 relative opacity-40 top-7 blur-[2px]'
                />
                <Link 
                    href="#works"
                    className='w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10'>
                    <img 
                        src="/hero-circle.png" 
                        alt="circle" 
                        className='sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain opacity-45 hover:opacity-70 animate-spin-slow'
                    />
                </Link>
            </motion.div>
        </motion.div>
    </section>
);

export default Hero;