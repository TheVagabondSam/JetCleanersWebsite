import Link from 'next/link';

type Props = {
    name: string
    textColor?: string;
    href?: string;
};
export function ItemMenu({name, textColor = 'text-white',href } : Props) {
    const buttonContent = (
        <button className="flex focus:ring-logo-blue py-2 px-4 items-center rounded">
            <span className={textColor}>
                {name}
            </span>
        </button>
    );
    return href ? (
        <Link href={href}>
            {buttonContent} 
        </Link>
    ) : (
        buttonContent
    );
}
