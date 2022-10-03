import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillGithub, AiFillMail, AiFillPhone } from 'react-icons/ai'

import Image from 'next/image'
import profil from '../public/profil.png'

import design1 from '../public/project-1/screen1.png'
import design2 from '../public/project-1/screen2.png'
import ambLogo from '../public/project-1/logo.png'

import design3 from '../public/project-2/screen1.png'

import design4 from '../public/project-3/screen1.png'

import Card from '../components/Card'
import ModalResume from '../components/ModalResume'

import { useState } from 'react'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  const [showCv, setShowCv] = useState(false)

  const handleCloseModal = () => {
    document.body.classList.toggle('overflow-hidden')
    setShowCv(false)
  }

  const handleShowModal = () => {
    document.body.classList.toggle('overflow-hidden')
    console.log(document.getElementById('container').classList)
    setShowCv(true)
  }

  return (
    <div id="container" className={darkMode ? "dark" : ""}>
      {showCv ? <ModalResume handleCloseModal={handleCloseModal} /> : ''}
      <Head>
        <title>Pierre Chagnon Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10 md:px-20 lg:px-30 pb-10 dark:bg-gray-900'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between dark:text-white'>
            <h1 className='text-xl font-burtons'>Pierre Chagnon</h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl hover:text-gray-400 transition duration-150 ease-out hover:ease-in' /></li>
              <li>
                <button onClick={handleShowModal} className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 hover:scale-110 transition duration-150 ease-out hover:ease-in shadow-md' href="#">Resume</button>
              </li>
            </ul>
          </nav>
          <div className='flex flex-col justify-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium text-center md:text-6xl'>Pierre Chagnon</h2>
            <h3 className='text-2xl py-2 text-center md:text-3xl dark:text-white'>Fullstack developper</h3>
            <p className='text-justify mx-auto text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl dark:text-gray-400'>
              French freelancer providing services for your frontend and backend needs. Join me down below and let`&apos;`s get started !
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 items-center'>
            <a className='hover:scale-110 transition duration-150 ease-out hover:ease-in' href='https://github.com/PierreChagnon' target="_blank" rel="noreferrer" ><AiFillGithub className='cursor-pointer text-gray-800 dark:text-gray-400' /></a>
            <a href='mailto:pc.chagnon@gmail.com'><AiFillMail className='cursor-pointer text-teal-600 dark:text-cyan-500 hover:scale-110 transition duration-150 ease-out hover:ease-in' /></a>
            <a className='hover:scale-110 transition duration-150 ease-out hover:ease-in' href='https://www.malt.fr/profile/pierrechagnon' target="_blank" rel="noreferrer" ><img className="object-contain" width={40} src="https://dam.malt.com/rebranding2020/malt-logo/icon-76x76" alt="" /></a>
          </div>
          <div className='relative w-80 h-80 mx-auto my-20 md:h-96 md:w-96'>
            <Image className='rounded-full' src={profil} layout="fill" />
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>Portfolio</h3>
            <p className='text-mb py-2 leading-8 text-gray-800 dark:text-gray-400'>Some <span className='text-teal-500'>projects</span> I worked on :</p>
          </div>
          <div className='lg:flex gap-10'>
            <Card
              id={"card-1"}
              previews={[design1, design2]}
              title="L'ambassadeur"
              description="Mobile game app built with React Native. Available on App Store and Google Play."
              githubLink="https://github.com/PierreChagnon/Ambassadeur"
              frameworks={["React Native", "CSS 3", "Figma"]}
              screens={[design1, design2, ambLogo]}
            />
            <Card
              id={'card-2'}
              previews={[design3]}
              title="this.Portfolio"
              description="My website portfolio built with React js. You can take a look at my work and contact me."
              githubLink="#"
              frameworks={['React js', 'Next js', 'Tailwind css']}
            />
            <Card
              id={'card - 3'}
              previews={[design4]}
              title="Calculateur loyer Pinel"
              description="Site d'informations sur la loi Pinel et calculateur de réduction d'impôt Pinel. Module React js intégré dans le code HTML. Le formulaire communique les informations sur une base de donnée MySQL via une application Express sur Node js"
              githubLink="#"
              frameworks={['React js', 'Express', 'Node js', 'MySQL']}
            />
          </div>
        </section>
        <section className='flex flex-col'>
          <h3 className='text-3xl py-1 mt-10 dark:text-white'>Contact</h3>
          <p className='text-mb mb-5 py-2 leading-8 text-gray-800 dark:text-gray-400'>Do not hesitate to <span className='text-teal-500'>send me a message </span>:</p>
          <div className='flex my-2 items-center' >
            <AiFillMail className='mr-5 text-4xl text-gray-600 dark:text-gray-400' /><a href='mailto:pc.chagnon@gmail.com' className='py-2 text-teal-500 w-56'>pc.chagnon@gmail.com</a>
          </div>
          <div className='flex my-2 items-center'>
            <AiFillPhone className='mr-5 text-4xl text-gray-600 dark:text-gray-400' /><p className='py-2 text-teal-500 w-56'>+33 6 78 79 68 05</p>
          </div>
          <form action="https://formsubmit.co/363a3252e3545c6eb594a2fd9095b882" method="POST" className='flex flex-col justify-center text-center mt-8 '>
            <input className='dark:outline-none dark:border-0 outline-gray-400 text-gray-600 border-gray-400 border-2 rounded-md my-2 h-10 p-2 ' type="email" name='email' placeholder='Your email...' required />
            <textarea className='dark:outline-none dark:border-0 outline-gray-400 text-gray-600 border-gray-400 border-2 rounded-md my-2 p-2 h-32 ' name="message" id="textarea" placeholder='Your message...'></textarea>
            <input type="hidden" name="_next" value="http://localhost:3000"></input>
            <button className='hover:scale-105 transition duration-150 ease-out hover:ease-in shadow-md w-1/2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white p-2 rounded-md mx-auto my-4' type='submit'>Send message</button>
          </form>
        </section>
      </main>
    </div>
  )
}
