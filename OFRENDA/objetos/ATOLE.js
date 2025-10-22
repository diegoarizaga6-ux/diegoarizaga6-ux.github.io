import * as THREE from "../js/three.module.js";
import { RoundedBoxGeometry } from "../js/RoundedBoxGeometry.js";

export default function E01 ({x, y, z}){
//Atole
var geometry01 = new RoundedBoxGeometry(5,5,5,8,200);
    var material01 = new THREE.MeshLambertMaterial({
        color: 0xA64B21
    });
    var mesh01 = new THREE.Mesh(geometry01, material01);
    //scene.add(mesh01);
    mesh01.position.set(4,4,4);
    mesh01.rotation.set(0,0,0);
    mesh01.castShadow = true;

// boca
var geometry02 = new THREE.CylinderGeometry(2,1,3.6,30);
    var material02 = new THREE.MeshLambertMaterial({
        color: 0x5E2B14
    });
    var mesh02 = new THREE.Mesh(geometry02, material02);
    //scene.add(mesh02);
    mesh02.position.set(4,5,4);
    mesh02.rotation.set(0,0,0);
    mesh02.castShadow = true;

//atole

var geometry03 = new THREE.CylinderGeometry(1.6,.6,3.6,30);
    var material03 = new THREE.MeshLambertMaterial({
        color: 0xD6AC67
    });
    var mesh03 = new THREE.Mesh(geometry03, material03);
    //scene.add(mesh03);
    mesh03.position.set(4,5.1,4);
    mesh03.rotation.set(0,0,0);
    mesh03.castShadow = true;

// Oreja arriba

var geometry04 = new RoundedBoxGeometry(1,3.7,1,8,5);
    var material04 = new THREE.MeshLambertMaterial({
        color: 0x5E2B14
    });
    var mesh04 = new THREE.Mesh(geometry04, material04);
    //scene.add(mesh04);
    mesh04.position.set(4,5,6);
    mesh04.rotation.set(11,0,0);
    mesh04.castShadow = true;
    
//oreja media

var geometry05 = new RoundedBoxGeometry(1,2.7,1,8,5);
    var material05 = new THREE.MeshLambertMaterial({
        color: 0x5E2B14
    });
    var mesh05 = new THREE.Mesh(geometry05, material05);
    //scene.add(mesh05);
    mesh05.position.set(4,4,7.4);
    mesh05.rotation.set(0,0,0);
    mesh05.castShadow = true;

// oreja baja

var geometry06 = new RoundedBoxGeometry(1,3.7,1,8,5);
    var material06 = new THREE.MeshLambertMaterial({
        color: 0x5E2B14
    });
    var mesh06 = new THREE.Mesh(geometry06, material06);
    //scene.add(mesh06);
    mesh06.position.set(4,3,6);
    mesh06.rotation.set(11,0,0);
    mesh06.castShadow = true;

     var ATOLE = new THREE.Group();
  ATOLE.add (mesh01 ,mesh02 ,mesh03 ,mesh04 ,mesh05 ,mesh06);
  ATOLE.position.set(x, y, z);
  
  return ATOLE;
  
  }