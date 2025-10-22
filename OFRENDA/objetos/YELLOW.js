import * as THREE from "../js/three.module.js";

export default function E01   ({x , y , z}){
//Papel picado
var geometry01 = new THREE.PlaneGeometry(100, 75, 100);
var texturapapel = new THREE.TextureLoader().load("./assets/YELLOW.png");
var material01 = new THREE.MeshLambertMaterial({ map: texturapapel, transparent: true,     // 🔑 Activa la transparencia
  side: THREE.DoubleSide});

    texturapapel.wrapS=THREE.RepeatWrapping;
    texturapapel.wrapT=THREE.RepeatWrapping;
    texturapapel.repeat.set(1,1);

var mesh01 = new THREE.Mesh(geometry01, material01);
mesh01.position.set(0, 7, 1);
//scene.add(mesh01);
mesh01.castShadow = true;

var YELLOW = new THREE.Group();
YELLOW.add(mesh01);
YELLOW.position.set(x , y , z);

return YELLOW;
}