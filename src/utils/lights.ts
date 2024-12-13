import * as THREE from 'three';


export interface SceneLights {
  // pointLight: THREE.PointLight;
  ambientLight: THREE.AmbientLight;
  directionalLight: THREE.DirectionalLight;
}

export const createLights = (): SceneLights => {
  // Create point light above the scene
  // const pointLight = new THREE.PointLight(0xc99bae,5, 100);
  // pointLight.position.set(0, 0, 3); // Start position above the model
      
  const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
  directionalLight.position.set(-6,6,2);
  
  // Add ambient light for better overall illumination
  const ambientLight = new THREE.AmbientLight(0xffffff, 3.17);
  
  return { directionalLight: directionalLight, ambientLight: ambientLight };
};

export const updateLightPosition = (
  light: THREE.DirectionalLight,
  mouseX: number,
  mouseY: number,
  height: number = 3
) => {
  console.log(light, mouseX, mouseY);
  
  // Move light on Y-Z plane
  light.position.y = height + mouseY * 6; // Y position follows mouse Y
  light.position.x = height + mouseX * 2; // Z position follows mouse X
  light.position.z = 2; // Keep X position fixed


  
};