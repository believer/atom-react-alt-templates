import React from 'react'
import { Row } from '../Row'

describe('Row', () => {
  let component

  beforeEach(() => {
    component = shallow(
      <Row />
    )
  })

  it('should render', () => {
    expect(component.type()).to.eql('div')
  })
})
