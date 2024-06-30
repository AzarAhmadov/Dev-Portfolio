'use client'

import emailjs from "@emailjs/browser";
import { ModalType } from '@/types/types';
import React, { FC, useRef, useState } from 'react';
import { IoCloseSharp } from "react-icons/io5";
import { TbSend } from "react-icons/tb";
import { ToastContainer, toast } from 'react-toastify';

const Form: FC<ModalType> = ({ modal, toggle }) => {

    const form = useRef<HTMLFormElement>(null);

    const [formControl, setFormControl] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [errors, setErrors] = useState({
        name: false,
        email: false,
        message: false
    })

    const validateForm = () => {
        const newErrors = {
            name: formControl.name === "",
            email: formControl.email === "",
            message: formControl.message === ""
        }

        setErrors(newErrors)

        return !newErrors.name && !newErrors.email && !newErrors.message;
    }

    const isFormValid = () => formControl.name != "" && formControl.email != "" && formControl.message != "";

    const formReset = () => {
        formControl.name = ''
        formControl.email = ''
        formControl.message = ''
    }

    const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (validateForm()) {
            if (process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID && process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID && process.env.NEXT_PUBLIC_EMAILJS_USER_ID && form.current) {
                emailjs
                    .sendForm(
                        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                        form.current,
                        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
                    )
                    .then(
                        () => {
                            toast.success('Message sent successfully!', {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                theme: "light",
                            });
                        },
                        () => {
                            toast.error('Message could not be sent!', {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                theme: "light",
                            });
                        }
                    );

                formReset()
                toggle()
            }
        } else {
            toast.error('Please fill in all fields!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            });
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormControl(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    
    return (
        <>
            <div className={`fixed inset-0 px-4 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm transition-all duration-400 ${modal ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className={`bg-white rounded-[15px] shadow-md w-full max-w-[400px] transition-all ${modal ? 'scale-100' : 'scale-75'}`}>
                    <div className='flex items-center justify-between px-6 py-5 border-b-[1px] border-b-[#00000027]'>
                        <h3 className="text-[21px] font-medium text-center">Contact Me</h3>
                        <IoCloseSharp onClick={toggle} className='text-[30px] hover:text-[red] transition-all cursor-pointer' />
                    </div>
                    <form onSubmit={sendEmail} ref={form} className='p-6'>
                        <div className="mb-4">
                            <input
                                type="text"
                                value={formControl.name}
                                onChange={handleChange}
                                name="name"
                                placeholder="Name"
                                className={`${errors.name ? 'border-red-500' : 'border-[#00000036]'} w-full bg-[#f4f5f534] text-[15px] placeholder:text-[15px] p-3 border rounded-full bg-gray-100 outline-none placeholder:text-black`}
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="email"
                                value={formControl.email}
                                onChange={handleChange}
                                name="email"
                                placeholder="Email"
                                className={`${errors.email ? 'border-red-500' : 'border-[#00000036]'} w-full bg-[#f4f5f534] text-[15px] placeholder:text-[15px] p-3 border rounded-full bg-gray-100 outline-none placeholder:text-black`}
                            />
                        </div>
                        <div className="mb-4">
                            <textarea
                                value={formControl.message}
                                onChange={handleChange}
                                name="message"
                                placeholder="Message"
                                className={`${errors.message ? 'border-red-500' : 'border-[#00000036]'} w-full bg-[#f4f5f534] text-[15px] placeholder:text-[15px] h-[150px] p-3 border rounded-3xl bg-gray-100 outline-none resize-none placeholder:text-black`}
                            />
                        </div>
                        <div className="flex justify-center">
                            <button disabled={!isFormValid()} type="submit" className={`${!isFormValid() ? "bg-[#00000054] opacity-[0.3]" : "bg-black opacity-[1]"} px-6 flex items-center gap-2 text-[16px] hover:scale-110 transition-all py-3 text-white rounded-full hover:bg-gray-800`}>
                                Send Message <TbSend className='text-[#fff] text-[18px]' />
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
};

export default Form;
