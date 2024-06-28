import { ModalType } from '@/types/types';
import React, { FC } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { TbSend } from "react-icons/tb";

const Form: FC<ModalType> = ({ modal, toggle }) => {
    return (
        <div className={`fixed inset-0 px-4 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm transition-all duration-400 ${modal ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <div className={`bg-white rounded-[15px] shadow-md w-full max-w-[400px] transition-all ${modal ? 'scale-100' : 'scale-75'}`}>
                <div className='flex items-center justify-between px-6 py-5 border-b-[1px] border-b-[#00000027]'>
                    <h3 className="text-[21px] font-medium text-center">Contact Me</h3>
                    <IoCloseSharp onClick={toggle} className='text-[30px] cursor-pointer' />
                </div>
                <form className='p-6' action="">
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full bg-[#f4f5f534] text-[15px] placeholder:text-[15px] p-3 border border-[#00000036] placeholder:text-black rounded-full bg-gray-100 outline-none"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full bg-[#f4f5f534] text-[15px] placeholder:text-[15px] p-3 border border-[#00000036] rounded-full bg-gray-100 outline-none placeholder:text-black"
                        />
                    </div>
                    <div className="mb-4">
                        <textarea
                            placeholder="Message"
                            className="w-full bg-[#f4f5f534] text-[15px] placeholder:text-[15px] h-[150px] p-3 border border-[#00000036] rounded-3xl bg-gray-100 outline-none resize-none placeholder:text-black"
                        ></textarea>
                    </div>
                    <div className="flex justify-center">
                        <button className="px-6 flex items-center gap-2 text-[16px] hover:scale-110 transition-all py-3 bg-black text-white rounded-full hover:bg-gray-800">
                            Send Message <TbSend className='text-[#fff] text-[18px]'/>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form
