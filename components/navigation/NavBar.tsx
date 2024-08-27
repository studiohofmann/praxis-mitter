'use client'

import React, { useState } from 'react';
import DesktopNavLinks from './DesktopNavLinks';
import MobileMenuButton from './MobileMenuButton';
import MobileDrawer from './MobileDrawer';




export default function NavBar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const handleDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <>
            <div className="hidden relative py-6 sm:flex flex-col justify-center">
                <DesktopNavLinks />
            </div>

            <div className="sm:hidden">
                <MobileMenuButton onClick={handleDrawerToggle} />
                <MobileDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle} />
            </div>
        </>
    );
}