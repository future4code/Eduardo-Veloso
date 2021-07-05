import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const useNotLogged = () => {
    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem("token")

        if(token === null) {
            history.push('/Login')
        }
    }, []) 
}

export default useNotLogged