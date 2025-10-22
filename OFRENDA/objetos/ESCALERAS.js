import * as THREE from "../js/three.module.js";

export default function E01 ({x, y, z}){


    //OBJETOS
var escalera = new THREE.Mesh(
  new THREE.BoxGeometry(230, 240, 10),
  new THREE.MeshLambertMaterial({ color: 0xffffff, roughness: 1 })
);
escalera.rotation.x = -Math.PI / 2;
escalera.position.y = 0;
escalera.receiveShadow = true;
//scene.add(escalera);

var escalera01 = new THREE.Mesh(
  new THREE.BoxGeometry(200, 210, 10),
  new THREE.MeshLambertMaterial({ color: 0xffffff, roughness: 1 })
);
escalera01.rotation.x = -Math.PI / 2;
escalera01.position.y = 10;
escalera01.position.z = -15;
escalera01.receiveShadow = true;
//scene.add(escalera01);

var escalera02 = new THREE.Mesh(
  new THREE.BoxGeometry(170, 180, 10),
  new THREE.MeshLambertMaterial({ color: 0xffffff, roughness: 1 })
);
escalera02.rotation.x = -Math.PI / 2;
escalera02.position.y = 20;
escalera02.position.z = -30;
escalera02.receiveShadow = true;
//scene.add(escalera02);

var escalera03 = new THREE.Mesh(
  new THREE.BoxGeometry(140, 150, 10),
  new THREE.MeshLambertMaterial({ color: 0xffffff, roughness: 1 })
);
escalera03.rotation.x = -Math.PI / 2;
escalera03.position.y = 30;
escalera03.position.z = -45;
escalera03.receiveShadow = true;
//scene.add(escalera03);

var escalera04 = new THREE.Mesh(
  new THREE.BoxGeometry(110, 120, 10),
  new THREE.MeshLambertMaterial({ color: 0xffffff, roughness: 1 })
);
escalera04.rotation.x = -Math.PI / 2;
escalera04.position.y = 40;
escalera04.position.z = -60;
escalera04.receiveShadow = true;
//scene.add(escalera04);

var escalera05 = new THREE.Mesh(
  new THREE.BoxGeometry(80, 90, 10),
  new THREE.MeshLambertMaterial({ color: 0xffffff, roughness: 1 })
);
escalera05.rotation.x = -Math.PI / 2;
escalera05.position.y = 50;
escalera05.position.z = -75;
escalera05.receiveShadow = true;
//scene.add(escalera05);

var escalera06 = new THREE.Mesh(
  new THREE.BoxGeometry(50, 60, 10),
  new THREE.MeshLambertMaterial({ color: 0xffffff, roughness: 1 })
);
escalera06.rotation.x = -Math.PI / 2;
escalera06.position.y = 60;
escalera06.position.z = -90;
escalera06.receiveShadow = true;
//scene.add(escalera06);

var escalera07 = new THREE.Mesh(
  new THREE.BoxGeometry(50, 30, 10),
  new THREE.MeshLambertMaterial({ color: 0xffffff, roughness: 1 })
);
escalera07.rotation.x = -Math.PI / 2;
escalera07.position.y = 70;
escalera07.position.z = -105;
escalera07.receiveShadow = true;
//scene.add(escalera07);


var ESCENA = new THREE.Group();
ESCENA.add (escalera04, escalera05, escalera06, escalera07);
ESCENA.position.set(x, y, z);

return ESCENA;

}