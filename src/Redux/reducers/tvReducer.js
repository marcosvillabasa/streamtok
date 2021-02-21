import {
  FETCH_CHANNELS_ERROR,
  FETCH_CHANNELS_REQUEST,
  FETCH_CHANNELS_SUCCESS,
  ADD_CHANNEL,
  REMOVE_CHANNEL,
  UPDATE_CHANNEL,
} from "../types"

const initialState = {
  channels: [],
  isFetching: false,
  error: null,
}

const channels = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHANNELS_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case FETCH_CHANNELS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        channels: action.payload,
      }
    case FETCH_CHANNELS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      }
    case ADD_CHANNEL:
      return {
        ...state,
        isFetching: false,
        channel: [...state.channels, action.payload],
      }
    case REMOVE_CHANNEL:
      return {
        ...state,
        isFetching: false,
        channels: state.channels.fillter((ch) => ch.id !== action.payload),
      }
    case UPDATE_CHANNEL:
      return {
        ...state,
        isFetching: false,
        channels: [...state.channels],
      }

    default:
      return state
  }
}

export default channels
