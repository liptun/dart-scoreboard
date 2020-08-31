import { v4 as uuid } from 'uuid'

export const addPlayer = ({
    name = 'Annonymous'
} = {}) => ({
    type: 'ADD_PLAYER',
    player: {
        id: uuid(),
        name
    }
})

export const removePlayer = ({id}) => ({
    type: 'REMOVE_PLAYER',
    id
})
