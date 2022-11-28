export const saveBookings = async (booking) => {
  const url = "https://bestbags-server.vercel.app/bookings";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(booking),
  });

  const data = await response.json();
  return data;
};

export const getAllBookingsByEmail = async (email) => {
  const url = `https://bestbags-server.vercel.app/bookings?email=${email}`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const getAllBookings = async () => {
  const url = "https://bestbags-server.vercel.app/bookings";

  const response = await fetch(url);
  const data = await response.json();
  return data;
};
