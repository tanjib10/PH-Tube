const loadCategory = async (category) => {
   const res = await fetch("https://openapi.programming-hero.com/api/videos/categories")
   const data = await res.json();
   const categoryContainer = document.getElementById('category-container')
   data.data.forEach(category => {
      const div = document.createElement('div');
      div.innerHTML = `
               <button onclick = "categoryData('${category.category_id}')" class="btn mr-4  hover:bg-red-500" >${category.category}</button>
      `
      categoryContainer.appendChild(div);
   });

}
 const categoryData = async (id) => {
   const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
   const data = await res.json()
   const cardContainer = document.getElementById('card-container');
   cardContainer.innerText = '';
   //   if data is empty 
      if (data.data.length === 0) {
    const div = document.createElement('div');
    div.innerHTML = `
      <img src="images/Icon.png" alt="">
      <h3 class="mt-6 text-2xl font-bold">Oops!! Sorry, There is no content here</h3>
   `
    cardContainer.appendChild(div);
       div.setAttribute('style', `
      display: flex;
      flex-direction: column;
      align-items: center; 
      margin-top : 50px;
      justify-content: center;
      width: 90vw;
      text-align: center;
    `);
  }
//   else 
     const dataArray = data.data;
    dataArray.forEach(id => {
         const div = document.createElement('div'); 
         const Seconds = id.others.posted_date;
         const { hours, minutes } = convertHoursAndMinutes(Seconds);
         div.innerHTML = `
         <div class="card w-70 hover:cursor-pointer">
               <div class="relative">
                  <img src="${id.thumbnail}" alt="Shoes" class="w-full rounded-lg h-44" />
               </div>
               <div class="absolute right-2 bottom-24">
                  <p class=""> ${Seconds > 0 ? `<p class="text-slate-300 bg-black px-2 rounded-lg">${hours}h ${minutes}m ago</p>`: ''}</p>         
               </div>
               <div class="flex p-2">
                  <div>
                     <img class=" rounded-full w-10 h-10" src="${id.authors[0].profile_picture}" alt="">
                  </div>
                  <div>
                     <h2 class="text-lg font-bold mx-4">${id.title}</h2>
                  <h3 class="text-left pl-4">${id.authors[0]?.profile_name} <span class="inline-block items-center;">${id.authors[0].
                     verified?'<img class="w-4" src="images/Twitter_Verified_Badge.svg.png">':''}</span> </h3
                  <div><p class="text-left pl-4">${id.others.views} views</p></div>
               </div>
            </div>
         `
         cardContainer.appendChild(div);
    });
 }
function convertHoursAndMinutes(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return {hours, minutes};
}
 const sortByViews = async () => {
   const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
   const data = await res.json()

}
loadCategory();
categoryData("1000")