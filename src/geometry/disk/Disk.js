// libs
import * as THREE from 'three'

// base geometry class
import Base from '../base/Base'

// shaders
import fragmentShader from './shaders/disk.frag'
import vertexShader from './shaders/disk.vert'

export default class Disk extends Base {
  constructor (args) {
    super(args)

    this.normalMap = new THREE.TextureLoader().load('assets/images/textures/normalMap.jpg')
    // this.normalMap.wrapS = THREE.RepeatWrapping
    // this.normalMap.wrapT = THREE.RepeatWrapping
    // this.normalMap.repeat.set(4, 4)

    this.cubeMap = new THREE.CubeTextureLoader()
      .setPath('assets/images/textures/cubemaps/playa2/')
      .load([
        '0004.png',
        '0002.png',
        '0006.png',
        '0005.png',
        '0001.png',
        '0003.png'
      ])

    this.material = new DiskMaterial({
      flatShading: true,
      color: 0xffffff,
      emissive: 0x000000,
      metalness: 0.4,
      roughness: 0.0,
      opacity: 0.6,
      transparent: true,
      side: THREE.DoubleSide,
      envMap: this.cubeMap,
      // bumpMap: this.bumpMap,
      // bumpScale: 0.2
      // roughnessMap: this.roughnessMap
      // metalnessMap: this.roughnessMap
      normalMap: this.normalMap,
      normalScale: new THREE.Vector2(0.0, 0.0),

      fog: false
    })
  }

  async init () {
    // set up base geometry
    this.geometry = new THREE.PlaneBufferGeometry(10000000, 10000000, 1, 1)
    this.geometry.rotateX(Math.PI / 2)

    this.mesh = new THREE.Mesh(this.geometry, this.material)
    this.mesh.frustumCulled = false

    this.mesh.rotateY(Math.PI)
    this.mesh.translateY(-10)

    // this.mesh.receiveShadow = true

    return this.mesh
  }

  async updateGeometry () {

  }

  update (args) {
    this.material.uniforms.uTime.value = args.time * 0.001
    this.material.uniforms.uCamPos.value = args.camPos
  }
}

class DiskMaterial extends THREE.MeshStandardMaterial {
  constructor (cfg) {
    super(cfg)
    this.type = 'ShaderMaterial'

    this.uniforms = THREE.ShaderLib.standard.uniforms

    this.uniforms.uTime = {
      type: 'f',
      value: 0.0
    }

    this.uniforms.uCamPos = {
      type: 'v3',
      value: new THREE.Vector3(0, 0, 0)
    }

    this.vertexShader = vertexShader
    this.fragmentShader = fragmentShader
  }
}