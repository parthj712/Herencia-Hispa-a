import React from 'react'

const Connect500 = () => {
    return (
        <div className="py-20">
            <section
                className="relative w-full h-[80vh] md:h-[50vh] lg:h-[50vh] flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: "url('/connect500.png')" }}
            >

                {/* Text Content */}
                <div className="pl-10 md:pl-16 lg:pl-20 relative z-10 max-w-7xl text-left text-white px-8 py-12">
                    <h1 className="text-center drop-shadow-[0_2px_3px_rgba(0,0,0,0.6)] text-2xl md:text-[22px] lg:text-5xl font-semibold mb-4 tracking-[1px] md:tracking-[1.5px] lg:tracking-[2px] lg:leading-[60px] md:leading-[40px]">
                        Connect with 500 Million Reasons to Learn
                    </h1>
                    <p className="text-center text-lg md:text-[16px] drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
                        Spanish isn't just a language it's a global passport. Learning it doesn't just look good on your resume; it opens doors to new friendships, elevates your travel experiences, and gives you a direct connection to a vibrant, half-a-billion-person culture. Your next adventure needs Español
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Connect500