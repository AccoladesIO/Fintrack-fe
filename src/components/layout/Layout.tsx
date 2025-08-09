import React from 'react'
import { Sidebar } from './sidebar'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen bg-gray-50 w-full">
            <div className="flex">
                {/* Desktop Sidebar */}
                <div className="hidden md:block">
                    <Sidebar />
                </div>
                {children}
            </div>
        </div>
    )
}

export default Layout
