import { useSearchParams } from "react-router-dom"

export const Room = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get('name');
    return(
        <div>
            <h1>hi {name}</h1>
        </div>
    )
}