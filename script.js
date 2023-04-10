// burger
const toggleMenu = function(){
    menu.classList.toggle('mobileMenuActive');
};
const rotateBurger = function(){
    menuBurger.classList.toggle('rotateBurger')
};
const bodyScrollBlock = function(){
    footer.classList.toggle('displayHidden');
    container.classList.toggle('displayHidden');
}


let menuBurger = document.querySelector('.menuBurger');
const menu = document.querySelector('.mobileMenu');
const navLink = document.querySelector('.navLinks');
const footer = document.querySelector('.footer');
const container = document.querySelector('.container');


menuBurger.addEventListener('click', function(e){
    e.stopPropagation();
    toggleMenu();
    rotateBurger()
    bodyScrollBlock()
})

// закрыть меню при клике вне 
document.addEventListener('click', e => {
    let target = e.target;
    let its_menu = target == menu || menu.contains(target);
    let its_hamburger = target == menuBurger;
    let menu_is_active = menu.classList.contains('mobileMenuActive');
    
    if (!its_menu && !its_hamburger && menu_is_active) {
      toggleMenu();
      rotateBurger();
    }
  })

  navLink.addEventListener('click', function(e)  {
    e.stopPropagation();
    toggleMenu();
    rotateBurger();
  })




// SLIDER
let offset =0;
document.addEventListener('DOMContentLoaded',()=>{
  for(let i=0;i<2;i++){
    drawSlide(3);


  }

})


const pets = [
    {
      name: "Jennifer",
      img: "file://D:/rss/ST1/Shelter/Shelter/img/jennifer.png",
      type: "Dog",
      breed: "Labrador",
      description: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      age: "2 months",
      inoculations: ["none"],
      diseases: ["none"],
      parasites: ["none"],
      selector: 'card1'
    },
    {
      name: "Sophia",
      img: "file://D:/rss/ST1/Shelter/Shelter/img/sophie.jpg",
      type: "Dog",
      breed: "Shih tzu",
      description: "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      age: "1 month",
      inoculations: ["parvovirus"],
      diseases: ["none"],
      parasites: ["none"],
      selector: 'card2'
    },
    {
      name: "Woody",
      img: "file://D:/rss/ST1/Shelter/Shelter/img/woody.png",
      type: "Dog",
      breed: "Golden Retriever",
      description: "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      age: "3 years 6 months",
      inoculations: ["adenovirus", "distemper"],
      diseases: ["right back leg mobility reduced"],
      parasites: ["none"],
      selector: 'card3'
    },
    {
      name: "Scarlett",
      img: "file://D:/rss/ST1/Shelter/Shelter/img/scarlet.png",
      type: "Dog",
      breed: "Jack Russell Terrier",
      description: "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      age: "3 months",
      inoculations: ["parainfluenza"],
      diseases: ["none"],
      parasites: ["none"],
      selector: 'card4'
    },
    {
      name: "Katrine",
      img: "file://D:/rss/ST1/Shelter/Shelter/img/katrine.png",
      type: "Cat",
      breed: "British Shorthair",
      description: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      age: "6 months",
      inoculations: ["panleukopenia"],
      diseases: ["none"],
      parasites: ["none"],
      selector: 'card5'
    },
    {
      name: "Timmy",
      img: "file://D:/rss/ST1/Shelter/Shelter/img/timmy.png",
      type: "Cat",
      breed: "British Shorthair",
      description: "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      age: "2 years 3 months",
      inoculations: ["calicivirus", "viral rhinotracheitis"],
      diseases: ["kidney stones"],
      parasites: ["none"],
      selector: 'card6'
    },
    {
      name: "Freddie",
      img: "file://D:/rss/ST1/Shelter/Shelter/img/freddie.png",
      type: "Cat",
      breed: "British Shorthair",
      description: "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      age: "2 months",
      inoculations: ["rabies"],
      diseases: ["none"],
      parasites: ["none"],
      selector: 'card7'
    },
    {
      name: "Charly",
      img: "file://D:/rss/ST1/Shelter/Shelter/img/charly.jpg",
      type: "Dog",
      breed: "Jack Russell Terrier",
      description: "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      age: "8 years",
      inoculations: ["bordetella bronchiseptica", "leptospirosis"],
      diseases: ["deafness", "blindness"],
      parasites: ["lice", "fleas"],
      selector: 'card8'
    }
  ];

  function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  let step=0;
function drawImg(){

 
    let objectNumber = randomInteger(0,7);


    let card = document.createElement('div');
    card.className = pets[objectNumber].selector;
    card.classList.add('card');
    document.querySelector('.cards').appendChild(card) // рисовка обертки карточки

    let img = document.createElement('img');
    img.src= pets[objectNumber].img;
    card.appendChild(img)

    let petName = document.createElement('p');
    petName.innerHTML= pets[objectNumber].name;
    card.appendChild(petName)

    let button = document.createElement('button');
    button.innerHTML= 'Leran More';
    card.appendChild(button);
    step++
}

function drawSlide(n){
    for(let i = 0; i < n; i++ ){
      drawImg()
    }
}
function removeSlide(n){
  for(let i = 0; i<n;i++){
    let card = document.querySelector('.card')
    card.remove()
  }
}

// листать вперед
function nextSlide(){

        let numberOfCards = document.getElementsByClassName('card');
        let length = numberOfCards.length;

        for(i=0;i<length;i++){
          let card = numberOfCards[i];
          card.style.left=-980+'px';
        };

        // удаляю первые три картинки и ставлю следующим трем лефт0
        setTimeout(function(){
          for(i=3;i<6;i++){
            let card = numberOfCards[i];
            card.style.transition= 0 +'ms';
            card.style.left=0+'px';
  
          };
        },1000)
        setTimeout(function(){
    
          removeSlide(3);
        },1001)
        
drawSlide(3);



  }
  let nextSlideBtn = document.querySelector('.next');
  nextSlideBtn.addEventListener('click',()=>{nextSlide()})
// листать назад







// slider adaptive
window.addEventListener('resize', (e)=>{
  let width= document.body.clientWidth;
    if (width==320){
      removeSlide(6);
      drawSlide(2);
      window.removeEventListener('resize')
    }  
})
// POPUP
  let card1 = document.querySelector('.card');
  card1.addEventListener('click',e => {
  e.stopPropagation();
  drawModalPopup(1)
});
let card2 = document.querySelector('.card2');
card2.addEventListener('click',e => {
e.stopPropagation();
drawModalPopup(2)
});
let card3 = document.querySelector('.card3');
card3.addEventListener('click',e => {
e.stopPropagation();
drawModalPopup(3)
});
  let card4 = document.querySelector('.card4');
  card4.addEventListener('click',e => {
  e.stopPropagation();
  drawModalPopup(4)
});
let card5 = document.querySelector('.card5');
card5.addEventListener('click',e => {
e.stopPropagation();
drawModalPopup(5)
});
let card6 = document.querySelector('.card6');
card6.addEventListener('click',e => {
e.stopPropagation();
drawModalPopup(6)
});
let card7 = document.querySelector('.card7');
card7.addEventListener('click',e => {
e.stopPropagation();
drawModalPopup(7)
});
let card8 = document.querySelector('.card8');
card8.addEventListener('click',e => {
e.stopPropagation();
drawModalPopup(8)
});

function drawModalPopup(num){
  let modalPopup = document.createElement('div');
  modalPopup.classList.add('modalPopup');
  document.querySelector('.cards').appendChild(modalPopup);

  let modalPopupBtn = document.createElement('button');
  modalPopupBtn.classList.add('modalPopupBtn');
  document.querySelector('.modalPopup').appendChild(modalPopupBtn);

  let popup = document.createElement('div');
  popup.classList.add('popup');
  document.querySelector('.modalPopup').appendChild(popup);

  let img = document.createElement('img');
  img.src=pets[num].img
  document.querySelector('.popup').appendChild(img);

  let content = document.createElement('div');
  content.classList.add('popupContent')
  document.querySelector('.popup').appendChild(content);

  let name = document.createElement('h3');
  name.innerHTML=pets[num].name
  document.querySelector('.popupContent').appendChild(name);

  let breed = document.createElement('h4');
  breed.innerHTML=pets[num].type + ' - ' +pets[num].breed
  document.querySelector('.popupContent').appendChild(breed);

  let description = document.createElement('p');
  description.innerHTML=pets[num].description;
  document.querySelector('.popupContent').appendChild(description);

  let age = document.createElement('p');
  age.innerHTML='<b>Age: </b>' + pets[num].age;
  document.querySelector('.popupContent').appendChild(age);

  let inoculations = document.createElement('p');
  inoculations.innerHTML='<b>Inoculations: </b>' + pets[num].inoculations;
  document.querySelector('.popupContent').appendChild(inoculations);

  let diseases = document.createElement('p');
  diseases.innerHTML='<b>Diseases: </b>' + pets[num].diseases;
  document.querySelector('.popupContent').appendChild(diseases);

  let parasites = document.createElement('p');
  parasites.innerHTML='<b>Parasites: </b>' + pets[num].parasites;
  document.querySelector('.popupContent').appendChild(parasites);
  
      modalPopupBtn.addEventListener('click', function(e){
        e.stopPropagation();
        modalPopup.remove()
      })

      document.addEventListener('click', e => {
        let target = e.target;
        let its_modal = target == modalPopup || modalPopup.contains(target);
        let its_close_button = target == modalPopupBtn;
        let modal_is_active = modalPopup.classList.contains('modalPopup');
        
        if (!its_modal && !its_close_button && modal_is_active) {
          modalPopup.remove()
        }
      })
}



