const assert = require('assert');
const Park = require('../park.js');
const Dinosaur = require('../dinosaur.js')


describe('Park', function(){
  beforeEach(function(){
    dino1 = new Dinosaur('Yinlong', 'herbivore')
    dino2 = new Dinosaur('Godzilla','carnivore')
    dinosaurs = [dino1, dino2]
    park = new Park('Butlans', 50, dinosaurs)

  });



it('should have a name' , function(){
  const park = new Park('Butlans')
  const actual = park.name;
  assert.strictEqual(actual, 'Butlans');

});

it('should have a ticket' , function(){
  const actual = park.ticketPrice;
  assert.strictEqual(actual, 50);

});

it('should have a collection of dinosaurs' , function(){
  const actual = park.dinosaurs;
  assert.deepStrictEqual(actual, dinosaurs);

});

it('should be able to add a dinosaur to its collection' , function(){
  park.addDinosaur(dino1);
  const actual = park.numberOfDinosaurs();
  assert.strictEqual(actual, 3);

});

it('should be able to remove a dinosaur from its collection' , function(){
  park.removeDinosaur('dino2');
  const numberOfDinosaurs = park.dinosaurs.length;
  const dinosaurIncluded = park.dinosaurs.includes('dino2');
  assert.strictEqual(numberOfDinosaurs, 1);
  assert.strictEqual(dinosaurIncluded, false)

});

it('should be able to find all dinosaurs of a particular species' , function(){
  const actual = park.findBySpecies('YinLong');
  assert.deepStrictEqual(actual, [dino1])
});

})


//
// A name
// A ticket price
// A collection of dinosaurs
