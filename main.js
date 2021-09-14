(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row header\">\r\n    <div class=\"col-md-12 text-center text-success\">\r\n      <h1>Image Filter Online</h1>\r\n    </div>\r\n    <!-- <div class=\"col-md-3\">\r\n            <div class=\"range-slider\">\r\n                <input class=\"range-slider__range\" type=\"range\" value=\"-3000\" min=\"0\" max=\"3000\" step=\"50\">\r\n                <span class=\"range-slider__value\">0</span>\r\n              </div>\r\n        </div> -->\r\n\r\n  </div>\r\n  <div class=\"row img-filter-container\">\r\n    <div class=\"col-md-6 image-container\">\r\n      <!-- <img src=\"http://localhost:4200/favicon.ico\" alt=\"Smiley face\" height=\"400\" width=\"400  \"> -->\r\n       <svg #svgContent xmlns=\"http://www.w3.org/2000/svg\" xmlns:xhtml=\"http://www.w3.org/1999/xhtml\" width=\"100%\" height=\"100%\"  id=\"svgContent\" overflow=\"hidden\">\r\n            <defs>\r\n                <clipPath class=\"boundryClipPath\" id=\"boundryClipPath0\">\r\n                    <rect aHeight=\"11.69\" aWidth=\"8.27\" height=\"283\" width=\"200\" y=\"112.27991\" x=\"146.72622\" id=\"boundRectangle\"></rect>\r\n                </clipPath>\r\n                <filter style=\"color-interpolation-filters:sRGB;\" id=\"filter2028\">\r\n                    <feColorMatrix type=\"matrix\" id=\"feColorMatrix2028\" result=\"colormatrix\" values=\"0\"></feColorMatrix>\r\n                </filter> \r\n            </defs>\r\n            <g   id=\"layer_area_0\" style=\"pointer-events:all\" filter=\"url('#filter2028')\"> \r\n                <image xmlns:xlink=\"http://www.w3.org/1999/xlink\" preserveAspectRatio=\"none\" height=\"100%\" width=\"100%\" xlink:href=\"https://upload.wikimedia.org/wikipedia/commons/9/91/F-15_vertical_deploy.jpg\" id=\"xe_8h26\"></image>\r\n            </g>\r\n        </svg>\r\n\r\n    </div>\r\n    <div class=\"col-md-6 filter-container\">\r\n      <div class=\"slider-container\" *ngFor=\"let filterVal of filterValArr;let i=index \">\r\n        <div class=\"range-slider\">\r\n          <input class=\"range-slider__range\" type=\"range\" [value]=\"filterVal\" min=\"-3\" max=\"3\"   step=\"0.2\" (input)=\"rangeValChange($event,i,filterVal)\">\r\n          <span class=\"range-slider__value\">{{defaultFilterArr[i]}}</span>\r\n        </div>\r\n      </div> \r\n    </div>\r\n  </div>\r\n  <!-- Download /Sample filter  container -->\r\n  <div class=\"row\">\r\n      <div class=\"col-md-6 download-wrap\">\r\n          <button class=\"btn btn-primary\">Show code</button>\r\n          <button  class=\"btn btn-primary\" (click)=\"downloadImage()\">Download</button>\r\n          <button class=\"btn btn-primary\">Show some sample filter</button>\r\n      </div>\r\n  </div>\r\n  <div class=\"row\">\r\n      <div class=\"col-md-12 sample-filer-list\">\r\n        <div  *ngFor=\"let filter of filterListArr;let findex=index\" class=\"filer-item\" (click)=\"applyFilterFromList(findex)\">{{filter.name}}</div>\r\n      </div>\r\n      <pre>\r\n               This text is\r\n         in a fixed-pitch\r\n               font, and it preserves\r\n         both    spaces and line breaks\r\n      </pre>\r\n  </div>\r\n  <canvas #captureCanvas width=\"500\" width=\"500\"></canvas>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  background-color: #3ad095;\n  height: 100px;\n  text-align: center;\n  vertical-align: middle;\n}\n.header h1 {\n  color: #ffffff;\n}\n.img-filter-container {\n  margin-top: 30px;\n}\n.img-filter-container .image-container {\n  padding: 0px;\n  text-align: center;\n  border: 1px solid #dddddd;\n  border-top-left-radius: 10px;\n  border-bottom-left-radius: 10px;\n}\n.img-filter-container .filter-container {\n  background: #eef7fb;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n.img-filter-container .filter-container .slider-container {\n  width: 20%;\n  display: inline-block;\n  text-align: center;\n}\n.download-wrap button {\n  margin: 8px;\n}\n.sample-filer-list {\n  border: 2px solid #dddd;\n  border-radius: 10px;\n  background: #eef7fb;\n}\n.sample-filer-list .filer-item {\n  display: inline-block;\n  width: 10%;\n  background-color: #3ad095;\n  margin: 7px;\n  border-radius: 10px;\n  height: 35px;\n  text-align: center;\n  color: #ffffff;\n  font-size: 18px;\n  cursor: pointer;\n}\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\n@media (min-width: 600px) {\n  body {\n    padding: 60px;\n  }\n}\n.range-slider {\n  margin: 60px 0 0 0%;\n  width: 100%;\n}\n.range-slider__range {\n  -webkit-appearance: none;\n  width: calc(100% - 30px);\n  height: 5px;\n  border-radius: 5px;\n  background: #d7dcdf;\n  outline: none;\n  padding: 0;\n  margin: 0;\n}\n.range-slider__range::-webkit-slider-thumb {\n  -webkit-appearance: none;\n          appearance: none;\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  background: #2c3e50;\n  cursor: pointer;\n  transition: background 0.15s ease-in-out;\n}\n.range-slider__range::-webkit-slider-thumb:hover {\n  background: #1abc9c;\n}\n.range-slider__range:active::-webkit-slider-thumb {\n  background: #1abc9c;\n}\n.range-slider__range::-moz-range-thumb {\n  width: 12px;\n  height: 12px;\n  border: 0;\n  border-radius: 50%;\n  background: #2c3e50;\n  cursor: pointer;\n  transition: background 0.15s ease-in-out;\n}\n.range-slider__range::-moz-range-thumb:hover {\n  background: #1abc9c;\n}\n.range-slider__range:active::-moz-range-thumb {\n  background: #1abc9c;\n}\n.range-slider__value {\n  display: inline-block;\n  position: relative;\n  width: 30px;\n  color: #fff;\n  line-height: 20px;\n  text-align: center;\n  border-radius: 3px;\n  background: #3ad095;\n  padding: 5px 6px;\n  top: -29px;\n  left: -53px;\n  border-radius: 15px;\n}\n::-moz-range-track {\n  background: #d7dcdf;\n  border: 0;\n}\ninput::-moz-focus-inner,\ninput::-moz-focus-outer {\n  border: 0;\n}\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'image-editor-tool';
        this.defaultFilterArr = ["1", "0", "0", "0", "0", "0", "1", "0", "0", "0", "0", "0", "1", "0", "0", "0", "0", "0", "1", "0"];
        this.filterValArr = ["1", "0", "0", "0", "0", "0", "1", "0", "0", "0", "0", "0", "1", "0", "0", "0", "0", "0", "1", "0"];
        this.filterListArr = [{ name: "purple", value: "1 -0.2 0 0 0 0 1 0 -0.1 0 0 1.2 1 0.1 0 0 0 1.7 1 0" },
            { name: "yellow", value: "1 0 0 0 0 -0.2 1.0 0.3 0.1 0 -0.1 0 1 0 0 0 0 0 1 0" },
            { name: "cyan", value: "1 0 0 1.9 -2.2 0 1 0 0.0 0.3 0 0 1 0 0.5 0 0 0 1 0.2" },
            { name: "blackwhite", value: "0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 1 0" },
            { name: "oldtime", value: "1 0 0 0 0 -0.4 1.3 -0.4 0.2 -0.1 0 0 1 0 0 0 0 0 1 0" },
            { name: 'coldlife', value: "1 0 0 0 0 0 1 0 0 0 -0.2 0.2 0.1 0.4 0 0 0 0 1 0" },
            { name: 'sepium', value: "1.3 -0.3 1.1 0 0 0 1.3 0.2 0 0 0 0 0.8 0.2 0 0 0 0 1 0" },
            { name: "milk", value: "0 1.0 0 0 0 0 1.0 0 0 0 0 0.6 1 0 0 0 0 0 1 0" }
        ];
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        var defElem = this.svgElem.nativeElement.querySelector('defs');
        defElem.querySelector('#filter2028');
        console.log(this.svgElem.nativeElement.querySelector('#feColorMatrix2028').getAttribute('values'));
    };
    AppComponent.prototype.convertToFilterString = function (fArr) {
        if (fArr) {
            return fArr.join(' ');
        }
    };
    AppComponent.prototype.rangeValChange = function (event, index) {
        var fVal = event.target.value;
        if (typeof index != 'undefined' && fVal) {
            this.defaultFilterArr[index] = fVal;
        }
        this.svgElem.nativeElement.querySelector('#feColorMatrix2028').setAttribute("values", this.convertToFilterString(this.defaultFilterArr));
        //console.log(this.convertToFilterString(this.defaultFilterArr));
    };
    AppComponent.prototype.applyFilterFromList = function (findex) {
        console.log(findex);
        if (typeof findex != 'undefined' && this.filterListArr[findex]) {
            this.defaultFilterArr = this.filterListArr[findex].value.split(' ');
            this.filterValArr = this.filterListArr[findex].value.split(' ');
            this.svgElem.nativeElement.querySelector('#feColorMatrix2028').setAttribute("values", this.convertToFilterString(this.defaultFilterArr));
        }
    };
    AppComponent.prototype.downloadImage = function () {
        var self = this;
        var copyCanvas = this.svgElem.nativeElement.cloneNode(true), images = copyCanvas.getElementsByTagName('image');
        for (var i = 0; i < images.length; i++) {
            if (images[i] && images[i].getAttribute('xlink:href')) {
                this.convertToBase64(images[i].getAttribute('xlink:href'), i, function (data, index) {
                    images[index].setAttribute('xlink:href', data.result);
                    if (index == images.length - 1) {
                        self.captureFinalImage(copyCanvas.outerHTML, function (data) {
                            // self.btndownload.nativeElement.href = data;
                            // self.btndownload.nativeElement.download = 'converted.png';
                            var aelem = document.createElement('a');
                            aelem.download = 'converted.png';
                            aelem.href = data;
                            aelem.click();
                        });
                    }
                });
            }
        }
    };
    AppComponent.prototype.captureFinalImage = function (svgStr, callback) {
        var image = new Image();
        var capCanvas = this.captureCanvas.nativeElement;
        var canvasCtx = capCanvas.getContext('2d');
        image.onload = function () {
            capCanvas.height = image.height;
            capCanvas.width = image.width;
            canvasCtx.drawImage(this, 0, 0);
            var b64Data = capCanvas.toDataURL("image/png");
            callback(b64Data);
        };
        image.src = 'data:image/svg+xml; charset=utf8 ,' + encodeURIComponent(svgStr);
    };
    AppComponent.prototype.convertToBase64 = function (url, index, callback) {
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = function () {
            var reader = new FileReader();
            reader.onloadend = function () {
                callback(this, index);
            };
            reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', url);
        xhr.send();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('svgContent'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AppComponent.prototype, "svgElem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('captureCanvas'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AppComponent.prototype, "captureCanvas", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('btndownload'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AppComponent.prototype, "btndownload", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        })
    ], AppComponent);
    return AppComponent;
}());

//https://jorgeatgu.github.io/svg-filters/
//https://testdrive-archive.azurewebsites.net/graphics/hands-on-css3/hands-on_svg-filter-effects.htm
//https://kazzkiq.github.io/svg-color-filter/
//https://www.smashingmagazine.com/2015/05/why-the-svg-filter-is-awesome/
//Image Filters
//https://www.w3.org/Graphics/SVG/IG/resources/svgprimer.html#filters
// /https://webplatform.github.io/docs/svg/tutorials/smarter_svg_filters/


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\githubswitch\image-designer\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map