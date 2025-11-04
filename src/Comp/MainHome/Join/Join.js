import React from 'react'
import Link from 'next/link' // Import Link if you're using Next.js

const Join = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center gap-8 bg-white px-8 md:px-16 py-12">
            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-end">
                <img
                    src="/join.png" // replace with your actual image path
                    alt="Student holding book"
                    className="rounded-lg max-w-full md:max-w-[500px] object-cover"
                />
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-semibold leading-snug mb-6 text-black">
                    Stop
                    Dreaming. <br />
                    Start Speaking.
                </h2>

                 <Link
                    href="https://forms.gle/xJjxwJgZmxmixHbN8"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="text-[18px] md:text-[18px] lg:text-[20px] hover:cursor-pointer tracking-[0px] xl:tracking-[1px] lg:tracking-[1px] bg-gradient-to-l from-[#FDB900] to-[#FFD563] text-black font-semibold px-6 py-3 md:py-2 lg:py-3 rounded-[10px] shadow-md hover:opacity-90 transition-all duration-300">
                         VAMOS! Join The Fluent Movement.
                    </button>
                </Link>
            </div>
        </section>
    )
}

export default Join