const users = document.querySelector("#users")
const endpoint = "https://dummyjson.com/products"

fetch(endpoint,{
   method:'GET'
}).then((user) =>{
   return user.json()
}).then((data) =>{
   data.products.forEach((item) => {
      users.innerHTML += `<p>${item.title}</p>
        <p>${item.description}</p>
        <img src="${item.images}" alt="" class="images2">`
      
   });
   
   
   
})