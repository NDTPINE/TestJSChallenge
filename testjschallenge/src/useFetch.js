import { useEffect } from 'react';


const useFetch = (url = 'http://www.abc.cd/test') => {
  return fetch(url ,{ headers: {
                        "app-id":"62138e250a7852003c143087"}
                    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch((error) => console.log(error));
  }

export default useFetch;