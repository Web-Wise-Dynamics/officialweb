'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ServiceCard, TitleText, TypingText } from '@/components';
import { staggerContainer} from '@/utils/motion';
import { availableServices } from '@/constants';
import styles from '../styles/index';

const Services = () => {
    const [active, setActive] = useState('service-2')
    return (
        <section className={`${styles.paddings}`} id="works">
            <motion.div
                variants={staggerContainer}
                initial='hidden'
                whileInView='show'
                viewport={{once:false, amount:.25}}
                className={`${styles.innerWidth} mx-auto flex flex-col`}
            >
                <TypingText title={'😊 Our services'} textStyles='text-center'/>
                <TitleText title={'Choose the service you need'} textStyles="text-center"/>
                <div
                    className='mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5'
                >
                    {
                        availableServices.map((service, index) => (
                            <ServiceCard
                                key={service.id}
                                {...service}
                                index={index}
                                active={active}
                                handleClick={setActive}

                            />
                        ))
                    }
                </div>
            </motion.div>
        </section>
    )
};

export default Services;