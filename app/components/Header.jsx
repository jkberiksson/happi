'use client';

import { motion } from 'motion/react';

export default function Header() {
    return (
        <motion.header
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
            className='fixed top-0 left-0 w-full p-4 flex justify-between z-30'>
            <h1 className='cursor-pointer'>Happi</h1>
            <div className='flex gap-2'>
                <p className='hidden md:block cursor-pointer'>
                    <span className='pr-1'>[</span>Culture<span className='pl-1'>]</span>
                </p>
                <p className='hidden md:block cursor-pointer'>
                    <span className='pr-1'>[</span>Feed<span className='pl-1'>]</span>
                </p>
                <p className='hidden md:block cursor-pointer'>
                    <span className='pr-1'>[</span>Career<span className='pl-1'>]</span>
                </p>
                <p className='hidden md:block cursor-pointer'>
                    <span className='pr-1'>[</span>Contact<span className='pl-1'>]</span>
                </p>
                <p className='md:hidden cursor-pointer'>[Menu]</p>
            </div>
            <p className='hidden md:block cursor-pointer'>Sweden</p>
        </motion.header>
    );
}
