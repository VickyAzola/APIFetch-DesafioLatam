
async function apiRequest() {
  const url = "https://jsonplaceholder.typicode.com/posts"
  const listData = document.getElementById("post-data")
  
  try {
    //obtener data de api
    const response = await fetch(url);
    const data = await response.json();

    //mostrar data en el HTML
    data.forEach(element => {
      listData.innerHTML += `
        <li> 
          <strong>${element.title}</strong> 
          ${element.body}
        </li>
      `
    })

  } catch (error) {
    console.error("Ha ocurrido un error:", error);
  }

}

//mostrar data onClick 
function getPosts() {
  apiRequest()
}