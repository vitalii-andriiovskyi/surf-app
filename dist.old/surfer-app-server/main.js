(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/alert/alert-config.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/alert/alert-config.js ***!
  \***********************************************************************/
/*! exports provided: NgbAlertConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbAlertConfig", function() { return NgbAlertConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Configuration service for the NgbAlert component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the alerts used in the application.
 */
var NgbAlertConfig = (function () {
    function NgbAlertConfig() {
        this.dismissible = true;
        this.type = 'warning';
    }
    NgbAlertConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    NgbAlertConfig.ctorParameters = function () { return []; };
    return NgbAlertConfig;
}());

//# sourceMappingURL=alert-config.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/alert/alert.js":
/*!****************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/alert/alert.js ***!
  \****************************************************************/
/*! exports provided: NgbAlert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbAlert", function() { return NgbAlert; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _alert_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/alert/alert-config.js");


/**
 * Alerts can be used to provide feedback messages.
 */
var NgbAlert = (function () {
    function NgbAlert(config) {
        /**
           * An event emitted when the close button is clicked. This event has no payload. Only relevant for dismissible alerts.
           */
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dismissible = config.dismissible;
        this.type = config.type;
    }
    NgbAlert.prototype.closeHandler = function () { this.close.emit(null); };
    NgbAlert.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-alert',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    template: "\n    <div [class]=\"'alert alert-' + type + (dismissible ? ' alert-dismissible' : '')\" role=\"alert\">\n      <button *ngIf=\"dismissible\" type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeHandler()\">\n            <span aria-hidden=\"true\">&times;</span>\n      </button>\n      <ng-content></ng-content>\n    </div>\n    "
                },] },
    ];
    /** @nocollapse */
    NgbAlert.ctorParameters = function () { return [
        { type: _alert_config__WEBPACK_IMPORTED_MODULE_1__["NgbAlertConfig"], },
    ]; };
    NgbAlert.propDecorators = {
        "dismissible": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "type": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "close": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return NgbAlert;
}());

//# sourceMappingURL=alert.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/alert/alert.ngfactory.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/alert/alert.ngfactory.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i2 = __webpack_require__(/*! ./alert */ "./node_modules/@ng-bootstrap/ng-bootstrap/alert/alert.js");
var i3 = __webpack_require__(/*! ./alert-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/alert/alert-config.js");
var styles_NgbAlert = [];
var RenderType_NgbAlert = i0.ɵcrt({ encapsulation: 2, styles: styles_NgbAlert, data: {} });
exports.RenderType_NgbAlert = RenderType_NgbAlert;
function View_NgbAlert_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "button", [["aria-label", "Close"], ["class", "close"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.closeHandler() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 1, "span", [["aria-hidden", "true"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\u00D7"]))], null, null); }
function View_NgbAlert_0(_l) { return i0.ɵvid(2, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "div", [["role", "alert"]], [[8, "className", 0]], null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbAlert_1)), i0.ɵdid(2, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), i0.ɵncd(null, 0)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.dismissible; _ck(_v, 2, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (("alert alert-" + _co.type) + (_co.dismissible ? " alert-dismissible" : "")); _ck(_v, 0, 0, currVal_0); }); }
exports.View_NgbAlert_0 = View_NgbAlert_0;
function View_NgbAlert_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ngb-alert", [], null, null, null, View_NgbAlert_0, RenderType_NgbAlert)), i0.ɵdid(1, 49152, null, 0, i2.NgbAlert, [i3.NgbAlertConfig], null, null)], null, null); }
exports.View_NgbAlert_Host_0 = View_NgbAlert_Host_0;
var NgbAlertNgFactory = i0.ɵccf("ngb-alert", i2.NgbAlert, View_NgbAlert_Host_0, { dismissible: "dismissible", type: "type" }, { close: "close" }, ["*"]);
exports.NgbAlertNgFactory = NgbAlertNgFactory;


/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-config.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-config.js ***!
  \*********************************************************************************/
/*! exports provided: NgbDatepickerConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerConfig", function() { return NgbDatepickerConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Configuration service for the NgbDatepicker component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the datepickers used in the application.
 */
var NgbDatepickerConfig = (function () {
    function NgbDatepickerConfig() {
        this.displayMonths = 1;
        this.firstDayOfWeek = 1;
        this.navigation = 'select';
        this.outsideDays = 'visible';
        this.showWeekdays = true;
        this.showWeekNumbers = false;
    }
    NgbDatepickerConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    NgbDatepickerConfig.ctorParameters = function () { return []; };
    return NgbDatepickerConfig;
}());

//# sourceMappingURL=datepicker-config.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-day-view.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-day-view.js ***!
  \***********************************************************************************/
/*! exports provided: NgbDatepickerDayView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerDayView", function() { return NgbDatepickerDayView; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var NgbDatepickerDayView = (function () {
    function NgbDatepickerDayView() {
    }
    NgbDatepickerDayView.prototype.isMuted = function () { return !this.selected && (this.date.month !== this.currentMonth || this.disabled); };
    NgbDatepickerDayView.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: '[ngbDatepickerDayView]',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    styles: ["\n    :host {\n      text-align: center;\n      width: 2rem;\n      height: 2rem;\n      line-height: 2rem;\n      border-radius: 0.25rem;\n      background: transparent;\n    }\n    :host.outside {\n      opacity: 0.5;\n    }\n  "],
                    host: {
                        'class': 'btn-light',
                        '[class.bg-primary]': 'selected',
                        '[class.text-white]': 'selected',
                        '[class.text-muted]': 'isMuted()',
                        '[class.outside]': 'isMuted()',
                        '[class.active]': 'focused'
                    },
                    template: "{{ date.day }}"
                },] },
    ];
    /** @nocollapse */
    NgbDatepickerDayView.ctorParameters = function () { return []; };
    NgbDatepickerDayView.propDecorators = {
        "currentMonth": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "date": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "focused": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "selected": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return NgbDatepickerDayView;
}());

//# sourceMappingURL=datepicker-day-view.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-day-view.ngfactory.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-day-view.ngfactory.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./datepicker-day-view */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-day-view.js");
var styles_NgbDatepickerDayView = ["[_nghost-%COMP%] {\n      text-align: center;\n      width: 2rem;\n      height: 2rem;\n      line-height: 2rem;\n      border-radius: 0.25rem;\n      background: transparent;\n    }\n    .outside[_nghost-%COMP%] {\n      opacity: 0.5;\n    }"];
var RenderType_NgbDatepickerDayView = i0.ɵcrt({ encapsulation: 0, styles: styles_NgbDatepickerDayView, data: {} });
exports.RenderType_NgbDatepickerDayView = RenderType_NgbDatepickerDayView;
function View_NgbDatepickerDayView_0(_l) { return i0.ɵvid(2, [(_l()(), i0.ɵted(0, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.date.day; _ck(_v, 0, 0, currVal_0); }); }
exports.View_NgbDatepickerDayView_0 = View_NgbDatepickerDayView_0;
function View_NgbDatepickerDayView_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["class", "btn-light"], ["ngbDatepickerDayView", ""]], [[2, "bg-primary", null], [2, "text-white", null], [2, "text-muted", null], [2, "outside", null], [2, "active", null]], null, null, View_NgbDatepickerDayView_0, RenderType_NgbDatepickerDayView)), i0.ɵdid(1, 49152, null, 0, i1.NgbDatepickerDayView, [], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).selected; var currVal_1 = i0.ɵnov(_v, 1).selected; var currVal_2 = i0.ɵnov(_v, 1).isMuted(); var currVal_3 = i0.ɵnov(_v, 1).isMuted(); var currVal_4 = i0.ɵnov(_v, 1).focused; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4); }); }
exports.View_NgbDatepickerDayView_Host_0 = View_NgbDatepickerDayView_Host_0;
var NgbDatepickerDayViewNgFactory = i0.ɵccf("[ngbDatepickerDayView]", i1.NgbDatepickerDayView, View_NgbDatepickerDayView_Host_0, { currentMonth: "currentMonth", date: "date", disabled: "disabled", focused: "focused", selected: "selected" }, {}, []);
exports.NgbDatepickerDayViewNgFactory = NgbDatepickerDayViewNgFactory;


/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n.js ***!
  \*******************************************************************************/
/*! exports provided: NgbDatepickerI18n, NgbDatepickerI18nDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerI18n", function() { return NgbDatepickerI18n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerI18nDefault", function() { return NgbDatepickerI18nDefault; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var WEEKDAYS_SHORT = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
var MONTHS_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var MONTHS_FULL = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November',
    'December'
];
/**
 * Type of the service supplying month and weekday names to to NgbDatepicker component.
 * See the i18n demo for how to extend this class and define a custom provider for i18n.
 */
var NgbDatepickerI18n = (function () {
    function NgbDatepickerI18n() {
    }
    NgbDatepickerI18n.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    NgbDatepickerI18n.ctorParameters = function () { return []; };
    return NgbDatepickerI18n;
}());

var NgbDatepickerI18nDefault = (function (_super) {
    __extends(NgbDatepickerI18nDefault, _super);
    function NgbDatepickerI18nDefault() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgbDatepickerI18nDefault.prototype.getWeekdayShortName = function (weekday) { return WEEKDAYS_SHORT[weekday - 1]; };
    NgbDatepickerI18nDefault.prototype.getMonthShortName = function (month) { return MONTHS_SHORT[month - 1]; };
    NgbDatepickerI18nDefault.prototype.getMonthFullName = function (month) { return MONTHS_FULL[month - 1]; };
    NgbDatepickerI18nDefault.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    NgbDatepickerI18nDefault.ctorParameters = function () { return []; };
    return NgbDatepickerI18nDefault;
}(NgbDatepickerI18n));

//# sourceMappingURL=datepicker-i18n.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-keymap-service.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-keymap-service.js ***!
  \*****************************************************************************************/
/*! exports provided: NgbDatepickerKeyMapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerKeyMapService", function() { return NgbDatepickerKeyMapService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _datepicker_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datepicker-service */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-service.js");
/* harmony import */ var _ngb_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngb-calendar */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/util */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/util.js");




var Key;
(function (Key) {
    Key[Key["Enter"] = 13] = "Enter";
    Key[Key["Space"] = 32] = "Space";
    Key[Key["PageUp"] = 33] = "PageUp";
    Key[Key["PageDown"] = 34] = "PageDown";
    Key[Key["End"] = 35] = "End";
    Key[Key["Home"] = 36] = "Home";
    Key[Key["ArrowLeft"] = 37] = "ArrowLeft";
    Key[Key["ArrowUp"] = 38] = "ArrowUp";
    Key[Key["ArrowRight"] = 39] = "ArrowRight";
    Key[Key["ArrowDown"] = 40] = "ArrowDown";
})(Key || (Key = {}));
var NgbDatepickerKeyMapService = (function () {
    function NgbDatepickerKeyMapService(_service, _calendar) {
        var _this = this;
        this._service = _service;
        this._calendar = _calendar;
        _service.model$.subscribe(function (model) {
            _this._minDate = model.minDate;
            _this._maxDate = model.maxDate;
            _this._firstViewDate = model.firstDate;
            _this._lastViewDate = model.lastDate;
        });
    }
    NgbDatepickerKeyMapService.prototype.processKey = function (event) {
        if (Key[Object(_util_util__WEBPACK_IMPORTED_MODULE_3__["toString"])(event.which)]) {
            switch (event.which) {
                case Key.PageUp:
                    this._service.focusMove(event.shiftKey ? 'y' : 'm', -1);
                    break;
                case Key.PageDown:
                    this._service.focusMove(event.shiftKey ? 'y' : 'm', 1);
                    break;
                case Key.End:
                    this._service.focus(event.shiftKey ? this._maxDate : this._lastViewDate);
                    break;
                case Key.Home:
                    this._service.focus(event.shiftKey ? this._minDate : this._firstViewDate);
                    break;
                case Key.ArrowLeft:
                    this._service.focusMove('d', -1);
                    break;
                case Key.ArrowUp:
                    this._service.focusMove('d', -this._calendar.getDaysPerWeek());
                    break;
                case Key.ArrowRight:
                    this._service.focusMove('d', 1);
                    break;
                case Key.ArrowDown:
                    this._service.focusMove('d', this._calendar.getDaysPerWeek());
                    break;
                case Key.Enter:
                case Key.Space:
                    this._service.focusSelect();
                    break;
                default:
                    return;
            }
            event.preventDefault();
            event.stopPropagation();
        }
    };
    NgbDatepickerKeyMapService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    NgbDatepickerKeyMapService.ctorParameters = function () { return [
        { type: _datepicker_service__WEBPACK_IMPORTED_MODULE_1__["NgbDatepickerService"], },
        { type: _ngb_calendar__WEBPACK_IMPORTED_MODULE_2__["NgbCalendar"], },
    ]; };
    return NgbDatepickerKeyMapService;
}());

//# sourceMappingURL=datepicker-keymap-service.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-month-view.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-month-view.js ***!
  \*************************************************************************************/
/*! exports provided: NgbDatepickerMonthView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerMonthView", function() { return NgbDatepickerMonthView; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngb_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngb-date */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date.js");
/* harmony import */ var _datepicker_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datepicker-i18n */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n.js");



var NgbDatepickerMonthView = (function () {
    function NgbDatepickerMonthView(i18n) {
        this.i18n = i18n;
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    NgbDatepickerMonthView.prototype.doSelect = function (day) {
        if (!day.context.disabled && !this.isHidden(day)) {
            this.select.emit(_ngb_date__WEBPACK_IMPORTED_MODULE_1__["NgbDate"].from(day.date));
        }
    };
    NgbDatepickerMonthView.prototype.isCollapsed = function (week) {
        return this.outsideDays === 'collapsed' && week.days[0].date.month !== this.month.number &&
            week.days[week.days.length - 1].date.month !== this.month.number;
    };
    NgbDatepickerMonthView.prototype.isHidden = function (day) {
        return (this.outsideDays === 'hidden' || this.outsideDays === 'collapsed') && this.month.number !== day.date.month;
    };
    NgbDatepickerMonthView.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-datepicker-month-view',
                    host: { 'class': 'd-block' },
                    styles: ["\n    .ngb-dp-weekday, .ngb-dp-week-number {\n      line-height: 2rem;\n    }\n    .ngb-dp-weekday {\n      color: #5bc0de;\n    }\n    .ngb-dp-week {\n        border-radius: 0.25rem;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n    }\n    .ngb-dp-weekdays {\n      border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n      border-radius: 0rem;\n    }\n    .ngb-dp-day, .ngb-dp-weekday, .ngb-dp-week-number {\n      width: 2rem;\n      height: 2rem;\n    }\n    .ngb-dp-day {\n      cursor: pointer;\n    }\n    .ngb-dp-day.disabled, .ngb-dp-day.hidden {\n      cursor: default;\n    }\n  "],
                    template: "\n    <div *ngIf=\"showWeekdays\" class=\"ngb-dp-week ngb-dp-weekdays bg-light\">\n      <div *ngIf=\"showWeekNumbers\" class=\"ngb-dp-weekday ngb-dp-showweek\"></div>\n      <div *ngFor=\"let w of month.weekdays\" class=\"ngb-dp-weekday small text-center font-italic\">\n        {{ i18n.getWeekdayShortName(w) }}\n      </div>\n    </div>\n    <ng-template ngFor let-week [ngForOf]=\"month.weeks\">\n      <div *ngIf=\"!isCollapsed(week)\" class=\"ngb-dp-week\">\n        <div *ngIf=\"showWeekNumbers\" class=\"ngb-dp-week-number small text-center font-italic text-muted\">{{ week.number }}</div>\n        <div *ngFor=\"let day of week.days\" (click)=\"doSelect(day)\" class=\"ngb-dp-day\" [class.disabled]=\"day.context.disabled\"\n         [class.hidden]=\"isHidden(day)\">\n          <ng-template [ngIf]=\"!isHidden(day)\">\n            <ng-template [ngTemplateOutlet]=\"dayTemplate\" [ngTemplateOutletContext]=\"day.context\"></ng-template>\n          </ng-template>\n        </div>\n      </div>\n    </ng-template>\n  "
                },] },
    ];
    /** @nocollapse */
    NgbDatepickerMonthView.ctorParameters = function () { return [
        { type: _datepicker_i18n__WEBPACK_IMPORTED_MODULE_2__["NgbDatepickerI18n"], },
    ]; };
    NgbDatepickerMonthView.propDecorators = {
        "dayTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "month": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "outsideDays": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "showWeekdays": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "showWeekNumbers": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "select": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return NgbDatepickerMonthView;
}());

//# sourceMappingURL=datepicker-month-view.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-month-view.ngfactory.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-month-view.ngfactory.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i2 = __webpack_require__(/*! ./datepicker-month-view */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-month-view.js");
var i3 = __webpack_require__(/*! ./datepicker-i18n */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n.js");
var styles_NgbDatepickerMonthView = [".ngb-dp-weekday[_ngcontent-%COMP%], .ngb-dp-week-number[_ngcontent-%COMP%] {\n      line-height: 2rem;\n    }\n    .ngb-dp-weekday[_ngcontent-%COMP%] {\n      color: #5bc0de;\n    }\n    .ngb-dp-week[_ngcontent-%COMP%] {\n        border-radius: 0.25rem;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n    }\n    .ngb-dp-weekdays[_ngcontent-%COMP%] {\n      border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n      border-radius: 0rem;\n    }\n    .ngb-dp-day[_ngcontent-%COMP%], .ngb-dp-weekday[_ngcontent-%COMP%], .ngb-dp-week-number[_ngcontent-%COMP%] {\n      width: 2rem;\n      height: 2rem;\n    }\n    .ngb-dp-day[_ngcontent-%COMP%] {\n      cursor: pointer;\n    }\n    .ngb-dp-day.disabled[_ngcontent-%COMP%], .ngb-dp-day.hidden[_ngcontent-%COMP%] {\n      cursor: default;\n    }"];
var RenderType_NgbDatepickerMonthView = i0.ɵcrt({ encapsulation: 0, styles: styles_NgbDatepickerMonthView, data: {} });
exports.RenderType_NgbDatepickerMonthView = RenderType_NgbDatepickerMonthView;
function View_NgbDatepickerMonthView_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 0, "div", [["class", "ngb-dp-weekday ngb-dp-showweek"]], null, null, null, null, null))], null, null); }
function View_NgbDatepickerMonthView_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["class", "ngb-dp-weekday small text-center font-italic"]], null, null, null, null, null)), (_l()(), i0.ɵted(1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.i18n.getWeekdayShortName(_v.context.$implicit); _ck(_v, 1, 0, currVal_0); }); }
function View_NgbDatepickerMonthView_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "div", [["class", "ngb-dp-week ngb-dp-weekdays bg-light"]], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbDatepickerMonthView_2)), i0.ɵdid(2, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbDatepickerMonthView_3)), i0.ɵdid(4, 802816, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.showWeekNumbers; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.month.weekdays; _ck(_v, 4, 0, currVal_1); }, null); }
function View_NgbDatepickerMonthView_6(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["class", "ngb-dp-week-number small text-center font-italic text-muted"]], null, null, null, null, null)), (_l()(), i0.ɵted(1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.parent.context.$implicit.number; _ck(_v, 1, 0, currVal_0); }); }
function View_NgbDatepickerMonthView_9(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_NgbDatepickerMonthView_8(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbDatepickerMonthView_9)), i0.ɵdid(1, 540672, null, 0, i1.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), (_l()(), i0.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _v.parent.context.$implicit.context; var currVal_1 = _co.dayTemplate; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_NgbDatepickerMonthView_7(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "div", [["class", "ngb-dp-day"]], [[2, "disabled", null], [2, "hidden", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.doSelect(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbDatepickerMonthView_8)), i0.ɵdid(2, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = !_co.isHidden(_v.context.$implicit); _ck(_v, 2, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _v.context.$implicit.context.disabled; var currVal_1 = _co.isHidden(_v.context.$implicit); _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_NgbDatepickerMonthView_5(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "div", [["class", "ngb-dp-week"]], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbDatepickerMonthView_6)), i0.ɵdid(2, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbDatepickerMonthView_7)), i0.ɵdid(4, 802816, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.showWeekNumbers; _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.parent.context.$implicit.days; _ck(_v, 4, 0, currVal_1); }, null); }
function View_NgbDatepickerMonthView_4(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbDatepickerMonthView_5)), i0.ɵdid(1, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.isCollapsed(_v.context.$implicit); _ck(_v, 1, 0, currVal_0); }, null); }
function View_NgbDatepickerMonthView_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbDatepickerMonthView_1)), i0.ɵdid(1, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbDatepickerMonthView_4)), i0.ɵdid(3, 802816, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.showWeekdays; _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.month.weeks; _ck(_v, 3, 0, currVal_1); }, null); }
exports.View_NgbDatepickerMonthView_0 = View_NgbDatepickerMonthView_0;
function View_NgbDatepickerMonthView_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ngb-datepicker-month-view", [["class", "d-block"]], null, null, null, View_NgbDatepickerMonthView_0, RenderType_NgbDatepickerMonthView)), i0.ɵdid(1, 49152, null, 0, i2.NgbDatepickerMonthView, [i3.NgbDatepickerI18n], null, null)], null, null); }
exports.View_NgbDatepickerMonthView_Host_0 = View_NgbDatepickerMonthView_Host_0;
var NgbDatepickerMonthViewNgFactory = i0.ɵccf("ngb-datepicker-month-view", i2.NgbDatepickerMonthView, View_NgbDatepickerMonthView_Host_0, { dayTemplate: "dayTemplate", month: "month", outsideDays: "outsideDays", showWeekdays: "showWeekdays", showWeekNumbers: "showWeekNumbers" }, { select: "select" }, []);
exports.NgbDatepickerMonthViewNgFactory = NgbDatepickerMonthViewNgFactory;


/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-navigation-select.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-navigation-select.js ***!
  \********************************************************************************************/
/*! exports provided: NgbDatepickerNavigationSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerNavigationSelect", function() { return NgbDatepickerNavigationSelect; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngb_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngb-date */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/util */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/util.js");
/* harmony import */ var _datepicker_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datepicker-i18n */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n.js");




var NgbDatepickerNavigationSelect = (function () {
    function NgbDatepickerNavigationSelect(i18n) {
        this.i18n = i18n;
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    NgbDatepickerNavigationSelect.prototype.changeMonth = function (month) { this.select.emit(new _ngb_date__WEBPACK_IMPORTED_MODULE_1__["NgbDate"](this.date.year, Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["toInteger"])(month), 1)); };
    NgbDatepickerNavigationSelect.prototype.changeYear = function (year) { this.select.emit(new _ngb_date__WEBPACK_IMPORTED_MODULE_1__["NgbDate"](Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["toInteger"])(year), this.date.month, 1)); };
    NgbDatepickerNavigationSelect.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-datepicker-navigation-select',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    styles: ["\n    :host>select {\n      /* to align with btn-sm */\n      padding: 0.25rem 0.5rem;\n      font-size: 0.875rem;\n      line-height: 1.25;\n      /* to cancel the custom height set by custom-select */\n      height: inherit;\n      width: 50%;\n      display: inline-block;\n    }\n  "],
                    template: "\n    <select\n      [disabled]=\"disabled\"\n      class=\"custom-select\"\n      [value]=\"date?.month\"\n      (change)=\"changeMonth($event.target.value)\"\n      tabindex=\"-1\">\n        <option *ngFor=\"let m of months\" [value]=\"m\">{{ i18n.getMonthShortName(m) }}</option>\n    </select><select\n      [disabled]=\"disabled\"\n      class=\"custom-select\"\n      [value]=\"date?.year\"\n      (change)=\"changeYear($event.target.value)\"\n      tabindex=\"-1\">\n        <option *ngFor=\"let y of years\" [value]=\"y\">{{ y }}</option>\n    </select>\n  "
                },] },
    ];
    /** @nocollapse */
    NgbDatepickerNavigationSelect.ctorParameters = function () { return [
        { type: _datepicker_i18n__WEBPACK_IMPORTED_MODULE_3__["NgbDatepickerI18n"], },
    ]; };
    NgbDatepickerNavigationSelect.propDecorators = {
        "date": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "months": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "years": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "select": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return NgbDatepickerNavigationSelect;
}());

//# sourceMappingURL=datepicker-navigation-select.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-navigation-select.ngfactory.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-navigation-select.ngfactory.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i3 = __webpack_require__(/*! ./datepicker-navigation-select */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-navigation-select.js");
var i4 = __webpack_require__(/*! ./datepicker-i18n */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n.js");
var styles_NgbDatepickerNavigationSelect = ["[_nghost-%COMP%] > select[_ngcontent-%COMP%] {\n      \n      padding: 0.25rem 0.5rem;\n      font-size: 0.875rem;\n      line-height: 1.25;\n      \n      height: inherit;\n      width: 50%;\n      display: inline-block;\n    }"];
var RenderType_NgbDatepickerNavigationSelect = i0.ɵcrt({ encapsulation: 0, styles: styles_NgbDatepickerNavigationSelect, data: {} });
exports.RenderType_NgbDatepickerNavigationSelect = RenderType_NgbDatepickerNavigationSelect;
function View_NgbDatepickerNavigationSelect_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "option", [], null, null, null, null, null)), i0.ɵdid(1, 147456, null, 0, i1.NgSelectOption, [i0.ElementRef, i0.Renderer2, [8, null]], { value: [0, "value"] }, null), i0.ɵdid(2, 147456, null, 0, i1.ɵangular_packages_forms_forms_r, [i0.ElementRef, i0.Renderer2, [8, null]], { value: [0, "value"] }, null), (_l()(), i0.ɵted(3, null, ["", ""]))], function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0); var currVal_1 = _v.context.$implicit; _ck(_v, 2, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.i18n.getMonthShortName(_v.context.$implicit); _ck(_v, 3, 0, currVal_2); }); }
function View_NgbDatepickerNavigationSelect_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "option", [], null, null, null, null, null)), i0.ɵdid(1, 147456, null, 0, i1.NgSelectOption, [i0.ElementRef, i0.Renderer2, [8, null]], { value: [0, "value"] }, null), i0.ɵdid(2, 147456, null, 0, i1.ɵangular_packages_forms_forms_r, [i0.ElementRef, i0.Renderer2, [8, null]], { value: [0, "value"] }, null), (_l()(), i0.ɵted(3, null, ["", ""]))], function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0); var currVal_1 = _v.context.$implicit; _ck(_v, 2, 0, currVal_1); }, function (_ck, _v) { var currVal_2 = _v.context.$implicit; _ck(_v, 3, 0, currVal_2); }); }
function View_NgbDatepickerNavigationSelect_0(_l) { return i0.ɵvid(2, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "select", [["class", "custom-select"], ["tabindex", "-1"]], [[8, "disabled", 0], [8, "value", 0]], [[null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_co.changeMonth($event.target.value) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbDatepickerNavigationSelect_1)), i0.ɵdid(2, 802816, null, 0, i2.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵeld(3, 0, null, null, 2, "select", [["class", "custom-select"], ["tabindex", "-1"]], [[8, "disabled", 0], [8, "value", 0]], [[null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_co.changeYear($event.target.value) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbDatepickerNavigationSelect_2)), i0.ɵdid(5, 802816, null, 0, i2.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.months; _ck(_v, 2, 0, currVal_2); var currVal_5 = _co.years; _ck(_v, 5, 0, currVal_5); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.disabled; var currVal_1 = ((_co.date == null) ? null : _co.date.month); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_3 = _co.disabled; var currVal_4 = ((_co.date == null) ? null : _co.date.year); _ck(_v, 3, 0, currVal_3, currVal_4); }); }
exports.View_NgbDatepickerNavigationSelect_0 = View_NgbDatepickerNavigationSelect_0;
function View_NgbDatepickerNavigationSelect_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ngb-datepicker-navigation-select", [], null, null, null, View_NgbDatepickerNavigationSelect_0, RenderType_NgbDatepickerNavigationSelect)), i0.ɵdid(1, 49152, null, 0, i3.NgbDatepickerNavigationSelect, [i4.NgbDatepickerI18n], null, null)], null, null); }
exports.View_NgbDatepickerNavigationSelect_Host_0 = View_NgbDatepickerNavigationSelect_Host_0;
var NgbDatepickerNavigationSelectNgFactory = i0.ɵccf("ngb-datepicker-navigation-select", i3.NgbDatepickerNavigationSelect, View_NgbDatepickerNavigationSelect_Host_0, { date: "date", disabled: "disabled", months: "months", years: "years" }, { select: "select" }, []);
exports.NgbDatepickerNavigationSelectNgFactory = NgbDatepickerNavigationSelectNgFactory;


/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-navigation.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-navigation.js ***!
  \*************************************************************************************/
/*! exports provided: NgbDatepickerNavigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerNavigation", function() { return NgbDatepickerNavigation; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _datepicker_view_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datepicker-view-model */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-view-model.js");
/* harmony import */ var _ngb_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngb-date */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date.js");
/* harmony import */ var _datepicker_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datepicker-i18n */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n.js");




// The -ms- and -webkit- element for the CSS can be removed if we are generating the CSS using SASS.
var NgbDatepickerNavigation = (function () {
    function NgbDatepickerNavigation(i18n) {
        this.i18n = i18n;
        this.navigation = _datepicker_view_model__WEBPACK_IMPORTED_MODULE_1__["NavigationEvent"];
        this.months = [];
        this.navigate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    NgbDatepickerNavigation.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-datepicker-navigation',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    styles: ["\n    :host {\n      height: 2rem;\n      line-height: 1.85rem;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n    }\n    .ngb-dp-navigation-chevron::before {\n      border-style: solid;\n      border-width: 0.2em 0.2em 0 0;\n      content: '';\n      display: inline-block;\n      width: 0.75em;\n      height: 0.75em;\n      transform: rotate(-135deg);\n      -webkit-transform: rotate(-135deg);\n      -ms-transform: rotate(-135deg);\n    }\n    .right .ngb-dp-navigation-chevron:before {\n      -webkit-transform: rotate(45deg);\n      -ms-transform: rotate(45deg);\n      transform: rotate(45deg);\n    }\n    .ngb-dp-arrow {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-flex: 1 1 auto;\n      -ms-flex: 1 1 auto;\n      flex-basis: auto;\n      flex-grow: 1;\n      padding-right: 0px;\n      padding-left: 0px;\n      margin: 0px;\n      width: 2rem;\n      height: 2rem;\n    }\n    .ngb-dp-arrow.right {\n      -webkit-box-pack: end;\n      -ms-flex-pack: end;\n      justify-content: flex-end;\n    }\n    .ngb-dp-arrow-btn {\n      padding: 0rem 1rem;\n    }\n    .ngb-dp-month-name {\n      font-size: larger;\n      height: 2rem;\n      line-height: 2rem;\n      text-align: center;\n    }\n    .ngb-dp-navigation-select {\n      -webkit-box-flex: 1 1 9rem;\n      -ms-flex:  1 1 9rem;\n      flex-grow: 1;\n      flex-basis: 9rem;\n    }\n  "],
                    template: "\n  <div class=\"ngb-dp-arrow\">\n    <button type=\"button\" class=\"btn btn-link ngb-dp-arrow-btn\"\n            (click)=\"!!navigate.emit(navigation.PREV)\" [disabled]=\"prevDisabled\" tabindex=\"-1\">\n      <span class=\"ngb-dp-navigation-chevron\"></span>\n    </button>\n  </div>\n    <ngb-datepicker-navigation-select *ngIf=\"showSelect\" class=\"d-block ngb-dp-navigation-select\"\n      [date]=\"date\"\n      [disabled] = \"disabled\"\n      [months]=\"selectBoxes.months\"\n      [years]=\"selectBoxes.years\"\n      (select)=\"select.emit($event)\">\n    </ngb-datepicker-navigation-select>\n\n    <ng-template *ngIf=\"!showSelect\" ngFor let-month [ngForOf]=\"months\" let-i=\"index\">\n      <div class=\"ngb-dp-arrow\" *ngIf=\"i > 0\"></div>\n      <div class=\"ngb-dp-month-name d-block\">\n        {{ i18n.getMonthFullName(month.number) }} {{ month.year }}\n      </div>\n      <div class=\"ngb-dp-arrow\" *ngIf=\"i !== months.length - 1\"></div>\n    </ng-template>\n    <div class=\"ngb-dp-arrow right\">\n    <button type=\"button\" class=\"btn btn-link ngb-dp-arrow-btn\"\n            (click)=\"!!navigate.emit(navigation.NEXT)\" [disabled]=\"nextDisabled\" tabindex=\"-1\">\n      <span class=\"ngb-dp-navigation-chevron\"></span>\n    </button>\n    </div>\n    "
                },] },
    ];
    /** @nocollapse */
    NgbDatepickerNavigation.ctorParameters = function () { return [
        { type: _datepicker_i18n__WEBPACK_IMPORTED_MODULE_3__["NgbDatepickerI18n"], },
    ]; };
    NgbDatepickerNavigation.propDecorators = {
        "date": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "months": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "showSelect": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "prevDisabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "nextDisabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "selectBoxes": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "navigate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "select": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return NgbDatepickerNavigation;
}());

//# sourceMappingURL=datepicker-navigation.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-navigation.ngfactory.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-navigation.ngfactory.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./datepicker-navigation-select.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-navigation-select.ngfactory.js");
var i2 = __webpack_require__(/*! ./datepicker-navigation-select */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-navigation-select.js");
var i3 = __webpack_require__(/*! ./datepicker-i18n */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n.js");
var i4 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i5 = __webpack_require__(/*! ./datepicker-navigation */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-navigation.js");
var styles_NgbDatepickerNavigation = ["[_nghost-%COMP%] {\n      height: 2rem;\n      line-height: 1.85rem;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n    }\n    .ngb-dp-navigation-chevron[_ngcontent-%COMP%]::before {\n      border-style: solid;\n      border-width: 0.2em 0.2em 0 0;\n      content: '';\n      display: inline-block;\n      width: 0.75em;\n      height: 0.75em;\n      transform: rotate(-135deg);\n      -webkit-transform: rotate(-135deg);\n      -ms-transform: rotate(-135deg);\n    }\n    .right[_ngcontent-%COMP%]   .ngb-dp-navigation-chevron[_ngcontent-%COMP%]:before {\n      -webkit-transform: rotate(45deg);\n      -ms-transform: rotate(45deg);\n      transform: rotate(45deg);\n    }\n    .ngb-dp-arrow[_ngcontent-%COMP%] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-flex: 1 1 auto;\n      -ms-flex: 1 1 auto;\n      flex-basis: auto;\n      flex-grow: 1;\n      padding-right: 0px;\n      padding-left: 0px;\n      margin: 0px;\n      width: 2rem;\n      height: 2rem;\n    }\n    .ngb-dp-arrow.right[_ngcontent-%COMP%] {\n      -webkit-box-pack: end;\n      -ms-flex-pack: end;\n      justify-content: flex-end;\n    }\n    .ngb-dp-arrow-btn[_ngcontent-%COMP%] {\n      padding: 0rem 1rem;\n    }\n    .ngb-dp-month-name[_ngcontent-%COMP%] {\n      font-size: larger;\n      height: 2rem;\n      line-height: 2rem;\n      text-align: center;\n    }\n    .ngb-dp-navigation-select[_ngcontent-%COMP%] {\n      -webkit-box-flex: 1 1 9rem;\n      -ms-flex:  1 1 9rem;\n      flex-grow: 1;\n      flex-basis: 9rem;\n    }"];
var RenderType_NgbDatepickerNavigation = i0.ɵcrt({ encapsulation: 0, styles: styles_NgbDatepickerNavigation, data: {} });
exports.RenderType_NgbDatepickerNavigation = RenderType_NgbDatepickerNavigation;
function View_NgbDatepickerNavigation_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ngb-datepicker-navigation-select", [["class", "d-block ngb-dp-navigation-select"]], null, [[null, "select"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("select" === en)) {
        var pd_0 = (_co.select.emit($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i1.View_NgbDatepickerNavigationSelect_0, i1.RenderType_NgbDatepickerNavigationSelect)), i0.ɵdid(1, 49152, null, 0, i2.NgbDatepickerNavigationSelect, [i3.NgbDatepickerI18n], { date: [0, "date"], disabled: [1, "disabled"], months: [2, "months"], years: [3, "years"] }, { select: "select" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.date; var currVal_1 = _co.disabled; var currVal_2 = _co.selectBoxes.months; var currVal_3 = _co.selectBoxes.years; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3); }, null); }
function View_NgbDatepickerNavigation_4(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 0, "div", [["class", "ngb-dp-arrow"]], null, null, null, null, null))], null, null); }
function View_NgbDatepickerNavigation_5(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 0, "div", [["class", "ngb-dp-arrow"]], null, null, null, null, null))], null, null); }
function View_NgbDatepickerNavigation_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbDatepickerNavigation_4)), i0.ɵdid(1, 16384, null, 0, i4.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵeld(2, 0, null, null, 1, "div", [["class", "ngb-dp-month-name d-block"]], null, null, null, null, null)), (_l()(), i0.ɵted(3, null, [" ", " ", " "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbDatepickerNavigation_5)), i0.ɵdid(5, 16384, null, 0, i4.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_v.context.index > 0); _ck(_v, 1, 0, currVal_0); var currVal_3 = (_v.context.index !== (_co.months.length - 1)); _ck(_v, 5, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.i18n.getMonthFullName(_v.context.$implicit.number); var currVal_2 = _v.context.$implicit.year; _ck(_v, 3, 0, currVal_1, currVal_2); }); }
function View_NgbDatepickerNavigation_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbDatepickerNavigation_3)), i0.ɵdid(1, 802816, null, 0, i4.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.months; _ck(_v, 1, 0, currVal_0); }, null); }
function View_NgbDatepickerNavigation_0(_l) { return i0.ɵvid(2, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "div", [["class", "ngb-dp-arrow"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 1, "button", [["class", "btn btn-link ngb-dp-arrow-btn"], ["tabindex", "-1"], ["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (!!_co.navigate.emit(_co.navigation.PREV) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵeld(2, 0, null, null, 0, "span", [["class", "ngb-dp-navigation-chevron"]], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbDatepickerNavigation_1)), i0.ɵdid(4, 16384, null, 0, i4.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbDatepickerNavigation_2)), i0.ɵdid(6, 16384, null, 0, i4.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵeld(7, 0, null, null, 2, "div", [["class", "ngb-dp-arrow right"]], null, null, null, null, null)), (_l()(), i0.ɵeld(8, 0, null, null, 1, "button", [["class", "btn btn-link ngb-dp-arrow-btn"], ["tabindex", "-1"], ["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (!!_co.navigate.emit(_co.navigation.NEXT) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵeld(9, 0, null, null, 0, "span", [["class", "ngb-dp-navigation-chevron"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.showSelect; _ck(_v, 4, 0, currVal_1); var currVal_2 = !_co.showSelect; _ck(_v, 6, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.prevDisabled; _ck(_v, 1, 0, currVal_0); var currVal_3 = _co.nextDisabled; _ck(_v, 8, 0, currVal_3); }); }
exports.View_NgbDatepickerNavigation_0 = View_NgbDatepickerNavigation_0;
function View_NgbDatepickerNavigation_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ngb-datepicker-navigation", [], null, null, null, View_NgbDatepickerNavigation_0, RenderType_NgbDatepickerNavigation)), i0.ɵdid(1, 49152, null, 0, i5.NgbDatepickerNavigation, [i3.NgbDatepickerI18n], null, null)], null, null); }
exports.View_NgbDatepickerNavigation_Host_0 = View_NgbDatepickerNavigation_Host_0;
var NgbDatepickerNavigationNgFactory = i0.ɵccf("ngb-datepicker-navigation", i5.NgbDatepickerNavigation, View_NgbDatepickerNavigation_Host_0, { date: "date", disabled: "disabled", months: "months", showSelect: "showSelect", prevDisabled: "prevDisabled", nextDisabled: "nextDisabled", selectBoxes: "selectBoxes" }, { navigate: "navigate", select: "select" }, []);
exports.NgbDatepickerNavigationNgFactory = NgbDatepickerNavigationNgFactory;


/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-service.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-service.js ***!
  \**********************************************************************************/
/*! exports provided: NgbDatepickerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerService", function() { return NgbDatepickerService; });
/* harmony import */ var _ngb_calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngb-calendar */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar.js");
/* harmony import */ var _ngb_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngb-date */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/util */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/util.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _datepicker_tools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datepicker-tools */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-tools.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__);







var NgbDatepickerService = (function () {
    function NgbDatepickerService(_calendar) {
        this._calendar = _calendar;
        this._model$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._select$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._state = {
            disabled: false,
            displayMonths: 1,
            firstDayOfWeek: 1,
            focusVisible: false,
            months: [],
            navigation: 'select',
            prevDisabled: false,
            nextDisabled: false,
            selectBoxes: { years: [], months: [] },
            selectedDate: null
        };
    }
    Object.defineProperty(NgbDatepickerService.prototype, "model$", {
        get: function () {
            return rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"].call(this._model$.asObservable(), function (model) { return model.months.length > 0; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "select$", {
        get: function () { return rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"].call(this._select$.asObservable(), function (date) { return date !== null; }); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "disabled", {
        set: function (disabled) {
            if (this._state.disabled !== disabled) {
                this._nextState({ disabled: disabled });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "displayMonths", {
        set: function (displayMonths) {
            displayMonths = Object(_util_util__WEBPACK_IMPORTED_MODULE_3__["toInteger"])(displayMonths);
            if (Object(_util_util__WEBPACK_IMPORTED_MODULE_3__["isInteger"])(displayMonths) && displayMonths > 0 && this._state.displayMonths !== displayMonths) {
                this._nextState({ displayMonths: displayMonths });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "firstDayOfWeek", {
        set: function (firstDayOfWeek) {
            firstDayOfWeek = Object(_util_util__WEBPACK_IMPORTED_MODULE_3__["toInteger"])(firstDayOfWeek);
            if (Object(_util_util__WEBPACK_IMPORTED_MODULE_3__["isInteger"])(firstDayOfWeek) && firstDayOfWeek >= 0 && this._state.firstDayOfWeek !== firstDayOfWeek) {
                this._nextState({ firstDayOfWeek: firstDayOfWeek });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "focusVisible", {
        set: function (focusVisible) {
            if (this._state.focusVisible !== focusVisible && !this._state.disabled) {
                this._nextState({ focusVisible: focusVisible });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "maxDate", {
        set: function (date) {
            var maxDate = this.toValidDate(date, null);
            if (Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["isChangedDate"])(this._state.maxDate, maxDate)) {
                this._nextState({ maxDate: maxDate });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "markDisabled", {
        set: function (markDisabled) {
            if (this._state.markDisabled !== markDisabled) {
                this._nextState({ markDisabled: markDisabled });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "minDate", {
        set: function (date) {
            var minDate = this.toValidDate(date, null);
            if (Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["isChangedDate"])(this._state.minDate, minDate)) {
                this._nextState({ minDate: minDate });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbDatepickerService.prototype, "navigation", {
        set: function (navigation) {
            if (this._state.navigation !== navigation) {
                this._nextState({ navigation: navigation });
            }
        },
        enumerable: true,
        configurable: true
    });
    NgbDatepickerService.prototype.focus = function (date) {
        if (!this._state.disabled && this._calendar.isValid(date) && Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["isChangedDate"])(this._state.focusDate, date)) {
            this._nextState({ focusDate: date });
        }
    };
    NgbDatepickerService.prototype.focusMove = function (period, number) {
        this.focus(this._calendar.getNext(this._state.focusDate, period, number));
    };
    NgbDatepickerService.prototype.focusSelect = function () {
        if (Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["isDateSelectable"])(this._state.focusDate, this._state)) {
            this.select(this._state.focusDate, { emitEvent: true });
        }
    };
    NgbDatepickerService.prototype.open = function (date) {
        var firstDate = this.toValidDate(date, this._calendar.getToday());
        if (!this._state.disabled) {
            this._nextState({ firstDate: firstDate });
        }
    };
    NgbDatepickerService.prototype.select = function (date, options) {
        if (options === void 0) { options = {}; }
        var selectedDate = this.toValidDate(date, null);
        if (!this._state.disabled) {
            if (Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["isChangedDate"])(this._state.selectedDate, selectedDate)) {
                this._nextState({ selectedDate: selectedDate });
            }
            if (options.emitEvent && Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["isDateSelectable"])(selectedDate, this._state)) {
                this._select$.next(selectedDate);
            }
        }
    };
    NgbDatepickerService.prototype.toValidDate = function (date, defaultValue) {
        var ngbDate = _ngb_date__WEBPACK_IMPORTED_MODULE_1__["NgbDate"].from(date);
        if (defaultValue === undefined) {
            defaultValue = this._calendar.getToday();
        }
        return this._calendar.isValid(ngbDate) ? ngbDate : defaultValue;
    };
    NgbDatepickerService.prototype._nextState = function (patch) {
        var newState = this._updateState(patch);
        this._patchContexts(newState);
        this._state = newState;
        this._model$.next(this._state);
    };
    NgbDatepickerService.prototype._patchContexts = function (state) {
        state.months.forEach(function (month) {
            month.weeks.forEach(function (week) {
                week.days.forEach(function (day) {
                    // patch focus flag
                    if (state.focusDate) {
                        day.context.focused = state.focusDate.equals(day.date) && state.focusVisible;
                    }
                    // override context disabled
                    if (state.disabled === true) {
                        day.context.disabled = true;
                    }
                    // patch selection flag
                    if (state.selectedDate !== undefined) {
                        day.context.selected = state.selectedDate !== null && state.selectedDate.equals(day.date);
                    }
                });
            });
        });
    };
    NgbDatepickerService.prototype._updateState = function (patch) {
        // patching fields
        var state = Object.assign({}, this._state, patch);
        var startDate = state.firstDate;
        // min/max dates changed
        if ('minDate' in patch || 'maxDate' in patch) {
            Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["checkMinBeforeMax"])(state.minDate, state.maxDate);
            state.focusDate = Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["checkDateInRange"])(state.focusDate, state.minDate, state.maxDate);
            state.firstDate = Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["checkDateInRange"])(state.firstDate, state.minDate, state.maxDate);
            startDate = state.focusDate;
        }
        // disabled
        if ('disabled' in patch) {
            state.focusVisible = false;
        }
        // initial rebuild via 'select()'
        if ('selectedDate' in patch && this._state.months.length === 0) {
            startDate = state.selectedDate;
        }
        // focus date changed
        if ('focusDate' in patch) {
            state.focusDate = Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["checkDateInRange"])(state.focusDate, state.minDate, state.maxDate);
            startDate = state.focusDate;
            // nothing to rebuild if only focus changed and it is still visible
            if (state.months.length !== 0 && !state.focusDate.before(state.firstDate) &&
                !state.focusDate.after(state.lastDate)) {
                return state;
            }
        }
        // first date changed
        if ('firstDate' in patch) {
            state.firstDate = Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["checkDateInRange"])(state.firstDate, state.minDate, state.maxDate);
            startDate = state.firstDate;
        }
        // rebuilding months
        if (startDate) {
            var forceRebuild = 'firstDayOfWeek' in patch || 'markDisabled' in patch || 'minDate' in patch ||
                'maxDate' in patch || 'disabled' in patch;
            var months = Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["buildMonths"])(this._calendar, startDate, state, forceRebuild);
            // updating months and boundary dates
            state.months = months;
            state.firstDate = months.length > 0 ? months[0].firstDate : undefined;
            state.lastDate = months.length > 0 ? months[months.length - 1].lastDate : undefined;
            // reset selected date if 'markDisabled' returns true
            if ('selectedDate' in patch && !Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["isDateSelectable"])(state.selectedDate, state)) {
                state.selectedDate = null;
            }
            // adjusting focus after months were built
            if ('firstDate' in patch) {
                if (state.focusDate === undefined || state.focusDate.before(state.firstDate) ||
                    state.focusDate.after(state.lastDate)) {
                    state.focusDate = startDate;
                }
            }
            // adjusting months/years for the select box navigation
            var yearChanged = !this._state.firstDate || this._state.firstDate.year !== state.firstDate.year;
            var monthChanged = !this._state.firstDate || this._state.firstDate.month !== state.firstDate.month;
            if (state.navigation === 'select') {
                // years ->  boundaries (min/max were changed)
                if ('minDate' in patch || 'maxDate' in patch || state.selectBoxes.years.length === 0 || yearChanged) {
                    state.selectBoxes.years = Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["generateSelectBoxYears"])(state.focusDate, state.minDate, state.maxDate);
                }
                // months -> when current year or boundaries change
                if ('minDate' in patch || 'maxDate' in patch || state.selectBoxes.months.length === 0 || yearChanged) {
                    state.selectBoxes.months =
                        Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["generateSelectBoxMonths"])(this._calendar, state.focusDate, state.minDate, state.maxDate);
                }
            }
            else {
                state.selectBoxes = { years: [], months: [] };
            }
            // updating navigation arrows -> boundaries change (min/max) or month/year changes
            if ((state.navigation === 'arrows' || state.navigation === 'select') &&
                (monthChanged || yearChanged || 'minDate' in patch || 'maxDate' in patch || 'disabled' in patch)) {
                state.prevDisabled = state.disabled || Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["prevMonthDisabled"])(this._calendar, state.firstDate, state.minDate);
                state.nextDisabled = state.disabled || Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_5__["nextMonthDisabled"])(this._calendar, state.lastDate, state.maxDate);
            }
        }
        return state;
    };
    NgbDatepickerService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"] },
    ];
    /** @nocollapse */
    NgbDatepickerService.ctorParameters = function () { return [
        { type: _ngb_calendar__WEBPACK_IMPORTED_MODULE_0__["NgbCalendar"], },
    ]; };
    return NgbDatepickerService;
}());

//# sourceMappingURL=datepicker-service.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-tools.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-tools.js ***!
  \********************************************************************************/
/*! exports provided: isChangedDate, dateComparator, checkMinBeforeMax, checkDateInRange, isDateSelectable, generateSelectBoxMonths, generateSelectBoxYears, nextMonthDisabled, prevMonthDisabled, buildMonths, buildMonth, getFirstViewDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isChangedDate", function() { return isChangedDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateComparator", function() { return dateComparator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkMinBeforeMax", function() { return checkMinBeforeMax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkDateInRange", function() { return checkDateInRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDateSelectable", function() { return isDateSelectable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateSelectBoxMonths", function() { return generateSelectBoxMonths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateSelectBoxYears", function() { return generateSelectBoxYears; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextMonthDisabled", function() { return nextMonthDisabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prevMonthDisabled", function() { return prevMonthDisabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildMonths", function() { return buildMonths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildMonth", function() { return buildMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFirstViewDate", function() { return getFirstViewDate; });
/* harmony import */ var _ngb_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngb-date */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/util */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/util.js");


function isChangedDate(prev, next) {
    return !dateComparator(prev, next);
}
function dateComparator(prev, next) {
    return (!prev && !next) || (!!prev && !!next && prev.equals(next));
}
function checkMinBeforeMax(minDate, maxDate) {
    if (maxDate && minDate && maxDate.before(minDate)) {
        throw new Error("'maxDate' " + maxDate + " should be greater than 'minDate' " + minDate);
    }
}
function checkDateInRange(date, minDate, maxDate) {
    if (date && minDate && date.before(minDate)) {
        return _ngb_date__WEBPACK_IMPORTED_MODULE_0__["NgbDate"].from(minDate);
    }
    if (date && maxDate && date.after(maxDate)) {
        return _ngb_date__WEBPACK_IMPORTED_MODULE_0__["NgbDate"].from(maxDate);
    }
    return date;
}
function isDateSelectable(date, state) {
    var minDate = state.minDate, maxDate = state.maxDate, disabled = state.disabled, markDisabled = state.markDisabled;
    // clang-format off
    return !(!Object(_util_util__WEBPACK_IMPORTED_MODULE_1__["isDefined"])(date) ||
        disabled ||
        (markDisabled && markDisabled(date, { year: date.year, month: date.month })) ||
        (minDate && date.before(minDate)) ||
        (maxDate && date.after(maxDate)));
    // clang-format on
}
function generateSelectBoxMonths(calendar, date, minDate, maxDate) {
    if (!date) {
        return [];
    }
    var months = calendar.getMonths();
    if (minDate && date.year === minDate.year) {
        var index = months.findIndex(function (month) { return month === minDate.month; });
        months = months.slice(index);
    }
    if (maxDate && date.year === maxDate.year) {
        var index = months.findIndex(function (month) { return month === maxDate.month; });
        months = months.slice(0, index + 1);
    }
    return months;
}
function generateSelectBoxYears(date, minDate, maxDate) {
    if (!date) {
        return [];
    }
    var start = minDate && minDate.year || date.year - 10;
    var end = maxDate && maxDate.year || date.year + 10;
    return Array.from({ length: end - start + 1 }, function (e, i) { return start + i; });
}
function nextMonthDisabled(calendar, date, maxDate) {
    return maxDate && calendar.getNext(date, 'm').after(maxDate);
}
function prevMonthDisabled(calendar, date, minDate) {
    var prevDate = calendar.getPrev(date, 'm');
    return minDate && (prevDate.year === minDate.year && prevDate.month < minDate.month ||
        prevDate.year < minDate.year && minDate.month === 1);
}
function buildMonths(calendar, date, state, force) {
    var displayMonths = state.displayMonths, months = state.months;
    var newMonths = [];
    var _loop_1 = function (i) {
        var newDate = calendar.getNext(date, 'm', i);
        var index = months.findIndex(function (month) { return month.firstDate.equals(newDate); });
        if (force || index === -1) {
            newMonths.push(buildMonth(calendar, newDate, state));
        }
        else {
            newMonths.push(months[index]);
        }
    };
    for (var i = 0; i < displayMonths; i++) {
        _loop_1(i);
    }
    return newMonths;
}
function buildMonth(calendar, date, state) {
    var minDate = state.minDate, maxDate = state.maxDate, firstDayOfWeek = state.firstDayOfWeek, markDisabled = state.markDisabled;
    var month = { firstDate: null, lastDate: null, number: date.month, year: date.year, weeks: [], weekdays: [] };
    date = getFirstViewDate(calendar, date, firstDayOfWeek);
    // month has weeks
    for (var week = 0; week < calendar.getWeeksPerMonth(); week++) {
        var days = [];
        // week has days
        for (var day = 0; day < calendar.getDaysPerWeek(); day++) {
            if (week === 0) {
                month.weekdays.push(calendar.getWeekday(date));
            }
            var newDate = new _ngb_date__WEBPACK_IMPORTED_MODULE_0__["NgbDate"](date.year, date.month, date.day);
            var nextDate = calendar.getNext(newDate);
            // marking date as disabled
            var disabled = !!((minDate && newDate.before(minDate)) || (maxDate && newDate.after(maxDate)));
            if (!disabled && markDisabled) {
                disabled = markDisabled(newDate, { month: month.number, year: month.year });
            }
            // saving first date of the month
            if (month.firstDate === null && newDate.month === month.number) {
                month.firstDate = newDate;
            }
            // saving last date of the month
            if (newDate.month === month.number && nextDate.month !== month.number) {
                month.lastDate = newDate;
            }
            days.push({
                date: newDate,
                context: {
                    date: { year: newDate.year, month: newDate.month, day: newDate.day },
                    currentMonth: month.number,
                    disabled: disabled,
                    focused: false,
                    selected: false
                }
            });
            date = nextDate;
        }
        month.weeks.push({ number: calendar.getWeekNumber(days.map(function (day) { return _ngb_date__WEBPACK_IMPORTED_MODULE_0__["NgbDate"].from(day.date); }), firstDayOfWeek), days: days });
    }
    return month;
}
function getFirstViewDate(calendar, date, firstDayOfWeek) {
    var daysPerWeek = calendar.getDaysPerWeek();
    var firstMonthDate = new _ngb_date__WEBPACK_IMPORTED_MODULE_0__["NgbDate"](date.year, date.month, 1);
    var dayOfWeek = calendar.getWeekday(firstMonthDate) % daysPerWeek;
    return calendar.getPrev(firstMonthDate, 'd', (daysPerWeek + dayOfWeek - firstDayOfWeek) % daysPerWeek);
}
//# sourceMappingURL=datepicker-tools.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-view-model.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-view-model.js ***!
  \*************************************************************************************/
/*! exports provided: NavigationEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationEvent", function() { return NavigationEvent; });
// clang-format on
// clang-format on
var NavigationEvent;
// clang-format on
(function (NavigationEvent) {
    NavigationEvent[NavigationEvent["PREV"] = 0] = "PREV";
    NavigationEvent[NavigationEvent["NEXT"] = 1] = "NEXT";
})(NavigationEvent || (NavigationEvent = {}));
//# sourceMappingURL=datepicker-view-model.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker.js ***!
  \**************************************************************************/
/*! exports provided: NgbDatepicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepicker", function() { return NgbDatepicker; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "@angular/forms");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngb_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngb-calendar */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar.js");
/* harmony import */ var _ngb_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ngb-date */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date.js");
/* harmony import */ var _datepicker_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./datepicker-service */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-service.js");
/* harmony import */ var _datepicker_keymap_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datepicker-keymap-service */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-keymap-service.js");
/* harmony import */ var _datepicker_view_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./datepicker-view-model */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-view-model.js");
/* harmony import */ var _datepicker_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./datepicker-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-config.js");
/* harmony import */ var _ngb_date_adapter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ngb-date-adapter */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-adapter.js");
/* harmony import */ var _datepicker_i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./datepicker-i18n */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n.js");
/* harmony import */ var _datepicker_tools__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./datepicker-tools */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-tools.js");











var NGB_DATEPICKER_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return NgbDatepicker; }),
    multi: true
};
/**
 * A lightweight and highly configurable datepicker directive
 */
var NgbDatepicker = (function () {
    function NgbDatepicker(_keyMapService, _service, _calendar, i18n, config, _cd, _elementRef, _ngbDateAdapter) {
        var _this = this;
        this._keyMapService = _keyMapService;
        this._service = _service;
        this._calendar = _calendar;
        this.i18n = i18n;
        this._cd = _cd;
        this._elementRef = _elementRef;
        this._ngbDateAdapter = _ngbDateAdapter;
        /**
           * An event fired when navigation happens and currently displayed month changes.
           * See NgbDatepickerNavigateEvent for the payload info.
           */
        this.navigate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * An event fired when user selects a date using keyboard or mouse.
           * The payload of the event is currently selected NgbDateStruct.
           */
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onChange = function (_) { };
        this.onTouched = function () { };
        ['dayTemplate', 'displayMonths', 'firstDayOfWeek', 'markDisabled', 'minDate', 'maxDate', 'navigation',
            'outsideDays', 'showWeekdays', 'showWeekNumbers', 'startDate']
            .forEach(function (input) { return _this[input] = config[input]; });
        this._selectSubscription = _service.select$.subscribe(function (date) { _this.select.emit(date.toStruct()); });
        this._subscription = _service.model$.subscribe(function (model) {
            var newDate = model.firstDate;
            var oldDate = _this.model ? _this.model.firstDate : null;
            var newSelectedDate = model.selectedDate;
            var oldSelectedDate = _this.model ? _this.model.selectedDate : null;
            _this.model = model;
            // handling selection change
            if (Object(_datepicker_tools__WEBPACK_IMPORTED_MODULE_10__["isChangedDate"])(newSelectedDate, oldSelectedDate)) {
                _this.onTouched();
                _this.onChange(_this._ngbDateAdapter.toModel(newSelectedDate));
            }
            // emitting navigation event if the first month changes
            if (!newDate.equals(oldDate)) {
                _this.navigate.emit({
                    current: oldDate ? { year: oldDate.year, month: oldDate.month } : null,
                    next: { year: newDate.year, month: newDate.month }
                });
            }
            _cd.markForCheck();
        });
    }
    /**
     * Manually focus the datepicker
     */
    /**
       * Manually focus the datepicker
       */
    NgbDatepicker.prototype.focus = /**
       * Manually focus the datepicker
       */
    function () { this._elementRef.nativeElement.focus(); };
    /**
     * Navigates current view to provided date.
     * With default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
     * If nothing or invalid date provided calendar will open current month.
     * Use 'startDate' input as an alternative
     */
    /**
       * Navigates current view to provided date.
       * With default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
       * If nothing or invalid date provided calendar will open current month.
       * Use 'startDate' input as an alternative
       */
    NgbDatepicker.prototype.navigateTo = /**
       * Navigates current view to provided date.
       * With default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
       * If nothing or invalid date provided calendar will open current month.
       * Use 'startDate' input as an alternative
       */
    function (date) { this._service.open(_ngb_date__WEBPACK_IMPORTED_MODULE_3__["NgbDate"].from(date)); };
    NgbDatepicker.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
        this._selectSubscription.unsubscribe();
    };
    NgbDatepicker.prototype.ngOnInit = function () {
        var _this = this;
        if (this.model === undefined) {
            ['displayMonths', 'markDisabled', 'firstDayOfWeek', 'navigation', 'minDate', 'maxDate'].forEach(function (input) { return _this._service[input] = _this[input]; });
            this.navigateTo(this.startDate);
        }
    };
    NgbDatepicker.prototype.ngOnChanges = function (changes) {
        var _this = this;
        ['displayMonths', 'markDisabled', 'firstDayOfWeek', 'navigation', 'minDate', 'maxDate']
            .filter(function (input) { return input in changes; })
            .forEach(function (input) { return _this._service[input] = _this[input]; });
        if ('startDate' in changes) {
            this.navigateTo(this.startDate);
        }
    };
    NgbDatepicker.prototype.onDateSelect = function (date) {
        this._service.focus(date);
        this._service.select(date, { emitEvent: true });
    };
    NgbDatepicker.prototype.onKeyDown = function (event) { this._keyMapService.processKey(event); };
    NgbDatepicker.prototype.onNavigateDateSelect = function (date) { this._service.open(date); };
    NgbDatepicker.prototype.onNavigateEvent = function (event) {
        switch (event) {
            case _datepicker_view_model__WEBPACK_IMPORTED_MODULE_6__["NavigationEvent"].PREV:
                this._service.open(this._calendar.getPrev(this.model.firstDate, 'm', 1));
                break;
            case _datepicker_view_model__WEBPACK_IMPORTED_MODULE_6__["NavigationEvent"].NEXT:
                this._service.open(this._calendar.getNext(this.model.firstDate, 'm', 1));
                break;
        }
    };
    NgbDatepicker.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    NgbDatepicker.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    NgbDatepicker.prototype.setDisabledState = function (isDisabled) { this._service.disabled = isDisabled; };
    NgbDatepicker.prototype.showFocus = function (focusVisible) { this._service.focusVisible = focusVisible; };
    NgbDatepicker.prototype.writeValue = function (value) { this._service.select(_ngb_date__WEBPACK_IMPORTED_MODULE_3__["NgbDate"].from(this._ngbDateAdapter.fromModel(value))); };
    NgbDatepicker.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    exportAs: 'ngbDatepicker',
                    selector: 'ngb-datepicker',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    host: {
                        'tabindex': '0',
                        '[attr.tabindex]': 'model.disabled ? undefined : "0"',
                        '(blur)': 'showFocus(false)',
                        '(focus)': 'showFocus(true)',
                        '(keydown)': 'onKeyDown($event)'
                    },
                    styles: ["\n    :host {\n      border: 1px solid rgba(0, 0, 0, 0.125);\n      border-radius: 0.25rem;\n      display: inline-block;\n    }\n    .ngb-dp-month {\n      pointer-events: none;\n    }\n    .ngb-dp-header {\n      border-bottom: 0px;\n      border-radius: .25rem 0.25rem 0rem 0rem;\n      padding-top: 0.25rem;\n    }\n    ngb-datepicker-month-view {\n      pointer-events: auto;\n    }\n    .ngb-dp-month-name {\n      font-size: larger;\n      height: 2rem;\n      line-height: 2rem;\n      text-align: center;\n    }\n    /deep/ .ngb-dp-month + .ngb-dp-month > ngb-datepicker-month-view > .ngb-dp-week {\n      padding-left: 1rem;\n    }\n    /deep/ .ngb-dp-month + .ngb-dp-month > .ngb-dp-month-name {\n      padding-left: 1rem;\n    }\n    /deep/ .ngb-dp-month:last-child .ngb-dp-week {\n      padding-right: .25rem;\n    }\n    /deep/ .ngb-dp-month:first-child .ngb-dp-week {\n      padding-left: .25rem;\n    }\n    /deep/ .ngb-dp-month > ngb-datepicker-month-view > .ngb-dp-week:last-child {\n      padding-bottom: .25rem;\n    }\n    .ngb-dp-months {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n    }\n  "],
                    template: "\n    <ng-template #dt let-date=\"date\" let-currentMonth=\"currentMonth\" let-selected=\"selected\" let-disabled=\"disabled\" let-focused=\"focused\">\n      <div ngbDatepickerDayView\n        [date]=\"date\"\n        [currentMonth]=\"currentMonth\"\n        [selected]=\"selected\"\n        [disabled]=\"disabled\"\n        [focused]=\"focused\">\n      </div>\n    </ng-template>\n\n    <div class=\"ngb-dp-header bg-light\">\n      <ngb-datepicker-navigation *ngIf=\"navigation !== 'none'\"\n        [date]=\"model.firstDate\"\n        [months]=\"model.months\"\n        [disabled]=\"model.disabled\"\n        [showSelect]=\"model.navigation === 'select'\"\n        [prevDisabled]=\"model.prevDisabled\"\n        [nextDisabled]=\"model.nextDisabled\"\n        [selectBoxes]=\"model.selectBoxes\"\n        (navigate)=\"onNavigateEvent($event)\"\n        (select)=\"onNavigateDateSelect($event)\">\n      </ngb-datepicker-navigation>\n    </div>\n\n    <div class=\"ngb-dp-months\">\n      <ng-template ngFor let-month [ngForOf]=\"model.months\" let-i=\"index\">\n        <div class=\"ngb-dp-month d-block\">\n          <div *ngIf=\"navigation === 'none' || (displayMonths > 1 && navigation === 'select')\"\n                class=\"ngb-dp-month-name bg-light\">\n            {{ i18n.getMonthFullName(month.number) }} {{ month.year }}\n          </div>\n          <ngb-datepicker-month-view\n            [month]=\"month\"\n            [dayTemplate]=\"dayTemplate || dt\"\n            [showWeekdays]=\"showWeekdays\"\n            [showWeekNumbers]=\"showWeekNumbers\"\n            [outsideDays]=\"(displayMonths === 1 ? outsideDays : 'hidden')\"\n            (select)=\"onDateSelect($event)\">\n          </ngb-datepicker-month-view>\n        </div>\n      </ng-template>\n    </div>\n  ",
                    providers: [NGB_DATEPICKER_VALUE_ACCESSOR, _datepicker_service__WEBPACK_IMPORTED_MODULE_4__["NgbDatepickerService"], _datepicker_keymap_service__WEBPACK_IMPORTED_MODULE_5__["NgbDatepickerKeyMapService"]]
                },] },
    ];
    /** @nocollapse */
    NgbDatepicker.ctorParameters = function () { return [
        { type: _datepicker_keymap_service__WEBPACK_IMPORTED_MODULE_5__["NgbDatepickerKeyMapService"], },
        { type: _datepicker_service__WEBPACK_IMPORTED_MODULE_4__["NgbDatepickerService"], },
        { type: _ngb_calendar__WEBPACK_IMPORTED_MODULE_2__["NgbCalendar"], },
        { type: _datepicker_i18n__WEBPACK_IMPORTED_MODULE_9__["NgbDatepickerI18n"], },
        { type: _datepicker_config__WEBPACK_IMPORTED_MODULE_7__["NgbDatepickerConfig"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _ngb_date_adapter__WEBPACK_IMPORTED_MODULE_8__["NgbDateAdapter"], },
    ]; };
    NgbDatepicker.propDecorators = {
        "dayTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "displayMonths": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "firstDayOfWeek": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "markDisabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "maxDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "minDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "navigation": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "outsideDays": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "showWeekdays": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "showWeekNumbers": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "startDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "navigate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "select": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return NgbDatepicker;
}());

//# sourceMappingURL=datepicker.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker.ngfactory.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker.ngfactory.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./datepicker-day-view.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-day-view.ngfactory.js");
var i2 = __webpack_require__(/*! ./datepicker-day-view */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-day-view.js");
var i3 = __webpack_require__(/*! ./datepicker-navigation.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-navigation.ngfactory.js");
var i4 = __webpack_require__(/*! ./datepicker-navigation */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-navigation.js");
var i5 = __webpack_require__(/*! ./datepicker-i18n */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n.js");
var i6 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i7 = __webpack_require__(/*! ./datepicker-month-view.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-month-view.ngfactory.js");
var i8 = __webpack_require__(/*! ./datepicker-month-view */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-month-view.js");
var i9 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var i10 = __webpack_require__(/*! ./datepicker */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker.js");
var i11 = __webpack_require__(/*! ./datepicker-service */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-service.js");
var i12 = __webpack_require__(/*! ./ngb-calendar */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar.js");
var i13 = __webpack_require__(/*! ./datepicker-keymap-service */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-keymap-service.js");
var i14 = __webpack_require__(/*! ./datepicker-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker-config.js");
var i15 = __webpack_require__(/*! ./ngb-date-adapter */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-adapter.js");
var styles_NgbDatepicker = ["[_nghost-%COMP%] {\n      border: 1px solid rgba(0, 0, 0, 0.125);\n      border-radius: 0.25rem;\n      display: inline-block;\n    }\n    .ngb-dp-month[_ngcontent-%COMP%] {\n      pointer-events: none;\n    }\n    .ngb-dp-header[_ngcontent-%COMP%] {\n      border-bottom: 0px;\n      border-radius: .25rem 0.25rem 0rem 0rem;\n      padding-top: 0.25rem;\n    }\n    ngb-datepicker-month-view[_ngcontent-%COMP%] {\n      pointer-events: auto;\n    }\n    .ngb-dp-month-name[_ngcontent-%COMP%] {\n      font-size: larger;\n      height: 2rem;\n      line-height: 2rem;\n      text-align: center;\n    }\n      .ngb-dp-month + .ngb-dp-month > ngb-datepicker-month-view > .ngb-dp-week {\n      padding-left: 1rem;\n    }\n      .ngb-dp-month + .ngb-dp-month > .ngb-dp-month-name {\n      padding-left: 1rem;\n    }\n      .ngb-dp-month:last-child .ngb-dp-week {\n      padding-right: .25rem;\n    }\n      .ngb-dp-month:first-child .ngb-dp-week {\n      padding-left: .25rem;\n    }\n      .ngb-dp-month > ngb-datepicker-month-view > .ngb-dp-week:last-child {\n      padding-bottom: .25rem;\n    }\n    .ngb-dp-months[_ngcontent-%COMP%] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n    }"];
var RenderType_NgbDatepicker = i0.ɵcrt({ encapsulation: 0, styles: styles_NgbDatepicker, data: {} });
exports.RenderType_NgbDatepicker = RenderType_NgbDatepicker;
function View_NgbDatepicker_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["class", "btn-light"], ["ngbDatepickerDayView", ""]], [[2, "bg-primary", null], [2, "text-white", null], [2, "text-muted", null], [2, "outside", null], [2, "active", null]], null, null, i1.View_NgbDatepickerDayView_0, i1.RenderType_NgbDatepickerDayView)), i0.ɵdid(1, 49152, null, 0, i2.NgbDatepickerDayView, [], { currentMonth: [0, "currentMonth"], date: [1, "date"], disabled: [2, "disabled"], focused: [3, "focused"], selected: [4, "selected"] }, null)], function (_ck, _v) { var currVal_5 = _v.context.currentMonth; var currVal_6 = _v.context.date; var currVal_7 = _v.context.disabled; var currVal_8 = _v.context.focused; var currVal_9 = _v.context.selected; _ck(_v, 1, 0, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).selected; var currVal_1 = i0.ɵnov(_v, 1).selected; var currVal_2 = i0.ɵnov(_v, 1).isMuted(); var currVal_3 = i0.ɵnov(_v, 1).isMuted(); var currVal_4 = i0.ɵnov(_v, 1).focused; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4); }); }
function View_NgbDatepicker_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ngb-datepicker-navigation", [], null, [[null, "navigate"], [null, "select"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("navigate" === en)) {
        var pd_0 = (_co.onNavigateEvent($event) !== false);
        ad = (pd_0 && ad);
    } if (("select" === en)) {
        var pd_1 = (_co.onNavigateDateSelect($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, i3.View_NgbDatepickerNavigation_0, i3.RenderType_NgbDatepickerNavigation)), i0.ɵdid(1, 49152, null, 0, i4.NgbDatepickerNavigation, [i5.NgbDatepickerI18n], { date: [0, "date"], disabled: [1, "disabled"], months: [2, "months"], showSelect: [3, "showSelect"], prevDisabled: [4, "prevDisabled"], nextDisabled: [5, "nextDisabled"], selectBoxes: [6, "selectBoxes"] }, { navigate: "navigate", select: "select" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.model.firstDate; var currVal_1 = _co.model.disabled; var currVal_2 = _co.model.months; var currVal_3 = (_co.model.navigation === "select"); var currVal_4 = _co.model.prevDisabled; var currVal_5 = _co.model.nextDisabled; var currVal_6 = _co.model.selectBoxes; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }, null); }
function View_NgbDatepicker_4(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["class", "ngb-dp-month-name bg-light"]], null, null, null, null, null)), (_l()(), i0.ɵted(1, null, [" ", " ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.i18n.getMonthFullName(_v.parent.context.$implicit.number); var currVal_1 = _v.parent.context.$implicit.year; _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_NgbDatepicker_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "div", [["class", "ngb-dp-month d-block"]], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbDatepicker_4)), i0.ɵdid(2, 16384, null, 0, i6.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵeld(3, 0, null, null, 1, "ngb-datepicker-month-view", [["class", "d-block"]], null, [[null, "select"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("select" === en)) {
        var pd_0 = (_co.onDateSelect($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i7.View_NgbDatepickerMonthView_0, i7.RenderType_NgbDatepickerMonthView)), i0.ɵdid(4, 49152, null, 0, i8.NgbDatepickerMonthView, [i5.NgbDatepickerI18n], { dayTemplate: [0, "dayTemplate"], month: [1, "month"], outsideDays: [2, "outsideDays"], showWeekdays: [3, "showWeekdays"], showWeekNumbers: [4, "showWeekNumbers"] }, { select: "select" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.navigation === "none") || ((_co.displayMonths > 1) && (_co.navigation === "select"))); _ck(_v, 2, 0, currVal_0); var currVal_1 = (_co.dayTemplate || i0.ɵnov(_v.parent, 0)); var currVal_2 = _v.context.$implicit; var currVal_3 = ((_co.displayMonths === 1) ? _co.outsideDays : "hidden"); var currVal_4 = _co.showWeekdays; var currVal_5 = _co.showWeekNumbers; _ck(_v, 4, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); }, null); }
function View_NgbDatepicker_0(_l) { return i0.ɵvid(2, [(_l()(), i0.ɵand(0, [["dt", 2]], null, 0, null, View_NgbDatepicker_1)), (_l()(), i0.ɵeld(1, 0, null, null, 2, "div", [["class", "ngb-dp-header bg-light"]], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbDatepicker_2)), i0.ɵdid(3, 16384, null, 0, i6.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵeld(4, 0, null, null, 2, "div", [["class", "ngb-dp-months"]], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbDatepicker_3)), i0.ɵdid(6, 802816, null, 0, i6.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.navigation !== "none"); _ck(_v, 3, 0, currVal_0); var currVal_1 = _co.model.months; _ck(_v, 6, 0, currVal_1); }, null); }
exports.View_NgbDatepicker_0 = View_NgbDatepicker_0;
function View_NgbDatepicker_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "ngb-datepicker", [["tabindex", "0"]], [[1, "tabindex", 0]], [[null, "blur"], [null, "focus"], [null, "keydown"]], function (_v, en, $event) { var ad = true; if (("blur" === en)) {
        var pd_0 = (i0.ɵnov(_v, 4).showFocus(false) !== false);
        ad = (pd_0 && ad);
    } if (("focus" === en)) {
        var pd_1 = (i0.ɵnov(_v, 4).showFocus(true) !== false);
        ad = (pd_1 && ad);
    } if (("keydown" === en)) {
        var pd_2 = (i0.ɵnov(_v, 4).onKeyDown($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, View_NgbDatepicker_0, RenderType_NgbDatepicker)), i0.ɵprd(5120, null, i9.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i10.NgbDatepicker]), i0.ɵprd(512, null, i11.NgbDatepickerService, i11.NgbDatepickerService, [i12.NgbCalendar]), i0.ɵprd(512, null, i13.NgbDatepickerKeyMapService, i13.NgbDatepickerKeyMapService, [i11.NgbDatepickerService, i12.NgbCalendar]), i0.ɵdid(4, 770048, null, 0, i10.NgbDatepicker, [i13.NgbDatepickerKeyMapService, i11.NgbDatepickerService, i12.NgbCalendar, i5.NgbDatepickerI18n, i14.NgbDatepickerConfig, i0.ChangeDetectorRef, i0.ElementRef, i15.NgbDateAdapter], null, null)], function (_ck, _v) { _ck(_v, 4, 0); }, function (_ck, _v) { var currVal_0 = (i0.ɵnov(_v, 4).model.disabled ? undefined : "0"); _ck(_v, 0, 0, currVal_0); }); }
exports.View_NgbDatepicker_Host_0 = View_NgbDatepicker_Host_0;
var NgbDatepickerNgFactory = i0.ɵccf("ngb-datepicker", i10.NgbDatepicker, View_NgbDatepicker_Host_0, { dayTemplate: "dayTemplate", displayMonths: "displayMonths", firstDayOfWeek: "firstDayOfWeek", markDisabled: "markDisabled", maxDate: "maxDate", minDate: "minDate", navigation: "navigation", outsideDays: "outsideDays", showWeekdays: "showWeekdays", showWeekNumbers: "showWeekNumbers", startDate: "startDate" }, { navigate: "navigate", select: "select" }, []);
exports.NgbDatepickerNgFactory = NgbDatepickerNgFactory;


/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar.js ***!
  \****************************************************************************/
/*! exports provided: NgbCalendar, NgbCalendarGregorian */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCalendar", function() { return NgbCalendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbCalendarGregorian", function() { return NgbCalendarGregorian; });
/* harmony import */ var _ngb_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngb-date */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/util */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/util.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



function fromJSDate(jsDate) {
    return new _ngb_date__WEBPACK_IMPORTED_MODULE_0__["NgbDate"](jsDate.getFullYear(), jsDate.getMonth() + 1, jsDate.getDate());
}
function toJSDate(date) {
    var jsDate = new Date(date.year, date.month - 1, date.day, 12);
    // this is done avoid 30 -> 1930 conversion
    if (!isNaN(jsDate.getTime())) {
        jsDate.setFullYear(date.year);
    }
    return jsDate;
}
var NgbCalendar = (function () {
    function NgbCalendar() {
    }
    NgbCalendar.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
    ];
    /** @nocollapse */
    NgbCalendar.ctorParameters = function () { return []; };
    return NgbCalendar;
}());

var NgbCalendarGregorian = (function (_super) {
    __extends(NgbCalendarGregorian, _super);
    function NgbCalendarGregorian() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgbCalendarGregorian.prototype.getDaysPerWeek = function () { return 7; };
    NgbCalendarGregorian.prototype.getMonths = function () { return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; };
    NgbCalendarGregorian.prototype.getWeeksPerMonth = function () { return 6; };
    NgbCalendarGregorian.prototype.getNext = function (date, period, number) {
        if (period === void 0) { period = 'd'; }
        if (number === void 0) { number = 1; }
        var jsDate = toJSDate(date);
        switch (period) {
            case 'y':
                return new _ngb_date__WEBPACK_IMPORTED_MODULE_0__["NgbDate"](date.year + number, 1, 1);
            case 'm':
                jsDate = new Date(date.year, date.month + number - 1, 1, 12);
                break;
            case 'd':
                jsDate.setDate(jsDate.getDate() + number);
                break;
            default:
                return date;
        }
        return fromJSDate(jsDate);
    };
    NgbCalendarGregorian.prototype.getPrev = function (date, period, number) {
        if (period === void 0) { period = 'd'; }
        if (number === void 0) { number = 1; }
        return this.getNext(date, period, -number);
    };
    NgbCalendarGregorian.prototype.getWeekday = function (date) {
        var jsDate = toJSDate(date);
        var day = jsDate.getDay();
        // in JS Date Sun=0, in ISO 8601 Sun=7
        return day === 0 ? 7 : day;
    };
    NgbCalendarGregorian.prototype.getWeekNumber = function (week, firstDayOfWeek) {
        // in JS Date Sun=0, in ISO 8601 Sun=7
        if (firstDayOfWeek === 7) {
            firstDayOfWeek = 0;
        }
        var thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
        var date = week[thursdayIndex];
        var jsDate = toJSDate(date);
        jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7)); // Thursday
        var time = jsDate.getTime();
        jsDate.setMonth(0); // Compare with Jan 1
        jsDate.setDate(1);
        return Math.floor(Math.round((time - jsDate.getTime()) / 86400000) / 7) + 1;
    };
    NgbCalendarGregorian.prototype.getToday = function () { return fromJSDate(new Date()); };
    NgbCalendarGregorian.prototype.isValid = function (date) {
        if (!date || !Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["isInteger"])(date.year) || !Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["isInteger"])(date.month) || !Object(_util_util__WEBPACK_IMPORTED_MODULE_2__["isInteger"])(date.day)) {
            return false;
        }
        var jsDate = toJSDate(date);
        return !isNaN(jsDate.getTime()) && jsDate.getFullYear() === date.year && jsDate.getMonth() + 1 === date.month &&
            jsDate.getDate() === date.day;
    };
    NgbCalendarGregorian.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
    ];
    /** @nocollapse */
    NgbCalendarGregorian.ctorParameters = function () { return []; };
    return NgbCalendarGregorian;
}(NgbCalendar));

//# sourceMappingURL=ngb-calendar.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-adapter.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-adapter.js ***!
  \********************************************************************************/
/*! exports provided: NgbDateAdapter, NgbDateStructAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDateAdapter", function() { return NgbDateAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDateStructAdapter", function() { return NgbDateStructAdapter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * Abstract type serving as a DI token for the service converting from your application Date model to internal
 * NgbDateStruct model.
 * A default implementation converting from and to NgbDateStruct is provided for retro-compatibility,
 * but you can provide another implementation to use an alternative format, ie for using with native Date Object.
 */
var NgbDateAdapter = (function () {
    function NgbDateAdapter() {
    }
    NgbDateAdapter.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    NgbDateAdapter.ctorParameters = function () { return []; };
    return NgbDateAdapter;
}());

var NgbDateStructAdapter = (function (_super) {
    __extends(NgbDateStructAdapter, _super);
    function NgbDateStructAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Converts a NgbDateStruct value into NgbDateStruct value
     * @param  {NgbDateStruct} value
     * @return {NgbDateStruct}
     */
    /**
       * Converts a NgbDateStruct value into NgbDateStruct value
       * @param  {NgbDateStruct} value
       * @return {NgbDateStruct}
       */
    NgbDateStructAdapter.prototype.fromModel = /**
       * Converts a NgbDateStruct value into NgbDateStruct value
       * @param  {NgbDateStruct} value
       * @return {NgbDateStruct}
       */
    function (date) {
        return (date && date.year && date.month && date.day) ? { year: date.year, month: date.month, day: date.day } : null;
    };
    /**
     * Converts a NgbDateStruct value into NgbDateStruct value
     * @param  {NgbDateStruct} value
     * @return {NgbDateStruct}
     */
    /**
       * Converts a NgbDateStruct value into NgbDateStruct value
       * @param  {NgbDateStruct} value
       * @return {NgbDateStruct}
       */
    NgbDateStructAdapter.prototype.toModel = /**
       * Converts a NgbDateStruct value into NgbDateStruct value
       * @param  {NgbDateStruct} value
       * @return {NgbDateStruct}
       */
    function (date) {
        return (date && date.year && date.month && date.day) ? { year: date.year, month: date.month, day: date.day } : null;
    };
    NgbDateStructAdapter.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    NgbDateStructAdapter.ctorParameters = function () { return []; };
    return NgbDateStructAdapter;
}(NgbDateAdapter));

//# sourceMappingURL=ngb-date-adapter.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date.js ***!
  \************************************************************************/
/*! exports provided: NgbDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDate", function() { return NgbDate; });
var NgbDate = (function () {
    function NgbDate(year, month, day) {
        this.year = year;
        this.month = month;
        this.day = day;
    }
    NgbDate.from = function (date) {
        return date ? new NgbDate(date.year, date.month, date.day ? date.day : 1) : null;
    };
    NgbDate.prototype.equals = function (other) {
        return other && this.year === other.year && this.month === other.month && this.day === other.day;
    };
    NgbDate.prototype.before = function (other) {
        if (!other) {
            return false;
        }
        if (this.year === other.year) {
            if (this.month === other.month) {
                return this.day === other.day ? false : this.day < other.day;
            }
            else {
                return this.month < other.month;
            }
        }
        else {
            return this.year < other.year;
        }
    };
    NgbDate.prototype.after = function (other) {
        if (!other) {
            return false;
        }
        if (this.year === other.year) {
            if (this.month === other.month) {
                return this.day === other.day ? false : this.day > other.day;
            }
            else {
                return this.month > other.month;
            }
        }
        else {
            return this.year > other.year;
        }
    };
    NgbDate.prototype.toStruct = function () { return { year: this.year, month: this.month, day: this.day }; };
    NgbDate.prototype.toString = function () { return this.year + "-" + this.month + "-" + this.day; };
    return NgbDate;
}());

//# sourceMappingURL=ngb-date.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-backdrop.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-backdrop.js ***!
  \*************************************************************************/
/*! exports provided: NgbModalBackdrop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbModalBackdrop", function() { return NgbModalBackdrop; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var NgbModalBackdrop = (function () {
    function NgbModalBackdrop() {
    }
    NgbModalBackdrop.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-modal-backdrop',
                    template: '',
                    host: { '[class]': '"modal-backdrop fade show" + (backdropClass ? " " + backdropClass : "")' }
                },] },
    ];
    /** @nocollapse */
    NgbModalBackdrop.ctorParameters = function () { return []; };
    NgbModalBackdrop.propDecorators = {
        "backdropClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return NgbModalBackdrop;
}());

//# sourceMappingURL=modal-backdrop.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-backdrop.ngfactory.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-backdrop.ngfactory.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./modal-backdrop */ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-backdrop.js");
var styles_NgbModalBackdrop = [];
var RenderType_NgbModalBackdrop = i0.ɵcrt({ encapsulation: 2, styles: styles_NgbModalBackdrop, data: {} });
exports.RenderType_NgbModalBackdrop = RenderType_NgbModalBackdrop;
function View_NgbModalBackdrop_0(_l) { return i0.ɵvid(0, [], null, null); }
exports.View_NgbModalBackdrop_0 = View_NgbModalBackdrop_0;
function View_NgbModalBackdrop_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ngb-modal-backdrop", [], [[8, "className", 0]], null, null, View_NgbModalBackdrop_0, RenderType_NgbModalBackdrop)), i0.ɵdid(1, 49152, null, 0, i1.NgbModalBackdrop, [], null, null)], null, function (_ck, _v) { var currVal_0 = ("modal-backdrop fade show" + (i0.ɵnov(_v, 1).backdropClass ? (" " + i0.ɵnov(_v, 1).backdropClass) : "")); _ck(_v, 0, 0, currVal_0); }); }
exports.View_NgbModalBackdrop_Host_0 = View_NgbModalBackdrop_Host_0;
var NgbModalBackdropNgFactory = i0.ɵccf("ngb-modal-backdrop", i1.NgbModalBackdrop, View_NgbModalBackdrop_Host_0, { backdropClass: "backdropClass" }, {}, []);
exports.NgbModalBackdropNgFactory = NgbModalBackdropNgFactory;


/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-dismiss-reasons.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-dismiss-reasons.js ***!
  \********************************************************************************/
/*! exports provided: ModalDismissReasons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDismissReasons", function() { return ModalDismissReasons; });
var ModalDismissReasons;
(function (ModalDismissReasons) {
    ModalDismissReasons[ModalDismissReasons["BACKDROP_CLICK"] = 0] = "BACKDROP_CLICK";
    ModalDismissReasons[ModalDismissReasons["ESC"] = 1] = "ESC";
})(ModalDismissReasons || (ModalDismissReasons = {}));
//# sourceMappingURL=modal-dismiss-reasons.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-window.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-window.js ***!
  \***********************************************************************/
/*! exports provided: NgbModalWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbModalWindow", function() { return NgbModalWindow; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modal_dismiss_reasons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-dismiss-reasons */ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-dismiss-reasons.js");



var NgbModalWindow = (function () {
    function NgbModalWindow(document, _elRef, _renderer) {
        this._elRef = _elRef;
        this._renderer = _renderer;
        this.backdrop = true;
        this.keyboard = true;
        this.dismissEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._document = document;
    }
    NgbModalWindow.prototype.backdropClick = function ($event) {
        if (this.backdrop === true && this._elRef.nativeElement === $event.target) {
            this.dismiss(_modal_dismiss_reasons__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK);
        }
    };
    NgbModalWindow.prototype.escKey = function ($event) {
        if (this.keyboard && !$event.defaultPrevented) {
            this.dismiss(_modal_dismiss_reasons__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC);
        }
    };
    NgbModalWindow.prototype.dismiss = function (reason) { this.dismissEvent.emit(reason); };
    NgbModalWindow.prototype.ngOnInit = function () {
        this._elWithFocus = this._document.activeElement;
        this._renderer.addClass(this._document.body, 'modal-open');
    };
    NgbModalWindow.prototype.ngAfterViewInit = function () {
        if (!this._elRef.nativeElement.contains(document.activeElement)) {
            this._elRef.nativeElement['focus'].apply(this._elRef.nativeElement, []);
        }
    };
    NgbModalWindow.prototype.ngOnDestroy = function () {
        var body = this._document.body;
        var elWithFocus = this._elWithFocus;
        var elementToFocus;
        if (elWithFocus && elWithFocus['focus'] && body.contains(elWithFocus)) {
            elementToFocus = elWithFocus;
        }
        else {
            elementToFocus = body;
        }
        elementToFocus['focus'].apply(elementToFocus, []);
        this._elWithFocus = null;
        this._renderer.removeClass(body, 'modal-open');
    };
    NgbModalWindow.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'ngb-modal-window',
                    host: {
                        '[class]': '"modal fade show d-block" + (windowClass ? " " + windowClass : "")',
                        'role': 'dialog',
                        'tabindex': '-1',
                        '(keyup.esc)': 'escKey($event)',
                        '(click)': 'backdropClick($event)'
                    },
                    template: "\n    <div [class]=\"'modal-dialog' + (size ? ' modal-' + size : '') + (centered ? ' modal-dialog-centered' : '')\" role=\"document\">\n        <div class=\"modal-content\"><ng-content></ng-content></div>\n    </div>\n    "
                },] },
    ];
    /** @nocollapse */
    NgbModalWindow.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] },] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], },
    ]; };
    NgbModalWindow.propDecorators = {
        "backdrop": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "centered": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "keyboard": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "size": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "windowClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
        "dismissEvent": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['dismiss',] },],
    };
    return NgbModalWindow;
}());

//# sourceMappingURL=modal-window.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-window.ngfactory.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-window.ngfactory.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./modal-window */ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-window.js");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var styles_NgbModalWindow = [];
var RenderType_NgbModalWindow = i0.ɵcrt({ encapsulation: 2, styles: styles_NgbModalWindow, data: {} });
exports.RenderType_NgbModalWindow = RenderType_NgbModalWindow;
function View_NgbModalWindow_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "div", [["role", "document"]], [[8, "className", 0]], null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 1, "div", [["class", "modal-content"]], null, null, null, null, null)), i0.ɵncd(null, 0)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = (("modal-dialog" + (_co.size ? (" modal-" + _co.size) : "")) + (_co.centered ? " modal-dialog-centered" : "")); _ck(_v, 0, 0, currVal_0); }); }
exports.View_NgbModalWindow_0 = View_NgbModalWindow_0;
function View_NgbModalWindow_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ngb-modal-window", [["role", "dialog"], ["tabindex", "-1"]], [[8, "className", 0]], [[null, "keyup.esc"], [null, "click"]], function (_v, en, $event) { var ad = true; if (("keyup.esc" === en)) {
        var pd_0 = (i0.ɵnov(_v, 1).escKey($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (i0.ɵnov(_v, 1).backdropClick($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, View_NgbModalWindow_0, RenderType_NgbModalWindow)), i0.ɵdid(1, 4440064, null, 0, i1.NgbModalWindow, [i2.DOCUMENT, i0.ElementRef, i0.Renderer2], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = ("modal fade show d-block" + (i0.ɵnov(_v, 1).windowClass ? (" " + i0.ɵnov(_v, 1).windowClass) : "")); _ck(_v, 0, 0, currVal_0); }); }
exports.View_NgbModalWindow_Host_0 = View_NgbModalWindow_Host_0;
var NgbModalWindowNgFactory = i0.ɵccf("ngb-modal-window", i1.NgbModalWindow, View_NgbModalWindow_Host_0, { backdrop: "backdrop", centered: "centered", keyboard: "keyboard", size: "size", windowClass: "windowClass" }, { dismissEvent: "dismiss" }, ["*"]);
exports.NgbModalWindowNgFactory = NgbModalWindowNgFactory;


/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/popover/popover-config.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/popover/popover-config.js ***!
  \***************************************************************************/
/*! exports provided: NgbPopoverConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPopoverConfig", function() { return NgbPopoverConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Configuration service for the NgbPopover directive.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the popovers used in the application.
 */
var NgbPopoverConfig = (function () {
    function NgbPopoverConfig() {
        this.placement = 'top';
        this.triggers = 'click';
        this.disablePopover = false;
    }
    NgbPopoverConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    NgbPopoverConfig.ctorParameters = function () { return []; };
    return NgbPopoverConfig;
}());

//# sourceMappingURL=popover-config.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/popover/popover.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/popover/popover.js ***!
  \********************************************************************/
/*! exports provided: NgbPopoverWindow, NgbPopover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPopoverWindow", function() { return NgbPopoverWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbPopover", function() { return NgbPopover; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_triggers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/triggers */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/triggers.js");
/* harmony import */ var _util_positioning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/positioning */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/positioning.js");
/* harmony import */ var _util_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/popup */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/popup.js");
/* harmony import */ var _popover_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popover-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/popover/popover-config.js");





var nextId = 0;
var NgbPopoverWindow = (function () {
    function NgbPopoverWindow(_element, _renderer) {
        this._element = _element;
        this._renderer = _renderer;
        this.placement = 'top';
    }
    NgbPopoverWindow.prototype.applyPlacement = function (_placement) {
        // remove the current placement classes
        this._renderer.removeClass(this._element.nativeElement, 'bs-popover-' + this.placement.toString().split('-')[0]);
        this._renderer.removeClass(this._element.nativeElement, 'bs-popover-' + this.placement.toString());
        // set the new placement classes
        this.placement = _placement;
        // apply the new placement
        this._renderer.addClass(this._element.nativeElement, 'bs-popover-' + this.placement.toString().split('-')[0]);
        this._renderer.addClass(this._element.nativeElement, 'bs-popover-' + this.placement.toString());
    };
    NgbPopoverWindow.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-popover-window',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    host: {
                        '[class]': '"popover bs-popover-" + placement.split("-")[0]+" bs-popover-" + placement',
                        'role': 'tooltip',
                        '[id]': 'id'
                    },
                    template: "\n    <div class=\"arrow\"></div>\n    <h3 class=\"popover-header\">{{title}}</h3><div class=\"popover-body\"><ng-content></ng-content></div>",
                    styles: ["\n    :host.bs-popover-top .arrow, :host.bs-popover-bottom .arrow {\n      left: 50%;\n      margin-left: -5px;\n    }\n\n    :host.bs-popover-top-left .arrow, :host.bs-popover-bottom-left .arrow {\n      left: 2em;\n    }\n\n    :host.bs-popover-top-right .arrow, :host.bs-popover-bottom-right .arrow {\n      left: auto;\n      right: 2em;\n    }\n\n    :host.bs-popover-left .arrow, :host.bs-popover-right .arrow {\n      top: 50%;\n      margin-top: -5px;\n    }\n    \n    :host.bs-popover-left-top .arrow, :host.bs-popover-right-top .arrow {\n      top: 0.7em;\n    }\n\n    :host.bs-popover-left-bottom .arrow, :host.bs-popover-right-bottom .arrow {\n      top: auto;\n      bottom: 0.7em;\n    }\n  "]
                },] },
    ];
    /** @nocollapse */
    NgbPopoverWindow.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    ]; };
    NgbPopoverWindow.propDecorators = {
        "placement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "title": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "id": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return NgbPopoverWindow;
}());

/**
 * A lightweight, extensible directive for fancy popover creation.
 */
var NgbPopover = (function () {
    function NgbPopover(_elementRef, _renderer, injector, componentFactoryResolver, viewContainerRef, config, ngZone) {
        var _this = this;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        /**
           * Emits an event when the popover is shown
           */
        this.shown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * Emits an event when the popover is hidden
           */
        this.hidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._ngbPopoverWindowId = "ngb-popover-" + nextId++;
        this.placement = config.placement;
        this.triggers = config.triggers;
        this.container = config.container;
        this.disablePopover = config.disablePopover;
        this._popupService = new _util_popup__WEBPACK_IMPORTED_MODULE_3__["PopupService"](NgbPopoverWindow, injector, viewContainerRef, _renderer, componentFactoryResolver);
        this._zoneSubscription = ngZone.onStable.subscribe(function () {
            if (_this._windowRef) {
                _this._windowRef.instance.applyPlacement(Object(_util_positioning__WEBPACK_IMPORTED_MODULE_2__["positionElements"])(_this._elementRef.nativeElement, _this._windowRef.location.nativeElement, _this.placement, _this.container === 'body'));
            }
        });
    }
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of the popover.
     * The context is an optional value to be injected into the popover template when it is created.
     */
    /**
       * Opens an element’s popover. This is considered a “manual” triggering of the popover.
       * The context is an optional value to be injected into the popover template when it is created.
       */
    NgbPopover.prototype.open = /**
       * Opens an element’s popover. This is considered a “manual” triggering of the popover.
       * The context is an optional value to be injected into the popover template when it is created.
       */
    function (context) {
        if (!this._windowRef && !this.disablePopover) {
            this._windowRef = this._popupService.open(this.ngbPopover, context);
            this._windowRef.instance.title = this.popoverTitle;
            this._windowRef.instance.id = this._ngbPopoverWindowId;
            this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ngbPopoverWindowId);
            if (this.container === 'body') {
                window.document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
            }
            // apply styling to set basic css-classes on target element, before going for positioning
            this._windowRef.changeDetectorRef.detectChanges();
            this._windowRef.changeDetectorRef.markForCheck();
            // position popover along the element
            this._windowRef.instance.applyPlacement(Object(_util_positioning__WEBPACK_IMPORTED_MODULE_2__["positionElements"])(this._elementRef.nativeElement, this._windowRef.location.nativeElement, this.placement, this.container === 'body'));
            this.shown.emit();
        }
    };
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of the popover.
     */
    /**
       * Closes an element’s popover. This is considered a “manual” triggering of the popover.
       */
    NgbPopover.prototype.close = /**
       * Closes an element’s popover. This is considered a “manual” triggering of the popover.
       */
    function () {
        if (this._windowRef) {
            this._renderer.removeAttribute(this._elementRef.nativeElement, 'aria-describedby');
            this._popupService.close();
            this._windowRef = null;
            this.hidden.emit();
        }
    };
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of the popover.
     */
    /**
       * Toggles an element’s popover. This is considered a “manual” triggering of the popover.
       */
    NgbPopover.prototype.toggle = /**
       * Toggles an element’s popover. This is considered a “manual” triggering of the popover.
       */
    function () {
        if (this._windowRef) {
            this.close();
        }
        else {
            this.open();
        }
    };
    /**
     * Returns whether or not the popover is currently being shown
     */
    /**
       * Returns whether or not the popover is currently being shown
       */
    NgbPopover.prototype.isOpen = /**
       * Returns whether or not the popover is currently being shown
       */
    function () { return this._windowRef != null; };
    NgbPopover.prototype.ngOnInit = function () {
        this._unregisterListenersFn = Object(_util_triggers__WEBPACK_IMPORTED_MODULE_1__["listenToTriggers"])(this._renderer, this._elementRef.nativeElement, this.triggers, this.open.bind(this), this.close.bind(this), this.toggle.bind(this));
    };
    NgbPopover.prototype.ngOnDestroy = function () {
        this.close();
        this._unregisterListenersFn();
        this._zoneSubscription.unsubscribe();
    };
    NgbPopover.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ngbPopover]', exportAs: 'ngbPopover' },] },
    ];
    /** @nocollapse */
    NgbPopover.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
        { type: _popover_config__WEBPACK_IMPORTED_MODULE_4__["NgbPopoverConfig"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    NgbPopover.propDecorators = {
        "ngbPopover": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "popoverTitle": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "placement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "triggers": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "container": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disablePopover": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "shown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "hidden": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return NgbPopover;
}());

//# sourceMappingURL=popover.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/popover/popover.ngfactory.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/popover/popover.ngfactory.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./popover */ "./node_modules/@ng-bootstrap/ng-bootstrap/popover/popover.js");
var styles_NgbPopoverWindow = [".bs-popover-top[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%], .bs-popover-bottom[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%] {\n      left: 50%;\n      margin-left: -5px;\n    }\n\n    .bs-popover-top-left[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%], .bs-popover-bottom-left[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%] {\n      left: 2em;\n    }\n\n    .bs-popover-top-right[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%], .bs-popover-bottom-right[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%] {\n      left: auto;\n      right: 2em;\n    }\n\n    .bs-popover-left[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%], .bs-popover-right[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%] {\n      top: 50%;\n      margin-top: -5px;\n    }\n    \n    .bs-popover-left-top[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%], .bs-popover-right-top[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%] {\n      top: 0.7em;\n    }\n\n    .bs-popover-left-bottom[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%], .bs-popover-right-bottom[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%] {\n      top: auto;\n      bottom: 0.7em;\n    }"];
var RenderType_NgbPopoverWindow = i0.ɵcrt({ encapsulation: 0, styles: styles_NgbPopoverWindow, data: {} });
exports.RenderType_NgbPopoverWindow = RenderType_NgbPopoverWindow;
function View_NgbPopoverWindow_0(_l) { return i0.ɵvid(2, [(_l()(), i0.ɵeld(0, 0, null, null, 0, "div", [["class", "arrow"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 1, "h3", [["class", "popover-header"]], null, null, null, null, null)), (_l()(), i0.ɵted(2, null, ["", ""])), (_l()(), i0.ɵeld(3, 0, null, null, 1, "div", [["class", "popover-body"]], null, null, null, null, null)), i0.ɵncd(null, 0)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.title; _ck(_v, 2, 0, currVal_0); }); }
exports.View_NgbPopoverWindow_0 = View_NgbPopoverWindow_0;
function View_NgbPopoverWindow_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ngb-popover-window", [["role", "tooltip"]], [[8, "className", 0], [8, "id", 0]], null, null, View_NgbPopoverWindow_0, RenderType_NgbPopoverWindow)), i0.ɵdid(1, 49152, null, 0, i1.NgbPopoverWindow, [i0.ElementRef, i0.Renderer2], null, null)], null, function (_ck, _v) { var currVal_0 = ((("popover bs-popover-" + i0.ɵnov(_v, 1).placement.split("-")[0]) + " bs-popover-") + i0.ɵnov(_v, 1).placement); var currVal_1 = i0.ɵnov(_v, 1).id; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
exports.View_NgbPopoverWindow_Host_0 = View_NgbPopoverWindow_Host_0;
var NgbPopoverWindowNgFactory = i0.ɵccf("ngb-popover-window", i1.NgbPopoverWindow, View_NgbPopoverWindow_Host_0, { placement: "placement", title: "title", id: "id" }, {}, ["*"]);
exports.NgbPopoverWindowNgFactory = NgbPopoverWindowNgFactory;


/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/tooltip/tooltip-config.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/tooltip/tooltip-config.js ***!
  \***************************************************************************/
/*! exports provided: NgbTooltipConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTooltipConfig", function() { return NgbTooltipConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Configuration service for the NgbTooltip directive.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the tooltips used in the application.
 */
var NgbTooltipConfig = (function () {
    function NgbTooltipConfig() {
        this.placement = 'top';
        this.triggers = 'hover';
        this.disableTooltip = false;
    }
    NgbTooltipConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    NgbTooltipConfig.ctorParameters = function () { return []; };
    return NgbTooltipConfig;
}());

//# sourceMappingURL=tooltip-config.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/tooltip/tooltip.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/tooltip/tooltip.js ***!
  \********************************************************************/
/*! exports provided: NgbTooltipWindow, NgbTooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTooltipWindow", function() { return NgbTooltipWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTooltip", function() { return NgbTooltip; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_triggers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/triggers */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/triggers.js");
/* harmony import */ var _util_positioning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/positioning */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/positioning.js");
/* harmony import */ var _util_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/popup */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/popup.js");
/* harmony import */ var _tooltip_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tooltip-config */ "./node_modules/@ng-bootstrap/ng-bootstrap/tooltip/tooltip-config.js");





var nextId = 0;
var NgbTooltipWindow = (function () {
    function NgbTooltipWindow(_element, _renderer) {
        this._element = _element;
        this._renderer = _renderer;
        this.placement = 'top';
    }
    NgbTooltipWindow.prototype.applyPlacement = function (_placement) {
        // remove the current placement classes
        this._renderer.removeClass(this._element.nativeElement, 'bs-tooltip-' + this.placement.toString().split('-')[0]);
        this._renderer.removeClass(this._element.nativeElement, 'bs-tooltip-' + this.placement.toString());
        // set the new placement classes
        this.placement = _placement;
        // apply the new placement
        this._renderer.addClass(this._element.nativeElement, 'bs-tooltip-' + this.placement.toString().split('-')[0]);
        this._renderer.addClass(this._element.nativeElement, 'bs-tooltip-' + this.placement.toString());
    };
    NgbTooltipWindow.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-tooltip-window',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    host: {
                        '[class]': '"tooltip show bs-tooltip-" + placement.split("-")[0]+" bs-tooltip-" + placement',
                        'role': 'tooltip',
                        '[id]': 'id'
                    },
                    template: "<div class=\"arrow\"></div><div class=\"tooltip-inner\"><ng-content></ng-content></div>",
                    styles: ["\n    :host.bs-tooltip-top .arrow, :host.bs-tooltip-bottom .arrow {\n      left: calc(50% - 0.4rem);\n    }\n\n    :host.bs-tooltip-top-left .arrow, :host.bs-tooltip-bottom-left .arrow {\n      left: 1em;\n    }\n\n    :host.bs-tooltip-top-right .arrow, :host.bs-tooltip-bottom-right .arrow {\n      left: auto;\n      right: 0.8rem;\n    }\n\n    :host.bs-tooltip-left .arrow, :host.bs-tooltip-right .arrow {\n      top: calc(50% - 0.4rem);\n    }\n    \n    :host.bs-tooltip-left-top .arrow, :host.bs-tooltip-right-top .arrow {\n      top: 0.4rem;\n    }\n\n    :host.bs-tooltip-left-bottom .arrow, :host.bs-tooltip-right-bottom .arrow {\n      top: auto;\n      bottom: 0.4rem;\n    }\n  "]
                },] },
    ];
    /** @nocollapse */
    NgbTooltipWindow.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    ]; };
    NgbTooltipWindow.propDecorators = {
        "placement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "id": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return NgbTooltipWindow;
}());

/**
 * A lightweight, extensible directive for fancy tooltip creation.
 */
var NgbTooltip = (function () {
    function NgbTooltip(_elementRef, _renderer, injector, componentFactoryResolver, viewContainerRef, config, ngZone) {
        var _this = this;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        /**
           * Emits an event when the tooltip is shown
           */
        this.shown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * Emits an event when the tooltip is hidden
           */
        this.hidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._ngbTooltipWindowId = "ngb-tooltip-" + nextId++;
        this.placement = config.placement;
        this.triggers = config.triggers;
        this.container = config.container;
        this.disableTooltip = config.disableTooltip;
        this._popupService = new _util_popup__WEBPACK_IMPORTED_MODULE_3__["PopupService"](NgbTooltipWindow, injector, viewContainerRef, _renderer, componentFactoryResolver);
        this._zoneSubscription = ngZone.onStable.subscribe(function () {
            if (_this._windowRef) {
                _this._windowRef.instance.applyPlacement(Object(_util_positioning__WEBPACK_IMPORTED_MODULE_2__["positionElements"])(_this._elementRef.nativeElement, _this._windowRef.location.nativeElement, _this.placement, _this.container === 'body'));
            }
        });
    }
    Object.defineProperty(NgbTooltip.prototype, "ngbTooltip", {
        get: function () { return this._ngbTooltip; },
        set: /**
           * Content to be displayed as tooltip. If falsy, the tooltip won't open.
           */
        function (value) {
            this._ngbTooltip = value;
            if (!value && this._windowRef) {
                this.close();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of the tooltip.
     * The context is an optional value to be injected into the tooltip template when it is created.
     */
    /**
       * Opens an element’s tooltip. This is considered a “manual” triggering of the tooltip.
       * The context is an optional value to be injected into the tooltip template when it is created.
       */
    NgbTooltip.prototype.open = /**
       * Opens an element’s tooltip. This is considered a “manual” triggering of the tooltip.
       * The context is an optional value to be injected into the tooltip template when it is created.
       */
    function (context) {
        if (!this._windowRef && this._ngbTooltip && !this.disableTooltip) {
            this._windowRef = this._popupService.open(this._ngbTooltip, context);
            this._windowRef.instance.id = this._ngbTooltipWindowId;
            this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ngbTooltipWindowId);
            if (this.container === 'body') {
                window.document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
            }
            this._windowRef.instance.placement = Array.isArray(this.placement) ? this.placement[0] : this.placement;
            // apply styling to set basic css-classes on target element, before going for positioning
            this._windowRef.changeDetectorRef.detectChanges();
            this._windowRef.changeDetectorRef.markForCheck();
            // position tooltip along the element
            this._windowRef.instance.applyPlacement(Object(_util_positioning__WEBPACK_IMPORTED_MODULE_2__["positionElements"])(this._elementRef.nativeElement, this._windowRef.location.nativeElement, this.placement, this.container === 'body'));
            this.shown.emit();
        }
    };
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of the tooltip.
     */
    /**
       * Closes an element’s tooltip. This is considered a “manual” triggering of the tooltip.
       */
    NgbTooltip.prototype.close = /**
       * Closes an element’s tooltip. This is considered a “manual” triggering of the tooltip.
       */
    function () {
        if (this._windowRef != null) {
            this._renderer.removeAttribute(this._elementRef.nativeElement, 'aria-describedby');
            this._popupService.close();
            this._windowRef = null;
            this.hidden.emit();
        }
    };
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of the tooltip.
     */
    /**
       * Toggles an element’s tooltip. This is considered a “manual” triggering of the tooltip.
       */
    NgbTooltip.prototype.toggle = /**
       * Toggles an element’s tooltip. This is considered a “manual” triggering of the tooltip.
       */
    function () {
        if (this._windowRef) {
            this.close();
        }
        else {
            this.open();
        }
    };
    /**
     * Returns whether or not the tooltip is currently being shown
     */
    /**
       * Returns whether or not the tooltip is currently being shown
       */
    NgbTooltip.prototype.isOpen = /**
       * Returns whether or not the tooltip is currently being shown
       */
    function () { return this._windowRef != null; };
    NgbTooltip.prototype.ngOnInit = function () {
        this._unregisterListenersFn = Object(_util_triggers__WEBPACK_IMPORTED_MODULE_1__["listenToTriggers"])(this._renderer, this._elementRef.nativeElement, this.triggers, this.open.bind(this), this.close.bind(this), this.toggle.bind(this));
    };
    NgbTooltip.prototype.ngOnDestroy = function () {
        this.close();
        // This check is needed as it might happen that ngOnDestroy is called before ngOnInit
        // under certain conditions, see: https://github.com/ng-bootstrap/ng-bootstrap/issues/2199
        if (this._unregisterListenersFn) {
            this._unregisterListenersFn();
        }
        this._zoneSubscription.unsubscribe();
    };
    NgbTooltip.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ngbTooltip]', exportAs: 'ngbTooltip' },] },
    ];
    /** @nocollapse */
    NgbTooltip.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
        { type: _tooltip_config__WEBPACK_IMPORTED_MODULE_4__["NgbTooltipConfig"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    NgbTooltip.propDecorators = {
        "placement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "triggers": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "container": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disableTooltip": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "shown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "hidden": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "ngbTooltip": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return NgbTooltip;
}());

//# sourceMappingURL=tooltip.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/tooltip/tooltip.ngfactory.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/tooltip/tooltip.ngfactory.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./tooltip */ "./node_modules/@ng-bootstrap/ng-bootstrap/tooltip/tooltip.js");
var styles_NgbTooltipWindow = [".bs-tooltip-top[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%], .bs-tooltip-bottom[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%] {\n      left: calc(50% - 0.4rem);\n    }\n\n    .bs-tooltip-top-left[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%], .bs-tooltip-bottom-left[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%] {\n      left: 1em;\n    }\n\n    .bs-tooltip-top-right[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%], .bs-tooltip-bottom-right[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%] {\n      left: auto;\n      right: 0.8rem;\n    }\n\n    .bs-tooltip-left[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%], .bs-tooltip-right[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%] {\n      top: calc(50% - 0.4rem);\n    }\n    \n    .bs-tooltip-left-top[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%], .bs-tooltip-right-top[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%] {\n      top: 0.4rem;\n    }\n\n    .bs-tooltip-left-bottom[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%], .bs-tooltip-right-bottom[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%] {\n      top: auto;\n      bottom: 0.4rem;\n    }"];
var RenderType_NgbTooltipWindow = i0.ɵcrt({ encapsulation: 0, styles: styles_NgbTooltipWindow, data: {} });
exports.RenderType_NgbTooltipWindow = RenderType_NgbTooltipWindow;
function View_NgbTooltipWindow_0(_l) { return i0.ɵvid(2, [(_l()(), i0.ɵeld(0, 0, null, null, 0, "div", [["class", "arrow"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 1, "div", [["class", "tooltip-inner"]], null, null, null, null, null)), i0.ɵncd(null, 0)], null, null); }
exports.View_NgbTooltipWindow_0 = View_NgbTooltipWindow_0;
function View_NgbTooltipWindow_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ngb-tooltip-window", [["role", "tooltip"]], [[8, "className", 0], [8, "id", 0]], null, null, View_NgbTooltipWindow_0, RenderType_NgbTooltipWindow)), i0.ɵdid(1, 49152, null, 0, i1.NgbTooltipWindow, [i0.ElementRef, i0.Renderer2], null, null)], null, function (_ck, _v) { var currVal_0 = ((("tooltip show bs-tooltip-" + i0.ɵnov(_v, 1).placement.split("-")[0]) + " bs-tooltip-") + i0.ɵnov(_v, 1).placement); var currVal_1 = i0.ɵnov(_v, 1).id; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
exports.View_NgbTooltipWindow_Host_0 = View_NgbTooltipWindow_Host_0;
var NgbTooltipWindowNgFactory = i0.ɵccf("ngb-tooltip-window", i1.NgbTooltipWindow, View_NgbTooltipWindow_Host_0, { placement: "placement", id: "id" }, {}, ["*"]);
exports.NgbTooltipWindowNgFactory = NgbTooltipWindowNgFactory;


/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/highlight.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/highlight.js ***!
  \************************************************************************/
/*! exports provided: NgbHighlight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbHighlight", function() { return NgbHighlight; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/util */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/util.js");


var NgbHighlight = (function () {
    function NgbHighlight() {
        this.highlightClass = 'ngb-highlight';
    }
    NgbHighlight.prototype.ngOnChanges = function (changes) {
        var resultStr = Object(_util_util__WEBPACK_IMPORTED_MODULE_1__["toString"])(this.result);
        var resultLC = resultStr.toLowerCase();
        var termLC = Object(_util_util__WEBPACK_IMPORTED_MODULE_1__["toString"])(this.term).toLowerCase();
        var currentIdx = 0;
        if (termLC.length > 0) {
            this.parts = resultLC.split(new RegExp("(" + Object(_util_util__WEBPACK_IMPORTED_MODULE_1__["regExpEscape"])(termLC) + ")")).map(function (part) {
                var originalPart = resultStr.substr(currentIdx, part.length);
                currentIdx += part.length;
                return originalPart;
            });
        }
        else {
            this.parts = [resultStr];
        }
    };
    NgbHighlight.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-highlight',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    template: "<ng-template ngFor [ngForOf]=\"parts\" let-part let-isOdd=\"odd\">" +
                        "<span *ngIf=\"isOdd\" class=\"{{highlightClass}}\">{{part}}</span><ng-template [ngIf]=\"!isOdd\">{{part}}</ng-template>" +
                        "</ng-template>",
                    // template needs to be formatted in a certain way so we don't add empty text nodes
                    styles: ["\n    .ngb-highlight {\n      font-weight: bold;\n    }\n  "]
                },] },
    ];
    /** @nocollapse */
    NgbHighlight.ctorParameters = function () { return []; };
    NgbHighlight.propDecorators = {
        "highlightClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "result": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "term": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return NgbHighlight;
}());

//# sourceMappingURL=highlight.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/highlight.ngfactory.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/highlight.ngfactory.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i2 = __webpack_require__(/*! ./highlight */ "./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/highlight.js");
var styles_NgbHighlight = [".ngb-highlight[_ngcontent-%COMP%] {\n      font-weight: bold;\n    }"];
var RenderType_NgbHighlight = i0.ɵcrt({ encapsulation: 0, styles: styles_NgbHighlight, data: {} });
exports.RenderType_NgbHighlight = RenderType_NgbHighlight;
function View_NgbHighlight_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "span", [], [[8, "className", 0]], null, null, null, null)), (_l()(), i0.ɵted(1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = i0.ɵinlineInterpolate(1, "", _co.highlightClass, ""); _ck(_v, 0, 0, currVal_0); var currVal_1 = _v.parent.context.$implicit; _ck(_v, 1, 0, currVal_1); }); }
function View_NgbHighlight_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵted(0, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit; _ck(_v, 0, 0, currVal_0); }); }
function View_NgbHighlight_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbHighlight_2)), i0.ɵdid(1, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbHighlight_3)), i0.ɵdid(3, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(0, null, null, 0))], function (_ck, _v) { var currVal_0 = _v.context.odd; _ck(_v, 1, 0, currVal_0); var currVal_1 = !_v.context.odd; _ck(_v, 3, 0, currVal_1); }, null); }
function View_NgbHighlight_0(_l) { return i0.ɵvid(2, [(_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbHighlight_1)), i0.ɵdid(1, 802816, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.parts; _ck(_v, 1, 0, currVal_0); }, null); }
exports.View_NgbHighlight_0 = View_NgbHighlight_0;
function View_NgbHighlight_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ngb-highlight", [], null, null, null, View_NgbHighlight_0, RenderType_NgbHighlight)), i0.ɵdid(1, 573440, null, 0, i2.NgbHighlight, [], null, null)], null, null); }
exports.View_NgbHighlight_Host_0 = View_NgbHighlight_Host_0;
var NgbHighlightNgFactory = i0.ɵccf("ngb-highlight", i2.NgbHighlight, View_NgbHighlight_Host_0, { highlightClass: "highlightClass", result: "result", term: "term" }, {}, []);
exports.NgbHighlightNgFactory = NgbHighlightNgFactory;


/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window.js ***!
  \*******************************************************************************/
/*! exports provided: NgbTypeaheadWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTypeaheadWindow", function() { return NgbTypeaheadWindow; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/util */ "./node_modules/@ng-bootstrap/ng-bootstrap/util/util.js");


var NgbTypeaheadWindow = (function () {
    function NgbTypeaheadWindow() {
        this.activeIdx = 0;
        /**
           * Flag indicating if the first row should be active initially
           */
        this.focusFirst = true;
        /**
           * A function used to format a given result before display. This function should return a formatted string without any
           * HTML markup
           */
        this.formatter = _util_util__WEBPACK_IMPORTED_MODULE_1__["toString"];
        /**
           * Event raised when user selects a particular result row
           */
        this.selectEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.activeChangeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    NgbTypeaheadWindow.prototype.hasActive = function () { return this.activeIdx > -1 && this.activeIdx < this.results.length; };
    NgbTypeaheadWindow.prototype.getActive = function () { return this.results[this.activeIdx]; };
    NgbTypeaheadWindow.prototype.markActive = function (activeIdx) {
        this.activeIdx = activeIdx;
        this._activeChanged();
    };
    NgbTypeaheadWindow.prototype.next = function () {
        if (this.activeIdx === this.results.length - 1) {
            this.activeIdx = this.focusFirst ? (this.activeIdx + 1) % this.results.length : -1;
        }
        else {
            this.activeIdx++;
        }
        this._activeChanged();
    };
    NgbTypeaheadWindow.prototype.prev = function () {
        if (this.activeIdx < 0) {
            this.activeIdx = this.results.length - 1;
        }
        else if (this.activeIdx === 0) {
            this.activeIdx = this.focusFirst ? this.results.length - 1 : -1;
        }
        else {
            this.activeIdx--;
        }
        this._activeChanged();
    };
    NgbTypeaheadWindow.prototype.resetActive = function () {
        this.activeIdx = this.focusFirst ? 0 : -1;
        this._activeChanged();
    };
    NgbTypeaheadWindow.prototype.select = function (item) { this.selectEvent.emit(item); };
    NgbTypeaheadWindow.prototype.ngOnInit = function () { this.resetActive(); };
    NgbTypeaheadWindow.prototype._activeChanged = function () {
        this.activeChangeEvent.emit(this.activeIdx >= 0 ? this.id + '-' + this.activeIdx : undefined);
    };
    NgbTypeaheadWindow.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngb-typeahead-window',
                    exportAs: 'ngbTypeaheadWindow',
                    host: { 'class': 'dropdown-menu show', 'role': 'listbox', '[id]': 'id' },
                    template: "\n    <ng-template #rt let-result=\"result\" let-term=\"term\" let-formatter=\"formatter\">\n      <ngb-highlight [result]=\"formatter(result)\" [term]=\"term\"></ngb-highlight>\n    </ng-template>\n    <ng-template ngFor [ngForOf]=\"results\" let-result let-idx=\"index\">\n      <button type=\"button\" class=\"dropdown-item\" role=\"option\"\n        [id]=\"id + '-' + idx\"\n        [class.active]=\"idx === activeIdx\"\n        (mouseenter)=\"markActive(idx)\"\n        (click)=\"select(result)\">\n          <ng-template [ngTemplateOutlet]=\"resultTemplate || rt\"\n          [ngTemplateOutletContext]=\"{result: result, term: term, formatter: formatter}\"></ng-template>\n      </button>\n    </ng-template>\n  "
                },] },
    ];
    /** @nocollapse */
    NgbTypeaheadWindow.ctorParameters = function () { return []; };
    NgbTypeaheadWindow.propDecorators = {
        "id": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "focusFirst": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "results": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "term": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "formatter": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "resultTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "selectEvent": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['select',] },],
        "activeChangeEvent": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['activeChange',] },],
    };
    return NgbTypeaheadWindow;
}());

//# sourceMappingURL=typeahead-window.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window.ngfactory.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window.ngfactory.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./highlight.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/highlight.ngfactory.js");
var i2 = __webpack_require__(/*! ./highlight */ "./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/highlight.js");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! ./typeahead-window */ "./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window.js");
var styles_NgbTypeaheadWindow = [];
var RenderType_NgbTypeaheadWindow = i0.ɵcrt({ encapsulation: 2, styles: styles_NgbTypeaheadWindow, data: {} });
exports.RenderType_NgbTypeaheadWindow = RenderType_NgbTypeaheadWindow;
function View_NgbTypeaheadWindow_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ngb-highlight", [], null, null, null, i1.View_NgbHighlight_0, i1.RenderType_NgbHighlight)), i0.ɵdid(1, 573440, null, 0, i2.NgbHighlight, [], { result: [0, "result"], term: [1, "term"] }, null)], function (_ck, _v) { var currVal_0 = _v.context.formatter(_v.context.result); var currVal_1 = _v.context.term; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_NgbTypeaheadWindow_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_NgbTypeaheadWindow_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "button", [["class", "dropdown-item"], ["role", "option"], ["type", "button"]], [[8, "id", 0], [2, "active", null]], [[null, "mouseenter"], [null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("mouseenter" === en)) {
        var pd_0 = (_co.markActive(_v.context.index) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.select(_v.context.$implicit) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵand(16777216, null, null, 2, null, View_NgbTypeaheadWindow_3)), i0.ɵdid(2, 540672, null, 0, i3.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), i0.ɵpod(3, { result: 0, term: 1, formatter: 2 })], function (_ck, _v) { var _co = _v.component; var currVal_2 = _ck(_v, 3, 0, _v.context.$implicit, _co.term, _co.formatter); var currVal_3 = (_co.resultTemplate || i0.ɵnov(_v.parent, 0)); _ck(_v, 2, 0, currVal_2, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.id + "-") + _v.context.index); var currVal_1 = (_v.context.index === _co.activeIdx); _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_NgbTypeaheadWindow_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, [["rt", 2]], null, 0, null, View_NgbTypeaheadWindow_1)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbTypeaheadWindow_2)), i0.ɵdid(2, 802816, null, 0, i3.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.results; _ck(_v, 2, 0, currVal_0); }, null); }
exports.View_NgbTypeaheadWindow_0 = View_NgbTypeaheadWindow_0;
function View_NgbTypeaheadWindow_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ngb-typeahead-window", [["class", "dropdown-menu show"], ["role", "listbox"]], [[8, "id", 0]], null, null, View_NgbTypeaheadWindow_0, RenderType_NgbTypeaheadWindow)), i0.ɵdid(1, 114688, null, 0, i4.NgbTypeaheadWindow, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).id; _ck(_v, 0, 0, currVal_0); }); }
exports.View_NgbTypeaheadWindow_Host_0 = View_NgbTypeaheadWindow_Host_0;
var NgbTypeaheadWindowNgFactory = i0.ɵccf("ngb-typeahead-window", i4.NgbTypeaheadWindow, View_NgbTypeaheadWindow_Host_0, { id: "id", focusFirst: "focusFirst", results: "results", term: "term", formatter: "formatter", resultTemplate: "resultTemplate" }, { selectEvent: "select", activeChangeEvent: "activeChange" }, []);
exports.NgbTypeaheadWindowNgFactory = NgbTypeaheadWindowNgFactory;


/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/util/popup.js":
/*!***************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/util/popup.js ***!
  \***************************************************************/
/*! exports provided: ContentRef, PopupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentRef", function() { return ContentRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupService", function() { return PopupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var ContentRef = (function () {
    function ContentRef(nodes, viewRef, componentRef) {
        this.nodes = nodes;
        this.viewRef = viewRef;
        this.componentRef = componentRef;
    }
    return ContentRef;
}());

var PopupService = (function () {
    function PopupService(_type, _injector, _viewContainerRef, _renderer, _componentFactoryResolver) {
        this._type = _type;
        this._injector = _injector;
        this._viewContainerRef = _viewContainerRef;
        this._renderer = _renderer;
        this._componentFactoryResolver = _componentFactoryResolver;
    }
    PopupService.prototype.open = function (content, context) {
        if (!this._windowRef) {
            this._contentRef = this._getContentRef(content, context);
            this._windowRef = this._viewContainerRef.createComponent(this._componentFactoryResolver.resolveComponentFactory(this._type), 0, this._injector, this._contentRef.nodes);
        }
        return this._windowRef;
    };
    PopupService.prototype.close = function () {
        if (this._windowRef) {
            this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._windowRef.hostView));
            this._windowRef = null;
            if (this._contentRef.viewRef) {
                this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
                this._contentRef = null;
            }
        }
    };
    PopupService.prototype._getContentRef = function (content, context) {
        if (!content) {
            return new ContentRef([]);
        }
        else if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]) {
            var viewRef = this._viewContainerRef.createEmbeddedView(content, context);
            return new ContentRef([viewRef.rootNodes], viewRef);
        }
        else {
            return new ContentRef([[this._renderer.createText("" + content)]]);
        }
    };
    return PopupService;
}());

//# sourceMappingURL=popup.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/util/positioning.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/util/positioning.js ***!
  \*********************************************************************/
/*! exports provided: Positioning, positionElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Positioning", function() { return Positioning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positionElements", function() { return positionElements; });
// previous version:
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
var 
// previous version:
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
Positioning = (function () {
    function Positioning() {
    }
    Positioning.prototype.getAllStyles = function (element) { return window.getComputedStyle(element); };
    Positioning.prototype.getStyle = function (element, prop) { return this.getAllStyles(element)[prop]; };
    Positioning.prototype.isStaticPositioned = function (element) {
        return (this.getStyle(element, 'position') || 'static') === 'static';
    };
    Positioning.prototype.offsetParent = function (element) {
        var offsetParentEl = element.offsetParent || document.documentElement;
        while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
            offsetParentEl = offsetParentEl.offsetParent;
        }
        return offsetParentEl || document.documentElement;
    };
    Positioning.prototype.position = function (element, round) {
        if (round === void 0) { round = true; }
        var elPosition;
        var parentOffset = { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 };
        if (this.getStyle(element, 'position') === 'fixed') {
            elPosition = element.getBoundingClientRect();
        }
        else {
            var offsetParentEl = this.offsetParent(element);
            elPosition = this.offset(element, false);
            if (offsetParentEl !== document.documentElement) {
                parentOffset = this.offset(offsetParentEl, false);
            }
            parentOffset.top += offsetParentEl.clientTop;
            parentOffset.left += offsetParentEl.clientLeft;
        }
        elPosition.top -= parentOffset.top;
        elPosition.bottom -= parentOffset.top;
        elPosition.left -= parentOffset.left;
        elPosition.right -= parentOffset.left;
        if (round) {
            elPosition.top = Math.round(elPosition.top);
            elPosition.bottom = Math.round(elPosition.bottom);
            elPosition.left = Math.round(elPosition.left);
            elPosition.right = Math.round(elPosition.right);
        }
        return elPosition;
    };
    Positioning.prototype.offset = function (element, round) {
        if (round === void 0) { round = true; }
        var elBcr = element.getBoundingClientRect();
        var viewportOffset = {
            top: window.pageYOffset - document.documentElement.clientTop,
            left: window.pageXOffset - document.documentElement.clientLeft
        };
        var elOffset = {
            height: elBcr.height || element.offsetHeight,
            width: elBcr.width || element.offsetWidth,
            top: elBcr.top + viewportOffset.top,
            bottom: elBcr.bottom + viewportOffset.top,
            left: elBcr.left + viewportOffset.left,
            right: elBcr.right + viewportOffset.left
        };
        if (round) {
            elOffset.height = Math.round(elOffset.height);
            elOffset.width = Math.round(elOffset.width);
            elOffset.top = Math.round(elOffset.top);
            elOffset.bottom = Math.round(elOffset.bottom);
            elOffset.left = Math.round(elOffset.left);
            elOffset.right = Math.round(elOffset.right);
        }
        return elOffset;
    };
    Positioning.prototype.positionElements = function (hostElement, targetElement, placement, appendToBody) {
        var hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
        var targetElStyles = this.getAllStyles(targetElement);
        var targetElBCR = targetElement.getBoundingClientRect();
        var placementPrimary = placement.split('-')[0] || 'top';
        var placementSecondary = placement.split('-')[1] || 'center';
        var targetElPosition = {
            'height': targetElBCR.height || targetElement.offsetHeight,
            'width': targetElBCR.width || targetElement.offsetWidth,
            'top': 0,
            'bottom': targetElBCR.height || targetElement.offsetHeight,
            'left': 0,
            'right': targetElBCR.width || targetElement.offsetWidth
        };
        switch (placementPrimary) {
            case 'top':
                targetElPosition.top =
                    hostElPosition.top - (targetElement.offsetHeight + parseFloat(targetElStyles.marginBottom));
                break;
            case 'bottom':
                targetElPosition.top = hostElPosition.top + hostElPosition.height;
                break;
            case 'left':
                targetElPosition.left =
                    hostElPosition.left - (targetElement.offsetWidth + parseFloat(targetElStyles.marginRight));
                break;
            case 'right':
                targetElPosition.left = hostElPosition.left + hostElPosition.width;
                break;
        }
        switch (placementSecondary) {
            case 'top':
                targetElPosition.top = hostElPosition.top;
                break;
            case 'bottom':
                targetElPosition.top = hostElPosition.top + hostElPosition.height - targetElement.offsetHeight;
                break;
            case 'left':
                targetElPosition.left = hostElPosition.left;
                break;
            case 'right':
                targetElPosition.left = hostElPosition.left + hostElPosition.width - targetElement.offsetWidth;
                break;
            case 'center':
                if (placementPrimary === 'top' || placementPrimary === 'bottom') {
                    targetElPosition.left = hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2;
                }
                else {
                    targetElPosition.top = hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2;
                }
                break;
        }
        targetElPosition.top = Math.round(targetElPosition.top);
        targetElPosition.bottom = Math.round(targetElPosition.bottom);
        targetElPosition.left = Math.round(targetElPosition.left);
        targetElPosition.right = Math.round(targetElPosition.right);
        return targetElPosition;
    };
    // get the availble placements of the target element in the viewport dependeing on the host element
    // get the availble placements of the target element in the viewport dependeing on the host element
    Positioning.prototype.getAvailablePlacements = 
    // get the availble placements of the target element in the viewport dependeing on the host element
    function (hostElement, targetElement) {
        var availablePlacements = [];
        var hostElemClientRect = hostElement.getBoundingClientRect();
        var targetElemClientRect = targetElement.getBoundingClientRect();
        var html = document.documentElement;
        // left: check if target width can be placed between host left and viewport start and also height of target is
        // inside viewport
        if (targetElemClientRect.width < hostElemClientRect.left) {
            // check for left only
            if ((hostElemClientRect.top + hostElemClientRect.height / 2 - targetElement.offsetHeight / 2) > 0) {
                availablePlacements.splice(availablePlacements.length, 1, 'left');
            }
            // check for left-top and left-bottom
            this.setSecondaryPlacementForLeftRight(hostElemClientRect, targetElemClientRect, 'left', availablePlacements);
        }
        // top: target height is less than host top
        if (targetElemClientRect.height < hostElemClientRect.top) {
            availablePlacements.splice(availablePlacements.length, 1, 'top');
            this.setSecondaryPlacementForTopBottom(hostElemClientRect, targetElemClientRect, 'top', availablePlacements);
        }
        // right: check if target width can be placed between host right and viewport end and also height of target is
        // inside viewport
        if ((window.innerWidth || html.clientWidth) - hostElemClientRect.right > targetElemClientRect.width) {
            // check for right only
            if ((hostElemClientRect.top + hostElemClientRect.height / 2 - targetElement.offsetHeight / 2) > 0) {
                availablePlacements.splice(availablePlacements.length, 1, 'right');
            }
            // check for right-top and right-bottom
            this.setSecondaryPlacementForLeftRight(hostElemClientRect, targetElemClientRect, 'right', availablePlacements);
        }
        // bottom: check if there is enough space between host bottom and viewport end for target height
        if ((window.innerHeight || html.clientHeight) - hostElemClientRect.bottom > targetElemClientRect.height) {
            availablePlacements.splice(availablePlacements.length, 1, 'bottom');
            this.setSecondaryPlacementForTopBottom(hostElemClientRect, targetElemClientRect, 'bottom', availablePlacements);
        }
        return availablePlacements;
    };
    /**
     * check if secondary placement for left and right are available i.e. left-top, left-bottom, right-top, right-bottom
     * primaryplacement: left|right
     * availablePlacementArr: array in which available placemets to be set
     */
    /**
       * check if secondary placement for left and right are available i.e. left-top, left-bottom, right-top, right-bottom
       * primaryplacement: left|right
       * availablePlacementArr: array in which available placemets to be set
       */
    Positioning.prototype.setSecondaryPlacementForLeftRight = /**
       * check if secondary placement for left and right are available i.e. left-top, left-bottom, right-top, right-bottom
       * primaryplacement: left|right
       * availablePlacementArr: array in which available placemets to be set
       */
    function (hostElemClientRect, targetElemClientRect, primaryPlacement, availablePlacementArr) {
        var html = document.documentElement;
        // check for left-bottom
        if (targetElemClientRect.height <= hostElemClientRect.bottom) {
            availablePlacementArr.splice(availablePlacementArr.length, 1, primaryPlacement + '-bottom');
        }
        if ((window.innerHeight || html.clientHeight) - hostElemClientRect.top >= targetElemClientRect.height) {
            availablePlacementArr.splice(availablePlacementArr.length, 1, primaryPlacement + '-top');
        }
    };
    /**
     * check if secondary placement for top and bottom are available i.e. top-left, top-right, bottom-left, bottom-right
     * primaryplacement: top|bottom
     * availablePlacementArr: array in which available placemets to be set
     */
    /**
       * check if secondary placement for top and bottom are available i.e. top-left, top-right, bottom-left, bottom-right
       * primaryplacement: top|bottom
       * availablePlacementArr: array in which available placemets to be set
       */
    Positioning.prototype.setSecondaryPlacementForTopBottom = /**
       * check if secondary placement for top and bottom are available i.e. top-left, top-right, bottom-left, bottom-right
       * primaryplacement: top|bottom
       * availablePlacementArr: array in which available placemets to be set
       */
    function (hostElemClientRect, targetElemClientRect, primaryPlacement, availablePlacementArr) {
        var html = document.documentElement;
        // check for left-bottom
        if ((window.innerWidth || html.clientWidth) - hostElemClientRect.left >= targetElemClientRect.width) {
            availablePlacementArr.splice(availablePlacementArr.length, 1, primaryPlacement + '-left');
        }
        if (targetElemClientRect.width <= hostElemClientRect.right) {
            availablePlacementArr.splice(availablePlacementArr.length, 1, primaryPlacement + '-right');
        }
    };
    return Positioning;
}());
// previous version:
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js

var positionService = new Positioning();
/*
 * Accept the placement array and applies the appropriate placement dependent on the viewport.
 * Returns the applied placement.
 * In case of auto placement, placements are selected in order 'top', 'bottom', 'left', 'right'.
 * */
function positionElements(hostElement, targetElement, placement, appendToBody) {
    var placementVals = Array.isArray(placement) ? placement : [placement];
    // replace auto placement with other placements
    var hasAuto = placementVals.findIndex(function (val) { return val === 'auto'; });
    if (hasAuto >= 0) {
        ['top', 'right', 'bottom', 'left'].forEach(function (obj) {
            if (placementVals.find(function (val) { return val.search('^' + obj + '|^' + obj + '-') !== -1; }) == null) {
                placementVals.splice(hasAuto++, 1, obj);
            }
        });
    }
    // coordinates where to position
    var topVal = 0, leftVal = 0;
    var appliedPlacement;
    // get available placements
    var availablePlacements = positionService.getAvailablePlacements(hostElement, targetElement);
    var _loop_1 = function (item, index) {
        // check if passed placement is present in the available placement or otherwise apply the last placement in the
        // passed placement list
        if ((availablePlacements.find(function (val) { return val === item; }) != null) || (placementVals.length === index + 1)) {
            appliedPlacement = item;
            var pos = positionService.positionElements(hostElement, targetElement, item, appendToBody);
            topVal = pos.top;
            leftVal = pos.left;
            return "break";
        }
    };
    // iterate over all the passed placements
    for (var _i = 0, _a = toItemIndexes(placementVals); _i < _a.length; _i++) {
        var _b = _a[_i], item = _b.item, index = _b.index;
        var state_1 = _loop_1(item, index);
        if (state_1 === "break")
            break;
    }
    targetElement.style.top = topVal + "px";
    targetElement.style.left = leftVal + "px";
    return appliedPlacement;
}
// function to get index and item of an array
function toItemIndexes(a) {
    return a.map(function (item, index) { return ({ item: item, index: index }); });
}
//# sourceMappingURL=positioning.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/util/triggers.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/util/triggers.js ***!
  \******************************************************************/
/*! exports provided: Trigger, parseTriggers, listenToTriggers, ɵ0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trigger", function() { return Trigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseTriggers", function() { return parseTriggers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listenToTriggers", function() { return listenToTriggers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
var Trigger = (function () {
    function Trigger(open, close) {
        this.open = open;
        this.close = close;
        if (!close) {
            this.close = open;
        }
    }
    Trigger.prototype.isManual = function () { return this.open === 'manual' || this.close === 'manual'; };
    return Trigger;
}());

var DEFAULT_ALIASES = {
    'hover': ['mouseenter', 'mouseleave']
};
function parseTriggers(triggers, aliases) {
    if (aliases === void 0) { aliases = DEFAULT_ALIASES; }
    var trimmedTriggers = (triggers || '').trim();
    if (trimmedTriggers.length === 0) {
        return [];
    }
    var parsedTriggers = trimmedTriggers.split(/\s+/).map(function (trigger) { return trigger.split(':'); }).map(function (triggerPair) {
        var alias = aliases[triggerPair[0]] || triggerPair;
        return new Trigger(alias[0], alias[1]);
    });
    var manualTriggers = parsedTriggers.filter(function (triggerPair) { return triggerPair.isManual(); });
    if (manualTriggers.length > 1) {
        throw 'Triggers parse error: only one manual trigger is allowed';
    }
    if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
        throw 'Triggers parse error: manual trigger can\'t be mixed with other triggers';
    }
    return parsedTriggers;
}
var noopFn = function () { };
var ɵ0 = noopFn;
function listenToTriggers(renderer, nativeElement, triggers, openFn, closeFn, toggleFn) {
    var parsedTriggers = parseTriggers(triggers);
    var listeners = [];
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return noopFn;
    }
    parsedTriggers.forEach(function (trigger) {
        if (trigger.open === trigger.close) {
            listeners.push(renderer.listen(nativeElement, trigger.open, toggleFn));
        }
        else {
            listeners.push(renderer.listen(nativeElement, trigger.open, openFn), renderer.listen(nativeElement, trigger.close, closeFn));
        }
    });
    return function () { listeners.forEach(function (unsubscribeFn) { return unsubscribeFn(); }); };
}

//# sourceMappingURL=triggers.js.map

/***/ }),

/***/ "./node_modules/@ng-bootstrap/ng-bootstrap/util/util.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ng-bootstrap/ng-bootstrap/util/util.js ***!
  \**************************************************************/
/*! exports provided: toInteger, toString, getValueInRange, isString, isNumber, isInteger, isDefined, padNumber, regExpEscape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toInteger", function() { return toInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return toString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValueInRange", function() { return getValueInRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInteger", function() { return isInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return isDefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "padNumber", function() { return padNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regExpEscape", function() { return regExpEscape; });
function toInteger(value) {
    return parseInt("" + value, 10);
}
function toString(value) {
    return (value !== undefined && value !== null) ? "" + value : '';
}
function getValueInRange(value, max, min) {
    if (min === void 0) { min = 0; }
    return Math.max(Math.min(value, max), min);
}
function isString(value) {
    return typeof value === 'string';
}
function isNumber(value) {
    return !isNaN(toInteger(value));
}
function isInteger(value) {
    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}
function isDefined(value) {
    return value !== undefined && value !== null;
}
function padNumber(value) {
    if (isNumber(value)) {
        return ("0" + value).slice(-2);
    }
    else {
        return '';
    }
}
function regExpEscape(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}
//# sourceMappingURL=util.js.map

/***/ }),

/***/ "./node_modules/ngx-facebook/dist/esm/components/fb-page/fb-page.js":
/*!**************************************************************************!*\
  !*** ./node_modules/ngx-facebook/dist/esm/components/fb-page/fb-page.js ***!
  \**************************************************************************/
/*! exports provided: FBPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FBPageComponent", function() { return FBPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fbml_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fbml-component */ "./node_modules/ngx-facebook/dist/esm/components/fbml-component.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name Page Plugin
 * @shortdesc Page plugin component
 * @fbdoc https://developers.facebook.com/docs/plugins/page-plugin
 * @description
 * The Page plugin lets you easily embed and promote any Facebook Page on your website. Just like on Facebook, your visitors can like and share the Page without leaving your site.
 * @usage
 * ```html
 * <fb-page href="https://facebook.com/facebook"></fb-page>
 * ```
 */
var FBPageComponent = (function (_super) {
    __extends(FBPageComponent, _super);
    function FBPageComponent(el, rnd) {
        return _super.call(this, el, rnd, 'fb-page') || this;
    }
    return FBPageComponent;
}(_fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLComponent"]));

FBPageComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'fb-page',
                template: ''
            },] },
];
/** @nocollapse */
FBPageComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], },
]; };
FBPageComponent.propDecorators = {
    'href': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'width': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'height': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'tabs': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'hideCover': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'showFacepile': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'hideCTA': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'smallHeader': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'adaptContainerWidth': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
};
__decorate([
    _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
    __metadata("design:type", String)
], FBPageComponent.prototype, "href", void 0);
__decorate([
    _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
    __metadata("design:type", Number)
], FBPageComponent.prototype, "width", void 0);
__decorate([
    _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
    __metadata("design:type", Number)
], FBPageComponent.prototype, "height", void 0);
__decorate([
    _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
    __metadata("design:type", String)
], FBPageComponent.prototype, "tabs", void 0);
__decorate([
    _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
    __metadata("design:type", Boolean)
], FBPageComponent.prototype, "hideCover", void 0);
__decorate([
    _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
    __metadata("design:type", Boolean)
], FBPageComponent.prototype, "showFacepile", void 0);
__decorate([
    _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
    __metadata("design:type", Boolean)
], FBPageComponent.prototype, "hideCTA", void 0);
__decorate([
    _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
    __metadata("design:type", Boolean)
], FBPageComponent.prototype, "smallHeader", void 0);
__decorate([
    _fbml_component__WEBPACK_IMPORTED_MODULE_1__["FBMLAttribute"],
    __metadata("design:type", Boolean)
], FBPageComponent.prototype, "adaptContainerWidth", void 0);
//# sourceMappingURL=fb-page.js.map

/***/ }),

/***/ "./node_modules/ngx-facebook/dist/esm/components/fb-page/fb-page.ngfactory.js":
/*!************************************************************************************!*\
  !*** ./node_modules/ngx-facebook/dist/esm/components/fb-page/fb-page.ngfactory.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./fb-page */ "./node_modules/ngx-facebook/dist/esm/components/fb-page/fb-page.js");
var styles_FBPageComponent = [];
var RenderType_FBPageComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_FBPageComponent, data: {} });
exports.RenderType_FBPageComponent = RenderType_FBPageComponent;
function View_FBPageComponent_0(_l) { return i0.ɵvid(0, [], null, null); }
exports.View_FBPageComponent_0 = View_FBPageComponent_0;
function View_FBPageComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "fb-page", [], null, null, null, View_FBPageComponent_0, RenderType_FBPageComponent)), i0.ɵdid(1, 49152, null, 0, i1.FBPageComponent, [i0.ElementRef, i0.Renderer], null, null)], null, null); }
exports.View_FBPageComponent_Host_0 = View_FBPageComponent_Host_0;
var FBPageComponentNgFactory = i0.ɵccf("fb-page", i1.FBPageComponent, View_FBPageComponent_Host_0, { href: "href", width: "width", height: "height", tabs: "tabs", hideCover: "hideCover", showFacepile: "showFacepile", hideCTA: "hideCTA", smallHeader: "smallHeader", adaptContainerWidth: "adaptContainerWidth" }, {}, []);
exports.FBPageComponentNgFactory = FBPageComponentNgFactory;


/***/ }),

/***/ "./node_modules/ngx-facebook/dist/esm/components/fbml-component.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ngx-facebook/dist/esm/components/fbml-component.js ***!
  \*************************************************************************/
/*! exports provided: FBMLAttribute, FBMLInstanceMethod, FBMLComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FBMLAttribute", function() { return FBMLAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FBMLInstanceMethod", function() { return FBMLInstanceMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FBMLComponent", function() { return FBMLComponent; });
/**
 * @hidden
 */
function FBMLAttribute(target, key) {
    var processKey = function (_k) { return 'data-' + _k.toString().replace(/([a-z\d])([A-Z])/g, '$1-$2').toLowerCase(); };
    Object.defineProperty(target, key, {
        set: function (value) {
            value = value.toString();
            this.setAttribute(processKey(key), value);
        },
        get: function () {
            return this.getAttribute(processKey(key));
        },
        enumerable: true
    });
}
/**
 * @hidden
 */
function FBMLInstanceMethod(target, key) {
    return {
        enumerable: true,
        value: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (this._instance) {
                return this._instance[key].apply(this._instance, args);
            }
            else {
                console.warn('ng2-facebook-sdk: tried calling instance method before component is ready.');
                return null;
            }
        }
    };
}
/**
 * @hidden
 */
var FBMLComponent = (function () {
    function FBMLComponent(el, rnd, fbClass) {
        this.el = el;
        this.rnd = rnd;
        this.fbClass = fbClass;
        this.nativeElement = this.el.nativeElement;
        this.rnd.setElementClass(this.nativeElement, this.fbClass, true);
    }
    FBMLComponent.prototype.setAttribute = function (name, value) {
        if (!name || !value)
            return;
        this.rnd.setElementAttribute(this.nativeElement, name, value);
    };
    FBMLComponent.prototype.getAttribute = function (name) {
        if (!name)
            return;
        return this.nativeElement.getAttribute(name);
    };
    return FBMLComponent;
}());

//# sourceMappingURL=fbml-component.js.map

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var page_not_found_component_1 = __webpack_require__(/*! ./core/page-not-found.component */ "./src/app/core/page-not-found.component.ts");
var routes = [
    // { path: '', component: SurfHomeComponent },
    { path: '', redirectTo: '/surfhome', pathMatch: 'full' },
    { path: '**', component: page_not_found_component_1.PageNotFoundComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./app.component.sass.shim.ngstyle */ "./src/app/app.component.sass.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ./core/catch-scroll-outerzone.directive */ "./src/app/core/catch-scroll-outerzone.directive.ts");
var i3 = __webpack_require__(/*! ./core/pass-scrolling-data.service */ "./src/app/core/pass-scrolling-data.service.ts");
var i4 = __webpack_require__(/*! ./top-menu/top-menu.component.ngfactory */ "./src/app/top-menu/top-menu.component.ngfactory.js");
var i5 = __webpack_require__(/*! ./top-menu/top-menu.component */ "./src/app/top-menu/top-menu.component.ts");
var i6 = __webpack_require__(/*! ./core/menu.service */ "./src/app/core/menu.service.ts");
var i7 = __webpack_require__(/*! ./core/resize.service */ "./src/app/core/resize.service.ts");
var i8 = __webpack_require__(/*! ./core/window-ref.service */ "./src/app/core/window-ref.service.ts");
var i9 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i10 = __webpack_require__(/*! ./surf-footer/surf-footer.component.ngfactory */ "./src/app/surf-footer/surf-footer.component.ngfactory.js");
var i11 = __webpack_require__(/*! ./surf-footer/surf-footer.component */ "./src/app/surf-footer/surf-footer.component.ts");
var i12 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var styles_AppComponent = [i0.styles];
var RenderType_AppComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_AppComponent, data: {} });
exports.RenderType_AppComponent = RenderType_AppComponent;
function View_AppComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 7, "div", [["class", "main-surf-wrapper"], ["surfCatchScrollOuterzone", ""]], null, null, null, null, null)), i1.ɵdid(1, 16384, null, 0, i2.CatchScrollOuterzoneDirective, [i1.NgZone, i1.ElementRef, i1.Renderer2, i3.PassScrollingDataService], null, null), (_l()(), i1.ɵeld(2, 0, null, null, 1, "surf-topmenu", [], null, null, null, i4.View_TopMenuComponent_0, i4.RenderType_TopMenuComponent)), i1.ɵdid(3, 245760, null, 0, i5.TopMenuComponent, [i6.MenuService, i7.ResizeService, i8.WINDOW], null, null), (_l()(), i1.ɵeld(4, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), i1.ɵdid(5, 212992, null, 0, i9.RouterOutlet, [i9.ChildrenOutletContexts, i1.ViewContainerRef, i1.ComponentFactoryResolver, [8, null], i1.ChangeDetectorRef], null, null), (_l()(), i1.ɵeld(6, 0, null, null, 1, "surf-footer", [], null, null, null, i10.View_SurfFooterComponent_0, i10.RenderType_SurfFooterComponent)), i1.ɵdid(7, 114688, null, 0, i11.SurfFooterComponent, [], null, null)], function (_ck, _v) { _ck(_v, 3, 0); _ck(_v, 5, 0); _ck(_v, 7, 0); }, null); }
exports.View_AppComponent_0 = View_AppComponent_0;
function View_AppComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "surf-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), i1.ɵdid(1, 4243456, null, 0, i12.AppComponent, [], null, null)], null, null); }
exports.View_AppComponent_Host_0 = View_AppComponent_Host_0;
var AppComponentNgFactory = i1.ɵccf("surf-root", i12.AppComponent, View_AppComponent_Host_0, {}, {}, []);
exports.AppComponentNgFactory = AppComponentNgFactory;


/***/ }),

/***/ "./src/app/app.component.sass.shim.ngstyle.js":
/*!****************************************************!*\
  !*** ./src/app/app.component.sass.shim.ngstyle.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".main-surf-wrapper[_nghost-%COMP%] {\n  display: block;\n  height: 100%; }"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngAfterViewInit = function () { };
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/app.server.module.ngfactory.js":
/*!************************************************!*\
  !*** ./src/app/app.server.module.ngfactory.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./app.server.module */ "./src/app/app.server.module.ts");
var i2 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var i3 = __webpack_require__(/*! ../../node_modules/@ng-bootstrap/ng-bootstrap/alert/alert.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/alert/alert.ngfactory.js");
var i4 = __webpack_require__(/*! ../../node_modules/@ng-bootstrap/ng-bootstrap/tooltip/tooltip.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/tooltip/tooltip.ngfactory.js");
var i5 = __webpack_require__(/*! ../../node_modules/@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window.ngfactory.js");
var i6 = __webpack_require__(/*! ../../node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/datepicker.ngfactory.js");
var i7 = __webpack_require__(/*! ../../node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-backdrop.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-backdrop.ngfactory.js");
var i8 = __webpack_require__(/*! ../../node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-window.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-window.ngfactory.js");
var i9 = __webpack_require__(/*! ../../node_modules/@ng-bootstrap/ng-bootstrap/popover/popover.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/popover/popover.ngfactory.js");
var i10 = __webpack_require__(/*! ./surf-home/surf-home.component.ngfactory */ "./src/app/surf-home/surf-home.component.ngfactory.js");
var i11 = __webpack_require__(/*! ./blog/post-list/post-list.component.ngfactory */ "./src/app/blog/post-list/post-list.component.ngfactory.js");
var i12 = __webpack_require__(/*! ./blog/post/post.component.ngfactory */ "./src/app/blog/post/post.component.ngfactory.js");
var i13 = __webpack_require__(/*! ./core/page-not-found.component.ngfactory */ "./src/app/core/page-not-found.component.ngfactory.js");
var i14 = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
var i15 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i16 = __webpack_require__(/*! ./core/window-ref.service */ "./src/app/core/window-ref.service.ts");
var i17 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var i18 = __webpack_require__(/*! ./core/resize.service */ "./src/app/core/resize.service.ts");
var i19 = __webpack_require__(/*! ./core/menu.service */ "./src/app/core/menu.service.ts");
var i20 = __webpack_require__(/*! ./core/pass-scrolling-data.service */ "./src/app/core/pass-scrolling-data.service.ts");
var i21 = __webpack_require__(/*! ./core/services/logger.service */ "./src/app/core/services/logger.service.ts");
var i22 = __webpack_require__(/*! @angular/service-worker */ "@angular/service-worker");
var i23 = __webpack_require__(/*! ./core/sw-updates/sw-updates.service */ "./src/app/core/sw-updates/sw-updates.service.ts");
var i24 = __webpack_require__(/*! ./core/services/location.service */ "./src/app/core/services/location.service.ts");
var i25 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i26 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var i27 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/modal/modal-stack */ "@ng-bootstrap/ng-bootstrap/modal/modal-stack");
var i28 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/modal/modal */ "@ng-bootstrap/ng-bootstrap/modal/modal");
var i29 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/alert/alert-config */ "@ng-bootstrap/ng-bootstrap/alert/alert-config");
var i30 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/progressbar/progressbar-config */ "@ng-bootstrap/ng-bootstrap/progressbar/progressbar-config");
var i31 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/tooltip/tooltip-config */ "@ng-bootstrap/ng-bootstrap/tooltip/tooltip-config");
var i32 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/typeahead/typeahead-config */ "@ng-bootstrap/ng-bootstrap/typeahead/typeahead-config");
var i33 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/accordion/accordion-config */ "@ng-bootstrap/ng-bootstrap/accordion/accordion-config");
var i34 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/carousel/carousel-config */ "@ng-bootstrap/ng-bootstrap/carousel/carousel-config");
var i35 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar */ "@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar");
var i36 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n */ "@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n");
var i37 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/datepicker/ngb-date-parser-formatter */ "@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-parser-formatter");
var i38 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/datepicker/ngb-date-adapter */ "@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-adapter");
var i39 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/datepicker/datepicker-config */ "@ng-bootstrap/ng-bootstrap/datepicker/datepicker-config");
var i40 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/dropdown/dropdown-config */ "@ng-bootstrap/ng-bootstrap/dropdown/dropdown-config");
var i41 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/pagination/pagination-config */ "@ng-bootstrap/ng-bootstrap/pagination/pagination-config");
var i42 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/popover/popover-config */ "@ng-bootstrap/ng-bootstrap/popover/popover-config");
var i43 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/rating/rating-config */ "@ng-bootstrap/ng-bootstrap/rating/rating-config");
var i44 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/tabset/tabset-config */ "@ng-bootstrap/ng-bootstrap/tabset/tabset-config");
var i45 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/timepicker/timepicker-config */ "@ng-bootstrap/ng-bootstrap/timepicker/timepicker-config");
var i46 = __webpack_require__(/*! @angular/platform-server */ "@angular/platform-server");
var i47 = __webpack_require__(/*! @angular/animations/browser */ "@angular/animations/browser");
var i48 = __webpack_require__(/*! @angular/platform-browser/animations */ "@angular/platform-browser/animations");
var i49 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var i50 = __webpack_require__(/*! @angular/animations */ "@angular/animations");
var i51 = __webpack_require__(/*! ./surf-home/board.service */ "./src/app/surf-home/board.service.ts");
var i52 = __webpack_require__(/*! ./core/services/ajax-api.service */ "./src/app/core/services/ajax-api.service.ts");
var i53 = __webpack_require__(/*! ./blog/blog.service */ "./src/app/blog/blog.service.ts");
var i54 = __webpack_require__(/*! ./blog/blog-item-resolver.service */ "./src/app/blog/blog-item-resolver.service.ts");
var i55 = __webpack_require__(/*! ./blog/blog-resolver.service */ "./src/app/blog/blog-resolver.service.ts");
var i56 = __webpack_require__(/*! ngx-facebook/dist/esm/providers/facebook */ "ngx-facebook/dist/esm/providers/facebook");
var i57 = __webpack_require__(/*! @angular/http */ "@angular/http");
var i58 = __webpack_require__(/*! ./core/surf-carousel/surf-carousel.module */ "./src/app/core/surf-carousel/surf-carousel.module.ts");
var i59 = __webpack_require__(/*! ./core/surf-carousel-2/surf-carousel-2.module */ "./src/app/core/surf-carousel-2/surf-carousel-2.module.ts");
var i60 = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
var i61 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/alert/alert.module */ "@ng-bootstrap/ng-bootstrap/alert/alert.module");
var i62 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/buttons/buttons.module */ "@ng-bootstrap/ng-bootstrap/buttons/buttons.module");
var i63 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/collapse/collapse.module */ "@ng-bootstrap/ng-bootstrap/collapse/collapse.module");
var i64 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/progressbar/progressbar.module */ "@ng-bootstrap/ng-bootstrap/progressbar/progressbar.module");
var i65 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/tooltip/tooltip.module */ "@ng-bootstrap/ng-bootstrap/tooltip/tooltip.module");
var i66 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/typeahead/typeahead.module */ "@ng-bootstrap/ng-bootstrap/typeahead/typeahead.module");
var i67 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/accordion/accordion.module */ "@ng-bootstrap/ng-bootstrap/accordion/accordion.module");
var i68 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/carousel/carousel.module */ "@ng-bootstrap/ng-bootstrap/carousel/carousel.module");
var i69 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/datepicker/datepicker.module */ "@ng-bootstrap/ng-bootstrap/datepicker/datepicker.module");
var i70 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/dropdown/dropdown.module */ "@ng-bootstrap/ng-bootstrap/dropdown/dropdown.module");
var i71 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/modal/modal.module */ "@ng-bootstrap/ng-bootstrap/modal/modal.module");
var i72 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/pagination/pagination.module */ "@ng-bootstrap/ng-bootstrap/pagination/pagination.module");
var i73 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/popover/popover.module */ "@ng-bootstrap/ng-bootstrap/popover/popover.module");
var i74 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/rating/rating.module */ "@ng-bootstrap/ng-bootstrap/rating/rating.module");
var i75 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/tabset/tabset.module */ "@ng-bootstrap/ng-bootstrap/tabset/tabset.module");
var i76 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/timepicker/timepicker.module */ "@ng-bootstrap/ng-bootstrap/timepicker/timepicker.module");
var i77 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "@ng-bootstrap/ng-bootstrap");
var i78 = __webpack_require__(/*! ngx-facebook/dist/esm/facebook.module */ "ngx-facebook/dist/esm/facebook.module");
var i79 = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
var i80 = __webpack_require__(/*! ./surf-home/surf-home.component */ "./src/app/surf-home/surf-home.component.ts");
var i81 = __webpack_require__(/*! ./blog/post-list/post-list.component */ "./src/app/blog/post-list/post-list.component.ts");
var i82 = __webpack_require__(/*! ./blog/post/post.component */ "./src/app/blog/post/post.component.ts");
var i83 = __webpack_require__(/*! ./core/page-not-found.component */ "./src/app/core/page-not-found.component.ts");
var i84 = __webpack_require__(/*! ./top-menu/top-menu.module */ "./src/app/top-menu/top-menu.module.ts");
var i85 = __webpack_require__(/*! ./surf-home/surf-home-routing.module */ "./src/app/surf-home/surf-home-routing.module.ts");
var i86 = __webpack_require__(/*! ./surf-home/surf-home.module */ "./src/app/surf-home/surf-home.module.ts");
var i87 = __webpack_require__(/*! ./surf-footer/surf-footer.module */ "./src/app/surf-footer/surf-footer.module.ts");
var i88 = __webpack_require__(/*! ./blog/blog-routing.module */ "./src/app/blog/blog-routing.module.ts");
var i89 = __webpack_require__(/*! ./blog/blog.module */ "./src/app/blog/blog.module.ts");
var i90 = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
var i91 = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
var AppServerModuleNgFactory = i0.ɵcmf(i1.AppServerModule, [i2.AppComponent], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i3.NgbAlertNgFactory, i4.NgbTooltipWindowNgFactory, i5.NgbTypeaheadWindowNgFactory, i6.NgbDatepickerNgFactory, i7.NgbModalBackdropNgFactory, i8.NgbModalWindowNgFactory, i9.NgbPopoverWindowNgFactory, i10.SurfHomeComponentNgFactory, i11.PostListComponentNgFactory, i12.PostComponentNgFactory, i13.PageNotFoundComponentNgFactory, i14.AppComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(5120, i0.LOCALE_ID, i0.ɵangular_packages_core_core_l, [[3, i0.LOCALE_ID]]), i0.ɵmpd(4608, i15.NgLocalization, i15.NgLocaleLocalization, [i0.LOCALE_ID, [2, i15.ɵangular_packages_common_common_a]]), i0.ɵmpd(4608, i16.WindowRef, i16.BrowserWindowRef, []), i0.ɵmpd(5120, i16.WINDOW, i16.windowFactory, [i16.WindowRef, i0.PLATFORM_ID]), i0.ɵmpd(4608, i17.HAMMER_GESTURE_CONFIG, i17.HammerGestureConfig, []), i0.ɵmpd(5120, i17.EVENT_MANAGER_PLUGINS, function (p0_0, p0_1, p1_0, p2_0, p2_1, p2_2) { return [new i17.ɵDomEventsPlugin(p0_0, p0_1), new i17.ɵKeyEventsPlugin(p1_0), new i17.ɵHammerGesturesPlugin(p2_0, p2_1, p2_2)]; }, [i15.DOCUMENT, i0.NgZone, i15.DOCUMENT, i15.DOCUMENT, i17.HAMMER_GESTURE_CONFIG, i0.ɵConsole]), i0.ɵmpd(4608, i17.EventManager, i17.EventManager, [i17.EVENT_MANAGER_PLUGINS, i0.NgZone]), i0.ɵmpd(4608, i18.ResizeService, i18.ResizeService, [i17.EventManager]), i0.ɵmpd(4608, i19.MenuService, i19.MenuService, []), i0.ɵmpd(4608, i20.PassScrollingDataService, i20.PassScrollingDataService, []), i0.ɵmpd(4608, i21.Logger, i21.Logger, [i0.ErrorHandler]), i0.ɵmpd(5120, i22.ɵangular_packages_service_worker_service_worker_e, i22.ɵangular_packages_service_worker_service_worker_d, [i22.ɵangular_packages_service_worker_service_worker_a, i0.PLATFORM_ID]), i0.ɵmpd(4608, i22.SwUpdate, i22.SwUpdate, [i22.ɵangular_packages_service_worker_service_worker_e]), i0.ɵmpd(135680, i23.SwUpdatesService, i23.SwUpdatesService, [i0.ApplicationRef, i21.Logger, i22.SwUpdate]), i0.ɵmpd(4608, i24.LocationService, i24.LocationService, [i25.Router, i16.WINDOW, i23.SwUpdatesService]), i0.ɵmpd(4608, i26.ɵangular_packages_forms_forms_i, i26.ɵangular_packages_forms_forms_i, []), i0.ɵmpd(4608, i27.NgbModalStack, i27.NgbModalStack, [i0.ApplicationRef, i0.Injector, i0.ComponentFactoryResolver, i15.DOCUMENT]), i0.ɵmpd(4608, i28.NgbModal, i28.NgbModal, [i0.ComponentFactoryResolver, i0.Injector, i27.NgbModalStack]), i0.ɵmpd(4608, i29.NgbAlertConfig, i29.NgbAlertConfig, []), i0.ɵmpd(4608, i30.NgbProgressbarConfig, i30.NgbProgressbarConfig, []), i0.ɵmpd(4608, i31.NgbTooltipConfig, i31.NgbTooltipConfig, []), i0.ɵmpd(4608, i32.NgbTypeaheadConfig, i32.NgbTypeaheadConfig, []), i0.ɵmpd(4608, i33.NgbAccordionConfig, i33.NgbAccordionConfig, []), i0.ɵmpd(4608, i34.NgbCarouselConfig, i34.NgbCarouselConfig, []), i0.ɵmpd(4608, i35.NgbCalendar, i35.NgbCalendarGregorian, []), i0.ɵmpd(4608, i36.NgbDatepickerI18n, i36.NgbDatepickerI18nDefault, []), i0.ɵmpd(4608, i37.NgbDateParserFormatter, i37.NgbDateISOParserFormatter, []), i0.ɵmpd(4608, i38.NgbDateAdapter, i38.NgbDateStructAdapter, []), i0.ɵmpd(4608, i39.NgbDatepickerConfig, i39.NgbDatepickerConfig, []), i0.ɵmpd(4608, i40.NgbDropdownConfig, i40.NgbDropdownConfig, []), i0.ɵmpd(4608, i41.NgbPaginationConfig, i41.NgbPaginationConfig, []), i0.ɵmpd(4608, i42.NgbPopoverConfig, i42.NgbPopoverConfig, []), i0.ɵmpd(4608, i43.NgbRatingConfig, i43.NgbRatingConfig, []), i0.ɵmpd(4608, i44.NgbTabsetConfig, i44.NgbTabsetConfig, []), i0.ɵmpd(4608, i45.NgbTimepickerConfig, i45.NgbTimepickerConfig, []), i0.ɵmpd(5120, i0.IterableDiffers, i0.ɵangular_packages_core_core_j, []), i0.ɵmpd(5120, i0.KeyValueDiffers, i0.ɵangular_packages_core_core_k, []), i0.ɵmpd(4608, i17.DomSanitizer, i17.ɵangular_packages_platform_browser_platform_browser_e, [i15.DOCUMENT]), i0.ɵmpd(6144, i0.Sanitizer, null, [i17.DomSanitizer]), i0.ɵmpd(135680, i17.ɵDomSharedStylesHost, i17.ɵDomSharedStylesHost, [i15.DOCUMENT]), i0.ɵmpd(4608, i17.ɵDomRendererFactory2, i17.ɵDomRendererFactory2, [i17.EventManager, i17.ɵDomSharedStylesHost]), i0.ɵmpd(4608, i46.ɵangular_packages_platform_server_platform_server_c, i46.ɵangular_packages_platform_server_platform_server_c, [i17.DOCUMENT, [2, i17.ɵTRANSITION_ID]]), i0.ɵmpd(6144, i17.ɵSharedStylesHost, null, [i46.ɵangular_packages_platform_server_platform_server_c]), i0.ɵmpd(4608, i46.ɵServerRendererFactory2, i46.ɵServerRendererFactory2, [i0.NgZone, i17.DOCUMENT, i17.ɵSharedStylesHost]), i0.ɵmpd(4608, i47.AnimationDriver, i47.ɵNoopAnimationDriver, []), i0.ɵmpd(5120, i47.ɵAnimationStyleNormalizer, i48.ɵangular_packages_platform_browser_animations_animations_c, []), i0.ɵmpd(4608, i47.ɵAnimationEngine, i48.ɵangular_packages_platform_browser_animations_animations_a, [i47.AnimationDriver, i47.ɵAnimationStyleNormalizer]), i0.ɵmpd(5120, i0.RendererFactory2, i46.ɵangular_packages_platform_server_platform_server_a, [i46.ɵServerRendererFactory2, i47.ɵAnimationEngine, i0.NgZone]), i0.ɵmpd(4352, i0.Testability, null, []), i0.ɵmpd(4608, i17.Meta, i17.Meta, [i15.DOCUMENT]), i0.ɵmpd(4608, i17.Title, i17.Title, [i15.DOCUMENT]), i0.ɵmpd(4608, i49.HttpXsrfTokenExtractor, i49.ɵangular_packages_common_http_http_h, [i15.DOCUMENT, i0.PLATFORM_ID, i49.ɵangular_packages_common_http_http_f]), i0.ɵmpd(4608, i49.ɵangular_packages_common_http_http_i, i49.ɵangular_packages_common_http_http_i, [i49.HttpXsrfTokenExtractor, i49.ɵangular_packages_common_http_http_g]), i0.ɵmpd(5120, i49.HTTP_INTERCEPTORS, function (p0_0) { return [p0_0]; }, [i49.ɵangular_packages_common_http_http_i]), i0.ɵmpd(4608, i49.XhrFactory, i46.ɵangular_packages_platform_server_platform_server_d, []), i0.ɵmpd(4608, i49.HttpXhrBackend, i49.HttpXhrBackend, [i49.XhrFactory]), i0.ɵmpd(6144, i49.HttpBackend, null, [i49.HttpXhrBackend]), i0.ɵmpd(5120, i49.HttpHandler, i46.ɵangular_packages_platform_server_platform_server_g, [i49.HttpBackend, [2, i49.HTTP_INTERCEPTORS]]), i0.ɵmpd(4608, i49.HttpClient, i49.HttpClient, [i49.HttpHandler]), i0.ɵmpd(4608, i49.ɵangular_packages_common_http_http_e, i49.ɵangular_packages_common_http_http_e, []), i0.ɵmpd(4608, i22.SwPush, i22.SwPush, [i22.ɵangular_packages_service_worker_service_worker_e]), i0.ɵmpd(4608, i50.AnimationBuilder, i48.ɵBrowserAnimationBuilder, [i0.RendererFactory2, i17.DOCUMENT]), i0.ɵmpd(4608, i51.BoardService, i51.BoardService, [i52.AjaxApiService]), i0.ɵmpd(4608, i53.BlogService, i53.BlogService, [i52.AjaxApiService]), i0.ɵmpd(4608, i54.BlogItemResolver, i54.BlogItemResolver, [i53.BlogService, i25.Router]), i0.ɵmpd(4608, i55.BlogResolver, i55.BlogResolver, [i53.BlogService, i25.Router]), i0.ɵmpd(5120, i25.ActivatedRoute, i25.ɵangular_packages_router_router_f, [i25.Router]), i0.ɵmpd(4608, i25.NoPreloading, i25.NoPreloading, []), i0.ɵmpd(6144, i25.PreloadingStrategy, null, [i25.NoPreloading]), i0.ɵmpd(135680, i25.RouterPreloader, i25.RouterPreloader, [i25.Router, i0.NgModuleFactoryLoader, i0.Compiler, i0.Injector, i25.PreloadingStrategy]), i0.ɵmpd(4608, i25.PreloadAllModules, i25.PreloadAllModules, []), i0.ɵmpd(5120, i25.ROUTER_INITIALIZER, i25.ɵangular_packages_router_router_i, [i25.ɵangular_packages_router_router_g]), i0.ɵmpd(5120, i0.APP_BOOTSTRAP_LISTENER, function (p0_0) { return [p0_0]; }, [i25.ROUTER_INITIALIZER]), i0.ɵmpd(4608, i56.FacebookService, i56.FacebookService, []), i0.ɵmpd(4608, i57.BrowserXhr, i46.ɵangular_packages_platform_server_platform_server_d, []), i0.ɵmpd(4608, i57.ResponseOptions, i57.BaseResponseOptions, []), i0.ɵmpd(4608, i57.XSRFStrategy, i46.ɵangular_packages_platform_server_platform_server_e, []), i0.ɵmpd(4608, i57.XHRBackend, i57.XHRBackend, [i57.BrowserXhr, i57.ResponseOptions, i57.XSRFStrategy]), i0.ɵmpd(4608, i57.RequestOptions, i57.BaseRequestOptions, []), i0.ɵmpd(5120, i57.Http, i46.ɵangular_packages_platform_server_platform_server_f, [i57.XHRBackend, i57.RequestOptions]), i0.ɵmpd(1073742336, i15.CommonModule, i15.CommonModule, []), i0.ɵmpd(1073742336, i58.SurfCarouselModule, i58.SurfCarouselModule, []), i0.ɵmpd(1073742336, i59.SurfCarousel2Module, i59.SurfCarousel2Module, []), i0.ɵmpd(1073742336, i60.CoreModule, i60.CoreModule, [[3, i60.CoreModule]]), i0.ɵmpd(1073742336, i61.NgbAlertModule, i61.NgbAlertModule, []), i0.ɵmpd(1073742336, i62.NgbButtonsModule, i62.NgbButtonsModule, []), i0.ɵmpd(1073742336, i63.NgbCollapseModule, i63.NgbCollapseModule, []), i0.ɵmpd(1073742336, i64.NgbProgressbarModule, i64.NgbProgressbarModule, []), i0.ɵmpd(1073742336, i65.NgbTooltipModule, i65.NgbTooltipModule, []), i0.ɵmpd(1073742336, i66.NgbTypeaheadModule, i66.NgbTypeaheadModule, []), i0.ɵmpd(1073742336, i67.NgbAccordionModule, i67.NgbAccordionModule, []), i0.ɵmpd(1073742336, i68.NgbCarouselModule, i68.NgbCarouselModule, []), i0.ɵmpd(1073742336, i26.ɵangular_packages_forms_forms_bb, i26.ɵangular_packages_forms_forms_bb, []), i0.ɵmpd(1073742336, i26.FormsModule, i26.FormsModule, []), i0.ɵmpd(1073742336, i69.NgbDatepickerModule, i69.NgbDatepickerModule, []), i0.ɵmpd(1073742336, i70.NgbDropdownModule, i70.NgbDropdownModule, []), i0.ɵmpd(1073742336, i71.NgbModalModule, i71.NgbModalModule, []), i0.ɵmpd(1073742336, i72.NgbPaginationModule, i72.NgbPaginationModule, []), i0.ɵmpd(1073742336, i73.NgbPopoverModule, i73.NgbPopoverModule, []), i0.ɵmpd(1073742336, i74.NgbRatingModule, i74.NgbRatingModule, []), i0.ɵmpd(1073742336, i75.NgbTabsetModule, i75.NgbTabsetModule, []), i0.ɵmpd(1073742336, i76.NgbTimepickerModule, i76.NgbTimepickerModule, []), i0.ɵmpd(1073742336, i77.NgbRootModule, i77.NgbRootModule, []), i0.ɵmpd(1073742336, i78.FacebookModule, i78.FacebookModule, []), i0.ɵmpd(1024, i0.ErrorHandler, i17.ɵangular_packages_platform_browser_platform_browser_a, []), i0.ɵmpd(1024, i0.NgProbeToken, function () { return [i25.ɵangular_packages_router_router_b()]; }, []), i0.ɵmpd(512, i25.ɵangular_packages_router_router_g, i25.ɵangular_packages_router_router_g, [i0.Injector]), i0.ɵmpd(256, i0.APP_ID, "serverApp", []), i0.ɵmpd(2048, i17.ɵTRANSITION_ID, null, [i0.APP_ID]), i0.ɵmpd(256, i22.ɵangular_packages_service_worker_service_worker_b, "/ngsw-worker.js", []), i0.ɵmpd(256, i22.ɵangular_packages_service_worker_service_worker_a, { enabled: false }, []), i0.ɵmpd(1024, i0.APP_INITIALIZER, function (p0_0, p1_0, p2_0, p2_1, p2_2, p3_0, p3_1, p3_2, p3_3) { return [i17.ɵangular_packages_platform_browser_platform_browser_h(p0_0), i25.ɵangular_packages_router_router_h(p1_0), i17.ɵangular_packages_platform_browser_platform_browser_f(p2_0, p2_1, p2_2), i22.ɵangular_packages_service_worker_service_worker_c(p3_0, p3_1, p3_2, p3_3)]; }, [[2, i0.NgProbeToken], i25.ɵangular_packages_router_router_g, i17.ɵTRANSITION_ID, i15.DOCUMENT, i0.Injector, i0.Injector, i22.ɵangular_packages_service_worker_service_worker_b, i22.ɵangular_packages_service_worker_service_worker_a, i0.PLATFORM_ID]), i0.ɵmpd(512, i0.ApplicationInitStatus, i0.ApplicationInitStatus, [[2, i0.APP_INITIALIZER]]), i0.ɵmpd(131584, i0.ApplicationRef, i0.ApplicationRef, [i0.NgZone, i0.ɵConsole, i0.Injector, i0.ErrorHandler, i0.ComponentFactoryResolver, i0.ApplicationInitStatus]), i0.ɵmpd(1073742336, i0.ApplicationModule, i0.ApplicationModule, [i0.ApplicationRef]), i0.ɵmpd(1073742336, i17.BrowserModule, i17.BrowserModule, [[3, i17.BrowserModule]]), i0.ɵmpd(1073742336, i49.HttpClientXsrfModule, i49.HttpClientXsrfModule, []), i0.ɵmpd(1073742336, i49.HttpClientModule, i49.HttpClientModule, []), i0.ɵmpd(1073742336, i22.ServiceWorkerModule, i22.ServiceWorkerModule, []), i0.ɵmpd(1073742336, i48.BrowserAnimationsModule, i48.BrowserAnimationsModule, []), i0.ɵmpd(1073742336, i77.NgbModule, i77.NgbModule, []), i0.ɵmpd(1073742336, i79.SharedModule, i79.SharedModule, []), i0.ɵmpd(1024, i25.ɵangular_packages_router_router_a, i25.ɵangular_packages_router_router_d, [[3, i25.Router]]), i0.ɵmpd(512, i25.UrlSerializer, i25.DefaultUrlSerializer, []), i0.ɵmpd(512, i25.ChildrenOutletContexts, i25.ChildrenOutletContexts, []), i0.ɵmpd(256, i25.ROUTER_CONFIGURATION, {}, []), i0.ɵmpd(1024, i15.LocationStrategy, i25.ɵangular_packages_router_router_c, [i15.PlatformLocation, [2, i15.APP_BASE_HREF], i25.ROUTER_CONFIGURATION]), i0.ɵmpd(512, i15.Location, i15.Location, [i15.LocationStrategy]), i0.ɵmpd(512, i0.Compiler, i0.Compiler, []), i0.ɵmpd(512, i0.NgModuleFactoryLoader, i0.SystemJsNgModuleLoader, [i0.Compiler, [2, i0.SystemJsNgModuleLoaderConfig]]), i0.ɵmpd(1024, i25.ROUTES, function () { return [[{ path: "surfhome", redirectTo: "", pathMatch: "full" }, { path: "", component: i80.SurfHomeComponent }], [{ path: "blog", component: i81.PostListComponent, resolve: { posts: i55.BlogResolver } }, { path: "blog/:id", component: i82.PostComponent, resolve: { post: i54.BlogItemResolver } }], [{ path: "", redirectTo: "/surfhome", pathMatch: "full" }, { path: "**", component: i83.PageNotFoundComponent }]]; }, []), i0.ɵmpd(1024, i25.Router, i25.ɵangular_packages_router_router_e, [i0.ApplicationRef, i25.UrlSerializer, i25.ChildrenOutletContexts, i15.Location, i0.Injector, i0.NgModuleFactoryLoader, i0.Compiler, i25.ROUTES, i25.ROUTER_CONFIGURATION, [2, i25.UrlHandlingStrategy], [2, i25.RouteReuseStrategy]]), i0.ɵmpd(1073742336, i25.RouterModule, i25.RouterModule, [[2, i25.ɵangular_packages_router_router_a], [2, i25.Router]]), i0.ɵmpd(1073742336, i84.TopMenuModule, i84.TopMenuModule, []), i0.ɵmpd(1073742336, i85.SurfHomeRoutingModule, i85.SurfHomeRoutingModule, []), i0.ɵmpd(1073742336, i86.SurfHomeModule, i86.SurfHomeModule, []), i0.ɵmpd(1073742336, i87.SurfFooterModule, i87.SurfFooterModule, []), i0.ɵmpd(1073742336, i88.BlogRoutingModule, i88.BlogRoutingModule, []), i0.ɵmpd(1073742336, i89.BlogModule, i89.BlogModule, []), i0.ɵmpd(1073742336, i90.AppRoutingModule, i90.AppRoutingModule, []), i0.ɵmpd(1073742336, i91.AppModule, i91.AppModule, []), i0.ɵmpd(1073742336, i57.HttpModule, i57.HttpModule, []), i0.ɵmpd(1073742336, i48.NoopAnimationsModule, i48.NoopAnimationsModule, []), i0.ɵmpd(1073742336, i46.ServerModule, i46.ServerModule, []), i0.ɵmpd(1073742336, i1.AppServerModule, i1.AppServerModule, []), i0.ɵmpd(256, i0.ɵAPP_ROOT, true, []), i0.ɵmpd(256, i49.ɵangular_packages_common_http_http_f, "XSRF-TOKEN", []), i0.ɵmpd(256, i49.ɵangular_packages_common_http_http_g, "X-XSRF-TOKEN", []), i0.ɵmpd(256, i48.ANIMATION_MODULE_TYPE, "NoopAnimations", [])]); });
exports.AppServerModuleNgFactory = AppServerModuleNgFactory;


/***/ }),

/***/ "./src/app/app.server.module.ts":
/*!**************************************!*\
  !*** ./src/app/app.server.module.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
var AppServerModule = /** @class */ (function () {
    function AppServerModule() {
    }
    return AppServerModule;
}());
exports.AppServerModule = AppServerModule;


/***/ }),

/***/ "./src/app/blog/blog-item-resolver.service.ts":
/*!****************************************************!*\
  !*** ./src/app/blog/blog-item-resolver.service.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var blog_service_1 = __webpack_require__(/*! ./blog.service */ "./src/app/blog/blog.service.ts");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
var BlogItemResolver = /** @class */ (function () {
    function BlogItemResolver(bs, router) {
        this.bs = bs;
        this.router = router;
    }
    BlogItemResolver.prototype.resolve = function (route, state) {
        var _this = this;
        var id = route.paramMap.get('id');
        return this.bs.getPost(id)
            .pipe(operators_1.take(1), operators_1.map(function (post) {
            if (post) {
                return post;
            }
            else {
                _this.router.navigate(['/blog']);
                return null;
            }
        }));
    };
    return BlogItemResolver;
}());
exports.BlogItemResolver = BlogItemResolver;


/***/ }),

/***/ "./src/app/blog/blog-resolver.service.ts":
/*!***********************************************!*\
  !*** ./src/app/blog/blog-resolver.service.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var blog_service_1 = __webpack_require__(/*! ./blog.service */ "./src/app/blog/blog.service.ts");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
var BlogResolver = /** @class */ (function () {
    function BlogResolver(bs, router) {
        this.bs = bs;
        this.router = router;
    }
    BlogResolver.prototype.resolve = function (route, state) {
        var _this = this;
        return this.bs.getPosts()
            .pipe(operators_1.take(1), operators_1.map(function (posts) {
            if (posts) {
                return posts;
            }
            else {
                _this.router.navigate(['']);
                return null;
            }
        }));
    };
    return BlogResolver;
}());
exports.BlogResolver = BlogResolver;


/***/ }),

/***/ "./src/app/blog/blog-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/blog/blog-routing.module.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var post_list_component_1 = __webpack_require__(/*! ./post-list/post-list.component */ "./src/app/blog/post-list/post-list.component.ts");
var post_component_1 = __webpack_require__(/*! ./post/post.component */ "./src/app/blog/post/post.component.ts");
var blog_item_resolver_service_1 = __webpack_require__(/*! ./blog-item-resolver.service */ "./src/app/blog/blog-item-resolver.service.ts");
var blog_resolver_service_1 = __webpack_require__(/*! ./blog-resolver.service */ "./src/app/blog/blog-resolver.service.ts");
var surfBlogRoutes = [
    {
        path: 'blog',
        component: post_list_component_1.PostListComponent,
        resolve: {
            posts: blog_resolver_service_1.BlogResolver
        }
    },
    {
        path: 'blog/:id',
        component: post_component_1.PostComponent,
        resolve: {
            post: blog_item_resolver_service_1.BlogItemResolver
        }
    }
    // { path: 'superhero/:id', component: HeroDetailComponent }
];
var BlogRoutingModule = /** @class */ (function () {
    function BlogRoutingModule() {
    }
    return BlogRoutingModule;
}());
exports.BlogRoutingModule = BlogRoutingModule;


/***/ }),

/***/ "./src/app/blog/blog.module.ts":
/*!*************************************!*\
  !*** ./src/app/blog/blog.module.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BlogModule = /** @class */ (function () {
    function BlogModule() {
    }
    return BlogModule;
}());
exports.BlogModule = BlogModule;


/***/ }),

/***/ "./src/app/blog/blog.service.ts":
/*!**************************************!*\
  !*** ./src/app/blog/blog.service.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ajax_api_service_1 = __webpack_require__(/*! ../core/services/ajax-api.service */ "./src/app/core/services/ajax-api.service.ts");
var BlogService = /** @class */ (function () {
    // private _subject = new BehaviorSubject<PostItem[]>(postList);
    // boardDatasOb = this._subject.asObservable();
    function BlogService(ajaxApi) {
        this.ajaxApi = ajaxApi;
    }
    BlogService.prototype.getPosts = function () {
        return this.ajaxApi.getPosts();
        // return this._subject;
    };
    BlogService.prototype.getPost = function (id) {
        return this.ajaxApi.getPost(id);
        // return this.getPosts().pipe(
        //   map(posts => posts.find(post => post.id === id))
        // );
    };
    return BlogService;
}());
exports.BlogService = BlogService;
// const postList: PostItem[] = [
//   {
//     id: 'post-1',
//     title: 'Post 1',
//     date: '',
//     author: '****',
//     body: `<p>Tell that to the proud auto workers at a <a href="blog/post-2">Michigan</a> plant who, after they
//             found out it was closing, kept showing up every day and working as hard as ever,
//             because they knew there were people who counted on the brakes that they made.</p>`,
//     summary: '<p>Tell that to the proud auto workers at a</p>',
//     category: 'City',
//   },
//   {
//     id: 'post-2',
//     title: 'Post 2',
//     date: '',
//     author: '****',
//     body: `<p>It was closing, kept showing up every day and working as hard as ever,
//             because they knew there were people who counted on the brakes that they made.
//             Michigan plant who, after they found out it was closing
//              <a href="blog/post-1">Michigan</a> </p>
//              <p>This is YouTube video <a href="https://www.youtube.com/watch?v=hSu9BQEub4U">Philosophical Studies</a>`,
//     summary: '<p>Tell that to the proud auto workers at a</p>',
//     category: 'City',
//   }
// ];


/***/ }),

/***/ "./src/app/blog/post-list/post-list.component.ngfactory.js":
/*!*****************************************************************!*\
  !*** ./src/app/blog/post-list/post-list.component.ngfactory.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./post-list.component.sass.shim.ngstyle */ "./src/app/blog/post-list/post-list.component.sass.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ../../shared/add-content.directive */ "./src/app/shared/add-content.directive.ts");
var i3 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i4 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i5 = __webpack_require__(/*! ./post-list.component */ "./src/app/blog/post-list/post-list.component.ts");
var i6 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var styles_PostListComponent = [i0.styles];
var RenderType_PostListComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_PostListComponent, data: {} });
exports.RenderType_PostListComponent = RenderType_PostListComponent;
function View_PostListComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 9, "div", [["class", "col-sm-10 offset-sm-1 col-md-2 offset-md-0 col-lg-4"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 8, "article", [], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(3, null, ["", ""])), (_l()(), i1.ɵeld(4, 0, null, null, 1, "div", [], null, null, null, null, null)), i1.ɵdid(5, 606208, null, 0, i2.AddContentDirective, [i1.ElementRef, i1.Renderer2], { content: [0, "content"] }, null), (_l()(), i1.ɵeld(6, 0, null, null, 3, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 7).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(7, 671744, null, 0, i3.RouterLinkWithHref, [i3.Router, i3.ActivatedRoute, i4.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(8, 2), (_l()(), i1.ɵted(-1, null, ["Learn more..."]))], function (_ck, _v) { var currVal_1 = _v.context.$implicit.summary; _ck(_v, 5, 0, currVal_1); var currVal_4 = _ck(_v, 8, 0, "/blog", _v.context.$implicit.id); _ck(_v, 7, 0, currVal_4); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.title; _ck(_v, 3, 0, currVal_0); var currVal_2 = i1.ɵnov(_v, 7).target; var currVal_3 = i1.ɵnov(_v, 7).href; _ck(_v, 6, 0, currVal_2, currVal_3); }); }
function View_PostListComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "main", [["class", "common-page"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 3, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 2, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PostListComponent_1)), i1.ɵdid(4, 802816, null, 0, i4.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.posts; _ck(_v, 4, 0, currVal_0); }, null); }
exports.View_PostListComponent_0 = View_PostListComponent_0;
function View_PostListComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "surf-post-list", [], null, null, null, View_PostListComponent_0, RenderType_PostListComponent)), i1.ɵdid(1, 114688, null, 0, i5.PostListComponent, [i3.ActivatedRoute, i1.ElementRef, i6.Title, i6.Meta], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_PostListComponent_Host_0 = View_PostListComponent_Host_0;
var PostListComponentNgFactory = i1.ɵccf("surf-post-list", i5.PostListComponent, View_PostListComponent_Host_0, {}, {}, []);
exports.PostListComponentNgFactory = PostListComponentNgFactory;


/***/ }),

/***/ "./src/app/blog/post-list/post-list.component.sass.shim.ngstyle.js":
/*!*************************************************************************!*\
  !*** ./src/app/blog/post-list/post-list.component.sass.shim.ngstyle.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["h2[_ngcontent-%COMP%] {\n  font-size: 1.25em;\n  color: #000; }"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/blog/post-list/post-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/blog/post-list/post-list.component.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var PostListComponent = /** @class */ (function () {
    function PostListComponent(route, el, titleService, meta) {
        this.route = route;
        this.el = el;
        this.titleService = titleService;
        this.meta = meta;
    }
    PostListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data
            .subscribe(function (data) {
            _this.posts = data.posts;
            _this.setTitle('SufApp - Blog');
            _this.setMeta('Blog');
        });
    };
    PostListComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    PostListComponent.prototype.setMeta = function (data) {
        this.meta.addTags([
            { name: 'surfapp:title', content: "SurfApp - " + data },
            { name: 'surfapp:site', content: 'SurfApp - @test' }
            // ...
        ]);
    };
    return PostListComponent;
}());
exports.PostListComponent = PostListComponent;


/***/ }),

/***/ "./src/app/blog/post/post.component.ngfactory.js":
/*!*******************************************************!*\
  !*** ./src/app/blog/post/post.component.ngfactory.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./post.component.sass.shim.ngstyle */ "./src/app/blog/post/post.component.sass.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ../../shared/handle-link.directive */ "./src/app/shared/handle-link.directive.ts");
var i3 = __webpack_require__(/*! ../../core/services/location.service */ "./src/app/core/services/location.service.ts");
var i4 = __webpack_require__(/*! ../../shared/add-content.directive */ "./src/app/shared/add-content.directive.ts");
var i5 = __webpack_require__(/*! ./post.component */ "./src/app/blog/post/post.component.ts");
var i6 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i7 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var styles_PostComponent = [i0.styles];
var RenderType_PostComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_PostComponent, data: { "animation": [{ type: 7, name: "postState", definitions: [{ type: 0, name: "disappear", styles: { type: 6, styles: { opacity: 0 }, offset: null }, options: undefined }, { type: 0, name: "appear", styles: { type: 6, styles: { opacity: 1 }, offset: null }, options: undefined }, { type: 1, expr: "disappear => appear", animation: { type: 4, styles: null, timings: "500ms ease-out" }, options: null }, { type: 1, expr: "appear => disappear", animation: { type: 4, styles: null, timings: "500ms ease-in" }, options: null }, { type: 1, expr: "void => initAppear", animation: [{ type: 6, styles: { opacity: 1 }, offset: null }, { type: 4, styles: null, timings: 500 }], options: null }], options: {} }] } });
exports.RenderType_PostComponent = RenderType_PostComponent;
function View_PostComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 10, "main", [["class", "common-page"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 9, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 8, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 0, "div", [["class", "col-lg-2"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 6, "div", [["class", "col-lg-8"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 5, "article", [["surfHandleLink", ""]], [[24, "@postState", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 6).onClick($event.target, $event.button, $event.ctrlKey, $event.metaKey, $event.altKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(6, 16384, null, 0, i2.HandleLinkDirective, [i3.LocationService], null, null), (_l()(), i1.ɵeld(7, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), i1.ɵted(8, null, ["", ""])), (_l()(), i1.ɵeld(9, 0, null, null, 1, "div", [], null, null, null, null, null)), i1.ɵdid(10, 606208, null, 0, i4.AddContentDirective, [i1.ElementRef, i1.Renderer2], { content: [0, "content"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.post.body; _ck(_v, 10, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.postStateProp; _ck(_v, 5, 0, currVal_0); var currVal_1 = _co.post.title; _ck(_v, 8, 0, currVal_1); }); }
exports.View_PostComponent_0 = View_PostComponent_0;
function View_PostComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "surf-post", [], null, null, null, View_PostComponent_0, RenderType_PostComponent)), i1.ɵdid(1, 245760, null, 0, i5.PostComponent, [i6.ActivatedRoute, i7.Title, i7.Meta], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_PostComponent_Host_0 = View_PostComponent_Host_0;
var PostComponentNgFactory = i1.ɵccf("surf-post", i5.PostComponent, View_PostComponent_Host_0, {}, {}, []);
exports.PostComponentNgFactory = PostComponentNgFactory;


/***/ }),

/***/ "./src/app/blog/post/post.component.sass.shim.ngstyle.js":
/*!***************************************************************!*\
  !*** ./src/app/blog/post/post.component.sass.shim.ngstyle.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["h2[_ngcontent-%COMP%] {\n  font-size: 1.5em; }"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/blog/post/post.component.ts":
/*!*********************************************!*\
  !*** ./src/app/blog/post/post.component.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var PostComponent = /** @class */ (function () {
    function PostComponent(route, titleService, meta) {
        this.route = route;
        this.titleService = titleService;
        this.meta = meta;
        this.postStateProp = 'initAppear';
    }
    PostComponent.prototype.ngOnInit = function () {
        this.readRouteData();
        this.setTitle(this.post.title);
        this.setMeta(this.post);
    };
    PostComponent.prototype.ngOnDestroy = function () {
        this.postStateProp = 'initAppear';
    };
    PostComponent.prototype.readRouteData = function () {
        var _this = this;
        this.route.data
            .subscribe(function (data) {
            if (_this.postStateProp === 'initAppear') {
                _this.post = data.post;
                _this.postStateProp = 'appear';
            }
            else if (_this.postStateProp === 'appear') {
                _this.postStateProp = 'disappear';
                setTimeout(function () {
                    _this.post = data.post;
                    _this.postStateProp = 'appear';
                    _this.setTitle(_this.post.title);
                    _this.setMeta(_this.post);
                }, 500);
            }
        });
    };
    PostComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    PostComponent.prototype.setMeta = function (data) {
        this.meta.addTags([
            { name: 'surfapp:title', content: "SurfApp - " + data.title },
            { name: 'surfapp:site', content: 'SurfApp - @test' }
            // ...
        ]);
    };
    return PostComponent;
}());
exports.PostComponent = PostComponent;


/***/ }),

/***/ "./src/app/core/catch-scroll-outerzone.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/catch-scroll-outerzone.directive.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var pass_scrolling_data_service_1 = __webpack_require__(/*! ./pass-scrolling-data.service */ "./src/app/core/pass-scrolling-data.service.ts");
// this directive attaches scroll event to .main-surf-wrapper (I set height html, body as 100%
// and made wrapper be scrollable ) outside AngularZone and pass data (object UIEvent) using Observable
// it helps to minimize Change Detection calls and fasten app during scrolling
var CatchScrollOuterzoneDirective = /** @class */ (function () {
    function CatchScrollOuterzoneDirective(zone, el, renderer, passScrollDataService) {
        var _this = this;
        this.zone = zone;
        this.el = el;
        this.renderer = renderer;
        this.passScrollDataService = passScrollDataService;
        this.zone.runOutsideAngular(function () {
            _this.renderer.listen(el.nativeElement, 'scroll', function (event) {
                _this.passScrollDataService.passData(event);
            });
        });
    }
    return CatchScrollOuterzoneDirective;
}());
exports.CatchScrollOuterzoneDirective = CatchScrollOuterzoneDirective;


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
    /*static forRoot(config: UserServiceConfig): ModuleWithProviders {
      return {
        ngModule: CoreModule,
        providers: [
          {provide: UserServiceConfig, useValue: config }
        ]
      };
    }*/
    CoreModule.forRoot = function () {
        return {
            ngModule: CoreModule
        };
    };
    return CoreModule;
}());
exports.CoreModule = CoreModule;


/***/ }),

/***/ "./src/app/core/menu.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/menu.service.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
var MenuService = /** @class */ (function () {
    function MenuService() {
        this.menuItems = [
            { href: '/boards', text: 'Boards' },
            { href: '/accessories', text: 'Accessories' },
            { href: '/blog', text: 'Blog' },
            { href: '/technology', text: 'Technology' },
            { href: '/team', text: 'Team' },
            { href: '/dealers', text: 'Dealers' },
        ];
        this._subject = new rxjs_1.BehaviorSubject(this.menuItems);
        this.menuItemsOb = this._subject.asObservable();
    }
    MenuService.prototype.getMenuItems = function () {
        return this.menuItemsOb;
    };
    return MenuService;
}());
exports.MenuService = MenuService;


/***/ }),

/***/ "./src/app/core/page-not-found.component.ngfactory.js":
/*!************************************************************!*\
  !*** ./src/app/core/page-not-found.component.ngfactory.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./page-not-found.component */ "./src/app/core/page-not-found.component.ts");
var styles_PageNotFoundComponent = ["h2[_ngcontent-%COMP%] {\n    \tmax-width: 1400px;\n    \tmargin: 0 auto 15%;\n    \tline-height: 1em;\n    }\n\t\t@media screen and (min-width: 1500px) {\n\t\t\th2[_ngcontent-%COMP%] {\n\t\t\t\tmargin-bottom: 220px !important;\n\t\t\t}\n\t\t}"];
var RenderType_PageNotFoundComponent = i0.ɵcrt({ encapsulation: 0, styles: styles_PageNotFoundComponent, data: {} });
exports.RenderType_PageNotFoundComponent = RenderType_PageNotFoundComponent;
function View_PageNotFoundComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "main", [["class", "common-page"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Page not found"]))], null, null); }
exports.View_PageNotFoundComponent_0 = View_PageNotFoundComponent_0;
function View_PageNotFoundComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "surf-not-found", [], null, null, null, View_PageNotFoundComponent_0, RenderType_PageNotFoundComponent)), i0.ɵdid(1, 49152, null, 0, i1.PageNotFoundComponent, [], null, null)], null, null); }
exports.View_PageNotFoundComponent_Host_0 = View_PageNotFoundComponent_Host_0;
var PageNotFoundComponentNgFactory = i0.ɵccf("surf-not-found", i1.PageNotFoundComponent, View_PageNotFoundComponent_Host_0, {}, {}, []);
exports.PageNotFoundComponentNgFactory = PageNotFoundComponentNgFactory;


/***/ }),

/***/ "./src/app/core/page-not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/core/page-not-found.component.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    return PageNotFoundComponent;
}());
exports.PageNotFoundComponent = PageNotFoundComponent;


/***/ }),

/***/ "./src/app/core/pass-scrolling-data.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/pass-scrolling-data.service.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
var PassScrollingDataService = /** @class */ (function () {
    function PassScrollingDataService() {
        this._passerData = new rxjs_1.Subject();
        this.passerData = this._passerData.asObservable();
    }
    PassScrollingDataService.prototype.passData = function (data) {
        this._passerData.next(data);
    };
    // get coords of element relating to any parent html DOM-element, but it don't take in to account html and body
    PassScrollingDataService.prototype.getCoords = function (elem, body) {
        // (1)
        var box = elem.getBoundingClientRect();
        // (2)
        var scrollTop = body.scrollTop;
        var scrollLeft = body.scrollLeft;
        // (3)
        var clientTop = body.clientTop || 0;
        var clientLeft = body.clientLeft || 0;
        // (4)
        var top = box.top + scrollTop - clientTop;
        var left = box.left + scrollLeft - clientLeft;
        return {
            top: top,
            left: left
        };
    };
    return PassScrollingDataService;
}());
exports.PassScrollingDataService = PassScrollingDataService;


/***/ }),

/***/ "./src/app/core/resize.service.ts":
/*!****************************************!*\
  !*** ./src/app/core/resize.service.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
var ResizeService = /** @class */ (function () {
    function ResizeService(eventManager) {
        this.eventManager = eventManager;
        this.resizeSubject = new rxjs_1.Subject();
        this.eventManager.addGlobalEventListener('window', 'resize', this.onResize.bind(this));
        this.eventManager.addGlobalEventListener('window', 'onload', this.onLoaded.bind(this));
    }
    Object.defineProperty(ResizeService.prototype, "onResize$", {
        get: function () {
            return this.resizeSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    ResizeService.prototype.onResize = function (event) {
        this.resizeSubject.next(event.target);
    };
    ResizeService.prototype.onLoaded = function (event) {
        this.windowWidth = event.target;
    };
    return ResizeService;
}());
exports.ResizeService = ResizeService;


/***/ }),

/***/ "./src/app/core/services/ajax-api.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/ajax-api.service.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var environment_1 = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var http_1 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
var logger_service_1 = __webpack_require__(/*! ./logger.service */ "./src/app/core/services/logger.service.ts");
var board_data_1 = __webpack_require__(/*! ../../surf-home/board-data */ "./src/app/surf-home/board-data.ts");
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var i2 = __webpack_require__(/*! ./logger.service */ "./src/app/core/services/logger.service.ts");
var API_URL = environment_1.environment.apiUrl;
var AjaxApiService = /** @class */ (function () {
    function AjaxApiService(http, logger) {
        this.http = http;
        this.logger = logger;
    }
    AjaxApiService.prototype.getPosts = function (quant) {
        return this.getData('/posts', 'getPosts', null, quant);
        // return this.http.get<PostItem[]>(API_URL + '/posts')
        //         .pipe(
        //           catchError(this.handleError<PostItem[]>('getPosts', null))
        //         );
    };
    // getPostsHome(): Observable<PostItem[]> {
    //   return this.getData<PostItem[]>('/posts-home', 'getPostsHome', null);
    //   // return this.http.get<PostItem[]>(API_URL + '/posts')
    //   //         .pipe(
    //   //           catchError(this.handleError<PostItem[]>('getPosts', null))
    //   //         );
    // }
    AjaxApiService.prototype.getPost = function (postId) {
        return this.getData("/post/" + postId, 'getPost', null);
        // return this.http.get<PostItem>(API_URL + '/post/' + postId)
        //         .pipe(
        //           catchError(this.handleError<PostItem>('getPost', null))
        //         );
    };
    AjaxApiService.prototype.getBoardsData = function (quant) {
        return this.getData('/boardItems', 'getBoardsData', null, quant);
    };
    AjaxApiService.prototype.getTeamData = function (quant) {
        return this.getData('/teamHome', 'getTeamData', null, quant);
    };
    AjaxApiService.prototype.getData = function (uri, methodName, defaultData, quant) {
        var options = quant ? { params: new http_1.HttpParams().set('quantity', "" + quant) } : {};
        return this.http.get(API_URL + uri, options)
            .pipe(operators_1.catchError(this.handleError(methodName, defaultData)));
    };
    AjaxApiService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            var message = (error.error instanceof ErrorEvent) ?
                error.error.message :
                "server returned code " + error.status + " with body \"" + error.error + "\"";
            // TODO: better job of transforming error for user consumption
            _this.logger.log(operation + " failed: " + message);
            // Let the app keep running by returning an empty result.
            return rxjs_1.of(result);
        };
    };
    AjaxApiService.ngInjectableDef = i0.defineInjectable({ factory: function AjaxApiService_Factory() { return new AjaxApiService(i0.inject(i1.HttpClient), i0.inject(i2.Logger)); }, token: AjaxApiService, providedIn: "root" });
    return AjaxApiService;
}());
exports.AjaxApiService = AjaxApiService;


/***/ }),

/***/ "./src/app/core/services/location.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/location.service.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var sw_updates_service_1 = __webpack_require__(/*! ../sw-updates/sw-updates.service */ "./src/app/core/sw-updates/sw-updates.service.ts");
var LocationService = /** @class */ (function () {
    function LocationService(router, winRef, swUpdates) {
        var _this = this;
        this.router = router;
        this.winRef = winRef;
        this.urlParser = document.createElement('a');
        this.swUpdateActivated = false;
        swUpdates.updateActivated.subscribe(function () { return _this.swUpdateActivated = true; });
    }
    LocationService.prototype.handleAnchorClick = function (anchor, button, ctrlKey, metaKey) {
        if (button === void 0) { button = 0; }
        if (ctrlKey === void 0) { ctrlKey = false; }
        if (metaKey === void 0) { metaKey = false; }
        // Check for modifier keys and non-left-button, which indicate the user wants to control navigation
        if (button !== 0 || ctrlKey || metaKey) {
            return true;
        }
        // If there is a target and it is not `_self` then we take this
        // as a signal that it doesn't want to be intercepted.
        // TODO: should we also allow an explicit `_self` target to opt-out?
        var anchorTarget = anchor.target;
        if (anchorTarget && anchorTarget !== '_self') {
            return true;
        }
        if (anchor.getAttribute('download') != null) {
            return true; // let the download happen
        }
        var pathname = anchor.pathname, search = anchor.search, hash = anchor.hash;
        var relativeUrl = pathname + search + hash;
        this.urlParser.href = relativeUrl;
        // don't navigate if external link or has extension
        if (anchor.href !== this.urlParser.href ||
            !/\/[^/.]*$/.test(pathname)) {
            return true;
        }
        // approved for navigation
        this.go(relativeUrl);
        return false;
    };
    LocationService.prototype.go = function (url) {
        if (!url) {
            return;
        }
        url = this.stripSlashes(url);
        if (/^http/.test(url) || this.swUpdateActivated) {
            // Has http protocol so leave the site
            // (or do a "full page navigation" if a ServiceWorker update has been activated)
            this.goExternal(url);
        }
        else {
            this.router.navigate([url]);
        }
    };
    LocationService.prototype.goExternal = function (url) {
        this.winRef.location.assign(url);
    };
    LocationService.prototype.stripSlashes = function (url) {
        return url.replace(/^\/+/, '').replace(/\/+(\?|#|$)/, '$1');
    };
    return LocationService;
}());
exports.LocationService = LocationService;


/***/ }),

/***/ "./src/app/core/services/logger.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/logger.service.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var environment_1 = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var Logger = /** @class */ (function () {
    function Logger(errorHandler) {
        this.errorHandler = errorHandler;
    }
    Logger.prototype.log = function (value) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        if (!environment_1.environment.production) {
            console.log.apply(console, [value].concat(rest));
        }
    };
    Logger.prototype.error = function (error) {
        this.errorHandler.handleError(error);
    };
    Logger.prototype.warn = function (value) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        console.warn.apply(console, [value].concat(rest));
    };
    return Logger;
}());
exports.Logger = Logger;


/***/ }),

/***/ "./src/app/core/surf-carousel-2/surf-carousel-2.component.ngfactory.js":
/*!*****************************************************************************!*\
  !*** ./src/app/core/surf-carousel-2/surf-carousel-2.component.ngfactory.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./surf-carousel-2.component.sass.shim.ngstyle */ "./src/app/core/surf-carousel-2/surf-carousel-2.component.sass.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i3 = __webpack_require__(/*! ./surf-carousel-2.component */ "./src/app/core/surf-carousel-2/surf-carousel-2.component.ts");
var i4 = __webpack_require__(/*! ../resize.service */ "./src/app/core/resize.service.ts");
var i5 = __webpack_require__(/*! ../window-ref.service */ "./src/app/core/window-ref.service.ts");
var styles_SurfCarousel2Component = [i0.styles];
var RenderType_SurfCarousel2Component = i1.ɵcrt({ encapsulation: 0, styles: styles_SurfCarousel2Component, data: {} });
exports.RenderType_SurfCarousel2Component = RenderType_SurfCarousel2Component;
function View_SurfCarousel2Component_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵand(0, null, null, 0))], null, null); }
function View_SurfCarousel2Component_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 7, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 6, "div", [["class", "surf-carousel-2-slide-wrapper"]], null, null, null, null, null)), i1.ɵdid(2, 278528, null, 0, i2.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i1.ɵpod(3, { "active": 0 }), i1.ɵdid(4, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(5, { "width": 0 }), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_SurfCarousel2Component_2)), i1.ɵdid(7, 540672, null, 0, i2.NgTemplateOutlet, [i1.ViewContainerRef], { ngTemplateOutlet: [0, "ngTemplateOutlet"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "surf-carousel-2-slide-wrapper"; var currVal_1 = _ck(_v, 3, 0, _co.slidersFirstStageData[_v.context.index].active); _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = _ck(_v, 5, 0, (_co.sliderWidth + "px")); _ck(_v, 4, 0, currVal_2); var currVal_3 = _v.context.$implicit.tplRef; _ck(_v, 7, 0, currVal_3); }, null); }
function View_SurfCarousel2Component_5(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵand(0, null, null, 0))], null, null); }
function View_SurfCarousel2Component_4(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 7, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 6, "div", [["class", "cycled surf-carousel-2-slide-wrapper"]], null, null, null, null, null)), i1.ɵdid(2, 278528, null, 0, i2.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i1.ɵpod(3, { "active": 0 }), i1.ɵdid(4, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(5, { "width": 0 }), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_SurfCarousel2Component_5)), i1.ɵdid(7, 540672, null, 0, i2.NgTemplateOutlet, [i1.ViewContainerRef], { ngTemplateOutlet: [0, "ngTemplateOutlet"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "cycled surf-carousel-2-slide-wrapper"; var currVal_1 = _ck(_v, 3, 0, _co.slidersSecondStageData[_v.context.index].active); _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = _ck(_v, 5, 0, (_co.sliderWidth + "px")); _ck(_v, 4, 0, currVal_2); var currVal_3 = _v.context.$implicit.tplRef; _ck(_v, 7, 0, currVal_3); }, null); }
function View_SurfCarousel2Component_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "div", [["class", "surf-carousel-2-stage"]], null, null, null, null, null)), i1.ɵdid(1, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(2, { "width": 0, "margin-top": 1, "transform": 2, "-webkit-transform": 3, "visibility": 4 }), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_SurfCarousel2Component_4)), i1.ɵdid(4, 802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 2, 0, ((_co.sliderWidth * _co.slides.length) + "px"), (_co.marTop + "px"), (("translateX(" + _co.translateXSecondStage) + "px)"), (("translateX(" + _co.translateXSecondStage) + "px)"), _co.visibleSecondStage); _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.slides; _ck(_v, 4, 0, currVal_1); }, null); }
function View_SurfCarousel2Component_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, [["surfCarousel2", 1]], null, 14, "div", [["class", "surf-carousel-2"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 2, "div", [["class", "surf-carousel-2-nav"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 0, "div", [["class", "surf-carousel-2-prev"]], [[2, "disabled", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.prevSlide() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 0, "div", [["class", "surf-carousel-2-next"]], [[2, "disabled", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.nextSlide() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 10, "div", [["class", "surf-carousel-2-sliders-wrapper clearfloat"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 9, "div", [["class", "surf-carousel-2-stages-wrapper"]], null, null, null, null, null)), i1.ɵdid(6, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(7, { "width": 0 }), (_l()(), i1.ɵeld(8, 0, null, null, 4, "div", [["class", "surf-carousel-2-stage"]], null, null, null, null, null)), i1.ɵdid(9, 278528, null, 0, i2.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(10, { "width": 0, "transform": 1, "-webkit-transform": 2, "visibility": 3 }), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_SurfCarousel2Component_1)), i1.ɵdid(12, 802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_SurfCarousel2Component_3)), i1.ɵdid(14, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = _ck(_v, 7, 0, (_co.stagesWrapperWidth + "px")); _ck(_v, 6, 0, currVal_2); var currVal_3 = _ck(_v, 10, 0, ((_co.sliderWidth * _co.slides.length) + "px"), (("translateX(" + _co.translateXFirstStage) + "px)"), (("translateX(" + _co.translateXFirstStage) + "px)"), _co.visibleFirstStage); _ck(_v, 9, 0, currVal_3); var currVal_4 = _co.slides; _ck(_v, 12, 0, currVal_4); var currVal_5 = _co.cycled; _ck(_v, 14, 0, currVal_5); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.prevDisabled; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.nextDisabled; _ck(_v, 3, 0, currVal_1); }); }
exports.View_SurfCarousel2Component_0 = View_SurfCarousel2Component_0;
function View_SurfCarousel2Component_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, "surf-carousel-2", [], null, null, null, View_SurfCarousel2Component_0, RenderType_SurfCarousel2Component)), i1.ɵdid(1, 2342912, null, 1, i3.SurfCarousel2Component, [i1.ElementRef, i4.ResizeService, i5.WINDOW], null, null), i1.ɵqud(603979776, 1, { slides: 1 })], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_SurfCarousel2Component_Host_0 = View_SurfCarousel2Component_Host_0;
var SurfCarousel2ComponentNgFactory = i1.ɵccf("surf-carousel-2", i3.SurfCarousel2Component, View_SurfCarousel2Component_Host_0, { slidersQuantity: "slidersQuantity", cycled: "cycled" }, {}, []);
exports.SurfCarousel2ComponentNgFactory = SurfCarousel2ComponentNgFactory;


/***/ }),

/***/ "./src/app/core/surf-carousel-2/surf-carousel-2.component.sass.shim.ngstyle.js":
/*!*************************************************************************************!*\
  !*** ./src/app/core/surf-carousel-2/surf-carousel-2.component.sass.shim.ngstyle.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".surf-carousel-2[_ngcontent-%COMP%] {\n  z-index: 1;\n  position: relative;\n  width: 100%; }\n\n.surf-carousel-2-sliders-wrapper[_ngcontent-%COMP%] {\n  overflow: hidden;\n  width: 100%; }\n\n.clearfloat[_ngcontent-%COMP%]:after {\n  content: \".\";\n  clear: both;\n  visibility: hidden;\n  display: block;\n  height: 0; }\n\n.surf-carousel-2-stages-wrapper[_ngcontent-%COMP%] {\n  overflow: hidden; }\n\n.surf-carousel-2-stage[_ngcontent-%COMP%] {\n  overflow: hidden;\n  float: left;\n  position: relative;\n  transition: -webkit-transform 0.6s;\n  transition: transform 0.6s;\n  transition: transform 0.6s, -webkit-transform 0.6s; }\n\n.surf-carousel-2-slide-wrapper[_ngcontent-%COMP%] {\n  float: left;\n  position: relative;\n  min-height: 1px;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-user-select: none;\n    -webkit-user-select--moz-user-select: none;\n    -webkit-user-select--ms-user-select: none;\n    -webkit-user-select-user-select: none;\n    -webkit-user-select--webkit-backface-visibility: hidden;\n    -webkit-user-select--webkit-touch-callout: none; }\n\n.surf-carousel-2-nav[_ngcontent-%COMP%] {\n  z-index: 100;\n  position: absolute;\n  top: 50%; }\n\n.surf-carousel-2-nav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    position: absolute; }"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/core/surf-carousel-2/surf-carousel-2.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/core/surf-carousel-2/surf-carousel-2.component.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
var resize_service_1 = __webpack_require__(/*! ../resize.service */ "./src/app/core/resize.service.ts");
var nextId = 0;
var CarouselSlideDirective = /** @class */ (function () {
    function CarouselSlideDirective(tplRef) {
        this.tplRef = tplRef;
        /**
         * Unique slide identifier. Must be unique for the entire document for proper accessibility support.
         * Will be auto-generated if not provided.
         */
        this.id = "ngb-slide-" + nextId++;
    }
    return CarouselSlideDirective;
}());
exports.CarouselSlideDirective = CarouselSlideDirective;
var SlidersData = /** @class */ (function () {
    function SlidersData(id, active) {
        this.id = id;
        this.active = active;
    }
    return SlidersData;
}());
var ResolutionCarouselData = /** @class */ (function () {
    function ResolutionCarouselData() {
    }
    return ResolutionCarouselData;
}());
var SurfCarousel2Component = /** @class */ (function () {
    function SurfCarousel2Component(el, resizeService, winRef) {
        this.el = el;
        this.resizeService = resizeService;
        this.winRef = winRef;
        // number of visible sliders in carousel; it's needed for defining width of each slider
        this._slidersQuantity = 1;
        // carousel can be cycled.
        this.cycled = false;
        // translateX of first carousel-stage; carousel-stage will move after changing CSS-rule transform: translateX()
        this.translateXFirstStage = 0;
        // At the beginning first carousel-stage is visible and second carousel-stage is invisible
        this.visibleFirstStage = 'visible';
        // translateX of second carousel-stage; carousel-stage will move after changing CSS-rule transform: translateX()
        this.translateXSecondStage = 10000000000;
        // At the beginning second carousel-stage is invisible. It can be visible if cycled is true
        this.visibleSecondStage = 'visible';
        // margin-top can be set to 0 or 2000. It can be set just for second stage. It's needed for lifting up second stage
        // and move it left/right unnoticeably for the eye of user
        this.marTop = 0;
        // info about id and active/inactive state of each slider in first stage
        this.slidersFirstStageData = [];
        // info about id and active/inactive state of each slider in second stage
        this.slidersSecondStageData = [];
        // shows wether window was resized or not
        this.isResized = false;
    }
    Object.defineProperty(SurfCarousel2Component.prototype, "slidersQuantity", {
        get: function () {
            if (this.isNumber(this._slidersQuantity)) {
                return this._slidersQuantity;
            }
        },
        set: function (quantity) {
            if (this.isNumber(quantity)) {
                this._slidersQuantity = quantity;
            }
            if (this.isResolutionObj(quantity)) {
                if (!this.resolutionCarouselData) {
                    this.resolutionCarouselData = quantity;
                }
                if (this.carouselWindowWidth) {
                    var slidersNumber = this.defineSlidersNumber();
                    if (slidersNumber === this.slidersQuantity) {
                        return;
                    }
                    this._slidersQuantity = slidersNumber;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    SurfCarousel2Component.prototype.ngOnInit = function () {
        var _this = this;
        this.prevDisabled = this.cycled ? false : true;
        // this.nextDisabled = this.cycled ? false : true;
        this.carouselWindowWidth = this.el.nativeElement.querySelector('.surf-carousel-2').clientWidth;
        if (this.resolutionCarouselData) {
            this.slidersQuantity = this.resolutionCarouselData;
        }
        this.resizeSubscription = this.resizeService.onResize$
            .subscribe(function (size) {
            var currentCarouselWidth = _this.el.nativeElement.querySelector('.surf-carousel-2').clientWidth;
            if (currentCarouselWidth == _this.carouselWindowWidth) {
                return;
            }
            _this.carouselWindowWidth = currentCarouselWidth;
            if (_this.resolutionCarouselData) {
                _this.slidersQuantity = _this.resolutionCarouselData;
                // console.log('changed number of sliders');
                _this.isResized = true;
            }
        });
    };
    SurfCarousel2Component.prototype.ngAfterContentChecked = function () {
        var _this = this;
        if (this.slides.toArray().length <= this.slidersQuantity && this.slidersQuantity !== 1) {
            this.slidersQuantity = this.slides.toArray().length - 1;
        }
        this.sliderWidth = Math.floor(this.carouselWindowWidth / this.slidersQuantity);
        this.stagesWrapperWidth = this.sliderWidth * this.slides.toArray().length * 2;
        this.stageWidth = this.sliderWidth * this.slides.toArray().length;
        this.avaibleRightTranslateX = this.sliderWidth * (this.slides.toArray().length - this.slidersQuantity);
        // this.translateXSecondStage must be set at the beginning and not overwrite in ngAfterContentChecked()
        // cannot be set in ngOnInit() because it's needed to know number of slides at all
        if (this.translateXSecondStage === 10000000000) {
            this.translateXSecondStage = -this.stageWidth * 2;
        }
        // console.log(`sliderWidth: ${this.sliderWidth}; stageWidth: ${this.stageWidth}`);
        if (this.slidersFirstStageData.length && this.isResized) {
            this.setRightTranslatesXResize();
            this.isResized = false;
        }
        if (!this.slidersFirstStageData.length) {
            this.slides.forEach(function (item, index) {
                var active = _this.slidersQuantity >= index + 1 ? true : false;
                _this.slidersFirstStageData.push(new SlidersData(item.id, active));
            });
        }
        if (this.cycled && !this.slidersSecondStageData.length) {
            this.slides.forEach(function (item, index) {
                _this.slidersSecondStageData.push(new SlidersData("second-" + item.id, false));
            });
        }
    };
    // ngAfterContentChecked() END
    SurfCarousel2Component.prototype.ngOnDestroy = function () {
        if (this.resizeSubscription) {
            this.resizeSubscription.unsubscribe();
        }
    };
    SurfCarousel2Component.prototype.nextSlide = function () {
        if (!this.cycled && this.nextDisabled)
            return;
        var translateXFirstStage = this.translateXFirstStage - this.sliderWidth;
        var translateXSecondStage = this.translateXSecondStage - this.sliderWidth;
        // make second stage visible when right side of first stage is bordering with right border of carousel window
        if (this.avaibleRightTranslateX == Math.abs(translateXFirstStage)) {
            if (!this.cycled) {
                this.nextDisabled = true;
            }
            // set first stage after second one when right side of second stage is bordering with right border of carousel window
        }
        else if (this.stageWidth * 2 - this.sliderWidth * this.slidersQuantity == Math.abs(translateXSecondStage)) {
            translateXFirstStage = this.sliderWidth * this.slidersQuantity;
        }
        // ****************************************************************
        if (translateXSecondStage == translateXFirstStage) {
            this.marTop = 0;
        }
        // ****************************************************************
        // check if second stage is completely locating before left border of carousel window
        if (Math.abs(translateXSecondStage) > this.stageWidth * 2) {
            this.marTop = -2000;
            translateXSecondStage = translateXFirstStage;
        }
        // ****************************************************************
        this.translateXFirstStage = translateXFirstStage;
        this.translateXSecondStage = translateXSecondStage;
        this.defineActiveSliders();
        if (this.prevDisabled) {
            this.prevDisabled = false;
        }
    };
    // *********************************************************************
    SurfCarousel2Component.prototype.prevSlide = function () {
        if (!this.cycled && this.prevDisabled) {
            return;
        }
        var translateXFirstStage = this.translateXFirstStage + this.sliderWidth;
        var translateXSecondStage = this.translateXSecondStage + this.sliderWidth;
        // make second stage visible when left side of first stage is bordering with left border of carousel-window
        if (0 == Math.abs(translateXFirstStage)) {
            if (this.cycled) {
                translateXSecondStage = -this.stageWidth * 2;
                this.marTop = -2000;
            }
            else {
                this.prevDisabled = true;
            }
            // set first stage before second one when left side of second stage is bordering with left border of carousel window
        }
        else if (this.stageWidth == Math.abs(translateXSecondStage)) {
            translateXFirstStage = -this.stageWidth;
        }
        // ****************************************************************
        if (Math.abs(translateXSecondStage) == this.stageWidth * 2 - this.sliderWidth) {
            this.marTop = 0;
        }
        // ****************************************************************
        this.translateXFirstStage = translateXFirstStage;
        this.translateXSecondStage = translateXSecondStage;
        this.defineActiveSliders();
        if (this.nextDisabled) {
            this.nextDisabled = false;
        }
    };
    // ****************************************************
    SurfCarousel2Component.prototype.defineActiveSliders = function () {
        var _this = this;
        // number of elements which must be deactivated on first stage before elements with class .active
        var disActiveSlidesFirstStageN = Math.abs(this.translateXFirstStage / this.sliderWidth);
        // number of elements which must be deactivated on second stage before elements with class .active
        var disActiveSlidesSecondStageN = (Math.abs(this.translateXSecondStage) - this.stageWidth) / this.sliderWidth;
        disActiveSlidesSecondStageN = Math.max(disActiveSlidesSecondStageN, 0);
        var activatedElemNumber = 0;
        var lackingActiveElem;
        if (this.translateXFirstStage < 0) {
            // for case when second stage is after first
            this.slidersFirstStageData.forEach(function (item, index) {
                // disactivate all sliders before set of sliders with class .active; first Stage
                if (index + 1 <= disActiveSlidesFirstStageN) {
                    item.active = false;
                }
                else if (index + 1 >= disActiveSlidesFirstStageN + 1 && index + 1 <= _this.slidersQuantity + disActiveSlidesFirstStageN) {
                    item.active = true;
                    activatedElemNumber++;
                    // disactivate all sliders after set of sliders with class .active; first Stage
                }
                else if (index + 1 > _this.slidersQuantity + disActiveSlidesFirstStageN) {
                    item.active = false;
                }
            });
            // this checking is needed in case when there are still visible last slides of first stage and
            // there become visible first slides of second stage
            if (this.cycled) {
                // const lackingActiveElem = this.slidersQuantity - activatedElemNumber;
                // number of lacking active slides includes number of disactivated slides preceding instance of active slides
                lackingActiveElem = this.slidersQuantity - activatedElemNumber + disActiveSlidesSecondStageN;
                this.slidersSecondStageData.forEach(function (item, index) {
                    // disactivate all sliders before set of sliders with class .active; second Stage
                    if (disActiveSlidesSecondStageN > 0 && index + 1 <= disActiveSlidesSecondStageN) {
                        item.active = false;
                    }
                    else if (index + 1 <= lackingActiveElem) {
                        item.active = true;
                        activatedElemNumber++;
                        // disactivate all sliders after set of sliders with class .active; second Stage
                    }
                    else if (index + 1 >= lackingActiveElem + 1) {
                        item.active = false;
                    }
                });
                // console.log(`${activatedElemNumber}::: translateXFirstStage: ${this.translateXFirstStage}`);
            }
            // reffers to code above: for case when stages are moving left after pressing right button; second stage is still after first
        }
        else {
            if (this.cycled) {
                // for case when second stage is before first
                this.slidersSecondStageData.forEach(function (item, index) {
                    // disactivate all sliders before set of sliders with class .active; second Stage
                    if (disActiveSlidesSecondStageN != 0 && index + 1 <= disActiveSlidesSecondStageN) {
                        item.active = false;
                    }
                    else if (index + 1 >= disActiveSlidesSecondStageN + 1 && index + 1 <= _this.slidersQuantity + disActiveSlidesSecondStageN) {
                        item.active = true;
                        activatedElemNumber++;
                        // disactivate all sliders after set of sliders with class .active; second Stage
                    }
                    else if (index + 1 > _this.slidersQuantity + disActiveSlidesSecondStageN) {
                        item.active = false;
                    }
                });
            }
            lackingActiveElem = this.slidersQuantity - activatedElemNumber;
            this.slidersFirstStageData.forEach(function (item, index) {
                if (index + 1 <= lackingActiveElem) {
                    item.active = true;
                    activatedElemNumber++;
                    // disactivate all sliders after set of sliders with class .active; first Stage
                }
                else if (index + 1 >= lackingActiveElem + 1) {
                    item.active = false;
                }
            });
        }
    };
    // ****************************************************
    // defines number of sliders according to width of carousel. Is actual when user defince input property resolutionCarouselData
    SurfCarousel2Component.prototype.defineSlidersNumber = function () {
        var slidersNumber;
        for (var key in this.resolutionCarouselData) {
            if (this.carouselWindowWidth > +key) {
                slidersNumber = this.resolutionCarouselData[key];
            }
        }
        return slidersNumber;
    };
    // *********************************************************
    SurfCarousel2Component.prototype.setRightTranslatesXResize = function () {
        // also says hom much inactive elements are in stage before active one
        var indexOf1Active;
        var translateLeftStage;
        var translateRightStage;
        if (this.translateXFirstStage < 0) {
            // for case when second stage is after first
            indexOf1Active = this.slidersFirstStageData.findIndex(function (value) {
                return value.active === true;
            });
            if (indexOf1Active !== -1) {
                translateLeftStage = -indexOf1Active * this.sliderWidth;
                translateRightStage = translateLeftStage;
            }
            else {
                indexOf1Active = this.slidersSecondStageData.findIndex(function (value) {
                    return value.active === true;
                });
                translateRightStage = -this.stageWidth - this.sliderWidth * indexOf1Active;
                translateLeftStage = translateRightStage;
                // checking for case when window width grows
                if (this.slides.toArray().length - indexOf1Active <= this.slidersQuantity) {
                    translateLeftStage = (this.slides.toArray().length - indexOf1Active) * this.sliderWidth;
                }
            }
            // for case when first stage is after second
        }
        else if (this.cycled && this.translateXFirstStage === 0) {
            translateLeftStage = 0;
            translateRightStage = -this.stageWidth * 2;
        }
        else if (this.cycled) {
            indexOf1Active = this.slidersSecondStageData.findIndex(function (value) {
                return value.active === true;
            });
            if (indexOf1Active !== -1) {
                translateRightStage = -this.stageWidth - this.sliderWidth * indexOf1Active;
                translateLeftStage = (this.slides.toArray().length - indexOf1Active) * this.sliderWidth;
            }
        }
        if (translateLeftStage) {
            this.translateXFirstStage = translateLeftStage;
        }
        if (translateRightStage) {
            this.translateXSecondStage = translateRightStage;
        }
        this.defineActiveSliders();
    };
    /*// *********************************************************
    setRightTranslatesXResizeWrong() {
      const indActiveElem1Stage1 = this.slidersFirstStageData.findIndex((value: SlidersData) => {
        return value.active === true;
      });
  
      // also says hom much inactive elements are in stage before active one
      const indActiveElem1Stage2 = this.slidersSecondStageData.findIndex((value: SlidersData) => {
        return value.active === true;
      });
  
      let translateLeftStage: number;
      let translateRightStage: number;
  
      // checking whether has Stage1 active element or not
      if ( indActiveElem1Stage1 !== -1) {
        const signL = this.translateXFirstStage < 0 ? -1 : 1;
        translateLeftStage = this.sliderWidth * indActiveElem1Stage1 * signL;
      }
  
      // checking whether has Stage2 active element or not
      if ( indActiveElem1Stage2 !== -1) {
        if ( indActiveElem1Stage2 === 0 ) {
          let numberOfActives = 0;
          this.slidersSecondStageData.forEach((value) => {
            if (value.active === true) {
              numberOfActives++;
            }
          });
  
          translateRightStage = (this.sliderWidth * (this.slidersQuantity - numberOfActives)) - this.stageWidth;
        } else {
          translateRightStage = this.sliderWidth * indActiveElem1Stage2;
        }
      } else {
        translateRightStage = translateLeftStage;
      }
  
      if (translateLeftStage && translateRightStage) {
        this.translateXFirstStage = translateLeftStage;
        this.translateXSecondStage = translateRightStage;
  
      }
    }*/
    // type checking
    SurfCarousel2Component.prototype.isNumber = function (x) {
        return typeof x === 'number';
    };
    SurfCarousel2Component.prototype.isResolutionObj = function (x) {
        return typeof x === 'object';
    };
    return SurfCarousel2Component;
}());
exports.SurfCarousel2Component = SurfCarousel2Component;


/***/ }),

/***/ "./src/app/core/surf-carousel-2/surf-carousel-2.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/core/surf-carousel-2/surf-carousel-2.module.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SurfCarousel2Module = /** @class */ (function () {
    function SurfCarousel2Module() {
    }
    return SurfCarousel2Module;
}());
exports.SurfCarousel2Module = SurfCarousel2Module;


/***/ }),

/***/ "./src/app/core/surf-carousel/currentHeight.directive.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/surf-carousel/currentHeight.directive.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var resize_service_1 = __webpack_require__(/*! ../resize.service */ "./src/app/core/resize.service.ts");
// this directive is helpfull ib=n case when element has 'position: absolute' and parent has 'position: relative'.
// Parent has one direct child and thus its height becomes 0. Element followed parent element stay under parent's child
// It's needed to set height of parent directly. 
// Such approach and directive is needed for right changing of slides in carousel and beautifull apearance of background
var CurrentHeightDirective = /** @class */ (function () {
    function CurrentHeightDirective(el, resizeService, winRef) {
        this.el = el;
        this.resizeService = resizeService;
        this.winRef = winRef;
        this.actualElement = true;
        this.passHeight = new core_1.EventEmitter();
    }
    CurrentHeightDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.resizeSubscription = this.resizeService.onResize$
            .subscribe(function (size) {
            _this.getHeight();
            _this.passHeight.emit(_this.currentHeight);
        });
    };
    CurrentHeightDirective.prototype.ngOnChanges = function () {
        var _this = this;
        setTimeout(function () {
            _this.getHeight();
            _this.passHeight.emit(_this.currentHeight);
        }, 0);
    };
    CurrentHeightDirective.prototype.ngOnDestroy = function () {
        this.resizeSubscription.unsubscribe();
    };
    CurrentHeightDirective.prototype.getHeight = function () {
        if (!this.actualElement) {
            return 0;
        }
        this.currentHeight = this.el.nativeElement.offsetHeight;
    };
    CurrentHeightDirective.prototype.getSelfHeight = function () {
        this.getHeight();
        this.passHeight.emit(this.currentHeight);
    };
    return CurrentHeightDirective;
}());
exports.CurrentHeightDirective = CurrentHeightDirective;


/***/ }),

/***/ "./src/app/core/surf-carousel/make-nav-sticky.directive.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/surf-carousel/make-nav-sticky.directive.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var pass_scrolling_data_service_1 = __webpack_require__(/*! ../pass-scrolling-data.service */ "./src/app/core/pass-scrolling-data.service.ts");
var surf_carousel_component_1 = __webpack_require__(/*! ./surf-carousel.component */ "./src/app/core/surf-carousel/surf-carousel.component.ts");
// this directive is subscribed to scroll event, which is running outside AngularZone and is attached by directive
// CatchScrollOuterzoneDirective to .main-surf-wrapper (I set height html, body as 100% and made wrapper be scrollable )
// this directive does all checking by srolling outside AngularZone and emits event changeNavPositionState at nessery
// moment inside AngularZone in order to activate Change Detection
// all of this is using in order to escape using object Window and fasten app
var MakeNavStickyDirective = /** @class */ (function () {
    function MakeNavStickyDirective(zone, el, renderer, passScrollDataService) {
        this.zone = zone;
        this.el = el;
        this.renderer = renderer;
        this.passScrollDataService = passScrollDataService;
        // event helps add/remove classes .surf-carousel-nav-fixed/.surf-carousel-nav-bottomed (attached in surf-carousel.component.html)
        // by updating ts class navPositionState
        this.changeNavPositionState = new core_1.EventEmitter();
        this.parentElement = el.nativeElement.parentNode;
    }
    MakeNavStickyDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.subscription = _this.passScrollDataService.passerData.subscribe(function (data) {
                _this.makeNavSticky(data.target);
            });
        });
    };
    MakeNavStickyDirective.prototype.ngOnDestroy = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.subscription.unsubscribe();
        });
    };
    MakeNavStickyDirective.prototype.makeNavSticky = function (fakedBody) {
        var _this = this;
        // changing value of this property must be done with according changing of ccs-prop top of .boards-nav in surf-carousel.component.css
        // otherwise there will be sudden jumps of arrow-navigation
        var offset = 10;
        var navHeight = this.el.nativeElement.offsetHeight;
        var navCoords = this.passScrollDataService.getCoords(this.el.nativeElement, fakedBody);
        var carouselHeight = this.parentElement.offsetHeight;
        var carouselCoords = this.passScrollDataService.getCoords(this.parentElement, fakedBody);
        // if we are in the carousel
        if (carouselCoords.top < fakedBody.scrollTop && carouselCoords.top + carouselHeight - navHeight - 2 * offset >= fakedBody.scrollTop) {
            if (this.navPositionState.fixed) {
                return;
            }
            this.navPositionState.fixed = true;
            this.navPositionState.bottomed = false;
            // this.zone.run(() => this.changeNavPositionState.emit(this.navPositionState));
            this.renderer.setStyle(this.el.nativeElement, 'left', navCoords.left + 'px');
            // this.renderer.setStyle(this.el.nativeElement, 'position', 'fixed');
            // this.renderer.setStyle(this.el.nativeElement, 'top', offset + 'px');
            // this.renderer.setStyle(this.el.nativeElement, 'bottom', '');
            // if we are below the carousel
        }
        else if (carouselCoords.top + carouselHeight - navHeight - 2 * offset <= fakedBody.scrollTop) {
            if (this.navPositionState.bottomed) {
                return;
            }
            this.navPositionState.fixed = false;
            this.navPositionState.bottomed = true;
            // this.zone.run(() => this.changeNavPositionState.emit(this.navPositionState));
            // this.renderer.setStyle(this.el.nativeElement, 'position', 'absolute');
            // this.renderer.setStyle(this.el.nativeElement, 'top', 'auto');
            // this.renderer.setStyle(this.el.nativeElement, 'bottom', offset + 'px');
            this.renderer.setStyle(this.el.nativeElement, 'left', '');
            // if we are above the carousel
        }
        else if (carouselCoords.top > fakedBody.scrollTop) {
            if (!this.navPositionState.bottomed && !this.navPositionState.fixed) {
                return;
            }
            this.navPositionState.fixed = false;
            this.navPositionState.bottomed = false;
            // this.renderer.setStyle(this.el.nativeElement, 'position', 'absolute');
            // this.renderer.setStyle(this.el.nativeElement, 'top', '');
            this.renderer.setStyle(this.el.nativeElement, 'left', '');
        }
        this.zone.run(function () { return _this.changeNavPositionState.emit(_this.navPositionState); });
    };
    return MakeNavStickyDirective;
}());
exports.MakeNavStickyDirective = MakeNavStickyDirective;


/***/ }),

/***/ "./src/app/core/surf-carousel/surf-carousel.component.ngfactory.js":
/*!*************************************************************************!*\
  !*** ./src/app/core/surf-carousel/surf-carousel.component.ngfactory.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./surf-carousel.component.sass.shim.ngstyle */ "./src/app/core/surf-carousel/surf-carousel.component.sass.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ./currentHeight.directive */ "./src/app/core/surf-carousel/currentHeight.directive.ts");
var i3 = __webpack_require__(/*! ../resize.service */ "./src/app/core/resize.service.ts");
var i4 = __webpack_require__(/*! ../window-ref.service */ "./src/app/core/window-ref.service.ts");
var i5 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i6 = __webpack_require__(/*! ./make-nav-sticky.directive */ "./src/app/core/surf-carousel/make-nav-sticky.directive.ts");
var i7 = __webpack_require__(/*! ../pass-scrolling-data.service */ "./src/app/core/pass-scrolling-data.service.ts");
var i8 = __webpack_require__(/*! ./surf-carousel.component */ "./src/app/core/surf-carousel/surf-carousel.component.ts");
var i9 = __webpack_require__(/*! ../../surf-home/board.service */ "./src/app/surf-home/board.service.ts");
var styles_SurfCarouselComponent = [i0.styles];
var RenderType_SurfCarouselComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_SurfCarouselComponent, data: { "animation": [{ type: 7, name: "carouselState", definitions: [{ type: 0, name: "rightActive", styles: { type: 6, styles: { transform: "translateX(0)" }, offset: null }, options: undefined }, { type: 0, name: "leftActive", styles: { type: 6, styles: { transform: "translateX(0)" }, offset: null }, options: undefined }, { type: 1, expr: "void => rightActive", animation: [{ type: 6, styles: { transform: "translateX(100%)" }, offset: null }, { type: 4, styles: null, timings: 600 }], options: null }, { type: 1, expr: "rightActive => void", animation: [{ type: 4, styles: { type: 6, styles: { transform: "translateX(-100%)" }, offset: null }, timings: 600 }], options: null }, { type: 1, expr: "void => leftActive", animation: [{ type: 6, styles: { transform: "translateX(-100%)" }, offset: null }, { type: 4, styles: null, timings: 600 }], options: null }, { type: 1, expr: "leftActive => void", animation: [{ type: 4, styles: { type: 6, styles: { transform: "translateX(100%)" }, offset: null }, timings: 600 }], options: null }], options: {} }] } });
exports.RenderType_SurfCarouselComponent = RenderType_SurfCarouselComponent;
function View_SurfCarouselComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵand(0, null, null, 0))], null, null); }
function View_SurfCarouselComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "div", [["class", "boards-carousel-item-wrapper surf-carousel-items-wrapper"]], [[24, "@carouselState", 0]], null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 3, "div", [], null, [[null, "surfDefineHeight"], [null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 2).getSelfHeight() !== false);
        ad = (pd_0 && ad);
    } if (("surfDefineHeight" === en)) {
        var pd_1 = ((_co.parentHeight = $event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), i1.ɵdid(2, 737280, null, 0, i2.CurrentHeightDirective, [i1.ElementRef, i3.ResizeService, i4.WINDOW], { actualElement: [0, "actualElement"] }, { passHeight: "surfDefineHeight" }), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_SurfCarouselComponent_3)), i1.ɵdid(4, 540672, null, 0, i5.NgTemplateOutlet, [i1.ViewContainerRef], { ngTemplateOutlet: [0, "ngTemplateOutlet"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = ((_v.parent.context.$implicit.id == _co.currentSlideId) && _co.viewReady); _ck(_v, 2, 0, currVal_1); var currVal_2 = _v.parent.context.$implicit.tplRef; _ck(_v, 4, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.carouselSliderState; _ck(_v, 0, 0, currVal_0); }); }
function View_SurfCarouselComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_SurfCarouselComponent_2)), i1.ɵdid(2, 278528, null, 0, i5.NgSwitchCase, [i1.ViewContainerRef, i1.TemplateRef, i5.NgSwitch], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), i1.ɵand(0, null, null, 0))], function (_ck, _v) { var currVal_0 = _v.context.$implicit.id; _ck(_v, 2, 0, currVal_0); }, null); }
function View_SurfCarouselComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, [["surfCarousel", 1]], null, 12, "div", [["class", "boards-carousel surf-carousel"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 5, "div", [["class", "boards-nav surf-carousel-nav"]], null, [[null, "surfMakeNavStickyChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("surfMakeNavStickyChange" === en)) {
        var pd_0 = ((_co.navPositionState = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(2, 278528, null, 0, i5.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i1.ɵpod(3, { "surf-carousel-nav-fixed": 0, "surf-carousel-nav-bottomed": 1 }), i1.ɵdid(4, 212992, null, 0, i6.MakeNavStickyDirective, [i1.NgZone, i1.ElementRef, i1.Renderer2, i7.PassScrollingDataService], { navPositionState: [0, "navPositionState"] }, null), (_l()(), i1.ɵeld(5, 0, null, null, 0, "div", [["class", "boards-prev surf-carousel-prev"]], [[2, "disabled", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.prevSlide() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 0, "div", [["class", "boards-next surf-carousel-next"]], [[2, "disabled", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.nextSlide() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 5, "div", [["class", "surf-carousel-stage"]], null, null, null, null, null)), i1.ɵdid(8, 278528, null, 0, i5.NgStyle, [i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i1.ɵpod(9, { "height": 0 }), i1.ɵdid(10, 16384, null, 0, i5.NgSwitch, [], { ngSwitch: [0, "ngSwitch"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_SurfCarouselComponent_1)), i1.ɵdid(12, 802816, null, 0, i5.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "boards-nav surf-carousel-nav"; var currVal_1 = _ck(_v, 3, 0, _co.navPositionState.fixed, _co.navPositionState.bottomed); _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = _co.navPositionState; _ck(_v, 4, 0, currVal_2); var currVal_5 = _ck(_v, 9, 0, (_co.parentHeight + "px")); _ck(_v, 8, 0, currVal_5); var currVal_6 = _co.currentSlideId; _ck(_v, 10, 0, currVal_6); var currVal_7 = _co.slides; _ck(_v, 12, 0, currVal_7); }, function (_ck, _v) { var _co = _v.component; var currVal_3 = _co.prevDisabled; _ck(_v, 5, 0, currVal_3); var currVal_4 = _co.nextDisabled; _ck(_v, 6, 0, currVal_4); }); }
exports.View_SurfCarouselComponent_0 = View_SurfCarouselComponent_0;
function View_SurfCarouselComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, "surf-carousel", [], null, null, null, View_SurfCarouselComponent_0, RenderType_SurfCarouselComponent)), i1.ɵdid(1, 2211840, null, 1, i8.SurfCarouselComponent, [[2, i9.BoardService]], null, null), i1.ɵqud(603979776, 1, { slides: 1 })], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_SurfCarouselComponent_Host_0 = View_SurfCarouselComponent_Host_0;
var SurfCarouselComponentNgFactory = i1.ɵccf("surf-carousel", i8.SurfCarouselComponent, View_SurfCarouselComponent_Host_0, {}, {}, []);
exports.SurfCarouselComponentNgFactory = SurfCarouselComponentNgFactory;


/***/ }),

/***/ "./src/app/core/surf-carousel/surf-carousel.component.sass.shim.ngstyle.js":
/*!*********************************************************************************!*\
  !*** ./src/app/core/surf-carousel/surf-carousel.component.sass.shim.ngstyle.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".surf-carousel[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 1px 0; }\n\n.surf-carousel-stage[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n  margin: 40px 0 30px; }\n\n.surf-carousel-items-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0; }\n\n.surf-carousel-nav[_ngcontent-%COMP%] {\n  z-index: 3;\n  position: absolute; }\n\n.boards-nav[_ngcontent-%COMP%] {\n  z-index: 3;\n  position: absolute;\n  top: 10px;\n  right: -42px;\n  width: 81px;\n  height: 40px;\n  font-size: 0; }\n\n.boards-nav[_ngcontent-%COMP%]   .boards-prev[_ngcontent-%COMP%], .boards-nav[_ngcontent-%COMP%]   .boards-next[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 39px;\n    height: 40px;\n    background-color: #f2d800;\n    background-position: center center;\n    background-repeat: no-repeat;\n    cursor: pointer; }\n\n.boards-nav[_ngcontent-%COMP%]   .boards-prev[_ngcontent-%COMP%] {\n    width: 40px;\n    border-right: 1px solid #bfaa00;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAYAAAAmL5yKAAAAyklEQVQokZXQPUpDQRSG4edeLKJNSiFEURJXYCVEyA9WCu5CsqXswkIbiYKgpHEDgRARFNxAHEsLJxAuF5354BRnOO/LmVOEENSkiztMcVU3sM5WzdshHrCHxl8wlJV+fwOeYpwjaEf4AI+4xFeqoBXhDp5wngKvBbu4xxFmEV6lwFCEEF5wnApU8lw9YnZKXGAe+xmaKBKrV+ITIyxwghvs5GwAHxhgiVPcpko2b/COId7QxzW2cwQiPIyyM0xyBfx+Y4BXfP8n+AHAPybm9f2kHgAAAABJRU5ErkJggg==); }\n\n.boards-nav[_ngcontent-%COMP%]   .boards-next[_ngcontent-%COMP%] {\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAYAAAAmL5yKAAAAxUlEQVQokZXST0rCQRgG4OfnRsxFSyGkIPEQkSBq0EKhc3SkvIULd/0hEHTjAYRQBIMuUNPShWOECM68MMzi4334YKYIITiRIXq4x8fhsHSqjTKu8RbvbOARz6jjFZe5wA8e8I6riNRzgD3SxwSNiFzkAPCNAWZo4gW1IoQwwW0G9D/znA2OpSihhSLxnGMaywv0czaoYowbuw/Vw1cqcBbLLSzRwSdpr1DBCG2s0cVmP0wBnnAXS92I/CUF+MXKbu3l4XALlQ4m8znxPBUAAAAASUVORK5CYII=); }\n\n.boards-nav[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%] {\n    background-color: rgba(242, 216, 0, 0.3);\n    cursor: not-allowed; }\n\n.surf-carousel-nav.surf-carousel-nav-fixed[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 10px;\n  bottom: auto; }\n\n.surf-carousel-nav.surf-carousel-nav-bottomed[_ngcontent-%COMP%] {\n  top: auto;\n  bottom: 10px; }\n\n\n\n@media only screen and (max-width: 992px) {\n  .boards-nav[_ngcontent-%COMP%] {\n    right: -2px;\n    top: 10px; }\n  .surf-carousel-stage[_ngcontent-%COMP%] {\n    margin: 50px 0 30px; } }"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/core/surf-carousel/surf-carousel.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/surf-carousel/surf-carousel.component.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var board_service_1 = __webpack_require__(/*! ../../surf-home/board.service */ "./src/app/surf-home/board.service.ts");
var nextId = 0;
var NavPositionState = /** @class */ (function () {
    function NavPositionState() {
    }
    return NavPositionState;
}());
exports.NavPositionState = NavPositionState;
var CarouselSlideDirective = /** @class */ (function () {
    function CarouselSlideDirective(tplRef) {
        this.tplRef = tplRef;
        /**
         * Unique slide identifier. Must be unique for the entire document for proper accessibility support.
         * Will be auto-generated if not provided.
         */
        this.id = "ngb-slide-" + nextId++;
    }
    return CarouselSlideDirective;
}());
exports.CarouselSlideDirective = CarouselSlideDirective;
var SurfCarouselComponent = /** @class */ (function () {
    // property boardService is needed just for showing chosen tabs on each slide
    function SurfCarouselComponent(boardService) {
        this.boardService = boardService;
        // for disabling arrows left/right when slides are finished
        this.nextDisabled = false;
        this.prevDisabled = true;
        // for managing position of nav arrows left/right
        this.navPositionState = {
            fixed: false,
            bottomed: false
        };
        // for animation of changes sliders; state can be either 'leftActive' or 'rightActive'
        this.carouselSliderState = 'rightActive';
    }
    SurfCarouselComponent.prototype.ngOnInit = function () {
        // setTimeout(() => {
        //   // get ids for every slide
        //   this.slidersId = this.slides.map(slide => slide.id);
        //   this.currentSlideId = this.slidersId[0];
        //   this.nextSlideId = this.slidersId[1];
        //   this.viewReady = true;
        // }, 0);
    };
    SurfCarouselComponent.prototype.ngAfterContentChecked = function () {
        if (!this.viewReady) {
            // get ids for every slide
            this.slidersId = this.slides.map(function (slide) { return slide.id; });
            this.currentSlideId = this.slidersId[0];
            this.nextSlideId = this.slidersId[1];
            this.viewReady = true;
        }
    };
    // ngAfterViewChecked() {
    //   // viewChild is set after the view has been initialized
    //   // setTimeout(() => { this.parentHeight = this.viewChildHeightDirective.childHeight + 'px'};
    //   // this.tick_then(() => this.viewReady = true);
    // }
    SurfCarouselComponent.prototype.nextSlide = function () {
        var _this = this;
        if (this.nextDisabled) {
            return;
        }
        if (this.boardService) {
            this.boardService.setIdActivatedSlide(this.nextSlideId);
        }
        // get index of next Slide
        var index = this.slidersId.findIndex(function (elem) { return elem === _this.nextSlideId; });
        this.prevSlideId = this.currentSlideId;
        this.carouselSliderState = 'rightActive';
        // must wait in order to update animations states; it takes some time
        setTimeout(function () {
            _this.currentSlideId = _this.nextSlideId;
            if (index + 1 <= _this.slidersId.length) {
                _this.nextSlideId = _this.slidersId[index + 1];
            }
            else {
                _this.nextSlideId = _this.slidersId[_this.slidersId.length - 1];
            }
            _this.prevDisabled = false;
            // looks for lastSlide and disables further right navigation
            if ((index + 1) === _this.slidersId.length) {
                _this.nextDisabled = true;
            }
        }, 1);
    };
    SurfCarouselComponent.prototype.prevSlide = function () {
        var _this = this;
        if (this.prevDisabled) {
            return;
        }
        if (this.boardService) {
            this.boardService.setIdActivatedSlide(this.prevSlideId);
        }
        // get index of next Slide
        var index = this.slidersId.findIndex(function (elem) { return elem === _this.prevSlideId; });
        this.nextSlideId = this.currentSlideId;
        this.carouselSliderState = 'leftActive';
        // must wait in order to update animations states; it takes some time
        setTimeout(function () {
            _this.currentSlideId = _this.prevSlideId;
            if (index - 1 >= 0) {
                _this.prevSlideId = _this.slidersId[index - 1];
            }
            else {
                _this.prevSlideId = _this.slidersId[0];
            }
            _this.nextDisabled = false;
            // looks for first Slide and disables further left navigation
            if ((index) === 0) {
                _this.prevDisabled = true;
            }
        }, 1);
    };
    // properties cannot be changed until change of View isn't finished
    SurfCarouselComponent.prototype.tick_then = function (fn) { setTimeout(fn, 0); };
    return SurfCarouselComponent;
}());
exports.SurfCarouselComponent = SurfCarouselComponent;


/***/ }),

/***/ "./src/app/core/surf-carousel/surf-carousel.module.ts":
/*!************************************************************!*\
  !*** ./src/app/core/surf-carousel/surf-carousel.module.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SurfCarouselModule = /** @class */ (function () {
    function SurfCarouselModule() {
    }
    return SurfCarouselModule;
}());
exports.SurfCarouselModule = SurfCarouselModule;


/***/ }),

/***/ "./src/app/core/sw-updates/sw-updates.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/sw-updates/sw-updates.service.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var service_worker_1 = __webpack_require__(/*! @angular/service-worker */ "@angular/service-worker");
var rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
var logger_service_1 = __webpack_require__(/*! ../services/logger.service */ "./src/app/core/services/logger.service.ts");
/**
 * SwUpdatesService
 *
 * @description
 * 1. Checks for available ServiceWorker updates once instantiated.
 * 2. As long as there is no update available, re-checks every 6 hours.
 * 3. As soon as an update is detected, it activates the update and notifies interested parties.
 * 4. It continues to check for available updates.
 *
 * @property
 * `updateActivated` {Observable<string>} - Emit the version hash whenever an update is activated.
 */
var SwUpdatesService = /** @class */ (function () {
    function SwUpdatesService(appRef, logger, sw) {
        var _this = this;
        this.logger = logger;
        this.sw = sw;
        this.checkInterval = 1000 * 60 * 60 * 6; // 6 hours
        this.onDestroy = new rxjs_1.Subject();
        this.checkForUpdateSubj = new rxjs_1.Subject();
        this.updateActivated = this.sw.activated.pipe(operators_1.takeUntil(this.onDestroy), operators_1.tap(function (evt) { return _this.log("Update event: " + JSON.stringify(evt)); }), operators_1.filter(function (event) { return event.type === 'UPDATE_ACTIVATED'; }), operators_1.map(function (event) { return event.current; }));
        var appIsStable$ = appRef.isStable.pipe(operators_1.first(function (v) { return v; }));
        var checkForUpdates$ = this.checkForUpdateSubj.pipe(operators_1.debounceTime(this.checkInterval), operators_1.startWith(undefined));
        rxjs_1.concat(appIsStable$, checkForUpdates$)
            .pipe(operators_1.takeUntil(this.onDestroy))
            .subscribe(function () { return _this.checkForUpdate(); });
    }
    SwUpdatesService.prototype.ngOnDestroy = function () {
        this.onDestroy.next();
    };
    SwUpdatesService.prototype.activateUpdate = function () {
        var _this = this;
        this.log('Activating update...');
        this.sw.available.subscribe(function (event) {
            _this.sw.activateUpdate()
                .then(function () { return _this.scheduleCheckForUpdate(); });
        });
    };
    SwUpdatesService.prototype.checkForUpdate = function () {
        var _this = this;
        this.log('Checking for update...');
        this.sw.checkForUpdate()
            .then(function (v) { return _this.activateUpdate(); }, function () { return _this.scheduleCheckForUpdate(); });
    };
    SwUpdatesService.prototype.log = function (message) {
        var timestamp = (new Date).toISOString();
        this.logger.log("[SwUpdates - " + timestamp + "]: " + message);
    };
    SwUpdatesService.prototype.scheduleCheckForUpdate = function () {
        this.checkForUpdateSubj.next();
    };
    return SwUpdatesService;
}());
exports.SwUpdatesService = SwUpdatesService;


/***/ }),

/***/ "./src/app/core/window-ref.service.ts":
/*!********************************************!*\
  !*** ./src/app/core/window-ref.service.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// import { Injectable } from '@angular/core';
// function _window(): any {
//    // return the global native browser window object
//    return window;
// }
// @Injectable()
// export class WindowRefService {
//    get nativeWindow(): any {
//       return _window();
//    }
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(/*! @angular/common */ "@angular/common");
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
/* Create a new injection token for injecting the window into a component. */
exports.WINDOW = new core_1.InjectionToken('WindowToken');
/* Define abstract class for obtaining reference to the global window object. */
var WindowRef = /** @class */ (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: function () {
            throw new Error('Not implemented.');
        },
        enumerable: true,
        configurable: true
    });
    return WindowRef;
}());
exports.WindowRef = WindowRef;
/* Define class that implements the abstract class and returns the native window object. */
var BrowserWindowRef = /** @class */ (function (_super) {
    __extends(BrowserWindowRef, _super);
    function BrowserWindowRef() {
        return _super.call(this) || this;
    }
    Object.defineProperty(BrowserWindowRef.prototype, "nativeWindow", {
        get: function () {
            return window;
        },
        enumerable: true,
        configurable: true
    });
    return BrowserWindowRef;
}(WindowRef));
exports.BrowserWindowRef = BrowserWindowRef;
/* Create an factory function that returns the native window object. */
function windowFactory(browserWindowRef, platformId) {
    if (common_1.isPlatformBrowser(platformId)) {
        return browserWindowRef.nativeWindow;
    }
    return new Object();
}
exports.windowFactory = windowFactory;
/* Create a injectable provider for the WindowRef token that uses the BrowserWindowRef class. */
exports.browserWindowProvider = {
    provide: WindowRef,
    useClass: BrowserWindowRef
};
/* Create an injectable provider that uses the windowFactory function for returning the native window object. */
exports.windowProvider = {
    provide: exports.WINDOW,
    useFactory: windowFactory,
    deps: [WindowRef, core_1.PLATFORM_ID]
};
/* Create an array of providers. */
exports.WINDOW_PROVIDERS = [
    exports.browserWindowProvider,
    exports.windowProvider
];


/***/ }),

/***/ "./src/app/shared/add-content.directive.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/add-content.directive.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var AddContentDirective = /** @class */ (function () {
    function AddContentDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    AddContentDirective.prototype.ngOnInit = function () {
        this.putContent();
    };
    AddContentDirective.prototype.ngOnChanges = function () {
        this.putContent();
    };
    AddContentDirective.prototype.putContent = function () {
        this.elPrevious = this.el.nativeElement.querySelector('.innerDivArticle');
        if (this.elPrevious) {
            this.renderer.removeChild(this.el.nativeElement, this.elPrevious);
        }
        this.elWrapper = this.renderer.createElement('div');
        this.renderer.addClass(this.elWrapper, 'innerDivArticle');
        this.elWrapper.innerHTML = this.content;
        this.renderer.appendChild(this.el.nativeElement, this.elWrapper);
    };
    return AddContentDirective;
}());
exports.AddContentDirective = AddContentDirective;


/***/ }),

/***/ "./src/app/shared/handle-link.directive.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/handle-link.directive.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var location_service_1 = __webpack_require__(/*! ../core/services/location.service */ "./src/app/core/services/location.service.ts");
var HandleLinkDirective = /** @class */ (function () {
    function HandleLinkDirective(locationService) {
        this.locationService = locationService;
        this.dtOn = false;
    }
    HandleLinkDirective.prototype.onClick = function (eventTarget, button, ctrlKey, metaKey, altKey) {
        // Hide the search results if we clicked outside both the "search box" and the "search results"
        // if (!this.searchElements.some(element => element.nativeElement.contains(eventTarget))) {
        //   this.hideSearchResults();
        // }
        // Show developer source view if the footer is clicked while holding the meta and alt keys
        if (eventTarget.tagName === 'FOOTER' && metaKey && altKey) {
            this.dtOn = !this.dtOn;
            return false;
        }
        // Deal with anchor clicks; climb DOM tree until anchor found (or null)
        var target = eventTarget;
        while (target && !(target instanceof HTMLAnchorElement)) {
            target = target.parentElement;
        }
        if (target instanceof HTMLAnchorElement) {
            return this.locationService.handleAnchorClick(target, button, ctrlKey, metaKey);
        }
        // Allow the click to pass through
        return true;
    };
    return HandleLinkDirective;
}());
exports.HandleLinkDirective = HandleLinkDirective;


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
exports.SharedModule = SharedModule;


/***/ }),

/***/ "./src/app/surf-footer/surf-footer.component.ngfactory.js":
/*!****************************************************************!*\
  !*** ./src/app/surf-footer/surf-footer.component.ngfactory.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./surf-footer.component.sass.shim.ngstyle */ "./src/app/surf-footer/surf-footer.component.sass.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! ./surf-footer.component */ "./src/app/surf-footer/surf-footer.component.ts");
var styles_SurfFooterComponent = [i0.styles];
var RenderType_SurfFooterComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_SurfFooterComponent, data: {} });
exports.RenderType_SurfFooterComponent = RenderType_SurfFooterComponent;
function View_SurfFooterComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 67, "footer", [["class", "main-footer"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 66, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 65, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 56, "div", [["class", "col-lg-5 order-lg-7"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 55, "div", [["class", "main-footer-nav-wrapper"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 44, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 21, "div", [["class", "col-sm-6"]], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 20, "ul", [["class", "list-unstyled main-footer-nav"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 3, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 10).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(10, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(11, 1), (_l()(), i1.ɵted(-1, null, ["About"])), (_l()(), i1.ɵeld(13, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(14, 0, null, null, 3, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 15).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(15, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(16, 1), (_l()(), i1.ɵted(-1, null, ["Boards "])), (_l()(), i1.ɵeld(18, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(19, 0, null, null, 3, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 20).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(20, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(21, 1), (_l()(), i1.ɵted(-1, null, ["Accessories"])), (_l()(), i1.ɵeld(23, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(24, 0, null, null, 3, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 25).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(25, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(26, 1), (_l()(), i1.ɵted(-1, null, ["Blog"])), (_l()(), i1.ɵeld(28, 0, null, null, 21, "div", [["class", "col-sm-6"]], null, null, null, null, null)), (_l()(), i1.ɵeld(29, 0, null, null, 20, "ul", [["class", "list-unstyled main-footer-nav"]], null, null, null, null, null)), (_l()(), i1.ɵeld(30, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(31, 0, null, null, 3, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 32).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(32, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(33, 1), (_l()(), i1.ɵted(-1, null, ["Technology"])), (_l()(), i1.ɵeld(35, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(36, 0, null, null, 3, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 37).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(37, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(38, 1), (_l()(), i1.ɵted(-1, null, ["Team"])), (_l()(), i1.ɵeld(40, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(41, 0, null, null, 3, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 42).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(42, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(43, 1), (_l()(), i1.ɵted(-1, null, ["Dealers"])), (_l()(), i1.ɵeld(45, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(46, 0, null, null, 3, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 47).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(47, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(48, 1), (_l()(), i1.ɵted(-1, null, ["Contact us"])), (_l()(), i1.ɵeld(50, 0, null, null, 9, "form", [["action", "http://eepurl.com/dov9Pn"], ["class", "form-subscriber form-inline"]], null, null, null, null, null)), (_l()(), i1.ɵeld(51, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Subscribe to out newsletter"])), (_l()(), i1.ɵeld(53, 0, null, null, 6, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), i1.ɵeld(54, 0, null, null, 1, "label", [["class", "sr-only"], ["for", "emailField"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Your email"])), (_l()(), i1.ɵeld(56, 0, null, null, 0, "input", [["class", "form-control"], ["id", "emailField"], ["placeholder", "Your email"], ["type", "email"]], null, null, null, null, null)), (_l()(), i1.ɵeld(57, 0, null, null, 2, "button", [], null, null, null, null, null)), (_l()(), i1.ɵeld(58, 0, null, null, 1, "span", [["class", "sr-only"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Subscribe"])), (_l()(), i1.ɵeld(60, 0, null, null, 7, "div", [["class", "col-lg-7 order-lg-1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(61, 0, null, null, 6, "div", [["class", "rights"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\u00A9 2017 Surfers Co "])), (_l()(), i1.ɵeld(63, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\u2022"])), (_l()(), i1.ɵted(-1, null, [" Design by "])), (_l()(), i1.ɵeld(66, 0, null, null, 1, "a", [["href", "https://dribbble.com/lucaalco"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["@lucaalco"]))], function (_ck, _v) { var currVal_2 = _ck(_v, 11, 0, "/about"); _ck(_v, 10, 0, currVal_2); var currVal_5 = _ck(_v, 16, 0, "/boards"); _ck(_v, 15, 0, currVal_5); var currVal_8 = _ck(_v, 21, 0, "/accessories"); _ck(_v, 20, 0, currVal_8); var currVal_11 = _ck(_v, 26, 0, "/blog"); _ck(_v, 25, 0, currVal_11); var currVal_14 = _ck(_v, 33, 0, "/technology"); _ck(_v, 32, 0, currVal_14); var currVal_17 = _ck(_v, 38, 0, "/team"); _ck(_v, 37, 0, currVal_17); var currVal_20 = _ck(_v, 43, 0, "/dealers"); _ck(_v, 42, 0, currVal_20); var currVal_23 = _ck(_v, 48, 0, "/contact-us"); _ck(_v, 47, 0, currVal_23); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 10).target; var currVal_1 = i1.ɵnov(_v, 10).href; _ck(_v, 9, 0, currVal_0, currVal_1); var currVal_3 = i1.ɵnov(_v, 15).target; var currVal_4 = i1.ɵnov(_v, 15).href; _ck(_v, 14, 0, currVal_3, currVal_4); var currVal_6 = i1.ɵnov(_v, 20).target; var currVal_7 = i1.ɵnov(_v, 20).href; _ck(_v, 19, 0, currVal_6, currVal_7); var currVal_9 = i1.ɵnov(_v, 25).target; var currVal_10 = i1.ɵnov(_v, 25).href; _ck(_v, 24, 0, currVal_9, currVal_10); var currVal_12 = i1.ɵnov(_v, 32).target; var currVal_13 = i1.ɵnov(_v, 32).href; _ck(_v, 31, 0, currVal_12, currVal_13); var currVal_15 = i1.ɵnov(_v, 37).target; var currVal_16 = i1.ɵnov(_v, 37).href; _ck(_v, 36, 0, currVal_15, currVal_16); var currVal_18 = i1.ɵnov(_v, 42).target; var currVal_19 = i1.ɵnov(_v, 42).href; _ck(_v, 41, 0, currVal_18, currVal_19); var currVal_21 = i1.ɵnov(_v, 47).target; var currVal_22 = i1.ɵnov(_v, 47).href; _ck(_v, 46, 0, currVal_21, currVal_22); }); }
exports.View_SurfFooterComponent_0 = View_SurfFooterComponent_0;
function View_SurfFooterComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "surf-footer", [], null, null, null, View_SurfFooterComponent_0, RenderType_SurfFooterComponent)), i1.ɵdid(1, 114688, null, 0, i4.SurfFooterComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_SurfFooterComponent_Host_0 = View_SurfFooterComponent_Host_0;
var SurfFooterComponentNgFactory = i1.ɵccf("surf-footer", i4.SurfFooterComponent, View_SurfFooterComponent_Host_0, {}, {}, []);
exports.SurfFooterComponentNgFactory = SurfFooterComponentNgFactory;


/***/ }),

/***/ "./src/app/surf-footer/surf-footer.component.sass.shim.ngstyle.js":
/*!************************************************************************!*\
  !*** ./src/app/surf-footer/surf-footer.component.sass.shim.ngstyle.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [""];
exports.styles = styles;


/***/ }),

/***/ "./src/app/surf-footer/surf-footer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/surf-footer/surf-footer.component.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var SurfFooterComponent = /** @class */ (function () {
    function SurfFooterComponent() {
    }
    SurfFooterComponent.prototype.ngOnInit = function () { };
    return SurfFooterComponent;
}());
exports.SurfFooterComponent = SurfFooterComponent;


/***/ }),

/***/ "./src/app/surf-footer/surf-footer.module.ts":
/*!***************************************************!*\
  !*** ./src/app/surf-footer/surf-footer.module.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SurfFooterModule = /** @class */ (function () {
    function SurfFooterModule() {
    }
    return SurfFooterModule;
}());
exports.SurfFooterModule = SurfFooterModule;


/***/ }),

/***/ "./src/app/surf-home/board-data.ts":
/*!*****************************************!*\
  !*** ./src/app/surf-home/board-data.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BoardData = /** @class */ (function () {
    function BoardData() {
    }
    return BoardData;
}());
exports.BoardData = BoardData;
var Dimention = /** @class */ (function () {
    function Dimention() {
    }
    return Dimention;
}());
exports.Dimention = Dimention;
var BoardImage = /** @class */ (function () {
    function BoardImage() {
    }
    return BoardImage;
}());
exports.BoardImage = BoardImage;
var TabsetDescription = /** @class */ (function () {
    function TabsetDescription() {
    }
    return TabsetDescription;
}());
exports.TabsetDescription = TabsetDescription;
var TabsetImages = /** @class */ (function () {
    function TabsetImages() {
    }
    return TabsetImages;
}());
exports.TabsetImages = TabsetImages;
// +++++++++++++++++++++++++++++++++++++++++++++++++++
var ActivatedTab = /** @class */ (function () {
    function ActivatedTab() {
    }
    return ActivatedTab;
}());
exports.ActivatedTab = ActivatedTab;
var Tabset = /** @class */ (function () {
    function Tabset() {
    }
    return Tabset;
}());
exports.Tabset = Tabset;


/***/ }),

/***/ "./src/app/surf-home/board.service.ts":
/*!********************************************!*\
  !*** ./src/app/surf-home/board.service.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
var board_data_1 = __webpack_require__(/*! ./board-data */ "./src/app/surf-home/board-data.ts");
var home_default_data_1 = __webpack_require__(/*! ./home-default-data */ "./src/app/surf-home/home-default-data.ts");
var ajax_api_service_1 = __webpack_require__(/*! ../core/services/ajax-api.service */ "./src/app/core/services/ajax-api.service.ts");
var BoardService = /** @class */ (function () {
    function BoardService(ajaxApi) {
        this.ajaxApi = ajaxApi;
        this.boardDatas = home_default_data_1.boardData;
        this._subject = new rxjs_1.BehaviorSubject(this.boardDatas);
        this.boardDatasOb = this._subject.asObservable();
        // first element of array activatedTabs is faked because of that ts wasn't transpiled into js and there was error
        this.activatedTabs = [{
                slideId: 'whoKnows',
                tabsets: [
                    {
                        id: 'tabset0',
                        activeTabNumber: 0,
                        tabChangeObj: {
                            activeId: 'tab-000000',
                            nextId: 'tab-next-00000',
                        },
                    }
                ]
            }];
    }
    BoardService.prototype.getBoardsData = function () {
        return this.ajaxApi.getBoardsData();
        // return this.boardDatasOb;
    };
    // export class ActivatedTab {
    //   slideId: string;
    //   tabsets: Tabset[];
    //  }
    // export class Tabset {
    //   id: string;
    //   tabChangeObj: {
    //     activeId: string;
    //     nextId: string;
    //   };
    // }
    // methods collectActivatedTabs(), getSlideActivatedTab() and setSlideActivatedTab() are needed for remembering
    // chosen tabs of every slide in order to show on slide chosen tabs after user returns to slide
    // without these methods we will allways see first tab being chosen in any case of changing slides
    BoardService.prototype.collectActivatedTabs = function (slideId, tabsetId, tabChangeObj) {
        // slide which is shown in carousel
        var activeSlide;
        if (this.activatedTabs) {
            activeSlide = this.activatedTabs.find(function (element) { return element.slideId === slideId; });
        }
        if (activeSlide) {
            var tabsetIndex = activeSlide.tabsets.findIndex(function (element) { return element.id === tabsetId; });
            if (tabsetIndex !== -1) {
                activeSlide.tabsets[tabsetIndex].tabChangeObj = tabChangeObj;
            }
            else {
                var tabset = {
                    id: tabsetId,
                    tabChangeObj: tabChangeObj
                };
                activeSlide.tabsets.push(tabset);
            }
        }
        else {
            var tabset = {
                id: tabsetId,
                tabChangeObj: tabChangeObj
            };
            var tabsetsArray = [tabset];
            this.activatedTabs.push({
                slideId: slideId,
                tabsets: tabsetsArray
            });
        }
    };
    BoardService.prototype.getSlideActivatedTab = function (tabsetId) {
        var _this = this;
        var activeSlide = this.activatedTabs.find(function (element) { return element.slideId === _this.activatedSlideId; });
        if (!activeSlide) {
            return this.activatedTabs[0].tabsets[0].tabChangeObj.nextId;
        }
        var currentTabset = activeSlide.tabsets.find(function (element) { return element.id === tabsetId; });
        var activeTabId = currentTabset && currentTabset.tabChangeObj.nextId;
        return activeTabId ? activeTabId : this.activatedTabs[0].tabsets[0].tabChangeObj.nextId;
    };
    BoardService.prototype.setIdActivatedSlide = function (slideId) {
        this.activatedSlideId = slideId;
    };
    return BoardService;
}());
exports.BoardService = BoardService;


/***/ }),

/***/ "./src/app/surf-home/home-default-data.ts":
/*!************************************************!*\
  !*** ./src/app/surf-home/home-default-data.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.boardData = [
    {
        id: 'jr-surfboards-the-donny-stoker-yellow-green',
        title: 'JR Surfboards The Donny Stoker Yellow/Green Rail Fade ^^^^^^',
        date: '2017-05-25T00:00:00.000Z',
        votingStarsRange: '60%',
        votingStarsNumber: 52,
        tabset1: {
            tabseId: 'jrSurfboardsTheDonnyStokerYellowGreenImagesDescription',
            description: 'Easy to ride, care free surfing craft that\'s fun for everyone, paddles well, super fast down the line and\n ' +
                ' great for any level of surfing depending on who rides it. The Donny Stoker,\n ' +
                ' a rework on design from stokesys first ever pro model.\n ' +
                ' A super easy to surf and fun board. The Donny Stoker is a board for total freesurfing expression.',
            features: 'The Donny\'s nose-to-tail single concave and tail shape combo makes it fast, \n ' +
                'responsive and made to suit point breaks, hollow beachies and reef passes from 1-6 foot. \n ' +
                'With a super-fast and lively rocker for silky smooth rail to rail transition which Dion is known for, \n ' +
                'The Donny is a beautifully balanced super high performance short board, with rocker, rails, \n ' +
                'concave and outline working simultaneously to create a responsive and drivey board with plenty of hold.',
            dimentions: [
                {
                    size: '5\'7\"',
                    width: '18 1/4\"',
                    thickness: '2 1/8\"',
                    volume: '22.40',
                },
                {
                    size: '5\'8\"',
                    width: '18 3/8\"',
                    thickness: '2 3/16\"',
                    volume: '23.50',
                },
                {
                    size: '5\'9\"',
                    width: '18 1/2\"',
                    thickness: '2 1/4\"',
                    volume: '24.60',
                },
                {
                    size: '5\'10\"',
                    width: '18 5/8\"',
                    thickness: '2 1/4\"',
                    volume: '25.30',
                },
                {
                    size: '5\'11\"',
                    width: '18 3/4\"',
                    thickness: '2 5/16\"',
                    volume: '26.40',
                },
                {
                    size: '6\'0\"',
                    width: '18 7/8\"',
                    thickness: '2 3/8\"',
                    volume: '27.50',
                },
                {
                    size: '6\'1\"',
                    width: '19\"',
                    thickness: '2 3/8\"',
                    volume: '28.20',
                },
                {
                    size: '6\'2\"',
                    width: '19 1/4\"',
                    thickness: '2 7/16\"',
                    volume: '29.60',
                },
                {
                    size: '6\'3\"',
                    width: '19 3/8\"',
                    thickness: '2 1/2\"',
                    volume: '31.00',
                },
                {
                    size: '6\'4\"',
                    width: '19 1/2\"',
                    thickness: '2 9/16\"',
                    volume: '32.40',
                },
                {
                    size: '6\'5\"',
                    width: '19 5/8\"',
                    thickness: '2 5/8\"',
                    volume: '34.00',
                }
            ],
        },
        price: '499.99',
        tabset2: {
            tabseId: 'jrSurfboardsTheDonnyStokerYellowGreenImages',
            images: [
                {
                    bigImage: 'assets/img/board.png',
                    smallImage: 'assets/img/board-small.png',
                    alt: 'Board',
                },
                {
                    bigImage: 'assets/img/board1.png',
                    smallImage: 'assets/img/board-bottom.png',
                    alt: 'Board Bottom',
                },
                {
                    bigImage: 'assets/img/board2.png',
                    smallImage: 'assets/img/board-front.png',
                    alt: 'Board Front',
                },
            ]
        },
    },
    {
        id: 'jr-surfboards-the-donny-stoker-yellow',
        title: 'JR Surfboards The Donny Stoker Yellow',
        date: '2017-05-25T00:00:00.000Z',
        votingStarsRange: '60%',
        votingStarsNumber: 52,
        tabset1: {
            tabseId: 'jrSurfboardsTheDonnyStokerYellowDescription',
            description: 'Easy to ride, care free surfing craft that\'s fun for everyone, paddles well, super fast down the line and\n ' +
                ' great for any level of surfing depending on who rides it. The Donny Stoker,\n ' +
                ' a rework on design from stokesys first ever pro model.\n ' +
                ' A super easy to surf and fun board. The Donny Stoker is a board for total freesurfing expression.',
            features: 'The Donny\'s nose-to-tail single concave and tail shape combo makes it fast, \n ' +
                'responsive and made to suit point breaks, hollow beachies and reef passes from 1-6 foot. \n ' +
                'With a super-fast and lively rocker for silky smooth rail to rail transition which Dion is known for, \n ' +
                'The Donny is a beautifully balanced super high performance short board, with rocker, rails, \n ' +
                'concave and outline working simultaneously to create a responsive and drivey board with plenty of hold.',
            dimentions: [
                {
                    size: '5\'7\"',
                    width: '18 1/4\"',
                    thickness: '2 1/8\"',
                    volume: '22.40',
                },
                {
                    size: '5\'8\"',
                    width: '18 3/8\"',
                    thickness: '2 3/16\"',
                    volume: '23.50',
                },
                {
                    size: '5\'9\"',
                    width: '18 1/2\"',
                    thickness: '2 1/4\"',
                    volume: '24.60',
                },
                {
                    size: '5\'10\"',
                    width: '18 5/8\"',
                    thickness: '2 1/4\"',
                    volume: '25.30',
                },
                {
                    size: '5\'11\"',
                    width: '18 3/4\"',
                    thickness: '2 5/16\"',
                    volume: '26.40',
                },
                {
                    size: '6\'0\"',
                    width: '18 7/8\"',
                    thickness: '2 3/8\"',
                    volume: '27.50',
                },
                {
                    size: '6\'1\"',
                    width: '19\"',
                    thickness: '2 3/8\"',
                    volume: '28.20',
                },
                {
                    size: '6\'2\"',
                    width: '19 1/4\"',
                    thickness: '2 7/16\"',
                    volume: '29.60',
                },
                {
                    size: '6\'3\"',
                    width: '19 3/8\"',
                    thickness: '2 1/2\"',
                    volume: '31.00',
                },
                {
                    size: '6\'4\"',
                    width: '19 1/2\"',
                    thickness: '2 9/16\"',
                    volume: '32.40',
                },
                {
                    size: '6\'5\"',
                    width: '19 5/8\"',
                    thickness: '2 5/8\"',
                    volume: '34.00',
                }
            ],
        },
        price: '499.99',
        tabset2: {
            tabseId: 'jrSurfboardsTheDonnyStokerYellowImages',
            images: [
                {
                    bigImage: 'assets/img/board.png',
                    smallImage: 'assets/img/board-small.png',
                    alt: 'Board',
                },
                {
                    bigImage: 'assets/img/board1.png',
                    smallImage: 'assets/img/board-bottom.png',
                    alt: 'Board Bottom',
                },
                {
                    bigImage: 'assets/img/board2.png',
                    smallImage: 'assets/img/board-front.png',
                    alt: 'Board Front',
                },
            ]
        },
    },
    {
        id: 'jr-surfboards-the-donny-stoker-dark',
        title: 'JR Surfboards The Donny Stoker Dark',
        date: '2017-05-25T00:00:00.000Z',
        votingStarsRange: '60%',
        votingStarsNumber: 52,
        tabset1: {
            tabseId: 'jrSurfboardsTheDonnyStokerSarkDescription',
            description: 'Easy to ride, care free surfing craft that\'s fun for everyone, paddles well, super fast down the line and\n ' +
                ' great for any level of surfing depending on who rides it. The Donny Stoker,\n ' +
                ' a rework on design from stokesys first ever pro model.\n ' +
                ' A super easy to surf and fun board. The Donny Stoker is a board for total freesurfing expression.',
            features: 'The Donny\'s nose-to-tail single concave and tail shape combo makes it fast, \n ' +
                'responsive and made to suit point breaks, hollow beachies and reef passes from 1-6 foot. \n ' +
                'With a super-fast and lively rocker for silky smooth rail to rail transition which Dion is known for, \n ' +
                'The Donny is a beautifully balanced super high performance short board, with rocker, rails, \n ' +
                'concave and outline working simultaneously to create a responsive and drivey board with plenty of hold.',
            dimentions: [
                {
                    size: '5\'7\"',
                    width: '18 1/4\"',
                    thickness: '2 1/8\"',
                    volume: '22.40',
                },
                {
                    size: '5\'8\"',
                    width: '18 3/8\"',
                    thickness: '2 3/16\"',
                    volume: '23.50',
                },
                {
                    size: '5\'9\"',
                    width: '18 1/2\"',
                    thickness: '2 1/4\"',
                    volume: '24.60',
                },
                {
                    size: '5\'10\"',
                    width: '18 5/8\"',
                    thickness: '2 1/4\"',
                    volume: '25.30',
                },
                {
                    size: '5\'11\"',
                    width: '18 3/4\"',
                    thickness: '2 5/16\"',
                    volume: '26.40',
                },
                {
                    size: '6\'0\"',
                    width: '18 7/8\"',
                    thickness: '2 3/8\"',
                    volume: '27.50',
                },
                {
                    size: '6\'1\"',
                    width: '19\"',
                    thickness: '2 3/8\"',
                    volume: '28.20',
                },
                {
                    size: '6\'2\"',
                    width: '19 1/4\"',
                    thickness: '2 7/16\"',
                    volume: '29.60',
                },
                {
                    size: '6\'3\"',
                    width: '19 3/8\"',
                    thickness: '2 1/2\"',
                    volume: '31.00',
                },
                {
                    size: '6\'4\"',
                    width: '19 1/2\"',
                    thickness: '2 9/16\"',
                    volume: '32.40',
                },
                {
                    size: '6\'5\"',
                    width: '19 5/8\"',
                    thickness: '2 5/8\"',
                    volume: '34.00',
                }
            ],
        },
        price: '499.99',
        tabset2: {
            tabseId: 'jrSurfboardsTheDonnyStokerSarkImages',
            images: [
                {
                    bigImage: 'assets/img/board.png',
                    smallImage: 'assets/img/board-small.png',
                    alt: 'Board',
                },
                {
                    bigImage: 'assets/img/board1.png',
                    smallImage: 'assets/img/board-bottom.png',
                    alt: 'Board Bottom',
                },
                {
                    bigImage: 'assets/img/board2.png',
                    smallImage: 'assets/img/board-front.png',
                    alt: 'Board Front',
                },
            ]
        },
    }
];
exports.teamData = [
    {
        id: 'taj-burrow-1',
        firstname: 'Taj',
        surname: 'Burrow',
        accountName: '@tajamos',
        accountLink: 'https://www.instagram.com/',
        address: 'Yallingup, Australia',
        srcLink: 'assets/img/team-1.png'
    },
    { id: 'malia-manuel-1',
        firstname: 'Malia',
        surname: 'Manuel',
        accountName: '@maliamanuel',
        accountLink: 'https://www.instagram.com/',
        address: 'Wailua, Hi',
        srcLink: 'assets/img/team-2.png'
    },
    { id: 'tan-walsh-1',
        firstname: 'Ian',
        surname: 'Walsh',
        accountName: '@ian.walsh',
        accountLink: 'https://www.instagram.com/',
        address: 'Maui, Hi',
        srcLink: 'assets/img/team-3.png'
    },
    { id: 'macy-callaghan-1',
        firstname: 'Macy',
        surname: 'Callaghan',
        accountName: '@macyjanecallaghan',
        accountLink: 'https://www.instagram.com/',
        address: 'San Clemente, CA',
        srcLink: 'assets/img/team-4.png'
    },
    { id: 'tajer-burrower-1',
        firstname: 'Tajer',
        surname: 'Burrower',
        accountName: '@tajbur',
        accountLink: 'https://www.instagram.com/',
        address: 'Yallingup, Australia',
        srcLink: 'assets/img/team-1.png'
    },
    { id: 'john-berger-1',
        firstname: 'John',
        surname: 'Berger',
        accountName: '@john.berger',
        accountLink: 'https://www.instagram.com/',
        address: 'Maui, NZ',
        srcLink: 'assets/img/team-2.png'
    },
];
exports.postsData = [
    {
        id: 'post-1',
        title: 'Post 1',
        // date: '',
        author: 'Author',
        body: "<p>Tell that to the proud auto workers at a <a href=\"blog/post-2\">Michigan</a> plant who, after they\n            found out it was closing, kept showing up every day and working as hard as ever,\n            because they knew there were people who counted on the brakes that they made.</p>",
        summary: '<p>Ellie Turner and Jobe Harris have taken out the 2016 British National Surf Championships</p>',
        category: 'City',
        imageSrc: '/assets/img/photo-1.png',
        imageDesc: 'girs',
    },
    {
        id: 'post-2',
        title: 'Post 2',
        author: 'Author',
        body: "<p>It was closing, kept showing up every day and working as hard as ever,\n          because they knew there were people who counted on the brakes that they made.\n          Michigan plant who, after they found out it was closing\n          <a href=\"blog/post-1\">Michigan</a> </p>\n          <p>This is YouTube video <a href=\"https://www.youtube.com/watch?v=hSu9BQEub4U\">Philosophical Studies</a>",
        summary: '<p>A large group of surfers invaded the coast of La Jolla Shores, in California, with a single goal in mind</p>',
        category: 'City',
        imageSrc: '/assets/img/photo-2.png',
        imageDesc: 'wave',
    },
    {
        id: 'post-3',
        title: 'Post 3',
        author: 'Author',
        body: "<p>It was closing, kept showing up every day and working as hard as ever,\n          because they knew there were people who counted on the brakes that they made.\n          Michigan plant who, after they found out it was closing\n          <a href=\"blog/post-1\">Michigan</a> </p>\n          <p>This is YouTube video <a href=\"https://www.youtube.com/watch?v=hSu9BQEub4U\">Philosophical Studies</a>",
        summary: '<p>Surfboards are constantly evolving, and there are multiple board designs for a broad range of environments</p>',
        category: 'City',
        imageSrc: '/assets/img/photo-3.png',
        imageDesc: 'beach',
    }
];


/***/ }),

/***/ "./src/app/surf-home/home.service.ts":
/*!*******************************************!*\
  !*** ./src/app/surf-home/home.service.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ajax_api_service_1 = __webpack_require__(/*! ../core/services/ajax-api.service */ "./src/app/core/services/ajax-api.service.ts");
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ../core/services/ajax-api.service */ "./src/app/core/services/ajax-api.service.ts");
var HomeService = /** @class */ (function () {
    function HomeService(ajaxApiService) {
        this.ajaxApiService = ajaxApiService;
    }
    HomeService.prototype.getBoardsData = function (quant) {
        return this.ajaxApiService.getBoardsData(quant);
    };
    HomeService.prototype.getTeamData = function (quant) {
        return this.ajaxApiService.getTeamData(quant);
    };
    HomeService.prototype.getPostsData = function (quant) {
        return this.ajaxApiService.getPosts(quant);
    };
    HomeService.ngInjectableDef = i0.defineInjectable({ factory: function HomeService_Factory() { return new HomeService(i0.inject(i1.AjaxApiService)); }, token: HomeService, providedIn: "root" });
    return HomeService;
}());
exports.HomeService = HomeService;


/***/ }),

/***/ "./src/app/surf-home/surf-home-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/surf-home/surf-home-routing.module.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var surf_home_component_1 = __webpack_require__(/*! ./surf-home.component */ "./src/app/surf-home/surf-home.component.ts");
var surfHomeRoutes = [
    { path: 'surfhome', redirectTo: '', pathMatch: 'full' },
    { path: '', component: surf_home_component_1.SurfHomeComponent },
];
var SurfHomeRoutingModule = /** @class */ (function () {
    function SurfHomeRoutingModule() {
    }
    return SurfHomeRoutingModule;
}());
exports.SurfHomeRoutingModule = SurfHomeRoutingModule;


/***/ }),

/***/ "./src/app/surf-home/surf-home.component.ngfactory.js":
/*!************************************************************!*\
  !*** ./src/app/surf-home/surf-home.component.ngfactory.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./surf-home.component.sass.shim.ngstyle */ "./src/app/surf-home/surf-home.component.sass.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ./surf-section-boards/surf-section-boards.component.ngfactory */ "./src/app/surf-home/surf-section-boards/surf-section-boards.component.ngfactory.js");
var i3 = __webpack_require__(/*! ./surf-section-boards/surf-section-boards.component */ "./src/app/surf-home/surf-section-boards/surf-section-boards.component.ts");
var i4 = __webpack_require__(/*! ./board.service */ "./src/app/surf-home/board.service.ts");
var i5 = __webpack_require__(/*! ../core/resize.service */ "./src/app/core/resize.service.ts");
var i6 = __webpack_require__(/*! ../core/window-ref.service */ "./src/app/core/window-ref.service.ts");
var i7 = __webpack_require__(/*! ./surf-section-team/surf-section-team.component.ngfactory */ "./src/app/surf-home/surf-section-team/surf-section-team.component.ngfactory.js");
var i8 = __webpack_require__(/*! ./surf-section-team/surf-section-team.component */ "./src/app/surf-home/surf-section-team/surf-section-team.component.ts");
var i9 = __webpack_require__(/*! ./surf-section-blog/surf-section-blog.component.ngfactory */ "./src/app/surf-home/surf-section-blog/surf-section-blog.component.ngfactory.js");
var i10 = __webpack_require__(/*! ./surf-section-blog/surf-section-blog.component */ "./src/app/surf-home/surf-section-blog/surf-section-blog.component.ts");
var i11 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i12 = __webpack_require__(/*! ./surf-section-about-us/surf-section-about-us.component.ngfactory */ "./src/app/surf-home/surf-section-about-us/surf-section-about-us.component.ngfactory.js");
var i13 = __webpack_require__(/*! ./surf-section-about-us/surf-section-about-us.component */ "./src/app/surf-home/surf-section-about-us/surf-section-about-us.component.ts");
var i14 = __webpack_require__(/*! ./surf-section-soc-nets/surf-section-soc-net.component.ngfactory */ "./src/app/surf-home/surf-section-soc-nets/surf-section-soc-net.component.ngfactory.js");
var i15 = __webpack_require__(/*! ./surf-section-soc-nets/surf-section-soc-net.component */ "./src/app/surf-home/surf-section-soc-nets/surf-section-soc-net.component.ts");
var i16 = __webpack_require__(/*! ngx-facebook/dist/esm/providers/facebook */ "ngx-facebook/dist/esm/providers/facebook");
var i17 = __webpack_require__(/*! ./surf-home.component */ "./src/app/surf-home/surf-home.component.ts");
var i18 = __webpack_require__(/*! ./home.service */ "./src/app/surf-home/home.service.ts");
var styles_SurfHomeComponent = [i0.styles];
var RenderType_SurfHomeComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_SurfHomeComponent, data: { "animation": [{ type: 7, name: "CollapseInOut", definitions: [{ type: 0, name: "in", styles: { type: 6, styles: { height: 0 }, offset: null }, options: undefined }, { type: 1, expr: "void => *", animation: [{ type: 6, styles: { height: "*" }, offset: null }, { type: 4, styles: null, timings: 350 }], options: null }, { type: 1, expr: "* => void", animation: [{ type: 4, styles: { type: 6, styles: { height: 0 }, offset: null }, timings: 350 }], options: null }], options: {} }] } });
exports.RenderType_SurfHomeComponent = RenderType_SurfHomeComponent;
function View_SurfHomeComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "surf-section-boards", [], [[24, "@CollapseInOut", 0]], null, null, i2.View_SurfSectionBoardsComponent_0, i2.RenderType_SurfSectionBoardsComponent)), i1.ɵdid(1, 245760, null, 0, i3.SurfSectionBoardsComponent, [i4.BoardService, i5.ResizeService, i6.WINDOW], { boardsData: [0, "boardsData"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.boardsData; _ck(_v, 1, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = "in"; _ck(_v, 0, 0, currVal_0); }); }
function View_SurfHomeComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "surf-section-team", [], [[24, "@CollapseInOut", 0]], null, null, i7.View_SurfSectionTeamComponent_0, i7.RenderType_SurfSectionTeamComponent)), i1.ɵdid(1, 245760, null, 0, i8.SurfSectionTeamComponent, [], { teamData: [0, "teamData"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.teamData; _ck(_v, 1, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = "in"; _ck(_v, 0, 0, currVal_0); }); }
function View_SurfHomeComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "surf-section-blog", [], [[24, "@CollapseInOut", 0]], null, null, i9.View_SurfSectionBlogComponent_0, i9.RenderType_SurfSectionBlogComponent)), i1.ɵdid(1, 245760, null, 0, i10.SurfSectionBlogComponent, [], { postData: [0, "postData"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.postData; _ck(_v, 1, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = "in"; _ck(_v, 0, 0, currVal_0); }); }
function View_SurfHomeComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 16, "main", [["class", "home-page common-page"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 0, "div", [["class", "bg-page"], ["style", "background-image: url(assets/img/surfing.png)"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 4, "div", [["class", "top-panel-header-description"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Ride every wave as if it's your last"])), (_l()(), i1.ɵeld(5, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["We love the motion of the ocean"])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_SurfHomeComponent_1)), i1.ɵdid(8, 16384, null, 0, i11.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(9, 0, null, null, 1, "surf-section-about-us", [], null, null, null, i12.View_SurfSectionAboutUsComponent_0, i12.RenderType_SurfSectionAboutUsComponent)), i1.ɵdid(10, 114688, null, 0, i13.SurfSectionAboutUsComponent, [], null, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_SurfHomeComponent_2)), i1.ɵdid(12, 16384, null, 0, i11.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_SurfHomeComponent_3)), i1.ɵdid(14, 16384, null, 0, i11.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(15, 0, null, null, 1, "surf-section-soc-net", [], null, null, null, i14.View_SurfSectionSocNetComponent_0, i14.RenderType_SurfSectionSocNetComponent)), i1.ɵdid(16, 114688, null, 0, i15.SurfSectionSocNetComponent, [i16.FacebookService], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.boardsData; _ck(_v, 8, 0, currVal_0); _ck(_v, 10, 0); var currVal_1 = _co.teamData; _ck(_v, 12, 0, currVal_1); var currVal_2 = _co.postData; _ck(_v, 14, 0, currVal_2); _ck(_v, 16, 0); }, null); }
exports.View_SurfHomeComponent_0 = View_SurfHomeComponent_0;
function View_SurfHomeComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "surf-home", [], null, null, null, View_SurfHomeComponent_0, RenderType_SurfHomeComponent)), i1.ɵdid(1, 245760, null, 0, i17.SurfHomeComponent, [i5.ResizeService, i6.WINDOW, i18.HomeService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_SurfHomeComponent_Host_0 = View_SurfHomeComponent_Host_0;
var SurfHomeComponentNgFactory = i1.ɵccf("surf-home", i17.SurfHomeComponent, View_SurfHomeComponent_Host_0, {}, {}, []);
exports.SurfHomeComponentNgFactory = SurfHomeComponentNgFactory;


/***/ }),

/***/ "./src/app/surf-home/surf-home.component.sass.shim.ngstyle.js":
/*!********************************************************************!*\
  !*** ./src/app/surf-home/surf-home.component.sass.shim.ngstyle.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".home-page[_ngcontent-%COMP%] {\n  position: relative;\n  background-position: center 0;\n  background-repeat: no-repeat; }\n  .home-page[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    z-index: 2; }\n  .top-panel-header-description[_ngcontent-%COMP%] {\n  z-index: 2;\n  position: relative;\n  padding-bottom: 145px;\n  font-family: \"PlayfairDisplayItalic\", sans-serif;\n  text-align: center; }\n  .top-panel-header-description[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-bottom: 5px;\n    font-size: 3.125em;\n    font-weight: 400;\n    line-height: 1.05; }\n  .top-panel-header-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n    color: #fff; }\n  \n  @media only screen and (max-width: 992px) {\n  .top-panel-header-description[_ngcontent-%COMP%] {\n    padding-bottom: 90px; }\n    .top-panel-header-description[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n      font-size: 2.5em; } }\n  \n  @media only screen and (max-width: 767px) {\n  .top-panel-header-description[_ngcontent-%COMP%] {\n    padding-bottom: 50px; }\n    .top-panel-header-description[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n      font-size: 1.875em;\n      line-height: 1; }\n    .top-panel-header-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n      font-size: 1em; }\n  \n  .animated[_ngcontent-%COMP%] {\n    \n    transition-property: none !important;\n    \n    -webkit-transform: none !important;\n    transform: none !important;\n    \n    -webkit-animation: none !important;\n    animation: none !important; } }\n  \n  @media only screen and (max-width: 480px) {\n  .top-panel-header-description[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    padding: 0 10px;\n    margin-top: 20px; } }"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/surf-home/surf-home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/surf-home/surf-home.component.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var resize_service_1 = __webpack_require__(/*! ../core/resize.service */ "./src/app/core/resize.service.ts");
var home_service_1 = __webpack_require__(/*! ./home.service */ "./src/app/surf-home/home.service.ts");
var SurfHomeComponent = /** @class */ (function () {
    function SurfHomeComponent(resizeService, winRef, homeService) {
        this.resizeService = resizeService;
        this.winRef = winRef;
        this.homeService = homeService;
    }
    SurfHomeComponent.prototype.ngOnInit = function () {
        this.getBoardsData();
        this.getTeamData();
        this.getPosts(3);
    };
    SurfHomeComponent.prototype.ngOnDestroy = function () {
        this._fetchBoardDataSubscription.unsubscribe();
        this._fetchTeamDataSubscription.unsubscribe();
        this._fetchPostsSubscription.unsubscribe();
    };
    SurfHomeComponent.prototype.getBoardsData = function (quant) {
        var _this = this;
        this._fetchBoardDataSubscription = this.homeService.getBoardsData(quant).subscribe(function (data) { return _this.boardsData = data; });
    };
    SurfHomeComponent.prototype.getTeamData = function (quant) {
        var _this = this;
        this._fetchTeamDataSubscription = this.homeService.getTeamData(quant).subscribe(function (data) { return _this.teamData = data; });
    };
    SurfHomeComponent.prototype.getPosts = function (quant) {
        var _this = this;
        this._fetchPostsSubscription = this.homeService.getPostsData(quant).subscribe(function (data) { return _this.postData = data; });
    };
    return SurfHomeComponent;
}());
exports.SurfHomeComponent = SurfHomeComponent;


/***/ }),

/***/ "./src/app/surf-home/surf-home.module.ts":
/*!***********************************************!*\
  !*** ./src/app/surf-home/surf-home.module.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SurfHomeModule = /** @class */ (function () {
    function SurfHomeModule() {
    }
    return SurfHomeModule;
}());
exports.SurfHomeModule = SurfHomeModule;


/***/ }),

/***/ "./src/app/surf-home/surf-section-about-us/surf-section-about-us.component.ngfactory.js":
/*!**********************************************************************************************!*\
  !*** ./src/app/surf-home/surf-section-about-us/surf-section-about-us.component.ngfactory.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./surf-section-about-us.component.sass.shim.ngstyle */ "./src/app/surf-home/surf-section-about-us/surf-section-about-us.component.sass.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! ./surf-section-about-us.component */ "./src/app/surf-home/surf-section-about-us/surf-section-about-us.component.ts");
var styles_SurfSectionAboutUsComponent = [i0.styles];
var RenderType_SurfSectionAboutUsComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_SurfSectionAboutUsComponent, data: {} });
exports.RenderType_SurfSectionAboutUsComponent = RenderType_SurfSectionAboutUsComponent;
function View_SurfSectionAboutUsComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 22, "section", [["class", "section-about-us"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 3, "header", [], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["About us"])), (_l()(), i1.ɵeld(4, 0, null, null, 0, "div", [["class", "section-bg"], ["style", "background-image: url(../../../assets/img/surfing-man.png)"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 17, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 16, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 11, "div", [["class", "col-md-6 col-lg-4 offset-lg-1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 10, "article", [["class", "about-us-description"]], null, null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 1, "h3", [["class", "h3-crosshair"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["We are Surfers co."])), (_l()(), i1.ɵeld(11, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), i1.ɵeld(12, 0, null, null, 1, "i", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde nihil laudantium minus iusto aspernatur iste porro, voluptatum ad explicabo aliquam soluta provident dolor ea eaque, sunt ipsum voluptatem fuga cum!"])), (_l()(), i1.ɵeld(14, 0, null, null, 4, "p", [], null, null, null, null, null)), (_l()(), i1.ɵeld(15, 0, null, null, 3, "a", [["class", "classic-a"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 16).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(16, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(17, 1), (_l()(), i1.ɵted(-1, null, ["Read more"])), (_l()(), i1.ɵeld(19, 0, null, null, 3, "div", [["class", "col-md-6 col-lg-6 offset-lg-1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(20, 0, null, null, 2, "div", [["class", "about-us-video-wrapper"]], null, null, null, null, null)), (_l()(), i1.ɵeld(21, 0, null, null, 1, "img", [["alt", "About us"]], [[8, "src", 4]], null, null, null, null)), i1.ɵpad(22, 1)], function (_ck, _v) { var currVal_2 = _ck(_v, 17, 0, "/about-us-page"); _ck(_v, 16, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 16).target; var currVal_1 = i1.ɵnov(_v, 16).href; _ck(_v, 15, 0, currVal_0, currVal_1); var currVal_3 = _ck(_v, 22, 0, "assets/img/surfing-man-2.png"); _ck(_v, 21, 0, currVal_3); }); }
exports.View_SurfSectionAboutUsComponent_0 = View_SurfSectionAboutUsComponent_0;
function View_SurfSectionAboutUsComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "surf-section-about-us", [], null, null, null, View_SurfSectionAboutUsComponent_0, RenderType_SurfSectionAboutUsComponent)), i1.ɵdid(1, 114688, null, 0, i4.SurfSectionAboutUsComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_SurfSectionAboutUsComponent_Host_0 = View_SurfSectionAboutUsComponent_Host_0;
var SurfSectionAboutUsComponentNgFactory = i1.ɵccf("surf-section-about-us", i4.SurfSectionAboutUsComponent, View_SurfSectionAboutUsComponent_Host_0, {}, {}, []);
exports.SurfSectionAboutUsComponentNgFactory = SurfSectionAboutUsComponentNgFactory;


/***/ }),

/***/ "./src/app/surf-home/surf-section-about-us/surf-section-about-us.component.sass.shim.ngstyle.js":
/*!******************************************************************************************************!*\
  !*** ./src/app/surf-home/surf-section-about-us/surf-section-about-us.component.sass.shim.ngstyle.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".section-about-us[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n  padding: 410px 0 100px; }\n  .section-about-us[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0; }\n  .section-about-us[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n      margin-bottom: 0; }\n  .section-about-us[_ngcontent-%COMP%]   .section-bg[_ngcontent-%COMP%] {\n    position: relative;\n    min-height: 640px;\n    background-position: center 0; }\n  .section-about-us[_ngcontent-%COMP%]   .section-bg[_ngcontent-%COMP%]::before {\n      content: '';\n      position: absolute;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      top: 0;\n      background-image: linear-gradient(to top, rgba(0, 0, 0, 0.25) 0%, transparent 100%, transparent 100%); }\n  .about-us-description[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 100px 0 50px; }\n  .about-us-description[_ngcontent-%COMP%]::before {\n    content: '';\n    z-index: 0;\n    position: absolute;\n    left: -1000px;\n    right: -25%;\n    top: 0;\n    bottom: 0;\n    background-color: #fff; }\n  .about-us-description[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    z-index: 5;\n    position: relative; }\n  .about-us-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-child) {\n    color: #000;\n    font-family: \"PlayfairDisplayItalic\", sans-serif;\n    font-size: 1.375em;\n    line-height: 38 / 22; }\n  .about-us-video-wrapper[_ngcontent-%COMP%] {\n  margin-top: 265px; }\n  .about-us-video-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%; }\n  @media only screen and (max-width: 1200px) {\n  .section-about-us[_ngcontent-%COMP%] {\n    padding: 310px 0 100px; } }\n  \n  @media only screen and (max-width: 992px) {\n  .section-about-us[_ngcontent-%COMP%] {\n    padding: 250px 0 50px; }\n    .section-about-us[_ngcontent-%COMP%]   .section-bg[_ngcontent-%COMP%] {\n      min-height: 440px; }\n  .about-us-description[_ngcontent-%COMP%] {\n    padding: 30px 0; }\n    .about-us-description[_ngcontent-%COMP%]::before {\n      right: 0; }\n  .about-us-video-wrapper[_ngcontent-%COMP%] {\n    margin-top: 200px; } }\n  \n  @media only screen and (max-width: 767px) {\n  .section-about-us[_ngcontent-%COMP%] {\n    padding: 50px 0 30px; }\n    .section-about-us[_ngcontent-%COMP%]   .section-bg[_ngcontent-%COMP%] {\n      background-image: none !important; }\n      .section-about-us[_ngcontent-%COMP%]   .section-bg[_ngcontent-%COMP%]:before {\n        background: transparent; }\n  .about-us-description[_ngcontent-%COMP%] {\n    position: relative; }\n    .about-us-description[_ngcontent-%COMP%]:after {\n      content: '';\n      position: absolute;\n      left: -140px;\n      right: -140px;\n      top: 0;\n      bottom: 0;\n      background-color: red;\n      background-image: url('surfing-man.png');\n      background-position: left center; }\n    .about-us-description[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .about-us-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-child) {\n      color: #fff; }\n    .about-us-description[_ngcontent-%COMP%]::before {\n      opacity: 0; }\n  .about-us-video-wrapper[_ngcontent-%COMP%] {\n    margin-top: 20px; }\n  \n  .animated[_ngcontent-%COMP%] {\n    \n    transition-property: none !important;\n    \n    -webkit-transform: none !important;\n    transform: none !important;\n    \n    -webkit-animation: none !important;\n    animation: none !important; } }\n  @media only screen and (max-width: 480px) {\n  .section-about-us[_ngcontent-%COMP%] {\n    padding: 35px 0 30px; }\n    .section-about-us[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n      margin-bottom: 10px; }\n  .about-us-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-child) {\n    font-size: 1.125em;\n    text-align: center; } }\n  @media only screen and (min-width: 1600px) {\n  .section-about-us[_ngcontent-%COMP%]   .section-bg[_ngcontent-%COMP%] {\n    background-size: 100%; } }"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/surf-home/surf-section-about-us/surf-section-about-us.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/surf-home/surf-section-about-us/surf-section-about-us.component.ts ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var SurfSectionAboutUsComponent = /** @class */ (function () {
    function SurfSectionAboutUsComponent() {
    }
    SurfSectionAboutUsComponent.prototype.ngOnInit = function () {
    };
    return SurfSectionAboutUsComponent;
}());
exports.SurfSectionAboutUsComponent = SurfSectionAboutUsComponent;


/***/ }),

/***/ "./src/app/surf-home/surf-section-blog/surf-section-blog.component.ngfactory.js":
/*!**************************************************************************************!*\
  !*** ./src/app/surf-home/surf-section-blog/surf-section-blog.component.ngfactory.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./surf-section-blog.component.sass.shim.ngstyle */ "./src/app/surf-home/surf-section-blog/surf-section-blog.component.sass.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! ./surf-section-blog.component */ "./src/app/surf-home/surf-section-blog/surf-section-blog.component.ts");
var styles_SurfSectionBlogComponent = [i0.styles];
var RenderType_SurfSectionBlogComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_SurfSectionBlogComponent, data: {} });
exports.RenderType_SurfSectionBlogComponent = RenderType_SurfSectionBlogComponent;
function View_SurfSectionBlogComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 8, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 7, "div", [["class", "card custom-card rounded-0 border-0"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 2, "a", [["class", "covering-a"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(3, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(4, 2), (_l()(), i1.ɵeld(5, 0, null, null, 1, "img", [], [[8, "src", 4], [8, "alt", 0]], null, null, null, null)), i1.ɵpad(6, 1), (_l()(), i1.ɵeld(7, 0, null, null, 1, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 0, "div", [["class", "card-text"]], [[8, "innerHTML", 1]], null, null, null, null))], function (_ck, _v) { var currVal_2 = _ck(_v, 4, 0, "/blog", _v.context.$implicit.id); _ck(_v, 3, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 3).target; var currVal_1 = i1.ɵnov(_v, 3).href; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_3 = _ck(_v, 6, 0, _v.context.$implicit.imageSrc); var currVal_4 = _v.context.$implicit.imageDesc; _ck(_v, 5, 0, currVal_3, currVal_4); var currVal_5 = _v.context.$implicit.summary; _ck(_v, 8, 0, currVal_5); }); }
function View_SurfSectionBlogComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 16, "section", [["class", "section-blog"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 15, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 14, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 2, "div", [["class", "col-lg-12"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 1, "h3", [["class", "h3-crosshair"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Latest updates"])), (_l()(), i1.ɵeld(6, 0, null, null, 4, "div", [["class", "col-lg-10 offset-lg-1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 3, "div", [["class", "blog-items-wrapper"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 2, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_SurfSectionBlogComponent_1)), i1.ɵdid(10, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(11, 0, null, null, 5, "div", [["class", "col-lg-12"]], null, null, null, null, null)), (_l()(), i1.ɵeld(12, 0, null, null, 4, "p", [["class", "text-center mt-md-5 "]], null, null, null, null, null)), (_l()(), i1.ɵeld(13, 0, null, null, 3, "a", [["class", "btn btn-main"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 14).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(14, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(15, 1), (_l()(), i1.ɵted(-1, null, ["View all posts"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.postData; _ck(_v, 10, 0, currVal_0); var currVal_3 = _ck(_v, 15, 0, "/blog"); _ck(_v, 14, 0, currVal_3); }, function (_ck, _v) { var currVal_1 = i1.ɵnov(_v, 14).target; var currVal_2 = i1.ɵnov(_v, 14).href; _ck(_v, 13, 0, currVal_1, currVal_2); }); }
exports.View_SurfSectionBlogComponent_0 = View_SurfSectionBlogComponent_0;
function View_SurfSectionBlogComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "surf-section-blog", [], null, null, null, View_SurfSectionBlogComponent_0, RenderType_SurfSectionBlogComponent)), i1.ɵdid(1, 245760, null, 0, i4.SurfSectionBlogComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_SurfSectionBlogComponent_Host_0 = View_SurfSectionBlogComponent_Host_0;
var SurfSectionBlogComponentNgFactory = i1.ɵccf("surf-section-blog", i4.SurfSectionBlogComponent, View_SurfSectionBlogComponent_Host_0, { postData: "postData" }, {}, []);
exports.SurfSectionBlogComponentNgFactory = SurfSectionBlogComponentNgFactory;


/***/ }),

/***/ "./src/app/surf-home/surf-section-blog/surf-section-blog.component.sass.shim.ngstyle.js":
/*!**********************************************************************************************!*\
  !*** ./src/app/surf-home/surf-section-blog/surf-section-blog.component.sass.shim.ngstyle.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".blog-items-wrapper[_ngcontent-%COMP%] {\n  padding: 0 65px 10px; }\n\n.section-blog[_ngcontent-%COMP%] {\n  padding-bottom: 160px; }\n\n.section-blog[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin-bottom: 45px;\n    line-height: 2; }\n\n.section-blog[_ngcontent-%COMP%]   .custom-card[_ngcontent-%COMP%] {\n    max-width: 270px;\n    height: 100%;\n    margin: 0 auto;\n    background-color: #fff;\n    box-shadow: 0 2px 14px rgba(0, 0, 0, 0.1);\n    transition: all 0.3s; }\n\n.section-blog[_ngcontent-%COMP%]   .custom-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n      padding: 22px;\n      transition: all 0.3s; }\n\n.section-blog[_ngcontent-%COMP%]   .custom-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n        margin: 3px; }\n\n.section-blog[_ngcontent-%COMP%]   .custom-card[_ngcontent-%COMP%]:hover {\n      box-shadow: 0 2px 30px rgba(0, 0, 0, 0.2); }\n\n.section-blog[_ngcontent-%COMP%]   .custom-card[_ngcontent-%COMP%]:hover   .card-body[_ngcontent-%COMP%] {\n        color: #02f; }\n\n\n\n@media only screen and (max-width: 1200px) {\n  .blog-items-wrapper[_ngcontent-%COMP%] {\n    padding: 0 0 20px; }\n  .section-blog[_ngcontent-%COMP%] {\n    padding-bottom: 100px; }\n    .section-blog[_ngcontent-%COMP%]   .custom-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n      padding: 22px 10px; } }\n\n\n\n@media only screen and (max-width: 991px) {\n  .section-blog[_ngcontent-%COMP%] {\n    padding-bottom: 80px; }\n    .section-blog[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n      margin-bottom: 35px; }\n  .blog-items-wrapper[_ngcontent-%COMP%] {\n    padding: 0; } }\n\n\n\n@media only screen and (max-width: 767px) {\n  .section-blog[_ngcontent-%COMP%] {\n    padding-bottom: 60px; }\n    .section-blog[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n      margin-bottom: 20px; }\n    .section-blog[_ngcontent-%COMP%]   .custom-card[_ngcontent-%COMP%] {\n      height: auto;\n      margin-bottom: 50px;\n      box-shadow: 0 2px 30px rgba(0, 0, 0, 0.2); }\n      .section-blog[_ngcontent-%COMP%]   .custom-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n        padding: 15px 10px; }\n  \n  .animated[_ngcontent-%COMP%] {\n    \n    transition-property: none !important;\n    \n    -webkit-transform: none !important;\n    transform: none !important;\n    \n    -webkit-animation: none !important;\n    animation: none !important; } }\n\n\n\n@media only screen and (max-width: 480px) {\n  .section-blog[_ngcontent-%COMP%] {\n    padding-bottom: 40px; }\n    .section-blog[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n      margin-bottom: 15px; } }"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/surf-home/surf-section-blog/surf-section-blog.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/surf-home/surf-section-blog/surf-section-blog.component.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var SurfSectionBlogComponent = /** @class */ (function () {
    function SurfSectionBlogComponent() {
    }
    SurfSectionBlogComponent.prototype.ngOnInit = function () { };
    SurfSectionBlogComponent.prototype.ngOnDestroy = function () {
        // this.dataFetchSubscription.unsubscribe();
    };
    return SurfSectionBlogComponent;
}());
exports.SurfSectionBlogComponent = SurfSectionBlogComponent;


/***/ }),

/***/ "./src/app/surf-home/surf-section-boards/ngb-tabset-expanded.component.ngfactory.js":
/*!******************************************************************************************!*\
  !*** ./src/app/surf-home/surf-section-boards/ngb-tabset-expanded.component.ngfactory.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i2 = __webpack_require__(/*! ./ngb-tabset-expanded.component */ "./src/app/surf-home/surf-section-boards/ngb-tabset-expanded.component.ts");
var i3 = __webpack_require__(/*! ../board.service */ "./src/app/surf-home/board.service.ts");
var i4 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/tabset/tabset-config */ "@ng-bootstrap/ng-bootstrap/tabset/tabset-config");
var styles_NgbTabsetExpandedComponent = [];
var RenderType_NgbTabsetExpandedComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_NgbTabsetExpandedComponent, data: {} });
exports.RenderType_NgbTabsetExpandedComponent = RenderType_NgbTabsetExpandedComponent;
function View_NgbTabsetExpandedComponent_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_NgbTabsetExpandedComponent_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 3, "a", [["class", "nav-link"], ["href", ""], ["role", "tab"]], [[8, "id", 0], [2, "active", null], [2, "disabled", null], [1, "tabindex", 0], [1, "aria-controls", 0], [1, "aria-expanded", 0], [1, "aria-disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (!!_co.select(_v.context.$implicit.id) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(2, null, [" ", ""])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbTabsetExpandedComponent_2)), i0.ɵdid(4, 540672, null, 0, i1.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutlet: [0, "ngTemplateOutlet"] }, null)], function (_ck, _v) { var currVal_8 = ((_v.context.$implicit.titleTpl == null) ? null : _v.context.$implicit.titleTpl.templateRef); _ck(_v, 4, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _v.context.$implicit.id; var currVal_1 = (_v.context.$implicit.id === _co.activeId); var currVal_2 = _v.context.$implicit.disabled; var currVal_3 = (_v.context.$implicit.disabled ? "-1" : undefined); var currVal_4 = ((!_co.destroyOnHide || (_v.context.$implicit.id === _co.activeId)) ? (_v.context.$implicit.id + "-panel") : null); var currVal_5 = (_v.context.$implicit.id === _co.activeId); var currVal_6 = _v.context.$implicit.disabled; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_7 = _v.context.$implicit.title; _ck(_v, 2, 0, currVal_7); }); }
function View_NgbTabsetExpandedComponent_5(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_NgbTabsetExpandedComponent_4(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "div", [["role", "tabpanel"]], [[8, "className", 0], [1, "aria-labelledby", 0], [8, "id", 0], [1, "aria-expanded", 0]], null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbTabsetExpandedComponent_5)), i0.ɵdid(2, 540672, null, 0, i1.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutlet: [0, "ngTemplateOutlet"] }, null)], function (_ck, _v) { var currVal_4 = _v.parent.context.$implicit.contentTpl.templateRef; _ck(_v, 2, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i0.ɵinlineInterpolate(1, "tab-pane ", ((_v.parent.context.$implicit.id === _co.activeId) ? "active" : null), ""); var currVal_1 = _v.parent.context.$implicit.id; var currVal_2 = i0.ɵinlineInterpolate(1, "", _v.parent.context.$implicit.id, "-panel"); var currVal_3 = (_v.parent.context.$implicit.id === _co.activeId); _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3); }); }
function View_NgbTabsetExpandedComponent_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbTabsetExpandedComponent_4)), i0.ɵdid(1, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (!_co.destroyOnHide || (_v.context.$implicit.id === _co.activeId)); _ck(_v, 1, 0, currVal_0); }, null); }
function View_NgbTabsetExpandedComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "ul", [["role", "tablist"]], [[8, "className", 0]], null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbTabsetExpandedComponent_1)), i0.ɵdid(2, 802816, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵeld(3, 0, null, null, 2, "div", [["class", "tab-content"]], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbTabsetExpandedComponent_3)), i0.ɵdid(5, 802816, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.tabs; _ck(_v, 2, 0, currVal_1); var currVal_2 = _co.tabs; _ck(_v, 5, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (("nav nav-" + _co.type) + ((_co.orientation == "horizontal") ? (" " + _co.justifyClass) : " flex-column")); _ck(_v, 0, 0, currVal_0); }); }
exports.View_NgbTabsetExpandedComponent_0 = View_NgbTabsetExpandedComponent_0;
function View_NgbTabsetExpandedComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "ngb-tabset-expanded", [], null, null, null, View_NgbTabsetExpandedComponent_0, RenderType_NgbTabsetExpandedComponent)), i0.ɵdid(1, 3260416, null, 1, i2.NgbTabsetExpandedComponent, [i3.BoardService, i4.NgbTabsetConfig], null, null), i0.ɵqud(603979776, 1, { tabs: 1 })], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_NgbTabsetExpandedComponent_Host_0 = View_NgbTabsetExpandedComponent_Host_0;
var NgbTabsetExpandedComponentNgFactory = i0.ɵccf("ngb-tabset-expanded", i2.NgbTabsetExpandedComponent, View_NgbTabsetExpandedComponent_Host_0, { activeId: "activeId", destroyOnHide: "destroyOnHide", justify: "justify", orientation: "orientation", type: "type", id: "id" }, { tabChange: "tabChange" }, []);
exports.NgbTabsetExpandedComponentNgFactory = NgbTabsetExpandedComponentNgFactory;


/***/ }),

/***/ "./src/app/surf-home/surf-section-boards/ngb-tabset-expanded.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/surf-home/surf-section-boards/ngb-tabset-expanded.component.ts ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var tabset_config_1 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/tabset/tabset-config */ "@ng-bootstrap/ng-bootstrap/tabset/tabset-config");
var tabset_1 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/tabset/tabset */ "@ng-bootstrap/ng-bootstrap/tabset/tabset");
var board_service_1 = __webpack_require__(/*! ../board.service */ "./src/app/surf-home/board.service.ts");
var nextId = 0;
var NgbTabsetExpandedComponent = /** @class */ (function (_super) {
    __extends(NgbTabsetExpandedComponent, _super);
    function NgbTabsetExpandedComponent(boardService, config) {
        var _this = _super.call(this, config) || this;
        _this.boardService = boardService;
        return _this;
    }
    NgbTabsetExpandedComponent.prototype.ngOnInit = function () { };
    NgbTabsetExpandedComponent.prototype.ngAfterContentInit = function () {
        this.select(this.boardService.getSlideActivatedTab(this.id));
    };
    return NgbTabsetExpandedComponent;
}(tabset_1.NgbTabset));
exports.NgbTabsetExpandedComponent = NgbTabsetExpandedComponent;


/***/ }),

/***/ "./src/app/surf-home/surf-section-boards/ngb-tabset-grided.component.ngfactory.js":
/*!****************************************************************************************!*\
  !*** ./src/app/surf-home/surf-section-boards/ngb-tabset-grided.component.ngfactory.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i2 = __webpack_require__(/*! ./ngb-tabset-grided.component */ "./src/app/surf-home/surf-section-boards/ngb-tabset-grided.component.ts");
var i3 = __webpack_require__(/*! ../board.service */ "./src/app/surf-home/board.service.ts");
var i4 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/tabset/tabset-config */ "@ng-bootstrap/ng-bootstrap/tabset/tabset-config");
var styles_NgbTabsetGridedComponent = [];
var RenderType_NgbTabsetGridedComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_NgbTabsetGridedComponent, data: {} });
exports.RenderType_NgbTabsetGridedComponent = RenderType_NgbTabsetGridedComponent;
function View_NgbTabsetGridedComponent_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_NgbTabsetGridedComponent_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "div", [["role", "tabpanel"]], [[8, "className", 0], [1, "aria-labelledby", 0], [8, "id", 0], [1, "aria-expanded", 0]], null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbTabsetGridedComponent_3)), i0.ɵdid(2, 540672, null, 0, i1.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutlet: [0, "ngTemplateOutlet"] }, null)], function (_ck, _v) { var currVal_4 = _v.parent.context.$implicit.contentTpl.templateRef; _ck(_v, 2, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i0.ɵinlineInterpolate(1, "text-center tab-pane ", ((_v.parent.context.$implicit.id === _co.activeId) ? "active" : null), ""); var currVal_1 = _v.parent.context.$implicit.id; var currVal_2 = i0.ɵinlineInterpolate(1, "", _v.parent.context.$implicit.id, "-panel"); var currVal_3 = (_v.parent.context.$implicit.id === _co.activeId); _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3); }); }
function View_NgbTabsetGridedComponent_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbTabsetGridedComponent_2)), i0.ɵdid(1, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (!_co.destroyOnHide || (_v.context.$implicit.id === _co.activeId)); _ck(_v, 1, 0, currVal_0); }, null); }
function View_NgbTabsetGridedComponent_5(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_NgbTabsetGridedComponent_4(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 3, "a", [["class", "nav-link"], ["href", ""], ["role", "tab"]], [[8, "id", 0], [2, "active", null], [2, "disabled", null], [1, "tabindex", 0], [1, "aria-controls", 0], [1, "aria-expanded", 0], [1, "aria-disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (!!_co.select(_v.context.$implicit.id) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(2, null, [" ", ""])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbTabsetGridedComponent_5)), i0.ɵdid(4, 540672, null, 0, i1.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutlet: [0, "ngTemplateOutlet"] }, null)], function (_ck, _v) { var currVal_8 = ((_v.context.$implicit.titleTpl == null) ? null : _v.context.$implicit.titleTpl.templateRef); _ck(_v, 4, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _v.context.$implicit.id; var currVal_1 = (_v.context.$implicit.id === _co.activeId); var currVal_2 = _v.context.$implicit.disabled; var currVal_3 = (_v.context.$implicit.disabled ? "-1" : undefined); var currVal_4 = ((!_co.destroyOnHide || (_v.context.$implicit.id === _co.activeId)) ? (_v.context.$implicit.id + "-panel") : null); var currVal_5 = (_v.context.$implicit.id === _co.activeId); var currVal_6 = _v.context.$implicit.disabled; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_7 = _v.context.$implicit.title; _ck(_v, 2, 0, currVal_7); }); }
function View_NgbTabsetGridedComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 8, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 3, "div", [["class", "col-md-10"]], null, null, null, null, null)), (_l()(), i0.ɵeld(2, 0, null, null, 2, "div", [["class", "tab-content"]], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbTabsetGridedComponent_1)), i0.ɵdid(4, 802816, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵeld(5, 0, null, null, 3, "div", [["class", "col-md-2 d-flex align-items-center"]], null, null, null, null, null)), (_l()(), i0.ɵeld(6, 0, null, null, 2, "ul", [["role", "tablist"]], [[8, "className", 0]], null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbTabsetGridedComponent_4)), i0.ɵdid(8, 802816, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.tabs; _ck(_v, 4, 0, currVal_0); var currVal_2 = _co.tabs; _ck(_v, 8, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = (("nav nav-" + _co.type) + ((_co.orientation == "horizontal") ? (" " + _co.justifyClass) : " flex-column")); _ck(_v, 6, 0, currVal_1); }); }
exports.View_NgbTabsetGridedComponent_0 = View_NgbTabsetGridedComponent_0;
function View_NgbTabsetGridedComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "ngb-tabset-grided", [], null, null, null, View_NgbTabsetGridedComponent_0, RenderType_NgbTabsetGridedComponent)), i0.ɵdid(1, 3260416, null, 1, i2.NgbTabsetGridedComponent, [i3.BoardService, i4.NgbTabsetConfig], null, null), i0.ɵqud(603979776, 1, { tabs: 1 })], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_NgbTabsetGridedComponent_Host_0 = View_NgbTabsetGridedComponent_Host_0;
var NgbTabsetGridedComponentNgFactory = i0.ɵccf("ngb-tabset-grided", i2.NgbTabsetGridedComponent, View_NgbTabsetGridedComponent_Host_0, { activeId: "activeId", destroyOnHide: "destroyOnHide", justify: "justify", orientation: "orientation", type: "type", id: "id" }, { tabChange: "tabChange" }, []);
exports.NgbTabsetGridedComponentNgFactory = NgbTabsetGridedComponentNgFactory;


/***/ }),

/***/ "./src/app/surf-home/surf-section-boards/ngb-tabset-grided.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/surf-home/surf-section-boards/ngb-tabset-grided.component.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var tabset_config_1 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/tabset/tabset-config */ "@ng-bootstrap/ng-bootstrap/tabset/tabset-config");
var tabset_1 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/tabset/tabset */ "@ng-bootstrap/ng-bootstrap/tabset/tabset");
var board_service_1 = __webpack_require__(/*! ../board.service */ "./src/app/surf-home/board.service.ts");
var nextId = 0;
var NgbTabsetGridedComponent = /** @class */ (function (_super) {
    __extends(NgbTabsetGridedComponent, _super);
    function NgbTabsetGridedComponent(boardService, config) {
        var _this = _super.call(this, config) || this;
        _this.boardService = boardService;
        return _this;
    }
    NgbTabsetGridedComponent.prototype.ngOnInit = function () { };
    NgbTabsetGridedComponent.prototype.ngAfterContentInit = function () {
        this.select(this.boardService.getSlideActivatedTab(this.id));
    };
    return NgbTabsetGridedComponent;
}(tabset_1.NgbTabset));
exports.NgbTabsetGridedComponent = NgbTabsetGridedComponent;


/***/ }),

/***/ "./src/app/surf-home/surf-section-boards/surf-section-boards.component.ngfactory.js":
/*!******************************************************************************************!*\
  !*** ./src/app/surf-home/surf-section-boards/surf-section-boards.component.ngfactory.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./surf-section-boards.component.sass.shim.ngstyle */ "./src/app/surf-home/surf-section-boards/surf-section-boards.component.sass.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i3 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/tabset/tabset */ "@ng-bootstrap/ng-bootstrap/tabset/tabset");
var i4 = __webpack_require__(/*! ./ngb-tabset-expanded.component.ngfactory */ "./src/app/surf-home/surf-section-boards/ngb-tabset-expanded.component.ngfactory.js");
var i5 = __webpack_require__(/*! ./ngb-tabset-expanded.component */ "./src/app/surf-home/surf-section-boards/ngb-tabset-expanded.component.ts");
var i6 = __webpack_require__(/*! ../board.service */ "./src/app/surf-home/board.service.ts");
var i7 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/tabset/tabset-config */ "@ng-bootstrap/ng-bootstrap/tabset/tabset-config");
var i8 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i9 = __webpack_require__(/*! ./ngb-tabset-grided.component.ngfactory */ "./src/app/surf-home/surf-section-boards/ngb-tabset-grided.component.ngfactory.js");
var i10 = __webpack_require__(/*! ./ngb-tabset-grided.component */ "./src/app/surf-home/surf-section-boards/ngb-tabset-grided.component.ts");
var i11 = __webpack_require__(/*! ../../core/surf-carousel/surf-carousel.component */ "./src/app/core/surf-carousel/surf-carousel.component.ts");
var i12 = __webpack_require__(/*! ../../core/surf-carousel-2/surf-carousel-2.component */ "./src/app/core/surf-carousel-2/surf-carousel-2.component.ts");
var i13 = __webpack_require__(/*! ../../core/surf-carousel/surf-carousel.component.ngfactory */ "./src/app/core/surf-carousel/surf-carousel.component.ngfactory.js");
var i14 = __webpack_require__(/*! ./surf-section-boards.component */ "./src/app/surf-home/surf-section-boards/surf-section-boards.component.ts");
var i15 = __webpack_require__(/*! ../../core/resize.service */ "./src/app/core/resize.service.ts");
var i16 = __webpack_require__(/*! ../../core/window-ref.service */ "./src/app/core/window-ref.service.ts");
var styles_SurfSectionBoardsComponent = [i0.styles];
var RenderType_SurfSectionBoardsComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_SurfSectionBoardsComponent, data: {} });
exports.RenderType_SurfSectionBoardsComponent = RenderType_SurfSectionBoardsComponent;
function View_SurfSectionBoardsComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), i1.ɵted(1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.parent.context.$implicit.tabset1.description; _ck(_v, 1, 0, currVal_0); }); }
function View_SurfSectionBoardsComponent_4(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), i1.ɵted(1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.parent.context.$implicit.tabset1.features; _ck(_v, 1, 0, currVal_0); }); }
function View_SurfSectionBoardsComponent_6(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 8, "tr", [["style", "opacity: 1;"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), i1.ɵted(2, null, ["", ""])), (_l()(), i1.ɵeld(3, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), i1.ɵted(4, null, ["", ""])), (_l()(), i1.ɵeld(5, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), i1.ɵted(6, null, ["", ""])), (_l()(), i1.ɵeld(7, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), i1.ɵted(8, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.size; _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.$implicit.width; _ck(_v, 4, 0, currVal_1); var currVal_2 = _v.context.$implicit.thickness; _ck(_v, 6, 0, currVal_2); var currVal_3 = _v.context.$implicit.volume; _ck(_v, 8, 0, currVal_3); }); }
function View_SurfSectionBoardsComponent_5(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 12, "table", [["class", "table table-striped table-hover"], ["id", "surfboard-dimensions-table"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 11, "tbody", [], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 8, "tr", [["style", "opacity: 1;"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["size"])), (_l()(), i1.ɵeld(5, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["width"])), (_l()(), i1.ɵeld(7, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["thickness"])), (_l()(), i1.ɵeld(9, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["volume"])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_SurfSectionBoardsComponent_6)), i1.ɵdid(12, 802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var currVal_0 = _v.parent.parent.context.$implicit.tabset1.dimentions; _ck(_v, 12, 0, currVal_0); }, null); }
function View_SurfSectionBoardsComponent_8(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 0, "img", [], [[8, "src", 4], [8, "alt", 0]], null, null, null, null))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.smallImage; var currVal_1 = _v.parent.context.$implicit.alt; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_SurfSectionBoardsComponent_9(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 0, "img", [], [[8, "src", 4], [8, "alt", 0]], null, null, null, null))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.bigImage; var currVal_1 = _v.parent.context.$implicit.alt; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_SurfSectionBoardsComponent_7(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 8, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 7, "ngb-tab", [], null, null, null, null, null)), i1.ɵdid(2, 2113536, [[9, 4]], 2, i3.NgbTab, [], { id: [0, "id"] }, null), i1.ɵqud(603979776, 10, { titleTpls: 1 }), i1.ɵqud(603979776, 11, { contentTpls: 1 }), (_l()(), i1.ɵand(0, null, null, 1, null, View_SurfSectionBoardsComponent_8)), i1.ɵdid(6, 16384, [[10, 4]], 0, i3.NgbTabTitle, [i1.TemplateRef], null, null), (_l()(), i1.ɵand(0, null, null, 1, null, View_SurfSectionBoardsComponent_9)), i1.ɵdid(8, 16384, [[11, 4]], 0, i3.NgbTabContent, [i1.TemplateRef], null, null)], function (_ck, _v) { var currVal_0 = (_v.parent.parent.context.$implicit.tabset2.tabseId + _v.context.index); _ck(_v, 2, 0, currVal_0); }, null); }
function View_SurfSectionBoardsComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 54, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 46, "div", [["class", "col-lg-6 order-1 order-lg-2"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 45, "div", [["class", "board-description-wrapper "]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), i1.ɵted(4, null, ["", ""])), (_l()(), i1.ɵeld(5, 0, null, null, 8, "div", [["class", "voting-stars-wrapper d-flex align-items-center"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 2, "span", [["class", "list-inline voting-stars"]], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 0, "span", [["class", "voting-stars-chosen"]], [[4, "width", null]], null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 0, "span", [["class", "voting-stars-shell"]], null, null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(10, null, ["(", ")"])), (_l()(), i1.ɵeld(11, 0, null, null, 2, "time", [["class", "ml-auto"]], null, null, null, null, null)), (_l()(), i1.ɵted(12, null, ["", ""])), i1.ɵppd(13, 2), (_l()(), i1.ɵeld(14, 0, null, null, 28, "div", [["class", "board-description"]], null, null, null, null, null)), (_l()(), i1.ɵeld(15, 0, null, null, 20, "ngb-tabset-expanded", [], null, [[null, "tabChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("tabChange" === en)) {
        var pd_0 = (_co.collectActivatedTabs(_v.parent.context.$implicit.id, _v.parent.context.$implicit.tabset1.tabseId, $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i4.View_NgbTabsetExpandedComponent_0, i4.RenderType_NgbTabsetExpandedComponent)), i1.ɵdid(16, 3260416, null, 1, i5.NgbTabsetExpandedComponent, [i6.BoardService, i7.NgbTabsetConfig], { id: [0, "id"] }, { tabChange: "tabChange" }), i1.ɵqud(603979776, 2, { tabs: 1 }), (_l()(), i1.ɵeld(18, 0, null, null, 5, "ngb-tab", [["title", "Description"]], null, null, null, null, null)), i1.ɵdid(19, 2113536, [[2, 4]], 2, i3.NgbTab, [], { id: [0, "id"], title: [1, "title"] }, null), i1.ɵqud(603979776, 3, { titleTpls: 1 }), i1.ɵqud(603979776, 4, { contentTpls: 1 }), (_l()(), i1.ɵand(0, null, null, 1, null, View_SurfSectionBoardsComponent_3)), i1.ɵdid(23, 16384, [[4, 4]], 0, i3.NgbTabContent, [i1.TemplateRef], null, null), (_l()(), i1.ɵeld(24, 0, null, null, 5, "ngb-tab", [["title", "Features"]], null, null, null, null, null)), i1.ɵdid(25, 2113536, [[2, 4]], 2, i3.NgbTab, [], { id: [0, "id"], title: [1, "title"] }, null), i1.ɵqud(603979776, 5, { titleTpls: 1 }), i1.ɵqud(603979776, 6, { contentTpls: 1 }), (_l()(), i1.ɵand(0, null, null, 1, null, View_SurfSectionBoardsComponent_4)), i1.ɵdid(29, 16384, [[6, 4]], 0, i3.NgbTabContent, [i1.TemplateRef], null, null), (_l()(), i1.ɵeld(30, 0, null, null, 5, "ngb-tab", [["title", "Dimensions"]], null, null, null, null, null)), i1.ɵdid(31, 2113536, [[2, 4]], 2, i3.NgbTab, [], { id: [0, "id"], title: [1, "title"] }, null), i1.ɵqud(603979776, 7, { titleTpls: 1 }), i1.ɵqud(603979776, 8, { contentTpls: 1 }), (_l()(), i1.ɵand(0, null, null, 1, null, View_SurfSectionBoardsComponent_5)), i1.ɵdid(35, 16384, [[8, 4]], 0, i3.NgbTabContent, [i1.TemplateRef], null, null), (_l()(), i1.ɵeld(36, 0, null, null, 2, "strong", [["class", "price"]], null, null, null, null, null)), (_l()(), i1.ɵted(37, null, ["", ""])), i1.ɵppd(38, 2), (_l()(), i1.ɵeld(39, 0, null, null, 3, "a", [["class", "btn btn-main btn-small"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 40).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(40, 671744, null, 0, i8.RouterLinkWithHref, [i8.Router, i8.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(41, 2), (_l()(), i1.ɵted(-1, null, ["Buy now"])), (_l()(), i1.ɵeld(43, 0, null, null, 4, "p", [], null, null, null, null, null)), (_l()(), i1.ɵeld(44, 0, null, null, 3, "a", [["class", "classic-a"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 45).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(45, 671744, null, 0, i8.RouterLinkWithHref, [i8.Router, i8.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(46, 1), (_l()(), i1.ɵted(-1, null, ["View all boards"])), (_l()(), i1.ɵeld(48, 0, null, null, 6, "div", [["class", "col-lg-6 order-2 order-lg-1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(49, 0, null, null, 5, "div", [["class", "boards-images-wrapper"]], null, null, null, null, null)), (_l()(), i1.ɵeld(50, 0, null, null, 4, "ngb-tabset-grided", [], null, [[null, "tabChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("tabChange" === en)) {
        var pd_0 = (_co.collectActivatedTabs(_v.parent.context.$implicit.id, _v.parent.context.$implicit.tabset2.tabseId, $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i9.View_NgbTabsetGridedComponent_0, i9.RenderType_NgbTabsetGridedComponent)), i1.ɵdid(51, 3260416, null, 1, i10.NgbTabsetGridedComponent, [i6.BoardService, i7.NgbTabsetConfig], { justify: [0, "justify"], orientation: [1, "orientation"], id: [2, "id"] }, { tabChange: "tabChange" }), i1.ɵqud(603979776, 9, { tabs: 1 }), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_SurfSectionBoardsComponent_7)), i1.ɵdid(54, 802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_4 = _v.parent.context.$implicit.tabset1.tabseId; _ck(_v, 16, 0, currVal_4); var currVal_5 = (_v.parent.context.$implicit.tabset1.tabseId + 0); var currVal_6 = "Description"; _ck(_v, 19, 0, currVal_5, currVal_6); var currVal_7 = (_v.parent.context.$implicit.tabset1.tabseId + 1); var currVal_8 = "Features"; _ck(_v, 25, 0, currVal_7, currVal_8); var currVal_9 = (_v.parent.context.$implicit.tabset1.tabseId + 2); var currVal_10 = "Dimensions"; _ck(_v, 31, 0, currVal_9, currVal_10); var currVal_14 = _ck(_v, 41, 0, "/boards", _v.parent.context.$implicit.id); _ck(_v, 40, 0, currVal_14); var currVal_17 = _ck(_v, 46, 0, "/boards"); _ck(_v, 45, 0, currVal_17); var currVal_18 = _co.currentJustify; var currVal_19 = _co.currentOrientation; var currVal_20 = _v.parent.context.$implicit.tabset2.tabseId; _ck(_v, 51, 0, currVal_18, currVal_19, currVal_20); var currVal_21 = _v.parent.context.$implicit.tabset2.images; _ck(_v, 54, 0, currVal_21); }, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.title; _ck(_v, 4, 0, currVal_0); var currVal_1 = _v.parent.context.$implicit.votingStarsRange; _ck(_v, 7, 0, currVal_1); var currVal_2 = _v.parent.context.$implicit.votingStarsNumber; _ck(_v, 10, 0, currVal_2); var currVal_3 = i1.ɵunv(_v, 12, 0, _ck(_v, 13, 0, i1.ɵnov(_v.parent.parent, 0), _v.parent.context.$implicit.date, "MM/dd")); _ck(_v, 12, 0, currVal_3); var currVal_11 = i1.ɵunv(_v, 37, 0, _ck(_v, 38, 0, i1.ɵnov(_v.parent.parent, 1), _v.parent.context.$implicit.price, "USD")); _ck(_v, 37, 0, currVal_11); var currVal_12 = i1.ɵnov(_v, 40).target; var currVal_13 = i1.ɵnov(_v, 40).href; _ck(_v, 39, 0, currVal_12, currVal_13); var currVal_15 = i1.ɵnov(_v, 45).target; var currVal_16 = i1.ɵnov(_v, 45).href; _ck(_v, 44, 0, currVal_15, currVal_16); }); }
function View_SurfSectionBoardsComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), i1.ɵand(0, null, null, 2, null, View_SurfSectionBoardsComponent_2)), i1.ɵdid(2, 16384, [[1, 4]], 0, i11.CarouselSlideDirective, [i1.TemplateRef], { id: [0, "id"] }, null), i1.ɵdid(3, 16384, null, 0, i12.CarouselSlideDirective, [i1.TemplateRef], { id: [0, "id"] }, null)], function (_ck, _v) { var currVal_0 = _v.context.$implicit.id; _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.$implicit.id; _ck(_v, 3, 0, currVal_1); }, null); }
function View_SurfSectionBoardsComponent_0(_l) { return i1.ɵvid(0, [i1.ɵpid(0, i2.DatePipe, [i1.LOCALE_ID]), i1.ɵpid(0, i2.CurrencyPipe, [i1.LOCALE_ID]), (_l()(), i1.ɵeld(2, 0, null, null, 11, "section", [["class", "section-boards"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 10, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 9, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 8, "div", [["class", "col-xl-10 offset-xl-1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 7, "div", [["class", "boards-wrapper"]], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Boards"])), (_l()(), i1.ɵeld(9, 0, null, null, 4, "surf-carousel", [], null, null, null, i13.View_SurfCarouselComponent_0, i13.RenderType_SurfCarouselComponent)), i1.ɵdid(10, 2211840, null, 1, i11.SurfCarouselComponent, [[2, i6.BoardService]], null, null), i1.ɵqud(603979776, 1, { slides: 1 }), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_SurfSectionBoardsComponent_1)), i1.ɵdid(13, 802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; _ck(_v, 10, 0); var currVal_0 = _co.boardsData; _ck(_v, 13, 0, currVal_0); }, null); }
exports.View_SurfSectionBoardsComponent_0 = View_SurfSectionBoardsComponent_0;
function View_SurfSectionBoardsComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "surf-section-boards", [], null, null, null, View_SurfSectionBoardsComponent_0, RenderType_SurfSectionBoardsComponent)), i1.ɵdid(1, 245760, null, 0, i14.SurfSectionBoardsComponent, [i6.BoardService, i15.ResizeService, i16.WINDOW], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_SurfSectionBoardsComponent_Host_0 = View_SurfSectionBoardsComponent_Host_0;
var SurfSectionBoardsComponentNgFactory = i1.ɵccf("surf-section-boards", i14.SurfSectionBoardsComponent, View_SurfSectionBoardsComponent_Host_0, { boardsData: "boardsData" }, {}, []);
exports.SurfSectionBoardsComponentNgFactory = SurfSectionBoardsComponentNgFactory;


/***/ }),

/***/ "./src/app/surf-home/surf-section-boards/surf-section-boards.component.sass.shim.ngstyle.js":
/*!**************************************************************************************************!*\
  !*** ./src/app/surf-home/surf-section-boards/surf-section-boards.component.sass.shim.ngstyle.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".section-boards[_ngcontent-%COMP%] {\n  z-index: 2;\n  position: relative;\n  margin-bottom: 180px; }\n\n.boards-carousel[_ngcontent-%COMP%] {\n  position: relative; }\n\n.boards-carousel-stage[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative; }\n\n.boards-carousel-item-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0; }\n\n.boards-nav[_ngcontent-%COMP%] {\n  z-index: 3;\n  position: absolute;\n  top: -30px;\n  right: -42px;\n  width: 81px;\n  height: 40px;\n  font-size: 0; }\n\n.boards-nav[_ngcontent-%COMP%]   .boards-prev[_ngcontent-%COMP%], .boards-nav[_ngcontent-%COMP%]   .boards-next[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 39px;\n    height: 40px;\n    background-color: #f2d800;\n    background-position: center center;\n    background-repeat: no-repeat;\n    cursor: pointer; }\n\n.boards-nav[_ngcontent-%COMP%]   .boards-prev[_ngcontent-%COMP%] {\n    width: 40px;\n    border-right: 1px solid #bfaa00;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAYAAAAmL5yKAAAAyklEQVQokZXQPUpDQRSG4edeLKJNSiFEURJXYCVEyA9WCu5CsqXswkIbiYKgpHEDgRARFNxAHEsLJxAuF5354BRnOO/LmVOEENSkiztMcVU3sM5WzdshHrCHxl8wlJV+fwOeYpwjaEf4AI+4xFeqoBXhDp5wngKvBbu4xxFmEV6lwFCEEF5wnApU8lw9YnZKXGAe+xmaKBKrV+ITIyxwghvs5GwAHxhgiVPcpko2b/COId7QxzW2cwQiPIyyM0xyBfx+Y4BXfP8n+AHAPybm9f2kHgAAAABJRU5ErkJggg==); }\n\n.boards-nav[_ngcontent-%COMP%]   .boards-next[_ngcontent-%COMP%] {\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAYAAAAmL5yKAAAAxUlEQVQokZXST0rCQRgG4OfnRsxFSyGkIPEQkSBq0EKhc3SkvIULd/0hEHTjAYRQBIMuUNPShWOECM68MMzi4334YKYIITiRIXq4x8fhsHSqjTKu8RbvbOARz6jjFZe5wA8e8I6riNRzgD3SxwSNiFzkAPCNAWZo4gW1IoQwwW0G9D/znA2OpSihhSLxnGMaywv0czaoYowbuw/Vw1cqcBbLLSzRwSdpr1DBCG2s0cVmP0wBnnAXS92I/CUF+MXKbu3l4XALlQ4m8znxPBUAAAAASUVORK5CYII=); }\n\n.boards-nav[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%] {\n    background-color: rgba(242, 216, 0, 0.3);\n    cursor: not-allowed; }\n\n.boards-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #fff;\n  box-shadow: 0 -8px 30px rgba(0, 0, 0, 0.34); }\n\n.boards-wrapper[_ngcontent-%COMP%]::before {\n    content: '';\n    z-index: 0;\n    position: absolute;\n    left: 0;\n    right: 50%;\n    top: 0;\n    bottom: 0;\n    background-image: linear-gradient(to bottom right, #00b0ff 50%, transparent 50%); }\n\n.boards-wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 0;\n    top: 0;\n    margin-top: -102px;\n    -webkit-transform: rotate(-90deg);\n            transform: rotate(-90deg);\n    -webkit-transform-origin: 100% 100%;\n            transform-origin: 100% 100%;\n    font-size: 7.9375em;\n    font-weight: 700;\n    letter-spacing: 7px; }\n\n.board-description-wrapper[_ngcontent-%COMP%] {\n  padding: 0 35px 0 50px; }\n\n.board-description-wrapper[_ngcontent-%COMP%]   time[_ngcontent-%COMP%] {\n    padding: 7px 9px;\n    margin: 0 -35px 0 0;\n    background-color: black;\n    font-family: \"Montserrat\";\n    font-size: 0.875em;\n    font-weight: 400;\n    color: #fff; }\n\n.price[_ngcontent-%COMP%] {\n  margin-right: 25px;\n  color: #000;\n  font-family: \"Montserrat\", sans-regular;\n  font-size: 1.5em;\n  font-weight: 700;\n  vertical-align: -6px; }\n\n\n\n@media only screen and (max-width: 1200px) {\n  .section-boards[_ngcontent-%COMP%] {\n    margin-bottom: 120px; }\n  .board-description-wrapper[_ngcontent-%COMP%] {\n    padding-left: 35px; } }\n\n\n\n@media only screen and (max-width: 992px) {\n  .top-panel-header-description[_ngcontent-%COMP%] {\n    padding-bottom: 90px; }\n  .section-boards[_ngcontent-%COMP%] {\n    margin-bottom: 80px; }\n  .boards-wrapper[_ngcontent-%COMP%] {\n    overflow: hidden; }\n    .boards-wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n      top: 45px; }\n    .boards-wrapper[_ngcontent-%COMP%]::before {\n      background: #fff; }\n  .board-description[_ngcontent-%COMP%] {\n    margin-bottom: 40px; }\n  .top-panel-header-description[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.5em; } }\n\n\n\n@media only screen and (max-width: 767px) {\n  .top-panel-header-description[_ngcontent-%COMP%] {\n    padding-bottom: 50px; }\n  .top-panel-header-description[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.875em;\n    line-height: 1; }\n  .top-panel-header-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1em; }\n  .boards-wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-bottom: -20px;\n    line-height: 0.8; }\n  \n  .animated[_ngcontent-%COMP%] {\n    \n    transition-property: none !important;\n    \n    -webkit-transform: none !important;\n    transform: none !important;\n    \n    -webkit-animation: none !important;\n    animation: none !important; } }\n\n\n\n@media only screen and (max-width: 480px) {\n  .top-panel-header-description[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    padding: 0 10px;\n    margin-top: 20px; }\n  .section-boards[_ngcontent-%COMP%] {\n    margin-bottom: 60px; }\n  .board-description-wrapper[_ngcontent-%COMP%] {\n    padding: 0 10px; }\n    .board-description-wrapper[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n      font-size: 1.1em; }\n    .board-description-wrapper[_ngcontent-%COMP%]   time[_ngcontent-%COMP%] {\n      margin-right: -10px; }\n  .board-description[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .board-description[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    padding: 0.2rem; }\n  .boards-carousel-stage[_ngcontent-%COMP%] {\n    padding: 0 10px; }\n  .boards-carousel-item-wrapper[_ngcontent-%COMP%] {\n    padding-right: 10px; } }"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/surf-home/surf-section-boards/surf-section-boards.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/surf-home/surf-section-boards/surf-section-boards.component.ts ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
var resize_service_1 = __webpack_require__(/*! ../../core/resize.service */ "./src/app/core/resize.service.ts");
// import { ChildHeightDirective } from '../../shared/currentHeight.directive';
var board_data_1 = __webpack_require__(/*! ../board-data */ "./src/app/surf-home/board-data.ts");
var board_service_1 = __webpack_require__(/*! ../board.service */ "./src/app/surf-home/board.service.ts");
var SurfSectionBoardsComponent = /** @class */ (function () {
    // activeTabId: string = 'tab-00000';
    // @ViewChild(ChildHeightDirective) viewChildHeightDirective: ChildHeightDirective;
    function SurfSectionBoardsComponent(boardService, resizeService, winRef) {
        this.boardService = boardService;
        this.resizeService = resizeService;
        this.winRef = winRef;
        this.currentOrientation = 'vertical';
        this.currentJustify = 'center';
    }
    SurfSectionBoardsComponent.prototype.ngOnInit = function () {
        // this.getBoardsData();
        var _this = this;
        this.resizeSubscription = this.resizeService.onResize$
            .subscribe(function (size) { return _this.setCurrentOrientation(size.outerWidth); });
        this.setCurrentOrientation(this.winRef.outerWidth);
    };
    SurfSectionBoardsComponent.prototype.ngOnDestroy = function () {
        if (this.resizeSubscription) {
            this.resizeSubscription.unsubscribe();
        }
        // this._fetchDataSubscription.unsubscribe();
    };
    SurfSectionBoardsComponent.prototype.getBoardsData = function () {
        var _this = this;
        this._fetchDataSubscription = this.boardService.getBoardsData().subscribe(function (data) { return _this.boardsData = data; });
    };
    SurfSectionBoardsComponent.prototype.setCurrentOrientation = function (width) {
        if (width <= 767) {
            this.currentOrientation = 'horizontal';
        }
        else {
            this.currentOrientation = 'vertical';
        }
    };
    SurfSectionBoardsComponent.prototype.collectActivatedTabs = function (slideId, tabsetId, tabChangeObj) {
        this.boardService.collectActivatedTabs(slideId, tabsetId, tabChangeObj);
    };
    return SurfSectionBoardsComponent;
}());
exports.SurfSectionBoardsComponent = SurfSectionBoardsComponent;


/***/ }),

/***/ "./src/app/surf-home/surf-section-soc-nets/surf-section-soc-net.component.ngfactory.js":
/*!*********************************************************************************************!*\
  !*** ./src/app/surf-home/surf-section-soc-nets/surf-section-soc-net.component.ngfactory.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./surf-section-soc-net.component.sass.shim.ngstyle */ "./src/app/surf-home/surf-section-soc-nets/surf-section-soc-net.component.sass.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ../../../../node_modules/ngx-facebook/dist/esm/components/fb-page/fb-page.ngfactory */ "./node_modules/ngx-facebook/dist/esm/components/fb-page/fb-page.ngfactory.js");
var i3 = __webpack_require__(/*! ngx-facebook/dist/esm/components/fb-page/fb-page */ "ngx-facebook/dist/esm/components/fb-page/fb-page");
var i4 = __webpack_require__(/*! ./surf-section-soc-net.component */ "./src/app/surf-home/surf-section-soc-nets/surf-section-soc-net.component.ts");
var i5 = __webpack_require__(/*! ngx-facebook/dist/esm/providers/facebook */ "ngx-facebook/dist/esm/providers/facebook");
var styles_SurfSectionSocNetComponent = [i0.styles];
var RenderType_SurfSectionSocNetComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_SurfSectionSocNetComponent, data: {} });
exports.RenderType_SurfSectionSocNetComponent = RenderType_SurfSectionSocNetComponent;
function View_SurfSectionSocNetComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 32, "section", [["class", "section-soc-nets"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 31, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Instagram"])), (_l()(), i1.ɵeld(4, 0, null, null, 28, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 18, "div", [["class", "col-lg-7"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 17, "div", [["class", "instagram-wrapper"]], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 16, "div", [["class", "instagram-frame"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 1, "img", [["alt", "harbour"]], [[8, "src", 4]], null, null, null, null)), i1.ɵpad(9, 1), (_l()(), i1.ɵeld(10, 0, null, null, 1, "img", [["alt", "bridge"]], [[8, "src", 4]], null, null, null, null)), i1.ɵpad(11, 1), (_l()(), i1.ɵeld(12, 0, null, null, 1, "img", [["alt", "beach"]], [[8, "src", 4]], null, null, null, null)), i1.ɵpad(13, 1), (_l()(), i1.ɵeld(14, 0, null, null, 1, "img", [["alt", "beach"]], [[8, "src", 4]], null, null, null, null)), i1.ɵpad(15, 1), (_l()(), i1.ɵeld(16, 0, null, null, 7, "div", [["class", "instagram-info"]], null, null, null, null, null)), (_l()(), i1.ɵeld(17, 0, null, null, 6, "a", [["href", "https://www.instagram.com/simple_vitalii/"]], null, null, null, null, null)), (_l()(), i1.ɵeld(18, 0, null, null, 1, "img", [["alt", "Instagram"]], [[8, "src", 4]], null, null, null, null)), i1.ɵpad(19, 1), (_l()(), i1.ɵeld(20, 0, null, null, 1, "span", [["class", "text-uppercase"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Follow us"])), (_l()(), i1.ɵeld(22, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["@surfersco"])), (_l()(), i1.ɵeld(24, 0, null, null, 8, "div", [["class", "col-lg-5"]], null, null, null, null, null)), (_l()(), i1.ɵeld(25, 0, null, null, 7, "div", [["class", "facebook-wrapper"]], null, null, null, null, null)), (_l()(), i1.ɵeld(26, 0, null, null, 0, "img", [["alt", "Facebook"], ["src", "assets/img/facebook-logo.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(27, 0, null, null, 2, "div", [["class", "facebook-shell d-none d-sm-block"]], null, null, null, null, null)), (_l()(), i1.ɵeld(28, 0, null, null, 1, "fb-page", [["height", "210"], ["href", "https://www.facebook.com/Surfers-co___-153510442076350/"], ["width", "340"]], null, null, null, i2.View_FBPageComponent_0, i2.RenderType_FBPageComponent)), i1.ɵdid(29, 49152, null, 0, i3.FBPageComponent, [i1.ElementRef, i1.Renderer], { href: [0, "href"], width: [1, "width"], height: [2, "height"] }, null), (_l()(), i1.ɵeld(30, 0, null, null, 2, "div", [["class", "facebook-shell d-block d-sm-none"], ["style", "width: 290px"]], null, null, null, null, null)), (_l()(), i1.ɵeld(31, 0, null, null, 1, "fb-page", [["height", "210"], ["href", "https://www.facebook.com/Surfers-co___-153510442076350/"], ["width", "290"]], null, null, null, i2.View_FBPageComponent_0, i2.RenderType_FBPageComponent)), i1.ɵdid(32, 49152, null, 0, i3.FBPageComponent, [i1.ElementRef, i1.Renderer], { href: [0, "href"], width: [1, "width"], height: [2, "height"] }, null)], function (_ck, _v) { var currVal_5 = "https://www.facebook.com/Surfers-co___-153510442076350/"; var currVal_6 = "340"; var currVal_7 = "210"; _ck(_v, 29, 0, currVal_5, currVal_6, currVal_7); var currVal_8 = "https://www.facebook.com/Surfers-co___-153510442076350/"; var currVal_9 = "290"; var currVal_10 = "210"; _ck(_v, 32, 0, currVal_8, currVal_9, currVal_10); }, function (_ck, _v) { var currVal_0 = _ck(_v, 9, 0, "/assets/img/photo-4.png"); _ck(_v, 8, 0, currVal_0); var currVal_1 = _ck(_v, 11, 0, "/assets/img/photo-5.png"); _ck(_v, 10, 0, currVal_1); var currVal_2 = _ck(_v, 13, 0, "/assets/img/photo-6.png"); _ck(_v, 12, 0, currVal_2); var currVal_3 = _ck(_v, 15, 0, "/assets/img/photo-7.png"); _ck(_v, 14, 0, currVal_3); var currVal_4 = _ck(_v, 19, 0, "assets/img/instagram-logo-blue.png"); _ck(_v, 18, 0, currVal_4); }); }
exports.View_SurfSectionSocNetComponent_0 = View_SurfSectionSocNetComponent_0;
function View_SurfSectionSocNetComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "surf-section-soc-net", [], null, null, null, View_SurfSectionSocNetComponent_0, RenderType_SurfSectionSocNetComponent)), i1.ɵdid(1, 114688, null, 0, i4.SurfSectionSocNetComponent, [i5.FacebookService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_SurfSectionSocNetComponent_Host_0 = View_SurfSectionSocNetComponent_Host_0;
var SurfSectionSocNetComponentNgFactory = i1.ɵccf("surf-section-soc-net", i4.SurfSectionSocNetComponent, View_SurfSectionSocNetComponent_Host_0, {}, {}, []);
exports.SurfSectionSocNetComponentNgFactory = SurfSectionSocNetComponentNgFactory;


/***/ }),

/***/ "./src/app/surf-home/surf-section-soc-nets/surf-section-soc-net.component.sass.shim.ngstyle.js":
/*!*****************************************************************************************************!*\
  !*** ./src/app/surf-home/surf-section-soc-nets/surf-section-soc-net.component.sass.shim.ngstyle.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".section-soc-nets[_ngcontent-%COMP%] {\n  margin-bottom: 125px; }\n  .section-soc-nets[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n    font-size: 5.625em;\n    text-align: left;\n    letter-spacing: 6px; }\n  .instagram-wrapper[_ngcontent-%COMP%] {\n  z-index: 10;\n  position: absolute;\n  width: 100%;\n  padding-right: 50px; }\n  .instagram-frame[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 50%; }\n  .instagram-info[_ngcontent-%COMP%] {\n  padding: 20px;\n  background-color: #fff; }\n  .instagram-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    vertical-align: middle; }\n  .instagram-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%] {\n      margin: 0 15px;\n      font-family: \"RobotoCondensedBold\", sans-serif;\n      font-size: 1.5em;\n      font-weight: 700;\n      color: #00b0ff;\n      vertical-align: middle; }\n  .instagram-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .instagram-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n    text-decoration: none; }\n  .instagram-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n    vertical-align: -2px; }\n  .facebook-wrapper[_ngcontent-%COMP%] {\n  max-width: 400px;\n  padding: 30px 15px 42px;\n  margin: 57px 50px 0 0;\n  background-image: linear-gradient(#385490 50%, #e5e5e5 50%);\n  text-align: center; }\n  .facebook-wrapper[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    display: inline-block;\n    margin: 0 auto 30px; }\n  .facebook-wrapper[_ngcontent-%COMP%]   .facebook-shell[_ngcontent-%COMP%] {\n    margin: auto; }\n  @media only screen and (max-width: 1200px) {\n  .facebook-wrapper[_ngcontent-%COMP%] {\n    margin: 0; }\n  .section-soc-nets[_ngcontent-%COMP%] {\n    margin-bottom: 80px; }\n    .section-soc-nets[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n      font-size: 4.375em; } }\n  \n  @media only screen and (max-width: 991px) {\n  .section-soc-nets[_ngcontent-%COMP%] {\n    padding-bottom: 50px;\n    margin: 0; }\n    .section-soc-nets[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n      text-align: center; }\n  .instagram-wrapper[_ngcontent-%COMP%] {\n    position: relative;\n    width: 70%;\n    padding-right: 0;\n    margin: 0 auto 40px;\n    border: 1px solid #ccc; }\n  .instagram-info[_ngcontent-%COMP%] {\n    padding: 10px 20px; }\n  .facebook-wrapper[_ngcontent-%COMP%] {\n    margin: 0 auto; } }\n  \n  @media only screen and (max-width: 767px) {\n  .section-soc-nets[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 3.75em; }\n  \n  .animated[_ngcontent-%COMP%] {\n    \n    transition-property: none !important;\n    \n    -webkit-transform: none !important;\n    transform: none !important;\n    \n    -webkit-animation: none !important;\n    animation: none !important; } }\n  \n  @media only screen and (max-width: 480px) {\n  .section-soc-nets[_ngcontent-%COMP%] {\n    padding-bottom: 0; }\n    .section-soc-nets[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n      font-size: 2.5em;\n      letter-spacing: 4px;\n      text-align: justify; }\n  .instagram-wrapper[_ngcontent-%COMP%] {\n    width: 100%; }\n  .facebook-wrapper[_ngcontent-%COMP%] {\n    max-width: 500px;\n    margin: 0\t-15px; } }"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/surf-home/surf-section-soc-nets/surf-section-soc-net.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/surf-home/surf-section-soc-nets/surf-section-soc-net.component.ts ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var ngx_facebook_1 = __webpack_require__(/*! ngx-facebook */ "ngx-facebook");
var SurfSectionSocNetComponent = /** @class */ (function () {
    function SurfSectionSocNetComponent(fb) {
        this.fb = fb;
        var initParams = { appId: '', xfbml: true, version: 'v2.8' };
        fb.init(initParams);
    }
    SurfSectionSocNetComponent.prototype.ngOnInit = function () {
    };
    return SurfSectionSocNetComponent;
}());
exports.SurfSectionSocNetComponent = SurfSectionSocNetComponent;


/***/ }),

/***/ "./src/app/surf-home/surf-section-team/surf-section-team.component.ngfactory.js":
/*!**************************************************************************************!*\
  !*** ./src/app/surf-home/surf-section-team/surf-section-team.component.ngfactory.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./surf-section-team.component.sass.shim.ngstyle */ "./src/app/surf-home/surf-section-team/surf-section-team.component.sass.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ../../core/surf-carousel/surf-carousel.component */ "./src/app/core/surf-carousel/surf-carousel.component.ts");
var i3 = __webpack_require__(/*! ../../core/surf-carousel-2/surf-carousel-2.component */ "./src/app/core/surf-carousel-2/surf-carousel-2.component.ts");
var i4 = __webpack_require__(/*! ../../core/surf-carousel-2/surf-carousel-2.component.ngfactory */ "./src/app/core/surf-carousel-2/surf-carousel-2.component.ngfactory.js");
var i5 = __webpack_require__(/*! ../../core/resize.service */ "./src/app/core/resize.service.ts");
var i6 = __webpack_require__(/*! ../../core/window-ref.service */ "./src/app/core/window-ref.service.ts");
var i7 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i8 = __webpack_require__(/*! ./surf-section-team.component */ "./src/app/surf-home/surf-section-team/surf-section-team.component.ts");
var styles_SurfSectionTeamComponent = [i0.styles];
var RenderType_SurfSectionTeamComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_SurfSectionTeamComponent, data: {} });
exports.RenderType_SurfSectionTeamComponent = RenderType_SurfSectionTeamComponent;
function View_SurfSectionTeamComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 12, "div", [["class", "team-member"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 0, "a", [["class", "team-member-link"]], [[8, "href", 4]], null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 0, "img", [], [[8, "src", 4], [8, "alt", 0]], null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 1, "h5", [], null, null, null, null, null)), (_l()(), i1.ɵted(4, null, ["", ""])), (_l()(), i1.ɵeld(5, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(6, null, ["", ""])), (_l()(), i1.ɵeld(7, 0, null, null, 2, "p", [["class", "waved-divider"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 0, "span", [["class", "black-waved-divider"]], null, null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 0, "span", [["class", "blue-waved-divider"]], null, null, null, null, null)), (_l()(), i1.ɵeld(10, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), i1.ɵeld(11, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-map-marker"]], null, null, null, null, null)), (_l()(), i1.ɵted(12, null, [" ", ""]))], null, function (_ck, _v) { var currVal_0 = i1.ɵinlineInterpolate(1, "", _v.parent.context.$implicit.accountLink, ""); _ck(_v, 1, 0, currVal_0); var currVal_1 = _v.parent.context.$implicit.srcLink; var currVal_2 = ((_v.parent.context.$implicit.firstname + " ") + _v.parent.context.$implicit.surname); _ck(_v, 2, 0, currVal_1, currVal_2); var currVal_3 = ((_v.parent.context.$implicit.firstname + " ") + _v.parent.context.$implicit.surname); _ck(_v, 4, 0, currVal_3); var currVal_4 = _v.parent.context.$implicit.accountName; _ck(_v, 6, 0, currVal_4); var currVal_5 = _v.parent.context.$implicit.address; _ck(_v, 12, 0, currVal_5); }); }
function View_SurfSectionTeamComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), i1.ɵand(0, null, null, 2, null, View_SurfSectionTeamComponent_2)), i1.ɵdid(2, 16384, null, 0, i2.CarouselSlideDirective, [i1.TemplateRef], null, null), i1.ɵdid(3, 16384, [[1, 4]], 0, i3.CarouselSlideDirective, [i1.TemplateRef], null, null)], null, null); }
function View_SurfSectionTeamComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 10, "section", [["class", "section-our-team"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Our Team"])), (_l()(), i1.ɵeld(3, 0, null, null, 7, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 6, "div", [["class", "col-10 offset-1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 5, "surf-carousel-2", [], null, null, null, i4.View_SurfCarousel2Component_0, i4.RenderType_SurfCarousel2Component)), i1.ɵdid(6, 2342912, null, 1, i3.SurfCarousel2Component, [i1.ElementRef, i5.ResizeService, i6.WINDOW], { slidersQuantity: [0, "slidersQuantity"], cycled: [1, "cycled"] }, null), i1.ɵqud(603979776, 1, { slides: 1 }), i1.ɵpod(8, { "0": 0, "350": 1, "740": 2, "900": 3 }), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_SurfSectionTeamComponent_1)), i1.ɵdid(10, 802816, null, 0, i7.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 8, 0, 1, 2, 3, 4); var currVal_1 = true; _ck(_v, 6, 0, currVal_0, currVal_1); var currVal_2 = _co.teamData; _ck(_v, 10, 0, currVal_2); }, null); }
exports.View_SurfSectionTeamComponent_0 = View_SurfSectionTeamComponent_0;
function View_SurfSectionTeamComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "surf-section-team", [], null, null, null, View_SurfSectionTeamComponent_0, RenderType_SurfSectionTeamComponent)), i1.ɵdid(1, 245760, null, 0, i8.SurfSectionTeamComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_SurfSectionTeamComponent_Host_0 = View_SurfSectionTeamComponent_Host_0;
var SurfSectionTeamComponentNgFactory = i1.ɵccf("surf-section-team", i8.SurfSectionTeamComponent, View_SurfSectionTeamComponent_Host_0, { teamData: "teamData" }, {}, []);
exports.SurfSectionTeamComponentNgFactory = SurfSectionTeamComponentNgFactory;


/***/ }),

/***/ "./src/app/surf-home/surf-section-team/surf-section-team.component.sass.shim.ngstyle.js":
/*!**********************************************************************************************!*\
  !*** ./src/app/surf-home/surf-section-team/surf-section-team.component.sass.shim.ngstyle.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".team-member[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 30px 15px 35px;\n  margin: 14px -28px 14px 14px;\n  border-radius: 4px;\n  background-color: #fff;\n  box-shadow: 0 0 50px rgba(0, 0, 0, 0.2);\n  text-align: center;\n  transition: all 0.2s; }\n  .team-member[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100px;\n    max-width: 100%;\n    margin: 0 auto 14px;\n    border: 2px solid #fff;\n    border-radius: 50%; }\n  .team-member[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 0; }\n  .team-member[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n    color: #d9d9d9; }\n  .team-member[_ngcontent-%COMP%]   .team-member-link[_ngcontent-%COMP%] {\n    z-index: 10;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0; }\n  .section-our-team[_ngcontent-%COMP%] {\n  overflow: hidden;\n  padding-bottom: 150px; }\n  .section-our-team[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-bottom: -50px; }\n  .section-our-team[_ngcontent-%COMP%]   .surf-carousel-2[_ngcontent-%COMP%] {\n    margin: 0 -15px; }\n  .section-our-team[_ngcontent-%COMP%]   .surf-carousel-2[_ngcontent-%COMP%]   .owl-stage-outer[_ngcontent-%COMP%] {\n      overflow: visible; }\n  .section-our-team[_ngcontent-%COMP%]   .surf-carousel-2[_ngcontent-%COMP%]   .team-member[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n      width: 100px;\n      max-width: 100%;\n      margin: 0 auto 14px;\n      border: 2px solid #fff;\n      border-radius: 50%; }\n  .section-our-team[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    margin-bottom: 0; }\n  .waved-divider[_ngcontent-%COMP%] {\n  position: relative;\n  height: 32px; }\n  .waved-divider[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    background-repeat: no-repeat;\n    background-position: center center;\n    transition: all 0.2s; }\n  .black-waved-divider[_ngcontent-%COMP%] {\n  visibility: visible;\n  opacity: 1;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAGCAYAAAA7d0VqAAAAYklEQVQokZWSwQ3AMAwCobPaUzFs+4pEnVYifCxfHifFsKpguQEQe365pI13d8SvIfAZ8e5+8bUnfMmPhJOfCH1nVfkDP4THXBKn8Iv7t3PMiM/brj3hHIXzROWTBCAvmecBlrpREPMQT3EAAAAASUVORK5CYII=); }\n  .blue-waved-divider[_ngcontent-%COMP%] {\n  visibility: hidden;\n  opacity: 0;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAGCAYAAAA7d0VqAAAAPklEQVQokWNkUPrPgAT+MzAwMDJgApqIM6FJINM0F2ciViEtxJnQJBjRFdBSnAmLBHpc0UycCcqhm4VIfEYA53QgLnL1Jv8AAAAASUVORK5CYII=); }\n  .surf-carousel-2-sliders-wrapper[_ngcontent-%COMP%] {\n  overflow: hidden; }\n  @media only screen and (max-width: 1200px) {\n  .section-our-team[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-bottom: -20px; } }\n  \n  @media only screen and (max-width: 991px) {\n  .section-our-team[_ngcontent-%COMP%] {\n    padding-bottom: 100px; }\n    .section-our-team[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n      margin-bottom: 0; }\n    .section-our-team[_ngcontent-%COMP%]   .surf-carousel-2[_ngcontent-%COMP%] {\n      margin: 0 0 0 -20px; } }\n  \n  @media only screen and (max-width: 767px) {\n  .section-our-team[_ngcontent-%COMP%] {\n    padding-bottom: 80px; }\n  \n  .animated[_ngcontent-%COMP%] {\n    \n    transition-property: none !important;\n    \n    -webkit-transform: none !important;\n    transform: none !important;\n    \n    -webkit-animation: none !important;\n    animation: none !important; } }\n  \n  @media only screen and (max-width: 480px) {\n  .team-member[_ngcontent-%COMP%] {\n    max-width: 220px;\n    margin: 0 auto; }\n  .section-our-team[_ngcontent-%COMP%] {\n    padding-bottom: 60px; }\n    .section-our-team[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n      margin-bottom: 10px; }\n    .section-our-team[_ngcontent-%COMP%]   .surf-carousel-2[_ngcontent-%COMP%] {\n      margin: 0; }\n    .section-our-team[_ngcontent-%COMP%]   .surf-carousel-2-slider-wrapper[_ngcontent-%COMP%]:nth-of-type(2n)   .team-member[_ngcontent-%COMP%] {\n      margin-top: 0; }\n    .section-our-team[_ngcontent-%COMP%]   .surf-carousel-2-nav[_ngcontent-%COMP%]   .surf-carousel-2-nav-prev[_ngcontent-%COMP%] {\n      left: -50px; }\n    .section-our-team[_ngcontent-%COMP%]   .surf-carousel-2-nav[_ngcontent-%COMP%]   .surf-carousel-2-nav-next[_ngcontent-%COMP%] {\n      right: -50px; } }"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/surf-home/surf-section-team/surf-section-team.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/surf-home/surf-section-team/surf-section-team.component.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var SurfSectionTeamComponent = /** @class */ (function () {
    function SurfSectionTeamComponent() {
    }
    SurfSectionTeamComponent.prototype.ngOnInit = function () {
        // this.getTeamData();
    };
    SurfSectionTeamComponent.prototype.ngOnDestroy = function () {
        // this._fetchDataSubscription.unsubscribe();
    };
    return SurfSectionTeamComponent;
}());
exports.SurfSectionTeamComponent = SurfSectionTeamComponent;


/***/ }),

/***/ "./src/app/top-menu/top-menu.component.ngfactory.js":
/*!**********************************************************!*\
  !*** ./src/app/top-menu/top-menu.component.ngfactory.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./top-menu.component.sass.shim.ngstyle */ "./src/app/top-menu/top-menu.component.sass.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/collapse/collapse */ "@ng-bootstrap/ng-bootstrap/collapse/collapse");
var i5 = __webpack_require__(/*! ./top-menu.component */ "./src/app/top-menu/top-menu.component.ts");
var i6 = __webpack_require__(/*! ../core/menu.service */ "./src/app/core/menu.service.ts");
var i7 = __webpack_require__(/*! ../core/resize.service */ "./src/app/core/resize.service.ts");
var i8 = __webpack_require__(/*! ../core/window-ref.service */ "./src/app/core/window-ref.service.ts");
var styles_TopMenuComponent = [i0.styles];
var RenderType_TopMenuComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_TopMenuComponent, data: { "animation": [{ type: 7, name: "collapseInOut", definitions: [{ type: 0, name: "collapsed", styles: { type: 6, styles: { height: 0 }, offset: null }, options: undefined }, { type: 0, name: "shown", styles: { type: 6, styles: { height: "*" }, offset: null }, options: undefined }, { type: 1, expr: "shown => collapsed", animation: [{ type: 4, styles: null, timings: 350 }], options: null }, { type: 1, expr: "collapsed => shown", animation: [{ type: 4, styles: null, timings: 350 }], options: null }], options: {} }] } });
exports.RenderType_TopMenuComponent = RenderType_TopMenuComponent;
function View_TopMenuComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 7, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 6, "a", [["class", "nav-link"], ["routerLinkActive", "active-navbar-a"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.setCollapsed() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), i1.ɵdid(2, 671744, [[2, 4]], 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(3, 1), i1.ɵdid(4, 1720320, null, 2, i2.RouterLinkActive, [i2.Router, i1.ElementRef, i1.Renderer2, i1.ChangeDetectorRef], { routerLinkActive: [0, "routerLinkActive"] }, null), i1.ɵqud(603979776, 1, { links: 1 }), i1.ɵqud(603979776, 2, { linksWithHrefs: 1 }), (_l()(), i1.ɵted(7, null, ["", ""]))], function (_ck, _v) { var currVal_2 = _ck(_v, 3, 0, _v.context.$implicit.href); _ck(_v, 2, 0, currVal_2); var currVal_3 = "active-navbar-a"; _ck(_v, 4, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 2).target; var currVal_1 = i1.ɵnov(_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_4 = _v.context.$implicit.text; _ck(_v, 7, 0, currVal_4); }); }
function View_TopMenuComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 26, "header", [["class", "top-panel"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 25, "nav", [["class", "container navbar justify-content-between navbar-expand-lg bootsnav"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 3, "a", [["class", "navbar-brand"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(3, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(4, 1), (_l()(), i1.ɵted(-1, null, ["Surfers Co."])), (_l()(), i1.ɵeld(6, 0, null, null, 2, "button", [["aria-controls", "navbar-menu"], ["class", "navbar-toggler"], ["type", "button"]], [[1, "aria-expanded", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.setCollapsed() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 0, "i", [["class", "fa fa-bars"]], [[2, "d-none", null]], null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 0, "i", [["class", "fa fa-times"]], [[2, "d-none", null]], null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 17, "div", [["class", "collapse navbar-collapse"], ["id", "navbar-menu"]], [[24, "@collapseInOut", 0], [2, "collapse", null], [2, "show", null]], null, null, null, null)), i1.ɵdid(10, 16384, null, 0, i4.NgbCollapse, [], { collapsed: [0, "collapsed"] }, null), (_l()(), i1.ɵeld(11, 0, null, null, 3, "ul", [["class", "nav navbar-nav mx-auto"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 2, null, View_TopMenuComponent_1)), i1.ɵdid(13, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), i1.ɵpid(131072, i3.AsyncPipe, [i1.ChangeDetectorRef]), (_l()(), i1.ɵeld(15, 0, null, null, 11, "div", [["class", "attr-nav"]], null, null, null, null, null)), (_l()(), i1.ɵeld(16, 0, null, null, 10, "ul", [["class", "list-inline d-flex justify-content-center"]], null, null, null, null, null)), (_l()(), i1.ɵeld(17, 0, null, null, 2, "li", [["class", "list-inline-item"]], null, null, null, null, null)), (_l()(), i1.ɵeld(18, 0, null, null, 1, "a", [["href", "https://www.facebook.com"]], null, null, null, null, null)), (_l()(), i1.ɵeld(19, 0, null, null, 0, "i", [["class", "fa fa-facebook"]], null, null, null, null, null)), (_l()(), i1.ɵeld(20, 0, null, null, 2, "li", [["class", "list-inline-item"]], null, null, null, null, null)), (_l()(), i1.ɵeld(21, 0, null, null, 1, "a", [["href", "https://www.instagram.com/"]], null, null, null, null, null)), (_l()(), i1.ɵeld(22, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-instagram"]], null, null, null, null, null)), (_l()(), i1.ɵeld(23, 0, null, null, 3, "li", [["class", "list-inline-item"]], null, null, null, null, null)), (_l()(), i1.ɵeld(24, 0, null, null, 2, "a", [["href", "mailto:domovik0712@gmail.com"]], null, null, null, null, null)), (_l()(), i1.ɵeld(25, 0, null, null, 0, "span", [["class", "white-img bg-envelop"]], null, null, null, null, null)), (_l()(), i1.ɵeld(26, 0, null, null, 0, "span", [["class", "black-img bg-envelop-black"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _ck(_v, 4, 0, "/"); _ck(_v, 3, 0, currVal_2); var currVal_9 = _co.isCollapsed; _ck(_v, 10, 0, currVal_9); var currVal_10 = i1.ɵunv(_v, 13, 0, i1.ɵnov(_v, 14).transform(_co.menuItems)); _ck(_v, 13, 0, currVal_10); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵnov(_v, 3).target; var currVal_1 = i1.ɵnov(_v, 3).href; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_3 = !_co.isCollapsed; _ck(_v, 6, 0, currVal_3); var currVal_4 = !_co.isCollapsed; _ck(_v, 7, 0, currVal_4); var currVal_5 = _co.isCollapsed; _ck(_v, 8, 0, currVal_5); var currVal_6 = _co.collapseState; var currVal_7 = true; var currVal_8 = !i1.ɵnov(_v, 10).collapsed; _ck(_v, 9, 0, currVal_6, currVal_7, currVal_8); }); }
exports.View_TopMenuComponent_0 = View_TopMenuComponent_0;
function View_TopMenuComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "surf-topmenu", [], null, null, null, View_TopMenuComponent_0, RenderType_TopMenuComponent)), i1.ɵdid(1, 245760, null, 0, i5.TopMenuComponent, [i6.MenuService, i7.ResizeService, i8.WINDOW], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_TopMenuComponent_Host_0 = View_TopMenuComponent_Host_0;
var TopMenuComponentNgFactory = i1.ɵccf("surf-topmenu", i5.TopMenuComponent, View_TopMenuComponent_Host_0, {}, {}, []);
exports.TopMenuComponentNgFactory = TopMenuComponentNgFactory;


/***/ }),

/***/ "./src/app/top-menu/top-menu.component.sass.shim.ngstyle.js":
/*!******************************************************************!*\
  !*** ./src/app/top-menu/top-menu.component.sass.shim.ngstyle.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".top-panel[_ngcontent-%COMP%] {\n  z-index: 3;\n  position: absolute;\n  width: 100%; }\n\n.show[_ngcontent-%COMP%] {\n  overflow: hidden; }\n\nnav.navbar.bootsnav[_ngcontent-%COMP%] {\n  padding-top: 24px;\n  padding-bottom: 110px;\n  border-bottom: none;\n  background: none; }\n\nnav.navbar.bootsnav[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%] {\n    padding-top: 8px;\n    padding-bottom: 10px; }\n\nnav.navbar.bootsnav[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n      font-family: \"Montserrat\";\n      font-size: 0.875em;\n      font-weight: 600;\n      text-transform: uppercase;\n      color: #000;\n      transition: all 0.4s; }\n\nnav.navbar.bootsnav[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, nav.navbar.bootsnav[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus, nav.navbar.bootsnav[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.active-navbar-a[_ngcontent-%COMP%] {\n        background-color: #00b0ff;\n        color: #fff; }\n\n.navbar-right[_ngcontent-%COMP%] {\n  margin-right: 0 !important; }\n\n.attr-nav[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  margin-right: 0; }\n\n.attr-nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n    margin-bottom: 6px; }\n\n.attr-nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%] {\n      padding-left: 5px; }\n\n.attr-nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n      z-index: 12;\n      position: relative;\n      display: inline-block;\n      width: 36px;\n      height: 36px;\n      padding: 0;\n      border-radius: 18px;\n      background-color: #000;\n      cursor: pointer;\n      transition: all 0.3s;\n      color: #000; }\n\n.attr-nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .attr-nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        -webkit-transform: translate(-50%, -50%);\n                transform: translate(-50%, -50%);\n        transition: all 0.2s; }\n\n.attr-nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n        font-size: 1.25em;\n        color: #fff; }\n\n.attr-nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n        color: #00b0ff;\n        background-color: #fff; }\n\n.attr-nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n          color: #000; }\n\n.attr-nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover::before {\n          background-color: #00b0ff; }\n\n.attr-nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover   .black-img[_ngcontent-%COMP%] {\n          visibility: visible;\n          opacity: 1; }\n\n.attr-nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover   .white-img[_ngcontent-%COMP%] {\n          visibility: hidden;\n          opacity: 0; }\n\n.bootsnav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  padding-top: 0;\n  margin-right: 0;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 2.125em;\n  font-weight: 700;\n  color: #000;\n  line-height: 1; }\n\n.navbar-toggler[_ngcontent-%COMP%] {\n  padding-top: 0;\n  padding-right: 0; }\n\n.navbar-toggler[_ngcontent-%COMP%]:focus {\n    outline: none; }\n\n.black-img[_ngcontent-%COMP%] {\n  visibility: hidden;\n  opacity: 0; }\n\n.bg-envelop[_ngcontent-%COMP%] {\n  width: 19px;\n  height: 14px;\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAQCAYAAACcN8ZaAAAC/ElEQVRIS6WVW6hUZRiGn3eNRDT7W+sqKAu6DU0sO1wEQSe0tCAtLa2LICzanZFOdiCoVEIMEzHKQJFUNKWIsgwp6AQdiEzCC2+6qCiFmLX2VBfO+uSb1tg4zt6ujT8sGNa8//s/6/vf7//l7o2xsbHl7v4QcDb1xmFJ60ZGRlZI6rj7hUCz3tShqrakg2q1Wi9Jeqam0REgr7TnA6vN7A9gbc35E8keUZ7nf9atiKRRM9sQjnme7wfOMbPrgbeBi04D6ABwV8D4JEyWpWm6pg9mhpm9CmwH7gfunoRXT7oJ2AgsmizMR8BnlcujVWW2ArOrZyawHjirBtTfwAPAT8AnwJ5xYdx9e5Ikb4ZpWZZLJd0xbAEzC5glwF/AHOAfYCcQoR5vHAQWAhYQQAZs7cJI2hulKsvyPElR9p1pmi7qd8rzfEcYuPtjSZL86u4BcEsfTMhbwDzgR+B14M4hNJuBB4FLgA8qoJD9B+PuG7IsGy2KYoG775J0jZn1tqPrVxTF1e7+qaRbzWx3nucrgacGYEI6BsyV9Lm731t12plAd1skbXL3a4H3B7ZzOIy735hlWeTj+Gi1WjdI2lMDpgNcJenrmOzuFwMvA09Kiq6JdzcD7wHqW+JEmHa7PbXT6fzi7u9kWbZ4AGabpNsajcYFzWbztwkqE+fWc+4erT61ikDXyt1vighK+tDdI+ij48JULbsaWCZpG/BGeAD3uftiSWvNLLoozplh2/QdcGWVmy3AGcDtkt519wVAeDaAx6tMfQtMr4BOrExF3yiK4hXgYWBKJTwKvGZmT8TxPw5MZOKyqkte6NuCEvgZmAYkfZWID43nCyAydTJMT9xut88tyzK+kiRJvmo2m78PdNeqyEFfgJ8GrgDmT9DSg3/tA74Enu/BxKX3g5nFwVV7FEWx191nmdnHwOXAv8CM2gb/Cw9VP7+J1u7uvbvvk/R9lZGJPOXul0q6DliRpmndS/aUnGE8pSiKF4F76l6YwGHgLTN7tpehU65UQ3AMhrhqmZx6gRUAAAAASUVORK5CYII=\") -17px -17px; }\n\n.bg-instagram[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAQCAYAAACcN8ZaAAAC/ElEQVRIS6WVW6hUZRiGn3eNRDT7W+sqKAu6DU0sO1wEQSe0tCAtLa2LICzanZFOdiCoVEIMEzHKQJFUNKWIsgwp6AQdiEzCC2+6qCiFmLX2VBfO+uSb1tg4zt6ujT8sGNa8//s/6/vf7//l7o2xsbHl7v4QcDb1xmFJ60ZGRlZI6rj7hUCz3tShqrakg2q1Wi9Jeqam0REgr7TnA6vN7A9gbc35E8keUZ7nf9atiKRRM9sQjnme7wfOMbPrgbeBi04D6ABwV8D4JEyWpWm6pg9mhpm9CmwH7gfunoRXT7oJ2AgsmizMR8BnlcujVWW2ArOrZyawHjirBtTfwAPAT8AnwJ5xYdx9e5Ikb4ZpWZZLJd0xbAEzC5glwF/AHOAfYCcQoR5vHAQWAhYQQAZs7cJI2hulKsvyPElR9p1pmi7qd8rzfEcYuPtjSZL86u4BcEsfTMhbwDzgR+B14M4hNJuBB4FLgA8qoJD9B+PuG7IsGy2KYoG775J0jZn1tqPrVxTF1e7+qaRbzWx3nucrgacGYEI6BsyV9Lm731t12plAd1skbXL3a4H3B7ZzOIy735hlWeTj+Gi1WjdI2lMDpgNcJenrmOzuFwMvA09Kiq6JdzcD7wHqW+JEmHa7PbXT6fzi7u9kWbZ4AGabpNsajcYFzWbztwkqE+fWc+4erT61ikDXyt1vighK+tDdI+ij48JULbsaWCZpG/BGeAD3uftiSWvNLLoozplh2/QdcGWVmy3AGcDtkt519wVAeDaAx6tMfQtMr4BOrExF3yiK4hXgYWBKJTwKvGZmT8TxPw5MZOKyqkte6NuCEvgZmAYkfZWID43nCyAydTJMT9xut88tyzK+kiRJvmo2m78PdNeqyEFfgJ8GrgDmT9DSg3/tA74Enu/BxKX3g5nFwVV7FEWx191nmdnHwOXAv8CM2gb/Cw9VP7+J1u7uvbvvk/R9lZGJPOXul0q6DliRpmndS/aUnGE8pSiKF4F76l6YwGHgLTN7tpehU65UQ3AMhrhqmZx6gRUAAAAASUVORK5CYII=\") 0 0; }\n\n.bg-envelop-black[_ngcontent-%COMP%] {\n  width: 19px;\n  height: 14px;\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAQCAYAAACcN8ZaAAACTklEQVRIS6XVWahNcRTH8c9FEsmTMpVXGTJ7UMqUWZnnByVkJpmHlDGJkMhQJJdMkcyJMpUhGZIHLx6QoUSmB1NL/63Tuefee07+tevsfdb/t797rd9a/zLUxFLMQkPFrXfYjnX4iRaoV9zWglFf8KwMa7CsSKH3+JRim2ET3mBrkfurCpsTMG9LyMh07EyKj9AIvXEIrf8D6AkmBMzvEkTmY3MOTBtswRFMw8QStLLQ/diLUaXCXMC1pDI3ZaYcfdLVFjtQtwior5iBx7iM81XBxNfuSaKTMaaSFwTMOHxAX3zDsWTqypieYSTqBwQaoDyDuZRS1TSlPcRG5SkdTQLz8DIBDAmR9DvCP2IgHmIXxhegOYCZaI+zCSjC/sGEKcOcw3ACPXLKkel1x1UMx0msx+I8mIj9jAG4jimp0+ogK0t4pCfO5JWzUpj+CH/krn4ppdXBxNzphttpczusxSJE18QajNOIymSrAkwTvMBxjM2DOYwRaI5XVWQm5taK1OqhFxbI1iD8wrlk9KhGpTDxRwyyaOF4+e7U+lMTXAy36KJYhcp0D12Tbw6iNkbjVLJAaMbEX5A8dRetkl6FzMTzCN6I2aiVAn9gGxam8V8IJjzRKZl8VU4JIhNP0RI1cjIRHxrXDYSnCsJk8Y3TV8b9LbzOK9uG5IOsm5agC4bmxVV1ewU3sTKDiUPvQRpaJej89UIHXERnfEdM5FLX87ThTrg5q31Q3i/ieIg9HdErndrFHrLVQoZw+GI1JpVwYEY292F5joeqfVl1AX8AD9eYsTVq3e0AAAAASUVORK5CYII=\") -16px 0; }\n\n.bg-instagram-black[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAQCAYAAACcN8ZaAAACTklEQVRIS6XVWahNcRTH8c9FEsmTMpVXGTJ7UMqUWZnnByVkJpmHlDGJkMhQJJdMkcyJMpUhGZIHLx6QoUSmB1NL/63Tuefee07+tevsfdb/t797rd9a/zLUxFLMQkPFrXfYjnX4iRaoV9zWglFf8KwMa7CsSKH3+JRim2ET3mBrkfurCpsTMG9LyMh07EyKj9AIvXEIrf8D6AkmBMzvEkTmY3MOTBtswRFMw8QStLLQ/diLUaXCXMC1pDI3ZaYcfdLVFjtQtwior5iBx7iM81XBxNfuSaKTMaaSFwTMOHxAX3zDsWTqypieYSTqBwQaoDyDuZRS1TSlPcRG5SkdTQLz8DIBDAmR9DvCP2IgHmIXxhegOYCZaI+zCSjC/sGEKcOcw3ACPXLKkel1x1UMx0msx+I8mIj9jAG4jimp0+ogK0t4pCfO5JWzUpj+CH/krn4ppdXBxNzphttpczusxSJE18QajNOIymSrAkwTvMBxjM2DOYwRaI5XVWQm5taK1OqhFxbI1iD8wrlk9KhGpTDxRwyyaOF4+e7U+lMTXAy36KJYhcp0D12Tbw6iNkbjVLJAaMbEX5A8dRetkl6FzMTzCN6I2aiVAn9gGxam8V8IJjzRKZl8VU4JIhNP0RI1cjIRHxrXDYSnCsJk8Y3TV8b9LbzOK9uG5IOsm5agC4bmxVV1ewU3sTKDiUPvQRpaJej89UIHXERnfEdM5FLX87ThTrg5q31Q3i/ieIg9HdErndrFHrLVQoZw+GI1JpVwYEY292F5joeqfVl1AX8AD9eYsTVq3e0AAAAASUVORK5CYII=\") 0 0; }\n\n@media only screen and (max-width: 1200px) {\n  nav.navbar.bootsnav[_ngcontent-%COMP%] {\n    padding-bottom: 20px; } }"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/top-menu/top-menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/top-menu/top-menu.component.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var menu_service_1 = __webpack_require__(/*! ../core/menu.service */ "./src/app/core/menu.service.ts");
var resize_service_1 = __webpack_require__(/*! ../core/resize.service */ "./src/app/core/resize.service.ts");
var TopMenuComponent = /** @class */ (function () {
    // menuItems: MenuItem[];
    function TopMenuComponent(menuService, resizeService, winRef) {
        this.menuService = menuService;
        this.resizeService = resizeService;
        this.winRef = winRef;
        this.isCollapsed = false;
        this.collapseState = 'collapsed';
    }
    TopMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuItems = this.menuService.getMenuItems();
        // this.menuService.getMenuItems().subscribe(menuItemss => this.menuItems = menuItemss);
        this.resizeSubscription = this.resizeService.onResize$
            .subscribe(function (size) { return _this.setIsCollapsed(size.outerWidth); });
        this.setIsCollapsed(this.winRef.outerWidth);
    };
    TopMenuComponent.prototype.ngOnDestroy = function () {
        if (this.resizeSubscription) {
            this.resizeSubscription.unsubscribe();
        }
    };
    TopMenuComponent.prototype.setIsCollapsed = function (width) {
        if (width <= 992) {
            this.isCollapsed = true;
            this.collapseState = 'collapsed';
        }
        else {
            this.isCollapsed = false;
            this.collapseState = 'shown';
        }
    };
    TopMenuComponent.prototype.setCollapsed = function () {
        var _this = this;
        if (this.winRef.outerWidth > 992) {
            return;
        }
        var collapsed = !this.isCollapsed;
        if (collapsed) {
            this.collapseState = 'collapsed';
            setTimeout(function () {
                _this.isCollapsed = collapsed;
            }, 350);
        }
        else {
            this.collapseState = 'shown';
            this.isCollapsed = collapsed;
        }
    };
    return TopMenuComponent;
}());
exports.TopMenuComponent = TopMenuComponent;


/***/ }),

/***/ "./src/app/top-menu/top-menu.module.ts":
/*!*********************************************!*\
  !*** ./src/app/top-menu/top-menu.module.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TopMenuModule = /** @class */ (function () {
    function TopMenuModule() {
    }
    return TopMenuModule;
}());
exports.TopMenuModule = TopMenuModule;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false,
    apiUrl: 'http://localhost:3000'
};


/***/ }),

/***/ "./src/main.server.ts":
/*!****************************!*\
  !*** ./src/main.server.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var app_server_module_ngfactory_1 = __webpack_require__(/*! ./app/app.server.module.ngfactory */ "./src/app/app.server.module.ngfactory.js");
exports.AppServerModuleNgFactory = app_server_module_ngfactory_1.AppServerModuleNgFactory;
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
var app_server_module_1 = __webpack_require__(/*! ./app/app.server.module */ "./src/app/app.server.module.ts");
exports.AppServerModule = app_server_module_1.AppServerModule;
exports.LAZY_MODULE_MAP = {};


/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./src/main.server.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\WEB-learning\projects\studio-alla\111-studio-alla-angular-6v\surfer-app\src\main.server.ts */"./src/main.server.ts");


/***/ }),

/***/ "@angular/animations":
/*!**************************************!*\
  !*** external "@angular/animations" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/animations");

/***/ }),

/***/ "@angular/animations/browser":
/*!**********************************************!*\
  !*** external "@angular/animations/browser" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/animations/browser");

/***/ }),

/***/ "@angular/common":
/*!**********************************!*\
  !*** external "@angular/common" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common");

/***/ }),

/***/ "@angular/common/http":
/*!***************************************!*\
  !*** external "@angular/common/http" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common/http");

/***/ }),

/***/ "@angular/core":
/*!********************************!*\
  !*** external "@angular/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "@angular/forms":
/*!*********************************!*\
  !*** external "@angular/forms" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/forms");

/***/ }),

/***/ "@angular/http":
/*!********************************!*\
  !*** external "@angular/http" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/http");

/***/ }),

/***/ "@angular/platform-browser":
/*!********************************************!*\
  !*** external "@angular/platform-browser" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser");

/***/ }),

/***/ "@angular/platform-browser/animations":
/*!*******************************************************!*\
  !*** external "@angular/platform-browser/animations" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser/animations");

/***/ }),

/***/ "@angular/platform-server":
/*!*******************************************!*\
  !*** external "@angular/platform-server" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-server");

/***/ }),

/***/ "@angular/router":
/*!**********************************!*\
  !*** external "@angular/router" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/router");

/***/ }),

/***/ "@angular/service-worker":
/*!******************************************!*\
  !*** external "@angular/service-worker" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/service-worker");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap":
/*!*********************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/accordion/accordion-config":
/*!************************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/accordion/accordion-config" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/accordion/accordion-config");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/accordion/accordion.module":
/*!************************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/accordion/accordion.module" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/accordion/accordion.module");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/alert/alert-config":
/*!****************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/alert/alert-config" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/alert/alert-config");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/alert/alert.module":
/*!****************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/alert/alert.module" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/alert/alert.module");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/buttons/buttons.module":
/*!********************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/buttons/buttons.module" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/buttons/buttons.module");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/carousel/carousel-config":
/*!**********************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/carousel/carousel-config" ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/carousel/carousel-config");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/carousel/carousel.module":
/*!**********************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/carousel/carousel.module" ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/carousel/carousel.module");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/collapse/collapse":
/*!***************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/collapse/collapse" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/collapse/collapse");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/collapse/collapse.module":
/*!**********************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/collapse/collapse.module" ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/collapse/collapse.module");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/datepicker/datepicker-config":
/*!**************************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/datepicker/datepicker-config" ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/datepicker/datepicker-config");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n":
/*!************************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/datepicker/datepicker.module":
/*!**************************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/datepicker/datepicker.module" ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/datepicker/datepicker.module");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar":
/*!*********************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-adapter":
/*!*************************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-adapter" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-adapter");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-parser-formatter":
/*!**********************************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-parser-formatter" ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-parser-formatter");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/dropdown/dropdown-config":
/*!**********************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/dropdown/dropdown-config" ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/dropdown/dropdown-config");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/dropdown/dropdown.module":
/*!**********************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/dropdown/dropdown.module" ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/dropdown/dropdown.module");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/modal/modal":
/*!*********************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/modal/modal" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/modal/modal");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/modal/modal-stack":
/*!***************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/modal/modal-stack" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/modal/modal-stack");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/modal/modal.module":
/*!****************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/modal/modal.module" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/modal/modal.module");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/pagination/pagination-config":
/*!**************************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/pagination/pagination-config" ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/pagination/pagination-config");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/pagination/pagination.module":
/*!**************************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/pagination/pagination.module" ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/pagination/pagination.module");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/popover/popover-config":
/*!********************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/popover/popover-config" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/popover/popover-config");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/popover/popover.module":
/*!********************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/popover/popover.module" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/popover/popover.module");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/progressbar/progressbar-config":
/*!****************************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/progressbar/progressbar-config" ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/progressbar/progressbar-config");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/progressbar/progressbar.module":
/*!****************************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/progressbar/progressbar.module" ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/progressbar/progressbar.module");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/rating/rating-config":
/*!******************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/rating/rating-config" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/rating/rating-config");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/rating/rating.module":
/*!******************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/rating/rating.module" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/rating/rating.module");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/tabset/tabset":
/*!***********************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/tabset/tabset" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/tabset/tabset");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/tabset/tabset-config":
/*!******************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/tabset/tabset-config" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/tabset/tabset-config");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/tabset/tabset.module":
/*!******************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/tabset/tabset.module" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/tabset/tabset.module");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/timepicker/timepicker-config":
/*!**************************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/timepicker/timepicker-config" ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/timepicker/timepicker-config");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/timepicker/timepicker.module":
/*!**************************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/timepicker/timepicker.module" ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/timepicker/timepicker.module");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/tooltip/tooltip-config":
/*!********************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/tooltip/tooltip-config" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/tooltip/tooltip-config");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/tooltip/tooltip.module":
/*!********************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/tooltip/tooltip.module" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/tooltip/tooltip.module");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/typeahead/typeahead-config":
/*!************************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/typeahead/typeahead-config" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/typeahead/typeahead-config");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap/typeahead/typeahead.module":
/*!************************************************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap/typeahead/typeahead.module" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap/typeahead/typeahead.module");

/***/ }),

/***/ "ngx-facebook":
/*!*******************************!*\
  !*** external "ngx-facebook" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ngx-facebook");

/***/ }),

/***/ "ngx-facebook/dist/esm/components/fb-page/fb-page":
/*!*******************************************************************!*\
  !*** external "ngx-facebook/dist/esm/components/fb-page/fb-page" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ngx-facebook/dist/esm/components/fb-page/fb-page");

/***/ }),

/***/ "ngx-facebook/dist/esm/facebook.module":
/*!********************************************************!*\
  !*** external "ngx-facebook/dist/esm/facebook.module" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ngx-facebook/dist/esm/facebook.module");

/***/ }),

/***/ "ngx-facebook/dist/esm/providers/facebook":
/*!***********************************************************!*\
  !*** external "ngx-facebook/dist/esm/providers/facebook" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ngx-facebook/dist/esm/providers/facebook");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs");

/***/ }),

/***/ "rxjs/operators":
/*!*********************************!*\
  !*** external "rxjs/operators" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs/operators");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map