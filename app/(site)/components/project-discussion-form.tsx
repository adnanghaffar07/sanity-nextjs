'use client'

import Link from "next/link";
import { useFormik } from "formik"
import { contactSchema } from "../../schemas/index"
import { useForm } from '@formspree/react';
const initialValues = {
    name: "",
    contact_number: "",
    looking: "",
    email: "",
    message: ""

}

export default function ProjectDiscussionContainer() {
    const [state, formspreeHandleSubmit] = useForm("moqgkqrp");
    const handleCombinedSubmit = (event:any) => {
        // Call both form submit functions
        handleSubmit(event);
        formspreeHandleSubmit(event);
    };


    const { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: contactSchema,

        onSubmit: (values, action) => {
            console.log(
                "🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
                values
            )
            action.resetForm()
        }
    })
  
    return (
        <div className="flex justify-center items-center px-16 py-12 lg:text-2xl md:text-xl text-lg font-light text-black bg-white shadow-lg shadow-slate-500 rounded-[36px] max-md:px-5 border border-slate-300">
            <div className="flex flex-col mt-3.5 w-full max-w-[746px] max-md:max-w-full">
                <div className="lg:text-4xl md:text-3xl text-l font-medium  text-center leading-[52px] max-md:max-w-full max-md:text-4xl">
                    Lets have a Project Discussion
                </div>
                <form action="https://formspree.io/f/moqgkqrp"
                method="POST"
                onSubmit={handleCombinedSubmit}>
                    <div className="mt-10">
                        <input
                            className="border-2 justify-center items-start px-7 py-3 whitespace-nowrap rounded-xl shadow-sm bg-zinc-100 max-md:px-5 w-full text-black text-sm placeholder-black"
                            placeholder={'Name'}
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.name && touched.name? 
                        (<p className="form-error">{errors.name}</p>): null}
                    </div>
                    <div className="mt-4">
                        <input
                            className="border-2 justify-center items-start px-7 py-3 whitespace-nowrap rounded-xl shadow-sm bg-zinc-100 max-md:px-5 w-full text-black text-sm placeholder-black"
                            placeholder={'Contact Number'}
                            name="contact_number"
                            value={values.contact_number}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.contact_number && touched.contact_number? 
                        (<p className="form-error">{errors.contact_number}</p>): null}
                    </div>
                    <div className="mt-4">
                        <input
                            className="border-2 justify-center items-start px-7 py-3 whitespace-nowrap rounded-xl shadow-sm bg-zinc-100 max-md:px-5 w-full text-black text-sm placeholder-black"
                            placeholder={'Email'}
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.email && touched.email? 
                        (<p className="form-error">{errors.email}</p>): null}
                    </div>
                    <div className="mt-4">
                        <input
                            className="border-2 justify-center items-start px-7 py-3 whitespace-nowrap rounded-xl shadow-sm bg-zinc-100 max-md:px-5 w-full text-black text-sm placeholder-black"
                            placeholder={'What are you looking for?'}
                            name="looking"
                            value={values.looking}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.looking && touched.looking? 
                        (<p className="form-error">{errors.looking}</p>): null}
                    </div>
                    <div className="mt-4">
                        <textarea
                            className="border-2 justify-center items-start px-7 py-3 whitespace-nowrap rounded-xl shadow-sm bg-zinc-100 max-md:px-5 w-full text-black text-sm placeholder-black resize-none"
                            placeholder={'Your Message'}
                            name="message"
                            value={values.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            rows={4}
                            cols={4}
                        />
                        {errors.message && touched.message? 
                        (<p className="form-error">{errors.message}</p>): null}
                    </div>


                    <button type="submit" className="self-center mt-6 shadow-md text-base xl:text-1xl lg:text-xl text-center text-black max-md:mt-10 bg-[#F7E022] flex w-full justify-center rounded-xl py-2 cursor-pointer hover:cursor-pointer">
                        Submit
                    </button>

                </form>

            </div>
        </div>
    );
};