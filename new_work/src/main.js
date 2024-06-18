import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { items } from './work.js';
gsap.registerPlugin(ScrollTrigger);

let progress_p = 0.475; // 设置初始值
let plane0InitialPosition = new THREE.Vector3(-1.1759085194360944e-14, 0, 4);
let stopMoving = false; // 添加一个标记变量来标记是否停止移动
const positionThreshold = 0.2;  // 调整位置比较的阈值
let hasReachedInitialPosition = false; // 新增辅助变量
let scrollDirection = 0; // 用于跟踪滚动方向，-1 表示向上滚动，1 表示向下滚动


async function init() {
  window.scrollTo(0, 0);
  // 初始化 Three.js 场景
  const canvas = document.querySelector('#canvas');
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };
  //太空人场景
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);
  camera.position.set(0, 3, 0);
  //流星场景
  const scene2 = new THREE.Scene();
  const camera2 = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);
  //作品场景
  const scene3 = new THREE.Scene();
  const camera3 = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);
  camera3.position.set(0, -0.1, 5.8); // 0, 0.1, 5.8
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
    const points = 1000; // 增加点的数量
    const spiralPath = createSpiralPath(radius, height, turns, points);
    const geometry = new THREE.BufferGeometry().setFromPoints(spiralPath.getPoints(points));
    const material = new THREE.LineBasicMaterial({ color: 0xff0000, visible: true }); // 隐藏路径线条
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

      if (index === 0) {
        plane.position.copy(plane0InitialPosition); // 手动设置 plane0 的初始位置
      }
    });

    updatePlanePositions();

    function updatePlanePositions() {
      if (stopMoving && scrollDirection === 1) return; // 如果标记为停止移动且滚动方向向下，则直接返回，不再更新位置
    
      const targetPlaneIndex = 26; // 第26個plane的索引
      const totalPoints = 400; // 确保螺旋路径上有足够的点
      const targetPlaneProgress = (progress_p + targetPlaneIndex * 0.02) % 1;
    
      let finalPoint, finalTangent;
      try {
        finalPoint = spiralPath.getPointAt(targetPlaneProgress);
        finalTangent = spiralPath.getTangentAt(targetPlaneProgress);
        if (!finalPoint || !finalTangent) throw new Error('Invalid final point or tangent');
      } catch (error) {
        console.error(`Error getting final point or tangent at progress ${targetPlaneProgress}`, error);
        finalPoint = new THREE.Vector3(0, 0, 0); // 使用默认值
        finalTangent = new THREE.Vector3(0, 0, 1); // 使用默认值
      }
    
      const direction = finalTangent.clone().normalize();
      const perpendicular = new THREE.Vector3(-direction.z, 0, direction.x);
    
      planes.forEach((plane, index) => {
        let planeProgress;
        if (index <= targetPlaneIndex) {
          planeProgress = (progress_p + index * 0.02) % 1;
        } else {
          planeProgress = (progress_p + targetPlaneIndex * 0.02) % 1 + (index - targetPlaneIndex) * 0.02;
        }
    
        // 避免 planeProgress 恰好为 1
        if (planeProgress >= 1) {
          planeProgress = 0.999999;
        }
    
        // 确保 planeProgress 在 0 到 1 之间
        planeProgress = Math.max(0, Math.min(planeProgress, 0.999999));
    
        // 获取路径上的点和切线
        let point, tangent;
        try {
          if (planeProgress < 0 || planeProgress >= 1) {
            throw new Error(`Invalid planeProgress value: ${planeProgress}`);
          }
          point = spiralPath.getPointAt(planeProgress);
          tangent = spiralPath.getTangentAt(planeProgress);
          if (!point || !tangent) throw new Error('Invalid point or tangent');
        } catch (error) {
          console.error(`Error getting point or tangent for plane ${index} at progress ${planeProgress}`, error);
          point = new THREE.Vector3(0, 0, 0); // 使用默认值
          tangent = new THREE.Vector3(0, 0, 1); // 使用默认值
        }
    
        if (point && tangent) {
          // 更新 plane 的位置和朝向
          plane.position.copy(point);
          const dir = tangent.clone().normalize();
          const perp = new THREE.Vector3(-dir.z, 0, dir.x);
          plane.lookAt(point.clone().add(perp));
    
          // 检查最后一个 plane 是否到达 plane0 的初始位置
          if (index === planes.length - 1) {
            console.log(`Last plane position: ${plane.position.x}, ${plane.position.y}, ${plane.position.z}`);
            if (plane.position.distanceTo(plane0InitialPosition) < positionThreshold) {
              if (scrollDirection === 1) { // 只有在向下滚动时才设置停止标记
                stopMoving = true; // 设置停止标记
                hasReachedInitialPosition = true; // 设置辅助变量
                console.log('Last plane has reached plane0 initial position. Stopping movement.');
              }
            } else {
              hasReachedInitialPosition = false; // 重置辅助变量
              if (scrollDirection === -1) {
                stopMoving = false; // 允许在向上滚动时继续移动
              }
            }
          }
        } else {
          console.error(`Invalid point or tangent at plane ${index}, progress ${planeProgress}`);
        }
      });
    }
    
    gsap.to({}, {
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        ease: "power3.out", // 添加缓动效果
        onUpdate: (self) => {
          const previousProgress = progress_p;
          progress_p = 0.475 - self.progress; // 更新 progress_p 的值
          scrollDirection = progress_p > previousProgress ? -1 : 1; // 更新滚动方向
          try {
            updatePlanePositions(); // 强制进行位置更新
            if (!hasReachedInitialPosition) {
              // 如果没有达到目标位置，强制进行位置比较
              requestAnimationFrame(updatePlanePositions);
            }
          } catch (error) {
            console.error('Error updating plane positions:', error);
          }
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

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    window.scrollTo(0, 0);
    progress_p = 0.475; // 确保在页面加载完成后设置 progress_p 的初始值
    init(); // 调用初始化函数
  }, 100); // 使用100毫秒的延遲
});
