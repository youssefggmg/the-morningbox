import React from 'react'

const Addmealform = () => {
    return (
        <div className='w-full'>
            <form className="font-[sans-serif] m-6 max-w-4xl mx-auto">
                <div className="grid sm:grid-cols-2 gap-10">
                    <div className="relative flex items-center">
                        <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px]">
                            Title
                        </label>
                        <input
                            className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none"
                            placeholder="Enter first name"
                            type="text"
                            name='title'
                        />
                    </div>
                    <div className="relative flex items-center">
                        <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px]">
                            price
                        </label>
                        <input
                            className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none"
                            placeholder="Enter last name"
                            type="text"
                            name='price'
                        />
                    </div>
                    <div className="relative flex items-center">
                        <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px]">
                            meal Image
                        </label>
                        <input
                            className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none"
                            placeholder="Enter phone no."
                            type="number"
                        />
                    </div>
                    <div className="relative flex items-center">
                        <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px]">
                            Status
                        </label>
                        <input
                            className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none"
                            placeholder="Enter country"
                            type="text"
                        />
                    </div>

                    <div className="relative flex items-center sm:col-span-2">
                        <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px]">
                            descreption
                        </label>
                        <textarea
                            className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none"
                        />
                    </div>
                </div>
                <button
                    className="mt-8 px-6 py-2.5 w-full text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-all"
                    type="button"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Addmealform
