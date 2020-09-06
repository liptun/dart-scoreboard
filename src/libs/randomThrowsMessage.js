const randomThtowsMessage = (playerName = 'Annonymous') => {
    const variants = [
        `${playerName} throws`,
        `${playerName}'s turn`,
        `It's ${playerName}'s time`,
        `${playerName}, time to rock!`,
        `${playerName} it's showtime`,
        `Time to be awesome ${playerName}`,
        `Just do it ${playerName}`,
        `Watch out, ${playerName} throws`,
        `Be gentle ${playerName}`,
    ]
    const randomIndex = Math.floor(Math.random() * variants.length)
    return variants[randomIndex]
}
export default randomThtowsMessage
