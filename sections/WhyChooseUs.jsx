'use client';

import { motion } from 'framer-motion';
import { Benefit, TitleText, TypingText } from '@/components';
import {fadeIn, planetVariants, staggerContainer} from '@/utils/motion'; 
import { benefitText } from '@/constants';
import styles from '../styles/index';

const WhyChooseUs = () => (
    <section className={`${styles.paddings} relative z-10`}>
        <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView='show'
            viewport={{once:false, amount: 0.25}}
            className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
        >
            <motion.div
                variants={planetVariants('left')}
                className={`flex-1 ${styles.flexCenter}`}
            >
                <img 
                    src="/w2d-benefits.png" 
                    alt="w2d-benefits" 
                    className='w-[70%] h-[70%] object-contain'
                />
            </motion.div>
            <motion.div
                variants={fadeIn('left', 'tween', .2, 1)}
                className='flex-[0.75] flex justify-center flex-col'
            >
                <TypingText title='🤑 Why choose us'/>
                <TitleText title='Reasons to work with us'/>
                <div className='mt-[31px] flex flex-col max-w-[500px] gap-[24px]'>
                    {
                        benefitText.map((feature, index) => (
                            <Benefit 
                                key={feature}
                                number={index + 1}
                                text={feature}
                            />
                        ))
                    }
                </div>
            </motion.div>
        </motion.div>
    </section>
);

export default WhyChooseUs;