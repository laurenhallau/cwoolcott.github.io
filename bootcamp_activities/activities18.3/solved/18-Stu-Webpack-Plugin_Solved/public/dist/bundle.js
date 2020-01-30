/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/assets/js/app.js":
/*!*********************************!*\
  !*** ./public/assets/js/app.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("loadImages();\n\nfunction createEl(htmlString = \"\", className) {\n  const el = document.createElement(htmlString);\n  if (className) {\n    el.setAttribute(\"class\", className);\n  }\n  return el;\n}\n\nfunction loadImages() {\n  fetch(\"http://localhost:3000/api/images\").then((res) => res.json())\n    .then((data) => createCards(data));\n}\n\nfunction createCards(data) {\n  const container = document.querySelector(\".container\");\n  container.innerHTML = \"\";\n  let lastRow;\n  const row = createEl(\"div\", \"row\");\n\n  return data.forEach(function(image, index) {\n    const col = createEl(\"div\", \"col-md-4 mt-4\");\n    col.appendChild(createCard(image));\n    if (index % 3 === 0) {\n      row.appendChild(col);\n      container.appendChild(row);\n      lastRow = row;\n    }\n\n    return lastRow.appendChild(col);\n  });\n}\n\nfunction createCard(image) {\n  const card = createEl(\"div\", \"card\");\n  const imageContainer = createEl(\"div\", \"card__image-container\");\n  const img = createEl(\"img\", \"card-img-top card__image--cover\");\n  img.setAttribute(\"src\", image.image);\n  img.setAttribute(\"alt\", image.description);\n\n  const cardBody = createEl(\"div\", \"card-body\");\n\n  const ratingFormContainer = createEl(\"div\", \"rating d-flex justify-content-start\");\n  ratingFormContainer.setAttribute(\"data-id\", image._id);\n  ratingFormContainer.setAttribute(\"data-rating\", image.rating);\n\n  const ratingForm = createRatingForm(image);\n\n  const cardText = createEl(\"p\", \"card-text font-weight-bold mt-2\");\n\n  cardText.innerText = `${image.description} (${image.rating})`;\n\n  imageContainer.append(img);\n  ratingFormContainer.append(ratingForm);\n  cardBody.appendChild(ratingFormContainer);\n  cardBody.appendChild(cardText);\n  card.appendChild(imageContainer);\n  card.appendChild(cardBody);\n\n  return card;\n}\n\nfunction createRatingForm(image) {\n  const labelText = {\n    1: \"One Star\",\n    2: \"Two Stars\",\n    3: \"Three Stars\",\n    4: \"Four Stars\",\n    5: \"Five Stars\"\n  };\n\n  const form = createEl(\"form\");\n  form.setAttribute(\"action\", \"post\");\n\n  for (let i = 1; i <= 5; i++) {\n    const input = createEl(\"input\", \"visuallyhidden\");\n    input.setAttribute(\"type\", \"radio\");\n    input.setAttribute(\"name\", \"rating\");\n    input.setAttribute(\"id\", `${image._id}-star-${i}`);\n    input.setAttribute(\"value\", i);\n\n    const label = createEl(\"label\");\n    label.setAttribute(\"for\", `${image._id}-star-${i}`);\n    const labelSpan = createEl(\"span\", \"visuallyhidden\");\n    labelSpan.innerText = labelText[i];\n    const star = createEl(\"i\", `fa-star ${image.rating >= i ? \"fas\" : \"far\"}`);\n\n    label.appendChild(labelSpan);\n    label.appendChild(star);\n    label.onclick = updateRating;\n    form.appendChild(input);\n    form.appendChild(label);\n  }\n\n  return form;\n}\n\nfunction updateRating(event) {\n  const [id, , rating] = event.currentTarget.getAttribute(\"for\").split(\"-\");\n  fetch(`http://localhost:3000/api/images/${id}`, {\n    method: \"PUT\",\n    body: JSON.stringify({ rating }),\n    headers: {\n      \"Content-Type\": \"application/json\"\n    }\n  }).then(function() {\n    loadImages();\n  });\n\n}\n\n//# sourceURL=webpack:///./public/assets/js/app.js?");

/***/ })

/******/ });