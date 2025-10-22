import * as THREE from "../js/three.module.js";
import { RoundedBoxGeometry } from "../js/RoundedBoxGeometry.js";

export default function E01({ x, y, z }) {
// GRUPO CIGARROS
var cigarros = new THREE.Group();

// Cajetilla blanco
var geometry06 = new RoundedBoxGeometry(4.1,4.1,3.1,6,.5);
var texturaCajetilla = new THREE.TextureLoader().load("./assets/cajetilla.jpg");
var material06 = new THREE.MeshLambertMaterial({
    color: 0xF0EBEB,
    map: texturaCajetilla
});
  texturaCajetilla.wrapS = THREE.RepeatWrapping;
  texturaCajetilla.wrapT = THREE.RepeatWrapping;
  texturaCajetilla.repeat.set(.36, 1);
  
var mesh06 = new THREE.Mesh(geometry06, material06);
mesh06.position.set(4,7, 4);
mesh06.rotation.set(0,0,0);
mesh06.castShadow = true;
cigarros.add(mesh06);

// Cajetilla rojo
var geometry06 = new RoundedBoxGeometry(3.9,3.9,3,6,.5);
var material06 = new THREE.MeshLambertMaterial({
    color: 0xBD1A1A
});
var mesh06 = new THREE.Mesh(geometry06, material06);
mesh06.position.set(4,9, 4);
mesh06.rotation.set(0,0,0);
mesh06.castShadow = true;
cigarros.add(mesh06);

// línea roja
var geometry06 = new RoundedBoxGeometry(4.2,.2,3.2,6,.5);
var material06 = new THREE.MeshLambertMaterial({
    color: 0xBD1A1A
});
var mesh06 = new THREE.Mesh(geometry06, material06);
mesh06.position.set(4,5.8, 4);
mesh06.rotation.set(0,0,0);
mesh06.castShadow = true;
cigarros.add(mesh06);

// cigarros blanco y naranja (todos agrupados)
var geometry06 = new THREE.CylinderGeometry(.2,.2,1.6,10,20);
var material06 = new THREE.MeshLambertMaterial({ color: 0xE8E6E6 });
var mesh06 = new THREE.Mesh(geometry06, material06);
mesh06.position.set(7,5,7.4);
mesh06.rotation.set(4.7,0,0);
mesh06.castShadow = true;
cigarros.add(mesh06);

var geometry06 = new THREE.CylinderGeometry(.2,.2,1,10,20);
var material06 = new THREE.MeshLambertMaterial({ color: 0xD68D29 });
var mesh06 = new THREE.Mesh(geometry06, material06);
mesh06.position.set(7,5,6.1);
mesh06.rotation.set(4.7,0,0);
mesh06.castShadow = true;
cigarros.add(mesh06);

// 2
var geometry06 = new THREE.CylinderGeometry(.2,.2,1.6,10,20);
var material06 = new THREE.MeshLambertMaterial({ color: 0xE8E6E6 });
var mesh06 = new THREE.Mesh(geometry06, material06);
mesh06.position.set(7.2,5.3,7.4);
mesh06.rotation.set(4.7,0,0);
mesh06.castShadow = true;
cigarros.add(mesh06);

var geometry06 = new THREE.CylinderGeometry(.2,.2,1,10,20);
var material06 = new THREE.MeshLambertMaterial({ color: 0xD68D29 });
var mesh06 = new THREE.Mesh(geometry06, material06);
mesh06.position.set(7.2,5.3,6.1);
mesh06.rotation.set(4.7,0,0);
mesh06.castShadow = true;
cigarros.add(mesh06);

// 3
var geometry06 = new THREE.CylinderGeometry(.2,.2,1.6,10,20);
var material06 = new THREE.MeshLambertMaterial({ color: 0xE8E6E6 });
var mesh06 = new THREE.Mesh(geometry06, material06);
mesh06.position.set(7.4,5,7.4);
mesh06.rotation.set(4.7,0,0);
mesh06.castShadow = true;
cigarros.add(mesh06);

var geometry06 = new THREE.CylinderGeometry(.2,.2,1,10,20);
var material06 = new THREE.MeshLambertMaterial({ color: 0xD68D29 });
var mesh06 = new THREE.Mesh(geometry06, material06);
mesh06.position.set(7.4,5,6.1);
mesh06.rotation.set(4.7,0,0);
mesh06.castShadow = true;
cigarros.add(mesh06);

// Cigarros 2
var geometry06 = new THREE.CylinderGeometry(.2,.2,1.6,10,20);
var material06 = new THREE.MeshLambertMaterial({ color: 0xE8E6E6 });
var mesh06 = new THREE.Mesh(geometry06, material06);
mesh06.position.set(7,5,7.4);
mesh06.rotation.set(4.7,0,0);
mesh06.castShadow = true;
cigarros.add(mesh06);

var geometry06 = new THREE.CylinderGeometry(.2,.2,1,10,20);
var material06 = new THREE.MeshLambertMaterial({ color: 0xD68D29 });
var mesh06 = new THREE.Mesh(geometry06, material06);
mesh06.position.set(7,5,6.1);
mesh06.rotation.set(4.7,0,0);
mesh06.castShadow = true;
cigarros.add(mesh06);

// 2
var geometry06 = new THREE.CylinderGeometry(.2,.2,1.6,10,20);
var material06 = new THREE.MeshLambertMaterial({ color: 0xE8E6E6 });
var mesh06 = new THREE.Mesh(geometry06, material06);
mesh06.position.set(7.6,5.3,7.4);
mesh06.rotation.set(4.7,0,0);
mesh06.castShadow = true;
cigarros.add(mesh06);

var geometry06 = new THREE.CylinderGeometry(.2,.2,1,10,20);
var material06 = new THREE.MeshLambertMaterial({ color: 0xD68D29 });
var mesh06 = new THREE.Mesh(geometry06, material06);
mesh06.position.set(7.6,5.3,6.1);
mesh06.rotation.set(4.7,0,0);
mesh06.castShadow = true;
cigarros.add(mesh06);

// 3
var geometry06 = new THREE.CylinderGeometry(.2,.2,1.6,10,20);
var material06 = new THREE.MeshLambertMaterial({ color: 0xE8E6E6 });
var mesh06 = new THREE.Mesh(geometry06, material06);
mesh06.position.set(7.8,5,7.4);
mesh06.rotation.set(4.7,0,0);
mesh06.castShadow = true;
cigarros.add(mesh06);

var geometry06 = new THREE.CylinderGeometry(.2,.2,1,10,20);
var material06 = new THREE.MeshLambertMaterial({ color: 0xD68D29 });
var mesh06 = new THREE.Mesh(geometry06, material06);
mesh06.position.set(7.8,5,6.1);
mesh06.rotation.set(4.7,0,0);
mesh06.castShadow = true;
cigarros.add(mesh06);

// Añadir el grupo a la escena
//scene.add(cigarros);
var CIGARROS = new THREE.Group();
  CIGARROS.add(cigarros);
  CIGARROS.position.set(x, y, z);

  return CIGARROS;
}