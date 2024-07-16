const fetchData = async () => {
  const data = await fetch(
    "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json"
  );
  const jsonData = await data.json();
  console.log(jsonData);
};

fetchData();
