

const categoriesIdData = async(id) => {
  const response = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${id}`);
  const data = await response.json();
  displayAnimal(data.data);
}


const threeButtonClick= async() =>{
    
    // console.log(id);


    const response = await fetch('https://openapi.programming-hero.com/api/peddy/categories')
    const data = await response.json()

    newFun(data.categories);


}

threeButtonClick();

const newFun = (items) =>{

  const catContainer = document.getElementById('cat-btn');
  items.forEach( item => {
    console.log(item);

     const {category, category_icon} = item
     console.log(category, category_icon);
  
    const catBtn = document.createElement('div'); 
    

   
        catBtn.innerHTML = `
      <div class="flex gap-2 justify-center items-center">
       <img src="${category_icon}">
        <button onclick="categoriesIdData('${category}')" class="px-10 py-4 bg-teal-600 text-base font-medium text-white rounded-lg">${category}</button>
        

 
      </div>
       
        `;

        catContainer.appendChild(catBtn);
    
  } )

}





const allPetCategory = async() => {
    const response = await fetch(`https://openapi.programming-hero.com/api/peddy/pets`)
    const data = await response.json()
    displayAnimal(data.pets);

}

const displayAnimal = (singleItem) => {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = ""
    
    singleItem.forEach(animal => {
        // console.log(animal);
       
        const card = document.createElement('div');

        card.classList.add('card', 'card-compact' , 'shadow-xl')
        card.innerHTML =

        `
        <div class="">
  <figure>
    <img
      src="${animal.image}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${animal.pet_name}</h2>
      <div class="flex justify-center items-center text-base font-medium gap-2 opacity-75"> 
        <i class="fa-solid fa-wind"></i>
       <p>Breed: ${animal.breed?animal.breed:"item is not avilable"}</p>
      </div>
      <div class="flex justify-center items-center text-base font-medium gap-2 opacity-75"> 
       <i class="fa-solid fa-cake-candles"></i>
       <p>Birthday: ${animal.date_of_birth}</p>
      </div>
       <div class="flex justify-center items-center text-base font-medium gap-2 opacity-75"> 
       <i class="fa-solid fa-mars-stroke-up"></i>
       <p>Gender: ${animal.gender}</p>
      </div>

      <div class="flex justify-center items-center text-base font-medium gap-2 opacity-75"> 
       <i class="fa-solid fa-dollar-sign"></i>
       <p>Price: ${animal.price}$</p>
      </div>
    
    
    
    <div class="card-actions flex justify-center items-center gap-10 mt-4">

    <button class="px-3  py-1 rounded-lg bg-sky-200 text-lg"><i class="fa-solid fa-thumbs-up"></i></button>
    <button class="px-5 py-2 border-2 border-teal-500 text-black font-medium rounded-lg hover:bg-teal-400 duration-500 ease-in-out text-base">Adopt</button>
    <button class="px-5 py-2 border-2 border-teal-500 text-black font-medium rounded-lg hover:bg-teal-400 duration-500 ease-in-out text-base">Details</button>
    
    </div>
  </div>
</div>
        
        `;

        cardContainer.append(card);
    })
   


}

allPetCategory();











// const allPetCategory1  = async() => {
//     const response = await fetch(`https://openapi.programming-hero.com/api/peddy/pets`);
//     const data = await response.json();
//     displayAnimal(data.pets);
// }

// const displayAnimal = (singleItem) => {
//     const cardContainer = document.getElementById('card-container');
    
//     singleItem.forEach(animal => {
//         console.log(animal);
//         const card = document.createElement('div');
//         card.classList.add('card', 'card-compact', 'shadow-xl');
//         card.innerHTML = `
//         <div class="">
//           <figure>
//             <img
//               src="${animal.image}"  <!-- dynamic image link-->
//               alt="${animal.name}" />
//           </figure>
//           <div class="card-body">
//             <h2 class="card-title">${animal.name}</h2> <!-- dynamic title -->
//             <p>${animal.description}</p> <!-- dynamic description -->
//             <div class="card-actions justify-end">
//               <button class="btn btn-primary">Buy Now</button>
//             </div>
//           </div>
//         </div>
//         `;
        
//         cardContainer.append(card); // now inside the loop
//     });
// }

// allPetCategory1();
















loadAllData();

