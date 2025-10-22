import * as THREE from "../js/three.module.js";

export default function E01({ x, y, z }) {
  var ambient = new THREE.AmbientLight(0xFFFFFF, 0.4);
  var light = new THREE.PointLight(0xFFD580, 1.3, 100);
  light.position.set(0, 10, 20);

  var FOTO = new THREE.Group();

  var baseGeo = new THREE.BoxGeometry(30, 1, 20);
  var baseMat = new THREE.MeshLambertMaterial({ color: 0x5C4033 });
  var base = new THREE.Mesh(baseGeo, baseMat);
  base.position.set(0, -3, 0);
  base.receiveShadow = true;
  FOTO.add(base);

  var marcoExterior = new THREE.BoxGeometry(16, 20, 1);
  var marcoInterior = new THREE.BoxGeometry(12, 16, 1);
  var marcoMat = new THREE.MeshLambertMaterial({ color: 0xD4AF37 });

  var marco = new THREE.Mesh(marcoExterior, marcoMat);
  marco.position.set(0, 7, 0);
  FOTO.add(marco);

  var huecoMat = new THREE.MeshLambertMaterial({ color: 0x222222 });
  var hueco = new THREE.Mesh(marcoInterior, huecoMat);
  hueco.position.set(0, 7, 0.4);
  FOTO.add(hueco);

  var fotoGeo = new THREE.PlaneGeometry(10.5, 14.5);
  var texturaFoto = new THREE.TextureLoader().load("./assets/1.jpg");
  var fotoMat = new THREE.MeshLambertMaterial({ map: texturaFoto });

  texturaFoto.wrapS = THREE.RepeatWrapping;
  texturaFoto.wrapT = THREE.RepeatWrapping;
  texturaFoto.repeat.set(1, 1);

  var foto = new THREE.Mesh(fotoGeo, fotoMat);
  foto.position.set(0, 7, 1);
  FOTO.add(foto);

  function crearFlorManual(x, y, z) {
    var grupoFlor = new THREE.Group();
    var matPetalo = new THREE.MeshLambertMaterial({ color: 0xFF8C00 });
    var matCentro = new THREE.MeshLambertMaterial({ color: 0xFFD54F });
    var geoPetalo = new THREE.SphereGeometry(0.7, 16, 16);
    var geoCentro = new THREE.SphereGeometry(0.5, 16, 16);

    var petalo1 = new THREE.Mesh(geoPetalo, matPetalo);
    petalo1.position.set(1, 0, 0);
    grupoFlor.add(petalo1);

    var petalo2 = new THREE.Mesh(geoPetalo, matPetalo);
    petalo2.position.set(Math.cos(Math.PI / 4), Math.sin(Math.PI / 4), 0);
    grupoFlor.add(petalo2);

    var petalo3 = new THREE.Mesh(geoPetalo, matPetalo);
    petalo3.position.set(0, 1, 0);
    grupoFlor.add(petalo3);

    var petalo4 = new THREE.Mesh(geoPetalo, matPetalo);
    petalo4.position.set(-Math.cos(Math.PI / 4), Math.sin(Math.PI / 4), 0);
    grupoFlor.add(petalo4);

    var petalo5 = new THREE.Mesh(geoPetalo, matPetalo);
    petalo5.position.set(-1, 0, 0);
    grupoFlor.add(petalo5);

    var petalo6 = new THREE.Mesh(geoPetalo, matPetalo);
    petalo6.position.set(-Math.cos(Math.PI / 4), -Math.sin(Math.PI / 4), 0);
    grupoFlor.add(petalo6);

    var petalo7 = new THREE.Mesh(geoPetalo, matPetalo);
    petalo7.position.set(0, -1, 0);
    grupoFlor.add(petalo7);

    var petalo8 = new THREE.Mesh(geoPetalo, matPetalo);
    petalo8.position.set(Math.cos(Math.PI / 4), -Math.sin(Math.PI / 4), 0);
    grupoFlor.add(petalo8);

    var centro = new THREE.Mesh(geoCentro, matCentro);
    grupoFlor.add(centro);

    grupoFlor.position.set(x, y, z);
    FOTO.add(grupoFlor);
  }

  crearFlorManual(-8, 16, 1);
  crearFlorManual(8, 16, 1);
  crearFlorManual(-8, -1, 1);
  crearFlorManual(8, -1, 1);

  var MARCO = new THREE.Group();
  MARCO.add(FOTO, ambient);
  MARCO.position.set(x, y, z);

  return MARCO;
}