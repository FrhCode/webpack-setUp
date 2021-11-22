import "core-js";
import "../sass/main.scss";
import { multiplyNum } from "./utils/multipleNumber.js";

const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
