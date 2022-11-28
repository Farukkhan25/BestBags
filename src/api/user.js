import { async } from "@firebase/util";

// get user role
export const getUserRole = async (email) => {
  const url = `https://bestbags-server.vercel.app/users/${email}`;
  const res = await fetch(url);
  const data = await res.json();
  // console.log(data);
  return data?.role;
};

// get All user
export const getAllUsers = async () => {
  const url = `${process.env.REACT_APP_API_URL}/users`;
  const res = await fetch(url);
  const users = await res.json();
  return users;
};
// get All seller
export const getAllSellers = async () => {
  const url = `https://bestbags-server.vercel.app/allSellers`;
  const res = await fetch(url);
  const users = await res.json();
  return users;
};

// post user data
// export const addUser = async userData => {
//     const url = `https://bestbags-server.vercel.app/users?${userData.email}`;
//     const res = await fetch(url, {
//         method: 'PUT',
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify(userData)
//     })
//     const data = await res.json();
//     return data;
// }

export const addUser = async (userData) => {
  const url = "https://bestbags-server.vercel.app/users";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  const data = await res.json();
  return data;
};
