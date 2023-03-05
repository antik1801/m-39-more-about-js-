const getData = new Promise((resolve,reject) => {
    const math = Math.random()*10;
    if (math < 5) {
        resolve(math);
    } else {
        reject('Rejected request');
    }
})
getData.then(data => console.log(data))
.catch(error => console.log('ERR: '+ error));

