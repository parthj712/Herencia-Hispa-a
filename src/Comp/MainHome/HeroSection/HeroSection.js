import React from 'react';

const HeroSection = () => {
    return (
        <div className="pb-4">
            <section
                className="relative w-full h-[80vh] flex items-end justify-start bg-cover bg-center"
                style={{ backgroundImage: "url('/flag.jpg')" }}
            >
                {/* Optional overlay for contrast */}
                {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

                {/* Text Content */}
                <div className="pl-10 md:pl-16 lg:pl-20 relative z-10 max-w-7xl text-left text-white px-8 pb-12">
                    <h1 className="drop-shadow-[0_2px_3px_rgba(0,0,0,0.6)] text-2xl md:text-3xl lg:text-5xl font-bold mb-4 tracking-[1px] md:tracking-[1.5px]  lg:leading-[60px] md:leading-[40px]">
                        Unlock Fluent Spanish in India — Your Next Adventure Starts Today
                    </h1>
                    <p className="text-lg md:text-xl drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
                        Join the best online Spanish classes in India with expert tutors who make learning fun and effective. <br/>
                        Whether you’re preparing for the DELE Spanish examor starting as a beginner, our
                        affordable Spanish language courseshelp you master real-world conversations at your own pace.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;
