const categories =  ["Human Organs","Geologic Period","Rocks", "Minerals","Disease Names","Natural disaster type","Fish species","Metals","Dinosaurs","Scientific instrument","Neurotransmitter","Insects","Constellations","Mammals","Genetic terms","Landforms","Ecosystem Types","Vaccine Types","River parts","Edible Seeds","Edible Nuts","Severe Weather Terms","Lake types","Fruit Trees","Plant Parts","Flightless Birds","Computer Parts","Forces and Motion","Human Bones","Element names","Plate Tectonic Terms","Reptiles","Weather vocab","Organelles","Engineering Vocab","Genetic Disorders","Trees","Scientific Laws","Muscle Names","Microscope Parts","Geologists","Acids","Physical Properties","Units of Measure","Physicists","Biologists","Chemists","Oceanography","Heredity","Simple Machines","Thermodynamics","Climatology","Birds","Fungi","Astronomers","Ocean Zones","Endangered Species","Wave Types","Immune System Parts","Eukaryote Parts","Poisons","Invasive Species","Weather Phenomena","Metalloids","Solar System Bodies"];

const alphabet =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


var j = Math.floor((alphabet.length)*Math.random());

var i = Math.floor((categories.length)*Math.random());
document.getElementById("category1").innerHTML =  categories[i];

var i = Math.floor((categories.length)*Math.random());
document.getElementById("category2").innerHTML =  categories[i];

var i = Math.floor((categories.length)*Math.random());
document.getElementById("category3").innerHTML =  categories[i];

var i = Math.floor((categories.length)*Math.random());
document.getElementById("category4").innerHTML =  categories[i];

var i = Math.floor((categories.length)*Math.random());
document.getElementById("category5").innerHTML =  categories[i];


var j = Math.floor((alphabet.length)*Math.random());
document.getElementById("letter1").innerHTML =  alphabet[j];

var j = Math.floor((alphabet.length)*Math.random());
document.getElementById("letter2").innerHTML =  alphabet[j];

var j = Math.floor((alphabet.length)*Math.random());
document.getElementById("letter3").innerHTML =  alphabet[j];

var j = Math.floor((alphabet.length)*Math.random());
document.getElementById("letter4").innerHTML =  alphabet[j];

var j = Math.floor((alphabet.length)*Math.random());
document.getElementById("letter5").innerHTML =  alphabet[j];