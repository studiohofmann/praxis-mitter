"use client"

import dynamic from 'next/dynamic';


interface MyComponentProps {
    isOpen: boolean;
    onClose: () => void;
}

const MenuePunkte = dynamic(() => import('./MenuePunkte'), {
    ssr: true,
    loading: () => <p>Loading...</p>,
});

export default function MobileDrawer({ isOpen, onClose }: MyComponentProps) {

    const handleClose = () => {
        onClose();
    };
    return (
        <div
            className={`bg-gimblet700 fixed flex items-center justify-center z-10 top-0 right-0 h-full w-full bg-breakerBay50  transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
        >
            <div className='flex flex-col gap-4 items-center'>
                <MenuePunkte onLinkClick={handleClose} />
            </div>
        </div>
    );
}