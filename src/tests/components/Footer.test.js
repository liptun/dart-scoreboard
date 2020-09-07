import React from 'react'
import { shallow } from 'enzyme'
import Footer from '../../components/Footer'

test('Render Footer component', () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper).toMatchSnapshot()
})
