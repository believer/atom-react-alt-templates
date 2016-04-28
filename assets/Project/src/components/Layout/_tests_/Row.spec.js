import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { shallow } from 'enzyme'
import React from 'react'
import { Row } from '../Row'

chai.use(chaiEnzyme())

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
