const calculateRectangleArea = function (length, width) {
  let area;
  if (length < 0 || width < 0) {
    area = undefined;
  } else { area = length * width }
  return area;
};

const calculateCircleArea = function (radius) {

  let area;
  if (radius < 0) {
    area = undefined;
  } else {

    area = Math.PI * (radius * radius)
  }
  return area;
};

const calculateTriangleArea = function (base, height) {
  let area;
  if (base < 0) {
    area = undefined;
  } else {
    area = (base * height) / 2
  }
  return area;
}
console.log(calculateRectangleArea(5, 10), calculateCircleArea(23), calculateTriangleArea(40, 60));