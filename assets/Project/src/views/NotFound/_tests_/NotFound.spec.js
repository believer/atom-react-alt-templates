import React from 'react'
import { NotFound } from '../NotFound'

describe('NotFound', () => {
  let component

  beforeEach(() => {
    component = shallow(
      <NotFound />
    )
  })

  it('should render', () => {
    expect(component.type()).to.eql('div')
  })
})
