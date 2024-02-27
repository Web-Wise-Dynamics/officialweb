'use client';

import { motion } from 'framer-motion';
import styles from '../styles/index';
import { fadeIn } from '@/utils/motion';

const ServiceCard = ({id, imgUrl, title, index, active, handleClick}) => (
    <motion.div
        variants={fadeIn('righ', 'spring', index * 0.3, 0.75)}
        className={`relative ${active === id ? 'lg:flex-[3.5] flex-[10]':'lg:flex-[0.5] flex-[2]'} flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.5s] ease-out-flex cursor-pointer`}
        onClick={() => handleClick(id)}
    >
        <img
            src={imgUrl}
            alt={title}
            className='absolute w-full h-full object-cover rounded-[24px]'
        />
        {
            active !== id ? 
            (
                <h3 className='font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]'>
                    {title}
                </h3>
            ) 
            : 
            (
                <div className='absolute bottom-0 p-8 justify-start w-full flex-col bg-black/60 rounded-b-[24px]' >
                    <div className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[20px] glassmorphism mb-[12px]`}>
                        <img 
                            src="/w2d-bot.png" 
                            alt="bot"
                            className='w-[60%] h-[80%] object-contain' 
                        />
                    </div>
                    <p className='font-normal text-[16px] leading-[16px] text-white uppercase'>
                        View details of services
                    </p>
                    <h2 className='mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white'>
                        {title}
                    </h2>
                </div>
            )
        }
    </motion.div>
);

export default ServiceCard;
