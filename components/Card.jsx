import Image from "next/image"
import { AiFillGithub } from "react-icons/ai"

import MoreInfos from "./MoreInfos"

import { useState, useRef, useEffect } from "react"

export default function Card({ id, previews, title, description, githubLink = '#', frameworks, screens = [''] }) {
    const [show, setShow] = useState(false)
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const ref = useRef(null)

    useEffect(() => {
        setHeight(ref.current.offsetHeight);
        setWidth(ref.current.offsetWidth);
    }, [])

    return (
        <div
            ref={ref}
            onClick={() => setShow(!show)}
            onMouseLeave={() => setShow(false)}
            id={id}
            className='hover:scale-105 transition duration-150 ease-out hover:ease-in flex flex-col flex-1 items-center justify-between cursor-pointer shadow-lg p-10 rounded-xl my-10 bg-white'
        >
            {/* {show ? <MoreInfos screens={screens} id={id + "-info"} width={width} height={height} /> : ''} */}
            <div className='flex justify-around max-h-40 md:max-h-60'>
                {previews.map((img, key) => {
                    return <Image key={key} src={img} objectFit={"contain"} />

                })}
            </div>
            <h3 className='text-xl font-medium pt-8 pb-2 text-center dark:text-white'>{title}</h3>
            <p className='py-2 text-justify'>{description}</p>
            <div className="flex w-full justify-center items-center text-lg my-4">
                <AiFillGithub className="text-2xl" />
                <a href={githubLink} onclick="event.preventDefault()" target="_blank" rel="noreferrer" className='ml-4 hover:text-teal-800 transition duration-150 ease-out hover:ease-in py-4 text-teal-600'>Github link</a>
            </div>
            <div className='flex justify-center gap-x-10 flex-wrap '>
                {frameworks.map((framework, key) => {
                    return <p key={key} className='text-gray-600 py-1 text-center'>{framework}</p>
                })}
            </div>
        </div>
    )
}