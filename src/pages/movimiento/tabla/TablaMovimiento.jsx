import { useEffect, useState } from "react";
import { ColumnasMovimiento } from "../constant/ColumnasMovimiento";
import { MultiSelect } from 'primereact/multiselect';
import { DataTable } from 'primereact/datatable';
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import UsarGetMovimiento from "../hooks/UsarGetMovimiento";
import { Button } from "primereact/button";
import TrazabilidadMovimiento from "../mod/ModalTrazabilidadMovimiento";
import ModalTrazabilidadMovimiento from "../mod/ModalTrazabilidadMovimiento";
import ModalCrearMovimiento from "../mod/ModalCrearMovimiento";

export function TablaMovimiento() {
    // Obtener datos
    const { data, setData } = UsarGetMovimiento();
    // Estado para las columnas visibles
    const [columnasVisibles, setColumnasVisibles] = useState(ColumnasMovimiento);

    // Estado para la búsqueda global
    const [filtroGlobal, setFiltroGlobal] = useState("");

    // Función para alternar columnas visibles
    const AlternarColumna = (event) => {
        let columnasSeleccionadas = event.value;
        let columnasOrdenadas = ColumnasMovimiento.filter(col =>
            columnasSeleccionadas.some(sCol => sCol.field === col.field)
        );
        setColumnasVisibles(columnasOrdenadas);
    };
    // Filtrar los datos en base a la búsqueda
    const datosFiltrados = data?.filter(item =>
        columnasVisibles.some(col =>
            item[col.field]?.toString().toLowerCase().includes(filtroGlobal.toLowerCase())
        )
    );

    // Abrir Modal Trazabilidad
    const [abrirModalTrazabilidad, setAbrirModalTrazabilidad] = useState(false);
    const [movimientoSeleccionado, setMovimientoSeleccionado] = useState(null);

    const abrirModal = (id) => {
        setAbrirModalTrazabilidad(true);
        setMovimientoSeleccionado(id);
    }
    const cerrarModal = () => {
        setAbrirModalTrazabilidad(false);
    }
    // Columnas Adicionales
    const ColumnasAdicionales = (rowData) => {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '5px' }}>
                <div className="editar">
                    <Button
                        icon="pi pi-pen-to-square"
                        onClick={() => abrirModal(rowData)}
                        severity="success"
                        aria-label="Editar"
                        style={{ color: '#248D63', backgroundColor: '#BFF1DF', border: 'none' }}
                    />
                </div>
            </div>
        );
    };


    return (
        <>
            <div className="card" >
                <div className="encabezado" style={{ width: '100%', color: '#4a7de9', padding: '1rem 1rem' }}>
                    <h2> Gestión Financiera </h2>
                    <span >
                        A continuación, se visualiza la lista de los registro de Movimientos Financieros en el sistema.
                    </span>
                </div>
                <div className="acciones" style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 1rem' }}>
                    <div className="crear" style={{ width: '100%' }}>
                        <ModalCrearMovimiento pasarSetData={setData} />
                    </div>
                    <div className="buscar" style={{ display: 'flex', width: '100%', justifyContent: 'flex-end', }}>
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-search"></i>
                        </span>
                        <InputText
                            value={filtroGlobal}
                            onChange={(e) => setFiltroGlobal(e.target.value)}
                            placeholder="Buscar..."
                        />
                    </div>
                </div>
                    <DataTable
                        value={datosFiltrados}
                        paginator
                        rows={10}
                        rowsPerPageOptions={[5, 10, 20]}
                        header={
                            <MultiSelect
                                style={{ width: '100%' }}
                                value={columnasVisibles}
                                options={ColumnasMovimiento}
                                optionLabel="header"
                                onChange={AlternarColumna}
                                display="chip"
                                placeholder="Selecciona columnas"
                            />
                        }
                    >
                        {columnasVisibles.map(col => (
                            <Column key={col.field} field={col.field} header={col.header} sortable  />
                        ))}
                        <Column
                            header="Trazabilidad"
                            
                            body={ColumnasAdicionales}
                            style={{ textAlign: 'center', width: '5rem', position: 'sticky', right: 0, background: 'white' }}
                        />
                    </DataTable>

            </div>
            <ModalTrazabilidadMovimiento pasarAbrirModal={abrirModalTrazabilidad} pasarCerrarModal={cerrarModal} pasarMovimientoSeleccionado={movimientoSeleccionado} />
        </>
    );

}
