import React from 'react'

const WhyChoose = () => {
    return (
        <div className="py-12 px-8 md:px-12 bg-white text-center">
            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-semibold mb-10 tracking-normal md:tracking-wide leading-[30px] md:leading-[40px] lg:leading-[40px]">
                Why Choose <span className="text-[#6B2EFF]">Herencia Hispana</span> <br />
                for DELE Escolares Preparation
            </h2>

            {/* Grid Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-7xl mx-auto">
                {/* Card 1 */}
                <div className="bg-gradient-to-l from-[#5D17EB] to-[#350D85] text-white rounded-xl p-6 shadow-md hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex flex-col items-center">
                        <span className="text-yellow-400 text-3xl mb-3">🌍</span>
                        <h3 className="font-semibold text-lg mb-1 text-[20px]">Global Success, Local Support</h3>
                        <p className=" text-[15px]">
                            Dedicated to Indian & Global Young Learners
                        </p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-gradient-to-l from-[#5D17EB] to-[#350D85] text-white rounded-xl p-6 shadow-md hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex flex-col items-center">
                        <span className="text-yellow-400 text-3xl mb-3">🎓</span>
                        <h3 className="font-semibold text-lg mb-1 text-[20px]">Precision Aligned Curriculum</h3>
                        <p className=" text-[15px] opacity-90">
                            Tailored to Exact DELE Escolares Requirements
                        </p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="bg-gradient-to-l from-[#5D17EB] to-[#350D85] text-white rounded-xl p-6 shadow-md hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex flex-col items-center">
                        <span className="text-yellow-400 text-3xl mb-3">💡</span>
                        <h3 className="font-semibold text-lg mb-1 text-[20px]">Engaging & Interactive Learning</h3>
                        <p className=" text-[15px] opacity-90">
                            Multi-media Lessons, Real-Life Context
                        </p>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="bg-gradient-to-l from-[#5D17EB] to-[#350D85] text-white rounded-xl p-6 shadow-md hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex flex-col items-center">
                        <span className="text-yellow-400 text-3xl mb-3">📊</span>
                        <h3 className="font-semibold text-lg mb-1 text-[20px]">
                            Tracked Progress, Personalized Mentorship
                        </h3>
                        <p className=" text-[15px] opacity-90">
                            Continuous Tracking & Personal Support
                        </p>
                    </div>
                </div>

                {/* Card 5 */}
                <div className="bg-gradient-to-l from-[#5D17EB] to-[#350D85] text-white rounded-xl p-6 shadow-md hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex flex-col items-center">
                        <span className="text-yellow-400 text-3xl mb-3">💬</span>
                        <h3 className="font-semibold text-lg mb-1 text-[20px]">Real-World Communication</h3>
                        <p className=" text-[15px] opacity-90">Fluency first communication</p>
                    </div>
                </div>

                {/* Card 6 */}
                <div className="bg-gradient-to-l from-[#5D17EB] to-[#350D85] text-white rounded-xl p-6 shadow-md hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex flex-col items-center">
                        <span className="text-yellow-400 text-3xl mb-3">🧠</span>
                        <h3 className="font-semibold text-lg mb-1 text-[20px]">Comprehensive Skill Mastery</h3>
                        <p className=" text-[15px] opacity-90">
                            All Round DELE skill preparation
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default WhyChoose