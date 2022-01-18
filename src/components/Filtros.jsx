import {useState, useEffect } from 'react'

const Filtros = ({filtro, setFiltro}) => {
    return (
        <div className="filtros sombra contenedor">
            <form>
                <div className="campo">
                    <label>Filtrar Gastos</label>
                    <select value={filtro} onChange={e => setFiltro(e.target.value)}>
                        <option value="">--Todas las Categorias--</option>
                        <option value="copete">Copete</option>
                        <option value="comida">Comida</option>
                        <option value="puchos">Puchos</option>
                        <option value="propina">Propina</option>
                        <option value="cancion">Cancion Dj</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Filtros
