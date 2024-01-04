/**
 * App version: 1.0.0
 * SDK version: 5.3.2
 * CLI version: 2.11.0
 *
 * Generated: Thu, 04 Jan 2024 12:21:57 GMT
 */

var APP_com_domain_app_MyAwesomeApp = (function () {
	'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	var check = function check(it) {
	  return it && it.Math === Math && it;
	};

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global$R =
	// eslint-disable-next-line es/no-global-this -- safe
	check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) ||
	// eslint-disable-next-line no-restricted-globals -- safe
	check(typeof self == 'object' && self) || check(typeof commonjsGlobal == 'object' && commonjsGlobal) || check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
	// eslint-disable-next-line no-new-func -- fallback
	function () {
	  return this;
	}() || Function('return this')();

	var objectGetOwnPropertyDescriptor = {};

	var fails$13 = function fails(exec) {
	  try {
	    return !!exec();
	  } catch (error) {
	    return true;
	  }
	};

	var fails$12 = fails$13;

	// Detect IE8's incomplete defineProperty implementation
	var descriptors = !fails$12(function () {
	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
	  return Object.defineProperty({}, 1, {
	    get: function get() {
	      return 7;
	    }
	  })[1] !== 7;
	});

	var fails$11 = fails$13;
	var functionBindNative = !fails$11(function () {
	  // eslint-disable-next-line es/no-function-prototype-bind -- safe
	  var test = function () {/* empty */}.bind();
	  // eslint-disable-next-line no-prototype-builtins -- safe
	  return typeof test != 'function' || test.hasOwnProperty('prototype');
	});

	var NATIVE_BIND$4 = functionBindNative;
	var call$18 = Function.prototype.call;
	var functionCall = NATIVE_BIND$4 ? call$18.bind(call$18) : function () {
	  return call$18.apply(call$18, arguments);
	};

	var objectPropertyIsEnumerable = {};

	var $propertyIsEnumerable$2 = {}.propertyIsEnumerable;
	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var getOwnPropertyDescriptor$b = Object.getOwnPropertyDescriptor;

	// Nashorn ~ JDK8 bug
	var NASHORN_BUG = getOwnPropertyDescriptor$b && !$propertyIsEnumerable$2.call({
	  1: 2
	}, 1);

	// `Object.prototype.propertyIsEnumerable` method implementation
	// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
	objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
	  var descriptor = getOwnPropertyDescriptor$b(this, V);
	  return !!descriptor && descriptor.enumerable;
	} : $propertyIsEnumerable$2;

	var createPropertyDescriptor$a = function createPropertyDescriptor(bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var NATIVE_BIND$3 = functionBindNative;
	var FunctionPrototype$3 = Function.prototype;
	var call$17 = FunctionPrototype$3.call;
	var uncurryThisWithBind = NATIVE_BIND$3 && FunctionPrototype$3.bind.bind(call$17, call$17);
	var functionUncurryThis = NATIVE_BIND$3 ? uncurryThisWithBind : function (fn) {
	  return function () {
	    return call$17.apply(fn, arguments);
	  };
	};

	var uncurryThis$14 = functionUncurryThis;
	var toString$t = uncurryThis$14({}.toString);
	var stringSlice$f = uncurryThis$14(''.slice);
	var classofRaw$2 = function classofRaw(it) {
	  return stringSlice$f(toString$t(it), 8, -1);
	};

	var uncurryThis$13 = functionUncurryThis;
	var fails$10 = fails$13;
	var classof$m = classofRaw$2;
	var $Object$8 = Object;
	var split$4 = uncurryThis$13(''.split);

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var indexedObject = fails$10(function () {
	  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
	  // eslint-disable-next-line no-prototype-builtins -- safe
	  return !$Object$8('z').propertyIsEnumerable(0);
	}) ? function (it) {
	  return classof$m(it) === 'String' ? split$4(it, '') : $Object$8(it);
	} : $Object$8;

	// we can't use just `it == null` since of `document.all` special case
	// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
	var isNullOrUndefined$g = function isNullOrUndefined(it) {
	  return it === null || it === undefined;
	};

	var isNullOrUndefined$f = isNullOrUndefined$g;
	var $TypeError$z = TypeError;

	// `RequireObjectCoercible` abstract operation
	// https://tc39.es/ecma262/#sec-requireobjectcoercible
	var requireObjectCoercible$i = function requireObjectCoercible(it) {
	  if (isNullOrUndefined$f(it)) throw new $TypeError$z("Can't call method on " + it);
	  return it;
	};

	// toObject with fallback for non-array-like ES3 strings
	var IndexedObject$3 = indexedObject;
	var requireObjectCoercible$h = requireObjectCoercible$i;
	var toIndexedObject$e = function toIndexedObject(it) {
	  return IndexedObject$3(requireObjectCoercible$h(it));
	};

	// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
	var documentAll = typeof document == 'object' && document.all;

	// `IsCallable` abstract operation
	// https://tc39.es/ecma262/#sec-iscallable
	// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
	var isCallable$E = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
	  return typeof argument == 'function' || argument === documentAll;
	} : function (argument) {
	  return typeof argument == 'function';
	};

	var isCallable$D = isCallable$E;
	var isObject$J = function isObject(it) {
	  return typeof it == 'object' ? it !== null : isCallable$D(it);
	};

	var global$Q = global$R;
	var isCallable$C = isCallable$E;
	var aFunction = function aFunction(argument) {
	  return isCallable$C(argument) ? argument : undefined;
	};
	var getBuiltIn$r = function getBuiltIn(namespace, method) {
	  return arguments.length < 2 ? aFunction(global$Q[namespace]) : global$Q[namespace] && global$Q[namespace][method];
	};

	var uncurryThis$12 = functionUncurryThis;
	var objectIsPrototypeOf = uncurryThis$12({}.isPrototypeOf);

	var engineUserAgent = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

	var global$P = global$R;
	var userAgent$6 = engineUserAgent;
	var process$3 = global$P.process;
	var Deno$1 = global$P.Deno;
	var versions = process$3 && process$3.versions || Deno$1 && Deno$1.version;
	var v8 = versions && versions.v8;
	var match, version$1;
	if (v8) {
	  match = v8.split('.');
	  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
	  // but their correct versions are not interesting for us
	  version$1 = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
	}

	// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
	// so check `userAgent` even if `.v8` exists, but 0
	if (!version$1 && userAgent$6) {
	  match = userAgent$6.match(/Edge\/(\d+)/);
	  if (!match || match[1] >= 74) {
	    match = userAgent$6.match(/Chrome\/(\d+)/);
	    if (match) version$1 = +match[1];
	  }
	}
	var engineV8Version = version$1;

	/* eslint-disable es/no-symbol -- required for testing */
	var V8_VERSION$3 = engineV8Version;
	var fails$$ = fails$13;
	var global$O = global$R;
	var $String$6 = global$O.String;

	// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
	var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$$(function () {
	  var symbol = Symbol('symbol detection');
	  // Chrome 38 Symbol has incorrect toString conversion
	  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
	  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
	  // of course, fail.
	  return !$String$6(symbol) || !(Object(symbol) instanceof Symbol) ||
	  // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
	  !Symbol.sham && V8_VERSION$3 && V8_VERSION$3 < 41;
	});

	/* eslint-disable es/no-symbol -- required for testing */
	var NATIVE_SYMBOL$6 = symbolConstructorDetection;
	var useSymbolAsUid = NATIVE_SYMBOL$6 && !Symbol.sham && typeof Symbol.iterator == 'symbol';

	var getBuiltIn$q = getBuiltIn$r;
	var isCallable$B = isCallable$E;
	var isPrototypeOf$d = objectIsPrototypeOf;
	var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;
	var $Object$7 = Object;
	var isSymbol$6 = USE_SYMBOL_AS_UID$1 ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  var $Symbol = getBuiltIn$q('Symbol');
	  return isCallable$B($Symbol) && isPrototypeOf$d($Symbol.prototype, $Object$7(it));
	};

	var $String$5 = String;
	var tryToString$7 = function tryToString(argument) {
	  try {
	    return $String$5(argument);
	  } catch (error) {
	    return 'Object';
	  }
	};

	var isCallable$A = isCallable$E;
	var tryToString$6 = tryToString$7;
	var $TypeError$y = TypeError;

	// `Assert: IsCallable(argument) is true`
	var aCallable$F = function aCallable(argument) {
	  if (isCallable$A(argument)) return argument;
	  throw new $TypeError$y(tryToString$6(argument) + ' is not a function');
	};

	var aCallable$E = aCallable$F;
	var isNullOrUndefined$e = isNullOrUndefined$g;

	// `GetMethod` abstract operation
	// https://tc39.es/ecma262/#sec-getmethod
	var getMethod$g = function getMethod(V, P) {
	  var func = V[P];
	  return isNullOrUndefined$e(func) ? undefined : aCallable$E(func);
	};

	var call$16 = functionCall;
	var isCallable$z = isCallable$E;
	var isObject$I = isObject$J;
	var $TypeError$x = TypeError;

	// `OrdinaryToPrimitive` abstract operation
	// https://tc39.es/ecma262/#sec-ordinarytoprimitive
	var ordinaryToPrimitive$2 = function ordinaryToPrimitive(input, pref) {
	  var fn, val;
	  if (pref === 'string' && isCallable$z(fn = input.toString) && !isObject$I(val = call$16(fn, input))) return val;
	  if (isCallable$z(fn = input.valueOf) && !isObject$I(val = call$16(fn, input))) return val;
	  if (pref !== 'string' && isCallable$z(fn = input.toString) && !isObject$I(val = call$16(fn, input))) return val;
	  throw new $TypeError$x("Can't convert object to primitive value");
	};

	var shared$9 = {exports: {}};

	var isPure = false;

	var global$N = global$R;

	// eslint-disable-next-line es/no-object-defineproperty -- safe
	var defineProperty$c = Object.defineProperty;
	var defineGlobalProperty$3 = function defineGlobalProperty(key, value) {
	  try {
	    defineProperty$c(global$N, key, {
	      value: value,
	      configurable: true,
	      writable: true
	    });
	  } catch (error) {
	    global$N[key] = value;
	  }
	  return value;
	};

	var global$M = global$R;
	var defineGlobalProperty$2 = defineGlobalProperty$3;
	var SHARED = '__core-js_shared__';
	var store$5 = global$M[SHARED] || defineGlobalProperty$2(SHARED, {});
	var sharedStore = store$5;

	var store$4 = sharedStore;
	(shared$9.exports = function (key, value) {
	  return store$4[key] || (store$4[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: '3.35.0',
	  mode: 'global',
	  copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
	  license: 'https://github.com/zloirock/core-js/blob/v3.35.0/LICENSE',
	  source: 'https://github.com/zloirock/core-js'
	});

	var requireObjectCoercible$g = requireObjectCoercible$i;
	var $Object$6 = Object;

	// `ToObject` abstract operation
	// https://tc39.es/ecma262/#sec-toobject
	var toObject$u = function toObject(argument) {
	  return $Object$6(requireObjectCoercible$g(argument));
	};

	var uncurryThis$11 = functionUncurryThis;
	var toObject$t = toObject$u;
	var hasOwnProperty = uncurryThis$11({}.hasOwnProperty);

	// `HasOwnProperty` abstract operation
	// https://tc39.es/ecma262/#sec-hasownproperty
	// eslint-disable-next-line es/no-object-hasown -- safe
	var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
	  return hasOwnProperty(toObject$t(it), key);
	};

	var uncurryThis$10 = functionUncurryThis;
	var id$2 = 0;
	var postfix = Math.random();
	var toString$s = uncurryThis$10(1.0.toString);
	var uid$5 = function uid(key) {
	  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$s(++id$2 + postfix, 36);
	};

	var global$L = global$R;
	var shared$8 = shared$9.exports;
	var hasOwn$u = hasOwnProperty_1;
	var uid$4 = uid$5;
	var NATIVE_SYMBOL$5 = symbolConstructorDetection;
	var USE_SYMBOL_AS_UID = useSymbolAsUid;
	var Symbol$3 = global$L.Symbol;
	var WellKnownSymbolsStore$1 = shared$8('wks');
	var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$3['for'] || Symbol$3 : Symbol$3 && Symbol$3.withoutSetter || uid$4;
	var wellKnownSymbol$I = function wellKnownSymbol(name) {
	  if (!hasOwn$u(WellKnownSymbolsStore$1, name)) {
	    WellKnownSymbolsStore$1[name] = NATIVE_SYMBOL$5 && hasOwn$u(Symbol$3, name) ? Symbol$3[name] : createWellKnownSymbol('Symbol.' + name);
	  }
	  return WellKnownSymbolsStore$1[name];
	};

	var call$15 = functionCall;
	var isObject$H = isObject$J;
	var isSymbol$5 = isSymbol$6;
	var getMethod$f = getMethod$g;
	var ordinaryToPrimitive$1 = ordinaryToPrimitive$2;
	var wellKnownSymbol$H = wellKnownSymbol$I;
	var $TypeError$w = TypeError;
	var TO_PRIMITIVE$1 = wellKnownSymbol$H('toPrimitive');

	// `ToPrimitive` abstract operation
	// https://tc39.es/ecma262/#sec-toprimitive
	var toPrimitive$3 = function toPrimitive(input, pref) {
	  if (!isObject$H(input) || isSymbol$5(input)) return input;
	  var exoticToPrim = getMethod$f(input, TO_PRIMITIVE$1);
	  var result;
	  if (exoticToPrim) {
	    if (pref === undefined) pref = 'default';
	    result = call$15(exoticToPrim, input, pref);
	    if (!isObject$H(result) || isSymbol$5(result)) return result;
	    throw new $TypeError$w("Can't convert object to primitive value");
	  }
	  if (pref === undefined) pref = 'number';
	  return ordinaryToPrimitive$1(input, pref);
	};

	var toPrimitive$2 = toPrimitive$3;
	var isSymbol$4 = isSymbol$6;

	// `ToPropertyKey` abstract operation
	// https://tc39.es/ecma262/#sec-topropertykey
	var toPropertyKey$8 = function toPropertyKey(argument) {
	  var key = toPrimitive$2(argument, 'string');
	  return isSymbol$4(key) ? key : key + '';
	};

	var global$K = global$R;
	var isObject$G = isObject$J;
	var document$3 = global$K.document;
	// typeof document.createElement is 'object' in old IE
	var EXISTS$1 = isObject$G(document$3) && isObject$G(document$3.createElement);
	var documentCreateElement$2 = function documentCreateElement(it) {
	  return EXISTS$1 ? document$3.createElement(it) : {};
	};

	var DESCRIPTORS$C = descriptors;
	var fails$_ = fails$13;
	var createElement$1 = documentCreateElement$2;

	// Thanks to IE8 for its funny defineProperty
	var ie8DomDefine = !DESCRIPTORS$C && !fails$_(function () {
	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
	  return Object.defineProperty(createElement$1('div'), 'a', {
	    get: function get() {
	      return 7;
	    }
	  }).a !== 7;
	});

	var DESCRIPTORS$B = descriptors;
	var call$14 = functionCall;
	var propertyIsEnumerableModule$2 = objectPropertyIsEnumerable;
	var createPropertyDescriptor$9 = createPropertyDescriptor$a;
	var toIndexedObject$d = toIndexedObject$e;
	var toPropertyKey$7 = toPropertyKey$8;
	var hasOwn$t = hasOwnProperty_1;
	var IE8_DOM_DEFINE$1 = ie8DomDefine;

	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var $getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

	// `Object.getOwnPropertyDescriptor` method
	// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
	objectGetOwnPropertyDescriptor.f = DESCRIPTORS$B ? $getOwnPropertyDescriptor$2 : function getOwnPropertyDescriptor(O, P) {
	  O = toIndexedObject$d(O);
	  P = toPropertyKey$7(P);
	  if (IE8_DOM_DEFINE$1) try {
	    return $getOwnPropertyDescriptor$2(O, P);
	  } catch (error) {/* empty */}
	  if (hasOwn$t(O, P)) return createPropertyDescriptor$9(!call$14(propertyIsEnumerableModule$2.f, O, P), O[P]);
	};

	var objectDefineProperty = {};

	var DESCRIPTORS$A = descriptors;
	var fails$Z = fails$13;

	// V8 ~ Chrome 36-
	// https://bugs.chromium.org/p/v8/issues/detail?id=3334
	var v8PrototypeDefineBug = DESCRIPTORS$A && fails$Z(function () {
	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
	  return Object.defineProperty(function () {/* empty */}, 'prototype', {
	    value: 42,
	    writable: false
	  }).prototype !== 42;
	});

	var isObject$F = isObject$J;
	var $String$4 = String;
	var $TypeError$v = TypeError;

	// `Assert: Type(argument) is Object`
	var anObject$1a = function anObject(argument) {
	  if (isObject$F(argument)) return argument;
	  throw new $TypeError$v($String$4(argument) + ' is not an object');
	};

	var DESCRIPTORS$z = descriptors;
	var IE8_DOM_DEFINE = ie8DomDefine;
	var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
	var anObject$19 = anObject$1a;
	var toPropertyKey$6 = toPropertyKey$8;
	var $TypeError$u = TypeError;
	// eslint-disable-next-line es/no-object-defineproperty -- safe
	var $defineProperty$1 = Object.defineProperty;
	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
	var ENUMERABLE = 'enumerable';
	var CONFIGURABLE$1 = 'configurable';
	var WRITABLE = 'writable';

	// `Object.defineProperty` method
	// https://tc39.es/ecma262/#sec-object.defineproperty
	objectDefineProperty.f = DESCRIPTORS$z ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
	  anObject$19(O);
	  P = toPropertyKey$6(P);
	  anObject$19(Attributes);
	  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
	    var current = $getOwnPropertyDescriptor$1(O, P);
	    if (current && current[WRITABLE]) {
	      O[P] = Attributes.value;
	      Attributes = {
	        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
	        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
	        writable: false
	      };
	    }
	  }
	  return $defineProperty$1(O, P, Attributes);
	} : $defineProperty$1 : function defineProperty(O, P, Attributes) {
	  anObject$19(O);
	  P = toPropertyKey$6(P);
	  anObject$19(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return $defineProperty$1(O, P, Attributes);
	  } catch (error) {/* empty */}
	  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError$u('Accessors not supported');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var DESCRIPTORS$y = descriptors;
	var definePropertyModule$b = objectDefineProperty;
	var createPropertyDescriptor$8 = createPropertyDescriptor$a;
	var createNonEnumerableProperty$g = DESCRIPTORS$y ? function (object, key, value) {
	  return definePropertyModule$b.f(object, key, createPropertyDescriptor$8(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var makeBuiltIn$4 = {exports: {}};

	var DESCRIPTORS$x = descriptors;
	var hasOwn$s = hasOwnProperty_1;
	var FunctionPrototype$2 = Function.prototype;
	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var getDescriptor = DESCRIPTORS$x && Object.getOwnPropertyDescriptor;
	var EXISTS = hasOwn$s(FunctionPrototype$2, 'name');
	// additional protection from minified / mangled / dropped function names
	var PROPER = EXISTS && function something() {/* empty */}.name === 'something';
	var CONFIGURABLE = EXISTS && (!DESCRIPTORS$x || DESCRIPTORS$x && getDescriptor(FunctionPrototype$2, 'name').configurable);
	var functionName = {
	  EXISTS: EXISTS,
	  PROPER: PROPER,
	  CONFIGURABLE: CONFIGURABLE
	};

	var uncurryThis$$ = functionUncurryThis;
	var isCallable$y = isCallable$E;
	var store$3 = sharedStore;
	var functionToString = uncurryThis$$(Function.toString);

	// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
	if (!isCallable$y(store$3.inspectSource)) {
	  store$3.inspectSource = function (it) {
	    return functionToString(it);
	  };
	}
	var inspectSource$3 = store$3.inspectSource;

	var global$J = global$R;
	var isCallable$x = isCallable$E;
	var WeakMap$4 = global$J.WeakMap;
	var weakMapBasicDetection = isCallable$x(WeakMap$4) && /native code/.test(String(WeakMap$4));

	var shared$7 = shared$9.exports;
	var uid$3 = uid$5;
	var keys$2 = shared$7('keys');
	var sharedKey$4 = function sharedKey(key) {
	  return keys$2[key] || (keys$2[key] = uid$3(key));
	};

	var hiddenKeys$6 = {};

	var NATIVE_WEAK_MAP$1 = weakMapBasicDetection;
	var global$I = global$R;
	var isObject$E = isObject$J;
	var createNonEnumerableProperty$f = createNonEnumerableProperty$g;
	var hasOwn$r = hasOwnProperty_1;
	var shared$6 = sharedStore;
	var sharedKey$3 = sharedKey$4;
	var hiddenKeys$5 = hiddenKeys$6;
	var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
	var TypeError$7 = global$I.TypeError;
	var WeakMap$3 = global$I.WeakMap;
	var set$9, get$4, has$b;
	var enforce = function enforce(it) {
	  return has$b(it) ? get$4(it) : set$9(it, {});
	};
	var getterFor$1 = function getterFor(TYPE) {
	  return function (it) {
	    var state;
	    if (!isObject$E(it) || (state = get$4(it)).type !== TYPE) {
	      throw new TypeError$7('Incompatible receiver, ' + TYPE + ' required');
	    }
	    return state;
	  };
	};
	if (NATIVE_WEAK_MAP$1 || shared$6.state) {
	  var store$2 = shared$6.state || (shared$6.state = new WeakMap$3());
	  /* eslint-disable no-self-assign -- prototype methods protection */
	  store$2.get = store$2.get;
	  store$2.has = store$2.has;
	  store$2.set = store$2.set;
	  /* eslint-enable no-self-assign -- prototype methods protection */
	  set$9 = function set(it, metadata) {
	    if (store$2.has(it)) throw new TypeError$7(OBJECT_ALREADY_INITIALIZED);
	    metadata.facade = it;
	    store$2.set(it, metadata);
	    return metadata;
	  };
	  get$4 = function get(it) {
	    return store$2.get(it) || {};
	  };
	  has$b = function has(it) {
	    return store$2.has(it);
	  };
	} else {
	  var STATE = sharedKey$3('state');
	  hiddenKeys$5[STATE] = true;
	  set$9 = function set(it, metadata) {
	    if (hasOwn$r(it, STATE)) throw new TypeError$7(OBJECT_ALREADY_INITIALIZED);
	    metadata.facade = it;
	    createNonEnumerableProperty$f(it, STATE, metadata);
	    return metadata;
	  };
	  get$4 = function get(it) {
	    return hasOwn$r(it, STATE) ? it[STATE] : {};
	  };
	  has$b = function has(it) {
	    return hasOwn$r(it, STATE);
	  };
	}
	var internalState = {
	  set: set$9,
	  get: get$4,
	  has: has$b,
	  enforce: enforce,
	  getterFor: getterFor$1
	};

	var uncurryThis$_ = functionUncurryThis;
	var fails$Y = fails$13;
	var isCallable$w = isCallable$E;
	var hasOwn$q = hasOwnProperty_1;
	var DESCRIPTORS$w = descriptors;
	var CONFIGURABLE_FUNCTION_NAME$2 = functionName.CONFIGURABLE;
	var inspectSource$2 = inspectSource$3;
	var InternalStateModule$j = internalState;
	var enforceInternalState$4 = InternalStateModule$j.enforce;
	var getInternalState$c = InternalStateModule$j.get;
	var $String$3 = String;
	// eslint-disable-next-line es/no-object-defineproperty -- safe
	var defineProperty$b = Object.defineProperty;
	var stringSlice$e = uncurryThis$_(''.slice);
	var replace$a = uncurryThis$_(''.replace);
	var join$7 = uncurryThis$_([].join);
	var CONFIGURABLE_LENGTH = DESCRIPTORS$w && !fails$Y(function () {
	  return defineProperty$b(function () {/* empty */}, 'length', {
	    value: 8
	  }).length !== 8;
	});
	var TEMPLATE = String(String).split('String');
	var makeBuiltIn$3 = makeBuiltIn$4.exports = function (value, name, options) {
	  if (stringSlice$e($String$3(name), 0, 7) === 'Symbol(') {
	    name = '[' + replace$a($String$3(name), /^Symbol\(([^)]*)\)/, '$1') + ']';
	  }
	  if (options && options.getter) name = 'get ' + name;
	  if (options && options.setter) name = 'set ' + name;
	  if (!hasOwn$q(value, 'name') || CONFIGURABLE_FUNCTION_NAME$2 && value.name !== name) {
	    if (DESCRIPTORS$w) defineProperty$b(value, 'name', {
	      value: name,
	      configurable: true
	    });else value.name = name;
	  }
	  if (CONFIGURABLE_LENGTH && options && hasOwn$q(options, 'arity') && value.length !== options.arity) {
	    defineProperty$b(value, 'length', {
	      value: options.arity
	    });
	  }
	  try {
	    if (options && hasOwn$q(options, 'constructor') && options.constructor) {
	      if (DESCRIPTORS$w) defineProperty$b(value, 'prototype', {
	        writable: false
	      });
	      // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
	    } else if (value.prototype) value.prototype = undefined;
	  } catch (error) {/* empty */}
	  var state = enforceInternalState$4(value);
	  if (!hasOwn$q(state, 'source')) {
	    state.source = join$7(TEMPLATE, typeof name == 'string' ? name : '');
	  }
	  return value;
	};

	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	// eslint-disable-next-line no-extend-native -- required
	Function.prototype.toString = makeBuiltIn$3(function toString() {
	  return isCallable$w(this) && getInternalState$c(this).source || inspectSource$2(this);
	}, 'toString');

	var isCallable$v = isCallable$E;
	var definePropertyModule$a = objectDefineProperty;
	var makeBuiltIn$2 = makeBuiltIn$4.exports;
	var defineGlobalProperty$1 = defineGlobalProperty$3;
	var defineBuiltIn$l = function defineBuiltIn(O, key, value, options) {
	  if (!options) options = {};
	  var simple = options.enumerable;
	  var name = options.name !== undefined ? options.name : key;
	  if (isCallable$v(value)) makeBuiltIn$2(value, name, options);
	  if (options.global) {
	    if (simple) O[key] = value;else defineGlobalProperty$1(key, value);
	  } else {
	    try {
	      if (!options.unsafe) delete O[key];else if (O[key]) simple = true;
	    } catch (error) {/* empty */}
	    if (simple) O[key] = value;else definePropertyModule$a.f(O, key, {
	      value: value,
	      enumerable: false,
	      configurable: !options.nonConfigurable,
	      writable: !options.nonWritable
	    });
	  }
	  return O;
	};

	var objectGetOwnPropertyNames = {};

	var ceil$1 = Math.ceil;
	var floor$7 = Math.floor;

	// `Math.trunc` method
	// https://tc39.es/ecma262/#sec-math.trunc
	// eslint-disable-next-line es/no-math-trunc -- safe
	var mathTrunc = Math.trunc || function trunc(x) {
	  var n = +x;
	  return (n > 0 ? floor$7 : ceil$1)(n);
	};

	var trunc = mathTrunc;

	// `ToIntegerOrInfinity` abstract operation
	// https://tc39.es/ecma262/#sec-tointegerorinfinity
	var toIntegerOrInfinity$e = function toIntegerOrInfinity(argument) {
	  var number = +argument;
	  // eslint-disable-next-line no-self-compare -- NaN check
	  return number !== number || number === 0 ? 0 : trunc(number);
	};

	var toIntegerOrInfinity$d = toIntegerOrInfinity$e;
	var max$6 = Math.max;
	var min$9 = Math.min;

	// Helper for a popular repeating case of the spec:
	// Let integer be ? ToInteger(index).
	// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
	var toAbsoluteIndex$6 = function toAbsoluteIndex(index, length) {
	  var integer = toIntegerOrInfinity$d(index);
	  return integer < 0 ? max$6(integer + length, 0) : min$9(integer, length);
	};

	var toIntegerOrInfinity$c = toIntegerOrInfinity$e;
	var min$8 = Math.min;

	// `ToLength` abstract operation
	// https://tc39.es/ecma262/#sec-tolength
	var toLength$b = function toLength(argument) {
	  return argument > 0 ? min$8(toIntegerOrInfinity$c(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
	};

	var toLength$a = toLength$b;

	// `LengthOfArrayLike` abstract operation
	// https://tc39.es/ecma262/#sec-lengthofarraylike
	var lengthOfArrayLike$m = function lengthOfArrayLike(obj) {
	  return toLength$a(obj.length);
	};

	var toIndexedObject$c = toIndexedObject$e;
	var toAbsoluteIndex$5 = toAbsoluteIndex$6;
	var lengthOfArrayLike$l = lengthOfArrayLike$m;

	// `Array.prototype.{ indexOf, includes }` methods implementation
	var createMethod$7 = function createMethod(IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIndexedObject$c($this);
	    var length = lengthOfArrayLike$l(O);
	    var index = toAbsoluteIndex$5(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare -- NaN check
	    if (IS_INCLUDES && el !== el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare -- NaN check
	      if (value !== value) return true;
	      // Array#indexOf ignores holes, Array#includes - not
	    } else for (; length > index; index++) {
	      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
	    }
	    return !IS_INCLUDES && -1;
	  };
	};
	var arrayIncludes = {
	  // `Array.prototype.includes` method
	  // https://tc39.es/ecma262/#sec-array.prototype.includes
	  includes: createMethod$7(true),
	  // `Array.prototype.indexOf` method
	  // https://tc39.es/ecma262/#sec-array.prototype.indexof
	  indexOf: createMethod$7(false)
	};

	var uncurryThis$Z = functionUncurryThis;
	var hasOwn$p = hasOwnProperty_1;
	var toIndexedObject$b = toIndexedObject$e;
	var indexOf$2 = arrayIncludes.indexOf;
	var hiddenKeys$4 = hiddenKeys$6;
	var push$i = uncurryThis$Z([].push);
	var objectKeysInternal = function objectKeysInternal(object, names) {
	  var O = toIndexedObject$b(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) !hasOwn$p(hiddenKeys$4, key) && hasOwn$p(O, key) && push$i(result, key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (hasOwn$p(O, key = names[i++])) {
	    ~indexOf$2(result, key) || push$i(result, key);
	  }
	  return result;
	};

	// IE8- don't enum bug keys
	var enumBugKeys$3 = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

	var internalObjectKeys$1 = objectKeysInternal;
	var enumBugKeys$2 = enumBugKeys$3;
	var hiddenKeys$3 = enumBugKeys$2.concat('length', 'prototype');

	// `Object.getOwnPropertyNames` method
	// https://tc39.es/ecma262/#sec-object.getownpropertynames
	// eslint-disable-next-line es/no-object-getownpropertynames -- safe
	objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return internalObjectKeys$1(O, hiddenKeys$3);
	};

	var objectGetOwnPropertySymbols = {};

	// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
	objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

	var getBuiltIn$p = getBuiltIn$r;
	var uncurryThis$Y = functionUncurryThis;
	var getOwnPropertyNamesModule$2 = objectGetOwnPropertyNames;
	var getOwnPropertySymbolsModule$3 = objectGetOwnPropertySymbols;
	var anObject$18 = anObject$1a;
	var concat$4 = uncurryThis$Y([].concat);

	// all object keys, includes non-enumerable and symbols
	var ownKeys$4 = getBuiltIn$p('Reflect', 'ownKeys') || function ownKeys(it) {
	  var keys = getOwnPropertyNamesModule$2.f(anObject$18(it));
	  var getOwnPropertySymbols = getOwnPropertySymbolsModule$3.f;
	  return getOwnPropertySymbols ? concat$4(keys, getOwnPropertySymbols(it)) : keys;
	};

	var hasOwn$o = hasOwnProperty_1;
	var ownKeys$3 = ownKeys$4;
	var getOwnPropertyDescriptorModule$6 = objectGetOwnPropertyDescriptor;
	var definePropertyModule$9 = objectDefineProperty;
	var copyConstructorProperties$5 = function copyConstructorProperties(target, source, exceptions) {
	  var keys = ownKeys$3(source);
	  var defineProperty = definePropertyModule$9.f;
	  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule$6.f;
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    if (!hasOwn$o(target, key) && !(exceptions && hasOwn$o(exceptions, key))) {
	      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
	    }
	  }
	};

	var fails$X = fails$13;
	var isCallable$u = isCallable$E;
	var replacement = /#|\.prototype\./;
	var isForced$5 = function isForced(feature, detection) {
	  var value = data[normalize(feature)];
	  return value === POLYFILL ? true : value === NATIVE ? false : isCallable$u(detection) ? fails$X(detection) : !!detection;
	};
	var normalize = isForced$5.normalize = function (string) {
	  return String(string).replace(replacement, '.').toLowerCase();
	};
	var data = isForced$5.data = {};
	var NATIVE = isForced$5.NATIVE = 'N';
	var POLYFILL = isForced$5.POLYFILL = 'P';
	var isForced_1 = isForced$5;

	var global$H = global$R;
	var getOwnPropertyDescriptor$a = objectGetOwnPropertyDescriptor.f;
	var createNonEnumerableProperty$e = createNonEnumerableProperty$g;
	var defineBuiltIn$k = defineBuiltIn$l;
	var defineGlobalProperty = defineGlobalProperty$3;
	var copyConstructorProperties$4 = copyConstructorProperties$5;
	var isForced$4 = isForced_1;

	/*
	  options.target         - name of the target object
	  options.global         - target is the global object
	  options.stat           - export as static methods of target
	  options.proto          - export as prototype methods of target
	  options.real           - real prototype method for the `pure` version
	  options.forced         - export even if the native feature is available
	  options.bind           - bind methods to the target, required for the `pure` version
	  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
	  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
	  options.sham           - add a flag to not completely full polyfills
	  options.enumerable     - export as enumerable property
	  options.dontCallGetSet - prevent calling a getter on target
	  options.name           - the .name of the function if it does not match the key
	*/
	var _export = function _export(options, source) {
	  var TARGET = options.target;
	  var GLOBAL = options.global;
	  var STATIC = options.stat;
	  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
	  if (GLOBAL) {
	    target = global$H;
	  } else if (STATIC) {
	    target = global$H[TARGET] || defineGlobalProperty(TARGET, {});
	  } else {
	    target = (global$H[TARGET] || {}).prototype;
	  }
	  if (target) for (key in source) {
	    sourceProperty = source[key];
	    if (options.dontCallGetSet) {
	      descriptor = getOwnPropertyDescriptor$a(target, key);
	      targetProperty = descriptor && descriptor.value;
	    } else targetProperty = target[key];
	    FORCED = isForced$4(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
	    // contained in target
	    if (!FORCED && targetProperty !== undefined) {
	      if (typeof sourceProperty == typeof targetProperty) continue;
	      copyConstructorProperties$4(sourceProperty, targetProperty);
	    }
	    // add a flag to not completely full polyfills
	    if (options.sham || targetProperty && targetProperty.sham) {
	      createNonEnumerableProperty$e(sourceProperty, 'sham', true);
	    }
	    defineBuiltIn$k(target, key, sourceProperty, options);
	  }
	};

	var wellKnownSymbol$G = wellKnownSymbol$I;
	var TO_STRING_TAG$8 = wellKnownSymbol$G('toStringTag');
	var test$1 = {};
	test$1[TO_STRING_TAG$8] = 'z';
	var toStringTagSupport = String(test$1) === '[object z]';

	var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
	var isCallable$t = isCallable$E;
	var classofRaw$1 = classofRaw$2;
	var wellKnownSymbol$F = wellKnownSymbol$I;
	var TO_STRING_TAG$7 = wellKnownSymbol$F('toStringTag');
	var $Object$5 = Object;

	// ES3 wrong here
	var CORRECT_ARGUMENTS = classofRaw$1(function () {
	  return arguments;
	}()) === 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function tryGet(it, key) {
	  try {
	    return it[key];
	  } catch (error) {/* empty */}
	};

	// getting tag from ES6+ `Object.prototype.toString`
	var classof$l = TO_STRING_TAG_SUPPORT$2 ? classofRaw$1 : function (it) {
	  var O, tag, result;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	  // @@toStringTag case
	  : typeof (tag = tryGet(O = $Object$5(it), TO_STRING_TAG$7)) == 'string' ? tag
	  // builtinTag case
	  : CORRECT_ARGUMENTS ? classofRaw$1(O)
	  // ES3 arguments fallback
	  : (result = classofRaw$1(O)) === 'Object' && isCallable$t(O.callee) ? 'Arguments' : result;
	};

	var classof$k = classof$l;
	var $String$2 = String;
	var toString$r = function toString(argument) {
	  if (classof$k(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
	  return $String$2(argument);
	};

	var objectDefineProperties = {};

	var internalObjectKeys = objectKeysInternal;
	var enumBugKeys$1 = enumBugKeys$3;

	// `Object.keys` method
	// https://tc39.es/ecma262/#sec-object.keys
	// eslint-disable-next-line es/no-object-keys -- safe
	var objectKeys$5 = Object.keys || function keys(O) {
	  return internalObjectKeys(O, enumBugKeys$1);
	};

	var DESCRIPTORS$v = descriptors;
	var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
	var definePropertyModule$8 = objectDefineProperty;
	var anObject$17 = anObject$1a;
	var toIndexedObject$a = toIndexedObject$e;
	var objectKeys$4 = objectKeys$5;

	// `Object.defineProperties` method
	// https://tc39.es/ecma262/#sec-object.defineproperties
	// eslint-disable-next-line es/no-object-defineproperties -- safe
	objectDefineProperties.f = DESCRIPTORS$v && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject$17(O);
	  var props = toIndexedObject$a(Properties);
	  var keys = objectKeys$4(Properties);
	  var length = keys.length;
	  var index = 0;
	  var key;
	  while (length > index) definePropertyModule$8.f(O, key = keys[index++], props[key]);
	  return O;
	};

	var getBuiltIn$o = getBuiltIn$r;
	var html$2 = getBuiltIn$o('document', 'documentElement');

	/* global ActiveXObject -- old IE, WSH */
	var anObject$16 = anObject$1a;
	var definePropertiesModule$1 = objectDefineProperties;
	var enumBugKeys = enumBugKeys$3;
	var hiddenKeys$2 = hiddenKeys$6;
	var html$1 = html$2;
	var documentCreateElement$1 = documentCreateElement$2;
	var sharedKey$2 = sharedKey$4;
	var GT = '>';
	var LT = '<';
	var PROTOTYPE$2 = 'prototype';
	var SCRIPT = 'script';
	var IE_PROTO$1 = sharedKey$2('IE_PROTO');
	var EmptyConstructor = function EmptyConstructor() {/* empty */};
	var scriptTag = function scriptTag(content) {
	  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
	};

	// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
	var NullProtoObjectViaActiveX = function NullProtoObjectViaActiveX(activeXDocument) {
	  activeXDocument.write(scriptTag(''));
	  activeXDocument.close();
	  var temp = activeXDocument.parentWindow.Object;
	  activeXDocument = null; // avoid memory leak
	  return temp;
	};

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var NullProtoObjectViaIFrame = function NullProtoObjectViaIFrame() {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = documentCreateElement$1('iframe');
	  var JS = 'java' + SCRIPT + ':';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  html$1.appendChild(iframe);
	  // https://github.com/zloirock/core-js/issues/475
	  iframe.src = String(JS);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(scriptTag('document.F=Object'));
	  iframeDocument.close();
	  return iframeDocument.F;
	};

	// Check for document.domain and active x support
	// No need to use active x approach when document.domain is not set
	// see https://github.com/es-shims/es5-shim/issues/150
	// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
	// avoid IE GC bug
	var activeXDocument;
	var _NullProtoObject = function NullProtoObject() {
	  try {
	    activeXDocument = new ActiveXObject('htmlfile');
	  } catch (error) {/* ignore */}
	  _NullProtoObject = typeof document != 'undefined' ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) // old IE
	  : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument); // WSH
	  var length = enumBugKeys.length;
	  while (length--) delete _NullProtoObject[PROTOTYPE$2][enumBugKeys[length]];
	  return _NullProtoObject();
	};
	hiddenKeys$2[IE_PROTO$1] = true;

	// `Object.create` method
	// https://tc39.es/ecma262/#sec-object.create
	// eslint-disable-next-line es/no-object-create -- safe
	var objectCreate = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    EmptyConstructor[PROTOTYPE$2] = anObject$16(O);
	    result = new EmptyConstructor();
	    EmptyConstructor[PROTOTYPE$2] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO$1] = O;
	  } else result = _NullProtoObject();
	  return Properties === undefined ? result : definePropertiesModule$1.f(result, Properties);
	};

	var objectGetOwnPropertyNamesExternal = {};

	var uncurryThis$X = functionUncurryThis;
	var arraySlice$b = uncurryThis$X([].slice);

	/* eslint-disable es/no-object-getownpropertynames -- safe */
	var classof$j = classofRaw$2;
	var toIndexedObject$9 = toIndexedObject$e;
	var $getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
	var arraySlice$a = arraySlice$b;
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
	var getWindowNames = function getWindowNames(it) {
	  try {
	    return $getOwnPropertyNames$1(it);
	  } catch (error) {
	    return arraySlice$a(windowNames);
	  }
	};

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	objectGetOwnPropertyNamesExternal.f = function getOwnPropertyNames(it) {
	  return windowNames && classof$j(it) === 'Window' ? getWindowNames(it) : $getOwnPropertyNames$1(toIndexedObject$9(it));
	};

	var makeBuiltIn$1 = makeBuiltIn$4.exports;
	var defineProperty$a = objectDefineProperty;
	var defineBuiltInAccessor$f = function defineBuiltInAccessor(target, name, descriptor) {
	  if (descriptor.get) makeBuiltIn$1(descriptor.get, name, {
	    getter: true
	  });
	  if (descriptor.set) makeBuiltIn$1(descriptor.set, name, {
	    setter: true
	  });
	  return defineProperty$a.f(target, name, descriptor);
	};

	var wellKnownSymbolWrapped = {};

	var wellKnownSymbol$E = wellKnownSymbol$I;
	wellKnownSymbolWrapped.f = wellKnownSymbol$E;

	var global$G = global$R;
	var path$2 = global$G;

	var path$1 = path$2;
	var hasOwn$n = hasOwnProperty_1;
	var wrappedWellKnownSymbolModule$1 = wellKnownSymbolWrapped;
	var defineProperty$9 = objectDefineProperty.f;
	var wellKnownSymbolDefine = function wellKnownSymbolDefine(NAME) {
	  var Symbol = path$1.Symbol || (path$1.Symbol = {});
	  if (!hasOwn$n(Symbol, NAME)) defineProperty$9(Symbol, NAME, {
	    value: wrappedWellKnownSymbolModule$1.f(NAME)
	  });
	};

	var call$13 = functionCall;
	var getBuiltIn$n = getBuiltIn$r;
	var wellKnownSymbol$D = wellKnownSymbol$I;
	var defineBuiltIn$j = defineBuiltIn$l;
	var symbolDefineToPrimitive = function symbolDefineToPrimitive() {
	  var Symbol = getBuiltIn$n('Symbol');
	  var SymbolPrototype = Symbol && Symbol.prototype;
	  var valueOf = SymbolPrototype && SymbolPrototype.valueOf;
	  var TO_PRIMITIVE = wellKnownSymbol$D('toPrimitive');
	  if (SymbolPrototype && !SymbolPrototype[TO_PRIMITIVE]) {
	    // `Symbol.prototype[@@toPrimitive]` method
	    // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
	    // eslint-disable-next-line no-unused-vars -- required for .length
	    defineBuiltIn$j(SymbolPrototype, TO_PRIMITIVE, function (hint) {
	      return call$13(valueOf, this);
	    }, {
	      arity: 1
	    });
	  }
	};

	var defineProperty$8 = objectDefineProperty.f;
	var hasOwn$m = hasOwnProperty_1;
	var wellKnownSymbol$C = wellKnownSymbol$I;
	var TO_STRING_TAG$6 = wellKnownSymbol$C('toStringTag');
	var setToStringTag$c = function setToStringTag(target, TAG, STATIC) {
	  if (target && !STATIC) target = target.prototype;
	  if (target && !hasOwn$m(target, TO_STRING_TAG$6)) {
	    defineProperty$8(target, TO_STRING_TAG$6, {
	      configurable: true,
	      value: TAG
	    });
	  }
	};

	var classofRaw = classofRaw$2;
	var uncurryThis$W = functionUncurryThis;
	var functionUncurryThisClause = function functionUncurryThisClause(fn) {
	  // Nashorn bug:
	  //   https://github.com/zloirock/core-js/issues/1128
	  //   https://github.com/zloirock/core-js/issues/1130
	  if (classofRaw(fn) === 'Function') return uncurryThis$W(fn);
	};

	var uncurryThis$V = functionUncurryThisClause;
	var aCallable$D = aCallable$F;
	var NATIVE_BIND$2 = functionBindNative;
	var bind$p = uncurryThis$V(uncurryThis$V.bind);

	// optional / simple context binding
	var functionBindContext = function functionBindContext(fn, that) {
	  aCallable$D(fn);
	  return that === undefined ? fn : NATIVE_BIND$2 ? bind$p(fn, that) : function /* ...args */
	  () {
	    return fn.apply(that, arguments);
	  };
	};

	var classof$i = classofRaw$2;

	// `IsArray` abstract operation
	// https://tc39.es/ecma262/#sec-isarray
	// eslint-disable-next-line es/no-array-isarray -- safe
	var isArray$9 = Array.isArray || function isArray(argument) {
	  return classof$i(argument) === 'Array';
	};

	var uncurryThis$U = functionUncurryThis;
	var fails$W = fails$13;
	var isCallable$s = isCallable$E;
	var classof$h = classof$l;
	var getBuiltIn$m = getBuiltIn$r;
	var inspectSource$1 = inspectSource$3;
	var noop = function noop() {/* empty */};
	var empty = [];
	var construct$1 = getBuiltIn$m('Reflect', 'construct');
	var constructorRegExp = /^\s*(?:class|function)\b/;
	var exec$7 = uncurryThis$U(constructorRegExp.exec);
	var INCORRECT_TO_STRING = !constructorRegExp.test(noop);
	var isConstructorModern = function isConstructor(argument) {
	  if (!isCallable$s(argument)) return false;
	  try {
	    construct$1(noop, empty, argument);
	    return true;
	  } catch (error) {
	    return false;
	  }
	};
	var isConstructorLegacy = function isConstructor(argument) {
	  if (!isCallable$s(argument)) return false;
	  switch (classof$h(argument)) {
	    case 'AsyncFunction':
	    case 'GeneratorFunction':
	    case 'AsyncGeneratorFunction':
	      return false;
	  }
	  try {
	    // we can't check .prototype since constructors produced by .bind haven't it
	    // `Function#toString` throws on some built-it function in some legacy engines
	    // (for example, `DOMQuad` and similar in FF41-)
	    return INCORRECT_TO_STRING || !!exec$7(constructorRegExp, inspectSource$1(argument));
	  } catch (error) {
	    return true;
	  }
	};
	isConstructorLegacy.sham = true;

	// `IsConstructor` abstract operation
	// https://tc39.es/ecma262/#sec-isconstructor
	var isConstructor$7 = !construct$1 || fails$W(function () {
	  var called;
	  return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function () {
	    called = true;
	  }) || called;
	}) ? isConstructorLegacy : isConstructorModern;

	var isArray$8 = isArray$9;
	var isConstructor$6 = isConstructor$7;
	var isObject$D = isObject$J;
	var wellKnownSymbol$B = wellKnownSymbol$I;
	var SPECIES$6 = wellKnownSymbol$B('species');
	var $Array$4 = Array;

	// a part of `ArraySpeciesCreate` abstract operation
	// https://tc39.es/ecma262/#sec-arrayspeciescreate
	var arraySpeciesConstructor$1 = function arraySpeciesConstructor(originalArray) {
	  var C;
	  if (isArray$8(originalArray)) {
	    C = originalArray.constructor;
	    // cross-realm fallback
	    if (isConstructor$6(C) && (C === $Array$4 || isArray$8(C.prototype))) C = undefined;else if (isObject$D(C)) {
	      C = C[SPECIES$6];
	      if (C === null) C = undefined;
	    }
	  }
	  return C === undefined ? $Array$4 : C;
	};

	var arraySpeciesConstructor = arraySpeciesConstructor$1;

	// `ArraySpeciesCreate` abstract operation
	// https://tc39.es/ecma262/#sec-arrayspeciescreate
	var arraySpeciesCreate$5 = function arraySpeciesCreate(originalArray, length) {
	  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
	};

	var bind$o = functionBindContext;
	var uncurryThis$T = functionUncurryThis;
	var IndexedObject$2 = indexedObject;
	var toObject$s = toObject$u;
	var lengthOfArrayLike$k = lengthOfArrayLike$m;
	var arraySpeciesCreate$4 = arraySpeciesCreate$5;
	var push$h = uncurryThis$T([].push);

	// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
	var createMethod$6 = function createMethod(TYPE) {
	  var IS_MAP = TYPE === 1;
	  var IS_FILTER = TYPE === 2;
	  var IS_SOME = TYPE === 3;
	  var IS_EVERY = TYPE === 4;
	  var IS_FIND_INDEX = TYPE === 6;
	  var IS_FILTER_REJECT = TYPE === 7;
	  var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
	  return function ($this, callbackfn, that, specificCreate) {
	    var O = toObject$s($this);
	    var self = IndexedObject$2(O);
	    var length = lengthOfArrayLike$k(self);
	    var boundFunction = bind$o(callbackfn, that);
	    var index = 0;
	    var create = specificCreate || arraySpeciesCreate$4;
	    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
	    var value, result;
	    for (; length > index; index++) if (NO_HOLES || index in self) {
	      value = self[index];
	      result = boundFunction(value, index, O);
	      if (TYPE) {
	        if (IS_MAP) target[index] = result; // map
	        else if (result) switch (TYPE) {
	          case 3:
	            return true;
	          // some
	          case 5:
	            return value;
	          // find
	          case 6:
	            return index;
	          // findIndex
	          case 2:
	            push$h(target, value);
	          // filter
	        } else switch (TYPE) {
	          case 4:
	            return false;
	          // every
	          case 7:
	            push$h(target, value);
	          // filterReject
	        }
	      }
	    }

	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
	  };
	};
	var arrayIteration = {
	  // `Array.prototype.forEach` method
	  // https://tc39.es/ecma262/#sec-array.prototype.foreach
	  forEach: createMethod$6(0),
	  // `Array.prototype.map` method
	  // https://tc39.es/ecma262/#sec-array.prototype.map
	  map: createMethod$6(1),
	  // `Array.prototype.filter` method
	  // https://tc39.es/ecma262/#sec-array.prototype.filter
	  filter: createMethod$6(2),
	  // `Array.prototype.some` method
	  // https://tc39.es/ecma262/#sec-array.prototype.some
	  some: createMethod$6(3),
	  // `Array.prototype.every` method
	  // https://tc39.es/ecma262/#sec-array.prototype.every
	  every: createMethod$6(4),
	  // `Array.prototype.find` method
	  // https://tc39.es/ecma262/#sec-array.prototype.find
	  find: createMethod$6(5),
	  // `Array.prototype.findIndex` method
	  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
	  findIndex: createMethod$6(6),
	  // `Array.prototype.filterReject` method
	  // https://github.com/tc39/proposal-array-filtering
	  filterReject: createMethod$6(7)
	};

	var $$3e = _export;
	var global$F = global$R;
	var call$12 = functionCall;
	var uncurryThis$S = functionUncurryThis;
	var DESCRIPTORS$u = descriptors;
	var NATIVE_SYMBOL$4 = symbolConstructorDetection;
	var fails$V = fails$13;
	var hasOwn$l = hasOwnProperty_1;
	var isPrototypeOf$c = objectIsPrototypeOf;
	var anObject$15 = anObject$1a;
	var toIndexedObject$8 = toIndexedObject$e;
	var toPropertyKey$5 = toPropertyKey$8;
	var $toString$3 = toString$r;
	var createPropertyDescriptor$7 = createPropertyDescriptor$a;
	var nativeObjectCreate = objectCreate;
	var objectKeys$3 = objectKeys$5;
	var getOwnPropertyNamesModule$1 = objectGetOwnPropertyNames;
	var getOwnPropertyNamesExternal = objectGetOwnPropertyNamesExternal;
	var getOwnPropertySymbolsModule$2 = objectGetOwnPropertySymbols;
	var getOwnPropertyDescriptorModule$5 = objectGetOwnPropertyDescriptor;
	var definePropertyModule$7 = objectDefineProperty;
	var definePropertiesModule = objectDefineProperties;
	var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
	var defineBuiltIn$i = defineBuiltIn$l;
	var defineBuiltInAccessor$e = defineBuiltInAccessor$f;
	var shared$5 = shared$9.exports;
	var sharedKey$1 = sharedKey$4;
	var hiddenKeys$1 = hiddenKeys$6;
	var uid$2 = uid$5;
	var wellKnownSymbol$A = wellKnownSymbol$I;
	var wrappedWellKnownSymbolModule = wellKnownSymbolWrapped;
	var defineWellKnownSymbol$i = wellKnownSymbolDefine;
	var defineSymbolToPrimitive$1 = symbolDefineToPrimitive;
	var setToStringTag$b = setToStringTag$c;
	var InternalStateModule$i = internalState;
	var $forEach$3 = arrayIteration.forEach;
	var HIDDEN = sharedKey$1('hidden');
	var SYMBOL = 'Symbol';
	var PROTOTYPE$1 = 'prototype';
	var setInternalState$h = InternalStateModule$i.set;
	var getInternalState$b = InternalStateModule$i.getterFor(SYMBOL);
	var ObjectPrototype$4 = Object[PROTOTYPE$1];
	var $Symbol = global$F.Symbol;
	var SymbolPrototype$1 = $Symbol && $Symbol[PROTOTYPE$1];
	var RangeError$4 = global$F.RangeError;
	var TypeError$6 = global$F.TypeError;
	var QObject = global$F.QObject;
	var nativeGetOwnPropertyDescriptor$2 = getOwnPropertyDescriptorModule$5.f;
	var nativeDefineProperty$1 = definePropertyModule$7.f;
	var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
	var nativePropertyIsEnumerable = propertyIsEnumerableModule$1.f;
	var push$g = uncurryThis$S([].push);
	var AllSymbols = shared$5('symbols');
	var ObjectPrototypeSymbols = shared$5('op-symbols');
	var WellKnownSymbolsStore = shared$5('wks');

	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var USE_SETTER = !QObject || !QObject[PROTOTYPE$1] || !QObject[PROTOTYPE$1].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var fallbackDefineProperty = function fallbackDefineProperty(O, P, Attributes) {
	  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor$2(ObjectPrototype$4, P);
	  if (ObjectPrototypeDescriptor) delete ObjectPrototype$4[P];
	  nativeDefineProperty$1(O, P, Attributes);
	  if (ObjectPrototypeDescriptor && O !== ObjectPrototype$4) {
	    nativeDefineProperty$1(ObjectPrototype$4, P, ObjectPrototypeDescriptor);
	  }
	};
	var setSymbolDescriptor = DESCRIPTORS$u && fails$V(function () {
	  return nativeObjectCreate(nativeDefineProperty$1({}, 'a', {
	    get: function get() {
	      return nativeDefineProperty$1(this, 'a', {
	        value: 7
	      }).a;
	    }
	  })).a !== 7;
	}) ? fallbackDefineProperty : nativeDefineProperty$1;
	var wrap = function wrap(tag, description) {
	  var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype$1);
	  setInternalState$h(symbol, {
	    type: SYMBOL,
	    tag: tag,
	    description: description
	  });
	  if (!DESCRIPTORS$u) symbol.description = description;
	  return symbol;
	};
	var $defineProperty = function defineProperty(O, P, Attributes) {
	  if (O === ObjectPrototype$4) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
	  anObject$15(O);
	  var key = toPropertyKey$5(P);
	  anObject$15(Attributes);
	  if (hasOwn$l(AllSymbols, key)) {
	    if (!Attributes.enumerable) {
	      if (!hasOwn$l(O, HIDDEN)) nativeDefineProperty$1(O, HIDDEN, createPropertyDescriptor$7(1, nativeObjectCreate(null)));
	      O[HIDDEN][key] = true;
	    } else {
	      if (hasOwn$l(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
	      Attributes = nativeObjectCreate(Attributes, {
	        enumerable: createPropertyDescriptor$7(0, false)
	      });
	    }
	    return setSymbolDescriptor(O, key, Attributes);
	  }
	  return nativeDefineProperty$1(O, key, Attributes);
	};
	var $defineProperties = function defineProperties(O, Properties) {
	  anObject$15(O);
	  var properties = toIndexedObject$8(Properties);
	  var keys = objectKeys$3(properties).concat($getOwnPropertySymbols(properties));
	  $forEach$3(keys, function (key) {
	    if (!DESCRIPTORS$u || call$12($propertyIsEnumerable$1, properties, key)) $defineProperty(O, key, properties[key]);
	  });
	  return O;
	};
	var $create = function create(O, Properties) {
	  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
	};
	var $propertyIsEnumerable$1 = function propertyIsEnumerable(V) {
	  var P = toPropertyKey$5(V);
	  var enumerable = call$12(nativePropertyIsEnumerable, this, P);
	  if (this === ObjectPrototype$4 && hasOwn$l(AllSymbols, P) && !hasOwn$l(ObjectPrototypeSymbols, P)) return false;
	  return enumerable || !hasOwn$l(this, P) || !hasOwn$l(AllSymbols, P) || hasOwn$l(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
	  var it = toIndexedObject$8(O);
	  var key = toPropertyKey$5(P);
	  if (it === ObjectPrototype$4 && hasOwn$l(AllSymbols, key) && !hasOwn$l(ObjectPrototypeSymbols, key)) return;
	  var descriptor = nativeGetOwnPropertyDescriptor$2(it, key);
	  if (descriptor && hasOwn$l(AllSymbols, key) && !(hasOwn$l(it, HIDDEN) && it[HIDDEN][key])) {
	    descriptor.enumerable = true;
	  }
	  return descriptor;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(O) {
	  var names = nativeGetOwnPropertyNames(toIndexedObject$8(O));
	  var result = [];
	  $forEach$3(names, function (key) {
	    if (!hasOwn$l(AllSymbols, key) && !hasOwn$l(hiddenKeys$1, key)) push$g(result, key);
	  });
	  return result;
	};
	var $getOwnPropertySymbols = function $getOwnPropertySymbols(O) {
	  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype$4;
	  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject$8(O));
	  var result = [];
	  $forEach$3(names, function (key) {
	    if (hasOwn$l(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn$l(ObjectPrototype$4, key))) {
	      push$g(result, AllSymbols[key]);
	    }
	  });
	  return result;
	};

	// `Symbol` constructor
	// https://tc39.es/ecma262/#sec-symbol-constructor
	if (!NATIVE_SYMBOL$4) {
	  $Symbol = function Symbol() {
	    if (isPrototypeOf$c(SymbolPrototype$1, this)) throw new TypeError$6('Symbol is not a constructor');
	    var description = !arguments.length || arguments[0] === undefined ? undefined : $toString$3(arguments[0]);
	    var tag = uid$2(description);
	    var setter = function setter(value) {
	      var $this = this === undefined ? global$F : this;
	      if ($this === ObjectPrototype$4) call$12(setter, ObjectPrototypeSymbols, value);
	      if (hasOwn$l($this, HIDDEN) && hasOwn$l($this[HIDDEN], tag)) $this[HIDDEN][tag] = false;
	      var descriptor = createPropertyDescriptor$7(1, value);
	      try {
	        setSymbolDescriptor($this, tag, descriptor);
	      } catch (error) {
	        if (!(error instanceof RangeError$4)) throw error;
	        fallbackDefineProperty($this, tag, descriptor);
	      }
	    };
	    if (DESCRIPTORS$u && USE_SETTER) setSymbolDescriptor(ObjectPrototype$4, tag, {
	      configurable: true,
	      set: setter
	    });
	    return wrap(tag, description);
	  };
	  SymbolPrototype$1 = $Symbol[PROTOTYPE$1];
	  defineBuiltIn$i(SymbolPrototype$1, 'toString', function toString() {
	    return getInternalState$b(this).tag;
	  });
	  defineBuiltIn$i($Symbol, 'withoutSetter', function (description) {
	    return wrap(uid$2(description), description);
	  });
	  propertyIsEnumerableModule$1.f = $propertyIsEnumerable$1;
	  definePropertyModule$7.f = $defineProperty;
	  definePropertiesModule.f = $defineProperties;
	  getOwnPropertyDescriptorModule$5.f = $getOwnPropertyDescriptor;
	  getOwnPropertyNamesModule$1.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
	  getOwnPropertySymbolsModule$2.f = $getOwnPropertySymbols;
	  wrappedWellKnownSymbolModule.f = function (name) {
	    return wrap(wellKnownSymbol$A(name), name);
	  };
	  if (DESCRIPTORS$u) {
	    // https://github.com/tc39/proposal-Symbol-description
	    defineBuiltInAccessor$e(SymbolPrototype$1, 'description', {
	      configurable: true,
	      get: function description() {
	        return getInternalState$b(this).description;
	      }
	    });
	    {
	      defineBuiltIn$i(ObjectPrototype$4, 'propertyIsEnumerable', $propertyIsEnumerable$1, {
	        unsafe: true
	      });
	    }
	  }
	}
	$$3e({
	  global: true,
	  constructor: true,
	  wrap: true,
	  forced: !NATIVE_SYMBOL$4,
	  sham: !NATIVE_SYMBOL$4
	}, {
	  Symbol: $Symbol
	});
	$forEach$3(objectKeys$3(WellKnownSymbolsStore), function (name) {
	  defineWellKnownSymbol$i(name);
	});
	$$3e({
	  target: SYMBOL,
	  stat: true,
	  forced: !NATIVE_SYMBOL$4
	}, {
	  useSetter: function useSetter() {
	    USE_SETTER = true;
	  },
	  useSimple: function useSimple() {
	    USE_SETTER = false;
	  }
	});
	$$3e({
	  target: 'Object',
	  stat: true,
	  forced: !NATIVE_SYMBOL$4,
	  sham: !DESCRIPTORS$u
	}, {
	  // `Object.create` method
	  // https://tc39.es/ecma262/#sec-object.create
	  create: $create,
	  // `Object.defineProperty` method
	  // https://tc39.es/ecma262/#sec-object.defineproperty
	  defineProperty: $defineProperty,
	  // `Object.defineProperties` method
	  // https://tc39.es/ecma262/#sec-object.defineproperties
	  defineProperties: $defineProperties,
	  // `Object.getOwnPropertyDescriptor` method
	  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
	});
	$$3e({
	  target: 'Object',
	  stat: true,
	  forced: !NATIVE_SYMBOL$4
	}, {
	  // `Object.getOwnPropertyNames` method
	  // https://tc39.es/ecma262/#sec-object.getownpropertynames
	  getOwnPropertyNames: $getOwnPropertyNames
	});

	// `Symbol.prototype[@@toPrimitive]` method
	// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
	defineSymbolToPrimitive$1();

	// `Symbol.prototype[@@toStringTag]` property
	// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
	setToStringTag$b($Symbol, SYMBOL);
	hiddenKeys$1[HIDDEN] = true;

	var NATIVE_SYMBOL$3 = symbolConstructorDetection;

	/* eslint-disable es/no-symbol -- safe */
	var symbolRegistryDetection = NATIVE_SYMBOL$3 && !!Symbol['for'] && !!Symbol.keyFor;

	var $$3d = _export;
	var getBuiltIn$l = getBuiltIn$r;
	var hasOwn$k = hasOwnProperty_1;
	var toString$q = toString$r;
	var shared$4 = shared$9.exports;
	var NATIVE_SYMBOL_REGISTRY$1 = symbolRegistryDetection;
	var StringToSymbolRegistry = shared$4('string-to-symbol-registry');
	var SymbolToStringRegistry$1 = shared$4('symbol-to-string-registry');

	// `Symbol.for` method
	// https://tc39.es/ecma262/#sec-symbol.for
	$$3d({
	  target: 'Symbol',
	  stat: true,
	  forced: !NATIVE_SYMBOL_REGISTRY$1
	}, {
	  'for': function _for(key) {
	    var string = toString$q(key);
	    if (hasOwn$k(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
	    var symbol = getBuiltIn$l('Symbol')(string);
	    StringToSymbolRegistry[string] = symbol;
	    SymbolToStringRegistry$1[symbol] = string;
	    return symbol;
	  }
	});

	var $$3c = _export;
	var hasOwn$j = hasOwnProperty_1;
	var isSymbol$3 = isSymbol$6;
	var tryToString$5 = tryToString$7;
	var shared$3 = shared$9.exports;
	var NATIVE_SYMBOL_REGISTRY = symbolRegistryDetection;
	var SymbolToStringRegistry = shared$3('symbol-to-string-registry');

	// `Symbol.keyFor` method
	// https://tc39.es/ecma262/#sec-symbol.keyfor
	$$3c({
	  target: 'Symbol',
	  stat: true,
	  forced: !NATIVE_SYMBOL_REGISTRY
	}, {
	  keyFor: function keyFor(sym) {
	    if (!isSymbol$3(sym)) throw new TypeError(tryToString$5(sym) + ' is not a symbol');
	    if (hasOwn$j(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
	  }
	});

	var NATIVE_BIND$1 = functionBindNative;
	var FunctionPrototype$1 = Function.prototype;
	var apply$b = FunctionPrototype$1.apply;
	var call$11 = FunctionPrototype$1.call;

	// eslint-disable-next-line es/no-reflect -- safe
	var functionApply$1 = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND$1 ? call$11.bind(apply$b) : function () {
	  return call$11.apply(apply$b, arguments);
	});

	var uncurryThis$R = functionUncurryThis;
	var isArray$7 = isArray$9;
	var isCallable$r = isCallable$E;
	var classof$g = classofRaw$2;
	var toString$p = toString$r;
	var push$f = uncurryThis$R([].push);
	var getJsonReplacerFunction = function getJsonReplacerFunction(replacer) {
	  if (isCallable$r(replacer)) return replacer;
	  if (!isArray$7(replacer)) return;
	  var rawLength = replacer.length;
	  var keys = [];
	  for (var i = 0; i < rawLength; i++) {
	    var element = replacer[i];
	    if (typeof element == 'string') push$f(keys, element);else if (typeof element == 'number' || classof$g(element) === 'Number' || classof$g(element) === 'String') push$f(keys, toString$p(element));
	  }
	  var keysLength = keys.length;
	  var root = true;
	  return function (key, value) {
	    if (root) {
	      root = false;
	      return value;
	    }
	    if (isArray$7(this)) return value;
	    for (var j = 0; j < keysLength; j++) if (keys[j] === key) return value;
	  };
	};

	var $$3b = _export;
	var getBuiltIn$k = getBuiltIn$r;
	var apply$a = functionApply$1;
	var call$10 = functionCall;
	var uncurryThis$Q = functionUncurryThis;
	var fails$U = fails$13;
	var isCallable$q = isCallable$E;
	var isSymbol$2 = isSymbol$6;
	var arraySlice$9 = arraySlice$b;
	var getReplacerFunction = getJsonReplacerFunction;
	var NATIVE_SYMBOL$2 = symbolConstructorDetection;
	var $String$1 = String;
	var $stringify = getBuiltIn$k('JSON', 'stringify');
	var exec$6 = uncurryThis$Q(/./.exec);
	var charAt$b = uncurryThis$Q(''.charAt);
	var charCodeAt$3 = uncurryThis$Q(''.charCodeAt);
	var replace$9 = uncurryThis$Q(''.replace);
	var numberToString$2 = uncurryThis$Q(1.0.toString);
	var tester = /[\uD800-\uDFFF]/g;
	var low = /^[\uD800-\uDBFF]$/;
	var hi = /^[\uDC00-\uDFFF]$/;
	var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL$2 || fails$U(function () {
	  var symbol = getBuiltIn$k('Symbol')('stringify detection');
	  // MS Edge converts symbol values to JSON as {}
	  return $stringify([symbol]) !== '[null]'
	  // WebKit converts symbol values to JSON as null
	  || $stringify({
	    a: symbol
	  }) !== '{}'
	  // V8 throws on boxed symbols
	  || $stringify(Object(symbol)) !== '{}';
	});

	// https://github.com/tc39/proposal-well-formed-stringify
	var ILL_FORMED_UNICODE = fails$U(function () {
	  return $stringify("\uDF06\uD834") !== "\"\\udf06\\ud834\"" || $stringify("\uDEAD") !== "\"\\udead\"";
	});
	var stringifyWithSymbolsFix = function stringifyWithSymbolsFix(it, replacer) {
	  var args = arraySlice$9(arguments);
	  var $replacer = getReplacerFunction(replacer);
	  if (!isCallable$q($replacer) && (it === undefined || isSymbol$2(it))) return; // IE8 returns string on undefined
	  args[1] = function (key, value) {
	    // some old implementations (like WebKit) could pass numbers as keys
	    if (isCallable$q($replacer)) value = call$10($replacer, this, $String$1(key), value);
	    if (!isSymbol$2(value)) return value;
	  };
	  return apply$a($stringify, null, args);
	};
	var fixIllFormed = function fixIllFormed(match, offset, string) {
	  var prev = charAt$b(string, offset - 1);
	  var next = charAt$b(string, offset + 1);
	  if (exec$6(low, match) && !exec$6(hi, next) || exec$6(hi, match) && !exec$6(low, prev)) {
	    return "\\u" + numberToString$2(charCodeAt$3(match, 0), 16);
	  }
	  return match;
	};
	if ($stringify) {
	  // `JSON.stringify` method
	  // https://tc39.es/ecma262/#sec-json.stringify
	  $$3b({
	    target: 'JSON',
	    stat: true,
	    arity: 3,
	    forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE
	  }, {
	    // eslint-disable-next-line no-unused-vars -- required for `.length`
	    stringify: function stringify(it, replacer, space) {
	      var args = arraySlice$9(arguments);
	      var result = apply$a(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args);
	      return ILL_FORMED_UNICODE && typeof result == 'string' ? replace$9(result, tester, fixIllFormed) : result;
	    }
	  });
	}

	var $$3a = _export;
	var NATIVE_SYMBOL$1 = symbolConstructorDetection;
	var fails$T = fails$13;
	var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
	var toObject$r = toObject$u;

	// V8 ~ Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
	// https://bugs.chromium.org/p/v8/issues/detail?id=3443
	var FORCED$l = !NATIVE_SYMBOL$1 || fails$T(function () {
	  getOwnPropertySymbolsModule$1.f(1);
	});

	// `Object.getOwnPropertySymbols` method
	// https://tc39.es/ecma262/#sec-object.getownpropertysymbols
	$$3a({
	  target: 'Object',
	  stat: true,
	  forced: FORCED$l
	}, {
	  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
	    var $getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
	    return $getOwnPropertySymbols ? $getOwnPropertySymbols(toObject$r(it)) : [];
	  }
	});

	var $$39 = _export;
	var DESCRIPTORS$t = descriptors;
	var global$E = global$R;
	var uncurryThis$P = functionUncurryThis;
	var hasOwn$i = hasOwnProperty_1;
	var isCallable$p = isCallable$E;
	var isPrototypeOf$b = objectIsPrototypeOf;
	var toString$o = toString$r;
	var defineBuiltInAccessor$d = defineBuiltInAccessor$f;
	var copyConstructorProperties$3 = copyConstructorProperties$5;
	var NativeSymbol = global$E.Symbol;
	var SymbolPrototype = NativeSymbol && NativeSymbol.prototype;
	if (DESCRIPTORS$t && isCallable$p(NativeSymbol) && (!('description' in SymbolPrototype) ||
	// Safari 12 bug
	NativeSymbol().description !== undefined)) {
	  var EmptyStringDescriptionStore = {};
	  // wrap Symbol constructor for correct work with undefined description
	  var SymbolWrapper = function Symbol() {
	    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : toString$o(arguments[0]);
	    var result = isPrototypeOf$b(SymbolPrototype, this) ? new NativeSymbol(description)
	    // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
	    : description === undefined ? NativeSymbol() : NativeSymbol(description);
	    if (description === '') EmptyStringDescriptionStore[result] = true;
	    return result;
	  };
	  copyConstructorProperties$3(SymbolWrapper, NativeSymbol);
	  SymbolWrapper.prototype = SymbolPrototype;
	  SymbolPrototype.constructor = SymbolWrapper;
	  var NATIVE_SYMBOL = String(NativeSymbol('description detection')) === 'Symbol(description detection)';
	  var thisSymbolValue = uncurryThis$P(SymbolPrototype.valueOf);
	  var symbolDescriptiveString = uncurryThis$P(SymbolPrototype.toString);
	  var regexp = /^Symbol\((.*)\)[^)]+$/;
	  var replace$8 = uncurryThis$P(''.replace);
	  var stringSlice$d = uncurryThis$P(''.slice);
	  defineBuiltInAccessor$d(SymbolPrototype, 'description', {
	    configurable: true,
	    get: function description() {
	      var symbol = thisSymbolValue(this);
	      if (hasOwn$i(EmptyStringDescriptionStore, symbol)) return '';
	      var string = symbolDescriptiveString(symbol);
	      var desc = NATIVE_SYMBOL ? stringSlice$d(string, 7, -1) : replace$8(string, regexp, '$1');
	      return desc === '' ? undefined : desc;
	    }
	  });
	  $$39({
	    global: true,
	    constructor: true,
	    forced: true
	  }, {
	    Symbol: SymbolWrapper
	  });
	}

	var defineWellKnownSymbol$h = wellKnownSymbolDefine;

	// `Symbol.asyncIterator` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.asynciterator
	defineWellKnownSymbol$h('asyncIterator');

	var defineWellKnownSymbol$g = wellKnownSymbolDefine;

	// `Symbol.hasInstance` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.hasinstance
	defineWellKnownSymbol$g('hasInstance');

	var defineWellKnownSymbol$f = wellKnownSymbolDefine;

	// `Symbol.isConcatSpreadable` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.isconcatspreadable
	defineWellKnownSymbol$f('isConcatSpreadable');

	var defineWellKnownSymbol$e = wellKnownSymbolDefine;

	// `Symbol.iterator` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.iterator
	defineWellKnownSymbol$e('iterator');

	var defineWellKnownSymbol$d = wellKnownSymbolDefine;

	// `Symbol.match` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.match
	defineWellKnownSymbol$d('match');

	var defineWellKnownSymbol$c = wellKnownSymbolDefine;

	// `Symbol.matchAll` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.matchall
	defineWellKnownSymbol$c('matchAll');

	var defineWellKnownSymbol$b = wellKnownSymbolDefine;

	// `Symbol.replace` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.replace
	defineWellKnownSymbol$b('replace');

	var defineWellKnownSymbol$a = wellKnownSymbolDefine;

	// `Symbol.search` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.search
	defineWellKnownSymbol$a('search');

	var defineWellKnownSymbol$9 = wellKnownSymbolDefine;

	// `Symbol.species` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.species
	defineWellKnownSymbol$9('species');

	var defineWellKnownSymbol$8 = wellKnownSymbolDefine;

	// `Symbol.split` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.split
	defineWellKnownSymbol$8('split');

	var defineWellKnownSymbol$7 = wellKnownSymbolDefine;
	var defineSymbolToPrimitive = symbolDefineToPrimitive;

	// `Symbol.toPrimitive` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.toprimitive
	defineWellKnownSymbol$7('toPrimitive');

	// `Symbol.prototype[@@toPrimitive]` method
	// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
	defineSymbolToPrimitive();

	var getBuiltIn$j = getBuiltIn$r;
	var defineWellKnownSymbol$6 = wellKnownSymbolDefine;
	var setToStringTag$a = setToStringTag$c;

	// `Symbol.toStringTag` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.tostringtag
	defineWellKnownSymbol$6('toStringTag');

	// `Symbol.prototype[@@toStringTag]` property
	// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
	setToStringTag$a(getBuiltIn$j('Symbol'), 'Symbol');

	var defineWellKnownSymbol$5 = wellKnownSymbolDefine;

	// `Symbol.unscopables` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.unscopables
	defineWellKnownSymbol$5('unscopables');

	var $TypeError$t = TypeError;
	var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

	var doesNotExceedSafeInteger$4 = function doesNotExceedSafeInteger(it) {
	  if (it > MAX_SAFE_INTEGER) throw $TypeError$t('Maximum allowed index exceeded');
	  return it;
	};

	var toPropertyKey$4 = toPropertyKey$8;
	var definePropertyModule$6 = objectDefineProperty;
	var createPropertyDescriptor$6 = createPropertyDescriptor$a;
	var createProperty$8 = function createProperty(object, key, value) {
	  var propertyKey = toPropertyKey$4(key);
	  if (propertyKey in object) definePropertyModule$6.f(object, propertyKey, createPropertyDescriptor$6(0, value));else object[propertyKey] = value;
	};

	var fails$S = fails$13;
	var wellKnownSymbol$z = wellKnownSymbol$I;
	var V8_VERSION$2 = engineV8Version;
	var SPECIES$5 = wellKnownSymbol$z('species');
	var arrayMethodHasSpeciesSupport$5 = function arrayMethodHasSpeciesSupport(METHOD_NAME) {
	  // We can't use this feature detection in V8 since it causes
	  // deoptimization and serious performance degradation
	  // https://github.com/zloirock/core-js/issues/677
	  return V8_VERSION$2 >= 51 || !fails$S(function () {
	    var array = [];
	    var constructor = array.constructor = {};
	    constructor[SPECIES$5] = function () {
	      return {
	        foo: 1
	      };
	    };
	    return array[METHOD_NAME](Boolean).foo !== 1;
	  });
	};

	var $$38 = _export;
	var fails$R = fails$13;
	var isArray$6 = isArray$9;
	var isObject$C = isObject$J;
	var toObject$q = toObject$u;
	var lengthOfArrayLike$j = lengthOfArrayLike$m;
	var doesNotExceedSafeInteger$3 = doesNotExceedSafeInteger$4;
	var createProperty$7 = createProperty$8;
	var arraySpeciesCreate$3 = arraySpeciesCreate$5;
	var arrayMethodHasSpeciesSupport$4 = arrayMethodHasSpeciesSupport$5;
	var wellKnownSymbol$y = wellKnownSymbol$I;
	var V8_VERSION$1 = engineV8Version;
	var IS_CONCAT_SPREADABLE = wellKnownSymbol$y('isConcatSpreadable');

	// We can't use this feature detection in V8 since it causes
	// deoptimization and serious performance degradation
	// https://github.com/zloirock/core-js/issues/679
	var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION$1 >= 51 || !fails$R(function () {
	  var array = [];
	  array[IS_CONCAT_SPREADABLE] = false;
	  return array.concat()[0] !== array;
	});
	var isConcatSpreadable = function isConcatSpreadable(O) {
	  if (!isObject$C(O)) return false;
	  var spreadable = O[IS_CONCAT_SPREADABLE];
	  return spreadable !== undefined ? !!spreadable : isArray$6(O);
	};
	var FORCED$k = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport$4('concat');

	// `Array.prototype.concat` method
	// https://tc39.es/ecma262/#sec-array.prototype.concat
	// with adding support of @@isConcatSpreadable and @@species
	$$38({
	  target: 'Array',
	  proto: true,
	  arity: 1,
	  forced: FORCED$k
	}, {
	  // eslint-disable-next-line no-unused-vars -- required for `.length`
	  concat: function concat(arg) {
	    var O = toObject$q(this);
	    var A = arraySpeciesCreate$3(O, 0);
	    var n = 0;
	    var i, k, length, len, E;
	    for (i = -1, length = arguments.length; i < length; i++) {
	      E = i === -1 ? O : arguments[i];
	      if (isConcatSpreadable(E)) {
	        len = lengthOfArrayLike$j(E);
	        doesNotExceedSafeInteger$3(n + len);
	        for (k = 0; k < len; k++, n++) if (k in E) createProperty$7(A, n, E[k]);
	      } else {
	        doesNotExceedSafeInteger$3(n + 1);
	        createProperty$7(A, n++, E);
	      }
	    }
	    A.length = n;
	    return A;
	  }
	});

	var tryToString$4 = tryToString$7;
	var $TypeError$s = TypeError;
	var deletePropertyOrThrow$3 = function deletePropertyOrThrow(O, P) {
	  if (!delete O[P]) throw new $TypeError$s('Cannot delete property ' + tryToString$4(P) + ' of ' + tryToString$4(O));
	};

	var toObject$p = toObject$u;
	var toAbsoluteIndex$4 = toAbsoluteIndex$6;
	var lengthOfArrayLike$i = lengthOfArrayLike$m;
	var deletePropertyOrThrow$2 = deletePropertyOrThrow$3;
	var min$7 = Math.min;

	// `Array.prototype.copyWithin` method implementation
	// https://tc39.es/ecma262/#sec-array.prototype.copywithin
	// eslint-disable-next-line es/no-array-prototype-copywithin -- safe
	var arrayCopyWithin = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
	  var O = toObject$p(this);
	  var len = lengthOfArrayLike$i(O);
	  var to = toAbsoluteIndex$4(target, len);
	  var from = toAbsoluteIndex$4(start, len);
	  var end = arguments.length > 2 ? arguments[2] : undefined;
	  var count = min$7((end === undefined ? len : toAbsoluteIndex$4(end, len)) - from, len - to);
	  var inc = 1;
	  if (from < to && to < from + count) {
	    inc = -1;
	    from += count - 1;
	    to += count - 1;
	  }
	  while (count-- > 0) {
	    if (from in O) O[to] = O[from];else deletePropertyOrThrow$2(O, to);
	    to += inc;
	    from += inc;
	  }
	  return O;
	};

	var wellKnownSymbol$x = wellKnownSymbol$I;
	var create$d = objectCreate;
	var defineProperty$7 = objectDefineProperty.f;
	var UNSCOPABLES = wellKnownSymbol$x('unscopables');
	var ArrayPrototype$1 = Array.prototype;

	// Array.prototype[@@unscopables]
	// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
	if (ArrayPrototype$1[UNSCOPABLES] === undefined) {
	  defineProperty$7(ArrayPrototype$1, UNSCOPABLES, {
	    configurable: true,
	    value: create$d(null)
	  });
	}

	// add a key to Array.prototype[@@unscopables]
	var addToUnscopables$a = function addToUnscopables(key) {
	  ArrayPrototype$1[UNSCOPABLES][key] = true;
	};

	var $$37 = _export;
	var copyWithin = arrayCopyWithin;
	var addToUnscopables$9 = addToUnscopables$a;

	// `Array.prototype.copyWithin` method
	// https://tc39.es/ecma262/#sec-array.prototype.copywithin
	$$37({
	  target: 'Array',
	  proto: true
	}, {
	  copyWithin: copyWithin
	});

	// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
	addToUnscopables$9('copyWithin');

	var toObject$o = toObject$u;
	var toAbsoluteIndex$3 = toAbsoluteIndex$6;
	var lengthOfArrayLike$h = lengthOfArrayLike$m;

	// `Array.prototype.fill` method implementation
	// https://tc39.es/ecma262/#sec-array.prototype.fill
	var arrayFill$1 = function fill(value /* , start = 0, end = @length */) {
	  var O = toObject$o(this);
	  var length = lengthOfArrayLike$h(O);
	  var argumentsLength = arguments.length;
	  var index = toAbsoluteIndex$3(argumentsLength > 1 ? arguments[1] : undefined, length);
	  var end = argumentsLength > 2 ? arguments[2] : undefined;
	  var endPos = end === undefined ? length : toAbsoluteIndex$3(end, length);
	  while (endPos > index) O[index++] = value;
	  return O;
	};

	var $$36 = _export;
	var fill$1 = arrayFill$1;
	var addToUnscopables$8 = addToUnscopables$a;

	// `Array.prototype.fill` method
	// https://tc39.es/ecma262/#sec-array.prototype.fill
	$$36({
	  target: 'Array',
	  proto: true
	}, {
	  fill: fill$1
	});

	// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
	addToUnscopables$8('fill');

	var $$35 = _export;
	var $filter$1 = arrayIteration.filter;
	var arrayMethodHasSpeciesSupport$3 = arrayMethodHasSpeciesSupport$5;
	var HAS_SPECIES_SUPPORT$3 = arrayMethodHasSpeciesSupport$3('filter');

	// `Array.prototype.filter` method
	// https://tc39.es/ecma262/#sec-array.prototype.filter
	// with adding support of @@species
	$$35({
	  target: 'Array',
	  proto: true,
	  forced: !HAS_SPECIES_SUPPORT$3
	}, {
	  filter: function filter(callbackfn /* , thisArg */) {
	    return $filter$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var $$34 = _export;
	var $find$2 = arrayIteration.find;
	var addToUnscopables$7 = addToUnscopables$a;
	var FIND = 'find';
	var SKIPS_HOLES$1 = true;

	// Shouldn't skip holes
	// eslint-disable-next-line es/no-array-prototype-find -- testing
	if (FIND in []) Array(1)[FIND](function () {
	  SKIPS_HOLES$1 = false;
	});

	// `Array.prototype.find` method
	// https://tc39.es/ecma262/#sec-array.prototype.find
	$$34({
	  target: 'Array',
	  proto: true,
	  forced: SKIPS_HOLES$1
	}, {
	  find: function find(callbackfn /* , that = undefined */) {
	    return $find$2(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
	addToUnscopables$7(FIND);

	var $$33 = _export;
	var $findIndex$1 = arrayIteration.findIndex;
	var addToUnscopables$6 = addToUnscopables$a;
	var FIND_INDEX = 'findIndex';
	var SKIPS_HOLES = true;

	// Shouldn't skip holes
	// eslint-disable-next-line es/no-array-prototype-findindex -- testing
	if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () {
	  SKIPS_HOLES = false;
	});

	// `Array.prototype.findIndex` method
	// https://tc39.es/ecma262/#sec-array.prototype.findindex
	$$33({
	  target: 'Array',
	  proto: true,
	  forced: SKIPS_HOLES
	}, {
	  findIndex: function findIndex(callbackfn /* , that = undefined */) {
	    return $findIndex$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
	addToUnscopables$6(FIND_INDEX);

	var isArray$5 = isArray$9;
	var lengthOfArrayLike$g = lengthOfArrayLike$m;
	var doesNotExceedSafeInteger$2 = doesNotExceedSafeInteger$4;
	var bind$n = functionBindContext;

	// `FlattenIntoArray` abstract operation
	// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
	var flattenIntoArray$2 = function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
	  var targetIndex = start;
	  var sourceIndex = 0;
	  var mapFn = mapper ? bind$n(mapper, thisArg) : false;
	  var element, elementLen;
	  while (sourceIndex < sourceLen) {
	    if (sourceIndex in source) {
	      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];
	      if (depth > 0 && isArray$5(element)) {
	        elementLen = lengthOfArrayLike$g(element);
	        targetIndex = flattenIntoArray(target, original, element, elementLen, targetIndex, depth - 1) - 1;
	      } else {
	        doesNotExceedSafeInteger$2(targetIndex + 1);
	        target[targetIndex] = element;
	      }
	      targetIndex++;
	    }
	    sourceIndex++;
	  }
	  return targetIndex;
	};
	var flattenIntoArray_1 = flattenIntoArray$2;

	var $$32 = _export;
	var flattenIntoArray$1 = flattenIntoArray_1;
	var toObject$n = toObject$u;
	var lengthOfArrayLike$f = lengthOfArrayLike$m;
	var toIntegerOrInfinity$b = toIntegerOrInfinity$e;
	var arraySpeciesCreate$2 = arraySpeciesCreate$5;

	// `Array.prototype.flat` method
	// https://tc39.es/ecma262/#sec-array.prototype.flat
	$$32({
	  target: 'Array',
	  proto: true
	}, {
	  flat: function flat( /* depthArg = 1 */
	  ) {
	    var depthArg = arguments.length ? arguments[0] : undefined;
	    var O = toObject$n(this);
	    var sourceLen = lengthOfArrayLike$f(O);
	    var A = arraySpeciesCreate$2(O, 0);
	    A.length = flattenIntoArray$1(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toIntegerOrInfinity$b(depthArg));
	    return A;
	  }
	});

	var $$31 = _export;
	var flattenIntoArray = flattenIntoArray_1;
	var aCallable$C = aCallable$F;
	var toObject$m = toObject$u;
	var lengthOfArrayLike$e = lengthOfArrayLike$m;
	var arraySpeciesCreate$1 = arraySpeciesCreate$5;

	// `Array.prototype.flatMap` method
	// https://tc39.es/ecma262/#sec-array.prototype.flatmap
	$$31({
	  target: 'Array',
	  proto: true
	}, {
	  flatMap: function flatMap(callbackfn /* , thisArg */) {
	    var O = toObject$m(this);
	    var sourceLen = lengthOfArrayLike$e(O);
	    var A;
	    aCallable$C(callbackfn);
	    A = arraySpeciesCreate$1(O, 0);
	    A.length = flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    return A;
	  }
	});

	var call$$ = functionCall;
	var anObject$14 = anObject$1a;
	var getMethod$e = getMethod$g;
	var iteratorClose$8 = function iteratorClose(iterator, kind, value) {
	  var innerResult, innerError;
	  anObject$14(iterator);
	  try {
	    innerResult = getMethod$e(iterator, 'return');
	    if (!innerResult) {
	      if (kind === 'throw') throw value;
	      return value;
	    }
	    innerResult = call$$(innerResult, iterator);
	  } catch (error) {
	    innerError = true;
	    innerResult = error;
	  }
	  if (kind === 'throw') throw value;
	  if (innerError) throw innerResult;
	  anObject$14(innerResult);
	  return value;
	};

	var anObject$13 = anObject$1a;
	var iteratorClose$7 = iteratorClose$8;

	// call something on iterator step with safe closing on error
	var callWithSafeIterationClosing$3 = function callWithSafeIterationClosing(iterator, fn, value, ENTRIES) {
	  try {
	    return ENTRIES ? fn(anObject$13(value)[0], value[1]) : fn(value);
	  } catch (error) {
	    iteratorClose$7(iterator, 'throw', error);
	  }
	};

	var iterators = {};

	var wellKnownSymbol$w = wellKnownSymbol$I;
	var Iterators$5 = iterators;
	var ITERATOR$a = wellKnownSymbol$w('iterator');
	var ArrayPrototype = Array.prototype;

	// check on default Array iterator
	var isArrayIteratorMethod$3 = function isArrayIteratorMethod(it) {
	  return it !== undefined && (Iterators$5.Array === it || ArrayPrototype[ITERATOR$a] === it);
	};

	var classof$f = classof$l;
	var getMethod$d = getMethod$g;
	var isNullOrUndefined$d = isNullOrUndefined$g;
	var Iterators$4 = iterators;
	var wellKnownSymbol$v = wellKnownSymbol$I;
	var ITERATOR$9 = wellKnownSymbol$v('iterator');
	var getIteratorMethod$7 = function getIteratorMethod(it) {
	  if (!isNullOrUndefined$d(it)) return getMethod$d(it, ITERATOR$9) || getMethod$d(it, '@@iterator') || Iterators$4[classof$f(it)];
	};

	var call$_ = functionCall;
	var aCallable$B = aCallable$F;
	var anObject$12 = anObject$1a;
	var tryToString$3 = tryToString$7;
	var getIteratorMethod$6 = getIteratorMethod$7;
	var $TypeError$r = TypeError;
	var getIterator$5 = function getIterator(argument, usingIterator) {
	  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$6(argument) : usingIterator;
	  if (aCallable$B(iteratorMethod)) return anObject$12(call$_(iteratorMethod, argument));
	  throw new $TypeError$r(tryToString$3(argument) + ' is not iterable');
	};

	var bind$m = functionBindContext;
	var call$Z = functionCall;
	var toObject$l = toObject$u;
	var callWithSafeIterationClosing$2 = callWithSafeIterationClosing$3;
	var isArrayIteratorMethod$2 = isArrayIteratorMethod$3;
	var isConstructor$5 = isConstructor$7;
	var lengthOfArrayLike$d = lengthOfArrayLike$m;
	var createProperty$6 = createProperty$8;
	var getIterator$4 = getIterator$5;
	var getIteratorMethod$5 = getIteratorMethod$7;
	var $Array$3 = Array;

	// `Array.from` method implementation
	// https://tc39.es/ecma262/#sec-array.from
	var arrayFrom$1 = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
	  var O = toObject$l(arrayLike);
	  var IS_CONSTRUCTOR = isConstructor$5(this);
	  var argumentsLength = arguments.length;
	  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
	  var mapping = mapfn !== undefined;
	  if (mapping) mapfn = bind$m(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
	  var iteratorMethod = getIteratorMethod$5(O);
	  var index = 0;
	  var length, result, step, iterator, next, value;
	  // if the target is not iterable or it's an array with the default iterator - use a simple case
	  if (iteratorMethod && !(this === $Array$3 && isArrayIteratorMethod$2(iteratorMethod))) {
	    iterator = getIterator$4(O, iteratorMethod);
	    next = iterator.next;
	    result = IS_CONSTRUCTOR ? new this() : [];
	    for (; !(step = call$Z(next, iterator)).done; index++) {
	      value = mapping ? callWithSafeIterationClosing$2(iterator, mapfn, [step.value, index], true) : step.value;
	      createProperty$6(result, index, value);
	    }
	  } else {
	    length = lengthOfArrayLike$d(O);
	    result = IS_CONSTRUCTOR ? new this(length) : $Array$3(length);
	    for (; length > index; index++) {
	      value = mapping ? mapfn(O[index], index) : O[index];
	      createProperty$6(result, index, value);
	    }
	  }
	  result.length = index;
	  return result;
	};

	var wellKnownSymbol$u = wellKnownSymbol$I;
	var ITERATOR$8 = wellKnownSymbol$u('iterator');
	var SAFE_CLOSING = false;
	try {
	  var called = 0;
	  var iteratorWithReturn = {
	    next: function next() {
	      return {
	        done: !!called++
	      };
	    },
	    'return': function _return() {
	      SAFE_CLOSING = true;
	    }
	  };
	  iteratorWithReturn[ITERATOR$8] = function () {
	    return this;
	  };
	  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
	  Array.from(iteratorWithReturn, function () {
	    throw 2;
	  });
	} catch (error) {/* empty */}
	var checkCorrectnessOfIteration$4 = function checkCorrectnessOfIteration(exec, SKIP_CLOSING) {
	  try {
	    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
	  } catch (error) {
	    return false;
	  } // workaround of old WebKit + `eval` bug
	  var ITERATION_SUPPORT = false;
	  try {
	    var object = {};
	    object[ITERATOR$8] = function () {
	      return {
	        next: function next() {
	          return {
	            done: ITERATION_SUPPORT = true
	          };
	        }
	      };
	    };
	    exec(object);
	  } catch (error) {/* empty */}
	  return ITERATION_SUPPORT;
	};

	var $$30 = _export;
	var from = arrayFrom$1;
	var checkCorrectnessOfIteration$3 = checkCorrectnessOfIteration$4;
	var INCORRECT_ITERATION = !checkCorrectnessOfIteration$3(function (iterable) {
	  // eslint-disable-next-line es/no-array-from -- required for testing
	  Array.from(iterable);
	});

	// `Array.from` method
	// https://tc39.es/ecma262/#sec-array.from
	$$30({
	  target: 'Array',
	  stat: true,
	  forced: INCORRECT_ITERATION
	}, {
	  from: from
	});

	var $$2$ = _export;
	var $includes$1 = arrayIncludes.includes;
	var fails$Q = fails$13;
	var addToUnscopables$5 = addToUnscopables$a;

	// FF99+ bug
	var BROKEN_ON_SPARSE = fails$Q(function () {
	  // eslint-disable-next-line es/no-array-prototype-includes -- detection
	  return !Array(1).includes();
	});

	// `Array.prototype.includes` method
	// https://tc39.es/ecma262/#sec-array.prototype.includes
	$$2$({
	  target: 'Array',
	  proto: true,
	  forced: BROKEN_ON_SPARSE
	}, {
	  includes: function includes(el /* , fromIndex = 0 */) {
	    return $includes$1(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
	addToUnscopables$5('includes');

	var fails$P = fails$13;
	var arrayMethodIsStrict$6 = function arrayMethodIsStrict(METHOD_NAME, argument) {
	  var method = [][METHOD_NAME];
	  return !!method && fails$P(function () {
	    // eslint-disable-next-line no-useless-call -- required for testing
	    method.call(null, argument || function () {
	      return 1;
	    }, 1);
	  });
	};

	/* eslint-disable es/no-array-prototype-indexof -- required for testing */
	var $$2_ = _export;
	var uncurryThis$O = functionUncurryThisClause;
	var $indexOf$1 = arrayIncludes.indexOf;
	var arrayMethodIsStrict$5 = arrayMethodIsStrict$6;
	var nativeIndexOf = uncurryThis$O([].indexOf);
	var NEGATIVE_ZERO$1 = !!nativeIndexOf && 1 / nativeIndexOf([1], 1, -0) < 0;
	var FORCED$j = NEGATIVE_ZERO$1 || !arrayMethodIsStrict$5('indexOf');

	// `Array.prototype.indexOf` method
	// https://tc39.es/ecma262/#sec-array.prototype.indexof
	$$2_({
	  target: 'Array',
	  proto: true,
	  forced: FORCED$j
	}, {
	  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
	    var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
	    return NEGATIVE_ZERO$1
	    // convert -0 to +0
	    ? nativeIndexOf(this, searchElement, fromIndex) || 0 : $indexOf$1(this, searchElement, fromIndex);
	  }
	});

	var fails$O = fails$13;
	var correctPrototypeGetter = !fails$O(function () {
	  function F() {/* empty */}
	  F.prototype.constructor = null;
	  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
	  return Object.getPrototypeOf(new F()) !== F.prototype;
	});

	var hasOwn$h = hasOwnProperty_1;
	var isCallable$o = isCallable$E;
	var toObject$k = toObject$u;
	var sharedKey = sharedKey$4;
	var CORRECT_PROTOTYPE_GETTER$2 = correctPrototypeGetter;
	var IE_PROTO = sharedKey('IE_PROTO');
	var $Object$4 = Object;
	var ObjectPrototype$3 = $Object$4.prototype;

	// `Object.getPrototypeOf` method
	// https://tc39.es/ecma262/#sec-object.getprototypeof
	// eslint-disable-next-line es/no-object-getprototypeof -- safe
	var objectGetPrototypeOf$2 = CORRECT_PROTOTYPE_GETTER$2 ? $Object$4.getPrototypeOf : function (O) {
	  var object = toObject$k(O);
	  if (hasOwn$h(object, IE_PROTO)) return object[IE_PROTO];
	  var constructor = object.constructor;
	  if (isCallable$o(constructor) && object instanceof constructor) {
	    return constructor.prototype;
	  }
	  return object instanceof $Object$4 ? ObjectPrototype$3 : null;
	};

	var fails$N = fails$13;
	var isCallable$n = isCallable$E;
	var isObject$B = isObject$J;
	var getPrototypeOf$e = objectGetPrototypeOf$2;
	var defineBuiltIn$h = defineBuiltIn$l;
	var wellKnownSymbol$t = wellKnownSymbol$I;
	var ITERATOR$7 = wellKnownSymbol$t('iterator');
	var BUGGY_SAFARI_ITERATORS$1 = false;

	// `%IteratorPrototype%` object
	// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
	var IteratorPrototype$5, PrototypeOfArrayIteratorPrototype, arrayIterator;

	/* eslint-disable es/no-array-prototype-keys -- safe */
	if ([].keys) {
	  arrayIterator = [].keys();
	  // Safari 8 has buggy iterators w/o `next`
	  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;else {
	    PrototypeOfArrayIteratorPrototype = getPrototypeOf$e(getPrototypeOf$e(arrayIterator));
	    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$5 = PrototypeOfArrayIteratorPrototype;
	  }
	}
	var NEW_ITERATOR_PROTOTYPE = !isObject$B(IteratorPrototype$5) || fails$N(function () {
	  var test = {};
	  // FF44- legacy iterators case
	  return IteratorPrototype$5[ITERATOR$7].call(test) !== test;
	});
	if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$5 = {};

	// `%IteratorPrototype%[@@iterator]()` method
	// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
	if (!isCallable$n(IteratorPrototype$5[ITERATOR$7])) {
	  defineBuiltIn$h(IteratorPrototype$5, ITERATOR$7, function () {
	    return this;
	  });
	}
	var iteratorsCore = {
	  IteratorPrototype: IteratorPrototype$5,
	  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
	};

	var IteratorPrototype$4 = iteratorsCore.IteratorPrototype;
	var create$c = objectCreate;
	var createPropertyDescriptor$5 = createPropertyDescriptor$a;
	var setToStringTag$9 = setToStringTag$c;
	var Iterators$3 = iterators;
	var returnThis$1 = function returnThis() {
	  return this;
	};
	var iteratorCreateConstructor = function iteratorCreateConstructor(IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
	  var TO_STRING_TAG = NAME + ' Iterator';
	  IteratorConstructor.prototype = create$c(IteratorPrototype$4, {
	    next: createPropertyDescriptor$5(+!ENUMERABLE_NEXT, next)
	  });
	  setToStringTag$9(IteratorConstructor, TO_STRING_TAG, false);
	  Iterators$3[TO_STRING_TAG] = returnThis$1;
	  return IteratorConstructor;
	};

	var uncurryThis$N = functionUncurryThis;
	var aCallable$A = aCallable$F;
	var functionUncurryThisAccessor = function functionUncurryThisAccessor(object, key, method) {
	  try {
	    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	    return uncurryThis$N(aCallable$A(Object.getOwnPropertyDescriptor(object, key)[method]));
	  } catch (error) {/* empty */}
	};

	var isObject$A = isObject$J;
	var isPossiblePrototype$1 = function isPossiblePrototype(argument) {
	  return isObject$A(argument) || argument === null;
	};

	var isPossiblePrototype = isPossiblePrototype$1;
	var $String = String;
	var $TypeError$q = TypeError;
	var aPossiblePrototype$2 = function aPossiblePrototype(argument) {
	  if (isPossiblePrototype(argument)) return argument;
	  throw new $TypeError$q("Can't set " + $String(argument) + ' as a prototype');
	};

	/* eslint-disable no-proto -- safe */
	var uncurryThisAccessor$1 = functionUncurryThisAccessor;
	var anObject$11 = anObject$1a;
	var aPossiblePrototype$1 = aPossiblePrototype$2;

	// `Object.setPrototypeOf` method
	// https://tc39.es/ecma262/#sec-object.setprototypeof
	// Works with __proto__ only. Old v8 can't work with null proto objects.
	// eslint-disable-next-line es/no-object-setprototypeof -- safe
	var objectSetPrototypeOf$1 = Object.setPrototypeOf || ('__proto__' in {} ? function () {
	  var CORRECT_SETTER = false;
	  var test = {};
	  var setter;
	  try {
	    setter = uncurryThisAccessor$1(Object.prototype, '__proto__', 'set');
	    setter(test, []);
	    CORRECT_SETTER = test instanceof Array;
	  } catch (error) {/* empty */}
	  return function setPrototypeOf(O, proto) {
	    anObject$11(O);
	    aPossiblePrototype$1(proto);
	    if (CORRECT_SETTER) setter(O, proto);else O.__proto__ = proto;
	    return O;
	  };
	}() : undefined);

	var $$2Z = _export;
	var call$Y = functionCall;
	var FunctionName$1 = functionName;
	var isCallable$m = isCallable$E;
	var createIteratorConstructor$5 = iteratorCreateConstructor;
	var getPrototypeOf$d = objectGetPrototypeOf$2;
	var setPrototypeOf$6 = objectSetPrototypeOf$1;
	var setToStringTag$8 = setToStringTag$c;
	var createNonEnumerableProperty$d = createNonEnumerableProperty$g;
	var defineBuiltIn$g = defineBuiltIn$l;
	var wellKnownSymbol$s = wellKnownSymbol$I;
	var Iterators$2 = iterators;
	var IteratorsCore = iteratorsCore;
	var PROPER_FUNCTION_NAME$3 = FunctionName$1.PROPER;
	var CONFIGURABLE_FUNCTION_NAME$1 = FunctionName$1.CONFIGURABLE;
	var IteratorPrototype$3 = IteratorsCore.IteratorPrototype;
	var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
	var ITERATOR$6 = wellKnownSymbol$s('iterator');
	var KEYS = 'keys';
	var VALUES = 'values';
	var ENTRIES = 'entries';
	var returnThis = function returnThis() {
	  return this;
	};
	var iteratorDefine = function iteratorDefine(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
	  createIteratorConstructor$5(IteratorConstructor, NAME, next);
	  var getIterationMethod = function getIterationMethod(KIND) {
	    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
	    if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype) return IterablePrototype[KIND];
	    switch (KIND) {
	      case KEYS:
	        return function keys() {
	          return new IteratorConstructor(this, KIND);
	        };
	      case VALUES:
	        return function values() {
	          return new IteratorConstructor(this, KIND);
	        };
	      case ENTRIES:
	        return function entries() {
	          return new IteratorConstructor(this, KIND);
	        };
	    }
	    return function () {
	      return new IteratorConstructor(this);
	    };
	  };
	  var TO_STRING_TAG = NAME + ' Iterator';
	  var INCORRECT_VALUES_NAME = false;
	  var IterablePrototype = Iterable.prototype;
	  var nativeIterator = IterablePrototype[ITERATOR$6] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
	  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
	  var anyNativeIterator = NAME === 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
	  var CurrentIteratorPrototype, methods, KEY;

	  // fix native
	  if (anyNativeIterator) {
	    CurrentIteratorPrototype = getPrototypeOf$d(anyNativeIterator.call(new Iterable()));
	    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
	      if (getPrototypeOf$d(CurrentIteratorPrototype) !== IteratorPrototype$3) {
	        if (setPrototypeOf$6) {
	          setPrototypeOf$6(CurrentIteratorPrototype, IteratorPrototype$3);
	        } else if (!isCallable$m(CurrentIteratorPrototype[ITERATOR$6])) {
	          defineBuiltIn$g(CurrentIteratorPrototype, ITERATOR$6, returnThis);
	        }
	      }
	      // Set @@toStringTag to native iterators
	      setToStringTag$8(CurrentIteratorPrototype, TO_STRING_TAG, true);
	    }
	  }

	  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
	  if (PROPER_FUNCTION_NAME$3 && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
	    if (CONFIGURABLE_FUNCTION_NAME$1) {
	      createNonEnumerableProperty$d(IterablePrototype, 'name', VALUES);
	    } else {
	      INCORRECT_VALUES_NAME = true;
	      defaultIterator = function values() {
	        return call$Y(nativeIterator, this);
	      };
	    }
	  }

	  // export additional methods
	  if (DEFAULT) {
	    methods = {
	      values: getIterationMethod(VALUES),
	      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
	      entries: getIterationMethod(ENTRIES)
	    };
	    if (FORCED) for (KEY in methods) {
	      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
	        defineBuiltIn$g(IterablePrototype, KEY, methods[KEY]);
	      }
	    } else $$2Z({
	      target: NAME,
	      proto: true,
	      forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
	    }, methods);
	  }

	  // define iterator
	  if (IterablePrototype[ITERATOR$6] !== defaultIterator) {
	    defineBuiltIn$g(IterablePrototype, ITERATOR$6, defaultIterator, {
	      name: DEFAULT
	    });
	  }
	  Iterators$2[NAME] = defaultIterator;
	  return methods;
	};

	// `CreateIterResultObject` abstract operation
	// https://tc39.es/ecma262/#sec-createiterresultobject
	var createIterResultObject$g = function createIterResultObject(value, done) {
	  return {
	    value: value,
	    done: done
	  };
	};

	var toIndexedObject$7 = toIndexedObject$e;
	var addToUnscopables$4 = addToUnscopables$a;
	var Iterators$1 = iterators;
	var InternalStateModule$h = internalState;
	var defineProperty$6 = objectDefineProperty.f;
	var defineIterator$2 = iteratorDefine;
	var createIterResultObject$f = createIterResultObject$g;
	var DESCRIPTORS$s = descriptors;
	var ARRAY_ITERATOR = 'Array Iterator';
	var setInternalState$g = InternalStateModule$h.set;
	var getInternalState$a = InternalStateModule$h.getterFor(ARRAY_ITERATOR);

	// `Array.prototype.entries` method
	// https://tc39.es/ecma262/#sec-array.prototype.entries
	// `Array.prototype.keys` method
	// https://tc39.es/ecma262/#sec-array.prototype.keys
	// `Array.prototype.values` method
	// https://tc39.es/ecma262/#sec-array.prototype.values
	// `Array.prototype[@@iterator]` method
	// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
	// `CreateArrayIterator` internal method
	// https://tc39.es/ecma262/#sec-createarrayiterator
	var es_array_iterator = defineIterator$2(Array, 'Array', function (iterated, kind) {
	  setInternalState$g(this, {
	    type: ARRAY_ITERATOR,
	    target: toIndexedObject$7(iterated),
	    // target
	    index: 0,
	    // next index
	    kind: kind // kind
	  });
	  // `%ArrayIteratorPrototype%.next` method
	  // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
	}, function () {
	  var state = getInternalState$a(this);
	  var target = state.target;
	  var index = state.index++;
	  if (!target || index >= target.length) {
	    state.target = undefined;
	    return createIterResultObject$f(undefined, true);
	  }
	  switch (state.kind) {
	    case 'keys':
	      return createIterResultObject$f(index, false);
	    case 'values':
	      return createIterResultObject$f(target[index], false);
	  }
	  return createIterResultObject$f([index, target[index]], false);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values%
	// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
	// https://tc39.es/ecma262/#sec-createmappedargumentsobject
	var values = Iterators$1.Arguments = Iterators$1.Array;

	// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
	addToUnscopables$4('keys');
	addToUnscopables$4('values');
	addToUnscopables$4('entries');

	// V8 ~ Chrome 45- bug
	if (DESCRIPTORS$s && values.name !== 'values') try {
	  defineProperty$6(values, 'name', {
	    value: 'values'
	  });
	} catch (error) {/* empty */}

	/* eslint-disable es/no-array-prototype-lastindexof -- safe */
	var apply$9 = functionApply$1;
	var toIndexedObject$6 = toIndexedObject$e;
	var toIntegerOrInfinity$a = toIntegerOrInfinity$e;
	var lengthOfArrayLike$c = lengthOfArrayLike$m;
	var arrayMethodIsStrict$4 = arrayMethodIsStrict$6;
	var min$6 = Math.min;
	var $lastIndexOf$1 = [].lastIndexOf;
	var NEGATIVE_ZERO = !!$lastIndexOf$1 && 1 / [1].lastIndexOf(1, -0) < 0;
	var STRICT_METHOD$2 = arrayMethodIsStrict$4('lastIndexOf');
	var FORCED$i = NEGATIVE_ZERO || !STRICT_METHOD$2;

	// `Array.prototype.lastIndexOf` method implementation
	// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
	var arrayLastIndexOf = FORCED$i ? function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
	  // convert -0 to +0
	  if (NEGATIVE_ZERO) return apply$9($lastIndexOf$1, this, arguments) || 0;
	  var O = toIndexedObject$6(this);
	  var length = lengthOfArrayLike$c(O);
	  var index = length - 1;
	  if (arguments.length > 1) index = min$6(index, toIntegerOrInfinity$a(arguments[1]));
	  if (index < 0) index = length + index;
	  for (; index >= 0; index--) if (index in O && O[index] === searchElement) return index || 0;
	  return -1;
	} : $lastIndexOf$1;

	var $$2Y = _export;
	var lastIndexOf = arrayLastIndexOf;

	// `Array.prototype.lastIndexOf` method
	// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
	// eslint-disable-next-line es/no-array-prototype-lastindexof -- required for testing
	$$2Y({
	  target: 'Array',
	  proto: true,
	  forced: lastIndexOf !== [].lastIndexOf
	}, {
	  lastIndexOf: lastIndexOf
	});

	var $$2X = _export;
	var $map$1 = arrayIteration.map;
	var arrayMethodHasSpeciesSupport$2 = arrayMethodHasSpeciesSupport$5;
	var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport$2('map');

	// `Array.prototype.map` method
	// https://tc39.es/ecma262/#sec-array.prototype.map
	// with adding support of @@species
	$$2X({
	  target: 'Array',
	  proto: true,
	  forced: !HAS_SPECIES_SUPPORT$2
	}, {
	  map: function map(callbackfn /* , thisArg */) {
	    return $map$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var $$2W = _export;
	var fails$M = fails$13;
	var isConstructor$4 = isConstructor$7;
	var createProperty$5 = createProperty$8;
	var $Array$2 = Array;
	var ISNT_GENERIC = fails$M(function () {
	  function F() {/* empty */}
	  // eslint-disable-next-line es/no-array-of -- safe
	  return !($Array$2.of.call(F) instanceof F);
	});

	// `Array.of` method
	// https://tc39.es/ecma262/#sec-array.of
	// WebKit Array.of isn't generic
	$$2W({
	  target: 'Array',
	  stat: true,
	  forced: ISNT_GENERIC
	}, {
	  of: function of( /* ...args */
	  ) {
	    var index = 0;
	    var argumentsLength = arguments.length;
	    var result = new (isConstructor$4(this) ? this : $Array$2)(argumentsLength);
	    while (argumentsLength > index) createProperty$5(result, index, arguments[index++]);
	    result.length = argumentsLength;
	    return result;
	  }
	});

	var aCallable$z = aCallable$F;
	var toObject$j = toObject$u;
	var IndexedObject$1 = indexedObject;
	var lengthOfArrayLike$b = lengthOfArrayLike$m;
	var $TypeError$p = TypeError;

	// `Array.prototype.{ reduce, reduceRight }` methods implementation
	var createMethod$5 = function createMethod(IS_RIGHT) {
	  return function (that, callbackfn, argumentsLength, memo) {
	    var O = toObject$j(that);
	    var self = IndexedObject$1(O);
	    var length = lengthOfArrayLike$b(O);
	    aCallable$z(callbackfn);
	    var index = IS_RIGHT ? length - 1 : 0;
	    var i = IS_RIGHT ? -1 : 1;
	    if (argumentsLength < 2) while (true) {
	      if (index in self) {
	        memo = self[index];
	        index += i;
	        break;
	      }
	      index += i;
	      if (IS_RIGHT ? index < 0 : length <= index) {
	        throw new $TypeError$p('Reduce of empty array with no initial value');
	      }
	    }
	    for (; IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
	      memo = callbackfn(memo, self[index], index, O);
	    }
	    return memo;
	  };
	};
	var arrayReduce = {
	  // `Array.prototype.reduce` method
	  // https://tc39.es/ecma262/#sec-array.prototype.reduce
	  left: createMethod$5(false),
	  // `Array.prototype.reduceRight` method
	  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
	  right: createMethod$5(true)
	};

	var global$D = global$R;
	var classof$e = classofRaw$2;
	var engineIsNode = classof$e(global$D.process) === 'process';

	var $$2V = _export;
	var $reduce$1 = arrayReduce.left;
	var arrayMethodIsStrict$3 = arrayMethodIsStrict$6;
	var CHROME_VERSION$1 = engineV8Version;
	var IS_NODE$5 = engineIsNode;

	// Chrome 80-82 has a critical bug
	// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
	var CHROME_BUG$1 = !IS_NODE$5 && CHROME_VERSION$1 > 79 && CHROME_VERSION$1 < 83;
	var FORCED$h = CHROME_BUG$1 || !arrayMethodIsStrict$3('reduce');

	// `Array.prototype.reduce` method
	// https://tc39.es/ecma262/#sec-array.prototype.reduce
	$$2V({
	  target: 'Array',
	  proto: true,
	  forced: FORCED$h
	}, {
	  reduce: function reduce(callbackfn /* , initialValue */) {
	    var length = arguments.length;
	    return $reduce$1(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
	  }
	});

	var $$2U = _export;
	var $reduceRight$1 = arrayReduce.right;
	var arrayMethodIsStrict$2 = arrayMethodIsStrict$6;
	var CHROME_VERSION = engineV8Version;
	var IS_NODE$4 = engineIsNode;

	// Chrome 80-82 has a critical bug
	// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
	var CHROME_BUG = !IS_NODE$4 && CHROME_VERSION > 79 && CHROME_VERSION < 83;
	var FORCED$g = CHROME_BUG || !arrayMethodIsStrict$2('reduceRight');

	// `Array.prototype.reduceRight` method
	// https://tc39.es/ecma262/#sec-array.prototype.reduceright
	$$2U({
	  target: 'Array',
	  proto: true,
	  forced: FORCED$g
	}, {
	  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
	    return $reduceRight$1(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var $$2T = _export;
	var isArray$4 = isArray$9;
	var isConstructor$3 = isConstructor$7;
	var isObject$z = isObject$J;
	var toAbsoluteIndex$2 = toAbsoluteIndex$6;
	var lengthOfArrayLike$a = lengthOfArrayLike$m;
	var toIndexedObject$5 = toIndexedObject$e;
	var createProperty$4 = createProperty$8;
	var wellKnownSymbol$r = wellKnownSymbol$I;
	var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$5;
	var nativeSlice = arraySlice$b;
	var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$1('slice');
	var SPECIES$4 = wellKnownSymbol$r('species');
	var $Array$1 = Array;
	var max$5 = Math.max;

	// `Array.prototype.slice` method
	// https://tc39.es/ecma262/#sec-array.prototype.slice
	// fallback for not array-like ES3 strings and DOM objects
	$$2T({
	  target: 'Array',
	  proto: true,
	  forced: !HAS_SPECIES_SUPPORT$1
	}, {
	  slice: function slice(start, end) {
	    var O = toIndexedObject$5(this);
	    var length = lengthOfArrayLike$a(O);
	    var k = toAbsoluteIndex$2(start, length);
	    var fin = toAbsoluteIndex$2(end === undefined ? length : end, length);
	    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
	    var Constructor, result, n;
	    if (isArray$4(O)) {
	      Constructor = O.constructor;
	      // cross-realm fallback
	      if (isConstructor$3(Constructor) && (Constructor === $Array$1 || isArray$4(Constructor.prototype))) {
	        Constructor = undefined;
	      } else if (isObject$z(Constructor)) {
	        Constructor = Constructor[SPECIES$4];
	        if (Constructor === null) Constructor = undefined;
	      }
	      if (Constructor === $Array$1 || Constructor === undefined) {
	        return nativeSlice(O, k, fin);
	      }
	    }
	    result = new (Constructor === undefined ? $Array$1 : Constructor)(max$5(fin - k, 0));
	    for (n = 0; k < fin; k++, n++) if (k in O) createProperty$4(result, n, O[k]);
	    result.length = n;
	    return result;
	  }
	});

	var arraySlice$8 = arraySlice$b;
	var floor$6 = Math.floor;
	var sort = function sort(array, comparefn) {
	  var length = array.length;
	  if (length < 8) {
	    // insertion sort
	    var i = 1;
	    var element, j;
	    while (i < length) {
	      j = i;
	      element = array[i];
	      while (j && comparefn(array[j - 1], element) > 0) {
	        array[j] = array[--j];
	      }
	      if (j !== i++) array[j] = element;
	    }
	  } else {
	    // merge sort
	    var middle = floor$6(length / 2);
	    var left = sort(arraySlice$8(array, 0, middle), comparefn);
	    var right = sort(arraySlice$8(array, middle), comparefn);
	    var llength = left.length;
	    var rlength = right.length;
	    var lindex = 0;
	    var rindex = 0;
	    while (lindex < llength || rindex < rlength) {
	      array[lindex + rindex] = lindex < llength && rindex < rlength ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++] : lindex < llength ? left[lindex++] : right[rindex++];
	    }
	  }
	  return array;
	};
	var arraySort$1 = sort;

	var userAgent$5 = engineUserAgent;
	var firefox = userAgent$5.match(/firefox\/(\d+)/i);
	var engineFfVersion = !!firefox && +firefox[1];

	var UA = engineUserAgent;
	var engineIsIeOrEdge = /MSIE|Trident/.test(UA);

	var userAgent$4 = engineUserAgent;
	var webkit = userAgent$4.match(/AppleWebKit\/(\d+)\./);
	var engineWebkitVersion = !!webkit && +webkit[1];

	var $$2S = _export;
	var uncurryThis$M = functionUncurryThis;
	var aCallable$y = aCallable$F;
	var toObject$i = toObject$u;
	var lengthOfArrayLike$9 = lengthOfArrayLike$m;
	var deletePropertyOrThrow$1 = deletePropertyOrThrow$3;
	var toString$n = toString$r;
	var fails$L = fails$13;
	var internalSort$1 = arraySort$1;
	var arrayMethodIsStrict$1 = arrayMethodIsStrict$6;
	var FF$1 = engineFfVersion;
	var IE_OR_EDGE$1 = engineIsIeOrEdge;
	var V8$1 = engineV8Version;
	var WEBKIT$2 = engineWebkitVersion;
	var test = [];
	var nativeSort$1 = uncurryThis$M(test.sort);
	var push$e = uncurryThis$M(test.push);

	// IE8-
	var FAILS_ON_UNDEFINED = fails$L(function () {
	  test.sort(undefined);
	});
	// V8 bug
	var FAILS_ON_NULL = fails$L(function () {
	  test.sort(null);
	});
	// Old WebKit
	var STRICT_METHOD$1 = arrayMethodIsStrict$1('sort');
	var STABLE_SORT$1 = !fails$L(function () {
	  // feature detection can be too slow, so check engines versions
	  if (V8$1) return V8$1 < 70;
	  if (FF$1 && FF$1 > 3) return;
	  if (IE_OR_EDGE$1) return true;
	  if (WEBKIT$2) return WEBKIT$2 < 603;
	  var result = '';
	  var code, chr, value, index;

	  // generate an array with more 512 elements (Chakra and old V8 fails only in this case)
	  for (code = 65; code < 76; code++) {
	    chr = String.fromCharCode(code);
	    switch (code) {
	      case 66:
	      case 69:
	      case 70:
	      case 72:
	        value = 3;
	        break;
	      case 68:
	      case 71:
	        value = 4;
	        break;
	      default:
	        value = 2;
	    }
	    for (index = 0; index < 47; index++) {
	      test.push({
	        k: chr + index,
	        v: value
	      });
	    }
	  }
	  test.sort(function (a, b) {
	    return b.v - a.v;
	  });
	  for (index = 0; index < test.length; index++) {
	    chr = test[index].k.charAt(0);
	    if (result.charAt(result.length - 1) !== chr) result += chr;
	  }
	  return result !== 'DGBEFHACIJK';
	});
	var FORCED$f = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD$1 || !STABLE_SORT$1;
	var getSortCompare$1 = function getSortCompare(comparefn) {
	  return function (x, y) {
	    if (y === undefined) return -1;
	    if (x === undefined) return 1;
	    if (comparefn !== undefined) return +comparefn(x, y) || 0;
	    return toString$n(x) > toString$n(y) ? 1 : -1;
	  };
	};

	// `Array.prototype.sort` method
	// https://tc39.es/ecma262/#sec-array.prototype.sort
	$$2S({
	  target: 'Array',
	  proto: true,
	  forced: FORCED$f
	}, {
	  sort: function sort(comparefn) {
	    if (comparefn !== undefined) aCallable$y(comparefn);
	    var array = toObject$i(this);
	    if (STABLE_SORT$1) return comparefn === undefined ? nativeSort$1(array) : nativeSort$1(array, comparefn);
	    var items = [];
	    var arrayLength = lengthOfArrayLike$9(array);
	    var itemsLength, index;
	    for (index = 0; index < arrayLength; index++) {
	      if (index in array) push$e(items, array[index]);
	    }
	    internalSort$1(items, getSortCompare$1(comparefn));
	    itemsLength = lengthOfArrayLike$9(items);
	    index = 0;
	    while (index < itemsLength) array[index] = items[index++];
	    while (index < arrayLength) deletePropertyOrThrow$1(array, index++);
	    return array;
	  }
	});

	var getBuiltIn$i = getBuiltIn$r;
	var defineBuiltInAccessor$c = defineBuiltInAccessor$f;
	var wellKnownSymbol$q = wellKnownSymbol$I;
	var DESCRIPTORS$r = descriptors;
	var SPECIES$3 = wellKnownSymbol$q('species');
	var setSpecies$6 = function setSpecies(CONSTRUCTOR_NAME) {
	  var Constructor = getBuiltIn$i(CONSTRUCTOR_NAME);
	  if (DESCRIPTORS$r && Constructor && !Constructor[SPECIES$3]) {
	    defineBuiltInAccessor$c(Constructor, SPECIES$3, {
	      configurable: true,
	      get: function get() {
	        return this;
	      }
	    });
	  }
	};

	var setSpecies$5 = setSpecies$6;

	// `Array[@@species]` getter
	// https://tc39.es/ecma262/#sec-get-array-@@species
	setSpecies$5('Array');

	var DESCRIPTORS$q = descriptors;
	var isArray$3 = isArray$9;
	var $TypeError$o = TypeError;
	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var getOwnPropertyDescriptor$9 = Object.getOwnPropertyDescriptor;

	// Safari < 13 does not throw an error in this case
	var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS$q && !function () {
	  // makes no sense without proper strict mode support
	  if (this !== undefined) return true;
	  try {
	    // eslint-disable-next-line es/no-object-defineproperty -- safe
	    Object.defineProperty([], 'length', {
	      writable: false
	    }).length = 1;
	  } catch (error) {
	    return error instanceof TypeError;
	  }
	}();
	var arraySetLength = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
	  if (isArray$3(O) && !getOwnPropertyDescriptor$9(O, 'length').writable) {
	    throw new $TypeError$o('Cannot set read only .length');
	  }
	  return O.length = length;
	} : function (O, length) {
	  return O.length = length;
	};

	var $$2R = _export;
	var toObject$h = toObject$u;
	var toAbsoluteIndex$1 = toAbsoluteIndex$6;
	var toIntegerOrInfinity$9 = toIntegerOrInfinity$e;
	var lengthOfArrayLike$8 = lengthOfArrayLike$m;
	var setArrayLength = arraySetLength;
	var doesNotExceedSafeInteger$1 = doesNotExceedSafeInteger$4;
	var arraySpeciesCreate = arraySpeciesCreate$5;
	var createProperty$3 = createProperty$8;
	var deletePropertyOrThrow = deletePropertyOrThrow$3;
	var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$5;
	var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');
	var max$4 = Math.max;
	var min$5 = Math.min;

	// `Array.prototype.splice` method
	// https://tc39.es/ecma262/#sec-array.prototype.splice
	// with adding support of @@species
	$$2R({
	  target: 'Array',
	  proto: true,
	  forced: !HAS_SPECIES_SUPPORT
	}, {
	  splice: function splice(start, deleteCount /* , ...items */) {
	    var O = toObject$h(this);
	    var len = lengthOfArrayLike$8(O);
	    var actualStart = toAbsoluteIndex$1(start, len);
	    var argumentsLength = arguments.length;
	    var insertCount, actualDeleteCount, A, k, from, to;
	    if (argumentsLength === 0) {
	      insertCount = actualDeleteCount = 0;
	    } else if (argumentsLength === 1) {
	      insertCount = 0;
	      actualDeleteCount = len - actualStart;
	    } else {
	      insertCount = argumentsLength - 2;
	      actualDeleteCount = min$5(max$4(toIntegerOrInfinity$9(deleteCount), 0), len - actualStart);
	    }
	    doesNotExceedSafeInteger$1(len + insertCount - actualDeleteCount);
	    A = arraySpeciesCreate(O, actualDeleteCount);
	    for (k = 0; k < actualDeleteCount; k++) {
	      from = actualStart + k;
	      if (from in O) createProperty$3(A, k, O[from]);
	    }
	    A.length = actualDeleteCount;
	    if (insertCount < actualDeleteCount) {
	      for (k = actualStart; k < len - actualDeleteCount; k++) {
	        from = k + actualDeleteCount;
	        to = k + insertCount;
	        if (from in O) O[to] = O[from];else deletePropertyOrThrow(O, to);
	      }
	      for (k = len; k > len - actualDeleteCount + insertCount; k--) deletePropertyOrThrow(O, k - 1);
	    } else if (insertCount > actualDeleteCount) {
	      for (k = len - actualDeleteCount; k > actualStart; k--) {
	        from = k + actualDeleteCount - 1;
	        to = k + insertCount - 1;
	        if (from in O) O[to] = O[from];else deletePropertyOrThrow(O, to);
	      }
	    }
	    for (k = 0; k < insertCount; k++) {
	      O[k + actualStart] = arguments[k + 2];
	    }
	    setArrayLength(O, len - actualDeleteCount + insertCount);
	    return A;
	  }
	});

	// this method was added to unscopables after implementation
	// in popular engines, so it's moved to a separate module
	var addToUnscopables$3 = addToUnscopables$a;

	// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
	addToUnscopables$3('flat');

	// this method was added to unscopables after implementation
	// in popular engines, so it's moved to a separate module
	var addToUnscopables$2 = addToUnscopables$a;

	// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
	addToUnscopables$2('flatMap');

	var anObject$10 = anObject$1a;
	var ordinaryToPrimitive = ordinaryToPrimitive$2;
	var $TypeError$n = TypeError;

	// `Date.prototype[@@toPrimitive](hint)` method implementation
	// https://tc39.es/ecma262/#sec-date.prototype-@@toprimitive
	var dateToPrimitive$1 = function dateToPrimitive(hint) {
	  anObject$10(this);
	  if (hint === 'string' || hint === 'default') hint = 'string';else if (hint !== 'number') throw new $TypeError$n('Incorrect hint');
	  return ordinaryToPrimitive(this, hint);
	};

	var hasOwn$g = hasOwnProperty_1;
	var defineBuiltIn$f = defineBuiltIn$l;
	var dateToPrimitive = dateToPrimitive$1;
	var wellKnownSymbol$p = wellKnownSymbol$I;
	var TO_PRIMITIVE = wellKnownSymbol$p('toPrimitive');
	var DatePrototype = Date.prototype;

	// `Date.prototype[@@toPrimitive]` method
	// https://tc39.es/ecma262/#sec-date.prototype-@@toprimitive
	if (!hasOwn$g(DatePrototype, TO_PRIMITIVE)) {
	  defineBuiltIn$f(DatePrototype, TO_PRIMITIVE, dateToPrimitive);
	}

	var isCallable$l = isCallable$E;
	var isObject$y = isObject$J;
	var definePropertyModule$5 = objectDefineProperty;
	var isPrototypeOf$a = objectIsPrototypeOf;
	var wellKnownSymbol$o = wellKnownSymbol$I;
	var makeBuiltIn = makeBuiltIn$4.exports;
	var HAS_INSTANCE = wellKnownSymbol$o('hasInstance');
	var FunctionPrototype = Function.prototype;

	// `Function.prototype[@@hasInstance]` method
	// https://tc39.es/ecma262/#sec-function.prototype-@@hasinstance
	if (!(HAS_INSTANCE in FunctionPrototype)) {
	  definePropertyModule$5.f(FunctionPrototype, HAS_INSTANCE, {
	    value: makeBuiltIn(function (O) {
	      if (!isCallable$l(this) || !isObject$y(O)) return false;
	      var P = this.prototype;
	      return isObject$y(P) ? isPrototypeOf$a(P, O) : O instanceof this;
	    }, HAS_INSTANCE)
	  });
	}

	var $$2Q = _export;
	var global$C = global$R;

	// `globalThis` object
	// https://tc39.es/ecma262/#sec-globalthis
	$$2Q({
	  global: true,
	  forced: global$C.globalThis !== global$C
	}, {
	  globalThis: global$C
	});

	var global$B = global$R;
	var setToStringTag$7 = setToStringTag$c;

	// JSON[@@toStringTag] property
	// https://tc39.es/ecma262/#sec-json-@@tostringtag
	setToStringTag$7(global$B.JSON, 'JSON', true);

	var internalMetadata = {exports: {}};

	// FF26- bug: ArrayBuffers are non-extensible, but Object.isExtensible does not report it
	var fails$K = fails$13;
	var arrayBufferNonExtensible = fails$K(function () {
	  if (typeof ArrayBuffer == 'function') {
	    var buffer = new ArrayBuffer(8);
	    // eslint-disable-next-line es/no-object-isextensible, es/no-object-defineproperty -- safe
	    if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', {
	      value: 8
	    });
	  }
	});

	var fails$J = fails$13;
	var isObject$x = isObject$J;
	var classof$d = classofRaw$2;
	var ARRAY_BUFFER_NON_EXTENSIBLE$2 = arrayBufferNonExtensible;

	// eslint-disable-next-line es/no-object-isextensible -- safe
	var $isExtensible$2 = Object.isExtensible;
	var FAILS_ON_PRIMITIVES$6 = fails$J(function () {
	  $isExtensible$2(1);
	});

	// `Object.isExtensible` method
	// https://tc39.es/ecma262/#sec-object.isextensible
	var objectIsExtensible = FAILS_ON_PRIMITIVES$6 || ARRAY_BUFFER_NON_EXTENSIBLE$2 ? function isExtensible(it) {
	  if (!isObject$x(it)) return false;
	  if (ARRAY_BUFFER_NON_EXTENSIBLE$2 && classof$d(it) === 'ArrayBuffer') return false;
	  return $isExtensible$2 ? $isExtensible$2(it) : true;
	} : $isExtensible$2;

	var fails$I = fails$13;
	var freezing = !fails$I(function () {
	  // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
	  return Object.isExtensible(Object.preventExtensions({}));
	});

	var $$2P = _export;
	var uncurryThis$L = functionUncurryThis;
	var hiddenKeys = hiddenKeys$6;
	var isObject$w = isObject$J;
	var hasOwn$f = hasOwnProperty_1;
	var defineProperty$5 = objectDefineProperty.f;
	var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
	var getOwnPropertyNamesExternalModule = objectGetOwnPropertyNamesExternal;
	var isExtensible$1 = objectIsExtensible;
	var uid$1 = uid$5;
	var FREEZING$5 = freezing;
	var REQUIRED = false;
	var METADATA = uid$1('meta');
	var id$1 = 0;
	var setMetadata = function setMetadata(it) {
	  defineProperty$5(it, METADATA, {
	    value: {
	      objectID: 'O' + id$1++,
	      // object ID
	      weakData: {} // weak collections IDs
	    }
	  });
	};

	var fastKey$1 = function fastKey(it, create) {
	  // return a primitive with prefix
	  if (!isObject$w(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!hasOwn$f(it, METADATA)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible$1(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMetadata(it);
	    // return object ID
	  }
	  return it[METADATA].objectID;
	};
	var getWeakData$1 = function getWeakData(it, create) {
	  if (!hasOwn$f(it, METADATA)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible$1(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMetadata(it);
	    // return the store of weak collections IDs
	  }
	  return it[METADATA].weakData;
	};

	// add metadata on freeze-family methods calling
	var onFreeze$3 = function onFreeze(it) {
	  if (FREEZING$5 && REQUIRED && isExtensible$1(it) && !hasOwn$f(it, METADATA)) setMetadata(it);
	  return it;
	};
	var enable = function enable() {
	  meta$1.enable = function () {/* empty */};
	  REQUIRED = true;
	  var getOwnPropertyNames = getOwnPropertyNamesModule.f;
	  var splice = uncurryThis$L([].splice);
	  var test = {};
	  test[METADATA] = 1;

	  // prevent exposing of metadata key
	  if (getOwnPropertyNames(test).length) {
	    getOwnPropertyNamesModule.f = function (it) {
	      var result = getOwnPropertyNames(it);
	      for (var i = 0, length = result.length; i < length; i++) {
	        if (result[i] === METADATA) {
	          splice(result, i, 1);
	          break;
	        }
	      }
	      return result;
	    };
	    $$2P({
	      target: 'Object',
	      stat: true,
	      forced: true
	    }, {
	      getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
	    });
	  }
	};
	var meta$1 = internalMetadata.exports = {
	  enable: enable,
	  fastKey: fastKey$1,
	  getWeakData: getWeakData$1,
	  onFreeze: onFreeze$3
	};
	hiddenKeys[METADATA] = true;

	var bind$l = functionBindContext;
	var call$X = functionCall;
	var anObject$$ = anObject$1a;
	var tryToString$2 = tryToString$7;
	var isArrayIteratorMethod$1 = isArrayIteratorMethod$3;
	var lengthOfArrayLike$7 = lengthOfArrayLike$m;
	var isPrototypeOf$9 = objectIsPrototypeOf;
	var getIterator$3 = getIterator$5;
	var getIteratorMethod$4 = getIteratorMethod$7;
	var iteratorClose$6 = iteratorClose$8;
	var $TypeError$m = TypeError;
	var Result = function Result(stopped, result) {
	  this.stopped = stopped;
	  this.result = result;
	};
	var ResultPrototype = Result.prototype;
	var iterate$E = function iterate(iterable, unboundFunction, options) {
	  var that = options && options.that;
	  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
	  var IS_RECORD = !!(options && options.IS_RECORD);
	  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
	  var INTERRUPTED = !!(options && options.INTERRUPTED);
	  var fn = bind$l(unboundFunction, that);
	  var iterator, iterFn, index, length, result, next, step;
	  var stop = function stop(condition) {
	    if (iterator) iteratorClose$6(iterator, 'normal', condition);
	    return new Result(true, condition);
	  };
	  var callFn = function callFn(value) {
	    if (AS_ENTRIES) {
	      anObject$$(value);
	      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
	    }
	    return INTERRUPTED ? fn(value, stop) : fn(value);
	  };
	  if (IS_RECORD) {
	    iterator = iterable.iterator;
	  } else if (IS_ITERATOR) {
	    iterator = iterable;
	  } else {
	    iterFn = getIteratorMethod$4(iterable);
	    if (!iterFn) throw new $TypeError$m(tryToString$2(iterable) + ' is not iterable');
	    // optimisation for array iterators
	    if (isArrayIteratorMethod$1(iterFn)) {
	      for (index = 0, length = lengthOfArrayLike$7(iterable); length > index; index++) {
	        result = callFn(iterable[index]);
	        if (result && isPrototypeOf$9(ResultPrototype, result)) return result;
	      }
	      return new Result(false);
	    }
	    iterator = getIterator$3(iterable, iterFn);
	  }
	  next = IS_RECORD ? iterable.next : iterator.next;
	  while (!(step = call$X(next, iterator)).done) {
	    try {
	      result = callFn(step.value);
	    } catch (error) {
	      iteratorClose$6(iterator, 'throw', error);
	    }
	    if (typeof result == 'object' && result && isPrototypeOf$9(ResultPrototype, result)) return result;
	  }
	  return new Result(false);
	};

	var isPrototypeOf$8 = objectIsPrototypeOf;
	var $TypeError$l = TypeError;
	var anInstance$b = function anInstance(it, Prototype) {
	  if (isPrototypeOf$8(Prototype, it)) return it;
	  throw new $TypeError$l('Incorrect invocation');
	};

	var isCallable$k = isCallable$E;
	var isObject$v = isObject$J;
	var setPrototypeOf$5 = objectSetPrototypeOf$1;

	// makes subclassing work correct for wrapped built-ins
	var inheritIfRequired$5 = function inheritIfRequired($this, dummy, Wrapper) {
	  var NewTarget, NewTargetPrototype;
	  if (
	  // it can work only with native `setPrototypeOf`
	  setPrototypeOf$5 &&
	  // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
	  isCallable$k(NewTarget = dummy.constructor) && NewTarget !== Wrapper && isObject$v(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype) setPrototypeOf$5($this, NewTargetPrototype);
	  return $this;
	};

	var $$2O = _export;
	var global$A = global$R;
	var uncurryThis$K = functionUncurryThis;
	var isForced$3 = isForced_1;
	var defineBuiltIn$e = defineBuiltIn$l;
	var InternalMetadataModule$1 = internalMetadata.exports;
	var iterate$D = iterate$E;
	var anInstance$a = anInstance$b;
	var isCallable$j = isCallable$E;
	var isNullOrUndefined$c = isNullOrUndefined$g;
	var isObject$u = isObject$J;
	var fails$H = fails$13;
	var checkCorrectnessOfIteration$2 = checkCorrectnessOfIteration$4;
	var setToStringTag$6 = setToStringTag$c;
	var inheritIfRequired$4 = inheritIfRequired$5;
	var collection$4 = function collection(CONSTRUCTOR_NAME, wrapper, common) {
	  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
	  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
	  var ADDER = IS_MAP ? 'set' : 'add';
	  var NativeConstructor = global$A[CONSTRUCTOR_NAME];
	  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
	  var Constructor = NativeConstructor;
	  var exported = {};
	  var fixMethod = function fixMethod(KEY) {
	    var uncurriedNativeMethod = uncurryThis$K(NativePrototype[KEY]);
	    defineBuiltIn$e(NativePrototype, KEY, KEY === 'add' ? function add(value) {
	      uncurriedNativeMethod(this, value === 0 ? 0 : value);
	      return this;
	    } : KEY === 'delete' ? function (key) {
	      return IS_WEAK && !isObject$u(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
	    } : KEY === 'get' ? function get(key) {
	      return IS_WEAK && !isObject$u(key) ? undefined : uncurriedNativeMethod(this, key === 0 ? 0 : key);
	    } : KEY === 'has' ? function has(key) {
	      return IS_WEAK && !isObject$u(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
	    } : function set(key, value) {
	      uncurriedNativeMethod(this, key === 0 ? 0 : key, value);
	      return this;
	    });
	  };
	  var REPLACE = isForced$3(CONSTRUCTOR_NAME, !isCallable$j(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails$H(function () {
	    new NativeConstructor().entries().next();
	  })));
	  if (REPLACE) {
	    // create collection constructor
	    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
	    InternalMetadataModule$1.enable();
	  } else if (isForced$3(CONSTRUCTOR_NAME, true)) {
	    var instance = new Constructor();
	    // early implementations not supports chaining
	    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) !== instance;
	    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
	    var THROWS_ON_PRIMITIVES = fails$H(function () {
	      instance.has(1);
	    });
	    // most early implementations doesn't supports iterables, most modern - not close it correctly
	    // eslint-disable-next-line no-new -- required for testing
	    var ACCEPT_ITERABLES = checkCorrectnessOfIteration$2(function (iterable) {
	      new NativeConstructor(iterable);
	    });
	    // for early implementations -0 and +0 not the same
	    var BUGGY_ZERO = !IS_WEAK && fails$H(function () {
	      // V8 ~ Chromium 42- fails only with 5+ elements
	      var $instance = new NativeConstructor();
	      var index = 5;
	      while (index--) $instance[ADDER](index, index);
	      return !$instance.has(-0);
	    });
	    if (!ACCEPT_ITERABLES) {
	      Constructor = wrapper(function (dummy, iterable) {
	        anInstance$a(dummy, NativePrototype);
	        var that = inheritIfRequired$4(new NativeConstructor(), dummy, Constructor);
	        if (!isNullOrUndefined$c(iterable)) iterate$D(iterable, that[ADDER], {
	          that: that,
	          AS_ENTRIES: IS_MAP
	        });
	        return that;
	      });
	      Constructor.prototype = NativePrototype;
	      NativePrototype.constructor = Constructor;
	    }
	    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

	    // weak collections should not contains .clear method
	    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
	  }
	  exported[CONSTRUCTOR_NAME] = Constructor;
	  $$2O({
	    global: true,
	    constructor: true,
	    forced: Constructor !== NativeConstructor
	  }, exported);
	  setToStringTag$6(Constructor, CONSTRUCTOR_NAME);
	  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
	  return Constructor;
	};

	var defineBuiltIn$d = defineBuiltIn$l;
	var defineBuiltIns$9 = function defineBuiltIns(target, src, options) {
	  for (var key in src) defineBuiltIn$d(target, key, src[key], options);
	  return target;
	};

	var create$b = objectCreate;
	var defineBuiltInAccessor$b = defineBuiltInAccessor$f;
	var defineBuiltIns$8 = defineBuiltIns$9;
	var bind$k = functionBindContext;
	var anInstance$9 = anInstance$b;
	var isNullOrUndefined$b = isNullOrUndefined$g;
	var iterate$C = iterate$E;
	var defineIterator$1 = iteratorDefine;
	var createIterResultObject$e = createIterResultObject$g;
	var setSpecies$4 = setSpecies$6;
	var DESCRIPTORS$p = descriptors;
	var fastKey = internalMetadata.exports.fastKey;
	var InternalStateModule$g = internalState;
	var setInternalState$f = InternalStateModule$g.set;
	var internalStateGetterFor$1 = InternalStateModule$g.getterFor;
	var collectionStrong$2 = {
	  getConstructor: function getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
	    var Constructor = wrapper(function (that, iterable) {
	      anInstance$9(that, Prototype);
	      setInternalState$f(that, {
	        type: CONSTRUCTOR_NAME,
	        index: create$b(null),
	        first: undefined,
	        last: undefined,
	        size: 0
	      });
	      if (!DESCRIPTORS$p) that.size = 0;
	      if (!isNullOrUndefined$b(iterable)) iterate$C(iterable, that[ADDER], {
	        that: that,
	        AS_ENTRIES: IS_MAP
	      });
	    });
	    var Prototype = Constructor.prototype;
	    var getInternalState = internalStateGetterFor$1(CONSTRUCTOR_NAME);
	    var define = function define(that, key, value) {
	      var state = getInternalState(that);
	      var entry = getEntry(that, key);
	      var previous, index;
	      // change existing entry
	      if (entry) {
	        entry.value = value;
	        // create new entry
	      } else {
	        state.last = entry = {
	          index: index = fastKey(key, true),
	          key: key,
	          value: value,
	          previous: previous = state.last,
	          next: undefined,
	          removed: false
	        };
	        if (!state.first) state.first = entry;
	        if (previous) previous.next = entry;
	        if (DESCRIPTORS$p) state.size++;else that.size++;
	        // add to index
	        if (index !== 'F') state.index[index] = entry;
	      }
	      return that;
	    };
	    var getEntry = function getEntry(that, key) {
	      var state = getInternalState(that);
	      // fast case
	      var index = fastKey(key);
	      var entry;
	      if (index !== 'F') return state.index[index];
	      // frozen object case
	      for (entry = state.first; entry; entry = entry.next) {
	        if (entry.key === key) return entry;
	      }
	    };
	    defineBuiltIns$8(Prototype, {
	      // `{ Map, Set }.prototype.clear()` methods
	      // https://tc39.es/ecma262/#sec-map.prototype.clear
	      // https://tc39.es/ecma262/#sec-set.prototype.clear
	      clear: function clear() {
	        var that = this;
	        var state = getInternalState(that);
	        var entry = state.first;
	        while (entry) {
	          entry.removed = true;
	          if (entry.previous) entry.previous = entry.previous.next = undefined;
	          entry = entry.next;
	        }
	        state.first = state.last = undefined;
	        state.index = create$b(null);
	        if (DESCRIPTORS$p) state.size = 0;else that.size = 0;
	      },
	      // `{ Map, Set }.prototype.delete(key)` methods
	      // https://tc39.es/ecma262/#sec-map.prototype.delete
	      // https://tc39.es/ecma262/#sec-set.prototype.delete
	      'delete': function _delete(key) {
	        var that = this;
	        var state = getInternalState(that);
	        var entry = getEntry(that, key);
	        if (entry) {
	          var next = entry.next;
	          var prev = entry.previous;
	          delete state.index[entry.index];
	          entry.removed = true;
	          if (prev) prev.next = next;
	          if (next) next.previous = prev;
	          if (state.first === entry) state.first = next;
	          if (state.last === entry) state.last = prev;
	          if (DESCRIPTORS$p) state.size--;else that.size--;
	        }
	        return !!entry;
	      },
	      // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
	      // https://tc39.es/ecma262/#sec-map.prototype.foreach
	      // https://tc39.es/ecma262/#sec-set.prototype.foreach
	      forEach: function forEach(callbackfn /* , that = undefined */) {
	        var state = getInternalState(this);
	        var boundFunction = bind$k(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	        var entry;
	        while (entry = entry ? entry.next : state.first) {
	          boundFunction(entry.value, entry.key, this);
	          // revert to the last existing entry
	          while (entry && entry.removed) entry = entry.previous;
	        }
	      },
	      // `{ Map, Set}.prototype.has(key)` methods
	      // https://tc39.es/ecma262/#sec-map.prototype.has
	      // https://tc39.es/ecma262/#sec-set.prototype.has
	      has: function has(key) {
	        return !!getEntry(this, key);
	      }
	    });
	    defineBuiltIns$8(Prototype, IS_MAP ? {
	      // `Map.prototype.get(key)` method
	      // https://tc39.es/ecma262/#sec-map.prototype.get
	      get: function get(key) {
	        var entry = getEntry(this, key);
	        return entry && entry.value;
	      },
	      // `Map.prototype.set(key, value)` method
	      // https://tc39.es/ecma262/#sec-map.prototype.set
	      set: function set(key, value) {
	        return define(this, key === 0 ? 0 : key, value);
	      }
	    } : {
	      // `Set.prototype.add(value)` method
	      // https://tc39.es/ecma262/#sec-set.prototype.add
	      add: function add(value) {
	        return define(this, value = value === 0 ? 0 : value, value);
	      }
	    });
	    if (DESCRIPTORS$p) defineBuiltInAccessor$b(Prototype, 'size', {
	      configurable: true,
	      get: function get() {
	        return getInternalState(this).size;
	      }
	    });
	    return Constructor;
	  },
	  setStrong: function setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP) {
	    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
	    var getInternalCollectionState = internalStateGetterFor$1(CONSTRUCTOR_NAME);
	    var getInternalIteratorState = internalStateGetterFor$1(ITERATOR_NAME);
	    // `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
	    // https://tc39.es/ecma262/#sec-map.prototype.entries
	    // https://tc39.es/ecma262/#sec-map.prototype.keys
	    // https://tc39.es/ecma262/#sec-map.prototype.values
	    // https://tc39.es/ecma262/#sec-map.prototype-@@iterator
	    // https://tc39.es/ecma262/#sec-set.prototype.entries
	    // https://tc39.es/ecma262/#sec-set.prototype.keys
	    // https://tc39.es/ecma262/#sec-set.prototype.values
	    // https://tc39.es/ecma262/#sec-set.prototype-@@iterator
	    defineIterator$1(Constructor, CONSTRUCTOR_NAME, function (iterated, kind) {
	      setInternalState$f(this, {
	        type: ITERATOR_NAME,
	        target: iterated,
	        state: getInternalCollectionState(iterated),
	        kind: kind,
	        last: undefined
	      });
	    }, function () {
	      var state = getInternalIteratorState(this);
	      var kind = state.kind;
	      var entry = state.last;
	      // revert to the last existing entry
	      while (entry && entry.removed) entry = entry.previous;
	      // get next entry
	      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
	        // or finish the iteration
	        state.target = undefined;
	        return createIterResultObject$e(undefined, true);
	      }
	      // return step by kind
	      if (kind === 'keys') return createIterResultObject$e(entry.key, false);
	      if (kind === 'values') return createIterResultObject$e(entry.value, false);
	      return createIterResultObject$e([entry.key, entry.value], false);
	    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

	    // `{ Map, Set }.prototype[@@species]` accessors
	    // https://tc39.es/ecma262/#sec-get-map-@@species
	    // https://tc39.es/ecma262/#sec-get-set-@@species
	    setSpecies$4(CONSTRUCTOR_NAME);
	  }
	};

	var collection$3 = collection$4;
	var collectionStrong$1 = collectionStrong$2;

	// `Map` constructor
	// https://tc39.es/ecma262/#sec-map-objects
	collection$3('Map', function (init) {
	  return function Map() {
	    return init(this, arguments.length ? arguments[0] : undefined);
	  };
	}, collectionStrong$1);

	var log$2 = Math.log;

	// `Math.log1p` method implementation
	// https://tc39.es/ecma262/#sec-math.log1p
	// eslint-disable-next-line es/no-math-log1p -- safe
	var mathLog1p = Math.log1p || function log1p(x) {
	  var n = +x;
	  return n > -1e-8 && n < 1e-8 ? n - n * n / 2 : log$2(1 + n);
	};

	var $$2N = _export;
	var log1p = mathLog1p;

	// eslint-disable-next-line es/no-math-acosh -- required for testing
	var $acosh = Math.acosh;
	var log$1 = Math.log;
	var sqrt$1 = Math.sqrt;
	var LN2$1 = Math.LN2;
	var FORCED$e = !$acosh
	// V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
	|| Math.floor($acosh(Number.MAX_VALUE)) !== 710
	// Tor Browser bug: Math.acosh(Infinity) -> NaN
	|| $acosh(Infinity) !== Infinity;

	// `Math.acosh` method
	// https://tc39.es/ecma262/#sec-math.acosh
	$$2N({
	  target: 'Math',
	  stat: true,
	  forced: FORCED$e
	}, {
	  acosh: function acosh(x) {
	    var n = +x;
	    return n < 1 ? NaN : n > 94906265.62425156 ? log$1(n) + LN2$1 : log1p(n - 1 + sqrt$1(n - 1) * sqrt$1(n + 1));
	  }
	});

	var $$2M = _export;

	// eslint-disable-next-line es/no-math-hypot -- required for testing
	var $hypot = Math.hypot;
	var abs$2 = Math.abs;
	var sqrt = Math.sqrt;

	// Chrome 77 bug
	// https://bugs.chromium.org/p/v8/issues/detail?id=9546
	var FORCED$d = !!$hypot && $hypot(Infinity, NaN) !== Infinity;

	// `Math.hypot` method
	// https://tc39.es/ecma262/#sec-math.hypot
	$$2M({
	  target: 'Math',
	  stat: true,
	  arity: 2,
	  forced: FORCED$d
	}, {
	  // eslint-disable-next-line no-unused-vars -- required for `.length`
	  hypot: function hypot(value1, value2) {
	    var sum = 0;
	    var i = 0;
	    var aLen = arguments.length;
	    var larg = 0;
	    var arg, div;
	    while (i < aLen) {
	      arg = abs$2(arguments[i++]);
	      if (larg < arg) {
	        div = larg / arg;
	        sum = sum * div * div + 1;
	        larg = arg;
	      } else if (arg > 0) {
	        div = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * sqrt(sum);
	  }
	});

	var setToStringTag$5 = setToStringTag$c;

	// Math[@@toStringTag] property
	// https://tc39.es/ecma262/#sec-math-@@tostringtag
	setToStringTag$5(Math, 'Math', true);

	var uncurryThis$J = functionUncurryThis;

	// `thisNumberValue` abstract operation
	// https://tc39.es/ecma262/#sec-thisnumbervalue
	var thisNumberValue$1 = uncurryThis$J(1.0.valueOf);

	// a string of all valid unicode whitespaces
	var whitespaces$2 = "\t\n\x0B\f\r \xA0\u1680\u2000\u2001\u2002" + "\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";

	var uncurryThis$I = functionUncurryThis;
	var requireObjectCoercible$f = requireObjectCoercible$i;
	var toString$m = toString$r;
	var whitespaces$1 = whitespaces$2;
	var replace$7 = uncurryThis$I(''.replace);
	var ltrim = RegExp('^[' + whitespaces$1 + ']+');
	var rtrim = RegExp('(^|[^' + whitespaces$1 + '])[' + whitespaces$1 + ']+$');

	// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
	var createMethod$4 = function createMethod(TYPE) {
	  return function ($this) {
	    var string = toString$m(requireObjectCoercible$f($this));
	    if (TYPE & 1) string = replace$7(string, ltrim, '');
	    if (TYPE & 2) string = replace$7(string, rtrim, '$1');
	    return string;
	  };
	};
	var stringTrim = {
	  // `String.prototype.{ trimLeft, trimStart }` methods
	  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
	  start: createMethod$4(1),
	  // `String.prototype.{ trimRight, trimEnd }` methods
	  // https://tc39.es/ecma262/#sec-string.prototype.trimend
	  end: createMethod$4(2),
	  // `String.prototype.trim` method
	  // https://tc39.es/ecma262/#sec-string.prototype.trim
	  trim: createMethod$4(3)
	};

	var $$2L = _export;
	var IS_PURE$g = isPure;
	var DESCRIPTORS$o = descriptors;
	var global$z = global$R;
	var path = path$2;
	var uncurryThis$H = functionUncurryThis;
	var isForced$2 = isForced_1;
	var hasOwn$e = hasOwnProperty_1;
	var inheritIfRequired$3 = inheritIfRequired$5;
	var isPrototypeOf$7 = objectIsPrototypeOf;
	var isSymbol$1 = isSymbol$6;
	var toPrimitive$1 = toPrimitive$3;
	var fails$G = fails$13;
	var getOwnPropertyNames$3 = objectGetOwnPropertyNames.f;
	var getOwnPropertyDescriptor$8 = objectGetOwnPropertyDescriptor.f;
	var defineProperty$4 = objectDefineProperty.f;
	var thisNumberValue = thisNumberValue$1;
	var trim = stringTrim.trim;
	var NUMBER = 'Number';
	var NativeNumber = global$z[NUMBER];
	path[NUMBER];
	var NumberPrototype = NativeNumber.prototype;
	var TypeError$5 = global$z.TypeError;
	var stringSlice$c = uncurryThis$H(''.slice);
	var charCodeAt$2 = uncurryThis$H(''.charCodeAt);

	// `ToNumeric` abstract operation
	// https://tc39.es/ecma262/#sec-tonumeric
	var toNumeric = function toNumeric(value) {
	  var primValue = toPrimitive$1(value, 'number');
	  return typeof primValue == 'bigint' ? primValue : toNumber(primValue);
	};

	// `ToNumber` abstract operation
	// https://tc39.es/ecma262/#sec-tonumber
	var toNumber = function toNumber(argument) {
	  var it = toPrimitive$1(argument, 'number');
	  var first, third, radix, maxCode, digits, length, index, code;
	  if (isSymbol$1(it)) throw new TypeError$5('Cannot convert a Symbol value to a number');
	  if (typeof it == 'string' && it.length > 2) {
	    it = trim(it);
	    first = charCodeAt$2(it, 0);
	    if (first === 43 || first === 45) {
	      third = charCodeAt$2(it, 2);
	      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if (first === 48) {
	      switch (charCodeAt$2(it, 1)) {
	        // fast equal of /^0b[01]+$/i
	        case 66:
	        case 98:
	          radix = 2;
	          maxCode = 49;
	          break;
	        // fast equal of /^0o[0-7]+$/i
	        case 79:
	        case 111:
	          radix = 8;
	          maxCode = 55;
	          break;
	        default:
	          return +it;
	      }
	      digits = stringSlice$c(it, 2);
	      length = digits.length;
	      for (index = 0; index < length; index++) {
	        code = charCodeAt$2(digits, index);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if (code < 48 || code > maxCode) return NaN;
	      }
	      return parseInt(digits, radix);
	    }
	  }
	  return +it;
	};
	var FORCED$c = isForced$2(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'));
	var calledWithNew = function calledWithNew(dummy) {
	  // includes check on 1..constructor(foo) case
	  return isPrototypeOf$7(NumberPrototype, dummy) && fails$G(function () {
	    thisNumberValue(dummy);
	  });
	};

	// `Number` constructor
	// https://tc39.es/ecma262/#sec-number-constructor
	var NumberWrapper = function Number(value) {
	  var n = arguments.length < 1 ? 0 : NativeNumber(toNumeric(value));
	  return calledWithNew(this) ? inheritIfRequired$3(Object(n), this, NumberWrapper) : n;
	};
	NumberWrapper.prototype = NumberPrototype;
	if (FORCED$c && !IS_PURE$g) NumberPrototype.constructor = NumberWrapper;
	$$2L({
	  global: true,
	  constructor: true,
	  wrap: true,
	  forced: FORCED$c
	}, {
	  Number: NumberWrapper
	});

	// Use `internal/copy-constructor-properties` helper in `core-js@4`
	var copyConstructorProperties$2 = function copyConstructorProperties(target, source) {
	  for (var keys = DESCRIPTORS$o ? getOwnPropertyNames$3(source) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES2015 (in case, if modules with ES2015 Number statics required before):
	    'EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,' +
	    // ESNext
	    'fromString,range').split(','), j = 0, key; keys.length > j; j++) {
	    if (hasOwn$e(source, key = keys[j]) && !hasOwn$e(target, key)) {
	      defineProperty$4(target, key, getOwnPropertyDescriptor$8(source, key));
	    }
	  }
	};
	if (FORCED$c || IS_PURE$g) copyConstructorProperties$2(path[NUMBER], NativeNumber);

	var DESCRIPTORS$n = descriptors;
	var uncurryThis$G = functionUncurryThis;
	var call$W = functionCall;
	var fails$F = fails$13;
	var objectKeys$2 = objectKeys$5;
	var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
	var propertyIsEnumerableModule = objectPropertyIsEnumerable;
	var toObject$g = toObject$u;
	var IndexedObject = indexedObject;

	// eslint-disable-next-line es/no-object-assign -- safe
	var $assign = Object.assign;
	// eslint-disable-next-line es/no-object-defineproperty -- required for testing
	var defineProperty$3 = Object.defineProperty;
	var concat$3 = uncurryThis$G([].concat);

	// `Object.assign` method
	// https://tc39.es/ecma262/#sec-object.assign
	var objectAssign = !$assign || fails$F(function () {
	  // should have correct order of operations (Edge bug)
	  if (DESCRIPTORS$n && $assign({
	    b: 1
	  }, $assign(defineProperty$3({}, 'a', {
	    enumerable: true,
	    get: function get() {
	      defineProperty$3(this, 'b', {
	        value: 3,
	        enumerable: false
	      });
	    }
	  }), {
	    b: 2
	  })).b !== 1) return true;
	  // should work with symbols and should have deterministic property order (V8 bug)
	  var A = {};
	  var B = {};
	  // eslint-disable-next-line es/no-symbol -- safe
	  var symbol = Symbol('assign detection');
	  var alphabet = 'abcdefghijklmnopqrst';
	  A[symbol] = 7;
	  alphabet.split('').forEach(function (chr) {
	    B[chr] = chr;
	  });
	  return $assign({}, A)[symbol] !== 7 || objectKeys$2($assign({}, B)).join('') !== alphabet;
	}) ? function assign(target, source) {
	  // eslint-disable-line no-unused-vars -- required for `.length`
	  var T = toObject$g(target);
	  var argumentsLength = arguments.length;
	  var index = 1;
	  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
	  var propertyIsEnumerable = propertyIsEnumerableModule.f;
	  while (argumentsLength > index) {
	    var S = IndexedObject(arguments[index++]);
	    var keys = getOwnPropertySymbols ? concat$3(objectKeys$2(S), getOwnPropertySymbols(S)) : objectKeys$2(S);
	    var length = keys.length;
	    var j = 0;
	    var key;
	    while (length > j) {
	      key = keys[j++];
	      if (!DESCRIPTORS$n || call$W(propertyIsEnumerable, S, key)) T[key] = S[key];
	    }
	  }
	  return T;
	} : $assign;

	var $$2K = _export;
	var assign$1 = objectAssign;

	// `Object.assign` method
	// https://tc39.es/ecma262/#sec-object.assign
	// eslint-disable-next-line es/no-object-assign -- required for testing
	$$2K({
	  target: 'Object',
	  stat: true,
	  arity: 2,
	  forced: Object.assign !== assign$1
	}, {
	  assign: assign$1
	});

	var global$y = global$R;
	var fails$E = fails$13;
	var WEBKIT$1 = engineWebkitVersion;

	// Forced replacement object prototype accessors methods
	var objectPrototypeAccessorsForced = !fails$E(function () {
	  // This feature detection crashes old WebKit
	  // https://github.com/zloirock/core-js/issues/232
	  if (WEBKIT$1 && WEBKIT$1 < 535) return;
	  var key = Math.random();
	  // In FF throws only define methods
	  // eslint-disable-next-line no-undef, no-useless-call, es/no-legacy-object-prototype-accessor-methods -- required for testing
	  __defineSetter__.call(null, key, function () {/* empty */});
	  delete global$y[key];
	});

	var $$2J = _export;
	var DESCRIPTORS$m = descriptors;
	var FORCED$b = objectPrototypeAccessorsForced;
	var aCallable$x = aCallable$F;
	var toObject$f = toObject$u;
	var definePropertyModule$4 = objectDefineProperty;

	// `Object.prototype.__defineGetter__` method
	// https://tc39.es/ecma262/#sec-object.prototype.__defineGetter__
	if (DESCRIPTORS$m) {
	  $$2J({
	    target: 'Object',
	    proto: true,
	    forced: FORCED$b
	  }, {
	    __defineGetter__: function __defineGetter__(P, getter) {
	      definePropertyModule$4.f(toObject$f(this), P, {
	        get: aCallable$x(getter),
	        enumerable: true,
	        configurable: true
	      });
	    }
	  });
	}

	var $$2I = _export;
	var DESCRIPTORS$l = descriptors;
	var FORCED$a = objectPrototypeAccessorsForced;
	var aCallable$w = aCallable$F;
	var toObject$e = toObject$u;
	var definePropertyModule$3 = objectDefineProperty;

	// `Object.prototype.__defineSetter__` method
	// https://tc39.es/ecma262/#sec-object.prototype.__defineSetter__
	if (DESCRIPTORS$l) {
	  $$2I({
	    target: 'Object',
	    proto: true,
	    forced: FORCED$a
	  }, {
	    __defineSetter__: function __defineSetter__(P, setter) {
	      definePropertyModule$3.f(toObject$e(this), P, {
	        set: aCallable$w(setter),
	        enumerable: true,
	        configurable: true
	      });
	    }
	  });
	}

	var DESCRIPTORS$k = descriptors;
	var fails$D = fails$13;
	var uncurryThis$F = functionUncurryThis;
	var objectGetPrototypeOf$1 = objectGetPrototypeOf$2;
	var objectKeys$1 = objectKeys$5;
	var toIndexedObject$4 = toIndexedObject$e;
	var $propertyIsEnumerable = objectPropertyIsEnumerable.f;
	var propertyIsEnumerable = uncurryThis$F($propertyIsEnumerable);
	var push$d = uncurryThis$F([].push);

	// in some IE versions, `propertyIsEnumerable` returns incorrect result on integer keys
	// of `null` prototype objects
	var IE_BUG = DESCRIPTORS$k && fails$D(function () {
	  // eslint-disable-next-line es/no-object-create -- safe
	  var O = Object.create(null);
	  O[2] = 2;
	  return !propertyIsEnumerable(O, 2);
	});

	// `Object.{ entries, values }` methods implementation
	var createMethod$3 = function createMethod(TO_ENTRIES) {
	  return function (it) {
	    var O = toIndexedObject$4(it);
	    var keys = objectKeys$1(O);
	    var IE_WORKAROUND = IE_BUG && objectGetPrototypeOf$1(O) === null;
	    var length = keys.length;
	    var i = 0;
	    var result = [];
	    var key;
	    while (length > i) {
	      key = keys[i++];
	      if (!DESCRIPTORS$k || (IE_WORKAROUND ? key in O : propertyIsEnumerable(O, key))) {
	        push$d(result, TO_ENTRIES ? [key, O[key]] : O[key]);
	      }
	    }
	    return result;
	  };
	};
	var objectToArray = {
	  // `Object.entries` method
	  // https://tc39.es/ecma262/#sec-object.entries
	  entries: createMethod$3(true),
	  // `Object.values` method
	  // https://tc39.es/ecma262/#sec-object.values
	  values: createMethod$3(false)
	};

	var $$2H = _export;
	var $entries = objectToArray.entries;

	// `Object.entries` method
	// https://tc39.es/ecma262/#sec-object.entries
	$$2H({
	  target: 'Object',
	  stat: true
	}, {
	  entries: function entries(O) {
	    return $entries(O);
	  }
	});

	var $$2G = _export;
	var FREEZING$4 = freezing;
	var fails$C = fails$13;
	var isObject$t = isObject$J;
	var onFreeze$2 = internalMetadata.exports.onFreeze;

	// eslint-disable-next-line es/no-object-freeze -- safe
	var $freeze = Object.freeze;
	var FAILS_ON_PRIMITIVES$5 = fails$C(function () {
	  $freeze(1);
	});

	// `Object.freeze` method
	// https://tc39.es/ecma262/#sec-object.freeze
	$$2G({
	  target: 'Object',
	  stat: true,
	  forced: FAILS_ON_PRIMITIVES$5,
	  sham: !FREEZING$4
	}, {
	  freeze: function freeze(it) {
	    return $freeze && isObject$t(it) ? $freeze(onFreeze$2(it)) : it;
	  }
	});

	var $$2F = _export;
	var iterate$B = iterate$E;
	var createProperty$2 = createProperty$8;

	// `Object.fromEntries` method
	// https://github.com/tc39/proposal-object-from-entries
	$$2F({
	  target: 'Object',
	  stat: true
	}, {
	  fromEntries: function fromEntries(iterable) {
	    var obj = {};
	    iterate$B(iterable, function (k, v) {
	      createProperty$2(obj, k, v);
	    }, {
	      AS_ENTRIES: true
	    });
	    return obj;
	  }
	});

	var $$2E = _export;
	var fails$B = fails$13;
	var toIndexedObject$3 = toIndexedObject$e;
	var nativeGetOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
	var DESCRIPTORS$j = descriptors;
	var FORCED$9 = !DESCRIPTORS$j || fails$B(function () {
	  nativeGetOwnPropertyDescriptor$1(1);
	});

	// `Object.getOwnPropertyDescriptor` method
	// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
	$$2E({
	  target: 'Object',
	  stat: true,
	  forced: FORCED$9,
	  sham: !DESCRIPTORS$j
	}, {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
	    return nativeGetOwnPropertyDescriptor$1(toIndexedObject$3(it), key);
	  }
	});

	var $$2D = _export;
	var DESCRIPTORS$i = descriptors;
	var ownKeys$2 = ownKeys$4;
	var toIndexedObject$2 = toIndexedObject$e;
	var getOwnPropertyDescriptorModule$4 = objectGetOwnPropertyDescriptor;
	var createProperty$1 = createProperty$8;

	// `Object.getOwnPropertyDescriptors` method
	// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
	$$2D({
	  target: 'Object',
	  stat: true,
	  sham: !DESCRIPTORS$i
	}, {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
	    var O = toIndexedObject$2(object);
	    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule$4.f;
	    var keys = ownKeys$2(O);
	    var result = {};
	    var index = 0;
	    var key, descriptor;
	    while (keys.length > index) {
	      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
	      if (descriptor !== undefined) createProperty$1(result, key, descriptor);
	    }
	    return result;
	  }
	});

	var $$2C = _export;
	var fails$A = fails$13;
	var getOwnPropertyNames$2 = objectGetOwnPropertyNamesExternal.f;

	// eslint-disable-next-line es/no-object-getownpropertynames -- required for testing
	var FAILS_ON_PRIMITIVES$4 = fails$A(function () {
	  return !Object.getOwnPropertyNames(1);
	});

	// `Object.getOwnPropertyNames` method
	// https://tc39.es/ecma262/#sec-object.getownpropertynames
	$$2C({
	  target: 'Object',
	  stat: true,
	  forced: FAILS_ON_PRIMITIVES$4
	}, {
	  getOwnPropertyNames: getOwnPropertyNames$2
	});

	var $$2B = _export;
	var fails$z = fails$13;
	var toObject$d = toObject$u;
	var nativeGetPrototypeOf = objectGetPrototypeOf$2;
	var CORRECT_PROTOTYPE_GETTER$1 = correctPrototypeGetter;
	var FAILS_ON_PRIMITIVES$3 = fails$z(function () {
	  nativeGetPrototypeOf(1);
	});

	// `Object.getPrototypeOf` method
	// https://tc39.es/ecma262/#sec-object.getprototypeof
	$$2B({
	  target: 'Object',
	  stat: true,
	  forced: FAILS_ON_PRIMITIVES$3,
	  sham: !CORRECT_PROTOTYPE_GETTER$1
	}, {
	  getPrototypeOf: function getPrototypeOf(it) {
	    return nativeGetPrototypeOf(toObject$d(it));
	  }
	});

	var $$2A = _export;
	var $isExtensible$1 = objectIsExtensible;

	// `Object.isExtensible` method
	// https://tc39.es/ecma262/#sec-object.isextensible
	// eslint-disable-next-line es/no-object-isextensible -- safe
	$$2A({
	  target: 'Object',
	  stat: true,
	  forced: Object.isExtensible !== $isExtensible$1
	}, {
	  isExtensible: $isExtensible$1
	});

	var $$2z = _export;
	var fails$y = fails$13;
	var isObject$s = isObject$J;
	var classof$c = classofRaw$2;
	var ARRAY_BUFFER_NON_EXTENSIBLE$1 = arrayBufferNonExtensible;

	// eslint-disable-next-line es/no-object-isfrozen -- safe
	var $isFrozen = Object.isFrozen;
	var FORCED$8 = ARRAY_BUFFER_NON_EXTENSIBLE$1 || fails$y(function () {
	  $isFrozen(1);
	});

	// `Object.isFrozen` method
	// https://tc39.es/ecma262/#sec-object.isfrozen
	$$2z({
	  target: 'Object',
	  stat: true,
	  forced: FORCED$8
	}, {
	  isFrozen: function isFrozen(it) {
	    if (!isObject$s(it)) return true;
	    if (ARRAY_BUFFER_NON_EXTENSIBLE$1 && classof$c(it) === 'ArrayBuffer') return true;
	    return $isFrozen ? $isFrozen(it) : false;
	  }
	});

	var $$2y = _export;
	var fails$x = fails$13;
	var isObject$r = isObject$J;
	var classof$b = classofRaw$2;
	var ARRAY_BUFFER_NON_EXTENSIBLE = arrayBufferNonExtensible;

	// eslint-disable-next-line es/no-object-issealed -- safe
	var $isSealed = Object.isSealed;
	var FORCED$7 = ARRAY_BUFFER_NON_EXTENSIBLE || fails$x(function () {
	  $isSealed(1);
	});

	// `Object.isSealed` method
	// https://tc39.es/ecma262/#sec-object.issealed
	$$2y({
	  target: 'Object',
	  stat: true,
	  forced: FORCED$7
	}, {
	  isSealed: function isSealed(it) {
	    if (!isObject$r(it)) return true;
	    if (ARRAY_BUFFER_NON_EXTENSIBLE && classof$b(it) === 'ArrayBuffer') return true;
	    return $isSealed ? $isSealed(it) : false;
	  }
	});

	var $$2x = _export;
	var toObject$c = toObject$u;
	var nativeKeys = objectKeys$5;
	var fails$w = fails$13;
	var FAILS_ON_PRIMITIVES$2 = fails$w(function () {
	  nativeKeys(1);
	});

	// `Object.keys` method
	// https://tc39.es/ecma262/#sec-object.keys
	$$2x({
	  target: 'Object',
	  stat: true,
	  forced: FAILS_ON_PRIMITIVES$2
	}, {
	  keys: function keys(it) {
	    return nativeKeys(toObject$c(it));
	  }
	});

	var $$2w = _export;
	var DESCRIPTORS$h = descriptors;
	var FORCED$6 = objectPrototypeAccessorsForced;
	var toObject$b = toObject$u;
	var toPropertyKey$3 = toPropertyKey$8;
	var getPrototypeOf$c = objectGetPrototypeOf$2;
	var getOwnPropertyDescriptor$7 = objectGetOwnPropertyDescriptor.f;

	// `Object.prototype.__lookupGetter__` method
	// https://tc39.es/ecma262/#sec-object.prototype.__lookupGetter__
	if (DESCRIPTORS$h) {
	  $$2w({
	    target: 'Object',
	    proto: true,
	    forced: FORCED$6
	  }, {
	    __lookupGetter__: function __lookupGetter__(P) {
	      var O = toObject$b(this);
	      var key = toPropertyKey$3(P);
	      var desc;
	      do {
	        if (desc = getOwnPropertyDescriptor$7(O, key)) return desc.get;
	      } while (O = getPrototypeOf$c(O));
	    }
	  });
	}

	var $$2v = _export;
	var DESCRIPTORS$g = descriptors;
	var FORCED$5 = objectPrototypeAccessorsForced;
	var toObject$a = toObject$u;
	var toPropertyKey$2 = toPropertyKey$8;
	var getPrototypeOf$b = objectGetPrototypeOf$2;
	var getOwnPropertyDescriptor$6 = objectGetOwnPropertyDescriptor.f;

	// `Object.prototype.__lookupSetter__` method
	// https://tc39.es/ecma262/#sec-object.prototype.__lookupSetter__
	if (DESCRIPTORS$g) {
	  $$2v({
	    target: 'Object',
	    proto: true,
	    forced: FORCED$5
	  }, {
	    __lookupSetter__: function __lookupSetter__(P) {
	      var O = toObject$a(this);
	      var key = toPropertyKey$2(P);
	      var desc;
	      do {
	        if (desc = getOwnPropertyDescriptor$6(O, key)) return desc.set;
	      } while (O = getPrototypeOf$b(O));
	    }
	  });
	}

	var $$2u = _export;
	var isObject$q = isObject$J;
	var onFreeze$1 = internalMetadata.exports.onFreeze;
	var FREEZING$3 = freezing;
	var fails$v = fails$13;

	// eslint-disable-next-line es/no-object-preventextensions -- safe
	var $preventExtensions = Object.preventExtensions;
	var FAILS_ON_PRIMITIVES$1 = fails$v(function () {
	  $preventExtensions(1);
	});

	// `Object.preventExtensions` method
	// https://tc39.es/ecma262/#sec-object.preventextensions
	$$2u({
	  target: 'Object',
	  stat: true,
	  forced: FAILS_ON_PRIMITIVES$1,
	  sham: !FREEZING$3
	}, {
	  preventExtensions: function preventExtensions(it) {
	    return $preventExtensions && isObject$q(it) ? $preventExtensions(onFreeze$1(it)) : it;
	  }
	});

	var $$2t = _export;
	var isObject$p = isObject$J;
	var onFreeze = internalMetadata.exports.onFreeze;
	var FREEZING$2 = freezing;
	var fails$u = fails$13;

	// eslint-disable-next-line es/no-object-seal -- safe
	var $seal = Object.seal;
	var FAILS_ON_PRIMITIVES = fails$u(function () {
	  $seal(1);
	});

	// `Object.seal` method
	// https://tc39.es/ecma262/#sec-object.seal
	$$2t({
	  target: 'Object',
	  stat: true,
	  forced: FAILS_ON_PRIMITIVES,
	  sham: !FREEZING$2
	}, {
	  seal: function seal(it) {
	    return $seal && isObject$p(it) ? $seal(onFreeze(it)) : it;
	  }
	});

	var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
	var classof$a = classof$l;

	// `Object.prototype.toString` method implementation
	// https://tc39.es/ecma262/#sec-object.prototype.tostring
	var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
	  return '[object ' + classof$a(this) + ']';
	};

	var TO_STRING_TAG_SUPPORT = toStringTagSupport;
	var defineBuiltIn$c = defineBuiltIn$l;
	var toString$l = objectToString;

	// `Object.prototype.toString` method
	// https://tc39.es/ecma262/#sec-object.prototype.tostring
	if (!TO_STRING_TAG_SUPPORT) {
	  defineBuiltIn$c(Object.prototype, 'toString', toString$l, {
	    unsafe: true
	  });
	}

	var $$2s = _export;
	var $values = objectToArray.values;

	// `Object.values` method
	// https://tc39.es/ecma262/#sec-object.values
	$$2s({
	  target: 'Object',
	  stat: true
	}, {
	  values: function values(O) {
	    return $values(O);
	  }
	});

	var isConstructor$2 = isConstructor$7;
	var tryToString$1 = tryToString$7;
	var $TypeError$k = TypeError;

	// `Assert: IsConstructor(argument) is true`
	var aConstructor$3 = function aConstructor(argument) {
	  if (isConstructor$2(argument)) return argument;
	  throw new $TypeError$k(tryToString$1(argument) + ' is not a constructor');
	};

	var anObject$_ = anObject$1a;
	var aConstructor$2 = aConstructor$3;
	var isNullOrUndefined$a = isNullOrUndefined$g;
	var wellKnownSymbol$n = wellKnownSymbol$I;
	var SPECIES$2 = wellKnownSymbol$n('species');

	// `SpeciesConstructor` abstract operation
	// https://tc39.es/ecma262/#sec-speciesconstructor
	var speciesConstructor$5 = function speciesConstructor(O, defaultConstructor) {
	  var C = anObject$_(O).constructor;
	  var S;
	  return C === undefined || isNullOrUndefined$a(S = anObject$_(C)[SPECIES$2]) ? defaultConstructor : aConstructor$2(S);
	};

	var $TypeError$j = TypeError;
	var validateArgumentsLength$5 = function validateArgumentsLength(passed, required) {
	  if (passed < required) throw new $TypeError$j('Not enough arguments');
	  return passed;
	};

	var userAgent$3 = engineUserAgent;

	// eslint-disable-next-line redos/no-vulnerable -- safe
	var engineIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent$3);

	var global$x = global$R;
	var apply$8 = functionApply$1;
	var bind$j = functionBindContext;
	var isCallable$i = isCallable$E;
	var hasOwn$d = hasOwnProperty_1;
	var fails$t = fails$13;
	var html = html$2;
	var arraySlice$7 = arraySlice$b;
	var createElement = documentCreateElement$2;
	var validateArgumentsLength$4 = validateArgumentsLength$5;
	var IS_IOS$1 = engineIsIos;
	var IS_NODE$3 = engineIsNode;
	var set$8 = global$x.setImmediate;
	var clear = global$x.clearImmediate;
	var process$2 = global$x.process;
	var Dispatch = global$x.Dispatch;
	var Function$2 = global$x.Function;
	var MessageChannel = global$x.MessageChannel;
	var String$1 = global$x.String;
	var counter = 0;
	var queue$3 = {};
	var ONREADYSTATECHANGE = 'onreadystatechange';
	var $location, defer, channel, port;
	fails$t(function () {
	  // Deno throws a ReferenceError on `location` access without `--location` flag
	  $location = global$x.location;
	});
	var run = function run(id) {
	  if (hasOwn$d(queue$3, id)) {
	    var fn = queue$3[id];
	    delete queue$3[id];
	    fn();
	  }
	};
	var runner = function runner(id) {
	  return function () {
	    run(id);
	  };
	};
	var eventListener = function eventListener(event) {
	  run(event.data);
	};
	var globalPostMessageDefer = function globalPostMessageDefer(id) {
	  // old engines have not location.origin
	  global$x.postMessage(String$1(id), $location.protocol + '//' + $location.host);
	};

	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if (!set$8 || !clear) {
	  set$8 = function setImmediate(handler) {
	    validateArgumentsLength$4(arguments.length, 1);
	    var fn = isCallable$i(handler) ? handler : Function$2(handler);
	    var args = arraySlice$7(arguments, 1);
	    queue$3[++counter] = function () {
	      apply$8(fn, undefined, args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clear = function clearImmediate(id) {
	    delete queue$3[id];
	  };
	  // Node.js 0.8-
	  if (IS_NODE$3) {
	    defer = function defer(id) {
	      process$2.nextTick(runner(id));
	    };
	    // Sphere (JS game engine) Dispatch API
	  } else if (Dispatch && Dispatch.now) {
	    defer = function defer(id) {
	      Dispatch.now(runner(id));
	    };
	    // Browsers with MessageChannel, includes WebWorkers
	    // except iOS - https://github.com/zloirock/core-js/issues/624
	  } else if (MessageChannel && !IS_IOS$1) {
	    channel = new MessageChannel();
	    port = channel.port2;
	    channel.port1.onmessage = eventListener;
	    defer = bind$j(port.postMessage, port);
	    // Browsers with postMessage, skip WebWorkers
	    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if (global$x.addEventListener && isCallable$i(global$x.postMessage) && !global$x.importScripts && $location && $location.protocol !== 'file:' && !fails$t(globalPostMessageDefer)) {
	    defer = globalPostMessageDefer;
	    global$x.addEventListener('message', eventListener, false);
	    // IE8-
	  } else if (ONREADYSTATECHANGE in createElement('script')) {
	    defer = function defer(id) {
	      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
	        html.removeChild(this);
	        run(id);
	      };
	    };
	    // Rest old browsers
	  } else {
	    defer = function defer(id) {
	      setTimeout(runner(id), 0);
	    };
	  }
	}
	var task$1 = {
	  set: set$8,
	  clear: clear
	};

	var global$w = global$R;
	var DESCRIPTORS$f = descriptors;

	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var getOwnPropertyDescriptor$5 = Object.getOwnPropertyDescriptor;

	// Avoid NodeJS experimental warning
	var safeGetBuiltIn$2 = function safeGetBuiltIn(name) {
	  if (!DESCRIPTORS$f) return global$w[name];
	  var descriptor = getOwnPropertyDescriptor$5(global$w, name);
	  return descriptor && descriptor.value;
	};

	var Queue$2 = function Queue() {
	  this.head = null;
	  this.tail = null;
	};
	Queue$2.prototype = {
	  add: function add(item) {
	    var entry = {
	      item: item,
	      next: null
	    };
	    var tail = this.tail;
	    if (tail) tail.next = entry;else this.head = entry;
	    this.tail = entry;
	  },
	  get: function get() {
	    var entry = this.head;
	    if (entry) {
	      var next = this.head = entry.next;
	      if (next === null) this.tail = null;
	      return entry.item;
	    }
	  }
	};
	var queue$2 = Queue$2;

	var userAgent$2 = engineUserAgent;
	var engineIsIosPebble = /ipad|iphone|ipod/i.test(userAgent$2) && typeof Pebble != 'undefined';

	var userAgent$1 = engineUserAgent;
	var engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(userAgent$1);

	var global$v = global$R;
	var safeGetBuiltIn$1 = safeGetBuiltIn$2;
	var bind$i = functionBindContext;
	var macrotask = task$1.set;
	var Queue$1 = queue$2;
	var IS_IOS = engineIsIos;
	var IS_IOS_PEBBLE = engineIsIosPebble;
	var IS_WEBOS_WEBKIT = engineIsWebosWebkit;
	var IS_NODE$2 = engineIsNode;
	var MutationObserver = global$v.MutationObserver || global$v.WebKitMutationObserver;
	var document$2 = global$v.document;
	var process$1 = global$v.process;
	var Promise$4 = global$v.Promise;
	var microtask$2 = safeGetBuiltIn$1('queueMicrotask');
	var notify$1, toggle, node, promise, then;

	// modern engines have queueMicrotask method
	if (!microtask$2) {
	  var queue$1 = new Queue$1();
	  var flush = function flush() {
	    var parent, fn;
	    if (IS_NODE$2 && (parent = process$1.domain)) parent.exit();
	    while (fn = queue$1.get()) try {
	      fn();
	    } catch (error) {
	      if (queue$1.head) notify$1();
	      throw error;
	    }
	    if (parent) parent.enter();
	  };

	  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
	  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
	  if (!IS_IOS && !IS_NODE$2 && !IS_WEBOS_WEBKIT && MutationObserver && document$2) {
	    toggle = true;
	    node = document$2.createTextNode('');
	    new MutationObserver(flush).observe(node, {
	      characterData: true
	    });
	    notify$1 = function notify() {
	      node.data = toggle = !toggle;
	    };
	    // environments with maybe non-completely correct, but existent Promise
	  } else if (!IS_IOS_PEBBLE && Promise$4 && Promise$4.resolve) {
	    // Promise.resolve without an argument throws an error in LG WebOS 2
	    promise = Promise$4.resolve(undefined);
	    // workaround of WebKit ~ iOS Safari 10.1 bug
	    promise.constructor = Promise$4;
	    then = bind$i(promise.then, promise);
	    notify$1 = function notify() {
	      then(flush);
	    };
	    // Node.js without promises
	  } else if (IS_NODE$2) {
	    notify$1 = function notify() {
	      process$1.nextTick(flush);
	    };
	    // for other environments - macrotask based on:
	    // - setImmediate
	    // - MessageChannel
	    // - window.postMessage
	    // - onreadystatechange
	    // - setTimeout
	  } else {
	    // `webpack` dev server bug on IE global methods - use bind(fn, global)
	    macrotask = bind$i(macrotask, global$v);
	    notify$1 = function notify() {
	      macrotask(flush);
	    };
	  }
	  microtask$2 = function microtask(fn) {
	    if (!queue$1.head) notify$1();
	    queue$1.add(fn);
	  };
	}
	var microtask_1 = microtask$2;

	var hostReportErrors$2 = function hostReportErrors(a, b) {
	  try {
	    // eslint-disable-next-line no-console -- safe
	    arguments.length === 1 ? console.error(a) : console.error(a, b);
	  } catch (error) {/* empty */}
	};

	var perform$7 = function perform(exec) {
	  try {
	    return {
	      error: false,
	      value: exec()
	    };
	  } catch (error) {
	    return {
	      error: true,
	      value: error
	    };
	  }
	};

	var global$u = global$R;
	var promiseNativeConstructor = global$u.Promise;

	/* global Deno -- Deno case */
	var engineIsDeno = typeof Deno == 'object' && Deno && typeof Deno.version == 'object';

	var IS_DENO$1 = engineIsDeno;
	var IS_NODE$1 = engineIsNode;
	var engineIsBrowser = !IS_DENO$1 && !IS_NODE$1 && typeof window == 'object' && typeof document == 'object';

	var global$t = global$R;
	var NativePromiseConstructor$4 = promiseNativeConstructor;
	var isCallable$h = isCallable$E;
	var isForced$1 = isForced_1;
	var inspectSource = inspectSource$3;
	var wellKnownSymbol$m = wellKnownSymbol$I;
	var IS_BROWSER = engineIsBrowser;
	var IS_DENO = engineIsDeno;
	var V8_VERSION = engineV8Version;
	NativePromiseConstructor$4 && NativePromiseConstructor$4.prototype;
	var SPECIES$1 = wellKnownSymbol$m('species');
	var SUBCLASSING = false;
	var NATIVE_PROMISE_REJECTION_EVENT$1 = isCallable$h(global$t.PromiseRejectionEvent);
	var FORCED_PROMISE_CONSTRUCTOR$5 = isForced$1('Promise', function () {
	  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor$4);
	  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor$4);
	  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
	  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
	  // We can't detect it synchronously, so just check versions
	  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
	  // We can't use @@species feature detection in V8 since it causes
	  // deoptimization and performance degradation
	  // https://github.com/zloirock/core-js/issues/679
	  if (!V8_VERSION || V8_VERSION < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
	    // Detect correctness of subclassing with @@species support
	    var promise = new NativePromiseConstructor$4(function (resolve) {
	      resolve(1);
	    });
	    var FakePromise = function FakePromise(exec) {
	      exec(function () {/* empty */}, function () {/* empty */});
	    };
	    var constructor = promise.constructor = {};
	    constructor[SPECIES$1] = FakePromise;
	    SUBCLASSING = promise.then(function () {/* empty */}) instanceof FakePromise;
	    if (!SUBCLASSING) return true;
	    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	  }
	  return !GLOBAL_CORE_JS_PROMISE && (IS_BROWSER || IS_DENO) && !NATIVE_PROMISE_REJECTION_EVENT$1;
	});
	var promiseConstructorDetection = {
	  CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR$5,
	  REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT$1,
	  SUBCLASSING: SUBCLASSING
	};

	var newPromiseCapability$2 = {};

	var aCallable$v = aCallable$F;
	var $TypeError$i = TypeError;
	var PromiseCapability = function PromiseCapability(C) {
	  var resolve, reject;
	  this.promise = new C(function ($$resolve, $$reject) {
	    if (resolve !== undefined || reject !== undefined) throw new $TypeError$i('Bad Promise constructor');
	    resolve = $$resolve;
	    reject = $$reject;
	  });
	  this.resolve = aCallable$v(resolve);
	  this.reject = aCallable$v(reject);
	};

	// `NewPromiseCapability` abstract operation
	// https://tc39.es/ecma262/#sec-newpromisecapability
	newPromiseCapability$2.f = function (C) {
	  return new PromiseCapability(C);
	};

	var $$2r = _export;
	var IS_NODE = engineIsNode;
	var global$s = global$R;
	var call$V = functionCall;
	var defineBuiltIn$b = defineBuiltIn$l;
	var setPrototypeOf$4 = objectSetPrototypeOf$1;
	var setToStringTag$4 = setToStringTag$c;
	var setSpecies$3 = setSpecies$6;
	var aCallable$u = aCallable$F;
	var isCallable$g = isCallable$E;
	var isObject$o = isObject$J;
	var anInstance$8 = anInstance$b;
	var speciesConstructor$4 = speciesConstructor$5;
	var task = task$1.set;
	var microtask$1 = microtask_1;
	var hostReportErrors$1 = hostReportErrors$2;
	var perform$6 = perform$7;
	var Queue = queue$2;
	var InternalStateModule$f = internalState;
	var NativePromiseConstructor$3 = promiseNativeConstructor;
	var PromiseConstructorDetection = promiseConstructorDetection;
	var newPromiseCapabilityModule$6 = newPromiseCapability$2;
	var PROMISE = 'Promise';
	var FORCED_PROMISE_CONSTRUCTOR$4 = PromiseConstructorDetection.CONSTRUCTOR;
	var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
	var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
	var getInternalPromiseState = InternalStateModule$f.getterFor(PROMISE);
	var setInternalState$e = InternalStateModule$f.set;
	var NativePromisePrototype$2 = NativePromiseConstructor$3 && NativePromiseConstructor$3.prototype;
	var PromiseConstructor = NativePromiseConstructor$3;
	var PromisePrototype = NativePromisePrototype$2;
	var TypeError$4 = global$s.TypeError;
	var document$1 = global$s.document;
	var process = global$s.process;
	var newPromiseCapability$1 = newPromiseCapabilityModule$6.f;
	var newGenericPromiseCapability = newPromiseCapability$1;
	var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && global$s.dispatchEvent);
	var UNHANDLED_REJECTION = 'unhandledrejection';
	var REJECTION_HANDLED = 'rejectionhandled';
	var PENDING = 0;
	var FULFILLED = 1;
	var REJECTED = 2;
	var HANDLED = 1;
	var UNHANDLED = 2;
	var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

	// helpers
	var isThenable = function isThenable(it) {
	  var then;
	  return isObject$o(it) && isCallable$g(then = it.then) ? then : false;
	};
	var callReaction = function callReaction(reaction, state) {
	  var value = state.value;
	  var ok = state.state === FULFILLED;
	  var handler = ok ? reaction.ok : reaction.fail;
	  var resolve = reaction.resolve;
	  var reject = reaction.reject;
	  var domain = reaction.domain;
	  var result, then, exited;
	  try {
	    if (handler) {
	      if (!ok) {
	        if (state.rejection === UNHANDLED) onHandleUnhandled(state);
	        state.rejection = HANDLED;
	      }
	      if (handler === true) result = value;else {
	        if (domain) domain.enter();
	        result = handler(value); // can throw
	        if (domain) {
	          domain.exit();
	          exited = true;
	        }
	      }
	      if (result === reaction.promise) {
	        reject(new TypeError$4('Promise-chain cycle'));
	      } else if (then = isThenable(result)) {
	        call$V(then, result, resolve, reject);
	      } else resolve(result);
	    } else reject(value);
	  } catch (error) {
	    if (domain && !exited) domain.exit();
	    reject(error);
	  }
	};
	var notify = function notify(state, isReject) {
	  if (state.notified) return;
	  state.notified = true;
	  microtask$1(function () {
	    var reactions = state.reactions;
	    var reaction;
	    while (reaction = reactions.get()) {
	      callReaction(reaction, state);
	    }
	    state.notified = false;
	    if (isReject && !state.rejection) onUnhandled(state);
	  });
	};
	var dispatchEvent = function dispatchEvent(name, promise, reason) {
	  var event, handler;
	  if (DISPATCH_EVENT) {
	    event = document$1.createEvent('Event');
	    event.promise = promise;
	    event.reason = reason;
	    event.initEvent(name, false, true);
	    global$s.dispatchEvent(event);
	  } else event = {
	    promise: promise,
	    reason: reason
	  };
	  if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = global$s['on' + name])) handler(event);else if (name === UNHANDLED_REJECTION) hostReportErrors$1('Unhandled promise rejection', reason);
	};
	var onUnhandled = function onUnhandled(state) {
	  call$V(task, global$s, function () {
	    var promise = state.facade;
	    var value = state.value;
	    var IS_UNHANDLED = isUnhandled(state);
	    var result;
	    if (IS_UNHANDLED) {
	      result = perform$6(function () {
	        if (IS_NODE) {
	          process.emit('unhandledRejection', value, promise);
	        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
	      if (result.error) throw result.value;
	    }
	  });
	};
	var isUnhandled = function isUnhandled(state) {
	  return state.rejection !== HANDLED && !state.parent;
	};
	var onHandleUnhandled = function onHandleUnhandled(state) {
	  call$V(task, global$s, function () {
	    var promise = state.facade;
	    if (IS_NODE) {
	      process.emit('rejectionHandled', promise);
	    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
	  });
	};
	var bind$h = function bind(fn, state, unwrap) {
	  return function (value) {
	    fn(state, value, unwrap);
	  };
	};
	var internalReject = function internalReject(state, value, unwrap) {
	  if (state.done) return;
	  state.done = true;
	  if (unwrap) state = unwrap;
	  state.value = value;
	  state.state = REJECTED;
	  notify(state, true);
	};
	var internalResolve = function internalResolve(state, value, unwrap) {
	  if (state.done) return;
	  state.done = true;
	  if (unwrap) state = unwrap;
	  try {
	    if (state.facade === value) throw new TypeError$4("Promise can't be resolved itself");
	    var then = isThenable(value);
	    if (then) {
	      microtask$1(function () {
	        var wrapper = {
	          done: false
	        };
	        try {
	          call$V(then, value, bind$h(internalResolve, wrapper, state), bind$h(internalReject, wrapper, state));
	        } catch (error) {
	          internalReject(wrapper, error, state);
	        }
	      });
	    } else {
	      state.value = value;
	      state.state = FULFILLED;
	      notify(state, false);
	    }
	  } catch (error) {
	    internalReject({
	      done: false
	    }, error, state);
	  }
	};

	// constructor polyfill
	if (FORCED_PROMISE_CONSTRUCTOR$4) {
	  // 25.4.3.1 Promise(executor)
	  PromiseConstructor = function Promise(executor) {
	    anInstance$8(this, PromisePrototype);
	    aCallable$u(executor);
	    call$V(Internal, this);
	    var state = getInternalPromiseState(this);
	    try {
	      executor(bind$h(internalResolve, state), bind$h(internalReject, state));
	    } catch (error) {
	      internalReject(state, error);
	    }
	  };
	  PromisePrototype = PromiseConstructor.prototype;

	  // eslint-disable-next-line no-unused-vars -- required for `.length`
	  Internal = function Promise(executor) {
	    setInternalState$e(this, {
	      type: PROMISE,
	      done: false,
	      notified: false,
	      parent: false,
	      reactions: new Queue(),
	      rejection: false,
	      state: PENDING,
	      value: undefined
	    });
	  };

	  // `Promise.prototype.then` method
	  // https://tc39.es/ecma262/#sec-promise.prototype.then
	  Internal.prototype = defineBuiltIn$b(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
	    var state = getInternalPromiseState(this);
	    var reaction = newPromiseCapability$1(speciesConstructor$4(this, PromiseConstructor));
	    state.parent = true;
	    reaction.ok = isCallable$g(onFulfilled) ? onFulfilled : true;
	    reaction.fail = isCallable$g(onRejected) && onRejected;
	    reaction.domain = IS_NODE ? process.domain : undefined;
	    if (state.state === PENDING) state.reactions.add(reaction);else microtask$1(function () {
	      callReaction(reaction, state);
	    });
	    return reaction.promise;
	  });
	  OwnPromiseCapability = function OwnPromiseCapability() {
	    var promise = new Internal();
	    var state = getInternalPromiseState(promise);
	    this.promise = promise;
	    this.resolve = bind$h(internalResolve, state);
	    this.reject = bind$h(internalReject, state);
	  };
	  newPromiseCapabilityModule$6.f = newPromiseCapability$1 = function newPromiseCapability(C) {
	    return C === PromiseConstructor || C === PromiseWrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
	  };
	  if (isCallable$g(NativePromiseConstructor$3) && NativePromisePrototype$2 !== Object.prototype) {
	    nativeThen = NativePromisePrototype$2.then;
	    if (!NATIVE_PROMISE_SUBCLASSING) {
	      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
	      defineBuiltIn$b(NativePromisePrototype$2, 'then', function then(onFulfilled, onRejected) {
	        var that = this;
	        return new PromiseConstructor(function (resolve, reject) {
	          call$V(nativeThen, that, resolve, reject);
	        }).then(onFulfilled, onRejected);
	        // https://github.com/zloirock/core-js/issues/640
	      }, {
	        unsafe: true
	      });
	    }

	    // make `.constructor === Promise` work for native promise-based APIs
	    try {
	      delete NativePromisePrototype$2.constructor;
	    } catch (error) {/* empty */}

	    // make `instanceof Promise` work for native promise-based APIs
	    if (setPrototypeOf$4) {
	      setPrototypeOf$4(NativePromisePrototype$2, PromisePrototype);
	    }
	  }
	}
	$$2r({
	  global: true,
	  constructor: true,
	  wrap: true,
	  forced: FORCED_PROMISE_CONSTRUCTOR$4
	}, {
	  Promise: PromiseConstructor
	});
	setToStringTag$4(PromiseConstructor, PROMISE, false);
	setSpecies$3(PROMISE);

	var NativePromiseConstructor$2 = promiseNativeConstructor;
	var checkCorrectnessOfIteration$1 = checkCorrectnessOfIteration$4;
	var FORCED_PROMISE_CONSTRUCTOR$3 = promiseConstructorDetection.CONSTRUCTOR;
	var promiseStaticsIncorrectIteration = FORCED_PROMISE_CONSTRUCTOR$3 || !checkCorrectnessOfIteration$1(function (iterable) {
	  NativePromiseConstructor$2.all(iterable).then(undefined, function () {/* empty */});
	});

	var $$2q = _export;
	var call$U = functionCall;
	var aCallable$t = aCallable$F;
	var newPromiseCapabilityModule$5 = newPromiseCapability$2;
	var perform$5 = perform$7;
	var iterate$A = iterate$E;
	var PROMISE_STATICS_INCORRECT_ITERATION$3 = promiseStaticsIncorrectIteration;

	// `Promise.all` method
	// https://tc39.es/ecma262/#sec-promise.all
	$$2q({
	  target: 'Promise',
	  stat: true,
	  forced: PROMISE_STATICS_INCORRECT_ITERATION$3
	}, {
	  all: function all(iterable) {
	    var C = this;
	    var capability = newPromiseCapabilityModule$5.f(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = perform$5(function () {
	      var $promiseResolve = aCallable$t(C.resolve);
	      var values = [];
	      var counter = 0;
	      var remaining = 1;
	      iterate$A(iterable, function (promise) {
	        var index = counter++;
	        var alreadyCalled = false;
	        remaining++;
	        call$U($promiseResolve, C, promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if (result.error) reject(result.value);
	    return capability.promise;
	  }
	});

	var $$2p = _export;
	var FORCED_PROMISE_CONSTRUCTOR$2 = promiseConstructorDetection.CONSTRUCTOR;
	var NativePromiseConstructor$1 = promiseNativeConstructor;
	var getBuiltIn$h = getBuiltIn$r;
	var isCallable$f = isCallable$E;
	var defineBuiltIn$a = defineBuiltIn$l;
	var NativePromisePrototype$1 = NativePromiseConstructor$1 && NativePromiseConstructor$1.prototype;

	// `Promise.prototype.catch` method
	// https://tc39.es/ecma262/#sec-promise.prototype.catch
	$$2p({
	  target: 'Promise',
	  proto: true,
	  forced: FORCED_PROMISE_CONSTRUCTOR$2,
	  real: true
	}, {
	  'catch': function _catch(onRejected) {
	    return this.then(undefined, onRejected);
	  }
	});

	// makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
	if (isCallable$f(NativePromiseConstructor$1)) {
	  var method$1 = getBuiltIn$h('Promise').prototype['catch'];
	  if (NativePromisePrototype$1['catch'] !== method$1) {
	    defineBuiltIn$a(NativePromisePrototype$1, 'catch', method$1, {
	      unsafe: true
	    });
	  }
	}

	var $$2o = _export;
	var call$T = functionCall;
	var aCallable$s = aCallable$F;
	var newPromiseCapabilityModule$4 = newPromiseCapability$2;
	var perform$4 = perform$7;
	var iterate$z = iterate$E;
	var PROMISE_STATICS_INCORRECT_ITERATION$2 = promiseStaticsIncorrectIteration;

	// `Promise.race` method
	// https://tc39.es/ecma262/#sec-promise.race
	$$2o({
	  target: 'Promise',
	  stat: true,
	  forced: PROMISE_STATICS_INCORRECT_ITERATION$2
	}, {
	  race: function race(iterable) {
	    var C = this;
	    var capability = newPromiseCapabilityModule$4.f(C);
	    var reject = capability.reject;
	    var result = perform$4(function () {
	      var $promiseResolve = aCallable$s(C.resolve);
	      iterate$z(iterable, function (promise) {
	        call$T($promiseResolve, C, promise).then(capability.resolve, reject);
	      });
	    });
	    if (result.error) reject(result.value);
	    return capability.promise;
	  }
	});

	var $$2n = _export;
	var newPromiseCapabilityModule$3 = newPromiseCapability$2;
	var FORCED_PROMISE_CONSTRUCTOR$1 = promiseConstructorDetection.CONSTRUCTOR;

	// `Promise.reject` method
	// https://tc39.es/ecma262/#sec-promise.reject
	$$2n({
	  target: 'Promise',
	  stat: true,
	  forced: FORCED_PROMISE_CONSTRUCTOR$1
	}, {
	  reject: function reject(r) {
	    var capability = newPromiseCapabilityModule$3.f(this);
	    var capabilityReject = capability.reject;
	    capabilityReject(r);
	    return capability.promise;
	  }
	});

	var anObject$Z = anObject$1a;
	var isObject$n = isObject$J;
	var newPromiseCapability = newPromiseCapability$2;
	var promiseResolve$2 = function promiseResolve(C, x) {
	  anObject$Z(C);
	  if (isObject$n(x) && x.constructor === C) return x;
	  var promiseCapability = newPromiseCapability.f(C);
	  var resolve = promiseCapability.resolve;
	  resolve(x);
	  return promiseCapability.promise;
	};

	var $$2m = _export;
	var getBuiltIn$g = getBuiltIn$r;
	var FORCED_PROMISE_CONSTRUCTOR = promiseConstructorDetection.CONSTRUCTOR;
	var promiseResolve$1 = promiseResolve$2;
	getBuiltIn$g('Promise');

	// `Promise.resolve` method
	// https://tc39.es/ecma262/#sec-promise.resolve
	$$2m({
	  target: 'Promise',
	  stat: true,
	  forced: FORCED_PROMISE_CONSTRUCTOR
	}, {
	  resolve: function resolve(x) {
	    return promiseResolve$1(this, x);
	  }
	});

	var $$2l = _export;
	var call$S = functionCall;
	var aCallable$r = aCallable$F;
	var newPromiseCapabilityModule$2 = newPromiseCapability$2;
	var perform$3 = perform$7;
	var iterate$y = iterate$E;
	var PROMISE_STATICS_INCORRECT_ITERATION$1 = promiseStaticsIncorrectIteration;

	// `Promise.allSettled` method
	// https://tc39.es/ecma262/#sec-promise.allsettled
	$$2l({
	  target: 'Promise',
	  stat: true,
	  forced: PROMISE_STATICS_INCORRECT_ITERATION$1
	}, {
	  allSettled: function allSettled(iterable) {
	    var C = this;
	    var capability = newPromiseCapabilityModule$2.f(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = perform$3(function () {
	      var promiseResolve = aCallable$r(C.resolve);
	      var values = [];
	      var counter = 0;
	      var remaining = 1;
	      iterate$y(iterable, function (promise) {
	        var index = counter++;
	        var alreadyCalled = false;
	        remaining++;
	        call$S(promiseResolve, C, promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[index] = {
	            status: 'fulfilled',
	            value: value
	          };
	          --remaining || resolve(values);
	        }, function (error) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[index] = {
	            status: 'rejected',
	            reason: error
	          };
	          --remaining || resolve(values);
	        });
	      });
	      --remaining || resolve(values);
	    });
	    if (result.error) reject(result.value);
	    return capability.promise;
	  }
	});

	var $$2k = _export;
	var NativePromiseConstructor = promiseNativeConstructor;
	var fails$s = fails$13;
	var getBuiltIn$f = getBuiltIn$r;
	var isCallable$e = isCallable$E;
	var speciesConstructor$3 = speciesConstructor$5;
	var promiseResolve = promiseResolve$2;
	var defineBuiltIn$9 = defineBuiltIn$l;
	var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

	// Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
	var NON_GENERIC = !!NativePromiseConstructor && fails$s(function () {
	  // eslint-disable-next-line unicorn/no-thenable -- required for testing
	  NativePromisePrototype['finally'].call({
	    then: function then() {/* empty */}
	  }, function () {/* empty */});
	});

	// `Promise.prototype.finally` method
	// https://tc39.es/ecma262/#sec-promise.prototype.finally
	$$2k({
	  target: 'Promise',
	  proto: true,
	  real: true,
	  forced: NON_GENERIC
	}, {
	  'finally': function _finally(onFinally) {
	    var C = speciesConstructor$3(this, getBuiltIn$f('Promise'));
	    var isFunction = isCallable$e(onFinally);
	    return this.then(isFunction ? function (x) {
	      return promiseResolve(C, onFinally()).then(function () {
	        return x;
	      });
	    } : onFinally, isFunction ? function (e) {
	      return promiseResolve(C, onFinally()).then(function () {
	        throw e;
	      });
	    } : onFinally);
	  }
	});

	// makes sure that native promise-based APIs `Promise#finally` properly works with patched `Promise#then`
	if (isCallable$e(NativePromiseConstructor)) {
	  var method = getBuiltIn$f('Promise').prototype['finally'];
	  if (NativePromisePrototype['finally'] !== method) {
	    defineBuiltIn$9(NativePromisePrototype, 'finally', method, {
	      unsafe: true
	    });
	  }
	}

	var $$2j = _export;
	var functionApply = functionApply$1;
	var aCallable$q = aCallable$F;
	var anObject$Y = anObject$1a;
	var fails$r = fails$13;

	// MS Edge argumentsList argument is optional
	var OPTIONAL_ARGUMENTS_LIST = !fails$r(function () {
	  // eslint-disable-next-line es/no-reflect -- required for testing
	  Reflect.apply(function () {/* empty */});
	});

	// `Reflect.apply` method
	// https://tc39.es/ecma262/#sec-reflect.apply
	$$2j({
	  target: 'Reflect',
	  stat: true,
	  forced: OPTIONAL_ARGUMENTS_LIST
	}, {
	  apply: function apply(target, thisArgument, argumentsList) {
	    return functionApply(aCallable$q(target), thisArgument, anObject$Y(argumentsList));
	  }
	});

	var uncurryThis$E = functionUncurryThis;
	var aCallable$p = aCallable$F;
	var isObject$m = isObject$J;
	var hasOwn$c = hasOwnProperty_1;
	var arraySlice$6 = arraySlice$b;
	var NATIVE_BIND = functionBindNative;
	var $Function = Function;
	var concat$2 = uncurryThis$E([].concat);
	var join$6 = uncurryThis$E([].join);
	var factories = {};
	var construct = function construct(C, argsLength, args) {
	  if (!hasOwn$c(factories, argsLength)) {
	    var list = [];
	    var i = 0;
	    for (; i < argsLength; i++) list[i] = 'a[' + i + ']';
	    factories[argsLength] = $Function('C,a', 'return new C(' + join$6(list, ',') + ')');
	  }
	  return factories[argsLength](C, args);
	};

	// `Function.prototype.bind` method implementation
	// https://tc39.es/ecma262/#sec-function.prototype.bind
	// eslint-disable-next-line es/no-function-prototype-bind -- detection
	var functionBind = NATIVE_BIND ? $Function.bind : function bind(that /* , ...args */) {
	  var F = aCallable$p(this);
	  var Prototype = F.prototype;
	  var partArgs = arraySlice$6(arguments, 1);
	  var boundFunction = function bound( /* args... */
	  ) {
	    var args = concat$2(partArgs, arraySlice$6(arguments));
	    return this instanceof boundFunction ? construct(F, args.length, args) : F.apply(that, args);
	  };
	  if (isObject$m(Prototype)) boundFunction.prototype = Prototype;
	  return boundFunction;
	};

	var $$2i = _export;
	var getBuiltIn$e = getBuiltIn$r;
	var apply$7 = functionApply$1;
	var bind$g = functionBind;
	var aConstructor$1 = aConstructor$3;
	var anObject$X = anObject$1a;
	var isObject$l = isObject$J;
	var create$a = objectCreate;
	var fails$q = fails$13;
	var nativeConstruct = getBuiltIn$e('Reflect', 'construct');
	var ObjectPrototype$2 = Object.prototype;
	var push$c = [].push;

	// `Reflect.construct` method
	// https://tc39.es/ecma262/#sec-reflect.construct
	// MS Edge supports only 2 arguments and argumentsList argument is optional
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	var NEW_TARGET_BUG = fails$q(function () {
	  function F() {/* empty */}
	  return !(nativeConstruct(function () {/* empty */}, [], F) instanceof F);
	});
	var ARGS_BUG = !fails$q(function () {
	  nativeConstruct(function () {/* empty */});
	});
	var FORCED$4 = NEW_TARGET_BUG || ARGS_BUG;
	$$2i({
	  target: 'Reflect',
	  stat: true,
	  forced: FORCED$4,
	  sham: FORCED$4
	}, {
	  construct: function construct(Target, args /* , newTarget */) {
	    aConstructor$1(Target);
	    anObject$X(args);
	    var newTarget = arguments.length < 3 ? Target : aConstructor$1(arguments[2]);
	    if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);
	    if (Target === newTarget) {
	      // w/o altered newTarget, optimization for 0-4 arguments
	      switch (args.length) {
	        case 0:
	          return new Target();
	        case 1:
	          return new Target(args[0]);
	        case 2:
	          return new Target(args[0], args[1]);
	        case 3:
	          return new Target(args[0], args[1], args[2]);
	        case 4:
	          return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      apply$7(push$c, $args, args);
	      return new (apply$7(bind$g, Target, $args))();
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto = newTarget.prototype;
	    var instance = create$a(isObject$l(proto) ? proto : ObjectPrototype$2);
	    var result = apply$7(Target, instance, args);
	    return isObject$l(result) ? result : instance;
	  }
	});

	var $$2h = _export;
	var DESCRIPTORS$e = descriptors;
	var anObject$W = anObject$1a;
	var toPropertyKey$1 = toPropertyKey$8;
	var definePropertyModule$2 = objectDefineProperty;
	var fails$p = fails$13;

	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	var ERROR_INSTEAD_OF_FALSE = fails$p(function () {
	  // eslint-disable-next-line es/no-reflect -- required for testing
	  Reflect.defineProperty(definePropertyModule$2.f({}, 1, {
	    value: 1
	  }), 1, {
	    value: 2
	  });
	});

	// `Reflect.defineProperty` method
	// https://tc39.es/ecma262/#sec-reflect.defineproperty
	$$2h({
	  target: 'Reflect',
	  stat: true,
	  forced: ERROR_INSTEAD_OF_FALSE,
	  sham: !DESCRIPTORS$e
	}, {
	  defineProperty: function defineProperty(target, propertyKey, attributes) {
	    anObject$W(target);
	    var key = toPropertyKey$1(propertyKey);
	    anObject$W(attributes);
	    try {
	      definePropertyModule$2.f(target, key, attributes);
	      return true;
	    } catch (error) {
	      return false;
	    }
	  }
	});

	var $$2g = _export;
	var anObject$V = anObject$1a;
	var getOwnPropertyDescriptor$4 = objectGetOwnPropertyDescriptor.f;

	// `Reflect.deleteProperty` method
	// https://tc39.es/ecma262/#sec-reflect.deleteproperty
	$$2g({
	  target: 'Reflect',
	  stat: true
	}, {
	  deleteProperty: function deleteProperty(target, propertyKey) {
	    var descriptor = getOwnPropertyDescriptor$4(anObject$V(target), propertyKey);
	    return descriptor && !descriptor.configurable ? false : delete target[propertyKey];
	  }
	});

	var hasOwn$b = hasOwnProperty_1;
	var isDataDescriptor$2 = function isDataDescriptor(descriptor) {
	  return descriptor !== undefined && (hasOwn$b(descriptor, 'value') || hasOwn$b(descriptor, 'writable'));
	};

	var $$2f = _export;
	var call$R = functionCall;
	var isObject$k = isObject$J;
	var anObject$U = anObject$1a;
	var isDataDescriptor$1 = isDataDescriptor$2;
	var getOwnPropertyDescriptorModule$3 = objectGetOwnPropertyDescriptor;
	var getPrototypeOf$a = objectGetPrototypeOf$2;

	// `Reflect.get` method
	// https://tc39.es/ecma262/#sec-reflect.get
	function get$3(target, propertyKey /* , receiver */) {
	  var receiver = arguments.length < 3 ? target : arguments[2];
	  var descriptor, prototype;
	  if (anObject$U(target) === receiver) return target[propertyKey];
	  descriptor = getOwnPropertyDescriptorModule$3.f(target, propertyKey);
	  if (descriptor) return isDataDescriptor$1(descriptor) ? descriptor.value : descriptor.get === undefined ? undefined : call$R(descriptor.get, receiver);
	  if (isObject$k(prototype = getPrototypeOf$a(target))) return get$3(prototype, propertyKey, receiver);
	}
	$$2f({
	  target: 'Reflect',
	  stat: true
	}, {
	  get: get$3
	});

	var $$2e = _export;
	var DESCRIPTORS$d = descriptors;
	var anObject$T = anObject$1a;
	var getOwnPropertyDescriptorModule$2 = objectGetOwnPropertyDescriptor;

	// `Reflect.getOwnPropertyDescriptor` method
	// https://tc39.es/ecma262/#sec-reflect.getownpropertydescriptor
	$$2e({
	  target: 'Reflect',
	  stat: true,
	  sham: !DESCRIPTORS$d
	}, {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
	    return getOwnPropertyDescriptorModule$2.f(anObject$T(target), propertyKey);
	  }
	});

	var $$2d = _export;
	var anObject$S = anObject$1a;
	var objectGetPrototypeOf = objectGetPrototypeOf$2;
	var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

	// `Reflect.getPrototypeOf` method
	// https://tc39.es/ecma262/#sec-reflect.getprototypeof
	$$2d({
	  target: 'Reflect',
	  stat: true,
	  sham: !CORRECT_PROTOTYPE_GETTER
	}, {
	  getPrototypeOf: function getPrototypeOf(target) {
	    return objectGetPrototypeOf(anObject$S(target));
	  }
	});

	var $$2c = _export;

	// `Reflect.has` method
	// https://tc39.es/ecma262/#sec-reflect.has
	$$2c({
	  target: 'Reflect',
	  stat: true
	}, {
	  has: function has(target, propertyKey) {
	    return propertyKey in target;
	  }
	});

	var $$2b = _export;
	var anObject$R = anObject$1a;
	var $isExtensible = objectIsExtensible;

	// `Reflect.isExtensible` method
	// https://tc39.es/ecma262/#sec-reflect.isextensible
	$$2b({
	  target: 'Reflect',
	  stat: true
	}, {
	  isExtensible: function isExtensible(target) {
	    anObject$R(target);
	    return $isExtensible(target);
	  }
	});

	var $$2a = _export;
	var ownKeys$1 = ownKeys$4;

	// `Reflect.ownKeys` method
	// https://tc39.es/ecma262/#sec-reflect.ownkeys
	$$2a({
	  target: 'Reflect',
	  stat: true
	}, {
	  ownKeys: ownKeys$1
	});

	var $$29 = _export;
	var getBuiltIn$d = getBuiltIn$r;
	var anObject$Q = anObject$1a;
	var FREEZING$1 = freezing;

	// `Reflect.preventExtensions` method
	// https://tc39.es/ecma262/#sec-reflect.preventextensions
	$$29({
	  target: 'Reflect',
	  stat: true,
	  sham: !FREEZING$1
	}, {
	  preventExtensions: function preventExtensions(target) {
	    anObject$Q(target);
	    try {
	      var objectPreventExtensions = getBuiltIn$d('Object', 'preventExtensions');
	      if (objectPreventExtensions) objectPreventExtensions(target);
	      return true;
	    } catch (error) {
	      return false;
	    }
	  }
	});

	var $$28 = _export;
	var call$Q = functionCall;
	var anObject$P = anObject$1a;
	var isObject$j = isObject$J;
	var isDataDescriptor = isDataDescriptor$2;
	var fails$o = fails$13;
	var definePropertyModule$1 = objectDefineProperty;
	var getOwnPropertyDescriptorModule$1 = objectGetOwnPropertyDescriptor;
	var getPrototypeOf$9 = objectGetPrototypeOf$2;
	var createPropertyDescriptor$4 = createPropertyDescriptor$a;

	// `Reflect.set` method
	// https://tc39.es/ecma262/#sec-reflect.set
	function set$7(target, propertyKey, V /* , receiver */) {
	  var receiver = arguments.length < 4 ? target : arguments[3];
	  var ownDescriptor = getOwnPropertyDescriptorModule$1.f(anObject$P(target), propertyKey);
	  var existingDescriptor, prototype, setter;
	  if (!ownDescriptor) {
	    if (isObject$j(prototype = getPrototypeOf$9(target))) {
	      return set$7(prototype, propertyKey, V, receiver);
	    }
	    ownDescriptor = createPropertyDescriptor$4(0);
	  }
	  if (isDataDescriptor(ownDescriptor)) {
	    if (ownDescriptor.writable === false || !isObject$j(receiver)) return false;
	    if (existingDescriptor = getOwnPropertyDescriptorModule$1.f(receiver, propertyKey)) {
	      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
	      existingDescriptor.value = V;
	      definePropertyModule$1.f(receiver, propertyKey, existingDescriptor);
	    } else definePropertyModule$1.f(receiver, propertyKey, createPropertyDescriptor$4(0, V));
	  } else {
	    setter = ownDescriptor.set;
	    if (setter === undefined) return false;
	    call$Q(setter, receiver, V);
	  }
	  return true;
	}

	// MS Edge 17-18 Reflect.set allows setting the property to object
	// with non-writable property on the prototype
	var MS_EDGE_BUG = fails$o(function () {
	  var Constructor = function Constructor() {/* empty */};
	  var object = definePropertyModule$1.f(new Constructor(), 'a', {
	    configurable: true
	  });
	  // eslint-disable-next-line es/no-reflect -- required for testing
	  return Reflect.set(Constructor.prototype, 'a', 1, object) !== false;
	});
	$$28({
	  target: 'Reflect',
	  stat: true,
	  forced: MS_EDGE_BUG
	}, {
	  set: set$7
	});

	var $$27 = _export;
	var anObject$O = anObject$1a;
	var aPossiblePrototype = aPossiblePrototype$2;
	var objectSetPrototypeOf = objectSetPrototypeOf$1;

	// `Reflect.setPrototypeOf` method
	// https://tc39.es/ecma262/#sec-reflect.setprototypeof
	if (objectSetPrototypeOf) $$27({
	  target: 'Reflect',
	  stat: true
	}, {
	  setPrototypeOf: function setPrototypeOf(target, proto) {
	    anObject$O(target);
	    aPossiblePrototype(proto);
	    try {
	      objectSetPrototypeOf(target, proto);
	      return true;
	    } catch (error) {
	      return false;
	    }
	  }
	});

	var isObject$i = isObject$J;
	var classof$9 = classofRaw$2;
	var wellKnownSymbol$l = wellKnownSymbol$I;
	var MATCH$2 = wellKnownSymbol$l('match');

	// `IsRegExp` abstract operation
	// https://tc39.es/ecma262/#sec-isregexp
	var isRegexp = function isRegexp(it) {
	  var isRegExp;
	  return isObject$i(it) && ((isRegExp = it[MATCH$2]) !== undefined ? !!isRegExp : classof$9(it) === 'RegExp');
	};

	var anObject$N = anObject$1a;

	// `RegExp.prototype.flags` getter implementation
	// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
	var regexpFlags$1 = function regexpFlags() {
	  var that = anObject$N(this);
	  var result = '';
	  if (that.hasIndices) result += 'd';
	  if (that.global) result += 'g';
	  if (that.ignoreCase) result += 'i';
	  if (that.multiline) result += 'm';
	  if (that.dotAll) result += 's';
	  if (that.unicode) result += 'u';
	  if (that.unicodeSets) result += 'v';
	  if (that.sticky) result += 'y';
	  return result;
	};

	var call$P = functionCall;
	var hasOwn$a = hasOwnProperty_1;
	var isPrototypeOf$6 = objectIsPrototypeOf;
	var regExpFlags$1 = regexpFlags$1;
	var RegExpPrototype$6 = RegExp.prototype;
	var regexpGetFlags = function regexpGetFlags(R) {
	  var flags = R.flags;
	  return flags === undefined && !('flags' in RegExpPrototype$6) && !hasOwn$a(R, 'flags') && isPrototypeOf$6(RegExpPrototype$6, R) ? call$P(regExpFlags$1, R) : flags;
	};

	var fails$n = fails$13;
	var global$r = global$R;

	// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
	var $RegExp$2 = global$r.RegExp;
	var UNSUPPORTED_Y$3 = fails$n(function () {
	  var re = $RegExp$2('a', 'y');
	  re.lastIndex = 2;
	  return re.exec('abcd') !== null;
	});

	// UC Browser bug
	// https://github.com/zloirock/core-js/issues/1008
	var MISSED_STICKY$2 = UNSUPPORTED_Y$3 || fails$n(function () {
	  return !$RegExp$2('a', 'y').sticky;
	});
	var BROKEN_CARET = UNSUPPORTED_Y$3 || fails$n(function () {
	  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
	  var re = $RegExp$2('^r', 'gy');
	  re.lastIndex = 2;
	  return re.exec('str') !== null;
	});
	var regexpStickyHelpers = {
	  BROKEN_CARET: BROKEN_CARET,
	  MISSED_STICKY: MISSED_STICKY$2,
	  UNSUPPORTED_Y: UNSUPPORTED_Y$3
	};

	var defineProperty$2 = objectDefineProperty.f;
	var proxyAccessor$1 = function proxyAccessor(Target, Source, key) {
	  key in Target || defineProperty$2(Target, key, {
	    configurable: true,
	    get: function get() {
	      return Source[key];
	    },
	    set: function set(it) {
	      Source[key] = it;
	    }
	  });
	};

	var fails$m = fails$13;
	var global$q = global$R;

	// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
	var $RegExp$1 = global$q.RegExp;
	var regexpUnsupportedDotAll = fails$m(function () {
	  var re = $RegExp$1('.', 's');
	  return !(re.dotAll && re.test('\n') && re.flags === 's');
	});

	var fails$l = fails$13;
	var global$p = global$R;

	// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
	var $RegExp = global$p.RegExp;
	var regexpUnsupportedNcg = fails$l(function () {
	  var re = $RegExp('(?<a>b)', 'g');
	  return re.exec('b').groups.a !== 'b' || 'b'.replace(re, '$<a>c') !== 'bc';
	});

	var DESCRIPTORS$c = descriptors;
	var global$o = global$R;
	var uncurryThis$D = functionUncurryThis;
	var isForced = isForced_1;
	var inheritIfRequired$2 = inheritIfRequired$5;
	var createNonEnumerableProperty$c = createNonEnumerableProperty$g;
	var create$9 = objectCreate;
	var getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
	var isPrototypeOf$5 = objectIsPrototypeOf;
	var isRegExp$4 = isRegexp;
	var toString$k = toString$r;
	var getRegExpFlags$3 = regexpGetFlags;
	var stickyHelpers$2 = regexpStickyHelpers;
	var proxyAccessor = proxyAccessor$1;
	var defineBuiltIn$8 = defineBuiltIn$l;
	var fails$k = fails$13;
	var hasOwn$9 = hasOwnProperty_1;
	var enforceInternalState$3 = internalState.enforce;
	var setSpecies$2 = setSpecies$6;
	var wellKnownSymbol$k = wellKnownSymbol$I;
	var UNSUPPORTED_DOT_ALL$1 = regexpUnsupportedDotAll;
	var UNSUPPORTED_NCG$1 = regexpUnsupportedNcg;
	var MATCH$1 = wellKnownSymbol$k('match');
	var NativeRegExp = global$o.RegExp;
	var RegExpPrototype$5 = NativeRegExp.prototype;
	var SyntaxError$1 = global$o.SyntaxError;
	var exec$5 = uncurryThis$D(RegExpPrototype$5.exec);
	var charAt$a = uncurryThis$D(''.charAt);
	var replace$6 = uncurryThis$D(''.replace);
	var stringIndexOf$4 = uncurryThis$D(''.indexOf);
	var stringSlice$b = uncurryThis$D(''.slice);
	// TODO: Use only proper RegExpIdentifierName
	var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
	var re1 = /a/g;
	var re2 = /a/g;

	// "new" should create a new object, old webkit bug
	var CORRECT_NEW = new NativeRegExp(re1) !== re1;
	var MISSED_STICKY$1 = stickyHelpers$2.MISSED_STICKY;
	var UNSUPPORTED_Y$2 = stickyHelpers$2.UNSUPPORTED_Y;
	var BASE_FORCED = DESCRIPTORS$c && (!CORRECT_NEW || MISSED_STICKY$1 || UNSUPPORTED_DOT_ALL$1 || UNSUPPORTED_NCG$1 || fails$k(function () {
	  re2[MATCH$1] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return NativeRegExp(re1) !== re1 || NativeRegExp(re2) === re2 || String(NativeRegExp(re1, 'i')) !== '/a/i';
	}));
	var handleDotAll = function handleDotAll(string) {
	  var length = string.length;
	  var index = 0;
	  var result = '';
	  var brackets = false;
	  var chr;
	  for (; index <= length; index++) {
	    chr = charAt$a(string, index);
	    if (chr === '\\') {
	      result += chr + charAt$a(string, ++index);
	      continue;
	    }
	    if (!brackets && chr === '.') {
	      result += '[\\s\\S]';
	    } else {
	      if (chr === '[') {
	        brackets = true;
	      } else if (chr === ']') {
	        brackets = false;
	      }
	      result += chr;
	    }
	  }
	  return result;
	};
	var handleNCG = function handleNCG(string) {
	  var length = string.length;
	  var index = 0;
	  var result = '';
	  var named = [];
	  var names = create$9(null);
	  var brackets = false;
	  var ncg = false;
	  var groupid = 0;
	  var groupname = '';
	  var chr;
	  for (; index <= length; index++) {
	    chr = charAt$a(string, index);
	    if (chr === '\\') {
	      chr += charAt$a(string, ++index);
	    } else if (chr === ']') {
	      brackets = false;
	    } else if (!brackets) switch (true) {
	      case chr === '[':
	        brackets = true;
	        break;
	      case chr === '(':
	        if (exec$5(IS_NCG, stringSlice$b(string, index + 1))) {
	          index += 2;
	          ncg = true;
	        }
	        result += chr;
	        groupid++;
	        continue;
	      case chr === '>' && ncg:
	        if (groupname === '' || hasOwn$9(names, groupname)) {
	          throw new SyntaxError$1('Invalid capture group name');
	        }
	        names[groupname] = true;
	        named[named.length] = [groupname, groupid];
	        ncg = false;
	        groupname = '';
	        continue;
	    }
	    if (ncg) groupname += chr;else result += chr;
	  }
	  return [result, named];
	};

	// `RegExp` constructor
	// https://tc39.es/ecma262/#sec-regexp-constructor
	if (isForced('RegExp', BASE_FORCED)) {
	  var RegExpWrapper = function RegExp(pattern, flags) {
	    var thisIsRegExp = isPrototypeOf$5(RegExpPrototype$5, this);
	    var patternIsRegExp = isRegExp$4(pattern);
	    var flagsAreUndefined = flags === undefined;
	    var groups = [];
	    var rawPattern = pattern;
	    var rawFlags, dotAll, sticky, handled, result, state;
	    if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
	      return pattern;
	    }
	    if (patternIsRegExp || isPrototypeOf$5(RegExpPrototype$5, pattern)) {
	      pattern = pattern.source;
	      if (flagsAreUndefined) flags = getRegExpFlags$3(rawPattern);
	    }
	    pattern = pattern === undefined ? '' : toString$k(pattern);
	    flags = flags === undefined ? '' : toString$k(flags);
	    rawPattern = pattern;
	    if (UNSUPPORTED_DOT_ALL$1 && 'dotAll' in re1) {
	      dotAll = !!flags && stringIndexOf$4(flags, 's') > -1;
	      if (dotAll) flags = replace$6(flags, /s/g, '');
	    }
	    rawFlags = flags;
	    if (MISSED_STICKY$1 && 'sticky' in re1) {
	      sticky = !!flags && stringIndexOf$4(flags, 'y') > -1;
	      if (sticky && UNSUPPORTED_Y$2) flags = replace$6(flags, /y/g, '');
	    }
	    if (UNSUPPORTED_NCG$1) {
	      handled = handleNCG(pattern);
	      pattern = handled[0];
	      groups = handled[1];
	    }
	    result = inheritIfRequired$2(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype$5, RegExpWrapper);
	    if (dotAll || sticky || groups.length) {
	      state = enforceInternalState$3(result);
	      if (dotAll) {
	        state.dotAll = true;
	        state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags);
	      }
	      if (sticky) state.sticky = true;
	      if (groups.length) state.groups = groups;
	    }
	    if (pattern !== rawPattern) try {
	      // fails in old engines, but we have no alternatives for unsupported regex syntax
	      createNonEnumerableProperty$c(result, 'source', rawPattern === '' ? '(?:)' : rawPattern);
	    } catch (error) {/* empty */}
	    return result;
	  };
	  for (var keys$1 = getOwnPropertyNames$1(NativeRegExp), index$1 = 0; keys$1.length > index$1;) {
	    proxyAccessor(RegExpWrapper, NativeRegExp, keys$1[index$1++]);
	  }
	  RegExpPrototype$5.constructor = RegExpWrapper;
	  RegExpWrapper.prototype = RegExpPrototype$5;
	  defineBuiltIn$8(global$o, 'RegExp', RegExpWrapper, {
	    constructor: true
	  });
	}

	// https://tc39.es/ecma262/#sec-get-regexp-@@species
	setSpecies$2('RegExp');

	/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
	/* eslint-disable regexp/no-useless-quantifier -- testing */
	var call$O = functionCall;
	var uncurryThis$C = functionUncurryThis;
	var toString$j = toString$r;
	var regexpFlags = regexpFlags$1;
	var stickyHelpers$1 = regexpStickyHelpers;
	var shared$2 = shared$9.exports;
	var create$8 = objectCreate;
	var getInternalState$9 = internalState.get;
	var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
	var UNSUPPORTED_NCG = regexpUnsupportedNcg;
	var nativeReplace = shared$2('native-string-replace', String.prototype.replace);
	var nativeExec = RegExp.prototype.exec;
	var patchedExec = nativeExec;
	var charAt$9 = uncurryThis$C(''.charAt);
	var indexOf$1 = uncurryThis$C(''.indexOf);
	var replace$5 = uncurryThis$C(''.replace);
	var stringSlice$a = uncurryThis$C(''.slice);
	var UPDATES_LAST_INDEX_WRONG = function () {
	  var re1 = /a/;
	  var re2 = /b*/g;
	  call$O(nativeExec, re1, 'a');
	  call$O(nativeExec, re2, 'a');
	  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
	}();
	var UNSUPPORTED_Y$1 = stickyHelpers$1.BROKEN_CARET;

	// nonparticipating capturing group, copied from es5-shim's String#split patch.
	var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
	var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$1 || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;
	if (PATCH) {
	  patchedExec = function exec(string) {
	    var re = this;
	    var state = getInternalState$9(re);
	    var str = toString$j(string);
	    var raw = state.raw;
	    var result, reCopy, lastIndex, match, i, object, group;
	    if (raw) {
	      raw.lastIndex = re.lastIndex;
	      result = call$O(patchedExec, raw, str);
	      re.lastIndex = raw.lastIndex;
	      return result;
	    }
	    var groups = state.groups;
	    var sticky = UNSUPPORTED_Y$1 && re.sticky;
	    var flags = call$O(regexpFlags, re);
	    var source = re.source;
	    var charsAdded = 0;
	    var strCopy = str;
	    if (sticky) {
	      flags = replace$5(flags, 'y', '');
	      if (indexOf$1(flags, 'g') === -1) {
	        flags += 'g';
	      }
	      strCopy = stringSlice$a(str, re.lastIndex);
	      // Support anchored sticky behavior.
	      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$9(str, re.lastIndex - 1) !== '\n')) {
	        source = '(?: ' + source + ')';
	        strCopy = ' ' + strCopy;
	        charsAdded++;
	      }
	      // ^(? + rx + ) is needed, in combination with some str slicing, to
	      // simulate the 'y' flag.
	      reCopy = new RegExp('^(?:' + source + ')', flags);
	    }
	    if (NPCG_INCLUDED) {
	      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
	    }
	    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
	    match = call$O(nativeExec, sticky ? reCopy : re, strCopy);
	    if (sticky) {
	      if (match) {
	        match.input = stringSlice$a(match.input, charsAdded);
	        match[0] = stringSlice$a(match[0], charsAdded);
	        match.index = re.lastIndex;
	        re.lastIndex += match[0].length;
	      } else re.lastIndex = 0;
	    } else if (UPDATES_LAST_INDEX_WRONG && match) {
	      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
	    }
	    if (NPCG_INCLUDED && match && match.length > 1) {
	      // Fix browsers whose `exec` methods don't consistently return `undefined`
	      // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
	      call$O(nativeReplace, match[0], reCopy, function () {
	        for (i = 1; i < arguments.length - 2; i++) {
	          if (arguments[i] === undefined) match[i] = undefined;
	        }
	      });
	    }
	    if (match && groups) {
	      match.groups = object = create$8(null);
	      for (i = 0; i < groups.length; i++) {
	        group = groups[i];
	        object[group[0]] = match[group[1]];
	      }
	    }
	    return match;
	  };
	}
	var regexpExec$3 = patchedExec;

	var $$26 = _export;
	var exec$4 = regexpExec$3;

	// `RegExp.prototype.exec` method
	// https://tc39.es/ecma262/#sec-regexp.prototype.exec
	$$26({
	  target: 'RegExp',
	  proto: true,
	  forced: /./.exec !== exec$4
	}, {
	  exec: exec$4
	});

	var global$n = global$R;
	var DESCRIPTORS$b = descriptors;
	var defineBuiltInAccessor$a = defineBuiltInAccessor$f;
	var regExpFlags = regexpFlags$1;
	var fails$j = fails$13;

	// babel-minify and Closure Compiler transpiles RegExp('.', 'd') -> /./d and it causes SyntaxError
	var RegExp$2 = global$n.RegExp;
	var RegExpPrototype$4 = RegExp$2.prototype;
	var FORCED$3 = DESCRIPTORS$b && fails$j(function () {
	  var INDICES_SUPPORT = true;
	  try {
	    RegExp$2('.', 'd');
	  } catch (error) {
	    INDICES_SUPPORT = false;
	  }
	  var O = {};
	  // modern V8 bug
	  var calls = '';
	  var expected = INDICES_SUPPORT ? 'dgimsy' : 'gimsy';
	  var addGetter = function addGetter(key, chr) {
	    // eslint-disable-next-line es/no-object-defineproperty -- safe
	    Object.defineProperty(O, key, {
	      get: function get() {
	        calls += chr;
	        return true;
	      }
	    });
	  };
	  var pairs = {
	    dotAll: 's',
	    global: 'g',
	    ignoreCase: 'i',
	    multiline: 'm',
	    sticky: 'y'
	  };
	  if (INDICES_SUPPORT) pairs.hasIndices = 'd';
	  for (var key in pairs) addGetter(key, pairs[key]);

	  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	  var result = Object.getOwnPropertyDescriptor(RegExpPrototype$4, 'flags').get.call(O);
	  return result !== expected || calls !== expected;
	});

	// `RegExp.prototype.flags` getter
	// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
	if (FORCED$3) defineBuiltInAccessor$a(RegExpPrototype$4, 'flags', {
	  configurable: true,
	  get: regExpFlags
	});

	var DESCRIPTORS$a = descriptors;
	var MISSED_STICKY = regexpStickyHelpers.MISSED_STICKY;
	var classof$8 = classofRaw$2;
	var defineBuiltInAccessor$9 = defineBuiltInAccessor$f;
	var getInternalState$8 = internalState.get;
	var RegExpPrototype$3 = RegExp.prototype;
	var $TypeError$h = TypeError;

	// `RegExp.prototype.sticky` getter
	// https://tc39.es/ecma262/#sec-get-regexp.prototype.sticky
	if (DESCRIPTORS$a && MISSED_STICKY) {
	  defineBuiltInAccessor$9(RegExpPrototype$3, 'sticky', {
	    configurable: true,
	    get: function sticky() {
	      if (this === RegExpPrototype$3) return;
	      // We can't use InternalStateModule.getterFor because
	      // we don't add metadata for regexps created by a literal.
	      if (classof$8(this) === 'RegExp') {
	        return !!getInternalState$8(this).sticky;
	      }
	      throw new $TypeError$h('Incompatible receiver, RegExp required');
	    }
	  });
	}

	// TODO: Remove from `core-js@4` since it's moved to entry points

	var $$25 = _export;
	var call$N = functionCall;
	var isCallable$d = isCallable$E;
	var anObject$M = anObject$1a;
	var toString$i = toString$r;
	var DELEGATES_TO_EXEC = function () {
	  var execCalled = false;
	  var re = /[ac]/;
	  re.exec = function () {
	    execCalled = true;
	    return /./.exec.apply(this, arguments);
	  };
	  return re.test('abc') === true && execCalled;
	}();
	var nativeTest = /./.test;

	// `RegExp.prototype.test` method
	// https://tc39.es/ecma262/#sec-regexp.prototype.test
	$$25({
	  target: 'RegExp',
	  proto: true,
	  forced: !DELEGATES_TO_EXEC
	}, {
	  test: function test(S) {
	    var R = anObject$M(this);
	    var string = toString$i(S);
	    var exec = R.exec;
	    if (!isCallable$d(exec)) return call$N(nativeTest, R, string);
	    var result = call$N(exec, R, string);
	    if (result === null) return false;
	    anObject$M(result);
	    return true;
	  }
	});

	var PROPER_FUNCTION_NAME$2 = functionName.PROPER;
	var defineBuiltIn$7 = defineBuiltIn$l;
	var anObject$L = anObject$1a;
	var $toString$2 = toString$r;
	var fails$i = fails$13;
	var getRegExpFlags$2 = regexpGetFlags;
	var TO_STRING = 'toString';
	var RegExpPrototype$2 = RegExp.prototype;
	var nativeToString = RegExpPrototype$2[TO_STRING];
	var NOT_GENERIC = fails$i(function () {
	  return nativeToString.call({
	    source: 'a',
	    flags: 'b'
	  }) !== '/a/b';
	});
	// FF44- RegExp#toString has a wrong name
	var INCORRECT_NAME = PROPER_FUNCTION_NAME$2 && nativeToString.name !== TO_STRING;

	// `RegExp.prototype.toString` method
	// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
	if (NOT_GENERIC || INCORRECT_NAME) {
	  defineBuiltIn$7(RegExpPrototype$2, TO_STRING, function toString() {
	    var R = anObject$L(this);
	    var pattern = $toString$2(R.source);
	    var flags = $toString$2(getRegExpFlags$2(R));
	    return '/' + pattern + '/' + flags;
	  }, {
	    unsafe: true
	  });
	}

	var collection$2 = collection$4;
	var collectionStrong = collectionStrong$2;

	// `Set` constructor
	// https://tc39.es/ecma262/#sec-set-objects
	collection$2('Set', function (init) {
	  return function Set() {
	    return init(this, arguments.length ? arguments[0] : undefined);
	  };
	}, collectionStrong);

	var uncurryThis$B = functionUncurryThis;
	var toIntegerOrInfinity$8 = toIntegerOrInfinity$e;
	var toString$h = toString$r;
	var requireObjectCoercible$e = requireObjectCoercible$i;
	var charAt$8 = uncurryThis$B(''.charAt);
	var charCodeAt$1 = uncurryThis$B(''.charCodeAt);
	var stringSlice$9 = uncurryThis$B(''.slice);
	var createMethod$2 = function createMethod(CONVERT_TO_STRING) {
	  return function ($this, pos) {
	    var S = toString$h(requireObjectCoercible$e($this));
	    var position = toIntegerOrInfinity$8(pos);
	    var size = S.length;
	    var first, second;
	    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
	    first = charCodeAt$1(S, position);
	    return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = charCodeAt$1(S, position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? charAt$8(S, position) : first : CONVERT_TO_STRING ? stringSlice$9(S, position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
	  };
	};
	var stringMultibyte = {
	  // `String.prototype.codePointAt` method
	  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
	  codeAt: createMethod$2(false),
	  // `String.prototype.at` method
	  // https://github.com/mathiasbynens/String.prototype.at
	  charAt: createMethod$2(true)
	};

	var $$24 = _export;
	var codeAt$2 = stringMultibyte.codeAt;

	// `String.prototype.codePointAt` method
	// https://tc39.es/ecma262/#sec-string.prototype.codepointat
	$$24({
	  target: 'String',
	  proto: true
	}, {
	  codePointAt: function codePointAt(pos) {
	    return codeAt$2(this, pos);
	  }
	});

	var isRegExp$3 = isRegexp;
	var $TypeError$g = TypeError;
	var notARegexp = function notARegexp(it) {
	  if (isRegExp$3(it)) {
	    throw new $TypeError$g("The method doesn't accept regular expressions");
	  }
	  return it;
	};

	var wellKnownSymbol$j = wellKnownSymbol$I;
	var MATCH = wellKnownSymbol$j('match');
	var correctIsRegexpLogic = function correctIsRegexpLogic(METHOD_NAME) {
	  var regexp = /./;
	  try {
	    '/./'[METHOD_NAME](regexp);
	  } catch (error1) {
	    try {
	      regexp[MATCH] = false;
	      return '/./'[METHOD_NAME](regexp);
	    } catch (error2) {/* empty */}
	  }
	  return false;
	};

	var $$23 = _export;
	var uncurryThis$A = functionUncurryThisClause;
	var getOwnPropertyDescriptor$3 = objectGetOwnPropertyDescriptor.f;
	var toLength$9 = toLength$b;
	var toString$g = toString$r;
	var notARegExp$2 = notARegexp;
	var requireObjectCoercible$d = requireObjectCoercible$i;
	var correctIsRegExpLogic$2 = correctIsRegexpLogic;
	var slice$1 = uncurryThis$A(''.slice);
	var min$4 = Math.min;
	var CORRECT_IS_REGEXP_LOGIC$1 = correctIsRegExpLogic$2('endsWith');
	// https://github.com/zloirock/core-js/pull/702
	var MDN_POLYFILL_BUG$1 = !CORRECT_IS_REGEXP_LOGIC$1 && !!function () {
	  var descriptor = getOwnPropertyDescriptor$3(String.prototype, 'endsWith');
	  return descriptor && !descriptor.writable;
	}();

	// `String.prototype.endsWith` method
	// https://tc39.es/ecma262/#sec-string.prototype.endswith
	$$23({
	  target: 'String',
	  proto: true,
	  forced: !MDN_POLYFILL_BUG$1 && !CORRECT_IS_REGEXP_LOGIC$1
	}, {
	  endsWith: function endsWith(searchString /* , endPosition = @length */) {
	    var that = toString$g(requireObjectCoercible$d(this));
	    notARegExp$2(searchString);
	    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
	    var len = that.length;
	    var end = endPosition === undefined ? len : min$4(toLength$9(endPosition), len);
	    var search = toString$g(searchString);
	    return slice$1(that, end - search.length, end) === search;
	  }
	});

	var $$22 = _export;
	var uncurryThis$z = functionUncurryThis;
	var toAbsoluteIndex = toAbsoluteIndex$6;
	var $RangeError$8 = RangeError;
	var fromCharCode$1 = String.fromCharCode;
	// eslint-disable-next-line es/no-string-fromcodepoint -- required for testing
	var $fromCodePoint = String.fromCodePoint;
	var join$5 = uncurryThis$z([].join);

	// length should be 1, old FF problem
	var INCORRECT_LENGTH = !!$fromCodePoint && $fromCodePoint.length !== 1;

	// `String.fromCodePoint` method
	// https://tc39.es/ecma262/#sec-string.fromcodepoint
	$$22({
	  target: 'String',
	  stat: true,
	  arity: 1,
	  forced: INCORRECT_LENGTH
	}, {
	  // eslint-disable-next-line no-unused-vars -- required for `.length`
	  fromCodePoint: function fromCodePoint(x) {
	    var elements = [];
	    var length = arguments.length;
	    var i = 0;
	    var code;
	    while (length > i) {
	      code = +arguments[i++];
	      if (toAbsoluteIndex(code, 0x10FFFF) !== code) throw new $RangeError$8(code + ' is not a valid code point');
	      elements[i] = code < 0x10000 ? fromCharCode$1(code) : fromCharCode$1(((code -= 0x10000) >> 10) + 0xD800, code % 0x400 + 0xDC00);
	    }
	    return join$5(elements, '');
	  }
	});

	var $$21 = _export;
	var uncurryThis$y = functionUncurryThis;
	var notARegExp$1 = notARegexp;
	var requireObjectCoercible$c = requireObjectCoercible$i;
	var toString$f = toString$r;
	var correctIsRegExpLogic$1 = correctIsRegexpLogic;
	var stringIndexOf$3 = uncurryThis$y(''.indexOf);

	// `String.prototype.includes` method
	// https://tc39.es/ecma262/#sec-string.prototype.includes
	$$21({
	  target: 'String',
	  proto: true,
	  forced: !correctIsRegExpLogic$1('includes')
	}, {
	  includes: function includes(searchString /* , position = 0 */) {
	    return !!~stringIndexOf$3(toString$f(requireObjectCoercible$c(this)), toString$f(notARegExp$1(searchString)), arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var charAt$7 = stringMultibyte.charAt;
	var toString$e = toString$r;
	var InternalStateModule$e = internalState;
	var defineIterator = iteratorDefine;
	var createIterResultObject$d = createIterResultObject$g;
	var STRING_ITERATOR$1 = 'String Iterator';
	var setInternalState$d = InternalStateModule$e.set;
	var getInternalState$7 = InternalStateModule$e.getterFor(STRING_ITERATOR$1);

	// `String.prototype[@@iterator]` method
	// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
	defineIterator(String, 'String', function (iterated) {
	  setInternalState$d(this, {
	    type: STRING_ITERATOR$1,
	    string: toString$e(iterated),
	    index: 0
	  });
	  // `%StringIteratorPrototype%.next` method
	  // https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
	}, function next() {
	  var state = getInternalState$7(this);
	  var string = state.string;
	  var index = state.index;
	  var point;
	  if (index >= string.length) return createIterResultObject$d(undefined, true);
	  point = charAt$7(string, index);
	  state.index += point.length;
	  return createIterResultObject$d(point, false);
	});

	// TODO: Remove from `core-js@4` since it's moved to entry points

	var uncurryThis$x = functionUncurryThisClause;
	var defineBuiltIn$6 = defineBuiltIn$l;
	var regexpExec$2 = regexpExec$3;
	var fails$h = fails$13;
	var wellKnownSymbol$i = wellKnownSymbol$I;
	var createNonEnumerableProperty$b = createNonEnumerableProperty$g;
	var SPECIES = wellKnownSymbol$i('species');
	var RegExpPrototype$1 = RegExp.prototype;
	var fixRegexpWellKnownSymbolLogic = function fixRegexpWellKnownSymbolLogic(KEY, exec, FORCED, SHAM) {
	  var SYMBOL = wellKnownSymbol$i(KEY);
	  var DELEGATES_TO_SYMBOL = !fails$h(function () {
	    // String methods call symbol-named RegEp methods
	    var O = {};
	    O[SYMBOL] = function () {
	      return 7;
	    };
	    return ''[KEY](O) !== 7;
	  });
	  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$h(function () {
	    // Symbol-named RegExp methods call .exec
	    var execCalled = false;
	    var re = /a/;
	    if (KEY === 'split') {
	      // We can't use real regex here since it causes deoptimization
	      // and serious performance degradation in V8
	      // https://github.com/zloirock/core-js/issues/306
	      re = {};
	      // RegExp[@@split] doesn't call the regex's exec method, but first creates
	      // a new one. We need to return the patched regex when creating the new one.
	      re.constructor = {};
	      re.constructor[SPECIES] = function () {
	        return re;
	      };
	      re.flags = '';
	      re[SYMBOL] = /./[SYMBOL];
	    }
	    re.exec = function () {
	      execCalled = true;
	      return null;
	    };
	    re[SYMBOL]('');
	    return !execCalled;
	  });
	  if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || FORCED) {
	    var uncurriedNativeRegExpMethod = uncurryThis$x(/./[SYMBOL]);
	    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
	      var uncurriedNativeMethod = uncurryThis$x(nativeMethod);
	      var $exec = regexp.exec;
	      if ($exec === regexpExec$2 || $exec === RegExpPrototype$1.exec) {
	        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
	          // The native String method already delegates to @@method (this
	          // polyfilled function), leasing to infinite recursion.
	          // We avoid it by directly calling the native @@method method.
	          return {
	            done: true,
	            value: uncurriedNativeRegExpMethod(regexp, str, arg2)
	          };
	        }
	        return {
	          done: true,
	          value: uncurriedNativeMethod(str, regexp, arg2)
	        };
	      }
	      return {
	        done: false
	      };
	    });
	    defineBuiltIn$6(String.prototype, KEY, methods[0]);
	    defineBuiltIn$6(RegExpPrototype$1, SYMBOL, methods[1]);
	  }
	  if (SHAM) createNonEnumerableProperty$b(RegExpPrototype$1[SYMBOL], 'sham', true);
	};

	var charAt$6 = stringMultibyte.charAt;

	// `AdvanceStringIndex` abstract operation
	// https://tc39.es/ecma262/#sec-advancestringindex
	var advanceStringIndex$4 = function advanceStringIndex(S, index, unicode) {
	  return index + (unicode ? charAt$6(S, index).length : 1);
	};

	var call$M = functionCall;
	var anObject$K = anObject$1a;
	var isCallable$c = isCallable$E;
	var classof$7 = classofRaw$2;
	var regexpExec$1 = regexpExec$3;
	var $TypeError$f = TypeError;

	// `RegExpExec` abstract operation
	// https://tc39.es/ecma262/#sec-regexpexec
	var regexpExecAbstract = function regexpExecAbstract(R, S) {
	  var exec = R.exec;
	  if (isCallable$c(exec)) {
	    var result = call$M(exec, R, S);
	    if (result !== null) anObject$K(result);
	    return result;
	  }
	  if (classof$7(R) === 'RegExp') return call$M(regexpExec$1, R, S);
	  throw new $TypeError$f('RegExp#exec called on incompatible receiver');
	};

	var call$L = functionCall;
	var fixRegExpWellKnownSymbolLogic$3 = fixRegexpWellKnownSymbolLogic;
	var anObject$J = anObject$1a;
	var isNullOrUndefined$9 = isNullOrUndefined$g;
	var toLength$8 = toLength$b;
	var toString$d = toString$r;
	var requireObjectCoercible$b = requireObjectCoercible$i;
	var getMethod$c = getMethod$g;
	var advanceStringIndex$3 = advanceStringIndex$4;
	var regExpExec$3 = regexpExecAbstract;

	// @@match logic
	fixRegExpWellKnownSymbolLogic$3('match', function (MATCH, nativeMatch, maybeCallNative) {
	  return [
	  // `String.prototype.match` method
	  // https://tc39.es/ecma262/#sec-string.prototype.match
	  function match(regexp) {
	    var O = requireObjectCoercible$b(this);
	    var matcher = isNullOrUndefined$9(regexp) ? undefined : getMethod$c(regexp, MATCH);
	    return matcher ? call$L(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString$d(O));
	  },
	  // `RegExp.prototype[@@match]` method
	  // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
	  function (string) {
	    var rx = anObject$J(this);
	    var S = toString$d(string);
	    var res = maybeCallNative(nativeMatch, rx, S);
	    if (res.done) return res.value;
	    if (!rx.global) return regExpExec$3(rx, S);
	    var fullUnicode = rx.unicode;
	    rx.lastIndex = 0;
	    var A = [];
	    var n = 0;
	    var result;
	    while ((result = regExpExec$3(rx, S)) !== null) {
	      var matchStr = toString$d(result[0]);
	      A[n] = matchStr;
	      if (matchStr === '') rx.lastIndex = advanceStringIndex$3(S, toLength$8(rx.lastIndex), fullUnicode);
	      n++;
	    }
	    return n === 0 ? null : A;
	  }];
	});

	/* eslint-disable es/no-string-prototype-matchall -- safe */
	var $$20 = _export;
	var call$K = functionCall;
	var uncurryThis$w = functionUncurryThisClause;
	var createIteratorConstructor$4 = iteratorCreateConstructor;
	var createIterResultObject$c = createIterResultObject$g;
	var requireObjectCoercible$a = requireObjectCoercible$i;
	var toLength$7 = toLength$b;
	var toString$c = toString$r;
	var anObject$I = anObject$1a;
	var isNullOrUndefined$8 = isNullOrUndefined$g;
	var classof$6 = classofRaw$2;
	var isRegExp$2 = isRegexp;
	var getRegExpFlags$1 = regexpGetFlags;
	var getMethod$b = getMethod$g;
	var defineBuiltIn$5 = defineBuiltIn$l;
	var fails$g = fails$13;
	var wellKnownSymbol$h = wellKnownSymbol$I;
	var speciesConstructor$2 = speciesConstructor$5;
	var advanceStringIndex$2 = advanceStringIndex$4;
	var regExpExec$2 = regexpExecAbstract;
	var InternalStateModule$d = internalState;
	var IS_PURE$f = isPure;
	var MATCH_ALL = wellKnownSymbol$h('matchAll');
	var REGEXP_STRING = 'RegExp String';
	var REGEXP_STRING_ITERATOR = REGEXP_STRING + ' Iterator';
	var setInternalState$c = InternalStateModule$d.set;
	var getInternalState$6 = InternalStateModule$d.getterFor(REGEXP_STRING_ITERATOR);
	var RegExpPrototype = RegExp.prototype;
	var $TypeError$e = TypeError;
	var stringIndexOf$2 = uncurryThis$w(''.indexOf);
	var nativeMatchAll = uncurryThis$w(''.matchAll);
	var WORKS_WITH_NON_GLOBAL_REGEX = !!nativeMatchAll && !fails$g(function () {
	  nativeMatchAll('a', /./);
	});
	var $RegExpStringIterator = createIteratorConstructor$4(function RegExpStringIterator(regexp, string, $global, fullUnicode) {
	  setInternalState$c(this, {
	    type: REGEXP_STRING_ITERATOR,
	    regexp: regexp,
	    string: string,
	    global: $global,
	    unicode: fullUnicode,
	    done: false
	  });
	}, REGEXP_STRING, function next() {
	  var state = getInternalState$6(this);
	  if (state.done) return createIterResultObject$c(undefined, true);
	  var R = state.regexp;
	  var S = state.string;
	  var match = regExpExec$2(R, S);
	  if (match === null) {
	    state.done = true;
	    return createIterResultObject$c(undefined, true);
	  }
	  if (state.global) {
	    if (toString$c(match[0]) === '') R.lastIndex = advanceStringIndex$2(S, toLength$7(R.lastIndex), state.unicode);
	    return createIterResultObject$c(match, false);
	  }
	  state.done = true;
	  return createIterResultObject$c(match, false);
	});
	var $matchAll = function $matchAll(string) {
	  var R = anObject$I(this);
	  var S = toString$c(string);
	  var C = speciesConstructor$2(R, RegExp);
	  var flags = toString$c(getRegExpFlags$1(R));
	  var matcher, $global, fullUnicode;
	  matcher = new C(C === RegExp ? R.source : R, flags);
	  $global = !!~stringIndexOf$2(flags, 'g');
	  fullUnicode = !!~stringIndexOf$2(flags, 'u');
	  matcher.lastIndex = toLength$7(R.lastIndex);
	  return new $RegExpStringIterator(matcher, S, $global, fullUnicode);
	};

	// `String.prototype.matchAll` method
	// https://tc39.es/ecma262/#sec-string.prototype.matchall
	$$20({
	  target: 'String',
	  proto: true,
	  forced: WORKS_WITH_NON_GLOBAL_REGEX
	}, {
	  matchAll: function matchAll(regexp) {
	    var O = requireObjectCoercible$a(this);
	    var flags, S, matcher, rx;
	    if (!isNullOrUndefined$8(regexp)) {
	      if (isRegExp$2(regexp)) {
	        flags = toString$c(requireObjectCoercible$a(getRegExpFlags$1(regexp)));
	        if (!~stringIndexOf$2(flags, 'g')) throw new $TypeError$e('`.matchAll` does not allow non-global regexes');
	      }
	      if (WORKS_WITH_NON_GLOBAL_REGEX) return nativeMatchAll(O, regexp);
	      matcher = getMethod$b(regexp, MATCH_ALL);
	      if (matcher === undefined && IS_PURE$f && classof$6(regexp) === 'RegExp') matcher = $matchAll;
	      if (matcher) return call$K(matcher, regexp, O);
	    } else if (WORKS_WITH_NON_GLOBAL_REGEX) return nativeMatchAll(O, regexp);
	    S = toString$c(O);
	    rx = new RegExp(regexp, 'g');
	    return rx[MATCH_ALL](S);
	  }
	});
	MATCH_ALL in RegExpPrototype || defineBuiltIn$5(RegExpPrototype, MATCH_ALL, $matchAll);

	var toIntegerOrInfinity$7 = toIntegerOrInfinity$e;
	var toString$b = toString$r;
	var requireObjectCoercible$9 = requireObjectCoercible$i;
	var $RangeError$7 = RangeError;

	// `String.prototype.repeat` method implementation
	// https://tc39.es/ecma262/#sec-string.prototype.repeat
	var stringRepeat = function repeat(count) {
	  var str = toString$b(requireObjectCoercible$9(this));
	  var result = '';
	  var n = toIntegerOrInfinity$7(count);
	  if (n < 0 || n === Infinity) throw new $RangeError$7('Wrong number of repetitions');
	  for (; n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
	  return result;
	};

	// https://github.com/tc39/proposal-string-pad-start-end
	var uncurryThis$v = functionUncurryThis;
	var toLength$6 = toLength$b;
	var toString$a = toString$r;
	var $repeat = stringRepeat;
	var requireObjectCoercible$8 = requireObjectCoercible$i;
	var repeat$1 = uncurryThis$v($repeat);
	var stringSlice$8 = uncurryThis$v(''.slice);
	var ceil = Math.ceil;

	// `String.prototype.{ padStart, padEnd }` methods implementation
	var createMethod$1 = function createMethod(IS_END) {
	  return function ($this, maxLength, fillString) {
	    var S = toString$a(requireObjectCoercible$8($this));
	    var intMaxLength = toLength$6(maxLength);
	    var stringLength = S.length;
	    var fillStr = fillString === undefined ? ' ' : toString$a(fillString);
	    var fillLen, stringFiller;
	    if (intMaxLength <= stringLength || fillStr === '') return S;
	    fillLen = intMaxLength - stringLength;
	    stringFiller = repeat$1(fillStr, ceil(fillLen / fillStr.length));
	    if (stringFiller.length > fillLen) stringFiller = stringSlice$8(stringFiller, 0, fillLen);
	    return IS_END ? S + stringFiller : stringFiller + S;
	  };
	};
	var stringPad = {
	  // `String.prototype.padStart` method
	  // https://tc39.es/ecma262/#sec-string.prototype.padstart
	  start: createMethod$1(false),
	  // `String.prototype.padEnd` method
	  // https://tc39.es/ecma262/#sec-string.prototype.padend
	  end: createMethod$1(true)
	};

	// https://github.com/zloirock/core-js/issues/280
	var userAgent = engineUserAgent;
	var stringPadWebkitBug = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(userAgent);

	var $$1$ = _export;
	var $padEnd = stringPad.end;
	var WEBKIT_BUG$1 = stringPadWebkitBug;

	// `String.prototype.padEnd` method
	// https://tc39.es/ecma262/#sec-string.prototype.padend
	$$1$({
	  target: 'String',
	  proto: true,
	  forced: WEBKIT_BUG$1
	}, {
	  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
	    return $padEnd(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var $$1_ = _export;
	var $padStart = stringPad.start;
	var WEBKIT_BUG = stringPadWebkitBug;

	// `String.prototype.padStart` method
	// https://tc39.es/ecma262/#sec-string.prototype.padstart
	$$1_({
	  target: 'String',
	  proto: true,
	  forced: WEBKIT_BUG
	}, {
	  padStart: function padStart(maxLength /* , fillString = ' ' */) {
	    return $padStart(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var $$1Z = _export;
	var uncurryThis$u = functionUncurryThis;
	var toIndexedObject$1 = toIndexedObject$e;
	var toObject$9 = toObject$u;
	var toString$9 = toString$r;
	var lengthOfArrayLike$6 = lengthOfArrayLike$m;
	var push$b = uncurryThis$u([].push);
	var join$4 = uncurryThis$u([].join);

	// `String.raw` method
	// https://tc39.es/ecma262/#sec-string.raw
	$$1Z({
	  target: 'String',
	  stat: true
	}, {
	  raw: function raw(template) {
	    var rawTemplate = toIndexedObject$1(toObject$9(template).raw);
	    var literalSegments = lengthOfArrayLike$6(rawTemplate);
	    if (!literalSegments) return '';
	    var argumentsLength = arguments.length;
	    var elements = [];
	    var i = 0;
	    while (true) {
	      push$b(elements, toString$9(rawTemplate[i++]));
	      if (i === literalSegments) return join$4(elements, '');
	      if (i < argumentsLength) push$b(elements, toString$9(arguments[i]));
	    }
	  }
	});

	var $$1Y = _export;
	var repeat = stringRepeat;

	// `String.prototype.repeat` method
	// https://tc39.es/ecma262/#sec-string.prototype.repeat
	$$1Y({
	  target: 'String',
	  proto: true
	}, {
	  repeat: repeat
	});

	var uncurryThis$t = functionUncurryThis;
	var toObject$8 = toObject$u;
	var floor$5 = Math.floor;
	var charAt$5 = uncurryThis$t(''.charAt);
	var replace$4 = uncurryThis$t(''.replace);
	var stringSlice$7 = uncurryThis$t(''.slice);
	// eslint-disable-next-line redos/no-vulnerable -- safe
	var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
	var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

	// `GetSubstitution` abstract operation
	// https://tc39.es/ecma262/#sec-getsubstitution
	var getSubstitution$2 = function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
	  var tailPos = position + matched.length;
	  var m = captures.length;
	  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
	  if (namedCaptures !== undefined) {
	    namedCaptures = toObject$8(namedCaptures);
	    symbols = SUBSTITUTION_SYMBOLS;
	  }
	  return replace$4(replacement, symbols, function (match, ch) {
	    var capture;
	    switch (charAt$5(ch, 0)) {
	      case '$':
	        return '$';
	      case '&':
	        return matched;
	      case '`':
	        return stringSlice$7(str, 0, position);
	      case "'":
	        return stringSlice$7(str, tailPos);
	      case '<':
	        capture = namedCaptures[stringSlice$7(ch, 1, -1)];
	        break;
	      default:
	        // \d\d?
	        var n = +ch;
	        if (n === 0) return match;
	        if (n > m) {
	          var f = floor$5(n / 10);
	          if (f === 0) return match;
	          if (f <= m) return captures[f - 1] === undefined ? charAt$5(ch, 1) : captures[f - 1] + charAt$5(ch, 1);
	          return match;
	        }
	        capture = captures[n - 1];
	    }
	    return capture === undefined ? '' : capture;
	  });
	};

	var apply$6 = functionApply$1;
	var call$J = functionCall;
	var uncurryThis$s = functionUncurryThis;
	var fixRegExpWellKnownSymbolLogic$2 = fixRegexpWellKnownSymbolLogic;
	var fails$f = fails$13;
	var anObject$H = anObject$1a;
	var isCallable$b = isCallable$E;
	var isNullOrUndefined$7 = isNullOrUndefined$g;
	var toIntegerOrInfinity$6 = toIntegerOrInfinity$e;
	var toLength$5 = toLength$b;
	var toString$8 = toString$r;
	var requireObjectCoercible$7 = requireObjectCoercible$i;
	var advanceStringIndex$1 = advanceStringIndex$4;
	var getMethod$a = getMethod$g;
	var getSubstitution$1 = getSubstitution$2;
	var regExpExec$1 = regexpExecAbstract;
	var wellKnownSymbol$g = wellKnownSymbol$I;
	var REPLACE$1 = wellKnownSymbol$g('replace');
	var max$3 = Math.max;
	var min$3 = Math.min;
	var concat$1 = uncurryThis$s([].concat);
	var push$a = uncurryThis$s([].push);
	var stringIndexOf$1 = uncurryThis$s(''.indexOf);
	var stringSlice$6 = uncurryThis$s(''.slice);
	var maybeToString = function maybeToString(it) {
	  return it === undefined ? it : String(it);
	};

	// IE <= 11 replaces $0 with the whole match, as if it was $&
	// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
	var REPLACE_KEEPS_$0 = function () {
	  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
	  return 'a'.replace(/./, '$0') === '$0';
	}();

	// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
	var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = function () {
	  if (/./[REPLACE$1]) {
	    return /./[REPLACE$1]('a', '$0') === '';
	  }
	  return false;
	}();
	var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$f(function () {
	  var re = /./;
	  re.exec = function () {
	    var result = [];
	    result.groups = {
	      a: '7'
	    };
	    return result;
	  };
	  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
	  return ''.replace(re, '$<a>') !== '7';
	});

	// @@replace logic
	fixRegExpWellKnownSymbolLogic$2('replace', function (_, nativeReplace, maybeCallNative) {
	  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';
	  return [
	  // `String.prototype.replace` method
	  // https://tc39.es/ecma262/#sec-string.prototype.replace
	  function replace(searchValue, replaceValue) {
	    var O = requireObjectCoercible$7(this);
	    var replacer = isNullOrUndefined$7(searchValue) ? undefined : getMethod$a(searchValue, REPLACE$1);
	    return replacer ? call$J(replacer, searchValue, O, replaceValue) : call$J(nativeReplace, toString$8(O), searchValue, replaceValue);
	  },
	  // `RegExp.prototype[@@replace]` method
	  // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
	  function (string, replaceValue) {
	    var rx = anObject$H(this);
	    var S = toString$8(string);
	    if (typeof replaceValue == 'string' && stringIndexOf$1(replaceValue, UNSAFE_SUBSTITUTE) === -1 && stringIndexOf$1(replaceValue, '$<') === -1) {
	      var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
	      if (res.done) return res.value;
	    }
	    var functionalReplace = isCallable$b(replaceValue);
	    if (!functionalReplace) replaceValue = toString$8(replaceValue);
	    var global = rx.global;
	    var fullUnicode;
	    if (global) {
	      fullUnicode = rx.unicode;
	      rx.lastIndex = 0;
	    }
	    var results = [];
	    var result;
	    while (true) {
	      result = regExpExec$1(rx, S);
	      if (result === null) break;
	      push$a(results, result);
	      if (!global) break;
	      var matchStr = toString$8(result[0]);
	      if (matchStr === '') rx.lastIndex = advanceStringIndex$1(S, toLength$5(rx.lastIndex), fullUnicode);
	    }
	    var accumulatedResult = '';
	    var nextSourcePosition = 0;
	    for (var i = 0; i < results.length; i++) {
	      result = results[i];
	      var matched = toString$8(result[0]);
	      var position = max$3(min$3(toIntegerOrInfinity$6(result.index), S.length), 0);
	      var captures = [];
	      var replacement;
	      // NOTE: This is equivalent to
	      //   captures = result.slice(1).map(maybeToString)
	      // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
	      // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
	      // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
	      for (var j = 1; j < result.length; j++) push$a(captures, maybeToString(result[j]));
	      var namedCaptures = result.groups;
	      if (functionalReplace) {
	        var replacerArgs = concat$1([matched], captures, position, S);
	        if (namedCaptures !== undefined) push$a(replacerArgs, namedCaptures);
	        replacement = toString$8(apply$6(replaceValue, undefined, replacerArgs));
	      } else {
	        replacement = getSubstitution$1(matched, S, position, captures, namedCaptures, replaceValue);
	      }
	      if (position >= nextSourcePosition) {
	        accumulatedResult += stringSlice$6(S, nextSourcePosition, position) + replacement;
	        nextSourcePosition = position + matched.length;
	      }
	    }
	    return accumulatedResult + stringSlice$6(S, nextSourcePosition);
	  }];
	}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

	// `SameValue` abstract operation
	// https://tc39.es/ecma262/#sec-samevalue
	// eslint-disable-next-line es/no-object-is -- safe
	var sameValue$1 = Object.is || function is(x, y) {
	  // eslint-disable-next-line no-self-compare -- NaN check
	  return x === y ? x !== 0 || 1 / x === 1 / y : x !== x && y !== y;
	};

	var call$I = functionCall;
	var fixRegExpWellKnownSymbolLogic$1 = fixRegexpWellKnownSymbolLogic;
	var anObject$G = anObject$1a;
	var isNullOrUndefined$6 = isNullOrUndefined$g;
	var requireObjectCoercible$6 = requireObjectCoercible$i;
	var sameValue = sameValue$1;
	var toString$7 = toString$r;
	var getMethod$9 = getMethod$g;
	var regExpExec = regexpExecAbstract;

	// @@search logic
	fixRegExpWellKnownSymbolLogic$1('search', function (SEARCH, nativeSearch, maybeCallNative) {
	  return [
	  // `String.prototype.search` method
	  // https://tc39.es/ecma262/#sec-string.prototype.search
	  function search(regexp) {
	    var O = requireObjectCoercible$6(this);
	    var searcher = isNullOrUndefined$6(regexp) ? undefined : getMethod$9(regexp, SEARCH);
	    return searcher ? call$I(searcher, regexp, O) : new RegExp(regexp)[SEARCH](toString$7(O));
	  },
	  // `RegExp.prototype[@@search]` method
	  // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
	  function (string) {
	    var rx = anObject$G(this);
	    var S = toString$7(string);
	    var res = maybeCallNative(nativeSearch, rx, S);
	    if (res.done) return res.value;
	    var previousLastIndex = rx.lastIndex;
	    if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
	    var result = regExpExec(rx, S);
	    if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
	    return result === null ? -1 : result.index;
	  }];
	});

	var apply$5 = functionApply$1;
	var call$H = functionCall;
	var uncurryThis$r = functionUncurryThis;
	var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
	var anObject$F = anObject$1a;
	var isNullOrUndefined$5 = isNullOrUndefined$g;
	var isRegExp$1 = isRegexp;
	var requireObjectCoercible$5 = requireObjectCoercible$i;
	var speciesConstructor$1 = speciesConstructor$5;
	var advanceStringIndex = advanceStringIndex$4;
	var toLength$4 = toLength$b;
	var toString$6 = toString$r;
	var getMethod$8 = getMethod$g;
	var arraySlice$5 = arraySlice$b;
	var callRegExpExec = regexpExecAbstract;
	var regexpExec = regexpExec$3;
	var stickyHelpers = regexpStickyHelpers;
	var fails$e = fails$13;
	var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
	var MAX_UINT32 = 0xFFFFFFFF;
	var min$2 = Math.min;
	var $push = [].push;
	var exec$3 = uncurryThis$r(/./.exec);
	var push$9 = uncurryThis$r($push);
	var stringSlice$5 = uncurryThis$r(''.slice);

	// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
	// Weex JS has frozen built-in prototypes, so use try / catch wrapper
	var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails$e(function () {
	  // eslint-disable-next-line regexp/no-empty-group -- required for testing
	  var re = /(?:)/;
	  var originalExec = re.exec;
	  re.exec = function () {
	    return originalExec.apply(this, arguments);
	  };
	  var result = 'ab'.split(re);
	  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
	});

	// @@split logic
	fixRegExpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
	  var internalSplit;
	  if ('abbc'.split(/(b)*/)[1] === 'c' ||
	  // eslint-disable-next-line regexp/no-empty-group -- required for testing
	  'test'.split(/(?:)/, -1).length !== 4 || 'ab'.split(/(?:ab)*/).length !== 2 || '.'.split(/(.?)(.?)/).length !== 4 ||
	  // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
	  '.'.split(/()()/).length > 1 || ''.split(/.?/).length) {
	    // based on es5-shim implementation, need to rework it
	    internalSplit = function internalSplit(separator, limit) {
	      var string = toString$6(requireObjectCoercible$5(this));
	      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
	      if (lim === 0) return [];
	      if (separator === undefined) return [string];
	      // If `separator` is not a regex, use native split
	      if (!isRegExp$1(separator)) {
	        return call$H(nativeSplit, string, separator, lim);
	      }
	      var output = [];
	      var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
	      var lastLastIndex = 0;
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      var separatorCopy = new RegExp(separator.source, flags + 'g');
	      var match, lastIndex, lastLength;
	      while (match = call$H(regexpExec, separatorCopy, string)) {
	        lastIndex = separatorCopy.lastIndex;
	        if (lastIndex > lastLastIndex) {
	          push$9(output, stringSlice$5(string, lastLastIndex, match.index));
	          if (match.length > 1 && match.index < string.length) apply$5($push, output, arraySlice$5(match, 1));
	          lastLength = match[0].length;
	          lastLastIndex = lastIndex;
	          if (output.length >= lim) break;
	        }
	        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
	      }

	      if (lastLastIndex === string.length) {
	        if (lastLength || !exec$3(separatorCopy, '')) push$9(output, '');
	      } else push$9(output, stringSlice$5(string, lastLastIndex));
	      return output.length > lim ? arraySlice$5(output, 0, lim) : output;
	    };
	    // Chakra, V8
	  } else if ('0'.split(undefined, 0).length) {
	    internalSplit = function internalSplit(separator, limit) {
	      return separator === undefined && limit === 0 ? [] : call$H(nativeSplit, this, separator, limit);
	    };
	  } else internalSplit = nativeSplit;
	  return [
	  // `String.prototype.split` method
	  // https://tc39.es/ecma262/#sec-string.prototype.split
	  function split(separator, limit) {
	    var O = requireObjectCoercible$5(this);
	    var splitter = isNullOrUndefined$5(separator) ? undefined : getMethod$8(separator, SPLIT);
	    return splitter ? call$H(splitter, separator, O, limit) : call$H(internalSplit, toString$6(O), separator, limit);
	  },
	  // `RegExp.prototype[@@split]` method
	  // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
	  //
	  // NOTE: This cannot be properly polyfilled in engines that don't support
	  // the 'y' flag.
	  function (string, limit) {
	    var rx = anObject$F(this);
	    var S = toString$6(string);
	    var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);
	    if (res.done) return res.value;
	    var C = speciesConstructor$1(rx, RegExp);
	    var unicodeMatching = rx.unicode;
	    var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (UNSUPPORTED_Y ? 'g' : 'y');

	    // ^(? + rx + ) is needed, in combination with some S slicing, to
	    // simulate the 'y' flag.
	    var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
	    var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
	    if (lim === 0) return [];
	    if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
	    var p = 0;
	    var q = 0;
	    var A = [];
	    while (q < S.length) {
	      splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
	      var z = callRegExpExec(splitter, UNSUPPORTED_Y ? stringSlice$5(S, q) : S);
	      var e;
	      if (z === null || (e = min$2(toLength$4(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p) {
	        q = advanceStringIndex(S, q, unicodeMatching);
	      } else {
	        push$9(A, stringSlice$5(S, p, q));
	        if (A.length === lim) return A;
	        for (var i = 1; i <= z.length - 1; i++) {
	          push$9(A, z[i]);
	          if (A.length === lim) return A;
	        }
	        q = p = e;
	      }
	    }
	    push$9(A, stringSlice$5(S, p));
	    return A;
	  }];
	}, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);

	var $$1X = _export;
	var uncurryThis$q = functionUncurryThisClause;
	var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;
	var toLength$3 = toLength$b;
	var toString$5 = toString$r;
	var notARegExp = notARegexp;
	var requireObjectCoercible$4 = requireObjectCoercible$i;
	var correctIsRegExpLogic = correctIsRegexpLogic;
	var stringSlice$4 = uncurryThis$q(''.slice);
	var min$1 = Math.min;
	var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');
	// https://github.com/zloirock/core-js/pull/702
	var MDN_POLYFILL_BUG = !CORRECT_IS_REGEXP_LOGIC && !!function () {
	  var descriptor = getOwnPropertyDescriptor$2(String.prototype, 'startsWith');
	  return descriptor && !descriptor.writable;
	}();

	// `String.prototype.startsWith` method
	// https://tc39.es/ecma262/#sec-string.prototype.startswith
	$$1X({
	  target: 'String',
	  proto: true,
	  forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC
	}, {
	  startsWith: function startsWith(searchString /* , position = 0 */) {
	    var that = toString$5(requireObjectCoercible$4(this));
	    notARegExp(searchString);
	    var index = toLength$3(min$1(arguments.length > 1 ? arguments[1] : undefined, that.length));
	    var search = toString$5(searchString);
	    return stringSlice$4(that, index, index + search.length) === search;
	  }
	});

	var PROPER_FUNCTION_NAME$1 = functionName.PROPER;
	var fails$d = fails$13;
	var whitespaces = whitespaces$2;
	var non = "\u200B\x85\u180E";

	// check that a method works with the correct list
	// of whitespaces and has a correct name
	var stringTrimForced = function stringTrimForced(METHOD_NAME) {
	  return fails$d(function () {
	    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() !== non || PROPER_FUNCTION_NAME$1 && whitespaces[METHOD_NAME].name !== METHOD_NAME;
	  });
	};

	var $$1W = _export;
	var $trim = stringTrim.trim;
	var forcedStringTrimMethod$2 = stringTrimForced;

	// `String.prototype.trim` method
	// https://tc39.es/ecma262/#sec-string.prototype.trim
	$$1W({
	  target: 'String',
	  proto: true,
	  forced: forcedStringTrimMethod$2('trim')
	}, {
	  trim: function trim() {
	    return $trim(this);
	  }
	});

	var $trimEnd = stringTrim.end;
	var forcedStringTrimMethod$1 = stringTrimForced;

	// `String.prototype.{ trimEnd, trimRight }` method
	// https://tc39.es/ecma262/#sec-string.prototype.trimend
	// https://tc39.es/ecma262/#String.prototype.trimright
	var stringTrimEnd = forcedStringTrimMethod$1('trimEnd') ? function trimEnd() {
	  return $trimEnd(this);
	  // eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
	} : ''.trimEnd;

	var $$1V = _export;
	var trimEnd$1 = stringTrimEnd;

	// `String.prototype.trimRight` method
	// https://tc39.es/ecma262/#sec-string.prototype.trimend
	// eslint-disable-next-line es/no-string-prototype-trimleft-trimright -- safe
	$$1V({
	  target: 'String',
	  proto: true,
	  name: 'trimEnd',
	  forced: ''.trimRight !== trimEnd$1
	}, {
	  trimRight: trimEnd$1
	});

	// TODO: Remove this line from `core-js@4`

	var $$1U = _export;
	var trimEnd = stringTrimEnd;

	// `String.prototype.trimEnd` method
	// https://tc39.es/ecma262/#sec-string.prototype.trimend
	// eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
	$$1U({
	  target: 'String',
	  proto: true,
	  name: 'trimEnd',
	  forced: ''.trimEnd !== trimEnd
	}, {
	  trimEnd: trimEnd
	});

	var $trimStart = stringTrim.start;
	var forcedStringTrimMethod = stringTrimForced;

	// `String.prototype.{ trimStart, trimLeft }` method
	// https://tc39.es/ecma262/#sec-string.prototype.trimstart
	// https://tc39.es/ecma262/#String.prototype.trimleft
	var stringTrimStart = forcedStringTrimMethod('trimStart') ? function trimStart() {
	  return $trimStart(this);
	  // eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
	} : ''.trimStart;

	var $$1T = _export;
	var trimStart$1 = stringTrimStart;

	// `String.prototype.trimLeft` method
	// https://tc39.es/ecma262/#sec-string.prototype.trimleft
	// eslint-disable-next-line es/no-string-prototype-trimleft-trimright -- safe
	$$1T({
	  target: 'String',
	  proto: true,
	  name: 'trimStart',
	  forced: ''.trimLeft !== trimStart$1
	}, {
	  trimLeft: trimStart$1
	});

	// TODO: Remove this line from `core-js@4`

	var $$1S = _export;
	var trimStart = stringTrimStart;

	// `String.prototype.trimStart` method
	// https://tc39.es/ecma262/#sec-string.prototype.trimstart
	// eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
	$$1S({
	  target: 'String',
	  proto: true,
	  name: 'trimStart',
	  forced: ''.trimStart !== trimStart
	}, {
	  trimStart: trimStart
	});

	var typedArrayConstructor = {exports: {}};

	// eslint-disable-next-line es/no-typed-arrays -- safe
	var arrayBufferBasicDetection = typeof ArrayBuffer != 'undefined' && typeof DataView != 'undefined';

	var NATIVE_ARRAY_BUFFER$1 = arrayBufferBasicDetection;
	var DESCRIPTORS$9 = descriptors;
	var global$m = global$R;
	var isCallable$a = isCallable$E;
	var isObject$h = isObject$J;
	var hasOwn$8 = hasOwnProperty_1;
	var classof$5 = classof$l;
	var tryToString = tryToString$7;
	var createNonEnumerableProperty$a = createNonEnumerableProperty$g;
	var defineBuiltIn$4 = defineBuiltIn$l;
	var defineBuiltInAccessor$8 = defineBuiltInAccessor$f;
	var isPrototypeOf$4 = objectIsPrototypeOf;
	var getPrototypeOf$8 = objectGetPrototypeOf$2;
	var setPrototypeOf$3 = objectSetPrototypeOf$1;
	var wellKnownSymbol$f = wellKnownSymbol$I;
	var uid = uid$5;
	var InternalStateModule$c = internalState;
	var enforceInternalState$2 = InternalStateModule$c.enforce;
	var getInternalState$5 = InternalStateModule$c.get;
	var Int8Array$4 = global$m.Int8Array;
	var Int8ArrayPrototype$1 = Int8Array$4 && Int8Array$4.prototype;
	var Uint8ClampedArray$1 = global$m.Uint8ClampedArray;
	var Uint8ClampedArrayPrototype = Uint8ClampedArray$1 && Uint8ClampedArray$1.prototype;
	var TypedArray$1 = Int8Array$4 && getPrototypeOf$8(Int8Array$4);
	var TypedArrayPrototype$2 = Int8ArrayPrototype$1 && getPrototypeOf$8(Int8ArrayPrototype$1);
	var ObjectPrototype$1 = Object.prototype;
	var TypeError$3 = global$m.TypeError;
	var TO_STRING_TAG$5 = wellKnownSymbol$f('toStringTag');
	var TYPED_ARRAY_TAG$1 = uid('TYPED_ARRAY_TAG');
	var TYPED_ARRAY_CONSTRUCTOR = 'TypedArrayConstructor';
	// Fixing native typed arrays in Opera Presto crashes the browser, see #595
	var NATIVE_ARRAY_BUFFER_VIEWS$2 = NATIVE_ARRAY_BUFFER$1 && !!setPrototypeOf$3 && classof$5(global$m.opera) !== 'Opera';
	var TYPED_ARRAY_TAG_REQUIRED = false;
	var NAME, Constructor, Prototype;
	var TypedArrayConstructorsList = {
	  Int8Array: 1,
	  Uint8Array: 1,
	  Uint8ClampedArray: 1,
	  Int16Array: 2,
	  Uint16Array: 2,
	  Int32Array: 4,
	  Uint32Array: 4,
	  Float32Array: 4,
	  Float64Array: 8
	};
	var BigIntArrayConstructorsList = {
	  BigInt64Array: 8,
	  BigUint64Array: 8
	};
	var isView = function isView(it) {
	  if (!isObject$h(it)) return false;
	  var klass = classof$5(it);
	  return klass === 'DataView' || hasOwn$8(TypedArrayConstructorsList, klass) || hasOwn$8(BigIntArrayConstructorsList, klass);
	};
	var getTypedArrayConstructor$1 = function getTypedArrayConstructor(it) {
	  var proto = getPrototypeOf$8(it);
	  if (!isObject$h(proto)) return;
	  var state = getInternalState$5(proto);
	  return state && hasOwn$8(state, TYPED_ARRAY_CONSTRUCTOR) ? state[TYPED_ARRAY_CONSTRUCTOR] : getTypedArrayConstructor(proto);
	};
	var isTypedArray$1 = function isTypedArray(it) {
	  if (!isObject$h(it)) return false;
	  var klass = classof$5(it);
	  return hasOwn$8(TypedArrayConstructorsList, klass) || hasOwn$8(BigIntArrayConstructorsList, klass);
	};
	var aTypedArray$l = function aTypedArray(it) {
	  if (isTypedArray$1(it)) return it;
	  throw new TypeError$3('Target is not a typed array');
	};
	var aTypedArrayConstructor$3 = function aTypedArrayConstructor(C) {
	  if (isCallable$a(C) && (!setPrototypeOf$3 || isPrototypeOf$4(TypedArray$1, C))) return C;
	  throw new TypeError$3(tryToString(C) + ' is not a typed array constructor');
	};
	var exportTypedArrayMethod$m = function exportTypedArrayMethod(KEY, property, forced, options) {
	  if (!DESCRIPTORS$9) return;
	  if (forced) for (var ARRAY in TypedArrayConstructorsList) {
	    var TypedArrayConstructor = global$m[ARRAY];
	    if (TypedArrayConstructor && hasOwn$8(TypedArrayConstructor.prototype, KEY)) try {
	      delete TypedArrayConstructor.prototype[KEY];
	    } catch (error) {
	      // old WebKit bug - some methods are non-configurable
	      try {
	        TypedArrayConstructor.prototype[KEY] = property;
	      } catch (error2) {/* empty */}
	    }
	  }
	  if (!TypedArrayPrototype$2[KEY] || forced) {
	    defineBuiltIn$4(TypedArrayPrototype$2, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS$2 && Int8ArrayPrototype$1[KEY] || property, options);
	  }
	};
	var exportTypedArrayStaticMethod$2 = function exportTypedArrayStaticMethod(KEY, property, forced) {
	  var ARRAY, TypedArrayConstructor;
	  if (!DESCRIPTORS$9) return;
	  if (setPrototypeOf$3) {
	    if (forced) for (ARRAY in TypedArrayConstructorsList) {
	      TypedArrayConstructor = global$m[ARRAY];
	      if (TypedArrayConstructor && hasOwn$8(TypedArrayConstructor, KEY)) try {
	        delete TypedArrayConstructor[KEY];
	      } catch (error) {/* empty */}
	    }
	    if (!TypedArray$1[KEY] || forced) {
	      // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
	      try {
	        return defineBuiltIn$4(TypedArray$1, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS$2 && TypedArray$1[KEY] || property);
	      } catch (error) {/* empty */}
	    } else return;
	  }
	  for (ARRAY in TypedArrayConstructorsList) {
	    TypedArrayConstructor = global$m[ARRAY];
	    if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
	      defineBuiltIn$4(TypedArrayConstructor, KEY, property);
	    }
	  }
	};
	for (NAME in TypedArrayConstructorsList) {
	  Constructor = global$m[NAME];
	  Prototype = Constructor && Constructor.prototype;
	  if (Prototype) enforceInternalState$2(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;else NATIVE_ARRAY_BUFFER_VIEWS$2 = false;
	}
	for (NAME in BigIntArrayConstructorsList) {
	  Constructor = global$m[NAME];
	  Prototype = Constructor && Constructor.prototype;
	  if (Prototype) enforceInternalState$2(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
	}

	// WebKit bug - typed arrays constructors prototype is Object.prototype
	if (!NATIVE_ARRAY_BUFFER_VIEWS$2 || !isCallable$a(TypedArray$1) || TypedArray$1 === Function.prototype) {
	  // eslint-disable-next-line no-shadow -- safe
	  TypedArray$1 = function TypedArray() {
	    throw new TypeError$3('Incorrect invocation');
	  };
	  if (NATIVE_ARRAY_BUFFER_VIEWS$2) for (NAME in TypedArrayConstructorsList) {
	    if (global$m[NAME]) setPrototypeOf$3(global$m[NAME], TypedArray$1);
	  }
	}
	if (!NATIVE_ARRAY_BUFFER_VIEWS$2 || !TypedArrayPrototype$2 || TypedArrayPrototype$2 === ObjectPrototype$1) {
	  TypedArrayPrototype$2 = TypedArray$1.prototype;
	  if (NATIVE_ARRAY_BUFFER_VIEWS$2) for (NAME in TypedArrayConstructorsList) {
	    if (global$m[NAME]) setPrototypeOf$3(global$m[NAME].prototype, TypedArrayPrototype$2);
	  }
	}

	// WebKit bug - one more object in Uint8ClampedArray prototype chain
	if (NATIVE_ARRAY_BUFFER_VIEWS$2 && getPrototypeOf$8(Uint8ClampedArrayPrototype) !== TypedArrayPrototype$2) {
	  setPrototypeOf$3(Uint8ClampedArrayPrototype, TypedArrayPrototype$2);
	}
	if (DESCRIPTORS$9 && !hasOwn$8(TypedArrayPrototype$2, TO_STRING_TAG$5)) {
	  TYPED_ARRAY_TAG_REQUIRED = true;
	  defineBuiltInAccessor$8(TypedArrayPrototype$2, TO_STRING_TAG$5, {
	    configurable: true,
	    get: function get() {
	      return isObject$h(this) ? this[TYPED_ARRAY_TAG$1] : undefined;
	    }
	  });
	  for (NAME in TypedArrayConstructorsList) if (global$m[NAME]) {
	    createNonEnumerableProperty$a(global$m[NAME], TYPED_ARRAY_TAG$1, NAME);
	  }
	}
	var arrayBufferViewCore = {
	  NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS$2,
	  TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQUIRED && TYPED_ARRAY_TAG$1,
	  aTypedArray: aTypedArray$l,
	  aTypedArrayConstructor: aTypedArrayConstructor$3,
	  exportTypedArrayMethod: exportTypedArrayMethod$m,
	  exportTypedArrayStaticMethod: exportTypedArrayStaticMethod$2,
	  getTypedArrayConstructor: getTypedArrayConstructor$1,
	  isView: isView,
	  isTypedArray: isTypedArray$1,
	  TypedArray: TypedArray$1,
	  TypedArrayPrototype: TypedArrayPrototype$2
	};

	/* eslint-disable no-new -- required for testing */
	var global$l = global$R;
	var fails$c = fails$13;
	var checkCorrectnessOfIteration = checkCorrectnessOfIteration$4;
	var NATIVE_ARRAY_BUFFER_VIEWS$1 = arrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;
	var ArrayBuffer$2 = global$l.ArrayBuffer;
	var Int8Array$3 = global$l.Int8Array;
	var typedArrayConstructorsRequireWrappers = !NATIVE_ARRAY_BUFFER_VIEWS$1 || !fails$c(function () {
	  Int8Array$3(1);
	}) || !fails$c(function () {
	  new Int8Array$3(-1);
	}) || !checkCorrectnessOfIteration(function (iterable) {
	  new Int8Array$3();
	  new Int8Array$3(null);
	  new Int8Array$3(1.5);
	  new Int8Array$3(iterable);
	}, true) || fails$c(function () {
	  // Safari (11+) bug - a reason why even Safari 13 should load a typed array polyfill
	  return new Int8Array$3(new ArrayBuffer$2(2), 1, undefined).length !== 1;
	});

	var toIntegerOrInfinity$5 = toIntegerOrInfinity$e;
	var toLength$2 = toLength$b;
	var $RangeError$6 = RangeError;

	// `ToIndex` abstract operation
	// https://tc39.es/ecma262/#sec-toindex
	var toIndex$2 = function toIndex(it) {
	  if (it === undefined) return 0;
	  var number = toIntegerOrInfinity$5(it);
	  var length = toLength$2(number);
	  if (number !== length) throw new $RangeError$6('Wrong length or index');
	  return length;
	};

	// `Math.sign` method implementation
	// https://tc39.es/ecma262/#sec-math.sign
	// eslint-disable-next-line es/no-math-sign -- safe
	var mathSign = Math.sign || function sign(x) {
	  var n = +x;
	  // eslint-disable-next-line no-self-compare -- NaN check
	  return n === 0 || n !== n ? n : n < 0 ? -1 : 1;
	};

	var sign = mathSign;
	var abs$1 = Math.abs;
	var EPSILON = 2.220446049250313e-16; // Number.EPSILON
	var INVERSE_EPSILON = 1 / EPSILON;
	var roundTiesToEven = function roundTiesToEven(n) {
	  return n + INVERSE_EPSILON - INVERSE_EPSILON;
	};
	var mathFloatRound = function mathFloatRound(x, FLOAT_EPSILON, FLOAT_MAX_VALUE, FLOAT_MIN_VALUE) {
	  var n = +x;
	  var absolute = abs$1(n);
	  var s = sign(n);
	  if (absolute < FLOAT_MIN_VALUE) return s * roundTiesToEven(absolute / FLOAT_MIN_VALUE / FLOAT_EPSILON) * FLOAT_MIN_VALUE * FLOAT_EPSILON;
	  var a = (1 + FLOAT_EPSILON / EPSILON) * absolute;
	  var result = a - (a - absolute);
	  // eslint-disable-next-line no-self-compare -- NaN check
	  if (result > FLOAT_MAX_VALUE || result !== result) return s * Infinity;
	  return s * result;
	};

	var floatRound = mathFloatRound;
	var FLOAT32_EPSILON = 1.1920928955078125e-7; // 2 ** -23;
	var FLOAT32_MAX_VALUE = 3.4028234663852886e+38; // 2 ** 128 - 2 ** 104
	var FLOAT32_MIN_VALUE = 1.1754943508222875e-38; // 2 ** -126;

	// `Math.fround` method implementation
	// https://tc39.es/ecma262/#sec-math.fround
	// eslint-disable-next-line es/no-math-fround -- safe
	var mathFround = Math.fround || function fround(x) {
	  return floatRound(x, FLOAT32_EPSILON, FLOAT32_MAX_VALUE, FLOAT32_MIN_VALUE);
	};

	// IEEE754 conversions based on https://github.com/feross/ieee754
	var $Array = Array;
	var abs = Math.abs;
	var pow$2 = Math.pow;
	var floor$4 = Math.floor;
	var log = Math.log;
	var LN2 = Math.LN2;
	var pack = function pack(number, mantissaLength, bytes) {
	  var buffer = $Array(bytes);
	  var exponentLength = bytes * 8 - mantissaLength - 1;
	  var eMax = (1 << exponentLength) - 1;
	  var eBias = eMax >> 1;
	  var rt = mantissaLength === 23 ? pow$2(2, -24) - pow$2(2, -77) : 0;
	  var sign = number < 0 || number === 0 && 1 / number < 0 ? 1 : 0;
	  var index = 0;
	  var exponent, mantissa, c;
	  number = abs(number);
	  // eslint-disable-next-line no-self-compare -- NaN check
	  if (number !== number || number === Infinity) {
	    // eslint-disable-next-line no-self-compare -- NaN check
	    mantissa = number !== number ? 1 : 0;
	    exponent = eMax;
	  } else {
	    exponent = floor$4(log(number) / LN2);
	    c = pow$2(2, -exponent);
	    if (number * c < 1) {
	      exponent--;
	      c *= 2;
	    }
	    if (exponent + eBias >= 1) {
	      number += rt / c;
	    } else {
	      number += rt * pow$2(2, 1 - eBias);
	    }
	    if (number * c >= 2) {
	      exponent++;
	      c /= 2;
	    }
	    if (exponent + eBias >= eMax) {
	      mantissa = 0;
	      exponent = eMax;
	    } else if (exponent + eBias >= 1) {
	      mantissa = (number * c - 1) * pow$2(2, mantissaLength);
	      exponent += eBias;
	    } else {
	      mantissa = number * pow$2(2, eBias - 1) * pow$2(2, mantissaLength);
	      exponent = 0;
	    }
	  }
	  while (mantissaLength >= 8) {
	    buffer[index++] = mantissa & 255;
	    mantissa /= 256;
	    mantissaLength -= 8;
	  }
	  exponent = exponent << mantissaLength | mantissa;
	  exponentLength += mantissaLength;
	  while (exponentLength > 0) {
	    buffer[index++] = exponent & 255;
	    exponent /= 256;
	    exponentLength -= 8;
	  }
	  buffer[--index] |= sign * 128;
	  return buffer;
	};
	var unpack = function unpack(buffer, mantissaLength) {
	  var bytes = buffer.length;
	  var exponentLength = bytes * 8 - mantissaLength - 1;
	  var eMax = (1 << exponentLength) - 1;
	  var eBias = eMax >> 1;
	  var nBits = exponentLength - 7;
	  var index = bytes - 1;
	  var sign = buffer[index--];
	  var exponent = sign & 127;
	  var mantissa;
	  sign >>= 7;
	  while (nBits > 0) {
	    exponent = exponent * 256 + buffer[index--];
	    nBits -= 8;
	  }
	  mantissa = exponent & (1 << -nBits) - 1;
	  exponent >>= -nBits;
	  nBits += mantissaLength;
	  while (nBits > 0) {
	    mantissa = mantissa * 256 + buffer[index--];
	    nBits -= 8;
	  }
	  if (exponent === 0) {
	    exponent = 1 - eBias;
	  } else if (exponent === eMax) {
	    return mantissa ? NaN : sign ? -Infinity : Infinity;
	  } else {
	    mantissa += pow$2(2, mantissaLength);
	    exponent -= eBias;
	  }
	  return (sign ? -1 : 1) * mantissa * pow$2(2, exponent - mantissaLength);
	};
	var ieee754 = {
	  pack: pack,
	  unpack: unpack
	};

	var global$k = global$R;
	var uncurryThis$p = functionUncurryThis;
	var DESCRIPTORS$8 = descriptors;
	var NATIVE_ARRAY_BUFFER = arrayBufferBasicDetection;
	var FunctionName = functionName;
	var createNonEnumerableProperty$9 = createNonEnumerableProperty$g;
	var defineBuiltInAccessor$7 = defineBuiltInAccessor$f;
	var defineBuiltIns$7 = defineBuiltIns$9;
	var fails$b = fails$13;
	var anInstance$7 = anInstance$b;
	var toIntegerOrInfinity$4 = toIntegerOrInfinity$e;
	var toLength$1 = toLength$b;
	var toIndex$1 = toIndex$2;
	var fround$1 = mathFround;
	var IEEE754 = ieee754;
	var getPrototypeOf$7 = objectGetPrototypeOf$2;
	var setPrototypeOf$2 = objectSetPrototypeOf$1;
	var arrayFill = arrayFill$1;
	var arraySlice$4 = arraySlice$b;
	var inheritIfRequired$1 = inheritIfRequired$5;
	var copyConstructorProperties$1 = copyConstructorProperties$5;
	var setToStringTag$3 = setToStringTag$c;
	var InternalStateModule$b = internalState;
	var PROPER_FUNCTION_NAME = FunctionName.PROPER;
	var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
	var ARRAY_BUFFER = 'ArrayBuffer';
	var DATA_VIEW = 'DataView';
	var PROTOTYPE = 'prototype';
	var WRONG_LENGTH$1 = 'Wrong length';
	var WRONG_INDEX = 'Wrong index';
	var getInternalArrayBufferState = InternalStateModule$b.getterFor(ARRAY_BUFFER);
	var getInternalDataViewState = InternalStateModule$b.getterFor(DATA_VIEW);
	var setInternalState$b = InternalStateModule$b.set;
	var NativeArrayBuffer = global$k[ARRAY_BUFFER];
	var $ArrayBuffer = NativeArrayBuffer;
	var ArrayBufferPrototype$1 = $ArrayBuffer && $ArrayBuffer[PROTOTYPE];
	var $DataView = global$k[DATA_VIEW];
	var DataViewPrototype = $DataView && $DataView[PROTOTYPE];
	var ObjectPrototype = Object.prototype;
	var Array$2 = global$k.Array;
	var RangeError$3 = global$k.RangeError;
	var fill = uncurryThis$p(arrayFill);
	var reverse = uncurryThis$p([].reverse);
	var packIEEE754 = IEEE754.pack;
	var unpackIEEE754 = IEEE754.unpack;
	var packInt8 = function packInt8(number) {
	  return [number & 0xFF];
	};
	var packInt16 = function packInt16(number) {
	  return [number & 0xFF, number >> 8 & 0xFF];
	};
	var packInt32 = function packInt32(number) {
	  return [number & 0xFF, number >> 8 & 0xFF, number >> 16 & 0xFF, number >> 24 & 0xFF];
	};
	var unpackInt32 = function unpackInt32(buffer) {
	  return buffer[3] << 24 | buffer[2] << 16 | buffer[1] << 8 | buffer[0];
	};
	var packFloat32 = function packFloat32(number) {
	  return packIEEE754(fround$1(number), 23, 4);
	};
	var packFloat64 = function packFloat64(number) {
	  return packIEEE754(number, 52, 8);
	};
	var addGetter$1 = function addGetter(Constructor, key, getInternalState) {
	  defineBuiltInAccessor$7(Constructor[PROTOTYPE], key, {
	    configurable: true,
	    get: function get() {
	      return getInternalState(this)[key];
	    }
	  });
	};
	var get$2 = function get(view, count, index, isLittleEndian) {
	  var store = getInternalDataViewState(view);
	  var intIndex = toIndex$1(index);
	  var boolIsLittleEndian = !!isLittleEndian;
	  if (intIndex + count > store.byteLength) throw new RangeError$3(WRONG_INDEX);
	  var bytes = store.bytes;
	  var start = intIndex + store.byteOffset;
	  var pack = arraySlice$4(bytes, start, start + count);
	  return boolIsLittleEndian ? pack : reverse(pack);
	};
	var set$6 = function set(view, count, index, conversion, value, isLittleEndian) {
	  var store = getInternalDataViewState(view);
	  var intIndex = toIndex$1(index);
	  var pack = conversion(+value);
	  var boolIsLittleEndian = !!isLittleEndian;
	  if (intIndex + count > store.byteLength) throw new RangeError$3(WRONG_INDEX);
	  var bytes = store.bytes;
	  var start = intIndex + store.byteOffset;
	  for (var i = 0; i < count; i++) bytes[start + i] = pack[boolIsLittleEndian ? i : count - i - 1];
	};
	if (!NATIVE_ARRAY_BUFFER) {
	  $ArrayBuffer = function ArrayBuffer(length) {
	    anInstance$7(this, ArrayBufferPrototype$1);
	    var byteLength = toIndex$1(length);
	    setInternalState$b(this, {
	      type: ARRAY_BUFFER,
	      bytes: fill(Array$2(byteLength), 0),
	      byteLength: byteLength
	    });
	    if (!DESCRIPTORS$8) {
	      this.byteLength = byteLength;
	      this.detached = false;
	    }
	  };
	  ArrayBufferPrototype$1 = $ArrayBuffer[PROTOTYPE];
	  $DataView = function DataView(buffer, byteOffset, byteLength) {
	    anInstance$7(this, DataViewPrototype);
	    anInstance$7(buffer, ArrayBufferPrototype$1);
	    var bufferState = getInternalArrayBufferState(buffer);
	    var bufferLength = bufferState.byteLength;
	    var offset = toIntegerOrInfinity$4(byteOffset);
	    if (offset < 0 || offset > bufferLength) throw new RangeError$3('Wrong offset');
	    byteLength = byteLength === undefined ? bufferLength - offset : toLength$1(byteLength);
	    if (offset + byteLength > bufferLength) throw new RangeError$3(WRONG_LENGTH$1);
	    setInternalState$b(this, {
	      type: DATA_VIEW,
	      buffer: buffer,
	      byteLength: byteLength,
	      byteOffset: offset,
	      bytes: bufferState.bytes
	    });
	    if (!DESCRIPTORS$8) {
	      this.buffer = buffer;
	      this.byteLength = byteLength;
	      this.byteOffset = offset;
	    }
	  };
	  DataViewPrototype = $DataView[PROTOTYPE];
	  if (DESCRIPTORS$8) {
	    addGetter$1($ArrayBuffer, 'byteLength', getInternalArrayBufferState);
	    addGetter$1($DataView, 'buffer', getInternalDataViewState);
	    addGetter$1($DataView, 'byteLength', getInternalDataViewState);
	    addGetter$1($DataView, 'byteOffset', getInternalDataViewState);
	  }
	  defineBuiltIns$7(DataViewPrototype, {
	    getInt8: function getInt8(byteOffset) {
	      return get$2(this, 1, byteOffset)[0] << 24 >> 24;
	    },
	    getUint8: function getUint8(byteOffset) {
	      return get$2(this, 1, byteOffset)[0];
	    },
	    getInt16: function getInt16(byteOffset /* , littleEndian */) {
	      var bytes = get$2(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : false);
	      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
	    },
	    getUint16: function getUint16(byteOffset /* , littleEndian */) {
	      var bytes = get$2(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : false);
	      return bytes[1] << 8 | bytes[0];
	    },
	    getInt32: function getInt32(byteOffset /* , littleEndian */) {
	      return unpackInt32(get$2(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : false));
	    },
	    getUint32: function getUint32(byteOffset /* , littleEndian */) {
	      return unpackInt32(get$2(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : false)) >>> 0;
	    },
	    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
	      return unpackIEEE754(get$2(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : false), 23);
	    },
	    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
	      return unpackIEEE754(get$2(this, 8, byteOffset, arguments.length > 1 ? arguments[1] : false), 52);
	    },
	    setInt8: function setInt8(byteOffset, value) {
	      set$6(this, 1, byteOffset, packInt8, value);
	    },
	    setUint8: function setUint8(byteOffset, value) {
	      set$6(this, 1, byteOffset, packInt8, value);
	    },
	    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
	      set$6(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : false);
	    },
	    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
	      set$6(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : false);
	    },
	    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
	      set$6(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : false);
	    },
	    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
	      set$6(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : false);
	    },
	    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
	      set$6(this, 4, byteOffset, packFloat32, value, arguments.length > 2 ? arguments[2] : false);
	    },
	    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
	      set$6(this, 8, byteOffset, packFloat64, value, arguments.length > 2 ? arguments[2] : false);
	    }
	  });
	} else {
	  var INCORRECT_ARRAY_BUFFER_NAME = PROPER_FUNCTION_NAME && NativeArrayBuffer.name !== ARRAY_BUFFER;
	  /* eslint-disable no-new -- required for testing */
	  if (!fails$b(function () {
	    NativeArrayBuffer(1);
	  }) || !fails$b(function () {
	    new NativeArrayBuffer(-1);
	  }) || fails$b(function () {
	    new NativeArrayBuffer();
	    new NativeArrayBuffer(1.5);
	    new NativeArrayBuffer(NaN);
	    return NativeArrayBuffer.length !== 1 || INCORRECT_ARRAY_BUFFER_NAME && !CONFIGURABLE_FUNCTION_NAME;
	  })) {
	    /* eslint-enable no-new -- required for testing */
	    $ArrayBuffer = function ArrayBuffer(length) {
	      anInstance$7(this, ArrayBufferPrototype$1);
	      return inheritIfRequired$1(new NativeArrayBuffer(toIndex$1(length)), this, $ArrayBuffer);
	    };
	    $ArrayBuffer[PROTOTYPE] = ArrayBufferPrototype$1;
	    ArrayBufferPrototype$1.constructor = $ArrayBuffer;
	    copyConstructorProperties$1($ArrayBuffer, NativeArrayBuffer);
	  } else if (INCORRECT_ARRAY_BUFFER_NAME && CONFIGURABLE_FUNCTION_NAME) {
	    createNonEnumerableProperty$9(NativeArrayBuffer, 'name', ARRAY_BUFFER);
	  }

	  // WebKit bug - the same parent prototype for typed arrays and data view
	  if (setPrototypeOf$2 && getPrototypeOf$7(DataViewPrototype) !== ObjectPrototype) {
	    setPrototypeOf$2(DataViewPrototype, ObjectPrototype);
	  }

	  // iOS Safari 7.x bug
	  var testView = new $DataView(new $ArrayBuffer(2));
	  var $setInt8 = uncurryThis$p(DataViewPrototype.setInt8);
	  testView.setInt8(0, 2147483648);
	  testView.setInt8(1, 2147483649);
	  if (testView.getInt8(0) || !testView.getInt8(1)) defineBuiltIns$7(DataViewPrototype, {
	    setInt8: function setInt8(byteOffset, value) {
	      $setInt8(this, byteOffset, value << 24 >> 24);
	    },
	    setUint8: function setUint8(byteOffset, value) {
	      $setInt8(this, byteOffset, value << 24 >> 24);
	    }
	  }, {
	    unsafe: true
	  });
	}
	setToStringTag$3($ArrayBuffer, ARRAY_BUFFER);
	setToStringTag$3($DataView, DATA_VIEW);
	var arrayBuffer = {
	  ArrayBuffer: $ArrayBuffer,
	  DataView: $DataView
	};

	var isObject$g = isObject$J;
	var floor$3 = Math.floor;

	// `IsIntegralNumber` abstract operation
	// https://tc39.es/ecma262/#sec-isintegralnumber
	// eslint-disable-next-line es/no-number-isinteger -- safe
	var isIntegralNumber$1 = Number.isInteger || function isInteger(it) {
	  return !isObject$g(it) && isFinite(it) && floor$3(it) === it;
	};

	var toIntegerOrInfinity$3 = toIntegerOrInfinity$e;
	var $RangeError$5 = RangeError;
	var toPositiveInteger$5 = function toPositiveInteger(it) {
	  var result = toIntegerOrInfinity$3(it);
	  if (result < 0) throw new $RangeError$5("The argument can't be less than 0");
	  return result;
	};

	var toPositiveInteger$4 = toPositiveInteger$5;
	var $RangeError$4 = RangeError;
	var toOffset$2 = function toOffset(it, BYTES) {
	  var offset = toPositiveInteger$4(it);
	  if (offset % BYTES) throw new $RangeError$4('Wrong offset');
	  return offset;
	};

	var round = Math.round;
	var toUint8Clamped$1 = function toUint8Clamped(it) {
	  var value = round(it);
	  return value < 0 ? 0 : value > 0xFF ? 0xFF : value & 0xFF;
	};

	var classof$4 = classof$l;
	var isBigIntArray$1 = function isBigIntArray(it) {
	  var klass = classof$4(it);
	  return klass === 'BigInt64Array' || klass === 'BigUint64Array';
	};

	var toPrimitive = toPrimitive$3;
	var $TypeError$d = TypeError;

	// `ToBigInt` abstract operation
	// https://tc39.es/ecma262/#sec-tobigint
	var toBigInt$2 = function toBigInt(argument) {
	  var prim = toPrimitive(argument, 'number');
	  if (typeof prim == 'number') throw new $TypeError$d("Can't convert number to bigint");
	  // eslint-disable-next-line es/no-bigint -- safe
	  return BigInt(prim);
	};

	var bind$f = functionBindContext;
	var call$G = functionCall;
	var aConstructor = aConstructor$3;
	var toObject$7 = toObject$u;
	var lengthOfArrayLike$5 = lengthOfArrayLike$m;
	var getIterator$2 = getIterator$5;
	var getIteratorMethod$3 = getIteratorMethod$7;
	var isArrayIteratorMethod = isArrayIteratorMethod$3;
	var isBigIntArray = isBigIntArray$1;
	var aTypedArrayConstructor$2 = arrayBufferViewCore.aTypedArrayConstructor;
	var toBigInt$1 = toBigInt$2;
	var typedArrayFrom$2 = function from(source /* , mapfn, thisArg */) {
	  var C = aConstructor(this);
	  var O = toObject$7(source);
	  var argumentsLength = arguments.length;
	  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
	  var mapping = mapfn !== undefined;
	  var iteratorMethod = getIteratorMethod$3(O);
	  var i, length, result, thisIsBigIntArray, value, step, iterator, next;
	  if (iteratorMethod && !isArrayIteratorMethod(iteratorMethod)) {
	    iterator = getIterator$2(O, iteratorMethod);
	    next = iterator.next;
	    O = [];
	    while (!(step = call$G(next, iterator)).done) {
	      O.push(step.value);
	    }
	  }
	  if (mapping && argumentsLength > 2) {
	    mapfn = bind$f(mapfn, arguments[2]);
	  }
	  length = lengthOfArrayLike$5(O);
	  result = new (aTypedArrayConstructor$2(C))(length);
	  thisIsBigIntArray = isBigIntArray(result);
	  for (i = 0; length > i; i++) {
	    value = mapping ? mapfn(O[i], i) : O[i];
	    // FF30- typed arrays doesn't properly convert objects to typed array values
	    result[i] = thisIsBigIntArray ? toBigInt$1(value) : +value;
	  }
	  return result;
	};

	var lengthOfArrayLike$4 = lengthOfArrayLike$m;
	var arrayFromConstructorAndList$2 = function arrayFromConstructorAndList(Constructor, list, $length) {
	  var index = 0;
	  var length = arguments.length > 2 ? $length : lengthOfArrayLike$4(list);
	  var result = new Constructor(length);
	  while (length > index) result[index] = list[index++];
	  return result;
	};

	var $$1R = _export;
	var global$j = global$R;
	var call$F = functionCall;
	var DESCRIPTORS$7 = descriptors;
	var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS$2 = typedArrayConstructorsRequireWrappers;
	var ArrayBufferViewCore$n = arrayBufferViewCore;
	var ArrayBufferModule = arrayBuffer;
	var anInstance$6 = anInstance$b;
	var createPropertyDescriptor$3 = createPropertyDescriptor$a;
	var createNonEnumerableProperty$8 = createNonEnumerableProperty$g;
	var isIntegralNumber = isIntegralNumber$1;
	var toLength = toLength$b;
	var toIndex = toIndex$2;
	var toOffset$1 = toOffset$2;
	var toUint8Clamped = toUint8Clamped$1;
	var toPropertyKey = toPropertyKey$8;
	var hasOwn$7 = hasOwnProperty_1;
	var classof$3 = classof$l;
	var isObject$f = isObject$J;
	var isSymbol = isSymbol$6;
	var create$7 = objectCreate;
	var isPrototypeOf$3 = objectIsPrototypeOf;
	var setPrototypeOf$1 = objectSetPrototypeOf$1;
	var getOwnPropertyNames = objectGetOwnPropertyNames.f;
	var typedArrayFrom$1 = typedArrayFrom$2;
	var forEach$3 = arrayIteration.forEach;
	var setSpecies$1 = setSpecies$6;
	var defineBuiltInAccessor$6 = defineBuiltInAccessor$f;
	var definePropertyModule = objectDefineProperty;
	var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
	var arrayFromConstructorAndList$1 = arrayFromConstructorAndList$2;
	var InternalStateModule$a = internalState;
	var inheritIfRequired = inheritIfRequired$5;
	var getInternalState$4 = InternalStateModule$a.get;
	var setInternalState$a = InternalStateModule$a.set;
	var enforceInternalState$1 = InternalStateModule$a.enforce;
	var nativeDefineProperty = definePropertyModule.f;
	var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
	var RangeError$2 = global$j.RangeError;
	var ArrayBuffer$1 = ArrayBufferModule.ArrayBuffer;
	var ArrayBufferPrototype = ArrayBuffer$1.prototype;
	var DataView$1 = ArrayBufferModule.DataView;
	var NATIVE_ARRAY_BUFFER_VIEWS = ArrayBufferViewCore$n.NATIVE_ARRAY_BUFFER_VIEWS;
	var TYPED_ARRAY_TAG = ArrayBufferViewCore$n.TYPED_ARRAY_TAG;
	var TypedArray = ArrayBufferViewCore$n.TypedArray;
	var TypedArrayPrototype$1 = ArrayBufferViewCore$n.TypedArrayPrototype;
	var isTypedArray = ArrayBufferViewCore$n.isTypedArray;
	var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
	var WRONG_LENGTH = 'Wrong length';
	var addGetter = function addGetter(it, key) {
	  defineBuiltInAccessor$6(it, key, {
	    configurable: true,
	    get: function get() {
	      return getInternalState$4(this)[key];
	    }
	  });
	};
	var isArrayBuffer = function isArrayBuffer(it) {
	  var klass;
	  return isPrototypeOf$3(ArrayBufferPrototype, it) || (klass = classof$3(it)) === 'ArrayBuffer' || klass === 'SharedArrayBuffer';
	};
	var isTypedArrayIndex = function isTypedArrayIndex(target, key) {
	  return isTypedArray(target) && !isSymbol(key) && key in target && isIntegralNumber(+key) && key >= 0;
	};
	var wrappedGetOwnPropertyDescriptor = function getOwnPropertyDescriptor(target, key) {
	  key = toPropertyKey(key);
	  return isTypedArrayIndex(target, key) ? createPropertyDescriptor$3(2, target[key]) : nativeGetOwnPropertyDescriptor(target, key);
	};
	var wrappedDefineProperty = function defineProperty(target, key, descriptor) {
	  key = toPropertyKey(key);
	  if (isTypedArrayIndex(target, key) && isObject$f(descriptor) && hasOwn$7(descriptor, 'value') && !hasOwn$7(descriptor, 'get') && !hasOwn$7(descriptor, 'set')
	  // TODO: add validation descriptor w/o calling accessors
	  && !descriptor.configurable && (!hasOwn$7(descriptor, 'writable') || descriptor.writable) && (!hasOwn$7(descriptor, 'enumerable') || descriptor.enumerable)) {
	    target[key] = descriptor.value;
	    return target;
	  }
	  return nativeDefineProperty(target, key, descriptor);
	};
	if (DESCRIPTORS$7) {
	  if (!NATIVE_ARRAY_BUFFER_VIEWS) {
	    getOwnPropertyDescriptorModule.f = wrappedGetOwnPropertyDescriptor;
	    definePropertyModule.f = wrappedDefineProperty;
	    addGetter(TypedArrayPrototype$1, 'buffer');
	    addGetter(TypedArrayPrototype$1, 'byteOffset');
	    addGetter(TypedArrayPrototype$1, 'byteLength');
	    addGetter(TypedArrayPrototype$1, 'length');
	  }
	  $$1R({
	    target: 'Object',
	    stat: true,
	    forced: !NATIVE_ARRAY_BUFFER_VIEWS
	  }, {
	    getOwnPropertyDescriptor: wrappedGetOwnPropertyDescriptor,
	    defineProperty: wrappedDefineProperty
	  });
	  typedArrayConstructor.exports = function (TYPE, wrapper, CLAMPED) {
	    var BYTES = TYPE.match(/\d+/)[0] / 8;
	    var CONSTRUCTOR_NAME = TYPE + (CLAMPED ? 'Clamped' : '') + 'Array';
	    var GETTER = 'get' + TYPE;
	    var SETTER = 'set' + TYPE;
	    var NativeTypedArrayConstructor = global$j[CONSTRUCTOR_NAME];
	    var TypedArrayConstructor = NativeTypedArrayConstructor;
	    var TypedArrayConstructorPrototype = TypedArrayConstructor && TypedArrayConstructor.prototype;
	    var exported = {};
	    var getter = function getter(that, index) {
	      var data = getInternalState$4(that);
	      return data.view[GETTER](index * BYTES + data.byteOffset, true);
	    };
	    var setter = function setter(that, index, value) {
	      var data = getInternalState$4(that);
	      data.view[SETTER](index * BYTES + data.byteOffset, CLAMPED ? toUint8Clamped(value) : value, true);
	    };
	    var addElement = function addElement(that, index) {
	      nativeDefineProperty(that, index, {
	        get: function get() {
	          return getter(this, index);
	        },
	        set: function set(value) {
	          return setter(this, index, value);
	        },
	        enumerable: true
	      });
	    };
	    if (!NATIVE_ARRAY_BUFFER_VIEWS) {
	      TypedArrayConstructor = wrapper(function (that, data, offset, $length) {
	        anInstance$6(that, TypedArrayConstructorPrototype);
	        var index = 0;
	        var byteOffset = 0;
	        var buffer, byteLength, length;
	        if (!isObject$f(data)) {
	          length = toIndex(data);
	          byteLength = length * BYTES;
	          buffer = new ArrayBuffer$1(byteLength);
	        } else if (isArrayBuffer(data)) {
	          buffer = data;
	          byteOffset = toOffset$1(offset, BYTES);
	          var $len = data.byteLength;
	          if ($length === undefined) {
	            if ($len % BYTES) throw new RangeError$2(WRONG_LENGTH);
	            byteLength = $len - byteOffset;
	            if (byteLength < 0) throw new RangeError$2(WRONG_LENGTH);
	          } else {
	            byteLength = toLength($length) * BYTES;
	            if (byteLength + byteOffset > $len) throw new RangeError$2(WRONG_LENGTH);
	          }
	          length = byteLength / BYTES;
	        } else if (isTypedArray(data)) {
	          return arrayFromConstructorAndList$1(TypedArrayConstructor, data);
	        } else {
	          return call$F(typedArrayFrom$1, TypedArrayConstructor, data);
	        }
	        setInternalState$a(that, {
	          buffer: buffer,
	          byteOffset: byteOffset,
	          byteLength: byteLength,
	          length: length,
	          view: new DataView$1(buffer)
	        });
	        while (index < length) addElement(that, index++);
	      });
	      if (setPrototypeOf$1) setPrototypeOf$1(TypedArrayConstructor, TypedArray);
	      TypedArrayConstructorPrototype = TypedArrayConstructor.prototype = create$7(TypedArrayPrototype$1);
	    } else if (TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS$2) {
	      TypedArrayConstructor = wrapper(function (dummy, data, typedArrayOffset, $length) {
	        anInstance$6(dummy, TypedArrayConstructorPrototype);
	        return inheritIfRequired(function () {
	          if (!isObject$f(data)) return new NativeTypedArrayConstructor(toIndex(data));
	          if (isArrayBuffer(data)) return $length !== undefined ? new NativeTypedArrayConstructor(data, toOffset$1(typedArrayOffset, BYTES), $length) : typedArrayOffset !== undefined ? new NativeTypedArrayConstructor(data, toOffset$1(typedArrayOffset, BYTES)) : new NativeTypedArrayConstructor(data);
	          if (isTypedArray(data)) return arrayFromConstructorAndList$1(TypedArrayConstructor, data);
	          return call$F(typedArrayFrom$1, TypedArrayConstructor, data);
	        }(), dummy, TypedArrayConstructor);
	      });
	      if (setPrototypeOf$1) setPrototypeOf$1(TypedArrayConstructor, TypedArray);
	      forEach$3(getOwnPropertyNames(NativeTypedArrayConstructor), function (key) {
	        if (!(key in TypedArrayConstructor)) {
	          createNonEnumerableProperty$8(TypedArrayConstructor, key, NativeTypedArrayConstructor[key]);
	        }
	      });
	      TypedArrayConstructor.prototype = TypedArrayConstructorPrototype;
	    }
	    if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) {
	      createNonEnumerableProperty$8(TypedArrayConstructorPrototype, 'constructor', TypedArrayConstructor);
	    }
	    enforceInternalState$1(TypedArrayConstructorPrototype).TypedArrayConstructor = TypedArrayConstructor;
	    if (TYPED_ARRAY_TAG) {
	      createNonEnumerableProperty$8(TypedArrayConstructorPrototype, TYPED_ARRAY_TAG, CONSTRUCTOR_NAME);
	    }
	    var FORCED = TypedArrayConstructor !== NativeTypedArrayConstructor;
	    exported[CONSTRUCTOR_NAME] = TypedArrayConstructor;
	    $$1R({
	      global: true,
	      constructor: true,
	      forced: FORCED,
	      sham: !NATIVE_ARRAY_BUFFER_VIEWS
	    }, exported);
	    if (!(BYTES_PER_ELEMENT in TypedArrayConstructor)) {
	      createNonEnumerableProperty$8(TypedArrayConstructor, BYTES_PER_ELEMENT, BYTES);
	    }
	    if (!(BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) {
	      createNonEnumerableProperty$8(TypedArrayConstructorPrototype, BYTES_PER_ELEMENT, BYTES);
	    }
	    setSpecies$1(CONSTRUCTOR_NAME);
	  };
	} else typedArrayConstructor.exports = function () {/* empty */};

	var createTypedArrayConstructor$8 = typedArrayConstructor.exports;

	// `Float32Array` constructor
	// https://tc39.es/ecma262/#sec-typedarray-objects
	createTypedArrayConstructor$8('Float32', function (init) {
	  return function Float32Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

	var createTypedArrayConstructor$7 = typedArrayConstructor.exports;

	// `Float64Array` constructor
	// https://tc39.es/ecma262/#sec-typedarray-objects
	createTypedArrayConstructor$7('Float64', function (init) {
	  return function Float64Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

	var createTypedArrayConstructor$6 = typedArrayConstructor.exports;

	// `Int8Array` constructor
	// https://tc39.es/ecma262/#sec-typedarray-objects
	createTypedArrayConstructor$6('Int8', function (init) {
	  return function Int8Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

	var createTypedArrayConstructor$5 = typedArrayConstructor.exports;

	// `Int16Array` constructor
	// https://tc39.es/ecma262/#sec-typedarray-objects
	createTypedArrayConstructor$5('Int16', function (init) {
	  return function Int16Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

	var createTypedArrayConstructor$4 = typedArrayConstructor.exports;

	// `Int32Array` constructor
	// https://tc39.es/ecma262/#sec-typedarray-objects
	createTypedArrayConstructor$4('Int32', function (init) {
	  return function Int32Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

	var createTypedArrayConstructor$3 = typedArrayConstructor.exports;

	// `Uint8Array` constructor
	// https://tc39.es/ecma262/#sec-typedarray-objects
	createTypedArrayConstructor$3('Uint8', function (init) {
	  return function Uint8Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

	var createTypedArrayConstructor$2 = typedArrayConstructor.exports;

	// `Uint8ClampedArray` constructor
	// https://tc39.es/ecma262/#sec-typedarray-objects
	createTypedArrayConstructor$2('Uint8', function (init) {
	  return function Uint8ClampedArray(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	}, true);

	var createTypedArrayConstructor$1 = typedArrayConstructor.exports;

	// `Uint16Array` constructor
	// https://tc39.es/ecma262/#sec-typedarray-objects
	createTypedArrayConstructor$1('Uint16', function (init) {
	  return function Uint16Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

	var createTypedArrayConstructor = typedArrayConstructor.exports;

	// `Uint32Array` constructor
	// https://tc39.es/ecma262/#sec-typedarray-objects
	createTypedArrayConstructor('Uint32', function (init) {
	  return function Uint32Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

	var uncurryThis$o = functionUncurryThis;
	var ArrayBufferViewCore$m = arrayBufferViewCore;
	var $ArrayCopyWithin = arrayCopyWithin;
	var u$ArrayCopyWithin = uncurryThis$o($ArrayCopyWithin);
	var aTypedArray$k = ArrayBufferViewCore$m.aTypedArray;
	var exportTypedArrayMethod$l = ArrayBufferViewCore$m.exportTypedArrayMethod;

	// `%TypedArray%.prototype.copyWithin` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.copywithin
	exportTypedArrayMethod$l('copyWithin', function copyWithin(target, start /* , end */) {
	  return u$ArrayCopyWithin(aTypedArray$k(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
	});

	var ArrayBufferViewCore$l = arrayBufferViewCore;
	var $every$1 = arrayIteration.every;
	var aTypedArray$j = ArrayBufferViewCore$l.aTypedArray;
	var exportTypedArrayMethod$k = ArrayBufferViewCore$l.exportTypedArrayMethod;

	// `%TypedArray%.prototype.every` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.every
	exportTypedArrayMethod$k('every', function every(callbackfn /* , thisArg */) {
	  return $every$1(aTypedArray$j(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	});

	var ArrayBufferViewCore$k = arrayBufferViewCore;
	var $fill = arrayFill$1;
	var toBigInt = toBigInt$2;
	var classof$2 = classof$l;
	var call$E = functionCall;
	var uncurryThis$n = functionUncurryThis;
	var fails$a = fails$13;
	var aTypedArray$i = ArrayBufferViewCore$k.aTypedArray;
	var exportTypedArrayMethod$j = ArrayBufferViewCore$k.exportTypedArrayMethod;
	var slice = uncurryThis$n(''.slice);

	// V8 ~ Chrome < 59, Safari < 14.1, FF < 55, Edge <=18
	var CONVERSION_BUG = fails$a(function () {
	  var count = 0;
	  // eslint-disable-next-line es/no-typed-arrays -- safe
	  new Int8Array(2).fill({
	    valueOf: function valueOf() {
	      return count++;
	    }
	  });
	  return count !== 1;
	});

	// `%TypedArray%.prototype.fill` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.fill
	exportTypedArrayMethod$j('fill', function fill(value /* , start, end */) {
	  var length = arguments.length;
	  aTypedArray$i(this);
	  var actualValue = slice(classof$2(this), 0, 3) === 'Big' ? toBigInt(value) : +value;
	  return call$E($fill, this, actualValue, length > 1 ? arguments[1] : undefined, length > 2 ? arguments[2] : undefined);
	}, CONVERSION_BUG);

	var ArrayBufferViewCore$j = arrayBufferViewCore;
	var speciesConstructor = speciesConstructor$5;
	var aTypedArrayConstructor$1 = ArrayBufferViewCore$j.aTypedArrayConstructor;
	var getTypedArrayConstructor = ArrayBufferViewCore$j.getTypedArrayConstructor;

	// a part of `TypedArraySpeciesCreate` abstract operation
	// https://tc39.es/ecma262/#typedarray-species-create
	var typedArraySpeciesConstructor$3 = function typedArraySpeciesConstructor(originalArray) {
	  return aTypedArrayConstructor$1(speciesConstructor(originalArray, getTypedArrayConstructor(originalArray)));
	};

	var arrayFromConstructorAndList = arrayFromConstructorAndList$2;
	var typedArraySpeciesConstructor$2 = typedArraySpeciesConstructor$3;
	var typedArrayFromSpeciesAndList = function typedArrayFromSpeciesAndList(instance, list) {
	  return arrayFromConstructorAndList(typedArraySpeciesConstructor$2(instance), list);
	};

	var ArrayBufferViewCore$i = arrayBufferViewCore;
	var $filter = arrayIteration.filter;
	var fromSpeciesAndList = typedArrayFromSpeciesAndList;
	var aTypedArray$h = ArrayBufferViewCore$i.aTypedArray;
	var exportTypedArrayMethod$i = ArrayBufferViewCore$i.exportTypedArrayMethod;

	// `%TypedArray%.prototype.filter` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.filter
	exportTypedArrayMethod$i('filter', function filter(callbackfn /* , thisArg */) {
	  var list = $filter(aTypedArray$h(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  return fromSpeciesAndList(this, list);
	});

	var ArrayBufferViewCore$h = arrayBufferViewCore;
	var $find$1 = arrayIteration.find;
	var aTypedArray$g = ArrayBufferViewCore$h.aTypedArray;
	var exportTypedArrayMethod$h = ArrayBufferViewCore$h.exportTypedArrayMethod;

	// `%TypedArray%.prototype.find` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.find
	exportTypedArrayMethod$h('find', function find(predicate /* , thisArg */) {
	  return $find$1(aTypedArray$g(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	});

	var ArrayBufferViewCore$g = arrayBufferViewCore;
	var $findIndex = arrayIteration.findIndex;
	var aTypedArray$f = ArrayBufferViewCore$g.aTypedArray;
	var exportTypedArrayMethod$g = ArrayBufferViewCore$g.exportTypedArrayMethod;

	// `%TypedArray%.prototype.findIndex` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.findindex
	exportTypedArrayMethod$g('findIndex', function findIndex(predicate /* , thisArg */) {
	  return $findIndex(aTypedArray$f(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	});

	var ArrayBufferViewCore$f = arrayBufferViewCore;
	var $forEach$2 = arrayIteration.forEach;
	var aTypedArray$e = ArrayBufferViewCore$f.aTypedArray;
	var exportTypedArrayMethod$f = ArrayBufferViewCore$f.exportTypedArrayMethod;

	// `%TypedArray%.prototype.forEach` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.foreach
	exportTypedArrayMethod$f('forEach', function forEach(callbackfn /* , thisArg */) {
	  $forEach$2(aTypedArray$e(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	});

	var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS$1 = typedArrayConstructorsRequireWrappers;
	var exportTypedArrayStaticMethod$1 = arrayBufferViewCore.exportTypedArrayStaticMethod;
	var typedArrayFrom = typedArrayFrom$2;

	// `%TypedArray%.from` method
	// https://tc39.es/ecma262/#sec-%typedarray%.from
	exportTypedArrayStaticMethod$1('from', typedArrayFrom, TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS$1);

	var ArrayBufferViewCore$e = arrayBufferViewCore;
	var $includes = arrayIncludes.includes;
	var aTypedArray$d = ArrayBufferViewCore$e.aTypedArray;
	var exportTypedArrayMethod$e = ArrayBufferViewCore$e.exportTypedArrayMethod;

	// `%TypedArray%.prototype.includes` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.includes
	exportTypedArrayMethod$e('includes', function includes(searchElement /* , fromIndex */) {
	  return $includes(aTypedArray$d(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	});

	var ArrayBufferViewCore$d = arrayBufferViewCore;
	var $indexOf = arrayIncludes.indexOf;
	var aTypedArray$c = ArrayBufferViewCore$d.aTypedArray;
	var exportTypedArrayMethod$d = ArrayBufferViewCore$d.exportTypedArrayMethod;

	// `%TypedArray%.prototype.indexOf` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.indexof
	exportTypedArrayMethod$d('indexOf', function indexOf(searchElement /* , fromIndex */) {
	  return $indexOf(aTypedArray$c(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	});

	var global$i = global$R;
	var fails$9 = fails$13;
	var uncurryThis$m = functionUncurryThis;
	var ArrayBufferViewCore$c = arrayBufferViewCore;
	var ArrayIterators = es_array_iterator;
	var wellKnownSymbol$e = wellKnownSymbol$I;
	var ITERATOR$5 = wellKnownSymbol$e('iterator');
	var Uint8Array$1 = global$i.Uint8Array;
	var arrayValues = uncurryThis$m(ArrayIterators.values);
	var arrayKeys = uncurryThis$m(ArrayIterators.keys);
	var arrayEntries = uncurryThis$m(ArrayIterators.entries);
	var aTypedArray$b = ArrayBufferViewCore$c.aTypedArray;
	var exportTypedArrayMethod$c = ArrayBufferViewCore$c.exportTypedArrayMethod;
	var TypedArrayPrototype = Uint8Array$1 && Uint8Array$1.prototype;
	var GENERIC = !fails$9(function () {
	  TypedArrayPrototype[ITERATOR$5].call([1]);
	});
	var ITERATOR_IS_VALUES = !!TypedArrayPrototype && TypedArrayPrototype.values && TypedArrayPrototype[ITERATOR$5] === TypedArrayPrototype.values && TypedArrayPrototype.values.name === 'values';
	var typedArrayValues = function values() {
	  return arrayValues(aTypedArray$b(this));
	};

	// `%TypedArray%.prototype.entries` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.entries
	exportTypedArrayMethod$c('entries', function entries() {
	  return arrayEntries(aTypedArray$b(this));
	}, GENERIC);
	// `%TypedArray%.prototype.keys` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.keys
	exportTypedArrayMethod$c('keys', function keys() {
	  return arrayKeys(aTypedArray$b(this));
	}, GENERIC);
	// `%TypedArray%.prototype.values` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.values
	exportTypedArrayMethod$c('values', typedArrayValues, GENERIC || !ITERATOR_IS_VALUES, {
	  name: 'values'
	});
	// `%TypedArray%.prototype[@@iterator]` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype-@@iterator
	exportTypedArrayMethod$c(ITERATOR$5, typedArrayValues, GENERIC || !ITERATOR_IS_VALUES, {
	  name: 'values'
	});

	var ArrayBufferViewCore$b = arrayBufferViewCore;
	var uncurryThis$l = functionUncurryThis;
	var aTypedArray$a = ArrayBufferViewCore$b.aTypedArray;
	var exportTypedArrayMethod$b = ArrayBufferViewCore$b.exportTypedArrayMethod;
	var $join = uncurryThis$l([].join);

	// `%TypedArray%.prototype.join` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.join
	exportTypedArrayMethod$b('join', function join(separator) {
	  return $join(aTypedArray$a(this), separator);
	});

	var ArrayBufferViewCore$a = arrayBufferViewCore;
	var apply$4 = functionApply$1;
	var $lastIndexOf = arrayLastIndexOf;
	var aTypedArray$9 = ArrayBufferViewCore$a.aTypedArray;
	var exportTypedArrayMethod$a = ArrayBufferViewCore$a.exportTypedArrayMethod;

	// `%TypedArray%.prototype.lastIndexOf` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.lastindexof
	exportTypedArrayMethod$a('lastIndexOf', function lastIndexOf(searchElement /* , fromIndex */) {
	  var length = arguments.length;
	  return apply$4($lastIndexOf, aTypedArray$9(this), length > 1 ? [searchElement, arguments[1]] : [searchElement]);
	});

	var ArrayBufferViewCore$9 = arrayBufferViewCore;
	var $map = arrayIteration.map;
	var typedArraySpeciesConstructor$1 = typedArraySpeciesConstructor$3;
	var aTypedArray$8 = ArrayBufferViewCore$9.aTypedArray;
	var exportTypedArrayMethod$9 = ArrayBufferViewCore$9.exportTypedArrayMethod;

	// `%TypedArray%.prototype.map` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.map
	exportTypedArrayMethod$9('map', function map(mapfn /* , thisArg */) {
	  return $map(aTypedArray$8(this), mapfn, arguments.length > 1 ? arguments[1] : undefined, function (O, length) {
	    return new (typedArraySpeciesConstructor$1(O))(length);
	  });
	});

	var ArrayBufferViewCore$8 = arrayBufferViewCore;
	var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = typedArrayConstructorsRequireWrappers;
	var aTypedArrayConstructor = ArrayBufferViewCore$8.aTypedArrayConstructor;
	var exportTypedArrayStaticMethod = ArrayBufferViewCore$8.exportTypedArrayStaticMethod;

	// `%TypedArray%.of` method
	// https://tc39.es/ecma262/#sec-%typedarray%.of
	exportTypedArrayStaticMethod('of', function of( /* ...items */
	) {
	  var index = 0;
	  var length = arguments.length;
	  var result = new (aTypedArrayConstructor(this))(length);
	  while (length > index) result[index] = arguments[index++];
	  return result;
	}, TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS);

	var ArrayBufferViewCore$7 = arrayBufferViewCore;
	var $reduce = arrayReduce.left;
	var aTypedArray$7 = ArrayBufferViewCore$7.aTypedArray;
	var exportTypedArrayMethod$8 = ArrayBufferViewCore$7.exportTypedArrayMethod;

	// `%TypedArray%.prototype.reduce` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduce
	exportTypedArrayMethod$8('reduce', function reduce(callbackfn /* , initialValue */) {
	  var length = arguments.length;
	  return $reduce(aTypedArray$7(this), callbackfn, length, length > 1 ? arguments[1] : undefined);
	});

	var ArrayBufferViewCore$6 = arrayBufferViewCore;
	var $reduceRight = arrayReduce.right;
	var aTypedArray$6 = ArrayBufferViewCore$6.aTypedArray;
	var exportTypedArrayMethod$7 = ArrayBufferViewCore$6.exportTypedArrayMethod;

	// `%TypedArray%.prototype.reduceRight` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduceright
	exportTypedArrayMethod$7('reduceRight', function reduceRight(callbackfn /* , initialValue */) {
	  var length = arguments.length;
	  return $reduceRight(aTypedArray$6(this), callbackfn, length, length > 1 ? arguments[1] : undefined);
	});

	var ArrayBufferViewCore$5 = arrayBufferViewCore;
	var aTypedArray$5 = ArrayBufferViewCore$5.aTypedArray;
	var exportTypedArrayMethod$6 = ArrayBufferViewCore$5.exportTypedArrayMethod;
	var floor$2 = Math.floor;

	// `%TypedArray%.prototype.reverse` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reverse
	exportTypedArrayMethod$6('reverse', function reverse() {
	  var that = this;
	  var length = aTypedArray$5(that).length;
	  var middle = floor$2(length / 2);
	  var index = 0;
	  var value;
	  while (index < middle) {
	    value = that[index];
	    that[index++] = that[--length];
	    that[length] = value;
	  }
	  return that;
	});

	var global$h = global$R;
	var call$D = functionCall;
	var ArrayBufferViewCore$4 = arrayBufferViewCore;
	var lengthOfArrayLike$3 = lengthOfArrayLike$m;
	var toOffset = toOffset$2;
	var toIndexedObject = toObject$u;
	var fails$8 = fails$13;
	var RangeError$1 = global$h.RangeError;
	var Int8Array$2 = global$h.Int8Array;
	var Int8ArrayPrototype = Int8Array$2 && Int8Array$2.prototype;
	var $set = Int8ArrayPrototype && Int8ArrayPrototype.set;
	var aTypedArray$4 = ArrayBufferViewCore$4.aTypedArray;
	var exportTypedArrayMethod$5 = ArrayBufferViewCore$4.exportTypedArrayMethod;
	var WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS = !fails$8(function () {
	  // eslint-disable-next-line es/no-typed-arrays -- required for testing
	  var array = new Uint8ClampedArray(2);
	  call$D($set, array, {
	    length: 1,
	    0: 3
	  }, 1);
	  return array[1] !== 3;
	});

	// https://bugs.chromium.org/p/v8/issues/detail?id=11294 and other
	var TO_OBJECT_BUG = WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS && ArrayBufferViewCore$4.NATIVE_ARRAY_BUFFER_VIEWS && fails$8(function () {
	  var array = new Int8Array$2(2);
	  array.set(1);
	  array.set('2', 1);
	  return array[0] !== 0 || array[1] !== 2;
	});

	// `%TypedArray%.prototype.set` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.set
	exportTypedArrayMethod$5('set', function set(arrayLike /* , offset */) {
	  aTypedArray$4(this);
	  var offset = toOffset(arguments.length > 1 ? arguments[1] : undefined, 1);
	  var src = toIndexedObject(arrayLike);
	  if (WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS) return call$D($set, this, src, offset);
	  var length = this.length;
	  var len = lengthOfArrayLike$3(src);
	  var index = 0;
	  if (len + offset > length) throw new RangeError$1('Wrong length');
	  while (index < len) this[offset + index] = src[index++];
	}, !WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS || TO_OBJECT_BUG);

	var ArrayBufferViewCore$3 = arrayBufferViewCore;
	var typedArraySpeciesConstructor = typedArraySpeciesConstructor$3;
	var fails$7 = fails$13;
	var arraySlice$3 = arraySlice$b;
	var aTypedArray$3 = ArrayBufferViewCore$3.aTypedArray;
	var exportTypedArrayMethod$4 = ArrayBufferViewCore$3.exportTypedArrayMethod;
	var FORCED$2 = fails$7(function () {
	  // eslint-disable-next-line es/no-typed-arrays -- required for testing
	  new Int8Array(1).slice();
	});

	// `%TypedArray%.prototype.slice` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.slice
	exportTypedArrayMethod$4('slice', function slice(start, end) {
	  var list = arraySlice$3(aTypedArray$3(this), start, end);
	  var C = typedArraySpeciesConstructor(this);
	  var index = 0;
	  var length = list.length;
	  var result = new C(length);
	  while (length > index) result[index] = list[index++];
	  return result;
	}, FORCED$2);

	var ArrayBufferViewCore$2 = arrayBufferViewCore;
	var $some$1 = arrayIteration.some;
	var aTypedArray$2 = ArrayBufferViewCore$2.aTypedArray;
	var exportTypedArrayMethod$3 = ArrayBufferViewCore$2.exportTypedArrayMethod;

	// `%TypedArray%.prototype.some` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.some
	exportTypedArrayMethod$3('some', function some(callbackfn /* , thisArg */) {
	  return $some$1(aTypedArray$2(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	});

	var global$g = global$R;
	var uncurryThis$k = functionUncurryThisClause;
	var fails$6 = fails$13;
	var aCallable$o = aCallable$F;
	var internalSort = arraySort$1;
	var ArrayBufferViewCore$1 = arrayBufferViewCore;
	var FF = engineFfVersion;
	var IE_OR_EDGE = engineIsIeOrEdge;
	var V8 = engineV8Version;
	var WEBKIT = engineWebkitVersion;
	var aTypedArray$1 = ArrayBufferViewCore$1.aTypedArray;
	var exportTypedArrayMethod$2 = ArrayBufferViewCore$1.exportTypedArrayMethod;
	var Uint16Array = global$g.Uint16Array;
	var nativeSort = Uint16Array && uncurryThis$k(Uint16Array.prototype.sort);

	// WebKit
	var ACCEPT_INCORRECT_ARGUMENTS = !!nativeSort && !(fails$6(function () {
	  nativeSort(new Uint16Array(2), null);
	}) && fails$6(function () {
	  nativeSort(new Uint16Array(2), {});
	}));
	var STABLE_SORT = !!nativeSort && !fails$6(function () {
	  // feature detection can be too slow, so check engines versions
	  if (V8) return V8 < 74;
	  if (FF) return FF < 67;
	  if (IE_OR_EDGE) return true;
	  if (WEBKIT) return WEBKIT < 602;
	  var array = new Uint16Array(516);
	  var expected = Array(516);
	  var index, mod;
	  for (index = 0; index < 516; index++) {
	    mod = index % 4;
	    array[index] = 515 - index;
	    expected[index] = index - 2 * mod + 3;
	  }
	  nativeSort(array, function (a, b) {
	    return (a / 4 | 0) - (b / 4 | 0);
	  });
	  for (index = 0; index < 516; index++) {
	    if (array[index] !== expected[index]) return true;
	  }
	});
	var getSortCompare = function getSortCompare(comparefn) {
	  return function (x, y) {
	    if (comparefn !== undefined) return +comparefn(x, y) || 0;
	    // eslint-disable-next-line no-self-compare -- NaN check
	    if (y !== y) return -1;
	    // eslint-disable-next-line no-self-compare -- NaN check
	    if (x !== x) return 1;
	    if (x === 0 && y === 0) return 1 / x > 0 && 1 / y < 0 ? 1 : -1;
	    return x > y;
	  };
	};

	// `%TypedArray%.prototype.sort` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.sort
	exportTypedArrayMethod$2('sort', function sort(comparefn) {
	  if (comparefn !== undefined) aCallable$o(comparefn);
	  if (STABLE_SORT) return nativeSort(this, comparefn);
	  return internalSort(aTypedArray$1(this), getSortCompare(comparefn));
	}, !STABLE_SORT || ACCEPT_INCORRECT_ARGUMENTS);

	var global$f = global$R;
	var apply$3 = functionApply$1;
	var ArrayBufferViewCore = arrayBufferViewCore;
	var fails$5 = fails$13;
	var arraySlice$2 = arraySlice$b;
	var Int8Array$1 = global$f.Int8Array;
	var aTypedArray = ArrayBufferViewCore.aTypedArray;
	var exportTypedArrayMethod$1 = ArrayBufferViewCore.exportTypedArrayMethod;
	var $toLocaleString = [].toLocaleString;

	// iOS Safari 6.x fails here
	var TO_LOCALE_STRING_BUG = !!Int8Array$1 && fails$5(function () {
	  $toLocaleString.call(new Int8Array$1(1));
	});
	var FORCED$1 = fails$5(function () {
	  return [1, 2].toLocaleString() !== new Int8Array$1([1, 2]).toLocaleString();
	}) || !fails$5(function () {
	  Int8Array$1.prototype.toLocaleString.call([1, 2]);
	});

	// `%TypedArray%.prototype.toLocaleString` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tolocalestring
	exportTypedArrayMethod$1('toLocaleString', function toLocaleString() {
	  return apply$3($toLocaleString, TO_LOCALE_STRING_BUG ? arraySlice$2(aTypedArray(this)) : aTypedArray(this), arraySlice$2(arguments));
	}, FORCED$1);

	var exportTypedArrayMethod = arrayBufferViewCore.exportTypedArrayMethod;
	var fails$4 = fails$13;
	var global$e = global$R;
	var uncurryThis$j = functionUncurryThis;
	var Uint8Array = global$e.Uint8Array;
	var Uint8ArrayPrototype = Uint8Array && Uint8Array.prototype || {};
	var arrayToString = [].toString;
	var join$3 = uncurryThis$j([].join);
	if (fails$4(function () {
	  arrayToString.call({});
	})) {
	  arrayToString = function toString() {
	    return join$3(this);
	  };
	}
	var IS_NOT_ARRAY_METHOD = Uint8ArrayPrototype.toString !== arrayToString;

	// `%TypedArray%.prototype.toString` method
	// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tostring
	exportTypedArrayMethod('toString', arrayToString, IS_NOT_ARRAY_METHOD);

	var uncurryThis$i = functionUncurryThis;
	var defineBuiltIns$6 = defineBuiltIns$9;
	var getWeakData = internalMetadata.exports.getWeakData;
	var anInstance$5 = anInstance$b;
	var anObject$E = anObject$1a;
	var isNullOrUndefined$4 = isNullOrUndefined$g;
	var isObject$e = isObject$J;
	var iterate$x = iterate$E;
	var ArrayIterationModule = arrayIteration;
	var hasOwn$6 = hasOwnProperty_1;
	var InternalStateModule$9 = internalState;
	var setInternalState$9 = InternalStateModule$9.set;
	var internalStateGetterFor = InternalStateModule$9.getterFor;
	var find$1 = ArrayIterationModule.find;
	var findIndex = ArrayIterationModule.findIndex;
	var splice$1 = uncurryThis$i([].splice);
	var id = 0;

	// fallback for uncaught frozen keys
	var uncaughtFrozenStore = function uncaughtFrozenStore(state) {
	  return state.frozen || (state.frozen = new UncaughtFrozenStore());
	};
	var UncaughtFrozenStore = function UncaughtFrozenStore() {
	  this.entries = [];
	};
	var findUncaughtFrozen = function findUncaughtFrozen(store, key) {
	  return find$1(store.entries, function (it) {
	    return it[0] === key;
	  });
	};
	UncaughtFrozenStore.prototype = {
	  get: function get(key) {
	    var entry = findUncaughtFrozen(this, key);
	    if (entry) return entry[1];
	  },
	  has: function has(key) {
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function set(key, value) {
	    var entry = findUncaughtFrozen(this, key);
	    if (entry) entry[1] = value;else this.entries.push([key, value]);
	  },
	  'delete': function _delete(key) {
	    var index = findIndex(this.entries, function (it) {
	      return it[0] === key;
	    });
	    if (~index) splice$1(this.entries, index, 1);
	    return !!~index;
	  }
	};
	var collectionWeak$2 = {
	  getConstructor: function getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
	    var Constructor = wrapper(function (that, iterable) {
	      anInstance$5(that, Prototype);
	      setInternalState$9(that, {
	        type: CONSTRUCTOR_NAME,
	        id: id++,
	        frozen: undefined
	      });
	      if (!isNullOrUndefined$4(iterable)) iterate$x(iterable, that[ADDER], {
	        that: that,
	        AS_ENTRIES: IS_MAP
	      });
	    });
	    var Prototype = Constructor.prototype;
	    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);
	    var define = function define(that, key, value) {
	      var state = getInternalState(that);
	      var data = getWeakData(anObject$E(key), true);
	      if (data === true) uncaughtFrozenStore(state).set(key, value);else data[state.id] = value;
	      return that;
	    };
	    defineBuiltIns$6(Prototype, {
	      // `{ WeakMap, WeakSet }.prototype.delete(key)` methods
	      // https://tc39.es/ecma262/#sec-weakmap.prototype.delete
	      // https://tc39.es/ecma262/#sec-weakset.prototype.delete
	      'delete': function _delete(key) {
	        var state = getInternalState(this);
	        if (!isObject$e(key)) return false;
	        var data = getWeakData(key);
	        if (data === true) return uncaughtFrozenStore(state)['delete'](key);
	        return data && hasOwn$6(data, state.id) && delete data[state.id];
	      },
	      // `{ WeakMap, WeakSet }.prototype.has(key)` methods
	      // https://tc39.es/ecma262/#sec-weakmap.prototype.has
	      // https://tc39.es/ecma262/#sec-weakset.prototype.has
	      has: function has(key) {
	        var state = getInternalState(this);
	        if (!isObject$e(key)) return false;
	        var data = getWeakData(key);
	        if (data === true) return uncaughtFrozenStore(state).has(key);
	        return data && hasOwn$6(data, state.id);
	      }
	    });
	    defineBuiltIns$6(Prototype, IS_MAP ? {
	      // `WeakMap.prototype.get(key)` method
	      // https://tc39.es/ecma262/#sec-weakmap.prototype.get
	      get: function get(key) {
	        var state = getInternalState(this);
	        if (isObject$e(key)) {
	          var data = getWeakData(key);
	          if (data === true) return uncaughtFrozenStore(state).get(key);
	          return data ? data[state.id] : undefined;
	        }
	      },
	      // `WeakMap.prototype.set(key, value)` method
	      // https://tc39.es/ecma262/#sec-weakmap.prototype.set
	      set: function set(key, value) {
	        return define(this, key, value);
	      }
	    } : {
	      // `WeakSet.prototype.add(value)` method
	      // https://tc39.es/ecma262/#sec-weakset.prototype.add
	      add: function add(value) {
	        return define(this, value, true);
	      }
	    });
	    return Constructor;
	  }
	};

	var FREEZING = freezing;
	var global$d = global$R;
	var uncurryThis$h = functionUncurryThis;
	var defineBuiltIns$5 = defineBuiltIns$9;
	var InternalMetadataModule = internalMetadata.exports;
	var collection$1 = collection$4;
	var collectionWeak$1 = collectionWeak$2;
	var isObject$d = isObject$J;
	var enforceInternalState = internalState.enforce;
	var fails$3 = fails$13;
	var NATIVE_WEAK_MAP = weakMapBasicDetection;
	var $Object$3 = Object;
	// eslint-disable-next-line es/no-array-isarray -- safe
	var isArray$2 = Array.isArray;
	// eslint-disable-next-line es/no-object-isextensible -- safe
	var isExtensible = $Object$3.isExtensible;
	// eslint-disable-next-line es/no-object-isfrozen -- safe
	var isFrozen$1 = $Object$3.isFrozen;
	// eslint-disable-next-line es/no-object-issealed -- safe
	var isSealed = $Object$3.isSealed;
	// eslint-disable-next-line es/no-object-freeze -- safe
	var freeze = $Object$3.freeze;
	// eslint-disable-next-line es/no-object-seal -- safe
	var seal = $Object$3.seal;
	var IS_IE11 = !global$d.ActiveXObject && 'ActiveXObject' in global$d;
	var InternalWeakMap;
	var wrapper = function wrapper(init) {
	  return function WeakMap() {
	    return init(this, arguments.length ? arguments[0] : undefined);
	  };
	};

	// `WeakMap` constructor
	// https://tc39.es/ecma262/#sec-weakmap-constructor
	var $WeakMap = collection$1('WeakMap', wrapper, collectionWeak$1);
	var WeakMapPrototype$1 = $WeakMap.prototype;
	var nativeSet = uncurryThis$h(WeakMapPrototype$1.set);

	// Chakra Edge bug: adding frozen arrays to WeakMap unfreeze them
	var hasMSEdgeFreezingBug = function hasMSEdgeFreezingBug() {
	  return FREEZING && fails$3(function () {
	    var frozenArray = freeze([]);
	    nativeSet(new $WeakMap(), frozenArray, 1);
	    return !isFrozen$1(frozenArray);
	  });
	};

	// IE11 WeakMap frozen keys fix
	// We can't use feature detection because it crash some old IE builds
	// https://github.com/zloirock/core-js/issues/485
	if (NATIVE_WEAK_MAP) if (IS_IE11) {
	  InternalWeakMap = collectionWeak$1.getConstructor(wrapper, 'WeakMap', true);
	  InternalMetadataModule.enable();
	  var nativeDelete = uncurryThis$h(WeakMapPrototype$1['delete']);
	  var nativeHas = uncurryThis$h(WeakMapPrototype$1.has);
	  var nativeGet = uncurryThis$h(WeakMapPrototype$1.get);
	  defineBuiltIns$5(WeakMapPrototype$1, {
	    'delete': function _delete(key) {
	      if (isObject$d(key) && !isExtensible(key)) {
	        var state = enforceInternalState(this);
	        if (!state.frozen) state.frozen = new InternalWeakMap();
	        return nativeDelete(this, key) || state.frozen['delete'](key);
	      }
	      return nativeDelete(this, key);
	    },
	    has: function has(key) {
	      if (isObject$d(key) && !isExtensible(key)) {
	        var state = enforceInternalState(this);
	        if (!state.frozen) state.frozen = new InternalWeakMap();
	        return nativeHas(this, key) || state.frozen.has(key);
	      }
	      return nativeHas(this, key);
	    },
	    get: function get(key) {
	      if (isObject$d(key) && !isExtensible(key)) {
	        var state = enforceInternalState(this);
	        if (!state.frozen) state.frozen = new InternalWeakMap();
	        return nativeHas(this, key) ? nativeGet(this, key) : state.frozen.get(key);
	      }
	      return nativeGet(this, key);
	    },
	    set: function set(key, value) {
	      if (isObject$d(key) && !isExtensible(key)) {
	        var state = enforceInternalState(this);
	        if (!state.frozen) state.frozen = new InternalWeakMap();
	        nativeHas(this, key) ? nativeSet(this, key, value) : state.frozen.set(key, value);
	      } else nativeSet(this, key, value);
	      return this;
	    }
	  });
	  // Chakra Edge frozen keys fix
	} else if (hasMSEdgeFreezingBug()) {
	  defineBuiltIns$5(WeakMapPrototype$1, {
	    set: function set(key, value) {
	      var arrayIntegrityLevel;
	      if (isArray$2(key)) {
	        if (isFrozen$1(key)) arrayIntegrityLevel = freeze;else if (isSealed(key)) arrayIntegrityLevel = seal;
	      }
	      nativeSet(this, key, value);
	      if (arrayIntegrityLevel) arrayIntegrityLevel(key);
	      return this;
	    }
	  });
	}

	var collection = collection$4;
	var collectionWeak = collectionWeak$2;

	// `WeakSet` constructor
	// https://tc39.es/ecma262/#sec-weakset-constructor
	collection('WeakSet', function (init) {
	  return function WeakSet() {
	    return init(this, arguments.length ? arguments[0] : undefined);
	  };
	}, collectionWeak);

	var isObject$c = isObject$J;
	var createNonEnumerableProperty$7 = createNonEnumerableProperty$g;

	// `InstallErrorCause` abstract operation
	// https://tc39.es/proposal-error-cause/#sec-errorobjects-install-error-cause
	var installErrorCause$1 = function installErrorCause(O, options) {
	  if (isObject$c(options) && 'cause' in options) {
	    createNonEnumerableProperty$7(O, 'cause', options.cause);
	  }
	};

	var uncurryThis$g = functionUncurryThis;
	var $Error$1 = Error;
	var replace$3 = uncurryThis$g(''.replace);
	var TEST = function (arg) {
	  return String(new $Error$1(arg).stack);
	}('zxcasd');
	// eslint-disable-next-line redos/no-vulnerable -- safe
	var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
	var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);
	var errorStackClear = function errorStackClear(stack, dropEntries) {
	  if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string' && !$Error$1.prepareStackTrace) {
	    while (dropEntries--) stack = replace$3(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
	  }
	  return stack;
	};

	var fails$2 = fails$13;
	var createPropertyDescriptor$2 = createPropertyDescriptor$a;
	var errorStackInstallable = !fails$2(function () {
	  var error = new Error('a');
	  if (!('stack' in error)) return true;
	  // eslint-disable-next-line es/no-object-defineproperty -- safe
	  Object.defineProperty(error, 'stack', createPropertyDescriptor$2(1, 7));
	  return error.stack !== 7;
	});

	var createNonEnumerableProperty$6 = createNonEnumerableProperty$g;
	var clearErrorStack = errorStackClear;
	var ERROR_STACK_INSTALLABLE = errorStackInstallable;

	// non-standard V8
	var captureStackTrace = Error.captureStackTrace;
	var errorStackInstall = function errorStackInstall(error, C, stack, dropEntries) {
	  if (ERROR_STACK_INSTALLABLE) {
	    if (captureStackTrace) captureStackTrace(error, C);else createNonEnumerableProperty$6(error, 'stack', clearErrorStack(stack, dropEntries));
	  }
	};

	var toString$4 = toString$r;
	var normalizeStringArgument$1 = function normalizeStringArgument(argument, $default) {
	  return argument === undefined ? arguments.length < 2 ? '' : $default : toString$4(argument);
	};

	var $$1Q = _export;
	var isPrototypeOf$2 = objectIsPrototypeOf;
	var getPrototypeOf$6 = objectGetPrototypeOf$2;
	var setPrototypeOf = objectSetPrototypeOf$1;
	var copyConstructorProperties = copyConstructorProperties$5;
	var create$6 = objectCreate;
	var createNonEnumerableProperty$5 = createNonEnumerableProperty$g;
	var createPropertyDescriptor$1 = createPropertyDescriptor$a;
	var installErrorCause = installErrorCause$1;
	var installErrorStack = errorStackInstall;
	var iterate$w = iterate$E;
	var normalizeStringArgument = normalizeStringArgument$1;
	var wellKnownSymbol$d = wellKnownSymbol$I;
	var TO_STRING_TAG$4 = wellKnownSymbol$d('toStringTag');
	var $Error = Error;
	var push$8 = [].push;
	var $AggregateError = function AggregateError(errors, message /* , options */) {
	  var isInstance = isPrototypeOf$2(AggregateErrorPrototype, this);
	  var that;
	  if (setPrototypeOf) {
	    that = setPrototypeOf(new $Error(), isInstance ? getPrototypeOf$6(this) : AggregateErrorPrototype);
	  } else {
	    that = isInstance ? this : create$6(AggregateErrorPrototype);
	    createNonEnumerableProperty$5(that, TO_STRING_TAG$4, 'Error');
	  }
	  if (message !== undefined) createNonEnumerableProperty$5(that, 'message', normalizeStringArgument(message));
	  installErrorStack(that, $AggregateError, that.stack, 1);
	  if (arguments.length > 2) installErrorCause(that, arguments[2]);
	  var errorsArray = [];
	  iterate$w(errors, push$8, {
	    that: errorsArray
	  });
	  createNonEnumerableProperty$5(that, 'errors', errorsArray);
	  return that;
	};
	if (setPrototypeOf) setPrototypeOf($AggregateError, $Error);else copyConstructorProperties($AggregateError, $Error, {
	  name: true
	});
	var AggregateErrorPrototype = $AggregateError.prototype = create$6($Error.prototype, {
	  constructor: createPropertyDescriptor$1(1, $AggregateError),
	  message: createPropertyDescriptor$1(1, ''),
	  name: createPropertyDescriptor$1(1, 'AggregateError')
	});

	// `AggregateError` constructor
	// https://tc39.es/ecma262/#sec-aggregate-error-constructor
	$$1Q({
	  global: true,
	  constructor: true,
	  arity: 2
	}, {
	  AggregateError: $AggregateError
	});

	var $$1P = _export;
	var isArray$1 = isArray$9;

	// eslint-disable-next-line es/no-object-isfrozen -- safe
	var isFrozen = Object.isFrozen;
	var isFrozenStringArray = function isFrozenStringArray(array, allowUndefined) {
	  if (!isFrozen || !isArray$1(array) || !isFrozen(array)) return false;
	  var index = 0;
	  var length = array.length;
	  var element;
	  while (index < length) {
	    element = array[index++];
	    if (!(typeof element == 'string' || allowUndefined && element === undefined)) {
	      return false;
	    }
	  }
	  return length !== 0;
	};

	// `Array.isTemplateObject` method
	// https://github.com/tc39/proposal-array-is-template-object
	$$1P({
	  target: 'Array',
	  stat: true,
	  sham: true,
	  forced: true
	}, {
	  isTemplateObject: function isTemplateObject(value) {
	    if (!isFrozenStringArray(value, true)) return false;
	    var raw = value.raw;
	    return raw.length === value.length && isFrozenStringArray(raw, false);
	  }
	});

	// TODO: Remove from `core-js@4`
	var DESCRIPTORS$6 = descriptors;
	var addToUnscopables$1 = addToUnscopables$a;
	var toObject$6 = toObject$u;
	var lengthOfArrayLike$2 = lengthOfArrayLike$m;
	var defineBuiltInAccessor$5 = defineBuiltInAccessor$f;

	// `Array.prototype.lastIndex` getter
	// https://github.com/keithamus/proposal-array-last
	if (DESCRIPTORS$6) {
	  defineBuiltInAccessor$5(Array.prototype, 'lastIndex', {
	    configurable: true,
	    get: function lastIndex() {
	      var O = toObject$6(this);
	      var len = lengthOfArrayLike$2(O);
	      return len === 0 ? 0 : len - 1;
	    }
	  });
	  addToUnscopables$1('lastIndex');
	}

	// TODO: Remove from `core-js@4`
	var DESCRIPTORS$5 = descriptors;
	var addToUnscopables = addToUnscopables$a;
	var toObject$5 = toObject$u;
	var lengthOfArrayLike$1 = lengthOfArrayLike$m;
	var defineBuiltInAccessor$4 = defineBuiltInAccessor$f;

	// `Array.prototype.lastIndex` accessor
	// https://github.com/keithamus/proposal-array-last
	if (DESCRIPTORS$5) {
	  defineBuiltInAccessor$4(Array.prototype, 'lastItem', {
	    configurable: true,
	    get: function lastItem() {
	      var O = toObject$5(this);
	      var len = lengthOfArrayLike$1(O);
	      return len === 0 ? undefined : O[len - 1];
	    },
	    set: function lastItem(value) {
	      var O = toObject$5(this);
	      var len = lengthOfArrayLike$1(O);
	      return O[len === 0 ? 0 : len - 1] = value;
	    }
	  });
	  addToUnscopables('lastItem');
	}

	var global$c = global$R;
	var shared$1 = sharedStore;
	var isCallable$9 = isCallable$E;
	var getPrototypeOf$5 = objectGetPrototypeOf$2;
	var defineBuiltIn$3 = defineBuiltIn$l;
	var wellKnownSymbol$c = wellKnownSymbol$I;
	var USE_FUNCTION_CONSTRUCTOR = 'USE_FUNCTION_CONSTRUCTOR';
	var ASYNC_ITERATOR$1 = wellKnownSymbol$c('asyncIterator');
	var AsyncIterator = global$c.AsyncIterator;
	var PassedAsyncIteratorPrototype = shared$1.AsyncIteratorPrototype;
	var AsyncIteratorPrototype$4, prototype;
	if (PassedAsyncIteratorPrototype) {
	  AsyncIteratorPrototype$4 = PassedAsyncIteratorPrototype;
	} else if (isCallable$9(AsyncIterator)) {
	  AsyncIteratorPrototype$4 = AsyncIterator.prototype;
	} else if (shared$1[USE_FUNCTION_CONSTRUCTOR] || global$c[USE_FUNCTION_CONSTRUCTOR]) {
	  try {
	    // eslint-disable-next-line no-new-func -- we have no alternatives without usage of modern syntax
	    prototype = getPrototypeOf$5(getPrototypeOf$5(getPrototypeOf$5(Function('return async function*(){}()')())));
	    if (getPrototypeOf$5(prototype) === Object.prototype) AsyncIteratorPrototype$4 = prototype;
	  } catch (error) {/* empty */}
	}
	if (!AsyncIteratorPrototype$4) AsyncIteratorPrototype$4 = {};
	if (!isCallable$9(AsyncIteratorPrototype$4[ASYNC_ITERATOR$1])) {
	  defineBuiltIn$3(AsyncIteratorPrototype$4, ASYNC_ITERATOR$1, function () {
	    return this;
	  });
	}
	var asyncIteratorPrototype = AsyncIteratorPrototype$4;

	var $$1O = _export;
	var anInstance$4 = anInstance$b;
	var getPrototypeOf$4 = objectGetPrototypeOf$2;
	var createNonEnumerableProperty$4 = createNonEnumerableProperty$g;
	var hasOwn$5 = hasOwnProperty_1;
	var wellKnownSymbol$b = wellKnownSymbol$I;
	var AsyncIteratorPrototype$3 = asyncIteratorPrototype;
	var IS_PURE$e = isPure;
	var TO_STRING_TAG$3 = wellKnownSymbol$b('toStringTag');
	var $TypeError$c = TypeError;
	var AsyncIteratorConstructor = function AsyncIterator() {
	  anInstance$4(this, AsyncIteratorPrototype$3);
	  if (getPrototypeOf$4(this) === AsyncIteratorPrototype$3) throw new $TypeError$c('Abstract class AsyncIterator not directly constructable');
	};
	AsyncIteratorConstructor.prototype = AsyncIteratorPrototype$3;
	if (!hasOwn$5(AsyncIteratorPrototype$3, TO_STRING_TAG$3)) {
	  createNonEnumerableProperty$4(AsyncIteratorPrototype$3, TO_STRING_TAG$3, 'AsyncIterator');
	}
	if (!hasOwn$5(AsyncIteratorPrototype$3, 'constructor') || AsyncIteratorPrototype$3.constructor === Object) {
	  createNonEnumerableProperty$4(AsyncIteratorPrototype$3, 'constructor', AsyncIteratorConstructor);
	}

	// `AsyncIterator` constructor
	// https://github.com/tc39/proposal-async-iterator-helpers
	$$1O({
	  global: true,
	  constructor: true,
	  forced: IS_PURE$e
	}, {
	  AsyncIterator: AsyncIteratorConstructor
	});

	// `GetIteratorDirect(obj)` abstract operation
	// https://tc39.es/proposal-iterator-helpers/#sec-getiteratordirect
	var getIteratorDirect$l = function getIteratorDirect(obj) {
	  return {
	    iterator: obj,
	    next: obj.next,
	    done: false
	  };
	};

	var call$C = functionCall;
	var perform$2 = perform$7;
	var anObject$D = anObject$1a;
	var create$5 = objectCreate;
	var createNonEnumerableProperty$3 = createNonEnumerableProperty$g;
	var defineBuiltIns$4 = defineBuiltIns$9;
	var wellKnownSymbol$a = wellKnownSymbol$I;
	var InternalStateModule$8 = internalState;
	var getBuiltIn$c = getBuiltIn$r;
	var getMethod$7 = getMethod$g;
	var AsyncIteratorPrototype$2 = asyncIteratorPrototype;
	var createIterResultObject$b = createIterResultObject$g;
	var iteratorClose$5 = iteratorClose$8;
	var Promise$3 = getBuiltIn$c('Promise');
	var TO_STRING_TAG$2 = wellKnownSymbol$a('toStringTag');
	var ASYNC_ITERATOR_HELPER = 'AsyncIteratorHelper';
	var WRAP_FOR_VALID_ASYNC_ITERATOR = 'WrapForValidAsyncIterator';
	var setInternalState$8 = InternalStateModule$8.set;
	var createAsyncIteratorProxyPrototype = function createAsyncIteratorProxyPrototype(IS_ITERATOR) {
	  var IS_GENERATOR = !IS_ITERATOR;
	  var getInternalState = InternalStateModule$8.getterFor(IS_ITERATOR ? WRAP_FOR_VALID_ASYNC_ITERATOR : ASYNC_ITERATOR_HELPER);
	  var getStateOrEarlyExit = function getStateOrEarlyExit(that) {
	    var stateCompletion = perform$2(function () {
	      return getInternalState(that);
	    });
	    var stateError = stateCompletion.error;
	    var state = stateCompletion.value;
	    if (stateError || IS_GENERATOR && state.done) {
	      return {
	        exit: true,
	        value: stateError ? Promise$3.reject(state) : Promise$3.resolve(createIterResultObject$b(undefined, true))
	      };
	    }
	    return {
	      exit: false,
	      value: state
	    };
	  };
	  return defineBuiltIns$4(create$5(AsyncIteratorPrototype$2), {
	    next: function next() {
	      var stateCompletion = getStateOrEarlyExit(this);
	      var state = stateCompletion.value;
	      if (stateCompletion.exit) return state;
	      var handlerCompletion = perform$2(function () {
	        return anObject$D(state.nextHandler(Promise$3));
	      });
	      var handlerError = handlerCompletion.error;
	      var value = handlerCompletion.value;
	      if (handlerError) state.done = true;
	      return handlerError ? Promise$3.reject(value) : Promise$3.resolve(value);
	    },
	    'return': function _return() {
	      var stateCompletion = getStateOrEarlyExit(this);
	      var state = stateCompletion.value;
	      if (stateCompletion.exit) return state;
	      state.done = true;
	      var iterator = state.iterator;
	      var returnMethod, result;
	      var completion = perform$2(function () {
	        if (state.inner) try {
	          iteratorClose$5(state.inner.iterator, 'normal');
	        } catch (error) {
	          return iteratorClose$5(iterator, 'throw', error);
	        }
	        return getMethod$7(iterator, 'return');
	      });
	      returnMethod = result = completion.value;
	      if (completion.error) return Promise$3.reject(result);
	      if (returnMethod === undefined) return Promise$3.resolve(createIterResultObject$b(undefined, true));
	      completion = perform$2(function () {
	        return call$C(returnMethod, iterator);
	      });
	      result = completion.value;
	      if (completion.error) return Promise$3.reject(result);
	      return IS_ITERATOR ? Promise$3.resolve(result) : Promise$3.resolve(result).then(function (resolved) {
	        anObject$D(resolved);
	        return createIterResultObject$b(undefined, true);
	      });
	    }
	  });
	};
	var WrapForValidAsyncIteratorPrototype = createAsyncIteratorProxyPrototype(true);
	var AsyncIteratorHelperPrototype = createAsyncIteratorProxyPrototype(false);
	createNonEnumerableProperty$3(AsyncIteratorHelperPrototype, TO_STRING_TAG$2, 'Async Iterator Helper');
	var asyncIteratorCreateProxy = function asyncIteratorCreateProxy(nextHandler, IS_ITERATOR) {
	  var AsyncIteratorProxy = function AsyncIterator(record, state) {
	    if (state) {
	      state.iterator = record.iterator;
	      state.next = record.next;
	    } else state = record;
	    state.type = IS_ITERATOR ? WRAP_FOR_VALID_ASYNC_ITERATOR : ASYNC_ITERATOR_HELPER;
	    state.nextHandler = nextHandler;
	    state.counter = 0;
	    state.done = false;
	    setInternalState$8(this, state);
	  };
	  AsyncIteratorProxy.prototype = IS_ITERATOR ? WrapForValidAsyncIteratorPrototype : AsyncIteratorHelperPrototype;
	  return AsyncIteratorProxy;
	};

	var call$B = functionCall;
	var getBuiltIn$b = getBuiltIn$r;
	var getMethod$6 = getMethod$g;
	var asyncIteratorClose = function asyncIteratorClose(iterator, method, argument, reject) {
	  try {
	    var returnMethod = getMethod$6(iterator, 'return');
	    if (returnMethod) {
	      return getBuiltIn$b('Promise').resolve(call$B(returnMethod, iterator)).then(function () {
	        method(argument);
	      }, function (error) {
	        reject(error);
	      });
	    }
	  } catch (error2) {
	    return reject(error2);
	  }
	  method(argument);
	};

	var call$A = functionCall;
	var aCallable$n = aCallable$F;
	var anObject$C = anObject$1a;
	var isObject$b = isObject$J;
	var getIteratorDirect$k = getIteratorDirect$l;
	var createAsyncIteratorProxy$5 = asyncIteratorCreateProxy;
	var createIterResultObject$a = createIterResultObject$g;
	var closeAsyncIteration$4 = asyncIteratorClose;
	var AsyncIteratorProxy$4 = createAsyncIteratorProxy$5(function (Promise) {
	  var state = this;
	  var iterator = state.iterator;
	  var mapper = state.mapper;
	  return new Promise(function (resolve, reject) {
	    var doneAndReject = function doneAndReject(error) {
	      state.done = true;
	      reject(error);
	    };
	    var ifAbruptCloseAsyncIterator = function ifAbruptCloseAsyncIterator(error) {
	      closeAsyncIteration$4(iterator, doneAndReject, error, doneAndReject);
	    };
	    Promise.resolve(anObject$C(call$A(state.next, iterator))).then(function (step) {
	      try {
	        if (anObject$C(step).done) {
	          state.done = true;
	          resolve(createIterResultObject$a(undefined, true));
	        } else {
	          var value = step.value;
	          try {
	            var result = mapper(value, state.counter++);
	            var handler = function handler(mapped) {
	              resolve(createIterResultObject$a(mapped, false));
	            };
	            if (isObject$b(result)) Promise.resolve(result).then(handler, ifAbruptCloseAsyncIterator);else handler(result);
	          } catch (error2) {
	            ifAbruptCloseAsyncIterator(error2);
	          }
	        }
	      } catch (error) {
	        doneAndReject(error);
	      }
	    }, doneAndReject);
	  });
	});

	// `AsyncIterator.prototype.map` method
	// https://github.com/tc39/proposal-iterator-helpers
	var asyncIteratorMap = function map(mapper) {
	  anObject$C(this);
	  aCallable$n(mapper);
	  return new AsyncIteratorProxy$4(getIteratorDirect$k(this), {
	    mapper: mapper
	  });
	};

	var call$z = functionCall;
	var map$3 = asyncIteratorMap;
	var callback$1 = function callback(value, counter) {
	  return [counter, value];
	};

	// `AsyncIterator.prototype.indexed` method
	// https://github.com/tc39/proposal-iterator-helpers
	var asyncIteratorIndexed = function indexed() {
	  return call$z(map$3, this, callback$1);
	};

	// TODO: Remove from `core-js@4`
	var $$1N = _export;
	var indexed$1 = asyncIteratorIndexed;

	// `AsyncIterator.prototype.asIndexedPairs` method
	// https://github.com/tc39/proposal-iterator-helpers
	$$1N({
	  target: 'AsyncIterator',
	  name: 'indexed',
	  proto: true,
	  real: true,
	  forced: true
	}, {
	  asIndexedPairs: indexed$1
	});

	var $RangeError$3 = RangeError;
	var notANan = function notANan(it) {
	  // eslint-disable-next-line no-self-compare -- NaN check
	  if (it === it) return it;
	  throw new $RangeError$3('NaN is not allowed');
	};

	var $$1M = _export;
	var call$y = functionCall;
	var anObject$B = anObject$1a;
	var getIteratorDirect$j = getIteratorDirect$l;
	var notANaN$3 = notANan;
	var toPositiveInteger$3 = toPositiveInteger$5;
	var createAsyncIteratorProxy$4 = asyncIteratorCreateProxy;
	var createIterResultObject$9 = createIterResultObject$g;
	var IS_PURE$d = isPure;
	var AsyncIteratorProxy$3 = createAsyncIteratorProxy$4(function (Promise) {
	  var state = this;
	  return new Promise(function (resolve, reject) {
	    var doneAndReject = function doneAndReject(error) {
	      state.done = true;
	      reject(error);
	    };
	    var loop = function loop() {
	      try {
	        Promise.resolve(anObject$B(call$y(state.next, state.iterator))).then(function (step) {
	          try {
	            if (anObject$B(step).done) {
	              state.done = true;
	              resolve(createIterResultObject$9(undefined, true));
	            } else if (state.remaining) {
	              state.remaining--;
	              loop();
	            } else resolve(createIterResultObject$9(step.value, false));
	          } catch (err) {
	            doneAndReject(err);
	          }
	        }, doneAndReject);
	      } catch (error) {
	        doneAndReject(error);
	      }
	    };
	    loop();
	  });
	});

	// `AsyncIterator.prototype.drop` method
	// https://github.com/tc39/proposal-async-iterator-helpers
	$$1M({
	  target: 'AsyncIterator',
	  proto: true,
	  real: true,
	  forced: IS_PURE$d
	}, {
	  drop: function drop(limit) {
	    anObject$B(this);
	    var remaining = toPositiveInteger$3(notANaN$3(+limit));
	    return new AsyncIteratorProxy$3(getIteratorDirect$j(this), {
	      remaining: remaining
	    });
	  }
	});

	// https://github.com/tc39/proposal-iterator-helpers
	// https://github.com/tc39/proposal-array-from-async
	var call$x = functionCall;
	var aCallable$m = aCallable$F;
	var anObject$A = anObject$1a;
	var isObject$a = isObject$J;
	var doesNotExceedSafeInteger = doesNotExceedSafeInteger$4;
	var getBuiltIn$a = getBuiltIn$r;
	var getIteratorDirect$i = getIteratorDirect$l;
	var closeAsyncIteration$3 = asyncIteratorClose;
	var createMethod = function createMethod(TYPE) {
	  var IS_TO_ARRAY = TYPE === 0;
	  var IS_FOR_EACH = TYPE === 1;
	  var IS_EVERY = TYPE === 2;
	  var IS_SOME = TYPE === 3;
	  return function (object, fn, target) {
	    anObject$A(object);
	    var MAPPING = fn !== undefined;
	    if (MAPPING || !IS_TO_ARRAY) aCallable$m(fn);
	    var record = getIteratorDirect$i(object);
	    var Promise = getBuiltIn$a('Promise');
	    var iterator = record.iterator;
	    var next = record.next;
	    var counter = 0;
	    return new Promise(function (resolve, reject) {
	      var ifAbruptCloseAsyncIterator = function ifAbruptCloseAsyncIterator(error) {
	        closeAsyncIteration$3(iterator, reject, error, reject);
	      };
	      var loop = function loop() {
	        try {
	          if (MAPPING) try {
	            doesNotExceedSafeInteger(counter);
	          } catch (error5) {
	            ifAbruptCloseAsyncIterator(error5);
	          }
	          Promise.resolve(anObject$A(call$x(next, iterator))).then(function (step) {
	            try {
	              if (anObject$A(step).done) {
	                if (IS_TO_ARRAY) {
	                  target.length = counter;
	                  resolve(target);
	                } else resolve(IS_SOME ? false : IS_EVERY || undefined);
	              } else {
	                var value = step.value;
	                try {
	                  if (MAPPING) {
	                    var result = fn(value, counter);
	                    var handler = function handler($result) {
	                      if (IS_FOR_EACH) {
	                        loop();
	                      } else if (IS_EVERY) {
	                        $result ? loop() : closeAsyncIteration$3(iterator, resolve, false, reject);
	                      } else if (IS_TO_ARRAY) {
	                        try {
	                          target[counter++] = $result;
	                          loop();
	                        } catch (error4) {
	                          ifAbruptCloseAsyncIterator(error4);
	                        }
	                      } else {
	                        $result ? closeAsyncIteration$3(iterator, resolve, IS_SOME || value, reject) : loop();
	                      }
	                    };
	                    if (isObject$a(result)) Promise.resolve(result).then(handler, ifAbruptCloseAsyncIterator);else handler(result);
	                  } else {
	                    target[counter++] = value;
	                    loop();
	                  }
	                } catch (error3) {
	                  ifAbruptCloseAsyncIterator(error3);
	                }
	              }
	            } catch (error2) {
	              reject(error2);
	            }
	          }, reject);
	        } catch (error) {
	          reject(error);
	        }
	      };
	      loop();
	    });
	  };
	};
	var asyncIteratorIteration = {
	  toArray: createMethod(0),
	  forEach: createMethod(1),
	  every: createMethod(2),
	  some: createMethod(3),
	  find: createMethod(4)
	};

	var $$1L = _export;
	var $every = asyncIteratorIteration.every;

	// `AsyncIterator.prototype.every` method
	// https://github.com/tc39/proposal-async-iterator-helpers
	$$1L({
	  target: 'AsyncIterator',
	  proto: true,
	  real: true
	}, {
	  every: function every(predicate) {
	    return $every(this, predicate);
	  }
	});

	var $$1K = _export;
	var call$w = functionCall;
	var aCallable$l = aCallable$F;
	var anObject$z = anObject$1a;
	var isObject$9 = isObject$J;
	var getIteratorDirect$h = getIteratorDirect$l;
	var createAsyncIteratorProxy$3 = asyncIteratorCreateProxy;
	var createIterResultObject$8 = createIterResultObject$g;
	var closeAsyncIteration$2 = asyncIteratorClose;
	var IS_PURE$c = isPure;
	var AsyncIteratorProxy$2 = createAsyncIteratorProxy$3(function (Promise) {
	  var state = this;
	  var iterator = state.iterator;
	  var predicate = state.predicate;
	  return new Promise(function (resolve, reject) {
	    var doneAndReject = function doneAndReject(error) {
	      state.done = true;
	      reject(error);
	    };
	    var ifAbruptCloseAsyncIterator = function ifAbruptCloseAsyncIterator(error) {
	      closeAsyncIteration$2(iterator, doneAndReject, error, doneAndReject);
	    };
	    var loop = function loop() {
	      try {
	        Promise.resolve(anObject$z(call$w(state.next, iterator))).then(function (step) {
	          try {
	            if (anObject$z(step).done) {
	              state.done = true;
	              resolve(createIterResultObject$8(undefined, true));
	            } else {
	              var value = step.value;
	              try {
	                var result = predicate(value, state.counter++);
	                var handler = function handler(selected) {
	                  selected ? resolve(createIterResultObject$8(value, false)) : loop();
	                };
	                if (isObject$9(result)) Promise.resolve(result).then(handler, ifAbruptCloseAsyncIterator);else handler(result);
	              } catch (error3) {
	                ifAbruptCloseAsyncIterator(error3);
	              }
	            }
	          } catch (error2) {
	            doneAndReject(error2);
	          }
	        }, doneAndReject);
	      } catch (error) {
	        doneAndReject(error);
	      }
	    };
	    loop();
	  });
	});

	// `AsyncIterator.prototype.filter` method
	// https://github.com/tc39/proposal-async-iterator-helpers
	$$1K({
	  target: 'AsyncIterator',
	  proto: true,
	  real: true,
	  forced: IS_PURE$c
	}, {
	  filter: function filter(predicate) {
	    anObject$z(this);
	    aCallable$l(predicate);
	    return new AsyncIteratorProxy$2(getIteratorDirect$h(this), {
	      predicate: predicate
	    });
	  }
	});

	var $$1J = _export;
	var $find = asyncIteratorIteration.find;

	// `AsyncIterator.prototype.find` method
	// https://github.com/tc39/proposal-async-iterator-helpers
	$$1J({
	  target: 'AsyncIterator',
	  proto: true,
	  real: true
	}, {
	  find: function find(predicate) {
	    return $find(this, predicate);
	  }
	});

	var call$v = functionCall;
	var anObject$y = anObject$1a;
	var create$4 = objectCreate;
	var getMethod$5 = getMethod$g;
	var defineBuiltIns$3 = defineBuiltIns$9;
	var InternalStateModule$7 = internalState;
	var getBuiltIn$9 = getBuiltIn$r;
	var AsyncIteratorPrototype$1 = asyncIteratorPrototype;
	var createIterResultObject$7 = createIterResultObject$g;
	var Promise$2 = getBuiltIn$9('Promise');
	var ASYNC_FROM_SYNC_ITERATOR = 'AsyncFromSyncIterator';
	var setInternalState$7 = InternalStateModule$7.set;
	var getInternalState$3 = InternalStateModule$7.getterFor(ASYNC_FROM_SYNC_ITERATOR);
	var asyncFromSyncIteratorContinuation = function asyncFromSyncIteratorContinuation(result, resolve, reject) {
	  var done = result.done;
	  Promise$2.resolve(result.value).then(function (value) {
	    resolve(createIterResultObject$7(value, done));
	  }, reject);
	};
	var AsyncFromSyncIterator$1 = function AsyncIterator(iteratorRecord) {
	  iteratorRecord.type = ASYNC_FROM_SYNC_ITERATOR;
	  setInternalState$7(this, iteratorRecord);
	};
	AsyncFromSyncIterator$1.prototype = defineBuiltIns$3(create$4(AsyncIteratorPrototype$1), {
	  next: function next() {
	    var state = getInternalState$3(this);
	    return new Promise$2(function (resolve, reject) {
	      var result = anObject$y(call$v(state.next, state.iterator));
	      asyncFromSyncIteratorContinuation(result, resolve, reject);
	    });
	  },
	  'return': function _return() {
	    var iterator = getInternalState$3(this).iterator;
	    return new Promise$2(function (resolve, reject) {
	      var $return = getMethod$5(iterator, 'return');
	      if ($return === undefined) return resolve(createIterResultObject$7(undefined, true));
	      var result = anObject$y(call$v($return, iterator));
	      asyncFromSyncIteratorContinuation(result, resolve, reject);
	    });
	  }
	});
	var asyncFromSyncIterator = AsyncFromSyncIterator$1;

	var call$u = functionCall;
	var isCallable$8 = isCallable$E;
	var anObject$x = anObject$1a;
	var getIteratorDirect$g = getIteratorDirect$l;
	var getIteratorMethod$2 = getIteratorMethod$7;
	var getMethod$4 = getMethod$g;
	var wellKnownSymbol$9 = wellKnownSymbol$I;
	var AsyncFromSyncIterator = asyncFromSyncIterator;
	var ASYNC_ITERATOR = wellKnownSymbol$9('asyncIterator');
	var getAsyncIteratorFlattenable$2 = function getAsyncIteratorFlattenable(obj) {
	  var object = anObject$x(obj);
	  var alreadyAsync = true;
	  var method = getMethod$4(object, ASYNC_ITERATOR);
	  var iterator;
	  if (!isCallable$8(method)) {
	    method = getIteratorMethod$2(object);
	    alreadyAsync = false;
	  }
	  if (method !== undefined) {
	    iterator = call$u(method, object);
	  } else {
	    iterator = object;
	    alreadyAsync = true;
	  }
	  anObject$x(iterator);
	  return getIteratorDirect$g(alreadyAsync ? iterator : new AsyncFromSyncIterator(getIteratorDirect$g(iterator)));
	};

	var $$1I = _export;
	var call$t = functionCall;
	var aCallable$k = aCallable$F;
	var anObject$w = anObject$1a;
	var isObject$8 = isObject$J;
	var getIteratorDirect$f = getIteratorDirect$l;
	var createAsyncIteratorProxy$2 = asyncIteratorCreateProxy;
	var createIterResultObject$6 = createIterResultObject$g;
	var getAsyncIteratorFlattenable$1 = getAsyncIteratorFlattenable$2;
	var closeAsyncIteration$1 = asyncIteratorClose;
	var IS_PURE$b = isPure;
	var AsyncIteratorProxy$1 = createAsyncIteratorProxy$2(function (Promise) {
	  var state = this;
	  var iterator = state.iterator;
	  var mapper = state.mapper;
	  return new Promise(function (resolve, reject) {
	    var doneAndReject = function doneAndReject(error) {
	      state.done = true;
	      reject(error);
	    };
	    var ifAbruptCloseAsyncIterator = function ifAbruptCloseAsyncIterator(error) {
	      closeAsyncIteration$1(iterator, doneAndReject, error, doneAndReject);
	    };
	    var outerLoop = function outerLoop() {
	      try {
	        Promise.resolve(anObject$w(call$t(state.next, iterator))).then(function (step) {
	          try {
	            if (anObject$w(step).done) {
	              state.done = true;
	              resolve(createIterResultObject$6(undefined, true));
	            } else {
	              var value = step.value;
	              try {
	                var result = mapper(value, state.counter++);
	                var handler = function handler(mapped) {
	                  try {
	                    state.inner = getAsyncIteratorFlattenable$1(mapped);
	                    innerLoop();
	                  } catch (error4) {
	                    ifAbruptCloseAsyncIterator(error4);
	                  }
	                };
	                if (isObject$8(result)) Promise.resolve(result).then(handler, ifAbruptCloseAsyncIterator);else handler(result);
	              } catch (error3) {
	                ifAbruptCloseAsyncIterator(error3);
	              }
	            }
	          } catch (error2) {
	            doneAndReject(error2);
	          }
	        }, doneAndReject);
	      } catch (error) {
	        doneAndReject(error);
	      }
	    };
	    var innerLoop = function innerLoop() {
	      var inner = state.inner;
	      if (inner) {
	        try {
	          Promise.resolve(anObject$w(call$t(inner.next, inner.iterator))).then(function (result) {
	            try {
	              if (anObject$w(result).done) {
	                state.inner = null;
	                outerLoop();
	              } else resolve(createIterResultObject$6(result.value, false));
	            } catch (error1) {
	              ifAbruptCloseAsyncIterator(error1);
	            }
	          }, ifAbruptCloseAsyncIterator);
	        } catch (error) {
	          ifAbruptCloseAsyncIterator(error);
	        }
	      } else outerLoop();
	    };
	    innerLoop();
	  });
	});

	// `AsyncIterator.prototype.flaMap` method
	// https://github.com/tc39/proposal-async-iterator-helpers
	$$1I({
	  target: 'AsyncIterator',
	  proto: true,
	  real: true,
	  forced: IS_PURE$b
	}, {
	  flatMap: function flatMap(mapper) {
	    anObject$w(this);
	    aCallable$k(mapper);
	    return new AsyncIteratorProxy$1(getIteratorDirect$f(this), {
	      mapper: mapper,
	      inner: null
	    });
	  }
	});

	var $$1H = _export;
	var $forEach$1 = asyncIteratorIteration.forEach;

	// `AsyncIterator.prototype.forEach` method
	// https://github.com/tc39/proposal-async-iterator-helpers
	$$1H({
	  target: 'AsyncIterator',
	  proto: true,
	  real: true
	}, {
	  forEach: function forEach(fn) {
	    return $forEach$1(this, fn);
	  }
	});

	var call$s = functionCall;
	var createAsyncIteratorProxy$1 = asyncIteratorCreateProxy;
	var asyncIteratorWrap = createAsyncIteratorProxy$1(function () {
	  return call$s(this.next, this.iterator);
	}, true);

	var $$1G = _export;
	var toObject$4 = toObject$u;
	var isPrototypeOf$1 = objectIsPrototypeOf;
	var getAsyncIteratorFlattenable = getAsyncIteratorFlattenable$2;
	var AsyncIteratorPrototype = asyncIteratorPrototype;
	var WrapAsyncIterator = asyncIteratorWrap;
	var IS_PURE$a = isPure;

	// `AsyncIterator.from` method
	// https://github.com/tc39/proposal-async-iterator-helpers
	$$1G({
	  target: 'AsyncIterator',
	  stat: true,
	  forced: IS_PURE$a
	}, {
	  from: function from(O) {
	    var iteratorRecord = getAsyncIteratorFlattenable(typeof O == 'string' ? toObject$4(O) : O);
	    return isPrototypeOf$1(AsyncIteratorPrototype, iteratorRecord.iterator) ? iteratorRecord.iterator : new WrapAsyncIterator(iteratorRecord);
	  }
	});

	var $$1F = _export;
	var map$2 = asyncIteratorMap;
	var IS_PURE$9 = isPure;

	// `AsyncIterator.prototype.map` method
	// https://github.com/tc39/proposal-async-iterator-helpers
	$$1F({
	  target: 'AsyncIterator',
	  proto: true,
	  real: true,
	  forced: IS_PURE$9
	}, {
	  map: map$2
	});

	var $$1E = _export;
	var call$r = functionCall;
	var aCallable$j = aCallable$F;
	var anObject$v = anObject$1a;
	var isObject$7 = isObject$J;
	var getBuiltIn$8 = getBuiltIn$r;
	var getIteratorDirect$e = getIteratorDirect$l;
	var closeAsyncIteration = asyncIteratorClose;
	var Promise$1 = getBuiltIn$8('Promise');
	var $TypeError$b = TypeError;

	// `AsyncIterator.prototype.reduce` method
	// https://github.com/tc39/proposal-async-iterator-helpers
	$$1E({
	  target: 'AsyncIterator',
	  proto: true,
	  real: true
	}, {
	  reduce: function reduce(reducer /* , initialValue */) {
	    anObject$v(this);
	    aCallable$j(reducer);
	    var record = getIteratorDirect$e(this);
	    var iterator = record.iterator;
	    var next = record.next;
	    var noInitial = arguments.length < 2;
	    var accumulator = noInitial ? undefined : arguments[1];
	    var counter = 0;
	    return new Promise$1(function (resolve, reject) {
	      var ifAbruptCloseAsyncIterator = function ifAbruptCloseAsyncIterator(error) {
	        closeAsyncIteration(iterator, reject, error, reject);
	      };
	      var loop = function loop() {
	        try {
	          Promise$1.resolve(anObject$v(call$r(next, iterator))).then(function (step) {
	            try {
	              if (anObject$v(step).done) {
	                noInitial ? reject(new $TypeError$b('Reduce of empty iterator with no initial value')) : resolve(accumulator);
	              } else {
	                var value = step.value;
	                if (noInitial) {
	                  noInitial = false;
	                  accumulator = value;
	                  loop();
	                } else try {
	                  var result = reducer(accumulator, value, counter);
	                  var handler = function handler($result) {
	                    accumulator = $result;
	                    loop();
	                  };
	                  if (isObject$7(result)) Promise$1.resolve(result).then(handler, ifAbruptCloseAsyncIterator);else handler(result);
	                } catch (error3) {
	                  ifAbruptCloseAsyncIterator(error3);
	                }
	              }
	              counter++;
	            } catch (error2) {
	              reject(error2);
	            }
	          }, reject);
	        } catch (error) {
	          reject(error);
	        }
	      };
	      loop();
	    });
	  }
	});

	var $$1D = _export;
	var $some = asyncIteratorIteration.some;

	// `AsyncIterator.prototype.some` method
	// https://github.com/tc39/proposal-async-iterator-helpers
	$$1D({
	  target: 'AsyncIterator',
	  proto: true,
	  real: true
	}, {
	  some: function some(predicate) {
	    return $some(this, predicate);
	  }
	});

	var $$1C = _export;
	var call$q = functionCall;
	var anObject$u = anObject$1a;
	var getIteratorDirect$d = getIteratorDirect$l;
	var notANaN$2 = notANan;
	var toPositiveInteger$2 = toPositiveInteger$5;
	var createAsyncIteratorProxy = asyncIteratorCreateProxy;
	var createIterResultObject$5 = createIterResultObject$g;
	var IS_PURE$8 = isPure;
	var AsyncIteratorProxy = createAsyncIteratorProxy(function (Promise) {
	  var state = this;
	  var iterator = state.iterator;
	  var returnMethod;
	  if (!state.remaining--) {
	    var resultDone = createIterResultObject$5(undefined, true);
	    state.done = true;
	    returnMethod = iterator['return'];
	    if (returnMethod !== undefined) {
	      return Promise.resolve(call$q(returnMethod, iterator, undefined)).then(function () {
	        return resultDone;
	      });
	    }
	    return resultDone;
	  }
	  return Promise.resolve(call$q(state.next, iterator)).then(function (step) {
	    if (anObject$u(step).done) {
	      state.done = true;
	      return createIterResultObject$5(undefined, true);
	    }
	    return createIterResultObject$5(step.value, false);
	  }).then(null, function (error) {
	    state.done = true;
	    throw error;
	  });
	});

	// `AsyncIterator.prototype.take` method
	// https://github.com/tc39/proposal-async-iterator-helpers
	$$1C({
	  target: 'AsyncIterator',
	  proto: true,
	  real: true,
	  forced: IS_PURE$8
	}, {
	  take: function take(limit) {
	    anObject$u(this);
	    var remaining = toPositiveInteger$2(notANaN$2(+limit));
	    return new AsyncIteratorProxy(getIteratorDirect$d(this), {
	      remaining: remaining
	    });
	  }
	});

	var $$1B = _export;
	var $toArray = asyncIteratorIteration.toArray;

	// `AsyncIterator.prototype.toArray` method
	// https://github.com/tc39/proposal-async-iterator-helpers
	$$1B({
	  target: 'AsyncIterator',
	  proto: true,
	  real: true
	}, {
	  toArray: function toArray() {
	    return $toArray(this, undefined, []);
	  }
	});

	// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`

	var getBuiltIn$7 = getBuiltIn$r;
	var create$3 = objectCreate;
	var isObject$6 = isObject$J;
	var $Object$2 = Object;
	var $TypeError$a = TypeError;
	var Map$9 = getBuiltIn$7('Map');
	var WeakMap$2 = getBuiltIn$7('WeakMap');
	var Node = function Node() {
	  // keys
	  this.object = null;
	  this.symbol = null;
	  // child nodes
	  this.primitives = null;
	  this.objectsByIndex = create$3(null);
	};
	Node.prototype.get = function (key, initializer) {
	  return this[key] || (this[key] = initializer());
	};
	Node.prototype.next = function (i, it, IS_OBJECT) {
	  var store = IS_OBJECT ? this.objectsByIndex[i] || (this.objectsByIndex[i] = new WeakMap$2()) : this.primitives || (this.primitives = new Map$9());
	  var entry = store.get(it);
	  if (!entry) store.set(it, entry = new Node());
	  return entry;
	};
	var root$1 = new Node();
	var compositeKey = function compositeKey() {
	  var active = root$1;
	  var length = arguments.length;
	  var i, it;
	  // for prevent leaking, start from objects
	  for (i = 0; i < length; i++) {
	    if (isObject$6(it = arguments[i])) active = active.next(i, it, true);
	  }
	  if (this === $Object$2 && active === root$1) throw new $TypeError$a('Composite keys must contain a non-primitive component');
	  for (i = 0; i < length; i++) {
	    if (!isObject$6(it = arguments[i])) active = active.next(i, it, false);
	  }
	  return active;
	};

	var $$1A = _export;
	var apply$2 = functionApply$1;
	var getCompositeKeyNode$1 = compositeKey;
	var getBuiltIn$6 = getBuiltIn$r;
	var create$2 = objectCreate;
	var $Object$1 = Object;
	var initializer = function initializer() {
	  var freeze = getBuiltIn$6('Object', 'freeze');
	  return freeze ? freeze(create$2(null)) : create$2(null);
	};

	// https://github.com/tc39/proposal-richer-keys/tree/master/compositeKey
	$$1A({
	  global: true,
	  forced: true
	}, {
	  compositeKey: function compositeKey() {
	    return apply$2(getCompositeKeyNode$1, $Object$1, arguments).get('object', initializer);
	  }
	});

	var $$1z = _export;
	var getCompositeKeyNode = compositeKey;
	var getBuiltIn$5 = getBuiltIn$r;
	var apply$1 = functionApply$1;

	// https://github.com/tc39/proposal-richer-keys/tree/master/compositeKey
	$$1z({
	  global: true,
	  forced: true
	}, {
	  compositeSymbol: function compositeSymbol() {
	    if (arguments.length === 1 && typeof arguments[0] == 'string') return getBuiltIn$5('Symbol')['for'](arguments[0]);
	    return apply$1(getCompositeKeyNode, null, arguments).get('symbol', getBuiltIn$5('Symbol'));
	  }
	});

	var $$1y = _export;
	var global$b = global$R;
	var anInstance$3 = anInstance$b;
	var anObject$t = anObject$1a;
	var isCallable$7 = isCallable$E;
	var getPrototypeOf$3 = objectGetPrototypeOf$2;
	var defineBuiltInAccessor$3 = defineBuiltInAccessor$f;
	var createProperty = createProperty$8;
	var fails$1 = fails$13;
	var hasOwn$4 = hasOwnProperty_1;
	var wellKnownSymbol$8 = wellKnownSymbol$I;
	var IteratorPrototype$2 = iteratorsCore.IteratorPrototype;
	var DESCRIPTORS$4 = descriptors;
	var CONSTRUCTOR = 'constructor';
	var ITERATOR$4 = 'Iterator';
	var TO_STRING_TAG$1 = wellKnownSymbol$8('toStringTag');
	var $TypeError$9 = TypeError;
	var NativeIterator = global$b[ITERATOR$4];

	// FF56- have non-standard global helper `Iterator`
	var FORCED = !isCallable$7(NativeIterator) || NativeIterator.prototype !== IteratorPrototype$2
	// FF44- non-standard `Iterator` passes previous tests
	|| !fails$1(function () {
	  NativeIterator({});
	});
	var IteratorConstructor = function Iterator() {
	  anInstance$3(this, IteratorPrototype$2);
	  if (getPrototypeOf$3(this) === IteratorPrototype$2) throw new $TypeError$9('Abstract class Iterator not directly constructable');
	};
	var defineIteratorPrototypeAccessor = function defineIteratorPrototypeAccessor(key, value) {
	  if (DESCRIPTORS$4) {
	    defineBuiltInAccessor$3(IteratorPrototype$2, key, {
	      configurable: true,
	      get: function get() {
	        return value;
	      },
	      set: function set(replacement) {
	        anObject$t(this);
	        if (this === IteratorPrototype$2) throw new $TypeError$9("You can't redefine this property");
	        if (hasOwn$4(this, key)) this[key] = replacement;else createProperty(this, key, replacement);
	      }
	    });
	  } else IteratorPrototype$2[key] = value;
	};
	if (!hasOwn$4(IteratorPrototype$2, TO_STRING_TAG$1)) defineIteratorPrototypeAccessor(TO_STRING_TAG$1, ITERATOR$4);
	if (FORCED || !hasOwn$4(IteratorPrototype$2, CONSTRUCTOR) || IteratorPrototype$2[CONSTRUCTOR] === Object) {
	  defineIteratorPrototypeAccessor(CONSTRUCTOR, IteratorConstructor);
	}
	IteratorConstructor.prototype = IteratorPrototype$2;

	// `Iterator` constructor
	// https://github.com/tc39/proposal-iterator-helpers
	$$1y({
	  global: true,
	  constructor: true,
	  forced: FORCED
	}, {
	  Iterator: IteratorConstructor
	});

	var call$p = functionCall;
	var create$1 = objectCreate;
	var createNonEnumerableProperty$2 = createNonEnumerableProperty$g;
	var defineBuiltIns$2 = defineBuiltIns$9;
	var wellKnownSymbol$7 = wellKnownSymbol$I;
	var InternalStateModule$6 = internalState;
	var getMethod$3 = getMethod$g;
	var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
	var createIterResultObject$4 = createIterResultObject$g;
	var iteratorClose$4 = iteratorClose$8;
	var TO_STRING_TAG = wellKnownSymbol$7('toStringTag');
	var ITERATOR_HELPER = 'IteratorHelper';
	var WRAP_FOR_VALID_ITERATOR = 'WrapForValidIterator';
	var setInternalState$6 = InternalStateModule$6.set;
	var createIteratorProxyPrototype = function createIteratorProxyPrototype(IS_ITERATOR) {
	  var getInternalState = InternalStateModule$6.getterFor(IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER);
	  return defineBuiltIns$2(create$1(IteratorPrototype$1), {
	    next: function next() {
	      var state = getInternalState(this);
	      // for simplification:
	      //   for `%WrapForValidIteratorPrototype%.next` our `nextHandler` returns `IterResultObject`
	      //   for `%IteratorHelperPrototype%.next` - just a value
	      if (IS_ITERATOR) return state.nextHandler();
	      try {
	        var result = state.done ? undefined : state.nextHandler();
	        return createIterResultObject$4(result, state.done);
	      } catch (error) {
	        state.done = true;
	        throw error;
	      }
	    },
	    'return': function _return() {
	      var state = getInternalState(this);
	      var iterator = state.iterator;
	      state.done = true;
	      if (IS_ITERATOR) {
	        var returnMethod = getMethod$3(iterator, 'return');
	        return returnMethod ? call$p(returnMethod, iterator) : createIterResultObject$4(undefined, true);
	      }
	      if (state.inner) try {
	        iteratorClose$4(state.inner.iterator, 'normal');
	      } catch (error) {
	        return iteratorClose$4(iterator, 'throw', error);
	      }
	      iteratorClose$4(iterator, 'normal');
	      return createIterResultObject$4(undefined, true);
	    }
	  });
	};
	var WrapForValidIteratorPrototype = createIteratorProxyPrototype(true);
	var IteratorHelperPrototype = createIteratorProxyPrototype(false);
	createNonEnumerableProperty$2(IteratorHelperPrototype, TO_STRING_TAG, 'Iterator Helper');
	var iteratorCreateProxy = function iteratorCreateProxy(nextHandler, IS_ITERATOR) {
	  var IteratorProxy = function Iterator(record, state) {
	    if (state) {
	      state.iterator = record.iterator;
	      state.next = record.next;
	    } else state = record;
	    state.type = IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER;
	    state.nextHandler = nextHandler;
	    state.counter = 0;
	    state.done = false;
	    setInternalState$6(this, state);
	  };
	  IteratorProxy.prototype = IS_ITERATOR ? WrapForValidIteratorPrototype : IteratorHelperPrototype;
	  return IteratorProxy;
	};

	var call$o = functionCall;
	var aCallable$i = aCallable$F;
	var anObject$s = anObject$1a;
	var getIteratorDirect$c = getIteratorDirect$l;
	var createIteratorProxy$5 = iteratorCreateProxy;
	var callWithSafeIterationClosing$1 = callWithSafeIterationClosing$3;
	var IteratorProxy$5 = createIteratorProxy$5(function () {
	  var iterator = this.iterator;
	  var result = anObject$s(call$o(this.next, iterator));
	  var done = this.done = !!result.done;
	  if (!done) return callWithSafeIterationClosing$1(iterator, this.mapper, [result.value, this.counter++], true);
	});

	// `Iterator.prototype.map` method
	// https://github.com/tc39/proposal-iterator-helpers
	var iteratorMap = function map(mapper) {
	  anObject$s(this);
	  aCallable$i(mapper);
	  return new IteratorProxy$5(getIteratorDirect$c(this), {
	    mapper: mapper
	  });
	};

	var call$n = functionCall;
	var map$1 = iteratorMap;
	var callback = function callback(value, counter) {
	  return [counter, value];
	};

	// `Iterator.prototype.indexed` method
	// https://github.com/tc39/proposal-iterator-helpers
	var iteratorIndexed = function indexed() {
	  return call$n(map$1, this, callback);
	};

	// TODO: Remove from `core-js@4`
	var $$1x = _export;
	var indexed = iteratorIndexed;

	// `Iterator.prototype.asIndexedPairs` method
	// https://github.com/tc39/proposal-iterator-helpers
	$$1x({
	  target: 'Iterator',
	  name: 'indexed',
	  proto: true,
	  real: true,
	  forced: true
	}, {
	  asIndexedPairs: indexed
	});

	var $$1w = _export;
	var call$m = functionCall;
	var anObject$r = anObject$1a;
	var getIteratorDirect$b = getIteratorDirect$l;
	var notANaN$1 = notANan;
	var toPositiveInteger$1 = toPositiveInteger$5;
	var createIteratorProxy$4 = iteratorCreateProxy;
	var IS_PURE$7 = isPure;
	var IteratorProxy$4 = createIteratorProxy$4(function () {
	  var iterator = this.iterator;
	  var next = this.next;
	  var result, done;
	  while (this.remaining) {
	    this.remaining--;
	    result = anObject$r(call$m(next, iterator));
	    done = this.done = !!result.done;
	    if (done) return;
	  }
	  result = anObject$r(call$m(next, iterator));
	  done = this.done = !!result.done;
	  if (!done) return result.value;
	});

	// `Iterator.prototype.drop` method
	// https://github.com/tc39/proposal-iterator-helpers
	$$1w({
	  target: 'Iterator',
	  proto: true,
	  real: true,
	  forced: IS_PURE$7
	}, {
	  drop: function drop(limit) {
	    anObject$r(this);
	    var remaining = toPositiveInteger$1(notANaN$1(+limit));
	    return new IteratorProxy$4(getIteratorDirect$b(this), {
	      remaining: remaining
	    });
	  }
	});

	var $$1v = _export;
	var iterate$v = iterate$E;
	var aCallable$h = aCallable$F;
	var anObject$q = anObject$1a;
	var getIteratorDirect$a = getIteratorDirect$l;

	// `Iterator.prototype.every` method
	// https://github.com/tc39/proposal-iterator-helpers
	$$1v({
	  target: 'Iterator',
	  proto: true,
	  real: true
	}, {
	  every: function every(predicate) {
	    anObject$q(this);
	    aCallable$h(predicate);
	    var record = getIteratorDirect$a(this);
	    var counter = 0;
	    return !iterate$v(record, function (value, stop) {
	      if (!predicate(value, counter++)) return stop();
	    }, {
	      IS_RECORD: true,
	      INTERRUPTED: true
	    }).stopped;
	  }
	});

	var $$1u = _export;
	var call$l = functionCall;
	var aCallable$g = aCallable$F;
	var anObject$p = anObject$1a;
	var getIteratorDirect$9 = getIteratorDirect$l;
	var createIteratorProxy$3 = iteratorCreateProxy;
	var callWithSafeIterationClosing = callWithSafeIterationClosing$3;
	var IS_PURE$6 = isPure;
	var IteratorProxy$3 = createIteratorProxy$3(function () {
	  var iterator = this.iterator;
	  var predicate = this.predicate;
	  var next = this.next;
	  var result, done, value;
	  while (true) {
	    result = anObject$p(call$l(next, iterator));
	    done = this.done = !!result.done;
	    if (done) return;
	    value = result.value;
	    if (callWithSafeIterationClosing(iterator, predicate, [value, this.counter++], true)) return value;
	  }
	});

	// `Iterator.prototype.filter` method
	// https://github.com/tc39/proposal-iterator-helpers
	$$1u({
	  target: 'Iterator',
	  proto: true,
	  real: true,
	  forced: IS_PURE$6
	}, {
	  filter: function filter(predicate) {
	    anObject$p(this);
	    aCallable$g(predicate);
	    return new IteratorProxy$3(getIteratorDirect$9(this), {
	      predicate: predicate
	    });
	  }
	});

	var $$1t = _export;
	var iterate$u = iterate$E;
	var aCallable$f = aCallable$F;
	var anObject$o = anObject$1a;
	var getIteratorDirect$8 = getIteratorDirect$l;

	// `Iterator.prototype.find` method
	// https://github.com/tc39/proposal-iterator-helpers
	$$1t({
	  target: 'Iterator',
	  proto: true,
	  real: true
	}, {
	  find: function find(predicate) {
	    anObject$o(this);
	    aCallable$f(predicate);
	    var record = getIteratorDirect$8(this);
	    var counter = 0;
	    return iterate$u(record, function (value, stop) {
	      if (predicate(value, counter++)) return stop(value);
	    }, {
	      IS_RECORD: true,
	      INTERRUPTED: true
	    }).result;
	  }
	});

	var call$k = functionCall;
	var anObject$n = anObject$1a;
	var getIteratorDirect$7 = getIteratorDirect$l;
	var getIteratorMethod$1 = getIteratorMethod$7;
	var getIteratorFlattenable$2 = function getIteratorFlattenable(obj, stringHandling) {
	  if (!stringHandling || typeof obj !== 'string') anObject$n(obj);
	  var method = getIteratorMethod$1(obj);
	  return getIteratorDirect$7(anObject$n(method !== undefined ? call$k(method, obj) : obj));
	};

	var $$1s = _export;
	var call$j = functionCall;
	var aCallable$e = aCallable$F;
	var anObject$m = anObject$1a;
	var getIteratorDirect$6 = getIteratorDirect$l;
	var getIteratorFlattenable$1 = getIteratorFlattenable$2;
	var createIteratorProxy$2 = iteratorCreateProxy;
	var iteratorClose$3 = iteratorClose$8;
	var IS_PURE$5 = isPure;
	var IteratorProxy$2 = createIteratorProxy$2(function () {
	  var iterator = this.iterator;
	  var mapper = this.mapper;
	  var result, inner;
	  while (true) {
	    if (inner = this.inner) try {
	      result = anObject$m(call$j(inner.next, inner.iterator));
	      if (!result.done) return result.value;
	      this.inner = null;
	    } catch (error) {
	      iteratorClose$3(iterator, 'throw', error);
	    }
	    result = anObject$m(call$j(this.next, iterator));
	    if (this.done = !!result.done) return;
	    try {
	      this.inner = getIteratorFlattenable$1(mapper(result.value, this.counter++), false);
	    } catch (error) {
	      iteratorClose$3(iterator, 'throw', error);
	    }
	  }
	});

	// `Iterator.prototype.flatMap` method
	// https://github.com/tc39/proposal-iterator-helpers
	$$1s({
	  target: 'Iterator',
	  proto: true,
	  real: true,
	  forced: IS_PURE$5
	}, {
	  flatMap: function flatMap(mapper) {
	    anObject$m(this);
	    aCallable$e(mapper);
	    return new IteratorProxy$2(getIteratorDirect$6(this), {
	      mapper: mapper,
	      inner: null
	    });
	  }
	});

	var $$1r = _export;
	var iterate$t = iterate$E;
	var aCallable$d = aCallable$F;
	var anObject$l = anObject$1a;
	var getIteratorDirect$5 = getIteratorDirect$l;

	// `Iterator.prototype.forEach` method
	// https://github.com/tc39/proposal-iterator-helpers
	$$1r({
	  target: 'Iterator',
	  proto: true,
	  real: true
	}, {
	  forEach: function forEach(fn) {
	    anObject$l(this);
	    aCallable$d(fn);
	    var record = getIteratorDirect$5(this);
	    var counter = 0;
	    iterate$t(record, function (value) {
	      fn(value, counter++);
	    }, {
	      IS_RECORD: true
	    });
	  }
	});

	var $$1q = _export;
	var call$i = functionCall;
	var toObject$3 = toObject$u;
	var isPrototypeOf = objectIsPrototypeOf;
	var IteratorPrototype = iteratorsCore.IteratorPrototype;
	var createIteratorProxy$1 = iteratorCreateProxy;
	var getIteratorFlattenable = getIteratorFlattenable$2;
	var IS_PURE$4 = isPure;
	var IteratorProxy$1 = createIteratorProxy$1(function () {
	  return call$i(this.next, this.iterator);
	}, true);

	// `Iterator.from` method
	// https://github.com/tc39/proposal-iterator-helpers
	$$1q({
	  target: 'Iterator',
	  stat: true,
	  forced: IS_PURE$4
	}, {
	  from: function from(O) {
	    var iteratorRecord = getIteratorFlattenable(typeof O == 'string' ? toObject$3(O) : O, true);
	    return isPrototypeOf(IteratorPrototype, iteratorRecord.iterator) ? iteratorRecord.iterator : new IteratorProxy$1(iteratorRecord);
	  }
	});

	var $$1p = _export;
	var map = iteratorMap;
	var IS_PURE$3 = isPure;

	// `Iterator.prototype.map` method
	// https://github.com/tc39/proposal-iterator-helpers
	$$1p({
	  target: 'Iterator',
	  proto: true,
	  real: true,
	  forced: IS_PURE$3
	}, {
	  map: map
	});

	var $$1o = _export;
	var iterate$s = iterate$E;
	var aCallable$c = aCallable$F;
	var anObject$k = anObject$1a;
	var getIteratorDirect$4 = getIteratorDirect$l;
	var $TypeError$8 = TypeError;

	// `Iterator.prototype.reduce` method
	// https://github.com/tc39/proposal-iterator-helpers
	$$1o({
	  target: 'Iterator',
	  proto: true,
	  real: true
	}, {
	  reduce: function reduce(reducer /* , initialValue */) {
	    anObject$k(this);
	    aCallable$c(reducer);
	    var record = getIteratorDirect$4(this);
	    var noInitial = arguments.length < 2;
	    var accumulator = noInitial ? undefined : arguments[1];
	    var counter = 0;
	    iterate$s(record, function (value) {
	      if (noInitial) {
	        noInitial = false;
	        accumulator = value;
	      } else {
	        accumulator = reducer(accumulator, value, counter);
	      }
	      counter++;
	    }, {
	      IS_RECORD: true
	    });
	    if (noInitial) throw new $TypeError$8('Reduce of empty iterator with no initial value');
	    return accumulator;
	  }
	});

	var $$1n = _export;
	var iterate$r = iterate$E;
	var aCallable$b = aCallable$F;
	var anObject$j = anObject$1a;
	var getIteratorDirect$3 = getIteratorDirect$l;

	// `Iterator.prototype.some` method
	// https://github.com/tc39/proposal-iterator-helpers
	$$1n({
	  target: 'Iterator',
	  proto: true,
	  real: true
	}, {
	  some: function some(predicate) {
	    anObject$j(this);
	    aCallable$b(predicate);
	    var record = getIteratorDirect$3(this);
	    var counter = 0;
	    return iterate$r(record, function (value, stop) {
	      if (predicate(value, counter++)) return stop();
	    }, {
	      IS_RECORD: true,
	      INTERRUPTED: true
	    }).stopped;
	  }
	});

	var $$1m = _export;
	var call$h = functionCall;
	var anObject$i = anObject$1a;
	var getIteratorDirect$2 = getIteratorDirect$l;
	var notANaN = notANan;
	var toPositiveInteger = toPositiveInteger$5;
	var createIteratorProxy = iteratorCreateProxy;
	var iteratorClose$2 = iteratorClose$8;
	var IS_PURE$2 = isPure;
	var IteratorProxy = createIteratorProxy(function () {
	  var iterator = this.iterator;
	  if (!this.remaining--) {
	    this.done = true;
	    return iteratorClose$2(iterator, 'normal', undefined);
	  }
	  var result = anObject$i(call$h(this.next, iterator));
	  var done = this.done = !!result.done;
	  if (!done) return result.value;
	});

	// `Iterator.prototype.take` method
	// https://github.com/tc39/proposal-iterator-helpers
	$$1m({
	  target: 'Iterator',
	  proto: true,
	  real: true,
	  forced: IS_PURE$2
	}, {
	  take: function take(limit) {
	    anObject$i(this);
	    var remaining = toPositiveInteger(notANaN(+limit));
	    return new IteratorProxy(getIteratorDirect$2(this), {
	      remaining: remaining
	    });
	  }
	});

	var $$1l = _export;
	var anObject$h = anObject$1a;
	var iterate$q = iterate$E;
	var getIteratorDirect$1 = getIteratorDirect$l;
	var push$7 = [].push;

	// `Iterator.prototype.toArray` method
	// https://github.com/tc39/proposal-iterator-helpers
	$$1l({
	  target: 'Iterator',
	  proto: true,
	  real: true
	}, {
	  toArray: function toArray() {
	    var result = [];
	    iterate$q(getIteratorDirect$1(anObject$h(this)), push$7, {
	      that: result,
	      IS_RECORD: true
	    });
	    return result;
	  }
	});

	var uncurryThis$f = functionUncurryThis;

	// eslint-disable-next-line es/no-map -- safe
	var MapPrototype$1 = Map.prototype;
	var mapHelpers = {
	  // eslint-disable-next-line es/no-map -- safe
	  Map: Map,
	  set: uncurryThis$f(MapPrototype$1.set),
	  get: uncurryThis$f(MapPrototype$1.get),
	  has: uncurryThis$f(MapPrototype$1.has),
	  remove: uncurryThis$f(MapPrototype$1['delete']),
	  proto: MapPrototype$1
	};

	var has$a = mapHelpers.has;

	// Perform ? RequireInternalSlot(M, [[MapData]])
	var aMap$d = function aMap(it) {
	  has$a(it);
	  return it;
	};

	var $$1k = _export;
	var aMap$c = aMap$d;
	var remove$5 = mapHelpers.remove;

	// `Map.prototype.deleteAll` method
	// https://github.com/tc39/proposal-collection-methods
	$$1k({
	  target: 'Map',
	  proto: true,
	  real: true,
	  forced: true
	}, {
	  deleteAll: function deleteAll( /* ...elements */
	  ) {
	    var collection = aMap$c(this);
	    var allDeleted = true;
	    var wasDeleted;
	    for (var k = 0, len = arguments.length; k < len; k++) {
	      wasDeleted = remove$5(collection, arguments[k]);
	      allDeleted = allDeleted && wasDeleted;
	    }
	    return !!allDeleted;
	  }
	});

	var call$g = functionCall;
	var iterateSimple$8 = function iterateSimple(record, fn, ITERATOR_INSTEAD_OF_RECORD) {
	  var iterator = ITERATOR_INSTEAD_OF_RECORD ? record : record.iterator;
	  var next = record.next;
	  var step, result;
	  while (!(step = call$g(next, iterator)).done) {
	    result = fn(step.value);
	    if (result !== undefined) return result;
	  }
	};

	var uncurryThis$e = functionUncurryThis;
	var iterateSimple$7 = iterateSimple$8;
	var MapHelpers$8 = mapHelpers;
	var Map$8 = MapHelpers$8.Map;
	var MapPrototype = MapHelpers$8.proto;
	var forEach$2 = uncurryThis$e(MapPrototype.forEach);
	var entries = uncurryThis$e(MapPrototype.entries);
	var next$1 = entries(new Map$8()).next;
	var mapIterate = function mapIterate(map, fn, interruptible) {
	  return interruptible ? iterateSimple$7({
	    iterator: entries(map),
	    next: next$1
	  }, function (entry) {
	    return fn(entry[1], entry[0]);
	  }) : forEach$2(map, fn);
	};

	var $$1j = _export;
	var bind$e = functionBindContext;
	var aMap$b = aMap$d;
	var iterate$p = mapIterate;

	// `Map.prototype.every` method
	// https://github.com/tc39/proposal-collection-methods
	$$1j({
	  target: 'Map',
	  proto: true,
	  real: true,
	  forced: true
	}, {
	  every: function every(callbackfn /* , thisArg */) {
	    var map = aMap$b(this);
	    var boundFunction = bind$e(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    return iterate$p(map, function (value, key) {
	      if (!boundFunction(value, key, map)) return false;
	    }, true) !== false;
	  }
	});

	var $$1i = _export;
	var bind$d = functionBindContext;
	var aMap$a = aMap$d;
	var MapHelpers$7 = mapHelpers;
	var iterate$o = mapIterate;
	var Map$7 = MapHelpers$7.Map;
	var set$5 = MapHelpers$7.set;

	// `Map.prototype.filter` method
	// https://github.com/tc39/proposal-collection-methods
	$$1i({
	  target: 'Map',
	  proto: true,
	  real: true,
	  forced: true
	}, {
	  filter: function filter(callbackfn /* , thisArg */) {
	    var map = aMap$a(this);
	    var boundFunction = bind$d(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    var newMap = new Map$7();
	    iterate$o(map, function (value, key) {
	      if (boundFunction(value, key, map)) set$5(newMap, key, value);
	    });
	    return newMap;
	  }
	});

	var $$1h = _export;
	var bind$c = functionBindContext;
	var aMap$9 = aMap$d;
	var iterate$n = mapIterate;

	// `Map.prototype.find` method
	// https://github.com/tc39/proposal-collection-methods
	$$1h({
	  target: 'Map',
	  proto: true,
	  real: true,
	  forced: true
	}, {
	  find: function find(callbackfn /* , thisArg */) {
	    var map = aMap$9(this);
	    var boundFunction = bind$c(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    var result = iterate$n(map, function (value, key) {
	      if (boundFunction(value, key, map)) return {
	        value: value
	      };
	    }, true);
	    return result && result.value;
	  }
	});

	var $$1g = _export;
	var bind$b = functionBindContext;
	var aMap$8 = aMap$d;
	var iterate$m = mapIterate;

	// `Map.prototype.findKey` method
	// https://github.com/tc39/proposal-collection-methods
	$$1g({
	  target: 'Map',
	  proto: true,
	  real: true,
	  forced: true
	}, {
	  findKey: function findKey(callbackfn /* , thisArg */) {
	    var map = aMap$8(this);
	    var boundFunction = bind$b(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    var result = iterate$m(map, function (value, key) {
	      if (boundFunction(value, key, map)) return {
	        key: key
	      };
	    }, true);
	    return result && result.key;
	  }
	});

	// https://tc39.github.io/proposal-setmap-offrom/
	var bind$a = functionBindContext;
	var anObject$g = anObject$1a;
	var toObject$2 = toObject$u;
	var iterate$l = iterate$E;
	var collectionFrom = function collectionFrom(C, adder, ENTRY) {
	  return function from(source /* , mapFn, thisArg */) {
	    var O = toObject$2(source);
	    var length = arguments.length;
	    var mapFn = length > 1 ? arguments[1] : undefined;
	    var mapping = mapFn !== undefined;
	    var boundFunction = mapping ? bind$a(mapFn, length > 2 ? arguments[2] : undefined) : undefined;
	    var result = new C();
	    var n = 0;
	    iterate$l(O, function (nextItem) {
	      var entry = mapping ? boundFunction(nextItem, n++) : nextItem;
	      if (ENTRY) adder(result, anObject$g(entry)[0], entry[1]);else adder(result, entry);
	    });
	    return result;
	  };
	};

	var $$1f = _export;
	var MapHelpers$6 = mapHelpers;
	var createCollectionFrom$3 = collectionFrom;

	// `Map.from` method
	// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
	$$1f({
	  target: 'Map',
	  stat: true,
	  forced: true
	}, {
	  from: createCollectionFrom$3(MapHelpers$6.Map, MapHelpers$6.set, true)
	});

	var $$1e = _export;
	var uncurryThis$d = functionUncurryThis;
	var aCallable$a = aCallable$F;
	var requireObjectCoercible$3 = requireObjectCoercible$i;
	var iterate$k = iterate$E;
	var MapHelpers$5 = mapHelpers;
	var IS_PURE$1 = isPure;
	var Map$6 = MapHelpers$5.Map;
	var has$9 = MapHelpers$5.has;
	var get$1 = MapHelpers$5.get;
	var set$4 = MapHelpers$5.set;
	var push$6 = uncurryThis$d([].push);

	// `Map.groupBy` method
	// https://github.com/tc39/proposal-array-grouping
	$$1e({
	  target: 'Map',
	  stat: true,
	  forced: IS_PURE$1
	}, {
	  groupBy: function groupBy(items, callbackfn) {
	    requireObjectCoercible$3(items);
	    aCallable$a(callbackfn);
	    var map = new Map$6();
	    var k = 0;
	    iterate$k(items, function (value) {
	      var key = callbackfn(value, k++);
	      if (!has$9(map, key)) set$4(map, key, [value]);else push$6(get$1(map, key), value);
	    });
	    return map;
	  }
	});

	// `SameValueZero` abstract operation
	// https://tc39.es/ecma262/#sec-samevaluezero
	var sameValueZero$1 = function sameValueZero(x, y) {
	  // eslint-disable-next-line no-self-compare -- NaN check
	  return x === y || x !== x && y !== y;
	};

	var $$1d = _export;
	var sameValueZero = sameValueZero$1;
	var aMap$7 = aMap$d;
	var iterate$j = mapIterate;

	// `Map.prototype.includes` method
	// https://github.com/tc39/proposal-collection-methods
	$$1d({
	  target: 'Map',
	  proto: true,
	  real: true,
	  forced: true
	}, {
	  includes: function includes(searchElement) {
	    return iterate$j(aMap$7(this), function (value) {
	      if (sameValueZero(value, searchElement)) return true;
	    }, true) === true;
	  }
	});

	var $$1c = _export;
	var call$f = functionCall;
	var iterate$i = iterate$E;
	var isCallable$6 = isCallable$E;
	var aCallable$9 = aCallable$F;
	var Map$5 = mapHelpers.Map;

	// `Map.keyBy` method
	// https://github.com/tc39/proposal-collection-methods
	$$1c({
	  target: 'Map',
	  stat: true,
	  forced: true
	}, {
	  keyBy: function keyBy(iterable, keyDerivative) {
	    var C = isCallable$6(this) ? this : Map$5;
	    var newMap = new C();
	    aCallable$9(keyDerivative);
	    var setter = aCallable$9(newMap.set);
	    iterate$i(iterable, function (element) {
	      call$f(setter, newMap, keyDerivative(element), element);
	    });
	    return newMap;
	  }
	});

	var $$1b = _export;
	var aMap$6 = aMap$d;
	var iterate$h = mapIterate;

	// `Map.prototype.keyOf` method
	// https://github.com/tc39/proposal-collection-methods
	$$1b({
	  target: 'Map',
	  proto: true,
	  real: true,
	  forced: true
	}, {
	  keyOf: function keyOf(searchElement) {
	    var result = iterate$h(aMap$6(this), function (value, key) {
	      if (value === searchElement) return {
	        key: key
	      };
	    }, true);
	    return result && result.key;
	  }
	});

	var $$1a = _export;
	var bind$9 = functionBindContext;
	var aMap$5 = aMap$d;
	var MapHelpers$4 = mapHelpers;
	var iterate$g = mapIterate;
	var Map$4 = MapHelpers$4.Map;
	var set$3 = MapHelpers$4.set;

	// `Map.prototype.mapKeys` method
	// https://github.com/tc39/proposal-collection-methods
	$$1a({
	  target: 'Map',
	  proto: true,
	  real: true,
	  forced: true
	}, {
	  mapKeys: function mapKeys(callbackfn /* , thisArg */) {
	    var map = aMap$5(this);
	    var boundFunction = bind$9(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    var newMap = new Map$4();
	    iterate$g(map, function (value, key) {
	      set$3(newMap, boundFunction(value, key, map), value);
	    });
	    return newMap;
	  }
	});

	var $$19 = _export;
	var bind$8 = functionBindContext;
	var aMap$4 = aMap$d;
	var MapHelpers$3 = mapHelpers;
	var iterate$f = mapIterate;
	var Map$3 = MapHelpers$3.Map;
	var set$2 = MapHelpers$3.set;

	// `Map.prototype.mapValues` method
	// https://github.com/tc39/proposal-collection-methods
	$$19({
	  target: 'Map',
	  proto: true,
	  real: true,
	  forced: true
	}, {
	  mapValues: function mapValues(callbackfn /* , thisArg */) {
	    var map = aMap$4(this);
	    var boundFunction = bind$8(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    var newMap = new Map$3();
	    iterate$f(map, function (value, key) {
	      set$2(newMap, key, boundFunction(value, key, map));
	    });
	    return newMap;
	  }
	});

	var $$18 = _export;
	var aMap$3 = aMap$d;
	var iterate$e = iterate$E;
	var set$1 = mapHelpers.set;

	// `Map.prototype.merge` method
	// https://github.com/tc39/proposal-collection-methods
	$$18({
	  target: 'Map',
	  proto: true,
	  real: true,
	  arity: 1,
	  forced: true
	}, {
	  // eslint-disable-next-line no-unused-vars -- required for `.length`
	  merge: function merge(iterable /* ...iterables */) {
	    var map = aMap$3(this);
	    var argumentsLength = arguments.length;
	    var i = 0;
	    while (i < argumentsLength) {
	      iterate$e(arguments[i++], function (key, value) {
	        set$1(map, key, value);
	      }, {
	        AS_ENTRIES: true
	      });
	    }
	    return map;
	  }
	});

	var anObject$f = anObject$1a;

	// https://tc39.github.io/proposal-setmap-offrom/
	var collectionOf = function collectionOf(C, adder, ENTRY) {
	  return function of() {
	    var result = new C();
	    var length = arguments.length;
	    for (var index = 0; index < length; index++) {
	      var entry = arguments[index];
	      if (ENTRY) adder(result, anObject$f(entry)[0], entry[1]);else adder(result, entry);
	    }
	    return result;
	  };
	};

	var $$17 = _export;
	var MapHelpers$2 = mapHelpers;
	var createCollectionOf$3 = collectionOf;

	// `Map.of` method
	// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
	$$17({
	  target: 'Map',
	  stat: true,
	  forced: true
	}, {
	  of: createCollectionOf$3(MapHelpers$2.Map, MapHelpers$2.set, true)
	});

	var $$16 = _export;
	var aCallable$8 = aCallable$F;
	var aMap$2 = aMap$d;
	var iterate$d = mapIterate;
	var $TypeError$7 = TypeError;

	// `Map.prototype.reduce` method
	// https://github.com/tc39/proposal-collection-methods
	$$16({
	  target: 'Map',
	  proto: true,
	  real: true,
	  forced: true
	}, {
	  reduce: function reduce(callbackfn /* , initialValue */) {
	    var map = aMap$2(this);
	    var noInitial = arguments.length < 2;
	    var accumulator = noInitial ? undefined : arguments[1];
	    aCallable$8(callbackfn);
	    iterate$d(map, function (value, key) {
	      if (noInitial) {
	        noInitial = false;
	        accumulator = value;
	      } else {
	        accumulator = callbackfn(accumulator, value, key, map);
	      }
	    });
	    if (noInitial) throw new $TypeError$7('Reduce of empty map with no initial value');
	    return accumulator;
	  }
	});

	var $$15 = _export;
	var bind$7 = functionBindContext;
	var aMap$1 = aMap$d;
	var iterate$c = mapIterate;

	// `Map.prototype.some` method
	// https://github.com/tc39/proposal-collection-methods
	$$15({
	  target: 'Map',
	  proto: true,
	  real: true,
	  forced: true
	}, {
	  some: function some(callbackfn /* , thisArg */) {
	    var map = aMap$1(this);
	    var boundFunction = bind$7(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    return iterate$c(map, function (value, key) {
	      if (boundFunction(value, key, map)) return true;
	    }, true) === true;
	  }
	});

	var $$14 = _export;
	var aCallable$7 = aCallable$F;
	var aMap = aMap$d;
	var MapHelpers$1 = mapHelpers;
	var $TypeError$6 = TypeError;
	var get = MapHelpers$1.get;
	var has$8 = MapHelpers$1.has;
	var set = MapHelpers$1.set;

	// `Map.prototype.update` method
	// https://github.com/tc39/proposal-collection-methods
	$$14({
	  target: 'Map',
	  proto: true,
	  real: true,
	  forced: true
	}, {
	  update: function update(key, callback /* , thunk */) {
	    var map = aMap(this);
	    var length = arguments.length;
	    aCallable$7(callback);
	    var isPresentInMap = has$8(map, key);
	    if (!isPresentInMap && length < 3) {
	      throw new $TypeError$6('Updating absent value');
	    }
	    var value = isPresentInMap ? get(map, key) : aCallable$7(length > 2 ? arguments[2] : undefined)(key, map);
	    set(map, key, callback(value, key, map));
	    return map;
	  }
	});

	var call$e = functionCall;
	var aCallable$6 = aCallable$F;
	var isCallable$5 = isCallable$E;
	var anObject$e = anObject$1a;
	var $TypeError$5 = TypeError;

	// `Map.prototype.upsert` method
	// https://github.com/tc39/proposal-upsert
	var mapUpsert = function upsert(key, updateFn /* , insertFn */) {
	  var map = anObject$e(this);
	  var get = aCallable$6(map.get);
	  var has = aCallable$6(map.has);
	  var set = aCallable$6(map.set);
	  var insertFn = arguments.length > 2 ? arguments[2] : undefined;
	  var value;
	  if (!isCallable$5(updateFn) && !isCallable$5(insertFn)) {
	    throw new $TypeError$5('At least one callback required');
	  }
	  if (call$e(has, map, key)) {
	    value = call$e(get, map, key);
	    if (isCallable$5(updateFn)) {
	      value = updateFn(value);
	      call$e(set, map, key, value);
	    }
	  } else if (isCallable$5(insertFn)) {
	    value = insertFn();
	    call$e(set, map, key, value);
	  }
	  return value;
	};

	// TODO: remove from `core-js@4`
	var $$13 = _export;
	var upsert$2 = mapUpsert;

	// `Map.prototype.updateOrInsert` method (replaced by `Map.prototype.emplace`)
	// https://github.com/thumbsupep/proposal-upsert
	$$13({
	  target: 'Map',
	  proto: true,
	  real: true,
	  name: 'upsert',
	  forced: true
	}, {
	  updateOrInsert: upsert$2
	});

	// TODO: remove from `core-js@4`
	var $$12 = _export;
	var upsert$1 = mapUpsert;

	// `Map.prototype.upsert` method (replaced by `Map.prototype.emplace`)
	// https://github.com/thumbsupep/proposal-upsert
	$$12({
	  target: 'Map',
	  proto: true,
	  real: true,
	  forced: true
	}, {
	  upsert: upsert$1
	});

	var $$11 = _export;
	var min = Math.min;
	var max$2 = Math.max;

	// `Math.clamp` method
	// https://rwaldron.github.io/proposal-math-extensions/
	$$11({
	  target: 'Math',
	  stat: true,
	  forced: true
	}, {
	  clamp: function clamp(x, lower, upper) {
	    return min(upper, max$2(lower, x));
	  }
	});

	var $$10 = _export;

	// `Math.DEG_PER_RAD` constant
	// https://rwaldron.github.io/proposal-math-extensions/
	$$10({
	  target: 'Math',
	  stat: true,
	  nonConfigurable: true,
	  nonWritable: true
	}, {
	  DEG_PER_RAD: Math.PI / 180
	});

	var $$$ = _export;
	var RAD_PER_DEG = 180 / Math.PI;

	// `Math.degrees` method
	// https://rwaldron.github.io/proposal-math-extensions/
	$$$({
	  target: 'Math',
	  stat: true,
	  forced: true
	}, {
	  degrees: function degrees(radians) {
	    return radians * RAD_PER_DEG;
	  }
	});

	// `Math.scale` method implementation
	// https://rwaldron.github.io/proposal-math-extensions/
	var mathScale = Math.scale || function scale(x, inLow, inHigh, outLow, outHigh) {
	  var nx = +x;
	  var nInLow = +inLow;
	  var nInHigh = +inHigh;
	  var nOutLow = +outLow;
	  var nOutHigh = +outHigh;
	  // eslint-disable-next-line no-self-compare -- NaN check
	  if (nx !== nx || nInLow !== nInLow || nInHigh !== nInHigh || nOutLow !== nOutLow || nOutHigh !== nOutHigh) return NaN;
	  if (nx === Infinity || nx === -Infinity) return nx;
	  return (nx - nInLow) * (nOutHigh - nOutLow) / (nInHigh - nInLow) + nOutLow;
	};

	var $$_ = _export;
	var scale$1 = mathScale;
	var fround = mathFround;

	// `Math.fscale` method
	// https://rwaldron.github.io/proposal-math-extensions/
	$$_({
	  target: 'Math',
	  stat: true,
	  forced: true
	}, {
	  fscale: function fscale(x, inLow, inHigh, outLow, outHigh) {
	    return fround(scale$1(x, inLow, inHigh, outLow, outHigh));
	  }
	});

	var $$Z = _export;

	// `Math.iaddh` method
	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	// TODO: Remove from `core-js@4`
	$$Z({
	  target: 'Math',
	  stat: true,
	  forced: true
	}, {
	  iaddh: function iaddh(x0, x1, y0, y1) {
	    var $x0 = x0 >>> 0;
	    var $x1 = x1 >>> 0;
	    var $y0 = y0 >>> 0;
	    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
	  }
	});

	var $$Y = _export;

	// `Math.imulh` method
	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	// TODO: Remove from `core-js@4`
	$$Y({
	  target: 'Math',
	  stat: true,
	  forced: true
	}, {
	  imulh: function imulh(u, v) {
	    var UINT16 = 0xFFFF;
	    var $u = +u;
	    var $v = +v;
	    var u0 = $u & UINT16;
	    var v0 = $v & UINT16;
	    var u1 = $u >> 16;
	    var v1 = $v >> 16;
	    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
	  }
	});

	var $$X = _export;

	// `Math.isubh` method
	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	// TODO: Remove from `core-js@4`
	$$X({
	  target: 'Math',
	  stat: true,
	  forced: true
	}, {
	  isubh: function isubh(x0, x1, y0, y1) {
	    var $x0 = x0 >>> 0;
	    var $x1 = x1 >>> 0;
	    var $y0 = y0 >>> 0;
	    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
	  }
	});

	var $$W = _export;

	// `Math.RAD_PER_DEG` constant
	// https://rwaldron.github.io/proposal-math-extensions/
	$$W({
	  target: 'Math',
	  stat: true,
	  nonConfigurable: true,
	  nonWritable: true
	}, {
	  RAD_PER_DEG: 180 / Math.PI
	});

	var $$V = _export;
	var DEG_PER_RAD = Math.PI / 180;

	// `Math.radians` method
	// https://rwaldron.github.io/proposal-math-extensions/
	$$V({
	  target: 'Math',
	  stat: true,
	  forced: true
	}, {
	  radians: function radians(degrees) {
	    return degrees * DEG_PER_RAD;
	  }
	});

	var $$U = _export;
	var scale = mathScale;

	// `Math.scale` method
	// https://rwaldron.github.io/proposal-math-extensions/
	$$U({
	  target: 'Math',
	  stat: true,
	  forced: true
	}, {
	  scale: scale
	});

	var global$a = global$R;
	var globalIsFinite = global$a.isFinite;

	// `Number.isFinite` method
	// https://tc39.es/ecma262/#sec-number.isfinite
	// eslint-disable-next-line es/no-number-isfinite -- safe
	var numberIsFinite$1 = Number.isFinite || function isFinite(it) {
	  return typeof it == 'number' && globalIsFinite(it);
	};

	var $$T = _export;
	var anObject$d = anObject$1a;
	var numberIsFinite = numberIsFinite$1;
	var createIteratorConstructor$3 = iteratorCreateConstructor;
	var createIterResultObject$3 = createIterResultObject$g;
	var InternalStateModule$5 = internalState;
	var SEEDED_RANDOM = 'Seeded Random';
	var SEEDED_RANDOM_GENERATOR = SEEDED_RANDOM + ' Generator';
	var SEED_TYPE_ERROR = 'Math.seededPRNG() argument should have a "seed" field with a finite value.';
	var setInternalState$5 = InternalStateModule$5.set;
	var getInternalState$2 = InternalStateModule$5.getterFor(SEEDED_RANDOM_GENERATOR);
	var $TypeError$4 = TypeError;
	var $SeededRandomGenerator = createIteratorConstructor$3(function SeededRandomGenerator(seed) {
	  setInternalState$5(this, {
	    type: SEEDED_RANDOM_GENERATOR,
	    seed: seed % 2147483647
	  });
	}, SEEDED_RANDOM, function next() {
	  var state = getInternalState$2(this);
	  var seed = state.seed = (state.seed * 1103515245 + 12345) % 2147483647;
	  return createIterResultObject$3((seed & 1073741823) / 1073741823, false);
	});

	// `Math.seededPRNG` method
	// https://github.com/tc39/proposal-seeded-random
	// based on https://github.com/tc39/proposal-seeded-random/blob/78b8258835b57fc2100d076151ab506bc3202ae6/demo.html
	$$T({
	  target: 'Math',
	  stat: true,
	  forced: true
	}, {
	  seededPRNG: function seededPRNG(it) {
	    var seed = anObject$d(it).seed;
	    if (!numberIsFinite(seed)) throw new $TypeError$4(SEED_TYPE_ERROR);
	    return new $SeededRandomGenerator(seed);
	  }
	});

	var $$S = _export;

	// `Math.signbit` method
	// https://github.com/tc39/proposal-Math.signbit
	$$S({
	  target: 'Math',
	  stat: true,
	  forced: true
	}, {
	  signbit: function signbit(x) {
	    var n = +x;
	    // eslint-disable-next-line no-self-compare -- NaN check
	    return n === n && n === 0 ? 1 / n === -Infinity : n < 0;
	  }
	});

	var $$R = _export;

	// `Math.umulh` method
	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	// TODO: Remove from `core-js@4`
	$$R({
	  target: 'Math',
	  stat: true,
	  forced: true
	}, {
	  umulh: function umulh(u, v) {
	    var UINT16 = 0xFFFF;
	    var $u = +u;
	    var $v = +v;
	    var u0 = $u & UINT16;
	    var v0 = $v & UINT16;
	    var u1 = $u >>> 16;
	    var v1 = $v >>> 16;
	    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
	  }
	});

	var $$Q = _export;
	var uncurryThis$c = functionUncurryThis;
	var toIntegerOrInfinity$2 = toIntegerOrInfinity$e;
	var INVALID_NUMBER_REPRESENTATION = 'Invalid number representation';
	var INVALID_RADIX = 'Invalid radix';
	var $RangeError$2 = RangeError;
	var $SyntaxError = SyntaxError;
	var $TypeError$3 = TypeError;
	var $parseInt = parseInt;
	var pow$1 = Math.pow;
	var valid = /^[\d.a-z]+$/;
	var charAt$4 = uncurryThis$c(''.charAt);
	var exec$2 = uncurryThis$c(valid.exec);
	var numberToString$1 = uncurryThis$c(1.0.toString);
	var stringSlice$3 = uncurryThis$c(''.slice);
	var split$3 = uncurryThis$c(''.split);

	// `Number.fromString` method
	// https://github.com/tc39/proposal-number-fromstring
	$$Q({
	  target: 'Number',
	  stat: true,
	  forced: true
	}, {
	  fromString: function fromString(string, radix) {
	    var sign = 1;
	    if (typeof string != 'string') throw new $TypeError$3(INVALID_NUMBER_REPRESENTATION);
	    if (!string.length) throw new $SyntaxError(INVALID_NUMBER_REPRESENTATION);
	    if (charAt$4(string, 0) === '-') {
	      sign = -1;
	      string = stringSlice$3(string, 1);
	      if (!string.length) throw new $SyntaxError(INVALID_NUMBER_REPRESENTATION);
	    }
	    var R = radix === undefined ? 10 : toIntegerOrInfinity$2(radix);
	    if (R < 2 || R > 36) throw new $RangeError$2(INVALID_RADIX);
	    if (!exec$2(valid, string)) throw new $SyntaxError(INVALID_NUMBER_REPRESENTATION);
	    var parts = split$3(string, '.');
	    var mathNum = $parseInt(parts[0], R);
	    if (parts.length > 1) mathNum += $parseInt(parts[1], R) / pow$1(R, parts[1].length);
	    if (R === 10 && numberToString$1(mathNum, R) !== string) throw new $SyntaxError(INVALID_NUMBER_REPRESENTATION);
	    return sign * mathNum;
	  }
	});

	var InternalStateModule$4 = internalState;
	var createIteratorConstructor$2 = iteratorCreateConstructor;
	var createIterResultObject$2 = createIterResultObject$g;
	var hasOwn$3 = hasOwnProperty_1;
	var objectKeys = objectKeys$5;
	var toObject$1 = toObject$u;
	var OBJECT_ITERATOR = 'Object Iterator';
	var setInternalState$4 = InternalStateModule$4.set;
	var getInternalState$1 = InternalStateModule$4.getterFor(OBJECT_ITERATOR);
	var objectIterator = createIteratorConstructor$2(function ObjectIterator(source, mode) {
	  var object = toObject$1(source);
	  setInternalState$4(this, {
	    type: OBJECT_ITERATOR,
	    mode: mode,
	    object: object,
	    keys: objectKeys(object),
	    index: 0
	  });
	}, 'Object', function next() {
	  var state = getInternalState$1(this);
	  var keys = state.keys;
	  while (true) {
	    if (keys === null || state.index >= keys.length) {
	      state.object = state.keys = null;
	      return createIterResultObject$2(undefined, true);
	    }
	    var key = keys[state.index++];
	    var object = state.object;
	    if (!hasOwn$3(object, key)) continue;
	    switch (state.mode) {
	      case 'keys':
	        return createIterResultObject$2(key, false);
	      case 'values':
	        return createIterResultObject$2(object[key], false);
	    } /* entries */
	    return createIterResultObject$2([key, object[key]], false);
	  }
	});

	// TODO: Remove from `core-js@4`
	var $$P = _export;
	var ObjectIterator$2 = objectIterator;

	// `Object.iterateEntries` method
	// https://github.com/tc39/proposal-object-iteration
	$$P({
	  target: 'Object',
	  stat: true,
	  forced: true
	}, {
	  iterateEntries: function iterateEntries(object) {
	    return new ObjectIterator$2(object, 'entries');
	  }
	});

	// TODO: Remove from `core-js@4`
	var $$O = _export;
	var ObjectIterator$1 = objectIterator;

	// `Object.iterateKeys` method
	// https://github.com/tc39/proposal-object-iteration
	$$O({
	  target: 'Object',
	  stat: true,
	  forced: true
	}, {
	  iterateKeys: function iterateKeys(object) {
	    return new ObjectIterator$1(object, 'keys');
	  }
	});

	// TODO: Remove from `core-js@4`
	var $$N = _export;
	var ObjectIterator = objectIterator;

	// `Object.iterateValues` method
	// https://github.com/tc39/proposal-object-iteration
	$$N({
	  target: 'Object',
	  stat: true,
	  forced: true
	}, {
	  iterateValues: function iterateValues(object) {
	    return new ObjectIterator(object, 'values');
	  }
	});

	// https://github.com/tc39/proposal-observable
	var $$M = _export;
	var call$d = functionCall;
	var DESCRIPTORS$3 = descriptors;
	var setSpecies = setSpecies$6;
	var aCallable$5 = aCallable$F;
	var anObject$c = anObject$1a;
	var anInstance$2 = anInstance$b;
	var isCallable$4 = isCallable$E;
	var isNullOrUndefined$3 = isNullOrUndefined$g;
	var isObject$5 = isObject$J;
	var getMethod$2 = getMethod$g;
	var defineBuiltIn$2 = defineBuiltIn$l;
	var defineBuiltIns$1 = defineBuiltIns$9;
	var defineBuiltInAccessor$2 = defineBuiltInAccessor$f;
	var hostReportErrors = hostReportErrors$2;
	var wellKnownSymbol$6 = wellKnownSymbol$I;
	var InternalStateModule$3 = internalState;
	var $$OBSERVABLE$1 = wellKnownSymbol$6('observable');
	var OBSERVABLE = 'Observable';
	var SUBSCRIPTION = 'Subscription';
	var SUBSCRIPTION_OBSERVER = 'SubscriptionObserver';
	var getterFor = InternalStateModule$3.getterFor;
	var setInternalState$3 = InternalStateModule$3.set;
	var getObservableInternalState = getterFor(OBSERVABLE);
	var getSubscriptionInternalState = getterFor(SUBSCRIPTION);
	var getSubscriptionObserverInternalState = getterFor(SUBSCRIPTION_OBSERVER);
	var SubscriptionState = function SubscriptionState(observer) {
	  this.observer = anObject$c(observer);
	  this.cleanup = undefined;
	  this.subscriptionObserver = undefined;
	};
	SubscriptionState.prototype = {
	  type: SUBSCRIPTION,
	  clean: function clean() {
	    var cleanup = this.cleanup;
	    if (cleanup) {
	      this.cleanup = undefined;
	      try {
	        cleanup();
	      } catch (error) {
	        hostReportErrors(error);
	      }
	    }
	  },
	  close: function close() {
	    if (!DESCRIPTORS$3) {
	      var subscription = this.facade;
	      var subscriptionObserver = this.subscriptionObserver;
	      subscription.closed = true;
	      if (subscriptionObserver) subscriptionObserver.closed = true;
	    }
	    this.observer = undefined;
	  },
	  isClosed: function isClosed() {
	    return this.observer === undefined;
	  }
	};
	var Subscription = function Subscription(observer, subscriber) {
	  var subscriptionState = setInternalState$3(this, new SubscriptionState(observer));
	  var start;
	  if (!DESCRIPTORS$3) this.closed = false;
	  try {
	    if (start = getMethod$2(observer, 'start')) call$d(start, observer, this);
	  } catch (error) {
	    hostReportErrors(error);
	  }
	  if (subscriptionState.isClosed()) return;
	  var subscriptionObserver = subscriptionState.subscriptionObserver = new SubscriptionObserver(subscriptionState);
	  try {
	    var cleanup = subscriber(subscriptionObserver);
	    var subscription = cleanup;
	    if (!isNullOrUndefined$3(cleanup)) subscriptionState.cleanup = isCallable$4(cleanup.unsubscribe) ? function () {
	      subscription.unsubscribe();
	    } : aCallable$5(cleanup);
	  } catch (error) {
	    subscriptionObserver.error(error);
	    return;
	  }
	  if (subscriptionState.isClosed()) subscriptionState.clean();
	};
	Subscription.prototype = defineBuiltIns$1({}, {
	  unsubscribe: function unsubscribe() {
	    var subscriptionState = getSubscriptionInternalState(this);
	    if (!subscriptionState.isClosed()) {
	      subscriptionState.close();
	      subscriptionState.clean();
	    }
	  }
	});
	if (DESCRIPTORS$3) defineBuiltInAccessor$2(Subscription.prototype, 'closed', {
	  configurable: true,
	  get: function closed() {
	    return getSubscriptionInternalState(this).isClosed();
	  }
	});
	var SubscriptionObserver = function SubscriptionObserver(subscriptionState) {
	  setInternalState$3(this, {
	    type: SUBSCRIPTION_OBSERVER,
	    subscriptionState: subscriptionState
	  });
	  if (!DESCRIPTORS$3) this.closed = false;
	};
	SubscriptionObserver.prototype = defineBuiltIns$1({}, {
	  next: function next(value) {
	    var subscriptionState = getSubscriptionObserverInternalState(this).subscriptionState;
	    if (!subscriptionState.isClosed()) {
	      var observer = subscriptionState.observer;
	      try {
	        var nextMethod = getMethod$2(observer, 'next');
	        if (nextMethod) call$d(nextMethod, observer, value);
	      } catch (error) {
	        hostReportErrors(error);
	      }
	    }
	  },
	  error: function error(value) {
	    var subscriptionState = getSubscriptionObserverInternalState(this).subscriptionState;
	    if (!subscriptionState.isClosed()) {
	      var observer = subscriptionState.observer;
	      subscriptionState.close();
	      try {
	        var errorMethod = getMethod$2(observer, 'error');
	        if (errorMethod) call$d(errorMethod, observer, value);else hostReportErrors(value);
	      } catch (err) {
	        hostReportErrors(err);
	      }
	      subscriptionState.clean();
	    }
	  },
	  complete: function complete() {
	    var subscriptionState = getSubscriptionObserverInternalState(this).subscriptionState;
	    if (!subscriptionState.isClosed()) {
	      var observer = subscriptionState.observer;
	      subscriptionState.close();
	      try {
	        var completeMethod = getMethod$2(observer, 'complete');
	        if (completeMethod) call$d(completeMethod, observer);
	      } catch (error) {
	        hostReportErrors(error);
	      }
	      subscriptionState.clean();
	    }
	  }
	});
	if (DESCRIPTORS$3) defineBuiltInAccessor$2(SubscriptionObserver.prototype, 'closed', {
	  configurable: true,
	  get: function closed() {
	    return getSubscriptionObserverInternalState(this).subscriptionState.isClosed();
	  }
	});
	var $Observable = function Observable(subscriber) {
	  anInstance$2(this, ObservablePrototype);
	  setInternalState$3(this, {
	    type: OBSERVABLE,
	    subscriber: aCallable$5(subscriber)
	  });
	};
	var ObservablePrototype = $Observable.prototype;
	defineBuiltIns$1(ObservablePrototype, {
	  subscribe: function subscribe(observer) {
	    var length = arguments.length;
	    return new Subscription(isCallable$4(observer) ? {
	      next: observer,
	      error: length > 1 ? arguments[1] : undefined,
	      complete: length > 2 ? arguments[2] : undefined
	    } : isObject$5(observer) ? observer : {}, getObservableInternalState(this).subscriber);
	  }
	});
	defineBuiltIn$2(ObservablePrototype, $$OBSERVABLE$1, function () {
	  return this;
	});
	$$M({
	  global: true,
	  constructor: true,
	  forced: true
	}, {
	  Observable: $Observable
	});
	setSpecies(OBSERVABLE);

	var $$L = _export;
	var getBuiltIn$4 = getBuiltIn$r;
	var call$c = functionCall;
	var anObject$b = anObject$1a;
	var isConstructor$1 = isConstructor$7;
	var getIterator$1 = getIterator$5;
	var getMethod$1 = getMethod$g;
	var iterate$b = iterate$E;
	var wellKnownSymbol$5 = wellKnownSymbol$I;
	var $$OBSERVABLE = wellKnownSymbol$5('observable');

	// `Observable.from` method
	// https://github.com/tc39/proposal-observable
	$$L({
	  target: 'Observable',
	  stat: true,
	  forced: true
	}, {
	  from: function from(x) {
	    var C = isConstructor$1(this) ? this : getBuiltIn$4('Observable');
	    var observableMethod = getMethod$1(anObject$b(x), $$OBSERVABLE);
	    if (observableMethod) {
	      var observable = anObject$b(call$c(observableMethod, x));
	      return observable.constructor === C ? observable : new C(function (observer) {
	        return observable.subscribe(observer);
	      });
	    }
	    var iterator = getIterator$1(x);
	    return new C(function (observer) {
	      iterate$b(iterator, function (it, stop) {
	        observer.next(it);
	        if (observer.closed) return stop();
	      }, {
	        IS_ITERATOR: true,
	        INTERRUPTED: true
	      });
	      observer.complete();
	    });
	  }
	});

	var $$K = _export;
	var getBuiltIn$3 = getBuiltIn$r;
	var isConstructor = isConstructor$7;
	var Array$1 = getBuiltIn$3('Array');

	// `Observable.of` method
	// https://github.com/tc39/proposal-observable
	$$K({
	  target: 'Observable',
	  stat: true,
	  forced: true
	}, {
	  of: function of() {
	    var C = isConstructor(this) ? this : getBuiltIn$3('Observable');
	    var length = arguments.length;
	    var items = Array$1(length);
	    var index = 0;
	    while (index < length) items[index] = arguments[index++];
	    return new C(function (observer) {
	      for (var i = 0; i < length; i++) {
	        observer.next(items[i]);
	        if (observer.closed) return;
	      }
	      observer.complete();
	    });
	  }
	});

	var $$J = _export;
	var call$b = functionCall;
	var aCallable$4 = aCallable$F;
	var getBuiltIn$2 = getBuiltIn$r;
	var newPromiseCapabilityModule$1 = newPromiseCapability$2;
	var perform$1 = perform$7;
	var iterate$a = iterate$E;
	var PROMISE_STATICS_INCORRECT_ITERATION = promiseStaticsIncorrectIteration;
	var PROMISE_ANY_ERROR = 'No one promise resolved';

	// `Promise.any` method
	// https://tc39.es/ecma262/#sec-promise.any
	$$J({
	  target: 'Promise',
	  stat: true,
	  forced: PROMISE_STATICS_INCORRECT_ITERATION
	}, {
	  any: function any(iterable) {
	    var C = this;
	    var AggregateError = getBuiltIn$2('AggregateError');
	    var capability = newPromiseCapabilityModule$1.f(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = perform$1(function () {
	      var promiseResolve = aCallable$4(C.resolve);
	      var errors = [];
	      var counter = 0;
	      var remaining = 1;
	      var alreadyResolved = false;
	      iterate$a(iterable, function (promise) {
	        var index = counter++;
	        var alreadyRejected = false;
	        remaining++;
	        call$b(promiseResolve, C, promise).then(function (value) {
	          if (alreadyRejected || alreadyResolved) return;
	          alreadyResolved = true;
	          resolve(value);
	        }, function (error) {
	          if (alreadyRejected || alreadyResolved) return;
	          alreadyRejected = true;
	          errors[index] = error;
	          --remaining || reject(new AggregateError(errors, PROMISE_ANY_ERROR));
	        });
	      });
	      --remaining || reject(new AggregateError(errors, PROMISE_ANY_ERROR));
	    });
	    if (result.error) reject(result.value);
	    return capability.promise;
	  }
	});

	// TODO: Remove from `core-js@4`
	var $$I = _export;
	var newPromiseCapabilityModule = newPromiseCapability$2;
	var perform = perform$7;

	// `Promise.try` method
	// https://github.com/tc39/proposal-promise-try
	$$I({
	  target: 'Promise',
	  stat: true,
	  forced: true
	}, {
	  'try': function _try(callbackfn) {
	    var promiseCapability = newPromiseCapabilityModule.f(this);
	    var result = perform(callbackfn);
	    (result.error ? promiseCapability.reject : promiseCapability.resolve)(result.value);
	    return promiseCapability.promise;
	  }
	});

	// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`

	var getBuiltIn$1 = getBuiltIn$r;
	var uncurryThis$b = functionUncurryThis;
	var shared = shared$9.exports;
	var Map$2 = getBuiltIn$1('Map');
	var WeakMap$1 = getBuiltIn$1('WeakMap');
	var push$5 = uncurryThis$b([].push);
	var metadata = shared('metadata');
	var store$1 = metadata.store || (metadata.store = new WeakMap$1());
	var getOrCreateMetadataMap$1 = function getOrCreateMetadataMap(target, targetKey, create) {
	  var targetMetadata = store$1.get(target);
	  if (!targetMetadata) {
	    if (!create) return;
	    store$1.set(target, targetMetadata = new Map$2());
	  }
	  var keyMetadata = targetMetadata.get(targetKey);
	  if (!keyMetadata) {
	    if (!create) return;
	    targetMetadata.set(targetKey, keyMetadata = new Map$2());
	  }
	  return keyMetadata;
	};
	var ordinaryHasOwnMetadata$3 = function ordinaryHasOwnMetadata(MetadataKey, O, P) {
	  var metadataMap = getOrCreateMetadataMap$1(O, P, false);
	  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
	};
	var ordinaryGetOwnMetadata$2 = function ordinaryGetOwnMetadata(MetadataKey, O, P) {
	  var metadataMap = getOrCreateMetadataMap$1(O, P, false);
	  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
	};
	var ordinaryDefineOwnMetadata$2 = function ordinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
	  getOrCreateMetadataMap$1(O, P, true).set(MetadataKey, MetadataValue);
	};
	var ordinaryOwnMetadataKeys$2 = function ordinaryOwnMetadataKeys(target, targetKey) {
	  var metadataMap = getOrCreateMetadataMap$1(target, targetKey, false);
	  var keys = [];
	  if (metadataMap) metadataMap.forEach(function (_, key) {
	    push$5(keys, key);
	  });
	  return keys;
	};
	var toMetadataKey$9 = function toMetadataKey(it) {
	  return it === undefined || typeof it == 'symbol' ? it : String(it);
	};
	var reflectMetadata = {
	  store: store$1,
	  getMap: getOrCreateMetadataMap$1,
	  has: ordinaryHasOwnMetadata$3,
	  get: ordinaryGetOwnMetadata$2,
	  set: ordinaryDefineOwnMetadata$2,
	  keys: ordinaryOwnMetadataKeys$2,
	  toKey: toMetadataKey$9
	};

	// TODO: Remove from `core-js@4`
	var $$H = _export;
	var ReflectMetadataModule$8 = reflectMetadata;
	var anObject$a = anObject$1a;
	var toMetadataKey$8 = ReflectMetadataModule$8.toKey;
	var ordinaryDefineOwnMetadata$1 = ReflectMetadataModule$8.set;

	// `Reflect.defineMetadata` method
	// https://github.com/rbuckton/reflect-metadata
	$$H({
	  target: 'Reflect',
	  stat: true
	}, {
	  defineMetadata: function defineMetadata(metadataKey, metadataValue, target /* , targetKey */) {
	    var targetKey = arguments.length < 4 ? undefined : toMetadataKey$8(arguments[3]);
	    ordinaryDefineOwnMetadata$1(metadataKey, metadataValue, anObject$a(target), targetKey);
	  }
	});

	var $$G = _export;
	var ReflectMetadataModule$7 = reflectMetadata;
	var anObject$9 = anObject$1a;
	var toMetadataKey$7 = ReflectMetadataModule$7.toKey;
	var getOrCreateMetadataMap = ReflectMetadataModule$7.getMap;
	var store = ReflectMetadataModule$7.store;

	// `Reflect.deleteMetadata` method
	// https://github.com/rbuckton/reflect-metadata
	$$G({
	  target: 'Reflect',
	  stat: true
	}, {
	  deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
	    var targetKey = arguments.length < 3 ? undefined : toMetadataKey$7(arguments[2]);
	    var metadataMap = getOrCreateMetadataMap(anObject$9(target), targetKey, false);
	    if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
	    if (metadataMap.size) return true;
	    var targetMetadata = store.get(target);
	    targetMetadata['delete'](targetKey);
	    return !!targetMetadata.size || store['delete'](target);
	  }
	});

	// TODO: Remove from `core-js@4`
	var $$F = _export;
	var ReflectMetadataModule$6 = reflectMetadata;
	var anObject$8 = anObject$1a;
	var getPrototypeOf$2 = objectGetPrototypeOf$2;
	var ordinaryHasOwnMetadata$2 = ReflectMetadataModule$6.has;
	var ordinaryGetOwnMetadata$1 = ReflectMetadataModule$6.get;
	var toMetadataKey$6 = ReflectMetadataModule$6.toKey;
	var ordinaryGetMetadata = function ordinaryGetMetadata(MetadataKey, O, P) {
	  var hasOwn = ordinaryHasOwnMetadata$2(MetadataKey, O, P);
	  if (hasOwn) return ordinaryGetOwnMetadata$1(MetadataKey, O, P);
	  var parent = getPrototypeOf$2(O);
	  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
	};

	// `Reflect.getMetadata` method
	// https://github.com/rbuckton/reflect-metadata
	$$F({
	  target: 'Reflect',
	  stat: true
	}, {
	  getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
	    var targetKey = arguments.length < 3 ? undefined : toMetadataKey$6(arguments[2]);
	    return ordinaryGetMetadata(metadataKey, anObject$8(target), targetKey);
	  }
	});

	var uncurryThis$a = functionUncurryThis;
	var aCallable$3 = aCallable$F;
	var isNullOrUndefined$2 = isNullOrUndefined$g;
	var lengthOfArrayLike = lengthOfArrayLike$m;
	var toObject = toObject$u;
	var MapHelpers = mapHelpers;
	var iterate$9 = mapIterate;
	var Map$1 = MapHelpers.Map;
	var mapHas = MapHelpers.has;
	var mapSet = MapHelpers.set;
	var push$4 = uncurryThis$a([].push);

	// `Array.prototype.uniqueBy` method
	// https://github.com/tc39/proposal-array-unique
	var arrayUniqueBy$1 = function uniqueBy(resolver) {
	  var that = toObject(this);
	  var length = lengthOfArrayLike(that);
	  var result = [];
	  var map = new Map$1();
	  var resolverFunction = !isNullOrUndefined$2(resolver) ? aCallable$3(resolver) : function (value) {
	    return value;
	  };
	  var index, item, key;
	  for (index = 0; index < length; index++) {
	    item = that[index];
	    key = resolverFunction(item);
	    if (!mapHas(map, key)) mapSet(map, key, item);
	  }
	  iterate$9(map, function (value) {
	    push$4(result, value);
	  });
	  return result;
	};

	// TODO: Remove from `core-js@4`
	var $$E = _export;
	var uncurryThis$9 = functionUncurryThis;
	var ReflectMetadataModule$5 = reflectMetadata;
	var anObject$7 = anObject$1a;
	var getPrototypeOf$1 = objectGetPrototypeOf$2;
	var $arrayUniqueBy = arrayUniqueBy$1;
	var arrayUniqueBy = uncurryThis$9($arrayUniqueBy);
	var concat = uncurryThis$9([].concat);
	var ordinaryOwnMetadataKeys$1 = ReflectMetadataModule$5.keys;
	var toMetadataKey$5 = ReflectMetadataModule$5.toKey;
	var ordinaryMetadataKeys = function ordinaryMetadataKeys(O, P) {
	  var oKeys = ordinaryOwnMetadataKeys$1(O, P);
	  var parent = getPrototypeOf$1(O);
	  if (parent === null) return oKeys;
	  var pKeys = ordinaryMetadataKeys(parent, P);
	  return pKeys.length ? oKeys.length ? arrayUniqueBy(concat(oKeys, pKeys)) : pKeys : oKeys;
	};

	// `Reflect.getMetadataKeys` method
	// https://github.com/rbuckton/reflect-metadata
	$$E({
	  target: 'Reflect',
	  stat: true
	}, {
	  getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
	    var targetKey = arguments.length < 2 ? undefined : toMetadataKey$5(arguments[1]);
	    return ordinaryMetadataKeys(anObject$7(target), targetKey);
	  }
	});

	// TODO: Remove from `core-js@4`
	var $$D = _export;
	var ReflectMetadataModule$4 = reflectMetadata;
	var anObject$6 = anObject$1a;
	var ordinaryGetOwnMetadata = ReflectMetadataModule$4.get;
	var toMetadataKey$4 = ReflectMetadataModule$4.toKey;

	// `Reflect.getOwnMetadata` method
	// https://github.com/rbuckton/reflect-metadata
	$$D({
	  target: 'Reflect',
	  stat: true
	}, {
	  getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
	    var targetKey = arguments.length < 3 ? undefined : toMetadataKey$4(arguments[2]);
	    return ordinaryGetOwnMetadata(metadataKey, anObject$6(target), targetKey);
	  }
	});

	// TODO: Remove from `core-js@4`
	var $$C = _export;
	var ReflectMetadataModule$3 = reflectMetadata;
	var anObject$5 = anObject$1a;
	var ordinaryOwnMetadataKeys = ReflectMetadataModule$3.keys;
	var toMetadataKey$3 = ReflectMetadataModule$3.toKey;

	// `Reflect.getOwnMetadataKeys` method
	// https://github.com/rbuckton/reflect-metadata
	$$C({
	  target: 'Reflect',
	  stat: true
	}, {
	  getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
	    var targetKey = arguments.length < 2 ? undefined : toMetadataKey$3(arguments[1]);
	    return ordinaryOwnMetadataKeys(anObject$5(target), targetKey);
	  }
	});

	// TODO: Remove from `core-js@4`
	var $$B = _export;
	var ReflectMetadataModule$2 = reflectMetadata;
	var anObject$4 = anObject$1a;
	var getPrototypeOf = objectGetPrototypeOf$2;
	var ordinaryHasOwnMetadata$1 = ReflectMetadataModule$2.has;
	var toMetadataKey$2 = ReflectMetadataModule$2.toKey;
	var ordinaryHasMetadata = function ordinaryHasMetadata(MetadataKey, O, P) {
	  var hasOwn = ordinaryHasOwnMetadata$1(MetadataKey, O, P);
	  if (hasOwn) return true;
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
	};

	// `Reflect.hasMetadata` method
	// https://github.com/rbuckton/reflect-metadata
	$$B({
	  target: 'Reflect',
	  stat: true
	}, {
	  hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
	    var targetKey = arguments.length < 3 ? undefined : toMetadataKey$2(arguments[2]);
	    return ordinaryHasMetadata(metadataKey, anObject$4(target), targetKey);
	  }
	});

	// TODO: Remove from `core-js@4`
	var $$A = _export;
	var ReflectMetadataModule$1 = reflectMetadata;
	var anObject$3 = anObject$1a;
	var ordinaryHasOwnMetadata = ReflectMetadataModule$1.has;
	var toMetadataKey$1 = ReflectMetadataModule$1.toKey;

	// `Reflect.hasOwnMetadata` method
	// https://github.com/rbuckton/reflect-metadata
	$$A({
	  target: 'Reflect',
	  stat: true
	}, {
	  hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
	    var targetKey = arguments.length < 3 ? undefined : toMetadataKey$1(arguments[2]);
	    return ordinaryHasOwnMetadata(metadataKey, anObject$3(target), targetKey);
	  }
	});

	var $$z = _export;
	var ReflectMetadataModule = reflectMetadata;
	var anObject$2 = anObject$1a;
	var toMetadataKey = ReflectMetadataModule.toKey;
	var ordinaryDefineOwnMetadata = ReflectMetadataModule.set;

	// `Reflect.metadata` method
	// https://github.com/rbuckton/reflect-metadata
	$$z({
	  target: 'Reflect',
	  stat: true
	}, {
	  metadata: function metadata(metadataKey, metadataValue) {
	    return function decorator(target, key) {
	      ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject$2(target), toMetadataKey(key));
	    };
	  }
	});

	var uncurryThis$8 = functionUncurryThis;

	// eslint-disable-next-line es/no-set -- safe
	var SetPrototype$1 = Set.prototype;
	var setHelpers = {
	  // eslint-disable-next-line es/no-set -- safe
	  Set: Set,
	  add: uncurryThis$8(SetPrototype$1.add),
	  has: uncurryThis$8(SetPrototype$1.has),
	  remove: uncurryThis$8(SetPrototype$1['delete']),
	  proto: SetPrototype$1
	};

	var has$7 = setHelpers.has;

	// Perform ? RequireInternalSlot(M, [[SetData]])
	var aSet$g = function aSet(it) {
	  has$7(it);
	  return it;
	};

	var $$y = _export;
	var aSet$f = aSet$g;
	var add$7 = setHelpers.add;

	// `Set.prototype.addAll` method
	// https://github.com/tc39/proposal-collection-methods
	$$y({
	  target: 'Set',
	  proto: true,
	  real: true,
	  forced: true
	}, {
	  addAll: function addAll( /* ...elements */
	  ) {
	    var set = aSet$f(this);
	    for (var k = 0, len = arguments.length; k < len; k++) {
	      add$7(set, arguments[k]);
	    }
	    return set;
	  }
	});

	var $$x = _export;
	var aSet$e = aSet$g;
	var remove$4 = setHelpers.remove;

	// `Set.prototype.deleteAll` method
	// https://github.com/tc39/proposal-collection-methods
	$$x({
	  target: 'Set',
	  proto: true,
	  real: true,
	  forced: true
	}, {
	  deleteAll: function deleteAll( /* ...elements */
	  ) {
	    var collection = aSet$e(this);
	    var allDeleted = true;
	    var wasDeleted;
	    for (var k = 0, len = arguments.length; k < len; k++) {
	      wasDeleted = remove$4(collection, arguments[k]);
	      allDeleted = allDeleted && wasDeleted;
	    }
	    return !!allDeleted;
	  }
	});

	var classof$1 = classof$l;
	var hasOwn$2 = hasOwnProperty_1;
	var isNullOrUndefined$1 = isNullOrUndefined$g;
	var wellKnownSymbol$4 = wellKnownSymbol$I;
	var Iterators = iterators;
	var ITERATOR$3 = wellKnownSymbol$4('iterator');
	var $Object = Object;
	var isIterable$1 = function isIterable(it) {
	  if (isNullOrUndefined$1(it)) return false;
	  var O = $Object(it);
	  return O[ITERATOR$3] !== undefined || '@@iterator' in O || hasOwn$2(Iterators, classof$1(O));
	};

	var getBuiltIn = getBuiltIn$r;
	var isCallable$3 = isCallable$E;
	var isIterable = isIterable$1;
	var isObject$4 = isObject$J;
	var Set$6 = getBuiltIn('Set');
	var isSetLike = function isSetLike(it) {
	  return isObject$4(it) && typeof it.size == 'number' && isCallable$3(it.has) && isCallable$3(it.keys);
	};

	// fallback old -> new set methods proposal arguments
	var toSetLike$7 = function toSetLike(it) {
	  if (isSetLike(it)) return it;
	  return isIterable(it) ? new Set$6(it) : it;
	};

	var uncurryThis$7 = functionUncurryThis;
	var iterateSimple$6 = iterateSimple$8;
	var SetHelpers$9 = setHelpers;
	var Set$5 = SetHelpers$9.Set;
	var SetPrototype = SetHelpers$9.proto;
	var forEach$1 = uncurryThis$7(SetPrototype.forEach);
	var keys = uncurryThis$7(SetPrototype.keys);
	var next = keys(new Set$5()).next;
	var setIterate = function setIterate(set, fn, interruptible) {
	  return interruptible ? iterateSimple$6({
	    iterator: keys(set),
	    next: next
	  }, fn) : forEach$1(set, fn);
	};

	var SetHelpers$8 = setHelpers;
	var iterate$8 = setIterate;
	var Set$4 = SetHelpers$8.Set;
	var add$6 = SetHelpers$8.add;
	var setClone = function setClone(set) {
	  var result = new Set$4();
	  iterate$8(set, function (it) {
	    add$6(result, it);
	  });
	  return result;
	};

	var uncurryThisAccessor = functionUncurryThisAccessor;
	var SetHelpers$7 = setHelpers;
	var setSize = uncurryThisAccessor(SetHelpers$7.proto, 'size', 'get') || function (set) {
	  return set.size;
	};

	var aCallable$2 = aCallable$F;
	var anObject$1 = anObject$1a;
	var call$a = functionCall;
	var toIntegerOrInfinity$1 = toIntegerOrInfinity$e;
	var getIteratorDirect = getIteratorDirect$l;
	var INVALID_SIZE = 'Invalid size';
	var $RangeError$1 = RangeError;
	var $TypeError$2 = TypeError;
	var max$1 = Math.max;
	var SetRecord = function SetRecord(set, intSize) {
	  this.set = set;
	  this.size = max$1(intSize, 0);
	  this.has = aCallable$2(set.has);
	  this.keys = aCallable$2(set.keys);
	};
	SetRecord.prototype = {
	  getIterator: function getIterator() {
	    return getIteratorDirect(anObject$1(call$a(this.keys, this.set)));
	  },
	  includes: function includes(it) {
	    return call$a(this.has, this.set, it);
	  }
	};

	// `GetSetRecord` abstract operation
	// https://tc39.es/proposal-set-methods/#sec-getsetrecord
	var getSetRecord$7 = function getSetRecord(obj) {
	  anObject$1(obj);
	  var numSize = +obj.size;
	  // NOTE: If size is undefined, then numSize will be NaN
	  // eslint-disable-next-line no-self-compare -- NaN check
	  if (numSize !== numSize) throw new $TypeError$2(INVALID_SIZE);
	  var intSize = toIntegerOrInfinity$1(numSize);
	  if (intSize < 0) throw new $RangeError$1(INVALID_SIZE);
	  return new SetRecord(obj, intSize);
	};

	var aSet$d = aSet$g;
	var SetHelpers$6 = setHelpers;
	var clone$2 = setClone;
	var size$4 = setSize;
	var getSetRecord$6 = getSetRecord$7;
	var iterateSet$2 = setIterate;
	var iterateSimple$5 = iterateSimple$8;
	var has$6 = SetHelpers$6.has;
	var remove$3 = SetHelpers$6.remove;

	// `Set.prototype.difference` method
	// https://github.com/tc39/proposal-set-methods
	var setDifference = function difference(other) {
	  var O = aSet$d(this);
	  var otherRec = getSetRecord$6(other);
	  var result = clone$2(O);
	  if (size$4(O) <= otherRec.size) iterateSet$2(O, function (e) {
	    if (otherRec.includes(e)) remove$3(result, e);
	  });else iterateSimple$5(otherRec.getIterator(), function (e) {
	    if (has$6(O, e)) remove$3(result, e);
	  });
	  return result;
	};

	var $$w = _export;
	var call$9 = functionCall;
	var toSetLike$6 = toSetLike$7;
	var $difference = setDifference;

	// `Set.prototype.difference` method
	// https://github.com/tc39/proposal-set-methods
	// TODO: Obsolete version, remove from `core-js@4`
	$$w({
	  target: 'Set',
	  proto: true,
	  real: true,
	  forced: true
	}, {
	  difference: function difference(other) {
	    return call$9($difference, this, toSetLike$6(other));
	  }
	});

	var $$v = _export;
	var bind$6 = functionBindContext;
	var aSet$c = aSet$g;
	var iterate$7 = setIterate;

	// `Set.prototype.every` method
	// https://github.com/tc39/proposal-collection-methods
	$$v({
	  target: 'Set',
	  proto: true,
	  real: true,
	  forced: true
	}, {
	  every: function every(callbackfn /* , thisArg */) {
	    var set = aSet$c(this);
	    var boundFunction = bind$6(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    return iterate$7(set, function (value) {
	      if (!boundFunction(value, value, set)) return false;
	    }, true) !== false;
	  }
	});

	var $$u = _export;
	var bind$5 = functionBindContext;
	var aSet$b = aSet$g;
	var SetHelpers$5 = setHelpers;
	var iterate$6 = setIterate;
	var Set$3 = SetHelpers$5.Set;
	var add$5 = SetHelpers$5.add;

	// `Set.prototype.filter` method
	// https://github.com/tc39/proposal-collection-methods
	$$u({
	  target: 'Set',
	  proto: true,
	  real: true,
	  forced: true
	}, {
	  filter: function filter(callbackfn /* , thisArg */) {
	    var set = aSet$b(this);
	    var boundFunction = bind$5(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    var newSet = new Set$3();
	    iterate$6(set, function (value) {
	      if (boundFunction(value, value, set)) add$5(newSet, value);
	    });
	    return newSet;
	  }
	});

	var $$t = _export;
	var bind$4 = functionBindContext;
	var aSet$a = aSet$g;
	var iterate$5 = setIterate;

	// `Set.prototype.find` method
	// https://github.com/tc39/proposal-collection-methods
	$$t({
	  target: 'Set',
	  proto: true,
	  real: true,
	  forced: true
	}, {
	  find: function find(callbackfn /* , thisArg */) {
	    var set = aSet$a(this);
	    var boundFunction = bind$4(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    var result = iterate$5(set, function (value) {
	      if (boundFunction(value, value, set)) return {
	        value: value
	      };
	    }, true);
	    return result && result.value;
	  }
	});

	var $$s = _export;
	var SetHelpers$4 = setHelpers;
	var createCollectionFrom$2 = collectionFrom;

	// `Set.from` method
	// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
	$$s({
	  target: 'Set',
	  stat: true,
	  forced: true
	}, {
	  from: createCollectionFrom$2(SetHelpers$4.Set, SetHelpers$4.add, false)
	});

	var aSet$9 = aSet$g;
	var SetHelpers$3 = setHelpers;
	var size$3 = setSize;
	var getSetRecord$5 = getSetRecord$7;
	var iterateSet$1 = setIterate;
	var iterateSimple$4 = iterateSimple$8;
	var Set$2 = SetHelpers$3.Set;
	var add$4 = SetHelpers$3.add;
	var has$5 = SetHelpers$3.has;

	// `Set.prototype.intersection` method
	// https://github.com/tc39/proposal-set-methods
	var setIntersection = function intersection(other) {
	  var O = aSet$9(this);
	  var otherRec = getSetRecord$5(other);
	  var result = new Set$2();
	  if (size$3(O) > otherRec.size) {
	    iterateSimple$4(otherRec.getIterator(), function (e) {
	      if (has$5(O, e)) add$4(result, e);
	    });
	  } else {
	    iterateSet$1(O, function (e) {
	      if (otherRec.includes(e)) add$4(result, e);
	    });
	  }
	  return result;
	};

	var $$r = _export;
	var call$8 = functionCall;
	var toSetLike$5 = toSetLike$7;
	var $intersection = setIntersection;

	// `Set.prototype.intersection` method
	// https://github.com/tc39/proposal-set-methods
	// TODO: Obsolete version, remove from `core-js@4`
	$$r({
	  target: 'Set',
	  proto: true,
	  real: true,
	  forced: true
	}, {
	  intersection: function intersection(other) {
	    return call$8($intersection, this, toSetLike$5(other));
	  }
	});

	var aSet$8 = aSet$g;
	var has$4 = setHelpers.has;
	var size$2 = setSize;
	var getSetRecord$4 = getSetRecord$7;
	var iterateSet = setIterate;
	var iterateSimple$3 = iterateSimple$8;
	var iteratorClose$1 = iteratorClose$8;

	// `Set.prototype.isDisjointFrom` method
	// https://tc39.github.io/proposal-set-methods/#Set.prototype.isDisjointFrom
	var setIsDisjointFrom = function isDisjointFrom(other) {
	  var O = aSet$8(this);
	  var otherRec = getSetRecord$4(other);
	  if (size$2(O) <= otherRec.size) return iterateSet(O, function (e) {
	    if (otherRec.includes(e)) return false;
	  }, true) !== false;
	  var iterator = otherRec.getIterator();
	  return iterateSimple$3(iterator, function (e) {
	    if (has$4(O, e)) return iteratorClose$1(iterator, 'normal', false);
	  }) !== false;
	};

	var $$q = _export;
	var call$7 = functionCall;
	var toSetLike$4 = toSetLike$7;
	var $isDisjointFrom = setIsDisjointFrom;

	// `Set.prototype.isDisjointFrom` method
	// https://github.com/tc39/proposal-set-methods
	// TODO: Obsolete version, remove from `core-js@4`
	$$q({
	  target: 'Set',
	  proto: true,
	  real: true,
	  forced: true
	}, {
	  isDisjointFrom: function isDisjointFrom(other) {
	    return call$7($isDisjointFrom, this, toSetLike$4(other));
	  }
	});

	var aSet$7 = aSet$g;
	var size$1 = setSize;
	var iterate$4 = setIterate;
	var getSetRecord$3 = getSetRecord$7;

	// `Set.prototype.isSubsetOf` method
	// https://tc39.github.io/proposal-set-methods/#Set.prototype.isSubsetOf
	var setIsSubsetOf = function isSubsetOf(other) {
	  var O = aSet$7(this);
	  var otherRec = getSetRecord$3(other);
	  if (size$1(O) > otherRec.size) return false;
	  return iterate$4(O, function (e) {
	    if (!otherRec.includes(e)) return false;
	  }, true) !== false;
	};

	var $$p = _export;
	var call$6 = functionCall;
	var toSetLike$3 = toSetLike$7;
	var $isSubsetOf = setIsSubsetOf;

	// `Set.prototype.isSubsetOf` method
	// https://github.com/tc39/proposal-set-methods
	// TODO: Obsolete version, remove from `core-js@4`
	$$p({
	  target: 'Set',
	  proto: true,
	  real: true,
	  forced: true
	}, {
	  isSubsetOf: function isSubsetOf(other) {
	    return call$6($isSubsetOf, this, toSetLike$3(other));
	  }
	});

	var aSet$6 = aSet$g;
	var has$3 = setHelpers.has;
	var size = setSize;
	var getSetRecord$2 = getSetRecord$7;
	var iterateSimple$2 = iterateSimple$8;
	var iteratorClose = iteratorClose$8;

	// `Set.prototype.isSupersetOf` method
	// https://tc39.github.io/proposal-set-methods/#Set.prototype.isSupersetOf
	var setIsSupersetOf = function isSupersetOf(other) {
	  var O = aSet$6(this);
	  var otherRec = getSetRecord$2(other);
	  if (size(O) < otherRec.size) return false;
	  var iterator = otherRec.getIterator();
	  return iterateSimple$2(iterator, function (e) {
	    if (!has$3(O, e)) return iteratorClose(iterator, 'normal', false);
	  }) !== false;
	};

	var $$o = _export;
	var call$5 = functionCall;
	var toSetLike$2 = toSetLike$7;
	var $isSupersetOf = setIsSupersetOf;

	// `Set.prototype.isSupersetOf` method
	// https://github.com/tc39/proposal-set-methods
	// TODO: Obsolete version, remove from `core-js@4`
	$$o({
	  target: 'Set',
	  proto: true,
	  real: true,
	  forced: true
	}, {
	  isSupersetOf: function isSupersetOf(other) {
	    return call$5($isSupersetOf, this, toSetLike$2(other));
	  }
	});

	var $$n = _export;
	var uncurryThis$6 = functionUncurryThis;
	var aSet$5 = aSet$g;
	var iterate$3 = setIterate;
	var toString$3 = toString$r;
	var arrayJoin = uncurryThis$6([].join);
	var push$3 = uncurryThis$6([].push);

	// `Set.prototype.join` method
	// https://github.com/tc39/proposal-collection-methods
	$$n({
	  target: 'Set',
	  proto: true,
	  real: true,
	  forced: true
	}, {
	  join: function join(separator) {
	    var set = aSet$5(this);
	    var sep = separator === undefined ? ',' : toString$3(separator);
	    var array = [];
	    iterate$3(set, function (value) {
	      push$3(array, value);
	    });
	    return arrayJoin(array, sep);
	  }
	});

	var $$m = _export;
	var bind$3 = functionBindContext;
	var aSet$4 = aSet$g;
	var SetHelpers$2 = setHelpers;
	var iterate$2 = setIterate;
	var Set$1 = SetHelpers$2.Set;
	var add$3 = SetHelpers$2.add;

	// `Set.prototype.map` method
	// https://github.com/tc39/proposal-collection-methods
	$$m({
	  target: 'Set',
	  proto: true,
	  real: true,
	  forced: true
	}, {
	  map: function map(callbackfn /* , thisArg */) {
	    var set = aSet$4(this);
	    var boundFunction = bind$3(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    var newSet = new Set$1();
	    iterate$2(set, function (value) {
	      add$3(newSet, boundFunction(value, value, set));
	    });
	    return newSet;
	  }
	});

	var $$l = _export;
	var SetHelpers$1 = setHelpers;
	var createCollectionOf$2 = collectionOf;

	// `Set.of` method
	// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
	$$l({
	  target: 'Set',
	  stat: true,
	  forced: true
	}, {
	  of: createCollectionOf$2(SetHelpers$1.Set, SetHelpers$1.add, false)
	});

	var $$k = _export;
	var aCallable$1 = aCallable$F;
	var aSet$3 = aSet$g;
	var iterate$1 = setIterate;
	var $TypeError$1 = TypeError;

	// `Set.prototype.reduce` method
	// https://github.com/tc39/proposal-collection-methods
	$$k({
	  target: 'Set',
	  proto: true,
	  real: true,
	  forced: true
	}, {
	  reduce: function reduce(callbackfn /* , initialValue */) {
	    var set = aSet$3(this);
	    var noInitial = arguments.length < 2;
	    var accumulator = noInitial ? undefined : arguments[1];
	    aCallable$1(callbackfn);
	    iterate$1(set, function (value) {
	      if (noInitial) {
	        noInitial = false;
	        accumulator = value;
	      } else {
	        accumulator = callbackfn(accumulator, value, value, set);
	      }
	    });
	    if (noInitial) throw new $TypeError$1('Reduce of empty set with no initial value');
	    return accumulator;
	  }
	});

	var $$j = _export;
	var bind$2 = functionBindContext;
	var aSet$2 = aSet$g;
	var iterate = setIterate;

	// `Set.prototype.some` method
	// https://github.com/tc39/proposal-collection-methods
	$$j({
	  target: 'Set',
	  proto: true,
	  real: true,
	  forced: true
	}, {
	  some: function some(callbackfn /* , thisArg */) {
	    var set = aSet$2(this);
	    var boundFunction = bind$2(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    return iterate(set, function (value) {
	      if (boundFunction(value, value, set)) return true;
	    }, true) === true;
	  }
	});

	var aSet$1 = aSet$g;
	var SetHelpers = setHelpers;
	var clone$1 = setClone;
	var getSetRecord$1 = getSetRecord$7;
	var iterateSimple$1 = iterateSimple$8;
	var add$2 = SetHelpers.add;
	var has$2 = SetHelpers.has;
	var remove$2 = SetHelpers.remove;

	// `Set.prototype.symmetricDifference` method
	// https://github.com/tc39/proposal-set-methods
	var setSymmetricDifference = function symmetricDifference(other) {
	  var O = aSet$1(this);
	  var keysIter = getSetRecord$1(other).getIterator();
	  var result = clone$1(O);
	  iterateSimple$1(keysIter, function (e) {
	    if (has$2(O, e)) remove$2(result, e);else add$2(result, e);
	  });
	  return result;
	};

	var $$i = _export;
	var call$4 = functionCall;
	var toSetLike$1 = toSetLike$7;
	var $symmetricDifference = setSymmetricDifference;

	// `Set.prototype.symmetricDifference` method
	// https://github.com/tc39/proposal-set-methods
	// TODO: Obsolete version, remove from `core-js@4`
	$$i({
	  target: 'Set',
	  proto: true,
	  real: true,
	  forced: true
	}, {
	  symmetricDifference: function symmetricDifference(other) {
	    return call$4($symmetricDifference, this, toSetLike$1(other));
	  }
	});

	var aSet = aSet$g;
	var add$1 = setHelpers.add;
	var clone = setClone;
	var getSetRecord = getSetRecord$7;
	var iterateSimple = iterateSimple$8;

	// `Set.prototype.union` method
	// https://github.com/tc39/proposal-set-methods
	var setUnion = function union(other) {
	  var O = aSet(this);
	  var keysIter = getSetRecord(other).getIterator();
	  var result = clone(O);
	  iterateSimple(keysIter, function (it) {
	    add$1(result, it);
	  });
	  return result;
	};

	var $$h = _export;
	var call$3 = functionCall;
	var toSetLike = toSetLike$7;
	var $union = setUnion;

	// `Set.prototype.union` method
	// https://github.com/tc39/proposal-set-methods
	// TODO: Obsolete version, remove from `core-js@4`
	$$h({
	  target: 'Set',
	  proto: true,
	  real: true,
	  forced: true
	}, {
	  union: function union(other) {
	    return call$3($union, this, toSetLike(other));
	  }
	});

	// TODO: Remove from `core-js@4`
	var $$g = _export;
	var charAt$3 = stringMultibyte.charAt;
	var requireObjectCoercible$2 = requireObjectCoercible$i;
	var toIntegerOrInfinity = toIntegerOrInfinity$e;
	var toString$2 = toString$r;

	// `String.prototype.at` method
	// https://github.com/mathiasbynens/String.prototype.at
	$$g({
	  target: 'String',
	  proto: true,
	  forced: true
	}, {
	  at: function at(index) {
	    var S = toString$2(requireObjectCoercible$2(this));
	    var len = S.length;
	    var relativeIndex = toIntegerOrInfinity(index);
	    var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
	    return k < 0 || k >= len ? undefined : charAt$3(S, k);
	  }
	});

	var $$f = _export;
	var createIteratorConstructor$1 = iteratorCreateConstructor;
	var createIterResultObject$1 = createIterResultObject$g;
	var requireObjectCoercible$1 = requireObjectCoercible$i;
	var toString$1 = toString$r;
	var InternalStateModule$2 = internalState;
	var StringMultibyteModule = stringMultibyte;
	var codeAt$1 = StringMultibyteModule.codeAt;
	var charAt$2 = StringMultibyteModule.charAt;
	var STRING_ITERATOR = 'String Iterator';
	var setInternalState$2 = InternalStateModule$2.set;
	var getInternalState = InternalStateModule$2.getterFor(STRING_ITERATOR);

	// TODO: unify with String#@@iterator
	var $StringIterator = createIteratorConstructor$1(function StringIterator(string) {
	  setInternalState$2(this, {
	    type: STRING_ITERATOR,
	    string: string,
	    index: 0
	  });
	}, 'String', function next() {
	  var state = getInternalState(this);
	  var string = state.string;
	  var index = state.index;
	  var point;
	  if (index >= string.length) return createIterResultObject$1(undefined, true);
	  point = charAt$2(string, index);
	  state.index += point.length;
	  return createIterResultObject$1({
	    codePoint: codeAt$1(point, 0),
	    position: index
	  }, false);
	});

	// `String.prototype.codePoints` method
	// https://github.com/tc39/proposal-string-prototype-codepoints
	$$f({
	  target: 'String',
	  proto: true,
	  forced: true
	}, {
	  codePoints: function codePoints() {
	    return new $StringIterator(toString$1(requireObjectCoercible$1(this)));
	  }
	});

	var $$e = _export;
	var call$2 = functionCall;
	var uncurryThis$5 = functionUncurryThis;
	var requireObjectCoercible = requireObjectCoercible$i;
	var isCallable$2 = isCallable$E;
	var isNullOrUndefined = isNullOrUndefined$g;
	var isRegExp = isRegexp;
	var toString = toString$r;
	var getMethod = getMethod$g;
	var getRegExpFlags = regexpGetFlags;
	var getSubstitution = getSubstitution$2;
	var wellKnownSymbol$3 = wellKnownSymbol$I;
	var REPLACE = wellKnownSymbol$3('replace');
	var $TypeError = TypeError;
	var indexOf = uncurryThis$5(''.indexOf);
	uncurryThis$5(''.replace);
	var stringSlice$2 = uncurryThis$5(''.slice);
	var max = Math.max;
	var stringIndexOf = function stringIndexOf(string, searchValue, fromIndex) {
	  if (fromIndex > string.length) return -1;
	  if (searchValue === '') return fromIndex;
	  return indexOf(string, searchValue, fromIndex);
	};

	// `String.prototype.replaceAll` method
	// https://tc39.es/ecma262/#sec-string.prototype.replaceall
	$$e({
	  target: 'String',
	  proto: true
	}, {
	  replaceAll: function replaceAll(searchValue, replaceValue) {
	    var O = requireObjectCoercible(this);
	    var IS_REG_EXP, flags, replacer, string, searchString, functionalReplace, searchLength, advanceBy, replacement;
	    var position = 0;
	    var endOfLastMatch = 0;
	    var result = '';
	    if (!isNullOrUndefined(searchValue)) {
	      IS_REG_EXP = isRegExp(searchValue);
	      if (IS_REG_EXP) {
	        flags = toString(requireObjectCoercible(getRegExpFlags(searchValue)));
	        if (!~indexOf(flags, 'g')) throw new $TypeError('`.replaceAll` does not allow non-global regexes');
	      }
	      replacer = getMethod(searchValue, REPLACE);
	      if (replacer) {
	        return call$2(replacer, searchValue, O, replaceValue);
	      }
	    }
	    string = toString(O);
	    searchString = toString(searchValue);
	    functionalReplace = isCallable$2(replaceValue);
	    if (!functionalReplace) replaceValue = toString(replaceValue);
	    searchLength = searchString.length;
	    advanceBy = max(1, searchLength);
	    position = stringIndexOf(string, searchString, 0);
	    while (position !== -1) {
	      replacement = functionalReplace ? toString(replaceValue(searchString, position, string)) : getSubstitution(searchString, string, position, [], undefined, replaceValue);
	      result += stringSlice$2(string, endOfLastMatch, position) + replacement;
	      endOfLastMatch = position + searchLength;
	      position = stringIndexOf(string, searchString, position + advanceBy);
	    }
	    if (endOfLastMatch < string.length) {
	      result += stringSlice$2(string, endOfLastMatch);
	    }
	    return result;
	  }
	});

	var global$9 = global$R;
	var defineWellKnownSymbol$4 = wellKnownSymbolDefine;
	var defineProperty$1 = objectDefineProperty.f;
	var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
	var Symbol$2 = global$9.Symbol;

	// `Symbol.asyncDispose` well-known symbol
	// https://github.com/tc39/proposal-async-explicit-resource-management
	defineWellKnownSymbol$4('asyncDispose');
	if (Symbol$2) {
	  var descriptor$1 = getOwnPropertyDescriptor$1(Symbol$2, 'asyncDispose');
	  // workaround of NodeJS 20.4 bug
	  // https://github.com/nodejs/node/issues/48699
	  // and incorrect descriptor from some transpilers and userland helpers
	  if (descriptor$1.enumerable && descriptor$1.configurable && descriptor$1.writable) {
	    defineProperty$1(Symbol$2, 'asyncDispose', {
	      value: descriptor$1.value,
	      enumerable: false,
	      configurable: false,
	      writable: false
	    });
	  }
	}

	var global$8 = global$R;
	var defineWellKnownSymbol$3 = wellKnownSymbolDefine;
	var defineProperty = objectDefineProperty.f;
	var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
	var Symbol$1 = global$8.Symbol;

	// `Symbol.dispose` well-known symbol
	// https://github.com/tc39/proposal-explicit-resource-management
	defineWellKnownSymbol$3('dispose');
	if (Symbol$1) {
	  var descriptor = getOwnPropertyDescriptor(Symbol$1, 'dispose');
	  // workaround of NodeJS 20.4 bug
	  // https://github.com/nodejs/node/issues/48699
	  // and incorrect descriptor from some transpilers and userland helpers
	  if (descriptor.enumerable && descriptor.configurable && descriptor.writable) {
	    defineProperty(Symbol$1, 'dispose', {
	      value: descriptor.value,
	      enumerable: false,
	      configurable: false,
	      writable: false
	    });
	  }
	}

	var defineWellKnownSymbol$2 = wellKnownSymbolDefine;

	// `Symbol.observable` well-known symbol
	// https://github.com/tc39/proposal-observable
	defineWellKnownSymbol$2('observable');

	// TODO: remove from `core-js@4`
	var defineWellKnownSymbol$1 = wellKnownSymbolDefine;

	// `Symbol.patternMatch` well-known symbol
	// https://github.com/tc39/proposal-pattern-matching
	defineWellKnownSymbol$1('patternMatch');

	// TODO: remove from `core-js@4`
	var defineWellKnownSymbol = wellKnownSymbolDefine;
	defineWellKnownSymbol('replaceAll');

	var uncurryThis$4 = functionUncurryThis;

	// eslint-disable-next-line es/no-weak-map -- safe
	var WeakMapPrototype = WeakMap.prototype;
	var weakMapHelpers = {
	  // eslint-disable-next-line es/no-weak-map -- safe
	  WeakMap: WeakMap,
	  set: uncurryThis$4(WeakMapPrototype.set),
	  get: uncurryThis$4(WeakMapPrototype.get),
	  has: uncurryThis$4(WeakMapPrototype.has),
	  remove: uncurryThis$4(WeakMapPrototype['delete'])
	};

	var has$1 = weakMapHelpers.has;

	// Perform ? RequireInternalSlot(M, [[WeakMapData]])
	var aWeakMap$1 = function aWeakMap(it) {
	  has$1(it);
	  return it;
	};

	var $$d = _export;
	var aWeakMap = aWeakMap$1;
	var remove$1 = weakMapHelpers.remove;

	// `WeakMap.prototype.deleteAll` method
	// https://github.com/tc39/proposal-collection-methods
	$$d({
	  target: 'WeakMap',
	  proto: true,
	  real: true,
	  forced: true
	}, {
	  deleteAll: function deleteAll( /* ...elements */
	  ) {
	    var collection = aWeakMap(this);
	    var allDeleted = true;
	    var wasDeleted;
	    for (var k = 0, len = arguments.length; k < len; k++) {
	      wasDeleted = remove$1(collection, arguments[k]);
	      allDeleted = allDeleted && wasDeleted;
	    }
	    return !!allDeleted;
	  }
	});

	var $$c = _export;
	var WeakMapHelpers$1 = weakMapHelpers;
	var createCollectionFrom$1 = collectionFrom;

	// `WeakMap.from` method
	// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
	$$c({
	  target: 'WeakMap',
	  stat: true,
	  forced: true
	}, {
	  from: createCollectionFrom$1(WeakMapHelpers$1.WeakMap, WeakMapHelpers$1.set, true)
	});

	var $$b = _export;
	var WeakMapHelpers = weakMapHelpers;
	var createCollectionOf$1 = collectionOf;

	// `WeakMap.of` method
	// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
	$$b({
	  target: 'WeakMap',
	  stat: true,
	  forced: true
	}, {
	  of: createCollectionOf$1(WeakMapHelpers.WeakMap, WeakMapHelpers.set, true)
	});

	// TODO: remove from `core-js@4`
	var $$a = _export;
	var upsert = mapUpsert;

	// `WeakMap.prototype.upsert` method (replaced by `WeakMap.prototype.emplace`)
	// https://github.com/tc39/proposal-upsert
	$$a({
	  target: 'WeakMap',
	  proto: true,
	  real: true,
	  forced: true
	}, {
	  upsert: upsert
	});

	var uncurryThis$3 = functionUncurryThis;

	// eslint-disable-next-line es/no-weak-set -- safe
	var WeakSetPrototype = WeakSet.prototype;
	var weakSetHelpers = {
	  // eslint-disable-next-line es/no-weak-set -- safe
	  WeakSet: WeakSet,
	  add: uncurryThis$3(WeakSetPrototype.add),
	  has: uncurryThis$3(WeakSetPrototype.has),
	  remove: uncurryThis$3(WeakSetPrototype['delete'])
	};

	var has = weakSetHelpers.has;

	// Perform ? RequireInternalSlot(M, [[WeakSetData]])
	var aWeakSet$2 = function aWeakSet(it) {
	  has(it);
	  return it;
	};

	var $$9 = _export;
	var aWeakSet$1 = aWeakSet$2;
	var add = weakSetHelpers.add;

	// `WeakSet.prototype.addAll` method
	// https://github.com/tc39/proposal-collection-methods
	$$9({
	  target: 'WeakSet',
	  proto: true,
	  real: true,
	  forced: true
	}, {
	  addAll: function addAll( /* ...elements */
	  ) {
	    var set = aWeakSet$1(this);
	    for (var k = 0, len = arguments.length; k < len; k++) {
	      add(set, arguments[k]);
	    }
	    return set;
	  }
	});

	var $$8 = _export;
	var aWeakSet = aWeakSet$2;
	var remove = weakSetHelpers.remove;

	// `WeakSet.prototype.deleteAll` method
	// https://github.com/tc39/proposal-collection-methods
	$$8({
	  target: 'WeakSet',
	  proto: true,
	  real: true,
	  forced: true
	}, {
	  deleteAll: function deleteAll( /* ...elements */
	  ) {
	    var collection = aWeakSet(this);
	    var allDeleted = true;
	    var wasDeleted;
	    for (var k = 0, len = arguments.length; k < len; k++) {
	      wasDeleted = remove(collection, arguments[k]);
	      allDeleted = allDeleted && wasDeleted;
	    }
	    return !!allDeleted;
	  }
	});

	var $$7 = _export;
	var WeakSetHelpers$1 = weakSetHelpers;
	var createCollectionFrom = collectionFrom;

	// `WeakSet.from` method
	// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from
	$$7({
	  target: 'WeakSet',
	  stat: true,
	  forced: true
	}, {
	  from: createCollectionFrom(WeakSetHelpers$1.WeakSet, WeakSetHelpers$1.add, false)
	});

	var $$6 = _export;
	var WeakSetHelpers = weakSetHelpers;
	var createCollectionOf = collectionOf;

	// `WeakSet.of` method
	// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of
	$$6({
	  target: 'WeakSet',
	  stat: true,
	  forced: true
	}, {
	  of: createCollectionOf(WeakSetHelpers.WeakSet, WeakSetHelpers.add, false)
	});

	// iterable DOM collections
	// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
	var domIterables = {
	  CSSRuleList: 0,
	  CSSStyleDeclaration: 0,
	  CSSValueList: 0,
	  ClientRectList: 0,
	  DOMRectList: 0,
	  DOMStringList: 0,
	  DOMTokenList: 1,
	  DataTransferItemList: 0,
	  FileList: 0,
	  HTMLAllCollection: 0,
	  HTMLCollection: 0,
	  HTMLFormElement: 0,
	  HTMLSelectElement: 0,
	  MediaList: 0,
	  MimeTypeArray: 0,
	  NamedNodeMap: 0,
	  NodeList: 1,
	  PaintRequestList: 0,
	  Plugin: 0,
	  PluginArray: 0,
	  SVGLengthList: 0,
	  SVGNumberList: 0,
	  SVGPathSegList: 0,
	  SVGPointList: 0,
	  SVGStringList: 0,
	  SVGTransformList: 0,
	  SourceBufferList: 0,
	  StyleSheetList: 0,
	  TextTrackCueList: 0,
	  TextTrackList: 0,
	  TouchList: 0
	};

	// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
	var documentCreateElement = documentCreateElement$2;
	var classList = documentCreateElement('span').classList;
	var DOMTokenListPrototype$2 = classList && classList.constructor && classList.constructor.prototype;
	var domTokenListPrototype = DOMTokenListPrototype$2 === Object.prototype ? undefined : DOMTokenListPrototype$2;

	var $forEach = arrayIteration.forEach;
	var arrayMethodIsStrict = arrayMethodIsStrict$6;
	var STRICT_METHOD = arrayMethodIsStrict('forEach');

	// `Array.prototype.forEach` method implementation
	// https://tc39.es/ecma262/#sec-array.prototype.foreach
	var arrayForEach = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
	  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  // eslint-disable-next-line es/no-array-prototype-foreach -- safe
	} : [].forEach;

	var global$7 = global$R;
	var DOMIterables$1 = domIterables;
	var DOMTokenListPrototype$1 = domTokenListPrototype;
	var forEach = arrayForEach;
	var createNonEnumerableProperty$1 = createNonEnumerableProperty$g;
	var handlePrototype$1 = function handlePrototype(CollectionPrototype) {
	  // some Chrome versions have non-configurable methods on DOMTokenList
	  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
	    createNonEnumerableProperty$1(CollectionPrototype, 'forEach', forEach);
	  } catch (error) {
	    CollectionPrototype.forEach = forEach;
	  }
	};
	for (var COLLECTION_NAME$1 in DOMIterables$1) {
	  if (DOMIterables$1[COLLECTION_NAME$1]) {
	    handlePrototype$1(global$7[COLLECTION_NAME$1] && global$7[COLLECTION_NAME$1].prototype);
	  }
	}
	handlePrototype$1(DOMTokenListPrototype$1);

	var global$6 = global$R;
	var DOMIterables = domIterables;
	var DOMTokenListPrototype = domTokenListPrototype;
	var ArrayIteratorMethods = es_array_iterator;
	var createNonEnumerableProperty = createNonEnumerableProperty$g;
	var setToStringTag$2 = setToStringTag$c;
	var wellKnownSymbol$2 = wellKnownSymbol$I;
	var ITERATOR$2 = wellKnownSymbol$2('iterator');
	var ArrayValues = ArrayIteratorMethods.values;
	var handlePrototype = function handlePrototype(CollectionPrototype, COLLECTION_NAME) {
	  if (CollectionPrototype) {
	    // some Chrome versions have non-configurable methods on DOMTokenList
	    if (CollectionPrototype[ITERATOR$2] !== ArrayValues) try {
	      createNonEnumerableProperty(CollectionPrototype, ITERATOR$2, ArrayValues);
	    } catch (error) {
	      CollectionPrototype[ITERATOR$2] = ArrayValues;
	    }
	    setToStringTag$2(CollectionPrototype, COLLECTION_NAME, true);
	    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
	      // some Chrome versions have non-configurable methods on DOMTokenList
	      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
	        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
	      } catch (error) {
	        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
	      }
	    }
	  }
	};
	for (var COLLECTION_NAME in DOMIterables) {
	  handlePrototype(global$6[COLLECTION_NAME] && global$6[COLLECTION_NAME].prototype, COLLECTION_NAME);
	}
	handlePrototype(DOMTokenListPrototype, 'DOMTokenList');

	var $$5 = _export;
	var global$5 = global$R;
	var clearImmediate = task$1.clear;

	// `clearImmediate` method
	// http://w3c.github.io/setImmediate/#si-clearImmediate
	$$5({
	  global: true,
	  bind: true,
	  enumerable: true,
	  forced: global$5.clearImmediate !== clearImmediate
	}, {
	  clearImmediate: clearImmediate
	});

	/* global Bun -- Bun case */
	var engineIsBun = typeof Bun == 'function' && Bun && typeof Bun.version == 'string';

	var global$4 = global$R;
	var apply = functionApply$1;
	var isCallable$1 = isCallable$E;
	var ENGINE_IS_BUN = engineIsBun;
	var USER_AGENT = engineUserAgent;
	var arraySlice$1 = arraySlice$b;
	var validateArgumentsLength$3 = validateArgumentsLength$5;
	var Function$1 = global$4.Function;
	// dirty IE9- and Bun 0.3.0- checks
	var WRAP = /MSIE .\./.test(USER_AGENT) || ENGINE_IS_BUN && function () {
	  var version = global$4.Bun.version.split('.');
	  return version.length < 3 || version[0] === '0' && (version[1] < 3 || version[1] === '3' && version[2] === '0');
	}();

	// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
	// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
	// https://github.com/oven-sh/bun/issues/1633
	var schedulersFix$1 = function schedulersFix(scheduler, hasTimeArg) {
	  var firstParamIndex = hasTimeArg ? 2 : 1;
	  return WRAP ? function (handler, timeout /* , ...arguments */) {
	    var boundArgs = validateArgumentsLength$3(arguments.length, 1) > firstParamIndex;
	    var fn = isCallable$1(handler) ? handler : Function$1(handler);
	    var params = boundArgs ? arraySlice$1(arguments, firstParamIndex) : [];
	    var callback = boundArgs ? function () {
	      apply(fn, this, params);
	    } : fn;
	    return hasTimeArg ? scheduler(callback, timeout) : scheduler(callback);
	  } : scheduler;
	};

	var $$4 = _export;
	var global$3 = global$R;
	var setTask = task$1.set;
	var schedulersFix = schedulersFix$1;

	// https://github.com/oven-sh/bun/issues/1633
	var setImmediate = global$3.setImmediate ? schedulersFix(setTask, false) : setTask;

	// `setImmediate` method
	// http://w3c.github.io/setImmediate/#si-setImmediate
	$$4({
	  global: true,
	  bind: true,
	  enumerable: true,
	  forced: global$3.setImmediate !== setImmediate
	}, {
	  setImmediate: setImmediate
	});

	var $$3 = _export;
	var microtask = microtask_1;
	var aCallable = aCallable$F;
	var validateArgumentsLength$2 = validateArgumentsLength$5;

	// `queueMicrotask` method
	// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-queuemicrotask
	$$3({
	  global: true,
	  enumerable: true,
	  dontCallGetSet: true
	}, {
	  queueMicrotask: function queueMicrotask(fn) {
	    validateArgumentsLength$2(arguments.length, 1);
	    microtask(aCallable(fn));
	  }
	});

	var fails = fails$13;
	var wellKnownSymbol$1 = wellKnownSymbol$I;
	var DESCRIPTORS$2 = descriptors;
	var IS_PURE = isPure;
	var ITERATOR$1 = wellKnownSymbol$1('iterator');
	var urlConstructorDetection = !fails(function () {
	  // eslint-disable-next-line unicorn/relative-url-style -- required for testing
	  var url = new URL('b?a=1&b=2&c=3', 'http://a');
	  var params = url.searchParams;
	  var params2 = new URLSearchParams('a=1&a=2&b=3');
	  var result = '';
	  url.pathname = 'c%20d';
	  params.forEach(function (value, key) {
	    params['delete']('b');
	    result += key + value;
	  });
	  params2['delete']('a', 2);
	  // `undefined` case is a Chromium 117 bug
	  // https://bugs.chromium.org/p/v8/issues/detail?id=14222
	  params2['delete']('b', undefined);
	  return IS_PURE && (!url.toJSON || !params2.has('a', 1) || params2.has('a', 2) || !params2.has('a', undefined) || params2.has('b')) || !params.size && (IS_PURE || !DESCRIPTORS$2) || !params.sort || url.href !== 'http://a/c%20d?a=1&c=3' || params.get('c') !== '3' || String(new URLSearchParams('?a=1')) !== 'a=1' || !params[ITERATOR$1]
	  // throws in Edge
	  || new URL('https://a@b').username !== 'a' || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b'
	  // not punycoded in Edge
	  || new URL('http://тест').host !== 'xn--e1aybc'
	  // not escaped in Chrome 62-
	  || new URL('http://a#б').hash !== '#%D0%B1'
	  // fails in Chrome 66-
	  || result !== 'a1c3'
	  // throws in Safari
	  || new URL('http://x', undefined).host !== 'x';
	});

	// based on https://github.com/bestiejs/punycode.js/blob/master/punycode.js
	var uncurryThis$2 = functionUncurryThis;
	var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1
	var base = 36;
	var tMin = 1;
	var tMax = 26;
	var skew = 38;
	var damp = 700;
	var initialBias = 72;
	var initialN = 128; // 0x80
	var delimiter = '-'; // '\x2D'
	var regexNonASCII = /[^\0-\u007E]/; // non-ASCII chars
	var regexSeparators = /[.\u3002\uFF0E\uFF61]/g; // RFC 3490 separators
	var OVERFLOW_ERROR = 'Overflow: input needs wider integers to process';
	var baseMinusTMin = base - tMin;
	var $RangeError = RangeError;
	var exec$1 = uncurryThis$2(regexSeparators.exec);
	var floor$1 = Math.floor;
	var fromCharCode = String.fromCharCode;
	var charCodeAt = uncurryThis$2(''.charCodeAt);
	var join$2 = uncurryThis$2([].join);
	var push$2 = uncurryThis$2([].push);
	var replace$2 = uncurryThis$2(''.replace);
	var split$2 = uncurryThis$2(''.split);
	var toLowerCase$1 = uncurryThis$2(''.toLowerCase);

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 */
	var ucs2decode = function ucs2decode(string) {
	  var output = [];
	  var counter = 0;
	  var length = string.length;
	  while (counter < length) {
	    var value = charCodeAt(string, counter++);
	    if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
	      // It's a high surrogate, and there is a next character.
	      var extra = charCodeAt(string, counter++);
	      if ((extra & 0xFC00) === 0xDC00) {
	        // Low surrogate.
	        push$2(output, ((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
	      } else {
	        // It's an unmatched surrogate; only append this code unit, in case the
	        // next code unit is the high surrogate of a surrogate pair.
	        push$2(output, value);
	        counter--;
	      }
	    } else {
	      push$2(output, value);
	    }
	  }
	  return output;
	};

	/**
	 * Converts a digit/integer into a basic code point.
	 */
	var digitToBasic = function digitToBasic(digit) {
	  //  0..25 map to ASCII a..z or A..Z
	  // 26..35 map to ASCII 0..9
	  return digit + 22 + 75 * (digit < 26);
	};

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 */
	var adapt = function adapt(delta, numPoints, firstTime) {
	  var k = 0;
	  delta = firstTime ? floor$1(delta / damp) : delta >> 1;
	  delta += floor$1(delta / numPoints);
	  while (delta > baseMinusTMin * tMax >> 1) {
	    delta = floor$1(delta / baseMinusTMin);
	    k += base;
	  }
	  return floor$1(k + (baseMinusTMin + 1) * delta / (delta + skew));
	};

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 */
	var encode = function encode(input) {
	  var output = [];

	  // Convert the input in UCS-2 to an array of Unicode code points.
	  input = ucs2decode(input);

	  // Cache the length.
	  var inputLength = input.length;

	  // Initialize the state.
	  var n = initialN;
	  var delta = 0;
	  var bias = initialBias;
	  var i, currentValue;

	  // Handle the basic code points.
	  for (i = 0; i < input.length; i++) {
	    currentValue = input[i];
	    if (currentValue < 0x80) {
	      push$2(output, fromCharCode(currentValue));
	    }
	  }
	  var basicLength = output.length; // number of basic code points.
	  var handledCPCount = basicLength; // number of code points that have been handled;

	  // Finish the basic string with a delimiter unless it's empty.
	  if (basicLength) {
	    push$2(output, delimiter);
	  }

	  // Main encoding loop:
	  while (handledCPCount < inputLength) {
	    // All non-basic code points < n have been handled already. Find the next larger one:
	    var m = maxInt;
	    for (i = 0; i < input.length; i++) {
	      currentValue = input[i];
	      if (currentValue >= n && currentValue < m) {
	        m = currentValue;
	      }
	    }

	    // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.
	    var handledCPCountPlusOne = handledCPCount + 1;
	    if (m - n > floor$1((maxInt - delta) / handledCPCountPlusOne)) {
	      throw new $RangeError(OVERFLOW_ERROR);
	    }
	    delta += (m - n) * handledCPCountPlusOne;
	    n = m;
	    for (i = 0; i < input.length; i++) {
	      currentValue = input[i];
	      if (currentValue < n && ++delta > maxInt) {
	        throw new $RangeError(OVERFLOW_ERROR);
	      }
	      if (currentValue === n) {
	        // Represent delta as a generalized variable-length integer.
	        var q = delta;
	        var k = base;
	        while (true) {
	          var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
	          if (q < t) break;
	          var qMinusT = q - t;
	          var baseMinusT = base - t;
	          push$2(output, fromCharCode(digitToBasic(t + qMinusT % baseMinusT)));
	          q = floor$1(qMinusT / baseMinusT);
	          k += base;
	        }
	        push$2(output, fromCharCode(digitToBasic(q)));
	        bias = adapt(delta, handledCPCountPlusOne, handledCPCount === basicLength);
	        delta = 0;
	        handledCPCount++;
	      }
	    }
	    delta++;
	    n++;
	  }
	  return join$2(output, '');
	};
	var stringPunycodeToAscii = function stringPunycodeToAscii(input) {
	  var encoded = [];
	  var labels = split$2(replace$2(toLowerCase$1(input), regexSeparators, "."), '.');
	  var i, label;
	  for (i = 0; i < labels.length; i++) {
	    label = labels[i];
	    push$2(encoded, exec$1(regexNonASCII, label) ? 'xn--' + encode(label) : label);
	  }
	  return join$2(encoded, '.');
	};

	// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`

	var $$2 = _export;
	var global$2 = global$R;
	var safeGetBuiltIn = safeGetBuiltIn$2;
	var call$1 = functionCall;
	var uncurryThis$1 = functionUncurryThis;
	var DESCRIPTORS$1 = descriptors;
	var USE_NATIVE_URL$1 = urlConstructorDetection;
	var defineBuiltIn$1 = defineBuiltIn$l;
	var defineBuiltInAccessor$1 = defineBuiltInAccessor$f;
	var defineBuiltIns = defineBuiltIns$9;
	var setToStringTag$1 = setToStringTag$c;
	var createIteratorConstructor = iteratorCreateConstructor;
	var InternalStateModule$1 = internalState;
	var anInstance$1 = anInstance$b;
	var isCallable = isCallable$E;
	var hasOwn$1 = hasOwnProperty_1;
	var bind$1 = functionBindContext;
	var classof = classof$l;
	var anObject = anObject$1a;
	var isObject$3 = isObject$J;
	var $toString$1 = toString$r;
	var create = objectCreate;
	var createPropertyDescriptor = createPropertyDescriptor$a;
	var getIterator = getIterator$5;
	var getIteratorMethod = getIteratorMethod$7;
	var createIterResultObject = createIterResultObject$g;
	var validateArgumentsLength$1 = validateArgumentsLength$5;
	var wellKnownSymbol = wellKnownSymbol$I;
	var arraySort = arraySort$1;
	var ITERATOR = wellKnownSymbol('iterator');
	var URL_SEARCH_PARAMS = 'URLSearchParams';
	var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
	var setInternalState$1 = InternalStateModule$1.set;
	var getInternalParamsState = InternalStateModule$1.getterFor(URL_SEARCH_PARAMS);
	var getInternalIteratorState = InternalStateModule$1.getterFor(URL_SEARCH_PARAMS_ITERATOR);
	var nativeFetch = safeGetBuiltIn('fetch');
	var NativeRequest = safeGetBuiltIn('Request');
	var Headers = safeGetBuiltIn('Headers');
	var RequestPrototype = NativeRequest && NativeRequest.prototype;
	var HeadersPrototype = Headers && Headers.prototype;
	var RegExp$1 = global$2.RegExp;
	var TypeError$2 = global$2.TypeError;
	var decodeURIComponent$1 = global$2.decodeURIComponent;
	var encodeURIComponent$1 = global$2.encodeURIComponent;
	var charAt$1 = uncurryThis$1(''.charAt);
	var join$1 = uncurryThis$1([].join);
	var push$1 = uncurryThis$1([].push);
	var replace$1 = uncurryThis$1(''.replace);
	var shift$1 = uncurryThis$1([].shift);
	var splice = uncurryThis$1([].splice);
	var split$1 = uncurryThis$1(''.split);
	var stringSlice$1 = uncurryThis$1(''.slice);
	var plus = /\+/g;
	var sequences = Array(4);
	var percentSequence = function percentSequence(bytes) {
	  return sequences[bytes - 1] || (sequences[bytes - 1] = RegExp$1('((?:%[\\da-f]{2}){' + bytes + '})', 'gi'));
	};
	var percentDecode = function percentDecode(sequence) {
	  try {
	    return decodeURIComponent$1(sequence);
	  } catch (error) {
	    return sequence;
	  }
	};
	var deserialize = function deserialize(it) {
	  var result = replace$1(it, plus, ' ');
	  var bytes = 4;
	  try {
	    return decodeURIComponent$1(result);
	  } catch (error) {
	    while (bytes) {
	      result = replace$1(result, percentSequence(bytes--), percentDecode);
	    }
	    return result;
	  }
	};
	var find = /[!'()~]|%20/g;
	var replacements = {
	  '!': '%21',
	  "'": '%27',
	  '(': '%28',
	  ')': '%29',
	  '~': '%7E',
	  '%20': '+'
	};
	var replacer = function replacer(match) {
	  return replacements[match];
	};
	var _serialize = function serialize(it) {
	  return replace$1(encodeURIComponent$1(it), find, replacer);
	};
	var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
	  setInternalState$1(this, {
	    type: URL_SEARCH_PARAMS_ITERATOR,
	    target: getInternalParamsState(params).entries,
	    index: 0,
	    kind: kind
	  });
	}, URL_SEARCH_PARAMS, function next() {
	  var state = getInternalIteratorState(this);
	  var target = state.target;
	  var index = state.index++;
	  if (!target || index >= target.length) {
	    state.target = undefined;
	    return createIterResultObject(undefined, true);
	  }
	  var entry = target[index];
	  switch (state.kind) {
	    case 'keys':
	      return createIterResultObject(entry.key, false);
	    case 'values':
	      return createIterResultObject(entry.value, false);
	  }
	  return createIterResultObject([entry.key, entry.value], false);
	}, true);
	var URLSearchParamsState = function URLSearchParamsState(init) {
	  this.entries = [];
	  this.url = null;
	  if (init !== undefined) {
	    if (isObject$3(init)) this.parseObject(init);else this.parseQuery(typeof init == 'string' ? charAt$1(init, 0) === '?' ? stringSlice$1(init, 1) : init : $toString$1(init));
	  }
	};
	URLSearchParamsState.prototype = {
	  type: URL_SEARCH_PARAMS,
	  bindURL: function bindURL(url) {
	    this.url = url;
	    this.update();
	  },
	  parseObject: function parseObject(object) {
	    var entries = this.entries;
	    var iteratorMethod = getIteratorMethod(object);
	    var iterator, next, step, entryIterator, entryNext, first, second;
	    if (iteratorMethod) {
	      iterator = getIterator(object, iteratorMethod);
	      next = iterator.next;
	      while (!(step = call$1(next, iterator)).done) {
	        entryIterator = getIterator(anObject(step.value));
	        entryNext = entryIterator.next;
	        if ((first = call$1(entryNext, entryIterator)).done || (second = call$1(entryNext, entryIterator)).done || !call$1(entryNext, entryIterator).done) throw new TypeError$2('Expected sequence with length 2');
	        push$1(entries, {
	          key: $toString$1(first.value),
	          value: $toString$1(second.value)
	        });
	      }
	    } else for (var key in object) if (hasOwn$1(object, key)) {
	      push$1(entries, {
	        key: key,
	        value: $toString$1(object[key])
	      });
	    }
	  },
	  parseQuery: function parseQuery(query) {
	    if (query) {
	      var entries = this.entries;
	      var attributes = split$1(query, '&');
	      var index = 0;
	      var attribute, entry;
	      while (index < attributes.length) {
	        attribute = attributes[index++];
	        if (attribute.length) {
	          entry = split$1(attribute, '=');
	          push$1(entries, {
	            key: deserialize(shift$1(entry)),
	            value: deserialize(join$1(entry, '='))
	          });
	        }
	      }
	    }
	  },
	  serialize: function serialize() {
	    var entries = this.entries;
	    var result = [];
	    var index = 0;
	    var entry;
	    while (index < entries.length) {
	      entry = entries[index++];
	      push$1(result, _serialize(entry.key) + '=' + _serialize(entry.value));
	    }
	    return join$1(result, '&');
	  },
	  update: function update() {
	    this.entries.length = 0;
	    this.parseQuery(this.url.query);
	  },
	  updateURL: function updateURL() {
	    if (this.url) this.url.update();
	  }
	};

	// `URLSearchParams` constructor
	// https://url.spec.whatwg.org/#interface-urlsearchparams
	var URLSearchParamsConstructor = function URLSearchParams( /* init */
	) {
	  anInstance$1(this, URLSearchParamsPrototype);
	  var init = arguments.length > 0 ? arguments[0] : undefined;
	  var state = setInternalState$1(this, new URLSearchParamsState(init));
	  if (!DESCRIPTORS$1) this.size = state.entries.length;
	};
	var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;
	defineBuiltIns(URLSearchParamsPrototype, {
	  // `URLSearchParams.prototype.append` method
	  // https://url.spec.whatwg.org/#dom-urlsearchparams-append
	  append: function append(name, value) {
	    var state = getInternalParamsState(this);
	    validateArgumentsLength$1(arguments.length, 2);
	    push$1(state.entries, {
	      key: $toString$1(name),
	      value: $toString$1(value)
	    });
	    if (!DESCRIPTORS$1) this.length++;
	    state.updateURL();
	  },
	  // `URLSearchParams.prototype.delete` method
	  // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
	  'delete': function _delete(name /* , value */) {
	    var state = getInternalParamsState(this);
	    var length = validateArgumentsLength$1(arguments.length, 1);
	    var entries = state.entries;
	    var key = $toString$1(name);
	    var $value = length < 2 ? undefined : arguments[1];
	    var value = $value === undefined ? $value : $toString$1($value);
	    var index = 0;
	    while (index < entries.length) {
	      var entry = entries[index];
	      if (entry.key === key && (value === undefined || entry.value === value)) {
	        splice(entries, index, 1);
	        if (value !== undefined) break;
	      } else index++;
	    }
	    if (!DESCRIPTORS$1) this.size = entries.length;
	    state.updateURL();
	  },
	  // `URLSearchParams.prototype.get` method
	  // https://url.spec.whatwg.org/#dom-urlsearchparams-get
	  get: function get(name) {
	    var entries = getInternalParamsState(this).entries;
	    validateArgumentsLength$1(arguments.length, 1);
	    var key = $toString$1(name);
	    var index = 0;
	    for (; index < entries.length; index++) {
	      if (entries[index].key === key) return entries[index].value;
	    }
	    return null;
	  },
	  // `URLSearchParams.prototype.getAll` method
	  // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
	  getAll: function getAll(name) {
	    var entries = getInternalParamsState(this).entries;
	    validateArgumentsLength$1(arguments.length, 1);
	    var key = $toString$1(name);
	    var result = [];
	    var index = 0;
	    for (; index < entries.length; index++) {
	      if (entries[index].key === key) push$1(result, entries[index].value);
	    }
	    return result;
	  },
	  // `URLSearchParams.prototype.has` method
	  // https://url.spec.whatwg.org/#dom-urlsearchparams-has
	  has: function has(name /* , value */) {
	    var entries = getInternalParamsState(this).entries;
	    var length = validateArgumentsLength$1(arguments.length, 1);
	    var key = $toString$1(name);
	    var $value = length < 2 ? undefined : arguments[1];
	    var value = $value === undefined ? $value : $toString$1($value);
	    var index = 0;
	    while (index < entries.length) {
	      var entry = entries[index++];
	      if (entry.key === key && (value === undefined || entry.value === value)) return true;
	    }
	    return false;
	  },
	  // `URLSearchParams.prototype.set` method
	  // https://url.spec.whatwg.org/#dom-urlsearchparams-set
	  set: function set(name, value) {
	    var state = getInternalParamsState(this);
	    validateArgumentsLength$1(arguments.length, 1);
	    var entries = state.entries;
	    var found = false;
	    var key = $toString$1(name);
	    var val = $toString$1(value);
	    var index = 0;
	    var entry;
	    for (; index < entries.length; index++) {
	      entry = entries[index];
	      if (entry.key === key) {
	        if (found) splice(entries, index--, 1);else {
	          found = true;
	          entry.value = val;
	        }
	      }
	    }
	    if (!found) push$1(entries, {
	      key: key,
	      value: val
	    });
	    if (!DESCRIPTORS$1) this.size = entries.length;
	    state.updateURL();
	  },
	  // `URLSearchParams.prototype.sort` method
	  // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
	  sort: function sort() {
	    var state = getInternalParamsState(this);
	    arraySort(state.entries, function (a, b) {
	      return a.key > b.key ? 1 : -1;
	    });
	    state.updateURL();
	  },
	  // `URLSearchParams.prototype.forEach` method
	  forEach: function forEach(callback /* , thisArg */) {
	    var entries = getInternalParamsState(this).entries;
	    var boundFunction = bind$1(callback, arguments.length > 1 ? arguments[1] : undefined);
	    var index = 0;
	    var entry;
	    while (index < entries.length) {
	      entry = entries[index++];
	      boundFunction(entry.value, entry.key, this);
	    }
	  },
	  // `URLSearchParams.prototype.keys` method
	  keys: function keys() {
	    return new URLSearchParamsIterator(this, 'keys');
	  },
	  // `URLSearchParams.prototype.values` method
	  values: function values() {
	    return new URLSearchParamsIterator(this, 'values');
	  },
	  // `URLSearchParams.prototype.entries` method
	  entries: function entries() {
	    return new URLSearchParamsIterator(this, 'entries');
	  }
	}, {
	  enumerable: true
	});

	// `URLSearchParams.prototype[@@iterator]` method
	defineBuiltIn$1(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries, {
	  name: 'entries'
	});

	// `URLSearchParams.prototype.toString` method
	// https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
	defineBuiltIn$1(URLSearchParamsPrototype, 'toString', function toString() {
	  return getInternalParamsState(this).serialize();
	}, {
	  enumerable: true
	});

	// `URLSearchParams.prototype.size` getter
	// https://github.com/whatwg/url/pull/734
	if (DESCRIPTORS$1) defineBuiltInAccessor$1(URLSearchParamsPrototype, 'size', {
	  get: function size() {
	    return getInternalParamsState(this).entries.length;
	  },
	  configurable: true,
	  enumerable: true
	});
	setToStringTag$1(URLSearchParamsConstructor, URL_SEARCH_PARAMS);
	$$2({
	  global: true,
	  constructor: true,
	  forced: !USE_NATIVE_URL$1
	}, {
	  URLSearchParams: URLSearchParamsConstructor
	});

	// Wrap `fetch` and `Request` for correct work with polyfilled `URLSearchParams`
	if (!USE_NATIVE_URL$1 && isCallable(Headers)) {
	  var headersHas = uncurryThis$1(HeadersPrototype.has);
	  var headersSet = uncurryThis$1(HeadersPrototype.set);
	  var wrapRequestOptions = function wrapRequestOptions(init) {
	    if (isObject$3(init)) {
	      var body = init.body;
	      var headers;
	      if (classof(body) === URL_SEARCH_PARAMS) {
	        headers = init.headers ? new Headers(init.headers) : new Headers();
	        if (!headersHas(headers, 'content-type')) {
	          headersSet(headers, 'content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
	        }
	        return create(init, {
	          body: createPropertyDescriptor(0, $toString$1(body)),
	          headers: createPropertyDescriptor(0, headers)
	        });
	      }
	    }
	    return init;
	  };
	  if (isCallable(nativeFetch)) {
	    $$2({
	      global: true,
	      enumerable: true,
	      dontCallGetSet: true,
	      forced: true
	    }, {
	      fetch: function fetch(input /* , init */) {
	        return nativeFetch(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
	      }
	    });
	  }
	  if (isCallable(NativeRequest)) {
	    var RequestConstructor = function Request(input /* , init */) {
	      anInstance$1(this, RequestPrototype);
	      return new NativeRequest(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
	    };
	    RequestPrototype.constructor = RequestConstructor;
	    RequestConstructor.prototype = RequestPrototype;
	    $$2({
	      global: true,
	      constructor: true,
	      dontCallGetSet: true,
	      forced: true
	    }, {
	      Request: RequestConstructor
	    });
	  }
	}
	var web_urlSearchParams_constructor = {
	  URLSearchParams: URLSearchParamsConstructor,
	  getState: getInternalParamsState
	};

	// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`

	var $$1 = _export;
	var DESCRIPTORS = descriptors;
	var USE_NATIVE_URL = urlConstructorDetection;
	var global$1 = global$R;
	var bind = functionBindContext;
	var uncurryThis = functionUncurryThis;
	var defineBuiltIn = defineBuiltIn$l;
	var defineBuiltInAccessor = defineBuiltInAccessor$f;
	var anInstance = anInstance$b;
	var hasOwn = hasOwnProperty_1;
	var assign = objectAssign;
	var arrayFrom = arrayFrom$1;
	var arraySlice = arraySlice$b;
	var codeAt = stringMultibyte.codeAt;
	var toASCII = stringPunycodeToAscii;
	var $toString = toString$r;
	var setToStringTag = setToStringTag$c;
	var validateArgumentsLength = validateArgumentsLength$5;
	var URLSearchParamsModule = web_urlSearchParams_constructor;
	var InternalStateModule = internalState;
	var setInternalState = InternalStateModule.set;
	var getInternalURLState = InternalStateModule.getterFor('URL');
	var URLSearchParams$1 = URLSearchParamsModule.URLSearchParams;
	var getInternalSearchParamsState = URLSearchParamsModule.getState;
	var NativeURL = global$1.URL;
	var TypeError$1 = global$1.TypeError;
	var parseInt$1 = global$1.parseInt;
	var floor = Math.floor;
	var pow = Math.pow;
	var charAt = uncurryThis(''.charAt);
	var exec = uncurryThis(/./.exec);
	var join = uncurryThis([].join);
	var numberToString = uncurryThis(1.0.toString);
	var pop = uncurryThis([].pop);
	var push = uncurryThis([].push);
	var replace = uncurryThis(''.replace);
	var shift = uncurryThis([].shift);
	var split = uncurryThis(''.split);
	var stringSlice = uncurryThis(''.slice);
	var toLowerCase = uncurryThis(''.toLowerCase);
	var unshift = uncurryThis([].unshift);
	var INVALID_AUTHORITY = 'Invalid authority';
	var INVALID_SCHEME = 'Invalid scheme';
	var INVALID_HOST = 'Invalid host';
	var INVALID_PORT = 'Invalid port';
	var ALPHA = /[a-z]/i;
	// eslint-disable-next-line regexp/no-obscure-range -- safe
	var ALPHANUMERIC = /[\d+-.a-z]/i;
	var DIGIT = /\d/;
	var HEX_START = /^0x/i;
	var OCT = /^[0-7]+$/;
	var DEC = /^\d+$/;
	var HEX = /^[\da-f]+$/i;
	/* eslint-disable regexp/no-control-character -- safe */
	var FORBIDDEN_HOST_CODE_POINT = /[\0\t\n\r #%/:<>?@[\\\]^|]/;
	var FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\0\t\n\r #/:<>?@[\\\]^|]/;
	var LEADING_C0_CONTROL_OR_SPACE = /^[\u0000-\u0020]+/;
	var TRAILING_C0_CONTROL_OR_SPACE = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/;
	var TAB_AND_NEW_LINE = /[\t\n\r]/g;
	/* eslint-enable regexp/no-control-character -- safe */
	var EOF;

	// https://url.spec.whatwg.org/#ipv4-number-parser
	var parseIPv4 = function parseIPv4(input) {
	  var parts = split(input, '.');
	  var partsLength, numbers, index, part, radix, number, ipv4;
	  if (parts.length && parts[parts.length - 1] === '') {
	    parts.length--;
	  }
	  partsLength = parts.length;
	  if (partsLength > 4) return input;
	  numbers = [];
	  for (index = 0; index < partsLength; index++) {
	    part = parts[index];
	    if (part === '') return input;
	    radix = 10;
	    if (part.length > 1 && charAt(part, 0) === '0') {
	      radix = exec(HEX_START, part) ? 16 : 8;
	      part = stringSlice(part, radix === 8 ? 1 : 2);
	    }
	    if (part === '') {
	      number = 0;
	    } else {
	      if (!exec(radix === 10 ? DEC : radix === 8 ? OCT : HEX, part)) return input;
	      number = parseInt$1(part, radix);
	    }
	    push(numbers, number);
	  }
	  for (index = 0; index < partsLength; index++) {
	    number = numbers[index];
	    if (index === partsLength - 1) {
	      if (number >= pow(256, 5 - partsLength)) return null;
	    } else if (number > 255) return null;
	  }
	  ipv4 = pop(numbers);
	  for (index = 0; index < numbers.length; index++) {
	    ipv4 += numbers[index] * pow(256, 3 - index);
	  }
	  return ipv4;
	};

	// https://url.spec.whatwg.org/#concept-ipv6-parser
	// eslint-disable-next-line max-statements -- TODO
	var parseIPv6 = function parseIPv6(input) {
	  var address = [0, 0, 0, 0, 0, 0, 0, 0];
	  var pieceIndex = 0;
	  var compress = null;
	  var pointer = 0;
	  var value, length, numbersSeen, ipv4Piece, number, swaps, swap;
	  var chr = function chr() {
	    return charAt(input, pointer);
	  };
	  if (chr() === ':') {
	    if (charAt(input, 1) !== ':') return;
	    pointer += 2;
	    pieceIndex++;
	    compress = pieceIndex;
	  }
	  while (chr()) {
	    if (pieceIndex === 8) return;
	    if (chr() === ':') {
	      if (compress !== null) return;
	      pointer++;
	      pieceIndex++;
	      compress = pieceIndex;
	      continue;
	    }
	    value = length = 0;
	    while (length < 4 && exec(HEX, chr())) {
	      value = value * 16 + parseInt$1(chr(), 16);
	      pointer++;
	      length++;
	    }
	    if (chr() === '.') {
	      if (length === 0) return;
	      pointer -= length;
	      if (pieceIndex > 6) return;
	      numbersSeen = 0;
	      while (chr()) {
	        ipv4Piece = null;
	        if (numbersSeen > 0) {
	          if (chr() === '.' && numbersSeen < 4) pointer++;else return;
	        }
	        if (!exec(DIGIT, chr())) return;
	        while (exec(DIGIT, chr())) {
	          number = parseInt$1(chr(), 10);
	          if (ipv4Piece === null) ipv4Piece = number;else if (ipv4Piece === 0) return;else ipv4Piece = ipv4Piece * 10 + number;
	          if (ipv4Piece > 255) return;
	          pointer++;
	        }
	        address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
	        numbersSeen++;
	        if (numbersSeen === 2 || numbersSeen === 4) pieceIndex++;
	      }
	      if (numbersSeen !== 4) return;
	      break;
	    } else if (chr() === ':') {
	      pointer++;
	      if (!chr()) return;
	    } else if (chr()) return;
	    address[pieceIndex++] = value;
	  }
	  if (compress !== null) {
	    swaps = pieceIndex - compress;
	    pieceIndex = 7;
	    while (pieceIndex !== 0 && swaps > 0) {
	      swap = address[pieceIndex];
	      address[pieceIndex--] = address[compress + swaps - 1];
	      address[compress + --swaps] = swap;
	    }
	  } else if (pieceIndex !== 8) return;
	  return address;
	};
	var findLongestZeroSequence = function findLongestZeroSequence(ipv6) {
	  var maxIndex = null;
	  var maxLength = 1;
	  var currStart = null;
	  var currLength = 0;
	  var index = 0;
	  for (; index < 8; index++) {
	    if (ipv6[index] !== 0) {
	      if (currLength > maxLength) {
	        maxIndex = currStart;
	        maxLength = currLength;
	      }
	      currStart = null;
	      currLength = 0;
	    } else {
	      if (currStart === null) currStart = index;
	      ++currLength;
	    }
	  }
	  if (currLength > maxLength) {
	    maxIndex = currStart;
	    maxLength = currLength;
	  }
	  return maxIndex;
	};

	// https://url.spec.whatwg.org/#host-serializing
	var serializeHost = function serializeHost(host) {
	  var result, index, compress, ignore0;
	  // ipv4
	  if (typeof host == 'number') {
	    result = [];
	    for (index = 0; index < 4; index++) {
	      unshift(result, host % 256);
	      host = floor(host / 256);
	    }
	    return join(result, '.');
	    // ipv6
	  } else if (typeof host == 'object') {
	    result = '';
	    compress = findLongestZeroSequence(host);
	    for (index = 0; index < 8; index++) {
	      if (ignore0 && host[index] === 0) continue;
	      if (ignore0) ignore0 = false;
	      if (compress === index) {
	        result += index ? ':' : '::';
	        ignore0 = true;
	      } else {
	        result += numberToString(host[index], 16);
	        if (index < 7) result += ':';
	      }
	    }
	    return '[' + result + ']';
	  }
	  return host;
	};
	var C0ControlPercentEncodeSet = {};
	var fragmentPercentEncodeSet = assign({}, C0ControlPercentEncodeSet, {
	  ' ': 1,
	  '"': 1,
	  '<': 1,
	  '>': 1,
	  '`': 1
	});
	var pathPercentEncodeSet = assign({}, fragmentPercentEncodeSet, {
	  '#': 1,
	  '?': 1,
	  '{': 1,
	  '}': 1
	});
	var userinfoPercentEncodeSet = assign({}, pathPercentEncodeSet, {
	  '/': 1,
	  ':': 1,
	  ';': 1,
	  '=': 1,
	  '@': 1,
	  '[': 1,
	  '\\': 1,
	  ']': 1,
	  '^': 1,
	  '|': 1
	});
	var percentEncode = function percentEncode(chr, set) {
	  var code = codeAt(chr, 0);
	  return code > 0x20 && code < 0x7F && !hasOwn(set, chr) ? chr : encodeURIComponent(chr);
	};

	// https://url.spec.whatwg.org/#special-scheme
	var specialSchemes = {
	  ftp: 21,
	  file: null,
	  http: 80,
	  https: 443,
	  ws: 80,
	  wss: 443
	};

	// https://url.spec.whatwg.org/#windows-drive-letter
	var isWindowsDriveLetter = function isWindowsDriveLetter(string, normalized) {
	  var second;
	  return string.length === 2 && exec(ALPHA, charAt(string, 0)) && ((second = charAt(string, 1)) === ':' || !normalized && second === '|');
	};

	// https://url.spec.whatwg.org/#start-with-a-windows-drive-letter
	var startsWithWindowsDriveLetter = function startsWithWindowsDriveLetter(string) {
	  var third;
	  return string.length > 1 && isWindowsDriveLetter(stringSlice(string, 0, 2)) && (string.length === 2 || (third = charAt(string, 2)) === '/' || third === '\\' || third === '?' || third === '#');
	};

	// https://url.spec.whatwg.org/#single-dot-path-segment
	var isSingleDot = function isSingleDot(segment) {
	  return segment === '.' || toLowerCase(segment) === '%2e';
	};

	// https://url.spec.whatwg.org/#double-dot-path-segment
	var isDoubleDot = function isDoubleDot(segment) {
	  segment = toLowerCase(segment);
	  return segment === '..' || segment === '%2e.' || segment === '.%2e' || segment === '%2e%2e';
	};

	// States:
	var SCHEME_START = {};
	var SCHEME = {};
	var NO_SCHEME = {};
	var SPECIAL_RELATIVE_OR_AUTHORITY = {};
	var PATH_OR_AUTHORITY = {};
	var RELATIVE = {};
	var RELATIVE_SLASH = {};
	var SPECIAL_AUTHORITY_SLASHES = {};
	var SPECIAL_AUTHORITY_IGNORE_SLASHES = {};
	var AUTHORITY = {};
	var HOST = {};
	var HOSTNAME = {};
	var PORT = {};
	var FILE = {};
	var FILE_SLASH = {};
	var FILE_HOST = {};
	var PATH_START = {};
	var PATH = {};
	var CANNOT_BE_A_BASE_URL_PATH = {};
	var QUERY = {};
	var FRAGMENT = {};
	var URLState = function URLState(url, isBase, base) {
	  var urlString = $toString(url);
	  var baseState, failure, searchParams;
	  if (isBase) {
	    failure = this.parse(urlString);
	    if (failure) throw new TypeError$1(failure);
	    this.searchParams = null;
	  } else {
	    if (base !== undefined) baseState = new URLState(base, true);
	    failure = this.parse(urlString, null, baseState);
	    if (failure) throw new TypeError$1(failure);
	    searchParams = getInternalSearchParamsState(new URLSearchParams$1());
	    searchParams.bindURL(this);
	    this.searchParams = searchParams;
	  }
	};
	URLState.prototype = {
	  type: 'URL',
	  // https://url.spec.whatwg.org/#url-parsing
	  // eslint-disable-next-line max-statements -- TODO
	  parse: function parse(input, stateOverride, base) {
	    var url = this;
	    var state = stateOverride || SCHEME_START;
	    var pointer = 0;
	    var buffer = '';
	    var seenAt = false;
	    var seenBracket = false;
	    var seenPasswordToken = false;
	    var codePoints, chr, bufferCodePoints, failure;
	    input = $toString(input);
	    if (!stateOverride) {
	      url.scheme = '';
	      url.username = '';
	      url.password = '';
	      url.host = null;
	      url.port = null;
	      url.path = [];
	      url.query = null;
	      url.fragment = null;
	      url.cannotBeABaseURL = false;
	      input = replace(input, LEADING_C0_CONTROL_OR_SPACE, '');
	      input = replace(input, TRAILING_C0_CONTROL_OR_SPACE, '$1');
	    }
	    input = replace(input, TAB_AND_NEW_LINE, '');
	    codePoints = arrayFrom(input);
	    while (pointer <= codePoints.length) {
	      chr = codePoints[pointer];
	      switch (state) {
	        case SCHEME_START:
	          if (chr && exec(ALPHA, chr)) {
	            buffer += toLowerCase(chr);
	            state = SCHEME;
	          } else if (!stateOverride) {
	            state = NO_SCHEME;
	            continue;
	          } else return INVALID_SCHEME;
	          break;
	        case SCHEME:
	          if (chr && (exec(ALPHANUMERIC, chr) || chr === '+' || chr === '-' || chr === '.')) {
	            buffer += toLowerCase(chr);
	          } else if (chr === ':') {
	            if (stateOverride && (url.isSpecial() !== hasOwn(specialSchemes, buffer) || buffer === 'file' && (url.includesCredentials() || url.port !== null) || url.scheme === 'file' && !url.host)) return;
	            url.scheme = buffer;
	            if (stateOverride) {
	              if (url.isSpecial() && specialSchemes[url.scheme] === url.port) url.port = null;
	              return;
	            }
	            buffer = '';
	            if (url.scheme === 'file') {
	              state = FILE;
	            } else if (url.isSpecial() && base && base.scheme === url.scheme) {
	              state = SPECIAL_RELATIVE_OR_AUTHORITY;
	            } else if (url.isSpecial()) {
	              state = SPECIAL_AUTHORITY_SLASHES;
	            } else if (codePoints[pointer + 1] === '/') {
	              state = PATH_OR_AUTHORITY;
	              pointer++;
	            } else {
	              url.cannotBeABaseURL = true;
	              push(url.path, '');
	              state = CANNOT_BE_A_BASE_URL_PATH;
	            }
	          } else if (!stateOverride) {
	            buffer = '';
	            state = NO_SCHEME;
	            pointer = 0;
	            continue;
	          } else return INVALID_SCHEME;
	          break;
	        case NO_SCHEME:
	          if (!base || base.cannotBeABaseURL && chr !== '#') return INVALID_SCHEME;
	          if (base.cannotBeABaseURL && chr === '#') {
	            url.scheme = base.scheme;
	            url.path = arraySlice(base.path);
	            url.query = base.query;
	            url.fragment = '';
	            url.cannotBeABaseURL = true;
	            state = FRAGMENT;
	            break;
	          }
	          state = base.scheme === 'file' ? FILE : RELATIVE;
	          continue;
	        case SPECIAL_RELATIVE_OR_AUTHORITY:
	          if (chr === '/' && codePoints[pointer + 1] === '/') {
	            state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
	            pointer++;
	          } else {
	            state = RELATIVE;
	            continue;
	          }
	          break;
	        case PATH_OR_AUTHORITY:
	          if (chr === '/') {
	            state = AUTHORITY;
	            break;
	          } else {
	            state = PATH;
	            continue;
	          }
	        case RELATIVE:
	          url.scheme = base.scheme;
	          if (chr === EOF) {
	            url.username = base.username;
	            url.password = base.password;
	            url.host = base.host;
	            url.port = base.port;
	            url.path = arraySlice(base.path);
	            url.query = base.query;
	          } else if (chr === '/' || chr === '\\' && url.isSpecial()) {
	            state = RELATIVE_SLASH;
	          } else if (chr === '?') {
	            url.username = base.username;
	            url.password = base.password;
	            url.host = base.host;
	            url.port = base.port;
	            url.path = arraySlice(base.path);
	            url.query = '';
	            state = QUERY;
	          } else if (chr === '#') {
	            url.username = base.username;
	            url.password = base.password;
	            url.host = base.host;
	            url.port = base.port;
	            url.path = arraySlice(base.path);
	            url.query = base.query;
	            url.fragment = '';
	            state = FRAGMENT;
	          } else {
	            url.username = base.username;
	            url.password = base.password;
	            url.host = base.host;
	            url.port = base.port;
	            url.path = arraySlice(base.path);
	            url.path.length--;
	            state = PATH;
	            continue;
	          }
	          break;
	        case RELATIVE_SLASH:
	          if (url.isSpecial() && (chr === '/' || chr === '\\')) {
	            state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
	          } else if (chr === '/') {
	            state = AUTHORITY;
	          } else {
	            url.username = base.username;
	            url.password = base.password;
	            url.host = base.host;
	            url.port = base.port;
	            state = PATH;
	            continue;
	          }
	          break;
	        case SPECIAL_AUTHORITY_SLASHES:
	          state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
	          if (chr !== '/' || charAt(buffer, pointer + 1) !== '/') continue;
	          pointer++;
	          break;
	        case SPECIAL_AUTHORITY_IGNORE_SLASHES:
	          if (chr !== '/' && chr !== '\\') {
	            state = AUTHORITY;
	            continue;
	          }
	          break;
	        case AUTHORITY:
	          if (chr === '@') {
	            if (seenAt) buffer = '%40' + buffer;
	            seenAt = true;
	            bufferCodePoints = arrayFrom(buffer);
	            for (var i = 0; i < bufferCodePoints.length; i++) {
	              var codePoint = bufferCodePoints[i];
	              if (codePoint === ':' && !seenPasswordToken) {
	                seenPasswordToken = true;
	                continue;
	              }
	              var encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet);
	              if (seenPasswordToken) url.password += encodedCodePoints;else url.username += encodedCodePoints;
	            }
	            buffer = '';
	          } else if (chr === EOF || chr === '/' || chr === '?' || chr === '#' || chr === '\\' && url.isSpecial()) {
	            if (seenAt && buffer === '') return INVALID_AUTHORITY;
	            pointer -= arrayFrom(buffer).length + 1;
	            buffer = '';
	            state = HOST;
	          } else buffer += chr;
	          break;
	        case HOST:
	        case HOSTNAME:
	          if (stateOverride && url.scheme === 'file') {
	            state = FILE_HOST;
	            continue;
	          } else if (chr === ':' && !seenBracket) {
	            if (buffer === '') return INVALID_HOST;
	            failure = url.parseHost(buffer);
	            if (failure) return failure;
	            buffer = '';
	            state = PORT;
	            if (stateOverride === HOSTNAME) return;
	          } else if (chr === EOF || chr === '/' || chr === '?' || chr === '#' || chr === '\\' && url.isSpecial()) {
	            if (url.isSpecial() && buffer === '') return INVALID_HOST;
	            if (stateOverride && buffer === '' && (url.includesCredentials() || url.port !== null)) return;
	            failure = url.parseHost(buffer);
	            if (failure) return failure;
	            buffer = '';
	            state = PATH_START;
	            if (stateOverride) return;
	            continue;
	          } else {
	            if (chr === '[') seenBracket = true;else if (chr === ']') seenBracket = false;
	            buffer += chr;
	          }
	          break;
	        case PORT:
	          if (exec(DIGIT, chr)) {
	            buffer += chr;
	          } else if (chr === EOF || chr === '/' || chr === '?' || chr === '#' || chr === '\\' && url.isSpecial() || stateOverride) {
	            if (buffer !== '') {
	              var port = parseInt$1(buffer, 10);
	              if (port > 0xFFFF) return INVALID_PORT;
	              url.port = url.isSpecial() && port === specialSchemes[url.scheme] ? null : port;
	              buffer = '';
	            }
	            if (stateOverride) return;
	            state = PATH_START;
	            continue;
	          } else return INVALID_PORT;
	          break;
	        case FILE:
	          url.scheme = 'file';
	          if (chr === '/' || chr === '\\') state = FILE_SLASH;else if (base && base.scheme === 'file') {
	            switch (chr) {
	              case EOF:
	                url.host = base.host;
	                url.path = arraySlice(base.path);
	                url.query = base.query;
	                break;
	              case '?':
	                url.host = base.host;
	                url.path = arraySlice(base.path);
	                url.query = '';
	                state = QUERY;
	                break;
	              case '#':
	                url.host = base.host;
	                url.path = arraySlice(base.path);
	                url.query = base.query;
	                url.fragment = '';
	                state = FRAGMENT;
	                break;
	              default:
	                if (!startsWithWindowsDriveLetter(join(arraySlice(codePoints, pointer), ''))) {
	                  url.host = base.host;
	                  url.path = arraySlice(base.path);
	                  url.shortenPath();
	                }
	                state = PATH;
	                continue;
	            }
	          } else {
	            state = PATH;
	            continue;
	          }
	          break;
	        case FILE_SLASH:
	          if (chr === '/' || chr === '\\') {
	            state = FILE_HOST;
	            break;
	          }
	          if (base && base.scheme === 'file' && !startsWithWindowsDriveLetter(join(arraySlice(codePoints, pointer), ''))) {
	            if (isWindowsDriveLetter(base.path[0], true)) push(url.path, base.path[0]);else url.host = base.host;
	          }
	          state = PATH;
	          continue;
	        case FILE_HOST:
	          if (chr === EOF || chr === '/' || chr === '\\' || chr === '?' || chr === '#') {
	            if (!stateOverride && isWindowsDriveLetter(buffer)) {
	              state = PATH;
	            } else if (buffer === '') {
	              url.host = '';
	              if (stateOverride) return;
	              state = PATH_START;
	            } else {
	              failure = url.parseHost(buffer);
	              if (failure) return failure;
	              if (url.host === 'localhost') url.host = '';
	              if (stateOverride) return;
	              buffer = '';
	              state = PATH_START;
	            }
	            continue;
	          } else buffer += chr;
	          break;
	        case PATH_START:
	          if (url.isSpecial()) {
	            state = PATH;
	            if (chr !== '/' && chr !== '\\') continue;
	          } else if (!stateOverride && chr === '?') {
	            url.query = '';
	            state = QUERY;
	          } else if (!stateOverride && chr === '#') {
	            url.fragment = '';
	            state = FRAGMENT;
	          } else if (chr !== EOF) {
	            state = PATH;
	            if (chr !== '/') continue;
	          }
	          break;
	        case PATH:
	          if (chr === EOF || chr === '/' || chr === '\\' && url.isSpecial() || !stateOverride && (chr === '?' || chr === '#')) {
	            if (isDoubleDot(buffer)) {
	              url.shortenPath();
	              if (chr !== '/' && !(chr === '\\' && url.isSpecial())) {
	                push(url.path, '');
	              }
	            } else if (isSingleDot(buffer)) {
	              if (chr !== '/' && !(chr === '\\' && url.isSpecial())) {
	                push(url.path, '');
	              }
	            } else {
	              if (url.scheme === 'file' && !url.path.length && isWindowsDriveLetter(buffer)) {
	                if (url.host) url.host = '';
	                buffer = charAt(buffer, 0) + ':'; // normalize windows drive letter
	              }

	              push(url.path, buffer);
	            }
	            buffer = '';
	            if (url.scheme === 'file' && (chr === EOF || chr === '?' || chr === '#')) {
	              while (url.path.length > 1 && url.path[0] === '') {
	                shift(url.path);
	              }
	            }
	            if (chr === '?') {
	              url.query = '';
	              state = QUERY;
	            } else if (chr === '#') {
	              url.fragment = '';
	              state = FRAGMENT;
	            }
	          } else {
	            buffer += percentEncode(chr, pathPercentEncodeSet);
	          }
	          break;
	        case CANNOT_BE_A_BASE_URL_PATH:
	          if (chr === '?') {
	            url.query = '';
	            state = QUERY;
	          } else if (chr === '#') {
	            url.fragment = '';
	            state = FRAGMENT;
	          } else if (chr !== EOF) {
	            url.path[0] += percentEncode(chr, C0ControlPercentEncodeSet);
	          }
	          break;
	        case QUERY:
	          if (!stateOverride && chr === '#') {
	            url.fragment = '';
	            state = FRAGMENT;
	          } else if (chr !== EOF) {
	            if (chr === "'" && url.isSpecial()) url.query += '%27';else if (chr === '#') url.query += '%23';else url.query += percentEncode(chr, C0ControlPercentEncodeSet);
	          }
	          break;
	        case FRAGMENT:
	          if (chr !== EOF) url.fragment += percentEncode(chr, fragmentPercentEncodeSet);
	          break;
	      }
	      pointer++;
	    }
	  },
	  // https://url.spec.whatwg.org/#host-parsing
	  parseHost: function parseHost(input) {
	    var result, codePoints, index;
	    if (charAt(input, 0) === '[') {
	      if (charAt(input, input.length - 1) !== ']') return INVALID_HOST;
	      result = parseIPv6(stringSlice(input, 1, -1));
	      if (!result) return INVALID_HOST;
	      this.host = result;
	      // opaque host
	    } else if (!this.isSpecial()) {
	      if (exec(FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT, input)) return INVALID_HOST;
	      result = '';
	      codePoints = arrayFrom(input);
	      for (index = 0; index < codePoints.length; index++) {
	        result += percentEncode(codePoints[index], C0ControlPercentEncodeSet);
	      }
	      this.host = result;
	    } else {
	      input = toASCII(input);
	      if (exec(FORBIDDEN_HOST_CODE_POINT, input)) return INVALID_HOST;
	      result = parseIPv4(input);
	      if (result === null) return INVALID_HOST;
	      this.host = result;
	    }
	  },
	  // https://url.spec.whatwg.org/#cannot-have-a-username-password-port
	  cannotHaveUsernamePasswordPort: function cannotHaveUsernamePasswordPort() {
	    return !this.host || this.cannotBeABaseURL || this.scheme === 'file';
	  },
	  // https://url.spec.whatwg.org/#include-credentials
	  includesCredentials: function includesCredentials() {
	    return this.username !== '' || this.password !== '';
	  },
	  // https://url.spec.whatwg.org/#is-special
	  isSpecial: function isSpecial() {
	    return hasOwn(specialSchemes, this.scheme);
	  },
	  // https://url.spec.whatwg.org/#shorten-a-urls-path
	  shortenPath: function shortenPath() {
	    var path = this.path;
	    var pathSize = path.length;
	    if (pathSize && (this.scheme !== 'file' || pathSize !== 1 || !isWindowsDriveLetter(path[0], true))) {
	      path.length--;
	    }
	  },
	  // https://url.spec.whatwg.org/#concept-url-serializer
	  serialize: function serialize() {
	    var url = this;
	    var scheme = url.scheme;
	    var username = url.username;
	    var password = url.password;
	    var host = url.host;
	    var port = url.port;
	    var path = url.path;
	    var query = url.query;
	    var fragment = url.fragment;
	    var output = scheme + ':';
	    if (host !== null) {
	      output += '//';
	      if (url.includesCredentials()) {
	        output += username + (password ? ':' + password : '') + '@';
	      }
	      output += serializeHost(host);
	      if (port !== null) output += ':' + port;
	    } else if (scheme === 'file') output += '//';
	    output += url.cannotBeABaseURL ? path[0] : path.length ? '/' + join(path, '/') : '';
	    if (query !== null) output += '?' + query;
	    if (fragment !== null) output += '#' + fragment;
	    return output;
	  },
	  // https://url.spec.whatwg.org/#dom-url-href
	  setHref: function setHref(href) {
	    var failure = this.parse(href);
	    if (failure) throw new TypeError$1(failure);
	    this.searchParams.update();
	  },
	  // https://url.spec.whatwg.org/#dom-url-origin
	  getOrigin: function getOrigin() {
	    var scheme = this.scheme;
	    var port = this.port;
	    if (scheme === 'blob') try {
	      return new URLConstructor(scheme.path[0]).origin;
	    } catch (error) {
	      return 'null';
	    }
	    if (scheme === 'file' || !this.isSpecial()) return 'null';
	    return scheme + '://' + serializeHost(this.host) + (port !== null ? ':' + port : '');
	  },
	  // https://url.spec.whatwg.org/#dom-url-protocol
	  getProtocol: function getProtocol() {
	    return this.scheme + ':';
	  },
	  setProtocol: function setProtocol(protocol) {
	    this.parse($toString(protocol) + ':', SCHEME_START);
	  },
	  // https://url.spec.whatwg.org/#dom-url-username
	  getUsername: function getUsername() {
	    return this.username;
	  },
	  setUsername: function setUsername(username) {
	    var codePoints = arrayFrom($toString(username));
	    if (this.cannotHaveUsernamePasswordPort()) return;
	    this.username = '';
	    for (var i = 0; i < codePoints.length; i++) {
	      this.username += percentEncode(codePoints[i], userinfoPercentEncodeSet);
	    }
	  },
	  // https://url.spec.whatwg.org/#dom-url-password
	  getPassword: function getPassword() {
	    return this.password;
	  },
	  setPassword: function setPassword(password) {
	    var codePoints = arrayFrom($toString(password));
	    if (this.cannotHaveUsernamePasswordPort()) return;
	    this.password = '';
	    for (var i = 0; i < codePoints.length; i++) {
	      this.password += percentEncode(codePoints[i], userinfoPercentEncodeSet);
	    }
	  },
	  // https://url.spec.whatwg.org/#dom-url-host
	  getHost: function getHost() {
	    var host = this.host;
	    var port = this.port;
	    return host === null ? '' : port === null ? serializeHost(host) : serializeHost(host) + ':' + port;
	  },
	  setHost: function setHost(host) {
	    if (this.cannotBeABaseURL) return;
	    this.parse(host, HOST);
	  },
	  // https://url.spec.whatwg.org/#dom-url-hostname
	  getHostname: function getHostname() {
	    var host = this.host;
	    return host === null ? '' : serializeHost(host);
	  },
	  setHostname: function setHostname(hostname) {
	    if (this.cannotBeABaseURL) return;
	    this.parse(hostname, HOSTNAME);
	  },
	  // https://url.spec.whatwg.org/#dom-url-port
	  getPort: function getPort() {
	    var port = this.port;
	    return port === null ? '' : $toString(port);
	  },
	  setPort: function setPort(port) {
	    if (this.cannotHaveUsernamePasswordPort()) return;
	    port = $toString(port);
	    if (port === '') this.port = null;else this.parse(port, PORT);
	  },
	  // https://url.spec.whatwg.org/#dom-url-pathname
	  getPathname: function getPathname() {
	    var path = this.path;
	    return this.cannotBeABaseURL ? path[0] : path.length ? '/' + join(path, '/') : '';
	  },
	  setPathname: function setPathname(pathname) {
	    if (this.cannotBeABaseURL) return;
	    this.path = [];
	    this.parse(pathname, PATH_START);
	  },
	  // https://url.spec.whatwg.org/#dom-url-search
	  getSearch: function getSearch() {
	    var query = this.query;
	    return query ? '?' + query : '';
	  },
	  setSearch: function setSearch(search) {
	    search = $toString(search);
	    if (search === '') {
	      this.query = null;
	    } else {
	      if (charAt(search, 0) === '?') search = stringSlice(search, 1);
	      this.query = '';
	      this.parse(search, QUERY);
	    }
	    this.searchParams.update();
	  },
	  // https://url.spec.whatwg.org/#dom-url-searchparams
	  getSearchParams: function getSearchParams() {
	    return this.searchParams.facade;
	  },
	  // https://url.spec.whatwg.org/#dom-url-hash
	  getHash: function getHash() {
	    var fragment = this.fragment;
	    return fragment ? '#' + fragment : '';
	  },
	  setHash: function setHash(hash) {
	    hash = $toString(hash);
	    if (hash === '') {
	      this.fragment = null;
	      return;
	    }
	    if (charAt(hash, 0) === '#') hash = stringSlice(hash, 1);
	    this.fragment = '';
	    this.parse(hash, FRAGMENT);
	  },
	  update: function update() {
	    this.query = this.searchParams.serialize() || null;
	  }
	};

	// `URL` constructor
	// https://url.spec.whatwg.org/#url-class
	var URLConstructor = function URL(url /* , base */) {
	  var that = anInstance(this, URLPrototype);
	  var base = validateArgumentsLength(arguments.length, 1) > 1 ? arguments[1] : undefined;
	  var state = setInternalState(that, new URLState(url, false, base));
	  if (!DESCRIPTORS) {
	    that.href = state.serialize();
	    that.origin = state.getOrigin();
	    that.protocol = state.getProtocol();
	    that.username = state.getUsername();
	    that.password = state.getPassword();
	    that.host = state.getHost();
	    that.hostname = state.getHostname();
	    that.port = state.getPort();
	    that.pathname = state.getPathname();
	    that.search = state.getSearch();
	    that.searchParams = state.getSearchParams();
	    that.hash = state.getHash();
	  }
	};
	var URLPrototype = URLConstructor.prototype;
	var accessorDescriptor = function accessorDescriptor(getter, setter) {
	  return {
	    get: function get() {
	      return getInternalURLState(this)[getter]();
	    },
	    set: setter && function (value) {
	      return getInternalURLState(this)[setter](value);
	    },
	    configurable: true,
	    enumerable: true
	  };
	};
	if (DESCRIPTORS) {
	  // `URL.prototype.href` accessors pair
	  // https://url.spec.whatwg.org/#dom-url-href
	  defineBuiltInAccessor(URLPrototype, 'href', accessorDescriptor('serialize', 'setHref'));
	  // `URL.prototype.origin` getter
	  // https://url.spec.whatwg.org/#dom-url-origin
	  defineBuiltInAccessor(URLPrototype, 'origin', accessorDescriptor('getOrigin'));
	  // `URL.prototype.protocol` accessors pair
	  // https://url.spec.whatwg.org/#dom-url-protocol
	  defineBuiltInAccessor(URLPrototype, 'protocol', accessorDescriptor('getProtocol', 'setProtocol'));
	  // `URL.prototype.username` accessors pair
	  // https://url.spec.whatwg.org/#dom-url-username
	  defineBuiltInAccessor(URLPrototype, 'username', accessorDescriptor('getUsername', 'setUsername'));
	  // `URL.prototype.password` accessors pair
	  // https://url.spec.whatwg.org/#dom-url-password
	  defineBuiltInAccessor(URLPrototype, 'password', accessorDescriptor('getPassword', 'setPassword'));
	  // `URL.prototype.host` accessors pair
	  // https://url.spec.whatwg.org/#dom-url-host
	  defineBuiltInAccessor(URLPrototype, 'host', accessorDescriptor('getHost', 'setHost'));
	  // `URL.prototype.hostname` accessors pair
	  // https://url.spec.whatwg.org/#dom-url-hostname
	  defineBuiltInAccessor(URLPrototype, 'hostname', accessorDescriptor('getHostname', 'setHostname'));
	  // `URL.prototype.port` accessors pair
	  // https://url.spec.whatwg.org/#dom-url-port
	  defineBuiltInAccessor(URLPrototype, 'port', accessorDescriptor('getPort', 'setPort'));
	  // `URL.prototype.pathname` accessors pair
	  // https://url.spec.whatwg.org/#dom-url-pathname
	  defineBuiltInAccessor(URLPrototype, 'pathname', accessorDescriptor('getPathname', 'setPathname'));
	  // `URL.prototype.search` accessors pair
	  // https://url.spec.whatwg.org/#dom-url-search
	  defineBuiltInAccessor(URLPrototype, 'search', accessorDescriptor('getSearch', 'setSearch'));
	  // `URL.prototype.searchParams` getter
	  // https://url.spec.whatwg.org/#dom-url-searchparams
	  defineBuiltInAccessor(URLPrototype, 'searchParams', accessorDescriptor('getSearchParams'));
	  // `URL.prototype.hash` accessors pair
	  // https://url.spec.whatwg.org/#dom-url-hash
	  defineBuiltInAccessor(URLPrototype, 'hash', accessorDescriptor('getHash', 'setHash'));
	}

	// `URL.prototype.toJSON` method
	// https://url.spec.whatwg.org/#dom-url-tojson
	defineBuiltIn(URLPrototype, 'toJSON', function toJSON() {
	  return getInternalURLState(this).serialize();
	}, {
	  enumerable: true
	});

	// `URL.prototype.toString` method
	// https://url.spec.whatwg.org/#URL-stringification-behavior
	defineBuiltIn(URLPrototype, 'toString', function toString() {
	  return getInternalURLState(this).serialize();
	}, {
	  enumerable: true
	});
	if (NativeURL) {
	  var nativeCreateObjectURL = NativeURL.createObjectURL;
	  var nativeRevokeObjectURL = NativeURL.revokeObjectURL;
	  // `URL.createObjectURL` method
	  // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
	  if (nativeCreateObjectURL) defineBuiltIn(URLConstructor, 'createObjectURL', bind(nativeCreateObjectURL, NativeURL));
	  // `URL.revokeObjectURL` method
	  // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL
	  if (nativeRevokeObjectURL) defineBuiltIn(URLConstructor, 'revokeObjectURL', bind(nativeRevokeObjectURL, NativeURL));
	}
	setToStringTag(URLConstructor, 'URL');
	$$1({
	  global: true,
	  constructor: true,
	  forced: !USE_NATIVE_URL,
	  sham: !DESCRIPTORS
	}, {
	  URL: URLConstructor
	});

	var $ = _export;
	var call = functionCall;

	// `URL.prototype.toJSON` method
	// https://url.spec.whatwg.org/#dom-url-tojson
	$({
	  target: 'URL',
	  proto: true,
	  enumerable: true
	}, {
	  toJSON: function toJSON() {
	    return call(URL.prototype.toString, this);
	  }
	});

	function _iterableToArrayLimit(arr, i) {
	  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
	  if (null != _i) {
	    var _s,
	      _e,
	      _x,
	      _r,
	      _arr = [],
	      _n = !0,
	      _d = !1;
	    try {
	      if (_x = (_i = _i.call(arr)).next, 0 === i) {
	        if (Object(_i) !== _i) return;
	        _n = !1;
	      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
	    } catch (err) {
	      _d = !0, _e = err;
	    } finally {
	      try {
	        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
	      } finally {
	        if (_d) throw _e;
	      }
	    }
	    return _arr;
	  }
	}
	function ownKeys(object, enumerableOnly) {
	  var keys = Object.keys(object);
	  if (Object.getOwnPropertySymbols) {
	    var symbols = Object.getOwnPropertySymbols(object);
	    enumerableOnly && (symbols = symbols.filter(function (sym) {
	      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
	    })), keys.push.apply(keys, symbols);
	  }
	  return keys;
	}
	function _objectSpread2(target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = null != arguments[i] ? arguments[i] : {};
	    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
	      _defineProperty(target, key, source[key]);
	    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
	      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
	    });
	  }
	  return target;
	}
	function _regeneratorRuntime() {
	  _regeneratorRuntime = function () {
	    return exports;
	  };
	  var exports = {},
	    Op = Object.prototype,
	    hasOwn = Op.hasOwnProperty,
	    defineProperty = Object.defineProperty || function (obj, key, desc) {
	      obj[key] = desc.value;
	    },
	    $Symbol = "function" == typeof Symbol ? Symbol : {},
	    iteratorSymbol = $Symbol.iterator || "@@iterator",
	    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
	    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
	  function define(obj, key, value) {
	    return Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: !0,
	      configurable: !0,
	      writable: !0
	    }), obj[key];
	  }
	  try {
	    define({}, "");
	  } catch (err) {
	    define = function (obj, key, value) {
	      return obj[key] = value;
	    };
	  }
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
	      generator = Object.create(protoGenerator.prototype),
	      context = new Context(tryLocsList || []);
	    return defineProperty(generator, "_invoke", {
	      value: makeInvokeMethod(innerFn, self, context)
	    }), generator;
	  }
	  function tryCatch(fn, obj, arg) {
	    try {
	      return {
	        type: "normal",
	        arg: fn.call(obj, arg)
	      };
	    } catch (err) {
	      return {
	        type: "throw",
	        arg: err
	      };
	    }
	  }
	  exports.wrap = wrap;
	  var ContinueSentinel = {};
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	  var IteratorPrototype = {};
	  define(IteratorPrototype, iteratorSymbol, function () {
	    return this;
	  });
	  var getProto = Object.getPrototypeOf,
	    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function (method) {
	      define(prototype, method, function (arg) {
	        return this._invoke(method, arg);
	      });
	    });
	  }
	  function AsyncIterator(generator, PromiseImpl) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if ("throw" !== record.type) {
	        var result = record.arg,
	          value = result.value;
	        return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
	          invoke("next", value, resolve, reject);
	        }, function (err) {
	          invoke("throw", err, resolve, reject);
	        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
	          result.value = unwrapped, resolve(result);
	        }, function (error) {
	          return invoke("throw", error, resolve, reject);
	        });
	      }
	      reject(record.arg);
	    }
	    var previousPromise;
	    defineProperty(this, "_invoke", {
	      value: function (method, arg) {
	        function callInvokeWithMethodAndArg() {
	          return new PromiseImpl(function (resolve, reject) {
	            invoke(method, arg, resolve, reject);
	          });
	        }
	        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
	      }
	    });
	  }
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = "suspendedStart";
	    return function (method, arg) {
	      if ("executing" === state) throw new Error("Generator is already running");
	      if ("completed" === state) {
	        if ("throw" === method) throw arg;
	        return doneResult();
	      }
	      for (context.method = method, context.arg = arg;;) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }
	        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
	          if ("suspendedStart" === state) throw state = "completed", context.arg;
	          context.dispatchException(context.arg);
	        } else "return" === context.method && context.abrupt("return", context.arg);
	        state = "executing";
	        var record = tryCatch(innerFn, self, context);
	        if ("normal" === record.type) {
	          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
	          return {
	            value: record.arg,
	            done: context.done
	          };
	        }
	        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
	      }
	    };
	  }
	  function maybeInvokeDelegate(delegate, context) {
	    var methodName = context.method,
	      method = delegate.iterator[methodName];
	    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
	    var record = tryCatch(method, delegate.iterator, context.arg);
	    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
	    var info = record.arg;
	    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
	  }
	  function pushTryEntry(locs) {
	    var entry = {
	      tryLoc: locs[0]
	    };
	    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
	  }
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal", delete record.arg, entry.completion = record;
	  }
	  function Context(tryLocsList) {
	    this.tryEntries = [{
	      tryLoc: "root"
	    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
	  }
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) return iteratorMethod.call(iterable);
	      if ("function" == typeof iterable.next) return iterable;
	      if (!isNaN(iterable.length)) {
	        var i = -1,
	          next = function next() {
	            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
	            return next.value = undefined, next.done = !0, next;
	          };
	        return next.next = next;
	      }
	    }
	    return {
	      next: doneResult
	    };
	  }
	  function doneResult() {
	    return {
	      value: undefined,
	      done: !0
	    };
	  }
	  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
	    value: GeneratorFunctionPrototype,
	    configurable: !0
	  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
	    value: GeneratorFunction,
	    configurable: !0
	  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
	    var ctor = "function" == typeof genFun && genFun.constructor;
	    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
	  }, exports.mark = function (genFun) {
	    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
	  }, exports.awrap = function (arg) {
	    return {
	      __await: arg
	    };
	  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
	    return this;
	  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
	    void 0 === PromiseImpl && (PromiseImpl = Promise);
	    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
	    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
	      return result.done ? result.value : iter.next();
	    });
	  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
	    return this;
	  }), define(Gp, "toString", function () {
	    return "[object Generator]";
	  }), exports.keys = function (val) {
	    var object = Object(val),
	      keys = [];
	    for (var key in object) keys.push(key);
	    return keys.reverse(), function next() {
	      for (; keys.length;) {
	        var key = keys.pop();
	        if (key in object) return next.value = key, next.done = !1, next;
	      }
	      return next.done = !0, next;
	    };
	  }, exports.values = values, Context.prototype = {
	    constructor: Context,
	    reset: function (skipTempReset) {
	      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
	    },
	    stop: function () {
	      this.done = !0;
	      var rootRecord = this.tryEntries[0].completion;
	      if ("throw" === rootRecord.type) throw rootRecord.arg;
	      return this.rval;
	    },
	    dispatchException: function (exception) {
	      if (this.done) throw exception;
	      var context = this;
	      function handle(loc, caught) {
	        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
	      }
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i],
	          record = entry.completion;
	        if ("root" === entry.tryLoc) return handle("end");
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc"),
	            hasFinally = hasOwn.call(entry, "finallyLoc");
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
	            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
	          } else {
	            if (!hasFinally) throw new Error("try statement without catch or finally");
	            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
	          }
	        }
	      }
	    },
	    abrupt: function (type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
	      var record = finallyEntry ? finallyEntry.completion : {};
	      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
	    },
	    complete: function (record, afterLoc) {
	      if ("throw" === record.type) throw record.arg;
	      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
	    },
	    finish: function (finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
	      }
	    },
	    catch: function (tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if ("throw" === record.type) {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	      throw new Error("illegal catch attempt");
	    },
	    delegateYield: function (iterable, resultName, nextLoc) {
	      return this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
	    }
	  }, exports;
	}
	function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
	  try {
	    var info = gen[key](arg);
	    var value = info.value;
	  } catch (error) {
	    reject(error);
	    return;
	  }
	  if (info.done) {
	    resolve(value);
	  } else {
	    Promise.resolve(value).then(_next, _throw);
	  }
	}
	function _asyncToGenerator(fn) {
	  return function () {
	    var self = this,
	      args = arguments;
	    return new Promise(function (resolve, reject) {
	      var gen = fn.apply(self, args);
	      function _next(value) {
	        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
	      }
	      function _throw(err) {
	        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
	      }
	      _next(undefined);
	    });
	  };
	}
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
	  }
	}
	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  Object.defineProperty(Constructor, "prototype", {
	    writable: false
	  });
	  return Constructor;
	}
	function _defineProperty(obj, key, value) {
	  key = _toPropertyKey(key);
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	  return obj;
	}
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function");
	  }
	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      writable: true,
	      configurable: true
	    }
	  });
	  Object.defineProperty(subClass, "prototype", {
	    writable: false
	  });
	  if (superClass) _setPrototypeOf(subClass, superClass);
	}
	function _getPrototypeOf(o) {
	  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
	    return o.__proto__ || Object.getPrototypeOf(o);
	  };
	  return _getPrototypeOf(o);
	}
	function _setPrototypeOf(o, p) {
	  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  };
	  return _setPrototypeOf(o, p);
	}
	function _isNativeReflectConstruct() {
	  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
	  if (Reflect.construct.sham) return false;
	  if (typeof Proxy === "function") return true;
	  try {
	    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
	    return true;
	  } catch (e) {
	    return false;
	  }
	}
	function _construct(Parent, args, Class) {
	  if (_isNativeReflectConstruct()) {
	    _construct = Reflect.construct.bind();
	  } else {
	    _construct = function _construct(Parent, args, Class) {
	      var a = [null];
	      a.push.apply(a, args);
	      var Constructor = Function.bind.apply(Parent, a);
	      var instance = new Constructor();
	      if (Class) _setPrototypeOf(instance, Class.prototype);
	      return instance;
	    };
	  }
	  return _construct.apply(null, arguments);
	}
	function _isNativeFunction(fn) {
	  return Function.toString.call(fn).indexOf("[native code]") !== -1;
	}
	function _wrapNativeSuper(Class) {
	  var _cache = typeof Map === "function" ? new Map() : undefined;
	  _wrapNativeSuper = function _wrapNativeSuper(Class) {
	    if (Class === null || !_isNativeFunction(Class)) return Class;
	    if (typeof Class !== "function") {
	      throw new TypeError("Super expression must either be null or a function");
	    }
	    if (typeof _cache !== "undefined") {
	      if (_cache.has(Class)) return _cache.get(Class);
	      _cache.set(Class, Wrapper);
	    }
	    function Wrapper() {
	      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
	    }
	    Wrapper.prototype = Object.create(Class.prototype, {
	      constructor: {
	        value: Wrapper,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	    return _setPrototypeOf(Wrapper, Class);
	  };
	  return _wrapNativeSuper(Class);
	}
	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	  return self;
	}
	function _possibleConstructorReturn(self, call) {
	  if (call && (typeof call === "object" || typeof call === "function")) {
	    return call;
	  } else if (call !== void 0) {
	    throw new TypeError("Derived constructors may only return object or undefined");
	  }
	  return _assertThisInitialized(self);
	}
	function _createSuper(Derived) {
	  var hasNativeReflectConstruct = _isNativeReflectConstruct();
	  return function _createSuperInternal() {
	    var Super = _getPrototypeOf(Derived),
	      result;
	    if (hasNativeReflectConstruct) {
	      var NewTarget = _getPrototypeOf(this).constructor;
	      result = Reflect.construct(Super, arguments, NewTarget);
	    } else {
	      result = Super.apply(this, arguments);
	    }
	    return _possibleConstructorReturn(this, result);
	  };
	}
	function _superPropBase(object, property) {
	  while (!Object.prototype.hasOwnProperty.call(object, property)) {
	    object = _getPrototypeOf(object);
	    if (object === null) break;
	  }
	  return object;
	}
	function _get() {
	  if (typeof Reflect !== "undefined" && Reflect.get) {
	    _get = Reflect.get.bind();
	  } else {
	    _get = function _get(target, property, receiver) {
	      var base = _superPropBase(target, property);
	      if (!base) return;
	      var desc = Object.getOwnPropertyDescriptor(base, property);
	      if (desc.get) {
	        return desc.get.call(arguments.length < 3 ? target : receiver);
	      }
	      return desc.value;
	    };
	  }
	  return _get.apply(this, arguments);
	}
	function _slicedToArray(arr, i) {
	  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
	}
	function _toConsumableArray(arr) {
	  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
	}
	function _arrayWithoutHoles(arr) {
	  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
	}
	function _arrayWithHoles(arr) {
	  if (Array.isArray(arr)) return arr;
	}
	function _iterableToArray(iter) {
	  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
	}
	function _unsupportedIterableToArray(o, minLen) {
	  if (!o) return;
	  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
	  var n = Object.prototype.toString.call(o).slice(8, -1);
	  if (n === "Object" && o.constructor) n = o.constructor.name;
	  if (n === "Map" || n === "Set") return Array.from(o);
	  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
	}
	function _arrayLikeToArray(arr, len) {
	  if (len == null || len > arr.length) len = arr.length;
	  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
	  return arr2;
	}
	function _nonIterableSpread() {
	  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}
	function _nonIterableRest() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}
	function _createForOfIteratorHelper(o, allowArrayLike) {
	  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
	  if (!it) {
	    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
	      if (it) o = it;
	      var i = 0;
	      var F = function () {};
	      return {
	        s: F,
	        n: function () {
	          if (i >= o.length) return {
	            done: true
	          };
	          return {
	            done: false,
	            value: o[i++]
	          };
	        },
	        e: function (e) {
	          throw e;
	        },
	        f: F
	      };
	    }
	    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	  }
	  var normalCompletion = true,
	    didErr = false,
	    err;
	  return {
	    s: function () {
	      it = it.call(o);
	    },
	    n: function () {
	      var step = it.next();
	      normalCompletion = step.done;
	      return step;
	    },
	    e: function (e) {
	      didErr = true;
	      err = e;
	    },
	    f: function () {
	      try {
	        if (!normalCompletion && it.return != null) it.return();
	      } finally {
	        if (didErr) throw err;
	      }
	    }
	  };
	}
	function _toPrimitive(input, hint) {
	  if (typeof input !== "object" || input === null) return input;
	  var prim = input[Symbol.toPrimitive];
	  if (prim !== undefined) {
	    var res = prim.call(input, hint || "default");
	    if (typeof res !== "object") return res;
	    throw new TypeError("@@toPrimitive must return a primitive value.");
	  }
	  return (hint === "string" ? String : Number)(input);
	}
	function _toPropertyKey(arg) {
	  var key = _toPrimitive(arg, "string");
	  return typeof key === "symbol" ? key : String(key);
	}

	/*
	 * If not stated otherwise in this file or this component's LICENSE file the
	 * following copyright and licenses apply:
	 *
	 * Copyright 2020 Metrological
	 *
	 * Licensed under the Apache License, Version 2.0 (the License);
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	var settings = {};
	var subscribers = {};
	var initSettings = function initSettings(appSettings, platformSettings) {
	  settings['app'] = appSettings;
	  settings['platform'] = platformSettings;
	  settings['user'] = {};
	};
	var publish = function publish(key, value) {
	  subscribers[key] && subscribers[key].forEach(function (subscriber) {
	    return subscriber(value);
	  });
	};
	var dotGrab = function dotGrab() {
	  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var key = arguments.length > 1 ? arguments[1] : undefined;
	  if (obj === null) return undefined;
	  var keys = key.split('.');
	  for (var i = 0; i < keys.length; i++) {
	    obj = obj[keys[i]] = obj[keys[i]] !== undefined ? obj[keys[i]] : {};
	  }
	  return typeof obj === 'object' && obj !== null ? Object.keys(obj).length ? obj : undefined : obj;
	};
	var Settings$1 = {
	  get: function get(type, key) {
	    var fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
	    var val = dotGrab(settings[type], key);
	    return val !== undefined ? val : fallback;
	  },
	  has: function has(type, key) {
	    return !!this.get(type, key);
	  },
	  set: function set(key, value) {
	    settings['user'][key] = value;
	    publish(key, value);
	  },
	  subscribe: function subscribe(key, callback) {
	    subscribers[key] = subscribers[key] || [];
	    subscribers[key].push(callback);
	  },
	  unsubscribe: function unsubscribe(key, callback) {
	    if (callback) {
	      var index = subscribers[key] && subscribers[key].findIndex(function (cb) {
	        return cb === callback;
	      });
	      index > -1 && subscribers[key].splice(index, 1);
	    } else {
	      if (key in subscribers) {
	        subscribers[key] = [];
	      }
	    }
	  },
	  clearSubscribers: function clearSubscribers() {
	    var _iterator = _createForOfIteratorHelper(Object.getOwnPropertyNames(subscribers)),
	      _step;
	    try {
	      for (_iterator.s(); !(_step = _iterator.n()).done;) {
	        var key = _step.value;
	        delete subscribers[key];
	      }
	    } catch (err) {
	      _iterator.e(err);
	    } finally {
	      _iterator.f();
	    }
	  }
	};

	/*
	 * If not stated otherwise in this file or this component's LICENSE file the
	 * following copyright and licenses apply:
	 *
	 * Copyright 2020 Metrological
	 *
	 * Licensed under the Apache License, Version 2.0 (the License);
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	var prepLog = function prepLog(type, args) {
	  var colors = {
	    Info: 'green',
	    Debug: 'gray',
	    Warn: 'orange',
	    Error: 'red'
	  };
	  args = Array.from(args);
	  return ['%c' + (args.length > 1 && typeof args[0] === 'string' ? args.shift() : type), 'background-color: ' + colors[type] + '; color: white; padding: 2px 4px; border-radius: 2px', args];
	};
	var Log$1 = {
	  info: function info() {
	    Settings$1.get('platform', 'log') && console.log.apply(console, prepLog('Info', arguments));
	  },
	  debug: function debug() {
	    Settings$1.get('platform', 'log') && console.debug.apply(console, prepLog('Debug', arguments));
	  },
	  error: function error() {
	    Settings$1.get('platform', 'log') && console.error.apply(console, prepLog('Error', arguments));
	  },
	  warn: function warn() {
	    Settings$1.get('platform', 'log') && console.warn.apply(console, prepLog('Warn', arguments));
	  }
	};

	/*
	 * If not stated otherwise in this file or this component's LICENSE file the
	 * following copyright and licenses apply:
	 *
	 * Copyright 2020 Metrological
	 *
	 * Licensed under the Apache License, Version 2.0 (the License);
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	var Lightning$1 = window.lng;

	/*
	 * If not stated otherwise in this file or this component's LICENSE file the
	 * following copyright and licenses apply:
	 *
	 * Copyright 2020 Metrological
	 *
	 * Licensed under the Apache License, Version 2.0 (the License);
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	var ColorShift = /*#__PURE__*/function (_Lightning$shaders$We) {
	  _inherits(ColorShift, _Lightning$shaders$We);
	  var _super = _createSuper(ColorShift);
	  function ColorShift() {
	    _classCallCheck(this, ColorShift);
	    return _super.apply(this, arguments);
	  }
	  _createClass(ColorShift, [{
	    key: "brightness",
	    set: function set(v) {
	      this._brightness = (v - 50) / 100;
	      this.redraw();
	    }
	  }, {
	    key: "contrast",
	    set: function set(v) {
	      this._contrast = (v + 50) / 100;
	      this.redraw();
	    }
	  }, {
	    key: "gamma",
	    set: function set(v) {
	      this._gamma = (v + 50) / 100;
	      this.redraw();
	    }
	  }, {
	    key: "setupUniforms",
	    value: function setupUniforms(operation) {
	      _get(_getPrototypeOf(ColorShift.prototype), "setupUniforms", this).call(this, operation);
	      var gl = this.gl;
	      this._setUniform('colorAdjust', [this._brightness || 0.0, this._contrast || 1.0, this._gamma || 1.0], gl.uniform3fv);
	    }
	  }]);
	  return ColorShift;
	}(Lightning$1.shaders.WebGLDefaultShader);
	ColorShift.before = "\n    #ifdef GL_ES\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision lowp float;\n    # endif\n    #endif\n        \n    varying vec2 vTextureCoord;\n    varying vec4 vColor;\n    uniform sampler2D uSampler;\n    uniform vec3 colorAdjust;\n    \n    const mat3 RGBtoOpponentMat = mat3(0.2814, -0.0971, -0.0930, 0.6938, 0.1458,-0.2529, 0.0638, -0.0250, 0.4665);\n    const mat3 OpponentToRGBMat = mat3(1.1677, 0.9014, 0.7214, -6.4315, 2.5970, 0.1257, -0.5044, 0.0159, 2.0517);    \n";
	ColorShift.after = "    \n    vec3 brightnessContrast(vec3 value, float brightness, float contrast)\n    {\n        return (value - 0.5) * contrast + 0.5 + brightness;\n    }   \n    \n    vec3 updateGamma(vec3 value, float param)\n    {\n        return vec3(pow(abs(value.r), param),pow(abs(value.g), param),pow(abs(value.b), param));\n    } \n       \n    void main(void){\n        vec4 fragColor = texture2D(uSampler, vTextureCoord);        \n        vec4 color = filter(fragColor) * vColor;       \n        \n        vec3 bc = brightnessContrast(color.rgb,colorAdjust[0],colorAdjust[1]);        \n        vec3 ga = updateGamma(bc.rgb, colorAdjust[2]);  \n              \n        gl_FragColor = vec4(ga.rgb, color.a);          \n    }    \n";

	var ProtanopiaShader = /*#__PURE__*/function (_ColorShift) {
	  _inherits(ProtanopiaShader, _ColorShift);
	  var _super = _createSuper(ProtanopiaShader);
	  function ProtanopiaShader() {
	    _classCallCheck(this, ProtanopiaShader);
	    return _super.apply(this, arguments);
	  }
	  return _createClass(ProtanopiaShader);
	}(ColorShift);
	ProtanopiaShader.fragmentShaderSource = "\n    ".concat(ColorShift.before, "    \n    vec4 vision(vec4 color)\n    {\n        vec4 r = vec4( 0.20,  0.99, -0.19, 0.0);\n        vec4 g = vec4( 0.16,  0.79,  0.04, 0.0);\n        vec4 b = vec4( 0.01, -0.01,  1.00, 0.0);\n       \n        return vec4(dot(color, r), dot(color, g), dot(color, b), color.a);\t\n    }\n    \n    vec4 filter( vec4 color )\n    {   \n        vec3 opponentColor = RGBtoOpponentMat * vec3(color.r, color.g, color.b);\n        opponentColor.x -= opponentColor.y * 1.5; \n        vec3 rgbColor = OpponentToRGBMat * opponentColor;\n        return vision(vec4(rgbColor.r, rgbColor.g, rgbColor.b, color.a));      \n    }    \n    ").concat(ColorShift.after, " \n");

	var DeuteranopiaShader = /*#__PURE__*/function (_ColorShift) {
	  _inherits(DeuteranopiaShader, _ColorShift);
	  var _super = _createSuper(DeuteranopiaShader);
	  function DeuteranopiaShader() {
	    _classCallCheck(this, DeuteranopiaShader);
	    return _super.apply(this, arguments);
	  }
	  return _createClass(DeuteranopiaShader);
	}(ColorShift);
	DeuteranopiaShader.fragmentShaderSource = "\n    ".concat(ColorShift.before, "\n    vec4 vision(vec4 color)\n    {\n        vec4 r = vec4( 0.43,  0.72, -0.15, 0.0 );\n        vec4 g = vec4( 0.34,  0.57,  0.09, 0.0 );\n        vec4 b = vec4(-0.02,  0.03,  1.00, 0.0 );\n       \n        return vec4(dot(color, r), dot(color, g), dot(color, b), color.a);\t\n    }\n       \n    vec4 filter( vec4 color )\n    {   \n        vec3 opponentColor = RGBtoOpponentMat * vec3(color.r, color.g, color.b);\n        opponentColor.x -= opponentColor.y * 1.5; \n        vec3 rgbColor = OpponentToRGBMat * opponentColor;\n        return vision(vec4(rgbColor.r, rgbColor.g, rgbColor.b, color.a));    \n    }\n    ").concat(ColorShift.after, "    \n");

	var TritanopiaShader = /*#__PURE__*/function (_ColorShift) {
	  _inherits(TritanopiaShader, _ColorShift);
	  var _super = _createSuper(TritanopiaShader);
	  function TritanopiaShader() {
	    _classCallCheck(this, TritanopiaShader);
	    return _super.apply(this, arguments);
	  }
	  return _createClass(TritanopiaShader);
	}(ColorShift);
	TritanopiaShader.fragmentShaderSource = "\n    ".concat(ColorShift.before, "    \n    vec4 vision(vec4 color)\n    {\n        vec4 r = vec4( 0.97,  0.11, -0.08, 0.0 );\n        vec4 g = vec4( 0.02,  0.82,  0.16, 0.0 );\n        vec4 b = vec4(-0.06,  0.88,  0.18, 0.0 );\n       \n        return vec4(dot(color, r), dot(color, g), dot(color, b), color.a);\t\n    }   \n    \n    vec4 filter( vec4 color )\n    {   \n        vec3 opponentColor = RGBtoOpponentMat * vec3(color.r, color.g, color.b);\n        opponentColor.x -= ((3.0 * opponentColor.z) - opponentColor.y) * 0.25;\n        vec3 rgbColor = OpponentToRGBMat * opponentColor;\n        return vision(vec4(rgbColor.r, rgbColor.g, rgbColor.b, color.a));\n    }   \n    ").concat(ColorShift.after, " \n");

	var NeutralShader = /*#__PURE__*/function (_ColorShift) {
	  _inherits(NeutralShader, _ColorShift);
	  var _super = _createSuper(NeutralShader);
	  function NeutralShader() {
	    _classCallCheck(this, NeutralShader);
	    return _super.apply(this, arguments);
	  }
	  return _createClass(NeutralShader);
	}(ColorShift);
	NeutralShader.fragmentShaderSource = "\n    ".concat(ColorShift.before, "\n    vec4 filter( vec4 color )\n    {\n        return color;\n    }\n    ").concat(ColorShift.after, "\n");

	var MonochromacyShader = /*#__PURE__*/function (_ColorShift) {
	  _inherits(MonochromacyShader, _ColorShift);
	  var _super = _createSuper(MonochromacyShader);
	  function MonochromacyShader() {
	    _classCallCheck(this, MonochromacyShader);
	    return _super.apply(this, arguments);
	  }
	  return _createClass(MonochromacyShader);
	}(ColorShift);
	MonochromacyShader.fragmentShaderSource = "\n    ".concat(ColorShift.before, "\n    vec4 filter( vec4 color )\n    {   \n        float grey = dot(color.rgb, vec3(0.299, 0.587, 0.114));\n        return vec4(vec3(grey, grey, grey), 1.0 ); \n    }\n    ").concat(ColorShift.after, "\n");

	/*
	 * If not stated otherwise in this file or this component's LICENSE file the
	 * following copyright and licenses apply:
	 *
	 * Copyright 2020 Metrological
	 *
	 * Licensed under the Apache License, Version 2.0 (the License);
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	var colorshiftShader = function colorshiftShader(type) {
	  var shadersMap = {
	    normal: NeutralShader,
	    monochromacy: MonochromacyShader,
	    deuteranopia: DeuteranopiaShader,
	    tritanopia: TritanopiaShader,
	    protanopia: ProtanopiaShader
	  };
	  type = typeof type === 'string' && type.toLowerCase() || null;
	  return Object.keys(shadersMap).indexOf(type) > -1 ? shadersMap[type] : false;
	};

	var Accessibility = {
	  colorshift: function colorshift(component) {
	    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	    var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
	      brightness: 50,
	      contrast: 50,
	      gamma: 50
	    };
	    config = _objectSpread2(_objectSpread2({}, {
	      brightness: 50,
	      contrast: 50,
	      gamma: 50
	    }), config);
	    var shader = type && colorshiftShader(type);
	    if (shader) {
	      Log$1.info('Accessibility Colorshift', type, config);
	      component.rtt = true;
	      component.shader = _objectSpread2({
	        type: shader
	      }, config);
	    } else {
	      Log$1.info('Accessibility Colorshift', 'Disabled');
	      component.rtt = false;
	      component.shader = null;
	    }
	  }
	};

	/*
	 * If not stated otherwise in this file or this component's LICENSE file the
	 * following copyright and licenses apply:
	 *
	 * Copyright 2020 Metrological
	 *
	 * Licensed under the Apache License, Version 2.0 (the License);
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	var Log;
	var Settings;
	var ApplicationInstance$1;
	var Ads$1;
	var Lightning;
	var initLightningSdkPlugin = {
	  set log(v) {
	    Log = v;
	  },
	  set settings(v) {
	    Settings = v;
	  },
	  set ads(v) {
	    Ads$1 = v;
	  },
	  set lightning(v) {
	    Lightning = v;
	  },
	  set appInstance(v) {
	    ApplicationInstance$1 = v;
	  }
	};

	var initMetrics = function initMetrics(config) {
	  sendMetric = config.sendMetric;
	};
	var sendMetric = function sendMetric(type, event, params) {
	  Log.info('Sending metric', type, event, params);
	};

	// available metric per category
	var metrics$1 = {
	  app: ['launch', 'loaded', 'ready', 'close'],
	  page: ['view', 'leave'],
	  user: ['click', 'input'],
	  media: ['abort', 'canplay', 'ended', 'pause', 'play',
	  // with some videos there occur almost constant suspend events ... should investigate
	  // 'suspend',
	  'volumechange', 'waiting', 'seeking', 'seeked']
	};

	// error metric function (added to each category)
	var errorMetric = function errorMetric(type, message, code, visible) {
	  var params = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
	  params = _objectSpread2({
	    params: params
	  }, {
	    message: message,
	    code: code,
	    visible: visible
	  });
	  sendMetric(type, 'error', params);
	};
	var Metric = function Metric(type, events) {
	  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  return events.reduce(function (obj, event) {
	    obj[event] = function (name) {
	      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      params = _objectSpread2(_objectSpread2(_objectSpread2({}, options), name ? {
	        name: name
	      } : {}), params);
	      sendMetric(type, event, params);
	    };
	    return obj;
	  }, {
	    error: function error(message, code, params) {
	      errorMetric(type, message, code, params);
	    },
	    event: function event(name, params) {
	      sendMetric(type, name, params);
	    }
	  });
	};
	var Metrics = function Metrics(types) {
	  return Object.keys(types).reduce(function (obj, type) {
	    // media metric works a bit different!
	    // it's a function that accepts a url and returns an object with the available metrics
	    // url is automatically passed as a param in every metric
	    type === 'media' ? obj[type] = function (url) {
	      return Metric(type, types[type], {
	        url: url
	      });
	    } : obj[type] = Metric(type, types[type]);
	    return obj;
	  }, {
	    error: errorMetric,
	    event: sendMetric
	  });
	};
	var Metrics$1 = Metrics(metrics$1);

	/*
	 * If not stated otherwise in this file or this component's LICENSE file the
	 * following copyright and licenses apply:
	 *
	 * Copyright 2020 Metrological
	 *
	 * Licensed under the Apache License, Version 2.0 (the License);
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	var formatLocale = function formatLocale(locale) {
	  if (locale && locale.length === 2) {
	    return "".concat(locale.toLowerCase(), "-").concat(locale.toUpperCase());
	  } else {
	    return locale;
	  }
	};
	var getLocale = function getLocale(defaultValue) {
	  if ('language' in navigator) {
	    var locale = formatLocale(navigator.language);
	    return Promise.resolve(locale);
	  } else {
	    return Promise.resolve(defaultValue);
	  }
	};
	var getLanguage = function getLanguage(defaultValue) {
	  if ('language' in navigator) {
	    var language = formatLocale(navigator.language).slice(0, 2);
	    return Promise.resolve(language);
	  } else {
	    return Promise.resolve(defaultValue);
	  }
	};
	var getCountryCode = function getCountryCode(defaultValue) {
	  if ('language' in navigator) {
	    var countryCode = formatLocale(navigator.language).slice(3, 5);
	    return Promise.resolve(countryCode);
	  } else {
	    return Promise.resolve(defaultValue);
	  }
	};
	var hasOrAskForGeoLocationPermission = function hasOrAskForGeoLocationPermission() {
	  return new Promise(function (resolve) {
	    // force to prompt for location permission
	    if (Settings.get('platform', 'forceBrowserGeolocation') === true) resolve(true);
	    if ('permissions' in navigator && typeof navigator.permissions.query === 'function') {
	      navigator.permissions.query({
	        name: 'geolocation'
	      }).then(function (status) {
	        resolve(status.state === 'granted' || status.status === 'granted');
	      });
	    } else {
	      resolve(false);
	    }
	  });
	};
	var getLatLon = function getLatLon(defaultValue) {
	  return new Promise(function (resolve) {
	    hasOrAskForGeoLocationPermission().then(function (granted) {
	      if (granted === true) {
	        if ('geolocation' in navigator) {
	          navigator.geolocation.getCurrentPosition(
	          // success
	          function (result) {
	            return result && result.coords && resolve([result.coords.latitude, result.coords.longitude]);
	          },
	          // error
	          function () {
	            return resolve(defaultValue);
	          },
	          // options
	          {
	            enableHighAccuracy: true,
	            timeout: 5000,
	            maximumAge: 0
	          });
	        } else {
	          return queryForLatLon().then(function (result) {
	            return resolve(result || defaultValue);
	          });
	        }
	      } else {
	        return queryForLatLon().then(function (result) {
	          return resolve(result || defaultValue);
	        });
	      }
	    });
	  });
	};
	var queryForLatLon = function queryForLatLon() {
	  return new Promise(function (resolve) {
	    fetch('https://geolocation-db.com/json/').then(function (response) {
	      return response.json();
	    }).then(function (_ref) {
	      var latitude = _ref.latitude,
	        longitude = _ref.longitude;
	      return latitude && longitude ? resolve([latitude, longitude]) : resolve(false);
	    }).catch(function () {
	      return resolve(false);
	    });
	  });
	};

	/*
	 * If not stated otherwise in this file or this component's LICENSE file the
	 * following copyright and licenses apply:
	 *
	 * Copyright 2020 Metrological
	 *
	 * Licensed under the Apache License, Version 2.0 (the License);
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	var defaultProfile = {
	  ageRating: 'adult',
	  city: 'New York',
	  zipCode: '27505',
	  countryCode: function countryCode() {
	    return getCountryCode('US');
	  },
	  ip: '127.0.0.1',
	  household: 'b2244e9d4c04826ccd5a7b2c2a50e7d4',
	  language: function language() {
	    return getLanguage('en');
	  },
	  latlon: function latlon() {
	    return getLatLon([40.7128, 74.006]);
	  },
	  locale: function locale() {
	    return getLocale('en-US');
	  },
	  mac: '00:00:00:00:00:00',
	  operator: 'metrological',
	  platform: 'metrological',
	  packages: [],
	  uid: 'ee6723b8-7ab3-462c-8d93-dbf61227998e',
	  stbType: 'metrological'
	};

	var getInfo = function getInfo(key) {
	  var profile = _objectSpread2(_objectSpread2({}, defaultProfile), Settings.get('platform', 'profile'));
	  return Promise.resolve(typeof profile[key] === 'function' ? profile[key]() : profile[key]);
	};
	var setInfo = function setInfo(key, params) {
	  if (key in defaultProfile) return defaultProfile[key] = params;
	};
	var initProfile = function initProfile(config) {
	  getInfo = config.getInfo ? config.getInfo : getInfo;
	  setInfo = config.setInfo ? config.setInfo : setInfo;
	};

	var initPurchase = function initPurchase(config) {
	  if (config.billingUrl) config.billingUrl;
	};

	/*
	 * If not stated otherwise in this file or this component's LICENSE file the
	 * following copyright and licenses apply:
	 *
	 * Copyright 2020 Metrological
	 *
	 * Licensed under the Apache License, Version 2.0 (the License);
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	var defaultChannels = [{
	  number: 1,
	  name: 'Metro News 1',
	  description: 'New York Cable News Channel',
	  entitled: true,
	  program: {
	    title: 'The Morning Show',
	    description: "New York's best morning show",
	    startTime: new Date(new Date() - 60 * 5 * 1000).toUTCString(),
	    // started 5 minutes ago
	    duration: 60 * 30,
	    // 30 minutes
	    ageRating: 0
	  }
	}, {
	  number: 2,
	  name: 'MTV',
	  description: 'Music Television',
	  entitled: true,
	  program: {
	    title: 'Beavis and Butthead',
	    description: 'American adult animated sitcom created by Mike Judge',
	    startTime: new Date(new Date() - 60 * 20 * 1000).toUTCString(),
	    // started 20 minutes ago
	    duration: 60 * 45,
	    // 45 minutes
	    ageRating: 18
	  }
	}, {
	  number: 3,
	  name: 'NBC',
	  description: 'NBC TV Network',
	  entitled: false,
	  program: {
	    title: 'The Tonight Show Starring Jimmy Fallon',
	    description: 'Late-night talk show hosted by Jimmy Fallon on NBC',
	    startTime: new Date(new Date() - 60 * 10 * 1000).toUTCString(),
	    // started 10 minutes ago
	    duration: 60 * 60,
	    // 1 hour
	    ageRating: 10
	  }
	}];
	var channels = function channels() {
	  return Settings.get('platform', 'tv', defaultChannels);
	};
	var randomChannel = function randomChannel() {
	  return channels()[~~(channels.length * Math.random())];
	};

	var currentChannel;
	var callbacks = {};
	var emit$1 = function emit(event) {
	  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    args[_key - 1] = arguments[_key];
	  }
	  callbacks[event] && callbacks[event].forEach(function (cb) {
	    cb.apply(null, args);
	  });
	};

	// local mock methods
	var methods = {
	  getChannel: function getChannel() {
	    if (!currentChannel) currentChannel = randomChannel();
	    return new Promise(function (resolve, reject) {
	      if (currentChannel) {
	        var channel = _objectSpread2({}, currentChannel);
	        delete channel.program;
	        resolve(channel);
	      } else {
	        reject('No channel found');
	      }
	    });
	  },
	  getProgram: function getProgram() {
	    if (!currentChannel) currentChannel = randomChannel();
	    return new Promise(function (resolve, reject) {
	      currentChannel.program ? resolve(currentChannel.program) : reject('No program found');
	    });
	  },
	  setChannel: function setChannel(number) {
	    return new Promise(function (resolve, reject) {
	      if (number) {
	        var newChannel = channels().find(function (c) {
	          return c.number === number;
	        });
	        if (newChannel) {
	          currentChannel = newChannel;
	          var channel = _objectSpread2({}, currentChannel);
	          delete channel.program;
	          emit$1('channelChange', channel);
	          resolve(channel);
	        } else {
	          reject('Channel not found');
	        }
	      } else {
	        reject('No channel number supplied');
	      }
	    });
	  }
	};
	var initTV = function initTV(config) {
	  methods = {};
	  if (config.getChannel && typeof config.getChannel === 'function') {
	    methods.getChannel = config.getChannel;
	  }
	  if (config.getProgram && typeof config.getProgram === 'function') {
	    methods.getProgram = config.getProgram;
	  }
	  if (config.setChannel && typeof config.setChannel === 'function') {
	    methods.setChannel = config.setChannel;
	  }
	  if (config.emit && typeof config.emit === 'function') {
	    config.emit(emit$1);
	  }
	};

	/*
	 * If not stated otherwise in this file or this component's LICENSE file the
	 * following copyright and licenses apply:
	 *
	 * Copyright 2020 Metrological
	 *
	 * Licensed under the Apache License, Version 2.0 (the License);
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	var initPin = function initPin(config) {
	  if (config.submit && typeof config.submit === 'function') {
	    config.submit;
	  }
	  if (config.check && typeof config.check === 'function') {
	    config.check;
	  }
	};

	var executeAsPromise = (function (method) {
	  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	  var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	  var result;
	  if (method && typeof method === 'function') {
	    try {
	      result = method.apply(context, args);
	    } catch (e) {
	      result = e;
	    }
	  } else {
	    result = method;
	  }

	  // if it looks like a duck .. ehm ... promise and talks like a promise, let's assume it's a promise
	  if (result !== null && typeof result === 'object' && result.then && typeof result.then === 'function') {
	    return result;
	  }
	  // otherwise make it into a promise
	  else {
	    return new Promise(function (resolve, reject) {
	      if (result instanceof Error) {
	        reject(result);
	      } else {
	        resolve(result);
	      }
	    });
	  }
	});

	/*
	 * If not stated otherwise in this file or this component's LICENSE file the
	 * following copyright and licenses apply:
	 *
	 * Copyright 2020 Metrological
	 *
	 * Licensed under the Apache License, Version 2.0 (the License);
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	var events$1 = {
	  abort: 'Abort',
	  canplay: 'CanPlay',
	  canplaythrough: 'CanPlayThrough',
	  durationchange: 'DurationChange',
	  emptied: 'Emptied',
	  encrypted: 'Encrypted',
	  ended: 'Ended',
	  error: 'Error',
	  interruptbegin: 'InterruptBegin',
	  interruptend: 'InterruptEnd',
	  loadeddata: 'LoadedData',
	  loadedmetadata: 'LoadedMetadata',
	  loadstart: 'LoadStart',
	  pause: 'Pause',
	  play: 'Play',
	  playing: 'Playing',
	  progress: 'Progress',
	  ratechange: 'Ratechange',
	  seeked: 'Seeked',
	  seeking: 'Seeking',
	  stalled: 'Stalled',
	  // suspend: 'Suspend', // this one is called a looooot for some videos
	  timeupdate: 'TimeUpdate',
	  volumechange: 'VolumeChange',
	  waiting: 'Waiting'
	};

	/*
	 * If not stated otherwise in this file or this component's LICENSE file the
	 * following copyright and licenses apply:
	 *
	 * Copyright 2020 Metrological
	 *
	 * Licensed under the Apache License, Version 2.0 (the License);
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	var autoSetupMixin = (function (sourceObject) {
	  var setup = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
	  var ready = false;
	  var doSetup = function doSetup() {
	    if (ready === false) {
	      setup();
	      ready = true;
	    }
	  };
	  return Object.keys(sourceObject).reduce(function (obj, key) {
	    if (typeof sourceObject[key] === 'function') {
	      obj[key] = function () {
	        doSetup();
	        return sourceObject[key].apply(sourceObject, arguments);
	      };
	    } else if (typeof Object.getOwnPropertyDescriptor(sourceObject, key).get === 'function') {
	      obj.__defineGetter__(key, function () {
	        doSetup();
	        return Object.getOwnPropertyDescriptor(sourceObject, key).get.apply(sourceObject);
	      });
	    } else if (typeof Object.getOwnPropertyDescriptor(sourceObject, key).set === 'function') {
	      obj.__defineSetter__(key, function () {
	        doSetup();
	        return Object.getOwnPropertyDescriptor(sourceObject, key).set.sourceObject[key].apply(sourceObject, arguments);
	      });
	    } else {
	      obj[key] = sourceObject[key];
	    }
	    return obj;
	  }, {});
	});

	/*
	 * If not stated otherwise in this file or this component's LICENSE file the
	 * following copyright and licenses apply:
	 *
	 * Copyright 2020 Metrological
	 *
	 * Licensed under the Apache License, Version 2.0 (the License);
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	var timeout = null;
	var easeExecution = (function (cb, delay) {
	  clearTimeout(timeout);
	  timeout = setTimeout(function () {
	    cb();
	  }, delay);
	});

	var VideoTexture = (function () {
	  return /*#__PURE__*/function (_Lightning$Component) {
	    _inherits(VideoTexture, _Lightning$Component);
	    var _super = _createSuper(VideoTexture);
	    function VideoTexture() {
	      _classCallCheck(this, VideoTexture);
	      return _super.apply(this, arguments);
	    }
	    _createClass(VideoTexture, [{
	      key: "videoEl",
	      get: function get() {
	        return this._videoEl;
	      },
	      set: function set(v) {
	        this._videoEl = v;
	      }
	    }, {
	      key: "videoView",
	      get: function get() {
	        return this.tag('Video');
	      }
	    }, {
	      key: "videoTexture",
	      get: function get() {
	        return this.videoView.texture;
	      }
	    }, {
	      key: "isVisible",
	      get: function get() {
	        return this.videoView.alpha === 1 && this.videoView.visible === true;
	      }
	    }, {
	      key: "_init",
	      value: function _init() {
	        this._createVideoTexture();
	      }
	    }, {
	      key: "_createVideoTexture",
	      value: function _createVideoTexture() {
	        var stage = this.stage;
	        var gl = stage.gl;
	        var glTexture = gl.createTexture();
	        gl.bindTexture(gl.TEXTURE_2D, glTexture);
	        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
	        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
	        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
	        this.videoTexture.options = {
	          source: glTexture,
	          w: this.videoEl.width,
	          h: this.videoEl.height
	        };
	        this.videoView.w = this.videoEl.width / this.stage.getRenderPrecision();
	        this.videoView.h = this.videoEl.height / this.stage.getRenderPrecision();
	      }
	    }, {
	      key: "start",
	      value: function start() {
	        var _this = this;
	        var stage = this.stage;
	        this._lastTime = 0;
	        if (!this._updateVideoTexture) {
	          this._updateVideoTexture = function () {
	            if (_this.videoTexture.options.source && _this.videoEl.videoWidth && _this.active) {
	              var gl = stage.gl;
	              var currentTime = new Date().getTime();
	              var getVideoPlaybackQuality = _this.videoEl.getVideoPlaybackQuality();

	              // When BR2_PACKAGE_GST1_PLUGINS_BAD_PLUGIN_DEBUGUTILS is not set in WPE, webkitDecodedFrameCount will not be available.
	              // We'll fallback to fixed 30fps in this case.
	              // As 'webkitDecodedFrameCount' is about to deprecate, check for the 'totalVideoFrames'
	              var frameCount = getVideoPlaybackQuality ? getVideoPlaybackQuality.totalVideoFrames : _this.videoEl.webkitDecodedFrameCount;
	              var mustUpdate = frameCount ? _this._lastFrame !== frameCount : _this._lastTime < currentTime - 30;
	              if (mustUpdate) {
	                _this._lastTime = currentTime;
	                _this._lastFrame = frameCount;
	                try {
	                  gl.bindTexture(gl.TEXTURE_2D, _this.videoTexture.options.source);
	                  gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
	                  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, _this.videoEl);
	                  _this._lastFrame = _this.videoEl.webkitDecodedFrameCount;
	                  _this.videoView.visible = true;
	                  _this.videoTexture.options.w = _this.videoEl.width;
	                  _this.videoTexture.options.h = _this.videoEl.height;
	                  var expectedAspectRatio = _this.videoView.w / _this.videoView.h;
	                  var realAspectRatio = _this.videoEl.width / _this.videoEl.height;
	                  if (expectedAspectRatio > realAspectRatio) {
	                    _this.videoView.scaleX = realAspectRatio / expectedAspectRatio;
	                    _this.videoView.scaleY = 1;
	                  } else {
	                    _this.videoView.scaleY = expectedAspectRatio / realAspectRatio;
	                    _this.videoView.scaleX = 1;
	                  }
	                } catch (e) {
	                  Log.error('texImage2d video', e);
	                  _this.stop();
	                }
	                _this.videoTexture.source.forceRenderUpdate();
	              }
	            }
	          };
	        }
	        if (!this._updatingVideoTexture) {
	          stage.on('frameStart', this._updateVideoTexture);
	          this._updatingVideoTexture = true;
	        }
	      }
	    }, {
	      key: "stop",
	      value: function stop() {
	        var stage = this.stage;
	        stage.removeListener('frameStart', this._updateVideoTexture);
	        this._updatingVideoTexture = false;
	        this.videoView.visible = false;
	        if (this.videoTexture.options.source) {
	          var gl = stage.gl;
	          gl.bindTexture(gl.TEXTURE_2D, this.videoTexture.options.source);
	          gl.clearColor(0, 0, 0, 1);
	          gl.clear(gl.COLOR_BUFFER_BIT);
	        }
	      }
	    }, {
	      key: "position",
	      value: function position(top, left) {
	        this.videoView.patch({
	          smooth: {
	            x: left,
	            y: top
	          }
	        });
	      }
	    }, {
	      key: "size",
	      value: function size(width, height) {
	        this.videoView.patch({
	          smooth: {
	            w: width,
	            h: height
	          }
	        });
	      }
	    }, {
	      key: "show",
	      value: function show() {
	        this.videoView.setSmooth('alpha', 1);
	      }
	    }, {
	      key: "hide",
	      value: function hide() {
	        this.videoView.setSmooth('alpha', 0);
	      }
	    }], [{
	      key: "_template",
	      value: function _template() {
	        return {
	          Video: {
	            alpha: 1,
	            visible: false,
	            pivot: 0.5,
	            texture: {
	              type: Lightning.textures.StaticTexture,
	              options: {}
	            }
	          }
	        };
	      }
	    }]);
	    return VideoTexture;
	  }(Lightning.Component);
	});

	/*
	 * If not stated otherwise in this file or this component's LICENSE file the
	 * following copyright and licenses apply:
	 *
	 * Copyright 2020 Metrological
	 *
	 * Licensed under the Apache License, Version 2.0 (the License);
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	var mediaUrl$1 = function mediaUrl(url) {
	  return url;
	};
	var videoEl;
	var videoTexture;
	var metrics;
	var _consumer;
	var precision = 1;
	var textureMode = false;
	var initVideoPlayer = function initVideoPlayer(config) {
	  if (config.mediaUrl) {
	    mediaUrl$1 = config.mediaUrl;
	  }
	};
	// todo: add this in a 'Registry' plugin
	// to be able to always clean this up on app close
	var eventHandlers = {};
	var state$1 = {
	  adsEnabled: false,
	  playing: false,
	  _playingAds: false,
	  get playingAds() {
	    return this._playingAds;
	  },
	  set playingAds(val) {
	    if (this._playingAds !== val) {
	      this._playingAds = val;
	      fireOnConsumer$1(val === true ? 'AdStart' : 'AdEnd');
	    }
	  },
	  skipTime: false,
	  playAfterSeek: null
	};
	var hooks = {
	  play: function play() {
	    state$1.playing = true;
	  },
	  pause: function pause() {
	    state$1.playing = false;
	  },
	  seeked: function seeked() {
	    state$1.playAfterSeek === true && videoPlayerPlugin.play();
	    state$1.playAfterSeek = null;
	  },
	  abort: function abort() {
	    deregisterEventListeners();
	  }
	};
	var withPrecision = function withPrecision(val) {
	  return Math.round(precision * val) + 'px';
	};
	var fireOnConsumer$1 = function fireOnConsumer(event, args) {
	  if (_consumer) {
	    _consumer.fire('$videoPlayer' + event, args, videoEl.currentTime);
	    _consumer.fire('$videoPlayerEvent', event, args, videoEl.currentTime);
	  }
	};
	var fireHook = function fireHook(event, args) {
	  hooks[event] && typeof hooks[event] === 'function' && hooks[event].call(null, event, args);
	};
	var customLoader = null;
	var customUnloader = null;
	var loader$1 = function loader(url, videoEl, config) {
	  return customLoader && typeof customLoader === 'function' ? customLoader(url, videoEl, config) : new Promise(function (resolve) {
	    url = mediaUrl$1(url);
	    videoEl.setAttribute('src', url);
	    videoEl.load();
	    resolve();
	  });
	};
	var unloader = function unloader(videoEl) {
	  return customUnloader && typeof customUnloader === 'function' ? customUnloader(videoEl) : new Promise(function (resolve) {
	    videoEl.removeAttribute('src');
	    videoEl.load();
	    resolve();
	  });
	};
	var setupVideoTag = function setupVideoTag() {
	  var videoEls = document.getElementsByTagName('video');
	  if (videoEls && videoEls.length) {
	    return videoEls[0];
	  } else {
	    var _videoEl = document.createElement('video');
	    var platformSettingsWidth = Settings.get('platform', 'width') ? Settings.get('platform', 'width') : 1920;
	    var platformSettingsHeight = Settings.get('platform', 'height') ? Settings.get('platform', 'height') : 1080;
	    _videoEl.setAttribute('id', 'video-player');
	    _videoEl.setAttribute('width', withPrecision(platformSettingsWidth));
	    _videoEl.setAttribute('height', withPrecision(platformSettingsHeight));
	    _videoEl.style.position = 'absolute';
	    _videoEl.style.zIndex = '1';
	    _videoEl.style.display = 'none';
	    _videoEl.style.visibility = 'hidden';
	    _videoEl.style.top = withPrecision(0);
	    _videoEl.style.left = withPrecision(0);
	    _videoEl.style.width = withPrecision(platformSettingsWidth);
	    _videoEl.style.height = withPrecision(platformSettingsHeight);
	    document.body.appendChild(_videoEl);
	    return _videoEl;
	  }
	};
	var setUpVideoTexture = function setUpVideoTexture() {
	  if (!ApplicationInstance$1.tag('VideoTexture')) {
	    var el = ApplicationInstance$1.stage.c({
	      type: VideoTexture(),
	      ref: 'VideoTexture',
	      zIndex: 0,
	      videoEl: videoEl
	    });
	    ApplicationInstance$1.childList.addAt(el, 0);
	  }
	  return ApplicationInstance$1.tag('VideoTexture');
	};
	var registerEventListeners = function registerEventListeners() {
	  Log.info('VideoPlayer', 'Registering event listeners');
	  Object.keys(events$1).forEach(function (event) {
	    var handler = function handler(e) {
	      // Fire a metric for each event (if it exists on the metrics object)
	      if (metrics && metrics[event] && typeof metrics[event] === 'function') {
	        metrics[event]({
	          currentTime: videoEl.currentTime
	        });
	      }
	      // fire an internal hook
	      fireHook(event, {
	        videoElement: videoEl,
	        event: e
	      });

	      // fire the event (with human friendly event name) to the consumer of the VideoPlayer
	      fireOnConsumer$1(events$1[event], {
	        videoElement: videoEl,
	        event: e
	      });
	    };
	    eventHandlers[event] = handler;
	    videoEl.addEventListener(event, handler);
	  });
	};
	var deregisterEventListeners = function deregisterEventListeners() {
	  Log.info('VideoPlayer', 'Deregistering event listeners');
	  Object.keys(eventHandlers).forEach(function (event) {
	    videoEl.removeEventListener(event, eventHandlers[event]);
	  });
	  eventHandlers = {};
	};
	var videoPlayerPlugin = {
	  consumer: function consumer(component) {
	    _consumer = component;
	  },
	  loader: function loader(loaderFn) {
	    customLoader = loaderFn;
	  },
	  unloader: function unloader(unloaderFn) {
	    customUnloader = unloaderFn;
	  },
	  position: function position() {
	    var top = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	    var left = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	    videoEl.style.left = withPrecision(left);
	    videoEl.style.top = withPrecision(top);
	    if (textureMode === true) {
	      videoTexture.position(top, left);
	    }
	  },
	  size: function size() {
	    var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1920;
	    var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1080;
	    videoEl.style.width = withPrecision(width);
	    videoEl.style.height = withPrecision(height);
	    videoEl.width = parseFloat(videoEl.style.width);
	    videoEl.height = parseFloat(videoEl.style.height);
	    if (textureMode === true) {
	      videoTexture.size(width, height);
	    }
	  },
	  area: function area() {
	    var top = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	    var right = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1920;
	    var bottom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1080;
	    var left = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
	    this.position(top, left);
	    this.size(right - left, bottom - top);
	  },
	  open: function open(url) {
	    var _this = this;
	    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    if (!this.canInteract) return;
	    metrics = Metrics$1.media(url);
	    this.hide();
	    deregisterEventListeners();
	    if (this.src == url) {
	      this.clear().then(this.open(url, config));
	    } else {
	      var adConfig = {
	        enabled: state$1.adsEnabled,
	        duration: 300
	      };
	      if (config.videoId) {
	        adConfig.caid = config.videoId;
	      }
	      Ads$1.get(adConfig, _consumer).then(function (ads) {
	        state$1.playingAds = true;
	        ads.prerolls().then(function () {
	          state$1.playingAds = false;
	          loader$1(url, videoEl, config).then(function () {
	            registerEventListeners();
	            _this.show();
	            _this.play();
	          }).catch(function (e) {
	            fireOnConsumer$1('error', {
	              videoElement: videoEl,
	              event: e
	            });
	          });
	        });
	      });
	    }
	  },
	  reload: function reload() {
	    if (!this.canInteract) return;
	    var url = videoEl.getAttribute('src');
	    this.close();
	    this.open(url);
	  },
	  close: function close() {
	    var _this2 = this;
	    Ads$1.cancel();
	    if (state$1.playingAds) {
	      state$1.playingAds = false;
	      Ads$1.stop();
	      // call self in next tick
	      setTimeout(function () {
	        _this2.close();
	      });
	    }
	    if (!this.canInteract) return;
	    this.clear();
	    this.hide();
	    deregisterEventListeners();
	  },
	  clear: function clear() {
	    if (!this.canInteract) return;
	    // pause the video first to disable sound
	    this.pause();
	    if (textureMode === true) videoTexture.stop();
	    return unloader(videoEl).then(function () {
	      fireOnConsumer$1('Clear', {
	        videoElement: videoEl
	      });
	    });
	  },
	  play: function play() {
	    if (!this.canInteract) return;
	    if (textureMode === true) videoTexture.start();
	    executeAsPromise(videoEl.play, null, videoEl).catch(function (e) {
	      fireOnConsumer$1('error', {
	        videoElement: videoEl,
	        event: e
	      });
	    });
	  },
	  pause: function pause() {
	    if (!this.canInteract) return;
	    videoEl.pause();
	  },
	  playPause: function playPause() {
	    if (!this.canInteract) return;
	    this.playing === true ? this.pause() : this.play();
	  },
	  mute: function mute() {
	    var muted = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	    if (!this.canInteract) return;
	    videoEl.muted = muted;
	  },
	  loop: function loop() {
	    var looped = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	    videoEl.loop = looped;
	  },
	  seek: function seek(time) {
	    if (!this.canInteract) return;
	    if (!this.src) return;
	    // define whether should continue to play after seek is complete (in seeked hook)
	    if (state$1.playAfterSeek === null) {
	      state$1.playAfterSeek = !!state$1.playing;
	    }
	    // pause before actually seeking
	    this.pause();
	    // currentTime always between 0 and the duration of the video (minus 0.1s to not set to the final frame and stall the video)
	    videoEl.currentTime = Math.max(0, Math.min(time, this.duration - 0.1));
	  },
	  skip: function skip(seconds) {
	    var _this3 = this;
	    if (!this.canInteract) return;
	    if (!this.src) return;
	    state$1.skipTime = (state$1.skipTime || videoEl.currentTime) + seconds;
	    easeExecution(function () {
	      _this3.seek(state$1.skipTime);
	      state$1.skipTime = false;
	    }, 300);
	  },
	  show: function show() {
	    if (!this.canInteract) return;
	    if (textureMode === true) {
	      videoTexture.show();
	    } else {
	      videoEl.style.display = 'block';
	      videoEl.style.visibility = 'visible';
	    }
	  },
	  hide: function hide() {
	    if (!this.canInteract) return;
	    if (textureMode === true) {
	      videoTexture.hide();
	    } else {
	      videoEl.style.display = 'none';
	      videoEl.style.visibility = 'hidden';
	    }
	  },
	  enableAds: function enableAds() {
	    var enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	    state$1.adsEnabled = enabled;
	  },
	  /* Public getters */
	  get duration() {
	    return videoEl && (isNaN(videoEl.duration) ? Infinity : videoEl.duration);
	  },
	  get currentTime() {
	    return videoEl && videoEl.currentTime;
	  },
	  get muted() {
	    return videoEl && videoEl.muted;
	  },
	  get looped() {
	    return videoEl && videoEl.loop;
	  },
	  get src() {
	    return videoEl && videoEl.getAttribute('src');
	  },
	  get playing() {
	    return state$1.playing;
	  },
	  get playingAds() {
	    return state$1.playingAds;
	  },
	  get canInteract() {
	    // todo: perhaps add an extra flag wether we allow interactions (i.e. pauze, mute, etc.) during ad playback
	    return state$1.playingAds === false;
	  },
	  get top() {
	    return videoEl && parseFloat(videoEl.style.top);
	  },
	  get left() {
	    return videoEl && parseFloat(videoEl.style.left);
	  },
	  get bottom() {
	    return videoEl && parseFloat(videoEl.style.top - videoEl.style.height);
	  },
	  get right() {
	    return videoEl && parseFloat(videoEl.style.left - videoEl.style.width);
	  },
	  get width() {
	    return videoEl && parseFloat(videoEl.style.width);
	  },
	  get height() {
	    return videoEl && parseFloat(videoEl.style.height);
	  },
	  get visible() {
	    if (textureMode === true) {
	      return videoTexture.isVisible;
	    } else {
	      return videoEl && videoEl.style.display === 'block';
	    }
	  },
	  get adsEnabled() {
	    return state$1.adsEnabled;
	  },
	  // prefixed with underscore to indicate 'semi-private'
	  // because it's not recommended to interact directly with the video element
	  get _videoEl() {
	    return videoEl;
	  },
	  get _consumer() {
	    return _consumer;
	  }
	};
	autoSetupMixin(videoPlayerPlugin, function () {
	  precision = ApplicationInstance$1 && ApplicationInstance$1.stage && ApplicationInstance$1.stage.getRenderPrecision() || precision;
	  videoEl = setupVideoTag();
	  textureMode = Settings.get('platform', 'textureMode', false);
	  if (textureMode === true) {
	    videoEl.setAttribute('crossorigin', 'anonymous');
	    videoTexture = setUpVideoTexture();
	  }
	});

	/*
	 * If not stated otherwise in this file or this component's LICENSE file the
	 * following copyright and licenses apply:
	 *
	 * Copyright 2020 Metrological
	 *
	 * Licensed under the Apache License, Version 2.0 (the License);
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	var consumer;
	var getAds = function getAds() {
	  // todo: enable some default ads during development, maybe from the settings.json
	  return Promise.resolve({
	    prerolls: [],
	    midrolls: [],
	    postrolls: []
	  });
	};
	var initAds = function initAds(config) {
	  if (config.getAds) {
	    getAds = config.getAds;
	  }
	};
	var state = {
	  active: false
	};
	var playSlot = function playSlot() {
	  var slot = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	  return slot.reduce(function (promise, ad) {
	    return promise.then(function () {
	      return playAd(ad);
	    });
	  }, Promise.resolve(null));
	};
	var playAd = function playAd(ad) {
	  return new Promise(function (resolve) {
	    if (state.active === false) {
	      Log$1.info('Ad', 'Skipping add due to inactive state');
	      return resolve();
	    }
	    // is it safe to rely on videoplayer plugin already created the video tag?
	    var videoEl = document.getElementsByTagName('video')[0];
	    videoEl.style.display = 'block';
	    videoEl.style.visibility = 'visible';
	    videoEl.src = mediaUrl$1(ad.url);
	    videoEl.load();
	    var timeEvents = null;
	    var timeout;
	    var cleanup = function cleanup() {
	      // remove all listeners
	      Object.keys(handlers).forEach(function (handler) {
	        return videoEl.removeEventListener(handler, handlers[handler]);
	      });
	      resolve();
	    };
	    var handlers = {
	      play: function play() {
	        Log$1.info('Ad', 'Play ad', ad.url);
	        fireOnConsumer('Play', ad);
	        sendBeacon(ad.callbacks, 'defaultImpression');
	      },
	      ended: function ended() {
	        fireOnConsumer('Ended', ad);
	        sendBeacon(ad.callbacks, 'complete');
	        cleanup();
	      },
	      timeupdate: function timeupdate() {
	        if (!timeEvents && videoEl.duration) {
	          // calculate when to fire the time based events (now that duration is known)
	          timeEvents = {
	            firstQuartile: videoEl.duration / 4,
	            midPoint: videoEl.duration / 2,
	            thirdQuartile: videoEl.duration / 4 * 3
	          };
	          Log$1.info('Ad', 'Calculated quartiles times', {
	            timeEvents: timeEvents
	          });
	        }
	        if (timeEvents && timeEvents.firstQuartile && videoEl.currentTime >= timeEvents.firstQuartile) {
	          fireOnConsumer('FirstQuartile', ad);
	          delete timeEvents.firstQuartile;
	          sendBeacon(ad.callbacks, 'firstQuartile');
	        }
	        if (timeEvents && timeEvents.midPoint && videoEl.currentTime >= timeEvents.midPoint) {
	          fireOnConsumer('MidPoint', ad);
	          delete timeEvents.midPoint;
	          sendBeacon(ad.callbacks, 'midPoint');
	        }
	        if (timeEvents && timeEvents.thirdQuartile && videoEl.currentTime >= timeEvents.thirdQuartile) {
	          fireOnConsumer('ThirdQuartile', ad);
	          delete timeEvents.thirdQuartile;
	          sendBeacon(ad.callbacks, 'thirdQuartile');
	        }
	      },
	      stalled: function stalled() {
	        fireOnConsumer('Stalled', ad);
	        timeout = setTimeout(function () {
	          cleanup();
	        }, 5000); // make timeout configurable
	      },
	      canplay: function canplay() {
	        timeout && clearTimeout(timeout);
	      },
	      error: function error() {
	        fireOnConsumer('Error', ad);
	        cleanup();
	      },
	      // this doesn't work reliably on sky box, moved logic to timeUpdate event
	      // loadedmetadata() {
	      //   // calculate when to fire the time based events (now that duration is known)
	      //   timeEvents = {
	      //     firstQuartile: videoEl.duration / 4,
	      //     midPoint: videoEl.duration / 2,
	      //     thirdQuartile: (videoEl.duration / 4) * 3,
	      //   }
	      // },
	      abort: function abort() {
	        cleanup();
	      } // todo: pause, resume, mute, unmute beacons
	    };
	    // add all listeners
	    Object.keys(handlers).forEach(function (handler) {
	      return videoEl.addEventListener(handler, handlers[handler]);
	    });
	    videoEl.play();
	  });
	};
	var sendBeacon = function sendBeacon(callbacks, event) {
	  if (callbacks && callbacks[event]) {
	    Log$1.info('Ad', 'Sending beacon', event, callbacks[event]);
	    return callbacks[event].reduce(function (promise, url) {
	      return promise.then(function () {
	        return fetch(url)
	        // always resolve, also in case of a fetch error (so we don't block firing the rest of the beacons for this event)
	        // note: for fetch failed http responses don't throw an Error :)
	        .then(function (response) {
	          if (response.status === 200) {
	            fireOnConsumer('Beacon' + event + 'Sent');
	          } else {
	            fireOnConsumer('Beacon' + event + 'Failed' + response.status);
	          }
	          Promise.resolve(null);
	        }).catch(function () {
	          Promise.resolve(null);
	        });
	      });
	    }, Promise.resolve(null));
	  } else {
	    Log$1.info('Ad', 'No callback found for ' + event);
	  }
	};
	var fireOnConsumer = function fireOnConsumer(event, args) {
	  if (consumer) {
	    consumer.fire('$ad' + event, args);
	    consumer.fire('$adEvent', event, args);
	  }
	};
	var Ads = {
	  get: function get(config, videoPlayerConsumer) {
	    if (config.enabled === false) {
	      return Promise.resolve({
	        prerolls: function prerolls() {
	          return Promise.resolve();
	        }
	      });
	    }
	    consumer = videoPlayerConsumer;
	    return new Promise(function (resolve) {
	      Log$1.info('Ad', 'Starting session');
	      getAds(config).then(function (ads) {
	        Log$1.info('Ad', 'API result', ads);
	        resolve({
	          prerolls: function prerolls() {
	            if (ads.preroll) {
	              state.active = true;
	              fireOnConsumer('PrerollSlotImpression', ads);
	              sendBeacon(ads.preroll.callbacks, 'slotImpression');
	              return playSlot(ads.preroll.ads).then(function () {
	                fireOnConsumer('PrerollSlotEnd', ads);
	                sendBeacon(ads.preroll.callbacks, 'slotEnd');
	                state.active = false;
	              });
	            }
	            return Promise.resolve();
	          },
	          midrolls: function midrolls() {
	            return Promise.resolve();
	          },
	          postrolls: function postrolls() {
	            return Promise.resolve();
	          }
	        });
	      });
	    });
	  },
	  cancel: function cancel() {
	    Log$1.info('Ad', 'Cancel Ad');
	    state.active = false;
	  },
	  stop: function stop() {
	    Log$1.info('Ad', 'Stop Ad');
	    state.active = false;
	    // fixme: duplication
	    var videoEl = document.getElementsByTagName('video')[0];
	    videoEl.pause();
	    videoEl.removeAttribute('src');
	  }
	};

	var isMergeableObject = function isMergeableObject(value) {
	  return isNonNullObject(value) && !isSpecial(value);
	};
	function isNonNullObject(value) {
	  return !!value && typeof value === 'object';
	}
	function isSpecial(value) {
	  var stringValue = Object.prototype.toString.call(value);
	  return stringValue === '[object RegExp]' || stringValue === '[object Date]' || isReactElement(value);
	}

	// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
	var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;
	function isReactElement(value) {
	  return value.$$typeof === REACT_ELEMENT_TYPE;
	}
	function emptyTarget(val) {
	  return Array.isArray(val) ? [] : {};
	}
	function cloneUnlessOtherwiseSpecified(value, options) {
	  return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
	}
	function defaultArrayMerge(target, source, options) {
	  return target.concat(source).map(function (element) {
	    return cloneUnlessOtherwiseSpecified(element, options);
	  });
	}
	function getMergeFunction(key, options) {
	  if (!options.customMerge) {
	    return deepmerge;
	  }
	  var customMerge = options.customMerge(key);
	  return typeof customMerge === 'function' ? customMerge : deepmerge;
	}
	function getEnumerableOwnPropertySymbols(target) {
	  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function (symbol) {
	    return Object.propertyIsEnumerable.call(target, symbol);
	  }) : [];
	}
	function getKeys(target) {
	  return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
	}
	function propertyIsOnObject(object, property) {
	  try {
	    return property in object;
	  } catch (_) {
	    return false;
	  }
	}

	// Protects from prototype poisoning and unexpected merging up the prototype chain.
	function propertyIsUnsafe(target, key) {
	  return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
	  && !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
	  && Object.propertyIsEnumerable.call(target, key)); // and also unsafe if they're nonenumerable.
	}

	function mergeObject(target, source, options) {
	  var destination = {};
	  if (options.isMergeableObject(target)) {
	    getKeys(target).forEach(function (key) {
	      destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
	    });
	  }
	  getKeys(source).forEach(function (key) {
	    if (propertyIsUnsafe(target, key)) {
	      return;
	    }
	    if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
	      destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
	    } else {
	      destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
	    }
	  });
	  return destination;
	}
	function deepmerge(target, source, options) {
	  options = options || {};
	  options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	  options.isMergeableObject = options.isMergeableObject || isMergeableObject;
	  // cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
	  // implementations can use it. The caller may not replace it.
	  options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
	  var sourceIsArray = Array.isArray(source);
	  var targetIsArray = Array.isArray(target);
	  var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
	  if (!sourceAndTargetTypesMatch) {
	    return cloneUnlessOtherwiseSpecified(source, options);
	  } else if (sourceIsArray) {
	    return options.arrayMerge(target, source, options);
	  } else {
	    return mergeObject(target, source, options);
	  }
	}
	deepmerge.all = function deepmergeAll(array, options) {
	  if (!Array.isArray(array)) {
	    throw new Error('first argument should be an array');
	  }
	  return array.reduce(function (prev, next) {
	    return deepmerge(prev, next, options);
	  }, {});
	};
	var deepmerge_1 = deepmerge;
	var cjs = deepmerge_1;

	/*!
	 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
	 *
	 * Copyright (c) 2014-2017, Jon Schlinkert.
	 * Released under the MIT License.
	 */

	function isObject$2(o) {
	  return Object.prototype.toString.call(o) === '[object Object]';
	}

	function isPlainObject(o) {
	  var ctor,prot;

	  if (isObject$2(o) === false) return false;

	  // If has modified constructor
	  ctor = o.constructor;
	  if (ctor === undefined) return true;

	  // If has modified prototype
	  prot = ctor.prototype;
	  if (isObject$2(prot) === false) return false;

	  // If constructor does not have an Object-specific method
	  if (prot.hasOwnProperty('isPrototypeOf') === false) {
	    return false;
	  }

	  // Most likely a plain Object
	  return true;
	}

	var warned = false;
	var deprecated = function deprecated() {
	  var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	  if (force === true || warned === false) {
	    console.warn(["The 'Locale'-plugin in the Lightning-SDK is deprecated and will be removed in future releases.", "Please consider using the new 'Language'-plugin instead.", 'https://rdkcentral.github.io/Lightning-SDK/#/plugins/language'].join('\n\n'));
	  }
	  warned = true;
	};
	var Locale = /*#__PURE__*/function () {
	  function Locale() {
	    _classCallCheck(this, Locale);
	    this.__enabled = false;
	  }

	  /**
	   * Loads translation object from external json file.
	   *
	   * @param {String} path Path to resource.
	   * @return {Promise}
	   */
	  _createClass(Locale, [{
	    key: "load",
	    value: function () {
	      var _load = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(path) {
	        var _this = this;
	        return _regeneratorRuntime().wrap(function _callee$(_context) {
	          while (1) switch (_context.prev = _context.next) {
	            case 0:
	              if (this.__enabled) {
	                _context.next = 2;
	                break;
	              }
	              return _context.abrupt("return");
	            case 2:
	              _context.next = 4;
	              return fetch(path).then(function (resp) {
	                return resp.json();
	              }).then(function (resp) {
	                _this.loadFromObject(resp);
	              });
	            case 4:
	            case "end":
	              return _context.stop();
	          }
	        }, _callee, this);
	      }));
	      function load(_x) {
	        return _load.apply(this, arguments);
	      }
	      return load;
	    }()
	    /**
	     * Sets language used by module.
	     *
	     * @param {String} lang
	     */
	  }, {
	    key: "setLanguage",
	    value: function setLanguage(lang) {
	      deprecated();
	      this.__enabled = true;
	      this.language = lang;
	    }

	    /**
	     * Returns reference to translation object for current language.
	     *
	     * @return {Object}
	     */
	  }, {
	    key: "tr",
	    get: function get() {
	      deprecated(true);
	      return this.__trObj[this.language];
	    }

	    /**
	     * Loads translation object from existing object (binds existing object).
	     *
	     * @param {Object} trObj
	     */
	  }, {
	    key: "loadFromObject",
	    value: function loadFromObject(trObj) {
	      deprecated();
	      var fallbackLanguage = 'en';
	      if (Object.keys(trObj).indexOf(this.language) === -1) {
	        Log$1.warn('No translations found for: ' + this.language);
	        if (Object.keys(trObj).indexOf(fallbackLanguage) > -1) {
	          Log$1.warn('Using fallback language: ' + fallbackLanguage);
	          this.language = fallbackLanguage;
	        } else {
	          var error = 'No translations found for fallback language: ' + fallbackLanguage;
	          Log$1.error(error);
	          throw Error(error);
	        }
	      }
	      this.__trObj = trObj;
	      for (var _i = 0, _Object$values = Object.values(this.__trObj); _i < _Object$values.length; _i++) {
	        var lang = _Object$values[_i];
	        for (var _i2 = 0, _Object$keys = Object.keys(lang); _i2 < _Object$keys.length; _i2++) {
	          var str = _Object$keys[_i2];
	          lang[str] = new LocalizedString(lang[str]);
	        }
	      }
	    }
	  }]);
	  return Locale;
	}();
	/**
	 * Extended string class used for localization.
	 */
	var LocalizedString = /*#__PURE__*/function (_String) {
	  _inherits(LocalizedString, _String);
	  var _super = _createSuper(LocalizedString);
	  function LocalizedString() {
	    _classCallCheck(this, LocalizedString);
	    return _super.apply(this, arguments);
	  }
	  _createClass(LocalizedString, [{
	    key: "format",
	    value:
	    /**
	     * Returns formatted LocalizedString.
	     * Replaces each placeholder value (e.g. {0}, {1}) with corresponding argument.
	     *
	     * E.g.:
	     * > new LocalizedString('{0} and {1} and {0}').format('A', 'B');
	     * A and B and A
	     *
	     * @param  {...any} args List of arguments for placeholders.
	     */
	    function format() {
	      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	      var sub = args.reduce(function (string, arg, index) {
	        return string.split("{".concat(index, "}")).join(arg);
	      }, this);
	      return new LocalizedString(sub);
	    }
	  }]);
	  return LocalizedString;
	}( /*#__PURE__*/_wrapNativeSuper(String));
	var Locale$1 = new Locale();

	/*
	 * If not stated otherwise in this file or this component's LICENSE file the
	 * following copyright and licenses apply:
	 *
	 * Copyright 2020 Metrological
	 *
	 * Licensed under the Apache License, Version 2.0 (the License);
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	var VersionLabel = /*#__PURE__*/function (_Lightning$Component) {
	  _inherits(VersionLabel, _Lightning$Component);
	  var _super = _createSuper(VersionLabel);
	  function VersionLabel() {
	    _classCallCheck(this, VersionLabel);
	    return _super.apply(this, arguments);
	  }
	  _createClass(VersionLabel, [{
	    key: "_firstActive",
	    value: function _firstActive() {
	      this.tag('Text').text = "APP - v".concat(this.version, "\nSDK - v").concat(this.sdkVersion);
	      this.tag('Text').loadTexture();
	      this.w = this.tag('Text').renderWidth + 40;
	      this.h = this.tag('Text').renderHeight + 5;
	    }
	  }], [{
	    key: "_template",
	    value: function _template() {
	      return {
	        rect: true,
	        color: 0xbb0078ac,
	        h: 40,
	        w: 100,
	        x: function x(w) {
	          return w - 50;
	        },
	        y: function y(h) {
	          return h - 50;
	        },
	        mount: 1,
	        Text: {
	          w: function w(_w) {
	            return _w;
	          },
	          h: function h(_h) {
	            return _h;
	          },
	          y: 5,
	          x: 20,
	          text: {
	            fontSize: 22,
	            lineHeight: 26
	          }
	        }
	      };
	    }
	  }]);
	  return VersionLabel;
	}(Lightning$1.Component);

	var FpsIndicator = /*#__PURE__*/function (_Lightning$Component) {
	  _inherits(FpsIndicator, _Lightning$Component);
	  var _super = _createSuper(FpsIndicator);
	  function FpsIndicator() {
	    _classCallCheck(this, FpsIndicator);
	    return _super.apply(this, arguments);
	  }
	  _createClass(FpsIndicator, [{
	    key: "_setup",
	    value: function _setup() {
	      var _this = this;
	      this.config = _objectSpread2(_objectSpread2({}, {
	        log: false,
	        interval: 500,
	        threshold: 1
	      }), Settings$1.get('platform', 'showFps'));
	      this.fps = 0;
	      this.lastFps = this.fps - this.config.threshold;
	      var fpsCalculator = function fpsCalculator() {
	        _this.fps = ~~(1 / _this.stage.dt);
	      };
	      this.stage.on('frameStart', fpsCalculator);
	      this.stage.off('framestart', fpsCalculator);
	      this.interval = setInterval(this.showFps.bind(this), this.config.interval);
	    }
	  }, {
	    key: "_firstActive",
	    value: function _firstActive() {
	      this.showFps();
	    }
	  }, {
	    key: "_detach",
	    value: function _detach() {
	      clearInterval(this.interval);
	    }
	  }, {
	    key: "showFps",
	    value: function showFps() {
	      if (Math.abs(this.lastFps - this.fps) <= this.config.threshold) return;
	      this.lastFps = this.fps;
	      // green
	      var bgColor = 0xff008000;
	      // orange
	      if (this.fps <= 40 && this.fps > 20) bgColor = 0xffffa500;
	      // red
	      else if (this.fps <= 20) bgColor = 0xffff0000;
	      this.tag('Background').setSmooth('color', bgColor);
	      this.tag('Counter').text = "".concat(this.fps);
	      this.config.log && Log$1.info('FPS', this.fps);
	    }
	  }], [{
	    key: "_template",
	    value: function _template() {
	      return {
	        rect: true,
	        color: 0xffffffff,
	        texture: Lightning$1.Tools.getRoundRect(80, 80, 40),
	        h: 80,
	        w: 80,
	        x: 100,
	        y: 100,
	        mount: 1,
	        Background: {
	          x: 3,
	          y: 3,
	          texture: Lightning$1.Tools.getRoundRect(72, 72, 36),
	          color: 0xff008000
	        },
	        Counter: {
	          w: function w(_w) {
	            return _w;
	          },
	          h: function h(_h) {
	            return _h;
	          },
	          y: 10,
	          text: {
	            fontSize: 32,
	            textAlign: 'center'
	          }
	        },
	        Text: {
	          w: function w(_w2) {
	            return _w2;
	          },
	          h: function h(_h2) {
	            return _h2;
	          },
	          y: 48,
	          text: {
	            fontSize: 15,
	            textAlign: 'center',
	            text: 'FPS'
	          }
	        }
	      };
	    }
	  }]);
	  return FpsIndicator;
	}(Lightning$1.Component);

	/*
	 * If not stated otherwise in this file or this component's LICENSE file the
	 * following copyright and licenses apply:
	 *
	 * Copyright 2020 Metrological
	 *
	 * Licensed under the Apache License, Version 2.0 (the License);
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	var fetchJson = (function (file) {
	  return new Promise(function (resolve, reject) {
	    var xhr = new XMLHttpRequest();
	    xhr.onreadystatechange = function () {
	      if (xhr.readyState == XMLHttpRequest.DONE) {
	        // file protocol returns 0
	        // http(s) protocol returns 200
	        if (xhr.status === 0 || xhr.status === 200) resolve(JSON.parse(xhr.responseText));else reject(xhr.statusText);
	      }
	    };
	    xhr.open('GET', file);
	    xhr.send(null);
	  });
	});

	/*
	 * If not stated otherwise in this file or this component's LICENSE file the
	 * following copyright and licenses apply:
	 *
	 * Copyright 2020 Metrological
	 *
	 * Licensed under the Apache License, Version 2.0 (the License);
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	var basePath;
	var _proxyUrl;
	var initUtils = function initUtils(config) {
	  basePath = _ensureUrlWithProtocol(makeFullStaticPath(window.location.pathname, config.path || '/'));
	  if (config.proxyUrl) {
	    _proxyUrl = _ensureUrlWithProtocol(config.proxyUrl);
	  }
	};
	var Utils = {
	  asset: function asset(relPath) {
	    return basePath + relPath;
	  },
	  proxyUrl: function proxyUrl(url) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    return _proxyUrl ? _proxyUrl + '?' + _makeQueryString(url, options) : url;
	  },
	  makeQueryString: function makeQueryString() {
	    return _makeQueryString.apply(void 0, arguments);
	  },
	  // since imageworkers don't work without protocol
	  ensureUrlWithProtocol: function ensureUrlWithProtocol() {
	    return _ensureUrlWithProtocol.apply(void 0, arguments);
	  }
	};
	var _ensureUrlWithProtocol = function _ensureUrlWithProtocol(url) {
	  if (/^\/[^/]/i.test(url) && /^(?:file:)/i.test(window.location.protocol)) {
	    return window.location.protocol + '//' + url;
	  }
	  if (/^\/\//.test(url)) {
	    return window.location.protocol + url;
	  }
	  if (!/^(?:https?:)/i.test(url)) {
	    return window.location.origin + url;
	  }
	  return url;
	};
	var makeFullStaticPath = function makeFullStaticPath() {
	  var pathname = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
	  var path = arguments.length > 1 ? arguments[1] : undefined;
	  // ensure path has traling slash
	  path = path.charAt(path.length - 1) !== '/' ? path + '/' : path;

	  // if path is URL, we assume it's already the full static path, so we just return it
	  if (/^(?:https?:)?(?:\/\/)/.test(path)) {
	    return path;
	  }
	  if (path.charAt(0) === '/') {
	    return path;
	  } else {
	    // cleanup the pathname (i.e. remove possible index.html)
	    pathname = cleanUpPathName(pathname);

	    // remove possible leading dot from path
	    path = path.charAt(0) === '.' ? path.substr(1) : path;
	    // ensure path has leading slash
	    path = path.charAt(0) !== '/' ? '/' + path : path;
	    return pathname + path;
	  }
	};
	var cleanUpPathName = function cleanUpPathName(pathname) {
	  if (pathname.slice(-1) === '/') return pathname.slice(0, -1);
	  var parts = pathname.split('/');
	  if (parts[parts.length - 1].indexOf('.') > -1) parts.pop();
	  return parts.join('/');
	};
	var _makeQueryString = function _makeQueryString(url) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'url';
	  // add operator as an option
	  options.operator = 'metrological'; // Todo: make this configurable (via url?)
	  // add type (= url or qr) as an option, with url as the value
	  options[type] = url;
	  return Object.keys(options).map(function (key) {
	    return encodeURIComponent(key) + '=' + encodeURIComponent('' + options[key]);
	  }).join('&');
	};

	var meta = {};
	var translations = {};
	var language = null;
	var initLanguage = function initLanguage(file) {
	  var language = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	  return new Promise(function (resolve, reject) {
	    fetchJson(file).then(function (json) {
	      setTranslations(json);
	      // set language (directly or in a promise)
	      typeof language === 'object' && 'then' in language && typeof language.then === 'function' ? language.then(function (lang) {
	        return setLanguage(lang).then(resolve).catch(reject);
	      }).catch(function (e) {
	        Log$1.error(e);
	        reject(e);
	      }) : setLanguage(language).then(resolve).catch(reject);
	    }).catch(function () {
	      var error = 'Language file ' + file + ' not found';
	      Log$1.error(error);
	      reject(error);
	    });
	  });
	};
	var setTranslations = function setTranslations(obj) {
	  if ('meta' in obj) {
	    meta = _objectSpread2({}, obj.meta);
	    delete obj.meta;
	  }
	  translations = obj;
	};
	var setLanguage = function setLanguage(lng) {
	  language = null;
	  return new Promise(function (resolve, reject) {
	    if (lng in translations) {
	      language = lng;
	    } else {
	      if ('map' in meta && lng in meta.map && meta.map[lng] in translations) {
	        language = meta.map[lng];
	      } else if ('default' in meta && meta.default in translations) {
	        var error = 'Translations for Language ' + language + ' not found. Using default language ' + meta.default;
	        Log$1.warn(error);
	        language = meta.default;
	      } else {
	        var _error = 'Translations for Language ' + language + ' not found.';
	        Log$1.error(_error);
	        reject(_error);
	      }
	    }
	    if (language) {
	      Log$1.info('Setting language to', language);
	      var translationsObj = translations[language];
	      if (typeof translationsObj === 'object') {
	        resolve();
	      } else if (typeof translationsObj === 'string') {
	        var url = Utils.asset(translationsObj);
	        fetchJson(url).then(function (json) {
	          // save the translations for this language (to prevent loading twice)
	          translations[language] = json;
	          resolve();
	        }).catch(function (e) {
	          var error = 'Error while fetching ' + url;
	          Log$1.error(error, e);
	          reject(error);
	        });
	      }
	    }
	  });
	};

	/*
	 * If not stated otherwise in this file or this component's LICENSE file the
	 * following copyright and licenses apply:
	 *
	 * Copyright 2020 Metrological
	 *
	 * Licensed under the Apache License, Version 2.0 (the License);
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	var registry = {
	  eventListeners: [],
	  timeouts: [],
	  intervals: [],
	  targets: []
	};
	var Registry = {
	  // Timeouts
	  setTimeout: function (_setTimeout) {
	    function setTimeout(_x, _x2) {
	      return _setTimeout.apply(this, arguments);
	    }
	    setTimeout.toString = function () {
	      return _setTimeout.toString();
	    };
	    return setTimeout;
	  }(function (cb, timeout) {
	    for (var _len = arguments.length, params = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	      params[_key - 2] = arguments[_key];
	    }
	    var timeoutId = setTimeout(function () {
	      registry.timeouts = registry.timeouts.filter(function (id) {
	        return id !== timeoutId;
	      });
	      cb.apply(null, params);
	    }, timeout, params);
	    Log$1.info('Set Timeout', 'ID: ' + timeoutId);
	    registry.timeouts.push(timeoutId);
	    return timeoutId;
	  }),
	  clearTimeout: function (_clearTimeout) {
	    function clearTimeout(_x3) {
	      return _clearTimeout.apply(this, arguments);
	    }
	    clearTimeout.toString = function () {
	      return _clearTimeout.toString();
	    };
	    return clearTimeout;
	  }(function (timeoutId) {
	    if (registry.timeouts.indexOf(timeoutId) > -1) {
	      registry.timeouts = registry.timeouts.filter(function (id) {
	        return id !== timeoutId;
	      });
	      Log$1.info('Clear Timeout', 'ID: ' + timeoutId);
	      clearTimeout(timeoutId);
	    } else {
	      Log$1.error('Clear Timeout', 'ID ' + timeoutId + ' not found');
	    }
	  }),
	  clearTimeouts: function clearTimeouts() {
	    var _this = this;
	    registry.timeouts.forEach(function (timeoutId) {
	      _this.clearTimeout(timeoutId);
	    });
	  },
	  // Intervals
	  setInterval: function (_setInterval) {
	    function setInterval(_x4, _x5) {
	      return _setInterval.apply(this, arguments);
	    }
	    setInterval.toString = function () {
	      return _setInterval.toString();
	    };
	    return setInterval;
	  }(function (cb, interval) {
	    for (var _len2 = arguments.length, params = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	      params[_key2 - 2] = arguments[_key2];
	    }
	    var intervalId = setInterval(function () {
	      registry.intervals.filter(function (id) {
	        return id !== intervalId;
	      });
	      cb.apply(null, params);
	    }, interval, params);
	    Log$1.info('Set Interval', 'ID: ' + intervalId);
	    registry.intervals.push(intervalId);
	    return intervalId;
	  }),
	  clearInterval: function (_clearInterval) {
	    function clearInterval(_x6) {
	      return _clearInterval.apply(this, arguments);
	    }
	    clearInterval.toString = function () {
	      return _clearInterval.toString();
	    };
	    return clearInterval;
	  }(function (intervalId) {
	    if (registry.intervals.indexOf(intervalId) > -1) {
	      registry.intervals = registry.intervals.filter(function (id) {
	        return id !== intervalId;
	      });
	      Log$1.info('Clear Interval', 'ID: ' + intervalId);
	      clearInterval(intervalId);
	    } else {
	      Log$1.error('Clear Interval', 'ID ' + intervalId + ' not found');
	    }
	  }),
	  clearIntervals: function clearIntervals() {
	    var _this2 = this;
	    registry.intervals.forEach(function (intervalId) {
	      _this2.clearInterval(intervalId);
	    });
	  },
	  // Event listeners
	  addEventListener: function addEventListener(target, event, handler) {
	    target.addEventListener(event, handler);
	    var targetIndex = registry.targets.indexOf(target) > -1 ? registry.targets.indexOf(target) : registry.targets.push(target) - 1;
	    registry.eventListeners[targetIndex] = registry.eventListeners[targetIndex] || {};
	    registry.eventListeners[targetIndex][event] = registry.eventListeners[targetIndex][event] || [];
	    registry.eventListeners[targetIndex][event].push(handler);
	    Log$1.info('Add eventListener', 'Target:', target, 'Event: ' + event, 'Handler:', handler.toString());
	  },
	  removeEventListener: function removeEventListener(target, event, handler) {
	    var targetIndex = registry.targets.indexOf(target);
	    if (targetIndex > -1 && registry.eventListeners[targetIndex] && registry.eventListeners[targetIndex][event] && registry.eventListeners[targetIndex][event].indexOf(handler) > -1) {
	      registry.eventListeners[targetIndex][event] = registry.eventListeners[targetIndex][event].filter(function (fn) {
	        return fn !== handler;
	      });
	      Log$1.info('Remove eventListener', 'Target:', target, 'Event: ' + event, 'Handler:', handler.toString());
	      target.removeEventListener(event, handler);
	    } else {
	      Log$1.error('Remove eventListener', 'Not found', 'Target', target, 'Event: ' + event, 'Handler', handler.toString());
	    }
	  },
	  // if `event` is omitted, removes all registered event listeners for target
	  // if `target` is also omitted, removes all registered event listeners
	  removeEventListeners: function removeEventListeners(target, event) {
	    var _this3 = this;
	    if (target && event) {
	      var targetIndex = registry.targets.indexOf(target);
	      if (targetIndex > -1) {
	        registry.eventListeners[targetIndex][event].forEach(function (handler) {
	          _this3.removeEventListener(target, event, handler);
	        });
	      }
	    } else if (target) {
	      var _targetIndex = registry.targets.indexOf(target);
	      if (_targetIndex > -1) {
	        Object.keys(registry.eventListeners[_targetIndex]).forEach(function (_event) {
	          _this3.removeEventListeners(target, _event);
	        });
	      }
	    } else {
	      Object.keys(registry.eventListeners).forEach(function (targetIndex) {
	        _this3.removeEventListeners(registry.targets[targetIndex]);
	      });
	    }
	  },
	  // Clear everything (to be called upon app close for proper cleanup)
	  clear: function clear() {
	    this.clearTimeouts();
	    this.clearIntervals();
	    this.removeEventListeners();
	    registry.eventListeners = [];
	    registry.timeouts = [];
	    registry.intervals = [];
	    registry.targets = [];
	  }
	};

	/*
	 * If not stated otherwise in this file or this component's LICENSE file the
	 * following copyright and licenses apply:
	 *
	 * Copyright 2020 Metrological
	 *
	 * Licensed under the Apache License, Version 2.0 (the License);
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	var isObject$1 = function isObject(v) {
	  return typeof v === 'object' && v !== null;
	};
	var isString$1 = function isString(v) {
	  return typeof v === 'string';
	};

	/*
	 * If not stated otherwise in this file or this component's LICENSE file the
	 * following copyright and licenses apply:
	 *
	 * Copyright 2020 Metrological
	 *
	 * Licensed under the Apache License, Version 2.0 (the License);
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	var colors = {
	  white: '#ffffff',
	  black: '#000000',
	  red: '#ff0000',
	  green: '#00ff00',
	  blue: '#0000ff',
	  yellow: '#feff00',
	  cyan: '#00feff',
	  magenta: '#ff00ff'
	};
	var normalizedColors = {
	  //store for normalized colors
	};
	var addColors = function addColors(colorsToAdd, value) {
	  if (isObject$1(colorsToAdd)) {
	    // clean up normalizedColors if they exist in the to be added colors
	    Object.keys(colorsToAdd).forEach(function (color) {
	      return cleanUpNormalizedColors(color);
	    });
	    colors = Object.assign({}, colors, colorsToAdd);
	  } else if (isString$1(colorsToAdd) && value) {
	    cleanUpNormalizedColors(colorsToAdd);
	    colors[colorsToAdd] = value;
	  }
	};
	var cleanUpNormalizedColors = function cleanUpNormalizedColors(color) {
	  for (var c in normalizedColors) {
	    if (c.indexOf(color) > -1) {
	      delete normalizedColors[c];
	    }
	  }
	};
	var initColors = function initColors(file) {
	  return new Promise(function (resolve, reject) {
	    if (typeof file === 'object') {
	      addColors(file);
	      return resolve();
	    }
	    fetchJson(file).then(function (json) {
	      addColors(json);
	      return resolve();
	    }).catch(function () {
	      var error = 'Colors file ' + file + ' not found';
	      Log$1.error(error);
	      return reject(error);
	    });
	  });
	};

	var name = "@lightningjs/sdk";
	var version = "5.3.2";
	var license = "Apache-2.0";
	var types = "index.d.ts";
	var scripts = {
		postinstall: "node ./scripts/postinstall.js",
		lint: "eslint '**/*.js'",
		release: "npm publish --access public",
		typedoc: "typedoc --tsconfig tsconfig.typedoc.json",
		tsd: "tsd"
	};
	var husky = {
		hooks: {
			"pre-commit": "lint-staged"
		}
	};
	var dependencies = {
		"@babel/polyfill": "^7.11.5",
		"@lightningjs/core": "^2.7.0",
		"@metrological/sdk": "^1.0.0",
		"@michieljs/execute-as-promise": "^1.0.0",
		deepmerge: "^4.2.2",
		"is-plain-object": "^5.0.0",
		localcookies: "^2.0.0",
		shelljs: "^0.8.5",
		"url-polyfill": "^1.1.10",
		"whatwg-fetch": "^3.0.0"
	};
	var devDependencies = {
		"@babel/core": "^7.11.6",
		"@babel/plugin-transform-parameters": "^7.10.5 ",
		"@babel/plugin-transform-spread": "^7.11.0",
		"@babel/preset-env": "^7.11.5",
		"babel-eslint": "^10.1.0",
		eslint: "^7.10.0",
		"eslint-config-prettier": "^6.12.0",
		"eslint-plugin-prettier": "^3.1.4",
		husky: "^4.3.0",
		"lint-staged": "^10.4.0",
		prettier: "^1.19.1",
		rollup: "^1.32.1",
		"rollup-plugin-babel": "^4.4.0",
		tsd: "^0.22.0",
		typedoc: "^0.23.9"
	};
	var repository = {
		type: "git",
		url: "git@github.com:rdkcentral/Lightning-SDK.git"
	};
	var bugs = {
		url: "https://github.com/rdkcentral/Lightning-SDK/issues"
	};
	var packageInfo = {
		name: name,
		version: version,
		license: license,
		types: types,
		scripts: scripts,
		"lint-staged": {
		"*.js": [
			"eslint --fix"
		],
		"src/startApp.js": [
			"rollup -c ./rollup.config.js"
		]
	},
		husky: husky,
		dependencies: dependencies,
		devDependencies: devDependencies,
		repository: repository,
		bugs: bugs
	};

	var AppInstance;
	var defaultOptions = {
	  stage: {
	    w: 1920,
	    h: 1080,
	    precision: 1,
	    clearColor: 0x00000000,
	    canvas2d: false
	  },
	  debug: false,
	  defaultFontFace: 'RobotoRegular',
	  keys: {
	    8: 'Back',
	    13: 'Enter',
	    27: 'Menu',
	    37: 'Left',
	    38: 'Up',
	    39: 'Right',
	    40: 'Down',
	    174: 'ChannelDown',
	    175: 'ChannelUp',
	    178: 'Stop',
	    250: 'PlayPause',
	    191: 'Search',
	    // Use "/" for keyboard
	    409: 'Search'
	  }
	};
	var customFontFaces = [];
	var fontLoader = function fontLoader(fonts, store) {
	  return new Promise(function (resolve, reject) {
	    fonts.map(function (_ref) {
	      var family = _ref.family,
	        url = _ref.url,
	        urls = _ref.urls,
	        descriptors = _ref.descriptors;
	      return function () {
	        var src = urls ? urls.map(function (url) {
	          return 'url(' + url + ')';
	        }) : 'url(' + url + ')';
	        var fontFace = new FontFace(family, src, descriptors || {});
	        store.push(fontFace);
	        Log$1.info('Loading font', family);
	        document.fonts.add(fontFace);
	        return fontFace.load();
	      };
	    }).reduce(function (promise, method) {
	      return promise.then(function () {
	        return method();
	      });
	    }, Promise.resolve(null)).then(resolve).catch(reject);
	  });
	};
	function Application (App, appData, platformSettings) {
	  var width = platformSettings.width,
	    height = platformSettings.height;
	  if (width && height) {
	    defaultOptions.stage['w'] = width;
	    defaultOptions.stage['h'] = height;
	    defaultOptions.stage['precision'] = width / 1920;
	  }

	  // support for 720p browser
	  if (!width && !height && window.innerHeight === 720) {
	    defaultOptions.stage['w'] = 1280;
	    defaultOptions.stage['h'] = 720;
	    defaultOptions.stage['precision'] = 1280 / 1920;
	  }
	  return /*#__PURE__*/function (_Lightning$Applicatio) {
	    _inherits(Application, _Lightning$Applicatio);
	    var _super = _createSuper(Application);
	    function Application(options) {
	      var _this;
	      _classCallCheck(this, Application);
	      var config = cjs(defaultOptions, options, {
	        isMergeableObject: isPlainObject
	      });
	      _this = _super.call(this, config);
	      _this.config = config;
	      return _this;
	    }
	    _createClass(Application, [{
	      key: "colorshift",
	      value: function colorshift() {
	        var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	        var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	        Accessibility.colorshift(this, type, config);
	      }
	    }, {
	      key: "keymapping",
	      get: function get() {
	        return this.stage.application.config.keys;
	      }

	      /**
	       * This function overrides the default keymap with the latest keymap.
	       * @param customKeyMap
	       * @param keepDuplicates
	       */
	    }, {
	      key: "overrideKeyMap",
	      value: function overrideKeyMap(customKeyMap) {
	        var keepDuplicates = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	        var baseKeyMap = this.stage.application.config.keys;
	        Object.keys(customKeyMap).reduce(function (keymapping, key) {
	          // prevent duplicate values to exist in final keymapping (i.e. 2 keys triggering 'Back')
	          if (!keepDuplicates) {
	            Object.keys(baseKeyMap).forEach(function (baseKey) {
	              if (baseKey != key && baseKeyMap[baseKey] == customKeyMap[key]) {
	                delete keymapping[baseKey];
	              }
	            });
	          }
	          keymapping[key] = customKeyMap[key];
	          return keymapping;
	        }, baseKeyMap);
	        return baseKeyMap;
	      }
	    }, {
	      key: "_setup",
	      value: function _setup() {
	        var _this2 = this;
	        Promise.all([this.loadFonts(App.config && App.config.fonts || App.getFonts && App.getFonts() || []),
	        // to be deprecated
	        Locale$1.load(App.config && App.config.locale || App.getLocale && App.getLocale()), App.language && this.loadLanguage(App.language()), App.colors && this.loadColors(App.colors())]).then(function () {
	          Metrics$1.app.loaded();
	          _this2.w = _this2.config.stage.w / _this2.config.stage.precision;
	          _this2.h = _this2.config.stage.h / _this2.config.stage.precision;
	          AppInstance = _this2.stage.c({
	            ref: 'App',
	            type: App,
	            zIndex: 1,
	            forceZIndexContext: !!platformSettings.showVersion || !!platformSettings.showFps
	          });
	          _this2.childList.a(AppInstance);
	          _this2._refocus();
	          Log$1.info('App version', _this2.config.version);
	          Log$1.info('SDK version', packageInfo.version);
	          if (platformSettings.showVersion) {
	            _this2.childList.a({
	              ref: 'VersionLabel',
	              type: VersionLabel,
	              version: _this2.config.version,
	              sdkVersion: packageInfo.version,
	              zIndex: 1
	            });
	          }
	          if (platformSettings.showFps) {
	            _this2.childList.a({
	              ref: 'FpsCounter',
	              type: FpsIndicator,
	              zIndex: 1
	            });
	          }
	          _get(_getPrototypeOf(Application.prototype), "_setup", _this2).call(_this2);
	        }).catch(console.error);
	      }
	    }, {
	      key: "_handleBack",
	      value: function _handleBack() {
	        this.closeApp();
	      }
	    }, {
	      key: "_handleExit",
	      value: function _handleExit() {
	        this.closeApp();
	      }
	    }, {
	      key: "closeApp",
	      value: function closeApp() {
	        Log$1.info('Signaling App Close');
	        if (platformSettings.onClose && typeof platformSettings.onClose === 'function') {
	          platformSettings.onClose.apply(platformSettings, arguments);
	        } else {
	          this.close();
	        }
	      }
	    }, {
	      key: "close",
	      value: function close() {
	        Log$1.info('Closing App');
	        Settings$1.clearSubscribers();
	        Registry.clear();
	        this.childList.remove(this.tag('App'));
	        this.cleanupFonts();
	        // force texture garbage collect
	        this.stage.gc();
	        this.destroy();
	      }
	    }, {
	      key: "loadFonts",
	      value: function loadFonts(fonts) {
	        return platformSettings.fontLoader && typeof platformSettings.fontLoader === 'function' ? platformSettings.fontLoader(fonts, customFontFaces) : fontLoader(fonts, customFontFaces);
	      }
	    }, {
	      key: "cleanupFonts",
	      value: function cleanupFonts() {
	        if ('delete' in document.fonts) {
	          customFontFaces.forEach(function (fontFace) {
	            Log$1.info('Removing font', fontFace.family);
	            document.fonts.delete(fontFace);
	          });
	        } else {
	          Log$1.info('No support for removing manually-added fonts');
	        }
	      }
	    }, {
	      key: "loadLanguage",
	      value: function loadLanguage(config) {
	        var file = Utils.asset('translations.json');
	        var language = config;
	        if (typeof language === 'object') {
	          language = config.language || null;
	          file = config.file || file;
	        }
	        return initLanguage(file, language);
	      }
	    }, {
	      key: "loadColors",
	      value: function loadColors(config) {
	        var file = Utils.asset('colors.json');
	        if (config && (typeof config === 'string' || typeof config === 'object')) {
	          file = config;
	        }
	        return initColors(file);
	      }
	    }, {
	      key: "focus",
	      set: function set(v) {
	        this._focussed = v;
	        this._refocus();
	      }
	    }, {
	      key: "_getFocused",
	      value: function _getFocused() {
	        return this._focussed || this.tag('App');
	      }
	    }], [{
	      key: "_template",
	      value: function _template() {
	        return {
	          w: 1920,
	          h: 1080
	        };
	      }
	    }]);
	    return Application;
	  }(Lightning$1.Application);
	}

	/*#__PURE__*/(function (_Lightning$textures$I) {
	  _inherits(ScaledImageTexture, _Lightning$textures$I);
	  var _super = _createSuper(ScaledImageTexture);
	  function ScaledImageTexture(stage) {
	    var _this;
	    _classCallCheck(this, ScaledImageTexture);
	    _this = _super.call(this, stage);
	    _this._scalingOptions = undefined;
	    return _this;
	  }
	  _createClass(ScaledImageTexture, [{
	    key: "options",
	    set: function set(options) {
	      this.resizeMode = this._scalingOptions = options;
	    }
	  }, {
	    key: "_getLookupId",
	    value: function _getLookupId() {
	      return "".concat(this._src, "-").concat(this._scalingOptions.type, "-").concat(this._scalingOptions.w, "-").concat(this._scalingOptions.h);
	    }
	  }, {
	    key: "getNonDefaults",
	    value: function getNonDefaults() {
	      var obj = _get(_getPrototypeOf(ScaledImageTexture.prototype), "getNonDefaults", this).call(this);
	      if (this._src) {
	        obj.src = this._src;
	      }
	      return obj;
	    }
	  }]);
	  return ScaledImageTexture;
	})(Lightning$1.textures.ImageTexture);

	var events = ['timeupdate', 'error', 'ended', 'loadeddata', 'canplay', 'play', 'playing', 'pause', 'loadstart', 'seeking', 'seeked', 'encrypted'];
	var mediaUrl = function mediaUrl(url) {
	  return url;
	};
	var initMediaPlayer = function initMediaPlayer(config) {
	  if (config.mediaUrl) {
	    mediaUrl = config.mediaUrl;
	  }
	};
	/*#__PURE__*/(function (_Lightning$Component) {
	  _inherits(Mediaplayer, _Lightning$Component);
	  var _super = _createSuper(Mediaplayer);
	  function Mediaplayer() {
	    _classCallCheck(this, Mediaplayer);
	    return _super.apply(this, arguments);
	  }
	  _createClass(Mediaplayer, [{
	    key: "_construct",
	    value: function _construct() {
	      this._skipRenderToTexture = false;
	      this._metrics = null;
	      this._textureMode = Settings$1.get('platform', 'textureMode') || false;
	      Log$1.info('Texture mode: ' + this._textureMode);
	      console.warn(["The 'MediaPlayer'-plugin in the Lightning-SDK is deprecated and will be removed in future releases.", "Please consider using the new 'VideoPlayer'-plugin instead.", 'https://rdkcentral.github.io/Lightning-SDK/#/plugins/videoplayer'].join('\n\n'));
	    }
	  }, {
	    key: "skipRenderToTexture",
	    set: function set(v) {
	      this._skipRenderToTexture = v;
	    }
	  }, {
	    key: "textureMode",
	    get: function get() {
	      return this._textureMode;
	    }
	  }, {
	    key: "videoView",
	    get: function get() {
	      return this.tag('Video');
	    }
	  }, {
	    key: "_init",
	    value: function _init() {
	      //re-use videotag if already there
	      var videoEls = document.getElementsByTagName('video');
	      if (videoEls && videoEls.length > 0) this.videoEl = videoEls[0];else {
	        this.videoEl = document.createElement('video');
	        this.videoEl.setAttribute('id', 'video-player');
	        this.videoEl.style.position = 'absolute';
	        this.videoEl.style.zIndex = '1';
	        this.videoEl.style.display = 'none';
	        this.videoEl.setAttribute('width', '100%');
	        this.videoEl.setAttribute('height', '100%');
	        this.videoEl.style.visibility = this.textureMode ? 'hidden' : 'visible';
	        document.body.appendChild(this.videoEl);
	      }
	      if (this.textureMode && !this._skipRenderToTexture) {
	        this._createVideoTexture();
	      }
	      this.eventHandlers = [];
	    }
	  }, {
	    key: "_registerListeners",
	    value: function _registerListeners() {
	      var _this = this;
	      events.forEach(function (event) {
	        var handler = function handler(e) {
	          if (_this._metrics && _this._metrics[event] && typeof _this._metrics[event] === 'function') {
	            _this._metrics[event]({
	              currentTime: _this.videoEl.currentTime
	            });
	          }
	          _this.fire(event, {
	            videoElement: _this.videoEl,
	            event: e
	          });
	        };
	        _this.eventHandlers.push(handler);
	        _this.videoEl.addEventListener(event, handler);
	      });
	    }
	  }, {
	    key: "_deregisterListeners",
	    value: function _deregisterListeners() {
	      var _this2 = this;
	      Log$1.info('Deregistering event listeners MediaPlayer');
	      events.forEach(function (event, index) {
	        _this2.videoEl.removeEventListener(event, _this2.eventHandlers[index]);
	      });
	      this.eventHandlers = [];
	    }
	  }, {
	    key: "_attach",
	    value: function _attach() {
	      this._registerListeners();
	    }
	  }, {
	    key: "_detach",
	    value: function _detach() {
	      this._deregisterListeners();
	      this.close();
	    }
	  }, {
	    key: "_createVideoTexture",
	    value: function _createVideoTexture() {
	      var stage = this.stage;
	      var gl = stage.gl;
	      var glTexture = gl.createTexture();
	      gl.bindTexture(gl.TEXTURE_2D, glTexture);
	      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
	      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
	      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
	      this.videoTexture.options = {
	        source: glTexture,
	        w: this.videoEl.width,
	        h: this.videoEl.height
	      };
	    }
	  }, {
	    key: "_startUpdatingVideoTexture",
	    value: function _startUpdatingVideoTexture() {
	      var _this3 = this;
	      if (this.textureMode && !this._skipRenderToTexture) {
	        var stage = this.stage;
	        if (!this._updateVideoTexture) {
	          this._updateVideoTexture = function () {
	            if (_this3.videoTexture.options.source && _this3.videoEl.videoWidth && _this3.active) {
	              var gl = stage.gl;
	              var currentTime = new Date().getTime();

	              // When BR2_PACKAGE_GST1_PLUGINS_BAD_PLUGIN_DEBUGUTILS is not set in WPE, webkitDecodedFrameCount will not be available.
	              // We'll fallback to fixed 30fps in this case.
	              var frameCount = _this3.videoEl.webkitDecodedFrameCount;
	              var mustUpdate = frameCount ? _this3._lastFrame !== frameCount : _this3._lastTime < currentTime - 30;
	              if (mustUpdate) {
	                _this3._lastTime = currentTime;
	                _this3._lastFrame = frameCount;
	                try {
	                  gl.bindTexture(gl.TEXTURE_2D, _this3.videoTexture.options.source);
	                  gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
	                  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, _this3.videoEl);
	                  _this3._lastFrame = _this3.videoEl.webkitDecodedFrameCount;
	                  _this3.videoTextureView.visible = true;
	                  _this3.videoTexture.options.w = _this3.videoEl.videoWidth;
	                  _this3.videoTexture.options.h = _this3.videoEl.videoHeight;
	                  var expectedAspectRatio = _this3.videoTextureView.w / _this3.videoTextureView.h;
	                  var realAspectRatio = _this3.videoEl.videoWidth / _this3.videoEl.videoHeight;
	                  if (expectedAspectRatio > realAspectRatio) {
	                    _this3.videoTextureView.scaleX = realAspectRatio / expectedAspectRatio;
	                    _this3.videoTextureView.scaleY = 1;
	                  } else {
	                    _this3.videoTextureView.scaleY = expectedAspectRatio / realAspectRatio;
	                    _this3.videoTextureView.scaleX = 1;
	                  }
	                } catch (e) {
	                  Log$1.error('texImage2d video', e);
	                  _this3._stopUpdatingVideoTexture();
	                  _this3.videoTextureView.visible = false;
	                }
	                _this3.videoTexture.source.forceRenderUpdate();
	              }
	            }
	          };
	        }
	        if (!this._updatingVideoTexture) {
	          stage.on('frameStart', this._updateVideoTexture);
	          this._updatingVideoTexture = true;
	        }
	      }
	    }
	  }, {
	    key: "_stopUpdatingVideoTexture",
	    value: function _stopUpdatingVideoTexture() {
	      if (this.textureMode) {
	        var stage = this.stage;
	        stage.removeListener('frameStart', this._updateVideoTexture);
	        this._updatingVideoTexture = false;
	        this.videoTextureView.visible = false;
	        if (this.videoTexture.options.source) {
	          var gl = stage.gl;
	          gl.bindTexture(gl.TEXTURE_2D, this.videoTexture.options.source);
	          gl.clearColor(0, 0, 0, 1);
	          gl.clear(gl.COLOR_BUFFER_BIT);
	        }
	      }
	    }
	  }, {
	    key: "updateSettings",
	    value: function updateSettings() {
	      var _this4 = this;
	      var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	      // The Component that 'consumes' the media player.
	      this._consumer = settings.consumer;
	      if (this._consumer && this._consumer.getMediaplayerSettings) {
	        // Allow consumer to add settings.
	        settings = Object.assign(settings, this._consumer.getMediaplayerSettings());
	      }
	      if (!Lightning$1.Utils.equalValues(this._stream, settings.stream)) {
	        if (settings.stream && settings.stream.keySystem) {
	          navigator.requestMediaKeySystemAccess(settings.stream.keySystem.id, settings.stream.keySystem.config).then(function (keySystemAccess) {
	            return keySystemAccess.createMediaKeys();
	          }).then(function (createdMediaKeys) {
	            return _this4.videoEl.setMediaKeys(createdMediaKeys);
	          }).then(function () {
	            if (settings.stream && settings.stream.src) _this4.open(settings.stream.src);
	          }).catch(function () {
	            console.error('Failed to set up MediaKeys');
	          });
	        } else if (settings.stream && settings.stream.src) {
	          // This is here to be backwards compatible, will be removed
	          // in future sdk release
	          if (Settings$1.get('app', 'hls')) {
	            if (!window.Hls) {
	              window.Hls = /*#__PURE__*/function () {
	                function Hls() {
	                  _classCallCheck(this, Hls);
	                }
	                _createClass(Hls, null, [{
	                  key: "isSupported",
	                  value: function isSupported() {
	                    console.warn('hls-light not included');
	                    return false;
	                  }
	                }]);
	                return Hls;
	              }();
	            }
	            if (window.Hls.isSupported()) {
	              if (!this._hls) this._hls = new window.Hls({
	                liveDurationInfinity: true
	              });
	              this._hls.loadSource(settings.stream.src);
	              this._hls.attachMedia(this.videoEl);
	              this.videoEl.style.display = 'block';
	            }
	          } else {
	            this.open(settings.stream.src);
	          }
	        } else {
	          this.close();
	        }
	        this._stream = settings.stream;
	      }
	      this._setHide(settings.hide);
	      this._setVideoArea(settings.videoPos);
	    }
	  }, {
	    key: "_setHide",
	    value: function _setHide(hide) {
	      if (this.textureMode) {
	        this.tag('Video').setSmooth('alpha', hide ? 0 : 1);
	      } else {
	        this.videoEl.style.visibility = hide ? 'hidden' : 'visible';
	      }
	    }
	  }, {
	    key: "open",
	    value: function open(url) {
	      var _this5 = this;
	      var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
	        hide: false,
	        videoPosition: null
	      };
	      // prep the media url to play depending on platform (mediaPlayerplugin)
	      url = mediaUrl(url);
	      this._metrics = Metrics$1.media(url);
	      Log$1.info('Playing stream', url);
	      if (this.application.noVideo) {
	        Log$1.info('noVideo option set, so ignoring: ' + url);
	        return;
	      }
	      // close the video when opening same url as current (effectively reloading)
	      if (this.videoEl.getAttribute('src') === url) {
	        this.close();
	      }
	      this.videoEl.setAttribute('src', url);

	      // force hide, then force show (in next tick!)
	      // (fixes comcast playback rollover issue)
	      this.videoEl.style.visibility = 'hidden';
	      this.videoEl.style.display = 'none';
	      setTimeout(function () {
	        _this5.videoEl.style.display = 'block';
	        _this5.videoEl.style.visibility = 'visible';
	      });
	      this._setHide(settings.hide);
	      this._setVideoArea(settings.videoPosition || [0, 0, 1920, 1080]);
	    }
	  }, {
	    key: "close",
	    value: function close() {
	      // We need to pause first in order to stop sound.
	      this.videoEl.pause();
	      this.videoEl.removeAttribute('src');

	      // force load to reset everything without errors
	      this.videoEl.load();
	      this._clearSrc();
	      this.videoEl.style.display = 'none';
	    }
	  }, {
	    key: "playPause",
	    value: function playPause() {
	      if (this.isPlaying()) {
	        this.doPause();
	      } else {
	        this.doPlay();
	      }
	    }
	  }, {
	    key: "muted",
	    get: function get() {
	      return this.videoEl.muted;
	    },
	    set: function set(v) {
	      this.videoEl.muted = v;
	    }
	  }, {
	    key: "loop",
	    get: function get() {
	      return this.videoEl.loop;
	    },
	    set: function set(v) {
	      this.videoEl.loop = v;
	    }
	  }, {
	    key: "isPlaying",
	    value: function isPlaying() {
	      return this._getState() === 'Playing';
	    }
	  }, {
	    key: "doPlay",
	    value: function doPlay() {
	      this.videoEl.play();
	    }
	  }, {
	    key: "doPause",
	    value: function doPause() {
	      this.videoEl.pause();
	    }
	  }, {
	    key: "reload",
	    value: function reload() {
	      var url = this.videoEl.getAttribute('src');
	      this.close();
	      this.videoEl.src = url;
	    }
	  }, {
	    key: "getPosition",
	    value: function getPosition() {
	      return Promise.resolve(this.videoEl.currentTime);
	    }
	  }, {
	    key: "setPosition",
	    value: function setPosition(pos) {
	      this.videoEl.currentTime = pos;
	    }
	  }, {
	    key: "getDuration",
	    value: function getDuration() {
	      return Promise.resolve(this.videoEl.duration);
	    }
	  }, {
	    key: "seek",
	    value: function seek(time) {
	      var absolute = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	      if (absolute) {
	        this.videoEl.currentTime = time;
	      } else {
	        this.videoEl.currentTime += time;
	      }
	    }
	  }, {
	    key: "videoTextureView",
	    get: function get() {
	      return this.tag('Video').tag('VideoTexture');
	    }
	  }, {
	    key: "videoTexture",
	    get: function get() {
	      return this.videoTextureView.texture;
	    }
	  }, {
	    key: "_setVideoArea",
	    value: function _setVideoArea(videoPos) {
	      if (Lightning$1.Utils.equalValues(this._videoPos, videoPos)) {
	        return;
	      }
	      this._videoPos = videoPos;
	      if (this.textureMode) {
	        this.videoTextureView.patch({
	          smooth: {
	            x: videoPos[0],
	            y: videoPos[1],
	            w: videoPos[2] - videoPos[0],
	            h: videoPos[3] - videoPos[1]
	          }
	        });
	      } else {
	        var precision = this.stage.getRenderPrecision();
	        this.videoEl.style.left = Math.round(videoPos[0] * precision) + 'px';
	        this.videoEl.style.top = Math.round(videoPos[1] * precision) + 'px';
	        this.videoEl.style.width = Math.round((videoPos[2] - videoPos[0]) * precision) + 'px';
	        this.videoEl.style.height = Math.round((videoPos[3] - videoPos[1]) * precision) + 'px';
	      }
	    }
	  }, {
	    key: "_fireConsumer",
	    value: function _fireConsumer(event, args) {
	      if (this._consumer) {
	        this._consumer.fire(event, args);
	      }
	    }
	  }, {
	    key: "_equalInitData",
	    value: function _equalInitData(buf1, buf2) {
	      if (!buf1 || !buf2) return false;
	      if (buf1.byteLength != buf2.byteLength) return false;
	      var dv1 = new Int8Array(buf1);
	      var dv2 = new Int8Array(buf2);
	      for (var i = 0; i != buf1.byteLength; i++) if (dv1[i] != dv2[i]) return false;
	      return true;
	    }
	  }, {
	    key: "error",
	    value: function error(args) {
	      this._fireConsumer('$mediaplayerError', args);
	      this._setState('');
	      return '';
	    }
	  }, {
	    key: "loadeddata",
	    value: function loadeddata(args) {
	      this._fireConsumer('$mediaplayerLoadedData', args);
	    }
	  }, {
	    key: "play",
	    value: function play(args) {
	      this._fireConsumer('$mediaplayerPlay', args);
	    }
	  }, {
	    key: "playing",
	    value: function playing(args) {
	      this._fireConsumer('$mediaplayerPlaying', args);
	      this._setState('Playing');
	    }
	  }, {
	    key: "canplay",
	    value: function canplay(args) {
	      this.videoEl.play();
	      this._fireConsumer('$mediaplayerStart', args);
	    }
	  }, {
	    key: "loadstart",
	    value: function loadstart(args) {
	      this._fireConsumer('$mediaplayerLoad', args);
	    }
	  }, {
	    key: "seeked",
	    value: function seeked() {
	      this._fireConsumer('$mediaplayerSeeked', {
	        currentTime: this.videoEl.currentTime,
	        duration: this.videoEl.duration || 1
	      });
	    }
	  }, {
	    key: "seeking",
	    value: function seeking() {
	      this._fireConsumer('$mediaplayerSeeking', {
	        currentTime: this.videoEl.currentTime,
	        duration: this.videoEl.duration || 1
	      });
	    }
	  }, {
	    key: "durationchange",
	    value: function durationchange(args) {
	      this._fireConsumer('$mediaplayerDurationChange', args);
	    }
	  }, {
	    key: "encrypted",
	    value: function encrypted(args) {
	      var video = args.videoElement;
	      var event = args.event;
	      // FIXME: Double encrypted events need to be properly filtered by Gstreamer
	      if (video.mediaKeys && !this._equalInitData(this._previousInitData, event.initData)) {
	        this._previousInitData = event.initData;
	        this._fireConsumer('$mediaplayerEncrypted', args);
	      }
	    }
	  }], [{
	    key: "_template",
	    value: function _template() {
	      return {
	        Video: {
	          VideoWrap: {
	            VideoTexture: {
	              visible: false,
	              pivot: 0.5,
	              texture: {
	                type: Lightning$1.textures.StaticTexture,
	                options: {}
	              }
	            }
	          }
	        }
	      };
	    }
	  }, {
	    key: "_states",
	    value: function _states() {
	      return [/*#__PURE__*/function (_this6) {
	        _inherits(Playing, _this6);
	        var _super2 = _createSuper(Playing);
	        function Playing() {
	          _classCallCheck(this, Playing);
	          return _super2.apply(this, arguments);
	        }
	        _createClass(Playing, [{
	          key: "$enter",
	          value: function $enter() {
	            this._startUpdatingVideoTexture();
	          }
	        }, {
	          key: "$exit",
	          value: function $exit() {
	            this._stopUpdatingVideoTexture();
	          }
	        }, {
	          key: "timeupdate",
	          value: function timeupdate() {
	            this._fireConsumer('$mediaplayerProgress', {
	              currentTime: this.videoEl.currentTime,
	              duration: this.videoEl.duration || 1
	            });
	          }
	        }, {
	          key: "ended",
	          value: function ended(args) {
	            this._fireConsumer('$mediaplayerEnded', args);
	            this._setState('');
	          }
	        }, {
	          key: "pause",
	          value: function pause(args) {
	            this._fireConsumer('$mediaplayerPause', args);
	            this._setState('Playing.Paused');
	          }
	        }, {
	          key: "_clearSrc",
	          value: function _clearSrc() {
	            this._fireConsumer('$mediaplayerStop', {});
	            this._setState('');
	          }
	        }], [{
	          key: "_states",
	          value: function _states() {
	            return [/*#__PURE__*/function (_this7) {
	              _inherits(Paused, _this7);
	              var _super3 = _createSuper(Paused);
	              function Paused() {
	                _classCallCheck(this, Paused);
	                return _super3.apply(this, arguments);
	              }
	              return _createClass(Paused);
	            }(this)];
	          }
	        }]);
	        return Playing;
	      }(this)];
	    }
	  }]);
	  return Mediaplayer;
	})(Lightning$1.Component);

	var localCookie = /*#__PURE__*/function () {
	  function localCookie(e) {
	    _classCallCheck(this, localCookie);
	    return e = e || {}, this.forceCookies = e.forceCookies || !1, !0 === this._checkIfLocalStorageWorks() && !0 !== e.forceCookies ? {
	      getItem: this._getItemLocalStorage,
	      setItem: this._setItemLocalStorage,
	      removeItem: this._removeItemLocalStorage,
	      clear: this._clearLocalStorage,
	      keys: this._getLocalStorageKeys
	    } : {
	      getItem: this._getItemCookie,
	      setItem: this._setItemCookie,
	      removeItem: this._removeItemCookie,
	      clear: this._clearCookies,
	      keys: this._getCookieKeys
	    };
	  }
	  _createClass(localCookie, [{
	    key: "_checkIfLocalStorageWorks",
	    value: function _checkIfLocalStorageWorks() {
	      if ("undefined" == typeof localStorage) return !1;
	      try {
	        return localStorage.setItem("feature_test", "yes"), "yes" === localStorage.getItem("feature_test") && (localStorage.removeItem("feature_test"), !0);
	      } catch (e) {
	        return !1;
	      }
	    }
	  }, {
	    key: "_getItemLocalStorage",
	    value: function _getItemLocalStorage(e) {
	      return window.localStorage.getItem(e);
	    }
	  }, {
	    key: "_setItemLocalStorage",
	    value: function _setItemLocalStorage(e, t) {
	      return window.localStorage.setItem(e, t);
	    }
	  }, {
	    key: "_removeItemLocalStorage",
	    value: function _removeItemLocalStorage(e) {
	      return window.localStorage.removeItem(e);
	    }
	  }, {
	    key: "_clearLocalStorage",
	    value: function _clearLocalStorage() {
	      return window.localStorage.clear();
	    }
	  }, {
	    key: "_getLocalStorageKeys",
	    value: function _getLocalStorageKeys() {
	      return Object.keys(window.localStorage);
	    }
	  }, {
	    key: "_getItemCookie",
	    value: function _getItemCookie(e) {
	      var t = document.cookie.match(RegExp("(?:^|;\\s*)" + function (e) {
	        return e.replace(/([.*+?\^${}()|\[\]\/\\])/g, "\\$1");
	      }(e) + "=([^;]*)"));
	      return t && "" === t[1] && (t[1] = null), t ? t[1] : null;
	    }
	  }, {
	    key: "_setItemCookie",
	    value: function _setItemCookie(e, t) {
	      var o = new Date(),
	        r = new Date(o.getTime() + 15768e7);
	      document.cookie = "".concat(e, "=").concat(t, "; expires=").concat(r.toUTCString(), ";");
	    }
	  }, {
	    key: "_removeItemCookie",
	    value: function _removeItemCookie(e) {
	      document.cookie = "".concat(e, "=;Max-Age=-99999999;");
	    }
	  }, {
	    key: "_clearCookies",
	    value: function _clearCookies() {
	      document.cookie.split(";").forEach(function (e) {
	        document.cookie = e.replace(/^ +/, "").replace(/=.*/, "=;expires=Max-Age=-99999999");
	      });
	    }
	  }, {
	    key: "_getCookieKeys",
	    value: function _getCookieKeys() {
	      return document.cookie.split(";").map(function (e) {
	        return e.split("=")[0];
	      });
	    }
	  }]);
	  return localCookie;
	}();

	/*
	 * If not stated otherwise in this file or this component's LICENSE file the
	 * following copyright and licenses apply:
	 *
	 * Copyright 2020 Metrological
	 *
	 * Licensed under the Apache License, Version 2.0 (the License);
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	var initStorage = function initStorage() {
	  Settings$1.get('platform', 'id');
	  // todo: pass options (for example to force the use of cookies)
	  new localCookie();
	};

	/*
	 * If not stated otherwise in this file or this component's LICENSE file the
	 * following copyright and licenses apply:
	 *
	 * Copyright 2020 Metrological
	 *
	 * Licensed under the Apache License, Version 2.0 (the License);
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	var hasRegex = /\{\/(.*?)\/([igm]{0,3})\}/g;
	var isWildcard = /^[!*$]$/;
	var hasLookupId = /\/:\w+?@@([0-9]+?)@@/;
	var isNamedGroup = /^\/:/;

	/**
	 * Test if a route is part regular expressed
	 * and replace it for a simple character
	 * @param route
	 * @returns {*}
	 */
	var stripRegex = function stripRegex(route) {
	  var char = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'R';
	  // if route is part regular expressed we replace
	  // the regular expression for a character to
	  // simplify floor calculation and backtracking
	  if (hasRegex.test(route)) {
	    route = route.replace(hasRegex, char);
	  }
	  return route;
	};

	/*
	 * If not stated otherwise in this file or this component's LICENSE file the
	 * following copyright and licenses apply:
	 *
	 * Copyright 2020 Metrological
	 *
	 * Licensed under the Apache License, Version 2.0 (the License);
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	/**
	 * Create a local request register
	 * @param flags
	 * @returns {Map<any, any>}
	 */
	var createRegister = function createRegister(flags) {
	  var reg = new Map()
	  // store user defined and router
	  // defined flags in register
	  ;
	  [].concat(_toConsumableArray(Object.keys(flags)), _toConsumableArray(Object.getOwnPropertySymbols(flags))).forEach(function (key) {
	    reg.set(key, flags[key]);
	  });
	  return reg;
	};

	var Request = /*#__PURE__*/function () {
	  function Request() {
	    var hash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	    var navArgs = arguments.length > 1 ? arguments[1] : undefined;
	    var storeCaller = arguments.length > 2 ? arguments[2] : undefined;
	    _classCallCheck(this, Request);
	    /**
	     * Hash we navigate to
	     * @type {string}
	     * @private
	     */
	    this._hash = hash;

	    /**
	     * Do we store previous hash in history
	     * @type {boolean}
	     * @private
	     */
	    this._storeCaller = storeCaller;

	    /**
	     * Request and navigate data
	     * @type {Map}
	     * @private
	     */
	    this._register = new Map();

	    /**
	     * Flag if the instance is created due to
	     * this request
	     * @type {boolean}
	     * @private
	     */
	    this._isCreated = false;

	    /**
	     * Flag if the instance is shared between
	     * previous and current request
	     * @type {boolean}
	     * @private
	     */
	    this._isSharedInstance = false;

	    /**
	     * Flag if the request has been cancelled
	     * @type {boolean}
	     * @private
	     */
	    this._cancelled = false;

	    /**
	     * if instance is shared between requests we copy state object
	     * from instance before the new request overrides state
	     * @type {null}
	     * @private
	     */
	    this._copiedHistoryState = null;

	    // if there are arguments attached to navigate()
	    // we store them in new request
	    if (isObject(navArgs)) {
	      this._register = createRegister(navArgs);
	    } else if (isBoolean(navArgs)) {
	      // if second navigate() argument is explicitly
	      // set to false we prevent the calling page
	      // from ending up in history
	      this._storeCaller = navArgs;
	    }
	    // @todo: remove because we can simply check
	    // ._storeCaller property
	    this._register.set(symbols.store, this._storeCaller);
	  }
	  _createClass(Request, [{
	    key: "cancel",
	    value: function cancel() {
	      Log$1.debug('[router]:', "cancelled ".concat(this._hash));
	      this._cancelled = true;
	    }
	  }, {
	    key: "url",
	    get: function get() {
	      return this._hash;
	    }
	  }, {
	    key: "register",
	    get: function get() {
	      return this._register;
	    }
	  }, {
	    key: "hash",
	    get: function get() {
	      return this._hash;
	    },
	    set: function set(args) {
	      this._hash = args;
	    }
	  }, {
	    key: "route",
	    get: function get() {
	      return this._route;
	    },
	    set: function set(args) {
	      this._route = args;
	    }
	  }, {
	    key: "provider",
	    get: function get() {
	      return this._provider;
	    },
	    set: function set(args) {
	      this._provider = args;
	    }
	  }, {
	    key: "providerType",
	    get: function get() {
	      return this._providerType;
	    },
	    set: function set(args) {
	      this._providerType = args;
	    }
	  }, {
	    key: "page",
	    get: function get() {
	      return this._page;
	    },
	    set: function set(args) {
	      this._page = args;
	    }
	  }, {
	    key: "isCreated",
	    get: function get() {
	      return this._isCreated;
	    },
	    set: function set(args) {
	      this._isCreated = args;
	    }
	  }, {
	    key: "isSharedInstance",
	    get: function get() {
	      return this._isSharedInstance;
	    },
	    set: function set(args) {
	      this._isSharedInstance = args;
	    }
	  }, {
	    key: "isCancelled",
	    get: function get() {
	      return this._cancelled;
	    }
	  }, {
	    key: "copiedHistoryState",
	    get: function get() {
	      return this._copiedHistoryState;
	    },
	    set: function set(v) {
	      this._copiedHistoryState = v;
	    }
	  }]);
	  return Request;
	}();

	var Route = /*#__PURE__*/function () {
	  function Route() {
	    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    _classCallCheck(this, Route);
	    // keep backwards compatible
	    var type = ['on', 'before', 'after'].reduce(function (acc, type) {
	      return isFunction(config[type]) ? type : acc;
	    }, undefined);
	    this._cfg = config;
	    if (type) {
	      this._provider = {
	        type: type,
	        request: config[type]
	      };
	    }
	  }
	  _createClass(Route, [{
	    key: "path",
	    get: function get() {
	      return this._cfg.path;
	    }
	  }, {
	    key: "name",
	    get: function get() {
	      return this._cfg.name;
	    }
	  }, {
	    key: "component",
	    get: function get() {
	      return this._cfg.component;
	    }
	  }, {
	    key: "options",
	    get: function get() {
	      return this._cfg.options;
	    }
	  }, {
	    key: "widgets",
	    get: function get() {
	      return this._cfg.widgets;
	    }
	  }, {
	    key: "cache",
	    get: function get() {
	      return this._cfg.cache;
	    }
	  }, {
	    key: "hook",
	    get: function get() {
	      return this._cfg.hook;
	    }
	  }, {
	    key: "beforeNavigate",
	    get: function get() {
	      return this._cfg.beforeNavigate;
	    }
	  }, {
	    key: "provider",
	    get: function get() {
	      return this._provider;
	    }
	  }]);
	  return Route;
	}();

	/**
	 * Simple route length calculation
	 * @param route {string}
	 * @returns {number} - floor
	 */
	var getFloor = function getFloor(route) {
	  return stripRegex(route).split('/').length;
	};

	/**
	 * return all stored routes that live on the same floor
	 * @param floor
	 * @returns {Array}
	 */
	var getRoutesByFloor = function getRoutesByFloor(floor) {
	  var matches = [];
	  // simple filter of level candidates
	  var _iterator = _createForOfIteratorHelper(routes.entries()),
	    _step;
	  try {
	    for (_iterator.s(); !(_step = _iterator.n()).done;) {
	      var _step$value = _slicedToArray(_step.value, 1),
	        route = _step$value[0];
	      if (getFloor(route) === floor) {
	        matches.push(route);
	      }
	    }
	  } catch (err) {
	    _iterator.e(err);
	  } finally {
	    _iterator.f();
	  }
	  return matches;
	};

	/**
	 * return a matching route by provided hash
	 * hash: home/browse/12 will match:
	 * route: home/browse/:categoryId
	 * @param hash {string}
	 * @returns {boolean|{}} - route
	 */
	var getRouteByHash = function getRouteByHash(hash) {
	  // @todo: clean up on handleHash
	  hash = hash.replace(/^#/, '');
	  var getUrlParts = /(\/?:?[^/]+)/g;
	  // grab possible candidates from stored routes
	  var candidates = getRoutesByFloor(getFloor(hash));
	  // break hash down in chunks
	  var hashParts = hash.match(getUrlParts) || [];

	  // to simplify the route matching and prevent look around
	  // in our getUrlParts regex we get the regex part from
	  // route candidate and store them so that we can reference
	  // them when we perform the actual regex against hash
	  var regexStore = [];
	  var matches = candidates.filter(function (route) {
	    var isMatching = true;
	    // replace regex in route with lookup id => @@{storeId}@@
	    if (hasRegex.test(route)) {
	      var regMatches = route.match(hasRegex);
	      if (regMatches && regMatches.length) {
	        route = regMatches.reduce(function (fullRoute, regex) {
	          var lookupId = regexStore.length;
	          fullRoute = fullRoute.replace(regex, "@@".concat(lookupId, "@@"));
	          regexStore.push(regex.substring(1, regex.length - 1));
	          return fullRoute;
	        }, route);
	      }
	    }
	    var routeParts = route.match(getUrlParts) || [];
	    for (var i = 0, j = routeParts.length; i < j; i++) {
	      var routePart = routeParts[i];
	      var hashPart = hashParts[i];

	      // Since we support catch-all and regex driven name groups
	      // we first test for regex lookup id and see if the regex
	      // matches the value from the hash
	      if (hasLookupId.test(routePart)) {
	        var routeMatches = hasLookupId.exec(routePart);
	        var storeId = routeMatches[1];
	        var routeRegex = regexStore[storeId];

	        // split regex and modifiers so we can use both
	        // to create a new RegExp
	        // eslint-disable-next-line
	        var _regMatches = /\/([^\/]+)\/([igm]{0,3})/.exec(routeRegex);
	        if (_regMatches && _regMatches.length) {
	          var expression = _regMatches[1];
	          var modifiers = _regMatches[2];
	          var regex = new RegExp("^/".concat(expression, "$"), modifiers);
	          if (!regex.test(hashPart)) {
	            isMatching = false;
	          }
	        }
	      } else if (isNamedGroup.test(routePart)) {
	        // we kindly skip namedGroups because this is dynamic
	        // we only need to the static and regex drive parts
	        continue;
	      } else if (hashPart && routePart.toLowerCase() !== hashPart.toLowerCase()) {
	        isMatching = false;
	      }
	    }
	    return isMatching;
	  });
	  if (matches.length) {
	    if (matches.indexOf(hash) !== -1) {
	      var match = matches[matches.indexOf(hash)];
	      return routes.get(match);
	    } else {
	      // we give prio to static routes over dynamic
	      matches = matches.sort(function (a) {
	        return isNamedGroup.test(a) ? -1 : 1;
	      });
	      // would be strange if this fails
	      // but still we test
	      if (routeExists(matches[0])) {
	        return routes.get(matches[0]);
	      }
	    }
	  }
	  return false;
	};
	var getValuesFromHash = function getValuesFromHash() {
	  var hash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	  var path = arguments.length > 1 ? arguments[1] : undefined;
	  // replace the regex definition from the route because
	  // we already did the matching part
	  path = stripRegex(path, '');
	  var getUrlParts = /(\/?:?[\w%\s:.-]+)/g;
	  var hashParts = hash.match(getUrlParts) || [];
	  var routeParts = path.match(getUrlParts) || [];
	  var getNamedGroup = /^\/:([\w-]+)\/?/;
	  return routeParts.reduce(function (storage, value, index) {
	    var match = getNamedGroup.exec(value);
	    if (match && match.length) {
	      storage.set(match[1], decodeURIComponent(hashParts[index].replace(/^\//, '')));
	    }
	    return storage;
	  }, new Map());
	};
	var getOption = function getOption(stack, prop) {
	  // eslint-disable-next-line
	  if (stack && stack.hasOwnProperty(prop)) {
	    return stack[prop];
	  }
	  // we explicitly return undefined since we're testing
	  // for explicit test values
	};

	/**
	 * create and return new Route instance
	 * @param config
	 */
	var createRoute = function createRoute(config) {
	  // we need to provide a bit of additional logic
	  // for the bootComponent
	  if (config.path === '$') {
	    var options = {
	      preventStorage: true
	    };
	    if (isObject(config.options)) {
	      options = _objectSpread2(_objectSpread2({}, config.options), options);
	    }
	    config.options = options;
	    // if configured add reference to bootRequest
	    // as router after provider
	    if (bootRequest) {
	      config.after = bootRequest;
	    }
	  }
	  return new Route(config);
	};

	/**
	 * Create a new Router request object
	 * @param url
	 * @param args
	 * @param store
	 * @returns {*}
	 */
	var createRequest = function createRequest(url, args, store) {
	  return new Request(url, args, store);
	};
	var getHashByName = function getHashByName(obj) {
	  if (!obj.to && !obj.name) {
	    return false;
	  }
	  var route = getRouteByName(obj.to || obj.name);
	  var hasDynamicGroup = /\/:([\w-]+)\/?/;
	  var hash = route;

	  // if route contains dynamic group
	  // we replace them with the provided params
	  if (hasDynamicGroup.test(route)) {
	    if (obj.params) {
	      var keys = Object.keys(obj.params);
	      hash = keys.reduce(function (acc, key) {
	        return acc.replace(":".concat(key), obj.params[key]);
	      }, route);
	    }
	    if (obj.query) {
	      return "".concat(hash).concat(objectToQueryString(obj.query));
	    }
	  }
	  return hash;
	};
	var getRouteByName = function getRouteByName(name) {
	  var _iterator2 = _createForOfIteratorHelper(routes.entries()),
	    _step2;
	  try {
	    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
	      var _step2$value = _slicedToArray(_step2.value, 2),
	        path = _step2$value[0],
	        route = _step2$value[1];
	      if (route.name === name) {
	        return path;
	      }
	    }
	  } catch (err) {
	    _iterator2.e(err);
	  } finally {
	    _iterator2.f();
	  }
	  return false;
	};
	var keepActivePageAlive = function keepActivePageAlive(route, request) {
	  if (isString(route)) {
	    var _routes = getRoutes();
	    if (_routes.has(route)) {
	      route = _routes.get(route);
	    } else {
	      return false;
	    }
	  }
	  var register = request.register;
	  var routeOptions = route.options;
	  if (register.has('keepAlive')) {
	    return register.get('keepAlive');
	  } else if (routeOptions && routeOptions.keepAlive) {
	    return routeOptions.keepAlive;
	  }
	  return false;
	};

	/*
	 * If not stated otherwise in this file or this component's LICENSE file the
	 * following copyright and licenses apply:
	 *
	 * Copyright 2020 Metrological
	 *
	 * Licensed under the Apache License, Version 2.0 (the License);
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	var emit = (function (page) {
	  var events = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  if (!isArray(events)) {
	    events = [events];
	  }
	  events.forEach(function (e) {
	    var event = "_on".concat(ucfirst(e));
	    if (isFunction(page[event])) {
	      page[event](params);
	    }
	  });
	});

	/*
	 * If not stated otherwise in this file or this component's LICENSE file the
	 * following copyright and licenses apply:
	 *
	 * Copyright 2020 Metrological
	 *
	 * Licensed under the Apache License, Version 2.0 (the License);
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	var activeWidget = null;
	var getReferences = function getReferences() {
	  if (!widgetsHost) {
	    return;
	  }
	  return widgetsHost.get().reduce(function (storage, widget) {
	    var key = widget.ref.toLowerCase();
	    storage[key] = widget;
	    return storage;
	  }, {});
	};

	/**
	 * update the visibility of the available widgets
	 * for the current page / route
	 * @param page
	 */
	var updateWidgets = function updateWidgets(widgets, page) {
	  // force lowercase lookup
	  var configured = (widgets || []).map(function (ref) {
	    return ref.toLowerCase();
	  });
	  widgetsHost.forEach(function (widget) {
	    widget.visible = configured.indexOf(widget.ref.toLowerCase()) !== -1;
	    if (widget.visible) {
	      emit(widget, ['activated'], page);
	    }
	  });
	  if (app.state === 'Widgets' && activeWidget && !activeWidget.visible) {
	    app._setState('');
	  }
	};
	var getWidgetByName = function getWidgetByName(name) {
	  name = ucfirst(name);
	  return widgetsHost.getByRef(name) || false;
	};

	/**
	 * delegate app focus to a on-screen widget
	 * @param name - {string}
	 */
	var focusWidget = function focusWidget(name) {
	  var widget = getWidgetByName(name);
	  if (widget) {
	    setActiveWidget(widget);

	    // if app is already in 'Widgets' state we can assume that
	    // focus has been delegated from one widget to another so
	    // we need to set the new widget reference and trigger a
	    // new focus calculation of Lightning's focuspath
	    if (app.state === 'Widgets') {
	      app.reload(activeWidget);
	    } else {
	      app._setState('Widgets', [activeWidget]);
	    }
	  }
	};
	var restoreFocus = function restoreFocus() {
	  activeWidget = null;
	  app._setState('');
	};
	var getActiveWidget = function getActiveWidget() {
	  return activeWidget;
	};
	var setActiveWidget = function setActiveWidget(instance) {
	  activeWidget = instance;
	};

	/*
	 * If not stated otherwise in this file or this component's LICENSE file the
	 * following copyright and licenses apply:
	 *
	 * Copyright 2020 Metrological
	 *
	 * Licensed under the Apache License, Version 2.0 (the License);
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	var createComponent = function createComponent(stage, type) {
	  return stage.c({
	    type: type,
	    visible: false,
	    widgets: getReferences()
	  });
	};

	/*
	 * If not stated otherwise in this file or this component's LICENSE file the
	 * following copyright and licenses apply:
	 *
	 * Copyright 2020 Metrological
	 *
	 * Licensed under the Apache License, Version 2.0 (the License);
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	/**
	 * Simple flat array that holds the visited hashes + state Object
	 * so the router can navigate back to them
	 * @type {Array}
	 */
	var history = [];
	var updateHistory = function updateHistory(request) {
	  var hash = getActiveHash();
	  if (!hash) {
	    return;
	  }

	  // navigate storage flag
	  var register = request.register;
	  var forceNavigateStore = register.get(symbols.store);

	  // test preventStorage on route configuration
	  var activeRoute = getRouteByHash(hash);
	  var preventStorage = getOption(activeRoute.options, 'preventStorage');

	  // we give prio to navigate storage flag
	  var store = isBoolean(forceNavigateStore) ? forceNavigateStore : !preventStorage;
	  if (store) {
	    var toStore = hash.replace(/^\//, '');
	    var location = locationInHistory(toStore);
	    var stateObject = getStateObject(getActivePage(), request);
	    var routerConfig = getRouterConfig();

	    // store hash if it's not a part of history or flag for
	    // storage of same hash is true
	    if (location === -1 || routerConfig.get('storeSameHash')) {
	      history.push({
	        hash: toStore,
	        state: stateObject
	      });
	    } else {
	      // if we visit the same route we want to sync history
	      var prev = history.splice(location, 1)[0];
	      history.push({
	        hash: prev.hash,
	        state: stateObject
	      });
	    }
	  }
	};
	var locationInHistory = function locationInHistory(hash) {
	  for (var i = 0; i < history.length; i++) {
	    if (history[i].hash === hash) {
	      return i;
	    }
	  }
	  return -1;
	};
	var getHistoryState = function getHistoryState(hash) {
	  var state = null;
	  if (history.length) {
	    // if no hash is provided we get the last
	    // pushed history record
	    if (!hash) {
	      var record = history[history.length - 1];
	      // could be null
	      state = record.state;
	    } else {
	      if (locationInHistory(hash) !== -1) {
	        var _record = history[locationInHistory(hash)];
	        state = _record.state;
	      }
	    }
	  }
	  return state;
	};
	var replaceHistoryState = function replaceHistoryState() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	  var hash = arguments.length > 1 ? arguments[1] : undefined;
	  if (!history.length) {
	    return;
	  }
	  var location = hash ? locationInHistory(hash) : history.length - 1;
	  if (location !== -1 && isObject(state)) {
	    history[location].state = state;
	  }
	};
	var getStateObject = function getStateObject(page, request) {
	  // if the new request shared instance with the
	  // previous request we used the copied state object
	  if (request.isSharedInstance) {
	    if (request.copiedHistoryState) {
	      return request.copiedHistoryState;
	    }
	  } else if (page && isFunction(page.historyState)) {
	    return page.historyState();
	  }
	  return null;
	};
	var getHistory = function getHistory() {
	  return history.slice(0);
	};
	var setHistory = function setHistory() {
	  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	  if (isArray(arr)) {
	    history = arr;
	  }
	};

	/**
	 * @type {Lightning.Application}
	 */
	var application;

	/**
	 * Actual instance of the app
	 * @type {Lightning.Component}
	 */
	var app;

	/**
	 * Component that hosts all routed pages
	 * @type {Lightning.Component}
	 */
	var pagesHost;

	/**
	 * @type {Lightning.Stage}
	 */
	var stage;

	/**
	 * Platform driven Router configuration
	 * @type {Map<string>}
	 */
	var routerConfig;

	/**
	 * Component that hosts all attached widgets
	 * @type {Lightning.Component}
	 */
	var widgetsHost;

	/**
	 * Hash we point the browser to when we boot the app
	 * and there is no deep-link provided
	 * @type {string|Function}
	 */
	var rootHash;

	/**
	 * Boot request will fire before app start
	 * can be used to execute some global logic
	 * and can be configured
	 */
	var bootRequest;

	/**
	 * Flag if we need to update the browser location hash.
	 * Router can work without.
	 * @type {boolean}
	 */
	var updateHash = true;

	/**
	 * Will be called before a route starts, can be overridden
	 * via routes config
	 * @param from - route we came from
	 * @param to - route we navigate to
	 * @returns {Promise<*>}
	 */
	// eslint-disable-next-line
	var beforeEachRoute = /*#__PURE__*/function () {
	  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(from, to) {
	    return _regeneratorRuntime().wrap(function _callee$(_context) {
	      while (1) switch (_context.prev = _context.next) {
	        case 0:
	          return _context.abrupt("return", true);
	        case 1:
	        case "end":
	          return _context.stop();
	      }
	    }, _callee);
	  }));
	  return function beforeEachRoute(_x, _x2) {
	    return _ref.apply(this, arguments);
	  };
	}();

	/**
	 *  * Will be called after a navigate successfully resolved,
	 * can be overridden via routes config
	 */
	var afterEachRoute = function afterEachRoute() {};

	/**
	 * All configured routes
	 * @type {Map<string, object>}
	 */
	var routes = new Map();

	/**
	 * Store all page components per route
	 * @type {Map<string, object>}
	 */
	var components = new Map();

	/**
	 * Flag if router has been initialised
	 * @type {boolean}
	 */
	var initialised = false;

	/**
	 * Current page being rendered on screen
	 * @type {null}
	 */
	var activePage = null;
	var activeHash;
	var activeRoute;

	/**
	 *  During the process of a navigation request a new
	 *  request can start, to prevent unwanted behaviour
	 *  the navigate()-method stores the last accepted hash
	 *  so we can invalidate any prior requests
	 */
	var lastAcceptedHash;

	/**
	 * With on()-data providing behaviour the Router forced the App
	 * in a Loading state. When the data-provider resolves we want to
	 * change the state back to where we came from
	 */
	var previousState;
	var mixin = function mixin(app) {
	  // by default the Router Baseclass provides the component
	  // reference in which we store our pages
	  if (app.pages) {
	    pagesHost = app.pages.childList;
	  }
	  // if the app is using widgets we grab refs
	  // and hide all the widgets
	  if (app.widgets && app.widgets.children) {
	    widgetsHost = app.widgets.childList;
	    // hide all widgets on boot
	    widgetsHost.forEach(function (w) {
	      return w.visible = false;
	    });
	  }
	  app._handleBack = function (e) {
	    step(-1);
	    e.preventDefault();
	  };
	};
	var bootRouter = function bootRouter(config, instance) {
	  var appInstance = config.appInstance,
	    routes = config.routes;

	  // if instance is provided and it's and Lightning Component instance
	  if (instance && isPage(instance)) {
	    app = instance;
	  }
	  if (!app) {
	    app = appInstance || AppInstance;
	  }
	  application = app.application;
	  pagesHost = application.childList;
	  stage = app.stage;
	  routerConfig = getConfigMap();
	  mixin(app);
	  if (isArray(routes)) {
	    setup(config);
	  } else if (isFunction(routes)) {
	    console.warn('[Router]: Calling Router.route() directly is deprecated.');
	    console.warn('Use object config: https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration');
	  }
	};
	var setup = function setup(config) {
	  if (!initialised) {
	    init(config);
	  }
	  config.routes.forEach(function (r) {
	    var path = cleanHash(r.path);
	    if (!routeExists(path)) {
	      var route = createRoute(r);
	      routes.set(path, route);
	      // if route has a configured component property
	      // we store it in a different map to simplify
	      // the creating and destroying per route
	      if (route.component) {
	        var type = route.component;
	        if (isComponentConstructor(type)) {
	          if (!routerConfig.get('lazyCreate')) {
	            type = createComponent(stage, type);
	            pagesHost.a(type);
	          }
	        }
	        components.set(path, type);
	      }
	    } else {
	      console.error("".concat(path, " already exists in routes configuration"));
	    }
	  });
	};
	var init = function init(config) {
	  rootHash = config.root;
	  if (isFunction(config.boot)) {
	    bootRequest = config.boot;
	  }
	  if (isBoolean(config.updateHash)) {
	    updateHash = config.updateHash;
	  }
	  if (isFunction(config.beforeEachRoute)) {
	    beforeEachRoute = config.beforeEachRoute;
	  }
	  if (isFunction(config.afterEachRoute)) {
	    afterEachRoute = config.afterEachRoute;
	  }
	  if (config.bootComponent) {
	    console.warn('[Router]: Boot Component is now available as a special router: https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration?id=special-routes');
	    console.warn('[Router]: setting { bootComponent } property will be deprecated in a future release');
	    if (isPage(config.bootComponent)) {
	      config.routes.push({
	        path: '$',
	        component: config.bootComponent,
	        // we try to assign the bootRequest as after data-provider
	        // so it will behave as any other component
	        after: bootRequest || null,
	        options: {
	          preventStorage: true
	        }
	      });
	    } else {
	      console.error("[Router]: ".concat(config.bootComponent, " is not a valid boot component"));
	    }
	  }
	  config.routes.forEach(function (item) {
	    // replacing regexes with 'R' to avoid issues with pattern matching below
	    var strippedPath = stripRegex(item.path);

	    // Pattern to identify the last path of the route
	    // It should start with "/:" + any word  and ends with "?"
	    // It should be the last path of the route
	    // valid => /player/:asset/:assetId? (:assetId is optional)
	    // invalid => /player/:asset/:assetId?/test (:assetId? is not an optional path)
	    // invalid => /player/:asset?/:assetId? (second path is not considered as an optional path)
	    var pattern = /(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*\/:(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\?$/;
	    if (pattern.test(strippedPath)) {
	      var optionalPath = item.path.substring(0, item.path.lastIndexOf('/'));
	      var originalPath = item.path.substring(0, item.path.lastIndexOf('?'));
	      item.path = originalPath;
	      //Create another entry with the optional path
	      var optionalItem = _objectSpread2({}, item);
	      optionalItem.path = optionalPath;
	      config.routes.push(optionalItem);
	    }
	  });
	  initialised = true;
	};
	var storeComponent = function storeComponent(route, type) {
	  if (components.has(route)) {
	    components.set(route, type);
	  }
	};
	var getComponent = function getComponent(route) {
	  if (components.has(route)) {
	    return components.get(route);
	  }
	  return null;
	};
	/**
	 * Test if router needs to update browser location hash
	 * @returns {boolean}
	 */
	var mustUpdateLocationHash = function mustUpdateLocationHash() {
	  if (!routerConfig || !routerConfig.size) {
	    return false;
	  }
	  // we need support to either turn change hash off
	  // per platform or per app
	  var updateConfig = routerConfig.get('updateHash');
	  return !(isBoolean(updateConfig) && !updateConfig || isBoolean(updateHash) && !updateHash);
	};

	/**
	 * Will be called when a new navigate() request has completed
	 * and has not been expired due to it's async nature
	 * @param request
	 */
	var onRequestResolved = function onRequestResolved(request) {
	  var hash = request.hash;
	  var route = request.route;
	  var register = request.register;
	  var page = request.page;

	  // clean up history if modifier is set
	  if (getOption(route.options, 'clearHistory')) {
	    setHistory([]);
	  } else if (hash && !isWildcard.test(route.path)) {
	    updateHistory(request);
	  }

	  // we only update the stackLocation if a route
	  // is not expired before it resolves
	  storeComponent(route.path, page);
	  if (request.isSharedInstance || !request.isCreated) {
	    emit(page, 'changed');
	  } else if (request.isCreated) {
	    emit(page, 'mounted');
	  }

	  // only update widgets if we have a host
	  if (widgetsHost) {
	    updateWidgets(route.widgets, page);
	  }

	  // we want to clean up if there is an
	  // active page that is not being shared
	  // between current and previous route
	  if (getActivePage() && !request.isSharedInstance) {
	    cleanUp(activePage, request);
	  }

	  // provide history object to active page
	  if (register.get(symbols.historyState) && isFunction(page.historyState)) {
	    page.historyState(register.get(symbols.historyState));
	  }
	  setActivePage(page);
	  activeHash = request.hash;
	  activeRoute = route.path;

	  // cleanup all cancelled requests
	  var _iterator = _createForOfIteratorHelper(navigateQueue.values()),
	    _step;
	  try {
	    for (_iterator.s(); !(_step = _iterator.n()).done;) {
	      var _request = _step.value;
	      if (_request.isCancelled && _request.hash) {
	        navigateQueue.delete(_request.hash);
	      }
	    }
	  } catch (err) {
	    _iterator.e(err);
	  } finally {
	    _iterator.f();
	  }
	  afterEachRoute(request);
	  Log$1.info('[route]:', route.path);
	  Log$1.info('[hash]:', hash);
	};
	var cleanUp = function cleanUp(page, request) {
	  var route = activeRoute;
	  var register = request.register;
	  var lazyDestroy = routerConfig.get('lazyDestroy');
	  var destroyOnBack = routerConfig.get('destroyOnHistoryBack');
	  var keepAlive = register.get('keepAlive');
	  var isFromHistory = register.get(symbols.backtrack);
	  var doCleanup = false;

	  // if this request is executed due to a step back in history
	  // and we have configured to destroy active page when we go back
	  // in history or lazyDestory is enabled
	  if (isFromHistory && (destroyOnBack || lazyDestroy)) {
	    doCleanup = true;
	  }

	  // clean up if lazyDestroy is enabled and the keepAlive flag
	  // in navigation register is false
	  if (lazyDestroy && !keepAlive) {
	    doCleanup = true;
	  }

	  // if the current and new request share the same route blueprint
	  if (activeRoute === request.route.path) {
	    doCleanup = true;
	  }
	  if (doCleanup) {
	    // grab original class constructor if
	    // statemachine routed else store constructor
	    storeComponent(route, page._routedType || page.constructor);

	    // actual remove of page from memory
	    pagesHost.remove(page);

	    // force texture gc() if configured
	    // so we can cleanup textures in the same tick
	    if (routerConfig.get('gcOnUnload')) {
	      stage.gc();
	    }
	  } else {
	    // If we're not removing the page we need to
	    // reset it's properties
	    page.patch({
	      x: 0,
	      y: 0,
	      scale: 1,
	      alpha: 1,
	      visible: false
	    });
	  }
	};
	var getActiveHash = function getActiveHash() {
	  return activeHash;
	};
	var setActivePage = function setActivePage(page) {
	  activePage = page;
	};
	var getActivePage = function getActivePage() {
	  return activePage;
	};
	var getActiveRoute = function getActiveRoute() {
	  return activeRoute;
	};
	var getLastHash = function getLastHash() {
	  return lastAcceptedHash;
	};
	var setLastHash = function setLastHash(hash) {
	  lastAcceptedHash = hash;
	};
	var setPreviousState = function setPreviousState(state) {
	  previousState = state;
	};
	var getPreviousState = function getPreviousState() {
	  return previousState;
	};
	var routeExists = function routeExists(key) {
	  return routes.has(key);
	};
	var getRootHash = function getRootHash() {
	  return rootHash;
	};
	var getBootRequest = function getBootRequest() {
	  return bootRequest;
	};
	var getRouterConfig = function getRouterConfig() {
	  return routerConfig;
	};
	var getRoutes = function getRoutes() {
	  return routes;
	};

	var isFunction = function isFunction(v) {
	  return typeof v === 'function';
	};
	var isObject = function isObject(v) {
	  return typeof v === 'object' && v !== null;
	};
	var isBoolean = function isBoolean(v) {
	  return typeof v === 'boolean';
	};
	var isPage = function isPage(v) {
	  if (v instanceof Lightning$1.Element || isComponentConstructor(v)) {
	    return true;
	  }
	  return false;
	};
	var isComponentConstructor = function isComponentConstructor(type) {
	  return type.prototype && 'isComponent' in type.prototype;
	};
	var isArray = function isArray(v) {
	  return Array.isArray(v);
	};
	var ucfirst = function ucfirst(v) {
	  return "".concat(v.charAt(0).toUpperCase()).concat(v.slice(1));
	};
	var isString = function isString(v) {
	  return typeof v === 'string';
	};
	var isPromise = function isPromise(method) {
	  var result;
	  if (isFunction(method)) {
	    try {
	      result = method.apply(null);
	    } catch (e) {
	      result = e;
	    }
	  } else {
	    result = method;
	  }
	  return isObject(result) && isFunction(result.then);
	};
	var cleanHash = function cleanHash() {
	  var hash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	  return hash.replace(/^#/, '').replace(/\/+$/, '');
	};
	var getConfigMap = function getConfigMap() {
	  var routerSettings = Settings$1.get('platform', 'router');
	  var isObj = isObject(routerSettings);
	  return ['backtrack', 'gcOnUnload', 'destroyOnHistoryBack', 'lazyCreate', 'lazyDestroy', 'reuseInstance', 'autoRestoreRemote', 'numberNavigation', 'updateHash', 'storeSameHash'].reduce(function (config, key) {
	    config.set(key, isObj ? routerSettings[key] : Settings$1.get('platform', key));
	    return config;
	  }, new Map());
	};
	var getQueryStringParams = function getQueryStringParams() {
	  var hash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getActiveHash();
	  var resumeHash = getResumeHash();
	  if ((hash === '$' || !hash) && resumeHash) {
	    if (isString(resumeHash)) {
	      hash = resumeHash;
	    }
	  }
	  var parse = '';
	  var getQuery = /([?&].*)/;
	  var matches = getQuery.exec(hash);
	  var params = {};
	  if (document.location && document.location.search) {
	    parse = document.location.search;
	  }
	  if (matches && matches.length) {
	    var hashParams = matches[1];
	    if (parse) {
	      // if location.search is not empty we
	      // remove the leading ? to create a
	      // valid string
	      hashParams = hashParams.replace(/^\?/, '');
	      // we parse hash params last so they we can always
	      // override search params with hash params
	      parse = "".concat(parse, "&").concat(hashParams);
	    } else {
	      parse = hashParams;
	    }
	  }
	  if (parse) {
	    var urlParams = new URLSearchParams(parse);
	    var _iterator = _createForOfIteratorHelper(urlParams.entries()),
	      _step;
	    try {
	      for (_iterator.s(); !(_step = _iterator.n()).done;) {
	        var _step$value = _slicedToArray(_step.value, 2),
	          key = _step$value[0],
	          value = _step$value[1];
	        params[key] = value;
	      }
	    } catch (err) {
	      _iterator.e(err);
	    } finally {
	      _iterator.f();
	    }
	    return params;
	  } else {
	    return false;
	  }
	};
	var objectToQueryString = function objectToQueryString(obj) {
	  if (!isObject(obj)) {
	    return '';
	  }
	  return '?' + Object.keys(obj).map(function (key) {
	    return "".concat(key, "=").concat(obj[key]);
	  }).join('&');
	};
	var symbols = {
	  route: Symbol('route'),
	  hash: Symbol('hash'),
	  store: Symbol('store'),
	  fromHistory: Symbol('fromHistory'),
	  expires: Symbol('expires'),
	  resume: Symbol('resume'),
	  backtrack: Symbol('backtrack'),
	  historyState: Symbol('historyState'),
	  queryParams: Symbol('queryParams')
	};

	var dataHooks = {
	  on: function on(request) {
	    setPreviousState(app.state || '');
	    app._setState('Loading');
	    return execProvider(request);
	  },
	  before: function before(request) {
	    return execProvider(request);
	  },
	  after: function after(request) {
	    try {
	      execProvider(request, true);
	    } catch (e) {
	      // for now we fail silently
	    }
	    return Promise.resolve();
	  }
	};
	var execProvider = function execProvider(request, emitProvided) {
	  var route = request.route;
	  var provider = route.provider;
	  var expires = route.cache ? route.cache * 1000 : 0;
	  var params = addPersistData(request);
	  return provider.request(request.page, _objectSpread2({}, params)).then(function () {
	    request.page[symbols.expires] = Date.now() + expires;
	    if (emitProvided) {
	      emit(request.page, 'dataProvided');
	    }
	  }).catch(function (e) {
	    request.page[symbols.expires] = Date.now();
	    throw e;
	  });
	};
	var addPersistData = function addPersistData(_ref) {
	  var page = _ref.page,
	    route = _ref.route,
	    hash = _ref.hash,
	    _ref$register = _ref.register,
	    register = _ref$register === void 0 ? new Map() : _ref$register;
	  var urlValues = getValuesFromHash(hash, route.path);
	  var queryParams = getQueryStringParams(hash);
	  var pageData = new Map([].concat(_toConsumableArray(urlValues), _toConsumableArray(register)));
	  var params = {};

	  // make dynamic url data available to the page
	  // as instance properties
	  var _iterator = _createForOfIteratorHelper(pageData),
	    _step;
	  try {
	    for (_iterator.s(); !(_step = _iterator.n()).done;) {
	      var _step$value = _slicedToArray(_step.value, 2),
	        name = _step$value[0],
	        value = _step$value[1];
	      params[name] = value;
	    }
	  } catch (err) {
	    _iterator.e(err);
	  } finally {
	    _iterator.f();
	  }
	  if (queryParams) {
	    params[symbols.queryParams] = queryParams;
	  }

	  // check navigation register for persistent data
	  if (register.size) {
	    var obj = {};
	    var _iterator2 = _createForOfIteratorHelper(register),
	      _step2;
	    try {
	      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
	        var _step2$value = _slicedToArray(_step2.value, 2),
	          k = _step2$value[0],
	          v = _step2$value[1];
	        obj[k] = v;
	      }
	    } catch (err) {
	      _iterator2.e(err);
	    } finally {
	      _iterator2.f();
	    }
	    page.persist = obj;
	  }

	  // make url data and persist data available
	  // via params property
	  page.params = params;
	  emit(page, ['urlParams'], params);
	  return params;
	};

	/**
	 * Test if page passed cache-time
	 * @param page
	 * @returns {boolean}
	 */
	var isPageExpired = function isPageExpired(page) {
	  if (!page[symbols.expires]) {
	    return false;
	  }
	  var expires = page[symbols.expires];
	  var now = Date.now();
	  return now >= expires;
	};
	var hasProvider = function hasProvider(path) {
	  if (routeExists(path)) {
	    var record = routes.get(path);
	    return !!record.provider;
	  }
	  return false;
	};
	var getProvider = function getProvider(route) {
	  // @todo: fix, route already is passed in
	  if (routeExists(route.path)) {
	    var _routes$get = routes.get(route.path),
	      provider = _routes$get.provider;
	    return {
	      type: provider.type,
	      provider: provider.request
	    };
	  }
	};

	/*
	 * If not stated otherwise in this file or this component's LICENSE file the
	 * following copyright and licenses apply:
	 *
	 * Copyright 2020 Metrological
	 *
	 * Licensed under the Apache License, Version 2.0 (the License);
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	var fade = function fade(i, o) {
	  return new Promise(function (resolve) {
	    i.patch({
	      alpha: 0,
	      visible: true,
	      smooth: {
	        alpha: [1, {
	          duration: 0.5,
	          delay: 0.1
	        }]
	      }
	    });
	    // resolve on y finish
	    i.transition('alpha').on('finish', function () {
	      if (o) {
	        o.visible = false;
	      }
	      resolve();
	    });
	  });
	};
	var crossFade = function crossFade(i, o) {
	  return new Promise(function (resolve) {
	    i.patch({
	      alpha: 0,
	      visible: true,
	      smooth: {
	        alpha: [1, {
	          duration: 0.5,
	          delay: 0.1
	        }]
	      }
	    });
	    if (o) {
	      o.patch({
	        smooth: {
	          alpha: [0, {
	            duration: 0.5,
	            delay: 0.3
	          }]
	        }
	      });
	    }
	    // resolve on y finish
	    i.transition('alpha').on('finish', function () {
	      resolve();
	    });
	  });
	};
	var moveOnAxes = function moveOnAxes(axis, direction, i, o) {
	  var bounds = axis === 'x' ? 1920 : 1080;
	  return new Promise(function (resolve) {
	    var _i$patch;
	    i.patch((_i$patch = {}, _defineProperty(_i$patch, "".concat(axis), direction ? bounds * -1 : bounds), _defineProperty(_i$patch, "visible", true), _defineProperty(_i$patch, "smooth", _defineProperty({}, "".concat(axis), [0, {
	      duration: 0.4,
	      delay: 0.2
	    }])), _i$patch));
	    // out is optional
	    if (o) {
	      var _o$patch;
	      o.patch((_o$patch = {}, _defineProperty(_o$patch, "".concat(axis), 0), _defineProperty(_o$patch, "smooth", _defineProperty({}, "".concat(axis), [direction ? bounds : bounds * -1, {
	        duration: 0.4,
	        delay: 0.2
	      }])), _o$patch));
	    }
	    // resolve on y finish
	    i.transition(axis).on('finish', function () {
	      resolve();
	    });
	  });
	};
	var up = function up(i, o) {
	  return moveOnAxes('y', 0, i, o);
	};
	var down = function down(i, o) {
	  return moveOnAxes('y', 1, i, o);
	};
	var left = function left(i, o) {
	  return moveOnAxes('x', 0, i, o);
	};
	var right = function right(i, o) {
	  return moveOnAxes('x', 1, i, o);
	};
	var Transitions = {
	  fade: fade,
	  crossFade: crossFade,
	  up: up,
	  down: down,
	  left: left,
	  right: right
	};

	/*
	 * If not stated otherwise in this file or this component's LICENSE file the
	 * following copyright and licenses apply:
	 *
	 * Copyright 2020 Metrological
	 *
	 * Licensed under the Apache License, Version 2.0 (the License);
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	/**
	 * execute transition between new / old page and
	 * toggle the defined widgets
	 * @todo: platform override default transition
	 * @param pageIn
	 * @param pageOut
	 */
	var executeTransition = function executeTransition(pageIn) {
	  var pageOut = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	  var transition = pageIn.pageTransition || pageIn.easing;
	  var hasCustomTransitions = !!(pageIn.smoothIn || pageIn.smoothInOut || transition);
	  var transitionsDisabled = getRouterConfig().get('disableTransitions');
	  if (pageIn.easing) {
	    console.warn('easing() method is deprecated and will be removed. Use pageTransition()');
	  }

	  // default behaviour is a visibility toggle
	  if (!hasCustomTransitions || transitionsDisabled) {
	    pageIn.visible = true;
	    if (pageOut) {
	      pageOut.visible = false;
	    }
	    return Promise.resolve();
	  }
	  if (transition) {
	    var type;
	    try {
	      type = transition.call(pageIn, pageIn, pageOut);
	    } catch (e) {
	      type = 'crossFade';
	    }
	    if (isPromise(type)) {
	      return type;
	    }
	    if (isString(type)) {
	      var fn = Transitions[type];
	      if (fn) {
	        return fn(pageIn, pageOut);
	      }
	    }

	    // keep backwards compatible for now
	    if (pageIn.smoothIn) {
	      // provide a smooth function that resolves itself
	      // on transition finish
	      var smooth = function smooth(p, v) {
	        var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	        return new Promise(function (resolve) {
	          pageIn.visible = true;
	          pageIn.setSmooth(p, v, args);
	          pageIn.transition(p).on('finish', function () {
	            resolve();
	          });
	        });
	      };
	      return pageIn.smoothIn({
	        pageIn: pageIn,
	        smooth: smooth
	      });
	    }
	  }
	  return Transitions.crossFade(pageIn, pageOut);
	};

	/**
	 * The actual loading of the component
	 * */
	var load = /*#__PURE__*/function () {
	  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
	    var expired, route;
	    return _regeneratorRuntime().wrap(function _callee$(_context) {
	      while (1) switch (_context.prev = _context.next) {
	        case 0:
	          expired = false;
	          _context.prev = 1;
	          _context.next = 4;
	          return loader(request);
	        case 4:
	          request = _context.sent;
	          if (!(request && !request.isCancelled)) {
	            _context.next = 12;
	            break;
	          }
	          // in case of on() providing we need to reset
	          // app state;
	          if (app.state === 'Loading') {
	            if (getPreviousState() === 'Widgets') {
	              app._setState('Widgets', [getActiveWidget()]);
	            } else {
	              app._setState('');
	            }
	          }
	          // Do page transition if instance
	          // is not shared between the routes
	          if (!(!request.isSharedInstance && !request.isCancelled)) {
	            _context.next = 10;
	            break;
	          }
	          _context.next = 10;
	          return executeTransition(request.page, getActivePage());
	        case 10:
	          _context.next = 13;
	          break;
	        case 12:
	          expired = true;
	        case 13:
	          if (!(expired || request.isCancelled)) {
	            _context.next = 18;
	            break;
	          }
	          Log$1.debug('[router]:', "Rejected ".concat(request.hash, " because route to ").concat(getLastHash(), " started"));
	          if (request.isCreated && !request.isSharedInstance) {
	            // remove from render-tree
	            pagesHost.remove(request.page);
	          }
	          _context.next = 20;
	          break;
	        case 18:
	          onRequestResolved(request);
	          // resolve promise
	          return _context.abrupt("return", request.page);
	        case 20:
	          _context.next = 25;
	          break;
	        case 22:
	          _context.prev = 22;
	          _context.t0 = _context["catch"](1);
	          if (!_context.t0.route) {
	            console.error(_context.t0);
	          } else if (!expired) {
	            // @todo: revisit
	            route = _context.t0.route; // clean up history if modifier is set
	            if (getOption(route.options, 'clearHistory')) {
	              setHistory([]);
	            } else if (!isWildcard.test(route.path)) {
	              updateHistory(_context.t0);
	            }
	            if (_context.t0.isCreated && !_context.t0.isSharedInstance) {
	              // remove from render-tree
	              pagesHost.remove(_context.t0.page);
	            }
	            handleError(_context.t0);
	          }
	        case 25:
	        case "end":
	          return _context.stop();
	      }
	    }, _callee, null, [[1, 22]]);
	  }));
	  return function load(_x) {
	    return _ref.apply(this, arguments);
	  };
	}();
	var loader = /*#__PURE__*/function () {
	  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(request) {
	    var route, hash, register, type, isConstruct, provide, currentRoute, _getProvider, loadType, provider;
	    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
	      while (1) switch (_context2.prev = _context2.next) {
	        case 0:
	          route = request.route;
	          hash = request.hash;
	          register = request.register; // todo: grab from Route instance
	          type = getComponent(route.path);
	          isConstruct = isComponentConstructor(type);
	          provide = false; // if it's an instance bt we're not coming back from
	          // history we test if we can re-use this instance
	          if (!isConstruct && !register.get(symbols.backtrack)) {
	            if (!mustReuse(route)) {
	              type = type.constructor;
	              isConstruct = true;
	            }
	          }

	          // If page is Lightning Component instance
	          if (!isConstruct) {
	            request.page = type;
	            // if we have have a data route for current page
	            if (hasProvider(route.path)) {
	              if (isPageExpired(type) || type[symbols.hash] !== hash) {
	                provide = true;
	              }
	            }
	            currentRoute = getActivePage() && getActivePage()[symbols.route]; // if the new route is equal to the current route it means that both
	            // route share the Component instance and stack location / since this case
	            // is conflicting with the way before() and after() loading works we flag it,
	            // and check platform settings in we want to re-use instance
	            if (route.path === currentRoute) {
	              request.isSharedInstance = true;
	              // since we're re-using the instance we must attach
	              // historyState to the request to prevent it from
	              // being overridden.
	              if (isFunction(request.page.historyState)) {
	                request.copiedHistoryState = request.page.historyState();
	              }
	            }
	          } else {
	            request.page = createComponent(stage, type);
	            pagesHost.a(request.page);
	            // test if need to request data provider
	            if (hasProvider(route.path)) {
	              provide = true;
	            }
	            request.isCreated = true;
	          }

	          // we store hash and route as properties on the page instance
	          // that way we can easily calculate new behaviour on page reload
	          request.page[symbols.hash] = hash;
	          request.page[symbols.route] = route.path;
	          _context2.prev = 10;
	          if (!provide) {
	            _context2.next = 25;
	            break;
	          }
	          // extract attached data-provider for route
	          // we're processing
	          _getProvider = getProvider(route), loadType = _getProvider.type, provider = _getProvider.provider; // update running request
	          request.provider = provider;
	          request.providerType = loadType;
	          _context2.next = 17;
	          return dataHooks[loadType](request);
	        case 17:
	          if (!(hash !== getLastHash())) {
	            _context2.next = 21;
	            break;
	          }
	          return _context2.abrupt("return", false);
	        case 21:
	          if (request.providerType !== 'after') {
	            emit(request.page, 'dataProvided');
	          }
	          // resolve promise
	          return _context2.abrupt("return", request);
	        case 23:
	          _context2.next = 27;
	          break;
	        case 25:
	          addPersistData(request);
	          return _context2.abrupt("return", request);
	        case 27:
	          _context2.next = 33;
	          break;
	        case 29:
	          _context2.prev = 29;
	          _context2.t0 = _context2["catch"](10);
	          request.error = _context2.t0;
	          return _context2.abrupt("return", Promise.reject(request));
	        case 33:
	        case "end":
	          return _context2.stop();
	      }
	    }, _callee2, null, [[10, 29]]);
	  }));
	  return function loader(_x2) {
	    return _ref2.apply(this, arguments);
	  };
	}();
	var handleError = function handleError(request) {
	  if (request && request.error) {
	    console.error(request.error);
	  } else if (request) {
	    Log$1.error(request);
	  }
	  if (request.page && routeExists('!')) {
	    navigate('!', {
	      request: request
	    }, false);
	  }
	};
	var mustReuse = function mustReuse(route) {
	  var opt = getOption(route.options, 'reuseInstance');
	  var config = routerConfig.get('reuseInstance');

	  // route always has final decision
	  if (isBoolean(opt)) {
	    return opt;
	  }
	  return !(isBoolean(config) && config === false);
	};

	var RoutedApp = /*#__PURE__*/function (_Lightning$Component) {
	  _inherits(RoutedApp, _Lightning$Component);
	  var _super = _createSuper(RoutedApp);
	  function RoutedApp() {
	    _classCallCheck(this, RoutedApp);
	    return _super.apply(this, arguments);
	  }
	  _createClass(RoutedApp, [{
	    key: "pages",
	    get:
	    /**
	     * Return location where pages need to be stored
	     */
	    function get() {
	      return this.tag('Pages');
	    }

	    /**
	     * Tell router where widgets are stored
	     */
	  }, {
	    key: "widgets",
	    get: function get() {
	      return this.tag('Widgets');
	    }

	    /**
	     * we MUST register _handleBack method so the Router
	     * can override it
	     * @private
	     */
	  }, {
	    key: "_handleBack",
	    value: function _handleBack() {}

	    /**
	     * We MUST return Router.activePage() so the new Page
	     * can listen to the remote-control.
	     */
	  }, {
	    key: "_getFocused",
	    value: function _getFocused() {
	      return Router.getActivePage();
	    }
	  }], [{
	    key: "_template",
	    value: function _template() {
	      return {
	        Pages: {
	          forceZIndexContext: true
	        },
	        /**
	         * This is a default Loading page that will be made visible
	         * during data-provider on() you CAN override in child-class
	         */
	        Loading: {
	          rect: true,
	          w: 1920,
	          h: 1080,
	          color: 0xff000000,
	          visible: false,
	          zIndex: 99,
	          Label: {
	            mount: 0.5,
	            x: 960,
	            y: 540,
	            text: {
	              text: 'Loading..'
	            }
	          }
	        }
	      };
	    }
	  }, {
	    key: "_states",
	    value: function _states() {
	      return [/*#__PURE__*/function (_this) {
	        _inherits(Loading, _this);
	        var _super2 = _createSuper(Loading);
	        function Loading() {
	          _classCallCheck(this, Loading);
	          return _super2.apply(this, arguments);
	        }
	        _createClass(Loading, [{
	          key: "$enter",
	          value: function $enter() {
	            this.tag('Loading').visible = true;
	          }
	        }, {
	          key: "$exit",
	          value: function $exit() {
	            this.tag('Loading').visible = false;
	          }
	        }]);
	        return Loading;
	      }(this), /*#__PURE__*/function (_this2) {
	        _inherits(Widgets, _this2);
	        var _super3 = _createSuper(Widgets);
	        function Widgets() {
	          _classCallCheck(this, Widgets);
	          return _super3.apply(this, arguments);
	        }
	        _createClass(Widgets, [{
	          key: "$enter",
	          value: function $enter(args, widget) {
	            // store widget reference
	            this._widget = widget;

	            // since it's possible that this behaviour
	            // is non-remote driven we force a recalculation
	            // of the focuspath
	            this._refocus();
	          }
	        }, {
	          key: "_getFocused",
	          value: function _getFocused() {
	            // we delegate focus to selected widget
	            // so it can consume remotecontrol presses
	            return this._widget;
	          }

	          // if we want to widget to widget focus delegation
	        }, {
	          key: "reload",
	          value: function reload(widget) {
	            this._widget = widget;
	            this._refocus();
	          }
	        }, {
	          key: "_handleKey",
	          value: function _handleKey() {
	            var restoreFocus = routerConfig.get('autoRestoreRemote');
	            /**
	             * The Router used to delegate focus back to the page instance on
	             * every unhandled key. This is barely usefull in any situation
	             * so for now we offer the option to explicity turn that behaviour off
	             * so we don't don't introduce a breaking change.
	             */
	            if (!isBoolean(restoreFocus) || restoreFocus === true) {
	              Router.focusPage();
	            }
	          }
	        }]);
	        return Widgets;
	      }(this)];
	    }
	  }]);
	  return RoutedApp;
	}(Lightning$1.Component);

	/*
	rouThor ==[x]
	 */
	var navigateQueue = new Map();
	var forcedHash = '';
	var resumeHash = '';

	/**
	 * Start routing the app
	 * @param config - route config object
	 * @param instance - instance of the app
	 */
	var startRouter = function startRouter(config, instance) {
	  bootRouter(config, instance);
	  registerListener();
	  start();
	};

	// start translating url
	var start = function start() {
	  var hash = (getHash() || '').replace(/^#/, '');
	  var bootKey = '$';
	  var params = getQueryStringParams(hash);
	  var bootRequest = getBootRequest();
	  var rootHash = getRootHash();
	  var isDirectLoad = hash.indexOf(bootKey) !== -1;

	  // prevent direct reload of wildcard routes
	  // expect bootComponent
	  if (isWildcard.test(hash) && hash !== bootKey) {
	    hash = '';
	  }

	  // store resume point for manual resume
	  resumeHash = isDirectLoad ? rootHash : hash || rootHash;
	  var ready = function ready() {
	    if (!hash && rootHash) {
	      if (isString(rootHash)) {
	        navigate(rootHash);
	      } else if (isFunction(rootHash)) {
	        rootHash().then(function (res) {
	          if (isObject(res)) {
	            navigate(res.path, res.params);
	          } else {
	            navigate(res);
	          }
	        });
	      }
	    } else {
	      queue(hash);
	      handleHashChange().then(function () {
	        app._refocus();
	      }).catch(function (e) {
	        console.error(e);
	      });
	    }
	  };
	  if (routeExists(bootKey)) {
	    if (hash && !isDirectLoad) {
	      if (!getRouteByHash(hash)) {
	        navigate('*', {
	          failedHash: hash
	        });
	        return;
	      }
	    }
	    navigate(bootKey, {
	      resume: resumeHash,
	      reload: bootKey === hash
	    }, false);
	  } else if (isFunction(bootRequest)) {
	    bootRequest(params).then(function () {
	      ready();
	    }).catch(function (e) {
	      handleBootError(e);
	    });
	  } else {
	    ready();
	  }
	};
	var handleBootError = function handleBootError(e) {
	  if (routeExists('!')) {
	    navigate('!', {
	      request: {
	        error: e
	      }
	    });
	  } else {
	    console.error(e);
	  }
	};

	/**
	 * start a new request
	 * @param url
	 * @param args
	 * @param store
	 */
	var navigate = function navigate(url) {
	  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var store = arguments.length > 2 ? arguments[2] : undefined;
	  if (isObject(url)) {
	    url = getHashByName(url);
	    if (!url) {
	      return;
	    }
	  }
	  var hash = getHash();
	  if (!mustUpdateLocationHash() && forcedHash) {
	    hash = forcedHash;
	  }
	  if (hash.replace(/^#/, '') !== url) {
	    // push request in the queue
	    queue(url, args, store);
	    if (mustUpdateLocationHash()) {
	      setHash(url);
	    } else {
	      forcedHash = url;
	      handleHashChange(url).then(function () {
	        app._refocus();
	      }).catch(function (e) {
	        console.error(e);
	      });
	    }
	  } else if (args.reload) {
	    // push request in the queue
	    queue(url, args, store);
	    handleHashChange(url).then(function () {
	      app._refocus();
	    }).catch(function (e) {
	      console.error(e);
	    });
	  }
	};
	var queue = function queue(hash) {
	  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var store = arguments.length > 2 ? arguments[2] : undefined;
	  hash = cleanHash(hash);
	  if (!navigateQueue.has(hash)) {
	    var _iterator = _createForOfIteratorHelper(navigateQueue.values()),
	      _step;
	    try {
	      for (_iterator.s(); !(_step = _iterator.n()).done;) {
	        var _request = _step.value;
	        _request.cancel();
	      }
	    } catch (err) {
	      _iterator.e(err);
	    } finally {
	      _iterator.f();
	    }
	    var request = createRequest(hash, args, store);
	    navigateQueue.set(decodeURIComponent(hash), request);
	    return request;
	  }
	  return false;
	};

	/**
	 * Handle change of hash
	 * @param override
	 * @returns {Promise<void>}
	 */
	var handleHashChange = /*#__PURE__*/function () {
	  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(override) {
	    var hash, queueId, request, route, result, store;
	    return _regeneratorRuntime().wrap(function _callee$(_context) {
	      while (1) switch (_context.prev = _context.next) {
	        case 0:
	          hash = cleanHash(override || getHash());
	          queueId = decodeURIComponent(hash);
	          request = navigateQueue.get(queueId); // handle hash updated manually
	          if (!request && !navigateQueue.size) {
	            request = queue(hash);
	          }
	          route = getRouteByHash(hash);
	          if (route) {
	            _context.next = 8;
	            break;
	          }
	          if (routeExists('*')) {
	            navigate('*', {
	              failedHash: hash
	            });
	          } else {
	            console.error("Unable to navigate to: ".concat(hash));
	          }
	          return _context.abrupt("return");
	        case 8:
	          // update current processed request
	          request.hash = hash;
	          request.route = route;
	          _context.next = 12;
	          return beforeEachRoute(getActiveHash(), request);
	        case 12:
	          result = _context.sent;
	          if (!(result && route.beforeNavigate)) {
	            _context.next = 17;
	            break;
	          }
	          _context.next = 16;
	          return route.beforeNavigate(getActiveHash(), request);
	        case 16:
	          result = _context.sent;
	        case 17:
	          if (!isBoolean(result)) {
	            _context.next = 22;
	            break;
	          }
	          if (!result) {
	            _context.next = 20;
	            break;
	          }
	          return _context.abrupt("return", resolveHashChange(request));
	        case 20:
	          _context.next = 25;
	          break;
	        case 22:
	          // if navigation guard didn't return true
	          // we cancel the current request
	          request.cancel();
	          navigateQueue.delete(queueId);
	          if (isString(result)) {
	            navigate(result);
	          } else if (isObject(result)) {
	            store = true;
	            if (isBoolean(result.store)) {
	              store = result.store;
	            }
	            navigate(result.path, result.params, store);
	          }
	        case 25:
	        case "end":
	          return _context.stop();
	      }
	    }, _callee);
	  }));
	  return function handleHashChange(_x) {
	    return _ref.apply(this, arguments);
	  };
	}();

	/**
	 * Continue processing the hash change if not blocked
	 * by global or local hook
	 * @param request - {}
	 */
	var resolveHashChange = function resolveHashChange(request) {
	  var hash = request.hash;
	  var route = request.route;
	  var queueId = decodeURIComponent(hash);
	  // store last requested hash so we can
	  // prevent a route that resolved later
	  // from displaying itself
	  setLastHash(hash);
	  if (route.path) {
	    var component = getComponent(route.path);
	    // if a hook is provided for the current route
	    if (isFunction(route.hook)) {
	      var urlParams = getValuesFromHash(hash, route.path);
	      var params = {};
	      var _iterator2 = _createForOfIteratorHelper(urlParams.keys()),
	        _step2;
	      try {
	        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
	          var key = _step2.value;
	          params[key] = urlParams.get(key);
	        }
	      } catch (err) {
	        _iterator2.e(err);
	      } finally {
	        _iterator2.f();
	      }
	      route.hook(app, _objectSpread2({}, params));
	    }
	    // if there is a component attached to the route
	    if (component) {
	      // force page to root state to prevent shared state issues
	      var activePage = getActivePage();
	      if (activePage) {
	        var keepAlive = keepActivePageAlive(getActiveRoute(), request);
	        if (activePage && route.path === getActiveRoute() && !keepAlive) {
	          activePage._setState('');
	        }
	      }
	      if (isPage(component)) {
	        load(request).then(function () {
	          app._refocus();
	          navigateQueue.delete(queueId);
	        });
	      } else {
	        // of the component is not a constructor
	        // or a Component instance we can assume
	        // that it's a dynamic import
	        component().then(function (contents) {
	          return contents.default;
	        }).then(function (module) {
	          storeComponent(route.path, module);
	          return load(request);
	        }).then(function () {
	          app._refocus();
	          navigateQueue.delete(queueId);
	        });
	      }
	    } else {
	      navigateQueue.delete(queueId);
	    }
	  }
	};

	/**
	 * Directional step in history
	 * @param level
	 */
	var step = function step() {
	  var level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	  if (!level || isNaN(level)) {
	    return false;
	  }
	  var history = getHistory();
	  // for now we only support negative numbers
	  level = Math.abs(level);

	  //Check whether we have any history avaialble or not
	  if (history.length) {
	    var _navigate;
	    // for now we only support history back
	    var route = history.splice(history.length - level, level)[0];
	    // store changed history
	    setHistory(history);
	    return navigate(route.hash, (_navigate = {}, _defineProperty(_navigate, symbols.backtrack, true), _defineProperty(_navigate, symbols.historyState, route.state), _navigate), false);
	  } else if (routerConfig.get('backtrack')) {
	    var hashLastPart = /(\/:?[\w%\s-]+)$/;
	    var hash = stripRegex(getHash());
	    var floor = getFloor(hash);

	    // test if we got deep-linked
	    if (floor > 1) {
	      while (floor--) {
	        // strip of last part
	        hash = hash.replace(hashLastPart, '');
	        // if we have a configured route
	        // we navigate to it
	        if (getRouteByHash(hash)) {
	          return navigate(hash, _defineProperty({}, symbols.backtrack, true), false);
	        }
	      }
	    }
	  }

	  // we can't step back past the amount
	  // of history entries
	  if (level > history.length) {
	    if (isFunction(app._handleAppClose)) {
	      return app._handleAppClose();
	    }
	    return app.application.closeApp();
	  }
	  return false;
	};

	/**
	 * Resume Router's page loading process after
	 * the BootComponent became visible;
	 */
	var resume = function resume() {
	  if (isString(resumeHash)) {
	    navigate(resumeHash, false);
	    resumeHash = '';
	  } else if (isFunction(resumeHash)) {
	    resumeHash().then(function (res) {
	      resumeHash = '';
	      if (isObject(res)) {
	        navigate(res.path, res.params);
	      } else {
	        navigate(res);
	      }
	    });
	  } else {
	    console.warn('[Router]: resume() called but no hash found');
	  }
	};

	/**
	 * Force reload active hash
	 */
	var reload = function reload() {
	  if (!isNavigating()) {
	    var hash = getActiveHash();
	    navigate(hash, {
	      reload: true
	    }, false);
	  }
	};

	/**
	 * Query if the Router is still processing a Request
	 * @returns {boolean}
	 */
	var isNavigating = function isNavigating() {
	  if (navigateQueue.size) {
	    var isProcessing = false;
	    var _iterator3 = _createForOfIteratorHelper(navigateQueue.values()),
	      _step3;
	    try {
	      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
	        var request = _step3.value;
	        if (!request.isCancelled) {
	          isProcessing = true;
	        }
	      }
	    } catch (err) {
	      _iterator3.e(err);
	    } finally {
	      _iterator3.f();
	    }
	    return isProcessing;
	  }
	  return false;
	};
	var getResumeHash = function getResumeHash() {
	  return resumeHash;
	};

	/**
	 * By default we return the location hash
	 * @returns {string}
	 */
	var getHash = function getHash() {
	  return document.location.hash;
	};

	/**
	 * Update location hash
	 * @param url
	 */
	var setHash = function setHash(url) {
	  document.location.hash = url;
	};

	/**
	 * This can be called from the platform / bootstrapper to override
	 * the default getting and setting of the hash
	 * @param config
	 */
	var initRouter = function initRouter(config) {
	  if (config.getHash) {
	    getHash = config.getHash;
	  }
	  if (config.setHash) {
	    setHash = config.setHash;
	  }
	};

	/**
	 * On hash change we start processing
	 */
	var registerListener = function registerListener() {
	  Registry.addEventListener(window, 'hashchange', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
	    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
	      while (1) switch (_context2.prev = _context2.next) {
	        case 0:
	          if (!mustUpdateLocationHash()) {
	            _context2.next = 9;
	            break;
	          }
	          _context2.prev = 1;
	          _context2.next = 4;
	          return handleHashChange();
	        case 4:
	          _context2.next = 9;
	          break;
	        case 6:
	          _context2.prev = 6;
	          _context2.t0 = _context2["catch"](1);
	          console.error(_context2.t0);
	        case 9:
	        case "end":
	          return _context2.stop();
	      }
	    }, _callee2, null, [[1, 6]]);
	  })));
	};

	/**
	 * Navigate to root hash
	 */
	var root = function root() {
	  var rootHash = getRootHash();
	  if (isString(rootHash)) {
	    navigate(rootHash);
	  } else if (isFunction(rootHash)) {
	    rootHash().then(function (res) {
	      if (isObject(res)) {
	        navigate(res.path, res.params);
	      } else {
	        navigate(res);
	      }
	    });
	  }
	};

	// export API
	var Router = {
	  startRouter: startRouter,
	  navigate: navigate,
	  resume: resume,
	  step: step,
	  go: step,
	  back: step.bind(null, -1),
	  activePage: getActivePage,
	  getActivePage: function getActivePage$1() {
	    // warning
	    return getActivePage();
	  },
	  getActiveRoute: getActiveRoute,
	  getActiveHash: getActiveHash,
	  focusWidget: focusWidget,
	  getActiveWidget: getActiveWidget,
	  restoreFocus: restoreFocus,
	  isNavigating: isNavigating,
	  getHistory: getHistory,
	  setHistory: setHistory,
	  getHistoryState: getHistoryState,
	  replaceHistoryState: replaceHistoryState,
	  getQueryStringParams: getQueryStringParams,
	  reload: reload,
	  symbols: symbols,
	  App: RoutedApp,
	  // keep backwards compatible
	  focusPage: restoreFocus,
	  root: root,
	  /**
	   * Deprecated api methods
	   */
	  setupRoutes: function setupRoutes() {
	    console.warn('Router: setupRoutes is deprecated, consolidate your configuration');
	    console.warn('https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration');
	  },
	  on: function on() {
	    console.warn('Router.on() is deprecated, consolidate your configuration');
	    console.warn('https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration');
	  },
	  before: function before() {
	    console.warn('Router.before() is deprecated, consolidate your configuration');
	    console.warn('https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration');
	  },
	  after: function after() {
	    console.warn('Router.after() is deprecated, consolidate your configuration');
	    console.warn('https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration');
	  }
	};

	/*
	 * If not stated otherwise in this file or this component's LICENSE file the
	 * following copyright and licenses apply:
	 *
	 * Copyright 2020 Metrological
	 *
	 * Licensed under the Apache License, Version 2.0 (the License);
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	var ApplicationInstance;
	var Launch = (function (App, appSettings, platformSettings, appData) {
	  initSettings(appSettings, platformSettings);
	  initUtils(platformSettings);
	  initStorage();
	  // Initialize plugins
	  if (platformSettings.plugins) {
	    platformSettings.plugins.profile && initProfile(platformSettings.plugins.profile);
	    platformSettings.plugins.metrics && initMetrics(platformSettings.plugins.metrics);
	    platformSettings.plugins.mediaPlayer && initMediaPlayer(platformSettings.plugins.mediaPlayer);
	    platformSettings.plugins.mediaPlayer && initVideoPlayer(platformSettings.plugins.mediaPlayer);
	    platformSettings.plugins.ads && initAds(platformSettings.plugins.ads);
	    platformSettings.plugins.router && initRouter(platformSettings.plugins.router);
	    platformSettings.plugins.tv && initTV(platformSettings.plugins.tv);
	    platformSettings.plugins.purchase && initPurchase(platformSettings.plugins.purchase);
	    platformSettings.plugins.pin && initPin(platformSettings.plugins.pin);
	  }
	  var app = Application(App, appData, platformSettings);
	  initLightningSdkPlugin.log = Log$1;
	  initLightningSdkPlugin.settings = Settings$1;
	  initLightningSdkPlugin.ads = Ads;
	  initLightningSdkPlugin.lightning = Lightning$1;
	  ApplicationInstance = new app(appSettings);
	  initLightningSdkPlugin.appInstance = ApplicationInstance;
	  return ApplicationInstance;
	});

	/*#__PURE__*/(function (_Lightning$Component) {
	  _inherits(SubtitleComponent, _Lightning$Component);
	  var _super = _createSuper(SubtitleComponent);
	  function SubtitleComponent() {
	    _classCallCheck(this, SubtitleComponent);
	    return _super.apply(this, arguments);
	  }
	  _createClass(SubtitleComponent, [{
	    key: "_init",
	    value: function _init() {
	      var _this = this;
	      this._textTextureDefaults = new Lightning$1.textures.TextTexture(this.stage).cloneArgs();
	      this.tag('Text').on('txLoaded', function (_ref) {
	        var _source = _ref._source;
	        _this.w = _source.w + _this.tag('Text').x * 2;
	        _this.h = _source.h;
	        _this.position();
	      });
	    }
	  }, {
	    key: "textFormat",
	    get: function get() {
	      var textTag = this.tag('Text').text;
	      return {
	        fontFace: textTag.fontFace || 'sans-serif',
	        fontSize: textTag.fontSize,
	        lineHeight: textTag.lineHeight,
	        textAlign: textTag.textAlign,
	        wordWrap: true,
	        maxLines: textTag.maxLines
	      };
	    }
	  }, {
	    key: "show",
	    value: function show() {
	      this.visible = true;
	    }
	  }, {
	    key: "hide",
	    value: function hide() {
	      this.visible = false;
	    }
	  }, {
	    key: "position",
	    value: function position() {
	      this.x = this._calculateX(this.xPos);
	      this.y = this._calculateY(this.yPos);
	    }
	  }, {
	    key: "viewportW",
	    get: function get() {
	      return this._viewportW || this.application.finalW;
	    },
	    set: function set(v) {
	      this._viewportW = v;
	      this.x = this._calculateX(this.xPos);
	    }
	  }, {
	    key: "viewportH",
	    get: function get() {
	      return this._viewportH || this.application.finalH;
	    },
	    set: function set(v) {
	      this._viewportH = v;
	      this.y = this._calculateY(this.yPos);
	    }
	  }, {
	    key: "_calculateX",
	    value: function _calculateX(x) {
	      if (x === 'center') {
	        x = (this.viewportW - this.finalW) / 2;
	      } else if (x === 'left') {
	        x = 60;
	      } else if (x === 'right') {
	        x = this.viewportW - this.finalW - 60;
	      }
	      return x;
	    }
	  }, {
	    key: "xPos",
	    get: function get() {
	      return this._x || 'center';
	    },
	    set: function set(v) {
	      this._x = v;
	      this.x = this._calculateX(v);
	    }
	  }, {
	    key: "_calculateY",
	    value: function _calculateY(y) {
	      if (y === 'center') {
	        return (this.viewportH - this.finalH) / 2;
	      } else if (y === 'top') {
	        return 60;
	      } else if (y === 'bottom') {
	        return this.viewportH - this.finalH - 60;
	      }
	      return y;
	    }
	  }, {
	    key: "yPos",
	    get: function get() {
	      return this._y || 'bottom';
	    },
	    set: function set(v) {
	      this._y = v;
	      this.y = this._calculateY(v);
	    }
	  }, {
	    key: "fontFamily",
	    set: function set(v) {
	      this.tag('Text').text.fontFace = v;
	    }
	  }, {
	    key: "fontSize",
	    set: function set(v) {
	      this.tag('Text').text.fontSize = v;
	      this.tag('Text').text.lineHeight = v * 1.3;
	    }
	  }, {
	    key: "fontColor",
	    set: function set(v) {
	      this.tag('Text').color = v;
	    }
	  }, {
	    key: "backgroundColor",
	    set: function set(v) {
	      this.color = v;
	    }
	  }, {
	    key: "_defineBreakpoint",
	    value: function _defineBreakpoint(text, breakpoint) {
	      if (breakpoint >= this.maxWidth) return this.maxWidth;
	      var info = Lightning$1.textures.TextTexture.renderer(this.stage, this.stage.platform.getDrawingCanvas(), _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, this._textTextureDefaults), this.textFormat), {
	        wordWrapWidth: breakpoint
	      }), {}, {
	        text: text
	      }))._calculateRenderInfo();
	      if (info.width <= breakpoint && info.lines.length <= 2) {
	        return breakpoint;
	      } else {
	        return this._defineBreakpoint(text, breakpoint * 1.25);
	      }
	    }
	  }, {
	    key: "text",
	    set: function set(v) {
	      this.alpha = 0;
	      if (v && v.length) {
	        var breakpoint = this._defineBreakpoint(v, 640);
	        this.tag('Text').text.wordWrapWidth = breakpoint;
	        this.tag('Text').text = v;
	        this.alpha = 1;
	      }
	    }
	  }, {
	    key: "textAlign",
	    set: function set(v) {
	      this._textAlign = v;
	      this.tag('Text').text.textAlign = v;
	    }
	  }, {
	    key: "maxWidth",
	    get: function get() {
	      return (this._maxWidth || 1200) - this.tag('Text').x * 2;
	    },
	    set: function set(v) {
	      this._maxWidth = v;
	    }
	  }, {
	    key: "maxLines",
	    set: function set(v) {
	      this.tag('Text').text.maxLines = v;
	    }
	  }], [{
	    key: "_template",
	    value: function _template() {
	      return {
	        visible: false,
	        rect: true,
	        color: 0x90000000,
	        shader: {
	          type: Lightning$1.shaders.RoundedRectangle,
	          radius: 5
	        },
	        Text: {
	          y: 5,
	          x: 20,
	          text: {
	            textColor: 0xffffffff,
	            fontSize: 38,
	            lineHeight: 38 * 1.4,
	            textAlign: 'center',
	            wordWrap: true,
	            maxLines: 3,
	            shadow: true,
	            shadowColor: 0xff333333
	          }
	        }
	      };
	    }
	  }]);
	  return SubtitleComponent;
	})(Lightning$1.Component);

	var PADDING = 20;
	var DEFAULT_BACKGROUND_COLOR = 0xff000090;
	var Button = /*#__PURE__*/function (_Lightning$Element) {
	  _inherits(Button, _Lightning$Element);
	  var _super = _createSuper(Button);
	  function Button(stage) {
	    var _this;
	    _classCallCheck(this, Button);
	    _this = _super.call(this, stage);
	    _this.rect = true;
	    _this.color = DEFAULT_BACKGROUND_COLOR;
	    return _this;
	  }
	  _createClass(Button, [{
	    key: "setLabel",
	    value: function setLabel(label) {
	      var labelTexture = new Lightning$1.textures.TextTexture(this.stage);
	      labelTexture.text = label;
	      labelTexture.load();
	      this.w = labelTexture.getRenderWidth() + PADDING * 2;
	      this.h = labelTexture.getRenderHeight() + PADDING / 2;
	      var labelContainer = new Lightning$1.Element(this.stage);
	      labelContainer.mount = 0.5;
	      labelContainer.x = this.w / 2;
	      labelContainer.y = this.h / 2;
	      labelContainer.texture = labelTexture;
	      this.childList.add(labelContainer);
	    }
	  }, {
	    key: "setBackgroundColor",
	    value: function setBackgroundColor(color) {
	      this.color = color;
	    }
	  }]);
	  return Button;
	}(Lightning$1.Element);

	var App = /*#__PURE__*/function (_Lightning$Component) {
	  _inherits(App, _Lightning$Component);
	  var _super = _createSuper(App);
	  function App(stage) {
	    var _this;
	    _classCallCheck(this, App);
	    _this = _super.call(this, stage);
	    var buttonsContainer = new Lightning$1.Element(stage);
	    buttonsContainer.x = 100;
	    buttonsContainer.y = 100;
	    buttonsContainer.w = 700;
	    buttonsContainer.h = 300;
	    buttonsContainer.color = 0xff900000;
	    buttonsContainer.rect = true;
	    _this.childList.add(buttonsContainer);
	    var leftButton = new Button(stage);
	    leftButton.setLabel("Left Button");
	    leftButton.x = 30;
	    leftButton.y = 30;
	    var rightButton = new Button(stage);
	    rightButton.setLabel("Right Button");
	    rightButton.x = leftButton.x + leftButton.w + 25;
	    rightButton.y = leftButton.y;
	    buttonsContainer.childList.add(leftButton);
	    buttonsContainer.childList.add(rightButton);

	    // 2. Update the Button.js file so that we can give custom
	    // background colors to our buttons, like:
	    rightButton.setBackgroundColor(0xff200000); /* <-- Red */
	    return _this;
	  }

	  /*static _template() {
	    return {
	      w: 1020,
	      h: 800,
	      rect: true,
	      color: 0xff1c1c1c,      
	    }
	  }*/
	  return _createClass(App);
	}(Lightning$1.Component);

	function index () {
	  return Launch.apply(void 0, [App].concat(Array.prototype.slice.call(arguments)));
	}

	return index;

})();
//# sourceMappingURL=appBundle.es5.js.map
