require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./src/config/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var baseConfig = {
    port: 3000,
    db: {
        database: 'kitchen',
        username: 'postgres',
        password: '123',
        host: 'localhost',
        dialect: 'postgres',
        port: 5432,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
};

/* harmony default export */ __webpack_exports__["a"] = (baseConfig);

/***/ })

};
//# sourceMappingURL=0.1b3d55cdb027ecc7fc8c.hot-update.js.map