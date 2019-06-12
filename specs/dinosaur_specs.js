const assert = require('assert');
const Dinosaur = require('../dinosaur.js');

describe('Dinosaur', function(){
  beforeEach(function(){
    dinosaur = new Dinosaur('Yinlong', 'herbivore', 93)

});

it('should have a species', function(){
  const dinosaur = new Dinosaur('Yinlong')
  const actual = dinosaur.species;
  assert.strictEqual(actual, 'Yinlong');
});

it('should have a diet', function(){
  const actual = dinosaur.diet;
  assert.strictEqual(actual, 'herbivore');
});

it('should have an average number of visitors it attracts per day', function(){
  const actual = dinosaur.guestsAttractedPerDay;
  assert.strictEqual(actual, 93);
});

})
