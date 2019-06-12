const Park = function(name, ticketPrice, dinosaurs){
this.name = name;
this.ticketPrice = ticketPrice;
this.dinosaurs = dinosaurs
}


Park.prototype.addDinosaur = function(dinosaur){
  return this.dinosaurs.push(dinosaur);
}

Park.prototype.numberOfDinosaurs = function(dinosaur){
  return this.dinosaurs.length
}
Park.prototype.removeDinosaur = function(dinosaur){
  index = this.dinosaurs.indexOf(dinosaur);
  this.dinosaurs.splice(index, 1);
}

Park.prototype.bestDinosaur = function(){
  compare = function(a, b) {
    return b.guestsAttractedPerDay - a.guestsAttractedPerDay;
    }
    return this.dinosaurs.sort(compare)[0];
}

Park.protoype.findBySpecies = function(){
  const actual = this.findBySpecies('Yinglong');
  assert.deepStrictEqual(actual, [dino1])
}



//
// Remove a dinosaur from its collection of dinosaurs
// Find the dinosaur that attracts the most visitors
// Find all dinosaurs of a particular species
// Calculate the total number of visitors per day
// Calculate the total number of visitors per year
// Calculate the total revenue from ticket sales for one year
//





module.exports = Park;
