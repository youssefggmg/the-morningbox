import React from 'react'
import Navbar from '@/components/utils/Nav'
import Sidebar from '@/components/utils/Sidebar'
import CommandeTabdes from '@/components/tables/CommandeTabdes'

const page = () => {
    return (
        <>
            <Navbar />
            <div className='flex'>
                <Sidebar />
                <CommandeTabdes/>
            </div>
        </>
    )
}

export default page
