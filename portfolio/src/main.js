import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { items } from './work.js';
gsap.registerPlugin(ScrollTrigger);

async function init() {
  // 初始化 Three.js 場景
  const canvas = document.querySelector('#canvas');
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };
  //太空人場景
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);
  camera.position.set(0, 3, 0);
  //流星場景
  const scene2 = new THREE.Scene();
  const camera2 = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);
  //作品場景
  const scene3 = new THREE.Scene();
  const camera3 = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);
  camera3.position.set(0, 0.1, 5.8); // 0, 0.1, 5.8
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  const planes = [];
  

  const fontLoader = new FontLoader();
  fontLoader.load('./model/Noto_Sans_TC_SemiBold_Regular.json', (font) => {
    function createSpiralPath(radius, height, turns, points) {
      const pointsArray = [];
      for (let i = 0; i <= points; i++) {
          const angle = (-i / points) * turns * Math.PI * 2;
          const x = radius * Math.cos(angle);
          const y = (-height * (i / points) + height / 2) - 1.5;  // Adjust y to center the spiral path
          const z = radius * Math.sin(angle);
          pointsArray.push(new THREE.Vector3(x, y, z));
      }
      return new THREE.CatmullRomCurve3(pointsArray);
    }
    const radius = 4;
    const height = 60;
    const turns = 10;
    const points = 400;
    const spiralPath = createSpiralPath(radius, height, turns, points);
    const geometry = new THREE.BufferGeometry().setFromPoints(spiralPath.getPoints(points));
    const material = new THREE.LineBasicMaterial({ color: 0xff0000, visible: false }); // 隐藏路径线条
    const line = new THREE.Line(geometry, material);
    scene3.add(line);
    const createTextMesh = (text, font) => {
      const textGeometry = new TextGeometry(text, {
        font: font,
        size: 0.1,
        height: 0,
      });
      const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const textMesh = new THREE.Mesh(textGeometry, textMaterial);
      return textMesh;
    };
    const planeGeometry = new THREE.PlaneGeometry(1.92, 1.08);
    const textureLoader = new THREE.TextureLoader();

    items.forEach((item, index) => {
      const texture = textureLoader.load(`./model/${item.image}.jpg`); // 加载图片
      const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
      const plane = new THREE.Mesh(planeGeometry, material);
      plane.userData = { link: item.link, title: item.title, info: item.info }; // 保存相关数据

      const textMesh = createTextMesh(item.title, font);
      textMesh.position.set(-1.2, 0, 0.1);
      const infoText = new THREE.Mesh(
        new TextGeometry(`- ${item.info} -`, {
        font: font,
        size: 0.05,
        height: 0,
      }), new THREE.MeshBasicMaterial({ color: 0xffffff }));
      infoText.position.set(0.7, -0.54, 0.1);

      plane.add(textMesh);
      plane.add(infoText);
      planes.push(plane);
      scene3.add(plane);
    });

    let progress_p = 0.475;
    let positionsStopped = Array(planes.length).fill(false);
    updatePlanePositions();

    function updatePlanePositions() {
      planes.forEach((plane, index) => {
        if (!positionsStopped[index] || progress_p < 0.475) {
          let planeProgress = (progress_p + index * 0.02) % 1;
          planeProgress = Math.max(0, Math.min(planeProgress, 1));  // 确保值在0到1之间
          const point = spiralPath.getPointAt(planeProgress);
          const tangent = spiralPath.getTangentAt(planeProgress);
          plane.position.copy(point);
          const direction = tangent.clone().normalize();
          const perpendicular = new THREE.Vector3(-direction.z, 0, direction.x);
          plane.lookAt(point.clone().add(perpendicular));

          if (planeProgress === 0) {
            positionsStopped[index] = true;
          } else {
            positionsStopped[index] = false;
          }
        }
      });
    }

    gsap.to({}, {
      scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom+=9000px top",
          scrub: true,
          onUpdate: (self) => {
              progress_p = 0.475 - self.progress;
              updatePlanePositions();
          }
      }
    });
  });
  
  // orbitControls設定
  const orbitControls = new OrbitControls(camera, canvas);
  orbitControls.enabled = false;
  orbitControls.enablePan = false;
  orbitControls.enableDamping = true; // 啟用阻尼效果
  orbitControls.dampingFactor = 0.25; // 阻尼系數
  orbitControls.minDistance = 8;
  orbitControls.maxDistance = 20;
  orbitControls.enableZoom = false;
  orbitControls.minPolarAngle = Math.PI * 0.4;
  orbitControls.maxPolarAngle = Math.PI * 0.4;
  orbitControls.update();
  
  scene.add(camera);

  // 燈光設定
  const ambientLight = new THREE.AmbientLight(0xffffff, 1);
  scene.add(ambientLight);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(-4, 2, 0);
  scene.add(directionalLight);

  // 渲染設定
  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  scene.background = initSceneBg();
  
  // 背景canvas漸層
  function initSceneBg() {
    const canvas = document.createElement('canvas');
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    const ctx = canvas.getContext('2d')
    const gradient = ctx.createRadialGradient(0, 0, window.innerWidth, window.innerWidth, window.innerHeight, 200);
    gradient.addColorStop(0, '#5f5f5f')
    gradient.addColorStop(0.5, '#5f5f5f')
    gradient.addColorStop(1, '#2b2b2b')
    ctx.fillStyle = gradient
    ctx.fillRect(0,0, window.innerWidth,window.innerHeight)
    const canvasTexture = new THREE.CanvasTexture(canvas)
    return canvasTexture
  }

  // 太空人模型設定
  const loader = new GLTFLoader();
  const url = './model/astronaut.gltf';
  const gltf = await loader.loadAsync(url);
  const model = gltf.scene;
  model.position.set(0, -2, 0);
  scene.add(model);
  const modelY = model.position.y;

  //流星設定
  let star = null;
  let stars = [];
  function addSphere(){
    for ( var z= -1000; z < 1000; z+=20 ) {
      var geometry   = new THREE.SphereGeometry(0.5, 32, 32);
      var material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
      var sphere = new THREE.Mesh(geometry, material);
      sphere.position.x = Math.random() * 1000 - 500;
      sphere.position.y = Math.random() * 1000 - 500;
      sphere.position.z = z;
      sphere.scale.x = sphere.scale.y = 2;
      scene2.add(sphere);
      stars.push(sphere); 
    }
  }
  addSphere();
  function animateStars() {
    for(var i=0; i<stars.length; i++) {
      star = stars[i];
      star.position.z += i/10;
      if(star.position.z>1000) star.position.z -= 2000; 
    }
  }
  // 滾動特效
  gsap.to({}, {
    scrollTrigger: {
      trigger: '.box',
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: (self) => {
          const progress = self.progress;
          const angle = progress * Math.PI * 2; // 計算旋轉角度
          const zoomFactor = 1 + (progress * 0.5); // 縮放範圍1 ~ 1.5
          camera.position.set(
              Math.sin(angle) * 5, // 根據角度設定相機位置
              1,
              Math.cos(angle) * 5
          );
          camera.zoom = zoomFactor; // 設定相機缩放
          camera.updateProjectionMatrix(); // 更新相機投影
          camera.lookAt(orbitControls.target); // 確保相機始终看向目標對象
          orbitControls.update();

      }
    }
  });

  // 滑鼠移動事件
  const onMouseMove = (event) => {
    event.preventDefault();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  };

  // 滑鼠點擊事件
  const onMouseClick = (event) => {
    event.preventDefault();
    raycaster.setFromCamera(mouse, camera3);
    const intersects = raycaster.intersectObjects(planes);
    if (intersects.length > 0) {
      const index = planes.indexOf(intersects[0].object);
      if (index !== -1 && items[index].link !== '#') {
        window.open(items[index].link, '_blank');
      }
    }
  };

  window.addEventListener('mousemove', onMouseMove, false);
  window.addEventListener('click', onMouseClick, false);

  let clock = new THREE.Clock();
  // 遊戲循環
  const animate = function () {
    const time = clock.getElapsedTime();
    requestAnimationFrame(animate);

    model.position.y = modelY + (Math.cos(time) * 0.2);
    model.rotation.y = (Math.cos(time) * 0.2);

    animateStars();

    orbitControls.update();
    renderer.autoClear = true;
    renderer.render(scene, camera);

    renderer.autoClear = false;
    renderer.render(scene2, camera2);
    renderer.render(scene3, camera3);

  };

  animate();

  window.addEventListener("resize", () => {
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    camera2.aspect = sizes.width / sizes.height;
    camera2.updateProjectionMatrix();
    camera3.aspect = sizes.width / sizes.height;
    camera3.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });
};
init();
