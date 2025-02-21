import { FloatLabel } from "primereact/floatlabel";
import { Dropdown } from "primereact/dropdown";
import { useEffect, useState } from "react";
import UsarGetMoneda from "../hooks/UsarGetMoneda";

export const SeleccionarMoneda = ({ pasarMovimientoSeleccionado }) => {
    // Hook personalizado para obtener estados
    const { data } = UsarGetMoneda();
    // Estado para la selección del Dropdown
    const [monedaSeleccionado, setMonedaSeleccionado] = useState(null);
    //si pasarMovimientoSeleccionado es true, se setea el estado
    // useEffect(() => {
    //     if (pasarMovimientoSeleccionado && data) {
    //         const estadoEncontrado = data.find(estado => estado.estado_id === pasarMovimientoSeleccionado.estado_id);
    //         setEstadoSeleccionado(estadoEncontrado || null);
    //     }
    // }, [pasarMovimientoSeleccionado, data]);

    return (
        <>
            <div  style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                <label htmlFor="ssn" style={{color:'#344054'}}>Moneda</label>
                <Dropdown
                    id="moneda_id"
                    value={monedaSeleccionado}
                    onChange={(e) => setMonedaSeleccionado(e.value)}
                    options={data}
                    optionLabel="nombre_moneda"
                    showClear
                    placeholder="Seleccione una Moneda"
                    style={{ width: "100%" }}
                />
            </div>
        </>

    );
}
