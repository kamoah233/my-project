import React from 'react';
import Image from 'next/image';

const skills = [
    { skill: 'HTML'},
    { skill: 'CSS'},
    { skill: 'JavaScript'},
    { skill: 'Python'},
    { skill: 'TypeScript'},
    { skill: 'Git'},
    { skill: 'GitHub'},
    { skill: 'Tailwind CSS'},
    { skill: 'SQL'},
    { skill: 'React'},
    { skill: 'Next.js'},
    { skill: 'C++' },
    ]

const AboutSection = () => {
    return (
        <section id="about">
            <div className='my-12 pb-12 md:pt-16 md:pb-48'>
            <h1 className='text-center font-bold text-4xl'>About Me</h1>
            <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded'></hr>
            <div className='flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10'>
                <div className='md:w-1/2'></div>
                <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>Get to know me! </h1>
                    <p>
                        {" "}
                        Hi, my name is Kofi Amoah and I am a{""}
                        <span className='font-bold'>{" highly ambitious"}</span>,
                        <span className='font-bold'>{"self-motivated"}</span>, and
                        <span className='font-bold'>{" passionate"}</span> individual
                        with a strong desire to learn and grow. I am a recent graduate of
                        Old Dominion University with a B.S. in Computer Science. I am
                        currently looking for entry-level positions in front-end
                        development, web development, cloud computing, DevOps, data
                        science and software engineering.

                    </p>
                    <br />
                    <p>
                        I have a wide range of hobbies and interests. I enjoy playing video games, watching 
                        TV shows and movies, traveling, reading,learning and listening to music. I also enjoy playing basketball,
                        soccer and rugby. I am a huge fan of the NBA and the NFL. 
                    </p>
                    
                    <br />
                    <p>
                        I firmly believe that{" "}
                        <span className='font-bold'>{"hard work"}</span> and{" "}
                        <span className='font-bold'>{"dedication"}</span> are the keys to
                        success. I always strive to never 
                        {""} <span className='font-bold'>{' stop learning and growing.'}</span> and
                        I am always eager to learn about new technologies and I am always looking for ways to improve my skills.
                        I am excited to see what the future holds for me and I am always looking forward to new opportunities.
                    </p>
                    <br />
                
            </div>
            <div className='md:w-1/2'>
                <h1 className="text-center text-2xl font-bold mb-6 md:text-left">My Skills</h1>
                     {/* <p>  */}
                        <div className='flex flex-wrap flex-row justify-center md:justify-start'>
                            {skills.map((item, idx)=> {
                            return <p key={idx}className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold">{item.skill}</p>})}
                        </div>

                    {/* </p> */}
                
            </div>
            {/* <Image src="/about-image.png" alt = "" width={300} height={300} className="rounded-full shadow-2xl" /> */}
        </div>  
    
        
        </section>
    );
};

export default AboutSection;