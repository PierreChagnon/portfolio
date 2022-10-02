import Image from "next/image"

import { AiFillCloseCircle } from "react-icons/ai"

import cv from "../public/CV.png"

export default function ModalResume({ handleCloseModal }) {
    return (

        <div onClick={handleCloseModal} className="overflow-hidden cursor-pointer flex justify-center items-center z-10 w-full h-full bg-opacity-70 bg-gray-900 absolute">
            <AiFillCloseCircle className="absolute top-5 right-5 text-3xl text-gray-900" />
            <Image onClick={(e) => e.stopPropagation()} className="cursor-default" height={window.innerHeight - 10} src={cv} objectFit="contain" />
        </div>
    )
}