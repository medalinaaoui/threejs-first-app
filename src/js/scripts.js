import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const scene = new THREE.Scene();
const geometry = new THREE.BufferGeometry();
const vertices = new Float32Array([
  -1.0,
  -1.0,
  1.0, // v0
  1.0,
  -1.0,
  1.0, // v1
  1.0,
  1.0,
  1.0, // v2
  1.0,
  1.0,
  1.0, // v3
  -1.0,
  1.0,
  1.0, // v4
  -1.0,
  -1.0,
  1.0, // v5
]);

geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
const axisHelpers = new THREE.AxesHelper(5);
const gridHelpers = new THREE.GridHelper(4);

const cubeGeometry = new THREE.BoxGeometry(2, 2, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight
);
camera.position.set(0, 2, 5);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const orbit = new OrbitControls(camera, renderer.domElement);
orbit.update();

scene.add(camera, mesh, axisHelpers, gridHelpers);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
