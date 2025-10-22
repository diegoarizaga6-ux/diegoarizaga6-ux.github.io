import * as THREE from "../js/three.module.js";

export default function E01   ({x , y , z}){

// VELA 
var geometry1 = new THREE.CylinderGeometry(0.6, 0.6, 3, 32);
var material1 = new THREE.MeshLambertMaterial({
  color: 0xf5deb3,
  roughness: 0.6,
  metalness: 0.1
});
var mesh1 = new THREE.Mesh(geometry1, material1);
mesh1.castShadow = true;
mesh1.receiveShadow = true;
//scene.add(mesh1);
mesh1.position.set(0, 1.5, 0);

// Flama (emite luz)
var geometry2 = new THREE.ConeGeometry(0.25, 0.8, 32);
var material2 = new THREE.MeshLambertMaterial({
  emissive: 0xffa500,
  emissiveIntensity: 1.5,
  color: 0xffff99
});
var mesh2 = new THREE.Mesh(geometry2, material2);
mesh2.position.set(0, 3.2, 0);
//scene.add(mesh2);

// Luz de la vela
var luzFlama = new THREE.PointLight(0xffa500, 10, 10);
luzFlama.position.set(0, 3.5, 0);
//scene.add(luzFlama);

var VELITA1 = new THREE.Group();
VELITA1.add(mesh1, mesh2, luzFlama);
VELITA1.position.set(x , y , z);

return VELITA1;
}