import * as THREE from "../js/three.module.js";
import { RoundedBoxGeometry } from "../js/RoundedBoxGeometry.js";

export default function E01 ({x, y, z}){
    var luzAmbiente = new THREE.AmbientLight(0xffffff, 0.6);
//scene.add(luzAmbiente)

  var FINAL = new THREE.Group();

// Cuerpo
var geometry1 = new RoundedBoxGeometry(5, 10, 5, 5, 1);
var material1 = new THREE.MeshLambertMaterial({ color: 0xE6E4BA,color: 0xE6E4BA,          
  transparent: true,        
  opacity: 0.3,            
  roughness: 0.1,           
  metalness: 0,             
  transmission: 1.0,        
  thickness: 0.5,           
  clearcoat: 1.0,           
  clearcoatRoughness: 0.1,  
 });
var mesh1 = new THREE.Mesh(geometry1, material1);
mesh1.position.set(0, 6, 0);
mesh1.castShadow = true;
FINAL.add(mesh1);

// Parte superior 1
var geometry2 = new RoundedBoxGeometry(4, 2.5, 4, 4, 1);
var material2 = new THREE.MeshLambertMaterial({ color: 0xE6E4BA,color: 0xE6E4BA,          
  transparent: true,       
  opacity: 0.3,             
  roughness: 0.1,           
  metalness: 0,            
  transmission: 1.0,        
  thickness: 0.5,           
  clearcoat: 1.0,           
  clearcoatRoughness: 0.1,  
 });
var mesh2 = new THREE.Mesh(geometry2, material2);
mesh2.position.set(0, 11, 0);
mesh2.castShadow = true;
FINAL.add(mesh2);

// Parte superior 2
var geometry3 = new RoundedBoxGeometry(3, 3.5, 3, 3, 1);
var material3 = new THREE.MeshLambertMaterial({ color: 0xE6E4BA, color: 0xE6E4BA,          
  transparent: true,        
  opacity: 0.3,             
  roughness: 0.1,           
  metalness: 0,             
  transmission: 1.0,        
  thickness: 0.5,           
  clearcoat: 1.0,           
  clearcoatRoughness: 0.1, 
});
var mesh3 = new THREE.Mesh(geometry3, material3);
mesh3.position.set(0, 11, 0);
mesh3.castShadow = true;
FINAL.add(mesh3);

// Boca
var geometry4 = new RoundedBoxGeometry(1.5, 3, 1.5, 1.5, 0.5);
var material4 = new THREE.MeshLambertMaterial({ color: 0xE6E4BA, color: 0xE6E4BA,          
  transparent: true,        
  opacity: 0.3,             
  roughness: 0.1,           
  metalness: 0,             
  transmission: 1.0,        
  thickness: 0.5,           
  clearcoat: 1.0,           
  clearcoatRoughness: 0.1,  
});
var mesh4 = new THREE.Mesh(geometry4, material4);
mesh4.position.set(0, 13, 0);
mesh4.castShadow = true;
FINAL.add(mesh4);

// Tapa
var geometry5 = new RoundedBoxGeometry(2.3, 1.7, 2.3, 1.5, 0.5);
var material5 = new THREE.MeshLambertMaterial({ color: 0x52371F });
var mesh5 = new THREE.Mesh(geometry5, material5);
mesh5.position.set(0, 14.6, 0);
mesh5.castShadow = true;
FINAL.add(mesh5);

// Etiqueta
var geometry6 = new RoundedBoxGeometry(5.1, 6, 5.1, 5.1, 1);
var textura1 = new THREE.TextureLoader().load("./assets/2.jpg");
var material6 = new THREE.MeshLambertMaterial({ map: textura1 });

  textura1.wrapS = THREE.RepeatWrapping;
  textura1.wrapT = THREE.RepeatWrapping;
  textura1.repeat.set(1, 1);

var mesh6 = new THREE.Mesh(geometry6, material6);
mesh6.position.set(0, 7, 0);
mesh6.castShadow = true;
FINAL.add(mesh6);

 
  var BOTELLA = new THREE.Group();
  BOTELLA.add (FINAL);
  BOTELLA.position.set(x, y, z);
  
  return BOTELLA;
  
  }