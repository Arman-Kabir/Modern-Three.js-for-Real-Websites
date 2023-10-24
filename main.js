
import './style.css';
import * as THREE from 'three';
//To install it from CDN 
// import * as THREE from 'https://unpkg.com/three@0.149.0/build/three.module.js';
import * as dat from 'dat.gui';
// console.log(dat);

// const gui = new dat.GUI();
// const world = {
//     plane:{
//         width:10,
//         height:10
//     }
// }
// // console.log(gui);
// gui.add(world.plane,'width',1,20).onChange(()=>{
//     // console.log(planeMesh.geometry);
//     planeMesh.geometry.dispose();

//     planeMesh.geometry = new THREE.PlaneGeometry(world.plane.width,world.plane.height, 10, 10);

//     const { array } = planeMesh.geometry.attributes.position;

//     for (let i = 0; i < array.length; i += 3) {
//         const x = array[i];
//         const y = array[i + 1];
//         const z = array[i + 2];

//         array[i + 2] = z + Math.random();

//         // console.log(array[i]);
//     }

//     // console.log(world.plane.width);
// });

// gui.add(world.plane,'height',1,20).onChange(()=>{
//     planeMesh.geometry.dispose();
//     planeMesh.geometry = new THREE.PlaneGeometry(world.plane.width,world.plane.height, 10, 10);

//     const { array } = planeMesh.geometry.attributes.position;

//     for (let i = 0; i < array.length; i += 3) {
//         const x = array[i];
//         const y = array[i + 1];
//         const z = array[i + 2];   
//         array[i + 2] = z + Math.random();
//     }
// });


const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();

console.log(scene, camera, renderer);
renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(devicePixelRatio);

document.body.appendChild(renderer.domElement);


// Mesh = geometry + material
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
console.log(boxGeometry);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
console.log(material);
const mesh = new THREE.Mesh(boxGeometry, material);
console.log(mesh);
scene.add(mesh);

camera.position.z = 5;

function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene,camera);
    mesh.rotation.x +=0.01;
    mesh.rotation.y +=0.01;
    mesh.rotation.z +=0.01;
}

animate();

// // Plane Geo
// const planeGeometry = new THREE.PlaneGeometry(10,10, 10, 10);

// const planeMaterial = new THREE.MeshPhongMaterial({
//     color: 0xff0000,
//     side: THREE.DoubleSide,
//     // flatShading:THREE.FlatShading  // done thisa way in the course
//     flatShading: true
// });

// const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
// scene.add(planeMesh);

// console.log(planeMesh);

// const { array } = planeMesh.geometry.attributes.position;
// console.log(array);

// for (let i = 0; i < array.length; i += 3) {
//     const x = array[i];
//     const y = array[i + 1];
//     const z = array[i + 2];

//     array[i + 2] = z + Math.random();

//     // console.log(array[i]);
// }

// // console.log(planeGeometry);

// // directional light for MeshPhongMaterial
// const light = new THREE.DirectionalLight(0xffffff, 1);
// light.position.set(0, 0, 1);
// scene.add(light);


// function animate() {
//     requestAnimationFrame(animate);
//     renderer.render(scene, camera);
//     // mesh.rotation.x += .01;
//     // mesh.rotation.y += .01;

//     // planeMesh.rotation.x  +=.01;
//     // planeMesh.rotation.y  +=.01;
// }
// animate();




