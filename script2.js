// window.addEventListener('load', e =>{
//   let card1 = document.querySelector('.card1');
//   card1.addEventListener('click',e => {
//   e.stopPropagation();
//   drawModalPopup(1)
// });
// let card2 = document.querySelector('.card2');
// card2.addEventListener('click',e => {
// e.stopPropagation();
// drawModalPopup(2)
// });
// let card3 = document.querySelector('.card3');
// card3.addEventListener('click',e => {
// e.stopPropagation();
// drawModalPopup(3)
// });
//   let card4 = document.querySelector('.card4');
//   card4.addEventListener('click',e => {
//   e.stopPropagation();
//   drawModalPopup(4)
// });
// let card5 = document.querySelector('.card5');
// card5.addEventListener('click',e => {
// e.stopPropagation();
// drawModalPopup(5)
// });
// let card6 = document.querySelector('.card6');
// card6.addEventListener('click',e => {
// e.stopPropagation();
// drawModalPopup(6)
// });
// let card7 = document.querySelector('.card7');
// card7.addEventListener('click',e => {
// e.stopPropagation();
// drawModalPopup(7)
// });
// let card8 = document.querySelector('.card8');
// card8.addEventListener('click',e => {
// e.stopPropagation();
// drawModalPopup(8)
// });

// function drawModalPopup(num){
//   let modalPopup = document.createElement('div');
//   modalPopup.classList.add('modalPopup');
//   document.querySelector('.cards').appendChild(modalPopup);

//   let modalPopupBtn = document.createElement('button');
//   modalPopupBtn.classList.add('modalPopupBtn');
//   document.querySelector('.modalPopup').appendChild(modalPopupBtn);

//   let popup = document.createElement('div');
//   popup.classList.add('popup');
//   document.querySelector('.modalPopup').appendChild(popup);

//   let img = document.createElement('img');
//   img.src=pets[num].img
//   document.querySelector('.popup').appendChild(img);

//   let content = document.createElement('div');
//   content.classList.add('popupContent')
//   document.querySelector('.popup').appendChild(content);

//   let name = document.createElement('h3');
//   name.innerHTML=pets[num].name
//   document.querySelector('.popupContent').appendChild(name);

//   let breed = document.createElement('h4');
//   breed.innerHTML=pets[num].type + ' - ' +pets[num].breed
//   document.querySelector('.popupContent').appendChild(breed);

//   let description = document.createElement('p');
//   description.innerHTML=pets[num].description;
//   document.querySelector('.popupContent').appendChild(description);

//   let age = document.createElement('p');
//   age.innerHTML='<b>Age: </b>' + pets[num].age;
//   document.querySelector('.popupContent').appendChild(age);

//   let inoculations = document.createElement('p');
//   inoculations.innerHTML='<b>Inoculations: </b>' + pets[num].inoculations;
//   document.querySelector('.popupContent').appendChild(inoculations);

//   let diseases = document.createElement('p');
//   diseases.innerHTML='<b>Diseases: </b>' + pets[num].diseases;
//   document.querySelector('.popupContent').appendChild(diseases);

//   let parasites = document.createElement('p');
//   parasites.innerHTML='<b>Parasites: </b>' + pets[num].parasites;
//   document.querySelector('.popupContent').appendChild(parasites);
  
//       modalPopupBtn.addEventListener('click', function(e){
//         e.stopPropagation();
//         modalPopup.remove()
//       })

//       document.addEventListener('click', e => {
//         let target = e.target;
//         let its_modal = target == modalPopup || modalPopup.contains(target);
//         let its_close_button = target == modalPopupBtn;
//         let modal_is_active = modalPopup.classList.contains('modalPopup');
        
//         if (!its_modal && !its_close_button && modal_is_active) {
//           modalPopup.remove()
//         }
//       })
// }
// })

