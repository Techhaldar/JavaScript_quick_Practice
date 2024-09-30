
// const changeText = () => {
//   let para = document.getElementById("para");
//   para.innerHTML = "Event Click"

// }

// let para = document.getElementById("para");
// para.addEventListener("click", changeText);
// para.removeEventListener("click", changeText);

// let PortFolio = document.getElementById("PortFolio")

// PortFolio.addEventListener('click', function(Event){
//   Event.preventDefault();
//   PortFolio.textContent = "Click Done"
// })

// let paras = document.getElementsByTagName("p");
// console.log(paras)
// for(let i = 0; i<paras.length; i++){
//   let para = paras[i]
//   para.addEventListener('click', () => {
//     alert("You have Clicked on para:" + i)
//   })
// }

let wrapper = document.getElementById("wrapper");
console.log(wrapper)

wrapper.addEventListener('click', (Event) => {
  if (Event.target.nodeName === "SPAN") {

    alert('You have Clicked on para:' + Event.target.textContent)
  }
})