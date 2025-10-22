import * as THREE from "../js/three.module.js";
import { RoundedBoxGeometry } from "../js/RoundedBoxGeometry.js";

export default function E01   ({x , y , z}){
// GRUPO COMIDA
var comida = new THREE.Group();

// cuerpo del plato
var geometry06 = new THREE.CylinderGeometry(4,2.3,3.2,30);
var material06 = new THREE.MeshLambertMaterial({ color: 0x6E2C05 });
var mesh06 = new THREE.Mesh(geometry06, material06);
mesh06.position.set(4,5,4);
mesh06.rotation.set(0,0,0);
mesh06.castShadow = true;
comida.add(mesh06);

// Plano de arriba del plato
var geometry06 = new THREE.CylinderGeometry(4.5,.1,3.6,30);
var material06 = new THREE.MeshLambertMaterial({ color: 0xA14713 });
var mesh06 = new THREE.Mesh(geometry06, material06);
mesh06.position.set(4,5.1,4);
mesh06.rotation.set(0,0,0);
mesh06.castShadow = true;
comida.add(mesh06);

// caldo
var geometry06 = new THREE.CylinderGeometry(4,1,3.2,30);
var material06 = new THREE.MeshLambertMaterial({ color: 0xDE5404 });
var mesh06 = new THREE.Mesh(geometry06, material06);
mesh06.position.set(4,5.4,4);
mesh06.rotation.set(0,0,0);
mesh06.castShadow = true;
comida.add(mesh06);

// garbanzos
var geometry06 = new RoundedBoxGeometry(.5,.5,.5,2,4);
var material06 = new THREE.MeshLambertMaterial({ color: 0xE3A302 });
var mesh06 = new THREE.Mesh(geometry06, material06);
mesh06.position.set(4,7,4);
mesh06.rotation.set(0,0,0);
mesh06.castShadow = true;
comida.add(mesh06);

var geometry06 = new RoundedBoxGeometry(.5,.5,.5,2,4);
var material06 = new THREE.MeshLambertMaterial({ color: 0xC7421C });
var mesh06 = new THREE.Mesh(geometry06, material06);
mesh06.position.set(4,7,7);
mesh06.rotation.set(0,0,0);
mesh06.castShadow = true;
comida.add(mesh06);

var geometry06 = new RoundedBoxGeometry(.5,.5,.5,2,4);
var material06 = new THREE.MeshLambertMaterial({ color: 0x4DB336 });
var mesh06 = new THREE.Mesh(geometry06, material06);
mesh06.position.set(6.2,7,2);
mesh06.rotation.set(0,0,0);
mesh06.castShadow = true;
comida.add(mesh06);

var geometry06 = new RoundedBoxGeometry(.5,.5,.5,2,4);
var material06 = new THREE.MeshLambertMaterial({ color: 0xE3A302 });
var mesh06 = new THREE.Mesh(geometry06, material06);
mesh06.position.set(4,7,1);
mesh06.rotation.set(0,0,0);
mesh06.castShadow = true;
comida.add(mesh06);

var geometry06 = new RoundedBoxGeometry(.5,.5,.5,2,4);
var material06 = new THREE.MeshLambertMaterial({ color: 0xC7421C });
var mesh06 = new THREE.Mesh(geometry06, material06);
mesh06.position.set(1,7,3);
mesh06.rotation.set(0,0,0);
mesh06.castShadow = true;
comida.add(mesh06);

var geometry06 = new RoundedBoxGeometry(.5,.5,.5,2,4);
var material06 = new THREE.MeshLambertMaterial({ color: 0xE3A302 });
var mesh06 = new THREE.Mesh(geometry06, material06);
mesh06.position.set(5.6,7,7.3);
mesh06.rotation.set(0,0,0);
mesh06.castShadow = true;
comida.add(mesh06);

var geometry06 = new RoundedBoxGeometry(.5,.5,.5,2,4);
var material06 = new THREE.MeshLambertMaterial({ color: 0xC7421C });
var mesh06 = new THREE.Mesh(geometry06, material06);
mesh06.position.set(7,7,5);
mesh06.rotation.set(0,0,0);
mesh06.castShadow = true;
comida.add(mesh06);

var geometry06 = new RoundedBoxGeometry(.5,.5,.5,2,4);
var material06 = new THREE.MeshLambertMaterial({ color: 0x4DB336 });
var mesh06 = new THREE.Mesh(geometry06, material06);
mesh06.position.set(3,7,5);
mesh06.rotation.set(0,0,0);
mesh06.castShadow = true;
comida.add(mesh06);

var geometry06 = new RoundedBoxGeometry(.5,.5,.5,2,8);
var material06 = new THREE.MeshLambertMaterial({ color: 0x4DB336 });
var mesh06 = new THREE.Mesh(geometry06, material06);
mesh06.position.set(2.1,7,7);
mesh06.rotation.set(0,0,0);
mesh06.castShadow = true;
comida.add(mesh06);

// carne
var geometry06 = new RoundedBoxGeometry(2,1.5,1.5,2,.7);
var material06 = new THREE.MeshLambertMaterial({ color: 0xEB7D00 });
var mesh06 = new THREE.Mesh(geometry06, material06);
mesh06.position.set(4,7,6);
mesh06.rotation.set(0,0,0);
mesh06.castShadow = true;
comida.add(mesh06);

// hueso tallo
var geometry06 = new RoundedBoxGeometry(2.3,.7,.7,4,8);
var material06 = new THREE.MeshLambertMaterial({ color: 0xFAF4F0 });
var mesh06 = new THREE.Mesh(geometry06, material06);
mesh06.position.set(5,7,6);
mesh06.rotation.set(0,0,0);
mesh06.castShadow = true;
comida.add(mesh06);

// hueso bolitas
var geometry06 = new RoundedBoxGeometry(.7,.7,.7,4,8);
var material06 = new THREE.MeshLambertMaterial({ color: 0xFAF4F0 });
var mesh06 = new THREE.Mesh(geometry06, material06);
mesh06.position.set(6,7,6.3);
mesh06.rotation.set(0,0,0);
mesh06.castShadow = true;
comida.add(mesh06);

var geometry06 = new RoundedBoxGeometry(.7,.7,.7,4,8);
var material06 = new THREE.MeshLambertMaterial({ color: 0xFAF4F0 });
var mesh06 = new THREE.Mesh(geometry06, material06);
mesh06.position.set(6,7,5.6);
mesh06.rotation.set(0,0,0);
mesh06.castShadow = true;
comida.add(mesh06);

// Añadir el grupo a la escena
//scene.add(comida);

var COMIDA = new THREE.Group();
COMIDA.add(comida);
COMIDA.position.set(x , y , z);

return COMIDA;
}