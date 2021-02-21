import axios from "axios"
import {
  FETCH_CHANNELS_ERROR,
  FETCH_CHANNELS_REQUEST,
  FETCH_CHANNELS_SUCCESS,
  ADD_CHANNEL,
  REMOVE_CHANNEL,
  UPDATE_CHANNEL
} from "../types"
const { REACT_APP_BACKEND_URL } = process.env

export const fetchChannels = () => async (dispatch) => {
  dispatch({ type: FETCH_CHANNELS_REQUEST })
  axios
    .get(`/channels`)
    .then((resp) => {
      dispatch({
        type: FETCH_CHANNELS_SUCCESS,
        payload: resp.data,
      })
    })
    .catch((error) => {
      dispatch({
        type: FETCH_CHANNELS_ERROR,
        error: error.toString(),
      })
    })
}

export const addChannel = (title, slug, src) => (dispatch) => {
  dispatch({
    type: FETCH_CHANNELS_REQUEST,
  })
  axios
    .post(`/channel`, { title, slug, src })
    .then((resp) => {
      dispatch({
        type: ADD_CHANNEL,
        payload: resp.data,
      })
    })
    .catch((err) => {
      dispatch({
        type: FETCH_CHANNELS_ERROR,
        payload: err.toString(),
      })
    })
}

export const removeChannel = (id) => (dispatch) => {
  dispatch({
    type: FETCH_CHANNELS_REQUEST,
  })
  axios
    .delete(`/channel/${id}`)
    .then((resp) => {
      dispatch({
        type: REMOVE_CHANNEL,
        payload: resp.data.id,
      })
    })
    .catch((err) => {
      dispatch({
        type: FETCH_CHANNELS_ERROR,
        payload: err.toString(),
      })
    })
}

export const updateChannel = (id, body) => (dispatch) => {
  dispatch({
    type: FETCH_CHANNELS_REQUEST,
  })
  axios
    .put(`/channel/${id}`,body)
    .then((resp) => {
      dispatch({
        type: UPDATE_CHANNEL,
        payload: resp.data,
      })
    })
    .catch((err) => {
      dispatch({
        type: FETCH_CHANNELS_ERROR,
        payload: err.toString(),
      })
    })
}
