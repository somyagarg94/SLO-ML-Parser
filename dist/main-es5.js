function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./top-bar/top-bar.component */
    "./src/app/top-bar/top-bar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      consts: [[1, "container"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-top-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_1__["TopBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["p[_ngcontent-%COMP%] {\r\n  font-family: Lato;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7Ozs7Q0FJQyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgZm9udC1mYW1pbHk6IExhdG87XHJcbn1cclxuXHJcbi8qXHJcbkNvcHlyaWdodCBHb29nbGUgTExDLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG5Vc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0XHJcbmNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHA6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcclxuKi8iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_json_viewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-json-viewer */
    "./node_modules/ngx-json-viewer/__ivy_ngcc__/ngx-json-viewer.js");
    /* harmony import */


    var ng2_ace_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng2-ace-editor */
    "./node_modules/ng2-ace-editor/__ivy_ngcc__/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./top-bar/top-bar.component */
    "./src/app/top-bar/top-bar.component.ts");
    /* harmony import */


    var _center_box_left_center_box_left_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./center-box-left/center-box-left.component */
    "./src/app/center-box-left/center-box-left.component.ts"); //good until Angular 5 update this to Angular 9 plugin before prod release
    //import { AceEditorModule }from 'ngx-ace-editor-wrapper'; //compatible with Angular 9


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ngx_json_viewer__WEBPACK_IMPORTED_MODULE_4__["NgxJsonViewerModule"], ng2_ace_editor__WEBPACK_IMPORTED_MODULE_5__["AceEditorModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([{
        path: '',
        component: _center_box_left_center_box_left_component__WEBPACK_IMPORTED_MODULE_8__["CenterBoxLeftComponent"]
      }])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_7__["TopBarComponent"], _center_box_left_center_box_left_component__WEBPACK_IMPORTED_MODULE_8__["CenterBoxLeftComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ngx_json_viewer__WEBPACK_IMPORTED_MODULE_4__["NgxJsonViewerModule"], ng2_ace_editor__WEBPACK_IMPORTED_MODULE_5__["AceEditorModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ngx_json_viewer__WEBPACK_IMPORTED_MODULE_4__["NgxJsonViewerModule"], ng2_ace_editor__WEBPACK_IMPORTED_MODULE_5__["AceEditorModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([{
            path: '',
            component: _center_box_left_center_box_left_component__WEBPACK_IMPORTED_MODULE_8__["CenterBoxLeftComponent"]
          }])],
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_7__["TopBarComponent"], _center_box_left_center_box_left_component__WEBPACK_IMPORTED_MODULE_8__["CenterBoxLeftComponent"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/center-box-left/center-box-left.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/center-box-left/center-box-left.component.ts ***!
    \**************************************************************/

  /*! exports provided: CenterBoxLeftComponent */

  /***/
  function srcAppCenterBoxLeftCenterBoxLeftComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CenterBoxLeftComponent", function () {
      return CenterBoxLeftComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng2_ace_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ng2-ace-editor */
    "./node_modules/ng2-ace-editor/__ivy_ngcc__/index.js");

    var CenterBoxLeftComponent = /*#__PURE__*/function () {
      function CenterBoxLeftComponent() {
        _classCallCheck(this, CenterBoxLeftComponent);

        this.data = {
          'simple key': 'simple value',
          'numbers': 1234567,
          'simple list': ['value1', 22222, 'value3'],
          'special value': undefined,
          'owner': null,
          'simple obect': {
            'simple key': 'simple value',
            'numbers': 1234567,
            'simple list': ['value1', 22222, 'value3'],
            'simple obect': {
              'key1': 'value1',
              'key2': 22222,
              'key3': 'value3'
            }
          }
        };
      }

      _createClass(CenterBoxLeftComponent, [{
        key: "code",
        get: function get() {
          return JSON.stringify(this.data, null, 2);
        },
        set: function set(v) {
          try {
            this.data = JSON.parse(v);
          } catch (e) {
            console.log('error occored while you were typing the JSON');
          }

          ;
        }
      }]);

      return CenterBoxLeftComponent;
    }();

    CenterBoxLeftComponent.ɵfac = function CenterBoxLeftComponent_Factory(t) {
      return new (t || CenterBoxLeftComponent)();
    };

    CenterBoxLeftComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CenterBoxLeftComponent,
      selectors: [["app-center-box-left"]],
      decls: 12,
      vars: 2,
      consts: [[2, "width", "100%"], [2, "display", "inline-block", "float", "left"], [2, "color", "black", "font-weight", "bold"], ["mode", "json", 2, "height", "600px", "width", "600px", "background-color", "#357791", "font-size", "1.0em", "font-color", "red", 3, "text", "textChange"], [2, "display", "inline-block", "float", "left", "vertical-align", "middle", "margin-top", "450px", "padding-left", "150px", "padding-right", "150px"], ["type", "button"], [2, "display", "inline-block", "vertical-align", "top", "float", "right"], [2, "height", "600px", "width", "600px", "background-color", "#357791", "font-size", "1.0em", "font-color", "red", 3, "text", "textChange"]],
      template: function CenterBoxLeftComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "SLO ML Template");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ace-editor", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("textChange", function CenterBoxLeftComponent_Template_ace_editor_textChange_4_listener($event) {
            return ctx.code = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Click Me!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Terraform Template");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ace-editor", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("textChange", function CenterBoxLeftComponent_Template_ace_editor_textChange_11_listener($event) {
            return ctx.code = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", ctx.code);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", ctx.code);
        }
      },
      directives: [ng2_ace_editor__WEBPACK_IMPORTED_MODULE_1__["AceEditorComponent"]],
      styles: ["p[_ngcontent-%COMP%] {\n  font-family: Lato;\n}\n\n.ngx-json-viewer.segment.segment-main.toggler[_ngcontent-%COMP%]{\n  color:green\n}\n\n#wrapper[_ngcontent-%COMP%] {\n    border: 1px solid blue;\n}\n\n#div1[_ngcontent-%COMP%] {\n    display: inline-block;\n    width:40%;\n    border: 1px solid red;\n}\n\n#div2[_ngcontent-%COMP%] {\n    display: inline-block;\n    width:40%;\n    border: 1px solid green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2VudGVyLWJveC1sZWZ0L2NlbnRlci1ib3gtbGVmdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixTQUFTO0lBQ1QscUJBQXFCO0FBQ3pCOztBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFNBQVM7SUFDVCx1QkFBdUI7QUFDM0I7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FpR0MiLCJmaWxlIjoic3JjL2FwcC9jZW50ZXItYm94LWxlZnQvY2VudGVyLWJveC1sZWZ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgZm9udC1mYW1pbHk6IExhdG87XG59XG5cbi5uZ3gtanNvbi12aWV3ZXIuc2VnbWVudC5zZWdtZW50LW1haW4udG9nZ2xlcntcbiAgY29sb3I6Z3JlZW5cbn1cblxuI3dyYXBwZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XG59XG4jZGl2MSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOjQwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59XG4jZGl2MiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOjQwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcbn1cblxuLypSZW1vdmUgYmVsb3cgaWYgbmVlZGVkXG5cbiR0eXBlLWNvbG9yczogKFxuICBzdHJpbmc6ICNGRjZCNkIsXG4gIG51bWJlcjogIzAwOTY4OCxcbiAgYm9vbGVhbjogI2I5MzhhNCxcbiAgZGF0ZTogIzA1NjY4RCxcblxuICBhcnJheTogIzk5OSxcbiAgb2JqZWN0OiAjOTk5LFxuICBmdW5jdGlvbjogIzk5OSxcblxuICAnbnVsbCc6ICNmZmYsXG4gIHVuZGVmaW5lZDogI2ZmZlxuKTtcblxuLm5neC1qc29uLXZpZXdlciB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgLnNlZ21lbnQge1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBtYXJnaW46IDFweCAxcHggMXB4IDEycHg7XG5cbiAgICAuc2VnbWVudC1tYWluIHtcbiAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcblxuICAgICAgLnRvZ2dsZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTRweDtcbiAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xuICAgICAgICBmb250LXNpemU6IC44ZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgY29sb3I6ICM3ODc4Nzg7XG5cbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBjb250ZW50OiBcIuKWulwiO1xuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2UtaW47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnNlZ21lbnQta2V5IHtcbiAgICAgICAgY29sb3I6ICM0RTE4N0M7XG4gICAgICB9XG5cbiAgICAgIC5zZWdtZW50LXNlcGFyYXRvciB7XG4gICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgfVxuXG4gICAgICAuc2VnbWVudC12YWx1ZSB7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jaGlsZHJlbiB7XG4gICAgICBtYXJnaW4tbGVmdDogMTJweDtcbiAgICB9XG4gIH1cblxuICBAZWFjaCAkdHlwZSwgJGNvbG9yIGluICR0eXBlLWNvbG9ycyB7XG4gICAgLnNlZ21lbnQtdHlwZS0jeyR0eXBlfSA+IC5zZWdtZW50LW1haW4gPiAuc2VnbWVudC12YWx1ZSB7XG4gICAgICBjb2xvcjogJGNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC8vIHNwZWNpYWwgY2FzZXMgbmVlZCBoaWdobGlnaHR0ZWRcbiAgLnNlZ21lbnQtdHlwZS1udWxsID4gLnNlZ21lbnQtbWFpbiA+IC5zZWdtZW50LXZhbHVlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIH1cbiAgLnNlZ21lbnQtdHlwZS11bmRlZmluZWQgPiAuc2VnbWVudC1tYWluIHtcbiAgICAmID4gLnNlZ21lbnQta2V5IHtcbiAgICAgIGNvbG9yOiAjOTk5O1xuICAgIH1cbiAgICAmID4gLnNlZ21lbnQtdmFsdWUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTtcbiAgICB9XG4gIH1cbiAgLnNlZ21lbnQtdHlwZS1vYmplY3QgPiAuc2VnbWVudC1tYWluLFxuICAuc2VnbWVudC10eXBlLWFycmF5ID4gLnNlZ21lbnQtbWFpbiB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxuXG4gIC5leHBhbmRlZCA+IC50b2dnbGVyOjphZnRlciB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICB9XG5cbiAgLmV4cGFuZGFibGUsXG4gIC5leHBhbmRhYmxlID4gLnRvZ2dsZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuKi9cblxuXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CenterBoxLeftComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-center-box-left',
          templateUrl: './center-box-left.component.html',
          styleUrls: ['./center-box-left.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/top-bar/top-bar.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/top-bar/top-bar.component.ts ***!
    \**********************************************/

  /*! exports provided: TopBarComponent */

  /***/
  function srcAppTopBarTopBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopBarComponent", function () {
      return TopBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/"];
    };

    var TopBarComponent = /*#__PURE__*/function () {
      function TopBarComponent() {
        _classCallCheck(this, TopBarComponent);
      }

      _createClass(TopBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TopBarComponent;
    }();

    TopBarComponent.ɵfac = function TopBarComponent_Factory(t) {
      return new (t || TopBarComponent)();
    };

    TopBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TopBarComponent,
      selectors: [["app-top-bar"]],
      decls: 3,
      vars: 2,
      consts: [[3, "routerLink"]],
      template: function TopBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "SLO - ML Terraform Parser");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wLWJhci90b3AtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Q0FJQyIsImZpbGUiOiJzcmMvYXBwL3RvcC1iYXIvdG9wLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuQ29weXJpZ2h0IEdvb2dsZSBMTEMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcblVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXRcclxuY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cDovL2FuZ3VsYXIuaW8vbGljZW5zZVxyXG4qLyJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-top-bar',
          templateUrl: './top-bar.component.html',
          styleUrls: ['./top-bar.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/somgarg/Documents/somya-personal-code/research/JSON-Parser/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map