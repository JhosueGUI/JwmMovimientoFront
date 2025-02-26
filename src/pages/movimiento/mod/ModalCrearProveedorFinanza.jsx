import { Dialog } from "primereact/dialog";
import { Button } from 'primereact/button';
import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputMask } from "primereact/inputmask";
import UsarGetDatosProveedorApi from "../hooks/UsarGetDatosProveedorApi";
import { DataProveedor } from "../data/DataProveedor";
import { InputNumber } from "primereact/inputnumber";
import UsarCrearProveedor from "../hooks/UsarCrearProveedor";
import { getProveedorFinanza } from "../service/ApiMovimiento";

export const ModalCrearProveedorFinanza = ({pasarSetData}) => {
    //hooks 
    const { fetchDatosProveedor } = UsarGetDatosProveedorApi();
    const { crearProveedor } = UsarCrearProveedor();

    const [modal, setModal] = useState(false);
    const [proveedor, setProveedor] = useState(DataProveedor);

    const abrirModal = () => {
        setModal(true);
    }

    const cerrarModal = () => {
        setModal(false);
    }

    const TraerDatos = async () => {
        const respuesta = await fetchDatosProveedor(proveedor.ruc);
        if (respuesta) {
            setProveedor({
                ...proveedor,
                nombre_proveedor: respuesta.razon_social,
            });
        }
    };
    const crear = async () => {
        const respuesta =await crearProveedor(proveedor);
        const respuestaGet = await getProveedorFinanza();
        pasarSetData(respuestaGet);
        if(respuesta){
            console.log(respuesta);
        }
        cerrarModal();
    }


    const footer = (
        <div className="botonesFooter" style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
            <Button label="Cancelar" icon="pi pi-times" className="p-button-text" onClick={cerrarModal} />
            <Button label="Confirmar" icon="pi pi-check" className="p-button-primary" onClick={crear} />
        </div>
    );

    return (
        <>
            <Button icon="pi pi-plus" aria-label="Filter" onClick={abrirModal} />
            <Dialog
                header={<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div className="header1" style={{ display: 'flex', flexDirection: 'column' }}>
                        <label style={{ fontSize: '26px', color: '#3B75F1' }}>Proveedor</label>
                        <label style={{ fontSize: '18px', fontWeight: 'normal' }}>En esta sección usted puede crear un proveedor </label>
                    </div>
                    <Button icon="pi pi-times" rounded text severity="danger" aria-label="Cancel" onClick={cerrarModal} />
                </div>}
                visible={modal}
                style={{ width: '30%', minWidth: '300px' }}
                footer={footer}
                onHide={cerrarModal}
                closable={false}
            >
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ marginTop: "20px", width: "100%", display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <div className='dni' style={{ display: "flex", flexDirection: "column", gap: "5px", width: "100%" }}>
                            <label htmlFor="dni" style={{ color: '#344054' }}>RUC</label>
                            <div style={{ display: 'flex', gap: '5px', width: '100%' }}>
                                <InputNumber
                                    id="ruc"
                                    name="ruc"
                                    value={proveedor.ruc || ""}
                                    onChange={(e) => setProveedor({ ...proveedor, ruc: e.value })}
                                    style={{ width: "100%" }}
                                    className="w-full"
                                />

                                <Button label="ruc" onClick={TraerDatos} severity="success" style={{ width: '30%' }} outlined />
                            </div>
                        </div>
                        <div className='nombre_proveedor' style={{ display: "flex", flexDirection: "column", gap: "5px", width: "100%" }}>
                            <label htmlFor="nombre_proveedor" style={{ color: '#344054' }}>Razón Social</label>
                            <InputText
                                id="nombre_proveedor"
                                name='nombre_proveedor'
                                value={proveedor.nombre_proveedor}
                                type="text"
                                className="w-full"
                                disabled
                            />
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    );
};
