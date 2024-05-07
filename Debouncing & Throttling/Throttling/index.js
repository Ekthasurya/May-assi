let url = `https://www.omdbapi.com/?i=tt3896198&apikey=b82b50f1`;

let container = document.getElementById("container");

let btn = document.getElementById("Search").addEventListener("click",()=>{
    throttling(getData, 1000)
})


let flag = false;
 function throttling(func,delay){
   if(flag == true){
    return
   }
   func()
   flag=true;

   setTimeout(() => {
    flag = false;
   }, delay);
   
 }

 const getData = async()=>{
    try {
        let inputTag =document.getElementById("input1");
        let inputVal = inputTag.value;
        let res = await fetch(`${url}&s=${inputVal}`)
        let data = await res.json()
        console.log(data.Search)
        displayData(data.Search)
       } catch (error) {
        console.log(error)
       }
 }


 function displayData(data){
    container.innerHTML="";
    data.forEach((ele)=>{
        let box = document.createElement("div");

        let title = document.createElement("h1");
        title.textContent =ele.Title;
        title.addEventListener("click",()=>{
            let card = document.createElement("div")

            let image = document.createElement("img");
            image.src= ele.Poster;
    
            let title = document.createElement("h3");
            title.textContent= ele.Title;
    
            let year = document.createElement("p");
            year.textContent= ele.Year;
    
            card.append(image,title,year)
            box.append(card)
        })
        
        box.append(title)
        container.append(box)
        
    })
}