// search reducer
export default function search(state = {}, action) {
  switch (action.type) {
    case 'SEARCH_RESULTS':
        return action.results;
        break;

    // initial state
    default:
      return state;
  }
}