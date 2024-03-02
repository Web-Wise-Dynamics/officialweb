'use client';
import {motion} from 'framer-motion';
import {footerVariants} from '@/utils/motion';
import {socials} from '@/constants'
import styles from '../styles/index';
import Image from 'next/image'
const Footer = () => (
    <motion.footer
        variants={footerVariants}
        initial='hidden'
        whileInView='show'
        className={`${styles.paddings} py-8 relative`}
    >
        <div className='footer-gradient'/>
        <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
            <div className='flex items-center justify-between flex-wrap gap-5'>
                <h4 className='font-bold md:text-[64px] text-[44px] text-white'>
                    Be next case of success
                </h4>
                <button type='button' className='flex items-center h-fit py-4 px-6 bg-[#25618b]/50 rounded-[32px] gap-[12px]'>
                    <Image 
                        src="/w2d-bot.svg" 
                        alt="w2d bot"
                        width={28}
                        height={28}
                        className='object-contain' 
                    />
                    <span className='text-white'>Request budget</span>
                </button>
            </div>
            <div className='flex flex-col'>
                <div className='mb-[50px] h-[2px] bg-white opacity-10'/>
                <div className='flex items-center justify-between flex-wrap gap-4'>
                    <h4 className='font-extrabold text-[24px] text-white uppercase'>Web wise dynamics</h4>
                    <p className='font-normal text-[14px] text-white opacity-50'>Copyright ©️ 2024 Web Wise Dynamics. All rights reserved</p>
                    <div className='flex gap-4'>
                        {
                            socials.map((social) => (
                                <Image 
                                    key={social.name}
                                    src={social.url}
                                    alt={social.name}
                                    width={24}
                                    height={24}
                                    className='object-contain cursor-pointer'
                                />
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
    </motion.footer>
);

export default Footer;