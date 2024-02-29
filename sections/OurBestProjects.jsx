'use client'; 

import { motion } from 'framer-motion';
import {staggerContainer} from '@/utils/motion'; 
import { projects } from '@/constants';
import { ProjectCard, TitleText, TypingText } from '@/components';
import styles from '../styles/index';

const OurBestProjects = () => (
    <section className={`${styles.paddings} relative z-10`}>
        <motion.div 
            variants={staggerContainer}
            initial='hidden'
            whileInView='show'
            viewport={{once:false, amount:0.25}}
            className={`${styles.innerWidth} mx-auto flex flex-col`}
        >
            <TypingText
                title='🤩 Our Best Projects'
                textStyles='text-center'
            />
            <TitleText
                title='Some success stories'
                textStyles='text-center'
            />
            <div className='mt-[50px] flex flex-col gap-[30px]'>
                {
                    projects.map((project, index) => (
                        <ProjectCard
                            key={`project-${index}`}
                            {...project}
                            index={index + 1}
                        />
                    ))
                }
            </div>
        </motion.div>
    </section>
);

export default OurBestProjects;