/* eslint-disable */
import React from 'react';
import './kas.styl'
var model = require('../../assets/models/kas.obj');
var container, stats, controls;
var camera, scene, renderer, light, model;

class Kas extends React.Component {

  render () {
    return (
      <div id="kas"></div>
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
      // scene.background = new THREE.Color(0x03C03C);
      scene.fog = new THREE.Fog(0xa0a0a0, 200, 1000);
      // 透视相机：视场、长宽比、近面、远面
      camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.set(600, 15, -200);
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
      grid.position.set(0, -190, 0);
      scene.add(grid);
      // 加载模型
      // var loader = new THREE.FBXLoader();
      var loader = new THREE.OBJLoader();
      loader.load(model, function (object) {
        object.traverse(function (child) {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });
        object.rotation.y = Math.PI / 2;
        object.position.set(0, -190, 0);
        console.log('position', object.position);
        object.scale.set(0.32, 0.32, 0.32);
        model = object;
        scene.add(object);
      });
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearAlpha(0);
      renderer.shadowMap.enabled = true;
      container.appendChild(renderer.domElement);
      // controls = new THREE.OrbitControls(camera, renderer.domElement);
      // controls.target.set(0, 0, 0);
      // controls.update();
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
      scene.rotation.y -= 0.005;
      renderer.render(scene, camera);
      stats.update();
    }
  }
}

export default Kas;