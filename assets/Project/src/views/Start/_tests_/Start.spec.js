import React from 'react'
import { Start } from '../Start'

describe('Start', () => {
  let component

  beforeEach(() => {
    component = shallow(
      <Start />
    )
  })

  it('should render', () => {
    expect(component.type()).to.eql('div')
  })
})
