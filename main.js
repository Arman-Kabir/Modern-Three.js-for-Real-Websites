import './style.css';
import * as THREE from 'three';

//To install it from CDN 
// import * as THREE from 'https://unpkg.com/three@0.149.0/build/three.module.js';


const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);


// Renderer
const renderer = new THREE.WebGLRenderer();

renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(devicePixelRatio);

document.body.appendChild(renderer.domElement);

// Mesh = geometry + material
// const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const mesh = new THREE.Mesh(boxGeometry, material);
// scene.add(mesh);

camera.position.z = 5;

// Plane Geo
const planeGeometry = new THREE.PlaneGeometry(5, 5, 10, 10);
const planeMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000,side:THREE.DoubleSide });

const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(planeMesh);

console.log(planeGeometry);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    // mesh.rotation.x += .01;
    // mesh.rotation.y += .01;

    // planeMesh.rotation.x  +=.01;
    // planeMesh.rotation.y  +=.01;
}
animate();




