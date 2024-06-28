import React from 'react'
import { IoCloseSharp } from "react-icons/io5";

const Form = () => {
    return (
        <div className="fixed inset-0 p-3 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="bg-white rounded-[15px] shadow-md w-full max-w-[400px]">
                <div className='flex items-center justify-between px-6 py-5 border-b-[1px] border-b-[#00000027]'>
                    <h3 className="text-[21px] font-semibold text-center">Contact Me</h3>
                    <IoCloseSharp className='text-[28px]' />
                </div>
                <form className='p-6' action="">
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full bg-[#F4F5F5] text-[15px] placeholder:text-[15px] p-3 border border-[#00000036] placeholder:text-black rounded-full bg-gray-100 outline-none"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full bg-[#F4F5F5] text-[15px] placeholder:text-[15px] p-3 border border-[#00000036] rounded-full bg-gray-100 outline-none placeholder:text-black"
                        />
                    </div>
                    <div className="mb-4">
                        <textarea
                            placeholder="Message"
                            className="w-full bg-[#F4F5F5] text-[15px] placeholder:text-[15px] h-[150px] p-3 border border-[#00000036] rounded-3xl bg-gray-100 outline-none resize-none placeholder:text-black"
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button className="md:px-6 px-4 text-[16px] hover:scale-110 transition-all py-2 md:py-3 bg-black text-white rounded-full hover:bg-gray-800">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form
