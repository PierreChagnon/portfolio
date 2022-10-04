import Image from "next/image"
import { AiFillGithub } from "react-icons/ai"

export default function Card({ id, previews, title, description, githubLink = '#', frameworks, handleShowInfos }) {

    return (
        <div
            onClick={handleShowInfos}
            id={id}
            className='hover:shadow-xl dark:hover:shadow-lg dark:hover:shadow-gray-500 dark:shadow-gray-500 transition duration-150 ease-out hover:ease-in flex flex-col flex-1 items-center justify-between cursor-pointer shadow-md p-10 rounded-xl my-10 bg-white'
        >
            <div className='flex justify-around max-h-40 md:max-h-60'>
                {previews.map((img, key) => {
                    return <Image key={key} src={img} objectFit={"contain"} />
                })}
            </div>
            <h3 className='text-xl mt-2 font-medium py-4 text-center'>{title}</h3>
            <p className='text-justify mb-2'>{description}</p>
            <div onClick={(e) => e.stopPropagation()} className="flex w-full justify-center items-center text-lg py-4">
                <AiFillGithub className="text-2xl mr-4" />
                <span className="before:block before:absolute before:inset-0 before:border-b before:border-b-teal-600 before:hover:border-b-teal-800 before:w-full before:scale-x-0 before:hover:scale-x-100 relative inline-block before:transition before:duration-150 before:ease-out before:hover:ease-in">
                    <a href={githubLink} target="_blank" rel="noreferrer" className="w-full relative hover:text-teal-800 transition duration-150 ease-out hover:ease-in text-teal-600">Lien Github</a>
                </span>
            </div>
            <div className='flex justify-center gap-x-10 flex-wrap '>
                {frameworks.map((framework, key) => {
                    return <p key={key} className='text-gray-600 py-1 text-center'>{framework}</p>
                })}
            </div>
        </div>
    )
}