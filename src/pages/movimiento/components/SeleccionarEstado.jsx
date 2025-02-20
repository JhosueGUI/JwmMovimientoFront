import { FloatLabel } from "primereact/floatlabel";
import UsarGetEstado from "../hooks/UsarGetEstado";
import { Dropdown } from "primereact/dropdown";
import { useEffect, useState } from "react";

export const SeleccionarEstado = ({ pasarMovimientoSeleccionado }) => {
    // Hook personalizado para obtener estados
    const { data } = UsarGetEstado();
    // Estado para la selección del Dropdown
    const [estadoSeleccionado, setEstadoSeleccionado] = useState(null);
    //si pasarMovimientoSeleccionado es true, se setea el estado
    useEffect(() => {
        if (pasarMovimientoSeleccionado && data) {
            const estadoEncontrado = data.find(estado => estado.estado_id === pasarMovimientoSeleccionado.estado_id);
            setEstadoSeleccionado(estadoEncontrado || null);
        }
    }, [pasarMovimientoSeleccionado, data]);

    return (
        <>
            <div  style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                <label htmlFor="ssn" style={{color:'#344054'}}>Estado Comprobante</label>
                <Dropdown
                    id="estado_id"
                    value={estadoSeleccionado}
                    onChange={(e) => setEstadoSeleccionado(e.value)}
                    options={data}
                    optionLabel="estado_nombre"
                    showClear
                    placeholder="Seleccione un estado"
                    style={{ width: "100%" }}
                />
            </div>
        </>

    );
}
