import Image from "next/image"

export default function MoreInfos({ screens, handleCloseInfos }) {
    return (
        <div onClick={handleCloseInfos} id={'more-infos'} className="fixed p-10 top-0 left-0 right-0 cursor-pointer z-50 h-screen bg-opacity-70 bg-gray-900">
            <div className="gap-10 flex md:flex-col flex-wrap items-center justify-center overflow-x-auto w-full h-full ">
                {screens.map((screen, key) => {
                    console.count('mapping')
                    return (
                        <div key={key} className="">
                        <Image src={screen} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}