import Image from "next/image"

import { AiFillCloseCircle } from "react-icons/ai"

import cv from "../public/CV.png"

export default function ModalResume({ handleCloseModal }) {

    return (

        <div onClick={handleCloseModal} className="fixed top-0 left-0 right-0 overflow-hidden cursor-pointer flex justify-center items-center z-50 w-full h-full bg-opacity-70 bg-gray-900">
            <AiFillCloseCircle className="absolute top-5 right-5 text-3xl text-gray-900" />
            <Image onClick={(e) => e.stopPropagation()} className="cursor-default" height={window.innerHeight - 10} src={cv} objectFit="contain" />
        </div>
    )
}