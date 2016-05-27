import alt from '../../alt'
import _ from 'lodash'

export default class Dispatch {
  constructor (actions) {
    this.actions = actions
  }

  send (action, data = {}) {
    if (_.isEmpty(this.actions)) {
      throw Error('No actions have been set')
    }

    action = this.actions[action.toUpperCase()]
    alt.dispatcher.dispatch({ action, data })
  }
}
