import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.152/build/three.module.js";
import {GLTFLoader} from "https://cdn.jsdelivr.net/npm/three@0.152/examples/jsm/loaders/GLTFLoader.js";

const container=document.getElementById("car-container");

const scene=new THREE.Scene();

const camera=new THREE.PerspectiveCamera(
60,
window.innerWidth/window.innerHeight,
0.1,
1000
);

camera.position.set(0,2,6);

const renderer=new THREE.WebGLRenderer({alpha:true,antialias:true});
renderer.setSize(window.innerWidth,window.innerHeight);

container.appendChild(renderer.domElement);

/* Lighting */

const light1=new THREE.HemisphereLight(0xffffff,0x444444,1.5);
scene.add(light1);

const light2=new THREE.DirectionalLight(0x0072CE,2);
light2.position.set(5,10,7);
scene.add(light2);

const ambient=new THREE.AmbientLight(0x0072CE,0.6);
scene.add(ambient);

/* Load Car */

const loader=new GLTFLoader();

loader.load("../assets/car.glb",function(gltf){

const car=gltf.scene;

car.scale.set(1.5,1.5,1.5);

scene.add(car);

animate(car);

});

function animate(model){

requestAnimationFrame(()=>animate(model));

model.rotation.y+=0.003;

renderer.render(scene,camera);

}

window.addEventListener("resize",()=>{

camera.aspect=window.innerWidth/window.innerHeight;
camera.updateProjectionMatrix();
renderer.setSize(window.innerWidth,window.innerHeight);

});
