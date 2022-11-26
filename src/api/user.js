import { async } from "@firebase/util";

// request set


// get user role
export const getUserRole = async (email) => {
  const url = `${process.env.REACT_APP_URL}/users/${email}`;
  const res = await fetch(url);
  const data = await res.json();
  return data?.role;
};

// get All user
export const getAllUsers = async () => {
  const url = `${process.env.REACT_APP_API_URL}/users`;
  const res = await fetch(url);
  const users = await res.json();
  return users;
};

// make a host

