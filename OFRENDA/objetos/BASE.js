import * as THREE from "../js/three.module.js";

export default function E01({ x, y, z }) {
  // BASE
 var geometry01 = new THREE.BoxGeometry(30, 1, 20);
  var material01 = new THREE.MeshLambertMaterial({ color: 0x5C4033 });
  var mesh01 = new THREE.Mesh(geometry01, material01);
  mesh01.position.set(0, -3, 0);
  mesh01.receiveShadow = true;

  //scene.add(mesh01);

  var BASE = new THREE.Group();
  BASE.add(mesh01);
  BASE.position.set(x, y, z);

  return BASE;
}