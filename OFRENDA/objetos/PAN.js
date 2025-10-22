import * as THREE from "../js/three.module.js";

export default function E01({x, y, z}){
// TEXTURA DEL PAN
var texturaPan = new THREE.TextureLoader().load("./assets/PAN.png");
var panMaterial = new THREE.MeshLambertMaterial({ map: texturaPan });

// GRUPO PAN
var pan = new THREE.Group();

// CUERPO PRINCIPAL - esfera achatada
var panGeometry = new THREE.SphereGeometry(2.2, 32, 16);
panGeometry.scale(1, 0.6, 1);
var panMesh = new THREE.Mesh(panGeometry, panMaterial);
panMesh.position.set(0, 1.5, 0);
panMesh.castShadow = true;
pan.add(panMesh);

// HUESITOS - cilindros curvos
var huesitoGeo = new THREE.CylinderGeometry(0.25, 0.25, 3.2, 8); // más grandes
huesitoGeo.rotateZ(Math.PI / 2);

var huesito1 = new THREE.Mesh(huesitoGeo, panMaterial);
huesito1.position.set(0, 2.2, 1.2);
huesito1.rotation.set(0.5, 0, 0);
huesito1.castShadow = true;
pan.add(huesito1);

var huesito2 = new THREE.Mesh(huesitoGeo, panMaterial);
huesito2.position.set(0, 2.2, -1.2);
huesito2.rotation.set(-0.5, 0, 0);
huesito2.castShadow = true;
pan.add(huesito2);

var huesito3 = new THREE.Mesh(huesitoGeo, panMaterial);
huesito3.position.set(1.2, 2.2, 0);
huesito3.rotation.set(0, 0, -0.5);
huesito3.castShadow = true;
pan.add(huesito3);

var huesito4 = new THREE.Mesh(huesitoGeo, panMaterial);
huesito4.position.set(-1.2, 2.2, 0);
huesito4.rotation.set(0, 0, 0.5);
huesito4.castShadow = true;
pan.add(huesito4);

// BOLITA CENTRAL
var bolitaGeo = new THREE.SphereGeometry(0.4, 16, 8);
var bolita = new THREE.Mesh(bolitaGeo, panMaterial);
bolita.position.set(0, 2.5, 0);
bolita.castShadow = true;
pan.add(bolita);

// AZÚCAR ESPOLVOREADA - esferas pequeñas sin for
var azucarGeo = new THREE.SphereGeometry(0.05, 6, 6);
var azucarMat = new THREE.MeshLambertMaterial({ color: 0xFFFFFF });

var azucar1 = new THREE.Mesh(azucarGeo, azucarMat);
azucar1.position.set(0.3, 2.4, 0.2);
azucar1.castShadow = false;
pan.add(azucar1);

var azucar2 = new THREE.Mesh(azucarGeo, azucarMat);
azucar2.position.set(-0.4, 2.45, -0.3);
azucar2.castShadow = false;
pan.add(azucar2);

var azucar3 = new THREE.Mesh(azucarGeo, azucarMat);
azucar3.position.set(0.1, 2.42, -0.5);
azucar3.castShadow = false;
pan.add(azucar3);

var azucar4 = new THREE.Mesh(azucarGeo, azucarMat);
azucar4.position.set(-0.2, 2.43, 0.4);
azucar4.castShadow = false;
pan.add(azucar4);

var azucar5 = new THREE.Mesh(azucarGeo, azucarMat);
azucar5.position.set(0.5, 2.41, -0.1);
azucar5.castShadow = false;
pan.add(azucar5);

// Posicionar el grupo pan sobre el plato
pan.position.set(0, 1, 0);
//scene.add(pan);

// PLATO
var platoGeometry = new THREE.CylinderGeometry(6, 6, 1, 32);
var platoMaterial = new THREE.MeshLambertMaterial({ color: 0xCCCCCC });
var platoMesh = new THREE.Mesh(platoGeometry, platoMaterial);
platoMesh.position.set(0, 0.5, 0);
platoMesh.receiveShadow = true;
//scene.add(platoMesh);


var PAN = new THREE.Group();
PAN.add(pan);
PAN.position.set (x, y, z);

return PAN;
    
}