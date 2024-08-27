import { CloseOutlined } from '@ant-design/icons';
import Link from 'next/link';


interface MyComponentProps {
    isOpen: boolean;
    onClose: () => void;
}



export default function MobileDrawer({ isOpen, onClose }: MyComponentProps) {
    return (
        <div
            className={`fixed flex items-center justify-center z-10 top-0 right-0 h-full w-full bg-breakerBay50  transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
        >
            <div className='flex flex-col gap-4 items-center'>
                <button className="" onClick={onClose}>
                    <CloseOutlined />
                </button>
                <ul className="flex gap-4 flex-col items-center">
                    <Link href="/schwerpunkte">Schwerpunkte</Link>
                    <Link href="/uebermich">Über mich</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/kontakt">Kontakt</Link>

                </ul>
            </div>
        </div>
    );
}