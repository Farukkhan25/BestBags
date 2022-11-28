export const addProduct = async productData => {
    const url = `http://localhost:8000/products`;
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(productData)
    })
    const data = await res.json();
    return data;
}

