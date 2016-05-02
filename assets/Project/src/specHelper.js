const chai = require('chai')
const sinonChai = require('sinon-chai')
const chaiEnzyme = require('chai-enzyme')

global.expect = chai.expect
global.sinon = require('sinon')
global.shallow = require('enzyme').shallow

chai.use(chaiEnzyme)
chai.use(sinonChai)
