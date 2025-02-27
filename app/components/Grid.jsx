import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';

import imgA from '@/public/images/1.jpg';
import imgB from '@/public/images/2.jpg';
import imgC from '@/public/images/3.jpg';
import imgD from '@/public/images/4.jpg';
import imgE from '@/public/images/5.jpg';
import imgF from '@/public/images/6.jpg';
import imgG from '@/public/images/7.jpg';
import imgH from '@/public/images/8.jpg';
import imgI from '@/public/images/9.jpg';

export default function Grid({ containerRef, scrollYProgress }) {
    const column1Y = useTransform(scrollYProgress, [0, 1], [-300, 200]);
    const column3Y = useTransform(scrollYProgress, [0, 1], [300, -200]);
    const height = useTransform(scrollYProgress, [0, 1], ['20vh', '100vh']);
    const width = useTransform(scrollYProgress, [0, 1], ['20vw', '100vw']);
    const moveLeft = useTransform(scrollYProgress, [0, 1], [0, -900]);
    const moveRight = useTransform(scrollYProgress, [0, 1], [0, 900]);
    const moveDown = useTransform(scrollYProgress, [0, 1], [0, 500]);
    const moveUp = useTransform(scrollYProgress, [0, 1], [0, -500]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);

    return (
        <motion.div className='w-full h-screen flex justify-center items-center relative'>
            <motion.div style={{ height, width }} className='w-[20vw] h-[20vh] relative'>
                <Image src={imgE} alt='imgE' fill className='object-cover' />
            </motion.div>

            <motion.div
                style={{ x: moveLeft, y: column3Y, scale }}
                className='absolute top-0 left-0 w-1/3 h-screen flex flex-col gap-4 p-4'>
                <div className='flex-1 relative w-full h-full'>
                    <Image src={imgG} alt='imgG' fill className='object-cover' />
                </div>
                <div className='flex-1 relative w-full h-full'>
                    <Image src={imgH} alt='imgH' fill className='object-cover' />
                </div>
                <div className='flex-1 relative w-full h-full'>
                    <Image src={imgI} alt='imgI' fill className='object-cover' />
                </div>
            </motion.div>

            <motion.div
                style={{ x: moveRight, y: column1Y, scale }}
                className='absolute top-0 right-0 w-1/3 h-screen flex flex-col gap-4 p-4'>
                <div className='flex-1 relative w-full h-full'>
                    <Image src={imgA} alt='imgA' fill className='object-cover' />
                </div>
                <div className='flex-1 relative w-full h-full'>
                    <Image src={imgB} alt='imgB' fill className='object-cover' />
                </div>
                <div className='flex-1 relative w-full h-full'>
                    <Image src={imgC} alt='imgC' fill className='object-cover' />
                </div>
            </motion.div>

            <motion.div style={{ y: moveUp, scale }} className='absolute top-0 w-1/3 h-[35vh] p-4'>
                <div className='relative w-full h-full'>
                    <Image src={imgD} alt='imgD' fill className='object-cover' />
                </div>
            </motion.div>

            <motion.div style={{ y: moveDown, scale }} className='absolute bottom-0 w-1/3 h-[35vh] p-4'>
                <div className='relative w-full h-full'>
                    <Image src={imgF} alt='imgF' fill className='object-cover' />
                </div>
            </motion.div>
        </motion.div>
    );
}
