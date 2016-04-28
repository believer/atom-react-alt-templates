import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { shallow } from 'enzyme'
import React from 'react'
import { App } from '../App'

chai.use(chaiEnzyme())

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
