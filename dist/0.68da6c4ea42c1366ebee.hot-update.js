require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./src/api/resources/recipe/recipe.controller.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export findByParam */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__("babel-runtime/core-js/promise");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__recipe_model__ = __webpack_require__("./src/api/resources/recipe/recipe.model.js");
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
    getAll: getAll(__WEBPACK_IMPORTED_MODULE_1__recipe_model__["a" /* default */]),
    createOne: createOne(__WEBPACK_IMPORTED_MODULE_1__recipe_model__["a" /* default */]),
    getOne: getOne(),
    findByParam: findByParam(__WEBPACK_IMPORTED_MODULE_1__recipe_model__["a" /* default */]),
    deleteOne: deleteOne(__WEBPACK_IMPORTED_MODULE_1__recipe_model__["a" /* default */]),
    updateOne: updateOne(__WEBPACK_IMPORTED_MODULE_1__recipe_model__["a" /* default */]),
    getByUser: getByUser(__WEBPACK_IMPORTED_MODULE_1__recipe_model__["a" /* default */])
});

/***/ }),

/***/ "./src/api/resources/recipe/recipe.model.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__("sequelize");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__db__ = __webpack_require__("./src/db.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__step_step_model__ = __webpack_require__("./src/api/resources/step/step.model.js");




var schema = {
    title: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING,
    photo_id: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.UUID,
    description: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING,
    ingredients: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING
    //    steps: Sequelize.ARRAY(Sequelize.UUID),
};

var Recipe = Object(__WEBPACK_IMPORTED_MODULE_1__db__["a" /* connect */])().sequelize.define('recipe', schema, {
    underscored: true,
    freezeTableName: true
});

Recipe.hasMany(__WEBPACK_IMPORTED_MODULE_2__step_step_model__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (Recipe);

/***/ }),

/***/ "./src/api/resources/step/step.model.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__("sequelize");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__db__ = __webpack_require__("./src/db.js");



var schema = {
    title: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING,
    description: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING
};

var Step = Object(__WEBPACK_IMPORTED_MODULE_1__db__["a" /* connect */])().sequelize.define('step', schema, {
    underscored: true,
    freezeTableName: true
});

/* harmony default export */ __webpack_exports__["a"] = (Step);

/***/ }),

/***/ "./src/api/resources/user/user.model.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__("sequelize");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__db__ = __webpack_require__("./src/db.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recipe_recipe_model__ = __webpack_require__("./src/api/resources/recipe/recipe.model.js");




var schema = {
    name: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING,
    token: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING
};

var User = Object(__WEBPACK_IMPORTED_MODULE_1__db__["a" /* connect */])().sequelize.define('user', schema, {
    indexes: [{
        unique: true,
        fields: ['token']
    }],
    underscored: true,
    freezeTableName: true
});
User.hasMany(__WEBPACK_IMPORTED_MODULE_2__recipe_recipe_model__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (User);

/***/ }),

/***/ "./src/db.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return connect; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__("./src/config/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sequelize__ = __webpack_require__("sequelize");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_sequelize__);



var instance = null;

var connect = function connect() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */];

    if (instance !== null) {
        return instance;
    }

    var sequelize = new __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a(config.db.database, config.db.username, config.db.password, {
        host: config.db.host,
        dialect: config.db.dialect,
        operatorsAliases: false,
        pool: {
            max: config.db.max,
            min: config.db.pool.min,
            idle: config.db.pool.idle,
            acquire: config.db.pool.acquire
        },
        define: {
            createdAt: 'createdat',
            updatedAt: 'updatedat'
        }
    });

    instance = {
        Sequelize: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a,
        sequelize: sequelize
    };

    return instance;
};

/***/ }),

/***/ "sequelize":
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ })

};
//# sourceMappingURL=0.68da6c4ea42c1366ebee.hot-update.js.map