import { useEffect } from "react"
import Image from "next/image"

export default function MoreInfos({ id, width, height, screens = [''] }) {
    useEffect(() => {
        document.getElementById(id).style.width = width
        document.getElementById(id).style.height = height
    }, [])

    return (
        <div id={id} className="absolute top-0 right-0 w-full h-full z-30 flex flex-wrap items-center justify-between cursor-pointer rounded-xl bg-white overflow-auto">
            {screens.map((screen, key) => {
                return (
                    <div key={key}>
                        <Image src={screen} objectFit={"cover"} />
                    </div>
                )
            })}
        </div>
    )
}