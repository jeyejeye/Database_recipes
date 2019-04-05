require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./src/api/resources/recipe/recipe.restRouter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return recipeRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__("express");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__recipe_controller__ = __webpack_require__("./src/api/resources/recipe/recipe.controller.js");



var recipeRouter = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router({});

recipeRouter.param('id', __WEBPACK_IMPORTED_MODULE_1__recipe_controller__["a" /* default */].findByParam);
recipeRouter.param('userId', __WEBPACK_IMPORTED_MODULE_1__recipe_controller__["a" /* default */].getByUser);

recipeRouter.route('/').get(__WEBPACK_IMPORTED_MODULE_1__recipe_controller__["a" /* default */].getAll).post(__WEBPACK_IMPORTED_MODULE_1__recipe_controller__["a" /* default */].createOne);

recipeRouter.route('/:id').put(__WEBPACK_IMPORTED_MODULE_1__recipe_controller__["a" /* default */].updateOne).delete(__WEBPACK_IMPORTED_MODULE_1__recipe_controller__["a" /* default */].deleteOne).get(__WEBPACK_IMPORTED_MODULE_1__recipe_controller__["a" /* default */].getOne);

recipeRouter.route('/user_id/:userId').get(__WEBPACK_IMPORTED_MODULE_1__recipe_controller__["a" /* default */].getByUser);

/***/ })

};
//# sourceMappingURL=0.dbd747eb106f913fa0de.hot-update.js.map