import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillGithub, AiFillMail, AiFillPhone } from 'react-icons/ai'

import Image from 'next/image'
import profil from '../public/profil.png'

import figma from '../public/logos/logo-figma.png'
import vscode from '../public/logos/logo-vscode.png'
import nodejs from '../public/logos/logo-nodejs.png'
import reactjs from '../public/logos/logo-reactjs.png'
import nextjs from '../public/logos/logo-nextjs.png'

import design1 from '../public/project-1/screen1.png'
import design2 from '../public/project-1/screen2.png'

import design3 from '../public/project-2/screen1.png'
import design32 from '../public/project-2/screen2.png'
import design33 from '../public/project-2/screen3.png'


import design4 from '../public/project-3/screen1.png'

import design5 from "../public/projet-4/reactiontime.png"

import slideAmbassadeur from '../public/project-1/slide-ambassadeur.png'

import Card from '../components/Card'
import ModalResume from '../components/ModalResume'
import MoreInfos from "../components/MoreInfos"

import { useState } from 'react'

export default function Home() {
  const logos = [vscode, figma, nodejs, reactjs, nextjs]

  const [darkMode, setDarkMode] = useState(false)
  const [showCv, setShowCv] = useState(false)
  const [showInfos, setShowInfos] = useState(false)
  const [screens, setScreens] = useState(null)

  const handleCloseModal = () => {
    document.body.classList.toggle('overflow-hidden')
    setShowCv(false)
  }

  const handleShowModal = () => {
    document.body.classList.toggle('overflow-hidden')
    setShowCv(true)
  }

  const handleShowInfos = (screens) => {
    document.body.classList.toggle('overflow-hidden')
    setShowInfos(true)
    setScreens(screens)
  }

  const handleCloseInfos = () => {
    document.body.classList.toggle('overflow-hidden')
    setShowInfos(false)
  }

  return (
    <div id="container" className={darkMode ? "dark" : ""}>
      {showInfos ? <MoreInfos handleCloseInfos={handleCloseInfos} screens={screens} /> : ''}
      {showCv ? <ModalResume handleCloseModal={handleCloseModal} /> : ''}
      <Head>
        <title>Pierre Chagnon Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <nav id='nav' className='sticky shadow-sm top-0 z-30 bg-white w-full px-10 md:px-20 lg:px-30 h-20 flex justify-between items-center dark:text-white dark:bg-zinc-900 transition duration-500'>
        <h1 className='text-xl font-burtons'><a href='https://pierrechagnon.fr' rel='noreferrer'>Pierre Chagnon</a></h1>
        <ul className='flex items-center'>
          <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl hover:text-gray-400 transition duration-150 ease-out hover:ease-in' /></li>
          <li>
            <button onClick={handleShowModal} className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 hover:scale-110 transition duration-150 ease-out hover:ease-in shadow-md' href="#">Mon CV</button>
          </li>
        </ul>
      </nav>
      <main className='bg-white px-10 md:px-20 lg:px-30 py-20 dark:bg-zinc-900 transition duration-500'>
        <div className='flex flex-col justify-center px-10'>
          <h2 className='text-5xl py-4 text-teal-600 font-medium text-center md:text-6xl'>Pierre Chagnon</h2>
          <h3 className='my-4 text-2xl py-4 text-center md:text-3xl dark:text-white'>Développeur web fullstack</h3>

          <p className='py-8 text-justify mx-auto text-md leading-8 text-gray-800 md:text-xl max-w-xl dark:text-gray-400'>
            Développeur junior freelance. Je suis à votre disposition pour vous accompagner dans votre projet de <span className='text-teal-500'>site internet</span> ou d&apos;<span className='text-teal-500'>application mobile</span>. Contactez moi afin que nous puissions commencer à travailler !
          </p>
          
        </div>
        <div id='icons-container' className='md:sticky top-0 py-4 w-fit z-30 mx-auto text-5xl flex gap-16 md:gap-20 lg:gap-28 items-center'>
          <a className='hover:scale-110 transition duration-150 ease-out hover:ease-in' href='https://github.com/PierreChagnon' target="_blank" rel="noreferrer" ><AiFillGithub className='cursor-pointer text-gray-800 dark:text-gray-400' /></a>
          <a href='#contact'><AiFillMail className='cursor-pointer text-teal-600 dark:text-cyan-500 hover:scale-110 transition duration-150 ease-out hover:ease-in' /></a>
          <a className='hover:scale-110 transition duration-150 ease-out hover:ease-in' href='https://www.malt.fr/profile/pierrechagnon' target="_blank" rel="noreferrer" ><img className="object-contain" width={40} src="https://dam.malt.com/rebranding2020/malt-logo/icon-76x76" alt="" /></a>
        </div>
        <div className='relative w-60 h-60 mx-auto my-12 md:h-96 md:w-96'>
          <Image className='rounded-full' src={profil} layout="fill" />
        </div>
        <div className='flex items-center justify-around w-full py-6 lg:px-20 sm:px-10'>
            {logos.map((img, i) => {
              return (
                <div key={i} className={img === nextjs ? 'dark:invert sm:w-16 w-8 sm:grayscale dark:hover:invert-0 hover:grayscale-0 hover:scale-110 ease-out transition duration-300' : 'sm:w-16 w-8 sm:grayscale hover:grayscale-0 hover:cursor-pointer hover:scale-110 ease-out transition duration-300'}>
                  <Image src={img} />
                </div>
              )
            })}
          </div>
        <section className='py-10'>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>Portfolio</h3>
            <p className='text-mb py-2 leading-8 text-gray-800 dark:text-gray-400'>Les <span className='text-teal-500'>projets</span> sur lesquels j&apos;ai travaillé :</p>
          </div>
          <div className='lg:flex lg:flex-wrap gap-10'>
            <Card
              linkText="Lien vers l'App store"
              link="https://apps.apple.com/fr/app/lambassadeur/id1631734917" //lien vers le site
              handleShowInfos={() => handleShowInfos([slideAmbassadeur])}
              id={"card-1"}
              previews={[design1, design2]}
              title="L'ambassadeur"
              description="Application mobile développée avec React Native. Travail réalisé pour le compte de la société Beyond Games. Je suis intervenu sur toute la conception, du design à l'intégration en React Native. L'application est disponible sur l'App Store et le Google Play"
              frameworks={["React Native", "CSS 3", "Figma"]}
            />
            <Card
              link="https://pierrechagnon.fr"
              linkText='Lien du site'
              handleShowInfos={() => handleShowInfos([design3, design32, design33])}
              id={'card-2'}
              previews={[design3]}
              title="Mon portfolio"
              description="Mon portfolio, celui sur lequel vous naviguez actuellement."
              githubLink="https://github.com/PierreChagnon/portfolio"
              frameworks={['React js', 'Next js', 'Tailwind css']}
            />
            <Card
              linkText="Lien du site"
              link="https://calculateur-loyer-pinel.herokuapp.com" //lien vers le site
              handleShowInfos={() => handleShowInfos([design4])}
              id={'card - 3'}
              previews={[design4]}
              title="Agence d'investissement immobilier (En construction...)"
              description="Site d'informations sur la loi Pinel, calculateur de réduction d'impôt Pinel et générateur de lead. Module React js intégré dans le code HTML. Le formulaire communique les informations sur une base de données MySQL via une application Express sur Node js."
              githubLink="#"
              frameworks={['React js', 'Express', 'Node js', 'MySQL']}
            />
            <Card
              linkText="Lien du site"
              link="https://f1-reaction-time.herokuapp.com/" //lien vers le site
              handleShowInfos={() => handleShowInfos([design5])}
              id={'card - 4'}
              previews={[design5]}
              title="F1 reaction time test"
              description="Petit jeu pour tester son temps de reaction."
              githubLink="https://github.com/PierreChagnon/reaction-time"
              frameworks={['HTML', 'CSS', 'JS']}
            />
          </div>
        </section>
        <section id='contact' className='flex flex-col'>
          <h3 className='text-3xl py-1   dark:text-white'>Contact</h3>
          <p className='text-mb mb-5 py-2 leading-8 text-gray-800 dark:text-gray-400'>N&apos;hésitez pas à m&apos;envoyer <span className='text-teal-500'>un message </span>:</p>
          <div className='flex my-2 items-center' >
            <AiFillMail className='mr-5 text-4xl text-gray-600 dark:text-gray-400' /><a href='mailto:pc.chagnon@gmail.com' className='py-2 text-teal-500 w-56'>pc.chagnon@gmail.com</a>
          </div>
          <div className='flex my-2 items-center'>
            <AiFillPhone className='mr-5 text-4xl text-gray-600 dark:text-gray-400' /><p className='py-2 text-teal-500 w-56'>+33 6 78 79 68 05</p>
          </div>
          <form action="https://formsubmit.co/pc.chagnon@gmail.com" method="POST" className='flex flex-col justify-center text-center mt-8 '>
            <input className='dark:outline-none dark:border-0 outline-gray-400 text-gray-600 border-gray-400 border-2 rounded-md my-2 h-10 p-2 ' type="email" name='email' placeholder='Votre adresse mail...' required />
            <textarea className='dark:outline-none dark:border-0 outline-gray-400 text-gray-600 border-gray-400 border-2 rounded-md my-2 p-2 h-32 ' name="message" id="textarea" placeholder='Votre message...'></textarea>
            <input type="hidden" name="_next" value="https://pierrechagnon.fr"></input>
            <button className='hover:scale-105 transition duration-150 ease-out hover:ease-in shadow-md w-1/2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white p-2 rounded-md mx-auto my-4' type='submit'>Envoyer</button>
          </form>
        </section>
      </main>
    </div>
  )
}
