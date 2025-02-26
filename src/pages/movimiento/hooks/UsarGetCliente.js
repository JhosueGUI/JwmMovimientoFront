import { useEffect, useState } from "react"
import { getClienteMovimiento } from "../service/ApiMovimiento";

const UsarGetCliente = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const FetchProveedor = async () => {
            try {
                const respuestaGet = await getClienteMovimiento();
                setData(respuestaGet);
            } catch (error) {
                console.error('Error al obtener proveedor:', error);
            }
        }
        FetchProveedor();
    }, [])
    return { data };
}
export default UsarGetCliente;
