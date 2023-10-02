import Image from "next/image"
import { AiFillGithub } from "react-icons/ai"
import { FaExternalLinkSquareAlt } from "react-icons/fa"

export default function Card({ id, previews, title, description, githubLink = '#', frameworks, handleShowInfos, link = '#', linkText = '', link2 = '#', linkText2 = '' }) {

    return (
        <div
            onClick={handleShowInfos}
            id={id}
            className='hover:shadow-xl dark:hover:shadow-lg dark:hover:shadow-gray-500 dark:shadow-none transition duration-150 ease-out hover:ease-in flex flex-col items-center justify-between cursor-pointer shadow-md p-10 rounded-xl my-10 bg-white flex-1'
        >
            <div className='flex justify-around max-h-40 md:max-h-60'>
                {previews.map((img, key) => {
                    return <Image alt="image de presentation" key={key} src={img} objectFit={"contain"} />
                })}
            </div>
            <h3 className='text-xl mt-2 font-medium py-4 text-center'>{title}</h3>
            <p className='text-justify'>{description}</p>
            <div className="flex flex-col gap-4 my-6 ">
                {
                    link2 !== "#" &&
                    <div onClick={(e) => e.stopPropagation()} className="flex w-full justify-center items-center text-sm md:text-lg ">
                        <FaExternalLinkSquareAlt className="text-xl mr-4" />
                        <span className="before:block before:absolute before:inset-0 before:border-b before:border-b-teal-600 before:hover:border-b-teal-800 before:w-full before:scale-x-0 before:hover:scale-x-100 relative inline-block before:transition before:duration-150 before:ease-out before:hover:ease-in">
                            <a href={link} target="_blank" rel="noreferrer" className="text-sm w-full relative hover:text-teal-800 transition duration-150 ease-out hover:ease-in text-teal-600">{linkText2}</a>
                        </span>
                    </div>
                }
                {
                    githubLink !== "#" &&
                    <div onClick={(e) => e.stopPropagation()} className="flex w-full justify-center items-center text-sm md:text-lg ">
                        <AiFillGithub className="text-2xl mr-4" />
                        <span className="before:block before:absolute before:inset-0 before:border-b before:border-b-teal-600 before:hover:border-b-teal-800 before:w-full before:scale-x-0 before:hover:scale-x-100 relative inline-block before:transition before:duration-150 before:ease-out before:hover:ease-in">
                            <a href={githubLink} target="_blank" rel="noreferrer" className="text-sm w-full relative hover:text-teal-800 transition duration-150 ease-out hover:ease-in text-teal-600">Lien Github</a>
                        </span>
                    </div>
                }
                {
                    link !== "#" &&
                    <div onClick={(e) => e.stopPropagation()} className="flex w-full justify-center items-center text-sm md:text-lg ">
                        <FaExternalLinkSquareAlt className="text-xl mr-4" />
                        <span className="before:block before:absolute before:inset-0 before:border-b before:border-b-teal-600 before:hover:border-b-teal-800 before:w-full before:scale-x-0 before:hover:scale-x-100 relative inline-block before:transition before:duration-150 before:ease-out before:hover:ease-in">
                            <a href={link} target="_blank" rel="noreferrer" className="text-sm w-full relative hover:text-teal-800 transition duration-150 ease-out hover:ease-in text-teal-600">{linkText}</a>
                        </span>
                    </div>
                }
            </div>
            <div className='flex justify-center gap-x-10 flex-wrap '>
                {frameworks.map((framework, key) => {
                    return <p key={key} className='text-gray-600 py-1 text-center'>{framework}</p>
                })}
            </div>
        </div>
    )
}