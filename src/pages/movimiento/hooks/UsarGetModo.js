import { useEffect, useState } from "react";
import { getModoMovimiento } from "../service/ApiMovimiento";

const UsarGetModo = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const FetchModo = async () => {
            try {
                const respuestaGet = await getModoMovimiento();
                setData(respuestaGet);
            } catch (error) {
                console.error('Error al obtener modo:', error);
            }
        }
        FetchModo();
    }, [])
    return { data };
}
export default UsarGetModo;