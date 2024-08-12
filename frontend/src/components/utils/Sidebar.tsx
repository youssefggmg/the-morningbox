import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
    return (
        <div>
            <aside id="logo-sidebar" className="top-0 left-0 z-40 w-64 sm:translate-x-0 bg-[#1F2937] h-screen" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto dark:bg-gray-800 bg-[#212529] h-auto;">
                    <a href="https://flowbite.com/" className="flex items-center ps-2.5 mb-5">
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white text-[white]">
                            Dashboard
                        </span>
                    </a>
                    <ul className="space-y-2 font-medium">
                        <Link href={"/AddBreackfast"}>
                        <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="2.2rem" height="2.2rem" viewBox="0 0 24 24"><path fill="white" d="M12 4c4.411 0 8 3.589 8 8s-3.589 8-8 8s-8-3.589-8-8s3.589-8 8-8m0-2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m5 9h-4V7h-2v4H7v2h4v4h2v-4h4z"/></svg>
                            <a className="ms-3 text-[white] group-hover:text-black ">
                                Add Breackfast
                            </a>
                        </div>
                        </Link>
                    </ul>
                </div>
            </aside>
        </div>
    )
}

export default Sidebar
