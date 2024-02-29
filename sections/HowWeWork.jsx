'use client';

import { motion } from 'framer-motion';
import { DevStep, TitleText, TypingText } from '@/components';
import {fadeIn, planetVariants, staggerContainer} from '@/utils/motion'; 
import { stepsText } from '@/constants';
import styles from '../styles/index';

const HowWeWork = () => (
    <section className={`${styles.paddings} relative z-10`}>
        <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView='show'
            viewport={{once:false, amount: 0.25}}
            className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
        >
            <motion.div
                variants={fadeIn('left', 'tween', .2, 1)}
                className='flex-[0.75] flex justify-center flex-col'
            >
                <TypingText title='🤓 How we work'/>
                <TitleText title='Steps to develop your solution'/>
                <div className='mt-[46px] flex  justify-between gap-[24px]'>
                    {
                        stepsText.map((feature) => (
                            <DevStep 
                                key={feature.title} 
                                {...feature}
                            />
                        ))
                    }
                </div>
            </motion.div>
            <motion.div
                variants={planetVariants('right')}
                className={` flex-1 ${styles.flexCenter}`}
            >
                <img 
                    src="/w2d-steps.png" 
                    alt="w2d-steps" 
                    className='w-[80%] h-[80%] object-contain'
                />
            </motion.div>
        </motion.div>
    </section>
);

export default HowWeWork;