export const addProduct = async (productData) => {
  const url = `https://bestbags-server.vercel.app/products`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(productData),
  });
  const data = await res.json();
  return data;
};

export const saveAdvertise = async (advertise) => {
  const url = "http://localhost:8000/advertises";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(advertise),
  });

  const data = await response.json();
  return data;
};