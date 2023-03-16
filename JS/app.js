'use strict'
// Global variables
const voteCount= 25;
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
// constructor Function for products
function OddDuckProduct(name,fileExtension = 'jpg'){
    this.name = name; 
    this.votes = 0;
    this.views = 0;
    this.photo = `ODP-Imgs/${name}.${fileExtension}`;
    
    state.allTheProducts.push(this);
};



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



