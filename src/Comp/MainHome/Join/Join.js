import React from 'react'

const Join = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center gap-8 bg-white px-6 md:px-16 py-12">
            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-end">
                <img
                    src="/join.png" // replace with your actual image path
                    alt="Student holding book"
                    className="rounded-lg max-w-[350px] md:max-w-[500px] object-cover"
                />
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-semibold leading-snug mb-6 text-black">
                    Stop <br />
                    Dreaming. <br />
                    Start Speaking.
                </h2>

                <button className="text-[22px] hover:cursor-pointer tracking-[0.5px] bg-gradient-to-l from-[#FDB900] to-[#FFD563] text-black font-semibold px-6 py-3 rounded-[10px] shadow-md hover:opacity-90 transition-all duration-300">
                    VAMOS! Join The Fluent Movement.
                </button>
            </div>
        </section>
    )
}

export default Join