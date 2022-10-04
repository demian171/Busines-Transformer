
var $container = $('#container');
var renderer = new THREE.WebGLRenderer({antialias: true});
var camera = new THREE.PerspectiveCamera(80,1,0.1,10000);
var scene = new THREE.Scene();

scene.add(camera);
renderer.setSize(300, 300);
$container.append(renderer.domElement);

///////////////////////////////////////////////

// Camera
camera.position.z = 200;

// Material
var pinkMat = new THREE.MeshPhongMaterial({
    color      :  new THREE.Color("rgb(168,168,168)"),
    emissive   :  new THREE.Color("rgb(78,78,78)"),
    specular   :  new THREE.Color("rgb(210,210,210)"),
    shininess  :  10,
    shading    :  THREE.FlatShading,
    transparent: 1,
    opacity    : 1
});

var L1 = new THREE.PointLight( 0xffffff, 1);
L1.position.z = 100;
L1.position.y = 100;
L1.position.x = 100;
scene.add(L1);

var L2 = new THREE.PointLight( 0xffffff, 0.8);
L2.position.z = 200;
L2.position.y = 50;
L2.position.x = -100;
scene.add(L2);

// IcoSphere -> THREE.IcosahedronGeometry(80, 1) 1-4
var Ico = new THREE.Mesh(new THREE.IcosahedronGeometry(120,0), pinkMat);
Ico.rotation.z = 2.4;
scene.add(Ico);

function update(){
    // Ico.rotation.x+=2/100;
    Ico.rotation.y+=1/200;
}

// Render
function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
    update();
}

render();