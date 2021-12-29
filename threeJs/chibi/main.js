

var box = document.getElementById('three-box');
var box_W = box.offsetWidth;
var box_H = box.offsetHeight;

var loadingText = ''
document.getElementById('loadingText').innerText = loadingText;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, box_W / box_H, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('bg'),
    alpha: true
})

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(box_W, box_H);
camera.position.set(0, 0, 2);
camera.rotation.set(0, 0, 0);

renderer.render(scene, camera);
const controls = new THREE.OrbitControls(camera, renderer.domElement)

// Instantiate a loader
const loader = new THREE.GLTFLoader();
var model;
// Load a glTF resource
loader.load(
    // resource URL
    './chibi/scene.gltf',
    // called when the resource is loaded
    function (gltf) {

        // clearInterval(loadingTimer);

        model = gltf.scene;

        scene.add(model);
        document.getElementById('loading').style.display = 'none'

        //chibi
        model.rotation.y = -3.14 / 2;
        model.position.y = -0.6

        gltf.animations; // Array<THREE.AnimationClip>
        gltf.scene; // THREE.Group
        gltf.scenes; // Array<THREE.Group>
        gltf.cameras; // Array<THREE.Camera>
        gltf.asset; // Object

    },
    function (xhr) {
        console.log(xhr);
        console.log(xhr.loaded,xhr.total);
        console.log(loadingText + ((xhr.loaded / xhr.total * 100).toFixed(2)) + '%');
        document.getElementById('loadingBox').style.width = ((xhr.loaded / xhr.total * 100).toFixed(2)) + '%';
        document.getElementById('loadingText').innerText = loadingText + ((xhr.loaded / xhr.total * 100).toFixed(2)) + '%';
    },
    function (error) {
        console.log('An error happened');

    }
);

//光源
const topDirectionalLight = new THREE.DirectionalLight(0xffffff);
topDirectionalLight.position.set(0, 1, 1.5);
topDirectionalLight.intensity = 3;
scene.add(topDirectionalLight);

const backDirectionalLight = new THREE.DirectionalLight(0xffffff);
backDirectionalLight.position.set(0, 1, -1.5);
backDirectionalLight.intensity = 2;
scene.add(backDirectionalLight);

const leftDirectionalLight = new THREE.DirectionalLight(0xffffff);
leftDirectionalLight.position.set(-3, 0, 0);
leftDirectionalLight.intensity = 1;
scene.add(leftDirectionalLight);

const rightDirectionalLight = new THREE.DirectionalLight(0xffffff);
rightDirectionalLight.position.set(3, 0, 0);
rightDirectionalLight.intensity = 1;
scene.add(rightDirectionalLight);


const leftColorDirectionaLight = new THREE.DirectionalLight(0x0066ff, 1);
leftColorDirectionaLight.position.set(-1.5, 0, 1.5);
leftColorDirectionaLight.intensity = 2;
scene.add(leftColorDirectionaLight);

const rightColorDirectionaLight = new THREE.DirectionalLight(0xff00ff, 1);
rightColorDirectionaLight.position.set(1.5, 0, 1.5);
rightColorDirectionaLight.intensity = 2;
scene.add(rightColorDirectionaLight);

// const topLightHelper = new THREE.DirectionalLightHelper(topDirectionalLight,1);
// scene.add(topLightHelper)
// const backLightHelper = new THREE.DirectionalLightHelper(backDirectionalLight,1);
// scene.add(backLightHelper)
// const leftLightHelper = new THREE.DirectionalLightHelper(leftDirectionalLight,1);
// scene.add(leftLightHelper)
// const rightLightHelper = new THREE.DirectionalLightHelper(rightDirectionalLight,1);
// scene.add(rightLightHelper)
// const leftColorLightHelper = new THREE.DirectionalLightHelper(leftColorDirectionaLight,1);
// scene.add(leftColorLightHelper)
// const rightColorLightHelper = new THREE.DirectionalLightHelper(rightColorDirectionaLight,1);
// scene.add(rightColorLightHelper)


let mouseX = 0;
let mouseY = 0;

let targetX = 0;
let targetY = 0;

const windowX = window.innerWidth / 2;
const windowY = window.innerHeight / 2;

document.addEventListener('mousemove',(event) => {
    mouseX = (event.clientX - windowX)
    mouseY = (event.clientY - windowY)
})


function animate() {
    requestAnimationFrame(animate);
    controls.update();

    targetX = mouseX * 0.001
    targetY = mouseY * 0.001

    if(model){
        model.rotation.y += .5*(targetX - (model.rotation.y + 3.14 / 2))
        model.rotation.x += .01*(targetY - model.rotation.x)
    }
    renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', ()=>{
    var box_W_new = box.offsetWidth;
    var box_H_new = box.offsetHeight;
    camera.setViewOffset(box_W_new , box_H_new, 0, 0,box_W_new ,box_H_new);
    renderer.setSize(box_W_new, box_H_new);
    renderer.render(scene, camera);
});

