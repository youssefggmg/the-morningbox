/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Login = () => {
    return (
        <div className="font-[sans-serif]">
            <div className="min-h-screen flex fle-col items-center justify-center py-6 px-4">
                <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
                    <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
                        <form className="space-y-4">
                            <div className="mb-8">
                                <h3 className="text-gray-800 text-3xl font-extrabold">
                                    Sign in
                                </h3>
                                <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                                    Sign in to your account and explore a world of possibilities. Your journey begins here.
                                </p>
                            </div>
                            <div>
                                <label className="text-gray-800 text-sm mb-2 block">
                                    email
                                </label>
                                <div className="relative flex items-center">
                                    <input
                                        className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
                                        name="username"
                                        placeholder="Enter user name"
                                        required
                                        type="email"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="text-gray-800 text-sm mb-2 block">
                                    Password
                                </label>
                                <div className="relative flex items-center">
                                    <input
                                        className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
                                        name="password"
                                        placeholder="Enter password"
                                        required
                                        type="password"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center justify-between gap-4">
                            </div>
                            <div className="!mt-8">
                                <button
                                    className="w-full shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                                    type="button"
                                >
                                    Log in
                                </button>
                            </div>
                            <p className="text-sm !mt-8 text-center text-gray-800">
                                Don't have an account{' '}
                                <a
                                    className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
                                    href="javascript:void(0);"
                                >
                                    Register here
                                </a>
                            </p>
                        </form>
                    </div>
                    <div className="lg:h-[400px] md:h-[300px] max-md:mt-8">
                        <img
                            alt="Dining Experience"
                            className="w-full h-full max-md:w-4/5 mx-auto block object-cover"
                            src="https://readymadeui.com/login-image.webp"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
