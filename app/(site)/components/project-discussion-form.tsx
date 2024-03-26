'use client'
import React, { useState } from 'react';


export default function ProjectDiscussionContainer() {
    const [formData, setFormData] = useState({
        name: { value: '', placeholder: 'Your Name', pattern: ' ', errormessage: 'Your name is required!', required:true },
        contactNumber: { value: '', placeholder: 'Your Contact Number', pattern: ' ', errormessage: 'Your contact number is required!' },
        email: { value: '', placeholder: 'Your Email', pattern: ' ', errormessage: 'Please Enter A valid Email!' },
        lookingFor: { value: '', placeholder: 'What are you looking for?', pattern: ' ', errormessage: 'Your looking for information is required!' },
        message: { value: '', placeholder: 'Your Message', pattern: ' ', errormessage: 'Your message is required!' },
    });
    const [isClicked, setIsClicked] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormData((prevData:any) => ({ ...prevData, [name]: { ...prevData[name], value } }));
    };

    const handleClick = () => {
        setIsClicked(true);
        setIsModalOpen(true);
        console.log('Form Data:', formData);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="flex justify-center items-center px-16 py-12 lg:text-2xl md:text-xl text-lg font-light text-black bg-white shadow-lg shadow-slate-500 rounded-[36px] max-md:px-5 border border-slate-300">
            <div className="flex flex-col mt-3.5 w-full max-w-[746px] max-md:max-w-full">
                <div className="lg:text-4xl md:text-3xl text-l font-medium text-center leading-[52px] max-md:max-w-full max-md:text-4xl">
                    Let's have a Project Discussion
                </div>
                {Object.entries(formData).map(([key, { value, placeholder, pattern, errormessage }]) => (
                    <div key={key} className="mt-7">
                        {key === 'message' ? (
                              <>
                            <textarea
                                className="border-2 justify-center items-start px-7 py-3 whitespace-nowrap rounded-xl shadow-sm bg-zinc-100 max-md:px-5 w-full text-black text-sm placeholder-black resize-none"
                                placeholder={placeholder}
                                rows={4}
                                cols={4}
                                name={key}
                                value={value}
                                onChange={handleChange}
                            />
                            {isClicked && value === '' && (
                                <p className="text-xs text-red-500 ml-2 mt-2">{errormessage}</p>
                            )}
                            </>
                        ) : (
                            <>
                                <input
                                    className="border-2 justify-center items-start px-7 py-3 whitespace-nowrap rounded-xl shadow-sm bg-zinc-100 max-md:px-5 w-full text-black text-sm placeholder-black"
                                    placeholder={placeholder}
                                    pattern={pattern}
                                    name={key}
                                    value={value}
                                    onChange={handleChange}
                                />
                                {isClicked && value === '' &&  !value.match(pattern) &&(
                                    <p className="text-xs text-red-500 ml-2 mt-2">{errormessage}</p>
                                )}
                            </>
                        )}
                    </div>
                ))}

                <div className="self-center mt-6 shadow-md text-base xl:text-1xl lg:text-xl text-center text-black max-md:mt-10 bg-[#F7E022] flex w-full justify-center rounded-xl py-2 cursor-pointer hover:cursor-pointer"
                    style={{ userSelect: 'none', backgroundColor: isClicked ? '#FFD700' : '#F7E022' }}
                    onClick={handleClick}
                >
                    Submit
                </div>
                {isModalOpen && Object.values(formData).every(field => field.value !== '')&& (
                    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center">
                        <div className="bg-white rounded-md p-8">
                            <h2 className="text-1xl font-bold mb-4">Submitted</h2>
                            <p className="text-md">Thanks for reaching out</p>
                            <button className="mt-4 bg-[#F7E022] hover:bg-gray-#FFD700 py-1 px-3  rounded-md" onClick={handleCloseModal}>
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
