import React from 'react'
import { Column } from '../Column'

describe('Column', () => {
  let component

  beforeEach(() => {
    component = shallow(
      <Column />
    )
  })

  it('should render', () => {
    expect(component.type()).to.eql('div')
  })
})
