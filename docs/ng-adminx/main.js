(self["webpackChunkample_admin_angular_lite"] = self["webpackChunkample_admin_angular_lite"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

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
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Approutes": function() { return /* binding */ Approutes; }
/* harmony export */ });
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/full/full.component */ 76729);

var Approutes = [
    {
        path: '',
        component: _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__.FullComponent,
        children: [
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
            {
                path: 'dashboard',
                loadChildren: function () { return __webpack_require__.e(/*! import() */ "src_app_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/dashboard.module */ 34814)).then(function (m) { return m.DashboardModule; }); }
            },
            {
                path: 'component',
                loadChildren: function () { return __webpack_require__.e(/*! import() */ "src_app_component_component_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./component/component.module */ 55051)).then(function (m) { return m.ComponentsModule; }); }
            }
        ]
    },
    {
        path: '**',
        redirectTo: '/dashboard'
    }
];


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/spinner.component */ 23812);



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
    AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-spinner");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _shared_spinner_component__WEBPACK_IMPORTED_MODULE_0__.SpinnerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
    return AppComponent;
}());



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 75835);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/full/full.component */ 76729);
/* harmony import */ var _shared_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/header-navigation/navigation.component */ 80496);
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/sidebar/sidebar.component */ 17500);
/* harmony import */ var _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/breadcrumb/breadcrumb.component */ 10419);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/spinner.component */ 23812);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 76894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
// import * as $ from 'jquery';


















var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelSpeed: 1,
    wheelPropagation: true,
    minScrollbarLength: 20
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
    AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__.AppComponent] });
    AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [
            {
                provide: _angular_common__WEBPACK_IMPORTED_MODULE_9__.LocationStrategy,
                useClass: _angular_common__WEBPACK_IMPORTED_MODULE_9__.PathLocationStrategy
            },
            {
                provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__.PERFECT_SCROLLBAR_CONFIG,
                useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
            }
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule,
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__.PerfectScrollbarModule,
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule.forRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_4__.Approutes, { useHash: false, relativeLinkResolution: 'legacy' })
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__.AppComponent,
        _shared_spinner_component__WEBPACK_IMPORTED_MODULE_6__.SpinnerComponent,
        _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__.FullComponent,
        _shared_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__.NavigationComponent,
        _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.SidebarComponent,
        _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__.PerfectScrollbarModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule] }); })();


/***/ }),

/***/ 76729:
/*!************************************************!*\
  !*** ./src/app/layouts/full/full.component.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullComponent": function() { return /* binding */ FullComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _shared_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/header-navigation/navigation.component */ 80496);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 76894);
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/sidebar/sidebar.component */ 17500);
/* harmony import */ var _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/breadcrumb/breadcrumb.component */ 10419);







var _c0 = function (a0) { return { "show-sidebar": a0 }; };
//declare var $: any;
var FullComponent = /** @class */ (function () {
    function FullComponent(router) {
        this.router = router;
        this.config = {};
        this.innerWidth = 0;
        this.defaultSidebar = '';
        this.showMobileMenu = false;
        this.expandLogo = false;
        this.sidebartype = 'full';
    }
    FullComponent.prototype.Logo = function () {
        this.expandLogo = !this.expandLogo;
    };
    FullComponent.prototype.ngOnInit = function () {
        if (this.router.url === '/') {
            this.router.navigate(['/starter']);
        }
        this.defaultSidebar = this.sidebartype;
        this.handleSidebar();
    };
    FullComponent.prototype.onResize = function () {
        this.handleSidebar();
    };
    FullComponent.prototype.handleSidebar = function () {
        this.innerWidth = window.innerWidth;
        if (this.innerWidth < 1170) {
            this.sidebartype = 'mini-sidebar';
        }
        else {
            this.sidebartype = this.defaultSidebar;
        }
    };
    FullComponent.prototype.toggleSidebarType = function () {
        switch (this.sidebartype) {
            case 'full':
                this.sidebartype = 'mini-sidebar';
                break;
            case 'mini-sidebar':
                this.sidebartype = 'full';
                break;
            default:
        }
    };
    FullComponent.ɵfac = function FullComponent_Factory(t) { return new (t || FullComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
    FullComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: FullComponent, selectors: [["app-full-layout"]], hostBindings: function FullComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("resize", function FullComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
        } }, decls: 27, vars: 7, consts: [["id", "main-wrapper", "dir", "ltr", "data-theme", "light", "data-layout", "vertical", "data-sidebar-position", "absolute", "data-header-position", "fixed", "data-boxed-layout", "full", 3, "ngClass"], ["data-navbarbg", "skin6", 1, "topbar"], [1, "d-flex", "top-navbar", "navbar-expand-md", "navbar-light"], ["data-logobg", "skin6", 1, "navbar-header", 3, "ngClass"], ["href", "javascript:void(0)", 1, "nav-toggler", "waves-effect", "waves-light", "d-block", "d-md-none", 3, "click"], [3, "ngClass"], ["href", "/", 1, "navbar-brand"], [1, "logo-icon"], ["src", "assets/images/logo-icon.png", "alt", "homepage", 1, "dark-logo"], [1, "logo-text"], ["src", "assets/images/logo-text.png", "alt", "homepage", 1, "dark-logo"], ["href", "javascript:void(0)", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "topbartoggler", "d-block", "d-md-none", "waves-effect", "waves-light"], [1, "ti-more"], ["id", "navbarSupportedContent", "data-navbarbg", "skin5", 1, "navbar-collapse", "collapse"], [1, "w-100", 3, "toggleSidebar"], ["data-sidebarbg", "skin6", 1, "left-sidebar", 3, "mouseover", "mouseout"], [1, "scroll-sidebar", 3, "perfectScrollbar"], [1, "page-wrapper"], [1, "container-fluid"], [1, "footer", "text-center"], ["href", "https://www.wrappixel.com"]], template: function FullComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "header", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "nav", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FullComponent_Template_a_click_4_listener() { return ctx.showMobileMenu = !ctx.showMobileMenu; });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "a", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "b", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "img", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "img", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "app-navigation", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("toggleSidebar", function FullComponent_Template_app_navigation_toggleSidebar_14_listener() { return ctx.toggleSidebarType(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "aside", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseover", function FullComponent_Template_aside_mouseover_15_listener() { return ctx.Logo(); })("mouseout", function FullComponent_Template_aside_mouseout_15_listener() { return ctx.Logo(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "app-sidebar");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "app-breadcrumb");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "footer", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " 2020 \u00A9 Ample Admin brought to you by ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "a", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "WrapPixel");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, ". ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](5, _c0, ctx.showMobileMenu));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-sidebartype", ctx.sidebartype);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.expandLogo ? "expand-logo" : "");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.showMobileMenu ? "ti-close" : "ti-menu");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("perfectScrollbar", ctx.config);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _shared_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_0__.NavigationComponent, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__.PerfectScrollbarDirective, _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.SidebarComponent, _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmdWxsLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return FullComponent;
}());



/***/ }),

/***/ 10419:
/*!***********************************************************!*\
  !*** ./src/app/shared/breadcrumb/breadcrumb.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbComponent": function() { return /* binding */ BreadcrumbComponent; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 45435);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 19773);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 39075);





var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(router, activatedRoute, titleService) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.pageInfo = Object.create(null);
        this.router.events
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.filter)(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd; }))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function () { return _this.activatedRoute; }))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (route) {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.filter)(function (route) { return route.outlet === 'primary'; }))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(function (route) { return route.data; }))
            .subscribe(function (event) {
            _this.titleService.setTitle(event['title']);
            _this.pageInfo = event;
        });
    }
    BreadcrumbComponent.prototype.ngOnInit = function () { };
    BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) { return new (t || BreadcrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Title)); };
    BreadcrumbComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: BreadcrumbComponent, selectors: [["app-breadcrumb"]], decls: 6, vars: 1, consts: [[1, "page-breadcrumb"], [1, "row"], [1, "col-6", "align-self-center"], [1, "page-title", "font-14", "text-uppercase", "font-medium", "mb-0"], [1, "col-6", "align-self-center", "d-flex", "justify-content-end"]], template: function BreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h4", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]("Tio Grasa");
        } }, encapsulation: 2 });
    return BreadcrumbComponent;
}());



/***/ }),

/***/ 80496:
/*!******************************************************************!*\
  !*** ./src/app/shared/header-navigation/navigation.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationComponent": function() { return /* binding */ NavigationComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);




//declare var $: any;
var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
        this.toggleSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.showSearch = false;
    }
    NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(); };
    NavigationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], outputs: { toggleSidebar: "toggleSidebar" }, decls: 36, vars: 0, consts: [[1, "navbar-nav", "float-left", "mr-auto"], [1, "navbar-nav", "float-right"], [1, "nav-item", "search-box"], ["role", "search", 1, "app-search", "d-none", "d-md-block", "mr-3"], ["type", "text", "placeholder", "Search...", 1, "form-control", "mt-0"], ["href", "", 1, "active"], [1, "fa", "fa-search"], ["fill", "#FF0017", "fill-rule", "nonzero", "width", "65px", "height", "45px", "viewBox", "0 0 50 34", "role", "img"], ["d", "M13.3.728c-2.102 2.34-3 3.732-3.482 5.389-.44 1.512-.207 2.76.671 3.626.697.69 1.437.947 2.717.947 1.041 0 1.932-.17 3.237-.615.715-.238 23.795-9.812 23.952-9.93a.03.03 0 0 0 0-.045c-.012-.012-5.075 1.3-11.254 2.918-6.174 1.612-11.468 2.986-11.763 3.048-.816.17-2.152.157-2.73-.025a2.52 2.52 0 0 1-1.605-1.505c-.126-.308-.145-.477-.145-1.086.007-.897.17-1.499.722-2.628.207-.42.37-.784.357-.797-.018-.012-.32.307-.677.703zM3.79 16.713c-2.184.495-3.67 2.434-3.771 4.93-.05 1.193.182 2.083.765 2.987.308.458 1.286 1.436 1.945 1.938 1.148.872 1.462 1.293 1.399 1.876-.044.364-.232.621-.602.797-.897.445-2.183-.107-3.231-1.387l-.232-.282v5.213l.42.132c.853.27 1.13.301 2.622.301 1.337 0 1.475-.012 1.914-.144 1.324-.414 2.403-1.317 3.005-2.503.113-.22.257-.54.32-.722l.119-.332v1.8l.006 1.807h4.266l.013-3.914.019-3.915 1.505 3.896 1.512 3.902 1.832.019 1.832.012V16.75h-4.266l-.013 3.551-.018 3.545-1.004-3.545-1.004-3.55H8.469v4.811c-.006 4.8-.006 4.818-.125 4.492-.301-.84-.904-1.606-1.85-2.346-.371-.289-.885-.697-1.149-.904-.621-.49-.89-.878-.89-1.292 0-.264.03-.345.225-.552.257-.289.54-.402.991-.395.496.012 1.242.407 1.794.953l.44.433v-4.686l-.402-.163c-.847-.333-1.324-.427-2.359-.452-.677-.013-1.091.006-1.355.063zM45.056 16.744c-.25.063-.702.232-.997.383-.91.451-1.794 1.418-2.196 2.396-.088.22-.163.408-.175.414-.013.013-.12-.182-.239-.439-.728-1.562-2.164-2.428-4.435-2.679-.464-.056-2.096-.069-5.515-.056l-4.855.019-1.073 2.283-1.073 2.278-.019-2.297-.012-2.296h-4.392v16.374h4.392v-3.438l.006-3.431 1.324 3.431 1.33 3.438h8.318l.02-2.246c.006-1.23.006-2.704 0-3.274-.007-.571.012-.992.037-.942.025.05.564 1.525 1.198 3.275l1.148 3.18 2.641.032c1.45.02 3.194.05 3.877.076 1.105.031 1.286.018 1.788-.1a4.936 4.936 0 0 0 3.275-2.592c.377-.753.515-1.361.552-2.365.082-2.152-.552-3.319-2.647-4.893-1.468-1.098-1.788-1.638-1.35-2.259.44-.62 1.463-.583 2.366.088.376.276 1.085 1.004 1.085 1.11 0 .032.032.057.063.057.038 0 .063-.878.063-2.503V17.27l-.364-.163c-.715-.32-1.324-.433-2.553-.458-.948-.019-1.205-.006-1.588.094zM31.041 27.773l-.018 3.375-1.487-3.588c-.822-1.97-1.493-3.608-1.493-3.639 0-.025.67-1.443 1.486-3.143l1.494-3.1.018 3.363c.007 1.851.007 4.881 0 6.732zm5.603-7.215c.608.345.928 1.035.853 1.87-.088 1.091-.778 1.844-1.688 1.85h-.364v-3.971l.433.032c.333.025.515.081.766.22zm6.198 4.869c.295.307.822.784 1.167 1.06.345.276.759.608.928.746.954.803.703 1.939-.477 2.152-.771.138-2.139-.615-2.766-1.524-.1-.145-.207-.257-.232-.257-.032 0-.063.614-.07 1.36l-.018 1.356-.96-1.989c-.533-1.098-.954-1.995-.941-2.001.652-.326.834-.458 1.248-.86.377-.37.534-.59.747-1.016l.27-.546.282.477c.157.27.515.722.822 1.042z"], ["ngbDropdown", "", "placement", "bottom-right", 1, "nav-item", "dropdown"], ["ngbDropdownToggle", "", "href", "javascript:void(0)", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "text-muted", "waves-effect", "waves-dark", "pro-pic"], ["src", "assets/images/users/1.jpg", "alt", "user", "width", "31", 1, "rounded-circle"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "user-dd"], ["href", "javascript:void(0)", 1, "dropdown-item"], [1, "ti-user", "m-r-5", "m-l-5"], [1, "ti-wallet", "m-r-5", "m-l-5"], [1, "ti-email", "m-r-5", "m-l-5"], [1, "dropdown-divider"], [1, "ti-settings", "m-r-5", "m-l-5"], [1, "fa", "fa-power-off", "m-r-5", "m-l-5"], [1, "p-l-30", "p-10"], ["href", "javascript:void(0)", 1, "btn", "btn-sm", "btn-success", "btn-rounded"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ul", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "La p\u00E1gina de zapatillas Nike");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " My Profile");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " My Balance");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Inbox");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Account Setting");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Logout");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "View Profile");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdownMenu], encapsulation: 2 });
    return NavigationComponent;
}());



/***/ }),

/***/ 64456:
/*!**********************************************!*\
  !*** ./src/app/shared/sidebar/menu-items.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ROUTES": function() { return /* binding */ ROUTES; }
/* harmony export */ });
var ROUTES = [
    {
        path: '',
        title: 'Personal',
        icon: 'mdi mdi-dots-horizontal',
        class: 'nav-small-cap',
        extralink: true,
        submenu: []
    },
    {
        path: '/dashboard',
        title: 'Dashboard',
        icon: 'mdi mdi-gauge',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '',
        title: 'UI Components',
        icon: 'mdi mdi-dots-horizontal',
        class: 'nav-small-cap',
        extralink: true,
        submenu: []
    },
    {
        path: '/component/card',
        title: 'Card',
        icon: 'mdi mdi-blur-radial',
        class: '',
        extralink: false,
        submenu: []
    },
    // {
    //   path: '/component/accordion',
    //   title: 'Accordion',
    //   icon: 'mdi mdi-equal',
    //   class: '',
    //   extralink: false,
    //   submenu: []
    // },
    // {
    //   path: '/component/alert',
    //   title: 'Alert',
    //   icon: 'mdi mdi-message-bulleted',
    //   class: '',
    //   extralink: false,
    //   submenu: []
    // },
    {
        path: '/component/carousel',
        title: 'Carousel',
        icon: 'mdi mdi-view-carousel',
        class: '',
        extralink: false,
        submenu: []
    },
    // {
    //   path: '/component/dropdown',
    //   title: 'Dropdown',
    //   icon: 'mdi mdi-arrange-bring-to-front',
    //   class: '',
    //   extralink: false,
    //   submenu: []
    // },
    // {
    //   path: '/component/modal',
    //   title: 'Modal',
    //   icon: 'mdi mdi-tablet',
    //   class: '',
    //   extralink: false,
    //   submenu: []
    // },
    // {
    //   path: '/component/pagination',
    //   title: 'Pagination',
    //   icon: 'mdi mdi-backburger',
    //   class: '',
    //   extralink: false,
    //   submenu: []
    // },
    // {
    //   path: '/component/poptool',
    //   title: 'Popover & Tooltip',
    //   icon: 'mdi mdi-image-filter-vintage',
    //   class: '',
    //   extralink: false,
    //   submenu: []
    // },
    // {
    //   path: '/component/progressbar',
    //   title: 'Progressbar',
    //   icon: 'mdi mdi-poll',
    //   class: '',
    //   extralink: false,
    //   submenu: []
    // },
    {
        path: '/component/rating',
        title: 'Ratings',
        icon: 'mdi mdi-bandcamp',
        class: '',
        extralink: false,
        submenu: []
    },
    // {
    //   path: '/component/tabs',
    //   title: 'Tabs',
    //   icon: 'mdi mdi-sort-variant',
    //   class: '',
    //   extralink: false,
    //   submenu: []
    // },
    // {
    //   path: '/component/timepicker',
    //   title: 'Timepicker',
    //   icon: 'mdi mdi-calendar-clock',
    //   class: '',
    //   extralink: false,
    //   submenu: []
    // },
    // {
    //   path: '/component/buttons',
    //   title: 'Button',
    //   icon: 'mdi mdi-toggle-switch',
    //   class: '',
    //   extralink: false,
    //   submenu: []
    // },
    // {
    //   path: '/component/toast',
    //   title: 'Toast',
    //   icon: 'mdi mdi-alert',
    //   class: '',
    //   extralink: false,
    //   submenu: []
    // }
];


/***/ }),

/***/ 17500:
/*!*****************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": function() { return /* binding */ SidebarComponent; }
/* harmony export */ });
/* harmony import */ var _menu_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-items */ 64456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);





var _c0 = function (a0) { return [a0]; };
function SidebarComponent_li_2_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidebarComponent_li_2_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); var sidebarnavItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.addExpandClass(sidebarnavItem_r1.title); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var sidebarnavItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", sidebarnavItem_r1.class === "" ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, sidebarnavItem_r1.path) : null)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, sidebarnavItem_r1.class))("routerLinkActive", sidebarnavItem_r1.submenu.length != 0 ? "" : "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, sidebarnavItem_r1.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](sidebarnavItem_r1.title);
} }
function SidebarComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SidebarComponent_li_2_a_1_Template, 4, 11, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var sidebarnavItem_r1 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r0.showMenu === sidebarnavItem_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", sidebarnavItem_r1.submenu.length != 0 ? "" : "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !sidebarnavItem_r1.extralink);
} }
//declare var $: any;
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(modalService, router, route) {
        this.modalService = modalService;
        this.router = router;
        this.route = route;
        this.showMenu = '';
        this.showSubMenu = '';
        this.sidebarnavItems = [];
    }
    // this is for the open close
    SidebarComponent.prototype.addExpandClass = function (element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    };
    // End open close
    SidebarComponent.prototype.ngOnInit = function () {
        this.sidebarnavItems = _menu_items__WEBPACK_IMPORTED_MODULE_0__.ROUTES.filter(function (sidebarnavItem) { return sidebarnavItem; });
    };
    SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute)); };
    SidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 3, vars: 1, consts: [[1, "sidebar-nav", "pt-3"], ["id", "sidebarnav"], ["class", "sidebar-item", 3, "active", "routerLinkActive", 4, "ngFor", "ngForOf"], [1, "sidebar-item", 3, "routerLinkActive"], ["class", "sidebar-link waves-effect waves-dark", 3, "routerLink", "ngClass", "routerLinkActive", "click", 4, "ngIf"], [1, "sidebar-link", "waves-effect", "waves-dark", 3, "routerLink", "ngClass", "routerLinkActive", "click"], [3, "ngClass"], [1, "hide-menu"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SidebarComponent_li_2_Template, 2, 4, "li", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.sidebarnavItems);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass], encapsulation: 2 });
    return SidebarComponent;
}());



/***/ }),

/***/ 23812:
/*!*********************************************!*\
  !*** ./src/app/shared/spinner.component.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpinnerComponent": function() { return /* binding */ SpinnerComponent; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);





function SpinnerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent(router, document) {
        var _this = this;
        this.router = router;
        this.document = document;
        this.isSpinnerVisible = true;
        this.backgroundColor = 'rgba(0, 115, 170, 0.69)';
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationStart) {
                _this.isSpinnerVisible = true;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationCancel ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationError) {
                _this.isSpinnerVisible = false;
            }
        }, function () {
            _this.isSpinnerVisible = false;
        });
    }
    SpinnerComponent.prototype.ngOnDestroy = function () {
        this.isSpinnerVisible = false;
    };
    SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT)); };
    SpinnerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerComponent, selectors: [["app-spinner"]], inputs: { backgroundColor: "backgroundColor" }, decls: 1, vars: 1, consts: [["class", "preloader", 4, "ngIf"], [1, "preloader"], [1, "spinner"], [1, "double-bounce1"], [1, "double-bounce2"]], template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SpinnerComponent_div_0_Template, 4, 0, "div", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSpinnerVisible);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], encapsulation: 2 });
    return SpinnerComponent;
}());



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map