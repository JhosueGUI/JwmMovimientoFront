import { useEffect, useState } from "react";
import { getMonedaMovimiento } from "../service/ApiMovimiento";

const UsarGetMoneda = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        const FetchMoneda = async () => {
            try {
                const respuestaGet = await getMonedaMovimiento();
                setData(respuestaGet);
            } catch (error) {
                console.error('Error al obtener moneda:', error);
            }
        }
        FetchMoneda();
    }, [])
    return {data}
}
export default UsarGetMoneda;