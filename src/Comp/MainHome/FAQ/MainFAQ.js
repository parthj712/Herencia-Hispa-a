"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Box } from "@mui/material";

const faqs = [
    {
        question: "What is the DELE Escolares Exam?",
        answer:
            "The DELE Escolares Exam is an official Spanish proficiency test, offered by Instituto Cervantes for students aged 11 to 17. It certifies their mastery of Spanish for academic and personal use, endorsed by Spain's Ministry of Education and Vocational Training",
    },
    {
        question: "Who can take the DELE Escolares Exam?",
        answer:
            "It is designed for young students between 11 and 17 years old. Students over 19 should register for the general DELE exams",
    },
    {
        question: "What levels does the DELE Escolares Exam cover?",
        answer: "The DELE Escolares covers A1 and A2/B1 levels of the Common European Framework of Reference for Languages (CEFR)",
    },
    {
        question: "What are the exam sections in DELE Escolares?",
        answer:
            "The exam is divided into four sections: Reading comprehension, Listening comprehension, Written expression and interaction, Oral expression and interaction",
    },
    {
        question: "How long is the DELE Escolares Exam?",
        answer: "The A1 exam consists of Reading (45 min), Listening (20 min), Writing (25 min), Oral (30 min: 15+15); the A2 exam has Reading (60 min), Listening (35 min), Writing (50 min), Oral (30 min)",
    },
];

export default function MainFAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <div className="flex flex-col items-center text-center py-10 gap-4">
            <h2 className="text-2xl md:text-3xl font-semibold mb-10 tracking-wide">
                FAQ for the DELE Exam
            </h2>

            <div className="w-full max-w-6xl my-2 space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="bg-[#5D17EB] text-white rounded-md shadow-md"
                    >
                        <button
                            className="w-full flex justify-between items-center text-left px-6 py-4 font-medium"
                            onClick={() =>
                                setOpenIndex(openIndex === index ? null : index)
                            }
                        >
                            <span className="text-[18px]">{faq.question}</span>
                            <ChevronDown
                                className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                    }`}
                            />
                        </button>
                        {openIndex === index && (
                            <div className="text-left px-6 pb-4 text-[16px] bg-[#5D17EB] text-white rounded-b-md">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <Box display={"flex"} alignItems={"center"} gap={4}>
                <p className="text-[20px]">Still have queries ? </p>
                <a href="tel:+919623193036">
                    <button className="hover:cursor-pointer tracking-[0.5px] bg-gradient-to-l from-[#FDB900] to-[#FFD563] text-black font-semibold px-6 py-3 rounded-[10px] shadow-md hover:opacity-90 transition-all duration-300">
                        Quick Call
                    </button>
                </a>
            </Box>
        </div>
    );
}
