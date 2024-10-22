type Props = {
    name: string
    textColor?: string;
}
export function ItemMenu({name, textColor = 'text-white' } : Props) {
    return (
        <button className="hover:bg-light-blue flex items-center rounded gap-3">
            <span className={textColor}>
                {name}
            </span>
        </button>
    )
}
