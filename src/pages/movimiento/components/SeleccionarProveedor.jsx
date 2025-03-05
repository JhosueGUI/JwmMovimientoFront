import { FloatLabel } from "primereact/floatlabel";
import { Dropdown } from "primereact/dropdown";
import { useEffect, useState } from "react";
import UsarGetProveedorFinanza from "../hooks/UsarGetProveedorFinanza";
import { ModalCrearProveedorFinanza } from "../mod/ModalCrearProveedorFinanza";

export const SeleccionarProveedor = ({ pasarMovimientoSeleccionado, pasarSetProveedor }) => {
    // Hook personalizado para obtener estados
    const { data, setData } = UsarGetProveedorFinanza();
    // Estado para la selección del Dropdown
    const [proveedorSeleccionado, setProveedorSeleccionado] = useState(null);
    //si pasarMovimientoSeleccionado es true, se setea el estado
    useEffect(() => {
        if (pasarMovimientoSeleccionado && data) {
            const proveedorEncontrado = data.find(proveedor => proveedor.id === pasarMovimientoSeleccionado.proveedor_finanza_id);
            setProveedorSeleccionado(proveedorEncontrado || null);
        }
    }, [pasarMovimientoSeleccionado, data]);
    const ManejoDeProveedor = (e) => {
        const seleccion = e.value;
        setProveedorSeleccionado(seleccion);
        pasarSetProveedor(seleccion);
    }
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                <label htmlFor="ssn" style={{ color: '#344054' }}>Proveedor</label>
                <div style={{display:'flex', gap:'5px'}}>
                    <Dropdown
                        id="proveedor_finanza_id"
                        value={proveedorSeleccionado}
                        onChange={ManejoDeProveedor}
                        options={data}
                        optionLabel="nombre_proveedor"
                        showClear
                        filter
                        filterBy="nombre_proveedor"
                        placeholder="Seleccione un Proveedor"
                        style={{ width: "100%" }}
                    />
                    <ModalCrearProveedorFinanza pasarSetData={setData}/>
                </div>
            </div>
        </>

    );
}
