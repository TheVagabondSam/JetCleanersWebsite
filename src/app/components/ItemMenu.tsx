type Props = {
    name: string
    textColor?: string;
}
export function ItemMenu({name, textColor = 'text-white'} : Props) {
    return (
        <button className="hover:bg-light-blue flex items-center rounded">
            <span className={textColor}>
                {name}
            </span>
        </button>
    )
}
