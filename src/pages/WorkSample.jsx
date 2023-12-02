import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"


const WorkSample = () => {
    const { state } = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (!state) {
            navigate('/404')
        }
    }, [state])
    console.log(state);
    return (
        <div>WorkSample</div>
    )
}

export default WorkSample