import * as THREE from "../js/three.module.js";

export default function E01({x, y, z}){

    //Naranja
var geometry06 = new THREE.SphereGeometry(4, 64, 64);
var material06 = new THREE.MeshLambertMaterial({
    color: 0xFF9D00
});
var mesh06 = new THREE.Mesh(geometry06, material06);
mesh06.position.set(0, 8.5, 0);
//scene.add(mesh06);
mesh06.castShadow = true;


//Tallo
var geometry07 = new THREE.CylinderGeometry(0.25, 0.35, 1.8, 16, 1);
var material07 = new THREE.MeshLambertMaterial({
    color: 0x4B3B05
});
var mesh07 = new THREE.Mesh(geometry07, material07);
mesh07.position.set(0, 13.2, 0);
//scene.add(mesh07);
mesh07.castShadow = true;

//Hoja
var geometry08 = new THREE.CylinderGeometry(1, 0.2, 1, 8, 0.5);
var material08 = new THREE.MeshLambertMaterial({
    color: 0x228B22
});
var mesh08 = new THREE.Mesh(geometry08, material08);
mesh08.position.set(1, 13, 0);
mesh08.rotation.set(0.3, 0.5, 0);
//scene.add(mesh08);
mesh08.castShadow = true;

var NARANJA = new THREE.Group();
NARANJA.add(mesh06, mesh07, mesh08);
NARANJA.position.set (x, y, z);

return NARANJA;

}