import { useEffect, useState } from "react"
import { getPersonaFinanza } from "../service/ApiMovimiento";

const UsarGetPersonaFinanza = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const FetchPersonaFinanza = async () => {
            try {
                const respuestaGet = await getPersonaFinanza();
                setData(respuestaGet);
            } catch (error) {
                console.error('Error al obtener persona finanza:', error);
            }
        }
        FetchPersonaFinanza()
    }, [])
    return { data, setData };
}
export default UsarGetPersonaFinanza