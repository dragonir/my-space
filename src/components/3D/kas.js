/* eslint-disable */
import React from 'react';
import './kas.styl'
var container, stats, controls;
var camera, scene, renderer, light;

class Kas extends React.Component {

  render () {
    return (
      <div id="kas"><i className="logo"></i><i className="dragonir"></i></div>
    )
  }
  componentDidMount () {
    this.initThree();
  }
  // 初始化
  initThree () {
    init();
    animate();
    // 场景
    function init () {
      container = document.getElementById('kas');
      scene = new THREE.Scene();
      // scene.background = new THREE.Color(0x000000);
      scene.fog = new THREE.Fog(0xa0a0a0, 200, 1000);
      // 透视相机：视场、长宽比、近面、远面
      camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.set(600, 20, -200);
      camera.lookAt(new THREE.Vector3(0, 0, 0));
      // 半球光源：创建室外效果更加自然的光源
      light = new THREE.HemisphereLight(0xffffff, 0x444444);
      light.position.set(0, 20, 0);
      scene.add(light);
      light = new THREE.DirectionalLight(0xffffff);
      light.position.set(0, 20, 10);
      light.castShadow = true;
      scene.add(light);
      // 环境光
      var ambiColor = '#0C0C0C';
      var ambientLight = new THREE.AmbientLight(ambiColor);
      scene.add(ambientLight);
      // 网格
      var grid = new THREE.GridHelper(1000, 100, 0x000000, 0x000000);
      grid.material.opacity = 0.1;
      grid.material.transparent = true;
      grid.position.set(0, -240, 0);
      scene.add(grid);

      // 加载obj或fbx模型
      // var loader = new THREE.FBXLoader();
      // var loader = new THREE.OBJLoader();
      // loader.load(model, function (object) {
      //   object.traverse(function (child) {
      //     if (child.isMesh) {
      //       child.castShadow = true;
      //       child.receiveShadow = true;
      //     }
      //   });
      //   object.rotation.y = Math.PI / 2;
      //   object.position.set(0, -200, 0);
      //   console.log('position', object.position);
      //   object.scale.set(0.32, 0.32, 0.32);
      //   model = object;
      //   scene.add(object);
      // });

      // 加载gltf模型
      var loader = new THREE.GLTFLoader();
      loader.load(require('../../assets/models/kas.gltf'), function (object) {
        object.scene.traverse(function (child) {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });
        object.scene.rotation.y = Math.PI / 2;
        object.scene.position.set(0, -240, 0);
        object.scene.scale.set(0.33, 0.33, 0.33);
        scene.add(object.scene);
      });
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearAlpha(0);
      renderer.shadowMap.enabled = true;
      container.appendChild(renderer.domElement);
      // 控制器
      controls = new THREE.OrbitControls(camera, renderer.domElement);
      // 禁用缩放（因为和fullpage插件的鼠标滚轮事件冲突）
      controls.enableZoom = false;
      controls.target.set(0, 0, 0);
      controls.update();
      window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }, false);
      // stats：初始化性能插件
      stats = new Stats();
      container.appendChild(stats.dom);
    }
    function animate () {
      var clock = new THREE.Clock()
      requestAnimationFrame(animate);
      var delta = clock.getDelta();
      scene.rotation.y -= 0.015;
      renderer.render(scene, camera);
      stats.update();
    }
    // 增加点击事件
    //声明raycaster和mouse变量
    var raycaster = new THREE.Raycaster();
    var mouse = new THREE.Vector2();
    function onMouseClick(event) {
      // 通过鼠标点击的位置计算出raycaster所需要的点的位置，以屏幕中心为原点，值的范围为-1到1.
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
      // 通过鼠标点的位置和当前相机的矩阵计算出raycaster
      raycaster.setFromCamera(mouse, camera);
      // 获取raycaster直线和所有模型相交的数组集合
      console.log(scene.children)
      var intersects = raycaster.intersectObjects(scene.children);
      console.log(intersects);
    }
    window.addEventListener('click', onMouseClick, false);
  }
}

export default Kas;