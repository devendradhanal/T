// Shear Matrix Applied to a Cube

// dom
var container = document.createElement('div');
document.body.appendChild(container);

// renderer
var renderer = new THREE.CanvasRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

// scene
var scene = new THREE.Scene();

// camera
var camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(0, 6, 20);
camera.lookAt(scene.position);
scene.add(camera);

// material
var material = new THREE.MeshBasicMaterial({
    color: 0xff0000,
    wireframe: true
});

// geometry
var geometry = new THREE.CubeGeometry(5, 5, 5);

// mesh
var mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// shear matrix
// ref: http://www.flipcode.com/documents/matrfaq.html#Q43
//        | 1    Syx  Szx  0 |
//        |                  |
//        | Sxy  1    Szy  0 |
//    M = |                  |
//        | Sxz  Syz  1    0 |
//        |                  |
//        | 0    0    0    1 |
//        |                  |

var Syx = 0.7,
    Szx = 0,
    Sxy = 0.04,
    Szy = -0.33,
    Sxz = 0.56,
    Syz = .40;

var matrix = new THREE.Matrix4();

matrix.set(1, Syx, Szx, 0,
    Sxy, .8, Szy, 0,
    Sxz, Syz, 1, 0,
    0, 0, 0, 1);

// apply shear matrix to geometry                  
mesh.geometry.applyMatrix(matrix);
mesh.rotation.y = Math.PI / 4;

// render
renderer.render(scene, camera);

document.addEventListener('mousemove', onDocumentMouseMove, false);

function onDocumentMouseMove(event) {
    console.log(Syx, Szx, Sxy, Szy, Sxz, Syz);
    var mouseX = event.clientX;

    //mesh.rotation.y = mouseX * 0.01;

    renderer.render(scene, camera);
    run();

}

function run() {
    // Render the scene
    /*var matrix = new THREE.Matrix4();

    matrix.set(1, Syx, Szx, 0,
        Sxy, .8, Szy, 0,
        Sxz, Syz, 1, 0,
        0, 0, 0, 1);*/
    // mesh.geometry.applyMatrix(matrix);
    renderer.render(scene, camera);
    // console.log('Here');
    requestAnimationFrame(run);
}



Syx_Range = document.querySelector('#Syx_Range');
Szx_Range = document.querySelector('#Szx_Range');
Sxy_Range = document.querySelector('#Sxy_Range');
Szy_Range = document.querySelector('#Szy_Range');
Sxz_Range = document.querySelector('#Sxz_Range');
Syz_Range = document.querySelector('#Syz_Range');

Syx_Range.onchange = function(evt) {
    Syx = parseInt(Syx_Range.value);


    var matrix = new THREE.Matrix4();

    matrix.set(1, Syx, Szx, 0,
        Sxy, 1, Szy, 0,
        Sxz, Syz, 1, 0,
        0, 0, 0, 1);
    mesh.geometry.applyMatrix(matrix);
    console.log(Syx, Szx, Sxy, Szy, Sxz, Syz);
    console.log(Syx_Range.value);
}
Szx_Range.onchange = function(evt) {
    Szx = parseInt(Szx_Range.value);
    var matrix = new THREE.Matrix4();

    matrix.set(1, Syx, Szx, 0,
        Sxy, 1, Szy, 0,
        Sxz, Syz, 1, 0,
        0, 0, 0, 1);
    mesh.geometry.applyMatrix(matrix);
    console.log(Syx, Szx, Sxy, Szy, Sxz, Syz);

    console.log(Szx_Range.value);
}
Sxy_Range.onchange = function(evt) {
    Sxy = parseInt(Sxy_Range.value);
    var matrix = new THREE.Matrix4();

    matrix.set(1, Syx, Szx, 0,
        Sxy, 1, Szy, 0,
        Sxz, Syz, 1, 0,
        0, 0, 0, 1);
    mesh.geometry.applyMatrix(matrix);
    console.log(Syx, Szx, Sxy, Szy, Sxz, Syz);

    console.log(Sxy_Range.value);
}
Szy_Range.onchange = function(evt) {
    Szy = parseInt(Szy_Range.value);
    var matrix = new THREE.Matrix4();

    matrix.set(1, Syx, Szx, 0,
        Sxy, 1, Szy, 0,
        Sxz, Syz, 1, 0,
        0, 0, 0, 1);
    mesh.geometry.applyMatrix(matrix);
    console.log(Syx, Szx, Sxy, Szy, Sxz, Syz);

    console.log(Szy_Range.value);
}
Sxz_Range.onchange = function(evt) {
    Sxz = parseInt(Sxz_Range.value);
    var matrix = new THREE.Matrix4();

    matrix.set(1, Syx, Szx, 0,
        Sxy, 1, Szy, 0,
        Sxz, Syz, 1, 0,
        0, 0, 0, 1);
    mesh.geometry.applyMatrix(matrix);
    console.log(Syx, Szx, Sxy, Szy, Sxz, Syz);

    console.log(Sxz_Range.value);
}
Syz_Range.onchange = function(evt) {
    Syz = parseInt(Syz_Range.value);
    var matrix = new THREE.Matrix4();

    matrix.set(1, Syx, Szx, 0,
        Sxy, 1, Szy, 0,
        Sxz, Syz, 1, 0,
        0, 0, 0, 1);
    mesh.geometry.applyMatrix(matrix);
    console.log(Syx, Szx, Sxy, Szy, Sxz, Syz);

    console.log(Syz_Range.value);
}
