import React from 'react'
import ReactShallowRenderer from 'react-test-renderer/shallow'
import Footer from '../../components/Footer'

test('Render Footer component', () => {
    const renderer = new ReactShallowRenderer()
    renderer.render(<Footer />)
    expect(renderer.getRenderOutput()).toMatchSnapshot()
})
