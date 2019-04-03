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
        username: 'bondzov@gmail.com',
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
//# sourceMappingURL=0.3cb712a5aa2429c1d5b5.hot-update.js.map