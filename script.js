function reset(){
const alphabetTemp = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const category =  ["Astronomers","Astronauts","Biologists","Chemists","Physicists","Aviators","Inventors","Philosophers","Metric Units","SI Units","Time Units","Constants","Eponymous Constants",
"Medicine",
"Microscope Parts","Measuring Equipment",
"Latin Prefixes","Greek Letters","Scientific Method",
"Human Bones","Human Muscles","Human Organs","Organ Systems","Human Eye Parts","Human Brain Parts","Circulatory System","Respiratory System","Genetics",
"Plant Organelles","Eukaryotic Organelles","Animal Cell Organelles","Cell Division","Nucleotides","Heredity",
"Enzymes","Hormones","Neurotransmitters","Amino Acids",
"Bacteria","Pathogens","Protists",
"Trees","Reptiles","Amphibians","Plants","Phyla","Flowers","Flowering Plants","Edible Herbs","Submerged Aquatic Vegetation",
"Birds","Birds of Prey","State Birds",
"Insects","Insect Anatomy","Spiders",
"Marsupials","Marine Mammals","Primates","Dog Breeds","Fish","Fungi","Mushrooms",
"Invasive Species",
"Poisonous/Venomous Animals","Vertebrates","Land Vertebrates","Endangered Species","Uni-cellular Organisms","Animals with Antlers","Domesticated Animals",
"Prehistoric Animals","Prehistoric Aquatic Animals",
"Coral","Aquatic",
"Nocturnal Animals","Extinct Animals","Marine Animals",
"Taxnomy","Evolution","Biomes","Terrestrial Biomes","Ecosystems","Bioogeochemical cycles",
"Water cycle","Soil Types","Pollution","Abiotic Factors",
"Symbiotic Relationships","Food Webs",
"Flower Parts","Plant Parts",
"Diseases/disorders","Human Diseases","Infectious Diseases","Cancers","Foodborne Diseases","Genetic diseases","Viral Diseases","Neurological diseases","Immunology",
"Fingerprint Types",
"Nutrition on FDA Label","Zoology",
"Metals (Elements)","Semimetals (Elements)","Nonmetals (Elements)","Elements discovered after 1900","Elements (chemistry) named after places","Manmade Elements","Noble Gases",
"Compounds","Organic Compounds","Acidic Compounds","Acids",
"Matter","States of Matter","Phase changes","Matter properties","Types of Reactions","Gases","Chem lab equipment",
"Geology","Oceanography","Meteorology/Weather",
"Astronomy",
"Minerals","Native Element Minerals","Gemstones","Precious Metals","Rocks","Igneous Rocks","Metamorphic Rocks","Sedimentary Rocks","Fossils",
"Tectonic Plate Names","Ancient Supercontinents","Earth layers","Earthquakes","Mountains","Mountains in US","Volcanoes (Genearl)","Active Volcanoes",
"Deserts","Coastal Landforms","Desert Landforms","Water Bodies","Glaciers in US","Bathymetric Features","Major surface currents",
"General Celestial Bodies","Stars","Stellar Evolution","Deep space objects","Galaxies","Constellations","Comets","General Solar System","Planents","Dwarf Planets","Moons","Saturn Moons",
"NASA Missions",
"Climate","Climate change","Climate zones",
"Natural Disasters","Severe Weather","Hurricanes","Hurricane Names","Atmosphere layers","Atmosphere wind/currents",
"Weather Instruments","Weather Forecasting","Weather Phenomena",
"Eons","Eras","Periods","Geologic times",
"Capital Cities of Countries",
"Topographic maps","Topographic Map symbols","Types of Forces (dynamics)",
"Circuits","Dynamics","Kinematics",
"US National Parks",
"Archaeology","Map Features","Eastern Hemisphere Countries",
"Thermodynamics","Energy Types","Energy sources",
"Magnetism","Electricity","Optics","Sound","Wave Types","EM Spectrum",
"Sub-atomic Particles","Elementary Particles","Atomic Model",
"Airplane parts","Named Aircrafts",
"Computer parts","Programming languages","Simple Machines","Computers"];
  
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
