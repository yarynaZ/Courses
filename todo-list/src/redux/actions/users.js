import axios from 'axios';
export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';
export const ADD_NEW_USER = 'ADD_NEW_USER';
export const REMOVE_USER = 'REMOVE_USER';

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest())
    axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          const users = response.data
          dispatch(fetchUsersSuccess(users))
        })
        .catch(error => {
          dispatch(fetchUsersFailure(error.message))
        })
  }
}

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

export const fetchUsersSuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

export const fetchUsersFailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}

export const addNewUser = user => {
  return {
    type: ADD_NEW_USER,
    payload: user
  }
}

export const removeUser = id => {
  return {
    type: REMOVE_USER,
    payload: id
  }
}