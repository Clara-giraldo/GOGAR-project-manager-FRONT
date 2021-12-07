import {gql} from '@apollo/client'

export const CREAR_PROYECTO = gql`
    mutation CrearProyecto(
        $nombre: String!, 
        $presupuesto: Float!, 
        $lider: String!
    ) {
        crearProyecto(
            nombre: $nombre, 
            presupuesto: $presupuesto, 
            lider: $lider
        ) {
        lider {
            _id
        }
        _id
        nombre
        presupuesto
        estado
        fase
    }
}

`