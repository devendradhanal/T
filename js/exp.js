$(document).ready(function() {
    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(new THREE.Color(0xEEEEEE), 1.0);
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 100;
    scene = new THREE.Scene();

    light = new THREE.DirectionalLight(0xffffff, 1.5);
    light.position.set(0, 0, 3);
    scene.add(light);
    light.position.set(0, 0, 1);


    for (var i = 0; i < 6; i++) {
        geo = new THREE.CubeGeometry(10, 10, 10);
        mapURL = "../T/img/logoweb-app.png";
        map = THREE.ImageUtils.loadTexture(mapURL);
        /*mat = new THREE.MeshBasicMaterial({
            color: 0xff0000,
            wireframe: true
        });*/

        mat = new THREE.MeshLambertMaterial({
            map: map
        });
        cube = new THREE.Mesh(geo, mat);
        cube.position.x = Math.random() * i * 100;
        cube.position.y = Math.random() * i * 10;
        cube.rotation.x = Math.PI / 5;
        cube.rotation.y = Math.PI / 5;
        scene.add(cube);
        renderer.render(scene, camera);
    };



    $('body').append(renderer.domElement);
    run();
});



function run() {
    requestAnimationFrame(run);
    renderer.render(scene, camera);
}
