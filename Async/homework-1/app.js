const url = "https://api.first.org/data/v1/countries";
const send = url => {
   return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (response.status === 200) {
                 resolve(response.json().then(data => data.data))
                } else {
                    reject(`We have error, status code: ${statusCode}`)
                }
            })
    })
}
send(url)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// const send = (url) =>
//     new Promise((resolve, reject) => {
//         get(url, (error, meta, body) => {
//             console.log(body);
//             const { data } = JSON.parse(body);
//             if(meta.status === 200){
//                 resolve(data);
//             }else{
//                 reject(`We have error, status code: ${statusCode}`)
//             }
//           });
//     });
// const url = "https://api.first.org/data/v1/countries";
// send(url)
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log(error.message);
//     });

