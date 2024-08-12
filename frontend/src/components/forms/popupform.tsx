"use client"
import React, { useState } from 'react';

const ModalComponent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(prev => !prev);
    };
    const confirmedit =(data:FormData)=>{
        const title = data.get("title") as string 
        const price= data.get("price") as string
        const imageUrl = data.get("image") as string
        const status = data.get("status") as string
        console.log(title);
    }

    return (
        <>
            {/* Modal toggle */}
            <button onClick={toggleModal} className="text-blue-600 mr-4" type="button"> Edit </button>

            {/* Main modal */}
            {isModalOpen && (
                <div
                    id="authentication-modal"
                    tabIndex={-1}
                    aria-hidden={!isModalOpen}
                    className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
                >
                    <div className="relative p-4 w-full max-w-md max-h-full bg-white dark:bg-gray-700 rounded-lg shadow">
                        {/* Modal content */}
                        <div className="relative">
                            {/* Modal header */}
                            <div className="flex items-center justify-between p-4 border-b dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white"> Edit Meal Info </h3>
                                <button
                                    type="button"
                                    onClick={toggleModal}
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" height="32" width="28" viewBox="0 0 448 512"><path fill="#ff0000" d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm79 143c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" /></svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            {/* Modal body */}
                            <div className="p-4">
                                <form className="space-y-4" action={confirmedit}>
                                    <div>
                                        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" > title </label>
                                        <input
                                            type="text"
                                            name="title"
                                            id="title"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            placeholder="omlita"
                                            
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                        <input
                                            type="number"
                                            name="price"
                                            id='price'
                                            placeholder="50"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">meal Image</label>
                                        <input
                                            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                            aria-describedby="user_avatar_help"
                                            name='image'
                                            id="image"
                                            type="file"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">status</label>
                                        <select id="status" name='status' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>in stock</option>
                                            <option>out stock</option>
                                        </select>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        edit meal
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ModalComponent;
