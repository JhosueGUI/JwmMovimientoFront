//Input con Slider
import { Dialog } from "primereact/dialog";
import { Button } from 'primereact/button';
import { useEffect, useState } from "react";
import { useRef } from "react";
import { Toast } from "primereact/toast";
import { TabMenu } from "primereact/tabmenu";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { SeleccionarEmpresa } from "../components/SeleccionarEmpresa";
import { SeleccionarModo } from "../components/SeleccionarModo";
import { SeleccionarMoneda } from "../components/SeleccionarMoneda";
import { SeleccionarCliente } from "../components/SeleccionarCliente";
import { Calendar } from "primereact/calendar";
import { DataMovimiento } from "../data/DataMovimiento";
import UsarCrearMovimiento from "../hooks/UsarCrearMovimiento";
import { getMovimientos } from "../service/ApiMovimiento";
import { SeleccionarPersona } from "../components/SeleccionarPersona";
import { SeleccionarProveedor } from "../components/SeleccionarProveedor";

const ModalEditarMovimiento = ({pasarAbrirModal,pasarCerrarModal,pasarMovimientoSeleccionado}) => {
    console.log(pasarMovimientoSeleccionado)
    //toast
    const toast = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    
    const menus = [
        {
            label: 'Ingreso',
            icon: 'pi pi-home',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Selected', detail: 'Ingreso Seleccionado', life: 3000 });
            }
        },
        {
            label: 'Egreso',
            icon: 'pi pi-chart-line',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Selected', detail: 'Egreso Seleccionado', life: 3000 });
            }
        },
    ]
    //#region para crear 
    const [movimiento, setMovimiento] = useState(DataMovimiento)

    // Manejar cambios en los campos del formulario
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setMovimiento({
            ...movimiento,
            [name]: value.toUpperCase()
        });
    };

    //traer los datos a los campos
    useEffect(() => {
        if(pasarMovimientoSeleccionado){
            setMovimiento({
                fecha:pasarMovimientoSeleccionado.fecha,
                cliente_id:pasarMovimientoSeleccionado.cliente_id,
                n_operacion:pasarMovimientoSeleccionado.n_operacion,
                ingreso:pasarMovimientoSeleccionado.ingreso,
                descripcion:pasarMovimientoSeleccionado.descripcion,
                empresa_id:pasarMovimientoSeleccionado.empresa_id,
                moneda_id:pasarMovimientoSeleccionado.moneda_id,
                modo_id:pasarMovimientoSeleccionado.modo_id,
                persona_finanza_id:pasarMovimientoSeleccionado.persona_finanza_id,
                egreso:pasarMovimientoSeleccionado.egreso,
                proveedor_finanza_id:pasarMovimientoSeleccionado.proveedor_finanza_id
            })
        }
    },[pasarMovimientoSeleccionado])


    //funciones para eventoss
    const handleClienteChange = (e) => {
        setMovimiento({
            ...movimiento,
            cliente_id: e.id
        });
    };
    const handleMonedaChange = (e) => {
        setMovimiento({
            ...movimiento,
            moneda_id: e.id
        });
    };
    const handleEmpresaChange = (e) => {
        setMovimiento({
            ...movimiento,
            empresa_id: e.id
        })
    }
    const handleModoChange = (e) => {
        setMovimiento({
            ...movimiento,
            modo_id: e.id
        })
    }
    const handlePersonalChange = (e) => {
        setMovimiento({
            ...movimiento,
            persona_finanza_id: e.id
        })
    }
    const handleProveedorChange = (e) => {
        setMovimiento({
            ...movimiento,
            proveedor_finanza_id: e.id
        })
    }

    const footer = (
        <div className="botonesFooter" style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
            <Button label="Cancelar" icon="pi pi-times" className="p-button-text" onClick={pasarCerrarModal} />
            <Button label="Confirmar" icon="pi pi-check" className="p-button-primary" onClick={pasarCerrarModal} />
        </div>
    );


    return (
        <>
            <Dialog
                header={<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div className="header1" style={{ display: 'flex', flexDirection: 'column' }}>
                        <label style={{ fontSize: '26px', color: '#3B75F1' }}>Editar movimiento</label>
                        <label style={{ fontSize: '18px', fontWeight: 'normal' }}>En esta sección usted puede editar su movimiento</label>
                        <div className="card">
                        </div>
                    </div>
                    <Button icon="pi pi-times" rounded text severity="danger" aria-label="Cancel" onClick={pasarCerrarModal} />
                </div>}
                visible={pasarAbrirModal}
                style={{ width: '45%', minWidth: '300px' }}
                footer={footer}
                onHide={pasarCerrarModal}
                closable={false}
            >

                <Toast ref={toast} />
                <TabMenu model={menus} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />

                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ marginTop: "20px", width: "100%", display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <div className="1" style={{ display: "flex", gap: "20px" }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "5px", width: "100%" }}>
                                <label htmlFor="fecha" style={{ color: '#344054' }}>Fecha</label>
                                <Calendar value={movimiento.fecha} name="fecha" onChange={(e) => setMovimiento({ ...movimiento, fecha: e.value })} mask="99/99/9999" />
                            </div>
                            {activeIndex === 1 && (
                                <div style={{ display: "flex", flexDirection: "column", gap: "5px", width: "100%" }}>
                                    <SeleccionarModo pasarSetModo={handleModoChange} pasarMovimientoSeleccionado={pasarMovimientoSeleccionado}/>
                                </div>
                            )}
                            <div style={{ display: "flex", flexDirection: "column", gap: "5px", width: "100%" }}>
                                <label htmlFor="n_operacion" style={{ color: '#344054' }}>Número de Operación</label>
                                <InputText id="n_operacion" name='n_operacion' value={movimiento.n_operacion} onChange={handleInputChange} type="text" className="w-full" />
                            </div>
                        </div>
                        <div className="2" style={{ display: "flex", gap: "20px" }}>

                            {activeIndex === 0 && (
                                <div style={{ width: "100%" }}>
                                    <SeleccionarCliente pasarSetCliente={handleClienteChange} pasarMovimientoSeleccionado={pasarMovimientoSeleccionado}/>
                                </div>
                            )}
                            {activeIndex === 1 && (
                                <>
                                    <div style={{ width: "100%" }}>
                                        <SeleccionarPersona pasarSetPersonal={handlePersonalChange} pasarMovimientoSeleccionado={pasarMovimientoSeleccionado}/>
                                    </div>
                                    <div style={{ width: "100%" }}>
                                        <SeleccionarProveedor pasarSetProveedor={handleProveedorChange} pasarMovimientoSeleccionado={pasarMovimientoSeleccionado}/>
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="3" style={{ display: "flex", gap: "20px" }}>
                            <div style={{ width: "100%" }}>
                                <SeleccionarMoneda pasarSetMoneda={handleMonedaChange} pasarMovimientoSeleccionado={pasarMovimientoSeleccionado}/>
                            </div>
                            {activeIndex === 0 && (
                                <div style={{ display: "flex", flexDirection: "column", gap: "5px", width: "100%" }}>
                                    <label htmlFor="ingreso" style={{ color: '#344054' }}>Ingreso</label>
                                    <InputNumber value={movimiento.ingreso || ''} onChange={(e) => setMovimiento({ ...movimiento, ingreso: e.value })} id="ingreso" name='ingreso' className="w-full" min={0} />
                                </div>
                            )}
                            {activeIndex === 1 && (
                                <div style={{ display: "flex", flexDirection: "column", gap: "5px", width: "100%" }}>
                                    <label htmlFor="egreso" style={{ color: '#344054' }}>Egreso</label>
                                    <InputNumber value={movimiento.egreso} onChange={(e) => setMovimiento({ ...movimiento, egreso: e.value })} id="egreso" name='egreso' className="w-full" min={0} />
                                </div>
                            )}
                        </div>
                        <div className="4" style={{ width: "100%" }}>
                            <SeleccionarEmpresa pasarSetEmpresa={handleEmpresaChange} pasarMovimientoSeleccionado={pasarMovimientoSeleccionado} />
                        </div>
                        <div className="5" style={{ display: "flex", gap: "20px" }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "5px", width: "100%" }}>
                                <label htmlFor="descripcion" style={{ color: '#344054' }}>Descripcion</label>
                                <InputText value={movimiento.descripcion} onChange={handleInputChange} id="descripcion" name='descripcion' type="text" className="w-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    );
};

export default ModalEditarMovimiento;