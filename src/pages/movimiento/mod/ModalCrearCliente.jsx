import { Dialog } from "primereact/dialog";
import { Button } from 'primereact/button';
import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { DataPersonaFinanza } from "../data/DataPersonaFinanza";
import { InputMask } from "primereact/inputmask";
import UsarGetDatosPersonaApi from "../hooks/UsarGetDatosPersonaApi";
import UsarCrearPersonal from "../hooks/UsarCrearPersonal";
import { getClienteMovimiento, getPersonaFinanza } from "../service/ApiMovimiento";
import { DataCliente } from "../data/DataCliente";
import UsarCreateCliente from "../hooks/UsarCreateCliente";
export const ModalCrearCliente = ({ pasarSetData }) => {
    //hooks
    const { CrearCliente } = UsarCreateCliente();

    const [data, setData] = useState(DataCliente);

    const [modal, setModal] = useState(false);

    const abrirModal = () => {
        setModal(true);
    }

    const cerrarModal = () => {
        setModal(false);
    }
    const Crear = async () => {
        await CrearCliente(data);
        const respuesta = await getClienteMovimiento();
        console.log(respuesta);
        pasarSetData(respuesta);
        cerrarModal();
    }

    const footer = (
        <div className="botonesFooter" style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
            <Button label="Cancelar" icon="pi pi-times" className="p-button-text" onClick={cerrarModal} />
            <Button label="Confirmar" icon="pi pi-check" className="p-button-primary" onClick={Crear} />
        </div>
    );

    return (
        <>
            <Button icon="pi pi-plus" aria-label="Filter" onClick={abrirModal} />
            <Dialog
                header={<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div className="header1" style={{ display: 'flex', flexDirection: 'column' }}>
                        <label style={{ fontSize: '26px', color: '#3B75F1' }}>Cliente</label>
                        <label style={{ fontSize: '18px', fontWeight: 'normal' }}>En esta sección usted puede crear su Cliente </label>
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
                        <label htmlFor="nombre_cliente" style={{ color: '#344054' }}>Nombre Completo</label>
                        <InputText
                            id="nombre_cliente"
                            name='nombre_cliente'
                            value={data.nombre_cliente}
                            onChange={(e) => setData({ ...data, nombre_cliente: e.target.value })}
                            type="text"
                            className="w-full"
                        />
                    </div>
                </div>
            </Dialog>
        </>
    );
};
