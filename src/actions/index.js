import axios from 'axios';

export const START_SMURF_FETCH = 'START_SMURF_FETCH'
export const SMURF_API_FETCH = 'SMURF_API_FETCH'
export const FAILED_SMURF_API = 'FAILED_SMURF_API'
export const ADDING_SMURF = 'ADDING_SMURF'
export const SET_ERR = 'SET_ERR'


//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.

export const fetchSmurfs = () => {
  return(dispatch => {
    dispatch({type: START_SMURF_FETCH })

    axios.get('http://localhost:3333/smurfs')
      .then(res => {
        console.log(res, 'fetch')
        dispatch({type:SMURF_API_FETCH, payload: res.data})
      })
      .catch(err => {
        dispatch({type: FAILED_SMURF_API, payload: err})
      })
  })
}

export const newSmurf = (smurf) => dispatch => {
  axios.post('http://localhost:3333/smurfs', smurf)
    .then(res => {
      console.log(res.data , 'newsmurf')
      dispatch({type: ADDING_SMURF, payload: res.data})
    })
    .catch(err => {
      dispatch({type: FAILED_SMURF_API, payload: err.Response})
    })
}

export const errMessage = () => dispatch => {
  dispatch({type: SET_ERR })
}