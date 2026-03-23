var map=L.map('map').setView([30,20],2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

L.marker([48.8566,2.3522])
.addTo(map)
.bindPopup("France – Master Data Management");

L.marker([51.1657,10.4515])
.addTo(map)
.bindPopup("Germany – Engineering Synergy");

L.marker([13.0827,80.2707])
.addTo(map)
.bindPopup("India – Global Capability Center");


/* Smooth Scroll Reveal */

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

sections.forEach(section=>{
observer.observe(section);
});
