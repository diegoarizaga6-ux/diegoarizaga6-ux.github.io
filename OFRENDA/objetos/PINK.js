import * as THREE from "../js/three.module.js";

export default function E01   ({x , y , z}){
//Papel picado
var geometry01 = new THREE.PlaneGeometry(100, 75, 100);
var texturapapel = new THREE.TextureLoader().load("./assets/PINK.png");
var material01 = new THREE.MeshLambertMaterial({ map: texturapapel, transparent: true,
  side: THREE.DoubleSide});

    texturapapel.wrapS=THREE.RepeatWrapping;
    texturapapel.wrapT=THREE.RepeatWrapping;
    texturapapel.repeat.set(1,1);

var mesh01 = new THREE.Mesh(geometry01, material01);
mesh01.position.set(0, 7, 1);
//scene.add(mesh01);
mesh01.castShadow = true;

var PINK = new THREE.Group();
PINK.add(mesh01);
PINK.position.set(x , y , z);

return PINK;
}