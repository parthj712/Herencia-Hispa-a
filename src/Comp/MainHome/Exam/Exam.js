import React from 'react'

const Exam = () => {
    return (
        <div className="max-w-3xl mx-auto text-center mt-16 px-6">

            {/* Title */}
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
                DELE Exam Attempts, Dates & Fees (Official Information)
            </h2>

            {/* Subtitle */}
            <p className="text-gray-700 leading-relaxed mb-6">
                For accurate and updated details regarding the number of exam attempts,
                available dates, fee structure, and registration deadlines, please refer
                to the official Instituto Cervantes website.
            </p>

            {/* UI Box */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl py-5 px-6 inline-block shadow-sm">
                <a
                    href="https://nuevadelhi.cervantes.es/en/DELE_ingles/DELE_dates_and_fees.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-700 font-semibold underline hover:text-yellow-800 transition"
                >
                    Click here for Official DELE Exam Attempts & Dates →
                </a>
            </div>
        </div>

    )
}

export default Exam