require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./src/api/resources/recipe/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__recipe_restRouter__ = __webpack_require__("./src/api/resources/recipe/recipe.restRouter.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__recipe_restRouter__["a"]; });


/***/ }),

/***/ "./src/api/resources/recipe/recipe.controller.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export findByParam */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__("babel-runtime/core-js/promise");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__recipe_model__ = __webpack_require__("./src/api/resources/recipe/recipe.model.js");



var getAll = function getAll(model) {
    return function (req, res) {
        return model.findAll({}).then(function (entities) {
            return res.status(200).json(entities);
        }).catch(function (error) {
            return res.status(500).json(error);
        });
    };
};

var getByUser = function getByUser(model) {
    return function (req, res, userId) {
        return model.findAll({
            where: {
                user_id: userId
            }
        }).then(function (entities) {
            return res.status(200).json(entities);
        }).catch(function (error) {
            return res.status(500).json(error);
        });
    };
};

var createOne = function createOne(model) {
    return function (req, res, next) {
        console.log('createOne', req.body);
        return model.create(req.body).then(function (entity) {
            return res.status(201).json(entity);
        }).catch(function (error) {
            return next(error);
        });
    };
};

var getOne = function getOne() {
    return function (req, res, next) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve(req.docFromId).then(function (entity) {
            return res.status(200).json(entity);
        }).catch(function (error) {
            return next(error);
        });
    };
};

var deleteOne = function deleteOne() {
    return function (req, res, next) {
        return req.docFromId.destroy().then(function (entity) {
            return res.status(201).json(entity);
        }).catch(function (error) {
            return next(error);
        });
    };
};

var updateOne = function updateOne() {
    return function (req, res, next) {
        var update = req.body;
        merge(req.docFromId, update);
        return req.docFromId.save().then(function (entity) {
            return res.status(201).json(entity);
        }).catch(function (error) {
            return next(error);
        });
    };
};

var findByParam = function findByParam(model) {
    return function (req, res, next, id) {
        return model.findById(id).then(function (entity) {
            if (!entity) {
                next(new Error('Not Found Error'));
            } else {
                req.docFromId = entity;
                next();
            }
        }).catch(function (error) {
            next(error);
        });
    };
};

/* harmony default export */ __webpack_exports__["a"] = ({
    getAll: getAll(__WEBPACK_IMPORTED_MODULE_1__recipe_model__["a" /* default */]),
    createOne: createOne(__WEBPACK_IMPORTED_MODULE_1__recipe_model__["a" /* default */]),
    getOne: getOne(),
    findByParam: findByParam(__WEBPACK_IMPORTED_MODULE_1__recipe_model__["a" /* default */]),
    deleteOne: deleteOne(__WEBPACK_IMPORTED_MODULE_1__recipe_model__["a" /* default */]),
    updateOne: updateOne(__WEBPACK_IMPORTED_MODULE_1__recipe_model__["a" /* default */]),
    getByUser: getByUser(__WEBPACK_IMPORTED_MODULE_1__recipe_model__["a" /* default */])
});

/***/ }),

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

recipeRouter.route('/userid/:userId').get(__WEBPACK_IMPORTED_MODULE_1__recipe_controller__["a" /* default */].getByUser);

/***/ }),

/***/ "./src/api/resources/step/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__step_restRouter__ = __webpack_require__("./src/api/resources/step/step.restRouter.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__step_restRouter__["a"]; });


/***/ }),

/***/ "./src/api/resources/step/step.controller.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export findByParam */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__("babel-runtime/core-js/promise");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__step_model__ = __webpack_require__("./src/api/resources/step/step.model.js");



var getAll = function getAll(model) {
    return function (req, res) {
        return model.findAll({}).then(function (entities) {
            return res.status(200).json(entities);
        }).catch(function (error) {
            return res.status(500).json(error);
        });
    };
};

var getByRecipe = function getByRecipe(model) {
    return function (req, res, recipeId) {
        return model.findAll({
            where: {
                recipe_id: recipeId
            }
        }).then(function (entities) {
            return res.status(200).json(entities);
        }).catch(function (error) {
            return res.status(500).json(error);
        });
    };
};

var createOne = function createOne(model) {
    return function (req, res, next) {
        console.log('createOne', req.body);
        return model.create(req.body).then(function (entity) {
            return res.status(201).json(entity);
        }).catch(function (error) {
            return next(error);
        });
    };
};

var getOne = function getOne() {
    return function (req, res, next) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve(req.docFromId).then(function (entity) {
            return res.status(200).json(entity);
        }).catch(function (error) {
            return next(error);
        });
    };
};

var deleteOne = function deleteOne() {
    return function (req, res, next) {
        return req.docFromId.destroy().then(function (entity) {
            return res.status(201).json(entity);
        }).catch(function (error) {
            return next(error);
        });
    };
};

var updateOne = function updateOne() {
    return function (req, res, next) {
        var update = req.body;
        merge(req.docFromId, update);
        return req.docFromId.save().then(function (entity) {
            return res.status(201).json(entity);
        }).catch(function (error) {
            return next(error);
        });
    };
};

var findByParam = function findByParam(model) {
    return function (req, res, next, id) {
        return model.findById(id).then(function (entity) {
            if (!entity) {
                next(new Error('Not Found Error'));
            } else {
                req.docFromId = entity;
                next();
            }
        }).catch(function (error) {
            next(error);
        });
    };
};

/* harmony default export */ __webpack_exports__["a"] = ({
    getAll: getAll(__WEBPACK_IMPORTED_MODULE_1__step_model__["a" /* default */]),
    createOne: createOne(__WEBPACK_IMPORTED_MODULE_1__step_model__["a" /* default */]),
    getOne: getOne(),
    findByParam: findByParam(__WEBPACK_IMPORTED_MODULE_1__step_model__["a" /* default */]),
    deleteOne: deleteOne(__WEBPACK_IMPORTED_MODULE_1__step_model__["a" /* default */]),
    updateOne: updateOne(__WEBPACK_IMPORTED_MODULE_1__step_model__["a" /* default */]),
    getByRecipe: getByRecipe(__WEBPACK_IMPORTED_MODULE_1__step_model__["a" /* default */])
});

/***/ }),

/***/ "./src/api/resources/step/step.restRouter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return stepRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__("express");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__step_controller__ = __webpack_require__("./src/api/resources/step/step.controller.js");



var stepRouter = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router({});

stepRouter.param('id', __WEBPACK_IMPORTED_MODULE_1__step_controller__["a" /* default */].findByParam);
stepRouter.param('recipeId', __WEBPACK_IMPORTED_MODULE_1__step_controller__["a" /* default */].getByRecipe);

stepRouter.route('/').get(__WEBPACK_IMPORTED_MODULE_1__step_controller__["a" /* default */].getAll).post(__WEBPACK_IMPORTED_MODULE_1__step_controller__["a" /* default */].createOne);

stepRouter.route('/:id').put(__WEBPACK_IMPORTED_MODULE_1__step_controller__["a" /* default */].updateOne).delete(__WEBPACK_IMPORTED_MODULE_1__step_controller__["a" /* default */].deleteOne).get(__WEBPACK_IMPORTED_MODULE_1__step_controller__["a" /* default */].getOne);

stepRouter.route('/recipeid/:recipeId').get(__WEBPACK_IMPORTED_MODULE_1__step_controller__["a" /* default */].getByRecipe);

/***/ }),

/***/ "./src/api/restRouter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return restRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__("express");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resources_user__ = __webpack_require__("./src/api/resources/user/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resources_recipe__ = __webpack_require__("./src/api/resources/recipe/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resources_step__ = __webpack_require__("./src/api/resources/step/index.js");





var restRouter = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

restRouter.use('/user', __WEBPACK_IMPORTED_MODULE_1__resources_user__["a" /* userRouter */]);
restRouter.use('/recipe', __WEBPACK_IMPORTED_MODULE_2__resources_recipe__["a" /* recipeRouter */]);
restRouter.use('/step', __WEBPACK_IMPORTED_MODULE_3__resources_step__["a" /* stepRouter */]);

/***/ })

};
//# sourceMappingURL=0.d5685dccac32d6f3b374.hot-update.js.map