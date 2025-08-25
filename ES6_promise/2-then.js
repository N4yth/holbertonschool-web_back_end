export default function handleResponseFromAPI(promise) {
  const prom = new Promise((resolve, reject) => {
    if (promise) {
      resolve({
        'status': 200,
        'body': 'Success',
      });
    }
    else {
      reject(new Error());
    }
    console.log('Got a response from the API');
  });
  return prom;
}
