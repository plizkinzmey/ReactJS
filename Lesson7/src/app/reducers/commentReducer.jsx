export default function reducer (state = {
    comments: [],
    fetching: false,
    fetched: false,
    error: null
  }, action) {
    switch (action.type) {
      case "FETCH_COMMENT_PENDING":
        {
          return {
            ...state,
            fetching: true
          }
        }
      case "FETCH_COMMENT_REJECTED":
        {
          return {
            ...state,
            fetching: false,
            error: action.payload
          }
        }
      case "FETCH_COMMENT_FULFILLED":
        {
          return {
            ...state,
            fetching: false,
            fetched: true,
            comments: action.payload
          }
        }
    }
    return state
  }
