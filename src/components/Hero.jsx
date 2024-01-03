import React from 'react'
import banner from "/Nityanand_Charan_Das.avif";
import data from "../sample.json";


export default function Hero() {
    const heroStyle = {
        background: `linear-gradient(45deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%),url(${banner})`,
    }

    return (
        <>
            {data.Json.map((item, i) => (
                <div className="w-full h-96" key={i} style={heroStyle}>
                    <div className=" container m-auto h-full pt-14 pb-14 flex gap-12">
                        <div className=" w-1/2 text-white flex flex-col justify-end align-baseline">
                            <p>
                                {item.instructor.name}
                            </p>
                            <p className=" font-black text-3xl">
                                {item.course.title}
                            </p>
                        </div>
                        <div className=" w-1/2"></div>
                    </div>
                </div>
            ))}
        </>
    )
}
