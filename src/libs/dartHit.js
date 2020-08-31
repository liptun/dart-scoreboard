export default (inputString = '') => {
    const hitsBuffer = inputString.split(' ').join('').split(/[+;, ]/)
    const hits = hitsBuffer.map(el => {
        if (Number.isNaN(parseInt(el))) {
            const hitBuffer = Array.from(el)
            const multipler = hitBuffer.length ? hitBuffer.shift().toUpperCase() : 1
            const hit = parseInt(hitBuffer.join(''))
            if (Number.isNaN(hit)) {
                return 0
            }
            if (multipler === 'D') {
                return hit * 2
            }
            if (multipler === 'T') {
                return hit * 3
            }
            return hit
        } else {
            return parseInt(el)
        }
    })
    return hits.reduce((prev, current) => {
        if (Number.isNaN(current)) {
            return prev
        } else {
            return prev + current
        }
    })
}