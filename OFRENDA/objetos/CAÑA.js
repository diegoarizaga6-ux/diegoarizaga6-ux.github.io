import * as THREE from "../js/three.module.js";

export default function E01({x, y, z}){

    //CAÑA
var geometry01 = new THREE.CylinderGeometry(2, 2, 12, 16, 1);
var material01 = new THREE.MeshLambertMaterial({
    color: 0xC6F032
});
var mesh01 = new THREE.Mesh(geometry01, material01);
mesh01.position.set(0, 13.2, 0);
//scene.add(mesh01);
mesh01.castShadow = true;

var CAÑA= new THREE.Group();
CAÑA.add(mesh01);
CAÑA.position.set (x, y, z);

return CAÑA;
    
}