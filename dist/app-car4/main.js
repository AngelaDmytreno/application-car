(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\vova\app-car4\src\main.ts */"zUnb");


/***/ }),

/***/ "2UJk":
/*!****************************************!*\
  !*** ./src/app/menu-item/menu-item.ts ***!
  \****************************************/
/*! exports provided: MenuItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItem", function() { return MenuItem; });
class MenuItem {
    constructor(title, icon, isSelected, path, ariaLabel, url) {
        this.title = title;
        this.icon = icon;
        this.isSelected = isSelected;
        this.path = path;
        this.ariaLabel = ariaLabel;
        this.url = url;
    }
}


/***/ }),

/***/ "7jlE":
/*!******************************************************!*\
  !*** ./src/app/dealers/dealers/dealers.component.ts ***!
  \******************************************************/
/*! exports provided: DealersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealersComponent", function() { return DealersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../table/table.component */ "tc3l");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");



class DealersComponent {
    constructor() { }
    ngOnInit() {
    }
}
DealersComponent.ɵfac = function DealersComponent_Factory(t) { return new (t || DealersComponent)(); };
DealersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DealersComponent, selectors: [["app-daelrspage"]], decls: 6, vars: 0, consts: [[1, "dealers__conatainer"], [1, "example-button-row"], ["mat-raised-button", "", "color", "primary"]], template: function DealersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add dealers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_table_table_component__WEBPACK_IMPORTED_MODULE_1__["TableComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: [".dealers__conatainer[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: row;\n}\n\n.example-button-row[_ngcontent-%COMP%] {\n  display: table-cell;\n  width: 490px;\n}\n\n.example-button-row[_ngcontent-%COMP%]   .mat-button-base[_ngcontent-%COMP%] {\n  margin: 8px 8px 8px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkZWFsZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFJQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBQ0UscUJBQUE7QUFERiIsImZpbGUiOiJkZWFsZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlYWxlcnNfX2NvbmF0YWluZXJ7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG5cclxuXHJcbi5leGFtcGxlLWJ1dHRvbi1yb3cge1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgd2lkdGg6IDQ5MHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1idXR0b24tcm93IC5tYXQtYnV0dG9uLWJhc2Uge1xyXG4gIG1hcmdpbjogOHB4IDhweCA4cHggMDtcclxufVxyXG5cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: routes, HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "cPhq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] }
];
class HomeRoutingModule {
}
HomeRoutingModule.ɵfac = function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); };
HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "BoGK":
/*!***************************************************!*\
  !*** ./src/app/dealers/dealers-routing.module.ts ***!
  \***************************************************/
/*! exports provided: routes, DealersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealersRoutingModule", function() { return DealersRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dealers_dealers_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dealers/dealers.component */ "7jlE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'dealers', component: _dealers_dealers_component__WEBPACK_IMPORTED_MODULE_1__["DealersComponent"] }
];
class DealersRoutingModule {
}
DealersRoutingModule.ɵfac = function DealersRoutingModule_Factory(t) { return new (t || DealersRoutingModule)(); };
DealersRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DealersRoutingModule });
DealersRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DealersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "Ef5z":
/*!**************************************************!*\
  !*** ./src/app/menu-item/menu-item.component.ts ***!
  \**************************************************/
/*! exports provided: MenuItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItemComponent", function() { return MenuItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




class MenuItemComponent {
    constructor(router) {
        this.router = router;
        this.lineStyleVisible = { 'line-visible': true };
        this.lineStyleUnVisible = { 'line-unvisible': true };
    }
    ngOnInit() {
        this.router.events.subscribe((e) => {
            if (e.url) {
                if (e.url === this.menuItem.url || (e.url === '/' && this.menuItem.url === '/home')) {
                    this.visibility = this.lineStyleVisible;
                }
                else if (e.url !== this.menuItem.url) {
                    this.visibility = this.lineStyleUnVisible;
                }
            }
        });
    }
}
MenuItemComponent.ɵfac = function MenuItemComponent_Factory(t) { return new (t || MenuItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
MenuItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuItemComponent, selectors: [["app-menu-item"]], inputs: { menuItem: ["menu-item", "menuItem"] }, decls: 8, vars: 4, consts: [[1, "menu__item"], [1, "menu__item-icon"], ["routerLinkActive", "active-link", 1, "menu__link", 3, "routerLink"], ["aria-label", "Trololo", "aria-hidden", "false"], [3, "ngClass"]], template: function MenuItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx.menuItem.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.menuItem.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.menuItem.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.visibility);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: [".menu__item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  cursor: pointer;\n}\n\n.menu__link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 4.7vw;\n  margin: 0 auto;\n  transition: 0.1s;\n}\n\n.menu__link[_ngcontent-%COMP%]:hover {\n  color: gold;\n}\n\n.line-visible[_ngcontent-%COMP%] {\n  width: 3px;\n  height: 40px;\n  background-color: #fff;\n}\n\n.line-unvisible[_ngcontent-%COMP%] {\n  width: 3px;\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG1lbnUtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUNBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFBQTtFQUNFLFdBQUE7QUFHRjs7QUFEQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFJRjs7QUFGQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBQUtGIiwiZmlsZSI6Im1lbnUtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51X19pdGVte1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5tZW51X19saW5re1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogNC43dnc7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgdHJhbnNpdGlvbjogLjFzO1xyXG59XHJcbi5tZW51X19saW5rOmhvdmVye1xyXG4gIGNvbG9yOiBnb2xkO1xyXG59XHJcbi5saW5lLXZpc2libGV7XHJcbiAgd2lkdGg6IDNweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG4ubGluZS11bnZpc2libGV7XHJcbiAgd2lkdGg6IDNweDtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn0iXX0= */"] });


/***/ }),

/***/ "FUlj":
/*!*******************************************!*\
  !*** ./src/app/in-memory-data.service.ts ***!
  \*******************************************/
/*! exports provided: InMemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return InMemoryDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class InMemoryDataService {
    createDb() {
        let cars = [
            {
                id: '0308202883',
                brand: 'Chevrolet',
                model: 'Camaro Z/28',
                year: 1967,
                color: 'red',
                class: 'muscle car',
                category: 'coupe',
                image: './assets/images/z28-camaro.jpg',
                liked: false,
                newItem: false
            },
            {
                id: '0127594376',
                brand: 'Pagani',
                model: 'Huayra BC',
                year: null,
                color: 'white',
                class: 'sport car',
                category: 'coupe',
                image: './assets/images/pagani-huayra.jpg',
                liked: false,
                newItem: false
            },
            {
                id: '4728482911',
                brand: 'McLaren',
                model: 'P1',
                year: null,
                color: 'white',
                class: 'sport',
                category: 'coupe',
                image: './assets/images/mclaren-p1.jpg',
                liked: true,
                newItem: false
            },
            {
                id: '4242867698',
                brand: 'Toyota',
                model: 'Celica',
                year: null,
                color: 'black',
                class: 'sport',
                category: 'coupe',
                image: './assets/images/toyota-celica.jpg',
                liked: false,
                newItem: false
            },
            {
                id: '9285516267',
                brand: 'Ford',
                model: 'GT',
                year: 2006,
                color: 'white',
                class: 'sport',
                category: 'roadster',
                image: './assets/images/ford-gt.jpg',
                liked: false,
                newItem: false
            },
            {
                id: '8665532184',
                brand: 'Audi',
                model: 'A6',
                year: 2015,
                color: 'silver',
                class: 'executive car',
                category: 'sedan',
                image: './assets/images/audi-a6.jpg',
                liked: false,
                newItem: false
            },
            {
                id: '8992876242',
                brand: 'Jeep',
                model: 'Wrangler',
                year: 2011,
                color: 'yellow',
                category: 'offroader',
                image: './assets/images/jeep-wrangler.jpg',
                liked: true,
                newItem: false
            },
            {
                id: '8440038264',
                brand: 'Toyota',
                model: 'FJ Cruiser',
                year: 2006,
                color: 'aquamarine',
                category: 'offroader',
                class: 'crossover',
                image: './assets/images/toyota-fj-cruiser.jpg',
                liked: false,
                newItem: false
            },
            {
                id: '0474584043',
                brand: 'Toyota',
                model: 'Rav4',
                year: 2019,
                color: 'white',
                category: 'offroader',
                class: 'crossover',
                image: './assets/images/toyota-rav4.jpg',
                liked: false,
                newItem: false
            },
            {
                id: '8480304426',
                brand: 'Porsche',
                model: '911 GT2 RS',
                year: null,
                color: 'red',
                class: 'sport',
                category: 'coupe',
                image: './assets/images/porsche-911-gt2.jpg',
                liked: false,
                newItem: false
            },
            {
                id: '0776681260',
                brand: 'Kenworth',
                model: 'T700',
                year: null,
                color: 'black',
                image: './assets/images/kenworth-t700.jpg',
                liked: false,
                newItem: false
            },
            {
                id: '8730522046',
                brand: 'Porsche',
                model: 'Boxster S',
                year: null,
                color: 'blue',
                class: 'sport',
                category: 'roadster',
                image: './assets/images/porsche-boxter.jpg',
                liked: false,
                newItem: false
            },
            {
                id: '5087979074',
                brand: 'BMW',
                model: 'X5',
                year: null,
                color: 'blue',
                category: 'offroader',
                liked: false,
                newItem: false
            },
            {
                id: '2825286862',
                brand: 'Honda',
                model: 'Integra Type R',
                year: null,
                color: 'black',
                category: 'sedan',
                liked: false,
                newItem: false
            },
            {
                id: '6693123606',
                brand: 'BMW',
                model: 'Z8',
                year: null,
                color: 'red',
                category: 'roadster',
                liked: false,
                newItem: false
            },
            {
                id: '0279543552',
                brand: 'Subaru',
                model: 'Impreza',
                year: null,
                color: 'blue',
                class: 'sport',
                category: 'sedan',
                liked: false,
                newItem: false
            },
            {
                id: '0183253615',
                brand: 'BMW',
                model: 'M3',
                year: null,
                color: 'white',
                category: 'coupe',
                liked: false,
                newItem: false
            },
            {
                id: '7464518654',
                brand: 'Aston Martin',
                model: 'DB5',
                year: null,
                color: 'green',
                category: 'coupe',
                liked: false,
                newItem: false
            },
            {
                id: '8198524721',
                brand: 'Jaguar',
                model: 'XK',
                year: null,
                color: 'red',
                category: 'coupe',
                liked: false,
                newItem: false
            },
            {
                id: '0776779607',
                brand: 'Volkswagen',
                model: 'Classical Bus',
                year: 1962,
                color: 'yellow',
                liked: false,
                newItem: false
            },
            {
                id: '7885466312',
                brand: 'Chevrolet',
                model: 'Corvette',
                year: 1957,
                color: 'red',
                class: 'retro',
                category: 'coupe',
                image: './assets/images/chevrolet-corvette.jpg',
                liked: false,
                newItem: false
            },
            {
                id: '4619734159',
                brand: 'Ford',
                model: 'Model B',
                year: 1932,
                color: 'yellow',
                category: 'coupe',
                liked: false,
                newItem: false
            },
            {
                id: '4249123539',
                brand: 'BMW',
                model: 'Z4',
                year: null,
                color: 'black',
                category: 'roadster',
                liked: false,
                newItem: false
            },
            {
                id: '6046771395',
                brand: 'Toyota',
                model: 'Corolla',
                year: null,
                color: 'black',
                category: 'sedan',
                liked: false,
                newItem: false
            },
            {
                id: '5244394239',
                brand: 'Bentley',
                model: 'Continental GT',
                year: 2010,
                color: 'red',
                category: 'coupe',
                liked: false,
                newItem: false
            },
            {
                id: '3495135933',
                brand: 'Ford',
                model: 'Mustang',
                year: 1964,
                color: 'white',
                category: 'coupe',
                liked: false,
                newItem: false
            },
            {
                id: '6289616465',
                brand: 'Dodge',
                model: 'Ram',
                year: null,
                color: 'black',
                category: 'pickup truck',
                image: './assets/images/dodge-ram.jpg',
                liked: false,
                newItem: false
            },
            {
                id: '5787095042',
                brand: 'Chevrolet',
                model: '3100 Wrecker',
                year: 1953,
                color: 'black',
                liked: false,
                newItem: false
            },
            {
                id: '8149093713',
                brand: 'Mercedes-Benz',
                model: 'SLS AMG',
                year: null,
                color: 'red',
                category: 'coupe',
                image: './assets/images/mercedes-amg.jpg',
                liked: true,
                newItem: false
            },
            {
                id: '1964343303',
                brand: 'Mitsubishi',
                model: 'Lancer Evolution VII WRC',
                year: null,
                color: 'red',
                category: 'sedan',
                liked: false,
                newItem: false
            },
            {
                id: '1977927518',
                brand: 'Audi',
                model: 'A1',
                year: 2010,
                color: 'blue',
                category: 'sedan',
                liked: false,
                newItem: false
            },
            {
                id: '8418804731',
                brand: 'Cadillac',
                model: 'Series 62',
                year: 1953,
                color: 'pink',
                category: 'coupe',
                liked: false,
                newItem: false
            },
            {
                id: '9335674445',
                brand: 'Ford',
                model: 'Thunderbird',
                year: 1955,
                color: 'red',
                category: 'coupe',
                image: './assets/images/ford-thunderbird.jpg',
                liked: false,
                newItem: false
            },
            {
                id: '6948076871',
                brand: 'Shelby',
                model: 'Cobra 427 S/C',
                year: 1965,
                color: 'white',
                class: 'sport',
                category: 'roadster',
                image: './assets/images/shelby-cobra.jfif',
                liked: false,
                newItem: false
            },
            {
                id: '5359105976',
                brand: 'Land Rover',
                model: 'Range Rover sport',
                year: null,
                color: 'red',
                category: 'offroader',
                image: './assets/images/land-rover-range.jpg',
                liked: false,
                newItem: false
            },
            {
                id: '6522434240',
                brand: 'Ford',
                model: 'Raptor SuperCrew',
                year: null,
                color: 'blue',
                category: 'pickup truck',
                image: './assets/images/ford-raptor.jpg',
                liked: false,
                newItem: false
            },
            {
                id: '2948198567',
                brand: 'Mercedes-Benz',
                model: 'X-Class',
                year: null,
                color: 'red',
                category: 'pickup truck',
                image: './assets/images/mercedes-x-class.jpg',
                liked: false,
                newItem: false
            }
        ];
        return { cars };
    }
}
InMemoryDataService.ɵfac = function InMemoryDataService_Factory(t) { return new (t || InMemoryDataService)(); };
InMemoryDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InMemoryDataService, factory: InMemoryDataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "G97E":
/*!**************************************************!*\
  !*** ./src/app/home/my-cars/mycars.component.ts ***!
  \**************************************************/
/*! exports provided: MycarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MycarsComponent", function() { return MycarsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class MycarsComponent {
    constructor() { }
    ngOnInit() {
    }
}
MycarsComponent.ɵfac = function MycarsComponent_Factory(t) { return new (t || MycarsComponent)(); };
MycarsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MycarsComponent, selectors: [["app-mycars"]], decls: 7, vars: 0, consts: [[1, "mycar__conatiner-column"], [1, "mycar__item"], [1, "mycar__text"]], template: function MycarsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "My cars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "You havent added any cars yet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".mycar__conatiner-column[_ngcontent-%COMP%] {\n  width: 20vw;\n  margin: 0 auto;\n}\n\n.mycar__item[_ngcontent-%COMP%] {\n  height: 25px;\n  border-bottom: 3px solid gray;\n  padding-bottom: 10px;\n}\n\n.mycar__text[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxteWNhcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUlBO0VBRUUsWUFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7QUFGRjs7QUFJQTtFQUNDLGdCQUFBO0VBQ0EsZUFBQTtBQUREIiwiZmlsZSI6Im15Y2Fycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teWNhcl9fY29uYXRpbmVyLWNvbHVtbntcclxuICB3aWR0aDogMjB2dztcclxuICBtYXJnaW46IDAgYXV0bztcclxuIFxyXG5cclxufVxyXG5cclxuLm15Y2FyX19pdGVte1xyXG4vLyB3aWR0aDogMjUwcHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBncmF5O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcbi5teWNhcl9fdGV4dHtcclxuIG1hcmdpbi10b3A6IDE1cHg7XHJcbiBmb250LXNpemU6IDEycHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "Ge7q":
/*!*****************************************************!*\
  !*** ./src/app/cars/all-cars/all-cars.component.ts ***!
  \*****************************************************/
/*! exports provided: AllCarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllCarsComponent", function() { return AllCarsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_servises_cars_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/servises/cars.service */ "OePv");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _shared_components_sm_card_car_sm_card_car_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared-components/sm-card-car/sm-card-car.component */ "O4sr");








function AllCarsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sm-card-car", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const carItem_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("car-item", carItem_r1)("card-type", "lg");
} }
class AllCarsComponent {
    constructor(carsService) {
        this.carsService = carsService;
        this.carListItems = new Array();
        this.selectedCars = new Array();
        this.loadCount = 8;
    }
    ngOnInit() {
        this.carsService.getAllCars().subscribe(res => {
            this.carListItems = res;
            this.selectedCars = this.carListItems.slice(0, this.loadCount);
        }, err => console.log(err));
    }
    onKey(event) {
        setTimeout(() => this.filterCars(event.target.value), 2000);
    }
    filterCars(param) {
        console.log(param);
        this.searsCars = this.carListItems.filter(el => this.isModel(el.model, param) || this.isBrand(el.brand, param) || param === '');
        console.log(this.searsCars);
        this.selectedCars = this.searsCars;
    }
    isModel(model, params) {
        const re = new RegExp(`^${params.toLocaleLowerCase()}`);
        if (model.toLocaleLowerCase().match(re)) {
            return true;
        }
        else {
            return false;
        }
    }
    isBrand(brand, params) {
        const re = new RegExp(`${params.toLocaleLowerCase()}`);
        if (brand.toLocaleLowerCase().match(re)) {
            return true;
        }
        else {
            return false;
        }
    }
    loadMore() {
        this.loadCount = this.loadCount + 8;
        this.selectedCars = this.carListItems.slice(0, this.loadCount);
    }
}
AllCarsComponent.ɵfac = function AllCarsComponent_Factory(t) { return new (t || AllCarsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_servises_cars_service__WEBPACK_IMPORTED_MODULE_1__["CarsService"])); };
AllCarsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AllCarsComponent, selectors: [["app-all-cars"]], decls: 11, vars: 1, consts: [[1, "all-car-container"], [1, "all-car__items"], [1, "example-form"], [1, "example-full-width"], ["matInput", "", "placeholder", "Filter", "value", "", 3, "keyup"], [1, "all-car-list__container"], [4, "ngFor", "ngForOf"], [1, "example-button-row"], ["mat-raised-button", "", "color", "accent", 3, "click"], [3, "car-item", "card-type"]], template: function AllCarsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function AllCarsComponent_Template_input_keyup_4_listener($event) { return ctx.onKey($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AllCarsComponent_div_6_Template, 2, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllCarsComponent_Template_button_click_9_listener() { return ctx.loadMore(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Load More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectedCars);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _shared_components_sm_card_car_sm_card_car_component__WEBPACK_IMPORTED_MODULE_7__["SmCardCarComponent"]], styles: [".all-car-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.all-car__items[_ngcontent-%COMP%] {\n  width: 88vw;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 18px;\n  padding-left: 40px;\n  padding-right: 40px;\n}\n\n.all-car-list__container[_ngcontent-%COMP%] {\n  width: 75vw;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  margin-top: 30px;\n  flex-grow: 1 1 1 1;\n}\n\n.example-button-row[_ngcontent-%COMP%] {\n  width: 67vw;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.example-form[_ngcontent-%COMP%] {\n  width: 12vw;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhbGwtY2Fycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQUY7O0FBSUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFLQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBRkY7O0FBS0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFGRjs7QUFJQTtFQUNFLFdBQUE7QUFERjs7QUFLQTtFQUNFLFdBQUE7QUFGRiIsImZpbGUiOiJhbGwtY2Fycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYWxsLWNhci1jb250YWluZXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiBcclxuICBcclxufVxyXG4uYWxsLWNhcl9faXRlbXN7XHJcbiAgd2lkdGg6IDg4dnc7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxOHB4O1xyXG4gIHBhZGRpbmctbGVmdDogNDBweDtcclxuICBwYWRkaW5nLXJpZ2h0OjQwcHg7XHJcbiAgXHJcbn1cclxuXHJcbi5hbGwtY2FyLWxpc3RfX2NvbnRhaW5lcntcclxuICB3aWR0aDogNzV2dztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIGZsZXgtZ3JvdzogMSAxIDEgMTtcclxufVxyXG5cclxuLmV4YW1wbGUtYnV0dG9uLXJvd3tcclxuICB3aWR0aDogNjd2dztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLmV4YW1wbGUtZm9ybSB7XHJcbiAgd2lkdGg6IDEydnc7XHJcbiAgXHJcbn1cclxuXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "HzBc":
/*!*********************************************************!*\
  !*** ./src/app/home/my-dealers/my-dealers.component.ts ***!
  \*********************************************************/
/*! exports provided: MyDealersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDealersComponent", function() { return MyDealersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class MyDealersComponent {
    constructor() { }
    ngOnInit() {
    }
}
MyDealersComponent.ɵfac = function MyDealersComponent_Factory(t) { return new (t || MyDealersComponent)(); };
MyDealersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyDealersComponent, selectors: [["app-my-dealers"]], decls: 7, vars: 0, consts: [[1, "dealers__conatiner-column"], [1, "dealers__item"], [1, "dealers__text"]], template: function MyDealersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "My Dealers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "You havent added any dealrs yet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".dealers__conatiner-column[_ngcontent-%COMP%] {\n  width: 20vw;\n  margin: 0 auto;\n}\n\n.dealers__item[_ngcontent-%COMP%] {\n  height: 25px;\n  border-bottom: 3px solid gray;\n  padding-bottom: 10px;\n}\n\n.dealers__text[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxteS1kZWFsZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFDQTs7QUFFQTtFQUVFLFlBQUE7RUFDQSw2QkFBQTtFQUNBLG9CQUFBO0FBQUY7O0FBRUE7RUFDQyxnQkFBQTtFQUNBLGVBQUE7QUFDRCIsImZpbGUiOiJteS1kZWFsZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlYWxlcnNfX2NvbmF0aW5lci1jb2x1bW57XHJcbndpZHRoOiAyMHZ3O1xyXG5tYXJnaW46IDAgYXV0bztcclxuXHJcbn1cclxuLmRlYWxlcnNfX2l0ZW17XHJcbiAgLy8gd2lkdGg6IDI1MHB4O1xyXG4gIGhlaWdodDogMjVweDtcclxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgZ3JheTtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG4uZGVhbGVyc19fdGV4dHtcclxuIG1hcmdpbi10b3A6IDE1cHg7XHJcbiBmb250LXNpemU6IDEycHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "O4sr":
/*!************************************************************************!*\
  !*** ./src/app/shared-components/sm-card-car/sm-card-car.component.ts ***!
  \************************************************************************/
/*! exports provided: SmCardCarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmCardCarComponent", function() { return SmCardCarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_servises_cars_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/servises/cars.service */ "OePv");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






function SmCardCarComponent_mat_icon_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "favorite");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.cardStyleIcon);
} }
function SmCardCarComponent_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 6);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.carItem.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r1.carItem.brand);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.cardStyleImg);
} }
function SmCardCarComponent_img_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 7);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r2.carItem.brand);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.cardStyleImg);
} }
function SmCardCarComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SmCardCarComponent_div_9_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.like(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Like");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SmCardCarComponent {
    constructor(carsService) {
        this.carsService = carsService;
        this.smCardStyleSize = { 'size-sm': true };
        this.lgCardStyleSize = { 'size-lg': true };
        this.smCardStyleTitle = { 'title-sm': true };
        this.lgCardStyleTitle = { 'title-lg': true };
        this.smCardStyleSubtittle = { 'subtitle-sm': true };
        this.lgCardStyleSubtittle = { 'subtitle-lg': true };
        this.smCardStyleIcon = { 'icon-sm': true };
        this.lgCardStyleIcon = { 'icon-lg': true };
        this.smCardStyleImg = { 'img-sm': true };
        this.lgCardStyleImg = { 'img-lg': true };
        this.cardStyleSize = this.smCardStyleSize;
        this.cardStyleTitle = this.smCardStyleTitle;
        this.cardStyleSubtitle = this.smCardStyleSubtittle;
        this.cardStyleIcon = this.smCardStyleIcon;
        this.cardStyleImg = this.smCardStyleImg;
        this.isCardLg = false;
        // carLike: boolean = false;
        this.addParameter = false;
    }
    ngOnInit() {
        if (this.cardType === 'lg') {
            this.isCardLg = true;
            this.lgStyle();
        }
    }
    lgStyle() {
        this.cardStyleSize = this.lgCardStyleSize;
        this.cardStyleTitle = this.lgCardStyleTitle;
        this.cardStyleSubtitle = this.lgCardStyleSubtittle;
        this.cardStyleIcon = this.lgCardStyleIcon;
        this.cardStyleImg = this.lgCardStyleImg;
    }
    // toggleForm() {
    //   this.addParameter = !this.addParameter;
    //   this.carsService.updateCars(carItem).subscribe();
    //   console.log(carItem.liked);
    // }
    like(carItem) {
        this.carItem.liked = !this.carItem.liked;
        this.carsService.updateCars(this.carItem).subscribe();
        console.log(this.carItem.liked);
    }
}
SmCardCarComponent.ɵfac = function SmCardCarComponent_Factory(t) { return new (t || SmCardCarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_servises_cars_service__WEBPACK_IMPORTED_MODULE_1__["CarsService"])); };
SmCardCarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SmCardCarComponent, selectors: [["app-sm-card-car"]], inputs: { carItem: ["car-item", "carItem"], cardType: ["card-type", "cardType"] }, decls: 10, vars: 9, consts: [[3, "ngClass"], ["aria-label", "Liked icon", 3, "ngClass", 4, "ngIf"], ["mat-card-image", "", 3, "ngClass", "src", "alt", 4, "ngIf"], ["mat-card-image", "", "src", "../../../assets/images/defoult.jpg", 3, "ngClass", "alt", 4, "ngIf"], [4, "ngIf"], ["aria-label", "Liked icon", 3, "ngClass"], ["mat-card-image", "", 3, "ngClass", "src", "alt"], ["mat-card-image", "", "src", "../../../assets/images/defoult.jpg", 3, "ngClass", "alt"], ["mat-button", "", 1, "btn-like", 3, "click"], ["mat-button", "", 1, "btn-details"]], template: function SmCardCarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SmCardCarComponent_mat_icon_6_Template, 2, 1, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SmCardCarComponent_img_7_Template, 1, 3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SmCardCarComponent_img_8_Template, 1, 2, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SmCardCarComponent_div_9_Template, 5, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.cardStyleSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.cardStyleTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.carItem.model);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.cardStyleSubtitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.carItem.brand);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.carItem.liked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.carItem.image);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.carItem.image);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCardLg);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardSubtitle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardImage"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]], styles: [".mat-card[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.example-header-image[_ngcontent-%COMP%] {\n  background-size: cover;\n}\n\n.mat-card-header[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  margin-left: -20px;\n}\n\n.mat-card-image[_ngcontent-%COMP%] {\n  width: calc(100% + 32px);\n  margin: 0 -16px 16px -16px;\n  max-height: 100px;\n}\n\nsection[_ngcontent-%COMP%] {\n  display: table;\n}\n\n.example-label[_ngcontent-%COMP%] {\n  display: table-cell;\n  font-size: 14px;\n  margin-left: 8px;\n  min-width: 120px;\n}\n\n.example-button-row[_ngcontent-%COMP%] {\n  display: table-cell;\n  width: 490px;\n}\n\n.example-button-row[_ngcontent-%COMP%]   .mat-button-base[_ngcontent-%COMP%] {\n  margin: 8px 8px 8px 0;\n}\n\n.example-flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.example-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 120px;\n}\n\n.btn-like[_ngcontent-%COMP%] {\n  color: gold;\n}\n\n.btn-details[_ngcontent-%COMP%] {\n  color: purple;\n}\n\n.size-sm[_ngcontent-%COMP%] {\n  width: 105px;\n  margin-bottom: 5px;\n}\n\n.size-lg[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.title-sm[_ngcontent-%COMP%] {\n  font-size: 11px;\n  margin-bottom: 0px !important;\n  margin-top: -15px;\n}\n\n.subtitle-sm[_ngcontent-%COMP%] {\n  font-size: 10px;\n  margin-bottom: 5px;\n  margin-top: -5px;\n}\n\n.title-lg[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-bottom: 12px;\n}\n\n.subtitle-lg[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.icon-sm[_ngcontent-%COMP%] {\n  color: red;\n  margin-top: -12px;\n}\n\n.icon-lg[_ngcontent-%COMP%] {\n  color: red;\n  margin-top: 0px;\n}\n\n.img-sm[_ngcontent-%COMP%] {\n  width: calc(100% + 32px);\n  margin: 0 -16px 16px -16px;\n  max-height: 60px;\n}\n\n.img-lg[_ngcontent-%COMP%] {\n  max-width: calc(100% + 32px);\n  margin: 0 -16px 16px -16px;\n  max-height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzbS1jYXJkLWNhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLGdCQUFBO0FBQUY7O0FBRUE7RUFDRSxzQkFBQTtBQUNGOztBQUNBO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtBQUVGOztBQU1BO0VBQ0Msd0JBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0FBSEQ7O0FBS0E7RUFDRSxjQUFBO0FBRkY7O0FBS0E7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBRkY7O0FBS0E7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUFGRjs7QUFLQTtFQUNFLHFCQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBRkY7O0FBS0E7RUFDRSxXQUFBO0FBRkY7O0FBSUE7RUFDRSxhQUFBO0FBREY7O0FBR0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0FBRUY7O0FBQUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUdGOztBQURBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBSUY7O0FBRkE7RUFDRSxlQUFBO0FBS0Y7O0FBSEE7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7QUFNRjs7QUFKQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FBT0Y7O0FBTEE7RUFDQSx3QkFBQTtFQUNDLDBCQUFBO0VBQ0EsZ0JBQUE7QUFRRDs7QUFOQTtFQUNFLDRCQUFBO0VBQ0QsMEJBQUE7RUFDQSxpQkFBQTtBQVNEIiwiZmlsZSI6InNtLWNhcmQtY2FyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jYXJkICB7XHJcbiAgLy8gd2lkdGg6IDEwMHZ3O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi5tYXQtY2FyZC1oZWFkZXIge1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW4tbGVmdDogLTIwcHg7XHJcblxyXG59XHJcbi8vIC5tYXQtaWNvbiB7XHJcbi8vICAgY29sb3I6IHJlZDtcclxuLy8gICBtYXJnaW4tdG9wOiAtMTJweDtcclxuLy8gfVxyXG5cclxuLm1hdC1jYXJkLWltYWdlIHtcclxuXHR3aWR0aDogY2FsYygxMDAlICsgMzJweCk7XHJcblx0bWFyZ2luOiAwIC0xNnB4IDE2cHggLTE2cHg7XHJcblx0bWF4LWhlaWdodDogMTAwcHg7IFxyXG59XHJcbnNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1sYWJlbCB7XHJcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICBtaW4td2lkdGg6IDEyMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1idXR0b24tcm93IHtcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIHdpZHRoOiA0OTBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtYnV0dG9uLXJvdyAubWF0LWJ1dHRvbi1iYXNlIHtcclxuICBtYXJnaW46IDhweCA4cHggOHB4IDA7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZsZXgtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5leGFtcGxlLWJ1dHRvbi1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG59XHJcblxyXG4uYnRuLWxpa2V7XHJcbiAgY29sb3I6IGdvbGQ7XHJcbn1cclxuLmJ0bi1kZXRhaWxze1xyXG4gIGNvbG9yOiBwdXJwbGU7XHJcbn1cclxuLnNpemUtc217XHJcbiAgd2lkdGg6IDEwNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG4uc2l6ZS1sZ3tcclxuICB3aWR0aDogMjAwcHg7XHJcbn1cclxuLnRpdGxlLXNte1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiAtMTVweDtcclxufVxyXG4uc3VidGl0bGUtc217XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBtYXJnaW4tdG9wOiAtNXB4O1xyXG59XHJcbi50aXRsZS1sZ3tcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxufVxyXG4uc3VidGl0bGUtbGd7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5pY29uLXNte1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgbWFyZ2luLXRvcDogLTEycHg7XHJcbn1cclxuLmljb24tbGd7XHJcbiAgY29sb3I6IHJlZDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuLmltZy1zbXtcclxud2lkdGg6IGNhbGMoMTAwJSArIDMycHgpO1xyXG5cdG1hcmdpbjogMCAtMTZweCAxNnB4IC0xNnB4O1xyXG5cdG1heC1oZWlnaHQ6IDYwcHg7IFxyXG59XHJcbi5pbWctbGd7XHJcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcclxuXHRtYXJnaW46IDAgLTE2cHggMTZweCAtMTZweDtcclxuXHRtYXgtaGVpZ2h0OiAxMDBweDsgXHJcbn0iXX0= */"] });


/***/ }),

/***/ "OePv":
/*!*************************************************!*\
  !*** ./src/app/shared/servises/cars.service.ts ***!
  \*************************************************/
/*! exports provided: CarsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarsService", function() { return CarsService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
class CarsService {
    constructor(http) {
        this.http = http;
        this.carsUrl = '/cars';
    }
    getAllCars() {
        return this.http.get(this.carsUrl);
    }
    updateCars(car) {
        return this.http.put(this.carsUrl, car, httpOptions);
    }
}
CarsService.ɵfac = function CarsService_Factory(t) { return new (t || CarsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
CarsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CarsService, factory: CarsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "QSzF":
/*!*******************************************!*\
  !*** ./src/app/dealers/dealers.module.ts ***!
  \*******************************************/
/*! exports provided: DealersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealersModule", function() { return DealersModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _dealers_dealers_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dealers/dealers.component */ "7jlE");
/* harmony import */ var _dealers_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dealers-routing.module */ "BoGK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _dealers_table_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dealers/table/table.component */ "tc3l");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");













class DealersModule {
}
DealersModule.ɵfac = function DealersModule_Factory(t) { return new (t || DealersModule)(); };
DealersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: DealersModule });
DealersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _dealers_routing_module__WEBPACK_IMPORTED_MODULE_2__["DealersRoutingModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](DealersModule, { declarations: [_dealers_dealers_component__WEBPACK_IMPORTED_MODULE_1__["DealersComponent"],
        _dealers_table_table_component__WEBPACK_IMPORTED_MODULE_4__["TableComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _dealers_routing_module__WEBPACK_IMPORTED_MODULE_2__["DealersRoutingModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"]], exports: [_dealers_dealers_component__WEBPACK_IMPORTED_MODULE_1__["DealersComponent"]] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/main.component */ "wlho");


class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main");
    } }, directives: [_main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "TGkX":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _menu_item_menu_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../menu-item/menu-item */ "2UJk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../menu-item/menu-item.component */ "Ef5z");




function MenuComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-menu-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuIten_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("menu-item", menuIten_r1);
} }
class MenuComponent {
    constructor() {
        this.menuItems = [
            new _menu_item_menu_item__WEBPACK_IMPORTED_MODULE_0__["MenuItem"]('Home', 'home', true, '', 'Home label', '/home'),
            new _menu_item_menu_item__WEBPACK_IMPORTED_MODULE_0__["MenuItem"]('Cars', 'directions_car', false, 'cars', 'Cars label', '/cars'),
            new _menu_item_menu_item__WEBPACK_IMPORTED_MODULE_0__["MenuItem"]('Dealers', 'stars', false, 'dealers', 'Dealers label', '/dealers')
        ];
    }
    ngOnInit() { }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 2, vars: 1, consts: [[1, "container__menu"], [4, "ngFor", "ngForOf"], [3, "menu-item"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MenuComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.menuItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_3__["MenuItemComponent"]], styles: [".container__menu[_ngcontent-%COMP%] {\n  width: 5vw;\n  height: 100%;\n  min-height: 100vh;\n  background-color: #673ab7;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  padding-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDRiIsImZpbGUiOiJtZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcl9fbWVudXtcclxuICB3aWR0aDogNXZ3O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjczYWI3O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "Uiln":
/*!********************************************!*\
  !*** ./src/app/cars/cars-routing.model.ts ***!
  \********************************************/
/*! exports provided: routes, CarsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarsRoutingModule", function() { return CarsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cars_cars_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cars/cars.component */ "es7c");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'cars', component: _cars_cars_component__WEBPACK_IMPORTED_MODULE_1__["CarsComponent"] }
];
class CarsRoutingModule {
}
CarsRoutingModule.ɵfac = function CarsRoutingModule_Factory(t) { return new (t || CarsRoutingModule)(); };
CarsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CarsRoutingModule });
CarsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CarsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu/menu.component */ "TGkX");
/* harmony import */ var _menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./menu-item/menu-item.component */ "Ef5z");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-in-memory-web-api */ "koPj");
/* harmony import */ var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./in-memory-data.service */ "FUlj");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./main/main.component */ "wlho");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.module */ "ct+p");
/* harmony import */ var _dealers_dealers_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dealers/dealers.module */ "QSzF");
/* harmony import */ var _cars_cars_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cars/cars.module */ "vBQD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ "fXoL");



















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _home_home_module__WEBPACK_IMPORTED_MODULE_14__["HomeModule"],
            _dealers_dealers_module__WEBPACK_IMPORTED_MODULE_15__["DealersModule"],
            _cars_cars_module__WEBPACK_IMPORTED_MODULE_16__["CarsModule"],
            angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_11__["HttpClientInMemoryWebApiModule"].forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_12__["InMemoryDataService"], { apiBase: '/', delay: 200 })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"],
        _menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_9__["MenuItemComponent"],
        _main_main_component__WEBPACK_IMPORTED_MODULE_13__["MainComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
        _home_home_module__WEBPACK_IMPORTED_MODULE_14__["HomeModule"],
        _dealers_dealers_module__WEBPACK_IMPORTED_MODULE_15__["DealersModule"],
        _cars_cars_module__WEBPACK_IMPORTED_MODULE_16__["CarsModule"], angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_11__["HttpClientInMemoryWebApiModule"]] }); })();


/***/ }),

/***/ "cPhq":
/*!*********************************************!*\
  !*** ./src/app/home/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _car_i_like_car_i_like_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../car-i-like/car-i-like.component */ "xkAL");
/* harmony import */ var _my_cars_mycars_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../my-cars/mycars.component */ "G97E");
/* harmony import */ var _my_dealers_my_dealers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../my-dealers/my-dealers.component */ "HzBc");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");





class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 10, vars: 0, consts: [[1, "home__conatainer"], [1, "example-button-row"], ["mat-raised-button", "", "color", "accent"], ["mat-raised-button", "", "color", "primary"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-car-i-like");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-mycars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-my-dealers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Add car");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Add dealers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_car_i_like_car_i_like_component__WEBPACK_IMPORTED_MODULE_1__["CarILikeComponent"], _my_cars_mycars_component__WEBPACK_IMPORTED_MODULE_2__["MycarsComponent"], _my_dealers_my_dealers_component__WEBPACK_IMPORTED_MODULE_3__["MyDealersComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]], styles: [".home__conatainer[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 10px 10px 0px 40px;\n}\n\nsection[_ngcontent-%COMP%] {\n  display: table;\n}\n\n.example-button-row[_ngcontent-%COMP%] {\n  display: table-cell;\n  width: 360px;\n}\n\n.example-button-row[_ngcontent-%COMP%]   .mat-button-base[_ngcontent-%COMP%] {\n  margin: 8px 20px 8px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0FBQ0Q7O0FBQ0E7RUFDRSxjQUFBO0FBRUY7O0FBQUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUFHRjs7QUFBQTtFQUNFLHNCQUFBO0FBR0YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lX19jb25hdGFpbmVye1xyXG4gd2lkdGg6IDEwMHZ3O1xyXG4gaGVpZ2h0OiAxMDB2aDtcclxuIGRpc3BsYXk6IGZsZXg7XHJcbiBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gcGFkZGluZzogMTBweCAxMHB4IDBweCA0MHB4O1xyXG59XHJcbnNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcbi5leGFtcGxlLWJ1dHRvbi1yb3cge1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgd2lkdGg6IDM2MHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1idXR0b24tcm93IC5tYXQtYnV0dG9uLWJhc2Uge1xyXG4gIG1hcmdpbjogOHB4IDIwcHggOHB4IDA7XHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _my_cars_mycars_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-cars/mycars.component */ "G97E");
/* harmony import */ var _car_i_like_car_i_like_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./car-i-like/car-i-like.component */ "xkAL");
/* harmony import */ var _my_dealers_my_dealers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-dealers/my-dealers.component */ "HzBc");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "cPhq");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared-components/shared-components.module */ "nEHF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









class HomeModule {
}
HomeModule.ɵfac = function HomeModule_Factory(t) { return new (t || HomeModule)(); };
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_4__["HomeRoutingModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_7__["SharedComponentsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _my_cars_mycars_component__WEBPACK_IMPORTED_MODULE_1__["MycarsComponent"],
        _car_i_like_car_i_like_component__WEBPACK_IMPORTED_MODULE_2__["CarILikeComponent"],
        _my_dealers_my_dealers_component__WEBPACK_IMPORTED_MODULE_3__["MyDealersComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _home_routing_module__WEBPACK_IMPORTED_MODULE_4__["HomeRoutingModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_7__["SharedComponentsModule"]], exports: [_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]] }); })();


/***/ }),

/***/ "es7c":
/*!*********************************************!*\
  !*** ./src/app/cars/cars/cars.component.ts ***!
  \*********************************************/
/*! exports provided: CarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarsComponent", function() { return CarsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _by_category_cars_by_category_cars_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../by-category-cars/by-category-cars.component */ "zlWg");
/* harmony import */ var _all_cars_all_cars_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../all-cars/all-cars.component */ "Ge7q");






function CarsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-by-category-cars");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CarsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-all-cars");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CarsComponent {
    constructor() {
        this.viewByCategory = false;
    }
    ngOnInit() {
    }
}
CarsComponent.ɵfac = function CarsComponent_Factory(t) { return new (t || CarsComponent)(); };
CarsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarsComponent, selectors: [["app-cars"]], decls: 6, vars: 3, consts: [[1, "cars__container"], [1, "toggle"], [3, "ngModel", "ngModelChange"], [4, "ngIf"]], template: function CarsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-slide-toggle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CarsComponent_Template_mat_slide_toggle_ngModelChange_2_listener($event) { return ctx.viewByCategory = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "View By Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CarsComponent_div_4_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CarsComponent_div_5_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.viewByCategory);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.viewByCategory);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.viewByCategory);
    } }, directives: [_angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _by_category_cars_by_category_cars_component__WEBPACK_IMPORTED_MODULE_4__["ByCategoryCarsComponent"], _all_cars_all_cars_component__WEBPACK_IMPORTED_MODULE_5__["AllCarsComponent"]], styles: [".cars__container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  margin-top: 30px;\n  z-index: 100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjYXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUVGIiwiZmlsZSI6ImNhcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2Fyc19fY29udGFpbmVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLnRvZ2dsZXtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICB6LWluZGV4OiAxMDA7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "nEHF":
/*!***************************************************************!*\
  !*** ./src/app/shared-components/shared-components.module.ts ***!
  \***************************************************************/
/*! exports provided: SharedComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedComponentsModule", function() { return SharedComponentsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _sm_card_car_sm_card_car_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sm-card-car/sm-card-car.component */ "O4sr");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class SharedComponentsModule {
}
SharedComponentsModule.ɵfac = function SharedComponentsModule_Factory(t) { return new (t || SharedComponentsModule)(); };
SharedComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: SharedComponentsModule });
SharedComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SharedComponentsModule, { declarations: [_sm_card_car_sm_card_car_component__WEBPACK_IMPORTED_MODULE_1__["SmCardCarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"]], exports: [_sm_card_car_sm_card_car_component__WEBPACK_IMPORTED_MODULE_1__["SmCardCarComponent"]] }); })();


/***/ }),

/***/ "tc3l":
/*!**************************************************!*\
  !*** ./src/app/dealers/table/table.component.ts ***!
  \**************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");









function TableComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function TableComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r12.id, " ");
} }
function TableComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Progress ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function TableComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r13.progress, "% ");
} }
function TableComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function TableComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r14.name, " ");
} }
function TableComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Color ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function TableComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("color", row_r15.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r15.color, " ");
} }
function TableComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 17);
} }
function TableComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 18);
} }
function TableComponent_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("No data matching the filter \"", _r0.value, "\"");
} }
const _c0 = function () { return [5, 10, 25, 100]; };
/** Constants used to fill up our data base. */
const COLORS = [
    'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
    'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES = [
    'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
    'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];
class TableComponent {
    constructor() {
        this.displayedColumns = ['id', 'name', 'progress', 'color']; // edit, delet
        // Create 100 users
        const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));
        // Assign the data to the data source for the table to render
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](users);
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}
TableComponent.ɵfac = function TableComponent_Factory(t) { return new (t || TableComponent)(); };
TableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TableComponent, selectors: [["app-table"]], viewQuery: function TableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 23, vars: 5, consts: [["matInput", "", "placeholder", "Ex. Mia", 3, "keyup"], ["input", ""], [1, "mat-elevation-z8"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "progress"], ["matColumnDef", "name"], ["matColumnDef", "color"], ["mat-cell", "", 3, "color", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], [3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "input", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function TableComponent_Template_input_keyup_3_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](7, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, TableComponent_th_8_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, TableComponent_td_9_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](10, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, TableComponent_th_11_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, TableComponent_td_12_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](13, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, TableComponent_th_14_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, TableComponent_td_15_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](16, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, TableComponent_th_17_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, TableComponent_td_18_Template, 2, 3, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, TableComponent_tr_19_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, TableComponent_tr_20_Template, 1, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, TableComponent_tr_21_Template, 3, 1, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "mat-paginator", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c0));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatNoDataRow"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 100%;\n}\n\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  width: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0FBQ0YiLCJmaWxlIjoidGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50ZCwgdGgge1xyXG4gIHdpZHRoOiAyNSU7XHJcbn1cclxuIl19 */"] });
/** Builds and returns a new User. */
function createNewUser(id) {
    const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
    return {
        id: id.toString(),
        name: name,
        progress: Math.round(Math.random() * 100).toString(),
        color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
    };
}


/***/ }),

/***/ "vBQD":
/*!*************************************!*\
  !*** ./src/app/cars/cars.module.ts ***!
  \*************************************/
/*! exports provided: CarsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarsModule", function() { return CarsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _cars_cars_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cars/cars.component */ "es7c");
/* harmony import */ var _by_category_cars_by_category_cars_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./by-category-cars/by-category-cars.component */ "zlWg");
/* harmony import */ var _all_cars_all_cars_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all-cars/all-cars.component */ "Ge7q");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _cars_routing_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cars-routing.model */ "Uiln");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared-components/shared-components.module */ "nEHF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");














class CarsModule {
}
CarsModule.ɵfac = function CarsModule_Factory(t) { return new (t || CarsModule)(); };
CarsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: CarsModule });
CarsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
            _cars_routing_model__WEBPACK_IMPORTED_MODULE_8__["CarsRoutingModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
            _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_12__["SharedComponentsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](CarsModule, { declarations: [_cars_cars_component__WEBPACK_IMPORTED_MODULE_1__["CarsComponent"],
        _by_category_cars_by_category_cars_component__WEBPACK_IMPORTED_MODULE_2__["ByCategoryCarsComponent"],
        _all_cars_all_cars_component__WEBPACK_IMPORTED_MODULE_3__["AllCarsComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
        _cars_routing_model__WEBPACK_IMPORTED_MODULE_8__["CarsRoutingModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
        _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_12__["SharedComponentsModule"]], exports: [_cars_cars_component__WEBPACK_IMPORTED_MODULE_1__["CarsComponent"]] }); })();


/***/ }),

/***/ "wlho":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu/menu.component */ "TGkX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class MainComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 8, vars: 0, consts: [[1, "wrapper"], ["color", "primary"], [1, "header__title"], [1, "main"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Awesome cars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarRow"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  max-width: 100vw;\n  max-height: 100hw;\n  overflow: hidden;\n}\n\n.main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.header__title[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: \"PlayballRegular\";\n  font-size: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG1haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFDQztFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUVIOztBQUFDO0VBQ0MsY0FBQTtBQUdGOztBQURBO0VBQ0UsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQUlGIiwiZmlsZSI6Im1haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlcntcclxuICBtYXgtd2lkdGg6IDEwMHZ3O1xyXG4gIG1heC1oZWlnaHQ6IDEwMGh3O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiB9XHJcbiAubWFpbntcclxuICAgZGlzcGxheTogZmxleDtcclxuICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuIH1cclxuIC5leGFtcGxlLXNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuLmhlYWRlcl9fdGl0bGV7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1mYW1pbHk6IFwiUGxheWJhbGxSZWd1bGFyXCI7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "xkAL":
/*!*********************************************************!*\
  !*** ./src/app/home/car-i-like/car-i-like.component.ts ***!
  \*********************************************************/
/*! exports provided: CarILikeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarILikeComponent", function() { return CarILikeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_servises_cars_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/servises/cars.service */ "OePv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_sm_card_car_sm_card_car_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared-components/sm-card-car/sm-card-car.component */ "O4sr");




function CarILikeComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sm-card-car", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const carItem_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("car-item", carItem_r1);
} }
class CarILikeComponent {
    constructor(carsService) {
        this.carsService = carsService;
        this.carItems = new Array();
        this.allCarListItems = new Array();
    }
    ngOnInit() {
        this.carsService.getAllCars().subscribe(res => {
            this.allCarListItems = res;
            this.getFavoriteCars();
            this.carItems = this.getFavoriteCars();
            console.log(this.carItems);
        }, err => console.log(err));
    }
    getFavoriteCars() {
        console.log(this.allCarListItems);
        return this.allCarListItems.filter(el => el.liked === true);
    }
}
CarILikeComponent.ɵfac = function CarILikeComponent_Factory(t) { return new (t || CarILikeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_servises_cars_service__WEBPACK_IMPORTED_MODULE_1__["CarsService"])); };
CarILikeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarILikeComponent, selectors: [["app-car-i-like"]], decls: 6, vars: 1, consts: [[1, "like__conatiner-column"], [1, "like__item"], [1, "card__container"], [4, "ngFor", "ngForOf"], [3, "car-item"]], template: function CarILikeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Car I Like");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CarILikeComponent_div_5_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.carItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _shared_components_sm_card_car_sm_card_car_component__WEBPACK_IMPORTED_MODULE_3__["SmCardCarComponent"]], styles: [".like__conatiner-column[_ngcontent-%COMP%] {\n  width: 22vw;\n}\n\n.like__item[_ngcontent-%COMP%] {\n  height: 25px;\n  border-bottom: 3px solid gray;\n  padding-bottom: 10px;\n}\n\n.card__container[_ngcontent-%COMP%] {\n  max-width: 22vw;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-top: 4px;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjYXItaS1saWtlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7QUFFRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0FBRUYiLCJmaWxlIjoiY2FyLWktbGlrZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saWtlX19jb25hdGluZXItY29sdW1ue1xyXG4gIHdpZHRoOiAyMnZ3O1xyXG59XHJcbi5saWtlX19pdGVte1xyXG4gIGhlaWdodDogMjVweDtcclxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgZ3JheTtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmNhcmRfX2NvbnRhaW5lcntcclxuICBtYXgtd2lkdGg6IDIydnc7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zlWg":
/*!*********************************************************************!*\
  !*** ./src/app/cars/by-category-cars/by-category-cars.component.ts ***!
  \*********************************************************************/
/*! exports provided: ByCategoryCarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ByCategoryCarsComponent", function() { return ByCategoryCarsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_servises_cars_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/servises/cars.service */ "OePv");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ "MutI");





function ByCategoryCarsComponent_mat_tab_3_mat_list_option_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ByCategoryCarsComponent_mat_tab_3_mat_list_option_4_Template_mat_list_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const car_r6 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.selectCar(car_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const car_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", car_r6 && i_r7 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](car_r6.model);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](car_r6.brand);
} }
function ByCategoryCarsComponent_mat_tab_3_div_6_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 17);
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r10.selectedCar.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r10.selectedCar.model);
} }
function ByCategoryCarsComponent_mat_tab_3_div_6_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 18);
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("alt", ctx_r11.selectedCar.model);
} }
function ByCategoryCarsComponent_mat_tab_3_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ByCategoryCarsComponent_mat_tab_3_div_6_img_1_Template, 1, 2, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ByCategoryCarsComponent_mat_tab_3_div_6_img_2_Template, 1, 1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.selectedCar.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.selectedCar.image);
} }
function ByCategoryCarsComponent_mat_tab_3_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Dealers: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Class: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Year: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Color: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.selectedCar.model);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.selectedCar.brand);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 5, ctx_r5.selectedCar.class));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.selectedCar.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.selectedCar.color);
} }
function ByCategoryCarsComponent_mat_tab_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-selection-list", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ByCategoryCarsComponent_mat_tab_3_mat_list_option_4_Template, 6, 3, "mat-list-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ByCategoryCarsComponent_mat_tab_3_div_6_Template, 3, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ByCategoryCarsComponent_mat_tab_3_div_7_Template, 25, 7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 5, category_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiple", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.takeCarsByCategory(category_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selectedCar);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selectedCar);
} }
class ByCategoryCarsComponent {
    constructor(carsService) {
        this.carsService = carsService;
        this.allCars = new Array();
        this.carsCategories = new Set();
        this.background = undefined;
    }
    ngOnInit() {
        this.carsService.getAllCars().subscribe(res => {
            this.allCars = res;
            this.takeAllCategories();
            this.takeCarsByCategory(this.carsCategories[0]);
        }, err => console.log(err));
    }
    takeAllCategories() {
        this.allCars.forEach((car) => {
            if (car.category != null) {
                this.carsCategories.add(car.category);
            }
        });
        this.carsCategories.add('other');
    }
    selectCar(car) {
        this.selectedCar = car;
        console.log(this.selectedCar);
    }
    tabChange(event) {
        const cars = this.takeCarsByCategory(event.tab.textLabel.toLowerCase());
        this.selectedCar = cars[0];
    }
    takeCarsByCategory(category) {
        // console.log(category);//Почему повторяет много раз категорий? оно что каждый раз ильт делает?
        this.carsByCategory = this.allCars.filter((car) => category === "other" ? !car.category : car.category === category);
        return this.carsByCategory;
    }
}
ByCategoryCarsComponent.ɵfac = function ByCategoryCarsComponent_Factory(t) { return new (t || ByCategoryCarsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_servises_cars_service__WEBPACK_IMPORTED_MODULE_1__["CarsService"])); };
ByCategoryCarsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ByCategoryCarsComponent, selectors: [["app-by-category-cars"]], decls: 4, vars: 1, consts: [[1, "car-cotainer"], [1, "category__conatainer"], [3, "selectedTabChange"], [3, "label", 4, "ngFor", "ngForOf"], [3, "label"], [3, "multiple"], ["cars", ""], [3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "container__info"], ["class", "car__img", 4, "ngIf"], ["class", "detail__info", 4, "ngIf"], [3, "selected", "click"], [1, "model"], [1, "brand"], [1, "car__img"], [3, "src", "alt", 4, "ngIf"], ["src", "../../../assets/images/defoult.jpg", 3, "alt", 4, "ngIf"], [3, "src", "alt"], ["src", "../../../assets/images/defoult.jpg", 3, "alt"], [1, "detail__info"]], template: function ByCategoryCarsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-tab-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedTabChange", function ByCategoryCarsComponent_Template_mat_tab_group_selectedTabChange_2_listener($event) { return ctx.tabChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ByCategoryCarsComponent_mat_tab_3_Template, 8, 7, "mat-tab", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.carsCategories);
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTab"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatSelectionList"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]], styles: [".car-cotainer[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n}\n\n.mat-tab-group[_ngcontent-%COMP%] {\n  width: 1250px;\n  height: 100vh !important;\n}\n\n.mat-selection-list[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 100vh;\n}\n\n.category__conatainer[_ngcontent-%COMP%] {\n  width: 100vw;\n  overflow: hidden;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-top: 15px;\n}\n\n.container__info[_ngcontent-%COMP%] {\n  display: flex;\n  width: 60vw;\n  position: absolute;\n  top: 0vw;\n  right: 5vw;\n  display: flex;\n  flex-direction: row;\n}\n\n.car__img[_ngcontent-%COMP%] {\n  width: 500px;\n  height: 250px;\n  margin-top: 10px;\n  margin-right: 20px;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 500px;\n  height: 250px;\n}\n\n.detail__info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 15px;\n  width: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxieS1jYXRlZ29yeS1jYXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx3QkFBQTtBQUNGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFFRjs7QUFBQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFEQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUlGOztBQUZBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBS0Y7O0FBSEE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQU1GOztBQUpBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFPRiIsImZpbGUiOiJieS1jYXRlZ29yeS1jYXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhci1jb3RhaW5lcntcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLm1hdC10YWItZ3JvdXB7XHJcbiAgd2lkdGg6IDEyNTBweDtcclxuICBoZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1hdC1zZWxlY3Rpb24tbGlzdHtcclxuICB3aWR0aDogMzAwcHg7IFxyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuLmNhdGVnb3J5X19jb25hdGFpbmVye1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuLmNvbnRhaW5lcl9faW5mb3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiA2MHZ3O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDB2dztcclxuICByaWdodDogNXZ3O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdzsgXHJcbn1cclxuLmNhcl9faW1ne1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcbmltZ3tcclxuICB3aWR0aDogNTAwcHg7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxufVxyXG4uZGV0YWlsX19pbmZve1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIHdpZHRoOiAxNTBweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map