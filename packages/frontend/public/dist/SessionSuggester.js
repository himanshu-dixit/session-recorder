/*!
 * webpack-library-starter-kit
 * Webpack starter kit for creating libraries (Input: ES6, Output: UMD, CommonJS)
 * 
 * @version v1.0.0
 * @author George Raptis <georapbox@gmail.com>
 * @homepage https://github.com/georapbox/webpack-library-starter-kit#readme
 * @repository git+https://github.com/georapbox/webpack-library-starter-kit.git
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("SessionSuggester", [], factory);
	else if(typeof exports === 'object')
		exports["SessionSuggester"] = factory();
	else
		root["SessionSuggester"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/.pnpm/base64-js@1.5.1/node_modules/base64-js/index.js":
/*!********************************************************************************************************************!*\
  !*** /Users/crusher/Desktop/experiment/test-v2/node_modules/.pnpm/base64-js@1.5.1/node_modules/base64-js/index.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "../../node_modules/.pnpm/buffer@4.9.2/node_modules/buffer/index.js":
/*!**************************************************************************************************************!*\
  !*** /Users/crusher/Desktop/experiment/test-v2/node_modules/.pnpm/buffer@4.9.2/node_modules/buffer/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "../../node_modules/.pnpm/base64-js@1.5.1/node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "../../node_modules/.pnpm/ieee754@1.2.1/node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "../../node_modules/.pnpm/isarray@1.0.0/node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack@4.40.3_webpack-cli@3.3.12/node_modules/webpack/buildin/global.js */ "../../node_modules/.pnpm/webpack@4.40.3_webpack-cli@3.3.12/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../node_modules/.pnpm/ieee754@1.2.1/node_modules/ieee754/index.js":
/*!****************************************************************************************************************!*\
  !*** /Users/crusher/Desktop/experiment/test-v2/node_modules/.pnpm/ieee754@1.2.1/node_modules/ieee754/index.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "../../node_modules/.pnpm/isarray@1.0.0/node_modules/isarray/index.js":
/*!****************************************************************************************************************!*\
  !*** /Users/crusher/Desktop/experiment/test-v2/node_modules/.pnpm/isarray@1.0.0/node_modules/isarray/index.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "../../node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js":
/*!********************************************************************************************************************!*\
  !*** /Users/crusher/Desktop/experiment/test-v2/node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/_virtual/_rollup-plugin-web-worker-loader__helper__auto__createBase64WorkerFactory.js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** /Users/crusher/Desktop/experiment/test-v2/node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/_virtual/_rollup-plugin-web-worker-loader__helper__auto__createBase64WorkerFactory.js ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: createBase64WorkerFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBase64WorkerFactory", function() { return createBase64WorkerFactory; });
/* harmony import */ var _rollup_plugin_web_worker_loader_helper_node_createBase64WorkerFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_rollup-plugin-web-worker-loader__helper__node__createBase64WorkerFactory.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/_virtual/_rollup-plugin-web-worker-loader__helper__node__createBase64WorkerFactory.js");
/* harmony import */ var _rollup_plugin_web_worker_loader_helper_browser_createBase64WorkerFactory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_rollup-plugin-web-worker-loader__helper__browser__createBase64WorkerFactory.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/_virtual/_rollup-plugin-web-worker-loader__helper__browser__createBase64WorkerFactory.js");
/* harmony import */ var _rollup_plugin_web_worker_loader_helper_auto_isNodeJS_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_rollup-plugin-web-worker-loader__helper__auto__isNodeJS.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/_virtual/_rollup-plugin-web-worker-loader__helper__auto__isNodeJS.js");




function createBase64WorkerFactory(base64, sourcemapArg, enableUnicodeArg) {
    if (Object(_rollup_plugin_web_worker_loader_helper_auto_isNodeJS_js__WEBPACK_IMPORTED_MODULE_2__["isNodeJS"])()) {
        return Object(_rollup_plugin_web_worker_loader_helper_node_createBase64WorkerFactory_js__WEBPACK_IMPORTED_MODULE_0__["createBase64WorkerFactory"])(base64, sourcemapArg, enableUnicodeArg);
    }
    return Object(_rollup_plugin_web_worker_loader_helper_browser_createBase64WorkerFactory_js__WEBPACK_IMPORTED_MODULE_1__["createBase64WorkerFactory"])(base64, sourcemapArg, enableUnicodeArg);
}




/***/ }),

/***/ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/_virtual/_rollup-plugin-web-worker-loader__helper__auto__isNodeJS.js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** /Users/crusher/Desktop/experiment/test-v2/node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/_virtual/_rollup-plugin-web-worker-loader__helper__auto__isNodeJS.js ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: isNodeJS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNodeJS", function() { return isNodeJS; });
var kIsNodeJS = Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]';

function isNodeJS() {
    return kIsNodeJS;
}



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../process@0.11.10/node_modules/process/browser.js */ "../../node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js")))

/***/ }),

/***/ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/_virtual/_rollup-plugin-web-worker-loader__helper__browser__createBase64WorkerFactory.js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** /Users/crusher/Desktop/experiment/test-v2/node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/_virtual/_rollup-plugin-web-worker-loader__helper__browser__createBase64WorkerFactory.js ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: createBase64WorkerFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBase64WorkerFactory", function() { return createBase64WorkerFactory; });
function decodeBase64(base64, enableUnicode) {
    var binaryString = atob(base64);
    if (enableUnicode) {
        var binaryView = new Uint8Array(binaryString.length);
        for (var i = 0, n = binaryString.length; i < n; ++i) {
            binaryView[i] = binaryString.charCodeAt(i);
        }
        return String.fromCharCode.apply(null, new Uint16Array(binaryView.buffer));
    }
    return binaryString;
}

function createURL(base64, sourcemapArg, enableUnicodeArg) {
    var sourcemap = sourcemapArg === undefined ? null : sourcemapArg;
    var enableUnicode = enableUnicodeArg === undefined ? false : enableUnicodeArg;
    var source = decodeBase64(base64, enableUnicode);
    var start = source.indexOf('\n', 10) + 1;
    var body = source.substring(start) + (sourcemap ? '\/\/# sourceMappingURL=' + sourcemap : '');
    var blob = new Blob([body], { type: 'application/javascript' });
    return URL.createObjectURL(blob);
}

function createBase64WorkerFactory(base64, sourcemapArg, enableUnicodeArg) {
    var url;
    return function WorkerFactory(options) {
        url = url || createURL(base64, sourcemapArg, enableUnicodeArg);
        return new Worker(url, options);
    };
}




/***/ }),

/***/ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/_virtual/_rollup-plugin-web-worker-loader__helper__node__WorkerClass.js":
/*!********************************************************************************************************************************************************************************************!*\
  !*** /Users/crusher/Desktop/experiment/test-v2/node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/_virtual/_rollup-plugin-web-worker-loader__helper__node__WorkerClass.js ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: WorkerClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkerClass", function() { return WorkerClass; });
var WorkerClass = null;

try {
    var WorkerThreads =
         true && typeof module.require === 'function' && __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'worker_threads'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())) ||
        typeof require === 'function' && require('worker_threads') ||
         true && __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'worker_threads'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
    WorkerClass = WorkerThreads.Worker;
} catch(e) {} // eslint-disable-line



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack@4.40.3_webpack-cli@3.3.12/node_modules/webpack/buildin/harmony-module.js */ "../../node_modules/.pnpm/webpack@4.40.3_webpack-cli@3.3.12/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/_virtual/_rollup-plugin-web-worker-loader__helper__node__createBase64WorkerFactory.js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** /Users/crusher/Desktop/experiment/test-v2/node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/_virtual/_rollup-plugin-web-worker-loader__helper__node__createBase64WorkerFactory.js ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: createBase64WorkerFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBase64WorkerFactory", function() { return createBase64WorkerFactory; });
/* harmony import */ var _rollup_plugin_web_worker_loader_helper_node_WorkerClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_rollup-plugin-web-worker-loader__helper__node__WorkerClass.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/_virtual/_rollup-plugin-web-worker-loader__helper__node__WorkerClass.js");


function decodeBase64(base64, enableUnicode) {
    return Buffer.from(base64, 'base64').toString(enableUnicode ? 'utf16' : 'utf8');
}

function createBase64WorkerFactory(base64, sourcemapArg, enableUnicodeArg) {
    var sourcemap = sourcemapArg === undefined ? null : sourcemapArg;
    var enableUnicode = enableUnicodeArg === undefined ? false : enableUnicodeArg;
    var source = decodeBase64(base64, enableUnicode);
    var start = source.indexOf('\n', 10) + 1;
    var body = source.substring(start) + (sourcemap ? '\/\/# sourceMappingURL=' + sourcemap : '');
    return function WorkerFactory(options) {
        return new _rollup_plugin_web_worker_loader_helper_node_WorkerClass_js__WEBPACK_IMPORTED_MODULE_0__["WorkerClass"](body, Object.assign({}, options, { eval: true }));
    };
}



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../buffer@4.9.2/node_modules/buffer/index.js */ "../../node_modules/.pnpm/buffer@4.9.2/node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/_virtual/image-bitmap-data-url-worker.js":
/*!*************************************************************************************************************************************************************!*\
  !*** /Users/crusher/Desktop/experiment/test-v2/node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/_virtual/image-bitmap-data-url-worker.js ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WorkerFactory; });
/* harmony import */ var _rollup_plugin_web_worker_loader_helper_auto_createBase64WorkerFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_rollup-plugin-web-worker-loader__helper__auto__createBase64WorkerFactory.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/_virtual/_rollup-plugin-web-worker-loader__helper__auto__createBase64WorkerFactory.js");


var WorkerFactory = Object(_rollup_plugin_web_worker_loader_helper_auto_createBase64WorkerFactory_js__WEBPACK_IMPORTED_MODULE_0__["createBase64WorkerFactory"])('Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwooZnVuY3Rpb24gKCkgewogICAgJ3VzZSBzdHJpY3QnOwoKICAgIC8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKg0KICAgIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLg0KDQogICAgUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55DQogICAgcHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLg0KDQogICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEICJBUyBJUyIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEgNCiAgICBSRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkNCiAgICBBTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsDQogICAgSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NDQogICAgTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1INCiAgICBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SDQogICAgUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS4NCiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqLw0KDQogICAgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikgew0KICAgICAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH0NCiAgICAgICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7DQogICAgICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9DQogICAgICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvclsidGhyb3ciXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9DQogICAgICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfQ0KICAgICAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpOw0KICAgICAgICB9KTsNCiAgICB9CgogICAgLyoKICAgICAqIGJhc2U2NC1hcnJheWJ1ZmZlciAxLjAuMSA8aHR0cHM6Ly9naXRodWIuY29tL25pa2xhc3ZoL2Jhc2U2NC1hcnJheWJ1ZmZlcj4KICAgICAqIENvcHlyaWdodCAoYykgMjAyMSBOaWtsYXMgdm9uIEhlcnR6ZW4gPGh0dHBzOi8vaGVydHplbi5jb20+CiAgICAgKiBSZWxlYXNlZCB1bmRlciBNSVQgTGljZW5zZQogICAgICovCiAgICB2YXIgY2hhcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyc7CiAgICAvLyBVc2UgYSBsb29rdXAgdGFibGUgdG8gZmluZCB0aGUgaW5kZXguCiAgICB2YXIgbG9va3VwID0gdHlwZW9mIFVpbnQ4QXJyYXkgPT09ICd1bmRlZmluZWQnID8gW10gOiBuZXcgVWludDhBcnJheSgyNTYpOwogICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGFycy5sZW5ndGg7IGkrKykgewogICAgICAgIGxvb2t1cFtjaGFycy5jaGFyQ29kZUF0KGkpXSA9IGk7CiAgICB9CiAgICB2YXIgZW5jb2RlID0gZnVuY3Rpb24gKGFycmF5YnVmZmVyKSB7CiAgICAgICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlidWZmZXIpLCBpLCBsZW4gPSBieXRlcy5sZW5ndGgsIGJhc2U2NCA9ICcnOwogICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkgKz0gMykgewogICAgICAgICAgICBiYXNlNjQgKz0gY2hhcnNbYnl0ZXNbaV0gPj4gMl07CiAgICAgICAgICAgIGJhc2U2NCArPSBjaGFyc1soKGJ5dGVzW2ldICYgMykgPDwgNCkgfCAoYnl0ZXNbaSArIDFdID4+IDQpXTsKICAgICAgICAgICAgYmFzZTY0ICs9IGNoYXJzWygoYnl0ZXNbaSArIDFdICYgMTUpIDw8IDIpIHwgKGJ5dGVzW2kgKyAyXSA+PiA2KV07CiAgICAgICAgICAgIGJhc2U2NCArPSBjaGFyc1tieXRlc1tpICsgMl0gJiA2M107CiAgICAgICAgfQogICAgICAgIGlmIChsZW4gJSAzID09PSAyKSB7CiAgICAgICAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDEpICsgJz0nOwogICAgICAgIH0KICAgICAgICBlbHNlIGlmIChsZW4gJSAzID09PSAxKSB7CiAgICAgICAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDIpICsgJz09JzsKICAgICAgICB9CiAgICAgICAgcmV0dXJuIGJhc2U2NDsKICAgIH07CgogICAgY29uc3QgbGFzdEJsb2JNYXAgPSBuZXcgTWFwKCk7DQogICAgY29uc3QgdHJhbnNwYXJlbnRCbG9iTWFwID0gbmV3IE1hcCgpOw0KICAgIGZ1bmN0aW9uIGdldFRyYW5zcGFyZW50QmxvYkZvcih3aWR0aCwgaGVpZ2h0LCBkYXRhVVJMT3B0aW9ucykgew0KICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkgew0KICAgICAgICAgICAgY29uc3QgaWQgPSBgJHt3aWR0aH0tJHtoZWlnaHR9YDsNCiAgICAgICAgICAgIGlmICgnT2Zmc2NyZWVuQ2FudmFzJyBpbiBnbG9iYWxUaGlzKSB7DQogICAgICAgICAgICAgICAgaWYgKHRyYW5zcGFyZW50QmxvYk1hcC5oYXMoaWQpKQ0KICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJhbnNwYXJlbnRCbG9iTWFwLmdldChpZCk7DQogICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2NyZWVuID0gbmV3IE9mZnNjcmVlbkNhbnZhcyh3aWR0aCwgaGVpZ2h0KTsNCiAgICAgICAgICAgICAgICBvZmZzY3JlZW4uZ2V0Q29udGV4dCgnMmQnKTsNCiAgICAgICAgICAgICAgICBjb25zdCBibG9iID0geWllbGQgb2Zmc2NyZWVuLmNvbnZlcnRUb0Jsb2IoZGF0YVVSTE9wdGlvbnMpOw0KICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5QnVmZmVyID0geWllbGQgYmxvYi5hcnJheUJ1ZmZlcigpOw0KICAgICAgICAgICAgICAgIGNvbnN0IGJhc2U2NCA9IGVuY29kZShhcnJheUJ1ZmZlcik7DQogICAgICAgICAgICAgICAgdHJhbnNwYXJlbnRCbG9iTWFwLnNldChpZCwgYmFzZTY0KTsNCiAgICAgICAgICAgICAgICByZXR1cm4gYmFzZTY0Ow0KICAgICAgICAgICAgfQ0KICAgICAgICAgICAgZWxzZSB7DQogICAgICAgICAgICAgICAgcmV0dXJuICcnOw0KICAgICAgICAgICAgfQ0KICAgICAgICB9KTsNCiAgICB9DQogICAgY29uc3Qgd29ya2VyID0gc2VsZjsNCiAgICB3b3JrZXIub25tZXNzYWdlID0gZnVuY3Rpb24gKGUpIHsNCiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHsNCiAgICAgICAgICAgIGlmICgnT2Zmc2NyZWVuQ2FudmFzJyBpbiBnbG9iYWxUaGlzKSB7DQogICAgICAgICAgICAgICAgY29uc3QgeyBpZCwgYml0bWFwLCB3aWR0aCwgaGVpZ2h0LCBkYXRhVVJMT3B0aW9ucyB9ID0gZS5kYXRhOw0KICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zcGFyZW50QmFzZTY0ID0gZ2V0VHJhbnNwYXJlbnRCbG9iRm9yKHdpZHRoLCBoZWlnaHQsIGRhdGFVUkxPcHRpb25zKTsNCiAgICAgICAgICAgICAgICBjb25zdCBvZmZzY3JlZW4gPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKHdpZHRoLCBoZWlnaHQpOw0KICAgICAgICAgICAgICAgIGNvbnN0IGN0eCA9IG9mZnNjcmVlbi5nZXRDb250ZXh0KCcyZCcpOw0KICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoYml0bWFwLCAwLCAwKTsNCiAgICAgICAgICAgICAgICBiaXRtYXAuY2xvc2UoKTsNCiAgICAgICAgICAgICAgICBjb25zdCBibG9iID0geWllbGQgb2Zmc2NyZWVuLmNvbnZlcnRUb0Jsb2IoZGF0YVVSTE9wdGlvbnMpOw0KICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBibG9iLnR5cGU7DQogICAgICAgICAgICAgICAgY29uc3QgYXJyYXlCdWZmZXIgPSB5aWVsZCBibG9iLmFycmF5QnVmZmVyKCk7DQogICAgICAgICAgICAgICAgY29uc3QgYmFzZTY0ID0gZW5jb2RlKGFycmF5QnVmZmVyKTsNCiAgICAgICAgICAgICAgICBpZiAoIWxhc3RCbG9iTWFwLmhhcyhpZCkgJiYgKHlpZWxkIHRyYW5zcGFyZW50QmFzZTY0KSA9PT0gYmFzZTY0KSB7DQogICAgICAgICAgICAgICAgICAgIGxhc3RCbG9iTWFwLnNldChpZCwgYmFzZTY0KTsNCiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdvcmtlci5wb3N0TWVzc2FnZSh7IGlkIH0pOw0KICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICBpZiAobGFzdEJsb2JNYXAuZ2V0KGlkKSA9PT0gYmFzZTY0KQ0KICAgICAgICAgICAgICAgICAgICByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQgfSk7DQogICAgICAgICAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKHsNCiAgICAgICAgICAgICAgICAgICAgaWQsDQogICAgICAgICAgICAgICAgICAgIHR5cGUsDQogICAgICAgICAgICAgICAgICAgIGJhc2U2NCwNCiAgICAgICAgICAgICAgICAgICAgd2lkdGgsDQogICAgICAgICAgICAgICAgICAgIGhlaWdodCwNCiAgICAgICAgICAgICAgICB9KTsNCiAgICAgICAgICAgICAgICBsYXN0QmxvYk1hcC5zZXQoaWQsIGJhc2U2NCk7DQogICAgICAgICAgICB9DQogICAgICAgICAgICBlbHNlIHsNCiAgICAgICAgICAgICAgICByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQ6IGUuZGF0YS5pZCB9KTsNCiAgICAgICAgICAgIH0NCiAgICAgICAgfSk7DQogICAgfTsKCn0pKCk7Cgo=', null, false);
/* eslint-enable */




/***/ }),

/***/ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/ext/@xstate/fsm/es/index.js":
/*!************************************************************************************************************************************************!*\
  !*** /Users/crusher/Desktop/experiment/test-v2/node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/ext/@xstate/fsm/es/index.js ***!
  \************************************************************************************************************************************************/
/*! exports provided: InterpreterStatus, assign, createMachine, interpret */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterpreterStatus", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMachine", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpret", function() { return v; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function t(t,n){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var r,o,i=e.call(t),a=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)a.push(r.value);}catch(t){o={error:t};}finally{try{r&&!r.done&&(e=i.return)&&e.call(i);}finally{if(o)throw o.error}}return a}var n;!function(t){t[t.NotStarted=0]="NotStarted",t[t.Running=1]="Running",t[t.Stopped=2]="Stopped";}(n||(n={}));var e={type:"xstate.init"};function r(t){return void 0===t?[]:[].concat(t)}function o(t){return {type:"xstate.assign",assignment:t}}function i(t,n){return "string"==typeof(t="string"==typeof t&&n&&n[t]?n[t]:t)?{type:t}:"function"==typeof t?{type:t.name,exec:t}:t}function a(t){return function(n){return t===n}}function u(t){return "string"==typeof t?{type:t}:t}function c(t,n){return {value:t,context:n,actions:[],changed:!1,matches:a(t)}}function f(t,n,e){var r=n,o=!1;return [t.filter((function(t){if("xstate.assign"===t.type){o=!0;var n=Object.assign({},r);return "function"==typeof t.assignment?n=t.assignment(r,e):Object.keys(t.assignment).forEach((function(o){n[o]="function"==typeof t.assignment[o]?t.assignment[o](r,e):t.assignment[o];})),r=n,!1}return !0})),r,o]}function s(n,o){void 0===o&&(o={});var s=t(f(r(n.states[n.initial].entry).map((function(t){return i(t,o.actions)})),n.context,e),2),l=s[0],v=s[1],y={config:n,_options:o,initialState:{value:n.initial,actions:l,context:v,matches:a(n.initial)},transition:function(e,o){var s,l,v="string"==typeof e?{value:e,context:n.context}:e,p=v.value,g=v.context,d=u(o),x=n.states[p];if(x.on){var m=r(x.on[d.type]);try{for(var h=function(t){var n="function"==typeof Symbol&&Symbol.iterator,e=n&&t[n],r=0;if(e)return e.call(t);if(t&&"number"==typeof t.length)return {next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}(m),b=h.next();!b.done;b=h.next()){var S=b.value;if(void 0===S)return c(p,g);var w="string"==typeof S?{target:S}:S,j=w.target,E=w.actions,R=void 0===E?[]:E,N=w.cond,O=void 0===N?function(){return !0}:N,_=void 0===j,k=null!=j?j:p,T=n.states[k];if(O(g,d)){var q=t(f((_?r(R):[].concat(x.exit,R,T.entry).filter((function(t){return t}))).map((function(t){return i(t,y._options.actions)})),g,d),3),z=q[0],A=q[1],B=q[2],C=null!=j?j:p;return {value:C,context:A,actions:z,changed:j!==p||z.length>0||B,matches:a(C)}}}}catch(t){s={error:t};}finally{try{b&&!b.done&&(l=h.return)&&l.call(h);}finally{if(s)throw s.error}}}return c(p,g)}};return y}var l=function(t,n){return t.actions.forEach((function(e){var r=e.exec;return r&&r(t.context,n)}))};function v(t){var r=t.initialState,o=n.NotStarted,i=new Set,c={_machine:t,send:function(e){o===n.Running&&(r=t.transition(r,e),l(r,u(e)),i.forEach((function(t){return t(r)})));},subscribe:function(t){return i.add(t),t(r),{unsubscribe:function(){return i.delete(t)}}},start:function(i){if(i){var u="object"==typeof i?i:{context:t.config.context,value:i};r={value:u.value,actions:[],context:u.context,matches:a(u.value)};}return o=n.Running,l(r,e),c},stop:function(){return o=n.Stopped,i.clear(),c},get state(){return r},get status(){return o}};return c}




/***/ }),

/***/ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/ext/base64-arraybuffer/dist/base64-arraybuffer.es5.js":
/*!**************************************************************************************************************************************************************************!*\
  !*** /Users/crusher/Desktop/experiment/test-v2/node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/ext/base64-arraybuffer/dist/base64-arraybuffer.es5.js ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: decode, encode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decode", function() { return decode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encode", function() { return encode; });
/*
 * base64-arraybuffer 1.0.1 <https://github.com/niklasvh/base64-arraybuffer>
 * Copyright (c) 2021 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */
var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
// Use a lookup table to find the index.
var lookup = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
for (var i = 0; i < chars.length; i++) {
    lookup[chars.charCodeAt(i)] = i;
}
var encode = function (arraybuffer) {
    var bytes = new Uint8Array(arraybuffer), i, len = bytes.length, base64 = '';
    for (i = 0; i < len; i += 3) {
        base64 += chars[bytes[i] >> 2];
        base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
        base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
        base64 += chars[bytes[i + 2] & 63];
    }
    if (len % 3 === 2) {
        base64 = base64.substring(0, base64.length - 1) + '=';
    }
    else if (len % 3 === 1) {
        base64 = base64.substring(0, base64.length - 2) + '==';
    }
    return base64;
};
var decode = function (base64) {
    var bufferLength = base64.length * 0.75, len = base64.length, i, p = 0, encoded1, encoded2, encoded3, encoded4;
    if (base64[base64.length - 1] === '=') {
        bufferLength--;
        if (base64[base64.length - 2] === '=') {
            bufferLength--;
        }
    }
    var arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer);
    for (i = 0; i < len; i += 4) {
        encoded1 = lookup[base64.charCodeAt(i)];
        encoded2 = lookup[base64.charCodeAt(i + 1)];
        encoded3 = lookup[base64.charCodeAt(i + 2)];
        encoded4 = lookup[base64.charCodeAt(i + 3)];
        bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
        bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
        bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
    }
    return arraybuffer;
};




/***/ }),

/***/ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/ext/fflate/esm/browser.js":
/*!**********************************************************************************************************************************************!*\
  !*** /Users/crusher/Desktop/experiment/test-v2/node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/ext/fflate/esm/browser.js ***!
  \**********************************************************************************************************************************************/
/*! exports provided: strFromU8, strToU8, unzlibSync, zlibSync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strFromU8", function() { return strFromU8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strToU8", function() { return strToU8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unzlibSync", function() { return unzlibSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zlibSync", function() { return zlibSync; });
// DEFLATE is a complex format; to read this code, you should probably check the RFC first:

// aliases for shorter compressed code (most minifers don't do this)
var u8 = Uint8Array, u16 = Uint16Array, u32 = Uint32Array;
// fixed length extra bits
var fleb = new u8([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, /* unused */ 0, 0, /* impossible */ 0]);
// fixed distance extra bits
// see fleb note
var fdeb = new u8([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, /* unused */ 0, 0]);
// code length index map
var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
// get base, reverse index map from extra bits
var freb = function (eb, start) {
    var b = new u16(31);
    for (var i = 0; i < 31; ++i) {
        b[i] = start += 1 << eb[i - 1];
    }
    // numbers here are at max 18 bits
    var r = new u32(b[30]);
    for (var i = 1; i < 30; ++i) {
        for (var j = b[i]; j < b[i + 1]; ++j) {
            r[j] = ((j - b[i]) << 5) | i;
        }
    }
    return [b, r];
};
var _a = freb(fleb, 2), fl = _a[0], revfl = _a[1];
// we can ignore the fact that the other numbers are wrong; they never happen anyway
fl[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0), fd = _b[0], revfd = _b[1];
// map of value to reverse (assuming 16 bits)
var rev = new u16(32768);
for (var i = 0; i < 32768; ++i) {
    // reverse table algorithm from SO
    var x = ((i & 0xAAAA) >>> 1) | ((i & 0x5555) << 1);
    x = ((x & 0xCCCC) >>> 2) | ((x & 0x3333) << 2);
    x = ((x & 0xF0F0) >>> 4) | ((x & 0x0F0F) << 4);
    rev[i] = (((x & 0xFF00) >>> 8) | ((x & 0x00FF) << 8)) >>> 1;
}
// create huffman tree from u8 "map": index -> code length for code index
// mb (max bits) must be at most 15
// TODO: optimize/split up?
var hMap = (function (cd, mb, r) {
    var s = cd.length;
    // index
    var i = 0;
    // u16 "map": index -> # of codes with bit length = index
    var l = new u16(mb);
    // length of cd must be 288 (total # of codes)
    for (; i < s; ++i)
        ++l[cd[i] - 1];
    // u16 "map": index -> minimum code for bit length = index
    var le = new u16(mb);
    for (i = 0; i < mb; ++i) {
        le[i] = (le[i - 1] + l[i - 1]) << 1;
    }
    var co;
    if (r) {
        // u16 "map": index -> number of actual bits, symbol for code
        co = new u16(1 << mb);
        // bits to remove for reverser
        var rvb = 15 - mb;
        for (i = 0; i < s; ++i) {
            // ignore 0 lengths
            if (cd[i]) {
                // num encoding both symbol and bits read
                var sv = (i << 4) | cd[i];
                // free bits
                var r_1 = mb - cd[i];
                // start value
                var v = le[cd[i] - 1]++ << r_1;
                // m is end value
                for (var m = v | ((1 << r_1) - 1); v <= m; ++v) {
                    // every 16 bit value starting with the code yields the same result
                    co[rev[v] >>> rvb] = sv;
                }
            }
        }
    }
    else {
        co = new u16(s);
        for (i = 0; i < s; ++i)
            co[i] = rev[le[cd[i] - 1]++] >>> (15 - cd[i]);
    }
    return co;
});
// fixed length tree
var flt = new u8(288);
for (var i = 0; i < 144; ++i)
    flt[i] = 8;
for (var i = 144; i < 256; ++i)
    flt[i] = 9;
for (var i = 256; i < 280; ++i)
    flt[i] = 7;
for (var i = 280; i < 288; ++i)
    flt[i] = 8;
// fixed distance tree
var fdt = new u8(32);
for (var i = 0; i < 32; ++i)
    fdt[i] = 5;
// fixed length map
var flm = /*#__PURE__*/ hMap(flt, 9, 0), flrm = /*#__PURE__*/ hMap(flt, 9, 1);
// fixed distance map
var fdm = /*#__PURE__*/ hMap(fdt, 5, 0), fdrm = /*#__PURE__*/ hMap(fdt, 5, 1);
// find max of array
var max = function (a) {
    var m = a[0];
    for (var i = 1; i < a.length; ++i) {
        if (a[i] > m)
            m = a[i];
    }
    return m;
};
// read d, starting at bit p and mask with m
var bits = function (d, p, m) {
    var o = (p / 8) >> 0;
    return ((d[o] | (d[o + 1] << 8)) >>> (p & 7)) & m;
};
// read d, starting at bit p continuing for at least 16 bits
var bits16 = function (d, p) {
    var o = (p / 8) >> 0;
    return ((d[o] | (d[o + 1] << 8) | (d[o + 2] << 16)) >>> (p & 7));
};
// get end of byte
var shft = function (p) { return ((p / 8) >> 0) + (p & 7 && 1); };
// typed array slice - allows garbage collector to free original reference,
// while being more compatible than .slice
var slc = function (v, s, e) {
    if (s == null || s < 0)
        s = 0;
    if (e == null || e > v.length)
        e = v.length;
    // can't use .constructor in case user-supplied
    var n = new (v instanceof u16 ? u16 : v instanceof u32 ? u32 : u8)(e - s);
    n.set(v.subarray(s, e));
    return n;
};
// expands raw DEFLATE data
var inflt = function (dat, buf, st) {
    // source length
    var sl = dat.length;
    // have to estimate size
    var noBuf = !buf || st;
    // no state
    var noSt = !st || st.i;
    if (!st)
        st = {};
    // Assumes roughly 33% compression ratio average
    if (!buf)
        buf = new u8(sl * 3);
    // ensure buffer can fit at least l elements
    var cbuf = function (l) {
        var bl = buf.length;
        // need to increase size to fit
        if (l > bl) {
            // Double or set to necessary, whichever is greater
            var nbuf = new u8(Math.max(bl * 2, l));
            nbuf.set(buf);
            buf = nbuf;
        }
    };
    //  last chunk         bitpos           bytes
    var final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
    // total bits
    var tbts = sl * 8;
    do {
        if (!lm) {
            // BFINAL - this is only 1 when last chunk is next
            st.f = final = bits(dat, pos, 1);
            // type: 0 = no compression, 1 = fixed huffman, 2 = dynamic huffman
            var type = bits(dat, pos + 1, 3);
            pos += 3;
            if (!type) {
                // go to end of byte boundary
                var s = shft(pos) + 4, l = dat[s - 4] | (dat[s - 3] << 8), t = s + l;
                if (t > sl) {
                    if (noSt)
                        throw 'unexpected EOF';
                    break;
                }
                // ensure size
                if (noBuf)
                    cbuf(bt + l);
                // Copy over uncompressed data
                buf.set(dat.subarray(s, t), bt);
                // Get new bitpos, update byte count
                st.b = bt += l, st.p = pos = t * 8;
                continue;
            }
            else if (type == 1)
                lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
            else if (type == 2) {
                //  literal                            lengths
                var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
                var tl = hLit + bits(dat, pos + 5, 31) + 1;
                pos += 14;
                // length+distance tree
                var ldt = new u8(tl);
                // code length tree
                var clt = new u8(19);
                for (var i = 0; i < hcLen; ++i) {
                    // use index map to get real code
                    clt[clim[i]] = bits(dat, pos + i * 3, 7);
                }
                pos += hcLen * 3;
                // code lengths bits
                var clb = max(clt), clbmsk = (1 << clb) - 1;
                if (!noSt && pos + tl * (clb + 7) > tbts)
                    break;
                // code lengths map
                var clm = hMap(clt, clb, 1);
                for (var i = 0; i < tl;) {
                    var r = clm[bits(dat, pos, clbmsk)];
                    // bits read
                    pos += r & 15;
                    // symbol
                    var s = r >>> 4;
                    // code length to copy
                    if (s < 16) {
                        ldt[i++] = s;
                    }
                    else {
                        //  copy   count
                        var c = 0, n = 0;
                        if (s == 16)
                            n = 3 + bits(dat, pos, 3), pos += 2, c = ldt[i - 1];
                        else if (s == 17)
                            n = 3 + bits(dat, pos, 7), pos += 3;
                        else if (s == 18)
                            n = 11 + bits(dat, pos, 127), pos += 7;
                        while (n--)
                            ldt[i++] = c;
                    }
                }
                //    length tree                 distance tree
                var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
                // max length bits
                lbt = max(lt);
                // max dist bits
                dbt = max(dt);
                lm = hMap(lt, lbt, 1);
                dm = hMap(dt, dbt, 1);
            }
            else
                throw 'invalid block type';
            if (pos > tbts)
                throw 'unexpected EOF';
        }
        // Make sure the buffer can hold this + the largest possible addition
        // Maximum chunk size (practically, theoretically infinite) is 2^17;
        if (noBuf)
            cbuf(bt + 131072);
        var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
        var mxa = lbt + dbt + 18;
        while (noSt || pos + mxa < tbts) {
            // bits read, code
            var c = lm[bits16(dat, pos) & lms], sym = c >>> 4;
            pos += c & 15;
            if (pos > tbts)
                throw 'unexpected EOF';
            if (!c)
                throw 'invalid length/literal';
            if (sym < 256)
                buf[bt++] = sym;
            else if (sym == 256) {
                lm = null;
                break;
            }
            else {
                var add = sym - 254;
                // no extra bits needed if less
                if (sym > 264) {
                    // index
                    var i = sym - 257, b = fleb[i];
                    add = bits(dat, pos, (1 << b) - 1) + fl[i];
                    pos += b;
                }
                // dist
                var d = dm[bits16(dat, pos) & dms], dsym = d >>> 4;
                if (!d)
                    throw 'invalid distance';
                pos += d & 15;
                var dt = fd[dsym];
                if (dsym > 3) {
                    var b = fdeb[dsym];
                    dt += bits16(dat, pos) & ((1 << b) - 1), pos += b;
                }
                if (pos > tbts)
                    throw 'unexpected EOF';
                if (noBuf)
                    cbuf(bt + 131072);
                var end = bt + add;
                for (; bt < end; bt += 4) {
                    buf[bt] = buf[bt - dt];
                    buf[bt + 1] = buf[bt + 1 - dt];
                    buf[bt + 2] = buf[bt + 2 - dt];
                    buf[bt + 3] = buf[bt + 3 - dt];
                }
                bt = end;
            }
        }
        st.l = lm, st.p = pos, st.b = bt;
        if (lm)
            final = 1, st.m = lbt, st.d = dm, st.n = dbt;
    } while (!final);
    return bt == buf.length ? buf : slc(buf, 0, bt);
};
// starting at p, write the minimum number of bits that can hold v to d
var wbits = function (d, p, v) {
    v <<= p & 7;
    var o = (p / 8) >> 0;
    d[o] |= v;
    d[o + 1] |= v >>> 8;
};
// starting at p, write the minimum number of bits (>8) that can hold v to d
var wbits16 = function (d, p, v) {
    v <<= p & 7;
    var o = (p / 8) >> 0;
    d[o] |= v;
    d[o + 1] |= v >>> 8;
    d[o + 2] |= v >>> 16;
};
// creates code lengths from a frequency table
var hTree = function (d, mb) {
    // Need extra info to make a tree
    var t = [];
    for (var i = 0; i < d.length; ++i) {
        if (d[i])
            t.push({ s: i, f: d[i] });
    }
    var s = t.length;
    var t2 = t.slice();
    if (!s)
        return [new u8(0), 0];
    if (s == 1) {
        var v = new u8(t[0].s + 1);
        v[t[0].s] = 1;
        return [v, 1];
    }
    t.sort(function (a, b) { return a.f - b.f; });
    // after i2 reaches last ind, will be stopped
    // freq must be greater than largest possible number of symbols
    t.push({ s: -1, f: 25001 });
    var l = t[0], r = t[1], i0 = 0, i1 = 1, i2 = 2;
    t[0] = { s: -1, f: l.f + r.f, l: l, r: r };
    // efficient algorithm from UZIP.js
    // i0 is lookbehind, i2 is lookahead - after processing two low-freq
    // symbols that combined have high freq, will start processing i2 (high-freq,
    // non-composite) symbols instead
    // see https://reddit.com/r/photopea/comments/ikekht/uzipjs_questions/
    while (i1 != s - 1) {
        l = t[t[i0].f < t[i2].f ? i0++ : i2++];
        r = t[i0 != i1 && t[i0].f < t[i2].f ? i0++ : i2++];
        t[i1++] = { s: -1, f: l.f + r.f, l: l, r: r };
    }
    var maxSym = t2[0].s;
    for (var i = 1; i < s; ++i) {
        if (t2[i].s > maxSym)
            maxSym = t2[i].s;
    }
    // code lengths
    var tr = new u16(maxSym + 1);
    // max bits in tree
    var mbt = ln(t[i1 - 1], tr, 0);
    if (mbt > mb) {
        // more algorithms from UZIP.js
        // TODO: find out how this code works (debt)
        //  ind    debt
        var i = 0, dt = 0;
        //    left            cost
        var lft = mbt - mb, cst = 1 << lft;
        t2.sort(function (a, b) { return tr[b.s] - tr[a.s] || a.f - b.f; });
        for (; i < s; ++i) {
            var i2_1 = t2[i].s;
            if (tr[i2_1] > mb) {
                dt += cst - (1 << (mbt - tr[i2_1]));
                tr[i2_1] = mb;
            }
            else
                break;
        }
        dt >>>= lft;
        while (dt > 0) {
            var i2_2 = t2[i].s;
            if (tr[i2_2] < mb)
                dt -= 1 << (mb - tr[i2_2]++ - 1);
            else
                ++i;
        }
        for (; i >= 0 && dt; --i) {
            var i2_3 = t2[i].s;
            if (tr[i2_3] == mb) {
                --tr[i2_3];
                ++dt;
            }
        }
        mbt = mb;
    }
    return [new u8(tr), mbt];
};
// get the max length and assign length codes
var ln = function (n, l, d) {
    return n.s == -1
        ? Math.max(ln(n.l, l, d + 1), ln(n.r, l, d + 1))
        : (l[n.s] = d);
};
// length codes generation
var lc = function (c) {
    var s = c.length;
    // Note that the semicolon was intentional
    while (s && !c[--s])
        ;
    var cl = new u16(++s);
    //  ind      num         streak
    var cli = 0, cln = c[0], cls = 1;
    var w = function (v) { cl[cli++] = v; };
    for (var i = 1; i <= s; ++i) {
        if (c[i] == cln && i != s)
            ++cls;
        else {
            if (!cln && cls > 2) {
                for (; cls > 138; cls -= 138)
                    w(32754);
                if (cls > 2) {
                    w(cls > 10 ? ((cls - 11) << 5) | 28690 : ((cls - 3) << 5) | 12305);
                    cls = 0;
                }
            }
            else if (cls > 3) {
                w(cln), --cls;
                for (; cls > 6; cls -= 6)
                    w(8304);
                if (cls > 2)
                    w(((cls - 3) << 5) | 8208), cls = 0;
            }
            while (cls--)
                w(cln);
            cls = 1;
            cln = c[i];
        }
    }
    return [cl.subarray(0, cli), s];
};
// calculate the length of output from tree, code lengths
var clen = function (cf, cl) {
    var l = 0;
    for (var i = 0; i < cl.length; ++i)
        l += cf[i] * cl[i];
    return l;
};
// writes a fixed block
// returns the new bit pos
var wfblk = function (out, pos, dat) {
    // no need to write 00 as type: TypedArray defaults to 0
    var s = dat.length;
    var o = shft(pos + 2);
    out[o] = s & 255;
    out[o + 1] = s >>> 8;
    out[o + 2] = out[o] ^ 255;
    out[o + 3] = out[o + 1] ^ 255;
    for (var i = 0; i < s; ++i)
        out[o + i + 4] = dat[i];
    return (o + 4 + s) * 8;
};
// writes a block
var wblk = function (dat, out, final, syms, lf, df, eb, li, bs, bl, p) {
    wbits(out, p++, final);
    ++lf[256];
    var _a = hTree(lf, 15), dlt = _a[0], mlb = _a[1];
    var _b = hTree(df, 15), ddt = _b[0], mdb = _b[1];
    var _c = lc(dlt), lclt = _c[0], nlc = _c[1];
    var _d = lc(ddt), lcdt = _d[0], ndc = _d[1];
    var lcfreq = new u16(19);
    for (var i = 0; i < lclt.length; ++i)
        lcfreq[lclt[i] & 31]++;
    for (var i = 0; i < lcdt.length; ++i)
        lcfreq[lcdt[i] & 31]++;
    var _e = hTree(lcfreq, 7), lct = _e[0], mlcb = _e[1];
    var nlcc = 19;
    for (; nlcc > 4 && !lct[clim[nlcc - 1]]; --nlcc)
        ;
    var flen = (bl + 5) << 3;
    var ftlen = clen(lf, flt) + clen(df, fdt) + eb;
    var dtlen = clen(lf, dlt) + clen(df, ddt) + eb + 14 + 3 * nlcc + clen(lcfreq, lct) + (2 * lcfreq[16] + 3 * lcfreq[17] + 7 * lcfreq[18]);
    if (flen <= ftlen && flen <= dtlen)
        return wfblk(out, p, dat.subarray(bs, bs + bl));
    var lm, ll, dm, dl;
    wbits(out, p, 1 + (dtlen < ftlen)), p += 2;
    if (dtlen < ftlen) {
        lm = hMap(dlt, mlb, 0), ll = dlt, dm = hMap(ddt, mdb, 0), dl = ddt;
        var llm = hMap(lct, mlcb, 0);
        wbits(out, p, nlc - 257);
        wbits(out, p + 5, ndc - 1);
        wbits(out, p + 10, nlcc - 4);
        p += 14;
        for (var i = 0; i < nlcc; ++i)
            wbits(out, p + 3 * i, lct[clim[i]]);
        p += 3 * nlcc;
        var lcts = [lclt, lcdt];
        for (var it = 0; it < 2; ++it) {
            var clct = lcts[it];
            for (var i = 0; i < clct.length; ++i) {
                var len = clct[i] & 31;
                wbits(out, p, llm[len]), p += lct[len];
                if (len > 15)
                    wbits(out, p, (clct[i] >>> 5) & 127), p += clct[i] >>> 12;
            }
        }
    }
    else {
        lm = flm, ll = flt, dm = fdm, dl = fdt;
    }
    for (var i = 0; i < li; ++i) {
        if (syms[i] > 255) {
            var len = (syms[i] >>> 18) & 31;
            wbits16(out, p, lm[len + 257]), p += ll[len + 257];
            if (len > 7)
                wbits(out, p, (syms[i] >>> 23) & 31), p += fleb[len];
            var dst = syms[i] & 31;
            wbits16(out, p, dm[dst]), p += dl[dst];
            if (dst > 3)
                wbits16(out, p, (syms[i] >>> 5) & 8191), p += fdeb[dst];
        }
        else {
            wbits16(out, p, lm[syms[i]]), p += ll[syms[i]];
        }
    }
    wbits16(out, p, lm[256]);
    return p + ll[256];
};
// deflate options (nice << 13) | chain
var deo = /*#__PURE__*/ new u32([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]);
// empty
var et = /*#__PURE__*/ new u8(0);
// compresses data into a raw DEFLATE buffer
var dflt = function (dat, lvl, plvl, pre, post, lst) {
    var s = dat.length;
    var o = new u8(pre + s + 5 * (1 + Math.floor(s / 7000)) + post);
    // writing to this writes to the output buffer
    var w = o.subarray(pre, o.length - post);
    var pos = 0;
    if (!lvl || s < 8) {
        for (var i = 0; i <= s; i += 65535) {
            // end
            var e = i + 65535;
            if (e < s) {
                // write full block
                pos = wfblk(w, pos, dat.subarray(i, e));
            }
            else {
                // write final block
                w[i] = lst;
                pos = wfblk(w, pos, dat.subarray(i, s));
            }
        }
    }
    else {
        var opt = deo[lvl - 1];
        var n = opt >>> 13, c = opt & 8191;
        var msk_1 = (1 << plvl) - 1;
        //    prev 2-byte val map    curr 2-byte val map
        var prev = new u16(32768), head = new u16(msk_1 + 1);
        var bs1_1 = Math.ceil(plvl / 3), bs2_1 = 2 * bs1_1;
        var hsh = function (i) { return (dat[i] ^ (dat[i + 1] << bs1_1) ^ (dat[i + 2] << bs2_1)) & msk_1; };
        // 24576 is an arbitrary number of maximum symbols per block
        // 424 buffer for last block
        var syms = new u32(25000);
        // length/literal freq   distance freq
        var lf = new u16(288), df = new u16(32);
        //  l/lcnt  exbits  index  l/lind  waitdx  bitpos
        var lc_1 = 0, eb = 0, i = 0, li = 0, wi = 0, bs = 0;
        for (; i < s; ++i) {
            // hash value
            var hv = hsh(i);
            // index mod 32768
            var imod = i & 32767;
            // previous index with this value
            var pimod = head[hv];
            prev[imod] = pimod;
            head[hv] = imod;
            // We always should modify head and prev, but only add symbols if
            // this data is not yet processed ("wait" for wait index)
            if (wi <= i) {
                // bytes remaining
                var rem = s - i;
                if ((lc_1 > 7000 || li > 24576) && rem > 423) {
                    pos = wblk(dat, w, 0, syms, lf, df, eb, li, bs, i - bs, pos);
                    li = lc_1 = eb = 0, bs = i;
                    for (var j = 0; j < 286; ++j)
                        lf[j] = 0;
                    for (var j = 0; j < 30; ++j)
                        df[j] = 0;
                }
                //  len    dist   chain
                var l = 2, d = 0, ch_1 = c, dif = (imod - pimod) & 32767;
                if (rem > 2 && hv == hsh(i - dif)) {
                    var maxn = Math.min(n, rem) - 1;
                    var maxd = Math.min(32767, i);
                    // max possible length
                    // not capped at dif because decompressors implement "rolling" index population
                    var ml = Math.min(258, rem);
                    while (dif <= maxd && --ch_1 && imod != pimod) {
                        if (dat[i + l] == dat[i + l - dif]) {
                            var nl = 0;
                            for (; nl < ml && dat[i + nl] == dat[i + nl - dif]; ++nl)
                                ;
                            if (nl > l) {
                                l = nl, d = dif;
                                // break out early when we reach "nice" (we are satisfied enough)
                                if (nl > maxn)
                                    break;
                                // now, find the rarest 2-byte sequence within this
                                // length of literals and search for that instead.
                                // Much faster than just using the start
                                var mmd = Math.min(dif, nl - 2);
                                var md = 0;
                                for (var j = 0; j < mmd; ++j) {
                                    var ti = (i - dif + j + 32768) & 32767;
                                    var pti = prev[ti];
                                    var cd = (ti - pti + 32768) & 32767;
                                    if (cd > md)
                                        md = cd, pimod = ti;
                                }
                            }
                        }
                        // check the previous match
                        imod = pimod, pimod = prev[imod];
                        dif += (imod - pimod + 32768) & 32767;
                    }
                }
                // d will be nonzero only when a match was found
                if (d) {
                    // store both dist and len data in one Uint32
                    // Make sure this is recognized as a len/dist with 28th bit (2^28)
                    syms[li++] = 268435456 | (revfl[l] << 18) | revfd[d];
                    var lin = revfl[l] & 31, din = revfd[d] & 31;
                    eb += fleb[lin] + fdeb[din];
                    ++lf[257 + lin];
                    ++df[din];
                    wi = i + l;
                    ++lc_1;
                }
                else {
                    syms[li++] = dat[i];
                    ++lf[dat[i]];
                }
            }
        }
        pos = wblk(dat, w, lst, syms, lf, df, eb, li, bs, i - bs, pos);
        // this is the easiest way to avoid needing to maintain state
        if (!lst)
            pos = wfblk(w, pos, et);
    }
    return slc(o, 0, pre + shft(pos) + post);
};
// Alder32
var adler = function () {
    var a = 1, b = 0;
    return {
        p: function (d) {
            // closures have awful performance
            var n = a, m = b;
            var l = d.length;
            for (var i = 0; i != l;) {
                var e = Math.min(i + 5552, l);
                for (; i < e; ++i)
                    n += d[i], m += n;
                n %= 65521, m %= 65521;
            }
            a = n, b = m;
        },
        d: function () { return ((a >>> 8) << 16 | (b & 255) << 8 | (b >>> 8)) + ((a & 255) << 23) * 2; }
    };
};
// deflate with opts
var dopt = function (dat, opt, pre, post, st) {
    return dflt(dat, opt.level == null ? 6 : opt.level, opt.mem == null ? Math.ceil(Math.max(8, Math.min(13, Math.log(dat.length))) * 1.5) : (12 + opt.mem), pre, post, !st);
};
// write bytes
var wbytes = function (d, b, v) {
    for (; v; ++b)
        d[b] = v, v >>>= 8;
};
// zlib header
var zlh = function (c, o) {
    var lv = o.level, fl = lv == 0 ? 0 : lv < 6 ? 1 : lv == 9 ? 3 : 2;
    c[0] = 120, c[1] = (fl << 6) | (fl ? (32 - 2 * fl) : 1);
};
// zlib valid
var zlv = function (d) {
    if ((d[0] & 15) != 8 || (d[0] >>> 4) > 7 || ((d[0] << 8 | d[1]) % 31))
        throw 'invalid zlib data';
    if (d[1] & 32)
        throw 'invalid zlib data: preset dictionaries not supported';
};
/**
 * Compress data with Zlib
 * @param data The data to compress
 * @param opts The compression options
 * @returns The zlib-compressed version of the data
 */
function zlibSync(data, opts) {
    if (opts === void 0) { opts = {}; }
    var a = adler();
    a.p(data);
    var d = dopt(data, opts, 2, 4);
    return zlh(d, opts), wbytes(d, d.length - 4, a.d()), d;
}
/**
 * Expands Zlib data
 * @param data The data to decompress
 * @param out Where to write the data. Saves memory if you know the decompressed size and provide an output buffer of that length.
 * @returns The decompressed version of the data
 */
function unzlibSync(data, out) {
    return inflt((zlv(data), data.subarray(2, -4)), out);
}
/**
 * Converts a string into a Uint8Array for use with compression/decompression methods
 * @param str The string to encode
 * @param latin1 Whether or not to interpret the data as Latin-1. This should
 *               not need to be true unless decoding a binary string.
 * @returns The string encoded in UTF-8/Latin-1 binary
 */
function strToU8(str, latin1) {
    var l = str.length;
    if (!latin1 && typeof TextEncoder != 'undefined')
        return new TextEncoder().encode(str);
    var ar = new u8(str.length + (str.length >>> 1));
    var ai = 0;
    var w = function (v) { ar[ai++] = v; };
    for (var i = 0; i < l; ++i) {
        if (ai + 5 > ar.length) {
            var n = new u8(ai + 8 + ((l - i) << 1));
            n.set(ar);
            ar = n;
        }
        var c = str.charCodeAt(i);
        if (c < 128 || latin1)
            w(c);
        else if (c < 2048)
            w(192 | (c >>> 6)), w(128 | (c & 63));
        else if (c > 55295 && c < 57344)
            c = 65536 + (c & 1023 << 10) | (str.charCodeAt(++i) & 1023),
                w(240 | (c >>> 18)), w(128 | ((c >>> 12) & 63)), w(128 | ((c >>> 6) & 63)), w(128 | (c & 63));
        else
            w(224 | (c >>> 12)), w(128 | ((c >>> 6) & 63)), w(128 | (c & 63));
    }
    return slc(ar, 0, ai);
}
/**
 * Converts a Uint8Array to a string
 * @param dat The data to decode to string
 * @param latin1 Whether or not to interpret the data as Latin-1. This should
 *               not need to be true unless encoding to binary string.
 * @returns The original UTF-8/Latin-1 string
 */
function strFromU8(dat, latin1) {
    var r = '';
    if (!latin1 && typeof TextDecoder != 'undefined')
        return new TextDecoder().decode(dat);
    for (var i = 0; i < dat.length;) {
        var c = dat[i++];
        if (c < 128 || latin1)
            r += String.fromCharCode(c);
        else if (c < 224)
            r += String.fromCharCode((c & 31) << 6 | (dat[i++] & 63));
        else if (c < 240)
            r += String.fromCharCode((c & 15) << 12 | (dat[i++] & 63) << 6 | (dat[i++] & 63));
        else
            c = ((c & 15) << 18 | (dat[i++] & 63) << 12 | (dat[i++] & 63) << 6 | (dat[i++] & 63)) - 65536,
                r += String.fromCharCode(55296 | (c >> 10), 56320 | (c & 1023));
    }
    return r;
}




/***/ }),

/***/ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/ext/mitt/dist/mitt.mjs.js":
/*!**********************************************************************************************************************************************!*\
  !*** /Users/crusher/Desktop/experiment/test-v2/node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/ext/mitt/dist/mitt.mjs.js ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mitt; });
function mitt(n){return {all:n=n||new Map,on:function(t,e){var i=n.get(t);i?i.push(e):n.set(t,[e]);},off:function(t,e){var i=n.get(t);i&&(e?i.splice(i.indexOf(e)>>>0,1):n.set(t,[]));},emit:function(t,e){var i=n.get(t);i&&i.slice().map(function(n){n(e);}),(i=n.get("*"))&&i.slice().map(function(n){n(t,e);});}}}




/***/ }),

/***/ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/ext/tslib/tslib.es6.js":
/*!*******************************************************************************************************************************************!*\
  !*** /Users/crusher/Desktop/experiment/test-v2/node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/ext/tslib/tslib.es6.js ***!
  \*******************************************************************************************************************************************/
/*! exports provided: __awaiter, __rest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}




/***/ }),

/***/ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrdom/es/rrdom.js":
/*!***********************************************************************************************************************************************!*\
  !*** /Users/crusher/Desktop/experiment/test-v2/node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrdom/es/rrdom.js ***!
  \***********************************************************************************************************************************************/
/*! exports provided: BaseRRCDATASectionImpl, BaseRRCommentImpl, BaseRRDocumentImpl, BaseRRDocumentTypeImpl, BaseRRElementImpl, BaseRRMediaElementImpl, BaseRRNode, BaseRRTextImpl, ClassList, Mirror, NodeType, RRCDATASection, RRCanvasElement, RRComment, RRDocument, RRDocumentType, RRElement, RRIFrameElement, RRMediaElement, RRNode, RRStyleElement, RRText, buildFromDom, buildFromNode, createMirror, createOrGetNode, diff, getDefaultSN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseRRCDATASectionImpl", function() { return BaseRRCDATASectionImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseRRCommentImpl", function() { return BaseRRCommentImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseRRDocumentImpl", function() { return BaseRRDocumentImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseRRDocumentTypeImpl", function() { return BaseRRDocumentTypeImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseRRElementImpl", function() { return BaseRRElementImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseRRMediaElementImpl", function() { return BaseRRMediaElementImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseRRNode", function() { return BaseRRNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseRRTextImpl", function() { return BaseRRTextImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassList", function() { return ClassList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mirror", function() { return Mirror; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeType", function() { return NodeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RRCDATASection", function() { return RRCDATASection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RRCanvasElement", function() { return RRCanvasElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RRComment", function() { return RRComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RRDocument", function() { return RRDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RRDocumentType", function() { return RRDocumentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RRElement", function() { return RRElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RRIFrameElement", function() { return RRIFrameElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RRMediaElement", function() { return RRMediaElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RRNode", function() { return BaseRRNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RRStyleElement", function() { return RRStyleElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RRText", function() { return RRText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildFromDom", function() { return buildFromDom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildFromNode", function() { return buildFromNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMirror", function() { return createMirror; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOrGetNode", function() { return createOrGetNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diff", function() { return diff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultSN", function() { return getDefaultSN; });
var NodeType$1;
(function (NodeType) {
    NodeType[NodeType["Document"] = 0] = "Document";
    NodeType[NodeType["DocumentType"] = 1] = "DocumentType";
    NodeType[NodeType["Element"] = 2] = "Element";
    NodeType[NodeType["Text"] = 3] = "Text";
    NodeType[NodeType["CDATA"] = 4] = "CDATA";
    NodeType[NodeType["Comment"] = 5] = "Comment";
})(NodeType$1 || (NodeType$1 = {}));
var Mirror$1 = (function () {
    function Mirror() {
        this.idNodeMap = new Map();
        this.nodeMetaMap = new WeakMap();
    }
    Mirror.prototype.getId = function (n) {
        var _a;
        if (!n)
            return -1;
        var id = (_a = this.getMeta(n)) === null || _a === void 0 ? void 0 : _a.id;
        return id !== null && id !== void 0 ? id : -1;
    };
    Mirror.prototype.getNode = function (id) {
        return this.idNodeMap.get(id) || null;
    };
    Mirror.prototype.getIds = function () {
        return Array.from(this.idNodeMap.keys());
    };
    Mirror.prototype.getMeta = function (n) {
        return this.nodeMetaMap.get(n) || null;
    };
    Mirror.prototype.removeNodeFromMap = function (n) {
        var _this = this;
        var id = this.getId(n);
        this.idNodeMap["delete"](id);
        if (n.childNodes) {
            n.childNodes.forEach(function (childNode) {
                return _this.removeNodeFromMap(childNode);
            });
        }
    };
    Mirror.prototype.has = function (id) {
        return this.idNodeMap.has(id);
    };
    Mirror.prototype.hasNode = function (node) {
        return this.nodeMetaMap.has(node);
    };
    Mirror.prototype.add = function (n, meta) {
        var id = meta.id;
        this.idNodeMap.set(id, n);
        this.nodeMetaMap.set(n, meta);
    };
    Mirror.prototype.replace = function (id, n) {
        var oldNode = this.getNode(id);
        if (oldNode) {
            var meta = this.nodeMetaMap.get(oldNode);
            if (meta)
                this.nodeMetaMap.set(n, meta);
        }
        this.idNodeMap.set(id, n);
    };
    Mirror.prototype.reset = function () {
        this.idNodeMap = new Map();
        this.nodeMetaMap = new WeakMap();
    };
    return Mirror;
}());
function createMirror$1() {
    return new Mirror$1();
}

function parseCSSText(cssText) {
    const res = {};
    const listDelimiter = /;(?![^(]*\))/g;
    const propertyDelimiter = /:(.+)/;
    const comment = /\/\*.*?\*\//g;
    cssText
        .replace(comment, '')
        .split(listDelimiter)
        .forEach(function (item) {
        if (item) {
            const tmp = item.split(propertyDelimiter);
            tmp.length > 1 && (res[camelize(tmp[0].trim())] = tmp[1].trim());
        }
    });
    return res;
}
function toCSSText(style) {
    const properties = [];
    for (const name in style) {
        const value = style[name];
        if (typeof value !== 'string')
            continue;
        const normalizedName = hyphenate(name);
        properties.push(`${normalizedName}: ${value};`);
    }
    return properties.join(' ');
}
const camelizeRE = /-([a-z])/g;
const CUSTOM_PROPERTY_REGEX = /^--[a-zA-Z0-9-]+$/;
const camelize = (str) => {
    if (CUSTOM_PROPERTY_REGEX.test(str))
        return str;
    return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''));
};
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = (str) => {
    return str.replace(hyphenateRE, '-$1').toLowerCase();
};

class BaseRRNode {
    constructor(..._args) {
        this.childNodes = [];
        this.parentElement = null;
        this.parentNode = null;
        this.ELEMENT_NODE = NodeType.ELEMENT_NODE;
        this.TEXT_NODE = NodeType.TEXT_NODE;
    }
    get firstChild() {
        return this.childNodes[0] || null;
    }
    get lastChild() {
        return this.childNodes[this.childNodes.length - 1] || null;
    }
    get nextSibling() {
        const parentNode = this.parentNode;
        if (!parentNode)
            return null;
        const siblings = parentNode.childNodes;
        const index = siblings.indexOf(this);
        return siblings[index + 1] || null;
    }
    contains(node) {
        if (node === this)
            return true;
        for (const child of this.childNodes) {
            if (child.contains(node))
                return true;
        }
        return false;
    }
    appendChild(_newChild) {
        throw new Error(`RRDomException: Failed to execute 'appendChild' on 'RRNode': This RRNode type does not support this method.`);
    }
    insertBefore(_newChild, _refChild) {
        throw new Error(`RRDomException: Failed to execute 'insertBefore' on 'RRNode': This RRNode type does not support this method.`);
    }
    removeChild(_node) {
        throw new Error(`RRDomException: Failed to execute 'removeChild' on 'RRNode': This RRNode type does not support this method.`);
    }
    toString() {
        return 'RRNode';
    }
}
function BaseRRDocumentImpl(RRNodeClass) {
    return class BaseRRDocument extends RRNodeClass {
        constructor() {
            super(...arguments);
            this.nodeType = NodeType.DOCUMENT_NODE;
            this.nodeName = '#document';
            this.compatMode = 'CSS1Compat';
            this.RRNodeType = NodeType$1.Document;
            this.textContent = null;
        }
        get documentElement() {
            return (this.childNodes.find((node) => node.RRNodeType === NodeType$1.Element &&
                node.tagName === 'HTML') || null);
        }
        get body() {
            var _a;
            return (((_a = this.documentElement) === null || _a === void 0 ? void 0 : _a.childNodes.find((node) => node.RRNodeType === NodeType$1.Element &&
                node.tagName === 'BODY')) || null);
        }
        get head() {
            var _a;
            return (((_a = this.documentElement) === null || _a === void 0 ? void 0 : _a.childNodes.find((node) => node.RRNodeType === NodeType$1.Element &&
                node.tagName === 'HEAD')) || null);
        }
        get implementation() {
            return this;
        }
        get firstElementChild() {
            return this.documentElement;
        }
        appendChild(childNode) {
            const nodeType = childNode.RRNodeType;
            if (nodeType === NodeType$1.Element ||
                nodeType === NodeType$1.DocumentType) {
                if (this.childNodes.some((s) => s.RRNodeType === nodeType)) {
                    throw new Error(`RRDomException: Failed to execute 'appendChild' on 'RRNode': Only one ${nodeType === NodeType$1.Element ? 'RRElement' : 'RRDoctype'} on RRDocument allowed.`);
                }
            }
            childNode.parentElement = null;
            childNode.parentNode = this;
            this.childNodes.push(childNode);
            return childNode;
        }
        insertBefore(newChild, refChild) {
            const nodeType = newChild.RRNodeType;
            if (nodeType === NodeType$1.Element ||
                nodeType === NodeType$1.DocumentType) {
                if (this.childNodes.some((s) => s.RRNodeType === nodeType)) {
                    throw new Error(`RRDomException: Failed to execute 'insertBefore' on 'RRNode': Only one ${nodeType === NodeType$1.Element ? 'RRElement' : 'RRDoctype'} on RRDocument allowed.`);
                }
            }
            if (refChild === null)
                return this.appendChild(newChild);
            const childIndex = this.childNodes.indexOf(refChild);
            if (childIndex == -1)
                throw new Error("Failed to execute 'insertBefore' on 'RRNode': The RRNode before which the new node is to be inserted is not a child of this RRNode.");
            this.childNodes.splice(childIndex, 0, newChild);
            newChild.parentElement = null;
            newChild.parentNode = this;
            return newChild;
        }
        removeChild(node) {
            const indexOfChild = this.childNodes.indexOf(node);
            if (indexOfChild === -1)
                throw new Error("Failed to execute 'removeChild' on 'RRDocument': The RRNode to be removed is not a child of this RRNode.");
            this.childNodes.splice(indexOfChild, 1);
            node.parentElement = null;
            node.parentNode = null;
            return node;
        }
        open() {
            this.childNodes = [];
        }
        close() {
        }
        write(content) {
            let publicId;
            if (content ===
                '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "">')
                publicId = '-//W3C//DTD XHTML 1.0 Transitional//EN';
            else if (content ===
                '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "">')
                publicId = '-//W3C//DTD HTML 4.0 Transitional//EN';
            if (publicId) {
                const doctype = this.createDocumentType('html', publicId, '');
                this.open();
                this.appendChild(doctype);
            }
        }
        createDocument(_namespace, _qualifiedName, _doctype) {
            return new BaseRRDocument();
        }
        createDocumentType(qualifiedName, publicId, systemId) {
            const doctype = new (BaseRRDocumentTypeImpl(BaseRRNode))(qualifiedName, publicId, systemId);
            doctype.ownerDocument = this;
            return doctype;
        }
        createElement(tagName) {
            const element = new (BaseRRElementImpl(BaseRRNode))(tagName);
            element.ownerDocument = this;
            return element;
        }
        createElementNS(_namespaceURI, qualifiedName) {
            return this.createElement(qualifiedName);
        }
        createTextNode(data) {
            const text = new (BaseRRTextImpl(BaseRRNode))(data);
            text.ownerDocument = this;
            return text;
        }
        createComment(data) {
            const comment = new (BaseRRCommentImpl(BaseRRNode))(data);
            comment.ownerDocument = this;
            return comment;
        }
        createCDATASection(data) {
            const CDATASection = new (BaseRRCDATASectionImpl(BaseRRNode))(data);
            CDATASection.ownerDocument = this;
            return CDATASection;
        }
        toString() {
            return 'RRDocument';
        }
    };
}
function BaseRRDocumentTypeImpl(RRNodeClass) {
    return class BaseRRDocumentType extends RRNodeClass {
        constructor(qualifiedName, publicId, systemId) {
            super();
            this.nodeType = NodeType.DOCUMENT_TYPE_NODE;
            this.RRNodeType = NodeType$1.DocumentType;
            this.textContent = null;
            this.name = qualifiedName;
            this.publicId = publicId;
            this.systemId = systemId;
            this.nodeName = qualifiedName;
        }
        toString() {
            return 'RRDocumentType';
        }
    };
}
function BaseRRElementImpl(RRNodeClass) {
    return class BaseRRElement extends RRNodeClass {
        constructor(tagName) {
            super();
            this.nodeType = NodeType.ELEMENT_NODE;
            this.RRNodeType = NodeType$1.Element;
            this.attributes = {};
            this.shadowRoot = null;
            this.tagName = tagName.toUpperCase();
            this.nodeName = tagName.toUpperCase();
        }
        get textContent() {
            let result = '';
            this.childNodes.forEach((node) => (result += node.textContent));
            return result;
        }
        set textContent(textContent) {
            this.childNodes = [this.ownerDocument.createTextNode(textContent)];
        }
        get classList() {
            return new ClassList(this.attributes.class, (newClassName) => {
                this.attributes.class = newClassName;
            });
        }
        get id() {
            return this.attributes.id || '';
        }
        get className() {
            return this.attributes.class || '';
        }
        get style() {
            const style = (this.attributes.style
                ? parseCSSText(this.attributes.style)
                : {});
            const hyphenateRE = /\B([A-Z])/g;
            style.setProperty = (name, value, priority) => {
                if (hyphenateRE.test(name))
                    return;
                const normalizedName = camelize(name);
                if (!value)
                    delete style[normalizedName];
                else
                    style[normalizedName] = value;
                if (priority === 'important')
                    style[normalizedName] += ' !important';
                this.attributes.style = toCSSText(style);
            };
            style.removeProperty = (name) => {
                if (hyphenateRE.test(name))
                    return '';
                const normalizedName = camelize(name);
                const value = style[normalizedName] || '';
                delete style[normalizedName];
                this.attributes.style = toCSSText(style);
                return value;
            };
            return style;
        }
        getAttribute(name) {
            return this.attributes[name] || null;
        }
        setAttribute(name, attribute) {
            this.attributes[name] = attribute;
        }
        setAttributeNS(_namespace, qualifiedName, value) {
            this.setAttribute(qualifiedName, value);
        }
        removeAttribute(name) {
            delete this.attributes[name];
        }
        appendChild(newChild) {
            this.childNodes.push(newChild);
            newChild.parentNode = this;
            newChild.parentElement = this;
            return newChild;
        }
        insertBefore(newChild, refChild) {
            if (refChild === null)
                return this.appendChild(newChild);
            const childIndex = this.childNodes.indexOf(refChild);
            if (childIndex == -1)
                throw new Error("Failed to execute 'insertBefore' on 'RRNode': The RRNode before which the new node is to be inserted is not a child of this RRNode.");
            this.childNodes.splice(childIndex, 0, newChild);
            newChild.parentElement = this;
            newChild.parentNode = this;
            return newChild;
        }
        removeChild(node) {
            const indexOfChild = this.childNodes.indexOf(node);
            if (indexOfChild === -1)
                throw new Error("Failed to execute 'removeChild' on 'RRElement': The RRNode to be removed is not a child of this RRNode.");
            this.childNodes.splice(indexOfChild, 1);
            node.parentElement = null;
            node.parentNode = null;
            return node;
        }
        attachShadow(_init) {
            const shadowRoot = this.ownerDocument.createElement('SHADOWROOT');
            this.shadowRoot = shadowRoot;
            return shadowRoot;
        }
        dispatchEvent(_event) {
            return true;
        }
        toString() {
            let attributeString = '';
            for (const attribute in this.attributes) {
                attributeString += `${attribute}="${this.attributes[attribute]}" `;
            }
            return `${this.tagName} ${attributeString}`;
        }
    };
}
function BaseRRMediaElementImpl(RRElementClass) {
    return class BaseRRMediaElement extends RRElementClass {
        attachShadow(_init) {
            throw new Error(`RRDomException: Failed to execute 'attachShadow' on 'RRElement': This RRElement does not support attachShadow`);
        }
        play() {
            this.paused = false;
        }
        pause() {
            this.paused = true;
        }
    };
}
function BaseRRTextImpl(RRNodeClass) {
    return class BaseRRText extends RRNodeClass {
        constructor(data) {
            super();
            this.nodeType = NodeType.TEXT_NODE;
            this.nodeName = '#text';
            this.RRNodeType = NodeType$1.Text;
            this.data = data;
        }
        get textContent() {
            return this.data;
        }
        set textContent(textContent) {
            this.data = textContent;
        }
        toString() {
            return `RRText text=${JSON.stringify(this.data)}`;
        }
    };
}
function BaseRRCommentImpl(RRNodeClass) {
    return class BaseRRComment extends RRNodeClass {
        constructor(data) {
            super();
            this.nodeType = NodeType.COMMENT_NODE;
            this.nodeName = '#comment';
            this.RRNodeType = NodeType$1.Comment;
            this.data = data;
        }
        get textContent() {
            return this.data;
        }
        set textContent(textContent) {
            this.data = textContent;
        }
        toString() {
            return `RRComment text=${JSON.stringify(this.data)}`;
        }
    };
}
function BaseRRCDATASectionImpl(RRNodeClass) {
    return class BaseRRCDATASection extends RRNodeClass {
        constructor(data) {
            super();
            this.nodeName = '#cdata-section';
            this.nodeType = NodeType.CDATA_SECTION_NODE;
            this.RRNodeType = NodeType$1.CDATA;
            this.data = data;
        }
        get textContent() {
            return this.data;
        }
        set textContent(textContent) {
            this.data = textContent;
        }
        toString() {
            return `RRCDATASection data=${JSON.stringify(this.data)}`;
        }
    };
}
class ClassList {
    constructor(classText, onChange) {
        this.classes = [];
        this.add = (...classNames) => {
            for (const item of classNames) {
                const className = String(item);
                if (this.classes.indexOf(className) >= 0)
                    continue;
                this.classes.push(className);
            }
            this.onChange && this.onChange(this.classes.join(' '));
        };
        this.remove = (...classNames) => {
            this.classes = this.classes.filter((item) => classNames.indexOf(item) === -1);
            this.onChange && this.onChange(this.classes.join(' '));
        };
        if (classText) {
            const classes = classText.trim().split(/\s+/);
            this.classes.push(...classes);
        }
        this.onChange = onChange;
    }
}
var NodeType;
(function (NodeType) {
    NodeType[NodeType["PLACEHOLDER"] = 0] = "PLACEHOLDER";
    NodeType[NodeType["ELEMENT_NODE"] = 1] = "ELEMENT_NODE";
    NodeType[NodeType["ATTRIBUTE_NODE"] = 2] = "ATTRIBUTE_NODE";
    NodeType[NodeType["TEXT_NODE"] = 3] = "TEXT_NODE";
    NodeType[NodeType["CDATA_SECTION_NODE"] = 4] = "CDATA_SECTION_NODE";
    NodeType[NodeType["ENTITY_REFERENCE_NODE"] = 5] = "ENTITY_REFERENCE_NODE";
    NodeType[NodeType["ENTITY_NODE"] = 6] = "ENTITY_NODE";
    NodeType[NodeType["PROCESSING_INSTRUCTION_NODE"] = 7] = "PROCESSING_INSTRUCTION_NODE";
    NodeType[NodeType["COMMENT_NODE"] = 8] = "COMMENT_NODE";
    NodeType[NodeType["DOCUMENT_NODE"] = 9] = "DOCUMENT_NODE";
    NodeType[NodeType["DOCUMENT_TYPE_NODE"] = 10] = "DOCUMENT_TYPE_NODE";
    NodeType[NodeType["DOCUMENT_FRAGMENT_NODE"] = 11] = "DOCUMENT_FRAGMENT_NODE";
})(NodeType || (NodeType = {}));

const NAMESPACES = {
    svg: 'http://www.w3.org/2000/svg',
    'xlink:href': 'http://www.w3.org/1999/xlink',
    xmlns: 'http://www.w3.org/2000/xmlns/',
};
const SVGTagMap = {
    altglyph: 'altGlyph',
    altglyphdef: 'altGlyphDef',
    altglyphitem: 'altGlyphItem',
    animatecolor: 'animateColor',
    animatemotion: 'animateMotion',
    animatetransform: 'animateTransform',
    clippath: 'clipPath',
    feblend: 'feBlend',
    fecolormatrix: 'feColorMatrix',
    fecomponenttransfer: 'feComponentTransfer',
    fecomposite: 'feComposite',
    feconvolvematrix: 'feConvolveMatrix',
    fediffuselighting: 'feDiffuseLighting',
    fedisplacementmap: 'feDisplacementMap',
    fedistantlight: 'feDistantLight',
    fedropshadow: 'feDropShadow',
    feflood: 'feFlood',
    fefunca: 'feFuncA',
    fefuncb: 'feFuncB',
    fefuncg: 'feFuncG',
    fefuncr: 'feFuncR',
    fegaussianblur: 'feGaussianBlur',
    feimage: 'feImage',
    femerge: 'feMerge',
    femergenode: 'feMergeNode',
    femorphology: 'feMorphology',
    feoffset: 'feOffset',
    fepointlight: 'fePointLight',
    fespecularlighting: 'feSpecularLighting',
    fespotlight: 'feSpotLight',
    fetile: 'feTile',
    feturbulence: 'feTurbulence',
    foreignobject: 'foreignObject',
    glyphref: 'glyphRef',
    lineargradient: 'linearGradient',
    radialgradient: 'radialGradient',
};
function diff(oldTree, newTree, replayer, rrnodeMirror) {
    const oldChildren = oldTree.childNodes;
    const newChildren = newTree.childNodes;
    rrnodeMirror =
        rrnodeMirror ||
            newTree.mirror ||
            newTree.ownerDocument.mirror;
    if (oldChildren.length > 0 || newChildren.length > 0) {
        diffChildren(Array.from(oldChildren), newChildren, oldTree, replayer, rrnodeMirror);
    }
    let inputDataToApply = null, scrollDataToApply = null;
    switch (newTree.RRNodeType) {
        case NodeType$1.Document: {
            const newRRDocument = newTree;
            scrollDataToApply = newRRDocument.scrollData;
            break;
        }
        case NodeType$1.Element: {
            const oldElement = oldTree;
            const newRRElement = newTree;
            diffProps(oldElement, newRRElement, rrnodeMirror);
            scrollDataToApply = newRRElement.scrollData;
            inputDataToApply = newRRElement.inputData;
            switch (newRRElement.tagName) {
                case 'AUDIO':
                case 'VIDEO': {
                    const oldMediaElement = oldTree;
                    const newMediaRRElement = newRRElement;
                    if (newMediaRRElement.paused !== undefined)
                        newMediaRRElement.paused
                            ? void oldMediaElement.pause()
                            : void oldMediaElement.play();
                    if (newMediaRRElement.muted !== undefined)
                        oldMediaElement.muted = newMediaRRElement.muted;
                    if (newMediaRRElement.volume !== undefined)
                        oldMediaElement.volume = newMediaRRElement.volume;
                    if (newMediaRRElement.currentTime !== undefined)
                        oldMediaElement.currentTime = newMediaRRElement.currentTime;
                    if (newMediaRRElement.playbackRate !== undefined)
                        oldMediaElement.playbackRate = newMediaRRElement.playbackRate;
                    break;
                }
                case 'CANVAS':
                    {
                        const rrCanvasElement = newTree;
                        if (rrCanvasElement.rr_dataURL !== null) {
                            const image = document.createElement('img');
                            image.onload = () => {
                                const ctx = oldElement.getContext('2d');
                                if (ctx) {
                                    ctx.drawImage(image, 0, 0, image.width, image.height);
                                }
                            };
                            image.src = rrCanvasElement.rr_dataURL;
                        }
                        rrCanvasElement.canvasMutations.forEach((canvasMutation) => replayer.applyCanvas(canvasMutation.event, canvasMutation.mutation, oldTree));
                    }
                    break;
                case 'STYLE':
                    {
                        const styleSheet = oldElement.sheet;
                        styleSheet &&
                            newTree.rules.forEach((data) => replayer.applyStyleSheetMutation(data, styleSheet));
                    }
                    break;
            }
            if (newRRElement.shadowRoot) {
                if (!oldElement.shadowRoot)
                    oldElement.attachShadow({ mode: 'open' });
                const oldChildren = oldElement.shadowRoot.childNodes;
                const newChildren = newRRElement.shadowRoot.childNodes;
                if (oldChildren.length > 0 || newChildren.length > 0)
                    diffChildren(Array.from(oldChildren), newChildren, oldElement.shadowRoot, replayer, rrnodeMirror);
            }
            break;
        }
        case NodeType$1.Text:
        case NodeType$1.Comment:
        case NodeType$1.CDATA:
            if (oldTree.textContent !==
                newTree.data)
                oldTree.textContent = newTree.data;
            break;
    }
    scrollDataToApply && replayer.applyScroll(scrollDataToApply, true);
    inputDataToApply && replayer.applyInput(inputDataToApply);
    if (newTree.nodeName === 'IFRAME') {
        const oldContentDocument = oldTree.contentDocument;
        const newIFrameElement = newTree;
        if (oldContentDocument) {
            const sn = rrnodeMirror.getMeta(newIFrameElement.contentDocument);
            if (sn) {
                replayer.mirror.add(oldContentDocument, Object.assign({}, sn));
            }
            diff(oldContentDocument, newIFrameElement.contentDocument, replayer, rrnodeMirror);
        }
    }
}
function diffProps(oldTree, newTree, rrnodeMirror) {
    const oldAttributes = oldTree.attributes;
    const newAttributes = newTree.attributes;
    for (const name in newAttributes) {
        const newValue = newAttributes[name];
        const sn = rrnodeMirror.getMeta(newTree);
        if (sn && 'isSVG' in sn && sn.isSVG && NAMESPACES[name])
            oldTree.setAttributeNS(NAMESPACES[name], name, newValue);
        else if (newTree.tagName === 'CANVAS' && name === 'rr_dataURL') {
            const image = document.createElement('img');
            image.src = newValue;
            image.onload = () => {
                const ctx = oldTree.getContext('2d');
                if (ctx) {
                    ctx.drawImage(image, 0, 0, image.width, image.height);
                }
            };
        }
        else
            oldTree.setAttribute(name, newValue);
    }
    for (const { name } of Array.from(oldAttributes))
        if (!(name in newAttributes))
            oldTree.removeAttribute(name);
    newTree.scrollLeft && (oldTree.scrollLeft = newTree.scrollLeft);
    newTree.scrollTop && (oldTree.scrollTop = newTree.scrollTop);
}
function diffChildren(oldChildren, newChildren, parentNode, replayer, rrnodeMirror) {
    var _a;
    let oldStartIndex = 0, oldEndIndex = oldChildren.length - 1, newStartIndex = 0, newEndIndex = newChildren.length - 1;
    let oldStartNode = oldChildren[oldStartIndex], oldEndNode = oldChildren[oldEndIndex], newStartNode = newChildren[newStartIndex], newEndNode = newChildren[newEndIndex];
    let oldIdToIndex = undefined, indexInOld;
    while (oldStartIndex <= oldEndIndex && newStartIndex <= newEndIndex) {
        const oldStartId = replayer.mirror.getId(oldStartNode);
        const oldEndId = replayer.mirror.getId(oldEndNode);
        const newStartId = rrnodeMirror.getId(newStartNode);
        const newEndId = rrnodeMirror.getId(newEndNode);
        if (oldStartNode === undefined) {
            oldStartNode = oldChildren[++oldStartIndex];
        }
        else if (oldEndNode === undefined) {
            oldEndNode = oldChildren[--oldEndIndex];
        }
        else if (oldStartId !== -1 &&
            oldStartId === newStartId) {
            diff(oldStartNode, newStartNode, replayer, rrnodeMirror);
            oldStartNode = oldChildren[++oldStartIndex];
            newStartNode = newChildren[++newStartIndex];
        }
        else if (oldEndId !== -1 &&
            oldEndId === newEndId) {
            diff(oldEndNode, newEndNode, replayer, rrnodeMirror);
            oldEndNode = oldChildren[--oldEndIndex];
            newEndNode = newChildren[--newEndIndex];
        }
        else if (oldStartId !== -1 &&
            oldStartId === newEndId) {
            parentNode.insertBefore(oldStartNode, oldEndNode.nextSibling);
            diff(oldStartNode, newEndNode, replayer, rrnodeMirror);
            oldStartNode = oldChildren[++oldStartIndex];
            newEndNode = newChildren[--newEndIndex];
        }
        else if (oldEndId !== -1 &&
            oldEndId === newStartId) {
            parentNode.insertBefore(oldEndNode, oldStartNode);
            diff(oldEndNode, newStartNode, replayer, rrnodeMirror);
            oldEndNode = oldChildren[--oldEndIndex];
            newStartNode = newChildren[++newStartIndex];
        }
        else {
            if (!oldIdToIndex) {
                oldIdToIndex = {};
                for (let i = oldStartIndex; i <= oldEndIndex; i++) {
                    const oldChild = oldChildren[i];
                    if (oldChild && replayer.mirror.hasNode(oldChild))
                        oldIdToIndex[replayer.mirror.getId(oldChild)] = i;
                }
            }
            indexInOld = oldIdToIndex[rrnodeMirror.getId(newStartNode)];
            if (indexInOld) {
                const nodeToMove = oldChildren[indexInOld];
                parentNode.insertBefore(nodeToMove, oldStartNode);
                diff(nodeToMove, newStartNode, replayer, rrnodeMirror);
                oldChildren[indexInOld] = undefined;
            }
            else {
                const newNode = createOrGetNode(newStartNode, replayer.mirror, rrnodeMirror);
                if (parentNode.nodeName === '#document' &&
                    ((_a = replayer.mirror.getMeta(newNode)) === null || _a === void 0 ? void 0 : _a.type) === NodeType$1.Element &&
                    parentNode.documentElement) {
                    parentNode.removeChild(parentNode.documentElement);
                    oldChildren[oldStartIndex] = undefined;
                    oldStartNode = undefined;
                }
                parentNode.insertBefore(newNode, oldStartNode || null);
                diff(newNode, newStartNode, replayer, rrnodeMirror);
            }
            newStartNode = newChildren[++newStartIndex];
        }
    }
    if (oldStartIndex > oldEndIndex) {
        const referenceRRNode = newChildren[newEndIndex + 1];
        let referenceNode = null;
        if (referenceRRNode)
            parentNode.childNodes.forEach((child) => {
                if (replayer.mirror.getId(child) === rrnodeMirror.getId(referenceRRNode))
                    referenceNode = child;
            });
        for (; newStartIndex <= newEndIndex; ++newStartIndex) {
            const newNode = createOrGetNode(newChildren[newStartIndex], replayer.mirror, rrnodeMirror);
            parentNode.insertBefore(newNode, referenceNode);
            diff(newNode, newChildren[newStartIndex], replayer, rrnodeMirror);
        }
    }
    else if (newStartIndex > newEndIndex) {
        for (; oldStartIndex <= oldEndIndex; oldStartIndex++) {
            const node = oldChildren[oldStartIndex];
            if (node) {
                parentNode.removeChild(node);
                replayer.mirror.removeNodeFromMap(node);
            }
        }
    }
}
function createOrGetNode(rrNode, domMirror, rrnodeMirror) {
    const nodeId = rrnodeMirror.getId(rrNode);
    const sn = rrnodeMirror.getMeta(rrNode);
    let node = null;
    if (nodeId > -1)
        node = domMirror.getNode(nodeId);
    if (node !== null)
        return node;
    switch (rrNode.RRNodeType) {
        case NodeType$1.Document:
            node = new Document();
            break;
        case NodeType$1.DocumentType:
            node = document.implementation.createDocumentType(rrNode.name, rrNode.publicId, rrNode.systemId);
            break;
        case NodeType$1.Element: {
            let tagName = rrNode.tagName.toLowerCase();
            tagName = SVGTagMap[tagName] || tagName;
            if (sn && 'isSVG' in sn && (sn === null || sn === void 0 ? void 0 : sn.isSVG)) {
                node = document.createElementNS(NAMESPACES['svg'], tagName);
            }
            else
                node = document.createElement(rrNode.tagName);
            break;
        }
        case NodeType$1.Text:
            node = document.createTextNode(rrNode.data);
            break;
        case NodeType$1.Comment:
            node = document.createComment(rrNode.data);
            break;
        case NodeType$1.CDATA:
            node = document.createCDATASection(rrNode.data);
            break;
    }
    if (sn)
        domMirror.add(node, Object.assign({}, sn));
    return node;
}

class RRDocument extends BaseRRDocumentImpl(BaseRRNode) {
    constructor(mirror) {
        super();
        this.UNSERIALIZED_STARTING_ID = -2;
        this._unserializedId = this.UNSERIALIZED_STARTING_ID;
        this.mirror = createMirror();
        this.scrollData = null;
        if (mirror) {
            this.mirror = mirror;
        }
    }
    get unserializedId() {
        return this._unserializedId--;
    }
    createDocument(_namespace, _qualifiedName, _doctype) {
        return new RRDocument();
    }
    createDocumentType(qualifiedName, publicId, systemId) {
        const documentTypeNode = new RRDocumentType(qualifiedName, publicId, systemId);
        documentTypeNode.ownerDocument = this;
        return documentTypeNode;
    }
    createElement(tagName) {
        const upperTagName = tagName.toUpperCase();
        let element;
        switch (upperTagName) {
            case 'AUDIO':
            case 'VIDEO':
                element = new RRMediaElement(upperTagName);
                break;
            case 'IFRAME':
                element = new RRIFrameElement(upperTagName, this.mirror);
                break;
            case 'CANVAS':
                element = new RRCanvasElement(upperTagName);
                break;
            case 'STYLE':
                element = new RRStyleElement(upperTagName);
                break;
            default:
                element = new RRElement(upperTagName);
                break;
        }
        element.ownerDocument = this;
        return element;
    }
    createComment(data) {
        const commentNode = new RRComment(data);
        commentNode.ownerDocument = this;
        return commentNode;
    }
    createCDATASection(data) {
        const sectionNode = new RRCDATASection(data);
        sectionNode.ownerDocument = this;
        return sectionNode;
    }
    createTextNode(data) {
        const textNode = new RRText(data);
        textNode.ownerDocument = this;
        return textNode;
    }
    destroyTree() {
        this.childNodes = [];
        this.mirror.reset();
    }
    open() {
        super.open();
        this._unserializedId = this.UNSERIALIZED_STARTING_ID;
    }
}
const RRDocumentType = BaseRRDocumentTypeImpl(BaseRRNode);
class RRElement extends BaseRRElementImpl(BaseRRNode) {
    constructor() {
        super(...arguments);
        this.inputData = null;
        this.scrollData = null;
    }
}
class RRMediaElement extends BaseRRMediaElementImpl(RRElement) {
}
class RRCanvasElement extends RRElement {
    constructor() {
        super(...arguments);
        this.rr_dataURL = null;
        this.canvasMutations = [];
    }
    getContext() {
        return null;
    }
}
class RRStyleElement extends RRElement {
    constructor() {
        super(...arguments);
        this.rules = [];
    }
}
class RRIFrameElement extends RRElement {
    constructor(upperTagName, mirror) {
        super(upperTagName);
        this.contentDocument = new RRDocument();
        this.contentDocument.mirror = mirror;
    }
}
const RRText = BaseRRTextImpl(BaseRRNode);
const RRComment = BaseRRCommentImpl(BaseRRNode);
const RRCDATASection = BaseRRCDATASectionImpl(BaseRRNode);
function getValidTagName(element) {
    if (element instanceof HTMLFormElement) {
        return 'FORM';
    }
    return element.tagName.toUpperCase();
}
function buildFromNode(node, rrdom, domMirror, parentRRNode) {
    let rrNode;
    switch (node.nodeType) {
        case NodeType.DOCUMENT_NODE:
            if (parentRRNode && parentRRNode.nodeName === 'IFRAME')
                rrNode = parentRRNode.contentDocument;
            else {
                rrNode = rrdom;
                rrNode.compatMode = node.compatMode;
            }
            break;
        case NodeType.DOCUMENT_TYPE_NODE: {
            const documentType = node;
            rrNode = rrdom.createDocumentType(documentType.name, documentType.publicId, documentType.systemId);
            break;
        }
        case NodeType.ELEMENT_NODE: {
            const elementNode = node;
            const tagName = getValidTagName(elementNode);
            rrNode = rrdom.createElement(tagName);
            const rrElement = rrNode;
            for (const { name, value } of Array.from(elementNode.attributes)) {
                rrElement.attributes[name] = value;
            }
            elementNode.scrollLeft && (rrElement.scrollLeft = elementNode.scrollLeft);
            elementNode.scrollTop && (rrElement.scrollTop = elementNode.scrollTop);
            break;
        }
        case NodeType.TEXT_NODE:
            rrNode = rrdom.createTextNode(node.textContent || '');
            break;
        case NodeType.CDATA_SECTION_NODE:
            rrNode = rrdom.createCDATASection(node.data);
            break;
        case NodeType.COMMENT_NODE:
            rrNode = rrdom.createComment(node.textContent || '');
            break;
        case NodeType.DOCUMENT_FRAGMENT_NODE:
            rrNode = parentRRNode.attachShadow({ mode: 'open' });
            break;
        default:
            return null;
    }
    let sn = domMirror.getMeta(node);
    if (rrdom instanceof RRDocument) {
        if (!sn) {
            sn = getDefaultSN(rrNode, rrdom.unserializedId);
            domMirror.add(node, sn);
        }
        rrdom.mirror.add(rrNode, Object.assign({}, sn));
    }
    return rrNode;
}
function buildFromDom(dom, domMirror = createMirror$1(), rrdom = new RRDocument()) {
    function walk(node, parentRRNode) {
        const rrNode = buildFromNode(node, rrdom, domMirror, parentRRNode);
        if (rrNode === null)
            return;
        if ((parentRRNode === null || parentRRNode === void 0 ? void 0 : parentRRNode.nodeName) !== 'IFRAME' &&
            node.nodeType !== NodeType.DOCUMENT_FRAGMENT_NODE) {
            parentRRNode === null || parentRRNode === void 0 ? void 0 : parentRRNode.appendChild(rrNode);
            rrNode.parentNode = parentRRNode;
            rrNode.parentElement = parentRRNode;
        }
        if (node.nodeName === 'IFRAME') {
            const iframeDoc = node.contentDocument;
            iframeDoc && walk(iframeDoc, rrNode);
        }
        else if (node.nodeType === NodeType.DOCUMENT_NODE ||
            node.nodeType === NodeType.ELEMENT_NODE ||
            node.nodeType === NodeType.DOCUMENT_FRAGMENT_NODE) {
            if (node.nodeType === NodeType.ELEMENT_NODE &&
                node.shadowRoot)
                walk(node.shadowRoot, rrNode);
            node.childNodes.forEach((childNode) => walk(childNode, rrNode));
        }
    }
    walk(dom, null);
    return rrdom;
}
function createMirror() {
    return new Mirror();
}
class Mirror {
    constructor() {
        this.idNodeMap = new Map();
        this.nodeMetaMap = new WeakMap();
    }
    getId(n) {
        var _a;
        if (!n)
            return -1;
        const id = (_a = this.getMeta(n)) === null || _a === void 0 ? void 0 : _a.id;
        return id !== null && id !== void 0 ? id : -1;
    }
    getNode(id) {
        return this.idNodeMap.get(id) || null;
    }
    getIds() {
        return Array.from(this.idNodeMap.keys());
    }
    getMeta(n) {
        return this.nodeMetaMap.get(n) || null;
    }
    removeNodeFromMap(n) {
        const id = this.getId(n);
        this.idNodeMap.delete(id);
        if (n.childNodes) {
            n.childNodes.forEach((childNode) => this.removeNodeFromMap(childNode));
        }
    }
    has(id) {
        return this.idNodeMap.has(id);
    }
    hasNode(node) {
        return this.nodeMetaMap.has(node);
    }
    add(n, meta) {
        const id = meta.id;
        this.idNodeMap.set(id, n);
        this.nodeMetaMap.set(n, meta);
    }
    replace(id, n) {
        const oldNode = this.getNode(id);
        if (oldNode) {
            const meta = this.nodeMetaMap.get(oldNode);
            if (meta)
                this.nodeMetaMap.set(n, meta);
        }
        this.idNodeMap.set(id, n);
    }
    reset() {
        this.idNodeMap = new Map();
        this.nodeMetaMap = new WeakMap();
    }
}
function getDefaultSN(node, id) {
    switch (node.RRNodeType) {
        case NodeType$1.Document:
            return {
                id,
                type: node.RRNodeType,
                childNodes: [],
            };
        case NodeType$1.DocumentType: {
            const doctype = node;
            return {
                id,
                type: node.RRNodeType,
                name: doctype.name,
                publicId: doctype.publicId,
                systemId: doctype.systemId,
            };
        }
        case NodeType$1.Element:
            return {
                id,
                type: node.RRNodeType,
                tagName: node.tagName.toLowerCase(),
                attributes: {},
                childNodes: [],
            };
        case NodeType$1.Text:
            return {
                id,
                type: node.RRNodeType,
                textContent: node.textContent || '',
            };
        case NodeType$1.Comment:
            return {
                id,
                type: node.RRNodeType,
                textContent: node.textContent || '',
            };
        case NodeType$1.CDATA:
            return {
                id,
                type: node.RRNodeType,
                textContent: '',
            };
    }
}




/***/ }),

/***/ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb-snapshot/es/rrweb-snapshot.js":
/*!*****************************************************************************************************************************************************************!*\
  !*** /Users/crusher/Desktop/experiment/test-v2/node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb-snapshot/es/rrweb-snapshot.js ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: IGNORED_NODE, Mirror, NodeType, addHoverClass, buildNodeWithSN, classMatchesRegex, createCache, createMirror, genId, getCssRuleString, getCssRulesString, is2DCanvasBlank, isCSSImportRule, isElement, isNativeShadowDom, isShadowRoot, maskInputValue, needMaskingText, rebuild, serializeNodeWithId, snapshot, transformAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IGNORED_NODE", function() { return IGNORED_NODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mirror", function() { return Mirror; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeType", function() { return NodeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addHoverClass", function() { return addHoverClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildNodeWithSN", function() { return buildNodeWithSN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classMatchesRegex", function() { return classMatchesRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCache", function() { return createCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMirror", function() { return createMirror; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genId", function() { return genId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCssRuleString", function() { return getCssRuleString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCssRulesString", function() { return getCssRulesString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is2DCanvasBlank", function() { return is2DCanvasBlank; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCSSImportRule", function() { return isCSSImportRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElement", function() { return isElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNativeShadowDom", function() { return isNativeShadowDom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isShadowRoot", function() { return isShadowRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maskInputValue", function() { return maskInputValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "needMaskingText", function() { return needMaskingText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rebuild", function() { return rebuild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeNodeWithId", function() { return serializeNodeWithId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snapshot", function() { return snapshot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformAttribute", function() { return transformAttribute; });
var NodeType;
(function (NodeType) {
    NodeType[NodeType["Document"] = 0] = "Document";
    NodeType[NodeType["DocumentType"] = 1] = "DocumentType";
    NodeType[NodeType["Element"] = 2] = "Element";
    NodeType[NodeType["Text"] = 3] = "Text";
    NodeType[NodeType["CDATA"] = 4] = "CDATA";
    NodeType[NodeType["Comment"] = 5] = "Comment";
})(NodeType || (NodeType = {}));

function isElement(n) {
    return n.nodeType === n.ELEMENT_NODE;
}
function isShadowRoot(n) {
    var host = n === null || n === void 0 ? void 0 : n.host;
    return Boolean((host === null || host === void 0 ? void 0 : host.shadowRoot) === n);
}
function isNativeShadowDom(shadowRoot) {
    return Object.prototype.toString.call(shadowRoot) === '[object ShadowRoot]';
}
function fixBrowserCompatibilityIssuesInCSS(cssText) {
    if (cssText.includes(' background-clip: text;') &&
        !cssText.includes(' -webkit-background-clip: text;')) {
        cssText = cssText.replace(' background-clip: text;', ' -webkit-background-clip: text; background-clip: text;');
    }
    return cssText;
}
function getCssRulesString(s) {
    try {
        var rules = s.rules || s.cssRules;
        return rules
            ? fixBrowserCompatibilityIssuesInCSS(Array.from(rules).map(getCssRuleString).join(''))
            : null;
    }
    catch (error) {
        return null;
    }
}
function getCssRuleString(rule) {
    var cssStringified = rule.cssText;
    if (isCSSImportRule(rule)) {
        try {
            cssStringified = getCssRulesString(rule.styleSheet) || cssStringified;
        }
        catch (_a) {
        }
    }
    return cssStringified;
}
function isCSSImportRule(rule) {
    return 'styleSheet' in rule;
}
var Mirror = (function () {
    function Mirror() {
        this.idNodeMap = new Map();
        this.nodeMetaMap = new WeakMap();
    }
    Mirror.prototype.getId = function (n) {
        var _a;
        if (!n)
            return -1;
        var id = (_a = this.getMeta(n)) === null || _a === void 0 ? void 0 : _a.id;
        return id !== null && id !== void 0 ? id : -1;
    };
    Mirror.prototype.getNode = function (id) {
        return this.idNodeMap.get(id) || null;
    };
    Mirror.prototype.getIds = function () {
        return Array.from(this.idNodeMap.keys());
    };
    Mirror.prototype.getMeta = function (n) {
        return this.nodeMetaMap.get(n) || null;
    };
    Mirror.prototype.removeNodeFromMap = function (n) {
        var _this = this;
        var id = this.getId(n);
        this.idNodeMap["delete"](id);
        if (n.childNodes) {
            n.childNodes.forEach(function (childNode) {
                return _this.removeNodeFromMap(childNode);
            });
        }
    };
    Mirror.prototype.has = function (id) {
        return this.idNodeMap.has(id);
    };
    Mirror.prototype.hasNode = function (node) {
        return this.nodeMetaMap.has(node);
    };
    Mirror.prototype.add = function (n, meta) {
        var id = meta.id;
        this.idNodeMap.set(id, n);
        this.nodeMetaMap.set(n, meta);
    };
    Mirror.prototype.replace = function (id, n) {
        var oldNode = this.getNode(id);
        if (oldNode) {
            var meta = this.nodeMetaMap.get(oldNode);
            if (meta)
                this.nodeMetaMap.set(n, meta);
        }
        this.idNodeMap.set(id, n);
    };
    Mirror.prototype.reset = function () {
        this.idNodeMap = new Map();
        this.nodeMetaMap = new WeakMap();
    };
    return Mirror;
}());
function createMirror() {
    return new Mirror();
}
function maskInputValue(_a) {
    var maskInputOptions = _a.maskInputOptions, tagName = _a.tagName, type = _a.type, value = _a.value, maskInputFn = _a.maskInputFn;
    var text = value || '';
    if (maskInputOptions[tagName.toLowerCase()] ||
        maskInputOptions[type]) {
        if (maskInputFn) {
            text = maskInputFn(text);
        }
        else {
            text = '*'.repeat(text.length);
        }
    }
    return text;
}
var ORIGINAL_ATTRIBUTE_NAME = '__rrweb_original__';
function is2DCanvasBlank(canvas) {
    var ctx = canvas.getContext('2d');
    if (!ctx)
        return true;
    var chunkSize = 50;
    for (var x = 0; x < canvas.width; x += chunkSize) {
        for (var y = 0; y < canvas.height; y += chunkSize) {
            var getImageData = ctx.getImageData;
            var originalGetImageData = ORIGINAL_ATTRIBUTE_NAME in getImageData
                ? getImageData[ORIGINAL_ATTRIBUTE_NAME]
                : getImageData;
            var pixelBuffer = new Uint32Array(originalGetImageData.call(ctx, x, y, Math.min(chunkSize, canvas.width - x), Math.min(chunkSize, canvas.height - y)).data.buffer);
            if (pixelBuffer.some(function (pixel) { return pixel !== 0; }))
                return false;
        }
    }
    return true;
}

var _id = 1;
var tagNameRegex = new RegExp('[^a-z0-9-_:]');
var IGNORED_NODE = -2;
function genId() {
    return _id++;
}
function getValidTagName(element) {
    if (element instanceof HTMLFormElement) {
        return 'form';
    }
    var processedTagName = element.tagName.toLowerCase().trim();
    if (tagNameRegex.test(processedTagName)) {
        return 'div';
    }
    return processedTagName;
}
function stringifyStyleSheet(sheet) {
    return sheet.cssRules
        ? Array.from(sheet.cssRules)
            .map(function (rule) { return rule.cssText || ''; })
            .join('')
        : '';
}
function extractOrigin(url) {
    var origin = '';
    if (url.indexOf('//') > -1) {
        origin = url.split('/').slice(0, 3).join('/');
    }
    else {
        origin = url.split('/')[0];
    }
    origin = origin.split('?')[0];
    return origin;
}
var canvasService;
var canvasCtx;
var URL_IN_CSS_REF = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm;
var RELATIVE_PATH = /^(?!www\.|(?:http|ftp)s?:\/\/|[A-Za-z]:\\|\/\/|#).*/;
var DATA_URI = /^(data:)([^,]*),(.*)/i;
function absoluteToStylesheet(cssText, href) {
    return (cssText || '').replace(URL_IN_CSS_REF, function (origin, quote1, path1, quote2, path2, path3) {
        var filePath = path1 || path2 || path3;
        var maybeQuote = quote1 || quote2 || '';
        if (!filePath) {
            return origin;
        }
        if (!RELATIVE_PATH.test(filePath)) {
            return "url(".concat(maybeQuote).concat(filePath).concat(maybeQuote, ")");
        }
        if (DATA_URI.test(filePath)) {
            return "url(".concat(maybeQuote).concat(filePath).concat(maybeQuote, ")");
        }
        if (filePath[0] === '/') {
            return "url(".concat(maybeQuote).concat(extractOrigin(href) + filePath).concat(maybeQuote, ")");
        }
        var stack = href.split('/');
        var parts = filePath.split('/');
        stack.pop();
        for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
            var part = parts_1[_i];
            if (part === '.') {
                continue;
            }
            else if (part === '..') {
                stack.pop();
            }
            else {
                stack.push(part);
            }
        }
        return "url(".concat(maybeQuote).concat(stack.join('/')).concat(maybeQuote, ")");
    });
}
var SRCSET_NOT_SPACES = /^[^ \t\n\r\u000c]+/;
var SRCSET_COMMAS_OR_SPACES = /^[, \t\n\r\u000c]+/;
function getAbsoluteSrcsetString(doc, attributeValue) {
    if (attributeValue.trim() === '') {
        return attributeValue;
    }
    var pos = 0;
    function collectCharacters(regEx) {
        var chars;
        var match = regEx.exec(attributeValue.substring(pos));
        if (match) {
            chars = match[0];
            pos += chars.length;
            return chars;
        }
        return '';
    }
    var output = [];
    while (true) {
        collectCharacters(SRCSET_COMMAS_OR_SPACES);
        if (pos >= attributeValue.length) {
            break;
        }
        var url = collectCharacters(SRCSET_NOT_SPACES);
        if (url.slice(-1) === ',') {
            url = absoluteToDoc(doc, url.substring(0, url.length - 1));
            output.push(url);
        }
        else {
            var descriptorsStr = '';
            url = absoluteToDoc(doc, url);
            var inParens = false;
            while (true) {
                var c = attributeValue.charAt(pos);
                if (c === '') {
                    output.push((url + descriptorsStr).trim());
                    break;
                }
                else if (!inParens) {
                    if (c === ',') {
                        pos += 1;
                        output.push((url + descriptorsStr).trim());
                        break;
                    }
                    else if (c === '(') {
                        inParens = true;
                    }
                }
                else {
                    if (c === ')') {
                        inParens = false;
                    }
                }
                descriptorsStr += c;
                pos += 1;
            }
        }
    }
    return output.join(', ');
}
function absoluteToDoc(doc, attributeValue) {
    if (!attributeValue || attributeValue.trim() === '') {
        return attributeValue;
    }
    var a = doc.createElement('a');
    a.href = attributeValue;
    return a.href;
}
function isSVGElement(el) {
    return Boolean(el.tagName === 'svg' || el.ownerSVGElement);
}
function getHref() {
    var a = document.createElement('a');
    a.href = '';
    return a.href;
}
function transformAttribute(doc, tagName, name, value) {
    if (name === 'src' ||
        (name === 'href' && value && !(tagName === 'use' && value[0] === '#'))) {
        return absoluteToDoc(doc, value);
    }
    else if (name === 'xlink:href' && value && value[0] !== '#') {
        return absoluteToDoc(doc, value);
    }
    else if (name === 'background' &&
        value &&
        (tagName === 'table' || tagName === 'td' || tagName === 'th')) {
        return absoluteToDoc(doc, value);
    }
    else if (name === 'srcset' && value) {
        return getAbsoluteSrcsetString(doc, value);
    }
    else if (name === 'style' && value) {
        return absoluteToStylesheet(value, getHref());
    }
    else if (tagName === 'object' && name === 'data' && value) {
        return absoluteToDoc(doc, value);
    }
    else {
        return value;
    }
}
function _isBlockedElement(element, blockClass, blockSelector) {
    if (typeof blockClass === 'string') {
        if (element.classList.contains(blockClass)) {
            return true;
        }
    }
    else {
        for (var eIndex = element.classList.length; eIndex--;) {
            var className = element.classList[eIndex];
            if (blockClass.test(className)) {
                return true;
            }
        }
    }
    if (blockSelector) {
        return element.matches(blockSelector);
    }
    return false;
}
function classMatchesRegex(node, regex, checkAncestors) {
    if (!node)
        return false;
    if (node.nodeType !== node.ELEMENT_NODE) {
        if (!checkAncestors)
            return false;
        return classMatchesRegex(node.parentNode, regex, checkAncestors);
    }
    for (var eIndex = node.classList.length; eIndex--;) {
        var className = node.classList[eIndex];
        if (regex.test(className)) {
            return true;
        }
    }
    if (!checkAncestors)
        return false;
    return classMatchesRegex(node.parentNode, regex, checkAncestors);
}
function needMaskingText(node, maskTextClass, maskTextSelector) {
    var el = node.nodeType === node.ELEMENT_NODE
        ? node
        : node.parentElement;
    if (el === null)
        return false;
    if (typeof maskTextClass === 'string') {
        if (el.classList.contains(maskTextClass))
            return true;
        if (el.closest(".".concat(maskTextClass)))
            return true;
    }
    else {
        if (classMatchesRegex(el, maskTextClass, true))
            return true;
    }
    if (maskTextSelector) {
        if (el.matches(maskTextSelector))
            return true;
        if (el.closest(maskTextSelector))
            return true;
    }
    return false;
}
function onceIframeLoaded(iframeEl, listener, iframeLoadTimeout) {
    var win = iframeEl.contentWindow;
    if (!win) {
        return;
    }
    var fired = false;
    var readyState;
    try {
        readyState = win.document.readyState;
    }
    catch (error) {
        return;
    }
    if (readyState !== 'complete') {
        var timer_1 = setTimeout(function () {
            if (!fired) {
                listener();
                fired = true;
            }
        }, iframeLoadTimeout);
        iframeEl.addEventListener('load', function () {
            clearTimeout(timer_1);
            fired = true;
            listener();
        });
        return;
    }
    var blankUrl = 'about:blank';
    if (win.location.href !== blankUrl ||
        iframeEl.src === blankUrl ||
        iframeEl.src === '') {
        setTimeout(listener, 0);
        return iframeEl.addEventListener('load', listener);
    }
    iframeEl.addEventListener('load', listener);
}
function onceStylesheetLoaded(link, listener, styleSheetLoadTimeout) {
    var fired = false;
    var styleSheetLoaded;
    try {
        styleSheetLoaded = link.sheet;
    }
    catch (error) {
        return;
    }
    if (styleSheetLoaded)
        return;
    var timer = setTimeout(function () {
        if (!fired) {
            listener();
            fired = true;
        }
    }, styleSheetLoadTimeout);
    link.addEventListener('load', function () {
        clearTimeout(timer);
        fired = true;
        listener();
    });
}
function serializeNode(n, options) {
    var doc = options.doc, mirror = options.mirror, blockClass = options.blockClass, blockSelector = options.blockSelector, maskTextClass = options.maskTextClass, maskTextSelector = options.maskTextSelector, inlineStylesheet = options.inlineStylesheet, _a = options.maskInputOptions, maskInputOptions = _a === void 0 ? {} : _a, maskTextFn = options.maskTextFn, maskInputFn = options.maskInputFn, _b = options.dataURLOptions, dataURLOptions = _b === void 0 ? {} : _b, inlineImages = options.inlineImages, recordCanvas = options.recordCanvas, keepIframeSrcFn = options.keepIframeSrcFn, _c = options.newlyAddedElement, newlyAddedElement = _c === void 0 ? false : _c;
    var rootId = getRootId(doc, mirror);
    switch (n.nodeType) {
        case n.DOCUMENT_NODE:
            if (n.compatMode !== 'CSS1Compat') {
                return {
                    type: NodeType.Document,
                    childNodes: [],
                    compatMode: n.compatMode
                };
            }
            else {
                return {
                    type: NodeType.Document,
                    childNodes: []
                };
            }
        case n.DOCUMENT_TYPE_NODE:
            return {
                type: NodeType.DocumentType,
                name: n.name,
                publicId: n.publicId,
                systemId: n.systemId,
                rootId: rootId
            };
        case n.ELEMENT_NODE:
            return serializeElementNode(n, {
                doc: doc,
                blockClass: blockClass,
                blockSelector: blockSelector,
                inlineStylesheet: inlineStylesheet,
                maskInputOptions: maskInputOptions,
                maskInputFn: maskInputFn,
                dataURLOptions: dataURLOptions,
                inlineImages: inlineImages,
                recordCanvas: recordCanvas,
                keepIframeSrcFn: keepIframeSrcFn,
                newlyAddedElement: newlyAddedElement,
                rootId: rootId
            });
        case n.TEXT_NODE:
            return serializeTextNode(n, {
                maskTextClass: maskTextClass,
                maskTextSelector: maskTextSelector,
                maskTextFn: maskTextFn,
                rootId: rootId
            });
        case n.CDATA_SECTION_NODE:
            return {
                type: NodeType.CDATA,
                textContent: '',
                rootId: rootId
            };
        case n.COMMENT_NODE:
            return {
                type: NodeType.Comment,
                textContent: n.textContent || '',
                rootId: rootId
            };
        default:
            return false;
    }
}
function getRootId(doc, mirror) {
    if (!mirror.hasNode(doc))
        return undefined;
    var docId = mirror.getId(doc);
    return docId === 1 ? undefined : docId;
}
function serializeTextNode(n, options) {
    var _a;
    var maskTextClass = options.maskTextClass, maskTextSelector = options.maskTextSelector, maskTextFn = options.maskTextFn, rootId = options.rootId;
    var parentTagName = n.parentNode && n.parentNode.tagName;
    var textContent = n.textContent;
    var isStyle = parentTagName === 'STYLE' ? true : undefined;
    var isScript = parentTagName === 'SCRIPT' ? true : undefined;
    if (isStyle && textContent) {
        try {
            if (n.nextSibling || n.previousSibling) {
            }
            else if ((_a = n.parentNode.sheet) === null || _a === void 0 ? void 0 : _a.cssRules) {
                textContent = stringifyStyleSheet(n.parentNode.sheet);
            }
        }
        catch (err) {
            console.warn("Cannot get CSS styles from text's parentNode. Error: ".concat(err), n);
        }
        textContent = absoluteToStylesheet(textContent, getHref());
    }
    if (isScript) {
        textContent = 'SCRIPT_PLACEHOLDER';
    }
    if (!isStyle &&
        !isScript &&
        textContent &&
        needMaskingText(n, maskTextClass, maskTextSelector)) {
        textContent = maskTextFn
            ? maskTextFn(textContent)
            : textContent.replace(/[\S]/g, '*');
    }
    return {
        type: NodeType.Text,
        textContent: textContent || '',
        isStyle: isStyle,
        rootId: rootId
    };
}
function serializeElementNode(n, options) {
    var doc = options.doc, blockClass = options.blockClass, blockSelector = options.blockSelector, inlineStylesheet = options.inlineStylesheet, _a = options.maskInputOptions, maskInputOptions = _a === void 0 ? {} : _a, maskInputFn = options.maskInputFn, _b = options.dataURLOptions, dataURLOptions = _b === void 0 ? {} : _b, inlineImages = options.inlineImages, recordCanvas = options.recordCanvas, keepIframeSrcFn = options.keepIframeSrcFn, _c = options.newlyAddedElement, newlyAddedElement = _c === void 0 ? false : _c, rootId = options.rootId;
    var needBlock = _isBlockedElement(n, blockClass, blockSelector);
    var tagName = getValidTagName(n);
    var attributes = {};
    var len = n.attributes.length;
    for (var i = 0; i < len; i++) {
        var attr = n.attributes[i];
        attributes[attr.name] = transformAttribute(doc, tagName, attr.name, attr.value);
    }
    if (tagName === 'link' && inlineStylesheet) {
        var stylesheet = Array.from(doc.styleSheets).find(function (s) {
            return s.href === n.href;
        });
        var cssText = null;
        if (stylesheet) {
            cssText = getCssRulesString(stylesheet);
        }
        if (cssText) {
            delete attributes.rel;
            delete attributes.href;
            attributes._cssText = absoluteToStylesheet(cssText, stylesheet.href);
        }
    }
    if (tagName === 'style' &&
        n.sheet &&
        !(n.innerText || n.textContent || '').trim().length) {
        var cssText = getCssRulesString(n.sheet);
        if (cssText) {
            attributes._cssText = absoluteToStylesheet(cssText, getHref());
        }
    }
    if (tagName === 'input' || tagName === 'textarea' || tagName === 'select') {
        var value = n.value;
        var checked = n.checked;
        if (attributes.type !== 'radio' &&
            attributes.type !== 'checkbox' &&
            attributes.type !== 'submit' &&
            attributes.type !== 'button' &&
            value) {
            attributes.value = maskInputValue({
                type: attributes.type,
                tagName: tagName,
                value: value,
                maskInputOptions: maskInputOptions,
                maskInputFn: maskInputFn
            });
        }
        else if (checked) {
            attributes.checked = checked;
        }
    }
    if (tagName === 'option') {
        if (n.selected && !maskInputOptions['select']) {
            attributes.selected = true;
        }
        else {
            delete attributes.selected;
        }
    }
    if (tagName === 'canvas' && recordCanvas) {
        if (n.__context === '2d') {
            if (!is2DCanvasBlank(n)) {
                attributes.rr_dataURL = n.toDataURL(dataURLOptions.type, dataURLOptions.quality);
            }
        }
        else if (!('__context' in n)) {
            var canvasDataURL = n.toDataURL(dataURLOptions.type, dataURLOptions.quality);
            var blankCanvas = document.createElement('canvas');
            blankCanvas.width = n.width;
            blankCanvas.height = n.height;
            var blankCanvasDataURL = blankCanvas.toDataURL(dataURLOptions.type, dataURLOptions.quality);
            if (canvasDataURL !== blankCanvasDataURL) {
                attributes.rr_dataURL = canvasDataURL;
            }
        }
    }
    if (tagName === 'img' && inlineImages) {
        if (!canvasService) {
            canvasService = doc.createElement('canvas');
            canvasCtx = canvasService.getContext('2d');
        }
        var image_1 = n;
        var oldValue_1 = image_1.crossOrigin;
        image_1.crossOrigin = 'anonymous';
        var recordInlineImage = function () {
            try {
                canvasService.width = image_1.naturalWidth;
                canvasService.height = image_1.naturalHeight;
                canvasCtx.drawImage(image_1, 0, 0);
                attributes.rr_dataURL = canvasService.toDataURL(dataURLOptions.type, dataURLOptions.quality);
            }
            catch (err) {
                console.warn("Cannot inline img src=".concat(image_1.currentSrc, "! Error: ").concat(err));
            }
            oldValue_1
                ? (attributes.crossOrigin = oldValue_1)
                : image_1.removeAttribute('crossorigin');
        };
        if (image_1.complete && image_1.naturalWidth !== 0)
            recordInlineImage();
        else
            image_1.onload = recordInlineImage;
    }
    if (tagName === 'audio' || tagName === 'video') {
        attributes.rr_mediaState = n.paused
            ? 'paused'
            : 'played';
        attributes.rr_mediaCurrentTime = n.currentTime;
    }
    if (!newlyAddedElement) {
        if (n.scrollLeft) {
            attributes.rr_scrollLeft = n.scrollLeft;
        }
        if (n.scrollTop) {
            attributes.rr_scrollTop = n.scrollTop;
        }
    }
    if (needBlock) {
        var _d = n.getBoundingClientRect(), width = _d.width, height = _d.height;
        attributes = {
            "class": attributes["class"],
            rr_width: "".concat(width, "px"),
            rr_height: "".concat(height, "px")
        };
    }
    if (tagName === 'iframe' && !keepIframeSrcFn(attributes.src)) {
        if (!n.contentDocument) {
            attributes.rr_src = attributes.src;
        }
        delete attributes.src;
    }
    return {
        type: NodeType.Element,
        tagName: tagName,
        attributes: attributes,
        childNodes: [],
        isSVG: isSVGElement(n) || undefined,
        needBlock: needBlock,
        rootId: rootId
    };
}
function lowerIfExists(maybeAttr) {
    if (maybeAttr === undefined) {
        return '';
    }
    else {
        return maybeAttr.toLowerCase();
    }
}
function slimDOMExcluded(sn, slimDOMOptions) {
    if (slimDOMOptions.comment && sn.type === NodeType.Comment) {
        return true;
    }
    else if (sn.type === NodeType.Element) {
        if (slimDOMOptions.script &&
            (sn.tagName === 'script' ||
                (sn.tagName === 'link' &&
                    sn.attributes.rel === 'preload' &&
                    sn.attributes.as === 'script') ||
                (sn.tagName === 'link' &&
                    sn.attributes.rel === 'prefetch' &&
                    typeof sn.attributes.href === 'string' &&
                    sn.attributes.href.endsWith('.js')))) {
            return true;
        }
        else if (slimDOMOptions.headFavicon &&
            ((sn.tagName === 'link' && sn.attributes.rel === 'shortcut icon') ||
                (sn.tagName === 'meta' &&
                    (lowerIfExists(sn.attributes.name).match(/^msapplication-tile(image|color)$/) ||
                        lowerIfExists(sn.attributes.name) === 'application-name' ||
                        lowerIfExists(sn.attributes.rel) === 'icon' ||
                        lowerIfExists(sn.attributes.rel) === 'apple-touch-icon' ||
                        lowerIfExists(sn.attributes.rel) === 'shortcut icon')))) {
            return true;
        }
        else if (sn.tagName === 'meta') {
            if (slimDOMOptions.headMetaDescKeywords &&
                lowerIfExists(sn.attributes.name).match(/^description|keywords$/)) {
                return true;
            }
            else if (slimDOMOptions.headMetaSocial &&
                (lowerIfExists(sn.attributes.property).match(/^(og|twitter|fb):/) ||
                    lowerIfExists(sn.attributes.name).match(/^(og|twitter):/) ||
                    lowerIfExists(sn.attributes.name) === 'pinterest')) {
                return true;
            }
            else if (slimDOMOptions.headMetaRobots &&
                (lowerIfExists(sn.attributes.name) === 'robots' ||
                    lowerIfExists(sn.attributes.name) === 'googlebot' ||
                    lowerIfExists(sn.attributes.name) === 'bingbot')) {
                return true;
            }
            else if (slimDOMOptions.headMetaHttpEquiv &&
                sn.attributes['http-equiv'] !== undefined) {
                return true;
            }
            else if (slimDOMOptions.headMetaAuthorship &&
                (lowerIfExists(sn.attributes.name) === 'author' ||
                    lowerIfExists(sn.attributes.name) === 'generator' ||
                    lowerIfExists(sn.attributes.name) === 'framework' ||
                    lowerIfExists(sn.attributes.name) === 'publisher' ||
                    lowerIfExists(sn.attributes.name) === 'progid' ||
                    lowerIfExists(sn.attributes.property).match(/^article:/) ||
                    lowerIfExists(sn.attributes.property).match(/^product:/))) {
                return true;
            }
            else if (slimDOMOptions.headMetaVerification &&
                (lowerIfExists(sn.attributes.name) === 'google-site-verification' ||
                    lowerIfExists(sn.attributes.name) === 'yandex-verification' ||
                    lowerIfExists(sn.attributes.name) === 'csrf-token' ||
                    lowerIfExists(sn.attributes.name) === 'p:domain_verify' ||
                    lowerIfExists(sn.attributes.name) === 'verify-v1' ||
                    lowerIfExists(sn.attributes.name) === 'verification' ||
                    lowerIfExists(sn.attributes.name) === 'shopify-checkout-api-token')) {
                return true;
            }
        }
    }
    return false;
}
function serializeNodeWithId(n, options) {
    var doc = options.doc, mirror = options.mirror, blockClass = options.blockClass, blockSelector = options.blockSelector, maskTextClass = options.maskTextClass, maskTextSelector = options.maskTextSelector, _a = options.skipChild, skipChild = _a === void 0 ? false : _a, _b = options.inlineStylesheet, inlineStylesheet = _b === void 0 ? true : _b, _c = options.maskInputOptions, maskInputOptions = _c === void 0 ? {} : _c, maskTextFn = options.maskTextFn, maskInputFn = options.maskInputFn, slimDOMOptions = options.slimDOMOptions, _d = options.dataURLOptions, dataURLOptions = _d === void 0 ? {} : _d, _e = options.inlineImages, inlineImages = _e === void 0 ? false : _e, _f = options.recordCanvas, recordCanvas = _f === void 0 ? false : _f, onSerialize = options.onSerialize, onIframeLoad = options.onIframeLoad, _g = options.iframeLoadTimeout, iframeLoadTimeout = _g === void 0 ? 5000 : _g, onStylesheetLoad = options.onStylesheetLoad, _h = options.stylesheetLoadTimeout, stylesheetLoadTimeout = _h === void 0 ? 5000 : _h, _j = options.keepIframeSrcFn, keepIframeSrcFn = _j === void 0 ? function () { return false; } : _j, _k = options.newlyAddedElement, newlyAddedElement = _k === void 0 ? false : _k;
    var _l = options.preserveWhiteSpace, preserveWhiteSpace = _l === void 0 ? true : _l;
    var _serializedNode = serializeNode(n, {
        doc: doc,
        mirror: mirror,
        blockClass: blockClass,
        blockSelector: blockSelector,
        maskTextClass: maskTextClass,
        maskTextSelector: maskTextSelector,
        inlineStylesheet: inlineStylesheet,
        maskInputOptions: maskInputOptions,
        maskTextFn: maskTextFn,
        maskInputFn: maskInputFn,
        dataURLOptions: dataURLOptions,
        inlineImages: inlineImages,
        recordCanvas: recordCanvas,
        keepIframeSrcFn: keepIframeSrcFn,
        newlyAddedElement: newlyAddedElement
    });
    if (!_serializedNode) {
        console.warn(n, 'not serialized');
        return null;
    }
    var id;
    if (mirror.hasNode(n)) {
        id = mirror.getId(n);
    }
    else if (slimDOMExcluded(_serializedNode, slimDOMOptions) ||
        (!preserveWhiteSpace &&
            _serializedNode.type === NodeType.Text &&
            !_serializedNode.isStyle &&
            !_serializedNode.textContent.replace(/^\s+|\s+$/gm, '').length)) {
        id = IGNORED_NODE;
    }
    else {
        id = genId();
    }
    var serializedNode = Object.assign(_serializedNode, { id: id });
    mirror.add(n, serializedNode);
    if (id === IGNORED_NODE) {
        return null;
    }
    if (onSerialize) {
        onSerialize(n);
    }
    var recordChild = !skipChild;
    if (serializedNode.type === NodeType.Element) {
        recordChild = recordChild && !serializedNode.needBlock;
        delete serializedNode.needBlock;
        var shadowRoot = n.shadowRoot;
        if (shadowRoot && isNativeShadowDom(shadowRoot))
            serializedNode.isShadowHost = true;
    }
    if ((serializedNode.type === NodeType.Document ||
        serializedNode.type === NodeType.Element) &&
        recordChild) {
        if (slimDOMOptions.headWhitespace &&
            serializedNode.type === NodeType.Element &&
            serializedNode.tagName === 'head') {
            preserveWhiteSpace = false;
        }
        var bypassOptions = {
            doc: doc,
            mirror: mirror,
            blockClass: blockClass,
            blockSelector: blockSelector,
            maskTextClass: maskTextClass,
            maskTextSelector: maskTextSelector,
            skipChild: skipChild,
            inlineStylesheet: inlineStylesheet,
            maskInputOptions: maskInputOptions,
            maskTextFn: maskTextFn,
            maskInputFn: maskInputFn,
            slimDOMOptions: slimDOMOptions,
            dataURLOptions: dataURLOptions,
            inlineImages: inlineImages,
            recordCanvas: recordCanvas,
            preserveWhiteSpace: preserveWhiteSpace,
            onSerialize: onSerialize,
            onIframeLoad: onIframeLoad,
            iframeLoadTimeout: iframeLoadTimeout,
            onStylesheetLoad: onStylesheetLoad,
            stylesheetLoadTimeout: stylesheetLoadTimeout,
            keepIframeSrcFn: keepIframeSrcFn
        };
        for (var _i = 0, _m = Array.from(n.childNodes); _i < _m.length; _i++) {
            var childN = _m[_i];
            var serializedChildNode = serializeNodeWithId(childN, bypassOptions);
            if (serializedChildNode) {
                serializedNode.childNodes.push(serializedChildNode);
            }
        }
        if (isElement(n) && n.shadowRoot) {
            for (var _o = 0, _p = Array.from(n.shadowRoot.childNodes); _o < _p.length; _o++) {
                var childN = _p[_o];
                var serializedChildNode = serializeNodeWithId(childN, bypassOptions);
                if (serializedChildNode) {
                    isNativeShadowDom(n.shadowRoot) &&
                        (serializedChildNode.isShadow = true);
                    serializedNode.childNodes.push(serializedChildNode);
                }
            }
        }
    }
    if (n.parentNode &&
        isShadowRoot(n.parentNode) &&
        isNativeShadowDom(n.parentNode)) {
        serializedNode.isShadow = true;
    }
    if (serializedNode.type === NodeType.Element &&
        serializedNode.tagName === 'iframe') {
        onceIframeLoaded(n, function () {
            var iframeDoc = n.contentDocument;
            if (iframeDoc && onIframeLoad) {
                var serializedIframeNode = serializeNodeWithId(iframeDoc, {
                    doc: iframeDoc,
                    mirror: mirror,
                    blockClass: blockClass,
                    blockSelector: blockSelector,
                    maskTextClass: maskTextClass,
                    maskTextSelector: maskTextSelector,
                    skipChild: false,
                    inlineStylesheet: inlineStylesheet,
                    maskInputOptions: maskInputOptions,
                    maskTextFn: maskTextFn,
                    maskInputFn: maskInputFn,
                    slimDOMOptions: slimDOMOptions,
                    dataURLOptions: dataURLOptions,
                    inlineImages: inlineImages,
                    recordCanvas: recordCanvas,
                    preserveWhiteSpace: preserveWhiteSpace,
                    onSerialize: onSerialize,
                    onIframeLoad: onIframeLoad,
                    iframeLoadTimeout: iframeLoadTimeout,
                    onStylesheetLoad: onStylesheetLoad,
                    stylesheetLoadTimeout: stylesheetLoadTimeout,
                    keepIframeSrcFn: keepIframeSrcFn
                });
                if (serializedIframeNode) {
                    onIframeLoad(n, serializedIframeNode);
                }
            }
        }, iframeLoadTimeout);
    }
    if (serializedNode.type === NodeType.Element &&
        serializedNode.tagName === 'link' &&
        serializedNode.attributes.rel === 'stylesheet') {
        onceStylesheetLoaded(n, function () {
            if (onStylesheetLoad) {
                var serializedLinkNode = serializeNodeWithId(n, {
                    doc: doc,
                    mirror: mirror,
                    blockClass: blockClass,
                    blockSelector: blockSelector,
                    maskTextClass: maskTextClass,
                    maskTextSelector: maskTextSelector,
                    skipChild: false,
                    inlineStylesheet: inlineStylesheet,
                    maskInputOptions: maskInputOptions,
                    maskTextFn: maskTextFn,
                    maskInputFn: maskInputFn,
                    slimDOMOptions: slimDOMOptions,
                    dataURLOptions: dataURLOptions,
                    inlineImages: inlineImages,
                    recordCanvas: recordCanvas,
                    preserveWhiteSpace: preserveWhiteSpace,
                    onSerialize: onSerialize,
                    onIframeLoad: onIframeLoad,
                    iframeLoadTimeout: iframeLoadTimeout,
                    onStylesheetLoad: onStylesheetLoad,
                    stylesheetLoadTimeout: stylesheetLoadTimeout,
                    keepIframeSrcFn: keepIframeSrcFn
                });
                if (serializedLinkNode) {
                    onStylesheetLoad(n, serializedLinkNode);
                }
            }
        }, stylesheetLoadTimeout);
    }
    return serializedNode;
}
function snapshot(n, options) {
    var _a = options || {}, _b = _a.mirror, mirror = _b === void 0 ? new Mirror() : _b, _c = _a.blockClass, blockClass = _c === void 0 ? 'rr-block' : _c, _d = _a.blockSelector, blockSelector = _d === void 0 ? null : _d, _e = _a.maskTextClass, maskTextClass = _e === void 0 ? 'rr-mask' : _e, _f = _a.maskTextSelector, maskTextSelector = _f === void 0 ? null : _f, _g = _a.inlineStylesheet, inlineStylesheet = _g === void 0 ? true : _g, _h = _a.inlineImages, inlineImages = _h === void 0 ? false : _h, _j = _a.recordCanvas, recordCanvas = _j === void 0 ? false : _j, _k = _a.maskAllInputs, maskAllInputs = _k === void 0 ? false : _k, maskTextFn = _a.maskTextFn, maskInputFn = _a.maskInputFn, _l = _a.slimDOM, slimDOM = _l === void 0 ? false : _l, dataURLOptions = _a.dataURLOptions, preserveWhiteSpace = _a.preserveWhiteSpace, onSerialize = _a.onSerialize, onIframeLoad = _a.onIframeLoad, iframeLoadTimeout = _a.iframeLoadTimeout, onStylesheetLoad = _a.onStylesheetLoad, stylesheetLoadTimeout = _a.stylesheetLoadTimeout, _m = _a.keepIframeSrcFn, keepIframeSrcFn = _m === void 0 ? function () { return false; } : _m;
    var maskInputOptions = maskAllInputs === true
        ? {
            color: true,
            date: true,
            'datetime-local': true,
            email: true,
            month: true,
            number: true,
            range: true,
            search: true,
            tel: true,
            text: true,
            time: true,
            url: true,
            week: true,
            textarea: true,
            select: true,
            password: true
        }
        : maskAllInputs === false
            ? {
                password: true
            }
            : maskAllInputs;
    var slimDOMOptions = slimDOM === true || slimDOM === 'all'
        ?
            {
                script: true,
                comment: true,
                headFavicon: true,
                headWhitespace: true,
                headMetaDescKeywords: slimDOM === 'all',
                headMetaSocial: true,
                headMetaRobots: true,
                headMetaHttpEquiv: true,
                headMetaAuthorship: true,
                headMetaVerification: true
            }
        : slimDOM === false
            ? {}
            : slimDOM;
    return serializeNodeWithId(n, {
        doc: n,
        mirror: mirror,
        blockClass: blockClass,
        blockSelector: blockSelector,
        maskTextClass: maskTextClass,
        maskTextSelector: maskTextSelector,
        skipChild: false,
        inlineStylesheet: inlineStylesheet,
        maskInputOptions: maskInputOptions,
        maskTextFn: maskTextFn,
        maskInputFn: maskInputFn,
        slimDOMOptions: slimDOMOptions,
        dataURLOptions: dataURLOptions,
        inlineImages: inlineImages,
        recordCanvas: recordCanvas,
        preserveWhiteSpace: preserveWhiteSpace,
        onSerialize: onSerialize,
        onIframeLoad: onIframeLoad,
        iframeLoadTimeout: iframeLoadTimeout,
        onStylesheetLoad: onStylesheetLoad,
        stylesheetLoadTimeout: stylesheetLoadTimeout,
        keepIframeSrcFn: keepIframeSrcFn,
        newlyAddedElement: false
    });
}

var commentre = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
function parse(css, options) {
    if (options === void 0) { options = {}; }
    var lineno = 1;
    var column = 1;
    function updatePosition(str) {
        var lines = str.match(/\n/g);
        if (lines) {
            lineno += lines.length;
        }
        var i = str.lastIndexOf('\n');
        column = i === -1 ? column + str.length : str.length - i;
    }
    function position() {
        var start = { line: lineno, column: column };
        return function (node) {
            node.position = new Position(start);
            whitespace();
            return node;
        };
    }
    var Position = (function () {
        function Position(start) {
            this.start = start;
            this.end = { line: lineno, column: column };
            this.source = options.source;
        }
        return Position;
    }());
    Position.prototype.content = css;
    var errorsList = [];
    function error(msg) {
        var err = new Error("".concat(options.source || '', ":").concat(lineno, ":").concat(column, ": ").concat(msg));
        err.reason = msg;
        err.filename = options.source;
        err.line = lineno;
        err.column = column;
        err.source = css;
        if (options.silent) {
            errorsList.push(err);
        }
        else {
            throw err;
        }
    }
    function stylesheet() {
        var rulesList = rules();
        return {
            type: 'stylesheet',
            stylesheet: {
                source: options.source,
                rules: rulesList,
                parsingErrors: errorsList
            }
        };
    }
    function open() {
        return match(/^{\s*/);
    }
    function close() {
        return match(/^}/);
    }
    function rules() {
        var node;
        var rules = [];
        whitespace();
        comments(rules);
        while (css.length && css.charAt(0) !== '}' && (node = atrule() || rule())) {
            if (node !== false) {
                rules.push(node);
                comments(rules);
            }
        }
        return rules;
    }
    function match(re) {
        var m = re.exec(css);
        if (!m) {
            return;
        }
        var str = m[0];
        updatePosition(str);
        css = css.slice(str.length);
        return m;
    }
    function whitespace() {
        match(/^\s*/);
    }
    function comments(rules) {
        if (rules === void 0) { rules = []; }
        var c;
        while ((c = comment())) {
            if (c !== false) {
                rules.push(c);
            }
            c = comment();
        }
        return rules;
    }
    function comment() {
        var pos = position();
        if ('/' !== css.charAt(0) || '*' !== css.charAt(1)) {
            return;
        }
        var i = 2;
        while ('' !== css.charAt(i) &&
            ('*' !== css.charAt(i) || '/' !== css.charAt(i + 1))) {
            ++i;
        }
        i += 2;
        if ('' === css.charAt(i - 1)) {
            return error('End of comment missing');
        }
        var str = css.slice(2, i - 2);
        column += 2;
        updatePosition(str);
        css = css.slice(i);
        column += 2;
        return pos({
            type: 'comment',
            comment: str
        });
    }
    function selector() {
        var m = match(/^([^{]+)/);
        if (!m) {
            return;
        }
        return trim(m[0])
            .replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g, '')
            .replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, function (m) {
            return m.replace(/,/g, '\u200C');
        })
            .split(/\s*(?![^(]*\)),\s*/)
            .map(function (s) {
            return s.replace(/\u200C/g, ',');
        });
    }
    function declaration() {
        var pos = position();
        var propMatch = match(/^(\*?[-#\/\*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);
        if (!propMatch) {
            return;
        }
        var prop = trim(propMatch[0]);
        if (!match(/^:\s*/)) {
            return error("property missing ':'");
        }
        var val = match(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+)/);
        var ret = pos({
            type: 'declaration',
            property: prop.replace(commentre, ''),
            value: val ? trim(val[0]).replace(commentre, '') : ''
        });
        match(/^[;\s]*/);
        return ret;
    }
    function declarations() {
        var decls = [];
        if (!open()) {
            return error("missing '{'");
        }
        comments(decls);
        var decl;
        while ((decl = declaration())) {
            if (decl !== false) {
                decls.push(decl);
                comments(decls);
            }
            decl = declaration();
        }
        if (!close()) {
            return error("missing '}'");
        }
        return decls;
    }
    function keyframe() {
        var m;
        var vals = [];
        var pos = position();
        while ((m = match(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/))) {
            vals.push(m[1]);
            match(/^,\s*/);
        }
        if (!vals.length) {
            return;
        }
        return pos({
            type: 'keyframe',
            values: vals,
            declarations: declarations()
        });
    }
    function atkeyframes() {
        var pos = position();
        var m = match(/^@([-\w]+)?keyframes\s*/);
        if (!m) {
            return;
        }
        var vendor = m[1];
        m = match(/^([-\w]+)\s*/);
        if (!m) {
            return error('@keyframes missing name');
        }
        var name = m[1];
        if (!open()) {
            return error("@keyframes missing '{'");
        }
        var frame;
        var frames = comments();
        while ((frame = keyframe())) {
            frames.push(frame);
            frames = frames.concat(comments());
        }
        if (!close()) {
            return error("@keyframes missing '}'");
        }
        return pos({
            type: 'keyframes',
            name: name,
            vendor: vendor,
            keyframes: frames
        });
    }
    function atsupports() {
        var pos = position();
        var m = match(/^@supports *([^{]+)/);
        if (!m) {
            return;
        }
        var supports = trim(m[1]);
        if (!open()) {
            return error("@supports missing '{'");
        }
        var style = comments().concat(rules());
        if (!close()) {
            return error("@supports missing '}'");
        }
        return pos({
            type: 'supports',
            supports: supports,
            rules: style
        });
    }
    function athost() {
        var pos = position();
        var m = match(/^@host\s*/);
        if (!m) {
            return;
        }
        if (!open()) {
            return error("@host missing '{'");
        }
        var style = comments().concat(rules());
        if (!close()) {
            return error("@host missing '}'");
        }
        return pos({
            type: 'host',
            rules: style
        });
    }
    function atmedia() {
        var pos = position();
        var m = match(/^@media *([^{]+)/);
        if (!m) {
            return;
        }
        var media = trim(m[1]);
        if (!open()) {
            return error("@media missing '{'");
        }
        var style = comments().concat(rules());
        if (!close()) {
            return error("@media missing '}'");
        }
        return pos({
            type: 'media',
            media: media,
            rules: style
        });
    }
    function atcustommedia() {
        var pos = position();
        var m = match(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);
        if (!m) {
            return;
        }
        return pos({
            type: 'custom-media',
            name: trim(m[1]),
            media: trim(m[2])
        });
    }
    function atpage() {
        var pos = position();
        var m = match(/^@page */);
        if (!m) {
            return;
        }
        var sel = selector() || [];
        if (!open()) {
            return error("@page missing '{'");
        }
        var decls = comments();
        var decl;
        while ((decl = declaration())) {
            decls.push(decl);
            decls = decls.concat(comments());
        }
        if (!close()) {
            return error("@page missing '}'");
        }
        return pos({
            type: 'page',
            selectors: sel,
            declarations: decls
        });
    }
    function atdocument() {
        var pos = position();
        var m = match(/^@([-\w]+)?document *([^{]+)/);
        if (!m) {
            return;
        }
        var vendor = trim(m[1]);
        var doc = trim(m[2]);
        if (!open()) {
            return error("@document missing '{'");
        }
        var style = comments().concat(rules());
        if (!close()) {
            return error("@document missing '}'");
        }
        return pos({
            type: 'document',
            document: doc,
            vendor: vendor,
            rules: style
        });
    }
    function atfontface() {
        var pos = position();
        var m = match(/^@font-face\s*/);
        if (!m) {
            return;
        }
        if (!open()) {
            return error("@font-face missing '{'");
        }
        var decls = comments();
        var decl;
        while ((decl = declaration())) {
            decls.push(decl);
            decls = decls.concat(comments());
        }
        if (!close()) {
            return error("@font-face missing '}'");
        }
        return pos({
            type: 'font-face',
            declarations: decls
        });
    }
    var atimport = _compileAtrule('import');
    var atcharset = _compileAtrule('charset');
    var atnamespace = _compileAtrule('namespace');
    function _compileAtrule(name) {
        var re = new RegExp('^@' + name + '\\s*([^;]+);');
        return function () {
            var pos = position();
            var m = match(re);
            if (!m) {
                return;
            }
            var ret = { type: name };
            ret[name] = m[1].trim();
            return pos(ret);
        };
    }
    function atrule() {
        if (css[0] !== '@') {
            return;
        }
        return (atkeyframes() ||
            atmedia() ||
            atcustommedia() ||
            atsupports() ||
            atimport() ||
            atcharset() ||
            atnamespace() ||
            atdocument() ||
            atpage() ||
            athost() ||
            atfontface());
    }
    function rule() {
        var pos = position();
        var sel = selector();
        if (!sel) {
            return error('selector missing');
        }
        comments();
        return pos({
            type: 'rule',
            selectors: sel,
            declarations: declarations()
        });
    }
    return addParent(stylesheet());
}
function trim(str) {
    return str ? str.replace(/^\s+|\s+$/g, '') : '';
}
function addParent(obj, parent) {
    var isNode = obj && typeof obj.type === 'string';
    var childParent = isNode ? obj : parent;
    for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
        var k = _a[_i];
        var value = obj[k];
        if (Array.isArray(value)) {
            value.forEach(function (v) {
                addParent(v, childParent);
            });
        }
        else if (value && typeof value === 'object') {
            addParent(value, childParent);
        }
    }
    if (isNode) {
        Object.defineProperty(obj, 'parent', {
            configurable: true,
            writable: true,
            enumerable: false,
            value: parent || null
        });
    }
    return obj;
}

var tagMap = {
    script: 'noscript',
    altglyph: 'altGlyph',
    altglyphdef: 'altGlyphDef',
    altglyphitem: 'altGlyphItem',
    animatecolor: 'animateColor',
    animatemotion: 'animateMotion',
    animatetransform: 'animateTransform',
    clippath: 'clipPath',
    feblend: 'feBlend',
    fecolormatrix: 'feColorMatrix',
    fecomponenttransfer: 'feComponentTransfer',
    fecomposite: 'feComposite',
    feconvolvematrix: 'feConvolveMatrix',
    fediffuselighting: 'feDiffuseLighting',
    fedisplacementmap: 'feDisplacementMap',
    fedistantlight: 'feDistantLight',
    fedropshadow: 'feDropShadow',
    feflood: 'feFlood',
    fefunca: 'feFuncA',
    fefuncb: 'feFuncB',
    fefuncg: 'feFuncG',
    fefuncr: 'feFuncR',
    fegaussianblur: 'feGaussianBlur',
    feimage: 'feImage',
    femerge: 'feMerge',
    femergenode: 'feMergeNode',
    femorphology: 'feMorphology',
    feoffset: 'feOffset',
    fepointlight: 'fePointLight',
    fespecularlighting: 'feSpecularLighting',
    fespotlight: 'feSpotLight',
    fetile: 'feTile',
    feturbulence: 'feTurbulence',
    foreignobject: 'foreignObject',
    glyphref: 'glyphRef',
    lineargradient: 'linearGradient',
    radialgradient: 'radialGradient'
};
function getTagName(n) {
    var tagName = tagMap[n.tagName] ? tagMap[n.tagName] : n.tagName;
    if (tagName === 'link' && n.attributes._cssText) {
        tagName = 'style';
    }
    return tagName;
}
function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
var HOVER_SELECTOR = /([^\\]):hover/;
var HOVER_SELECTOR_GLOBAL = new RegExp(HOVER_SELECTOR.source, 'g');
function addHoverClass(cssText, cache) {
    var cachedStyle = cache === null || cache === void 0 ? void 0 : cache.stylesWithHoverClass.get(cssText);
    if (cachedStyle)
        return cachedStyle;
    var ast = parse(cssText, {
        silent: true
    });
    if (!ast.stylesheet) {
        return cssText;
    }
    var selectors = [];
    ast.stylesheet.rules.forEach(function (rule) {
        if ('selectors' in rule) {
            (rule.selectors || []).forEach(function (selector) {
                if (HOVER_SELECTOR.test(selector)) {
                    selectors.push(selector);
                }
            });
        }
    });
    if (selectors.length === 0) {
        return cssText;
    }
    var selectorMatcher = new RegExp(selectors
        .filter(function (selector, index) { return selectors.indexOf(selector) === index; })
        .sort(function (a, b) { return b.length - a.length; })
        .map(function (selector) {
        return escapeRegExp(selector);
    })
        .join('|'), 'g');
    var result = cssText.replace(selectorMatcher, function (selector) {
        var newSelector = selector.replace(HOVER_SELECTOR_GLOBAL, '$1.\\:hover');
        return "".concat(selector, ", ").concat(newSelector);
    });
    cache === null || cache === void 0 ? void 0 : cache.stylesWithHoverClass.set(cssText, result);
    return result;
}
function createCache() {
    var stylesWithHoverClass = new Map();
    return {
        stylesWithHoverClass: stylesWithHoverClass
    };
}
function buildNode(n, options) {
    var doc = options.doc, hackCss = options.hackCss, cache = options.cache;
    switch (n.type) {
        case NodeType.Document:
            return doc.implementation.createDocument(null, '', null);
        case NodeType.DocumentType:
            return doc.implementation.createDocumentType(n.name || 'html', n.publicId, n.systemId);
        case NodeType.Element: {
            var tagName = getTagName(n);
            var node_1;
            if (n.isSVG) {
                node_1 = doc.createElementNS('http://www.w3.org/2000/svg', tagName);
            }
            else {
                node_1 = doc.createElement(tagName);
            }
            var specialAttributes = {};
            for (var name_1 in n.attributes) {
                if (!Object.prototype.hasOwnProperty.call(n.attributes, name_1)) {
                    continue;
                }
                var value = n.attributes[name_1];
                if (tagName === 'option' &&
                    name_1 === 'selected' &&
                    value === false) {
                    continue;
                }
                if (value === true)
                    value = '';
                if (name_1.startsWith('rr_')) {
                    specialAttributes[name_1] = value;
                    continue;
                }
                var isTextarea = tagName === 'textarea' && name_1 === 'value';
                var isRemoteOrDynamicCss = tagName === 'style' && name_1 === '_cssText';
                if (isRemoteOrDynamicCss && hackCss && typeof value === 'string') {
                    value = addHoverClass(value, cache);
                }
                if ((isTextarea || isRemoteOrDynamicCss) && typeof value === 'string') {
                    var child = doc.createTextNode(value);
                    for (var _i = 0, _a = Array.from(node_1.childNodes); _i < _a.length; _i++) {
                        var c = _a[_i];
                        if (c.nodeType === node_1.TEXT_NODE) {
                            node_1.removeChild(c);
                        }
                    }
                    node_1.appendChild(child);
                    continue;
                }
                try {
                    if (n.isSVG && name_1 === 'xlink:href') {
                        node_1.setAttributeNS('http://www.w3.org/1999/xlink', name_1, value.toString());
                    }
                    else if (name_1 === 'onload' ||
                        name_1 === 'onclick' ||
                        name_1.substring(0, 7) === 'onmouse') {
                        node_1.setAttribute('_' + name_1, value.toString());
                    }
                    else if (tagName === 'meta' &&
                        n.attributes['http-equiv'] === 'Content-Security-Policy' &&
                        name_1 === 'content') {
                        node_1.setAttribute('csp-content', value.toString());
                        continue;
                    }
                    else if (tagName === 'link' &&
                        n.attributes.rel === 'preload' &&
                        n.attributes.as === 'script') {
                    }
                    else if (tagName === 'link' &&
                        n.attributes.rel === 'prefetch' &&
                        typeof n.attributes.href === 'string' &&
                        n.attributes.href.endsWith('.js')) {
                    }
                    else if (tagName === 'img' &&
                        n.attributes.srcset &&
                        n.attributes.rr_dataURL) {
                        node_1.setAttribute('rrweb-original-srcset', n.attributes.srcset);
                    }
                    else {
                        node_1.setAttribute(name_1, value.toString());
                    }
                }
                catch (error) {
                }
            }
            var _loop_1 = function (name_2) {
                var value = specialAttributes[name_2];
                if (tagName === 'canvas' && name_2 === 'rr_dataURL') {
                    var image_1 = document.createElement('img');
                    image_1.onload = function () {
                        var ctx = node_1.getContext('2d');
                        if (ctx) {
                            ctx.drawImage(image_1, 0, 0, image_1.width, image_1.height);
                        }
                    };
                    image_1.src = value.toString();
                    if (node_1.RRNodeType)
                        node_1.rr_dataURL = value.toString();
                }
                else if (tagName === 'img' && name_2 === 'rr_dataURL') {
                    var image = node_1;
                    if (!image.currentSrc.startsWith('data:')) {
                        image.setAttribute('rrweb-original-src', n.attributes.src);
                        image.src = value.toString();
                    }
                }
                if (name_2 === 'rr_width') {
                    node_1.style.width = value.toString();
                }
                else if (name_2 === 'rr_height') {
                    node_1.style.height = value.toString();
                }
                else if (name_2 === 'rr_mediaCurrentTime' &&
                    typeof value === 'number') {
                    node_1.currentTime = value;
                }
                else if (name_2 === 'rr_mediaState') {
                    switch (value) {
                        case 'played':
                            node_1
                                .play()["catch"](function (e) { return console.warn('media playback error', e); });
                            break;
                        case 'paused':
                            node_1.pause();
                            break;
                    }
                }
            };
            for (var name_2 in specialAttributes) {
                _loop_1(name_2);
            }
            if (n.isShadowHost) {
                if (!node_1.shadowRoot) {
                    node_1.attachShadow({ mode: 'open' });
                }
                else {
                    while (node_1.shadowRoot.firstChild) {
                        node_1.shadowRoot.removeChild(node_1.shadowRoot.firstChild);
                    }
                }
            }
            return node_1;
        }
        case NodeType.Text:
            return doc.createTextNode(n.isStyle && hackCss
                ? addHoverClass(n.textContent, cache)
                : n.textContent);
        case NodeType.CDATA:
            return doc.createCDATASection(n.textContent);
        case NodeType.Comment:
            return doc.createComment(n.textContent);
        default:
            return null;
    }
}
function buildNodeWithSN(n, options) {
    var doc = options.doc, mirror = options.mirror, _a = options.skipChild, skipChild = _a === void 0 ? false : _a, _b = options.hackCss, hackCss = _b === void 0 ? true : _b, afterAppend = options.afterAppend, cache = options.cache;
    var node = buildNode(n, { doc: doc, hackCss: hackCss, cache: cache });
    if (!node) {
        return null;
    }
    if (n.rootId && mirror.getNode(n.rootId) !== doc) {
        mirror.replace(n.rootId, doc);
    }
    if (n.type === NodeType.Document) {
        doc.close();
        doc.open();
        if (n.compatMode === 'BackCompat' &&
            n.childNodes &&
            n.childNodes[0].type !== NodeType.DocumentType) {
            if (n.childNodes[0].type === NodeType.Element &&
                'xmlns' in n.childNodes[0].attributes &&
                n.childNodes[0].attributes.xmlns === 'http://www.w3.org/1999/xhtml') {
                doc.write('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "">');
            }
            else {
                doc.write('<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "">');
            }
        }
        node = doc;
    }
    mirror.add(node, n);
    if ((n.type === NodeType.Document || n.type === NodeType.Element) &&
        !skipChild) {
        for (var _i = 0, _c = n.childNodes; _i < _c.length; _i++) {
            var childN = _c[_i];
            var childNode = buildNodeWithSN(childN, {
                doc: doc,
                mirror: mirror,
                skipChild: false,
                hackCss: hackCss,
                afterAppend: afterAppend,
                cache: cache
            });
            if (!childNode) {
                console.warn('Failed to rebuild', childN);
                continue;
            }
            if (childN.isShadow && isElement(node) && node.shadowRoot) {
                node.shadowRoot.appendChild(childNode);
            }
            else {
                node.appendChild(childNode);
            }
            if (afterAppend) {
                afterAppend(childNode, childN.id);
            }
        }
    }
    return node;
}
function visit(mirror, onVisit) {
    function walk(node) {
        onVisit(node);
    }
    for (var _i = 0, _a = mirror.getIds(); _i < _a.length; _i++) {
        var id = _a[_i];
        if (mirror.has(id)) {
            walk(mirror.getNode(id));
        }
    }
}
function handleScroll(node, mirror) {
    var n = mirror.getMeta(node);
    if ((n === null || n === void 0 ? void 0 : n.type) !== NodeType.Element) {
        return;
    }
    var el = node;
    for (var name_3 in n.attributes) {
        if (!(Object.prototype.hasOwnProperty.call(n.attributes, name_3) &&
            name_3.startsWith('rr_'))) {
            continue;
        }
        var value = n.attributes[name_3];
        if (name_3 === 'rr_scrollLeft') {
            el.scrollLeft = value;
        }
        if (name_3 === 'rr_scrollTop') {
            el.scrollTop = value;
        }
    }
}
function rebuild(n, options) {
    var doc = options.doc, onVisit = options.onVisit, _a = options.hackCss, hackCss = _a === void 0 ? true : _a, afterAppend = options.afterAppend, cache = options.cache, _b = options.mirror, mirror = _b === void 0 ? new Mirror() : _b;
    var node = buildNodeWithSN(n, {
        doc: doc,
        mirror: mirror,
        skipChild: false,
        hackCss: hackCss,
        afterAppend: afterAppend,
        cache: cache
    });
    visit(mirror, function (visitedNode) {
        if (onVisit) {
            onVisit(visitedNode);
        }
        handleScroll(visitedNode, mirror);
    });
    return node;
}




/***/ }),

/***/ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/entries/all.js":
/*!******************************************************************************************************************************************************!*\
  !*** /Users/crusher/Desktop/experiment/test-v2/node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/entries/all.js ***!
  \******************************************************************************************************************************************************/
/*! exports provided: addCustomEvent, freezePage, pack, unpack, PLUGIN_NAME, getRecordConsolePlugin, getReplayConsolePlugin, record, EventType, IncrementalSource, MouseInteractions, ReplayerEvents, Replayer, utils, mirror */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addCustomEvent", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["addCustomEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "freezePage", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["freezePage"]; });

/* harmony import */ var _packer_pack_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../packer/pack.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/packer/pack.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pack", function() { return _packer_pack_js__WEBPACK_IMPORTED_MODULE_1__["pack"]; });

/* harmony import */ var _packer_unpack_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../packer/unpack.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/packer/unpack.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unpack", function() { return _packer_unpack_js__WEBPACK_IMPORTED_MODULE_2__["unpack"]; });

/* harmony import */ var _plugins_console_record_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../plugins/console/record/index.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/plugins/console/record/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PLUGIN_NAME", function() { return _plugins_console_record_index_js__WEBPACK_IMPORTED_MODULE_3__["PLUGIN_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRecordConsolePlugin", function() { return _plugins_console_record_index_js__WEBPACK_IMPORTED_MODULE_3__["getRecordConsolePlugin"]; });

/* harmony import */ var _plugins_console_replay_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../plugins/console/replay/index.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/plugins/console/replay/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getReplayConsolePlugin", function() { return _plugins_console_replay_index_js__WEBPACK_IMPORTED_MODULE_4__["getReplayConsolePlugin"]; });

/* harmony import */ var _record_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../record/index.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/record/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "record", function() { return _record_index_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _types_dist_types_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../types/dist/types.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/types/dist/types.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventType", function() { return _types_dist_types_js__WEBPACK_IMPORTED_MODULE_6__["EventType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IncrementalSource", function() { return _types_dist_types_js__WEBPACK_IMPORTED_MODULE_6__["IncrementalSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MouseInteractions", function() { return _types_dist_types_js__WEBPACK_IMPORTED_MODULE_6__["MouseInteractions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReplayerEvents", function() { return _types_dist_types_js__WEBPACK_IMPORTED_MODULE_6__["ReplayerEvents"]; });

/* harmony import */ var _replay_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../replay/index.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Replayer", function() { return _replay_index_js__WEBPACK_IMPORTED_MODULE_7__["Replayer"]; });

/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/utils.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "utils", function() { return _utils_js__WEBPACK_IMPORTED_MODULE_8__; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mirror", function() { return _utils_js__WEBPACK_IMPORTED_MODULE_8__["_mirror"]; });














/***/ }),

/***/ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/index.js":
/*!************************************************************************************************************************************************!*\
  !*** /Users/crusher/Desktop/experiment/test-v2/node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/index.js ***!
  \************************************************************************************************************************************************/
/*! exports provided: record, utils, mirror, addCustomEvent, freezePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCustomEvent", function() { return addCustomEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "freezePage", function() { return freezePage; });
/* harmony import */ var _record_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./record/index.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/record/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "record", function() { return _record_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../rrweb-snapshot/es/rrweb-snapshot.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb-snapshot/es/rrweb-snapshot.js");
/* harmony import */ var _rrdom_es_rrdom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../rrdom/es/rrdom.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrdom/es/rrdom.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/utils.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "utils", function() { return _utils_js__WEBPACK_IMPORTED_MODULE_3__; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mirror", function() { return _utils_js__WEBPACK_IMPORTED_MODULE_3__["_mirror"]; });

/* harmony import */ var _ext_base64_arraybuffer_dist_base64_arraybuffer_es5_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../ext/base64-arraybuffer/dist/base64-arraybuffer.es5.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/ext/base64-arraybuffer/dist/base64-arraybuffer.es5.js");









const { addCustomEvent } = _record_index_js__WEBPACK_IMPORTED_MODULE_0__["default"];
const { freezePage } = _record_index_js__WEBPACK_IMPORTED_MODULE_0__["default"];




/***/ }),

/***/ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/packer/base.js":
/*!******************************************************************************************************************************************************!*\
  !*** /Users/crusher/Desktop/experiment/test-v2/node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/packer/base.js ***!
  \******************************************************************************************************************************************************/
/*! exports provided: MARK */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MARK", function() { return MARK; });
const MARK = 'v1';




/***/ }),

/***/ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/packer/pack.js":
/*!******************************************************************************************************************************************************!*\
  !*** /Users/crusher/Desktop/experiment/test-v2/node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/packer/pack.js ***!
  \******************************************************************************************************************************************************/
/*! exports provided: pack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pack", function() { return pack; });
/* harmony import */ var _ext_fflate_esm_browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../ext/fflate/esm/browser.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/ext/fflate/esm/browser.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/packer/base.js");



const pack = (event) => {
    const _e = Object.assign(Object.assign({}, event), { v: _base_js__WEBPACK_IMPORTED_MODULE_1__["MARK"] });
    return Object(_ext_fflate_esm_browser_js__WEBPACK_IMPORTED_MODULE_0__["strFromU8"])(Object(_ext_fflate_esm_browser_js__WEBPACK_IMPORTED_MODULE_0__["zlibSync"])(Object(_ext_fflate_esm_browser_js__WEBPACK_IMPORTED_MODULE_0__["strToU8"])(JSON.stringify(_e))), true);
};




/***/ }),

/***/ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/packer/unpack.js":
/*!********************************************************************************************************************************************************!*\
  !*** /Users/crusher/Desktop/experiment/test-v2/node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/packer/unpack.js ***!
  \********************************************************************************************************************************************************/
/*! exports provided: unpack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unpack", function() { return unpack; });
/* harmony import */ var _ext_fflate_esm_browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../ext/fflate/esm/browser.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/ext/fflate/esm/browser.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/packer/base.js");



const unpack = (raw) => {
    if (typeof raw !== 'string') {
        return raw;
    }
    try {
        const e = JSON.parse(raw);
        if (e.timestamp) {
            return e;
        }
    }
    catch (error) {
    }
    try {
        const e = JSON.parse(Object(_ext_fflate_esm_browser_js__WEBPACK_IMPORTED_MODULE_0__["strFromU8"])(Object(_ext_fflate_esm_browser_js__WEBPACK_IMPORTED_MODULE_0__["unzlibSync"])(Object(_ext_fflate_esm_browser_js__WEBPACK_IMPORTED_MODULE_0__["strToU8"])(raw, true))));
        if (e.v === _base_js__WEBPACK_IMPORTED_MODULE_1__["MARK"]) {
            return e;
        }
        throw new Error(`These events were packed with packer ${e.v} which is incompatible with current packer ${_base_js__WEBPACK_IMPORTED_MODULE_1__["MARK"]}.`);
    }
    catch (error) {
        console.error(error);
        throw new Error('Unknown data format.');
    }
};




/***/ }),

/***/ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/plugins/console/record/error-stack-parser.js":
/*!************************************************************************************************************************************************************************************!*\
  !*** /Users/crusher/Desktop/experiment/test-v2/node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/plugins/console/record/error-stack-parser.js ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: ErrorStackParser, StackFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorStackParser", function() { return ErrorStackParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StackFrame", function() { return StackFrame; });
class StackFrame {
    constructor(obj) {
        this.fileName = obj.fileName || '';
        this.functionName = obj.functionName || '';
        this.lineNumber = obj.lineNumber;
        this.columnNumber = obj.columnNumber;
    }
    toString() {
        const lineNumber = this.lineNumber || '';
        const columnNumber = this.columnNumber || '';
        if (this.functionName)
            return `${this.functionName} (${this.fileName}:${lineNumber}:${columnNumber})`;
        return `${this.fileName}:${lineNumber}:${columnNumber}`;
    }
}
const FIREFOX_SAFARI_STACK_REGEXP = /(^|@)\S+:\d+/;
const CHROME_IE_STACK_REGEXP = /^\s*at .*(\S+:\d+|\(native\))/m;
const SAFARI_NATIVE_CODE_REGEXP = /^(eval@)?(\[native code])?$/;
const ErrorStackParser = {
    parse: function (error) {
        if (!error) {
            return [];
        }
        if (typeof error.stacktrace !== 'undefined' ||
            typeof error['opera#sourceloc'] !== 'undefined') {
            return this.parseOpera(error);
        }
        else if (error.stack && error.stack.match(CHROME_IE_STACK_REGEXP)) {
            return this.parseV8OrIE(error);
        }
        else if (error.stack) {
            return this.parseFFOrSafari(error);
        }
        else {
            throw new Error('Cannot parse given Error object');
        }
    },
    extractLocation: function (urlLike) {
        if (urlLike.indexOf(':') === -1) {
            return [urlLike];
        }
        const regExp = /(.+?)(?::(\d+))?(?::(\d+))?$/;
        const parts = regExp.exec(urlLike.replace(/[()]/g, ''));
        if (!parts)
            throw new Error(`Cannot parse given url: ${urlLike}`);
        return [parts[1], parts[2] || undefined, parts[3] || undefined];
    },
    parseV8OrIE: function (error) {
        const filtered = error.stack.split('\n').filter(function (line) {
            return !!line.match(CHROME_IE_STACK_REGEXP);
        }, this);
        return filtered.map(function (line) {
            if (line.indexOf('(eval ') > -1) {
                line = line
                    .replace(/eval code/g, 'eval')
                    .replace(/(\(eval at [^()]*)|(\),.*$)/g, '');
            }
            let sanitizedLine = line.replace(/^\s+/, '').replace(/\(eval code/g, '(');
            const location = sanitizedLine.match(/ (\((.+):(\d+):(\d+)\)$)/);
            sanitizedLine = location
                ? sanitizedLine.replace(location[0], '')
                : sanitizedLine;
            const tokens = sanitizedLine.split(/\s+/).slice(1);
            const locationParts = this.extractLocation(location ? location[1] : tokens.pop());
            const functionName = tokens.join(' ') || undefined;
            const fileName = ['eval', '<anonymous>'].indexOf(locationParts[0]) > -1
                ? undefined
                : locationParts[0];
            return new StackFrame({
                functionName,
                fileName,
                lineNumber: locationParts[1],
                columnNumber: locationParts[2],
            });
        }, this);
    },
    parseFFOrSafari: function (error) {
        const filtered = error.stack.split('\n').filter(function (line) {
            return !line.match(SAFARI_NATIVE_CODE_REGEXP);
        }, this);
        return filtered.map(function (line) {
            if (line.indexOf(' > eval') > -1) {
                line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ':$1');
            }
            if (line.indexOf('@') === -1 && line.indexOf(':') === -1) {
                return new StackFrame({
                    functionName: line,
                });
            }
            else {
                const functionNameRegex = /((.*".+"[^@]*)?[^@]*)(?:@)/;
                const matches = line.match(functionNameRegex);
                const functionName = matches && matches[1] ? matches[1] : undefined;
                const locationParts = this.extractLocation(line.replace(functionNameRegex, ''));
                return new StackFrame({
                    functionName,
                    fileName: locationParts[0],
                    lineNumber: locationParts[1],
                    columnNumber: locationParts[2],
                });
            }
        }, this);
    },
    parseOpera: function (e) {
        if (!e.stacktrace ||
            (e.message.indexOf('\n') > -1 &&
                e.message.split('\n').length > e.stacktrace.split('\n').length)) {
            return this.parseOpera9(e);
        }
        else if (!e.stack) {
            return this.parseOpera10(e);
        }
        else {
            return this.parseOpera11(e);
        }
    },
    parseOpera9: function (e) {
        const lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
        const lines = e.message.split('\n');
        const result = [];
        for (let i = 2, len = lines.length; i < len; i += 2) {
            const match = lineRE.exec(lines[i]);
            if (match) {
                result.push(new StackFrame({
                    fileName: match[2],
                    lineNumber: parseFloat(match[1]),
                }));
            }
        }
        return result;
    },
    parseOpera10: function (e) {
        const lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
        const lines = e.stacktrace.split('\n');
        const result = [];
        for (let i = 0, len = lines.length; i < len; i += 2) {
            const match = lineRE.exec(lines[i]);
            if (match) {
                result.push(new StackFrame({
                    functionName: match[3] || undefined,
                    fileName: match[2],
                    lineNumber: parseFloat(match[1]),
                }));
            }
        }
        return result;
    },
    parseOpera11: function (error) {
        const filtered = error.stack.split('\n').filter(function (line) {
            return (!!line.match(FIREFOX_SAFARI_STACK_REGEXP) &&
                !line.match(/^Error created at/));
        }, this);
        return filtered.map(function (line) {
            const tokens = line.split('@');
            const locationParts = this.extractLocation(tokens.pop());
            const functionCall = tokens.shift() || '';
            const functionName = functionCall
                .replace(/<anonymous function(: (\w+))?>/, '$2')
                .replace(/\([^)]*\)/g, '') || undefined;
            return new StackFrame({
                functionName,
                fileName: locationParts[0],
                lineNumber: locationParts[1],
                columnNumber: locationParts[2],
            });
        }, this);
    },
};




/***/ }),

/***/ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/plugins/console/record/index.js":
/*!***********************************************************************************************************************************************************************!*\
  !*** /Users/crusher/Desktop/experiment/test-v2/node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/plugins/console/record/index.js ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: PLUGIN_NAME, getRecordConsolePlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLUGIN_NAME", function() { return PLUGIN_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecordConsolePlugin", function() { return getRecordConsolePlugin; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/utils.js");
/* harmony import */ var _error_stack_parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-stack-parser.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/plugins/console/record/error-stack-parser.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/plugins/console/record/stringify.js");




const defaultLogOptions = {
    level: [
        'assert',
        'clear',
        'count',
        'countReset',
        'debug',
        'dir',
        'dirxml',
        'error',
        'group',
        'groupCollapsed',
        'groupEnd',
        'info',
        'log',
        'table',
        'time',
        'timeEnd',
        'timeLog',
        'trace',
        'warn',
    ],
    lengthThreshold: 1000,
    logger: 'console',
};
function initLogObserver(cb, win, options) {
    const logOptions = (options
        ? Object.assign({}, defaultLogOptions, options)
        : defaultLogOptions);
    const loggerType = logOptions.logger;
    if (!loggerType) {
        return () => {
        };
    }
    let logger;
    if (typeof loggerType === 'string') {
        logger = win[loggerType];
    }
    else {
        logger = loggerType;
    }
    let logCount = 0;
    const cancelHandlers = [];
    if (logOptions.level.includes('error')) {
        if (window) {
            const errorHandler = (event) => {
                const message = event.message, error = event.error;
                const trace = _error_stack_parser_js__WEBPACK_IMPORTED_MODULE_1__["ErrorStackParser"].parse(error).map((stackFrame) => stackFrame.toString());
                const payload = [Object(_stringify_js__WEBPACK_IMPORTED_MODULE_2__["stringify"])(message, logOptions.stringifyOptions)];
                cb({
                    level: 'error',
                    trace,
                    payload,
                });
            };
            window.addEventListener('error', errorHandler);
            cancelHandlers.push(() => {
                if (window)
                    window.removeEventListener('error', errorHandler);
            });
        }
    }
    for (const levelType of logOptions.level) {
        cancelHandlers.push(replace(logger, levelType));
    }
    return () => {
        cancelHandlers.forEach((h) => h());
    };
    function replace(_logger, level) {
        if (!_logger[level]) {
            return () => {
            };
        }
        return Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["patch"])(_logger, level, (original) => {
            return (...args) => {
                original.apply(this, args);
                try {
                    const trace = _error_stack_parser_js__WEBPACK_IMPORTED_MODULE_1__["ErrorStackParser"].parse(new Error())
                        .map((stackFrame) => stackFrame.toString())
                        .splice(1);
                    const payload = args.map((s) => Object(_stringify_js__WEBPACK_IMPORTED_MODULE_2__["stringify"])(s, logOptions.stringifyOptions));
                    logCount++;
                    if (logCount < logOptions.lengthThreshold) {
                        cb({
                            level,
                            trace,
                            payload,
                        });
                    }
                    else if (logCount === logOptions.lengthThreshold) {
                        cb({
                            level: 'warn',
                            trace: [],
                            payload: [
                                Object(_stringify_js__WEBPACK_IMPORTED_MODULE_2__["stringify"])('The number of log records reached the threshold.'),
                            ],
                        });
                    }
                }
                catch (error) {
                    original('rrweb logger error:', error, ...args);
                }
            };
        });
    }
}
const PLUGIN_NAME = 'rrweb/console@1';
const getRecordConsolePlugin = (options) => ({
    name: PLUGIN_NAME,
    observer: initLogObserver,
    options: options,
});




/***/ }),

/***/ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/plugins/console/record/stringify.js":
/*!***************************************************************************************************************************************************************************!*\
  !*** /Users/crusher/Desktop/experiment/test-v2/node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/plugins/console/record/stringify.js ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: stringify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return stringify; });
function pathToSelector(node) {
    if (!node || !node.outerHTML) {
        return '';
    }
    let path = '';
    while (node.parentElement) {
        let name = node.localName;
        if (!name) {
            break;
        }
        name = name.toLowerCase();
        const parent = node.parentElement;
        const domSiblings = [];
        if (parent.children && parent.children.length > 0) {
            for (let i = 0; i < parent.children.length; i++) {
                const sibling = parent.children[i];
                if (sibling.localName && sibling.localName.toLowerCase) {
                    if (sibling.localName.toLowerCase() === name) {
                        domSiblings.push(sibling);
                    }
                }
            }
        }
        if (domSiblings.length > 1) {
            name += `:eq(${domSiblings.indexOf(node)})`;
        }
        path = name + (path ? '>' + path : '');
        node = parent;
    }
    return path;
}
function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
}
function isObjTooDeep(obj, limit) {
    if (limit === 0) {
        return true;
    }
    const keys = Object.keys(obj);
    for (const key of keys) {
        if (isObject(obj[key]) &&
            isObjTooDeep(obj[key], limit - 1)) {
            return true;
        }
    }
    return false;
}
function stringify(obj, stringifyOptions) {
    const options = {
        numOfKeysLimit: 50,
        depthOfLimit: 4,
    };
    Object.assign(options, stringifyOptions);
    const stack = [];
    const keys = [];
    return JSON.stringify(obj, function (key, value) {
        if (stack.length > 0) {
            const thisPos = stack.indexOf(this);
            ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
            ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
            if (~stack.indexOf(value)) {
                if (stack[0] === value) {
                    value = '[Circular ~]';
                }
                else {
                    value =
                        '[Circular ~.' +
                            keys.slice(0, stack.indexOf(value)).join('.') +
                            ']';
                }
            }
        }
        else {
            stack.push(value);
        }
        if (value === null)
            return value;
        if (value === undefined)
            return 'undefined';
        if (shouldIgnore(value)) {
            return toString(value);
        }
        if (value instanceof Event) {
            const eventResult = {};
            for (const eventKey in value) {
                const eventValue = value[eventKey];
                if (Array.isArray(eventValue)) {
                    eventResult[eventKey] = pathToSelector((eventValue.length ? eventValue[0] : null));
                }
                else {
                    eventResult[eventKey] = eventValue;
                }
            }
            return eventResult;
        }
        else if (value instanceof Node) {
            if (value instanceof HTMLElement) {
                return value ? value.outerHTML : '';
            }
            return value.nodeName;
        }
        else if (value instanceof Error) {
            return value.stack
                ? value.stack + '\nEnd of stack for Error object'
                : value.name + ': ' + value.message;
        }
        return value;
    });
    function shouldIgnore(_obj) {
        if (isObject(_obj) && Object.keys(_obj).length > options.numOfKeysLimit) {
            return true;
        }
        if (typeof _obj === 'function') {
            return true;
        }
        if (isObject(_obj) &&
            isObjTooDeep(_obj, options.depthOfLimit)) {
            return true;
        }
        return false;
    }
    function toString(_obj) {
        let str = _obj.toString();
        if (options.stringLengthLimit && str.length > options.stringLengthLimit) {
            str = `${str.slice(0, options.stringLengthLimit)}...`;
        }
        return str;
    }
}




/***/ }),

/***/ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/plugins/console/replay/index.js":
/*!***********************************************************************************************************************************************************************!*\
  !*** /Users/crusher/Desktop/experiment/test-v2/node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/plugins/console/replay/index.js ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: getReplayConsolePlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReplayConsolePlugin", function() { return getReplayConsolePlugin; });
/* harmony import */ var _record_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../record/index.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/plugins/console/record/index.js");
/* harmony import */ var _types_dist_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../types/dist/types.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/types/dist/types.js");



const ORIGINAL_ATTRIBUTE_NAME = '__rrweb_original__';
const defaultLogConfig = {
    level: [
        'assert',
        'clear',
        'count',
        'countReset',
        'debug',
        'dir',
        'dirxml',
        'error',
        'group',
        'groupCollapsed',
        'groupEnd',
        'info',
        'log',
        'table',
        'time',
        'timeEnd',
        'timeLog',
        'trace',
        'warn',
    ],
    replayLogger: undefined,
};
class LogReplayPlugin {
    constructor(config) {
        this.config = Object.assign(defaultLogConfig, config);
    }
    getConsoleLogger() {
        const replayLogger = {};
        for (const level of this.config.level) {
            if (level === 'trace') {
                replayLogger[level] = (data) => {
                    const logger = console.log[ORIGINAL_ATTRIBUTE_NAME]
                        ? console.log[ORIGINAL_ATTRIBUTE_NAME]
                        : console.log;
                    logger(...data.payload.map((s) => JSON.parse(s)), this.formatMessage(data));
                };
            }
            else {
                replayLogger[level] = (data) => {
                    const logger = console[level][ORIGINAL_ATTRIBUTE_NAME]
                        ? console[level][ORIGINAL_ATTRIBUTE_NAME]
                        : console[level];
                    logger(...data.payload.map((s) => JSON.parse(s)), this.formatMessage(data));
                };
            }
        }
        return replayLogger;
    }
    formatMessage(data) {
        if (data.trace.length === 0) {
            return '';
        }
        const stackPrefix = '\n\tat ';
        let result = stackPrefix;
        result += data.trace.join(stackPrefix);
        return result;
    }
}
const getReplayConsolePlugin = (options) => {
    const replayLogger = (options === null || options === void 0 ? void 0 : options.replayLogger) || new LogReplayPlugin(options).getConsoleLogger();
    return {
        handler(event, _isSync, context) {
            let logData = null;
            if (event.type === _types_dist_types_js__WEBPACK_IMPORTED_MODULE_1__["EventType"].IncrementalSnapshot &&
                event.data.source === _types_dist_types_js__WEBPACK_IMPORTED_MODULE_1__["IncrementalSource"].Log) {
                logData = event.data;
            }
            else if (event.type === _types_dist_types_js__WEBPACK_IMPORTED_MODULE_1__["EventType"].Plugin &&
                event.data.plugin === _record_index_js__WEBPACK_IMPORTED_MODULE_0__["PLUGIN_NAME"]) {
                logData = event.data.payload;
            }
            if (logData) {
                try {
                    if (typeof replayLogger[logData.level] === 'function') {
                        replayLogger[logData.level](logData);
                    }
                }
                catch (error) {
                    if (context.replayer.config.showWarning) {
                        console.warn(error);
                    }
                }
            }
        },
    };
};




/***/ }),

/***/ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/record/cross-origin-iframe-mirror.js":
/*!****************************************************************************************************************************************************************************!*\
  !*** /Users/crusher/Desktop/experiment/test-v2/node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/record/cross-origin-iframe-mirror.js ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CrossOriginIframeMirror; });
class CrossOriginIframeMirror {
    constructor(generateIdFn) {
        this.generateIdFn = generateIdFn;
        this.iframeIdToRemoteIdMap = new WeakMap();
        this.iframeRemoteIdToIdMap = new WeakMap();
    }
    getId(iframe, remoteId, idToRemoteMap, remoteToIdMap) {
        const idToRemoteIdMap = idToRemoteMap || this.getIdToRemoteIdMap(iframe);
        const remoteIdToIdMap = remoteToIdMap || this.getRemoteIdToIdMap(iframe);
        let id = idToRemoteIdMap.get(remoteId);
        if (!id) {
            id = this.generateIdFn();
            idToRemoteIdMap.set(remoteId, id);
            remoteIdToIdMap.set(id, remoteId);
        }
        return id;
    }
    getIds(iframe, remoteId) {
        const idToRemoteIdMap = this.getIdToRemoteIdMap(iframe);
        const remoteIdToIdMap = this.getRemoteIdToIdMap(iframe);
        return remoteId.map((id) => this.getId(iframe, id, idToRemoteIdMap, remoteIdToIdMap));
    }
    getRemoteId(iframe, id, map) {
        const remoteIdToIdMap = map || this.getRemoteIdToIdMap(iframe);
        if (typeof id !== 'number')
            return id;
        const remoteId = remoteIdToIdMap.get(id);
        if (!remoteId)
            return -1;
        return remoteId;
    }
    getRemoteIds(iframe, ids) {
        const remoteIdToIdMap = this.getRemoteIdToIdMap(iframe);
        return ids.map((id) => this.getRemoteId(iframe, id, remoteIdToIdMap));
    }
    reset(iframe) {
        if (!iframe) {
            this.iframeIdToRemoteIdMap = new WeakMap();
            this.iframeRemoteIdToIdMap = new WeakMap();
            return;
        }
        this.iframeIdToRemoteIdMap.delete(iframe);
        this.iframeRemoteIdToIdMap.delete(iframe);
    }
    getIdToRemoteIdMap(iframe) {
        let idToRemoteIdMap = this.iframeIdToRemoteIdMap.get(iframe);
        if (!idToRemoteIdMap) {
            idToRemoteIdMap = new Map();
            this.iframeIdToRemoteIdMap.set(iframe, idToRemoteIdMap);
        }
        return idToRemoteIdMap;
    }
    getRemoteIdToIdMap(iframe) {
        let remoteIdToIdMap = this.iframeRemoteIdToIdMap.get(iframe);
        if (!remoteIdToIdMap) {
            remoteIdToIdMap = new Map();
            this.iframeRemoteIdToIdMap.set(iframe, remoteIdToIdMap);
        }
        return remoteIdToIdMap;
    }
}




/***/ }),

/***/ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/record/iframe-manager.js":
/*!****************************************************************************************************************************************************************!*\
  !*** /Users/crusher/Desktop/experiment/test-v2/node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/record/iframe-manager.js ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: IframeManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IframeManager", function() { return IframeManager; });
/* harmony import */ var _rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../rrweb-snapshot/es/rrweb-snapshot.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb-snapshot/es/rrweb-snapshot.js");
/* harmony import */ var _cross_origin_iframe_mirror_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cross-origin-iframe-mirror.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/record/cross-origin-iframe-mirror.js");
/* harmony import */ var _types_dist_types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../types/dist/types.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/types/dist/types.js");




class IframeManager {
    constructor(options) {
        this.iframes = new WeakMap();
        this.crossOriginIframeMap = new WeakMap();
        this.crossOriginIframeMirror = new _cross_origin_iframe_mirror_js__WEBPACK_IMPORTED_MODULE_1__["default"](_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_0__["genId"]);
        this.mutationCb = options.mutationCb;
        this.wrappedEmit = options.wrappedEmit;
        this.stylesheetManager = options.stylesheetManager;
        this.recordCrossOriginIframes = options.recordCrossOriginIframes;
        this.crossOriginIframeStyleMirror = new _cross_origin_iframe_mirror_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror));
        this.mirror = options.mirror;
        if (this.recordCrossOriginIframes) {
            window.addEventListener('message', this.handleMessage.bind(this));
        }
    }
    addIframe(iframeEl) {
        this.iframes.set(iframeEl, true);
        if (iframeEl.contentWindow)
            this.crossOriginIframeMap.set(iframeEl.contentWindow, iframeEl);
    }
    addLoadListener(cb) {
        this.loadListener = cb;
    }
    attachIframe(iframeEl, childSn) {
        var _a;
        this.mutationCb({
            adds: [
                {
                    parentId: this.mirror.getId(iframeEl),
                    nextId: null,
                    node: childSn,
                },
            ],
            removes: [],
            texts: [],
            attributes: [],
            isAttachIframe: true,
        });
        (_a = this.loadListener) === null || _a === void 0 ? void 0 : _a.call(this, iframeEl);
        if (iframeEl.contentDocument &&
            iframeEl.contentDocument.adoptedStyleSheets &&
            iframeEl.contentDocument.adoptedStyleSheets.length > 0)
            this.stylesheetManager.adoptStyleSheets(iframeEl.contentDocument.adoptedStyleSheets, this.mirror.getId(iframeEl.contentDocument));
    }
    handleMessage(message) {
        if (message.data.type === 'rrweb') {
            const iframeSourceWindow = message.source;
            if (!iframeSourceWindow)
                return;
            const iframeEl = this.crossOriginIframeMap.get(message.source);
            if (!iframeEl)
                return;
            const transformedEvent = this.transformCrossOriginEvent(iframeEl, message.data.event);
            if (transformedEvent)
                this.wrappedEmit(transformedEvent, message.data.isCheckout);
        }
    }
    transformCrossOriginEvent(iframeEl, e) {
        var _a;
        switch (e.type) {
            case _types_dist_types_js__WEBPACK_IMPORTED_MODULE_2__["EventType"].FullSnapshot: {
                this.crossOriginIframeMirror.reset(iframeEl);
                this.crossOriginIframeStyleMirror.reset(iframeEl);
                this.replaceIdOnNode(e.data.node, iframeEl);
                return {
                    timestamp: e.timestamp,
                    type: _types_dist_types_js__WEBPACK_IMPORTED_MODULE_2__["EventType"].IncrementalSnapshot,
                    data: {
                        source: _types_dist_types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].Mutation,
                        adds: [
                            {
                                parentId: this.mirror.getId(iframeEl),
                                nextId: null,
                                node: e.data.node,
                            },
                        ],
                        removes: [],
                        texts: [],
                        attributes: [],
                        isAttachIframe: true,
                    },
                };
            }
            case _types_dist_types_js__WEBPACK_IMPORTED_MODULE_2__["EventType"].Meta:
            case _types_dist_types_js__WEBPACK_IMPORTED_MODULE_2__["EventType"].Load:
            case _types_dist_types_js__WEBPACK_IMPORTED_MODULE_2__["EventType"].DomContentLoaded: {
                return false;
            }
            case _types_dist_types_js__WEBPACK_IMPORTED_MODULE_2__["EventType"].Plugin: {
                return e;
            }
            case _types_dist_types_js__WEBPACK_IMPORTED_MODULE_2__["EventType"].Custom: {
                this.replaceIds(e.data.payload, iframeEl, ['id', 'parentId', 'previousId', 'nextId']);
                return e;
            }
            case _types_dist_types_js__WEBPACK_IMPORTED_MODULE_2__["EventType"].IncrementalSnapshot: {
                switch (e.data.source) {
                    case _types_dist_types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].Mutation: {
                        e.data.adds.forEach((n) => {
                            this.replaceIds(n, iframeEl, [
                                'parentId',
                                'nextId',
                                'previousId',
                            ]);
                            this.replaceIdOnNode(n.node, iframeEl);
                        });
                        e.data.removes.forEach((n) => {
                            this.replaceIds(n, iframeEl, ['parentId', 'id']);
                        });
                        e.data.attributes.forEach((n) => {
                            this.replaceIds(n, iframeEl, ['id']);
                        });
                        e.data.texts.forEach((n) => {
                            this.replaceIds(n, iframeEl, ['id']);
                        });
                        return e;
                    }
                    case _types_dist_types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].Drag:
                    case _types_dist_types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].TouchMove:
                    case _types_dist_types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].MouseMove: {
                        e.data.positions.forEach((p) => {
                            this.replaceIds(p, iframeEl, ['id']);
                        });
                        return e;
                    }
                    case _types_dist_types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].ViewportResize: {
                        return false;
                    }
                    case _types_dist_types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].MediaInteraction:
                    case _types_dist_types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].MouseInteraction:
                    case _types_dist_types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].Scroll:
                    case _types_dist_types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].CanvasMutation:
                    case _types_dist_types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].Input: {
                        this.replaceIds(e.data, iframeEl, ['id']);
                        return e;
                    }
                    case _types_dist_types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].StyleSheetRule:
                    case _types_dist_types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].StyleDeclaration: {
                        this.replaceIds(e.data, iframeEl, ['id']);
                        this.replaceStyleIds(e.data, iframeEl, ['styleId']);
                        return e;
                    }
                    case _types_dist_types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].Font: {
                        return e;
                    }
                    case _types_dist_types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].Selection: {
                        e.data.ranges.forEach((range) => {
                            this.replaceIds(range, iframeEl, ['start', 'end']);
                        });
                        return e;
                    }
                    case _types_dist_types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].AdoptedStyleSheet: {
                        this.replaceIds(e.data, iframeEl, ['id']);
                        this.replaceStyleIds(e.data, iframeEl, ['styleIds']);
                        (_a = e.data.styles) === null || _a === void 0 ? void 0 : _a.forEach((style) => {
                            this.replaceStyleIds(style, iframeEl, ['styleId']);
                        });
                        return e;
                    }
                }
            }
        }
    }
    replace(iframeMirror, obj, iframeEl, keys) {
        for (const key of keys) {
            if (!Array.isArray(obj[key]) && typeof obj[key] !== 'number')
                continue;
            if (Array.isArray(obj[key])) {
                obj[key] = iframeMirror.getIds(iframeEl, obj[key]);
            }
            else {
                obj[key] = iframeMirror.getId(iframeEl, obj[key]);
            }
        }
        return obj;
    }
    replaceIds(obj, iframeEl, keys) {
        return this.replace(this.crossOriginIframeMirror, obj, iframeEl, keys);
    }
    replaceStyleIds(obj, iframeEl, keys) {
        return this.replace(this.crossOriginIframeStyleMirror, obj, iframeEl, keys);
    }
    replaceIdOnNode(node, iframeEl) {
        this.replaceIds(node, iframeEl, ['id']);
        if ('childNodes' in node) {
            node.childNodes.forEach((child) => {
                this.replaceIdOnNode(child, iframeEl);
            });
        }
    }
}




/***/ }),

/***/ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/record/index.js":
/*!*******************************************************************************************************************************************************!*\
  !*** /Users/crusher/Desktop/experiment/test-v2/node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/record/index.js ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return record; });
/* harmony import */ var _rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../rrweb-snapshot/es/rrweb-snapshot.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb-snapshot/es/rrweb-snapshot.js");
/* harmony import */ var _observer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observer.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observer.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/utils.js");
/* harmony import */ var _types_dist_types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../types/dist/types.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/types/dist/types.js");
/* harmony import */ var _iframe_manager_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./iframe-manager.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/record/iframe-manager.js");
/* harmony import */ var _shadow_dom_manager_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shadow-dom-manager.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/record/shadow-dom-manager.js");
/* harmony import */ var _observers_canvas_canvas_manager_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./observers/canvas/canvas-manager.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observers/canvas/canvas-manager.js");
/* harmony import */ var _stylesheet_manager_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stylesheet-manager.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/record/stylesheet-manager.js");









function wrapEvent(e) {
    return Object.assign(Object.assign({}, e), { timestamp: Date.now() });
}
let wrappedEmit;
let takeFullSnapshot;
let canvasManager;
let recording = false;
const mirror = Object(_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_0__["createMirror"])();
function record(options = {}) {
    const { emit, checkoutEveryNms, checkoutEveryNth, blockClass = 'rr-block', blockSelector = null, ignoreClass = 'rr-ignore', maskTextClass = 'rr-mask', maskTextSelector = null, inlineStylesheet = true, maskAllInputs, maskInputOptions: _maskInputOptions, slimDOMOptions: _slimDOMOptions, maskInputFn, maskTextFn, hooks, packFn, sampling = {}, dataURLOptions = {}, mousemoveWait, recordCanvas = false, recordCrossOriginIframes = false, userTriggeredOnInput = false, collectFonts = false, inlineImages = false, plugins, keepIframeSrcFn = () => false, ignoreCSSAttributes = new Set([]), } = options;
    const inEmittingFrame = recordCrossOriginIframes
        ? window.parent === window
        : true;
    let passEmitsToParent = false;
    if (!inEmittingFrame) {
        try {
            window.parent.document;
            passEmitsToParent = false;
        }
        catch (e) {
            passEmitsToParent = true;
        }
    }
    if (inEmittingFrame && !emit) {
        throw new Error('emit function is required');
    }
    if (mousemoveWait !== undefined && sampling.mousemove === undefined) {
        sampling.mousemove = mousemoveWait;
    }
    mirror.reset();
    const maskInputOptions = maskAllInputs === true
        ? {
            color: true,
            date: true,
            'datetime-local': true,
            email: true,
            month: true,
            number: true,
            range: true,
            search: true,
            tel: true,
            text: true,
            time: true,
            url: true,
            week: true,
            textarea: true,
            select: true,
            password: true,
        }
        : _maskInputOptions !== undefined
            ? _maskInputOptions
            : { password: true };
    const slimDOMOptions = _slimDOMOptions === true || _slimDOMOptions === 'all'
        ? {
            script: true,
            comment: true,
            headFavicon: true,
            headWhitespace: true,
            headMetaSocial: true,
            headMetaRobots: true,
            headMetaHttpEquiv: true,
            headMetaVerification: true,
            headMetaAuthorship: _slimDOMOptions === 'all',
            headMetaDescKeywords: _slimDOMOptions === 'all',
        }
        : _slimDOMOptions
            ? _slimDOMOptions
            : {};
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["polyfill"])();
    let lastFullSnapshotEvent;
    let incrementalSnapshotCount = 0;
    const eventProcessor = (e) => {
        for (const plugin of plugins || []) {
            if (plugin.eventProcessor) {
                e = plugin.eventProcessor(e);
            }
        }
        if (packFn) {
            e = packFn(e);
        }
        return e;
    };
    wrappedEmit = (e, isCheckout) => {
        var _a;
        if (((_a = _observer_js__WEBPACK_IMPORTED_MODULE_1__["mutationBuffers"][0]) === null || _a === void 0 ? void 0 : _a.isFrozen()) &&
            e.type !== _types_dist_types_js__WEBPACK_IMPORTED_MODULE_3__["EventType"].FullSnapshot &&
            !(e.type === _types_dist_types_js__WEBPACK_IMPORTED_MODULE_3__["EventType"].IncrementalSnapshot &&
                e.data.source === _types_dist_types_js__WEBPACK_IMPORTED_MODULE_3__["IncrementalSource"].Mutation)) {
            _observer_js__WEBPACK_IMPORTED_MODULE_1__["mutationBuffers"].forEach((buf) => buf.unfreeze());
        }
        if (inEmittingFrame) {
            emit === null || emit === void 0 ? void 0 : emit(eventProcessor(e), isCheckout);
        }
        else if (passEmitsToParent) {
            const message = {
                type: 'rrweb',
                event: eventProcessor(e),
                isCheckout,
            };
            window.parent.postMessage(message, '*');
        }
        if (e.type === _types_dist_types_js__WEBPACK_IMPORTED_MODULE_3__["EventType"].FullSnapshot) {
            lastFullSnapshotEvent = e;
            incrementalSnapshotCount = 0;
        }
        else if (e.type === _types_dist_types_js__WEBPACK_IMPORTED_MODULE_3__["EventType"].IncrementalSnapshot) {
            if (e.data.source === _types_dist_types_js__WEBPACK_IMPORTED_MODULE_3__["IncrementalSource"].Mutation &&
                e.data.isAttachIframe) {
                return;
            }
            incrementalSnapshotCount++;
            const exceedCount = checkoutEveryNth && incrementalSnapshotCount >= checkoutEveryNth;
            const exceedTime = checkoutEveryNms &&
                e.timestamp - lastFullSnapshotEvent.timestamp > checkoutEveryNms;
            if (exceedCount || exceedTime) {
                takeFullSnapshot(true);
            }
        }
    };
    const wrappedMutationEmit = (m) => {
        wrappedEmit(wrapEvent({
            type: _types_dist_types_js__WEBPACK_IMPORTED_MODULE_3__["EventType"].IncrementalSnapshot,
            data: Object.assign({ source: _types_dist_types_js__WEBPACK_IMPORTED_MODULE_3__["IncrementalSource"].Mutation }, m),
        }));
    };
    const wrappedScrollEmit = (p) => wrappedEmit(wrapEvent({
        type: _types_dist_types_js__WEBPACK_IMPORTED_MODULE_3__["EventType"].IncrementalSnapshot,
        data: Object.assign({ source: _types_dist_types_js__WEBPACK_IMPORTED_MODULE_3__["IncrementalSource"].Scroll }, p),
    }));
    const wrappedCanvasMutationEmit = (p) => wrappedEmit(wrapEvent({
        type: _types_dist_types_js__WEBPACK_IMPORTED_MODULE_3__["EventType"].IncrementalSnapshot,
        data: Object.assign({ source: _types_dist_types_js__WEBPACK_IMPORTED_MODULE_3__["IncrementalSource"].CanvasMutation }, p),
    }));
    const wrappedAdoptedStyleSheetEmit = (a) => wrappedEmit(wrapEvent({
        type: _types_dist_types_js__WEBPACK_IMPORTED_MODULE_3__["EventType"].IncrementalSnapshot,
        data: Object.assign({ source: _types_dist_types_js__WEBPACK_IMPORTED_MODULE_3__["IncrementalSource"].AdoptedStyleSheet }, a),
    }));
    const stylesheetManager = new _stylesheet_manager_js__WEBPACK_IMPORTED_MODULE_7__["StylesheetManager"]({
        mutationCb: wrappedMutationEmit,
        adoptedStyleSheetCb: wrappedAdoptedStyleSheetEmit,
    });
    const iframeManager = new _iframe_manager_js__WEBPACK_IMPORTED_MODULE_4__["IframeManager"]({
        mirror,
        mutationCb: wrappedMutationEmit,
        stylesheetManager: stylesheetManager,
        recordCrossOriginIframes,
        wrappedEmit,
    });
    for (const plugin of plugins || []) {
        if (plugin.getMirror)
            plugin.getMirror({
                nodeMirror: mirror,
                crossOriginIframeMirror: iframeManager.crossOriginIframeMirror,
                crossOriginIframeStyleMirror: iframeManager.crossOriginIframeStyleMirror,
            });
    }
    canvasManager = new _observers_canvas_canvas_manager_js__WEBPACK_IMPORTED_MODULE_6__["CanvasManager"]({
        recordCanvas,
        mutationCb: wrappedCanvasMutationEmit,
        win: window,
        blockClass,
        blockSelector,
        mirror,
        sampling: sampling.canvas,
        dataURLOptions,
    });
    const shadowDomManager = new _shadow_dom_manager_js__WEBPACK_IMPORTED_MODULE_5__["ShadowDomManager"]({
        mutationCb: wrappedMutationEmit,
        scrollCb: wrappedScrollEmit,
        bypassOptions: {
            blockClass,
            blockSelector,
            maskTextClass,
            maskTextSelector,
            inlineStylesheet,
            maskInputOptions,
            dataURLOptions,
            maskTextFn,
            maskInputFn,
            recordCanvas,
            inlineImages,
            sampling,
            slimDOMOptions,
            iframeManager,
            stylesheetManager,
            canvasManager,
            keepIframeSrcFn,
        },
        mirror,
    });
    takeFullSnapshot = (isCheckout = false) => {
        var _a, _b, _c, _d, _e, _f;
        wrappedEmit(wrapEvent({
            type: _types_dist_types_js__WEBPACK_IMPORTED_MODULE_3__["EventType"].Meta,
            data: {
                href: window.location.href,
                width: Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["getWindowWidth"])(),
                height: Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["getWindowHeight"])(),
            },
        }), isCheckout);
        stylesheetManager.reset();
        _observer_js__WEBPACK_IMPORTED_MODULE_1__["mutationBuffers"].forEach((buf) => buf.lock());
        const node = Object(_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_0__["snapshot"])(document, {
            mirror,
            blockClass,
            blockSelector,
            maskTextClass,
            maskTextSelector,
            inlineStylesheet,
            maskAllInputs: maskInputOptions,
            maskTextFn,
            slimDOM: slimDOMOptions,
            dataURLOptions,
            recordCanvas,
            inlineImages,
            onSerialize: (n) => {
                if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isSerializedIframe"])(n, mirror)) {
                    iframeManager.addIframe(n);
                }
                if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isSerializedStylesheet"])(n, mirror)) {
                    stylesheetManager.trackLinkElement(n);
                }
                if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["hasShadowRoot"])(n)) {
                    shadowDomManager.addShadowRoot(n.shadowRoot, document);
                }
            },
            onIframeLoad: (iframe, childSn) => {
                iframeManager.attachIframe(iframe, childSn);
                shadowDomManager.observeAttachShadow(iframe);
            },
            onStylesheetLoad: (linkEl, childSn) => {
                stylesheetManager.attachLinkElement(linkEl, childSn);
            },
            keepIframeSrcFn,
        });
        if (!node) {
            return console.warn('Failed to snapshot the document');
        }
        wrappedEmit(wrapEvent({
            type: _types_dist_types_js__WEBPACK_IMPORTED_MODULE_3__["EventType"].FullSnapshot,
            data: {
                node,
                initialOffset: {
                    left: window.pageXOffset !== undefined
                        ? window.pageXOffset
                        : (document === null || document === void 0 ? void 0 : document.documentElement.scrollLeft) ||
                            ((_b = (_a = document === null || document === void 0 ? void 0 : document.body) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.scrollLeft) ||
                            ((_c = document === null || document === void 0 ? void 0 : document.body) === null || _c === void 0 ? void 0 : _c.scrollLeft) ||
                            0,
                    top: window.pageYOffset !== undefined
                        ? window.pageYOffset
                        : (document === null || document === void 0 ? void 0 : document.documentElement.scrollTop) ||
                            ((_e = (_d = document === null || document === void 0 ? void 0 : document.body) === null || _d === void 0 ? void 0 : _d.parentElement) === null || _e === void 0 ? void 0 : _e.scrollTop) ||
                            ((_f = document === null || document === void 0 ? void 0 : document.body) === null || _f === void 0 ? void 0 : _f.scrollTop) ||
                            0,
                },
            },
        }));
        _observer_js__WEBPACK_IMPORTED_MODULE_1__["mutationBuffers"].forEach((buf) => buf.unlock());
        if (document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0)
            stylesheetManager.adoptStyleSheets(document.adoptedStyleSheets, mirror.getId(document));
    };
    try {
        const handlers = [];
        handlers.push(Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["on"])('DOMContentLoaded', () => {
            wrappedEmit(wrapEvent({
                type: _types_dist_types_js__WEBPACK_IMPORTED_MODULE_3__["EventType"].DomContentLoaded,
                data: {},
            }));
        }));
        const observe = (doc) => {
            var _a;
            return Object(_observer_js__WEBPACK_IMPORTED_MODULE_1__["initObservers"])({
                mutationCb: wrappedMutationEmit,
                mousemoveCb: (positions, source) => wrappedEmit(wrapEvent({
                    type: _types_dist_types_js__WEBPACK_IMPORTED_MODULE_3__["EventType"].IncrementalSnapshot,
                    data: {
                        source,
                        positions,
                    },
                })),
                mouseInteractionCb: (d) => wrappedEmit(wrapEvent({
                    type: _types_dist_types_js__WEBPACK_IMPORTED_MODULE_3__["EventType"].IncrementalSnapshot,
                    data: Object.assign({ source: _types_dist_types_js__WEBPACK_IMPORTED_MODULE_3__["IncrementalSource"].MouseInteraction }, d),
                })),
                scrollCb: wrappedScrollEmit,
                viewportResizeCb: (d) => wrappedEmit(wrapEvent({
                    type: _types_dist_types_js__WEBPACK_IMPORTED_MODULE_3__["EventType"].IncrementalSnapshot,
                    data: Object.assign({ source: _types_dist_types_js__WEBPACK_IMPORTED_MODULE_3__["IncrementalSource"].ViewportResize }, d),
                })),
                inputCb: (v) => wrappedEmit(wrapEvent({
                    type: _types_dist_types_js__WEBPACK_IMPORTED_MODULE_3__["EventType"].IncrementalSnapshot,
                    data: Object.assign({ source: _types_dist_types_js__WEBPACK_IMPORTED_MODULE_3__["IncrementalSource"].Input }, v),
                })),
                mediaInteractionCb: (p) => wrappedEmit(wrapEvent({
                    type: _types_dist_types_js__WEBPACK_IMPORTED_MODULE_3__["EventType"].IncrementalSnapshot,
                    data: Object.assign({ source: _types_dist_types_js__WEBPACK_IMPORTED_MODULE_3__["IncrementalSource"].MediaInteraction }, p),
                })),
                styleSheetRuleCb: (r) => wrappedEmit(wrapEvent({
                    type: _types_dist_types_js__WEBPACK_IMPORTED_MODULE_3__["EventType"].IncrementalSnapshot,
                    data: Object.assign({ source: _types_dist_types_js__WEBPACK_IMPORTED_MODULE_3__["IncrementalSource"].StyleSheetRule }, r),
                })),
                styleDeclarationCb: (r) => wrappedEmit(wrapEvent({
                    type: _types_dist_types_js__WEBPACK_IMPORTED_MODULE_3__["EventType"].IncrementalSnapshot,
                    data: Object.assign({ source: _types_dist_types_js__WEBPACK_IMPORTED_MODULE_3__["IncrementalSource"].StyleDeclaration }, r),
                })),
                canvasMutationCb: wrappedCanvasMutationEmit,
                fontCb: (p) => wrappedEmit(wrapEvent({
                    type: _types_dist_types_js__WEBPACK_IMPORTED_MODULE_3__["EventType"].IncrementalSnapshot,
                    data: Object.assign({ source: _types_dist_types_js__WEBPACK_IMPORTED_MODULE_3__["IncrementalSource"].Font }, p),
                })),
                selectionCb: (p) => {
                    wrappedEmit(wrapEvent({
                        type: _types_dist_types_js__WEBPACK_IMPORTED_MODULE_3__["EventType"].IncrementalSnapshot,
                        data: Object.assign({ source: _types_dist_types_js__WEBPACK_IMPORTED_MODULE_3__["IncrementalSource"].Selection }, p),
                    }));
                },
                blockClass,
                ignoreClass,
                maskTextClass,
                maskTextSelector,
                maskInputOptions,
                inlineStylesheet,
                sampling,
                recordCanvas,
                inlineImages,
                userTriggeredOnInput,
                collectFonts,
                doc,
                maskInputFn,
                maskTextFn,
                keepIframeSrcFn,
                blockSelector,
                slimDOMOptions,
                dataURLOptions,
                mirror,
                iframeManager,
                stylesheetManager,
                shadowDomManager,
                canvasManager,
                ignoreCSSAttributes,
                plugins: ((_a = plugins === null || plugins === void 0 ? void 0 : plugins.filter((p) => p.observer)) === null || _a === void 0 ? void 0 : _a.map((p) => ({
                    observer: p.observer,
                    options: p.options,
                    callback: (payload) => wrappedEmit(wrapEvent({
                        type: _types_dist_types_js__WEBPACK_IMPORTED_MODULE_3__["EventType"].Plugin,
                        data: {
                            plugin: p.name,
                            payload,
                        },
                    })),
                }))) || [],
            }, hooks);
        };
        iframeManager.addLoadListener((iframeEl) => {
            handlers.push(observe(iframeEl.contentDocument));
        });
        const init = () => {
            takeFullSnapshot();
            handlers.push(observe(document));
            recording = true;
        };
        if (document.readyState === 'interactive' ||
            document.readyState === 'complete') {
            init();
        }
        else {
            handlers.push(Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["on"])('load', () => {
                wrappedEmit(wrapEvent({
                    type: _types_dist_types_js__WEBPACK_IMPORTED_MODULE_3__["EventType"].Load,
                    data: {},
                }));
                init();
            }, window));
        }
        return () => {
            handlers.forEach((h) => h());
            recording = false;
        };
    }
    catch (error) {
        console.warn(error);
    }
}
record.addCustomEvent = (tag, payload) => {
    if (!recording) {
        throw new Error('please add custom event after start recording');
    }
    wrappedEmit(wrapEvent({
        type: _types_dist_types_js__WEBPACK_IMPORTED_MODULE_3__["EventType"].Custom,
        data: {
            tag,
            payload,
        },
    }));
};
record.freezePage = () => {
    _observer_js__WEBPACK_IMPORTED_MODULE_1__["mutationBuffers"].forEach((buf) => buf.freeze());
};
record.takeFullSnapshot = (isCheckout) => {
    if (!recording) {
        throw new Error('please take full snapshot after start recording');
    }
    takeFullSnapshot(isCheckout);
};
record.mirror = mirror;




/***/ }),

/***/ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/record/mutation.js":
/*!**********************************************************************************************************************************************************!*\
  !*** /Users/crusher/Desktop/experiment/test-v2/node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/record/mutation.js ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MutationBuffer; });
/* harmony import */ var _rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../rrweb-snapshot/es/rrweb-snapshot.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb-snapshot/es/rrweb-snapshot.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/utils.js");



function isNodeInLinkedList(n) {
    return '__ln' in n;
}
class DoubleLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }
    get(position) {
        if (position >= this.length) {
            throw new Error('Position outside of list range');
        }
        let current = this.head;
        for (let index = 0; index < position; index++) {
            current = (current === null || current === void 0 ? void 0 : current.next) || null;
        }
        return current;
    }
    addNode(n) {
        const node = {
            value: n,
            previous: null,
            next: null,
        };
        n.__ln = node;
        if (n.previousSibling && isNodeInLinkedList(n.previousSibling)) {
            const current = n.previousSibling.__ln.next;
            node.next = current;
            node.previous = n.previousSibling.__ln;
            n.previousSibling.__ln.next = node;
            if (current) {
                current.previous = node;
            }
        }
        else if (n.nextSibling &&
            isNodeInLinkedList(n.nextSibling) &&
            n.nextSibling.__ln.previous) {
            const current = n.nextSibling.__ln.previous;
            node.previous = current;
            node.next = n.nextSibling.__ln;
            n.nextSibling.__ln.previous = node;
            if (current) {
                current.next = node;
            }
        }
        else {
            if (this.head) {
                this.head.previous = node;
            }
            node.next = this.head;
            this.head = node;
        }
        this.length++;
    }
    removeNode(n) {
        const current = n.__ln;
        if (!this.head) {
            return;
        }
        if (!current.previous) {
            this.head = current.next;
            if (this.head) {
                this.head.previous = null;
            }
        }
        else {
            current.previous.next = current.next;
            if (current.next) {
                current.next.previous = current.previous;
            }
        }
        if (n.__ln) {
            delete n.__ln;
        }
        this.length--;
    }
}
const moveKey = (id, parentId) => `${id}@${parentId}`;
class MutationBuffer {
    constructor() {
        this.frozen = false;
        this.locked = false;
        this.texts = [];
        this.attributes = [];
        this.removes = [];
        this.mapRemoves = [];
        this.movedMap = {};
        this.addedSet = new Set();
        this.movedSet = new Set();
        this.droppedSet = new Set();
        this.processMutations = (mutations) => {
            mutations.forEach(this.processMutation);
            this.emit();
        };
        this.emit = () => {
            if (this.frozen || this.locked) {
                return;
            }
            const adds = [];
            const addList = new DoubleLinkedList();
            const getNextId = (n) => {
                let ns = n;
                let nextId = _rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_0__["IGNORED_NODE"];
                while (nextId === _rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_0__["IGNORED_NODE"]) {
                    ns = ns && ns.nextSibling;
                    nextId = ns && this.mirror.getId(ns);
                }
                return nextId;
            };
            const pushAdd = (n) => {
                var _a, _b, _c, _d;
                let shadowHost = null;
                if (((_b = (_a = n.getRootNode) === null || _a === void 0 ? void 0 : _a.call(n)) === null || _b === void 0 ? void 0 : _b.nodeType) === Node.DOCUMENT_FRAGMENT_NODE &&
                    n.getRootNode().host)
                    shadowHost = n.getRootNode().host;
                let rootShadowHost = shadowHost;
                while (((_d = (_c = rootShadowHost === null || rootShadowHost === void 0 ? void 0 : rootShadowHost.getRootNode) === null || _c === void 0 ? void 0 : _c.call(rootShadowHost)) === null || _d === void 0 ? void 0 : _d.nodeType) ===
                    Node.DOCUMENT_FRAGMENT_NODE &&
                    rootShadowHost.getRootNode().host)
                    rootShadowHost = rootShadowHost.getRootNode().host;
                const notInDoc = !this.doc.contains(n) &&
                    (!rootShadowHost || !this.doc.contains(rootShadowHost));
                if (!n.parentNode || notInDoc) {
                    return;
                }
                const parentId = Object(_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_0__["isShadowRoot"])(n.parentNode)
                    ? this.mirror.getId(shadowHost)
                    : this.mirror.getId(n.parentNode);
                const nextId = getNextId(n);
                if (parentId === -1 || nextId === -1) {
                    return addList.addNode(n);
                }
                const sn = Object(_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_0__["serializeNodeWithId"])(n, {
                    doc: this.doc,
                    mirror: this.mirror,
                    blockClass: this.blockClass,
                    blockSelector: this.blockSelector,
                    maskTextClass: this.maskTextClass,
                    maskTextSelector: this.maskTextSelector,
                    skipChild: true,
                    newlyAddedElement: true,
                    inlineStylesheet: this.inlineStylesheet,
                    maskInputOptions: this.maskInputOptions,
                    maskTextFn: this.maskTextFn,
                    maskInputFn: this.maskInputFn,
                    slimDOMOptions: this.slimDOMOptions,
                    dataURLOptions: this.dataURLOptions,
                    recordCanvas: this.recordCanvas,
                    inlineImages: this.inlineImages,
                    onSerialize: (currentN) => {
                        if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isSerializedIframe"])(currentN, this.mirror)) {
                            this.iframeManager.addIframe(currentN);
                        }
                        if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isSerializedStylesheet"])(currentN, this.mirror)) {
                            this.stylesheetManager.trackLinkElement(currentN);
                        }
                        if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["hasShadowRoot"])(n)) {
                            this.shadowDomManager.addShadowRoot(n.shadowRoot, this.doc);
                        }
                    },
                    onIframeLoad: (iframe, childSn) => {
                        this.iframeManager.attachIframe(iframe, childSn);
                        this.shadowDomManager.observeAttachShadow(iframe);
                    },
                    onStylesheetLoad: (link, childSn) => {
                        this.stylesheetManager.attachLinkElement(link, childSn);
                    },
                });
                if (sn) {
                    adds.push({
                        parentId,
                        nextId,
                        node: sn,
                    });
                }
            };
            while (this.mapRemoves.length) {
                this.mirror.removeNodeFromMap(this.mapRemoves.shift());
            }
            for (const n of Array.from(this.movedSet.values())) {
                if (isParentRemoved(this.removes, n, this.mirror) &&
                    !this.movedSet.has(n.parentNode)) {
                    continue;
                }
                pushAdd(n);
            }
            for (const n of Array.from(this.addedSet.values())) {
                if (!isAncestorInSet(this.droppedSet, n) &&
                    !isParentRemoved(this.removes, n, this.mirror)) {
                    pushAdd(n);
                }
                else if (isAncestorInSet(this.movedSet, n)) {
                    pushAdd(n);
                }
                else {
                    this.droppedSet.add(n);
                }
            }
            let candidate = null;
            while (addList.length) {
                let node = null;
                if (candidate) {
                    const parentId = this.mirror.getId(candidate.value.parentNode);
                    const nextId = getNextId(candidate.value);
                    if (parentId !== -1 && nextId !== -1) {
                        node = candidate;
                    }
                }
                if (!node) {
                    for (let index = addList.length - 1; index >= 0; index--) {
                        const _node = addList.get(index);
                        if (_node) {
                            const parentId = this.mirror.getId(_node.value.parentNode);
                            const nextId = getNextId(_node.value);
                            if (nextId === -1)
                                continue;
                            else if (parentId !== -1) {
                                node = _node;
                                break;
                            }
                            else {
                                const unhandledNode = _node.value;
                                if (unhandledNode.parentNode &&
                                    unhandledNode.parentNode.nodeType ===
                                        Node.DOCUMENT_FRAGMENT_NODE) {
                                    const shadowHost = unhandledNode.parentNode
                                        .host;
                                    const parentId = this.mirror.getId(shadowHost);
                                    if (parentId !== -1) {
                                        node = _node;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
                if (!node) {
                    while (addList.head) {
                        addList.removeNode(addList.head.value);
                    }
                    break;
                }
                candidate = node.previous;
                addList.removeNode(node.value);
                pushAdd(node.value);
            }
            const payload = {
                texts: this.texts
                    .map((text) => ({
                    id: this.mirror.getId(text.node),
                    value: text.value,
                }))
                    .filter((text) => this.mirror.has(text.id)),
                attributes: this.attributes
                    .map((attribute) => ({
                    id: this.mirror.getId(attribute.node),
                    attributes: attribute.attributes,
                }))
                    .filter((attribute) => this.mirror.has(attribute.id)),
                removes: this.removes,
                adds,
            };
            if (!payload.texts.length &&
                !payload.attributes.length &&
                !payload.removes.length &&
                !payload.adds.length) {
                return;
            }
            this.texts = [];
            this.attributes = [];
            this.removes = [];
            this.addedSet = new Set();
            this.movedSet = new Set();
            this.droppedSet = new Set();
            this.movedMap = {};
            this.mutationCb(payload);
        };
        this.processMutation = (m) => {
            if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isIgnored"])(m.target, this.mirror)) {
                return;
            }
            switch (m.type) {
                case 'characterData': {
                    const value = m.target.textContent;
                    if (!Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isBlocked"])(m.target, this.blockClass, this.blockSelector, false) &&
                        value !== m.oldValue) {
                        this.texts.push({
                            value: Object(_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_0__["needMaskingText"])(m.target, this.maskTextClass, this.maskTextSelector) && value
                                ? this.maskTextFn
                                    ? this.maskTextFn(value)
                                    : value.replace(/[\S]/g, '*')
                                : value,
                            node: m.target,
                        });
                    }
                    break;
                }
                case 'attributes': {
                    const target = m.target;
                    let value = m.target.getAttribute(m.attributeName);
                    if (m.attributeName === 'value') {
                        value = Object(_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_0__["maskInputValue"])({
                            maskInputOptions: this.maskInputOptions,
                            tagName: m.target.tagName,
                            type: m.target.getAttribute('type'),
                            value,
                            maskInputFn: this.maskInputFn,
                        });
                    }
                    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isBlocked"])(m.target, this.blockClass, this.blockSelector, false) ||
                        value === m.oldValue) {
                        return;
                    }
                    let item = this.attributes.find((a) => a.node === m.target);
                    if (target.tagName === 'IFRAME' &&
                        m.attributeName === 'src' &&
                        !this.keepIframeSrcFn(value)) {
                        if (!target.contentDocument) {
                            m.attributeName = 'rr_src';
                        }
                        else {
                            return;
                        }
                    }
                    if (!item) {
                        item = {
                            node: m.target,
                            attributes: {},
                        };
                        this.attributes.push(item);
                    }
                    if (m.attributeName === 'style') {
                        const old = this.doc.createElement('span');
                        if (m.oldValue) {
                            old.setAttribute('style', m.oldValue);
                        }
                        if (item.attributes.style === undefined ||
                            item.attributes.style === null) {
                            item.attributes.style = {};
                        }
                        const styleObj = item.attributes.style;
                        for (const pname of Array.from(target.style)) {
                            const newValue = target.style.getPropertyValue(pname);
                            const newPriority = target.style.getPropertyPriority(pname);
                            if (newValue !== old.style.getPropertyValue(pname) ||
                                newPriority !== old.style.getPropertyPriority(pname)) {
                                if (newPriority === '') {
                                    styleObj[pname] = newValue;
                                }
                                else {
                                    styleObj[pname] = [newValue, newPriority];
                                }
                            }
                        }
                        for (const pname of Array.from(old.style)) {
                            if (target.style.getPropertyValue(pname) === '') {
                                styleObj[pname] = false;
                            }
                        }
                    }
                    else {
                        item.attributes[m.attributeName] = Object(_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_0__["transformAttribute"])(this.doc, target.tagName, m.attributeName, value);
                    }
                    break;
                }
                case 'childList': {
                    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isBlocked"])(m.target, this.blockClass, this.blockSelector, true))
                        return;
                    m.addedNodes.forEach((n) => this.genAdds(n, m.target));
                    m.removedNodes.forEach((n) => {
                        const nodeId = this.mirror.getId(n);
                        const parentId = Object(_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_0__["isShadowRoot"])(m.target)
                            ? this.mirror.getId(m.target.host)
                            : this.mirror.getId(m.target);
                        if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isBlocked"])(m.target, this.blockClass, this.blockSelector, false) ||
                            Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isIgnored"])(n, this.mirror) ||
                            !Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isSerialized"])(n, this.mirror)) {
                            return;
                        }
                        if (this.addedSet.has(n)) {
                            deepDelete(this.addedSet, n);
                            this.droppedSet.add(n);
                        }
                        else if (this.addedSet.has(m.target) && nodeId === -1) ;
                        else if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isAncestorRemoved"])(m.target, this.mirror)) ;
                        else if (this.movedSet.has(n) &&
                            this.movedMap[moveKey(nodeId, parentId)]) {
                            deepDelete(this.movedSet, n);
                        }
                        else {
                            this.removes.push({
                                parentId,
                                id: nodeId,
                                isShadow: Object(_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_0__["isShadowRoot"])(m.target) && Object(_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_0__["isNativeShadowDom"])(m.target)
                                    ? true
                                    : undefined,
                            });
                        }
                        this.mapRemoves.push(n);
                    });
                    break;
                }
            }
        };
        this.genAdds = (n, target) => {
            if (this.mirror.hasNode(n)) {
                if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isIgnored"])(n, this.mirror)) {
                    return;
                }
                this.movedSet.add(n);
                let targetId = null;
                if (target && this.mirror.hasNode(target)) {
                    targetId = this.mirror.getId(target);
                }
                if (targetId && targetId !== -1) {
                    this.movedMap[moveKey(this.mirror.getId(n), targetId)] = true;
                }
            }
            else {
                this.addedSet.add(n);
                this.droppedSet.delete(n);
            }
            if (!Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isBlocked"])(n, this.blockClass, this.blockSelector, false))
                n.childNodes.forEach((childN) => this.genAdds(childN));
        };
    }
    init(options) {
        [
            'mutationCb',
            'blockClass',
            'blockSelector',
            'maskTextClass',
            'maskTextSelector',
            'inlineStylesheet',
            'maskInputOptions',
            'maskTextFn',
            'maskInputFn',
            'keepIframeSrcFn',
            'recordCanvas',
            'inlineImages',
            'slimDOMOptions',
            'dataURLOptions',
            'doc',
            'mirror',
            'iframeManager',
            'stylesheetManager',
            'shadowDomManager',
            'canvasManager',
        ].forEach((key) => {
            this[key] = options[key];
        });
    }
    freeze() {
        this.frozen = true;
        this.canvasManager.freeze();
    }
    unfreeze() {
        this.frozen = false;
        this.canvasManager.unfreeze();
        this.emit();
    }
    isFrozen() {
        return this.frozen;
    }
    lock() {
        this.locked = true;
        this.canvasManager.lock();
    }
    unlock() {
        this.locked = false;
        this.canvasManager.unlock();
        this.emit();
    }
    reset() {
        this.shadowDomManager.reset();
        this.canvasManager.reset();
    }
}
function deepDelete(addsSet, n) {
    addsSet.delete(n);
    n.childNodes.forEach((childN) => deepDelete(addsSet, childN));
}
function isParentRemoved(removes, n, mirror) {
    if (removes.length === 0)
        return false;
    return _isParentRemoved(removes, n, mirror);
}
function _isParentRemoved(removes, n, mirror) {
    const { parentNode } = n;
    if (!parentNode) {
        return false;
    }
    const parentId = mirror.getId(parentNode);
    if (removes.some((r) => r.id === parentId)) {
        return true;
    }
    return _isParentRemoved(removes, parentNode, mirror);
}
function isAncestorInSet(set, n) {
    if (set.size === 0)
        return false;
    return _isAncestorInSet(set, n);
}
function _isAncestorInSet(set, n) {
    const { parentNode } = n;
    if (!parentNode) {
        return false;
    }
    if (set.has(parentNode)) {
        return true;
    }
    return _isAncestorInSet(set, parentNode);
}




/***/ }),

/***/ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observer.js":
/*!**********************************************************************************************************************************************************!*\
  !*** /Users/crusher/Desktop/experiment/test-v2/node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observer.js ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: INPUT_TAGS, initAdoptedStyleSheetObserver, initMutationObserver, initObservers, initScrollObserver, mutationBuffers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INPUT_TAGS", function() { return INPUT_TAGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initAdoptedStyleSheetObserver", function() { return initAdoptedStyleSheetObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initMutationObserver", function() { return initMutationObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initObservers", function() { return initObservers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initScrollObserver", function() { return initScrollObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutationBuffers", function() { return mutationBuffers; });
/* harmony import */ var _rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../rrweb-snapshot/es/rrweb-snapshot.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb-snapshot/es/rrweb-snapshot.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/utils.js");
/* harmony import */ var _types_dist_types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../types/dist/types.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/types/dist/types.js");
/* harmony import */ var _mutation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mutation.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/record/mutation.js");





const mutationBuffers = [];
const isCSSGroupingRuleSupported = typeof CSSGroupingRule !== 'undefined';
const isCSSMediaRuleSupported = typeof CSSMediaRule !== 'undefined';
const isCSSSupportsRuleSupported = typeof CSSSupportsRule !== 'undefined';
const isCSSConditionRuleSupported = typeof CSSConditionRule !== 'undefined';
function getEventTarget(event) {
    try {
        if ('composedPath' in event) {
            const path = event.composedPath();
            if (path.length) {
                return path[0];
            }
        }
        else if ('path' in event && event.path.length) {
            return event.path[0];
        }
        return event.target;
    }
    catch (_a) {
        return event.target;
    }
}
function initMutationObserver(options, rootEl) {
    var _a, _b;
    const mutationBuffer = new _mutation_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
    mutationBuffers.push(mutationBuffer);
    mutationBuffer.init(options);
    let mutationObserverCtor = window.MutationObserver ||
        window.__rrMutationObserver;
    const angularZoneSymbol = (_b = (_a = window === null || window === void 0 ? void 0 : window.Zone) === null || _a === void 0 ? void 0 : _a.__symbol__) === null || _b === void 0 ? void 0 : _b.call(_a, 'MutationObserver');
    if (angularZoneSymbol &&
        window[angularZoneSymbol]) {
        mutationObserverCtor = window[angularZoneSymbol];
    }
    const observer = new mutationObserverCtor(mutationBuffer.processMutations.bind(mutationBuffer));
    observer.observe(rootEl, {
        attributes: true,
        attributeOldValue: true,
        characterData: true,
        characterDataOldValue: true,
        childList: true,
        subtree: true,
    });
    return observer;
}
function initMoveObserver({ mousemoveCb, sampling, doc, mirror, }) {
    if (sampling.mousemove === false) {
        return () => {
        };
    }
    const threshold = typeof sampling.mousemove === 'number' ? sampling.mousemove : 50;
    const callbackThreshold = typeof sampling.mousemoveCallback === 'number'
        ? sampling.mousemoveCallback
        : 500;
    let positions = [];
    let timeBaseline;
    const wrappedCb = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["throttle"])((source) => {
        const totalOffset = Date.now() - timeBaseline;
        mousemoveCb(positions.map((p) => {
            p.timeOffset -= totalOffset;
            return p;
        }), source);
        positions = [];
        timeBaseline = null;
    }, callbackThreshold);
    const updatePosition = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["throttle"])((evt) => {
        const target = getEventTarget(evt);
        const { clientX, clientY } = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isTouchEvent"])(evt)
            ? evt.changedTouches[0]
            : evt;
        if (!timeBaseline) {
            timeBaseline = Date.now();
        }
        positions.push({
            x: clientX,
            y: clientY,
            id: mirror.getId(target),
            timeOffset: Date.now() - timeBaseline,
        });
        wrappedCb(typeof DragEvent !== 'undefined' && evt instanceof DragEvent
            ? _types_dist_types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].Drag
            : evt instanceof MouseEvent
                ? _types_dist_types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].MouseMove
                : _types_dist_types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].TouchMove);
    }, threshold, {
        trailing: false,
    });
    const handlers = [
        Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["on"])('mousemove', updatePosition, doc),
        Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["on"])('touchmove', updatePosition, doc),
        Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["on"])('drag', updatePosition, doc),
    ];
    return () => {
        handlers.forEach((h) => h());
    };
}
function initMouseInteractionObserver({ mouseInteractionCb, doc, mirror, blockClass, blockSelector, sampling, }) {
    if (sampling.mouseInteraction === false) {
        return () => {
        };
    }
    const disableMap = sampling.mouseInteraction === true ||
        sampling.mouseInteraction === undefined
        ? {}
        : sampling.mouseInteraction;
    const handlers = [];
    const getHandler = (eventKey) => {
        return (event) => {
            const target = getEventTarget(event);
            if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isBlocked"])(target, blockClass, blockSelector, true)) {
                return;
            }
            const e = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isTouchEvent"])(event) ? event.changedTouches[0] : event;
            if (!e) {
                return;
            }
            const id = mirror.getId(target);
            const { clientX, clientY } = e;
            mouseInteractionCb({
                type: _types_dist_types_js__WEBPACK_IMPORTED_MODULE_2__["MouseInteractions"][eventKey],
                id,
                x: clientX,
                y: clientY,
            });
        };
    };
    Object.keys(_types_dist_types_js__WEBPACK_IMPORTED_MODULE_2__["MouseInteractions"])
        .filter((key) => Number.isNaN(Number(key)) &&
        !key.endsWith('_Departed') &&
        disableMap[key] !== false)
        .forEach((eventKey) => {
        const eventName = eventKey.toLowerCase();
        const handler = getHandler(eventKey);
        handlers.push(Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["on"])(eventName, handler, doc));
    });
    return () => {
        handlers.forEach((h) => h());
    };
}
function initScrollObserver({ scrollCb, doc, mirror, blockClass, blockSelector, sampling, }) {
    const updatePosition = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["throttle"])((evt) => {
        const target = getEventTarget(evt);
        if (!target || Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isBlocked"])(target, blockClass, blockSelector, true)) {
            return;
        }
        const id = mirror.getId(target);
        if (target === doc) {
            const scrollEl = (doc.scrollingElement || doc.documentElement);
            scrollCb({
                id,
                x: scrollEl.scrollLeft,
                y: scrollEl.scrollTop,
            });
        }
        else {
            scrollCb({
                id,
                x: target.scrollLeft,
                y: target.scrollTop,
            });
        }
    }, sampling.scroll || 100);
    return Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["on"])('scroll', updatePosition, doc);
}
function initViewportResizeObserver({ viewportResizeCb, }) {
    let lastH = -1;
    let lastW = -1;
    const updateDimension = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["throttle"])(() => {
        const height = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getWindowHeight"])();
        const width = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getWindowWidth"])();
        if (lastH !== height || lastW !== width) {
            viewportResizeCb({
                width: Number(width),
                height: Number(height),
            });
            lastH = height;
            lastW = width;
        }
    }, 200);
    return Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["on"])('resize', updateDimension, window);
}
function wrapEventWithUserTriggeredFlag(v, enable) {
    const value = Object.assign({}, v);
    if (!enable)
        delete value.userTriggered;
    return value;
}
const INPUT_TAGS = ['INPUT', 'TEXTAREA', 'SELECT'];
const lastInputValueMap = new WeakMap();
function initInputObserver({ inputCb, doc, mirror, blockClass, blockSelector, ignoreClass, maskInputOptions, maskInputFn, sampling, userTriggeredOnInput, }) {
    function eventHandler(event) {
        let target = getEventTarget(event);
        const userTriggered = event.isTrusted;
        if (target && target.tagName === 'OPTION')
            target = target.parentElement;
        if (!target ||
            !target.tagName ||
            INPUT_TAGS.indexOf(target.tagName) < 0 ||
            Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isBlocked"])(target, blockClass, blockSelector, true)) {
            return;
        }
        const type = target.type;
        if (target.classList.contains(ignoreClass)) {
            return;
        }
        let text = target.value;
        let isChecked = false;
        if (type === 'radio' || type === 'checkbox') {
            isChecked = target.checked;
        }
        else if (maskInputOptions[target.tagName.toLowerCase()] ||
            maskInputOptions[type]) {
            text = Object(_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_0__["maskInputValue"])({
                maskInputOptions,
                tagName: target.tagName,
                type,
                value: text,
                maskInputFn,
            });
        }
        cbWithDedup(target, wrapEventWithUserTriggeredFlag({ text, isChecked, userTriggered }, userTriggeredOnInput));
        const name = target.name;
        if (type === 'radio' && name && isChecked) {
            doc
                .querySelectorAll(`input[type="radio"][name="${name}"]`)
                .forEach((el) => {
                if (el !== target) {
                    cbWithDedup(el, wrapEventWithUserTriggeredFlag({
                        text: el.value,
                        isChecked: !isChecked,
                        userTriggered: false,
                    }, userTriggeredOnInput));
                }
            });
        }
    }
    function cbWithDedup(target, v) {
        const lastInputValue = lastInputValueMap.get(target);
        if (!lastInputValue ||
            lastInputValue.text !== v.text ||
            lastInputValue.isChecked !== v.isChecked) {
            lastInputValueMap.set(target, v);
            const id = mirror.getId(target);
            inputCb(Object.assign(Object.assign({}, v), { id }));
        }
    }
    const events = sampling.input === 'last' ? ['change'] : ['input', 'change'];
    const handlers = events.map((eventName) => Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["on"])(eventName, eventHandler, doc));
    const currentWindow = doc.defaultView;
    if (!currentWindow) {
        return () => {
            handlers.forEach((h) => h());
        };
    }
    const propertyDescriptor = currentWindow.Object.getOwnPropertyDescriptor(currentWindow.HTMLInputElement.prototype, 'value');
    const hookProperties = [
        [currentWindow.HTMLInputElement.prototype, 'value'],
        [currentWindow.HTMLInputElement.prototype, 'checked'],
        [currentWindow.HTMLSelectElement.prototype, 'value'],
        [currentWindow.HTMLTextAreaElement.prototype, 'value'],
        [currentWindow.HTMLSelectElement.prototype, 'selectedIndex'],
        [currentWindow.HTMLOptionElement.prototype, 'selected'],
    ];
    if (propertyDescriptor && propertyDescriptor.set) {
        handlers.push(...hookProperties.map((p) => Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["hookSetter"])(p[0], p[1], {
            set() {
                eventHandler({ target: this });
            },
        }, false, currentWindow)));
    }
    return () => {
        handlers.forEach((h) => h());
    };
}
function getNestedCSSRulePositions(rule) {
    const positions = [];
    function recurse(childRule, pos) {
        if ((isCSSGroupingRuleSupported &&
            childRule.parentRule instanceof CSSGroupingRule) ||
            (isCSSMediaRuleSupported &&
                childRule.parentRule instanceof CSSMediaRule) ||
            (isCSSSupportsRuleSupported &&
                childRule.parentRule instanceof CSSSupportsRule) ||
            (isCSSConditionRuleSupported &&
                childRule.parentRule instanceof CSSConditionRule)) {
            const rules = Array.from(childRule.parentRule.cssRules);
            const index = rules.indexOf(childRule);
            pos.unshift(index);
        }
        else if (childRule.parentStyleSheet) {
            const rules = Array.from(childRule.parentStyleSheet.cssRules);
            const index = rules.indexOf(childRule);
            pos.unshift(index);
        }
        return pos;
    }
    return recurse(rule, positions);
}
function getIdAndStyleId(sheet, mirror, styleMirror) {
    let id, styleId;
    if (!sheet)
        return {};
    if (sheet.ownerNode)
        id = mirror.getId(sheet.ownerNode);
    else
        styleId = styleMirror.getId(sheet);
    return {
        styleId,
        id,
    };
}
function initStyleSheetObserver({ styleSheetRuleCb, mirror, stylesheetManager }, { win }) {
    const insertRule = win.CSSStyleSheet.prototype.insertRule;
    win.CSSStyleSheet.prototype.insertRule = function (rule, index) {
        const { id, styleId } = getIdAndStyleId(this, mirror, stylesheetManager.styleMirror);
        if ((id && id !== -1) || (styleId && styleId !== -1)) {
            styleSheetRuleCb({
                id,
                styleId,
                adds: [{ rule, index }],
            });
        }
        return insertRule.apply(this, [rule, index]);
    };
    const deleteRule = win.CSSStyleSheet.prototype.deleteRule;
    win.CSSStyleSheet.prototype.deleteRule = function (index) {
        const { id, styleId } = getIdAndStyleId(this, mirror, stylesheetManager.styleMirror);
        if ((id && id !== -1) || (styleId && styleId !== -1)) {
            styleSheetRuleCb({
                id,
                styleId,
                removes: [{ index }],
            });
        }
        return deleteRule.apply(this, [index]);
    };
    let replace;
    if (win.CSSStyleSheet.prototype.replace) {
        replace = win.CSSStyleSheet.prototype.replace;
        win.CSSStyleSheet.prototype.replace = function (text) {
            const { id, styleId } = getIdAndStyleId(this, mirror, stylesheetManager.styleMirror);
            if ((id && id !== -1) || (styleId && styleId !== -1)) {
                styleSheetRuleCb({
                    id,
                    styleId,
                    replace: text,
                });
            }
            return replace.apply(this, [text]);
        };
    }
    let replaceSync;
    if (win.CSSStyleSheet.prototype.replaceSync) {
        replaceSync = win.CSSStyleSheet.prototype.replaceSync;
        win.CSSStyleSheet.prototype.replaceSync = function (text) {
            const { id, styleId } = getIdAndStyleId(this, mirror, stylesheetManager.styleMirror);
            if ((id && id !== -1) || (styleId && styleId !== -1)) {
                styleSheetRuleCb({
                    id,
                    styleId,
                    replaceSync: text,
                });
            }
            return replaceSync.apply(this, [text]);
        };
    }
    const supportedNestedCSSRuleTypes = {};
    if (isCSSGroupingRuleSupported) {
        supportedNestedCSSRuleTypes.CSSGroupingRule = win.CSSGroupingRule;
    }
    else {
        if (isCSSMediaRuleSupported) {
            supportedNestedCSSRuleTypes.CSSMediaRule = win.CSSMediaRule;
        }
        if (isCSSConditionRuleSupported) {
            supportedNestedCSSRuleTypes.CSSConditionRule = win.CSSConditionRule;
        }
        if (isCSSSupportsRuleSupported) {
            supportedNestedCSSRuleTypes.CSSSupportsRule = win.CSSSupportsRule;
        }
    }
    const unmodifiedFunctions = {};
    Object.entries(supportedNestedCSSRuleTypes).forEach(([typeKey, type]) => {
        unmodifiedFunctions[typeKey] = {
            insertRule: type.prototype.insertRule,
            deleteRule: type.prototype.deleteRule,
        };
        type.prototype.insertRule = function (rule, index) {
            const { id, styleId } = getIdAndStyleId(this.parentStyleSheet, mirror, stylesheetManager.styleMirror);
            if ((id && id !== -1) || (styleId && styleId !== -1)) {
                styleSheetRuleCb({
                    id,
                    styleId,
                    adds: [
                        {
                            rule,
                            index: [
                                ...getNestedCSSRulePositions(this),
                                index || 0,
                            ],
                        },
                    ],
                });
            }
            return unmodifiedFunctions[typeKey].insertRule.apply(this, [rule, index]);
        };
        type.prototype.deleteRule = function (index) {
            const { id, styleId } = getIdAndStyleId(this.parentStyleSheet, mirror, stylesheetManager.styleMirror);
            if ((id && id !== -1) || (styleId && styleId !== -1)) {
                styleSheetRuleCb({
                    id,
                    styleId,
                    removes: [
                        { index: [...getNestedCSSRulePositions(this), index] },
                    ],
                });
            }
            return unmodifiedFunctions[typeKey].deleteRule.apply(this, [index]);
        };
    });
    return () => {
        win.CSSStyleSheet.prototype.insertRule = insertRule;
        win.CSSStyleSheet.prototype.deleteRule = deleteRule;
        replace && (win.CSSStyleSheet.prototype.replace = replace);
        replaceSync && (win.CSSStyleSheet.prototype.replaceSync = replaceSync);
        Object.entries(supportedNestedCSSRuleTypes).forEach(([typeKey, type]) => {
            type.prototype.insertRule = unmodifiedFunctions[typeKey].insertRule;
            type.prototype.deleteRule = unmodifiedFunctions[typeKey].deleteRule;
        });
    };
}
function initAdoptedStyleSheetObserver({ mirror, stylesheetManager, }, host) {
    var _a, _b, _c;
    let hostId = null;
    if (host.nodeName === '#document')
        hostId = mirror.getId(host);
    else
        hostId = mirror.getId(host.host);
    const patchTarget = host.nodeName === '#document'
        ? (_a = host.defaultView) === null || _a === void 0 ? void 0 : _a.Document
        : (_c = (_b = host.ownerDocument) === null || _b === void 0 ? void 0 : _b.defaultView) === null || _c === void 0 ? void 0 : _c.ShadowRoot;
    const originalPropertyDescriptor = Object.getOwnPropertyDescriptor(patchTarget === null || patchTarget === void 0 ? void 0 : patchTarget.prototype, 'adoptedStyleSheets');
    if (hostId === null ||
        hostId === -1 ||
        !patchTarget ||
        !originalPropertyDescriptor)
        return () => {
        };
    Object.defineProperty(host, 'adoptedStyleSheets', {
        configurable: originalPropertyDescriptor.configurable,
        enumerable: originalPropertyDescriptor.enumerable,
        get() {
            var _a;
            return (_a = originalPropertyDescriptor.get) === null || _a === void 0 ? void 0 : _a.call(this);
        },
        set(sheets) {
            var _a;
            const result = (_a = originalPropertyDescriptor.set) === null || _a === void 0 ? void 0 : _a.call(this, sheets);
            if (hostId !== null && hostId !== -1) {
                try {
                    stylesheetManager.adoptStyleSheets(sheets, hostId);
                }
                catch (e) {
                }
            }
            return result;
        },
    });
    return () => {
        Object.defineProperty(host, 'adoptedStyleSheets', {
            configurable: originalPropertyDescriptor.configurable,
            enumerable: originalPropertyDescriptor.enumerable,
            get: originalPropertyDescriptor.get,
            set: originalPropertyDescriptor.set,
        });
    };
}
function initStyleDeclarationObserver({ styleDeclarationCb, mirror, ignoreCSSAttributes, stylesheetManager, }, { win }) {
    const setProperty = win.CSSStyleDeclaration.prototype.setProperty;
    win.CSSStyleDeclaration.prototype.setProperty = function (property, value, priority) {
        var _a;
        if (ignoreCSSAttributes.has(property)) {
            return setProperty.apply(this, [property, value, priority]);
        }
        const { id, styleId } = getIdAndStyleId((_a = this.parentRule) === null || _a === void 0 ? void 0 : _a.parentStyleSheet, mirror, stylesheetManager.styleMirror);
        if ((id && id !== -1) || (styleId && styleId !== -1)) {
            styleDeclarationCb({
                id,
                styleId,
                set: {
                    property,
                    value,
                    priority,
                },
                index: getNestedCSSRulePositions(this.parentRule),
            });
        }
        return setProperty.apply(this, [property, value, priority]);
    };
    const removeProperty = win.CSSStyleDeclaration.prototype.removeProperty;
    win.CSSStyleDeclaration.prototype.removeProperty = function (property) {
        var _a;
        if (ignoreCSSAttributes.has(property)) {
            return removeProperty.apply(this, [property]);
        }
        const { id, styleId } = getIdAndStyleId((_a = this.parentRule) === null || _a === void 0 ? void 0 : _a.parentStyleSheet, mirror, stylesheetManager.styleMirror);
        if ((id && id !== -1) || (styleId && styleId !== -1)) {
            styleDeclarationCb({
                id,
                styleId,
                remove: {
                    property,
                },
                index: getNestedCSSRulePositions(this.parentRule),
            });
        }
        return removeProperty.apply(this, [property]);
    };
    return () => {
        win.CSSStyleDeclaration.prototype.setProperty = setProperty;
        win.CSSStyleDeclaration.prototype.removeProperty = removeProperty;
    };
}
function initMediaInteractionObserver({ mediaInteractionCb, blockClass, blockSelector, mirror, sampling, }) {
    const handler = (type) => Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["throttle"])((event) => {
        const target = getEventTarget(event);
        if (!target ||
            Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isBlocked"])(target, blockClass, blockSelector, true)) {
            return;
        }
        const { currentTime, volume, muted, playbackRate, } = target;
        mediaInteractionCb({
            type,
            id: mirror.getId(target),
            currentTime,
            volume,
            muted,
            playbackRate,
        });
    }, sampling.media || 500);
    const handlers = [
        Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["on"])('play', handler(0)),
        Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["on"])('pause', handler(1)),
        Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["on"])('seeked', handler(2)),
        Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["on"])('volumechange', handler(3)),
        Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["on"])('ratechange', handler(4)),
    ];
    return () => {
        handlers.forEach((h) => h());
    };
}
function initFontObserver({ fontCb, doc }) {
    const win = doc.defaultView;
    if (!win) {
        return () => {
        };
    }
    const handlers = [];
    const fontMap = new WeakMap();
    const originalFontFace = win.FontFace;
    win.FontFace = function FontFace(family, source, descriptors) {
        const fontFace = new originalFontFace(family, source, descriptors);
        fontMap.set(fontFace, {
            family,
            buffer: typeof source !== 'string',
            descriptors,
            fontSource: typeof source === 'string'
                ? source
                : JSON.stringify(Array.from(new Uint8Array(source))),
        });
        return fontFace;
    };
    const restoreHandler = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["patch"])(doc.fonts, 'add', function (original) {
        return function (fontFace) {
            setTimeout(() => {
                const p = fontMap.get(fontFace);
                if (p) {
                    fontCb(p);
                    fontMap.delete(fontFace);
                }
            }, 0);
            return original.apply(this, [fontFace]);
        };
    });
    handlers.push(() => {
        win.FontFace = originalFontFace;
    });
    handlers.push(restoreHandler);
    return () => {
        handlers.forEach((h) => h());
    };
}
function initSelectionObserver(param) {
    const { doc, mirror, blockClass, blockSelector, selectionCb } = param;
    let collapsed = true;
    const updateSelection = () => {
        const selection = doc.getSelection();
        if (!selection || (collapsed && (selection === null || selection === void 0 ? void 0 : selection.isCollapsed)))
            return;
        collapsed = selection.isCollapsed || false;
        const ranges = [];
        const count = selection.rangeCount || 0;
        for (let i = 0; i < count; i++) {
            const range = selection.getRangeAt(i);
            const { startContainer, startOffset, endContainer, endOffset } = range;
            const blocked = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isBlocked"])(startContainer, blockClass, blockSelector, true) ||
                Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isBlocked"])(endContainer, blockClass, blockSelector, true);
            if (blocked)
                continue;
            ranges.push({
                start: mirror.getId(startContainer),
                startOffset,
                end: mirror.getId(endContainer),
                endOffset,
            });
        }
        selectionCb({ ranges });
    };
    updateSelection();
    return Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["on"])('selectionchange', updateSelection);
}
function mergeHooks(o, hooks) {
    const { mutationCb, mousemoveCb, mouseInteractionCb, scrollCb, viewportResizeCb, inputCb, mediaInteractionCb, styleSheetRuleCb, styleDeclarationCb, canvasMutationCb, fontCb, selectionCb, } = o;
    o.mutationCb = (...p) => {
        if (hooks.mutation) {
            hooks.mutation(...p);
        }
        mutationCb(...p);
    };
    o.mousemoveCb = (...p) => {
        if (hooks.mousemove) {
            hooks.mousemove(...p);
        }
        mousemoveCb(...p);
    };
    o.mouseInteractionCb = (...p) => {
        if (hooks.mouseInteraction) {
            hooks.mouseInteraction(...p);
        }
        mouseInteractionCb(...p);
    };
    o.scrollCb = (...p) => {
        if (hooks.scroll) {
            hooks.scroll(...p);
        }
        scrollCb(...p);
    };
    o.viewportResizeCb = (...p) => {
        if (hooks.viewportResize) {
            hooks.viewportResize(...p);
        }
        viewportResizeCb(...p);
    };
    o.inputCb = (...p) => {
        if (hooks.input) {
            hooks.input(...p);
        }
        inputCb(...p);
    };
    o.mediaInteractionCb = (...p) => {
        if (hooks.mediaInteaction) {
            hooks.mediaInteaction(...p);
        }
        mediaInteractionCb(...p);
    };
    o.styleSheetRuleCb = (...p) => {
        if (hooks.styleSheetRule) {
            hooks.styleSheetRule(...p);
        }
        styleSheetRuleCb(...p);
    };
    o.styleDeclarationCb = (...p) => {
        if (hooks.styleDeclaration) {
            hooks.styleDeclaration(...p);
        }
        styleDeclarationCb(...p);
    };
    o.canvasMutationCb = (...p) => {
        if (hooks.canvasMutation) {
            hooks.canvasMutation(...p);
        }
        canvasMutationCb(...p);
    };
    o.fontCb = (...p) => {
        if (hooks.font) {
            hooks.font(...p);
        }
        fontCb(...p);
    };
    o.selectionCb = (...p) => {
        if (hooks.selection) {
            hooks.selection(...p);
        }
        selectionCb(...p);
    };
}
function initObservers(o, hooks = {}) {
    const currentWindow = o.doc.defaultView;
    if (!currentWindow) {
        return () => {
        };
    }
    mergeHooks(o, hooks);
    const mutationObserver = initMutationObserver(o, o.doc);
    const mousemoveHandler = initMoveObserver(o);
    const mouseInteractionHandler = initMouseInteractionObserver(o);
    const scrollHandler = initScrollObserver(o);
    const viewportResizeHandler = initViewportResizeObserver(o);
    const inputHandler = initInputObserver(o);
    const mediaInteractionHandler = initMediaInteractionObserver(o);
    const styleSheetObserver = initStyleSheetObserver(o, { win: currentWindow });
    const adoptedStyleSheetObserver = initAdoptedStyleSheetObserver(o, o.doc);
    const styleDeclarationObserver = initStyleDeclarationObserver(o, {
        win: currentWindow,
    });
    const fontObserver = o.collectFonts
        ? initFontObserver(o)
        : () => {
        };
    const selectionObserver = initSelectionObserver(o);
    const pluginHandlers = [];
    for (const plugin of o.plugins) {
        pluginHandlers.push(plugin.observer(plugin.callback, currentWindow, plugin.options));
    }
    return () => {
        mutationBuffers.forEach((b) => b.reset());
        mutationObserver.disconnect();
        mousemoveHandler();
        mouseInteractionHandler();
        scrollHandler();
        viewportResizeHandler();
        inputHandler();
        mediaInteractionHandler();
        styleSheetObserver();
        adoptedStyleSheetObserver();
        styleDeclarationObserver();
        fontObserver();
        selectionObserver();
        pluginHandlers.forEach((h) => h());
    };
}




/***/ }),

/***/ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observers/canvas/2d.js":
/*!*********************************************************************************************************************************************************************!*\
  !*** /Users/crusher/Desktop/experiment/test-v2/node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observers/canvas/2d.js ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initCanvas2DMutationObserver; });
/* harmony import */ var _types_dist_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../types/dist/types.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/types/dist/types.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/utils.js");
/* harmony import */ var _serialize_args_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./serialize-args.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observers/canvas/serialize-args.js");




function initCanvas2DMutationObserver(cb, win, blockClass, blockSelector) {
    const handlers = [];
    const props2D = Object.getOwnPropertyNames(win.CanvasRenderingContext2D.prototype);
    for (const prop of props2D) {
        try {
            if (typeof win.CanvasRenderingContext2D.prototype[prop] !== 'function') {
                continue;
            }
            const restoreHandler = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["patch"])(win.CanvasRenderingContext2D.prototype, prop, function (original) {
                return function (...args) {
                    if (!Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isBlocked"])(this.canvas, blockClass, blockSelector, true)) {
                        setTimeout(() => {
                            const recordArgs = Object(_serialize_args_js__WEBPACK_IMPORTED_MODULE_2__["serializeArgs"])([...args], win, this);
                            cb(this.canvas, {
                                type: _types_dist_types_js__WEBPACK_IMPORTED_MODULE_0__["CanvasContext"]['2D'],
                                property: prop,
                                args: recordArgs,
                            });
                        }, 0);
                    }
                    return original.apply(this, args);
                };
            });
            handlers.push(restoreHandler);
        }
        catch (_a) {
            const hookHandler = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["hookSetter"])(win.CanvasRenderingContext2D.prototype, prop, {
                set(v) {
                    cb(this.canvas, {
                        type: _types_dist_types_js__WEBPACK_IMPORTED_MODULE_0__["CanvasContext"]['2D'],
                        property: prop,
                        args: [v],
                        setter: true,
                    });
                },
            });
            handlers.push(hookHandler);
        }
    }
    return () => {
        handlers.forEach((h) => h());
    };
}




/***/ }),

/***/ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observers/canvas/canvas-manager.js":
/*!*********************************************************************************************************************************************************************************!*\
  !*** /Users/crusher/Desktop/experiment/test-v2/node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observers/canvas/canvas-manager.js ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: CanvasManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasManager", function() { return CanvasManager; });
/* harmony import */ var _ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../../../ext/tslib/tslib.es6.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/ext/tslib/tslib.es6.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/utils.js");
/* harmony import */ var _types_dist_types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../types/dist/types.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/types/dist/types.js");
/* harmony import */ var _2d_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./2d.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observers/canvas/2d.js");
/* harmony import */ var _canvas_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./canvas.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observers/canvas/canvas.js");
/* harmony import */ var _webgl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./webgl.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observers/canvas/webgl.js");
/* harmony import */ var _virtual_image_bitmap_data_url_worker_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../_virtual/image-bitmap-data-url-worker.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/_virtual/image-bitmap-data-url-worker.js");








class CanvasManager {
    constructor(options) {
        this.pendingCanvasMutations = new Map();
        this.rafStamps = { latestId: 0, invokeId: null };
        this.frozen = false;
        this.locked = false;
        this.processMutation = (target, mutation) => {
            const newFrame = this.rafStamps.invokeId &&
                this.rafStamps.latestId !== this.rafStamps.invokeId;
            if (newFrame || !this.rafStamps.invokeId)
                this.rafStamps.invokeId = this.rafStamps.latestId;
            if (!this.pendingCanvasMutations.has(target)) {
                this.pendingCanvasMutations.set(target, []);
            }
            this.pendingCanvasMutations.get(target).push(mutation);
        };
        const { sampling = 'all', win, blockClass, blockSelector, recordCanvas, dataURLOptions, } = options;
        this.mutationCb = options.mutationCb;
        this.mirror = options.mirror;
        if (recordCanvas && sampling === 'all')
            this.initCanvasMutationObserver(win, blockClass, blockSelector);
        if (recordCanvas && typeof sampling === 'number')
            this.initCanvasFPSObserver(sampling, win, blockClass, blockSelector, {
                dataURLOptions,
            });
    }
    reset() {
        this.pendingCanvasMutations.clear();
        this.resetObservers && this.resetObservers();
    }
    freeze() {
        this.frozen = true;
    }
    unfreeze() {
        this.frozen = false;
    }
    lock() {
        this.locked = true;
    }
    unlock() {
        this.locked = false;
    }
    initCanvasFPSObserver(fps, win, blockClass, blockSelector, options) {
        const canvasContextReset = Object(_canvas_js__WEBPACK_IMPORTED_MODULE_4__["default"])(win, blockClass, blockSelector);
        const snapshotInProgressMap = new Map();
        const worker = new _virtual_image_bitmap_data_url_worker_js__WEBPACK_IMPORTED_MODULE_6__["default"]();
        worker.onmessage = (e) => {
            const { id } = e.data;
            snapshotInProgressMap.set(id, false);
            if (!('base64' in e.data))
                return;
            const { base64, type, width, height } = e.data;
            this.mutationCb({
                id,
                type: _types_dist_types_js__WEBPACK_IMPORTED_MODULE_2__["CanvasContext"]['2D'],
                commands: [
                    {
                        property: 'clearRect',
                        args: [0, 0, width, height],
                    },
                    {
                        property: 'drawImage',
                        args: [
                            {
                                rr_type: 'ImageBitmap',
                                args: [
                                    {
                                        rr_type: 'Blob',
                                        data: [{ rr_type: 'ArrayBuffer', base64 }],
                                        type,
                                    },
                                ],
                            },
                            0,
                            0,
                        ],
                    },
                ],
            });
        };
        const timeBetweenSnapshots = 1000 / fps;
        let lastSnapshotTime = 0;
        let rafId;
        const getCanvas = () => {
            const matchedCanvas = [];
            win.document.querySelectorAll('canvas').forEach((canvas) => {
                if (!Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isBlocked"])(canvas, blockClass, blockSelector, true)) {
                    matchedCanvas.push(canvas);
                }
            });
            return matchedCanvas;
        };
        const takeCanvasSnapshots = (timestamp) => {
            if (lastSnapshotTime &&
                timestamp - lastSnapshotTime < timeBetweenSnapshots) {
                rafId = requestAnimationFrame(takeCanvasSnapshots);
                return;
            }
            lastSnapshotTime = timestamp;
            getCanvas()
                .forEach((canvas) => Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                var _a;
                const id = this.mirror.getId(canvas);
                if (snapshotInProgressMap.get(id))
                    return;
                snapshotInProgressMap.set(id, true);
                if (['webgl', 'webgl2'].includes(canvas.__context)) {
                    const context = canvas.getContext(canvas.__context);
                    if (((_a = context === null || context === void 0 ? void 0 : context.getContextAttributes()) === null || _a === void 0 ? void 0 : _a.preserveDrawingBuffer) === false) {
                        context === null || context === void 0 ? void 0 : context.clear(context.COLOR_BUFFER_BIT);
                    }
                }
                const bitmap = yield createImageBitmap(canvas);
                worker.postMessage({
                    id,
                    bitmap,
                    width: canvas.width,
                    height: canvas.height,
                    dataURLOptions: options.dataURLOptions,
                }, [bitmap]);
            }));
            rafId = requestAnimationFrame(takeCanvasSnapshots);
        };
        rafId = requestAnimationFrame(takeCanvasSnapshots);
        this.resetObservers = () => {
            canvasContextReset();
            cancelAnimationFrame(rafId);
        };
    }
    initCanvasMutationObserver(win, blockClass, blockSelector) {
        this.startRAFTimestamping();
        this.startPendingCanvasMutationFlusher();
        const canvasContextReset = Object(_canvas_js__WEBPACK_IMPORTED_MODULE_4__["default"])(win, blockClass, blockSelector);
        const canvas2DReset = Object(_2d_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this.processMutation.bind(this), win, blockClass, blockSelector);
        const canvasWebGL1and2Reset = Object(_webgl_js__WEBPACK_IMPORTED_MODULE_5__["default"])(this.processMutation.bind(this), win, blockClass, blockSelector, this.mirror);
        this.resetObservers = () => {
            canvasContextReset();
            canvas2DReset();
            canvasWebGL1and2Reset();
        };
    }
    startPendingCanvasMutationFlusher() {
        requestAnimationFrame(() => this.flushPendingCanvasMutations());
    }
    startRAFTimestamping() {
        const setLatestRAFTimestamp = (timestamp) => {
            this.rafStamps.latestId = timestamp;
            requestAnimationFrame(setLatestRAFTimestamp);
        };
        requestAnimationFrame(setLatestRAFTimestamp);
    }
    flushPendingCanvasMutations() {
        this.pendingCanvasMutations.forEach((values, canvas) => {
            const id = this.mirror.getId(canvas);
            this.flushPendingCanvasMutationFor(canvas, id);
        });
        requestAnimationFrame(() => this.flushPendingCanvasMutations());
    }
    flushPendingCanvasMutationFor(canvas, id) {
        if (this.frozen || this.locked) {
            return;
        }
        const valuesWithType = this.pendingCanvasMutations.get(canvas);
        if (!valuesWithType || id === -1)
            return;
        const values = valuesWithType.map((value) => {
            const rest = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__rest"])(value, ["type"]);
            return rest;
        });
        const { type } = valuesWithType[0];
        this.mutationCb({ id, type, commands: values });
        this.pendingCanvasMutations.delete(canvas);
    }
}




/***/ }),

/***/ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observers/canvas/canvas.js":
/*!*************************************************************************************************************************************************************************!*\
  !*** /Users/crusher/Desktop/experiment/test-v2/node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observers/canvas/canvas.js ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initCanvasContextObserver; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/utils.js");


function initCanvasContextObserver(win, blockClass, blockSelector) {
    const handlers = [];
    try {
        const restoreHandler = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["patch"])(win.HTMLCanvasElement.prototype, 'getContext', function (original) {
            return function (contextType, ...args) {
                if (!Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["isBlocked"])(this, blockClass, blockSelector, true)) {
                    if (!('__context' in this))
                        this.__context = contextType;
                }
                return original.apply(this, [contextType, ...args]);
            };
        });
        handlers.push(restoreHandler);
    }
    catch (_a) {
        console.error('failed to patch HTMLCanvasElement.prototype.getContext');
    }
    return () => {
        handlers.forEach((h) => h());
    };
}




/***/ }),

/***/ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observers/canvas/serialize-args.js":
/*!*********************************************************************************************************************************************************************************!*\
  !*** /Users/crusher/Desktop/experiment/test-v2/node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observers/canvas/serialize-args.js ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: isInstanceOfWebGLObject, saveWebGLVar, serializeArg, serializeArgs, variableListFor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInstanceOfWebGLObject", function() { return isInstanceOfWebGLObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveWebGLVar", function() { return saveWebGLVar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeArg", function() { return serializeArg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeArgs", function() { return serializeArgs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variableListFor", function() { return variableListFor; });
/* harmony import */ var _ext_base64_arraybuffer_dist_base64_arraybuffer_es5_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../../../ext/base64-arraybuffer/dist/base64-arraybuffer.es5.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/ext/base64-arraybuffer/dist/base64-arraybuffer.es5.js");


const canvasVarMap = new Map();
function variableListFor(ctx, ctor) {
    let contextMap = canvasVarMap.get(ctx);
    if (!contextMap) {
        contextMap = new Map();
        canvasVarMap.set(ctx, contextMap);
    }
    if (!contextMap.has(ctor)) {
        contextMap.set(ctor, []);
    }
    return contextMap.get(ctor);
}
const saveWebGLVar = (value, win, ctx) => {
    if (!value ||
        !(isInstanceOfWebGLObject(value, win) || typeof value === 'object'))
        return;
    const name = value.constructor.name;
    const list = variableListFor(ctx, name);
    let index = list.indexOf(value);
    if (index === -1) {
        index = list.length;
        list.push(value);
    }
    return index;
};
function serializeArg(value, win, ctx) {
    if (value instanceof Array) {
        return value.map((arg) => serializeArg(arg, win, ctx));
    }
    else if (value === null) {
        return value;
    }
    else if (value instanceof Float32Array ||
        value instanceof Float64Array ||
        value instanceof Int32Array ||
        value instanceof Uint32Array ||
        value instanceof Uint8Array ||
        value instanceof Uint16Array ||
        value instanceof Int16Array ||
        value instanceof Int8Array ||
        value instanceof Uint8ClampedArray) {
        const name = value.constructor.name;
        return {
            rr_type: name,
            args: [Object.values(value)],
        };
    }
    else if (value instanceof ArrayBuffer) {
        const name = value.constructor.name;
        const base64 = Object(_ext_base64_arraybuffer_dist_base64_arraybuffer_es5_js__WEBPACK_IMPORTED_MODULE_0__["encode"])(value);
        return {
            rr_type: name,
            base64,
        };
    }
    else if (value instanceof DataView) {
        const name = value.constructor.name;
        return {
            rr_type: name,
            args: [
                serializeArg(value.buffer, win, ctx),
                value.byteOffset,
                value.byteLength,
            ],
        };
    }
    else if (value instanceof HTMLImageElement) {
        const name = value.constructor.name;
        const { src } = value;
        return {
            rr_type: name,
            src,
        };
    }
    else if (value instanceof HTMLCanvasElement) {
        const name = 'HTMLImageElement';
        const src = value.toDataURL();
        return {
            rr_type: name,
            src,
        };
    }
    else if (value instanceof ImageData) {
        const name = value.constructor.name;
        return {
            rr_type: name,
            args: [serializeArg(value.data, win, ctx), value.width, value.height],
        };
    }
    else if (isInstanceOfWebGLObject(value, win) || typeof value === 'object') {
        const name = value.constructor.name;
        const index = saveWebGLVar(value, win, ctx);
        return {
            rr_type: name,
            index: index,
        };
    }
    return value;
}
const serializeArgs = (args, win, ctx) => {
    return [...args].map((arg) => serializeArg(arg, win, ctx));
};
const isInstanceOfWebGLObject = (value, win) => {
    const webGLConstructorNames = [
        'WebGLActiveInfo',
        'WebGLBuffer',
        'WebGLFramebuffer',
        'WebGLProgram',
        'WebGLRenderbuffer',
        'WebGLShader',
        'WebGLShaderPrecisionFormat',
        'WebGLTexture',
        'WebGLUniformLocation',
        'WebGLVertexArrayObject',
        'WebGLVertexArrayObjectOES',
    ];
    const supportedWebGLConstructorNames = webGLConstructorNames.filter((name) => typeof win[name] === 'function');
    return Boolean(supportedWebGLConstructorNames.find((name) => value instanceof win[name]));
};




/***/ }),

/***/ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observers/canvas/webgl.js":
/*!************************************************************************************************************************************************************************!*\
  !*** /Users/crusher/Desktop/experiment/test-v2/node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observers/canvas/webgl.js ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initCanvasWebGLMutationObserver; });
/* harmony import */ var _types_dist_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../types/dist/types.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/types/dist/types.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/utils.js");
/* harmony import */ var _serialize_args_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./serialize-args.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observers/canvas/serialize-args.js");




function patchGLPrototype(prototype, type, cb, blockClass, blockSelector, mirror, win) {
    const handlers = [];
    const props = Object.getOwnPropertyNames(prototype);
    for (const prop of props) {
        if ([
            'isContextLost',
            'canvas',
            'drawingBufferWidth',
            'drawingBufferHeight',
        ].includes(prop)) {
            continue;
        }
        try {
            if (typeof prototype[prop] !== 'function') {
                continue;
            }
            const restoreHandler = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["patch"])(prototype, prop, function (original) {
                return function (...args) {
                    const result = original.apply(this, args);
                    Object(_serialize_args_js__WEBPACK_IMPORTED_MODULE_2__["saveWebGLVar"])(result, win, this);
                    if (!Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isBlocked"])(this.canvas, blockClass, blockSelector, true)) {
                        const recordArgs = Object(_serialize_args_js__WEBPACK_IMPORTED_MODULE_2__["serializeArgs"])([...args], win, this);
                        const mutation = {
                            type,
                            property: prop,
                            args: recordArgs,
                        };
                        cb(this.canvas, mutation);
                    }
                    return result;
                };
            });
            handlers.push(restoreHandler);
        }
        catch (_a) {
            const hookHandler = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["hookSetter"])(prototype, prop, {
                set(v) {
                    cb(this.canvas, {
                        type,
                        property: prop,
                        args: [v],
                        setter: true,
                    });
                },
            });
            handlers.push(hookHandler);
        }
    }
    return handlers;
}
function initCanvasWebGLMutationObserver(cb, win, blockClass, blockSelector, mirror) {
    const handlers = [];
    handlers.push(...patchGLPrototype(win.WebGLRenderingContext.prototype, _types_dist_types_js__WEBPACK_IMPORTED_MODULE_0__["CanvasContext"].WebGL, cb, blockClass, blockSelector, mirror, win));
    if (typeof win.WebGL2RenderingContext !== 'undefined') {
        handlers.push(...patchGLPrototype(win.WebGL2RenderingContext.prototype, _types_dist_types_js__WEBPACK_IMPORTED_MODULE_0__["CanvasContext"].WebGL2, cb, blockClass, blockSelector, mirror, win));
    }
    return () => {
        handlers.forEach((h) => h());
    };
}




/***/ }),

/***/ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/record/shadow-dom-manager.js":
/*!********************************************************************************************************************************************************************!*\
  !*** /Users/crusher/Desktop/experiment/test-v2/node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/record/shadow-dom-manager.js ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: ShadowDomManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShadowDomManager", function() { return ShadowDomManager; });
/* harmony import */ var _observer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observer.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observer.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/utils.js");
/* harmony import */ var _rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../rrweb-snapshot/es/rrweb-snapshot.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb-snapshot/es/rrweb-snapshot.js");




class ShadowDomManager {
    constructor(options) {
        this.shadowDoms = new WeakSet();
        this.restorePatches = [];
        this.mutationCb = options.mutationCb;
        this.scrollCb = options.scrollCb;
        this.bypassOptions = options.bypassOptions;
        this.mirror = options.mirror;
        const manager = this;
        this.restorePatches.push(Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["patch"])(Element.prototype, 'attachShadow', function (original) {
            return function (option) {
                const shadowRoot = original.call(this, option);
                if (this.shadowRoot)
                    manager.addShadowRoot(this.shadowRoot, this.ownerDocument);
                return shadowRoot;
            };
        }));
    }
    addShadowRoot(shadowRoot, doc) {
        if (!Object(_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_2__["isNativeShadowDom"])(shadowRoot))
            return;
        if (this.shadowDoms.has(shadowRoot))
            return;
        this.shadowDoms.add(shadowRoot);
        Object(_observer_js__WEBPACK_IMPORTED_MODULE_0__["initMutationObserver"])(Object.assign(Object.assign({}, this.bypassOptions), { doc, mutationCb: this.mutationCb, mirror: this.mirror, shadowDomManager: this }), shadowRoot);
        Object(_observer_js__WEBPACK_IMPORTED_MODULE_0__["initScrollObserver"])(Object.assign(Object.assign({}, this.bypassOptions), { scrollCb: this.scrollCb, doc: shadowRoot, mirror: this.mirror }));
        setTimeout(() => {
            if (shadowRoot.adoptedStyleSheets &&
                shadowRoot.adoptedStyleSheets.length > 0)
                this.bypassOptions.stylesheetManager.adoptStyleSheets(shadowRoot.adoptedStyleSheets, this.mirror.getId(shadowRoot.host));
            Object(_observer_js__WEBPACK_IMPORTED_MODULE_0__["initAdoptedStyleSheetObserver"])({
                mirror: this.mirror,
                stylesheetManager: this.bypassOptions.stylesheetManager,
            }, shadowRoot);
        }, 0);
    }
    observeAttachShadow(iframeElement) {
        if (iframeElement.contentWindow) {
            const manager = this;
            this.restorePatches.push(Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["patch"])(iframeElement.contentWindow.HTMLElement.prototype, 'attachShadow', function (original) {
                return function (option) {
                    const shadowRoot = original.call(this, option);
                    if (this.shadowRoot)
                        manager.addShadowRoot(this.shadowRoot, iframeElement.contentDocument);
                    return shadowRoot;
                };
            }));
        }
    }
    reset() {
        this.restorePatches.forEach((restorePatch) => restorePatch());
        this.shadowDoms = new WeakSet();
    }
}




/***/ }),

/***/ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/record/stylesheet-manager.js":
/*!********************************************************************************************************************************************************************!*\
  !*** /Users/crusher/Desktop/experiment/test-v2/node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/record/stylesheet-manager.js ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: StylesheetManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylesheetManager", function() { return StylesheetManager; });
/* harmony import */ var _rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../rrweb-snapshot/es/rrweb-snapshot.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb-snapshot/es/rrweb-snapshot.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/utils.js");



class StylesheetManager {
    constructor(options) {
        this.trackedLinkElements = new WeakSet();
        this.styleMirror = new _utils_js__WEBPACK_IMPORTED_MODULE_1__["StyleSheetMirror"]();
        this.mutationCb = options.mutationCb;
        this.adoptedStyleSheetCb = options.adoptedStyleSheetCb;
    }
    attachLinkElement(linkEl, childSn) {
        if ('_cssText' in childSn.attributes)
            this.mutationCb({
                adds: [],
                removes: [],
                texts: [],
                attributes: [
                    {
                        id: childSn.id,
                        attributes: childSn
                            .attributes,
                    },
                ],
            });
        this.trackLinkElement(linkEl);
    }
    trackLinkElement(linkEl) {
        if (this.trackedLinkElements.has(linkEl))
            return;
        this.trackedLinkElements.add(linkEl);
        this.trackStylesheetInLinkElement(linkEl);
    }
    adoptStyleSheets(sheets, hostId) {
        if (sheets.length === 0)
            return;
        const adoptedStyleSheetData = {
            id: hostId,
            styleIds: [],
        };
        const styles = [];
        for (const sheet of sheets) {
            let styleId;
            if (!this.styleMirror.has(sheet)) {
                styleId = this.styleMirror.add(sheet);
                const rules = Array.from(sheet.rules || CSSRule);
                styles.push({
                    styleId,
                    rules: rules.map((r, index) => {
                        return {
                            rule: Object(_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_0__["getCssRuleString"])(r),
                            index,
                        };
                    }),
                });
            }
            else
                styleId = this.styleMirror.getId(sheet);
            adoptedStyleSheetData.styleIds.push(styleId);
        }
        if (styles.length > 0)
            adoptedStyleSheetData.styles = styles;
        this.adoptedStyleSheetCb(adoptedStyleSheetData);
    }
    reset() {
        this.styleMirror.reset();
        this.trackedLinkElements = new WeakSet();
    }
    trackStylesheetInLinkElement(linkEl) {
    }
}




/***/ }),

/***/ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/canvas/2d.js":
/*!***********************************************************************************************************************************************************!*\
  !*** /Users/crusher/Desktop/experiment/test-v2/node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/canvas/2d.js ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return canvasMutation; });
/* harmony import */ var _ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../../ext/tslib/tslib.es6.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/ext/tslib/tslib.es6.js");
/* harmony import */ var _deserialize_args_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deserialize-args.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/canvas/deserialize-args.js");



function canvasMutation({ event, mutation, target, imageMap, errorHandler, }) {
    return Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        try {
            const ctx = target.getContext('2d');
            if (mutation.setter) {
                ctx[mutation.property] =
                    mutation.args[0];
                return;
            }
            const original = ctx[mutation.property];
            if (mutation.property === 'drawImage' &&
                typeof mutation.args[0] === 'string') {
                imageMap.get(event);
                original.apply(ctx, mutation.args);
            }
            else {
                const args = yield Promise.all(mutation.args.map(Object(_deserialize_args_js__WEBPACK_IMPORTED_MODULE_1__["deserializeArg"])(imageMap, ctx)));
                original.apply(ctx, args);
            }
        }
        catch (error) {
            errorHandler(mutation, error);
        }
    });
}




/***/ }),

/***/ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/canvas/deserialize-args.js":
/*!*************************************************************************************************************************************************************************!*\
  !*** /Users/crusher/Desktop/experiment/test-v2/node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/canvas/deserialize-args.js ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: deserializeArg, variableListFor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deserializeArg", function() { return deserializeArg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variableListFor", function() { return variableListFor; });
/* harmony import */ var _ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../../ext/tslib/tslib.es6.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/ext/tslib/tslib.es6.js");
/* harmony import */ var _ext_base64_arraybuffer_dist_base64_arraybuffer_es5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../ext/base64-arraybuffer/dist/base64-arraybuffer.es5.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/ext/base64-arraybuffer/dist/base64-arraybuffer.es5.js");



const webGLVarMap = new Map();
function variableListFor(ctx, ctor) {
    let contextMap = webGLVarMap.get(ctx);
    if (!contextMap) {
        contextMap = new Map();
        webGLVarMap.set(ctx, contextMap);
    }
    if (!contextMap.has(ctor)) {
        contextMap.set(ctor, []);
    }
    return contextMap.get(ctor);
}
function deserializeArg(imageMap, ctx, preload) {
    return (arg) => Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        if (arg && typeof arg === 'object' && 'rr_type' in arg) {
            if (preload)
                preload.isUnchanged = false;
            if (arg.rr_type === 'ImageBitmap' && 'args' in arg) {
                const args = yield deserializeArg(imageMap, ctx, preload)(arg.args);
                return yield createImageBitmap.apply(null, args);
            }
            else if ('index' in arg) {
                if (preload || ctx === null)
                    return arg;
                const { rr_type: name, index } = arg;
                return variableListFor(ctx, name)[index];
            }
            else if ('args' in arg) {
                const { rr_type: name, args } = arg;
                const ctor = window[name];
                return new ctor(...(yield Promise.all(args.map(deserializeArg(imageMap, ctx, preload)))));
            }
            else if ('base64' in arg) {
                return Object(_ext_base64_arraybuffer_dist_base64_arraybuffer_es5_js__WEBPACK_IMPORTED_MODULE_1__["decode"])(arg.base64);
            }
            else if ('src' in arg) {
                const image = imageMap.get(arg.src);
                if (image) {
                    return image;
                }
                else {
                    const image = new Image();
                    image.src = arg.src;
                    imageMap.set(arg.src, image);
                    return image;
                }
            }
            else if ('data' in arg && arg.rr_type === 'Blob') {
                const blobContents = yield Promise.all(arg.data.map(deserializeArg(imageMap, ctx, preload)));
                const blob = new Blob(blobContents, {
                    type: arg.type,
                });
                return blob;
            }
        }
        else if (Array.isArray(arg)) {
            const result = yield Promise.all(arg.map(deserializeArg(imageMap, ctx, preload)));
            return result;
        }
        return arg;
    });
}




/***/ }),

/***/ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/canvas/index.js":
/*!**************************************************************************************************************************************************************!*\
  !*** /Users/crusher/Desktop/experiment/test-v2/node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/canvas/index.js ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return canvasMutation; });
/* harmony import */ var _ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../../ext/tslib/tslib.es6.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/ext/tslib/tslib.es6.js");
/* harmony import */ var _types_dist_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../types/dist/types.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/types/dist/types.js");
/* harmony import */ var _webgl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./webgl.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/canvas/webgl.js");
/* harmony import */ var _2d_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./2d.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/canvas/2d.js");





function canvasMutation({ event, mutation, target, imageMap, canvasEventMap, errorHandler, }) {
    return Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        try {
            const precomputedMutation = canvasEventMap.get(event) || mutation;
            const commands = 'commands' in precomputedMutation
                ? precomputedMutation.commands
                : [precomputedMutation];
            if ([_types_dist_types_js__WEBPACK_IMPORTED_MODULE_1__["CanvasContext"].WebGL, _types_dist_types_js__WEBPACK_IMPORTED_MODULE_1__["CanvasContext"].WebGL2].includes(mutation.type)) {
                for (let i = 0; i < commands.length; i++) {
                    const command = commands[i];
                    yield Object(_webgl_js__WEBPACK_IMPORTED_MODULE_2__["default"])({
                        mutation: command,
                        type: mutation.type,
                        target,
                        imageMap,
                        errorHandler,
                    });
                }
                return;
            }
            for (let i = 0; i < commands.length; i++) {
                const command = commands[i];
                yield Object(_2d_js__WEBPACK_IMPORTED_MODULE_3__["default"])({
                    event,
                    mutation: command,
                    target,
                    imageMap,
                    errorHandler,
                });
            }
        }
        catch (error) {
            errorHandler(mutation, error);
        }
    });
}




/***/ }),

/***/ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/canvas/webgl.js":
/*!**************************************************************************************************************************************************************!*\
  !*** /Users/crusher/Desktop/experiment/test-v2/node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/canvas/webgl.js ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return webglMutation; });
/* harmony import */ var _ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../../ext/tslib/tslib.es6.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/ext/tslib/tslib.es6.js");
/* harmony import */ var _types_dist_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../types/dist/types.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/types/dist/types.js");
/* harmony import */ var _deserialize_args_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deserialize-args.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/canvas/deserialize-args.js");




function getContext(target, type) {
    try {
        if (type === _types_dist_types_js__WEBPACK_IMPORTED_MODULE_1__["CanvasContext"].WebGL) {
            return (target.getContext('webgl') || target.getContext('experimental-webgl'));
        }
        return target.getContext('webgl2');
    }
    catch (e) {
        return null;
    }
}
const WebGLVariableConstructorsNames = [
    'WebGLActiveInfo',
    'WebGLBuffer',
    'WebGLFramebuffer',
    'WebGLProgram',
    'WebGLRenderbuffer',
    'WebGLShader',
    'WebGLShaderPrecisionFormat',
    'WebGLTexture',
    'WebGLUniformLocation',
    'WebGLVertexArrayObject',
];
function saveToWebGLVarMap(ctx, result) {
    if (!(result === null || result === void 0 ? void 0 : result.constructor))
        return;
    const { name } = result.constructor;
    if (!WebGLVariableConstructorsNames.includes(name))
        return;
    const variables = Object(_deserialize_args_js__WEBPACK_IMPORTED_MODULE_2__["variableListFor"])(ctx, name);
    if (!variables.includes(result))
        variables.push(result);
}
function webglMutation({ mutation, target, type, imageMap, errorHandler, }) {
    return Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        try {
            const ctx = getContext(target, type);
            if (!ctx)
                return;
            if (mutation.setter) {
                ctx[mutation.property] = mutation.args[0];
                return;
            }
            const original = ctx[mutation.property];
            const args = yield Promise.all(mutation.args.map(Object(_deserialize_args_js__WEBPACK_IMPORTED_MODULE_2__["deserializeArg"])(imageMap, ctx)));
            const result = original.apply(ctx, args);
            saveToWebGLVarMap(ctx, result);
            const debugMode = false;
            if (debugMode) ;
        }
        catch (error) {
            errorHandler(mutation, error);
        }
    });
}




/***/ }),

/***/ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/index.js":
/*!*******************************************************************************************************************************************************!*\
  !*** /Users/crusher/Desktop/experiment/test-v2/node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/index.js ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: Replayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Replayer", function() { return Replayer; });
/* harmony import */ var _ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../ext/tslib/tslib.es6.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/ext/tslib/tslib.es6.js");
/* harmony import */ var _rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../rrweb-snapshot/es/rrweb-snapshot.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb-snapshot/es/rrweb-snapshot.js");
/* harmony import */ var _rrdom_es_rrdom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../rrdom/es/rrdom.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrdom/es/rrdom.js");
/* harmony import */ var _ext_mitt_dist_mitt_mjs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../ext/mitt/dist/mitt.mjs.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/ext/mitt/dist/mitt.mjs.js");
/* harmony import */ var _smoothscroll_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./smoothscroll.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/smoothscroll.js");
/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timer.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/timer.js");
/* harmony import */ var _machine_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./machine.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/machine.js");
/* harmony import */ var _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../types/dist/types.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/types/dist/types.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/utils.js");
/* harmony import */ var _styles_inject_style_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/inject-style.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/styles/inject-style.js");
/* harmony import */ var _canvas_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./canvas/index.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/canvas/index.js");
/* harmony import */ var _canvas_deserialize_args_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./canvas/deserialize-args.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/canvas/deserialize-args.js");














const SKIP_TIME_THRESHOLD = 10 * 1000;
const SKIP_TIME_INTERVAL = 5 * 1000;
const mitt = _ext_mitt_dist_mitt_mjs_js__WEBPACK_IMPORTED_MODULE_3__["default"] || _ext_mitt_dist_mitt_mjs_js__WEBPACK_IMPORTED_MODULE_3__;
const REPLAY_CONSOLE_PREFIX = '[replayer]';
const defaultMouseTailConfig = {
    duration: 500,
    lineCap: 'round',
    lineWidth: 3,
    strokeStyle: 'red',
};
function indicatesTouchDevice(e) {
    return (e.type == _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["EventType"].IncrementalSnapshot &&
        (e.data.source == _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["IncrementalSource"].TouchMove ||
            (e.data.source == _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["IncrementalSource"].MouseInteraction &&
                e.data.type == _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["MouseInteractions"].TouchStart)));
}
class Replayer {
    constructor(events, config) {
        this.usingVirtualDom = false;
        this.virtualDom = new _rrdom_es_rrdom_js__WEBPACK_IMPORTED_MODULE_2__["RRDocument"]();
        this.mouseTail = null;
        this.tailPositions = [];
        this.emitter = mitt();
        this.legacy_missingNodeRetryMap = {};
        this.cache = Object(_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["createCache"])();
        this.imageMap = new Map();
        this.canvasEventMap = new Map();
        this.mirror = Object(_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["createMirror"])();
        this.styleMirror = new _utils_js__WEBPACK_IMPORTED_MODULE_8__["StyleSheetMirror"]();
        this.firstFullSnapshot = null;
        this.newDocumentQueue = [];
        this.mousePos = null;
        this.touchActive = null;
        this.lastSelectionData = null;
        this.constructedStyleMutations = [];
        this.adoptedStyleSheets = [];
        this.handleResize = (dimension) => {
            this.iframe.style.display = 'inherit';
            for (const el of [this.mouseTail, this.iframe]) {
                if (!el) {
                    continue;
                }
                el.setAttribute('width', String(dimension.width));
                el.setAttribute('height', String(dimension.height));
            }
        };
        this.applyEventsSynchronously = (events) => {
            for (const event of events) {
                switch (event.type) {
                    case _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["EventType"].DomContentLoaded:
                    case _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["EventType"].Load:
                    case _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["EventType"].Custom:
                        continue;
                    case _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["EventType"].FullSnapshot:
                    case _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["EventType"].Meta:
                    case _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["EventType"].Plugin:
                    case _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["EventType"].IncrementalSnapshot:
                        break;
                }
                const castFn = this.getCastFn(event, true);
                castFn();
            }
            if (this.touchActive === true) {
                this.mouse.classList.add('touch-active');
            }
            else if (this.touchActive === false) {
                this.mouse.classList.remove('touch-active');
            }
            this.touchActive = null;
        };
        this.getCastFn = (event, isSync = false) => {
            let castFn;
            switch (event.type) {
                case _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["EventType"].DomContentLoaded:
                case _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["EventType"].Load:
                    break;
                case _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["EventType"].Custom:
                    castFn = () => {
                        this.emitter.emit(_types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["ReplayerEvents"].CustomEvent, event);
                    };
                    break;
                case _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["EventType"].Meta:
                    castFn = () => this.emitter.emit(_types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["ReplayerEvents"].Resize, {
                        width: event.data.width,
                        height: event.data.height,
                    });
                    break;
                case _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["EventType"].FullSnapshot:
                    castFn = () => {
                        var _a;
                        if (this.firstFullSnapshot) {
                            if (this.firstFullSnapshot === event) {
                                this.firstFullSnapshot = true;
                                return;
                            }
                        }
                        else {
                            this.firstFullSnapshot = true;
                        }
                        this.rebuildFullSnapshot(event, isSync);
                        (_a = this.iframe.contentWindow) === null || _a === void 0 ? void 0 : _a.scrollTo(event.data.initialOffset);
                        this.styleMirror.reset();
                    };
                    break;
                case _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["EventType"].IncrementalSnapshot:
                    castFn = () => {
                        this.applyIncremental(event, isSync);
                        if (isSync) {
                            return;
                        }
                        if (event === this.nextUserInteractionEvent) {
                            this.nextUserInteractionEvent = null;
                            this.backToNormal();
                        }
                        if (this.config.skipInactive && !this.nextUserInteractionEvent) {
                            for (const _event of this.service.state.context.events) {
                                if (_event.timestamp <= event.timestamp) {
                                    continue;
                                }
                                if (this.isUserInteraction(_event)) {
                                    if (_event.delay - event.delay >
                                        SKIP_TIME_THRESHOLD *
                                            this.speedService.state.context.timer.speed) {
                                        this.nextUserInteractionEvent = _event;
                                    }
                                    break;
                                }
                            }
                            if (this.nextUserInteractionEvent) {
                                const skipTime = this.nextUserInteractionEvent.delay - event.delay;
                                const payload = {
                                    speed: Math.min(Math.round(skipTime / SKIP_TIME_INTERVAL), this.config.maxSpeed),
                                };
                                this.speedService.send({ type: 'FAST_FORWARD', payload });
                                this.emitter.emit(_types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["ReplayerEvents"].SkipStart, payload);
                            }
                        }
                    };
                    break;
            }
            const wrappedCastFn = () => {
                if (castFn) {
                    castFn();
                }
                for (const plugin of this.config.plugins || []) {
                    if (plugin.handler)
                        plugin.handler(event, isSync, { replayer: this });
                }
                this.service.send({ type: 'CAST_EVENT', payload: { event } });
                const last_index = this.service.state.context.events.length - 1;
                if (event === this.service.state.context.events[last_index]) {
                    const finish = () => {
                        if (last_index < this.service.state.context.events.length - 1) {
                            return;
                        }
                        this.backToNormal();
                        this.service.send('END');
                        this.emitter.emit(_types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["ReplayerEvents"].Finish);
                    };
                    if (event.type === _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["EventType"].IncrementalSnapshot &&
                        event.data.source === _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["IncrementalSource"].MouseMove &&
                        event.data.positions.length) {
                        setTimeout(() => {
                            finish();
                        }, Math.max(0, -event.data.positions[0].timeOffset + 50));
                    }
                    else {
                        finish();
                    }
                }
                this.emitter.emit(_types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["ReplayerEvents"].EventCast, event);
            };
            return wrappedCastFn;
        };
        if (!(config === null || config === void 0 ? void 0 : config.liveMode) && events.length < 2) {
            throw new Error('Replayer need at least 2 events.');
        }
        const defaultConfig = {
            speed: 1,
            maxSpeed: 360,
            root: document.body,
            loadTimeout: 0,
            skipInactive: false,
            showWarning: true,
            showDebug: false,
            blockClass: 'rr-block',
            liveMode: false,
            insertStyleRules: [],
            triggerFocus: true,
            UNSAFE_replayCanvas: false,
            pauseAnimation: true,
            mouseTail: defaultMouseTailConfig,
            useVirtualDom: true,
        };
        this.config = Object.assign({}, defaultConfig, config);
        this.handleResize = this.handleResize.bind(this);
        this.getCastFn = this.getCastFn.bind(this);
        this.applyEventsSynchronously = this.applyEventsSynchronously.bind(this);
        this.emitter.on(_types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["ReplayerEvents"].Resize, this.handleResize);
        this.setupDom();
        for (const plugin of this.config.plugins || []) {
            if (plugin.getMirror)
                plugin.getMirror({ nodeMirror: this.mirror });
        }
        this.emitter.on(_types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["ReplayerEvents"].Flush, () => {
            if (this.usingVirtualDom) {
                const replayerHandler = {
                    mirror: this.mirror,
                    applyCanvas: (canvasEvent, canvasMutationData, target) => {
                        void Object(_canvas_index_js__WEBPACK_IMPORTED_MODULE_10__["default"])({
                            event: canvasEvent,
                            mutation: canvasMutationData,
                            target,
                            imageMap: this.imageMap,
                            canvasEventMap: this.canvasEventMap,
                            errorHandler: this.warnCanvasMutationFailed.bind(this),
                        });
                    },
                    applyInput: this.applyInput.bind(this),
                    applyScroll: this.applyScroll.bind(this),
                    applyStyleSheetMutation: (data, styleSheet) => {
                        if (data.source === _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["IncrementalSource"].StyleSheetRule)
                            this.applyStyleSheetRule(data, styleSheet);
                        else if (data.source === _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["IncrementalSource"].StyleDeclaration)
                            this.applyStyleDeclaration(data, styleSheet);
                    },
                };
                this.iframe.contentDocument &&
                    Object(_rrdom_es_rrdom_js__WEBPACK_IMPORTED_MODULE_2__["diff"])(this.iframe.contentDocument, this.virtualDom, replayerHandler, this.virtualDom.mirror);
                this.virtualDom.destroyTree();
                this.usingVirtualDom = false;
                if (Object.keys(this.legacy_missingNodeRetryMap).length) {
                    for (const key in this.legacy_missingNodeRetryMap) {
                        try {
                            const value = this.legacy_missingNodeRetryMap[key];
                            const realNode = Object(_rrdom_es_rrdom_js__WEBPACK_IMPORTED_MODULE_2__["createOrGetNode"])(value.node, this.mirror, this.virtualDom.mirror);
                            Object(_rrdom_es_rrdom_js__WEBPACK_IMPORTED_MODULE_2__["diff"])(realNode, value.node, replayerHandler, this.virtualDom.mirror);
                            value.node = realNode;
                        }
                        catch (error) {
                            if (this.config.showWarning) {
                                console.warn(error);
                            }
                        }
                    }
                }
                this.constructedStyleMutations.forEach((data) => {
                    this.applyStyleSheetMutation(data);
                });
                this.constructedStyleMutations = [];
                this.adoptedStyleSheets.forEach((data) => {
                    this.applyAdoptedStyleSheet(data);
                });
                this.adoptedStyleSheets = [];
            }
            if (this.mousePos) {
                this.moveAndHover(this.mousePos.x, this.mousePos.y, this.mousePos.id, true, this.mousePos.debugData);
                this.mousePos = null;
            }
            if (this.lastSelectionData) {
                this.applySelection(this.lastSelectionData);
                this.lastSelectionData = null;
            }
        });
        this.emitter.on(_types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["ReplayerEvents"].PlayBack, () => {
            this.firstFullSnapshot = null;
            this.mirror.reset();
            this.styleMirror.reset();
        });
        const timer = new _timer_js__WEBPACK_IMPORTED_MODULE_5__["Timer"]([], {
            speed: this.config.speed,
            liveMode: this.config.liveMode,
        });
        this.service = Object(_machine_js__WEBPACK_IMPORTED_MODULE_6__["createPlayerService"])({
            events: events
                .map((e) => {
                if (config && config.unpackFn) {
                    return config.unpackFn(e);
                }
                return e;
            })
                .sort((a1, a2) => a1.timestamp - a2.timestamp),
            timer,
            timeOffset: 0,
            baselineTime: 0,
            lastPlayedEvent: null,
        }, {
            getCastFn: this.getCastFn,
            applyEventsSynchronously: this.applyEventsSynchronously,
            emitter: this.emitter,
        });
        this.service.start();
        this.service.subscribe((state) => {
            this.emitter.emit(_types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["ReplayerEvents"].StateChange, {
                player: state,
            });
        });
        this.speedService = Object(_machine_js__WEBPACK_IMPORTED_MODULE_6__["createSpeedService"])({
            normalSpeed: -1,
            timer,
        });
        this.speedService.start();
        this.speedService.subscribe((state) => {
            this.emitter.emit(_types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["ReplayerEvents"].StateChange, {
                speed: state,
            });
        });
        const firstMeta = this.service.state.context.events.find((e) => e.type === _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["EventType"].Meta);
        const firstFullsnapshot = this.service.state.context.events.find((e) => e.type === _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["EventType"].FullSnapshot);
        if (firstMeta) {
            const { width, height } = firstMeta.data;
            setTimeout(() => {
                this.emitter.emit(_types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["ReplayerEvents"].Resize, {
                    width,
                    height,
                });
            }, 0);
        }
        if (firstFullsnapshot) {
            setTimeout(() => {
                var _a;
                if (this.firstFullSnapshot) {
                    return;
                }
                this.firstFullSnapshot = firstFullsnapshot;
                this.rebuildFullSnapshot(firstFullsnapshot);
                (_a = this.iframe.contentWindow) === null || _a === void 0 ? void 0 : _a.scrollTo(firstFullsnapshot.data.initialOffset);
            }, 1);
        }
        if (this.service.state.context.events.find(indicatesTouchDevice)) {
            this.mouse.classList.add('touch-device');
        }
    }
    get timer() {
        return this.service.state.context.timer;
    }
    on(event, handler) {
        this.emitter.on(event, handler);
        return this;
    }
    off(event, handler) {
        this.emitter.off(event, handler);
        return this;
    }
    setConfig(config) {
        Object.keys(config).forEach((key) => {
            config[key];
            this.config[key] = config[key];
        });
        if (!this.config.skipInactive) {
            this.backToNormal();
        }
        if (typeof config.speed !== 'undefined') {
            this.speedService.send({
                type: 'SET_SPEED',
                payload: {
                    speed: config.speed,
                },
            });
        }
        if (typeof config.mouseTail !== 'undefined') {
            if (config.mouseTail === false) {
                if (this.mouseTail) {
                    this.mouseTail.style.display = 'none';
                }
            }
            else {
                if (!this.mouseTail) {
                    this.mouseTail = document.createElement('canvas');
                    this.mouseTail.width = Number.parseFloat(this.iframe.width);
                    this.mouseTail.height = Number.parseFloat(this.iframe.height);
                    this.mouseTail.classList.add('replayer-mouse-tail');
                    this.wrapper.insertBefore(this.mouseTail, this.iframe);
                }
                this.mouseTail.style.display = 'inherit';
            }
        }
    }
    getMetaData() {
        const firstEvent = this.service.state.context.events[0];
        const lastEvent = this.service.state.context.events[this.service.state.context.events.length - 1];
        return {
            startTime: firstEvent.timestamp,
            endTime: lastEvent.timestamp,
            totalTime: lastEvent.timestamp - firstEvent.timestamp,
        };
    }
    getCurrentTime() {
        return this.timer.timeOffset + this.getTimeOffset();
    }
    getTimeOffset() {
        const { baselineTime, events } = this.service.state.context;
        return baselineTime - events[0].timestamp;
    }
    getMirror() {
        return this.mirror;
    }
    play(timeOffset = 0) {
        var _a, _b;
        if (this.service.state.matches('paused')) {
            this.service.send({ type: 'PLAY', payload: { timeOffset } });
        }
        else {
            this.service.send({ type: 'PAUSE' });
            this.service.send({ type: 'PLAY', payload: { timeOffset } });
        }
        (_b = (_a = this.iframe.contentDocument) === null || _a === void 0 ? void 0 : _a.getElementsByTagName('html')[0]) === null || _b === void 0 ? void 0 : _b.classList.remove('rrweb-paused');
        this.emitter.emit(_types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["ReplayerEvents"].Start);
    }
    pause(timeOffset) {
        var _a, _b;
        if (timeOffset === undefined && this.service.state.matches('playing')) {
            this.service.send({ type: 'PAUSE' });
        }
        if (typeof timeOffset === 'number') {
            this.play(timeOffset);
            this.service.send({ type: 'PAUSE' });
        }
        (_b = (_a = this.iframe.contentDocument) === null || _a === void 0 ? void 0 : _a.getElementsByTagName('html')[0]) === null || _b === void 0 ? void 0 : _b.classList.add('rrweb-paused');
        this.emitter.emit(_types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["ReplayerEvents"].Pause);
    }
    resume(timeOffset = 0) {
        console.warn(`The 'resume' was deprecated in 1.0. Please use 'play' method which has the same interface.`);
        this.play(timeOffset);
        this.emitter.emit(_types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["ReplayerEvents"].Resume);
    }
    destroy() {
        this.pause();
        this.config.root.removeChild(this.wrapper);
        this.emitter.emit(_types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["ReplayerEvents"].Destroy);
    }
    startLive(baselineTime) {
        this.service.send({ type: 'TO_LIVE', payload: { baselineTime } });
    }
    addEvent(rawEvent) {
        const event = this.config.unpackFn
            ? this.config.unpackFn(rawEvent)
            : rawEvent;
        if (indicatesTouchDevice(event)) {
            this.mouse.classList.add('touch-device');
        }
        void Promise.resolve().then(() => this.service.send({ type: 'ADD_EVENT', payload: { event } }));
    }
    enableInteract() {
        this.iframe.setAttribute('scrolling', 'auto');
        this.iframe.style.pointerEvents = 'auto';
    }
    disableInteract() {
        this.iframe.setAttribute('scrolling', 'no');
        this.iframe.style.pointerEvents = 'none';
    }
    resetCache() {
        this.cache = Object(_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["createCache"])();
    }
    setupDom() {
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('replayer-wrapper');
        this.config.root.appendChild(this.wrapper);
        this.mouse = document.createElement('div');
        this.mouse.classList.add('replayer-mouse');
        this.wrapper.appendChild(this.mouse);
        if (this.config.mouseTail !== false) {
            this.mouseTail = document.createElement('canvas');
            this.mouseTail.classList.add('replayer-mouse-tail');
            this.mouseTail.style.display = 'inherit';
            this.wrapper.appendChild(this.mouseTail);
        }
        this.iframe = document.createElement('iframe');
        const attributes = ['allow-same-origin'];
        if (this.config.UNSAFE_replayCanvas) {
            attributes.push('allow-scripts');
        }
        this.iframe.style.display = 'none';
        this.iframe.setAttribute('sandbox', attributes.join(' '));
        this.disableInteract();
        this.wrapper.appendChild(this.iframe);
        if (this.iframe.contentWindow && this.iframe.contentDocument) {
            Object(_smoothscroll_js__WEBPACK_IMPORTED_MODULE_4__["polyfill"])(this.iframe.contentWindow, this.iframe.contentDocument);
            Object(_utils_js__WEBPACK_IMPORTED_MODULE_8__["polyfill"])(this.iframe.contentWindow);
        }
    }
    rebuildFullSnapshot(event, isSync = false) {
        if (!this.iframe.contentDocument) {
            return console.warn('Looks like your replayer has been destroyed.');
        }
        if (Object.keys(this.legacy_missingNodeRetryMap).length) {
            console.warn('Found unresolved missing node map', this.legacy_missingNodeRetryMap);
        }
        this.legacy_missingNodeRetryMap = {};
        const collected = [];
        const afterAppend = (builtNode, id) => {
            this.collectIframeAndAttachDocument(collected, builtNode);
            for (const plugin of this.config.plugins || []) {
                if (plugin.onBuild)
                    plugin.onBuild(builtNode, {
                        id,
                        replayer: this,
                    });
            }
        };
        Object(_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["rebuild"])(event.data.node, {
            doc: this.iframe.contentDocument,
            afterAppend,
            cache: this.cache,
            mirror: this.mirror,
        });
        afterAppend(this.iframe.contentDocument, event.data.node.id);
        for (const { mutationInQueue, builtNode } of collected) {
            this.attachDocumentToIframe(mutationInQueue, builtNode);
            this.newDocumentQueue = this.newDocumentQueue.filter((m) => m !== mutationInQueue);
        }
        const { documentElement, head } = this.iframe.contentDocument;
        this.insertStyleRules(documentElement, head);
        if (!this.service.state.matches('playing')) {
            this.iframe.contentDocument
                .getElementsByTagName('html')[0]
                .classList.add('rrweb-paused');
        }
        this.emitter.emit(_types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["ReplayerEvents"].FullsnapshotRebuilded, event);
        if (!isSync) {
            this.waitForStylesheetLoad();
        }
        if (this.config.UNSAFE_replayCanvas) {
            void this.preloadAllImages();
        }
    }
    insertStyleRules(documentElement, head) {
        var _a;
        const injectStylesRules = Object(_styles_inject_style_js__WEBPACK_IMPORTED_MODULE_9__["default"])(this.config.blockClass).concat(this.config.insertStyleRules);
        if (this.config.pauseAnimation) {
            injectStylesRules.push('html.rrweb-paused *, html.rrweb-paused *:before, html.rrweb-paused *:after { animation-play-state: paused !important; }');
        }
        if (this.usingVirtualDom) {
            const styleEl = this.virtualDom.createElement('style');
            this.virtualDom.mirror.add(styleEl, Object(_rrdom_es_rrdom_js__WEBPACK_IMPORTED_MODULE_2__["getDefaultSN"])(styleEl, this.virtualDom.unserializedId));
            documentElement.insertBefore(styleEl, head);
            styleEl.rules.push({
                source: _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["IncrementalSource"].StyleSheetRule,
                adds: injectStylesRules.map((cssText, index) => ({
                    rule: cssText,
                    index,
                })),
            });
        }
        else {
            const styleEl = document.createElement('style');
            documentElement.insertBefore(styleEl, head);
            for (let idx = 0; idx < injectStylesRules.length; idx++) {
                (_a = styleEl.sheet) === null || _a === void 0 ? void 0 : _a.insertRule(injectStylesRules[idx], idx);
            }
        }
    }
    attachDocumentToIframe(mutation, iframeEl) {
        const mirror = this.usingVirtualDom
            ? this.virtualDom.mirror
            : this.mirror;
        const collected = [];
        const afterAppend = (builtNode, id) => {
            this.collectIframeAndAttachDocument(collected, builtNode);
            const sn = mirror.getMeta(builtNode);
            if ((sn === null || sn === void 0 ? void 0 : sn.type) === _rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["NodeType"].Element &&
                (sn === null || sn === void 0 ? void 0 : sn.tagName.toUpperCase()) === 'HTML') {
                const { documentElement, head } = iframeEl.contentDocument;
                this.insertStyleRules(documentElement, head);
            }
            for (const plugin of this.config.plugins || []) {
                if (plugin.onBuild)
                    plugin.onBuild(builtNode, {
                        id,
                        replayer: this,
                    });
            }
        };
        Object(_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["buildNodeWithSN"])(mutation.node, {
            doc: iframeEl.contentDocument,
            mirror: mirror,
            hackCss: true,
            skipChild: false,
            afterAppend,
            cache: this.cache,
        });
        afterAppend(iframeEl.contentDocument, mutation.node.id);
        for (const { mutationInQueue, builtNode } of collected) {
            this.attachDocumentToIframe(mutationInQueue, builtNode);
            this.newDocumentQueue = this.newDocumentQueue.filter((m) => m !== mutationInQueue);
        }
    }
    collectIframeAndAttachDocument(collected, builtNode) {
        if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_8__["isSerializedIframe"])(builtNode, this.mirror)) {
            const mutationInQueue = this.newDocumentQueue.find((m) => m.parentId === this.mirror.getId(builtNode));
            if (mutationInQueue) {
                collected.push({
                    mutationInQueue,
                    builtNode: builtNode,
                });
            }
        }
    }
    waitForStylesheetLoad() {
        var _a;
        const head = (_a = this.iframe.contentDocument) === null || _a === void 0 ? void 0 : _a.head;
        if (head) {
            const unloadSheets = new Set();
            let timer;
            let beforeLoadState = this.service.state;
            const stateHandler = () => {
                beforeLoadState = this.service.state;
            };
            this.emitter.on(_types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["ReplayerEvents"].Start, stateHandler);
            this.emitter.on(_types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["ReplayerEvents"].Pause, stateHandler);
            const unsubscribe = () => {
                this.emitter.off(_types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["ReplayerEvents"].Start, stateHandler);
                this.emitter.off(_types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["ReplayerEvents"].Pause, stateHandler);
            };
            head
                .querySelectorAll('link[rel="stylesheet"]')
                .forEach((css) => {
                if (!css.sheet) {
                    unloadSheets.add(css);
                    css.addEventListener('load', () => {
                        unloadSheets.delete(css);
                        if (unloadSheets.size === 0 && timer !== -1) {
                            if (beforeLoadState.matches('playing')) {
                                this.play(this.getCurrentTime());
                            }
                            this.emitter.emit(_types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["ReplayerEvents"].LoadStylesheetEnd);
                            if (timer) {
                                clearTimeout(timer);
                            }
                            unsubscribe();
                        }
                    });
                }
            });
            if (unloadSheets.size > 0) {
                this.service.send({ type: 'PAUSE' });
                this.emitter.emit(_types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["ReplayerEvents"].LoadStylesheetStart);
                timer = setTimeout(() => {
                    if (beforeLoadState.matches('playing')) {
                        this.play(this.getCurrentTime());
                    }
                    timer = -1;
                    unsubscribe();
                }, this.config.loadTimeout);
            }
        }
    }
    preloadAllImages() {
        return Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.service.state;
            const stateHandler = () => {
                this.service.state;
            };
            this.emitter.on(_types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["ReplayerEvents"].Start, stateHandler);
            this.emitter.on(_types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["ReplayerEvents"].Pause, stateHandler);
            const promises = [];
            for (const event of this.service.state.context.events) {
                if (event.type === _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["EventType"].IncrementalSnapshot &&
                    event.data.source === _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["IncrementalSource"].CanvasMutation) {
                    promises.push(this.deserializeAndPreloadCanvasEvents(event.data, event));
                    const commands = 'commands' in event.data ? event.data.commands : [event.data];
                    commands.forEach((c) => {
                        this.preloadImages(c, event);
                    });
                }
            }
            return Promise.all(promises);
        });
    }
    preloadImages(data, event) {
        if (data.property === 'drawImage' &&
            typeof data.args[0] === 'string' &&
            !this.imageMap.has(event)) {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            const imgd = ctx === null || ctx === void 0 ? void 0 : ctx.createImageData(canvas.width, canvas.height);
            imgd === null || imgd === void 0 ? void 0 : imgd.data;
            JSON.parse(data.args[0]);
            ctx === null || ctx === void 0 ? void 0 : ctx.putImageData(imgd, 0, 0);
        }
    }
    deserializeAndPreloadCanvasEvents(data, event) {
        return Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.canvasEventMap.has(event)) {
                const status = {
                    isUnchanged: true,
                };
                if ('commands' in data) {
                    const commands = yield Promise.all(data.commands.map((c) => Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        const args = yield Promise.all(c.args.map(Object(_canvas_deserialize_args_js__WEBPACK_IMPORTED_MODULE_11__["deserializeArg"])(this.imageMap, null, status)));
                        return Object.assign(Object.assign({}, c), { args });
                    })));
                    if (status.isUnchanged === false)
                        this.canvasEventMap.set(event, Object.assign(Object.assign({}, data), { commands }));
                }
                else {
                    const args = yield Promise.all(data.args.map(Object(_canvas_deserialize_args_js__WEBPACK_IMPORTED_MODULE_11__["deserializeArg"])(this.imageMap, null, status)));
                    if (status.isUnchanged === false)
                        this.canvasEventMap.set(event, Object.assign(Object.assign({}, data), { args }));
                }
            }
        });
    }
    applyIncremental(e, isSync) {
        var _a, _b, _c;
        const { data: d } = e;
        switch (d.source) {
            case _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["IncrementalSource"].Mutation: {
                try {
                    this.applyMutation(d, isSync);
                }
                catch (error) {
                    this.warn(`Exception in mutation ${error.message || error}`, d);
                }
                break;
            }
            case _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["IncrementalSource"].Drag:
            case _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["IncrementalSource"].TouchMove:
            case _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["IncrementalSource"].MouseMove:
                if (isSync) {
                    const lastPosition = d.positions[d.positions.length - 1];
                    this.mousePos = {
                        x: lastPosition.x,
                        y: lastPosition.y,
                        id: lastPosition.id,
                        debugData: d,
                    };
                }
                else {
                    d.positions.forEach((p) => {
                        const action = {
                            doAction: () => {
                                this.moveAndHover(p.x, p.y, p.id, isSync, d);
                            },
                            delay: p.timeOffset +
                                e.timestamp -
                                this.service.state.context.baselineTime,
                        };
                        this.timer.addAction(action);
                    });
                    this.timer.addAction({
                        doAction() {
                        },
                        delay: e.delay - ((_a = d.positions[0]) === null || _a === void 0 ? void 0 : _a.timeOffset),
                    });
                }
                break;
            case _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["IncrementalSource"].MouseInteraction: {
                if (d.id === -1 || isSync) {
                    break;
                }
                const event = new Event(_types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["MouseInteractions"][d.type].toLowerCase());
                const target = this.mirror.getNode(d.id);
                if (!target) {
                    return this.debugNodeNotFound(d, d.id);
                }
                this.emitter.emit(_types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["ReplayerEvents"].MouseInteraction, {
                    type: d.type,
                    target,
                });
                const { triggerFocus } = this.config;
                switch (d.type) {
                    case _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["MouseInteractions"].Blur:
                        if ('blur' in target) {
                            target.blur();
                        }
                        break;
                    case _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["MouseInteractions"].Focus:
                        if (triggerFocus && target.focus) {
                            target.focus({
                                preventScroll: true,
                            });
                        }
                        break;
                    case _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["MouseInteractions"].Click:
                    case _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["MouseInteractions"].TouchStart:
                    case _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["MouseInteractions"].TouchEnd:
                        if (isSync) {
                            if (d.type === _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["MouseInteractions"].TouchStart) {
                                this.touchActive = true;
                            }
                            else if (d.type === _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["MouseInteractions"].TouchEnd) {
                                this.touchActive = false;
                            }
                            this.mousePos = {
                                x: d.x,
                                y: d.y,
                                id: d.id,
                                debugData: d,
                            };
                        }
                        else {
                            if (d.type === _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["MouseInteractions"].TouchStart) {
                                this.tailPositions.length = 0;
                            }
                            this.moveAndHover(d.x, d.y, d.id, isSync, d);
                            if (d.type === _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["MouseInteractions"].Click) {
                                this.mouse.classList.remove('active');
                                void this.mouse.offsetWidth;
                                this.mouse.classList.add('active');
                            }
                            else if (d.type === _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["MouseInteractions"].TouchStart) {
                                void this.mouse.offsetWidth;
                                this.mouse.classList.add('touch-active');
                            }
                            else if (d.type === _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["MouseInteractions"].TouchEnd) {
                                this.mouse.classList.remove('touch-active');
                            }
                        }
                        break;
                    case _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["MouseInteractions"].TouchCancel:
                        if (isSync) {
                            this.touchActive = false;
                        }
                        else {
                            this.mouse.classList.remove('touch-active');
                        }
                        break;
                    default:
                        target.dispatchEvent(event);
                }
                break;
            }
            case _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["IncrementalSource"].Scroll: {
                if (d.id === -1) {
                    break;
                }
                if (this.usingVirtualDom) {
                    const target = this.virtualDom.mirror.getNode(d.id);
                    if (!target) {
                        return this.debugNodeNotFound(d, d.id);
                    }
                    target.scrollData = d;
                    break;
                }
                this.applyScroll(d, isSync);
                break;
            }
            case _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["IncrementalSource"].ViewportResize:
                this.emitter.emit(_types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["ReplayerEvents"].Resize, {
                    width: d.width,
                    height: d.height,
                });
                break;
            case _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["IncrementalSource"].Input: {
                if (d.id === -1) {
                    break;
                }
                if (this.usingVirtualDom) {
                    const target = this.virtualDom.mirror.getNode(d.id);
                    if (!target) {
                        return this.debugNodeNotFound(d, d.id);
                    }
                    target.inputData = d;
                    break;
                }
                this.applyInput(d);
                break;
            }
            case _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["IncrementalSource"].MediaInteraction: {
                const target = this.usingVirtualDom
                    ? this.virtualDom.mirror.getNode(d.id)
                    : this.mirror.getNode(d.id);
                if (!target) {
                    return this.debugNodeNotFound(d, d.id);
                }
                const mediaEl = target;
                try {
                    if (d.currentTime) {
                        mediaEl.currentTime = d.currentTime;
                    }
                    if (d.volume) {
                        mediaEl.volume = d.volume;
                    }
                    if (d.muted) {
                        mediaEl.muted = d.muted;
                    }
                    if (d.type === 1) {
                        mediaEl.pause();
                    }
                    if (d.type === 0) {
                        void mediaEl.play();
                    }
                    if (d.type === 4) {
                        mediaEl.playbackRate = d.playbackRate;
                    }
                }
                catch (error) {
                    if (this.config.showWarning) {
                        console.warn(`Failed to replay media interactions: ${error.message || error}`);
                    }
                }
                break;
            }
            case _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["IncrementalSource"].StyleSheetRule:
            case _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["IncrementalSource"].StyleDeclaration: {
                if (this.usingVirtualDom) {
                    if (d.styleId)
                        this.constructedStyleMutations.push(d);
                    else if (d.id)
                        (_b = this.virtualDom.mirror.getNode(d.id)) === null || _b === void 0 ? void 0 : _b.rules.push(d);
                }
                else
                    this.applyStyleSheetMutation(d);
                break;
            }
            case _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["IncrementalSource"].CanvasMutation: {
                if (!this.config.UNSAFE_replayCanvas) {
                    return;
                }
                if (this.usingVirtualDom) {
                    const target = this.virtualDom.mirror.getNode(d.id);
                    if (!target) {
                        return this.debugNodeNotFound(d, d.id);
                    }
                    target.canvasMutations.push({
                        event: e,
                        mutation: d,
                    });
                }
                else {
                    const target = this.mirror.getNode(d.id);
                    if (!target) {
                        return this.debugNodeNotFound(d, d.id);
                    }
                    void Object(_canvas_index_js__WEBPACK_IMPORTED_MODULE_10__["default"])({
                        event: e,
                        mutation: d,
                        target: target,
                        imageMap: this.imageMap,
                        canvasEventMap: this.canvasEventMap,
                        errorHandler: this.warnCanvasMutationFailed.bind(this),
                    });
                }
                break;
            }
            case _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["IncrementalSource"].Font: {
                try {
                    const fontFace = new FontFace(d.family, d.buffer
                        ? new Uint8Array(JSON.parse(d.fontSource))
                        : d.fontSource, d.descriptors);
                    (_c = this.iframe.contentDocument) === null || _c === void 0 ? void 0 : _c.fonts.add(fontFace);
                }
                catch (error) {
                    if (this.config.showWarning) {
                        console.warn(error);
                    }
                }
                break;
            }
            case _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["IncrementalSource"].Selection: {
                if (isSync) {
                    this.lastSelectionData = d;
                    break;
                }
                this.applySelection(d);
                break;
            }
            case _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["IncrementalSource"].AdoptedStyleSheet: {
                if (this.usingVirtualDom)
                    this.adoptedStyleSheets.push(d);
                else
                    this.applyAdoptedStyleSheet(d);
                break;
            }
        }
    }
    applyMutation(d, isSync) {
        if (this.config.useVirtualDom && !this.usingVirtualDom && isSync) {
            this.usingVirtualDom = true;
            Object(_rrdom_es_rrdom_js__WEBPACK_IMPORTED_MODULE_2__["buildFromDom"])(this.iframe.contentDocument, this.mirror, this.virtualDom);
            if (Object.keys(this.legacy_missingNodeRetryMap).length) {
                for (const key in this.legacy_missingNodeRetryMap) {
                    try {
                        const value = this.legacy_missingNodeRetryMap[key];
                        const virtualNode = Object(_rrdom_es_rrdom_js__WEBPACK_IMPORTED_MODULE_2__["buildFromNode"])(value.node, this.virtualDom, this.mirror);
                        if (virtualNode)
                            value.node = virtualNode;
                    }
                    catch (error) {
                        if (this.config.showWarning) {
                            console.warn(error);
                        }
                    }
                }
            }
        }
        const mirror = this.usingVirtualDom ? this.virtualDom.mirror : this.mirror;
        d.removes.forEach((mutation) => {
            var _a;
            const target = mirror.getNode(mutation.id);
            if (!target) {
                if (d.removes.find((r) => r.id === mutation.parentId)) {
                    return;
                }
                return this.warnNodeNotFound(d, mutation.id);
            }
            let parent = mirror.getNode(mutation.parentId);
            if (!parent) {
                return this.warnNodeNotFound(d, mutation.parentId);
            }
            if (mutation.isShadow && Object(_utils_js__WEBPACK_IMPORTED_MODULE_8__["hasShadowRoot"])(parent)) {
                parent = parent.shadowRoot;
            }
            mirror.removeNodeFromMap(target);
            if (parent)
                try {
                    parent.removeChild(target);
                    if (this.usingVirtualDom &&
                        target.nodeName === '#text' &&
                        parent.nodeName === 'STYLE' &&
                        ((_a = parent.rules) === null || _a === void 0 ? void 0 : _a.length) > 0)
                        parent.rules = [];
                }
                catch (error) {
                    if (error instanceof DOMException) {
                        this.warn('parent could not remove child in mutation', parent, target, d);
                    }
                    else {
                        throw error;
                    }
                }
        });
        const legacy_missingNodeMap = Object.assign({}, this.legacy_missingNodeRetryMap);
        const queue = [];
        const nextNotInDOM = (mutation) => {
            let next = null;
            if (mutation.nextId) {
                next = mirror.getNode(mutation.nextId);
            }
            if (mutation.nextId !== null &&
                mutation.nextId !== undefined &&
                mutation.nextId !== -1 &&
                !next) {
                return true;
            }
            return false;
        };
        const appendNode = (mutation) => {
            var _a;
            if (!this.iframe.contentDocument) {
                return console.warn('Looks like your replayer has been destroyed.');
            }
            let parent = mirror.getNode(mutation.parentId);
            if (!parent) {
                if (mutation.node.type === _rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["NodeType"].Document) {
                    return this.newDocumentQueue.push(mutation);
                }
                return queue.push(mutation);
            }
            if (mutation.node.isShadow) {
                if (!Object(_utils_js__WEBPACK_IMPORTED_MODULE_8__["hasShadowRoot"])(parent)) {
                    parent.attachShadow({ mode: 'open' });
                    parent = parent.shadowRoot;
                }
                else
                    parent = parent.shadowRoot;
            }
            let previous = null;
            let next = null;
            if (mutation.previousId) {
                previous = mirror.getNode(mutation.previousId);
            }
            if (mutation.nextId) {
                next = mirror.getNode(mutation.nextId);
            }
            if (nextNotInDOM(mutation)) {
                return queue.push(mutation);
            }
            if (mutation.node.rootId && !mirror.getNode(mutation.node.rootId)) {
                return;
            }
            const targetDoc = mutation.node.rootId
                ? mirror.getNode(mutation.node.rootId)
                : this.usingVirtualDom
                    ? this.virtualDom
                    : this.iframe.contentDocument;
            if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_8__["isSerializedIframe"])(parent, mirror)) {
                this.attachDocumentToIframe(mutation, parent);
                return;
            }
            const afterAppend = (node, id) => {
                for (const plugin of this.config.plugins || []) {
                    if (plugin.onBuild)
                        plugin.onBuild(node, { id, replayer: this });
                }
            };
            const target = Object(_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["buildNodeWithSN"])(mutation.node, {
                doc: targetDoc,
                mirror: mirror,
                skipChild: true,
                hackCss: true,
                cache: this.cache,
                afterAppend,
            });
            if (mutation.previousId === -1 || mutation.nextId === -1) {
                legacy_missingNodeMap[mutation.node.id] = {
                    node: target,
                    mutation,
                };
                return;
            }
            const parentSn = mirror.getMeta(parent);
            if (parentSn &&
                parentSn.type === _rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["NodeType"].Element &&
                parentSn.tagName === 'textarea' &&
                mutation.node.type === _rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["NodeType"].Text) {
                const childNodeArray = Array.isArray(parent.childNodes)
                    ? parent.childNodes
                    : Array.from(parent.childNodes);
                for (const c of childNodeArray) {
                    if (c.nodeType === parent.TEXT_NODE) {
                        parent.removeChild(c);
                    }
                }
            }
            if (previous && previous.nextSibling && previous.nextSibling.parentNode) {
                parent.insertBefore(target, previous.nextSibling);
            }
            else if (next && next.parentNode) {
                parent.contains(next)
                    ? parent.insertBefore(target, next)
                    : parent.insertBefore(target, null);
            }
            else {
                if (parent === targetDoc) {
                    while (targetDoc.firstChild) {
                        targetDoc.removeChild(targetDoc.firstChild);
                    }
                }
                parent.appendChild(target);
            }
            afterAppend(target, mutation.node.id);
            if (this.usingVirtualDom &&
                target.nodeName === '#text' &&
                parent.nodeName === 'STYLE' &&
                ((_a = parent.rules) === null || _a === void 0 ? void 0 : _a.length) > 0)
                parent.rules = [];
            if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_8__["isSerializedIframe"])(target, this.mirror)) {
                const targetId = this.mirror.getId(target);
                const mutationInQueue = this.newDocumentQueue.find((m) => m.parentId === targetId);
                if (mutationInQueue) {
                    this.attachDocumentToIframe(mutationInQueue, target);
                    this.newDocumentQueue = this.newDocumentQueue.filter((m) => m !== mutationInQueue);
                }
            }
            if (mutation.previousId || mutation.nextId) {
                this.legacy_resolveMissingNode(legacy_missingNodeMap, parent, target, mutation);
            }
        };
        d.adds.forEach((mutation) => {
            appendNode(mutation);
        });
        const startTime = Date.now();
        while (queue.length) {
            const resolveTrees = Object(_utils_js__WEBPACK_IMPORTED_MODULE_8__["queueToResolveTrees"])(queue);
            queue.length = 0;
            if (Date.now() - startTime > 500) {
                this.warn('Timeout in the loop, please check the resolve tree data:', resolveTrees);
                break;
            }
            for (const tree of resolveTrees) {
                const parent = mirror.getNode(tree.value.parentId);
                if (!parent) {
                    this.debug('Drop resolve tree since there is no parent for the root node.', tree);
                }
                else {
                    Object(_utils_js__WEBPACK_IMPORTED_MODULE_8__["iterateResolveTree"])(tree, (mutation) => {
                        appendNode(mutation);
                    });
                }
            }
        }
        if (Object.keys(legacy_missingNodeMap).length) {
            Object.assign(this.legacy_missingNodeRetryMap, legacy_missingNodeMap);
        }
        Object(_utils_js__WEBPACK_IMPORTED_MODULE_8__["uniqueTextMutations"])(d.texts).forEach((mutation) => {
            var _a;
            const target = mirror.getNode(mutation.id);
            if (!target) {
                if (d.removes.find((r) => r.id === mutation.id)) {
                    return;
                }
                return this.warnNodeNotFound(d, mutation.id);
            }
            target.textContent = mutation.value;
            if (this.usingVirtualDom) {
                const parent = target.parentNode;
                if (((_a = parent === null || parent === void 0 ? void 0 : parent.rules) === null || _a === void 0 ? void 0 : _a.length) > 0)
                    parent.rules = [];
            }
        });
        d.attributes.forEach((mutation) => {
            const target = mirror.getNode(mutation.id);
            if (!target) {
                if (d.removes.find((r) => r.id === mutation.id)) {
                    return;
                }
                return this.warnNodeNotFound(d, mutation.id);
            }
            for (const attributeName in mutation.attributes) {
                if (typeof attributeName === 'string') {
                    const value = mutation.attributes[attributeName];
                    if (value === null) {
                        target.removeAttribute(attributeName);
                    }
                    else if (typeof value === 'string') {
                        try {
                            if (attributeName === '_cssText' &&
                                (target.nodeName === 'LINK' || target.nodeName === 'STYLE')) {
                                try {
                                    const newSn = mirror.getMeta(target);
                                    Object.assign(newSn.attributes, mutation.attributes);
                                    const newNode = Object(_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["buildNodeWithSN"])(newSn, {
                                        doc: target.ownerDocument,
                                        mirror: mirror,
                                        skipChild: true,
                                        hackCss: true,
                                        cache: this.cache,
                                    });
                                    const siblingNode = target.nextSibling;
                                    const parentNode = target.parentNode;
                                    if (newNode && parentNode) {
                                        parentNode.removeChild(target);
                                        parentNode.insertBefore(newNode, siblingNode);
                                        mirror.replace(mutation.id, newNode);
                                        break;
                                    }
                                }
                                catch (e) {
                                }
                            }
                            target.setAttribute(attributeName, value);
                        }
                        catch (error) {
                            if (this.config.showWarning) {
                                console.warn('An error occurred may due to the checkout feature.', error);
                            }
                        }
                    }
                    else if (attributeName === 'style') {
                        const styleValues = value;
                        const targetEl = target;
                        for (const s in styleValues) {
                            if (styleValues[s] === false) {
                                targetEl.style.removeProperty(s);
                            }
                            else if (styleValues[s] instanceof Array) {
                                const svp = styleValues[s];
                                targetEl.style.setProperty(s, svp[0], svp[1]);
                            }
                            else {
                                const svs = styleValues[s];
                                targetEl.style.setProperty(s, svs);
                            }
                        }
                    }
                }
            }
        });
    }
    applyScroll(d, isSync) {
        var _a, _b;
        const target = this.mirror.getNode(d.id);
        if (!target) {
            return this.debugNodeNotFound(d, d.id);
        }
        const sn = this.mirror.getMeta(target);
        if (target === this.iframe.contentDocument) {
            (_a = this.iframe.contentWindow) === null || _a === void 0 ? void 0 : _a.scrollTo({
                top: d.y,
                left: d.x,
                behavior: isSync ? 'auto' : 'smooth',
            });
        }
        else if ((sn === null || sn === void 0 ? void 0 : sn.type) === _rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["NodeType"].Document) {
            (_b = target.defaultView) === null || _b === void 0 ? void 0 : _b.scrollTo({
                top: d.y,
                left: d.x,
                behavior: isSync ? 'auto' : 'smooth',
            });
        }
        else {
            try {
                target.scrollTo({
                    top: d.y,
                    left: d.x,
                    behavior: isSync ? 'auto' : 'smooth',
                });
            }
            catch (error) {
            }
        }
    }
    applyInput(d) {
        const target = this.mirror.getNode(d.id);
        if (!target) {
            return this.debugNodeNotFound(d, d.id);
        }
        try {
            target.checked = d.isChecked;
            target.value = d.text;
        }
        catch (error) {
        }
    }
    applySelection(d) {
        try {
            const selectionSet = new Set();
            const ranges = d.ranges.map(({ start, startOffset, end, endOffset }) => {
                const startContainer = this.mirror.getNode(start);
                const endContainer = this.mirror.getNode(end);
                if (!startContainer || !endContainer)
                    return;
                const result = new Range();
                result.setStart(startContainer, startOffset);
                result.setEnd(endContainer, endOffset);
                const doc = startContainer.ownerDocument;
                const selection = doc === null || doc === void 0 ? void 0 : doc.getSelection();
                selection && selectionSet.add(selection);
                return {
                    range: result,
                    selection,
                };
            });
            selectionSet.forEach((s) => s.removeAllRanges());
            ranges.forEach((r) => { var _a; return r && ((_a = r.selection) === null || _a === void 0 ? void 0 : _a.addRange(r.range)); });
        }
        catch (error) {
        }
    }
    applyStyleSheetMutation(data) {
        var _a;
        let styleSheet = null;
        if (data.styleId)
            styleSheet = this.styleMirror.getStyle(data.styleId);
        else if (data.id)
            styleSheet =
                ((_a = this.mirror.getNode(data.id)) === null || _a === void 0 ? void 0 : _a.sheet) || null;
        if (!styleSheet)
            return;
        if (data.source === _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["IncrementalSource"].StyleSheetRule)
            this.applyStyleSheetRule(data, styleSheet);
        else if (data.source === _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["IncrementalSource"].StyleDeclaration)
            this.applyStyleDeclaration(data, styleSheet);
    }
    applyStyleSheetRule(data, styleSheet) {
        var _a, _b, _c, _d;
        (_a = data.adds) === null || _a === void 0 ? void 0 : _a.forEach(({ rule, index: nestedIndex }) => {
            try {
                if (Array.isArray(nestedIndex)) {
                    const { positions, index } = Object(_utils_js__WEBPACK_IMPORTED_MODULE_8__["getPositionsAndIndex"])(nestedIndex);
                    const nestedRule = Object(_utils_js__WEBPACK_IMPORTED_MODULE_8__["getNestedRule"])(styleSheet.cssRules, positions);
                    nestedRule.insertRule(rule, index);
                }
                else {
                    const index = nestedIndex === undefined
                        ? undefined
                        : Math.min(nestedIndex, styleSheet.cssRules.length);
                    styleSheet === null || styleSheet === void 0 ? void 0 : styleSheet.insertRule(rule, index);
                }
            }
            catch (e) {
            }
        });
        (_b = data.removes) === null || _b === void 0 ? void 0 : _b.forEach(({ index: nestedIndex }) => {
            try {
                if (Array.isArray(nestedIndex)) {
                    const { positions, index } = Object(_utils_js__WEBPACK_IMPORTED_MODULE_8__["getPositionsAndIndex"])(nestedIndex);
                    const nestedRule = Object(_utils_js__WEBPACK_IMPORTED_MODULE_8__["getNestedRule"])(styleSheet.cssRules, positions);
                    nestedRule.deleteRule(index || 0);
                }
                else {
                    styleSheet === null || styleSheet === void 0 ? void 0 : styleSheet.deleteRule(nestedIndex);
                }
            }
            catch (e) {
            }
        });
        if (data.replace)
            try {
                void ((_c = styleSheet.replace) === null || _c === void 0 ? void 0 : _c.call(styleSheet, data.replace));
            }
            catch (e) {
            }
        if (data.replaceSync)
            try {
                (_d = styleSheet.replaceSync) === null || _d === void 0 ? void 0 : _d.call(styleSheet, data.replaceSync);
            }
            catch (e) {
            }
    }
    applyStyleDeclaration(data, styleSheet) {
        if (data.set) {
            const rule = Object(_utils_js__WEBPACK_IMPORTED_MODULE_8__["getNestedRule"])(styleSheet.rules, data.index);
            rule.style.setProperty(data.set.property, data.set.value, data.set.priority);
        }
        if (data.remove) {
            const rule = Object(_utils_js__WEBPACK_IMPORTED_MODULE_8__["getNestedRule"])(styleSheet.rules, data.index);
            rule.style.removeProperty(data.remove.property);
        }
    }
    applyAdoptedStyleSheet(data) {
        var _a;
        const targetHost = this.mirror.getNode(data.id);
        if (!targetHost)
            return;
        (_a = data.styles) === null || _a === void 0 ? void 0 : _a.forEach((style) => {
            var _a;
            let newStyleSheet = null;
            let hostWindow = null;
            if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_8__["hasShadowRoot"])(targetHost))
                hostWindow = ((_a = targetHost.ownerDocument) === null || _a === void 0 ? void 0 : _a.defaultView) || null;
            else if (targetHost.nodeName === '#document')
                hostWindow = targetHost.defaultView;
            if (!hostWindow)
                return;
            try {
                newStyleSheet = new hostWindow.CSSStyleSheet();
                this.styleMirror.add(newStyleSheet, style.styleId);
                this.applyStyleSheetRule({
                    source: _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["IncrementalSource"].StyleSheetRule,
                    adds: style.rules,
                }, newStyleSheet);
            }
            catch (e) {
            }
        });
        const MAX_RETRY_TIME = 10;
        let count = 0;
        const adoptStyleSheets = (targetHost, styleIds) => {
            const stylesToAdopt = styleIds
                .map((styleId) => this.styleMirror.getStyle(styleId))
                .filter((style) => style !== null);
            if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_8__["hasShadowRoot"])(targetHost))
                targetHost.shadowRoot.adoptedStyleSheets = stylesToAdopt;
            else if (targetHost.nodeName === '#document')
                targetHost.adoptedStyleSheets = stylesToAdopt;
            if (stylesToAdopt.length !== styleIds.length && count < MAX_RETRY_TIME) {
                setTimeout(() => adoptStyleSheets(targetHost, styleIds), 0 + 100 * count);
                count++;
            }
        };
        adoptStyleSheets(targetHost, data.styleIds);
    }
    legacy_resolveMissingNode(map, parent, target, targetMutation) {
        const { previousId, nextId } = targetMutation;
        const previousInMap = previousId && map[previousId];
        const nextInMap = nextId && map[nextId];
        if (previousInMap) {
            const { node, mutation } = previousInMap;
            parent.insertBefore(node, target);
            delete map[mutation.node.id];
            delete this.legacy_missingNodeRetryMap[mutation.node.id];
            if (mutation.previousId || mutation.nextId) {
                this.legacy_resolveMissingNode(map, parent, node, mutation);
            }
        }
        if (nextInMap) {
            const { node, mutation } = nextInMap;
            parent.insertBefore(node, target.nextSibling);
            delete map[mutation.node.id];
            delete this.legacy_missingNodeRetryMap[mutation.node.id];
            if (mutation.previousId || mutation.nextId) {
                this.legacy_resolveMissingNode(map, parent, node, mutation);
            }
        }
    }
    moveAndHover(x, y, id, isSync, debugData) {
        const target = this.mirror.getNode(id);
        if (!target) {
            return this.debugNodeNotFound(debugData, id);
        }
        const base = Object(_utils_js__WEBPACK_IMPORTED_MODULE_8__["getBaseDimension"])(target, this.iframe);
        const _x = x * base.absoluteScale + base.x;
        const _y = y * base.absoluteScale + base.y;
        this.mouse.style.left = `${_x}px`;
        this.mouse.style.top = `${_y}px`;
        if (!isSync) {
            this.drawMouseTail({ x: _x, y: _y });
        }
        this.hoverElements(target);
    }
    drawMouseTail(position) {
        if (!this.mouseTail) {
            return;
        }
        const { lineCap, lineWidth, strokeStyle, duration } = this.config.mouseTail === true
            ? defaultMouseTailConfig
            : Object.assign({}, defaultMouseTailConfig, this.config.mouseTail);
        const draw = () => {
            if (!this.mouseTail) {
                return;
            }
            const ctx = this.mouseTail.getContext('2d');
            if (!ctx || !this.tailPositions.length) {
                return;
            }
            ctx.clearRect(0, 0, this.mouseTail.width, this.mouseTail.height);
            ctx.beginPath();
            ctx.lineWidth = lineWidth;
            ctx.lineCap = lineCap;
            ctx.strokeStyle = strokeStyle;
            ctx.moveTo(this.tailPositions[0].x, this.tailPositions[0].y);
            this.tailPositions.forEach((p) => ctx.lineTo(p.x, p.y));
            ctx.stroke();
        };
        this.tailPositions.push(position);
        draw();
        setTimeout(() => {
            this.tailPositions = this.tailPositions.filter((p) => p !== position);
            draw();
        }, duration / this.speedService.state.context.timer.speed);
    }
    hoverElements(el) {
        var _a;
        (_a = this.iframe.contentDocument) === null || _a === void 0 ? void 0 : _a.querySelectorAll('.\\:hover').forEach((hoveredEl) => {
            hoveredEl.classList.remove(':hover');
        });
        let currentEl = el;
        while (currentEl) {
            if (currentEl.classList) {
                currentEl.classList.add(':hover');
            }
            currentEl = currentEl.parentElement;
        }
    }
    isUserInteraction(event) {
        if (event.type !== _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["EventType"].IncrementalSnapshot) {
            return false;
        }
        return (event.data.source > _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["IncrementalSource"].Mutation &&
            event.data.source <= _types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["IncrementalSource"].Input);
    }
    backToNormal() {
        this.nextUserInteractionEvent = null;
        if (this.speedService.state.matches('normal')) {
            return;
        }
        this.speedService.send({ type: 'BACK_TO_NORMAL' });
        this.emitter.emit(_types_dist_types_js__WEBPACK_IMPORTED_MODULE_7__["ReplayerEvents"].SkipEnd, {
            speed: this.speedService.state.context.normalSpeed,
        });
    }
    warnNodeNotFound(d, id) {
        this.warn(`Node with id '${id}' not found. `, d);
    }
    warnCanvasMutationFailed(d, error) {
        this.warn(`Has error on canvas update`, error, 'canvas mutation:', d);
    }
    debugNodeNotFound(d, id) {
        this.debug(REPLAY_CONSOLE_PREFIX, `Node with id '${id}' not found. `, d);
    }
    warn(...args) {
        if (!this.config.showWarning) {
            return;
        }
        console.warn(REPLAY_CONSOLE_PREFIX, ...args);
    }
    debug(...args) {
        if (!this.config.showDebug) {
            return;
        }
        console.log(REPLAY_CONSOLE_PREFIX, ...args);
    }
}




/***/ }),

/***/ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/machine.js":
/*!*********************************************************************************************************************************************************!*\
  !*** /Users/crusher/Desktop/experiment/test-v2/node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/machine.js ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: createPlayerService, createSpeedService, discardPriorSnapshots */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPlayerService", function() { return createPlayerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSpeedService", function() { return createSpeedService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "discardPriorSnapshots", function() { return discardPriorSnapshots; });
/* harmony import */ var _ext_xstate_fsm_es_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../ext/@xstate/fsm/es/index.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/ext/@xstate/fsm/es/index.js");
/* harmony import */ var _types_dist_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../types/dist/types.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/types/dist/types.js");
/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timer.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/timer.js");




function discardPriorSnapshots(events, baselineTime) {
    for (let idx = events.length - 1; idx >= 0; idx--) {
        const event = events[idx];
        if (event.type === _types_dist_types_js__WEBPACK_IMPORTED_MODULE_1__["EventType"].Meta) {
            if (event.timestamp <= baselineTime) {
                return events.slice(idx);
            }
        }
    }
    return events;
}
function createPlayerService(context, { getCastFn, applyEventsSynchronously, emitter }) {
    const playerMachine = Object(_ext_xstate_fsm_es_index_js__WEBPACK_IMPORTED_MODULE_0__["createMachine"])({
        id: 'player',
        context,
        initial: 'paused',
        states: {
            playing: {
                on: {
                    PAUSE: {
                        target: 'paused',
                        actions: ['pause'],
                    },
                    CAST_EVENT: {
                        target: 'playing',
                        actions: 'castEvent',
                    },
                    END: {
                        target: 'paused',
                        actions: ['resetLastPlayedEvent', 'pause'],
                    },
                    ADD_EVENT: {
                        target: 'playing',
                        actions: ['addEvent'],
                    },
                },
            },
            paused: {
                on: {
                    PLAY: {
                        target: 'playing',
                        actions: ['recordTimeOffset', 'play'],
                    },
                    CAST_EVENT: {
                        target: 'paused',
                        actions: 'castEvent',
                    },
                    TO_LIVE: {
                        target: 'live',
                        actions: ['startLive'],
                    },
                    ADD_EVENT: {
                        target: 'paused',
                        actions: ['addEvent'],
                    },
                },
            },
            live: {
                on: {
                    ADD_EVENT: {
                        target: 'live',
                        actions: ['addEvent'],
                    },
                    CAST_EVENT: {
                        target: 'live',
                        actions: ['castEvent'],
                    },
                },
            },
        },
    }, {
        actions: {
            castEvent: Object(_ext_xstate_fsm_es_index_js__WEBPACK_IMPORTED_MODULE_0__["assign"])({
                lastPlayedEvent: (ctx, event) => {
                    if (event.type === 'CAST_EVENT') {
                        return event.payload.event;
                    }
                    return ctx.lastPlayedEvent;
                },
            }),
            recordTimeOffset: Object(_ext_xstate_fsm_es_index_js__WEBPACK_IMPORTED_MODULE_0__["assign"])((ctx, event) => {
                let timeOffset = ctx.timeOffset;
                if ('payload' in event && 'timeOffset' in event.payload) {
                    timeOffset = event.payload.timeOffset;
                }
                return Object.assign(Object.assign({}, ctx), { timeOffset, baselineTime: ctx.events[0].timestamp + timeOffset });
            }),
            play(ctx) {
                var _a;
                const { timer, events, baselineTime, lastPlayedEvent } = ctx;
                timer.clear();
                for (const event of events) {
                    Object(_timer_js__WEBPACK_IMPORTED_MODULE_2__["addDelay"])(event, baselineTime);
                }
                const neededEvents = discardPriorSnapshots(events, baselineTime);
                let lastPlayedTimestamp = lastPlayedEvent === null || lastPlayedEvent === void 0 ? void 0 : lastPlayedEvent.timestamp;
                if ((lastPlayedEvent === null || lastPlayedEvent === void 0 ? void 0 : lastPlayedEvent.type) === _types_dist_types_js__WEBPACK_IMPORTED_MODULE_1__["EventType"].IncrementalSnapshot &&
                    lastPlayedEvent.data.source === _types_dist_types_js__WEBPACK_IMPORTED_MODULE_1__["IncrementalSource"].MouseMove) {
                    lastPlayedTimestamp =
                        lastPlayedEvent.timestamp +
                            ((_a = lastPlayedEvent.data.positions[0]) === null || _a === void 0 ? void 0 : _a.timeOffset);
                }
                if (baselineTime < (lastPlayedTimestamp || 0)) {
                    emitter.emit(_types_dist_types_js__WEBPACK_IMPORTED_MODULE_1__["ReplayerEvents"].PlayBack);
                }
                const syncEvents = new Array();
                for (const event of neededEvents) {
                    if (lastPlayedTimestamp &&
                        lastPlayedTimestamp < baselineTime &&
                        (event.timestamp <= lastPlayedTimestamp ||
                            event === lastPlayedEvent)) {
                        continue;
                    }
                    if (event.timestamp < baselineTime) {
                        syncEvents.push(event);
                    }
                    else {
                        const castFn = getCastFn(event, false);
                        timer.addAction({
                            doAction: () => {
                                castFn();
                            },
                            delay: event.delay,
                        });
                    }
                }
                applyEventsSynchronously(syncEvents);
                emitter.emit(_types_dist_types_js__WEBPACK_IMPORTED_MODULE_1__["ReplayerEvents"].Flush);
                timer.start();
            },
            pause(ctx) {
                ctx.timer.clear();
            },
            resetLastPlayedEvent: Object(_ext_xstate_fsm_es_index_js__WEBPACK_IMPORTED_MODULE_0__["assign"])((ctx) => {
                return Object.assign(Object.assign({}, ctx), { lastPlayedEvent: null });
            }),
            startLive: Object(_ext_xstate_fsm_es_index_js__WEBPACK_IMPORTED_MODULE_0__["assign"])({
                baselineTime: (ctx, event) => {
                    ctx.timer.toggleLiveMode(true);
                    ctx.timer.start();
                    if (event.type === 'TO_LIVE' && event.payload.baselineTime) {
                        return event.payload.baselineTime;
                    }
                    return Date.now();
                },
            }),
            addEvent: Object(_ext_xstate_fsm_es_index_js__WEBPACK_IMPORTED_MODULE_0__["assign"])((ctx, machineEvent) => {
                const { baselineTime, timer, events } = ctx;
                if (machineEvent.type === 'ADD_EVENT') {
                    const { event } = machineEvent.payload;
                    Object(_timer_js__WEBPACK_IMPORTED_MODULE_2__["addDelay"])(event, baselineTime);
                    let end = events.length - 1;
                    if (!events[end] || events[end].timestamp <= event.timestamp) {
                        events.push(event);
                    }
                    else {
                        let insertionIndex = -1;
                        let start = 0;
                        while (start <= end) {
                            const mid = Math.floor((start + end) / 2);
                            if (events[mid].timestamp <= event.timestamp) {
                                start = mid + 1;
                            }
                            else {
                                end = mid - 1;
                            }
                        }
                        if (insertionIndex === -1) {
                            insertionIndex = start;
                        }
                        events.splice(insertionIndex, 0, event);
                    }
                    const isSync = event.timestamp < baselineTime;
                    const castFn = getCastFn(event, isSync);
                    if (isSync) {
                        castFn();
                    }
                    else if (timer.isActive()) {
                        timer.addAction({
                            doAction: () => {
                                castFn();
                            },
                            delay: event.delay,
                        });
                    }
                }
                return Object.assign(Object.assign({}, ctx), { events });
            }),
        },
    });
    return Object(_ext_xstate_fsm_es_index_js__WEBPACK_IMPORTED_MODULE_0__["interpret"])(playerMachine);
}
function createSpeedService(context) {
    const speedMachine = Object(_ext_xstate_fsm_es_index_js__WEBPACK_IMPORTED_MODULE_0__["createMachine"])({
        id: 'speed',
        context,
        initial: 'normal',
        states: {
            normal: {
                on: {
                    FAST_FORWARD: {
                        target: 'skipping',
                        actions: ['recordSpeed', 'setSpeed'],
                    },
                    SET_SPEED: {
                        target: 'normal',
                        actions: ['setSpeed'],
                    },
                },
            },
            skipping: {
                on: {
                    BACK_TO_NORMAL: {
                        target: 'normal',
                        actions: ['restoreSpeed'],
                    },
                    SET_SPEED: {
                        target: 'normal',
                        actions: ['setSpeed'],
                    },
                },
            },
        },
    }, {
        actions: {
            setSpeed: (ctx, event) => {
                if ('payload' in event) {
                    ctx.timer.setSpeed(event.payload.speed);
                }
            },
            recordSpeed: Object(_ext_xstate_fsm_es_index_js__WEBPACK_IMPORTED_MODULE_0__["assign"])({
                normalSpeed: (ctx) => ctx.timer.speed,
            }),
            restoreSpeed: (ctx) => {
                ctx.timer.setSpeed(ctx.normalSpeed);
            },
        },
    });
    return Object(_ext_xstate_fsm_es_index_js__WEBPACK_IMPORTED_MODULE_0__["interpret"])(speedMachine);
}




/***/ }),

/***/ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/smoothscroll.js":
/*!**************************************************************************************************************************************************************!*\
  !*** /Users/crusher/Desktop/experiment/test-v2/node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/smoothscroll.js ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: polyfill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyfill", function() { return polyfill; });
function polyfill(w = window, d = document) {
    if ('scrollBehavior' in d.documentElement.style &&
        w.__forceSmoothScrollPolyfill__ !== true) {
        return;
    }
    const Element = w.HTMLElement || w.Element;
    const SCROLL_TIME = 468;
    const original = {
        scroll: w.scroll || w.scrollTo,
        scrollBy: w.scrollBy,
        elementScroll: Element.prototype.scroll || scrollElement,
        scrollIntoView: Element.prototype.scrollIntoView,
    };
    const now = w.performance && w.performance.now
        ? w.performance.now.bind(w.performance)
        : Date.now;
    function isMicrosoftBrowser(userAgent) {
        const userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];
        return new RegExp(userAgentPatterns.join('|')).test(userAgent);
    }
    const ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;
    function scrollElement(x, y) {
        this.scrollLeft = x;
        this.scrollTop = y;
    }
    function ease(k) {
        return 0.5 * (1 - Math.cos(Math.PI * k));
    }
    function shouldBailOut(firstArg) {
        if (firstArg === null ||
            typeof firstArg !== 'object' ||
            firstArg.behavior === undefined ||
            firstArg.behavior === 'auto' ||
            firstArg.behavior === 'instant') {
            return true;
        }
        if (typeof firstArg === 'object' && firstArg.behavior === 'smooth') {
            return false;
        }
        throw new TypeError('behavior member of ScrollOptions ' +
            firstArg.behavior +
            ' is not a valid value for enumeration ScrollBehavior.');
    }
    function hasScrollableSpace(el, axis) {
        if (axis === 'Y') {
            return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
        }
        if (axis === 'X') {
            return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
        }
    }
    function canOverflow(el, axis) {
        const overflowValue = w.getComputedStyle(el, null)['overflow' + axis];
        return overflowValue === 'auto' || overflowValue === 'scroll';
    }
    function isScrollable(el) {
        const isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
        const isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');
        return isScrollableY || isScrollableX;
    }
    function findScrollableParent(el) {
        while (el !== d.body && isScrollable(el) === false) {
            el = el.parentNode || el.host;
        }
        return el;
    }
    function step(context) {
        const time = now();
        let value;
        let currentX;
        let currentY;
        let elapsed = (time - context.startTime) / SCROLL_TIME;
        elapsed = elapsed > 1 ? 1 : elapsed;
        value = ease(elapsed);
        currentX = context.startX + (context.x - context.startX) * value;
        currentY = context.startY + (context.y - context.startY) * value;
        context.method.call(context.scrollable, currentX, currentY);
        if (currentX !== context.x || currentY !== context.y) {
            w.requestAnimationFrame(step.bind(w, context));
        }
    }
    function smoothScroll(el, x, y) {
        let scrollable;
        let startX;
        let startY;
        let method;
        const startTime = now();
        if (el === d.body) {
            scrollable = w;
            startX = w.scrollX || w.pageXOffset;
            startY = w.scrollY || w.pageYOffset;
            method = original.scroll;
        }
        else {
            scrollable = el;
            startX = el.scrollLeft;
            startY = el.scrollTop;
            method = scrollElement;
        }
        step({
            scrollable: scrollable,
            method: method,
            startTime: startTime,
            startX: startX,
            startY: startY,
            x: x,
            y: y,
        });
    }
    w.scroll = w.scrollTo = function () {
        if (arguments[0] === undefined) {
            return;
        }
        if (shouldBailOut(arguments[0]) === true) {
            original.scroll.call(w, arguments[0].left !== undefined
                ? arguments[0].left
                : typeof arguments[0] !== 'object'
                    ? arguments[0]
                    : w.scrollX || w.pageXOffset, arguments[0].top !== undefined
                ? arguments[0].top
                : arguments[1] !== undefined
                    ? arguments[1]
                    : w.scrollY || w.pageYOffset);
            return;
        }
        smoothScroll.call(w, d.body, arguments[0].left !== undefined
            ? ~~arguments[0].left
            : w.scrollX || w.pageXOffset, arguments[0].top !== undefined
            ? ~~arguments[0].top
            : w.scrollY || w.pageYOffset);
    };
    w.scrollBy = function () {
        if (arguments[0] === undefined) {
            return;
        }
        if (shouldBailOut(arguments[0])) {
            original.scrollBy.call(w, arguments[0].left !== undefined
                ? arguments[0].left
                : typeof arguments[0] !== 'object'
                    ? arguments[0]
                    : 0, arguments[0].top !== undefined
                ? arguments[0].top
                : arguments[1] !== undefined
                    ? arguments[1]
                    : 0);
            return;
        }
        smoothScroll.call(w, d.body, ~~arguments[0].left + (w.scrollX || w.pageXOffset), ~~arguments[0].top + (w.scrollY || w.pageYOffset));
    };
    Element.prototype.scroll = Element.prototype.scrollTo = function () {
        if (arguments[0] === undefined) {
            return;
        }
        if (shouldBailOut(arguments[0]) === true) {
            if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
                throw new SyntaxError('Value could not be converted');
            }
            original.elementScroll.call(this, arguments[0].left !== undefined
                ? ~~arguments[0].left
                : typeof arguments[0] !== 'object'
                    ? ~~arguments[0]
                    : this.scrollLeft, arguments[0].top !== undefined
                ? ~~arguments[0].top
                : arguments[1] !== undefined
                    ? ~~arguments[1]
                    : this.scrollTop);
            return;
        }
        const left = arguments[0].left;
        const top = arguments[0].top;
        smoothScroll.call(this, this, typeof left === 'undefined' ? this.scrollLeft : ~~left, typeof top === 'undefined' ? this.scrollTop : ~~top);
    };
    Element.prototype.scrollBy = function () {
        if (arguments[0] === undefined) {
            return;
        }
        if (shouldBailOut(arguments[0]) === true) {
            original.elementScroll.call(this, arguments[0].left !== undefined
                ? ~~arguments[0].left + this.scrollLeft
                : ~~arguments[0] + this.scrollLeft, arguments[0].top !== undefined
                ? ~~arguments[0].top + this.scrollTop
                : ~~arguments[1] + this.scrollTop);
            return;
        }
        this.scroll({
            left: ~~arguments[0].left + this.scrollLeft,
            top: ~~arguments[0].top + this.scrollTop,
            behavior: arguments[0].behavior,
        });
    };
    Element.prototype.scrollIntoView = function () {
        if (shouldBailOut(arguments[0]) === true) {
            original.scrollIntoView.call(this, arguments[0] === undefined ? true : arguments[0]);
            return;
        }
        const scrollableParent = findScrollableParent(this);
        const parentRects = scrollableParent.getBoundingClientRect();
        const clientRects = this.getBoundingClientRect();
        if (scrollableParent !== d.body) {
            smoothScroll.call(this, scrollableParent, scrollableParent.scrollLeft + clientRects.left - parentRects.left, scrollableParent.scrollTop + clientRects.top - parentRects.top);
            if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
                w.scrollBy({
                    left: parentRects.left,
                    top: parentRects.top,
                    behavior: 'smooth',
                });
            }
        }
        else {
            w.scrollBy({
                left: clientRects.left,
                top: clientRects.top,
                behavior: 'smooth',
            });
        }
    };
}




/***/ }),

/***/ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/styles/inject-style.js":
/*!*********************************************************************************************************************************************************************!*\
  !*** /Users/crusher/Desktop/experiment/test-v2/node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/styles/inject-style.js ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rules; });
const rules = (blockClass) => [
    `.${blockClass} { background: currentColor }`,
    'noscript { display: none !important; }',
];




/***/ }),

/***/ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/timer.js":
/*!*******************************************************************************************************************************************************!*\
  !*** /Users/crusher/Desktop/experiment/test-v2/node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/timer.js ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: Timer, addDelay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timer", function() { return Timer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDelay", function() { return addDelay; });
/* harmony import */ var _types_dist_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../types/dist/types.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/types/dist/types.js");


class Timer {
    constructor(actions = [], config) {
        this.timeOffset = 0;
        this.raf = null;
        this.actions = actions;
        this.speed = config.speed;
        this.liveMode = config.liveMode;
    }
    addAction(action) {
        if (!this.actions.length ||
            this.actions[this.actions.length - 1].delay <= action.delay) {
            this.actions.push(action);
            return;
        }
        const index = this.findActionIndex(action);
        this.actions.splice(index, 0, action);
    }
    start() {
        this.timeOffset = 0;
        let lastTimestamp = performance.now();
        const check = () => {
            const time = performance.now();
            this.timeOffset += (time - lastTimestamp) * this.speed;
            lastTimestamp = time;
            while (this.actions.length) {
                const action = this.actions[0];
                if (this.timeOffset >= action.delay) {
                    this.actions.shift();
                    action.doAction();
                }
                else {
                    break;
                }
            }
            if (this.actions.length > 0 || this.liveMode) {
                this.raf = requestAnimationFrame(check);
            }
        };
        this.raf = requestAnimationFrame(check);
    }
    clear() {
        if (this.raf) {
            cancelAnimationFrame(this.raf);
            this.raf = null;
        }
        this.actions.length = 0;
    }
    setSpeed(speed) {
        this.speed = speed;
    }
    toggleLiveMode(mode) {
        this.liveMode = mode;
    }
    isActive() {
        return this.raf !== null;
    }
    findActionIndex(action) {
        let start = 0;
        let end = this.actions.length - 1;
        while (start <= end) {
            const mid = Math.floor((start + end) / 2);
            if (this.actions[mid].delay < action.delay) {
                start = mid + 1;
            }
            else if (this.actions[mid].delay > action.delay) {
                end = mid - 1;
            }
            else {
                return mid + 1;
            }
        }
        return start;
    }
}
function addDelay(event, baselineTime) {
    if (event.type === _types_dist_types_js__WEBPACK_IMPORTED_MODULE_0__["EventType"].IncrementalSnapshot &&
        event.data.source === _types_dist_types_js__WEBPACK_IMPORTED_MODULE_0__["IncrementalSource"].MouseMove &&
        event.data.positions &&
        event.data.positions.length) {
        const firstOffset = event.data.positions[0].timeOffset;
        const firstTimestamp = event.timestamp + firstOffset;
        event.delay = firstTimestamp - baselineTime;
        return firstTimestamp - baselineTime;
    }
    event.delay = event.timestamp - baselineTime;
    return event.delay;
}




/***/ }),

/***/ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/utils.js":
/*!************************************************************************************************************************************************!*\
  !*** /Users/crusher/Desktop/experiment/test-v2/node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/utils.js ***!
  \************************************************************************************************************************************************/
/*! exports provided: StyleSheetMirror, _mirror, getBaseDimension, getNestedRule, getPositionsAndIndex, getWindowHeight, getWindowWidth, hasShadowRoot, hookSetter, isAncestorRemoved, isBlocked, isIgnored, isSerialized, isSerializedIframe, isSerializedStylesheet, isTouchEvent, iterateResolveTree, on, patch, polyfill, queueToResolveTrees, throttle, uniqueTextMutations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetMirror", function() { return StyleSheetMirror; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_mirror", function() { return _mirror; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseDimension", function() { return getBaseDimension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNestedRule", function() { return getNestedRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPositionsAndIndex", function() { return getPositionsAndIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWindowHeight", function() { return getWindowHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWindowWidth", function() { return getWindowWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasShadowRoot", function() { return hasShadowRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hookSetter", function() { return hookSetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAncestorRemoved", function() { return isAncestorRemoved; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBlocked", function() { return isBlocked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIgnored", function() { return isIgnored; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSerialized", function() { return isSerialized; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSerializedIframe", function() { return isSerializedIframe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSerializedStylesheet", function() { return isSerializedStylesheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTouchEvent", function() { return isTouchEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterateResolveTree", function() { return iterateResolveTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patch", function() { return patch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyfill", function() { return polyfill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queueToResolveTrees", function() { return queueToResolveTrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueTextMutations", function() { return uniqueTextMutations; });
/* harmony import */ var _rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../rrweb-snapshot/es/rrweb-snapshot.js */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb-snapshot/es/rrweb-snapshot.js");


function on(type, fn, target = document) {
    const options = { capture: true, passive: true };
    target.addEventListener(type, fn, options);
    return () => target.removeEventListener(type, fn, options);
}
const DEPARTED_MIRROR_ACCESS_WARNING = 'Please stop import mirror directly. Instead of that,' +
    '\r\n' +
    'now you can use replayer.getMirror() to access the mirror instance of a replayer,' +
    '\r\n' +
    'or you can use record.mirror to access the mirror instance during recording.';
let _mirror = {
    map: {},
    getId() {
        console.error(DEPARTED_MIRROR_ACCESS_WARNING);
        return -1;
    },
    getNode() {
        console.error(DEPARTED_MIRROR_ACCESS_WARNING);
        return null;
    },
    removeNodeFromMap() {
        console.error(DEPARTED_MIRROR_ACCESS_WARNING);
    },
    has() {
        console.error(DEPARTED_MIRROR_ACCESS_WARNING);
        return false;
    },
    reset() {
        console.error(DEPARTED_MIRROR_ACCESS_WARNING);
    },
};
if (typeof window !== 'undefined' && window.Proxy && window.Reflect) {
    _mirror = new Proxy(_mirror, {
        get(target, prop, receiver) {
            if (prop === 'map') {
                console.error(DEPARTED_MIRROR_ACCESS_WARNING);
            }
            return Reflect.get(target, prop, receiver);
        },
    });
}
function throttle(func, wait, options = {}) {
    let timeout = null;
    let previous = 0;
    return function (...args) {
        const now = Date.now();
        if (!previous && options.leading === false) {
            previous = now;
        }
        const remaining = wait - (now - previous);
        const context = this;
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            func.apply(context, args);
        }
        else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(() => {
                previous = options.leading === false ? 0 : Date.now();
                timeout = null;
                func.apply(context, args);
            }, remaining);
        }
    };
}
function hookSetter(target, key, d, isRevoked, win = window) {
    const original = win.Object.getOwnPropertyDescriptor(target, key);
    win.Object.defineProperty(target, key, isRevoked
        ? d
        : {
            set(value) {
                setTimeout(() => {
                    d.set.call(this, value);
                }, 0);
                if (original && original.set) {
                    original.set.call(this, value);
                }
            },
        });
    return () => hookSetter(target, key, original || {}, true);
}
function patch(source, name, replacement) {
    try {
        if (!(name in source)) {
            return () => {
            };
        }
        const original = source[name];
        const wrapped = replacement(original);
        if (typeof wrapped === 'function') {
            wrapped.prototype = wrapped.prototype || {};
            Object.defineProperties(wrapped, {
                __rrweb_original__: {
                    enumerable: false,
                    value: original,
                },
            });
        }
        source[name] = wrapped;
        return () => {
            source[name] = original;
        };
    }
    catch (_a) {
        return () => {
        };
    }
}
function getWindowHeight() {
    return (window.innerHeight ||
        (document.documentElement && document.documentElement.clientHeight) ||
        (document.body && document.body.clientHeight));
}
function getWindowWidth() {
    return (window.innerWidth ||
        (document.documentElement && document.documentElement.clientWidth) ||
        (document.body && document.body.clientWidth));
}
function isBlocked(node, blockClass, blockSelector, checkAncestors) {
    if (!node) {
        return false;
    }
    const el = node.nodeType === node.ELEMENT_NODE
        ? node
        : node.parentElement;
    if (!el)
        return false;
    if (typeof blockClass === 'string') {
        if (el.classList.contains(blockClass))
            return true;
        if (checkAncestors && el.closest('.' + blockClass) !== null)
            return true;
    }
    else {
        if (Object(_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_0__["classMatchesRegex"])(el, blockClass, checkAncestors))
            return true;
    }
    if (blockSelector) {
        if (node.matches(blockSelector))
            return true;
        if (checkAncestors && el.closest(blockSelector) !== null)
            return true;
    }
    return false;
}
function isSerialized(n, mirror) {
    return mirror.getId(n) !== -1;
}
function isIgnored(n, mirror) {
    return mirror.getId(n) === _rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_0__["IGNORED_NODE"];
}
function isAncestorRemoved(target, mirror) {
    if (Object(_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_0__["isShadowRoot"])(target)) {
        return false;
    }
    const id = mirror.getId(target);
    if (!mirror.has(id)) {
        return true;
    }
    if (target.parentNode &&
        target.parentNode.nodeType === target.DOCUMENT_NODE) {
        return false;
    }
    if (!target.parentNode) {
        return true;
    }
    return isAncestorRemoved(target.parentNode, mirror);
}
function isTouchEvent(event) {
    return Boolean(event.changedTouches);
}
function polyfill(win = window) {
    if ('NodeList' in win && !win.NodeList.prototype.forEach) {
        win.NodeList.prototype.forEach = Array.prototype
            .forEach;
    }
    if ('DOMTokenList' in win && !win.DOMTokenList.prototype.forEach) {
        win.DOMTokenList.prototype.forEach = Array.prototype
            .forEach;
    }
    if (!Node.prototype.contains) {
        Node.prototype.contains = (...args) => {
            let node = args[0];
            if (!(0 in args)) {
                throw new TypeError('1 argument is required');
            }
            do {
                if (this === node) {
                    return true;
                }
            } while ((node = node && node.parentNode));
            return false;
        };
    }
}
function queueToResolveTrees(queue) {
    const queueNodeMap = {};
    const putIntoMap = (m, parent) => {
        const nodeInTree = {
            value: m,
            parent,
            children: [],
        };
        queueNodeMap[m.node.id] = nodeInTree;
        return nodeInTree;
    };
    const queueNodeTrees = [];
    for (const mutation of queue) {
        const { nextId, parentId } = mutation;
        if (nextId && nextId in queueNodeMap) {
            const nextInTree = queueNodeMap[nextId];
            if (nextInTree.parent) {
                const idx = nextInTree.parent.children.indexOf(nextInTree);
                nextInTree.parent.children.splice(idx, 0, putIntoMap(mutation, nextInTree.parent));
            }
            else {
                const idx = queueNodeTrees.indexOf(nextInTree);
                queueNodeTrees.splice(idx, 0, putIntoMap(mutation, null));
            }
            continue;
        }
        if (parentId in queueNodeMap) {
            const parentInTree = queueNodeMap[parentId];
            parentInTree.children.push(putIntoMap(mutation, parentInTree));
            continue;
        }
        queueNodeTrees.push(putIntoMap(mutation, null));
    }
    return queueNodeTrees;
}
function iterateResolveTree(tree, cb) {
    cb(tree.value);
    for (let i = tree.children.length - 1; i >= 0; i--) {
        iterateResolveTree(tree.children[i], cb);
    }
}
function isSerializedIframe(n, mirror) {
    return Boolean(n.nodeName === 'IFRAME' && mirror.getMeta(n));
}
function isSerializedStylesheet(n, mirror) {
    return Boolean(n.nodeName === 'LINK' &&
        n.nodeType === n.ELEMENT_NODE &&
        n.getAttribute &&
        n.getAttribute('rel') === 'stylesheet' &&
        mirror.getMeta(n));
}
function getBaseDimension(node, rootIframe) {
    var _a, _b;
    const frameElement = (_b = (_a = node.ownerDocument) === null || _a === void 0 ? void 0 : _a.defaultView) === null || _b === void 0 ? void 0 : _b.frameElement;
    if (!frameElement || frameElement === rootIframe) {
        return {
            x: 0,
            y: 0,
            relativeScale: 1,
            absoluteScale: 1,
        };
    }
    const frameDimension = frameElement.getBoundingClientRect();
    const frameBaseDimension = getBaseDimension(frameElement, rootIframe);
    const relativeScale = frameDimension.height / frameElement.clientHeight;
    return {
        x: frameDimension.x * frameBaseDimension.relativeScale +
            frameBaseDimension.x,
        y: frameDimension.y * frameBaseDimension.relativeScale +
            frameBaseDimension.y,
        relativeScale,
        absoluteScale: frameBaseDimension.absoluteScale * relativeScale,
    };
}
function hasShadowRoot(n) {
    return Boolean(n === null || n === void 0 ? void 0 : n.shadowRoot);
}
function getNestedRule(rules, position) {
    const rule = rules[position[0]];
    if (position.length === 1) {
        return rule;
    }
    else {
        return getNestedRule(rule.cssRules[position[1]].cssRules, position.slice(2));
    }
}
function getPositionsAndIndex(nestedIndex) {
    const positions = [...nestedIndex];
    const index = positions.pop();
    return { positions, index };
}
function uniqueTextMutations(mutations) {
    const idSet = new Set();
    const uniqueMutations = [];
    for (let i = mutations.length; i--;) {
        const mutation = mutations[i];
        if (!idSet.has(mutation.id)) {
            uniqueMutations.push(mutation);
            idSet.add(mutation.id);
        }
    }
    return uniqueMutations;
}
class StyleSheetMirror {
    constructor() {
        this.id = 1;
        this.styleIDMap = new WeakMap();
        this.idStyleMap = new Map();
    }
    getId(stylesheet) {
        var _a;
        return (_a = this.styleIDMap.get(stylesheet)) !== null && _a !== void 0 ? _a : -1;
    }
    has(stylesheet) {
        return this.styleIDMap.has(stylesheet);
    }
    add(stylesheet, id) {
        if (this.has(stylesheet))
            return this.getId(stylesheet);
        let newId;
        if (id === undefined) {
            newId = this.id++;
        }
        else
            newId = id;
        this.styleIDMap.set(stylesheet, newId);
        this.idStyleMap.set(newId, stylesheet);
        return newId;
    }
    getStyle(id) {
        return this.idStyleMap.get(id) || null;
    }
    reset() {
        this.styleIDMap = new WeakMap();
        this.idStyleMap = new Map();
        this.id = 1;
    }
    generateId() {
        return this.id++;
    }
}




/***/ }),

/***/ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/types/dist/types.js":
/*!*************************************************************************************************************************************************!*\
  !*** /Users/crusher/Desktop/experiment/test-v2/node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/types/dist/types.js ***!
  \*************************************************************************************************************************************************/
/*! exports provided: CanvasContext, EventType, IncrementalSource, MouseInteractions, ReplayerEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasContext", function() { return CanvasContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventType", function() { return EventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncrementalSource", function() { return IncrementalSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MouseInteractions", function() { return MouseInteractions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplayerEvents", function() { return ReplayerEvents; });
var EventType = /* @__PURE__ */ ((EventType2) => {
  EventType2[EventType2["DomContentLoaded"] = 0] = "DomContentLoaded";
  EventType2[EventType2["Load"] = 1] = "Load";
  EventType2[EventType2["FullSnapshot"] = 2] = "FullSnapshot";
  EventType2[EventType2["IncrementalSnapshot"] = 3] = "IncrementalSnapshot";
  EventType2[EventType2["Meta"] = 4] = "Meta";
  EventType2[EventType2["Custom"] = 5] = "Custom";
  EventType2[EventType2["Plugin"] = 6] = "Plugin";
  return EventType2;
})(EventType || {});
var IncrementalSource = /* @__PURE__ */ ((IncrementalSource2) => {
  IncrementalSource2[IncrementalSource2["Mutation"] = 0] = "Mutation";
  IncrementalSource2[IncrementalSource2["MouseMove"] = 1] = "MouseMove";
  IncrementalSource2[IncrementalSource2["MouseInteraction"] = 2] = "MouseInteraction";
  IncrementalSource2[IncrementalSource2["Scroll"] = 3] = "Scroll";
  IncrementalSource2[IncrementalSource2["ViewportResize"] = 4] = "ViewportResize";
  IncrementalSource2[IncrementalSource2["Input"] = 5] = "Input";
  IncrementalSource2[IncrementalSource2["TouchMove"] = 6] = "TouchMove";
  IncrementalSource2[IncrementalSource2["MediaInteraction"] = 7] = "MediaInteraction";
  IncrementalSource2[IncrementalSource2["StyleSheetRule"] = 8] = "StyleSheetRule";
  IncrementalSource2[IncrementalSource2["CanvasMutation"] = 9] = "CanvasMutation";
  IncrementalSource2[IncrementalSource2["Font"] = 10] = "Font";
  IncrementalSource2[IncrementalSource2["Log"] = 11] = "Log";
  IncrementalSource2[IncrementalSource2["Drag"] = 12] = "Drag";
  IncrementalSource2[IncrementalSource2["StyleDeclaration"] = 13] = "StyleDeclaration";
  IncrementalSource2[IncrementalSource2["Selection"] = 14] = "Selection";
  IncrementalSource2[IncrementalSource2["AdoptedStyleSheet"] = 15] = "AdoptedStyleSheet";
  return IncrementalSource2;
})(IncrementalSource || {});
var MouseInteractions = /* @__PURE__ */ ((MouseInteractions2) => {
  MouseInteractions2[MouseInteractions2["MouseUp"] = 0] = "MouseUp";
  MouseInteractions2[MouseInteractions2["MouseDown"] = 1] = "MouseDown";
  MouseInteractions2[MouseInteractions2["Click"] = 2] = "Click";
  MouseInteractions2[MouseInteractions2["ContextMenu"] = 3] = "ContextMenu";
  MouseInteractions2[MouseInteractions2["DblClick"] = 4] = "DblClick";
  MouseInteractions2[MouseInteractions2["Focus"] = 5] = "Focus";
  MouseInteractions2[MouseInteractions2["Blur"] = 6] = "Blur";
  MouseInteractions2[MouseInteractions2["TouchStart"] = 7] = "TouchStart";
  MouseInteractions2[MouseInteractions2["TouchMove_Departed"] = 8] = "TouchMove_Departed";
  MouseInteractions2[MouseInteractions2["TouchEnd"] = 9] = "TouchEnd";
  MouseInteractions2[MouseInteractions2["TouchCancel"] = 10] = "TouchCancel";
  return MouseInteractions2;
})(MouseInteractions || {});
var CanvasContext = /* @__PURE__ */ ((CanvasContext2) => {
  CanvasContext2[CanvasContext2["2D"] = 0] = "2D";
  CanvasContext2[CanvasContext2["WebGL"] = 1] = "WebGL";
  CanvasContext2[CanvasContext2["WebGL2"] = 2] = "WebGL2";
  return CanvasContext2;
})(CanvasContext || {});
var ReplayerEvents = /* @__PURE__ */ ((ReplayerEvents2) => {
  ReplayerEvents2["Start"] = "start";
  ReplayerEvents2["Pause"] = "pause";
  ReplayerEvents2["Resume"] = "resume";
  ReplayerEvents2["Resize"] = "resize";
  ReplayerEvents2["Finish"] = "finish";
  ReplayerEvents2["FullsnapshotRebuilded"] = "fullsnapshot-rebuilded";
  ReplayerEvents2["LoadStylesheetStart"] = "load-stylesheet-start";
  ReplayerEvents2["LoadStylesheetEnd"] = "load-stylesheet-end";
  ReplayerEvents2["SkipStart"] = "skip-start";
  ReplayerEvents2["SkipEnd"] = "skip-end";
  ReplayerEvents2["MouseInteraction"] = "mouse-interaction";
  ReplayerEvents2["EventCast"] = "event-cast";
  ReplayerEvents2["CustomEvent"] = "custom-event";
  ReplayerEvents2["Flush"] = "flush";
  ReplayerEvents2["StateChange"] = "state-change";
  ReplayerEvents2["PlayBack"] = "play-back";
  ReplayerEvents2["Destroy"] = "destroy";
  return ReplayerEvents2;
})(ReplayerEvents || {});




/***/ }),

/***/ "../../node_modules/.pnpm/webpack@4.40.3_webpack-cli@3.3.12/node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "../../node_modules/.pnpm/webpack@4.40.3_webpack-cli@3.3.12/node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/nanoid/index.browser.js":
/*!**********************************************!*\
  !*** ./node_modules/nanoid/index.browser.js ***!
  \**********************************************/
/*! exports provided: nanoid, customAlphabet, customRandom, urlAlphabet, random */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nanoid", function() { return nanoid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customAlphabet", function() { return customAlphabet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customRandom", function() { return customRandom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony import */ var _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-alphabet/index.js */ "./node_modules/nanoid/url-alphabet/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "urlAlphabet", function() { return _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__["urlAlphabet"]; });


let random = bytes => crypto.getRandomValues(new Uint8Array(bytes))
let customRandom = (alphabet, defaultSize, getRandom) => {
  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1
  let step = -~((1.6 * mask * defaultSize) / alphabet.length)
  return (size = defaultSize) => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      let j = step
      while (j--) {
        id += alphabet[bytes[j] & mask] || ''
        if (id.length === size) return id
      }
    }
  }
}
let customAlphabet = (alphabet, size = 21) =>
  customRandom(alphabet, size, random)
let nanoid = (size = 21) =>
  crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte) => {
    byte &= 63
    if (byte < 36) {
      id += byte.toString(36)
    } else if (byte < 62) {
      id += (byte - 26).toString(36).toUpperCase()
    } else if (byte > 62) {
      id += '-'
    } else {
      id += '_'
    }
    return id
  }, '')



/***/ }),

/***/ "./node_modules/nanoid/url-alphabet/index.js":
/*!***************************************************!*\
  !*** ./node_modules/nanoid/url-alphabet/index.js ***!
  \***************************************************/
/*! exports provided: urlAlphabet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlAlphabet", function() { return urlAlphabet; });
let urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'



/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rrweb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rrweb */ "../../node_modules/.pnpm/rrweb@2.0.0-alpha.4/node_modules/rrweb/es/rrweb/packages/rrweb/src/entries/all.js");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");


var SessionSuggester = /** @class */ (function () {
    function SessionSuggester() {
    }
    SessionSuggester.startRecording = function (apiHost) {
        this.recordingID = Object(nanoid__WEBPACK_IMPORTED_MODULE_1__["nanoid"])();
        SessionSuggester.apiHost = apiHost;
        console.log('started recording', {
            recordingID: SessionSuggester.recordingID
        });
        rrweb__WEBPACK_IMPORTED_MODULE_0__["record"]({
            emit: SessionSuggester.handleEvent,
        });
        setInterval(function () {
            console.log('saving events');
            SessionSuggester.saveEventINBE(SessionSuggester.events);
            SessionSuggester.events = [];
        }, 5000);
    };
    SessionSuggester.handleEvent = function (event) {
        SessionSuggester.events.push(event);
    };
    SessionSuggester.saveEventINBE = function (events) {
        fetch('http://localhost:3000/api/event', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                recordingID: SessionSuggester.recordingID,
                events: events
            })
        });
    };
    SessionSuggester.stopRecording = function () {
        console.log('stop recording');
    };
    SessionSuggester.recordingID = null;
    SessionSuggester.events = [];
    SessionSuggester.apiHost = '';
    return SessionSuggester;
}());
/* harmony default export */ __webpack_exports__["default"] = (SessionSuggester);


/***/ })

/******/ });
});
//# sourceMappingURL=SessionSuggester.js.map