require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./src/api/resources/step/step.controller.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export findByParam */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__("babel-runtime/core-js/promise");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__step_model__ = __webpack_require__("./src/api/resources/step/step.model.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_merge__ = __webpack_require__("lodash.merge");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_merge__);




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
        __WEBPACK_IMPORTED_MODULE_2_lodash_merge___default()(req.docFromId, update);
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

/***/ })

};
//# sourceMappingURL=0.6a0370d72b38cc4c22de.hot-update.js.map