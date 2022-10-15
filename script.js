const categories =  ["Human Organs","Geologic Period","Rocks", "Minerals","Disease Names","Natural disaster type","Fish species","Metals","Dinosaurs","Scientific instrument","Neurotransmitter","Insects","Constellations","Mammals","Genetic terms","Landforms","Ecosystem Types","Vaccine Types","River parts","Edible Seeds","Edible Nuts","Severe Weather Terms","Lake types","Fruit Trees","Plant Parts","Flightless Birds","Computer Parts","Forces and Motion","Human Bones","Element names","Plate Tectonic Terms","Reptiles","Weather vocab","Organelles","Engineering Vocab","Genetic Disorders","Trees","Scientific Laws","Muscle Names","Microscope Parts","Geologists","Acids","Physical Properties","Units of Measure","Physicists","Biologists","Chemists","Oceanography","Heredity","Simple Machines","Thermodynamics","Climatology","Birds","Fungi","Astronomers","Ocean Zones","Endangered Species","Wave Types","Immune System Parts","Eukaryote Parts","Poisons","Invasive Species","Weather Phenomena","Metalloids","Solar System Bodies"];

const alphabet =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

function reset(){
const alphabetTemp = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

const category =  ["Human Organs","Geologic Period","Rocks", "Minerals","Disease Names","Natural disaster type","Fish species","Metals","Dinosaurs","Scientific instrument","Neurotransmitter","Insects","Constellations","Mammals","Genetic terms","Landforms","Ecosystem Types","Vaccine Types","River parts","Edible Seeds","Edible Nuts","Severe Weather Terms","Lake types","Fruit Trees","Plant Parts","Flightless Birds","Computer Parts","Forces and Motion","Human Bones","Element names","Plate Tectonic Terms","Reptiles","Weather vocab","Organelles","Engineering Vocab","Genetic Disorders","Trees","Scientific Laws","Muscle Names","Microscope Parts","Geologists","Acids","Physical Properties","Units of Measure","Physicists","Biologists","Chemists","Oceanography","Heredity","Simple Machines","Thermodynamics","Climatology","Birds","Fungi","Astronomers","Ocean Zones","Endangered Species","Wave Types","Immune System Parts","Eukaryote Parts","Poisons","Invasive Species","Weather Phenomena","Metalloids","Solar System Bodies"];
  
var i = Math.floor((category.length)*Math.random());
document.getElementById("category1").innerHTML =  category[i];
category.splice(i,1)
var i = Math.floor((category.length)*Math.random());
document.getElementById("category2").innerHTML =  category[i];
category.splice(i,1)
var i = Math.floor((category.length)*Math.random());
document.getElementById("category3").innerHTML =  category[i];
category.splice(i,1)
var i = Math.floor((category.length)*Math.random());
document.getElementById("category4").innerHTML =  category[i];
category.splice(i,1)
var i = Math.floor((category.length)*Math.random());
document.getElementById("category5").innerHTML =  category[i];

var j = Math.floor((alphabetTemp.length)*Math.random());
document.getElementById("letter1").innerHTML =  alphabetTemp[j];
alphabetTemp.splice(j,1)
  //console.log(alphabetTemp)
var j = Math.floor((alphabetTemp.length)*Math.random());
document.getElementById("letter2").innerHTML =  alphabetTemp[j];
alphabetTemp.splice(j,1)
var j = Math.floor((alphabetTemp.length)*Math.random());
document.getElementById("letter3").innerHTML =  alphabetTemp[j];
alphabetTemp.splice(j,1)
var j = Math.floor((alphabetTemp.length)*Math.random());
document.getElementById("letter4").innerHTML =  alphabetTemp[j];
alphabetTemp.splice(j,1)
var j = Math.floor((alphabetTemp.length)*Math.random());
document.getElementById("letter5").innerHTML =  alphabetTemp[j];

for (let i=1; i<26; i++) {
  console.log(i)
  document.getElementById(i).value = ""
}

}
reset()
