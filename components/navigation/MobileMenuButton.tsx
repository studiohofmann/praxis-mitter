import { MenuOutlined } from "@ant-design/icons";

interface MyComponentProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}


export default function MobileMenuButton({ onClick }: MyComponentProps) {
    return (
        <button onClick={onClick} className='flex items-center gap-3 bg-breakerBay200 px-3  py-2 rounded-sm shadow-md'>

            <MenuOutlined />
            Menü

        </button>
    );
}