const loadCategory = async (category) => {
   const res = await fetch("https://openapi.programming-hero.com/api/videos/categories")
   const data = await res.json();
   const categoryContainer = document.getElementById('category-container')
   data.data.forEach(category => {
      const div = document.createElement('div');
      div.innerHTML = `
               <button onclick = "categoryData('${category.category_id}')" class="btn mr-4 hover:bg-red-500" >${category.category}</button>
      `
      categoryContainer.appendChild(div);
   });

}

 const categoryData = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    const data = await res.json()

    console.log(data.data)
    const cardContainer = document.getElementById('card-container');
     cardContainer.innerText = '';
    data.data.forEach(id => {
         const div = document.createElement('div');
         div.innerHTML = `
         <div class="card w-70">
               <figure class="">
                  <img src="${id.thumbnail}" alt="Shoes" class="rounded-lg h-44" />
               </figure>
               <div class=" flex p-3 text-center">
                  <div>
                     <img class=" rounded-full w-10 h-10" src="${id.authors[0].profile_picture}" alt="">
                  </div>
                  <div>
                     <h2 class="text-lg font-bold mx-4">${id.title}</h2>
                  <h3 class="text-left pl-4">${id.authors[0]?.profile_name}</h3> <span>${id.authors[0].verified} </span>
                  <p>sdfsd</p>
               </div>
            </div>
         `
         cardContainer.appendChild(div);
         
    });
   
 }

loadCategory();