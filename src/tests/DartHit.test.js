import dartHit from '../libs/dartHit'

test('dartHit score calculation', () => {
    expect(dartHit()).toEqual(0)
    expect(dartHit('')).toEqual(0)
    expect(dartHit('wefawefaef')).toEqual(0)
    expect(dartHit('wefawefaef; 3')).toEqual(3)
    expect(dartHit('1;2,3')).toEqual(6)
    expect(dartHit('T20')).toEqual(60)
    expect(dartHit('T20 + 1')).toEqual(61)
    expect(dartHit('T20;1')).toEqual(61)
    expect(dartHit('D20')).toEqual(40)
    expect(dartHit('T19; D2')).toEqual(61)
})
