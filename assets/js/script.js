var myHeaders = new Headers();
var cardio = 'cardio';
myHeaders.append("x-api-key", "R78wAd5UBLglet+gIcUCSQ==qefnWKvG8uC3WfIv");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

fetch('https://api.api-ninjas.com/v1/exercises?type=' + cardio, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
