import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { shallow } from 'enzyme'
import React from 'react'
import { Column } from '../Column'

chai.use(chaiEnzyme())

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
