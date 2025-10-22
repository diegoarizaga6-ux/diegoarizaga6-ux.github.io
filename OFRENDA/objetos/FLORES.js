import * as THREE from "../js/three.module.js";

export default function E01({ x, y, z }) {

  var FLOR = new THREE.Group();

  var grupoFlor = new THREE.Group();

  // Pétalos (8 posiciones alrededor del centro)
  var petalo1 = new THREE.Mesh(
    new THREE.SphereGeometry(0.7, 16, 16),
    new THREE.MeshLambertMaterial({ color: 0xFF8C00 })
  );
  petalo1.position.set(1, 0, 0);
  grupoFlor.add(petalo1);

  var petalo2 = new THREE.Mesh(
    new THREE.SphereGeometry(0.7, 16, 16),
    new THREE.MeshLambertMaterial({ color: 0xFF8C00 })
  );
  petalo2.position.set(Math.cos(Math.PI / 4), Math.sin(Math.PI / 4), 0);
  grupoFlor.add(petalo2);

  var petalo3 = new THREE.Mesh(
    new THREE.SphereGeometry(0.7, 16, 16),
    new THREE.MeshLambertMaterial({ color: 0xFF8C00 })
  );
  petalo3.position.set(0, 1, 0);
  grupoFlor.add(petalo3);

  var petalo4 = new THREE.Mesh(
    new THREE.SphereGeometry(0.7, 16, 16),
    new THREE.MeshLambertMaterial({ color: 0xFF8C00 })
  );
  petalo4.position.set(-Math.cos(Math.PI / 4), Math.sin(Math.PI / 4), 0);
  grupoFlor.add(petalo4);

  var petalo5 = new THREE.Mesh(
    new THREE.SphereGeometry(0.7, 16, 16),
    new THREE.MeshLambertMaterial({ color: 0xFF8C00 })
  );
  petalo5.position.set(-1, 0, 0);
  grupoFlor.add(petalo5);

  var petalo6 = new THREE.Mesh(
    new THREE.SphereGeometry(0.7, 16, 16),
    new THREE.MeshLambertMaterial({ color: 0xFF8C00 })
  );
  petalo6.position.set(-Math.cos(Math.PI / 4), -Math.sin(Math.PI / 4), 0);
  grupoFlor.add(petalo6);

  var petalo7 = new THREE.Mesh(
    new THREE.SphereGeometry(0.7, 16, 16),
    new THREE.MeshLambertMaterial({ color: 0xFF8C00 })
  );
  petalo7.position.set(0, -1, 0);
  grupoFlor.add(petalo7);

  var petalo8 = new THREE.Mesh(
    new THREE.SphereGeometry(0.7, 16, 16),
    new THREE.MeshLambertMaterial({ color: 0xFF8C00 })
  );
  petalo8.position.set(Math.cos(Math.PI / 4), -Math.sin(Math.PI / 4), 0);
  grupoFlor.add(petalo8);

  // Centro
  var centro = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 16),
    new THREE.MeshLambertMaterial({ color: 0xFFD54F })
  );
  grupoFlor.add(centro);

  // Posición de la flor
  grupoFlor.position.set(-8, 16, 1);

  // Agregar al grupo principal
  FLOR.add(grupoFlor);

  // 🌸 Grupo final
  var FLORES = new THREE.Group();
  FLORES.add(FLOR);
  FLORES.position.set(x, y, z);

  return FLORES;
}

