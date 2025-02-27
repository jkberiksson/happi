'use client';

import { useEffect, useRef } from 'react';
import Header from './components/Header';
import StickySection from './components/StickySection';
import Lenis from '@studio-freight/lenis';
import Grid from './components/Grid';
import { motion, useScroll } from 'motion/react';

export default function Home() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    useEffect(() => {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    return (
        <div>
            <div className='w-[100vw] h-[100vh] fixed top-0'>
                <Grid containerRef={containerRef} scrollYProgress={scrollYProgress} />
            </div>
            <Header />
            <StickySection />
            <div ref={containerRef} className='w-full h-[100vh] bg-transparent'></div>
            <div className='h-screen w-full bg-black z-20 relative flex items-center justify-center text-center text-2xl md:text-4xl lg:text-6xl font-medium px-10 lg:px-20'>
                <motion.h1
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    initial={{ opacity: 0, scale: 0.85, y: 10 }}
                    transition={{ duration: 1 }}>
                    Happi Studios blends creativity and innovation to craft unforgettable experiences. Every project is a bold step toward
                    pushing artistic boundaries.
                </motion.h1>
                <motion.h1
                    className='absolute bottom-0 left-0 py-10 px-10 lg:px-20 text-4xl md:text-6xl lg:text-9xl'
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    initial={{ opacity: 0, scale: 0.85, y: 10 }}
                    transition={{ duration: 1 }}>
                    Happi Studios
                </motion.h1>
            </div>
        </div>
    );
}
