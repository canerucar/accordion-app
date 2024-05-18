export const getData = async () => {
  //this API can be hidden
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return data;
};
