const users = document.querySelector("#users")
const endpoint = "https://jsonplaceholder.typicode.com/users"

fetch(endpoint,{
   method:'GET'
}).then((user) =>{
   return user.json()
}).then((data) =>{
   data.forEach((item) => {
      users.innerHTML += `<div class="user">
            <p>${item.name}</p>
            <p>${item.email}</p>
            <p>${item.phone}</p>
        </div>`
      
   });
   
})