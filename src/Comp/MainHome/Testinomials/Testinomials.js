import React from 'react'
import { testimonialsData } from './testimonialsData'

const Testinomials = () => {
    return (
        <div className='py-16'>
            <section
                className="relative py-16 bg-gradient-to-l from-[#350D85] to-[#5D17EB] text-center text-white bg-cover bg-center"
                style={{ backgroundImage: "url('/test_bg.png')" }} // place your bg image in public folder
            >
                <div className="relative max-w-6xl mx-auto px-4  z-10 py-7">
                    {/* Heading */}
                    {/* <h2 className="text-3xl md:text-4xl font-semibold mb-3">Testimonials</h2> */}
                    <h2 className="text-2xl md:text-3xl lg:text-3xl font-semibold mb-2 tracking-wide">
                        Testimonials
                    </h2>
                    <p className="text-lg mb-12">
                        From 'Hola' to Fluent : Real Stories, Real Success.
                    </p>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 pb-6 md:pb-0">
                        {testimonialsData.map((test) => (
                            <div key={test.id} className="bg-gradient-to-b from-[#FCE39F] to-[#FDB900] rounded-b-2xl rounded-tr-2xl shadow-lg p-6 text-left text-black">
                                <div className="flex items-center gap-4 mb-4">
                                    <img
                                        src={test.image}
                                        alt={test.name}
                                        className="w-18 h-18 rounded-b-2xl rounded-tr-2xl object-cover"
                                    />
                                    <div>
                                        <h4 className="font-semibold text-lg">{test.name}</h4>
                                        <p className="text-gray-900 text-sm text-[16px]">{test.location}</p>
                                    </div>
                                </div>

                                <p className="text-gray-800 leading-relaxed text-[18px]">
                                    {test.feedback}
                                </p>
                            </div>
                        ))}
                        {/* Card 1 */}


                    </div>
                </div>
            </section>
        </div>

    )
}

export default Testinomials