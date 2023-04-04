import './style.css';

//To install it from CDN 
// import * as THREE from 'https://unpkg.com/three@0.149.0/build/three.module.js';

import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();

console.log(scene);
console.log(camera);
console.log(renderer);



