import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { shallow } from 'enzyme'
import React from 'react'
import { Start } from '../Start'

chai.use(chaiEnzyme())

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
