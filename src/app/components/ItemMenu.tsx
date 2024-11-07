type Props = {
    name: string
    textColor?: string;
}
export function ItemMenu({name, textColor = 'text-white'} : Props) {
    return (
        <button className="hover:bg-light-blue flex focus:ring-logo-blue py-2 px-4 items-center md-rounded">
            <span className={textColor}>
                {name}
            </span>
        </button>
    )
}
