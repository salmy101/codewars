// Use the value below whenever you need the value of Pi
const PI = 3.14159;

const sphereVolume = function (radius) {
  return (4 * PI * radius ** 3) / 3;
  // Code here!
};
// console.log(sphereVolume(12))

// console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  return PI * radius ** 2 * (height / 3);
  // And here!
};
// console.log(coneVolume(12, 5))

// console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  return height * width * depth;
  // Probably here too!
};

// console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  let totalVol = 0;
  for (let i = 0; i < solids.length; i++) {
    if (solids[i].type === "sphere") {
      totalVol += sphereVolume(solids[i].radius);
    } else if (solids[i].type === "cone") {
      totalVol += coneVolume(solids[i].radius, solids[i].height);
    } else {
      totalVol += prismVolume(
        solids[i].height,
        solids[i].width,
        solids[i].depth
      );
    }
  }
  return totalVol;
  // Code here? Yup!
};

const largeSphere = {
  type: "sphere",
  radius: 40,
};

const smallSphere = {
  type: "sphere",
  radius: 10,
};

const cone = {
  type: "cone",
  radius: 3,
  height: 5,
};

const duck = [largeSphere, smallSphere, cone];

// console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);

console.log(totalVolume(duck));
