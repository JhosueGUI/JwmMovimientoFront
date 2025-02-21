import { useEffect, useState } from "react"
import { getCategoriaMovimiento } from "../service/ApiMovimiento";

const UsarGetCategoria = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const FetchCategoria = async () => {
            try {
                const respuestaGet = await getCategoriaMovimiento();
                setData(respuestaGet);
            } catch (error) {
                console.error('Error al obtener categoria:', error);
            }
        }
        FetchCategoria();
    }, [])
    return { data }
}
export default UsarGetCategoria;