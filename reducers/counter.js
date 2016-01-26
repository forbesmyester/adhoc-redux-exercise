import { INCREMENT_ODD_COUNTER, INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/counter'

export default function counter(state = 0, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      console.log("inc ACTION");
      return state + 1
    case DECREMENT_COUNTER:
      console.log("dec ACTION");
      return state - 1
    case INCREMENT_ODD_COUNTER:
      console.log("ODD INC ACTION");
      if (state % 2) {
        return state + 1
      }
      return state;
    default:
      console.log("MISSED ACTION");
      return state
  }
}
