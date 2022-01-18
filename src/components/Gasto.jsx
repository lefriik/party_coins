import React from 'react'
import { LeadingActions, 
    SwipeableList, 
    SwipeableListItem, 
    SwipeAction, 
    TrailingActions 
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css';


import { formatearFecha } from '../helpers'

import IconoCopete from '../img/icono_copete.svg'
import IconoComida from '../img/icono_comida.svg'
import IconoPuchos from '../img/icono_puchos.svg'
import IconoPropina from '../img/icono_propina.svg'
import IconoCancion from '../img/icono_cancion.svg'

const diccionarioIconos = {
    copete : IconoCopete,
    comida : IconoComida,
    puchos : IconoPuchos,
    propina : IconoPropina,
    cancion : IconoCancion
}

const Gasto = ({gasto, setGastoEditar, eliminarGasto}) => {
    const { categoria, nombre, cantidad, id, fecha } = gasto

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => setGastoEditar(gasto)}>
                Editar
            </SwipeAction>
        </LeadingActions>
    )

    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction 
                onClick={() => eliminarGasto(id)}
                destructive={true}
            >
                Eliminar
            </SwipeAction>
        </TrailingActions>
    )


    return (
        <SwipeableList> 
            <SwipeableListItem
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            > 
                <div className="gasto sombra">
                    <div className='contenido-gasto'>
                        <img src={diccionarioIconos[categoria]} alt="Icono Gasto" />
                        <div className="descripcion-gasto">
                            <p className='categoria'>{categoria}</p>
                            <p className='nombre-gasto'>{nombre}</p>
                            <p className='fecha-gasto'>Agregado el: <span>{formatearFecha(fecha)}</span></p>
                            
                        </div>
                    </div>
                    <p className="cantidad-gasto">${cantidad}</p>
                </div>
            </SwipeableListItem>
        </SwipeableList> 

    )
}

export default Gasto
