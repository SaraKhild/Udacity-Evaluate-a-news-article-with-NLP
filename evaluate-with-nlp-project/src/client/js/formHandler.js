import { is_url_valid} from './verifyURL'

function handleSubmit(event) {
  event.preventDefault()

  // take the url from the client side
  const formURL = document.getElementById('url').value
   
 // check if the url is valid 
  if(is_url_valid(formURL)){
  fetchFromApi(formURL)    
  .then(function(data){  
    updateUI(data); // this is for Dynamic UI updates 

});
} else{
  alert("please enter the URL valid ") // apear the alert message if invalid
}

}

// fetch API 
const fetchFromApi = async (formURL) => {
  let url = formURL;
  const res = await fetch('http://localhost:3031/article' , {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({url:formURL}), // body data type must be match "'Content-Type"

  });

  try {
    const data = await res.json();
    return data;
  } catch (error) {
    console.log('error', error)
  }
}


//Dynamically Update UI Demo
const updateUI = (data)=>{
   console.log(data) 
   document.getElementById('confidence').innerHTML = `The Text confidence is : ${data.confidence}`;
   document.getElementById('subjectivity').innerHTML = `The Text subjectivity is : ${data.subjectivity}`;
}
export { handleSubmit }



