import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"

const About = ({isDarkMode}) => {
  return (
    <motion.div id='about' className='w-full px-4 md:px-[12%] py-16 scroll-mt-20'
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    >
      <motion.h4 
      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.3}}
      className='text-center mb-2 text-lg text-gray-600 dark:text-gray-300'>
        Introduction</motion.h4>

      <motion.h2 
      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.5}}
      className='text-center text-3xl md:text-4xl font-bold mb-12'>
        About me</motion.h2>

        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.8}}
        className='flex w-full flex-col lg:flex-row items-center gap-8 md:gap-16 mb-12'>
            <motion.div
            initial={{opacity: 0, scale: 0.9}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 0.6}}
            className='w-full max-w-xs lg:max-w-sm'>
                <Image 
                  src={assets.me} 
                  alt='Lykheang Taing' 
                  className='w-full h-auto rounded-xl shadow-md'
                  width={400}
                  height={500}
                  priority
                />
            </motion.div>
            <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay: 0.4}}
            className='flex-1'>
                <p className='mb-8 text-lg text-gray-700 dark:text-gray-200'>
                  A recently graduated Master of Information Technology from the University of Auckland. 
                  I have experience building responsive web applications and am passionate about creating intuitive user interfaces.
                  I'm open to work as a Software Developer, Data Analyst, or IT support professional.
                </p>

                <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12'>
                    {infoList.map((item, index)=>(
                        <motion.div 
                        key={index}
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.2 * index}}
                        whileHover={{scale: 1.03, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"}}
                        className='bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300'
                        >
                            <div className='mb-4'>
                              <Image src={isDarkMode ? item.iconDark : item.icon} alt={item.title} className='w-8 h-8' width={32} height={32} />
                            </div>
                            <h3 className='text-xl font-semibold mb-3 text-gray-800 dark:text-white'>{item.title}</h3>
                            
                            {item.categories ? (
                              <div>
                                {item.categories.map((category, idx) => (
                                  <div key={idx} className="mb-2">
                                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{category.name}:</p>
                                    <div className="mt-1 flex flex-wrap gap-1">
                                      {category.skills.map((skill, skillIdx) => (
                                        <span 
                                          key={skillIdx}
                                          className="inline-block px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded-md text-gray-700 dark:text-gray-300"
                                        >
                                          {skill}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <p className='text-gray-600 dark:text-gray-300 text-sm whitespace-pre-line'>
                                {item.description}
                              </p>
                            )}
                        </motion.div>
                    ))}
                </div>

                <motion.h4
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className='mb-4 text-xl font-semibold text-gray-800 dark:text-white'>Tools I use</motion.h4>

                <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className='flex flex-wrap items-center gap-4'>
                    {toolsData.map((tool, index)=>(
                        <motion.div 
                        key={index}
                        whileHover={{ scale: 1.1, y: -5 }}
                        className='flex items-center justify-center w-14 h-14 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300'
                        >
                            <Image 
                              src={tool} 
                              alt='Development tool' 
                              className='w-7 h-7' 
                              width={28} 
                              height={28}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default About