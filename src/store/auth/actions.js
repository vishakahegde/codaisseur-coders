// src/store/auth/actions.js

// A thunk action creator
export function login(email, password) {
  // Return the thunk itself, i.e. a function
  return function thunk(dispatch, getState) {
    // TODO:
    // make a POST API request to `/login`

    console.log(
      "TODO: make login request, get an access token",
      email,
      password
    );
  };
}
