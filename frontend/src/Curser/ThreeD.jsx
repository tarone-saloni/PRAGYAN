
import React, { useEffect, useRef } from "react";
import * as THREE from "https://cdn.skypack.dev/three@0.148.0";

const ThreeD = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Mobile detection for performance optimization
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
    
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    const white = 0xffffff;
    const black = 0x000000;
    const red = 0xff0000;
    const pink = 0xff7dcd;
    const lightRed = 0xff9797;

    // SCENE
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(black);

    // LIGHT SCENE1
    let lightTopColor = new THREE.Color(red);
    let lightBackColor = new THREE.Color(red);
    let rectLightColor = new THREE.Color(red);

    const lightTop = new THREE.PointLight(lightTopColor, 10);
    lightTop.position.set(5, 5, 2);
    lightTop.castShadow = true;
    lightTop.shadow.mapSize.width = lightTop.shadow.mapSize.height = 10000;
    lightTop.penumbra = 0.5;

    const lightBack = new THREE.SpotLight(lightBackColor, 2);
    lightBack.position.set(0, -3, -1);

    const rectLight = new THREE.RectAreaLight(rectLightColor, 20, 2, 2);
    rectLight.position.set(1, 1, 1);
    rectLight.lookAt(0, 0, 0);

    scene.add(lightTop, lightBack, rectLight);

    // LIGHT SCENE2
    const targetScene2 = new THREE.Object3D();
    targetScene2.position.set(0, -10, 0);
    scene.add(targetScene2);

    const lightRight = new THREE.SpotLight(pink, 1);
    lightRight.position.set(8, 0, 0);
    lightRight.target = targetScene2;

    const lightLeft = new THREE.SpotLight(pink, 1);
    lightLeft.position.set(-8, 0, 0);
    lightLeft.target = targetScene2;

    const lightMidSpot = new THREE.SpotLight(lightRed, 2);
    lightMidSpot.position.set(0, -5, 20);
    lightMidSpot.target = targetScene2;

    const lightMidPoint = new THREE.PointLight(lightRed, 0.05);
    lightMidPoint.position.set(0, 0, -23);

    scene.add(lightRight, lightLeft, lightMidSpot, lightMidPoint);

    // CAMERA
    const updateCamPos = new THREE.Vector3(-0.3, 0, 5);
    const camera = new THREE.PerspectiveCamera(25, sizes.width / sizes.height, 1, 500);
    camera.position.set(-0.3, 0, 5);
    scene.add(camera);

    // RENDERER
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: !isMobile, // Disable antialiasing on mobile for performance
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 2));
    renderer.setClearAlpha(0);
    renderer.shadowMap.enabled = !isMobile; // Disable shadows on mobile
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.shadowMap.needsUpdate = true;

    // SCENE1 OBJECTS
    function spaceRandom(num = 1) {
      return -Math.random() * num + Math.random() * num;
    }

    // Cubes
    const cubesGroup = new THREE.Object3D();
    scene.add(cubesGroup);
    function generateCube() {
      const geometry = new THREE.IcosahedronGeometry(1);
      const material = new THREE.MeshStandardMaterial({
        color: 0x111111,
        roughness: 0.4,
        metalness: 0.5,
      });
      const cube = new THREE.Mesh(geometry, material);
      cube.speedRotation = Math.random() * 0.1;
      cube.positionX = spaceRandom();
      cube.positionY = spaceRandom();
      cube.positionZ = spaceRandom();
      cube.castShadow = true;
      cube.receiveShadow = true;
      const newScaleValue = spaceRandom(0.3);
      cube.scale.set(newScaleValue, newScaleValue, newScaleValue);
      cube.rotation.x = spaceRandom((180 * Math.PI) / 180);
      cube.rotation.y = spaceRandom((180 * Math.PI) / 180);
      cube.rotation.z = spaceRandom((180 * Math.PI) / 180);
      cube.position.set(cube.positionX, cube.positionY, cube.positionZ);
      cubesGroup.add(cube);
    }

    // Particles
    const particlesGroup = new THREE.Object3D();
    scene.add(particlesGroup);
    function generateParticle() {
      const geometry = new THREE.CircleGeometry(0.1, 5);
      const material = new THREE.MeshPhysicalMaterial({
        color: white,
        side: THREE.DoubleSide,
      });
      const particle = new THREE.Mesh(geometry, material);
      particle.position.set(spaceRandom(2), spaceRandom(2), spaceRandom(2));
      particle.rotation.set(spaceRandom(), spaceRandom(), spaceRandom());
      const scale = 0.001 + Math.abs(spaceRandom(0.03));
      particle.scale.set(scale, scale, scale);
      particle.speedValue = spaceRandom(1);
      particlesGroup.add(particle);
    }

    // MOUSE EVENT
    const mouse = new THREE.Vector2();
    function onMouseMove(event) {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = (event.clientY / window.innerHeight) * 2 + 1;
    }
    window.addEventListener("mousemove", onMouseMove, false);

    // TOUCH EVENT FOR MOBILE
    function onTouchMove(event) {
      mouse.x = (event.changedTouches[0].clientX / window.innerWidth) * 2 - 1;
      mouse.y = (event.changedTouches[0].clientY / window.innerHeight) * 2 + 1;
    }
    window.addEventListener("touchmove", onTouchMove, false);

    // ANIMATION
    const animate = () => {
      particlesGroup.rotation.y += 0.004;

      const time = performance.now() * 0.0003;
      particlesGroup.children.forEach((each) => {
        each.rotation.x += each.speedValue / 10;
        each.rotation.y += each.speedValue / 10;
        each.rotation.z += each.speedValue / 10;
      });

      cubesGroup.children.forEach((each) => {
        each.rotation.x += 0.008;
        each.rotation.y += 0.005;
        each.rotation.z += 0.003;
        each.position.x = Math.sin(time * each.positionZ) * each.positionY;
        each.position.y = Math.cos(time * each.positionX) * each.positionZ;
        each.position.z = Math.sin(time * each.positionY) * each.positionX;
      });

      cubesGroup.rotation.y -= (mouse.x * 4 + cubesGroup.rotation.y) * 0.1;
      cubesGroup.rotation.x -= (-mouse.y * 4 + cubesGroup.rotation.x) * 0.1;

      camera.position.lerp(updateCamPos, 0.05);

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    window.scrollTo({ top: 0, behavior: "smooth" });
    
    // Adjust counts based on device
    const cubeCount = isMobile ? 10 : isTablet ? 20 : 30;
    const particleCount = isMobile ? 50 : isTablet ? 100 : 200;
    
    Array(cubeCount).fill().forEach(generateCube);
    Array(particleCount).fill().forEach(generateParticle);
    animate();

    // Handle window resize
    const onWindowResize = () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
    };

    window.addEventListener("resize", onWindowResize);

    return () => {
      // Cleanup on component unmount
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="webgl" style={{ width: '100%', height: '100%' }} />;
};

export default ThreeD;