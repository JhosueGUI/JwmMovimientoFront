import { FloatLabel } from "primereact/floatlabel";
import { Dropdown } from "primereact/dropdown";
import { useEffect, useState } from "react";
import UsarGetProveedor from "../hooks/UsarGetProveedor";

export const SeleccionarProveedor = ({ pasarMovimientoSeleccionado }) => {
    // Hook personalizado para obtener estados
    const { data } = UsarGetProveedor();
    // Estado para la selección del Dropdown
    const [proveedorSeleccionado, setProveedorSeleccionado] = useState(null);
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
                <label htmlFor="ssn" style={{color:'#344054'}}>Proveedor</label>
                <Dropdown
                    id="proveedor_id"
                    value={proveedorSeleccionado}
                    onChange={(e) => setProveedorSeleccionado(e.value)}
                    options={data}
                    optionLabel="nombre_proveedor"
                    showClear
                    placeholder="Seleccione un Proveedor"
                    style={{ width: "100%" }}
                />
            </div>
        </>

    );
}
