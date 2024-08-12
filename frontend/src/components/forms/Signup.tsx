"use client"
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

// Define the types for your form data
interface FormData {
    name: string;
    lname: string;
    email: string;
    number: string; // Using string to accommodate phone number formats
    password: string;
    address: string;
}

const Signup = () => {
    // Initialize React Hook Form with TypeScript
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    // Handle form submission
    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data);
        // Process form submission
    };

    return (
        <div>
            <div className="max-w-4xl mx-auto font-[sans-serif] p-6">
                <div className="text-center mb-16">
                    <a href="javascript:void(0)">
                        <img
                            alt="logo"
                            className="w-52 inline-block"
                            src="https://readymadeui.com/readymadeui.svg"
                        />
                    </a>
                    <h4 className="text-gray-800 text-base font-semibold mt-6">
                        Sign up into your account
                    </h4>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid sm:grid-cols-2 gap-8">
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">
                                First Name
                            </label>
                            <input
                                {...register('name', { required: 'First name is required' })}
                                className={`bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                                placeholder="Enter name"
                                type="text"
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                        </div>
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">
                                Last Name
                            </label>
                            <input
                                {...register('lname', { required: 'Last name is required' })}
                                className={`bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all ${errors.lname ? 'border-red-500' : 'border-gray-300'}`}
                                placeholder="Enter last name"
                                type="text"
                            />
                            {errors.lname && <p className="text-red-500 text-sm">{errors.lname.message}</p>}
                        </div>
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">
                                Email
                            </label>
                            <input
                                {...register('email', { 
                                    required: 'Email is required', 
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: 'Invalid email address'
                                    }
                                })}
                                className={`bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                placeholder="Enter email"
                                type="text"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        </div>
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">
                                Phone Number
                            </label>
                            <input
                                {...register('number', { 
                                    required: 'Phone number is required', 
                                    minLength: {
                                        value: 10,
                                        message: 'Phone number must be at least 10 digits'
                                    }
                                })}
                                className={`bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all ${errors.number ? 'border-red-500' : 'border-gray-300'}`}
                                placeholder="0676876873465"
                                type="number" // Changed to text to handle different phone number formats
                            />
                            {errors.number && <p className="text-red-500 text-sm">{errors.number.message}</p>}
                        </div>
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">
                                Password
                            </label>
                            <input
                                {...register('password', { 
                                    required: 'Password is required', 
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be at least 6 characters'
                                    }
                                })}
                                className={`bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                                placeholder="Enter password"
                                type="password"
                            />
                            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                        </div>
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">
                                Address
                            </label>
                            <input
                                {...register('address', { required: 'Address is required' })}
                                className={`bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
                                placeholder="65767 Lucila Cliffs, South Jacqulineview, CT 80519"
                                type="text"
                            />
                            {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
                        </div>
                    </div>
                    <div className="!mt-12">
                        <button
                            className="py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                            type="submit"
                        >
                            Sign up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
