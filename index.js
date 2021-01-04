const axios = require("axios").default;

const options = {
    method: 'GET',
    url: 'https://calorieninjas.p.rapidapi.com/v1/nutrition',
    params: { query: 'sweet potato' },
    headers: {
        'x-rapidapi-key': '812523c13amsh876339f76159a0fp10c7f4jsnf63aac4a4a7e',
        'x-rapidapi-host': 'calorieninjas.p.rapidapi.com'
    }
};

axios.request(options).then((response) => {
    var resultObject = response.data.items[0];
    if (resultObject == null)
        console.error("Food info not found");
    else console.log(resultObject);
}).catch((error) => {
    console.error(error.message);
});