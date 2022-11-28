export const getImageUrl = async (image) => {
  const formData = new FormData();
  formData.append("image", image);
  const url = `https://api.imgbb.com/1/upload?key=568dcbae879f85e291262ce37c9c799c`;
  const res = await fetch(url, {
    method: "POST",
    body: formData,
  });
  const data = await res.json();
  return data.data.display_url;
};
