import * as THREE from "../js/three.module.js";

export default function E01({ x, y, z }) {
var fotoGeo = new THREE.PlaneGeometry(10, 30);
  var texturaFoto = new THREE.TextureLoader().load("./assets/SUELO.png");
  var fotoMat = new THREE.MeshLambertMaterial({ map: texturaFoto });

  texturaFoto.wrapS = THREE.RepeatWrapping;
  texturaFoto.wrapT = THREE.RepeatWrapping;
  texturaFoto.repeat.set(1, 1);

  var foto = new THREE.Mesh(fotoGeo, fotoMat);
  foto.position.set(0, 7, 1);
//scene.add(foto);

 var PISO = new THREE.Group();
  PISO.add(foto);
  PISO.position.set(x, y, z);

  return PISO;
}
