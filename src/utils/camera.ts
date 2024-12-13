import * as THREE from 'three';

export const createCamera = (width: number, height: number): THREE.PerspectiveCamera => {
  const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  // Position camera to look down at the X-Y plane
  camera.position.set(0, 0, -3);
  camera.position.x = -camera.position.x 
  camera.lookAt(0, 0, 0);
  return camera;
};