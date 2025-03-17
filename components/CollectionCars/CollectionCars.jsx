'use client'

import { CARS } from "@/app/data/cars"
import CollectionCarsCard from "./CollectionCarsCard"
import { useRef, useState } from "react"

const CollectionCars = ({ types, car }) => {
    const itemsRef = useRef(null)
    const [isMouseDown, setIsMouseDown] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)

    const handleMouseDown = (e) => {
        e.preventDefault()
        setIsMouseDown(true)
        setStartX(e.pageX - itemsRef.current.offsetLeft)
        setScrollLeft(itemsRef.current.scrollLeft)
    }

    const handleMouseLeave = (e) => {
        setIsMouseDown(false)
    }

    const handleMouseUp = (e) => {
        setIsMouseDown(false)
    }

    const handleMouseMove = (e) => {
        if (!isMouseDown) return
        e.preventDefault()
        const x = e.pageX - itemsRef.current.offsetLeft
        const walk = (x - startX) * 2
        itemsRef.current.scrollLeft = scrollLeft - walk

    }

    return (
        <main className="pl-6 py-8 md:px-12 lg:px-16 xl:px-21 md:flex flex-col items-center w-full ">
            <header className="flex justify-between w-full md:px-5 mb-5">
                <h1 className="text-sm md:text-base font-semibold text-[#90A3BF]">{types}</h1>
                <p className="text-xs md:text-base text-[#3563E9] cursor-pointer pr-6">View All</p>
            </header>
            <section>
                <div className="flex overflow-x-auto snap-x snap-mandatory smooth-scroll  no-scrollbar gap-4 md:gap-8 disable-select"
                    ref={itemsRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                >
                    {car?.map((item, idx) => (
                        <CollectionCarsCard {...item} key={idx} />
                    ))}
                </div>
            </section>
        </main>
    )
}

export default CollectionCars