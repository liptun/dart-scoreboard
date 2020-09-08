import React from 'react'
import { shallow } from 'enzyme'
import { PlayerForm } from '../../components/PlayerForm'

test('Render PlayerForm component', () => {
    const wrapper = shallow(<PlayerForm />)
    expect(wrapper).toMatchSnapshot()
})

// test('PlayerForm add player', () => {
//     const value = 'LiptuN'
//     const wrapper = shallow(<PlayerForm dispatch={() => {}} />)
//     wrapper.find('input').simulate('change', { target: { value } })
//     expect(wrapper.state('playerName')).toBe(value)
// })
