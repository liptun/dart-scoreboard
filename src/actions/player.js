import { v4 as uuid } from 'uuid'

export const addPlayer = ({
    name = 'Annonymous',
    score = [21,37]
} = {}) => ({
    type: 'ADD_PLAYER',
    player: {
        id: uuid(),
        name,
        score
    }
})

export const removePlayer = ({id}) => ({
    type: 'REMOVE_PLAYER',
    id
})
