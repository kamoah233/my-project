import React from 'react'
import {
    AiOutlineGithub,
    AiOutlineLinkedin,
    AiOutlineMail,
} from 'react-icons/ai'


const Footer = () => {
    return (
        <footer className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl'>
            <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
            <div className="mx-auto p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between ">
            <div className='text-neutral-500 dark:text-neutral-500'>
                © 2024 Kofi Amoah
                <div className='="flex flex-row items-center justify-center space-x-2 mb-1'>
                    <a href="https://github.com/kamoah233" rel="noreferrer" target="_blank">
                        <AiOutlineGithub className="hover:-translate-y-1 transition-transform cursor-pointer" size={30} />
                    </a>
                    <a href="https://www.linkedin.com/in/kofi-amoah-7b353119b/" rel="noreferrer" target="_blank">
                        <AiOutlineLinkedin className="hover:-translate-y-1 transition-transform cursor-pointer" size={30} />
                    </a>
                    <a href="mailto:kofilarbiamoah@gmail.com" rel="noreferrer" target="_blank">
                        <AiOutlineMail className="hover:-translate-y-1 transition-transform cursor-pointer" size={30} />
                    </a>
                </div>
            </div>
            </div>
        </footer>
    )
}

export default Footer