import Link from "next/link";

export default function ProjectDiscussionContainer() {
    return (
        <div className="flex justify-center items-center px-16 py-12 lg:text-2xl md:text-xl text-lg font-light text-black bg-white shadow-lg shadow-slate-500 rounded-[36px] max-md:px-5 border border-slate-300">
            <div className="flex flex-col mt-3.5 w-full max-w-[746px] max-md:max-w-full">
                <div className="lg:text-5xl md:text-3xl text-2xl text-center leading-[52px] max-md:max-w-full max-md:text-4xl">
                    Lets have a Project Discussion
                </div>                
                <div className="mt-8">
                    <input className="border-0 justify-center items-start px-9 py-5 whitespace-nowrap rounded-xl shadow-sm bg-zinc-100 max-md:px-5 w-full" placeholder={'Name'} />
                </div>
                <div className="mt-8">
                    <input className="border-0 justify-center items-start px-9 py-5 whitespace-nowrap rounded-xl shadow-sm bg-zinc-100 max-md:px-5 w-full" placeholder={'Contact Number'} />
                </div>
                <div className="mt-8">
                    <input className="border-0 justify-center items-start px-9 py-5 whitespace-nowrap rounded-xl shadow-sm bg-zinc-100 max-md:px-5 w-full" placeholder={'Email'} />
                </div>
                <div className="mt-8">
                    <input className="border-0 justify-center items-start px-9 py-5 whitespace-nowrap rounded-xl shadow-sm bg-zinc-100 max-md:px-5 w-full" placeholder={'What are you looking for?'} />
                </div>
                <div className="mt-8">
                    <textarea className="border-0 justify-center items-start px-9 py-5 whitespace-nowrap rounded-xl shadow-sm bg-zinc-100 max-md:px-5 w-full" placeholder={'Your Message'} rows={6} cols={6} />
                </div>
                <div className="self-center mt-6 text-3xl text-center text-black max-md:mt-10 bg-[#F7E022] flex w-full justify-center rounded-xl py-2">
                    Submit
                </div>
            </div>
        </div>
    );
};