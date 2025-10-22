import * as THREE from "../js/three.module.js";

export default function E01({x, y, z}){


    //uva verde

// Grupo principal del racimo
var racimo = new THREE.Group();

// Material verde oliva suave
var materialUva = new THREE.MeshLambertMaterial({
  color: 0x6B8E23
});

// Función para crear y agregar una uva
function crearUva(x, y, z) {
  var geo = new THREE.SphereGeometry(2, 10, 64);
  var uva = new THREE.Mesh(geo, materialUva);
  uva.position.set(x, y, z);
  uva.castShadow = true;
  racimo.add(uva);
}

// Nivel superior
crearUva(0, 10, 0);
crearUva(-2.2, 10, 1.5);
crearUva(2.2, 10, -1.5);

// Nivel medio
crearUva(-1.5, 7.5, 0);
crearUva(0, 7.5, 1.8);
crearUva(1.5, 7.5, -1);

// Nivel inferior
crearUva(-1, 5, -1);
crearUva(1, 5, 1);
crearUva(0, 5, 0);

// Posicionar el racimo completo
racimo.position.set(0, 0, 0); // Ajusta según tu escena

// Agregar al grupo o escena
// scene.add(racimo);

var UVAS = new THREE.Group();
UVAS.add(racimo);
UVAS.position.set (x, y, z);

return UVAS;
}