import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeD = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    // Colors
    const black = 0x000000;
    const cyan = 0x00ffff;
    const purple = 0x9d00ff;
    const blue = 0x0066ff;

    // SCENE
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(black);
    scene.fog = new THREE.FogExp2(black, 0.01);

    // LIGHTING
    const ambientLight = new THREE.AmbientLight(0x222222);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(cyan, 1.5);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(purple, 1.5);
    pointLight2.position.set(-10, -10, 5);
    scene.add(pointLight2);

    // CAMERA
    const camera = new THREE.PerspectiveCamera(60, sizes.width / sizes.height, 0.1, 1000);
    camera.position.set(0, 0, 30);
    scene.add(camera);

    // RENDERER
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // NETWORK STRUCTURE (initially invisible)
    const nodes = [];
    const connections = [];
    const nodeCount = 150;

    // Create network nodes (invisible initially)
    for (let i = 0; i < nodeCount; i++) {
      const x = (Math.random() - 0.5) * 60;
      const y = (Math.random() - 0.5) * 60;
      const z = (Math.random() - 0.5) * 40;

      const position = new THREE.Vector3(x, y, z);
      const originalPosition = new THREE.Vector3(x, y, z);

      nodes.push({ 
        position: position,
        originalPosition: originalPosition,
        velocity: new THREE.Vector3(0, 0, 0)
      });
    }

    // Create connections between nearby nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = nodes[i].position.distanceTo(nodes[j].position);
        
        if (distance < 18) {
          const points = [];
          points.push(nodes[i].position);
          points.push(nodes[j].position);

          const geometry = new THREE.BufferGeometry().setFromPoints(points);
          const material = new THREE.LineBasicMaterial({
            color: cyan,
            transparent: true,
            opacity: 0,
          });
          const line = new THREE.Line(geometry, material);
          scene.add(line);
          
          connections.push({ 
            line, 
            geometry,
            node1: nodes[i], 
            node2: nodes[j]
          });
        }
      }
    }

    // Floating particles in background
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1500;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 100;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: cyan,
      transparent: true,
      opacity: 0.2,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // MOUSE INTERACTION
    const mouse = new THREE.Vector2();
    const mouseWorld = new THREE.Vector3();

    function onMouseMove(event) {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }
    window.addEventListener("mousemove", onMouseMove, false);

    function onTouchMove(event) {
      mouse.x = (event.changedTouches[0].clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.changedTouches[0].clientY / window.innerHeight) * 2 + 1;
    }
    window.addEventListener("touchmove", onTouchMove, false);

    // ANIMATION
    const animate = () => {
      const time = performance.now() * 0.001;

      // Convert mouse position to world coordinates
      mouseWorld.set(
        mouse.x * 15,
        mouse.y * 15,
        0
      );

      // Apply attraction force to nodes near mouse
      nodes.forEach((node) => {
        const distanceToMouse = node.position.distanceTo(mouseWorld);
        
        if (distanceToMouse < 25) {
          // Attraction force
          const force = new THREE.Vector3()
            .subVectors(mouseWorld, node.position)
            .normalize()
            .multiplyScalar(0.4);
          
          node.velocity.add(force);
        }

        // Return to original position
        const returnForce = new THREE.Vector3()
          .subVectors(node.originalPosition, node.position)
          .multiplyScalar(0.05);
        
        node.velocity.add(returnForce);

        // Apply damping
        node.velocity.multiplyScalar(0.92);

        // Update position
        node.position.add(node.velocity);
      });

      // Update connections and make them visible near mouse
      connections.forEach(conn => {
        const midPoint = new THREE.Vector3()
          .addVectors(conn.node1.position, conn.node2.position)
          .multiplyScalar(0.5);
        
        const distanceToMouse = midPoint.distanceTo(mouseWorld);
        
        // Make network visible when mouse is near
        if (distanceToMouse < 25) {
          const opacity = Math.max(0, 1 - distanceToMouse / 25);
          conn.line.material.opacity = opacity * 0.7;
          
          // Change color based on distance
          if (distanceToMouse < 12) {
            conn.line.material.color.setHex(purple);
          } else {
            conn.line.material.color.setHex(cyan);
          }
        } else {
          conn.line.material.opacity = 0;
        }

        // Update line geometry
        const points = [conn.node1.position, conn.node2.position];
        conn.geometry.setFromPoints(points);
      });

      // Rotate background particles
      particlesMesh.rotation.y += 0.0003;
      particlesMesh.rotation.x += 0.0002;

      // Gentle camera movement
      camera.position.x += (mouse.x * 2 - camera.position.x) * 0.03;
      camera.position.y += (mouse.y * 2 - camera.position.y) * 0.03;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

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
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("resize", onWindowResize);
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="webgl" style={{ width: '100%', height: '100%', display: 'block' }} />;
};

export default ThreeD;