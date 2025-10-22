import * as THREE from "../js/three.module.js";
import { RoundedBoxGeometry } from "../js/RoundedBoxGeometry.js";

export default function E01({ x, y, z }) {
  var grupoCalavera = new THREE.Group();


  // Cráneo
  var geometry06 = new RoundedBoxGeometry(7, 7, 7.4, 7, 200);
  var material06 = new THREE.MeshLambertMaterial({ color: 0xF7F5F2 });
  var mesh06 = new THREE.Mesh(geometry06, material06);
  mesh06.position.set(4, 3.8, 6.7);
  mesh06.castShadow = true;
  grupoCalavera.add(mesh06);

  // Mandíbula
  var geometry06 = new THREE.CylinderGeometry(1.7, 2.5, 3, 40);
  var material06 = new THREE.MeshLambertMaterial({ color: 0xF7F5F2 });
  var mesh06 = new THREE.Mesh(geometry06, material06);
  mesh06.position.set(4, 2.1, 4.9);
  mesh06.castShadow = true;
  grupoCalavera.add(mesh06);

  // Ojos
  var geometry06 = new RoundedBoxGeometry(1, 1.3, 1, 8, 5);
  var material06 = new THREE.MeshLambertMaterial({ color: 0x000000 });
  var mesh06 = new THREE.Mesh(geometry06, material06);
  mesh06.position.set(3, 4, 3.5);
  mesh06.castShadow = true;
  grupoCalavera.add(mesh06);

  var geometry06 = new RoundedBoxGeometry(1, 1.3, 1, 8, 5);
  var material06 = new THREE.MeshLambertMaterial({ color: 0x000000 });
  var mesh06 = new THREE.Mesh(geometry06, material06);
  mesh06.position.set(4.9, 4, 3.5);
  mesh06.castShadow = true;
  grupoCalavera.add(mesh06);

  // Nariz
  var geometry06 = new RoundedBoxGeometry(0.3, 0.5, 0.3, 8, 5);
  var material06 = new THREE.MeshLambertMaterial({ color: 0x000000 });
  var mesh06 = new THREE.Mesh(geometry06, material06);
  mesh06.position.set(3.6, 3, 3);
  mesh06.castShadow = true;
  grupoCalavera.add(mesh06);

  var geometry06 = new RoundedBoxGeometry(0.3, 0.5, 0.3, 8, 5);
  var material06 = new THREE.MeshLambertMaterial({ color: 0x000000 });
  var mesh06 = new THREE.Mesh(geometry06, material06);
  mesh06.position.set(4, 3, 3);
  mesh06.castShadow = true;
  grupoCalavera.add(mesh06);

  // Pupilas
  var geometry06 = new RoundedBoxGeometry(0.3, 0.3, 0.3, 8, 5);
  var material06 = new THREE.MeshLambertMaterial({ color: 0xFCA621 });
  var mesh06 = new THREE.Mesh(geometry06, material06);
  mesh06.position.set(2.9, 4, 3);
  mesh06.castShadow = true;
  grupoCalavera.add(mesh06);

  var geometry06 = new RoundedBoxGeometry(0.3, 0.3, 0.3, 8, 5);
  var material06 = new THREE.MeshLambertMaterial({ color: 0xFCA621 });
  var mesh06 = new THREE.Mesh(geometry06, material06);
  mesh06.position.set(5, 4, 3);
  mesh06.castShadow = true;
  grupoCalavera.add(mesh06);

  // Escleras
  var geometry06 = new RoundedBoxGeometry(0.6, 0.8, 0.6, 8, 5);
  var material06 = new THREE.MeshLambertMaterial({ color: 0x74458F });
  var mesh06 = new THREE.Mesh(geometry06, material06);
  mesh06.position.set(2.9, 4, 3.2);
  mesh06.castShadow = true;
  grupoCalavera.add(mesh06);

  var geometry06 = new RoundedBoxGeometry(0.6, 0.8, 0.6, 8, 5);
  var material06 = new THREE.MeshLambertMaterial({ color: 0x74458F });
  var mesh06 = new THREE.Mesh(geometry06, material06);
  mesh06.position.set(5, 4, 3.2);
  mesh06.castShadow = true;
  grupoCalavera.add(mesh06);

  // Decoración frontal
  var geometry06 = new RoundedBoxGeometry(0.5, 0.5, 0.5, 8, 5);
  var material06 = new THREE.MeshLambertMaterial({ color: 0xFF59CB });
  var mesh06 = new THREE.Mesh(geometry06, material06);
  mesh06.position.set(2.5, 5.8, 4);
  mesh06.castShadow = true;
  grupoCalavera.add(mesh06);

  var geometry06 = new RoundedBoxGeometry(0.5, 0.5, 0.5, 8, 5);
  var material06 = new THREE.MeshLambertMaterial({ color: 0xFF59CB });
  var mesh06 = new THREE.Mesh(geometry06, material06);
  mesh06.position.set(4, 6.7, 4.6);
  mesh06.castShadow = true;
  grupoCalavera.add(mesh06);

  var geometry06 = new RoundedBoxGeometry(0.5, 0.5, 0.5, 8, 5);
  var material06 = new THREE.MeshLambertMaterial({ color: 0xFF59CB });
  var mesh06 = new THREE.Mesh(geometry06, material06);
  mesh06.position.set(5.5, 5.7, 4);
  mesh06.castShadow = true;
  grupoCalavera.add(mesh06);

  var CALAVERA = new THREE.Group();
  CALAVERA.add(grupoCalavera);
  CALAVERA.position.set(x, y, z);

  return CALAVERA;
}