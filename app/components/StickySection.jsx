'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';

export default function StickySection() {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const textRef = useRef(null);
    const isInView = useInView(textRef);

    const createScrollAnimations = (ref) => {
        const { scrollYProgress } = useScroll({
            target: ref,
            offset: ['center end', 'center start'],
        });

        return {
            scale: useTransform(scrollYProgress, [0, 1], [0.5, 1.5]),
            opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]),
        };
    };

    const animation1 = createScrollAnimations(ref1);
    const animation2 = createScrollAnimations(ref2);
    const animation3 = createScrollAnimations(ref3);

    return (
        <div className='h-[440vh] bg-black z-20 relative'>
            {/* Sticky Header Section */}
            <div className='h-screen flex items-center justify-center sticky top-0'>
                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className='text-[500px] font-bold z-10'>
                    Happi
                </motion.h1>
            </div>

            {/* First Section */}
            <motion.div
                ref={ref1}
                className='h-[80vh] flex items-center justify-center text-4xl font-semibold mix-blend-difference w-[65vw] mx-auto text-center'>
                <motion.h1 style={{ ...animation1 }}>
                    Happi – Crafting beautiful, user-friendly websites that bring joy to every click.
                </motion.h1>
            </motion.div>

            {/* Second Section */}
            <motion.div
                ref={ref2}
                className='text-4xl h-[80vh] flex items-center justify-center font-semibold mix-blend-difference w-[65vw] mx-auto text-center'>
                <motion.h1 style={{ ...animation2 }}>
                    Great design meets seamless functionality—Happi makes your digital presence unforgettable.
                </motion.h1>
            </motion.div>

            {/* Third Section */}
            <motion.div
                ref={ref3}
                className='text-4xl h-[80vh] flex items-center justify-center font-semibold mix-blend-difference w-[65vw] mx-auto text-center'>
                <motion.h1 style={{ ...animation3 }}>
                    Your brand, your vision, our creativity—Happi turns ideas into stunning websites.
                </motion.h1>
            </motion.div>

            {/* Sticky Gray Section with More Text */}
            <div className='w-full h-[100vh] bg-gray-200 relative p-10 flex items-center justify-center'>
                <div className='flex' ref={textRef}>
                    <div className='flex-1 self-start overflow-hidden'>
                        <motion.h2
                            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : '200%' }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className='text-xl font-semibold text-black'>
                            We are Happi!
                        </motion.h2>
                    </div>

                    <div className='flex-1 text-3xl text-black'>
                        <div className='overflow-hidden'>
                            <motion.p
                                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : '200%' }}
                                transition={{ duration: 0.5, delay: 0.5 }}>
                                Crafting beautiful websites that not only look stunning but also offer exceptional user experiences.
                            </motion.p>
                        </div>
                        <br />
                        <div className='overflow-hidden'>
                            <motion.p
                                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : '200%' }}
                                transition={{ duration: 0.5, delay: 0.5 }}>
                                Let us help you build your digital future. We believe in the power of thoughtful design, seamless
                                interactivity, and modern aesthetics to create memorable experiences.
                            </motion.p>
                        </div>
                        <br />
                        <div className='overflow-hidden'>
                            <motion.p
                                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : '200%' }}
                                transition={{ duration: 0.5, delay: 0.5 }}>
                                Whether you need a brand-new site or a redesign, we bring passion and expertise to every project. Our team
                                blends creativity with functionality to make your vision come alive.
                            </motion.p>
                        </div>
                        <br />
                        <div className='overflow-hidden'>
                            <motion.p
                                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : '200%' }}
                                transition={{ duration: 0.5, delay: 0.5 }}>
                                At Happi, we don’t just design—we create immersive, meaningful experiences that leave a lasting impact.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
