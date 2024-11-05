import { ReactNode } from "react"

type Props = {
    children: ReactNode
}
export function Container({ children }: Props) {
    return(
        <div className="flex items-center w-full max-w-[1246px] mx-auto">
            {children}
        </div>
    ) 
}