const mykey = process.env.MYKEY;
const fetch = require('node-fetch')

module.exports.apicall= async function (url){
  try{
  const basURL = `https://api.meaningcloud.com/sentiment-2.1?key=${mykey}&of=json&url=${url}&model=general&lang=en`;
  const res =  await fetch (basURL , {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      }})
      const data = res.json();
      return data;
    }catch(error){
     console.log(error)
    }
}



   