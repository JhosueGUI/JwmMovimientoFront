import { useEffect, useState } from "react"
import { getProveedorMovimiento } from "../service/ApiMovimiento";

const UsarGetProveedor = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const FetchProveedor = async () => {
            try {
                const respuestaGet = await getProveedorMovimiento();
                setData(respuestaGet);
            } catch (error) {
                console.error('Error al obtener proveedor:', error);
            }
        }
        FetchProveedor();
    }, [])
    return { data };
}
export default UsarGetProveedor;
