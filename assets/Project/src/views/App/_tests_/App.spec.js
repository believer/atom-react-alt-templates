import React from 'react'
import { App } from '../App'

describe('App', () => {
  let component

  beforeEach(() => {
    component = shallow(
      <App />
    )
  })

  it('should render', () => {
    expect(component.type()).to.eql('div')
  })
})
