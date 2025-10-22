import * as THREE from "../js/three.module.js";
import { RoundedBoxGeometry } from "../js/RoundedBoxGeometry.js";

export default function E01({ x, y, z }) {
// GRUPO SOMBRERO
var sombrero = new THREE.Group();

// Copa
var geometry06 = new RoundedBoxGeometry(14,14,14,17,50);
var material06 = new THREE.MeshBasicMaterial({ color: 0x171717 });
var mesh06 = new THREE.Mesh(geometry06, material06);
mesh06.position.set(2,15,0.3);
mesh06.rotation.set(0,0,0);
mesh06.castShadow = true;
sombrero.add(mesh06);

// Copa de en medio
var geometry06 = new THREE.CylinderGeometry(7,8,7,40,40);
var material06 = new THREE.MeshBasicMaterial({ color: 0x171717 });
var mesh06 = new THREE.Mesh(geometry06, material06);
mesh06.position.set(2, 12, 0.3);
mesh06.castShadow = true;
sombrero.add(mesh06);

// Línea gris
var geometry06 = new THREE.CylinderGeometry(7,8,2,40,40);
var material06 = new THREE.MeshBasicMaterial({ color: 0x8A8A8A });
var mesh06 = new THREE.Mesh(geometry06, material06);
mesh06.position.set(2,11,0.3);
mesh06.castShadow = true;
sombrero.add(mesh06);

// Línea gris inferior
var geometry06 = new THREE.CylinderGeometry(10,9,1,40,40);
var material06 = new THREE.MeshBasicMaterial({ color: 0x171717 });
var mesh06 = new THREE.Mesh(geometry06, material06);
mesh06.position.set(2,8,0.3);
mesh06.castShadow = true;
sombrero.add(mesh06);

// Añadir el grupo a la escena
//scene.add(sombrero);

var SOMBRERO = new THREE.Group();
  SOMBRERO.add(sombrero);
  SOMBRERO.position.set(x, y, z);

  return SOMBRERO;
}