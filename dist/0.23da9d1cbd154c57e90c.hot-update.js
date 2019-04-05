require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./src/server.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__("express");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api__ = __webpack_require__("./src/api/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__db__ = __webpack_require__("./src/db.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__("./src/config/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__middleware__ = __webpack_require__("./src/middleware.js");






var app = __WEBPACK_IMPORTED_MODULE_0_express___default()();

Object(__WEBPACK_IMPORTED_MODULE_4__middleware__["a" /* default */])(app);

var database = Object(__WEBPACK_IMPORTED_MODULE_2__db__["a" /* connect */])();

// {force: true} force: true will drop the table if it already exists
database.sequelize.sync().then(function () {
    console.log('Drop and Resync with { force: false }');
});

app.use('/api', __WEBPACK_IMPORTED_MODULE_1__api__["a" /* restRouter */]);

app.get('/', function (req, res) {
    res.redirect('/authorization.html');
});

app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.static(__dirname + '/public'));

//catch all
app.all('*', function (req, res) {
    res.json({ ok: true });
});

app.listen(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].port, function () {
    console.log('http://localhost:3000');
});

/* harmony default export */ __webpack_exports__["a"] = (app);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "src"))

/***/ })

};
//# sourceMappingURL=0.23da9d1cbd154c57e90c.hot-update.js.map