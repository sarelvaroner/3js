var scene, camera, renderer, mesh;
var meshFloor;



function init() {
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(90, 1280 / 720, 0.1, 1000);

	mesh = new THREE.Mesh(
		new THREE.BoxGeometry(1, 1, 1),
		new THREE.MeshBasicMaterial({ color: 0xff4444, wireframe: true })
	);

	mesh.position.y = 0.1;
	scene.add(mesh);



	meshFloor = new THREE.Mesh(
		new THREE.PlaneGeometry(10, 10, 10, 10),
		new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true })
	);

	meshFloor.rotation.x = 90 * THREE.Math.DEG2RAD;
	scene.add(meshFloor);

	camera.position.set(0, 6, 0);
	camera.lookAt(new THREE.Vector3( 0,  0,  0));
	// camera.position.x = 0
	// camera.position.y = 6
	// camera.position.z = 0
	// camera.rotation.x =  45;


	renderer = new THREE.WebGLRenderer();
	renderer.setSize(1280, 720);
	document.body.appendChild(renderer.domElement);

	animate();
}



function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
}

function rotate() {
	camera.lookAt(new THREE.Vector3( 45 * THREE.Math.DEG2RAD,  90 * THREE.Math.DEG2RAD,  15 * THREE.Math.DEG2RAD));
}

function reset() {
	camera.lookAt(new THREE.Vector3( 0,  0,  0));
}


window.onload = init;
