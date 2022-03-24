/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/style.css":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/style.css ***!
  \***********************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n! tailwindcss v3.0.23 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n[hidden] {\n  display: none;\n}\n    main {\n  display: flex;\n  flex-direction: row;\n}\n    h1 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n    h2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n\n*, ::before, ::after {\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.nav-branch {\n  display: flex;\n  flex-basis: 25%;\n  flex-direction: column;\n  --tw-bg-opacity: 1;\n  background-color: rgba(229, 231, 235, var(--tw-bg-opacity));\n}\n.dashboard {\n  display: flex;\n  flex-basis: 75%;\n  flex-direction: column;\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n.branch {\n  display: flex;\n  max-height: 2.5rem;\n  flex-direction: row;\n  --tw-bg-opacity: 1;\n  background-color: rgba(229, 231, 235, var(--tw-bg-opacity));\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.branch:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgba(243, 244, 246, var(--tw-bg-opacity));\n}\n.branch-status {\n  margin-top: 2.5rem;\n}\n.leaf {\n  display: flex;\n  flex-direction: row;\n  --tw-bg-opacity: 1;\n  background-color: rgba(59, 130, 246, var(--tw-bg-opacity));\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n  --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n}\n.leaf:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgba(29, 78, 216, var(--tw-bg-opacity));\n}\n.leaf:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 rgba(0,0,0,0);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 rgba(0,0,0,0);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0,0,0,0));\n  --tw-ring-color: rgba(96, 165, 250, var(--tw-ring-opacity));\n  --tw-ring-opacity: 0.75;\n}\n.leaf-status {\n  margin-right: 0.5rem;\n}\n.leaf-edit {\n  margin-left: 1rem;\n  border-radius: 0.125rem;\n  --tw-bg-opacity: 1;\n  background-color: rgba(96, 165, 250, var(--tw-bg-opacity));\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n.branch-form {\n  display: flex;\n  flex-direction: row;\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.branch-form-name {\n  margin-right: 0.25rem;\n  width: 100%;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  border-radius: 0.25rem;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgba(59, 130, 246, var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: rgba(243, 244, 246, var(--tw-bg-opacity));\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  line-height: 1.25;\n  --tw-text-opacity: 1;\n  color: rgba(55, 65, 81, var(--tw-text-opacity));\n}\n.branch-form-submit {\n  border-radius: 0.25rem;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgba(59, 130, 246, var(--tw-border-opacity));\n  background-color: transparent;\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgba(29, 78, 216, var(--tw-text-opacity));\n}\n.branch-form-submit:hover {\n  border-color: transparent;\n  --tw-bg-opacity: 1;\n  background-color: rgba(59, 130, 246, var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n.branch-delete {\n  margin-left: 0.5rem;\n  border-radius: 0.25rem;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgba(59, 130, 246, var(--tw-border-opacity));\n  background-color: transparent;\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgba(29, 78, 216, var(--tw-text-opacity));\n}\n.branch-delete:hover {\n  border-color: transparent;\n  --tw-bg-opacity: 1;\n  background-color: rgba(59, 130, 246, var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n.leaf-form {\n  display: flex;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.leaf-form-date, .leaf-form-name, .edit-leaf-name, .edit-leaf-date {\n  margin-right: 0.75rem;\n  width: 100%;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  border-radius: 0.25rem;\n  border-width: 1px;\n  --tw-bg-opacity: 1;\n  background-color: rgba(243, 244, 246, var(--tw-bg-opacity));\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  line-height: 1.25;\n  --tw-text-opacity: 1;\n  color: rgba(55, 65, 81, var(--tw-text-opacity));\n}\n.leaf-form-submit, .edit-leaf-submit {\n  border-radius: 0.25rem;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgba(59, 130, 246, var(--tw-border-opacity));\n  background-color: transparent;\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgba(29, 78, 216, var(--tw-text-opacity));\n}\n.leaf-form-submit:hover, .edit-leaf-submit:hover {\n  border-color: transparent;\n  --tw-bg-opacity: 1;\n  background-color: rgba(59, 130, 246, var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n.edit-leaf-form {\n  display: flex;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.edit-form-exit {\n  margin-left: 0.5rem;\n  border-radius: 0.25rem;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgba(59, 130, 246, var(--tw-border-opacity));\n  background-color: transparent;\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgba(29, 78, 216, var(--tw-text-opacity));\n}\n.edit-form-exit:hover {\n  border-color: transparent;\n  --tw-bg-opacity: 1;\n  background-color: rgba(59, 130, 246, var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n.add-branch {\n  --tw-bg-opacity: 1;\n  background-color: rgba(243, 244, 246, var(--tw-bg-opacity));\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  --tw-text-opacity: 1;\n  color: rgba(156, 163, 175, var(--tw-text-opacity));\n  --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n}\n.add-branch:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgba(107, 114, 128, var(--tw-bg-opacity));\n}\n.add-branch:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 rgba(0,0,0,0);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 rgba(0,0,0,0);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0,0,0,0));\n  --tw-ring-opacity: 0.75;\n}\n.add-leaf {\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  --tw-text-opacity: 1;\n  color: rgba(156, 163, 175, var(--tw-text-opacity));\n  --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n}\n.add-leaf:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgba(107, 114, 128, var(--tw-bg-opacity));\n}\n.add-leaf:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 rgba(0,0,0,0);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 rgba(0,0,0,0);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0,0,0,0));\n  --tw-ring-opacity: 0.75;\n}\n.hidden {\n  display: none;\n}\n\nhtml, body {\n    width: 100vw;\n    height: 100vh;\n    font-family: Arial;\n}\n\nmain {\n    width: 100%;\n    height: 100%;\n}\n\nsvg {\n    height: 100%;\n    width: 1rem;\n}\n.hidden {\n    display: none;\n}\n.branch-name {\n  flex-grow: 1;\n}\n.leaf-name {\n  flex-grow: 1;\n}\n.leaf-date {\n  --tw-text-opacity: 1;\n  color: rgba(219, 234, 254, var(--tw-text-opacity));\n}", "",{"version":3,"sources":["webpack://./src/style.css","webpack://./src/%3Cinput%20css%206y4Cj8%3E","<no source>"],"names":[],"mappings":"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","sourcesContent":["@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\nhtml, body {\n    width: 100vw;\n    height: 100vh;\n    font-family: Arial;\n}\n\nmain {\n    width: 100%;\n    height: 100%;\n}\n\n@layer base {\n    main {\n        @apply flex flex-row\n    }\n    h1 {\n        @apply text-2xl py-2 px-4;\n    }\n    h2 {\n        @apply text-xl py-2 px-4;\n    }\n}\n\n@layer components {\n    .nav-branch {\n        @apply flex flex-col basis-1/4 bg-gray-200;\n    }\n    .dashboard {\n        @apply flex flex-col basis-3/4 bg-white;\n    }\n    .branch {\n        @apply flex flex-row max-h-10 bg-gray-200 py-2 px-4 hover:bg-gray-100;\n    }\n    .branch-status {\n        @apply mt-10;\n    }\n    .leaf {\n        @apply flex flex-row py-2 px-4 bg-blue-500 text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75;\n    }\n    .leaf-status {\n        @apply mr-2;\n    }\n    .leaf-edit {\n        @apply px-2 ml-4 bg-blue-400 rounded-sm text-base text-white;\n    }\n    .branch-form  {\n        @apply flex flex-row px-3 py-2;\n    }\n    .branch-form-name {\n        @apply appearance-none bg-gray-100 border w-full border-blue-500 text-gray-700 mr-1 py-1 px-2 leading-tight rounded;\n    }\n    .branch-form-submit {\n        @apply bg-transparent hover:bg-blue-500 text-base text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded;\n    }\n    .branch-delete {\n        @apply ml-2 bg-transparent hover:bg-blue-500 text-xs text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded;\n    }\n    .leaf-form {\n        @apply flex py-2 px-2;\n    }\n    .leaf-form-date, .leaf-form-name, .edit-leaf-name, .edit-leaf-date {\n        @apply appearance-none bg-gray-100 border w-full text-gray-700 mr-3 py-1 px-2 leading-tight rounded;\n    }\n    .leaf-form-submit, .edit-leaf-submit {\n        @apply bg-transparent hover:bg-blue-500 text-xs text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded;\n    }\n    .edit-leaf-form {\n        @apply flex py-2 px-2;\n    }\n    .edit-form-exit {\n        @apply ml-2 bg-transparent hover:bg-blue-500 text-sm text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded;\n    }\n    .add-branch {\n        @apply py-2 px-4 bg-gray-100 text-gray-400 shadow-md hover:bg-gray-500 focus:outline-none focus:ring-2  focus:ring-opacity-75;\n    }\n    .add-leaf {\n        @apply py-2 px-4 bg-white text-gray-400 shadow-md hover:bg-gray-500 focus:outline-none focus:ring-2  focus:ring-opacity-75;\n    }\n\n}\n\nsvg {\n    height: 100%;\n    width: 1rem;\n}\n.hidden {\n    display: none;\n}\n.branch-name {\n    @apply grow;\n}\n.leaf-name {\n    @apply grow;\n}\n.leaf-date {\n    @apply text-blue-100;\n}","/*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: theme('borderColor.DEFAULT', currentColor); /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  tab-size: 4; /* 3 */\n  font-family: theme('fontFamily.sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"); /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: theme('fontFamily.mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace); /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: theme('colors.gray.400', #9ca3af); /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n[hidden] {\n  display: none;\n}\n",null],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */

function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return value instanceof Date || typeof value === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!../node_modules/postcss-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listeners": () => (/* binding */ listeners)
/* harmony export */ });
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.js */ "./src/render.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasks.js */ "./src/tasks.js");





const listeners = (function() {
    const branchNav = document.querySelector(".nav-branch")
    const dashboard = document.querySelector(".dashboard")
    const leafForm = document.querySelector(".leaf-form");
    const branchForm = document.querySelector(".branch-form");
    const addLeaf = document.querySelector(".add-leaf");
    const addBranch = document.querySelector(".add-branch");

    function events() {
        // TODO: Refactor into event handler below
        // Toggle forms

        addLeaf.addEventListener('click', function() {_render_js__WEBPACK_IMPORTED_MODULE_0__.renderState.show(leafForm)} );
        addBranch.addEventListener('click', function() {_render_js__WEBPACK_IMPORTED_MODULE_0__.renderState.show(branchForm)} );

        // Submit forms
        const submitLeaf = document.querySelector(".leaf-form-submit");
        const submitBranch = document.querySelector(".branch-form-submit");
        submitLeaf.addEventListener('click', getLeafProp);
        submitBranch.addEventListener('click', getBranchProp);

    }

    function getLeafProp() {
        let leafNameInput = document.querySelector(".leaf-form-name");
        let leafDateInput = document.querySelector(".leaf-form-date");

        let newLeafName = leafNameInput.value;
        let newLeafDate = leafDateInput.value;

        // Add to data
        _tasks_js__WEBPACK_IMPORTED_MODULE_3__.editTree.createLeaf(newLeafName, newLeafDate);
        (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveStorage)(_index_js__WEBPACK_IMPORTED_MODULE_2__.appe);
        _render_js__WEBPACK_IMPORTED_MODULE_0__.renderState.show(leafForm);
        _render_js__WEBPACK_IMPORTED_MODULE_0__.renderState.renderTree(_index_js__WEBPACK_IMPORTED_MODULE_2__.appe);
    }

    function getBranchProp() {
        const branchNameInput = document.querySelector(".branch-form-name");
        let newBranchName = branchNameInput.value;
        _tasks_js__WEBPACK_IMPORTED_MODULE_3__.editTree.createBranch(newBranchName);
        (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveStorage)(_index_js__WEBPACK_IMPORTED_MODULE_2__.appe);
        _render_js__WEBPACK_IMPORTED_MODULE_0__.renderState.show(branchForm);
        _render_js__WEBPACK_IMPORTED_MODULE_0__.renderState.renderTree(_index_js__WEBPACK_IMPORTED_MODULE_2__.appe);
    }

    branchNav.onclick = function(event) {
        let target = event.target
        if (!target) {
            return;
        }
        else if (target.matches(".branch-delete")) {
            console.log(target);
            let branch = target.parentNode;
            let name = branch.querySelector(".branch-name").textContent;
            _tasks_js__WEBPACK_IMPORTED_MODULE_3__.editTree.deleteBranch(name);
            _render_js__WEBPACK_IMPORTED_MODULE_0__.renderState.renderTree(_index_js__WEBPACK_IMPORTED_MODULE_2__.appe);
            (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveStorage)(_index_js__WEBPACK_IMPORTED_MODULE_2__.appe);

        }
    }

    dashboard.onclick = function(event) {
        // Checkbox listener
        let target = event.target
        if (!target) {
            return;
        }
        else if (target.matches(".leaf-edit")) {
            let leaf = target.closest(".leaf");

            // Render form
            _render_js__WEBPACK_IMPORTED_MODULE_0__.renderState.editLeafForm(leaf);
            _render_js__WEBPACK_IMPORTED_MODULE_0__.renderState.show(leaf);
        }
        else if (target.matches(".edit-leaf-submit")) {
            let leafForm = target.closest(".edit-leaf-form");
            let selectLeaf = target.parentNode.previousSibling;
            let newName = target.parentNode.querySelector(".edit-leaf-name").value;
            let newDate = target.parentNode.querySelector(".edit-leaf-date").value;
            let oldName = target.parentNode.previousSibling.querySelector(".leaf-name").textContent;
            // Set leaf name;
            _tasks_js__WEBPACK_IMPORTED_MODULE_3__.editTree.editLeaf(oldName, newName, newDate);

            _render_js__WEBPACK_IMPORTED_MODULE_0__.renderState.show(selectLeaf);
            _render_js__WEBPACK_IMPORTED_MODULE_0__.renderState.show(leafForm);
            _render_js__WEBPACK_IMPORTED_MODULE_0__.renderState.renderTree(_index_js__WEBPACK_IMPORTED_MODULE_2__.appe);
            (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveStorage)(_index_js__WEBPACK_IMPORTED_MODULE_2__.appe);
        }
        else if (target.matches(".edit-form-exit")) {
            let leafForm = target.closest(".edit-leaf-form");
            let leaf = target.parentNode.previousSibling;
            _render_js__WEBPACK_IMPORTED_MODULE_0__.renderState.show(leaf);
            leafForm.remove();
        }
        else if (target.matches("input[type=checkbox]")) {
            let leaf = target.closest(".leaf");
            console.log(leaf);
            // Remove from data
            let name = leaf.querySelector(".leaf-name").textContent;
            _tasks_js__WEBPACK_IMPORTED_MODULE_3__.editTree.deleteLeaf(name);
            _render_js__WEBPACK_IMPORTED_MODULE_0__.renderState.renderTree(_index_js__WEBPACK_IMPORTED_MODULE_2__.appe);
            (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveStorage)(_index_js__WEBPACK_IMPORTED_MODULE_2__.appe);
        }
        else {
            return;
        }
    }
    
    return {
        events,
    }
})();



/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCircle": () => (/* binding */ createCircle),
/* harmony export */   "createElemWithClass": () => (/* binding */ createElemWithClass)
/* harmony export */ });
// Create dom creation helpers
function createElemWithClass(elem, name, content, attrName, attrValue) {
    const element = document.createElement(elem);
    element.classList.add(name);

    if (content) {
        element.textContent = content;
    }

    if (attrName && attrValue) {
        element.setAttribute(attrName, attrValue);
    }
    return element;
}

function createCircle(status, classes) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttributeNS(null, "class",  classes);
    circle.setAttributeNS(null, "cx", "50%");
    circle.setAttributeNS(null, "cy", "50%");
    circle.setAttributeNS(null, "r",  5);
    if (status == true) {
        circle.setAttributeNS(null, "fill", "mediumaquamarine");
    }
    else {
        circle.setAttributeNS(null, "fill", "salmon");
    }
    svg.appendChild(circle);
    return svg;
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appe": () => (/* binding */ appe)
/* harmony export */ });
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.js */ "./src/render.js");
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events.js */ "./src/events.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasks.js */ "./src/tasks.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






window.Tree = _tasks_js__WEBPACK_IMPORTED_MODULE_3__.Tree;
window.Branch = _tasks_js__WEBPACK_IMPORTED_MODULE_3__.Branch;
window.Leaf = _tasks_js__WEBPACK_IMPORTED_MODULE_3__.Leaf;

let appe = [];

const loadPage = (function() {
    function init() {
        appe = (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.loadStorage)();
        _render_js__WEBPACK_IMPORTED_MODULE_0__.renderState.renderTree(appe);
        _events_js__WEBPACK_IMPORTED_MODULE_1__.listeners.events();
    }
    return {
        init
    }
})();

// Initialization
loadPage.init();



/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderState": () => (/* binding */ renderState)
/* harmony export */ });
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ "./src/helpers.js");


// get stuff from storage
const renderState = (function() {
    const dashboard = document.querySelector(".dashboard");
    const branchNav = document.querySelector(".nav-branch");
    const branchForm = document.querySelector(".branch-form");
    const leafForm = document.querySelector(".leaf-form");

    function renderTree(tree) {
        // Refresh tree
        document.querySelectorAll(".branch").forEach(n => n.remove());
        document.querySelectorAll(".leaf").forEach(n => n.remove());

        // Iterate through branches
        tree.branches.forEach(function(item, index) {
            branchNav.insertBefore(renderBranch(item, index), branchForm);
        });
    }

    function renderBranch(item, index) {
        const branch = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createElemWithClass)("div", "branch");

        //Iterate through branch properties
        for (const [key, value] of Object.entries(item)) {
            // For each object property (excluding arrays)
            if (Array.isArray(value) != true) {
                const element = document.createElement("span");
                if (key == "name") {
                    element.textContent = value;
                }
                else {
                    renderBranchStatus(branch, key, value);
                }
                element.classList.add(`branch-${key}`);
                branch.appendChild(element);
            }
        }

        // Delete button
        const branchDel = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createElemWithClass)("button", "branch-delete", "X");
        branch.appendChild(branchDel);
        
        // Iterate through leaves
        item.leaves.forEach(function(item, index) {
            dashboard.insertBefore(renderLeaves(item, index), leafForm);
        });

        return branch;
    }

    function renderLeaves(item, index) {
        const leaf = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createElemWithClass)("div", "leaf");
        leaf.appendChild((0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createElemWithClass)("input", `leaf-status`, "", "type", "checkbox"));

        // Iterate through leaf properties
        for (const [key, value] of Object.entries(item)) {
            leaf.appendChild((0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createElemWithClass)("span", `leaf-${key}`, value));            
        }

        leaf.appendChild((0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createElemWithClass)("button", 'leaf-edit', "Edit"));
        return leaf;
    }

    function show(element) {
        if (element.classList.contains("hidden")) {
            element.classList.remove("hidden");
        }
        else {
            element.classList.add("hidden");
        }
        
    }

    function renderBranchStatus(branch, key, value) {
        branch.appendChild((0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createCircle)(value, "branch-status"));
    }

    function editLeafForm(leaf) {
        const editForm = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createElemWithClass)("div", "edit-leaf-form")
        const editLeafName = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createElemWithClass)("input", "edit-leaf-name", "", "placeholder", "Name")
        const editLeafDate = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createElemWithClass)("input", "edit-leaf-date", "", "type", "date")
        const editFormSubmit = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createElemWithClass)("button", "edit-leaf-submit", "Edit")
        const editFormX = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createElemWithClass)("button", "edit-form-exit", "X")
        editForm.append(editLeafName, editLeafDate, editFormSubmit, editFormX);
        leaf.after(editForm);
    }

    return {
        renderTree,
        show,
        editLeafForm
    }

})();



/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadStorage": () => (/* binding */ loadStorage),
/* harmony export */   "saveStorage": () => (/* binding */ saveStorage)
/* harmony export */ });
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks.js */ "./src/tasks.js");


function loadStorage() {
    const appState = JSON.parse(localStorage.getItem("appState"));
    if (appState) {
        return appState;
    }
    else {
        return _tasks_js__WEBPACK_IMPORTED_MODULE_0__.createDefaultProject.createDefault();
    }
}
function saveStorage(tree) {
    window.localStorage.setItem("appState", JSON.stringify(tree));
}



/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Branch": () => (/* binding */ Branch),
/* harmony export */   "Leaf": () => (/* binding */ Leaf),
/* harmony export */   "Tree": () => (/* binding */ Tree),
/* harmony export */   "createDefaultProject": () => (/* binding */ createDefaultProject),
/* harmony export */   "editTree": () => (/* binding */ editTree)
/* harmony export */ });
/* harmony import */ var date_fns_isDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/isDate */ "./node_modules/date-fns/esm/isDate/index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");




class Tree {
    constructor(name) {
        this.name = name;
        this.branches = []; 
    }

    createBranch(name) {
        let newBranch = new Branch(name.value);
    }
}

class Branch {
    constructor(name, status) {
        this.name = name;
        this.leaves = [];
        this.active = status;
    }

    get branchName() {
        return this.name;
    }

    set branchName(value) {
        this.name = value;
    }

    get branchStatus() {
        return this.active;
    }
}

class Leaf {
    constructor(name, stat, date) {
        this.name = name;
        this.stat = stat;
        this.date = date;
    }

    get leafName() {
        return this.name;
    }

    set leafName(value) {
        this.name = value;
    }

    get leafStat() {
        return this.stat;
    }

    set leafStat(value) {
        this.stat = value;
    }

    get leafDate() {
        return this.date;
    }

    set leafDate(value) {
        if (!(0,date_fns_isDate__WEBPACK_IMPORTED_MODULE_2__.isDate)(value) || (0,date_fns_isDate__WEBPACK_IMPORTED_MODULE_2__.isPast)(value)) {
            return console.log("Error");
        }
        else {
            this.date = value;
        }
    }

    alerting() {
        alert("Hi")
    }
}

// Module: Default project
const createDefaultProject = (function() {
    function createDefault() {
        const defaultTree = new Tree("The Tree");
        const dailies = new Branch("Dailies", true);
        const weeklies = new Branch("Weeklies", false);

        const getMilk = new Leaf("Get milk", false, "");
        const getBread = new Leaf("Get bread", false, "");
        const makePlaylist = new Leaf("Make playlist", false, "");

        defaultTree.branches.push(dailies, weeklies);
        dailies.leaves.push(getMilk, getBread, makePlaylist);
        weeklies.leaves.push(getMilk, getBread, makePlaylist);

        return defaultTree;
    }

    return {
        createDefault
    }
})();

const editTree = (function() {
    function createLeaf(name, date) {
        if (!name) {
            return;
        }
        let newLeaf = new Leaf(name, false);
        if (date) {
            newLeaf.date = date;
        }
        let activeBranch = _index_js__WEBPACK_IMPORTED_MODULE_0__.appe.branches.find(branch => branch.active == true);
        activeBranch.leaves.push(newLeaf);
    }
    
    function deleteLeaf(name) {
        let activeLeaves = _index_js__WEBPACK_IMPORTED_MODULE_0__.appe.branches.find(branch => branch.active == true).leaves;
        activeLeaves.splice(activeLeaves.findIndex(function(item) {
            item.name == name;
        }), 1);
    }

    function editLeaf(oldName, newName, newDate) {
        if (!newName) {
            return;
        }
        else {
            let activeLeaves = _index_js__WEBPACK_IMPORTED_MODULE_0__.appe.branches.find(branch => branch.active == true).leaves;
            let activeLeafIndex = activeLeaves.findIndex(item => item.name == oldName);
            activeLeaves[activeLeafIndex].name = newName;
            if (newDate) {
                activeLeaves[activeLeafIndex].date = newDate;
            }
            else {
                activeLeaves[activeLeafIndex].date = "";
            }
        }
    }

    function createBranch(name) {
        let newBranch = new Branch(name, false);
        _index_js__WEBPACK_IMPORTED_MODULE_0__.appe.branches.push(newBranch);
    }

    function deleteBranch(name) {
        _index_js__WEBPACK_IMPORTED_MODULE_0__.appe.branches.splice(_index_js__WEBPACK_IMPORTED_MODULE_0__.appe.branches.findIndex(function(item) {
            item.name == name;
        }, 1));
    }
    
    return {
        createLeaf,
        deleteLeaf,
        createBranch,
        deleteBranch,
        editLeaf
    }
})();



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxNQUFNLE1BQU0saUJBQWlCLFdBQVcsT0FBTyxLQUFLLFdBQVcsVUFBVSxPQUFPLEtBQUssV0FBVyxPQUFPLE9BQU8sYUFBYSxXQUFXLFVBQVUsT0FBTyxNQUFNLE1BQU0sS0FBSyxhQUFhLE9BQU8sT0FBTyxNQUFNLEtBQUsscUJBQXFCLHNCQUFzQixRQUFRLEtBQUsscUJBQXFCLHNCQUFzQixRQUFRLE1BQU0scUJBQXFCLHNCQUFzQixRQUFRLE1BQU0sTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLEtBQUssS0FBSyxXQUFXLE9BQU8sUUFBUSxNQUFNLFlBQVkscUJBQXFCLHVCQUF1QixRQUFRLE1BQU0sTUFBTSxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sTUFBTSxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssd0NBQXdDLHVCQUF1QixzQkFBc0IsZ0JBQWdCLG1CQUFtQixvQkFBb0IseUJBQXlCLEdBQUcsVUFBVSxrQkFBa0IsbUJBQW1CLEdBQUcsaUJBQWlCLFlBQVkscUNBQXFDLFVBQVUsb0NBQW9DLE9BQU8sVUFBVSxtQ0FBbUMsT0FBTyxHQUFHLHVCQUF1QixtQkFBbUIscURBQXFELE9BQU8sa0JBQWtCLGtEQUFrRCxPQUFPLGVBQWUsZ0ZBQWdGLE9BQU8sc0JBQXNCLHVCQUF1QixPQUFPLGFBQWEsc0tBQXNLLE9BQU8sb0JBQW9CLHNCQUFzQixPQUFPLGtCQUFrQix1RUFBdUUsT0FBTyxxQkFBcUIseUNBQXlDLE9BQU8seUJBQXlCLDhIQUE4SCxPQUFPLDJCQUEyQiwyS0FBMkssT0FBTyxzQkFBc0IsOEtBQThLLE9BQU8sa0JBQWtCLGdDQUFnQyxPQUFPLDBFQUEwRSw4R0FBOEcsT0FBTyw0Q0FBNEMseUtBQXlLLE9BQU8sdUJBQXVCLGdDQUFnQyxPQUFPLHVCQUF1Qiw4S0FBOEssT0FBTyxtQkFBbUIsd0lBQXdJLE9BQU8saUJBQWlCLHFJQUFxSSxPQUFPLEtBQUssU0FBUyxtQkFBbUIsa0JBQWtCLEdBQUcsV0FBVyxvQkFBb0IsR0FBRyxnQkFBZ0Isa0JBQWtCLEdBQUcsY0FBYyxrQkFBa0IsR0FBRyxjQUFjLDJCQUEyQixHQUFHLCtRQUErUSw0QkFBNEIsNEJBQTRCLGdDQUFnQyxxRUFBcUUsVUFBVSx3QkFBd0IscUJBQXFCLEdBQUcscVBBQXFQLHNCQUFzQiwyQ0FBMkMsNkJBQTZCLHdCQUF3QixpUkFBaVIsVUFBVSxnS0FBZ0ssZUFBZSxpQ0FBaUMsVUFBVSwyTkFBMk4sZUFBZSwyQkFBMkIsa0NBQWtDLFVBQVUsaUdBQWlHLHNDQUFzQyxHQUFHLGtHQUFrRyx1QkFBdUIseUJBQXlCLEdBQUcsaUZBQWlGLG1CQUFtQiw2QkFBNkIsR0FBRywyRUFBMkUsd0JBQXdCLEdBQUcsMEpBQTBKLG1KQUFtSiwyQkFBMkIsVUFBVSxpRUFBaUUsbUJBQW1CLEdBQUcsMkdBQTJHLG1CQUFtQixtQkFBbUIsdUJBQXVCLDZCQUE2QixHQUFHLFNBQVMsb0JBQW9CLEdBQUcsU0FBUyxnQkFBZ0IsR0FBRyxnYkFBZ2Isb0JBQW9CLGtDQUFrQyxzQ0FBc0MsVUFBVSxrTUFBa00sMEJBQTBCLDRCQUE0QixpQ0FBaUMsMkJBQTJCLHNCQUFzQix1QkFBdUIsVUFBVSw4RkFBOEYseUJBQXlCLEdBQUcsbUxBQW1MLGdDQUFnQywwQ0FBMEMsbUNBQW1DLFVBQVUsK0ZBQStGLGtCQUFrQixHQUFHLCtNQUErTSxxQkFBcUIsR0FBRyxtRkFBbUYsNkJBQTZCLEdBQUcsaUpBQWlKLGlCQUFpQixHQUFHLDZIQUE2SCxtQ0FBbUMsaUNBQWlDLFVBQVUsb0dBQW9HLDZCQUE2QixHQUFHLHFLQUFxSyxnQ0FBZ0MsMEJBQTBCLFVBQVUsc0VBQXNFLHVCQUF1QixHQUFHLDRKQUE0SixjQUFjLEdBQUcsY0FBYyxjQUFjLGVBQWUsR0FBRyxZQUFZLGVBQWUsR0FBRyxvQkFBb0IscUJBQXFCLGNBQWMsZUFBZSxHQUFHLDZFQUE2RSxxQkFBcUIsR0FBRyx5UEFBeVAsZ0JBQWdCLHFEQUFxRCxVQUFVLCtFQUErRSxvQkFBb0IsR0FBRyxpRkFBaUYsb0JBQW9CLEdBQUcsbWJBQW1iLG9CQUFvQixtQ0FBbUMsVUFBVSx3S0FBd0ssb0JBQW9CLGlCQUFpQixHQUFHLHdGQUF3RixrQkFBa0IsR0FBRywwQkFBMEI7QUFDMXRsQztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3JCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNKeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsYUFBYSxTQUFTO0FBQ3RCLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7QUFDZDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQTBLO0FBQzFLO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0pBQU87Ozs7QUFJb0g7QUFDNUksT0FBTyxpRUFBZSxzSkFBTyxJQUFJLDZKQUFjLEdBQUcsNkpBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmMEM7QUFDQztBQUNUO0FBQ0k7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxzREFBc0Qsd0RBQWdCLFlBQVk7QUFDbEYsd0RBQXdELHdEQUFnQixjQUFjOztBQUV0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSwwREFBbUI7QUFDM0IsUUFBUSx3REFBVyxDQUFDLDJDQUFJO0FBQ3hCLFFBQVEsd0RBQWdCO0FBQ3hCLFFBQVEsOERBQXNCLENBQUMsMkNBQUk7QUFDbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0REFBcUI7QUFDN0IsUUFBUSx3REFBVyxDQUFDLDJDQUFJO0FBQ3hCLFFBQVEsd0RBQWdCO0FBQ3hCLFFBQVEsOERBQXNCLENBQUMsMkNBQUk7QUFDbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw0REFBcUI7QUFDakMsWUFBWSw4REFBc0IsQ0FBQywyQ0FBSTtBQUN2QyxZQUFZLHdEQUFXLENBQUMsMkNBQUk7O0FBRTVCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksZ0VBQXdCO0FBQ3BDLFlBQVksd0RBQWdCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHdEQUFpQjs7QUFFN0IsWUFBWSx3REFBZ0I7QUFDNUIsWUFBWSx3REFBZ0I7QUFDNUIsWUFBWSw4REFBc0IsQ0FBQywyQ0FBSTtBQUN2QyxZQUFZLHdEQUFXLENBQUMsMkNBQUk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHdEQUFnQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMERBQW1CO0FBQy9CLFlBQVksOERBQXNCLENBQUMsMkNBQUk7QUFDdkMsWUFBWSx3REFBVyxDQUFDLDJDQUFJO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckhEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QjBDO0FBQ0Y7QUFDRztBQUNLO0FBQzNCOztBQUVyQixjQUFjLDJDQUFJO0FBQ2xCLGdCQUFnQiw2Q0FBTTtBQUN0QixjQUFjLDJDQUFJOztBQUVsQjs7QUFFQTtBQUNBO0FBQ0EsZUFBZSx3REFBVztBQUMxQixRQUFRLDhEQUFzQjtBQUM5QixRQUFRLHdEQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QmdFOztBQUVoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EsdUJBQXVCLGdFQUFtQjs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxJQUFJO0FBQ3BEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixnRUFBbUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixnRUFBbUI7QUFDeEMseUJBQXlCLGdFQUFtQjs7QUFFNUM7QUFDQTtBQUNBLDZCQUE2QixnRUFBbUIsaUJBQWlCLElBQUk7QUFDckU7O0FBRUEseUJBQXlCLGdFQUFtQjtBQUM1QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQix5REFBWTtBQUN2Qzs7QUFFQTtBQUNBLHlCQUF5QixnRUFBbUI7QUFDNUMsNkJBQTZCLGdFQUFtQjtBQUNoRCw2QkFBNkIsZ0VBQW1CO0FBQ2hELCtCQUErQixnRUFBbUI7QUFDbEQsMEJBQTBCLGdFQUFtQjtBQUM3QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RmlEOztBQUVsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHlFQUFrQztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JpRDtBQUNmO0FBQ1M7O0FBRXBDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLHVEQUFNLFdBQVcsdURBQU07QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIseURBQWtCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHlEQUFrQjtBQUM3QztBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IseURBQWtCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLHlEQUFrQjtBQUMxQjs7QUFFQTtBQUNBLFFBQVEsMkRBQW9CLENBQUMsOERBQXVCO0FBQ3BEO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7O1VDMUpEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9saWFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZm9saWFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZm9saWFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2ZvbGlhZ2UvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL2ZvbGlhZ2UvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9mb2xpYWdlLy4vc3JjL3N0eWxlLmNzcz9kNGJiIiwid2VicGFjazovL2ZvbGlhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZm9saWFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZm9saWFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9mb2xpYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2ZvbGlhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9mb2xpYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZm9saWFnZS8uL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vZm9saWFnZS8uL3NyYy9oZWxwZXJzLmpzIiwid2VicGFjazovL2ZvbGlhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZm9saWFnZS8uL3NyYy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vZm9saWFnZS8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL2ZvbGlhZ2UvLi9zcmMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vZm9saWFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mb2xpYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2ZvbGlhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2ZvbGlhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9mb2xpYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZm9saWFnZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2ZvbGlhZ2Uvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2ZvbGlhZ2Uvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXG4hIHRhaWx3aW5kY3NzIHYzLjAuMjMgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tXFxuKi8vKlxcbjEuIFByZXZlbnQgcGFkZGluZyBhbmQgYm9yZGVyIGZyb20gYWZmZWN0aW5nIGVsZW1lbnQgd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzQpXFxuMi4gQWxsb3cgYWRkaW5nIGEgYm9yZGVyIHRvIGFuIGVsZW1lbnQgYnkganVzdCBhZGRpbmcgYSBib3JkZXItd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvcHVsbC8xMTYpXFxuKi9cXG5cXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgYm9yZGVyLXdpZHRoOiAwOyAvKiAyICovXFxuICBib3JkZXItc3R5bGU6IHNvbGlkOyAvKiAyICovXFxuICBib3JkZXItY29sb3I6ICNlNWU3ZWI7IC8qIDIgKi9cXG59XFxuXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICAtLXR3LWNvbnRlbnQ6ICcnO1xcbn1cXG5cXG4vKlxcbjEuIFVzZSBhIGNvbnNpc3RlbnQgc2Vuc2libGUgbGluZS1oZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbjIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbjMuIFVzZSBhIG1vcmUgcmVhZGFibGUgdGFiIHNpemUuXFxuNC4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgc2Fuc2AgZm9udC1mYW1pbHkgYnkgZGVmYXVsdC5cXG4qL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTsgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxuICAtbW96LXRhYi1zaXplOiA0OyAvKiAzICovXFxuICAtby10YWItc2l6ZTogNDtcXG4gICAgIHRhYi1zaXplOiA0OyAvKiAzICovXFxuICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBTZWdvZSBVSSwgUm9ib3RvLCBVYnVudHUsIENhbnRhcmVsbCwgTm90byBTYW5zLCBzYW5zLXNlcmlmLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgQXJpYWwsIFxcXCJOb3RvIFNhbnNcXFwiLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIiwgXFxcIk5vdG8gQ29sb3IgRW1vamlcXFwiOyAvKiA0ICovXFxufVxcblxcbi8qXFxuMS4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbjIuIEluaGVyaXQgbGluZS1oZWlnaHQgZnJvbSBgaHRtbGAgc28gdXNlcnMgY2FuIHNldCB0aGVtIGFzIGEgY2xhc3MgZGlyZWN0bHkgb24gdGhlIGBodG1sYCBlbGVtZW50LlxcbiovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qXFxuMS4gQWRkIHRoZSBjb3JyZWN0IGhlaWdodCBpbiBGaXJlZm94LlxcbjIuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIG9mIGJvcmRlciBjb2xvciBpbiBGaXJlZm94LiAoaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTkwNjU1KVxcbjMuIEVuc3VyZSBob3Jpem9udGFsIHJ1bGVzIGFyZSB2aXNpYmxlIGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG5ociB7XFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7IC8qIDMgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmFiYnI6d2hlcmUoW3RpdGxlXSkge1xcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG59XFxuXFxuLypcXG5SZW1vdmUgdGhlIGRlZmF1bHQgZm9udCBzaXplIGFuZCB3ZWlnaHQgZm9yIGhlYWRpbmdzLlxcbiovXFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi8qXFxuUmVzZXQgbGlua3MgdG8gb3B0aW1pemUgZm9yIG9wdC1pbiBzdHlsaW5nIGluc3RlYWQgb2Ygb3B0LW91dC5cXG4qL1xcblxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIEVkZ2UgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qXFxuMS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgbW9ub2AgZm9udCBmYW1pbHkgYnkgZGVmYXVsdC5cXG4yLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wLFxcbnByZSB7XFxuICBmb250LWZhbWlseTogdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFxcXCJMaWJlcmF0aW9uIE1vbm9cXFwiLCBcXFwiQ291cmllciBOZXdcXFwiLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLypcXG5QcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qXFxuMS4gUmVtb3ZlIHRleHQgaW5kZW50YXRpb24gZnJvbSB0YWJsZSBjb250ZW50cyBpbiBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTk5OTA4OCwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIwMTI5NylcXG4yLiBDb3JyZWN0IHRhYmxlIGJvcmRlciBjb2xvciBpbmhlcml0YW5jZSBpbiBhbGwgQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05MzU3MjksIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTUwMTYpXFxuMy4gUmVtb3ZlIGdhcHMgYmV0d2VlbiB0YWJsZSBib3JkZXJzIGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG50YWJsZSB7XFxuICB0ZXh0LWluZGVudDogMDsgLyogMSAqL1xcbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyAvKiAzICovXFxufVxcblxcbi8qXFxuMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbjMuIFJlbW92ZSBkZWZhdWx0IHBhZGRpbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSBhbmQgRmlyZWZveC5cXG4qL1xcblxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qXFxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4yLiBSZW1vdmUgZGVmYXVsdCBidXR0b24gc3R5bGVzLlxcbiovXFxuXFxuYnV0dG9uLFxcblt0eXBlPSdidXR0b24nXSxcXG5bdHlwZT0ncmVzZXQnXSxcXG5bdHlwZT0nc3VibWl0J10ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiAyICovXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lOyAvKiAyICovXFxufVxcblxcbi8qXFxuVXNlIHRoZSBtb2Rlcm4gRmlyZWZveCBmb2N1cyBzdHlsZSBmb3IgYWxsIGZvY3VzYWJsZSBlbGVtZW50cy5cXG4qL1xcblxcbjotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiBhdXRvO1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgYWRkaXRpb25hbCBgOmludmFsaWRgIHN0eWxlcyBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvZ2Vja28tZGV2L2Jsb2IvMmY5ZWFjZDlkM2Q5OTVjOTM3YjQyNTFhNTU1N2Q5NWQ0OTRjOWJlMS9sYXlvdXQvc3R5bGUvcmVzL2Zvcm1zLmNzcyNMNzI4LUw3MzcpXFxuKi9cXG5cXG46LW1vei11aS1pbnZhbGlkIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUgYW5kIEZpcmVmb3guXFxuKi9cXG5cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qXFxuQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qXFxuMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuKi9cXG5cXG5bdHlwZT0nc2VhcmNoJ10ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiovXFxuXFxuOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbjIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4qL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4qL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKlxcblJlbW92ZXMgdGhlIGRlZmF1bHQgc3BhY2luZyBhbmQgYm9yZGVyIGZvciBhcHByb3ByaWF0ZSBlbGVtZW50cy5cXG4qL1xcblxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxuaHIsXFxuZmlndXJlLFxcbnAsXFxucHJlIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxubGVnZW5kIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbm9sLFxcbnVsLFxcbm1lbnUge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qXFxuUHJldmVudCByZXNpemluZyB0ZXh0YXJlYXMgaG9yaXpvbnRhbGx5IGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG4vKlxcbjEuIFJlc2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIG9wYWNpdHkgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGxhYnMvdGFpbHdpbmRjc3MvaXNzdWVzLzMzMDApXFxuMi4gU2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIGNvbG9yIHRvIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBncmF5IDQwMCBjb2xvci5cXG4qL1xcblxcbmlucHV0OjotbW96LXBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAxOyAvKiAxICovXFxuICBjb2xvcjogIzljYTNhZjsgLyogMiAqL1xcbn1cXG5cXG5pbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIsIHRleHRhcmVhOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAxOyAvKiAxICovXFxuICBjb2xvcjogIzljYTNhZjsgLyogMiAqL1xcbn1cXG5cXG5pbnB1dDo6cGxhY2Vob2xkZXIsXFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXFxufVxcblxcbi8qXFxuU2V0IHRoZSBkZWZhdWx0IGN1cnNvciBmb3IgYnV0dG9ucy5cXG4qL1xcblxcbmJ1dHRvbixcXG5bcm9sZT1cXFwiYnV0dG9uXFxcIl0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKlxcbk1ha2Ugc3VyZSBkaXNhYmxlZCBidXR0b25zIGRvbid0IGdldCB0aGUgcG9pbnRlciBjdXJzb3IuXFxuKi9cXG46ZGlzYWJsZWQge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4vKlxcbjEuIE1ha2UgcmVwbGFjZWQgZWxlbWVudHMgYGRpc3BsYXk6IGJsb2NrYCBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcXG4yLiBBZGQgYHZlcnRpY2FsLWFsaWduOiBtaWRkbGVgIHRvIGFsaWduIHJlcGxhY2VkIGVsZW1lbnRzIG1vcmUgc2Vuc2libHkgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9qZW5zaW1tb25zL2Nzc3JlbWVkeS9pc3N1ZXMvMTQjaXNzdWVjb21tZW50LTYzNDkzNDIxMClcXG4gICBUaGlzIGNhbiB0cmlnZ2VyIGEgcG9vcmx5IGNvbnNpZGVyZWQgbGludCBlcnJvciBpbiBzb21lIHRvb2xzIGJ1dCBpcyBpbmNsdWRlZCBieSBkZXNpZ24uXFxuKi9cXG5cXG5pbWcsXFxuc3ZnLFxcbnZpZGVvLFxcbmNhbnZhcyxcXG5hdWRpbyxcXG5pZnJhbWUsXFxuZW1iZWQsXFxub2JqZWN0IHtcXG4gIGRpc3BsYXk6IGJsb2NrOyAvKiAxICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvKiAyICovXFxufVxcblxcbi8qXFxuQ29uc3RyYWluIGltYWdlcyBhbmQgdmlkZW9zIHRvIHRoZSBwYXJlbnQgd2lkdGggYW5kIHByZXNlcnZlIHRoZWlyIGludHJpbnNpYyBhc3BlY3QgcmF0aW8uIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxcbiovXFxuXFxuaW1nLFxcbnZpZGVvIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLypcXG5FbnN1cmUgdGhlIGRlZmF1bHQgYnJvd3NlciBiZWhhdmlvciBvZiB0aGUgYGhpZGRlbmAgYXR0cmlidXRlLlxcbiovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuICAgIG1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcbiAgICBoMSB7XFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xcbn1cXG4gICAgaDIge1xcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XFxufVxcblxcbiosIDo6YmVmb3JlLCA6OmFmdGVyIHtcXG4gIC0tdHctdHJhbnNsYXRlLXg6IDA7XFxuICAtLXR3LXRyYW5zbGF0ZS15OiAwO1xcbiAgLS10dy1yb3RhdGU6IDA7XFxuICAtLXR3LXNrZXcteDogMDtcXG4gIC0tdHctc2tldy15OiAwO1xcbiAgLS10dy1zY2FsZS14OiAxO1xcbiAgLS10dy1zY2FsZS15OiAxO1xcbiAgLS10dy1wYW4teDogIDtcXG4gIC0tdHctcGFuLXk6ICA7XFxuICAtLXR3LXBpbmNoLXpvb206ICA7XFxuICAtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3M6IHByb3hpbWl0eTtcXG4gIC0tdHctb3JkaW5hbDogIDtcXG4gIC0tdHctc2xhc2hlZC16ZXJvOiAgO1xcbiAgLS10dy1udW1lcmljLWZpZ3VyZTogIDtcXG4gIC0tdHctbnVtZXJpYy1zcGFjaW5nOiAgO1xcbiAgLS10dy1udW1lcmljLWZyYWN0aW9uOiAgO1xcbiAgLS10dy1yaW5nLWluc2V0OiAgO1xcbiAgLS10dy1yaW5nLW9mZnNldC13aWR0aDogMHB4O1xcbiAgLS10dy1yaW5nLW9mZnNldC1jb2xvcjogI2ZmZjtcXG4gIC0tdHctcmluZy1jb2xvcjogcmdiYSg1OSwgMTMwLCAyNDYsIDAuNSk7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XFxuICAtLXR3LXJpbmctc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcXG4gIC0tdHctc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcXG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCByZ2JhKDAsMCwwLDApO1xcbiAgLS10dy1ibHVyOiAgO1xcbiAgLS10dy1icmlnaHRuZXNzOiAgO1xcbiAgLS10dy1jb250cmFzdDogIDtcXG4gIC0tdHctZ3JheXNjYWxlOiAgO1xcbiAgLS10dy1odWUtcm90YXRlOiAgO1xcbiAgLS10dy1pbnZlcnQ6ICA7XFxuICAtLXR3LXNhdHVyYXRlOiAgO1xcbiAgLS10dy1zZXBpYTogIDtcXG4gIC0tdHctZHJvcC1zaGFkb3c6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWJsdXI6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3M6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWNvbnRyYXN0OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1ncmF5c2NhbGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWludmVydDogIDtcXG4gIC0tdHctYmFja2Ryb3Atb3BhY2l0eTogIDtcXG4gIC0tdHctYmFja2Ryb3Atc2F0dXJhdGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLXNlcGlhOiAgO1xcbn1cXG4ubmF2LWJyYW5jaCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1iYXNpczogMjUlO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI5LCAyMzEsIDIzNSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4uZGFzaGJvYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWJhc2lzOiA3NSU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5icmFuY2gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1heC1oZWlnaHQ6IDIuNXJlbTtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyOSwgMjMxLCAyMzUsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcXG59XFxuLmJyYW5jaDpob3ZlciB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MywgMjQ0LCAyNDYsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmJyYW5jaC1zdGF0dXMge1xcbiAgbWFyZ2luLXRvcDogMi41cmVtO1xcbn1cXG4ubGVhZiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTksIDEzMCwgMjQ2LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbiAgLS10dy1zaGFkb3c6IDAgNHB4IDZweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAycHggNHB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCA0cHggNnB4IC0xcHggdmFyKC0tdHctc2hhZG93LWNvbG9yKSwgMCAycHggNHB4IC0ycHggdmFyKC0tdHctc2hhZG93LWNvbG9yKTtcXG4gIGJveC1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApLCAwIDAgcmdiYSgwLDAsMCwwKSwgdmFyKC0tdHctc2hhZG93KTtcXG4gIGJveC1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApLCAwIDAgcmdiYSgwLDAsMCwwKSwgdmFyKC0tdHctc2hhZG93KTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwIHJnYmEoMCwwLDAsMCkpLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwIHJnYmEoMCwwLDAsMCkpLCB2YXIoLS10dy1zaGFkb3cpO1xcbn1cXG4ubGVhZjpob3ZlciB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI5LCA3OCwgMjE2LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5sZWFmOmZvY3VzIHtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIG91dGxpbmUtb2Zmc2V0OiAycHg7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogdmFyKC0tdHctcmluZy1pbnNldCkgMCAwIDAgdmFyKC0tdHctcmluZy1vZmZzZXQtd2lkdGgpIHZhcigtLXR3LXJpbmctb2Zmc2V0LWNvbG9yKTtcXG4gIC0tdHctcmluZy1zaGFkb3c6IHZhcigtLXR3LXJpbmctaW5zZXQpIDAgMCAwIGNhbGMoMnB4ICsgdmFyKC0tdHctcmluZy1vZmZzZXQtd2lkdGgpKSB2YXIoLS10dy1yaW5nLWNvbG9yKTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdyksIHZhcigtLXR3LXJpbmctc2hhZG93KSwgMCAwIHJnYmEoMCwwLDAsMCk7XFxuICBib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3cpLCB2YXIoLS10dy1yaW5nLXNoYWRvdyksIDAgMCByZ2JhKDAsMCwwLDApO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93KSwgdmFyKC0tdHctcmluZy1zaGFkb3cpLCB2YXIoLS10dy1zaGFkb3csIDAgMCByZ2JhKDAsMCwwLDApKTtcXG4gIC0tdHctcmluZy1jb2xvcjogcmdiYSg5NiwgMTY1LCAyNTAsIHZhcigtLXR3LXJpbmctb3BhY2l0eSkpO1xcbiAgLS10dy1yaW5nLW9wYWNpdHk6IDAuNzU7XFxufVxcbi5sZWFmLXN0YXR1cyB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG59XFxuLmxlYWYtZWRpdCB7XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMTI1cmVtO1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5NiwgMTY1LCAyNTAsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi5icmFuY2gtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIHBhZGRpbmctbGVmdDogMC43NXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVyZW07XFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG59XFxuLmJyYW5jaC1mb3JtLW5hbWUge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDU5LCAxMzAsIDI0NiwgdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQzLCAyNDQsIDI0NiwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbiAgcGFkZGluZy10b3A6IDAuMjVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbTtcXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2JhKDU1LCA2NSwgODEsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4uYnJhbmNoLWZvcm0tc3VibWl0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICBib3JkZXItd2lkdGg6IDFweDtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICBib3JkZXItY29sb3I6IHJnYmEoNTksIDEzMCwgMjQ2LCB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nLXRvcDogMC4yNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBsaW5lLWhlaWdodDogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYmEoMjksIDc4LCAyMTYsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4uYnJhbmNoLWZvcm0tc3VibWl0OmhvdmVyIHtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU5LCAxMzAsIDI0NiwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLmJyYW5jaC1kZWxldGUge1xcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICBib3JkZXItd2lkdGg6IDFweDtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICBib3JkZXItY29sb3I6IHJnYmEoNTksIDEzMCwgMjQ2LCB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nLXRvcDogMC4yNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxuICBsaW5lLWhlaWdodDogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2JhKDI5LCA3OCwgMjE2LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLmJyYW5jaC1kZWxldGU6aG92ZXIge1xcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTksIDEzMCwgMjQ2LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4ubGVhZi1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcbn1cXG4ubGVhZi1mb3JtLWRhdGUsIC5sZWFmLWZvcm0tbmFtZSwgLmVkaXQtbGVhZi1uYW1lLCAuZWRpdC1sZWFmLWRhdGUge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjc1cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MywgMjQ0LCAyNDYsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG4gIHBhZGRpbmctdG9wOiAwLjI1cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuMjVyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiYSg1NSwgNjUsIDgxLCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLmxlYWYtZm9ybS1zdWJtaXQsIC5lZGl0LWxlYWYtc3VibWl0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICBib3JkZXItd2lkdGg6IDFweDtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICBib3JkZXItY29sb3I6IHJnYmEoNTksIDEzMCwgMjQ2LCB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nLXRvcDogMC4yNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxuICBsaW5lLWhlaWdodDogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2JhKDI5LCA3OCwgMjE2LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLmxlYWYtZm9ybS1zdWJtaXQ6aG92ZXIsIC5lZGl0LWxlYWYtc3VibWl0OmhvdmVyIHtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU5LCAxMzAsIDI0NiwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLmVkaXQtbGVhZi1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcbn1cXG4uZWRpdC1mb3JtLWV4aXQge1xcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICBib3JkZXItd2lkdGg6IDFweDtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICBib3JkZXItY29sb3I6IHJnYmEoNTksIDEzMCwgMjQ2LCB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nLXRvcDogMC4yNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiYSgyOSwgNzgsIDIxNiwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi5lZGl0LWZvcm0tZXhpdDpob3ZlciB7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1OSwgMTMwLCAyNDYsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi5hZGQtYnJhbmNoIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQzLCAyNDQsIDI0NiwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiYSgxNTYsIDE2MywgMTc1LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG4gIC0tdHctc2hhZG93OiAwIDRweCA2cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMnB4IDRweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgNHB4IDZweCAtMXB4IHZhcigtLXR3LXNoYWRvdy1jb2xvciksIDAgMnB4IDRweCAtMnB4IHZhcigtLXR3LXNoYWRvdy1jb2xvcik7XFxuICBib3gtc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKSwgMCAwIHJnYmEoMCwwLDAsMCksIHZhcigtLXR3LXNoYWRvdyk7XFxuICBib3gtc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKSwgMCAwIHJnYmEoMCwwLDAsMCksIHZhcigtLXR3LXNoYWRvdyk7XFxuICBib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCByZ2JhKDAsMCwwLDApKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCByZ2JhKDAsMCwwLDApKSwgdmFyKC0tdHctc2hhZG93KTtcXG59XFxuLmFkZC1icmFuY2g6aG92ZXIge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDcsIDExNCwgMTI4LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5hZGQtYnJhbmNoOmZvY3VzIHtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIG91dGxpbmUtb2Zmc2V0OiAycHg7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogdmFyKC0tdHctcmluZy1pbnNldCkgMCAwIDAgdmFyKC0tdHctcmluZy1vZmZzZXQtd2lkdGgpIHZhcigtLXR3LXJpbmctb2Zmc2V0LWNvbG9yKTtcXG4gIC0tdHctcmluZy1zaGFkb3c6IHZhcigtLXR3LXJpbmctaW5zZXQpIDAgMCAwIGNhbGMoMnB4ICsgdmFyKC0tdHctcmluZy1vZmZzZXQtd2lkdGgpKSB2YXIoLS10dy1yaW5nLWNvbG9yKTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdyksIHZhcigtLXR3LXJpbmctc2hhZG93KSwgMCAwIHJnYmEoMCwwLDAsMCk7XFxuICBib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3cpLCB2YXIoLS10dy1yaW5nLXNoYWRvdyksIDAgMCByZ2JhKDAsMCwwLDApO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93KSwgdmFyKC0tdHctcmluZy1zaGFkb3cpLCB2YXIoLS10dy1zaGFkb3csIDAgMCByZ2JhKDAsMCwwLDApKTtcXG4gIC0tdHctcmluZy1vcGFjaXR5OiAwLjc1O1xcbn1cXG4uYWRkLWxlYWYge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2JhKDE1NiwgMTYzLCAxNzUsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbiAgLS10dy1zaGFkb3c6IDAgNHB4IDZweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAycHggNHB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCA0cHggNnB4IC0xcHggdmFyKC0tdHctc2hhZG93LWNvbG9yKSwgMCAycHggNHB4IC0ycHggdmFyKC0tdHctc2hhZG93LWNvbG9yKTtcXG4gIGJveC1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApLCAwIDAgcmdiYSgwLDAsMCwwKSwgdmFyKC0tdHctc2hhZG93KTtcXG4gIGJveC1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApLCAwIDAgcmdiYSgwLDAsMCwwKSwgdmFyKC0tdHctc2hhZG93KTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwIHJnYmEoMCwwLDAsMCkpLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwIHJnYmEoMCwwLDAsMCkpLCB2YXIoLS10dy1zaGFkb3cpO1xcbn1cXG4uYWRkLWxlYWY6aG92ZXIge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDcsIDExNCwgMTI4LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5hZGQtbGVhZjpmb2N1cyB7XFxuICBvdXRsaW5lOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBvdXRsaW5lLW9mZnNldDogMnB4O1xcbiAgLS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IHZhcigtLXR3LXJpbmctaW5zZXQpIDAgMCAwIHZhcigtLXR3LXJpbmctb2Zmc2V0LXdpZHRoKSB2YXIoLS10dy1yaW5nLW9mZnNldC1jb2xvcik7XFxuICAtLXR3LXJpbmctc2hhZG93OiB2YXIoLS10dy1yaW5nLWluc2V0KSAwIDAgMCBjYWxjKDJweCArIHZhcigtLXR3LXJpbmctb2Zmc2V0LXdpZHRoKSkgdmFyKC0tdHctcmluZy1jb2xvcik7XFxuICBib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3cpLCB2YXIoLS10dy1yaW5nLXNoYWRvdyksIDAgMCByZ2JhKDAsMCwwLDApO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93KSwgdmFyKC0tdHctcmluZy1zaGFkb3cpLCAwIDAgcmdiYSgwLDAsMCwwKTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdyksIHZhcigtLXR3LXJpbmctc2hhZG93KSwgdmFyKC0tdHctc2hhZG93LCAwIDAgcmdiYSgwLDAsMCwwKSk7XFxuICAtLXR3LXJpbmctb3BhY2l0eTogMC43NTtcXG59XFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBmb250LWZhbWlseTogQXJpYWw7XFxufVxcblxcbm1haW4ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5zdmcge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxcmVtO1xcbn1cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuLmJyYW5jaC1uYW1lIHtcXG4gIGZsZXgtZ3JvdzogMTtcXG59XFxuLmxlYWYtbmFtZSB7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcbi5sZWFmLWRhdGUge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiYSgyMTksIDIzNCwgMjU0LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiLFwid2VicGFjazovLy4vc3JjLyUzQ2lucHV0JTIwY3NzJTIwNnk0Q2o4JTNFXCIsXCI8bm8gc291cmNlPlwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Q0FBYyxDQUFkOzs7Q0FBYzs7QUFBZDs7O0VDUUUsc0JBQXNCLEVBQUUsTUFBTTtFQUM5QixlQUFlLEVBQUUsTUFBTTtFQUN2QixtQkFBbUIsRUFBRSxNQUFNO0VBQzNCLHFCQUF3RCxFQUFFLE1BQU07QURYcEQ7O0FBQWQ7O0VDZ0JFLGdCQUFnQjtBRGhCSjs7QUFBZDs7Ozs7Q0FBYzs7QUFBZDtFQzJCRSxnQkFBZ0IsRUFBRSxNQUFNO0VBQ3hCLDhCQUE4QixFQUFFLE1BQU07RUFDdEMsZ0JBQWdCLEVBQUUsTUFBTTtFQUN4QixjQUFXO0tBQVgsV0FBVyxFQUFFLE1BQU07RUFDbkIsd1JBQXNQLEVBQUUsTUFBTTtBRC9CbFA7O0FBQWQ7OztDQUFjOztBQUFkO0VDd0NFLFNBQVMsRUFBRSxNQUFNO0VBQ2pCLG9CQUFvQixFQUFFLE1BQU07QUR6Q2hCOztBQUFkOzs7O0NBQWM7O0FBQWQ7RUNtREUsU0FBUyxFQUFFLE1BQU07RUFDakIsY0FBYyxFQUFFLE1BQU07RUFDdEIscUJBQXFCLEVBQUUs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QSxtQkFBQTtFQUFBLDJEQUFBO0VBQUEscUJBQUE7RUFBQTtDQUFBO0FBQUE7RUFBQSxtQkFBQTtFQUFBLDREQUFBO0VBQUEsb0JBQUE7RUFBQSx1QkFBQTtFQUFBLG1CQUFBO0VBQUEsb0JBQUE7RUFBQSxxQkFBQTtFQUFBLG1EQUFBO0VBQUEsa0ZBQUE7RUFBQSxrR0FBQTtFQUFBLG1FQUFBO0VBQUEsbUVBQUE7RUFBQTtDQUFBO0FBQUE7RUFBQSxtQkFBQTtFQUFBO0NBQUE7QUFBQTtFQUFBLCtCQUFBO0VBQUEsb0JBQUE7RUFBQSw0R0FBQTtFQUFBLDBHQUFBO0VBQUEsbUZBQUE7RUFBQSxtRkFBQTtFQUFBLHFHQUFBO0VBQUE7Q0FBQTtBQUFBO0VBQUEsbUJBQUE7RUFBQSw0REFBQTtFQUFBLG9CQUFBO0VBQUEsdUJBQUE7RUFBQSxtQkFBQTtFQUFBLG9CQUFBO0VBQUEscUJBQUE7RUFBQSxtREFBQTtFQUFBLGtGQUFBO0VBQUEsa0dBQUE7RUFBQSxtRUFBQTtFQUFBLG1FQUFBO0VBQUE7Q0FBQTtBQUFBO0VBQUEsbUJBQUE7RUFBQTtDQUFBO0FBQUE7RUFBQSwrQkFBQTtFQUFBLG9CQUFBO0VBQUEsNEdBQUE7RUFBQSwwR0FBQTtFQUFBLG1GQUFBO0VBQUEsbUZBQUE7RUFBQSxxR0FBQTtFQUFBO0NBQUE7QUZFQTtFRUZBO0FGRW1COztBQUVuQjtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBd0VBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBRTNGQTtFQUFBO0NBQUE7QUFBQTtFQUFBO0NBQUE7QUFBQTtFQUFBLHFCQUFBO0VBQUE7Q0FBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdGFpbHdpbmQgYmFzZTtcXG5AdGFpbHdpbmQgY29tcG9uZW50cztcXG5AdGFpbHdpbmQgdXRpbGl0aWVzO1xcblxcbmh0bWwsIGJvZHkge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcXG59XFxuXFxubWFpbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbkBsYXllciBiYXNlIHtcXG4gICAgbWFpbiB7XFxuICAgICAgICBAYXBwbHkgZmxleCBmbGV4LXJvd1xcbiAgICB9XFxuICAgIGgxIHtcXG4gICAgICAgIEBhcHBseSB0ZXh0LTJ4bCBweS0yIHB4LTQ7XFxuICAgIH1cXG4gICAgaDIge1xcbiAgICAgICAgQGFwcGx5IHRleHQteGwgcHktMiBweC00O1xcbiAgICB9XFxufVxcblxcbkBsYXllciBjb21wb25lbnRzIHtcXG4gICAgLm5hdi1icmFuY2gge1xcbiAgICAgICAgQGFwcGx5IGZsZXggZmxleC1jb2wgYmFzaXMtMS80IGJnLWdyYXktMjAwO1xcbiAgICB9XFxuICAgIC5kYXNoYm9hcmQge1xcbiAgICAgICAgQGFwcGx5IGZsZXggZmxleC1jb2wgYmFzaXMtMy80IGJnLXdoaXRlO1xcbiAgICB9XFxuICAgIC5icmFuY2gge1xcbiAgICAgICAgQGFwcGx5IGZsZXggZmxleC1yb3cgbWF4LWgtMTAgYmctZ3JheS0yMDAgcHktMiBweC00IGhvdmVyOmJnLWdyYXktMTAwO1xcbiAgICB9XFxuICAgIC5icmFuY2gtc3RhdHVzIHtcXG4gICAgICAgIEBhcHBseSBtdC0xMDtcXG4gICAgfVxcbiAgICAubGVhZiB7XFxuICAgICAgICBAYXBwbHkgZmxleCBmbGV4LXJvdyBweS0yIHB4LTQgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBzaGFkb3ctbWQgaG92ZXI6YmctYmx1ZS03MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWJsdWUtNDAwIGZvY3VzOnJpbmctb3BhY2l0eS03NTtcXG4gICAgfVxcbiAgICAubGVhZi1zdGF0dXMge1xcbiAgICAgICAgQGFwcGx5IG1yLTI7XFxuICAgIH1cXG4gICAgLmxlYWYtZWRpdCB7XFxuICAgICAgICBAYXBwbHkgcHgtMiBtbC00IGJnLWJsdWUtNDAwIHJvdW5kZWQtc20gdGV4dC1iYXNlIHRleHQtd2hpdGU7XFxuICAgIH1cXG4gICAgLmJyYW5jaC1mb3JtICB7XFxuICAgICAgICBAYXBwbHkgZmxleCBmbGV4LXJvdyBweC0zIHB5LTI7XFxuICAgIH1cXG4gICAgLmJyYW5jaC1mb3JtLW5hbWUge1xcbiAgICAgICAgQGFwcGx5IGFwcGVhcmFuY2Utbm9uZSBiZy1ncmF5LTEwMCBib3JkZXIgdy1mdWxsIGJvcmRlci1ibHVlLTUwMCB0ZXh0LWdyYXktNzAwIG1yLTEgcHktMSBweC0yIGxlYWRpbmctdGlnaHQgcm91bmRlZDtcXG4gICAgfVxcbiAgICAuYnJhbmNoLWZvcm0tc3VibWl0IHtcXG4gICAgICAgIEBhcHBseSBiZy10cmFuc3BhcmVudCBob3ZlcjpiZy1ibHVlLTUwMCB0ZXh0LWJhc2UgdGV4dC1ibHVlLTcwMCBmb250LXNlbWlib2xkIGhvdmVyOnRleHQtd2hpdGUgcHktMSBweC0yIGJvcmRlciBib3JkZXItYmx1ZS01MDAgaG92ZXI6Ym9yZGVyLXRyYW5zcGFyZW50IHJvdW5kZWQ7XFxuICAgIH1cXG4gICAgLmJyYW5jaC1kZWxldGUge1xcbiAgICAgICAgQGFwcGx5IG1sLTIgYmctdHJhbnNwYXJlbnQgaG92ZXI6YmctYmx1ZS01MDAgdGV4dC14cyB0ZXh0LWJsdWUtNzAwIGZvbnQtc2VtaWJvbGQgaG92ZXI6dGV4dC13aGl0ZSBweS0xIHB4LTIgYm9yZGVyIGJvcmRlci1ibHVlLTUwMCBob3Zlcjpib3JkZXItdHJhbnNwYXJlbnQgcm91bmRlZDtcXG4gICAgfVxcbiAgICAubGVhZi1mb3JtIHtcXG4gICAgICAgIEBhcHBseSBmbGV4IHB5LTIgcHgtMjtcXG4gICAgfVxcbiAgICAubGVhZi1mb3JtLWRhdGUsIC5sZWFmLWZvcm0tbmFtZSwgLmVkaXQtbGVhZi1uYW1lLCAuZWRpdC1sZWFmLWRhdGUge1xcbiAgICAgICAgQGFwcGx5IGFwcGVhcmFuY2Utbm9uZSBiZy1ncmF5LTEwMCBib3JkZXIgdy1mdWxsIHRleHQtZ3JheS03MDAgbXItMyBweS0xIHB4LTIgbGVhZGluZy10aWdodCByb3VuZGVkO1xcbiAgICB9XFxuICAgIC5sZWFmLWZvcm0tc3VibWl0LCAuZWRpdC1sZWFmLXN1Ym1pdCB7XFxuICAgICAgICBAYXBwbHkgYmctdHJhbnNwYXJlbnQgaG92ZXI6YmctYmx1ZS01MDAgdGV4dC14cyB0ZXh0LWJsdWUtNzAwIGZvbnQtc2VtaWJvbGQgaG92ZXI6dGV4dC13aGl0ZSBweS0xIHB4LTIgYm9yZGVyIGJvcmRlci1ibHVlLTUwMCBob3Zlcjpib3JkZXItdHJhbnNwYXJlbnQgcm91bmRlZDtcXG4gICAgfVxcbiAgICAuZWRpdC1sZWFmLWZvcm0ge1xcbiAgICAgICAgQGFwcGx5IGZsZXggcHktMiBweC0yO1xcbiAgICB9XFxuICAgIC5lZGl0LWZvcm0tZXhpdCB7XFxuICAgICAgICBAYXBwbHkgbWwtMiBiZy10cmFuc3BhcmVudCBob3ZlcjpiZy1ibHVlLTUwMCB0ZXh0LXNtIHRleHQtYmx1ZS03MDAgZm9udC1zZW1pYm9sZCBob3Zlcjp0ZXh0LXdoaXRlIHB5LTEgcHgtMiBib3JkZXIgYm9yZGVyLWJsdWUtNTAwIGhvdmVyOmJvcmRlci10cmFuc3BhcmVudCByb3VuZGVkO1xcbiAgICB9XFxuICAgIC5hZGQtYnJhbmNoIHtcXG4gICAgICAgIEBhcHBseSBweS0yIHB4LTQgYmctZ3JheS0xMDAgdGV4dC1ncmF5LTQwMCBzaGFkb3ctbWQgaG92ZXI6YmctZ3JheS01MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiAgZm9jdXM6cmluZy1vcGFjaXR5LTc1O1xcbiAgICB9XFxuICAgIC5hZGQtbGVhZiB7XFxuICAgICAgICBAYXBwbHkgcHktMiBweC00IGJnLXdoaXRlIHRleHQtZ3JheS00MDAgc2hhZG93LW1kIGhvdmVyOmJnLWdyYXktNTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgIGZvY3VzOnJpbmctb3BhY2l0eS03NTtcXG4gICAgfVxcblxcbn1cXG5cXG5zdmcge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxcmVtO1xcbn1cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuLmJyYW5jaC1uYW1lIHtcXG4gICAgQGFwcGx5IGdyb3c7XFxufVxcbi5sZWFmLW5hbWUge1xcbiAgICBAYXBwbHkgZ3JvdztcXG59XFxuLmxlYWYtZGF0ZSB7XFxuICAgIEBhcHBseSB0ZXh0LWJsdWUtMTAwO1xcbn1cIixcIi8qXFxuMS4gUHJldmVudCBwYWRkaW5nIGFuZCBib3JkZXIgZnJvbSBhZmZlY3RpbmcgZWxlbWVudCB3aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvNClcXG4yLiBBbGxvdyBhZGRpbmcgYSBib3JkZXIgdG8gYW4gZWxlbWVudCBieSBqdXN0IGFkZGluZyBhIGJvcmRlci13aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGNzcy90YWlsd2luZGNzcy9wdWxsLzExNilcXG4qL1xcblxcbiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBib3JkZXItd2lkdGg6IDA7IC8qIDIgKi9cXG4gIGJvcmRlci1zdHlsZTogc29saWQ7IC8qIDIgKi9cXG4gIGJvcmRlci1jb2xvcjogdGhlbWUoJ2JvcmRlckNvbG9yLkRFRkFVTFQnLCBjdXJyZW50Q29sb3IpOyAvKiAyICovXFxufVxcblxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgLS10dy1jb250ZW50OiAnJztcXG59XFxuXFxuLypcXG4xLiBVc2UgYSBjb25zaXN0ZW50IHNlbnNpYmxlIGxpbmUtaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4yLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4zLiBVc2UgYSBtb3JlIHJlYWRhYmxlIHRhYiBzaXplLlxcbjQuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYHNhbnNgIGZvbnQtZmFtaWx5IGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbiAgLW1vei10YWItc2l6ZTogNDsgLyogMyAqL1xcbiAgdGFiLXNpemU6IDQ7IC8qIDMgKi9cXG4gIGZvbnQtZmFtaWx5OiB0aGVtZSgnZm9udEZhbWlseS5zYW5zJywgdWktc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgQXJpYWwsIFxcXCJOb3RvIFNhbnNcXFwiLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIiwgXFxcIk5vdG8gQ29sb3IgRW1vamlcXFwiKTsgLyogNCAqL1xcbn1cXG5cXG4vKlxcbjEuIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4yLiBJbmhlcml0IGxpbmUtaGVpZ2h0IGZyb20gYGh0bWxgIHNvIHVzZXJzIGNhbiBzZXQgdGhlbSBhcyBhIGNsYXNzIGRpcmVjdGx5IG9uIHRoZSBgaHRtbGAgZWxlbWVudC5cXG4qL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbjEuIEFkZCB0aGUgY29ycmVjdCBoZWlnaHQgaW4gRmlyZWZveC5cXG4yLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBvZiBib3JkZXIgY29sb3IgaW4gRmlyZWZveC4gKGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE5MDY1NSlcXG4zLiBFbnN1cmUgaG9yaXpvbnRhbCBydWxlcyBhcmUgdmlzaWJsZSBieSBkZWZhdWx0LlxcbiovXFxuXFxuaHIge1xcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4OyAvKiAzICovXFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5hYmJyOndoZXJlKFt0aXRsZV0pIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG59XFxuXFxuLypcXG5SZW1vdmUgdGhlIGRlZmF1bHQgZm9udCBzaXplIGFuZCB3ZWlnaHQgZm9yIGhlYWRpbmdzLlxcbiovXFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi8qXFxuUmVzZXQgbGlua3MgdG8gb3B0aW1pemUgZm9yIG9wdC1pbiBzdHlsaW5nIGluc3RlYWQgb2Ygb3B0LW91dC5cXG4qL1xcblxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIEVkZ2UgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qXFxuMS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgbW9ub2AgZm9udCBmYW1pbHkgYnkgZGVmYXVsdC5cXG4yLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wLFxcbnByZSB7XFxuICBmb250LWZhbWlseTogdGhlbWUoJ2ZvbnRGYW1pbHkubW9ubycsIHVpLW1vbm9zcGFjZSwgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcXFwiTGliZXJhdGlvbiBNb25vXFxcIiwgXFxcIkNvdXJpZXIgTmV3XFxcIiwgbW9ub3NwYWNlKTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKlxcblByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLypcXG4xLiBSZW1vdmUgdGV4dCBpbmRlbnRhdGlvbiBmcm9tIHRhYmxlIGNvbnRlbnRzIGluIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTk5MDg4LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjAxMjk3KVxcbjIuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIGFsbCBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTkzNTcyOSwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE5NTAxNilcXG4zLiBSZW1vdmUgZ2FwcyBiZXR3ZWVuIHRhYmxlIGJvcmRlcnMgYnkgZGVmYXVsdC5cXG4qL1xcblxcbnRhYmxlIHtcXG4gIHRleHQtaW5kZW50OiAwOyAvKiAxICovXFxuICBib3JkZXItY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IC8qIDMgKi9cXG59XFxuXFxuLypcXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4yLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuMy4gUmVtb3ZlIGRlZmF1bHQgcGFkZGluZyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlIGFuZCBGaXJlZm94LlxcbiovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbjIuIFJlbW92ZSBkZWZhdWx0IGJ1dHRvbiBzdHlsZXMuXFxuKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9J2J1dHRvbiddLFxcblt0eXBlPSdyZXNldCddLFxcblt0eXBlPSdzdWJtaXQnXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIDIgKi9cXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5Vc2UgdGhlIG1vZGVybiBGaXJlZm94IGZvY3VzIHN0eWxlIGZvciBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzLlxcbiovXFxuXFxuOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IGF1dG87XFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBhZGRpdGlvbmFsIGA6aW52YWxpZGAgc3R5bGVzIGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9nZWNrby1kZXYvYmxvYi8yZjllYWNkOWQzZDk5NWM5MzdiNDI1MWE1NTU3ZDk1ZDQ5NGM5YmUxL2xheW91dC9zdHlsZS9yZXMvZm9ybXMuY3NzI0w3MjgtTDczNylcXG4qL1xcblxcbjotbW96LXVpLWludmFsaWQge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSBhbmQgRmlyZWZveC5cXG4qL1xcblxcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLypcXG5Db3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBTYWZhcmkuXFxuKi9cXG5cXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4yLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4qL1xcblxcblt0eXBlPSdzZWFyY2gnXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5SZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuKi9cXG5cXG46Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKlxcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qXFxuUmVtb3ZlcyB0aGUgZGVmYXVsdCBzcGFjaW5nIGFuZCBib3JkZXIgZm9yIGFwcHJvcHJpYXRlIGVsZW1lbnRzLlxcbiovXFxuXFxuYmxvY2txdW90ZSxcXG5kbCxcXG5kZCxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5ocixcXG5maWd1cmUsXFxucCxcXG5wcmUge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5maWVsZHNldCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5sZWdlbmQge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxub2wsXFxudWwsXFxubWVudSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLypcXG5QcmV2ZW50IHJlc2l6aW5nIHRleHRhcmVhcyBob3Jpem9udGFsbHkgYnkgZGVmYXVsdC5cXG4qL1xcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxufVxcblxcbi8qXFxuMS4gUmVzZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgb3BhY2l0eSBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kbGFicy90YWlsd2luZGNzcy9pc3N1ZXMvMzMwMClcXG4yLiBTZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgY29sb3IgdG8gdGhlIHVzZXIncyBjb25maWd1cmVkIGdyYXkgNDAwIGNvbG9yLlxcbiovXFxuXFxuaW5wdXQ6OnBsYWNlaG9sZGVyLFxcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAxOyAvKiAxICovXFxuICBjb2xvcjogdGhlbWUoJ2NvbG9ycy5ncmF5LjQwMCcsICM5Y2EzYWYpOyAvKiAyICovXFxufVxcblxcbi8qXFxuU2V0IHRoZSBkZWZhdWx0IGN1cnNvciBmb3IgYnV0dG9ucy5cXG4qL1xcblxcbmJ1dHRvbixcXG5bcm9sZT1cXFwiYnV0dG9uXFxcIl0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKlxcbk1ha2Ugc3VyZSBkaXNhYmxlZCBidXR0b25zIGRvbid0IGdldCB0aGUgcG9pbnRlciBjdXJzb3IuXFxuKi9cXG46ZGlzYWJsZWQge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4vKlxcbjEuIE1ha2UgcmVwbGFjZWQgZWxlbWVudHMgYGRpc3BsYXk6IGJsb2NrYCBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcXG4yLiBBZGQgYHZlcnRpY2FsLWFsaWduOiBtaWRkbGVgIHRvIGFsaWduIHJlcGxhY2VkIGVsZW1lbnRzIG1vcmUgc2Vuc2libHkgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9qZW5zaW1tb25zL2Nzc3JlbWVkeS9pc3N1ZXMvMTQjaXNzdWVjb21tZW50LTYzNDkzNDIxMClcXG4gICBUaGlzIGNhbiB0cmlnZ2VyIGEgcG9vcmx5IGNvbnNpZGVyZWQgbGludCBlcnJvciBpbiBzb21lIHRvb2xzIGJ1dCBpcyBpbmNsdWRlZCBieSBkZXNpZ24uXFxuKi9cXG5cXG5pbWcsXFxuc3ZnLFxcbnZpZGVvLFxcbmNhbnZhcyxcXG5hdWRpbyxcXG5pZnJhbWUsXFxuZW1iZWQsXFxub2JqZWN0IHtcXG4gIGRpc3BsYXk6IGJsb2NrOyAvKiAxICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvKiAyICovXFxufVxcblxcbi8qXFxuQ29uc3RyYWluIGltYWdlcyBhbmQgdmlkZW9zIHRvIHRoZSBwYXJlbnQgd2lkdGggYW5kIHByZXNlcnZlIHRoZWlyIGludHJpbnNpYyBhc3BlY3QgcmF0aW8uIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxcbiovXFxuXFxuaW1nLFxcbnZpZGVvIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLypcXG5FbnN1cmUgdGhlIGRlZmF1bHQgYnJvd3NlciBiZWhhdmlvciBvZiB0aGUgYGhpZGRlbmAgYXR0cmlidXRlLlxcbiovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCIsbnVsbF0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNEYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiB2YWx1ZSBhIGRhdGU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGFuIGluc3RhbmNlIG9mIERhdGUuIFRoZSBmdW5jdGlvbiB3b3JrcyBmb3IgZGF0ZXMgdHJhbnNmZXJyZWQgYWNyb3NzIGlmcmFtZXMuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gdGhlIHZhbHVlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKE5hTikpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHNvbWUgdmFsdWU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoJzIwMTQtMDItMzEnKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gb2JqZWN0OlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKHt9KVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJztcbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzBdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1swXS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHJlbmRlclN0YXRlIH0gZnJvbSBcIi4vcmVuZGVyLmpzXCI7XG5pbXBvcnQgeyBzYXZlU3RvcmFnZSB9IGZyb20gXCIuL3N0b3JhZ2UuanNcIjtcbmltcG9ydCB7IGFwcGUgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZWRpdFRyZWUgfSBmcm9tIFwiLi90YXNrcy5qc1wiO1xuXG5jb25zdCBsaXN0ZW5lcnMgPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgYnJhbmNoTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtYnJhbmNoXCIpXG4gICAgY29uc3QgZGFzaGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXNoYm9hcmRcIilcbiAgICBjb25zdCBsZWFmRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGVhZi1mb3JtXCIpO1xuICAgIGNvbnN0IGJyYW5jaEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJyYW5jaC1mb3JtXCIpO1xuICAgIGNvbnN0IGFkZExlYWYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1sZWFmXCIpO1xuICAgIGNvbnN0IGFkZEJyYW5jaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLWJyYW5jaFwiKTtcblxuICAgIGZ1bmN0aW9uIGV2ZW50cygpIHtcbiAgICAgICAgLy8gVE9ETzogUmVmYWN0b3IgaW50byBldmVudCBoYW5kbGVyIGJlbG93XG4gICAgICAgIC8vIFRvZ2dsZSBmb3Jtc1xuXG4gICAgICAgIGFkZExlYWYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtyZW5kZXJTdGF0ZS5zaG93KGxlYWZGb3JtKX0gKTtcbiAgICAgICAgYWRkQnJhbmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7cmVuZGVyU3RhdGUuc2hvdyhicmFuY2hGb3JtKX0gKTtcblxuICAgICAgICAvLyBTdWJtaXQgZm9ybXNcbiAgICAgICAgY29uc3Qgc3VibWl0TGVhZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGVhZi1mb3JtLXN1Ym1pdFwiKTtcbiAgICAgICAgY29uc3Qgc3VibWl0QnJhbmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5icmFuY2gtZm9ybS1zdWJtaXRcIik7XG4gICAgICAgIHN1Ym1pdExlYWYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnZXRMZWFmUHJvcCk7XG4gICAgICAgIHN1Ym1pdEJyYW5jaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdldEJyYW5jaFByb3ApO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0TGVhZlByb3AoKSB7XG4gICAgICAgIGxldCBsZWFmTmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sZWFmLWZvcm0tbmFtZVwiKTtcbiAgICAgICAgbGV0IGxlYWZEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxlYWYtZm9ybS1kYXRlXCIpO1xuXG4gICAgICAgIGxldCBuZXdMZWFmTmFtZSA9IGxlYWZOYW1lSW5wdXQudmFsdWU7XG4gICAgICAgIGxldCBuZXdMZWFmRGF0ZSA9IGxlYWZEYXRlSW5wdXQudmFsdWU7XG5cbiAgICAgICAgLy8gQWRkIHRvIGRhdGFcbiAgICAgICAgZWRpdFRyZWUuY3JlYXRlTGVhZihuZXdMZWFmTmFtZSwgbmV3TGVhZkRhdGUpO1xuICAgICAgICBzYXZlU3RvcmFnZShhcHBlKTtcbiAgICAgICAgcmVuZGVyU3RhdGUuc2hvdyhsZWFmRm9ybSk7XG4gICAgICAgIHJlbmRlclN0YXRlLnJlbmRlclRyZWUoYXBwZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0QnJhbmNoUHJvcCgpIHtcbiAgICAgICAgY29uc3QgYnJhbmNoTmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5icmFuY2gtZm9ybS1uYW1lXCIpO1xuICAgICAgICBsZXQgbmV3QnJhbmNoTmFtZSA9IGJyYW5jaE5hbWVJbnB1dC52YWx1ZTtcbiAgICAgICAgZWRpdFRyZWUuY3JlYXRlQnJhbmNoKG5ld0JyYW5jaE5hbWUpO1xuICAgICAgICBzYXZlU3RvcmFnZShhcHBlKTtcbiAgICAgICAgcmVuZGVyU3RhdGUuc2hvdyhicmFuY2hGb3JtKTtcbiAgICAgICAgcmVuZGVyU3RhdGUucmVuZGVyVHJlZShhcHBlKTtcbiAgICB9XG5cbiAgICBicmFuY2hOYXYub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXRcbiAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0YXJnZXQubWF0Y2hlcyhcIi5icmFuY2gtZGVsZXRlXCIpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0YXJnZXQpO1xuICAgICAgICAgICAgbGV0IGJyYW5jaCA9IHRhcmdldC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgbGV0IG5hbWUgPSBicmFuY2gucXVlcnlTZWxlY3RvcihcIi5icmFuY2gtbmFtZVwiKS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIGVkaXRUcmVlLmRlbGV0ZUJyYW5jaChuYW1lKTtcbiAgICAgICAgICAgIHJlbmRlclN0YXRlLnJlbmRlclRyZWUoYXBwZSk7XG4gICAgICAgICAgICBzYXZlU3RvcmFnZShhcHBlKTtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGFzaGJvYXJkLm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAvLyBDaGVja2JveCBsaXN0ZW5lclxuICAgICAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0XG4gICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGFyZ2V0Lm1hdGNoZXMoXCIubGVhZi1lZGl0XCIpKSB7XG4gICAgICAgICAgICBsZXQgbGVhZiA9IHRhcmdldC5jbG9zZXN0KFwiLmxlYWZcIik7XG5cbiAgICAgICAgICAgIC8vIFJlbmRlciBmb3JtXG4gICAgICAgICAgICByZW5kZXJTdGF0ZS5lZGl0TGVhZkZvcm0obGVhZik7XG4gICAgICAgICAgICByZW5kZXJTdGF0ZS5zaG93KGxlYWYpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRhcmdldC5tYXRjaGVzKFwiLmVkaXQtbGVhZi1zdWJtaXRcIikpIHtcbiAgICAgICAgICAgIGxldCBsZWFmRm9ybSA9IHRhcmdldC5jbG9zZXN0KFwiLmVkaXQtbGVhZi1mb3JtXCIpO1xuICAgICAgICAgICAgbGV0IHNlbGVjdExlYWYgPSB0YXJnZXQucGFyZW50Tm9kZS5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgICAgICBsZXQgbmV3TmFtZSA9IHRhcmdldC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1sZWFmLW5hbWVcIikudmFsdWU7XG4gICAgICAgICAgICBsZXQgbmV3RGF0ZSA9IHRhcmdldC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1sZWFmLWRhdGVcIikudmFsdWU7XG4gICAgICAgICAgICBsZXQgb2xkTmFtZSA9IHRhcmdldC5wYXJlbnROb2RlLnByZXZpb3VzU2libGluZy5xdWVyeVNlbGVjdG9yKFwiLmxlYWYtbmFtZVwiKS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIC8vIFNldCBsZWFmIG5hbWU7XG4gICAgICAgICAgICBlZGl0VHJlZS5lZGl0TGVhZihvbGROYW1lLCBuZXdOYW1lLCBuZXdEYXRlKTtcblxuICAgICAgICAgICAgcmVuZGVyU3RhdGUuc2hvdyhzZWxlY3RMZWFmKTtcbiAgICAgICAgICAgIHJlbmRlclN0YXRlLnNob3cobGVhZkZvcm0pO1xuICAgICAgICAgICAgcmVuZGVyU3RhdGUucmVuZGVyVHJlZShhcHBlKTtcbiAgICAgICAgICAgIHNhdmVTdG9yYWdlKGFwcGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRhcmdldC5tYXRjaGVzKFwiLmVkaXQtZm9ybS1leGl0XCIpKSB7XG4gICAgICAgICAgICBsZXQgbGVhZkZvcm0gPSB0YXJnZXQuY2xvc2VzdChcIi5lZGl0LWxlYWYtZm9ybVwiKTtcbiAgICAgICAgICAgIGxldCBsZWFmID0gdGFyZ2V0LnBhcmVudE5vZGUucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICAgICAgcmVuZGVyU3RhdGUuc2hvdyhsZWFmKTtcbiAgICAgICAgICAgIGxlYWZGb3JtLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRhcmdldC5tYXRjaGVzKFwiaW5wdXRbdHlwZT1jaGVja2JveF1cIikpIHtcbiAgICAgICAgICAgIGxldCBsZWFmID0gdGFyZ2V0LmNsb3Nlc3QoXCIubGVhZlwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGxlYWYpO1xuICAgICAgICAgICAgLy8gUmVtb3ZlIGZyb20gZGF0YVxuICAgICAgICAgICAgbGV0IG5hbWUgPSBsZWFmLnF1ZXJ5U2VsZWN0b3IoXCIubGVhZi1uYW1lXCIpLnRleHRDb250ZW50O1xuICAgICAgICAgICAgZWRpdFRyZWUuZGVsZXRlTGVhZihuYW1lKTtcbiAgICAgICAgICAgIHJlbmRlclN0YXRlLnJlbmRlclRyZWUoYXBwZSk7XG4gICAgICAgICAgICBzYXZlU3RvcmFnZShhcHBlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgICBldmVudHMsXG4gICAgfVxufSkoKTtcblxuZXhwb3J0IHtcbiAgICBsaXN0ZW5lcnNcbn0iLCIvLyBDcmVhdGUgZG9tIGNyZWF0aW9uIGhlbHBlcnNcbmZ1bmN0aW9uIGNyZWF0ZUVsZW1XaXRoQ2xhc3MoZWxlbSwgbmFtZSwgY29udGVudCwgYXR0ck5hbWUsIGF0dHJWYWx1ZSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW0pO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChuYW1lKTtcblxuICAgIGlmIChjb250ZW50KSB7XG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgIH1cblxuICAgIGlmIChhdHRyTmFtZSAmJiBhdHRyVmFsdWUpIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ck5hbWUsIGF0dHJWYWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDaXJjbGUoc3RhdHVzLCBjbGFzc2VzKSB7XG4gICAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJzdmdcIik7XG4gICAgY29uc3QgY2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJjaXJjbGVcIik7XG4gICAgY2lyY2xlLnNldEF0dHJpYnV0ZU5TKG51bGwsIFwiY2xhc3NcIiwgIGNsYXNzZXMpO1xuICAgIGNpcmNsZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcImN4XCIsIFwiNTAlXCIpO1xuICAgIGNpcmNsZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcImN5XCIsIFwiNTAlXCIpO1xuICAgIGNpcmNsZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcInJcIiwgIDUpO1xuICAgIGlmIChzdGF0dXMgPT0gdHJ1ZSkge1xuICAgICAgICBjaXJjbGUuc2V0QXR0cmlidXRlTlMobnVsbCwgXCJmaWxsXCIsIFwibWVkaXVtYXF1YW1hcmluZVwiKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNpcmNsZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcImZpbGxcIiwgXCJzYWxtb25cIik7XG4gICAgfVxuICAgIHN2Zy5hcHBlbmRDaGlsZChjaXJjbGUpO1xuICAgIHJldHVybiBzdmc7XG59XG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlRWxlbVdpdGhDbGFzcyxcbiAgICBjcmVhdGVDaXJjbGVcbn0iLCJpbXBvcnQgeyByZW5kZXJTdGF0ZSB9IGZyb20gXCIuL3JlbmRlci5qc1wiO1xuaW1wb3J0IHsgbGlzdGVuZXJzIH0gZnJvbSBcIi4vZXZlbnRzLmpzXCI7XG5pbXBvcnQgeyBsb2FkU3RvcmFnZSB9IGZyb20gXCIuL3N0b3JhZ2UuanNcIjtcbmltcG9ydCB7IFRyZWUsIEJyYW5jaCwgTGVhZiB9IGZyb20gXCIuL3Rhc2tzLmpzXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxud2luZG93LlRyZWUgPSBUcmVlO1xud2luZG93LkJyYW5jaCA9IEJyYW5jaDtcbndpbmRvdy5MZWFmID0gTGVhZjtcblxubGV0IGFwcGUgPSBbXTtcblxuY29uc3QgbG9hZFBhZ2UgPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgYXBwZSA9IGxvYWRTdG9yYWdlKCk7XG4gICAgICAgIHJlbmRlclN0YXRlLnJlbmRlclRyZWUoYXBwZSk7XG4gICAgICAgIGxpc3RlbmVycy5ldmVudHMoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdFxuICAgIH1cbn0pKCk7XG5cbi8vIEluaXRpYWxpemF0aW9uXG5sb2FkUGFnZS5pbml0KCk7XG5cbmV4cG9ydCB7XG4gICAgYXBwZVxufSIsImltcG9ydCB7IGNyZWF0ZUVsZW1XaXRoQ2xhc3MsIGNyZWF0ZUNpcmNsZSB9IGZyb20gXCIuL2hlbHBlcnMuanNcIlxuXG4vLyBnZXQgc3R1ZmYgZnJvbSBzdG9yYWdlXG5jb25zdCByZW5kZXJTdGF0ZSA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBkYXNoYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhc2hib2FyZFwiKTtcbiAgICBjb25zdCBicmFuY2hOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1icmFuY2hcIik7XG4gICAgY29uc3QgYnJhbmNoRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnJhbmNoLWZvcm1cIik7XG4gICAgY29uc3QgbGVhZkZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxlYWYtZm9ybVwiKTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlclRyZWUodHJlZSkge1xuICAgICAgICAvLyBSZWZyZXNoIHRyZWVcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5icmFuY2hcIikuZm9yRWFjaChuID0+IG4ucmVtb3ZlKCkpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxlYWZcIikuZm9yRWFjaChuID0+IG4ucmVtb3ZlKCkpO1xuXG4gICAgICAgIC8vIEl0ZXJhdGUgdGhyb3VnaCBicmFuY2hlc1xuICAgICAgICB0cmVlLmJyYW5jaGVzLmZvckVhY2goZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgIGJyYW5jaE5hdi5pbnNlcnRCZWZvcmUocmVuZGVyQnJhbmNoKGl0ZW0sIGluZGV4KSwgYnJhbmNoRm9ybSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlckJyYW5jaChpdGVtLCBpbmRleCkge1xuICAgICAgICBjb25zdCBicmFuY2ggPSBjcmVhdGVFbGVtV2l0aENsYXNzKFwiZGl2XCIsIFwiYnJhbmNoXCIpO1xuXG4gICAgICAgIC8vSXRlcmF0ZSB0aHJvdWdoIGJyYW5jaCBwcm9wZXJ0aWVzXG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGl0ZW0pKSB7XG4gICAgICAgICAgICAvLyBGb3IgZWFjaCBvYmplY3QgcHJvcGVydHkgKGV4Y2x1ZGluZyBhcnJheXMpXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgIT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09IFwibmFtZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlckJyYW5jaFN0YXR1cyhicmFuY2gsIGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYGJyYW5jaC0ke2tleX1gKTtcbiAgICAgICAgICAgICAgICBicmFuY2guYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEZWxldGUgYnV0dG9uXG4gICAgICAgIGNvbnN0IGJyYW5jaERlbCA9IGNyZWF0ZUVsZW1XaXRoQ2xhc3MoXCJidXR0b25cIiwgXCJicmFuY2gtZGVsZXRlXCIsIFwiWFwiKTtcbiAgICAgICAgYnJhbmNoLmFwcGVuZENoaWxkKGJyYW5jaERlbCk7XG4gICAgICAgIFxuICAgICAgICAvLyBJdGVyYXRlIHRocm91Z2ggbGVhdmVzXG4gICAgICAgIGl0ZW0ubGVhdmVzLmZvckVhY2goZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgIGRhc2hib2FyZC5pbnNlcnRCZWZvcmUocmVuZGVyTGVhdmVzKGl0ZW0sIGluZGV4KSwgbGVhZkZvcm0pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYnJhbmNoO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlckxlYXZlcyhpdGVtLCBpbmRleCkge1xuICAgICAgICBjb25zdCBsZWFmID0gY3JlYXRlRWxlbVdpdGhDbGFzcyhcImRpdlwiLCBcImxlYWZcIik7XG4gICAgICAgIGxlYWYuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbVdpdGhDbGFzcyhcImlucHV0XCIsIGBsZWFmLXN0YXR1c2AsIFwiXCIsIFwidHlwZVwiLCBcImNoZWNrYm94XCIpKTtcblxuICAgICAgICAvLyBJdGVyYXRlIHRocm91Z2ggbGVhZiBwcm9wZXJ0aWVzXG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGl0ZW0pKSB7XG4gICAgICAgICAgICBsZWFmLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1XaXRoQ2xhc3MoXCJzcGFuXCIsIGBsZWFmLSR7a2V5fWAsIHZhbHVlKSk7ICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICBsZWFmLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1XaXRoQ2xhc3MoXCJidXR0b25cIiwgJ2xlYWYtZWRpdCcsIFwiRWRpdFwiKSk7XG4gICAgICAgIHJldHVybiBsZWFmO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3coZWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRkZW5cIikpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJCcmFuY2hTdGF0dXMoYnJhbmNoLCBrZXksIHZhbHVlKSB7XG4gICAgICAgIGJyYW5jaC5hcHBlbmRDaGlsZChjcmVhdGVDaXJjbGUodmFsdWUsIFwiYnJhbmNoLXN0YXR1c1wiKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZWRpdExlYWZGb3JtKGxlYWYpIHtcbiAgICAgICAgY29uc3QgZWRpdEZvcm0gPSBjcmVhdGVFbGVtV2l0aENsYXNzKFwiZGl2XCIsIFwiZWRpdC1sZWFmLWZvcm1cIilcbiAgICAgICAgY29uc3QgZWRpdExlYWZOYW1lID0gY3JlYXRlRWxlbVdpdGhDbGFzcyhcImlucHV0XCIsIFwiZWRpdC1sZWFmLW5hbWVcIiwgXCJcIiwgXCJwbGFjZWhvbGRlclwiLCBcIk5hbWVcIilcbiAgICAgICAgY29uc3QgZWRpdExlYWZEYXRlID0gY3JlYXRlRWxlbVdpdGhDbGFzcyhcImlucHV0XCIsIFwiZWRpdC1sZWFmLWRhdGVcIiwgXCJcIiwgXCJ0eXBlXCIsIFwiZGF0ZVwiKVxuICAgICAgICBjb25zdCBlZGl0Rm9ybVN1Ym1pdCA9IGNyZWF0ZUVsZW1XaXRoQ2xhc3MoXCJidXR0b25cIiwgXCJlZGl0LWxlYWYtc3VibWl0XCIsIFwiRWRpdFwiKVxuICAgICAgICBjb25zdCBlZGl0Rm9ybVggPSBjcmVhdGVFbGVtV2l0aENsYXNzKFwiYnV0dG9uXCIsIFwiZWRpdC1mb3JtLWV4aXRcIiwgXCJYXCIpXG4gICAgICAgIGVkaXRGb3JtLmFwcGVuZChlZGl0TGVhZk5hbWUsIGVkaXRMZWFmRGF0ZSwgZWRpdEZvcm1TdWJtaXQsIGVkaXRGb3JtWCk7XG4gICAgICAgIGxlYWYuYWZ0ZXIoZWRpdEZvcm0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHJlbmRlclRyZWUsXG4gICAgICAgIHNob3csXG4gICAgICAgIGVkaXRMZWFmRm9ybVxuICAgIH1cblxufSkoKTtcblxuZXhwb3J0IHtcbiAgICByZW5kZXJTdGF0ZSxcbn0iLCJpbXBvcnQgeyBjcmVhdGVEZWZhdWx0UHJvamVjdCB9IGZyb20gXCIuL3Rhc2tzLmpzXCI7XG5cbmZ1bmN0aW9uIGxvYWRTdG9yYWdlKCkge1xuICAgIGNvbnN0IGFwcFN0YXRlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFwcFN0YXRlXCIpKTtcbiAgICBpZiAoYXBwU3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIGFwcFN0YXRlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZURlZmF1bHRQcm9qZWN0LmNyZWF0ZURlZmF1bHQoKTtcbiAgICB9XG59XG5mdW5jdGlvbiBzYXZlU3RvcmFnZSh0cmVlKSB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYXBwU3RhdGVcIiwgSlNPTi5zdHJpbmdpZnkodHJlZSkpO1xufVxuXG5leHBvcnQge1xuICAgIGxvYWRTdG9yYWdlLFxuICAgIHNhdmVTdG9yYWdlXG59IiwiaW1wb3J0IHsgaXNEYXRlLCBpc1Bhc3QgfSBmcm9tICdkYXRlLWZucy9pc0RhdGUnO1xuaW1wb3J0IHsgYXBwZSB9IGZyb20gJy4vaW5kZXguanMnO1xuaW1wb3J0IHsgc2F2ZVN0b3JhZ2UgfSBmcm9tICcuL3N0b3JhZ2UuanMnO1xuXG5leHBvcnQgY2xhc3MgVHJlZSB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmJyYW5jaGVzID0gW107IFxuICAgIH1cblxuICAgIGNyZWF0ZUJyYW5jaChuYW1lKSB7XG4gICAgICAgIGxldCBuZXdCcmFuY2ggPSBuZXcgQnJhbmNoKG5hbWUudmFsdWUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJyYW5jaCB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgc3RhdHVzKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMubGVhdmVzID0gW107XG4gICAgICAgIHRoaXMuYWN0aXZlID0gc3RhdHVzO1xuICAgIH1cblxuICAgIGdldCBicmFuY2hOYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cblxuICAgIHNldCBicmFuY2hOYW1lKHZhbHVlKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBicmFuY2hTdGF0dXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMZWFmIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBzdGF0LCBkYXRlKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuc3RhdCA9IHN0YXQ7XG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgfVxuXG4gICAgZ2V0IGxlYWZOYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cblxuICAgIHNldCBsZWFmTmFtZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgbGVhZlN0YXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXQ7XG4gICAgfVxuXG4gICAgc2V0IGxlYWZTdGF0KHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc3RhdCA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBsZWFmRGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZTtcbiAgICB9XG5cbiAgICBzZXQgbGVhZkRhdGUodmFsdWUpIHtcbiAgICAgICAgaWYgKCFpc0RhdGUodmFsdWUpIHx8IGlzUGFzdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcIkVycm9yXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kYXRlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhbGVydGluZygpIHtcbiAgICAgICAgYWxlcnQoXCJIaVwiKVxuICAgIH1cbn1cblxuLy8gTW9kdWxlOiBEZWZhdWx0IHByb2plY3RcbmNvbnN0IGNyZWF0ZURlZmF1bHRQcm9qZWN0ID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZURlZmF1bHQoKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRUcmVlID0gbmV3IFRyZWUoXCJUaGUgVHJlZVwiKTtcbiAgICAgICAgY29uc3QgZGFpbGllcyA9IG5ldyBCcmFuY2goXCJEYWlsaWVzXCIsIHRydWUpO1xuICAgICAgICBjb25zdCB3ZWVrbGllcyA9IG5ldyBCcmFuY2goXCJXZWVrbGllc1wiLCBmYWxzZSk7XG5cbiAgICAgICAgY29uc3QgZ2V0TWlsayA9IG5ldyBMZWFmKFwiR2V0IG1pbGtcIiwgZmFsc2UsIFwiXCIpO1xuICAgICAgICBjb25zdCBnZXRCcmVhZCA9IG5ldyBMZWFmKFwiR2V0IGJyZWFkXCIsIGZhbHNlLCBcIlwiKTtcbiAgICAgICAgY29uc3QgbWFrZVBsYXlsaXN0ID0gbmV3IExlYWYoXCJNYWtlIHBsYXlsaXN0XCIsIGZhbHNlLCBcIlwiKTtcblxuICAgICAgICBkZWZhdWx0VHJlZS5icmFuY2hlcy5wdXNoKGRhaWxpZXMsIHdlZWtsaWVzKTtcbiAgICAgICAgZGFpbGllcy5sZWF2ZXMucHVzaChnZXRNaWxrLCBnZXRCcmVhZCwgbWFrZVBsYXlsaXN0KTtcbiAgICAgICAgd2Vla2xpZXMubGVhdmVzLnB1c2goZ2V0TWlsaywgZ2V0QnJlYWQsIG1ha2VQbGF5bGlzdCk7XG5cbiAgICAgICAgcmV0dXJuIGRlZmF1bHRUcmVlO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGNyZWF0ZURlZmF1bHRcbiAgICB9XG59KSgpO1xuXG5jb25zdCBlZGl0VHJlZSA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVMZWFmKG5hbWUsIGRhdGUpIHtcbiAgICAgICAgaWYgKCFuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5ld0xlYWYgPSBuZXcgTGVhZihuYW1lLCBmYWxzZSk7XG4gICAgICAgIGlmIChkYXRlKSB7XG4gICAgICAgICAgICBuZXdMZWFmLmRhdGUgPSBkYXRlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBhY3RpdmVCcmFuY2ggPSBhcHBlLmJyYW5jaGVzLmZpbmQoYnJhbmNoID0+IGJyYW5jaC5hY3RpdmUgPT0gdHJ1ZSk7XG4gICAgICAgIGFjdGl2ZUJyYW5jaC5sZWF2ZXMucHVzaChuZXdMZWFmKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gZGVsZXRlTGVhZihuYW1lKSB7XG4gICAgICAgIGxldCBhY3RpdmVMZWF2ZXMgPSBhcHBlLmJyYW5jaGVzLmZpbmQoYnJhbmNoID0+IGJyYW5jaC5hY3RpdmUgPT0gdHJ1ZSkubGVhdmVzO1xuICAgICAgICBhY3RpdmVMZWF2ZXMuc3BsaWNlKGFjdGl2ZUxlYXZlcy5maW5kSW5kZXgoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgaXRlbS5uYW1lID09IG5hbWU7XG4gICAgICAgIH0pLCAxKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlZGl0TGVhZihvbGROYW1lLCBuZXdOYW1lLCBuZXdEYXRlKSB7XG4gICAgICAgIGlmICghbmV3TmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGFjdGl2ZUxlYXZlcyA9IGFwcGUuYnJhbmNoZXMuZmluZChicmFuY2ggPT4gYnJhbmNoLmFjdGl2ZSA9PSB0cnVlKS5sZWF2ZXM7XG4gICAgICAgICAgICBsZXQgYWN0aXZlTGVhZkluZGV4ID0gYWN0aXZlTGVhdmVzLmZpbmRJbmRleChpdGVtID0+IGl0ZW0ubmFtZSA9PSBvbGROYW1lKTtcbiAgICAgICAgICAgIGFjdGl2ZUxlYXZlc1thY3RpdmVMZWFmSW5kZXhdLm5hbWUgPSBuZXdOYW1lO1xuICAgICAgICAgICAgaWYgKG5ld0RhdGUpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVMZWF2ZXNbYWN0aXZlTGVhZkluZGV4XS5kYXRlID0gbmV3RGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGFjdGl2ZUxlYXZlc1thY3RpdmVMZWFmSW5kZXhdLmRhdGUgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlQnJhbmNoKG5hbWUpIHtcbiAgICAgICAgbGV0IG5ld0JyYW5jaCA9IG5ldyBCcmFuY2gobmFtZSwgZmFsc2UpO1xuICAgICAgICBhcHBlLmJyYW5jaGVzLnB1c2gobmV3QnJhbmNoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVCcmFuY2gobmFtZSkge1xuICAgICAgICBhcHBlLmJyYW5jaGVzLnNwbGljZShhcHBlLmJyYW5jaGVzLmZpbmRJbmRleChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICBpdGVtLm5hbWUgPT0gbmFtZTtcbiAgICAgICAgfSwgMSkpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgICBjcmVhdGVMZWFmLFxuICAgICAgICBkZWxldGVMZWFmLFxuICAgICAgICBjcmVhdGVCcmFuY2gsXG4gICAgICAgIGRlbGV0ZUJyYW5jaCxcbiAgICAgICAgZWRpdExlYWZcbiAgICB9XG59KSgpO1xuXG5leHBvcnQge1xuICAgIGNyZWF0ZURlZmF1bHRQcm9qZWN0LFxuICAgIGVkaXRUcmVlXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9