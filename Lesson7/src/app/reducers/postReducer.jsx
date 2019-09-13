export default function reducer(state = {
  posts: [],
  fetching: false,
  fetched: false,
  error: null
}, action) {
  switch (action.type) {
    case "FETCH_POST_PENDING":
      {
        return {
          ...state,
          fetching: true
        }
      }
    case "FETCH_POST_REJECTED":
      {
        return {
          ...state,
          fetching: false,
          error: action.payload
        }
      }
    case "FETCH_POST_FULFILLED":
      {
        return {
          ...state,
          fetching: false,
          fetched: true,
          posts: action.payload
        }
      }
    case "ADD_POST":
      {
        return {
          ...state,
          posts: [action.payload, ...state.posts]
        }
      }
  }
  return state
}
