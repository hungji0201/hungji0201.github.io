import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
  const numPlanes = 3; // 平面數量
  const radius = 5; // 圓形路徑的半徑
  const angleIncrement = (2 * Math.PI) / numPlanes; // 每個作品間的角度差
  const heightIncrement = 1.2; // 每個作品的高度差
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  const planes = [];
  const links = [
    'https://gotoo.co/demo/acer/ana-knuwan/',
    'https://gotoo.co/demo/acer/web/homyn/member.html',
    'https://gotoo.co/demo/acer/web/cana/'
  ];
  const titles = ['永生花', '好命命理會員系統', 'cana'];
  const fontLoader = new FontLoader();
  fontLoader.load('./model/Noto_Sans_TC_SemiBold_Regular.json', (font) => {
    const createPlane = (texture) => {
      const geometry = new THREE.BufferGeometry();
      // 頂點位置
      const vertices = new Float32Array([
        -1.6, -0.9, 0.0,  // 左下角
        1.6, -0.9, 0.0,   // 右下角
        1.6,  0.9, 0.0,   // 右上角
        -1.6,  0.9, 0.0   // 左上角
      ]);
      // UV座標
      const uvs = new Float32Array([
        0.0, 0.0,  // 左下角
        1.0, 0.0,  // 右下角
        1.0, 1.0,  // 右上角
        0.0, 1.0   // 左上角
      ]);
      // 索引
      const indices = new Uint16Array([
        0, 1, 2,  // 第一個三角形
        0, 2, 3   // 第二個三角形
      ]);
      geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
      geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
      geometry.setIndex(new THREE.BufferAttribute(indices, 1));
      const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
      const plane = new THREE.Mesh(geometry, material);
      return plane;
    };

    const createTextMesh = (text, font) => {
      const textGeometry = new TextGeometry(text, {
        font: font,
        size: 0.15,
        height: 0,
      });
      const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const textMesh = new THREE.Mesh(textGeometry, textMaterial);
      return textMesh;
    };

    const textureLoader = new THREE.TextureLoader();
    for (let i = 0; i < numPlanes; i++) {
      const angle = -i * angleIncrement;
      const x = radius * Math.cos(angle);
      const y = -i * heightIncrement; // 沿着 -y 往下排列
      const z = radius * Math.sin(angle);

      textureLoader.load(`./model/works-${i}.jpg`, (texture) => {
        const plane = createPlane(texture);
        plane.position.set(x, y, z);
        plane.lookAt(new THREE.Vector3(0, y, 0)); // 確保平面朝圓心
        plane.rotateY(Math.PI); // 調整平面的方向，正面朝攝影機

        const textMesh = createTextMesh(titles[i], font);
        textMesh.position.set(-2, 0, 0.1);

        plane.add(textMesh);
        scene3.add(plane);
        planes[i] = plane; // 将平面放置在正确的索引处
      });
    }
  });
  // 設置相機位置
  camera3.position.z = 8;

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
      var geometry   = new THREE.SphereGeometry(0.5, 32, 32)
      var material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
      var sphere = new THREE.Mesh(geometry, material)
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
      console.log(index);
      if (index !== -1) {
        window.open(links[index], '_blank');
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

    scene3.rotation.y -= 0.005; // 選轉整個 group（可選，用於可視化效果）
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