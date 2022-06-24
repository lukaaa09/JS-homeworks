class Countries {
    constructor(url) {
        this.url = url
        if (typeof url !== "string") {
            throw new TypeError("url should be a string")
        }
    }
    send(region) {
        this.region = region
        if (typeof region !== "string") {
            throw new TypeError("type should be a string")
        }
        return new Promise((resolve, reject) => {
            fetch(`${this.url}?region=${region}`)
                .then(response => {
                    if (response.status === 200) {
                        resolve(response.json().then(data => data.data))
                    } else if (response.status !== 200) {
                        reject(`We have error, status code: ${statusCode}`)
                    }
                })
        })
    }
}
const url = "https://api.first.org/data/v1/countries";
const countries = new Countries("https://api.first.org/data/v1/countries")

countries.send('europe')
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });