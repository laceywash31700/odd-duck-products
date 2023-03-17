'use strict';
// Global variables
let voteCount = 25;
// DOM reference 
let imgHolder = document.getElementById('image-selection');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');
let viewResults = document.getElementById('results-button');
let list = document.getElementById('list-results');
// object that holds products
const state = {
  allTheProducts: []

};
console.log(state);

// bubble data chart cuz its cute and why not.
const config = {
  type: 'bubble',
  data: data,
  options: {}
};
// constructor Function for products
function OddDuckProduct(name, fileExtension = 'jpg') {
  this.name = name;
  this.votes = 0;
  this.views = 0;
  this.photo = `ODP-Imgs/${name}.${fileExtension}`;

  state.allTheProducts.push(this);
}



const bag = new OddDuckProduct('bag');
const banana = new OddDuckProduct('banana');
const bathroom = new OddDuckProduct('bathroom');
const boots = new OddDuckProduct('boots');
const breakfast = new OddDuckProduct('breakfast');
const bubblegumMeat = new OddDuckProduct('bubblegum');
const chair = new OddDuckProduct('chair');
const OurDarkLord = new OddDuckProduct('cthulhu');
const doggoDucky = new OddDuckProduct('dog-duck');
const dragon = new OddDuckProduct('dragon');
const penForks = new OddDuckProduct('pen');
const petSweeper = new OddDuckProduct('pet-sweep');
const pizzaScissors = new OddDuckProduct('scissors');
const jawsSleepingBag = new OddDuckProduct('shark');
const babySweeper = new OddDuckProduct('sweep');
const starWarsSleepingBag = new OddDuckProduct('tauntaun');
const unicornMeat = new OddDuckProduct('unicorn');
const uselessWaterCan = new OddDuckProduct('water-can');
const interestingWineGlass = new OddDuckProduct('wine-glass');


//helper function
function getRandomPic() {
  return Math.floor(Math.random() * state.allTheProducts.length);
}

// Renders images for clicks.
function renderImgs() {
  let indexOne = getRandomPic();
  let indexTwo = getRandomPic();
  let indexThree = getRandomPic();

  while (indexOne === indexTwo || indexOne === indexThree || indexTwo === indexThree) {
    indexTwo = getRandomPic();
    indexThree = getRandomPic();
  }

  imgOne.src = state.allTheProducts[indexOne].photo;
  imgOne.alt = state.allTheProducts[indexOne].name;
  ++state.allTheProducts[indexOne].views;
  console.log(state.allTheProducts[indexOne].views);

  imgTwo.src = state.allTheProducts[indexTwo].photo;
  imgTwo.alt = state.allTheProducts[indexTwo].name;
  ++state.allTheProducts[indexTwo].views;
  console.log(state.allTheProducts[indexTwo].views);

  imgThree.src = state.allTheProducts[indexThree].photo;
  imgThree.alt = state.allTheProducts[indexThree].name;
  ++state.allTheProducts[indexThree].views;
  console.log(state.allTheProducts[indexThree].views);
}



function handleClick(event){
  --voteCount;
  console.log(voteCount);
  let imgClicked = event.target.alt;
  for(let i = 0; i < state.allTheProducts.length; i++){
    if(imgClicked ===state.allTheProducts[i].name){
      ++state.allTheProducts[i].votes;
      console.log(imgClicked,state.allTheProducts[i].votes);
    }
  }
  renderImgs();

  if(voteCount === 0){
    imgHolder.removeEventListener('click',handleClick);
  }
  console.log(voteCount);
}

function handleViewResults(){
  if(voteCount === 0){
    for(let i =0; i< state.allTheProducts.length; i++){
      let liElm = document.createElement('li');
      liElm.textContent = `${state.allTheProducts[i].name} was shown ${state.allTheProducts[i].views} and had ${state.allTheProducts[i].votes} votes`;
      list.append(liElm);
    }
  }

}

// listeners
viewResults.addEventListener('click',handleViewResults);
imgHolder.addEventListener('click', handleClick);


// function for rendering imgs invocation
renderImgs();



