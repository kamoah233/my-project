import React from 'react'
import Image from 'next/image'
import Link from 'next/link'    
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs'
import SlideUp from './SlideUp'

const projects = [
    {
        title: 'Portfolio Website',
        description: 'My personal portfolio website built with Next.js, Tailwind CSS, and TypeScript.',
        image: '/portfolio.png',
        gitHub: 'https://github.com/kamoah233/my-project',
        link: 'https://kofiamoah.vercel.app/'
    },
    {
        title: 'Schedule Puzzle',
        description: 'a web application that streamlines schedule creation with  conflict resolution using task prioritization',
        image: '/schedule-puzzle.png',
        gitHub: 'https://github.com/kaypineda/2023-Fall-CS411W-Gold-Prototype',
        link: ''
    },
    {
        title: 'Dining Chatbot',
        description: 'a dining chatbot application built  with Python and Flask',
        image: '',
        gitHub: 'https://github.com/kamoah233/DiningChatBot'
    },
    {
        title: 'Currency Converter',
        description: 'a currency converter application built with Python and the CurrencyAPI',
        image: '',
        gitHub: 'https://github.com/kamoah233/PYTHON-AUTOMATION/blob/main/currency.py'
    }
]

const ProjectsSection = () => {
    return (
        <section id="projects">
        <h1 className='text-center font-bold text-4xl'>
            Projects
            <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded'></hr>
        </h1>

        <div className='=flex flex-col space-y-28'>
            {projects.map((project, idx)=> {
                return (
                <div key={idx}>
                    <SlideUp offset="300px 0px -300px 0px">
                    <div className='flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-10'></div>
                    <div className='mt-8 md:w-1/2'>
                    {project.gitHub && (
                        <Link href={project.gitHub} target="_blank">
                        <Image src={project.image}
                         alt='' 
                         width={500} 
                         height={500}
                         className='rounded-xl shadow-xl hover:opacity-70'/></Link>
                         )}
                         {project.link && (
                     <Link href={project.link} target="_blank">
                     </Link>
                            )}
                    <div className="mt-12 md:w-1/2">
                        <h1 className='text-center text-2xl font-bold mb-6 md:text-left'></h1>
                            <p className='text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral'>{project.description} 
                            {project.title}</p>
                            <div className=" flex flex-row align-bottom space-x-4">
                                <Link href={project.gitHub} target='_blank'></Link>

                                    <a className='text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral'>
                                        <BsGithub size={30}
                                        className="hover:-translate-y-1 transition-transform cursor-pointer" />
                                    </a>
                                {/* <Link href={project.link} >
                                    <a className='text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral'>
                                        <BsArrowUpRightSquare size={30} 
                                        className="hover:-translate-y-1 transition-transform cursor-pointer"/>
                                    </a>
                                </Link> */}
                                
                            </div>
                            
                        </div > 
                    </div> 
                    </SlideUp>
                </div>
                )

            })}
        </div>
        </section>
    )
}  

export default ProjectsSection