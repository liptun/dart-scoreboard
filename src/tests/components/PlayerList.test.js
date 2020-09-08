import React from 'react'
import { shallow } from 'enzyme'
import { PlayerList } from '../../components/PlayerList'

test('Render PlayerList component', () => {
    const wrapper = shallow(
        <PlayerList players={[{ name: 'LiptuN', id: 1 }]} />
    )
    expect(wrapper).toMatchSnapshot()
})

test('Render PlayerList component with empty players array', () => {
    const wrapper = shallow(<PlayerList players={[]} />)
    expect(wrapper).toMatchSnapshot()
})
