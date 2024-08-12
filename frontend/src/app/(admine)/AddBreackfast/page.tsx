import Addmealform from '@/components/forms/Addmealform'
import Navbar from '@/components/utils/Nav'
import Sidebar from '@/components/utils/Sidebar'
import React from 'react'


const page = () => {
    return (
        <div>
            <Navbar />
            <div className="flex">
                <Sidebar/>
                <Addmealform/>
            </div>
        </div>
    )
}

export default page
