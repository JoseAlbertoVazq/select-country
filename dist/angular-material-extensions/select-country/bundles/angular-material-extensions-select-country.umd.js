(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('rxjs'), require('rxjs/operators'), require('@angular/material/autocomplete'), require('@angular/material/form-field'), require('@angular/common'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/core'), require('@angular/material/button'), require('@angular/material/menu'), require('@angular/common/http'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('@angular-material-extensions/select-country', ['exports', '@angular/core', '@angular/forms', 'rxjs', 'rxjs/operators', '@angular/material/autocomplete', '@angular/material/form-field', '@angular/common', '@angular/material/icon', '@angular/material/input', '@angular/material/core', '@angular/material/button', '@angular/material/menu', '@angular/common/http', '@angular/platform-browser'], factory) :
    (global = global || self, factory((global['angular-material-extensions'] = global['angular-material-extensions'] || {}, global['angular-material-extensions']['select-country'] = {}), global.ng.core, global.ng.forms, global.rxjs, global.rxjs.operators, global.ng.material.autocomplete, global.ng.material.formField, global.ng.common, global.ng.material.icon, global.ng.material.input, global.ng.material.core, global.ng.material.button, global.ng.material.menu, global.ng.common.http, global.ng.platformBrowser));
}(this, (function (exports, core, forms, rxjs, operators, autocomplete, formField, common, icon, input, core$1, button, menu, http, platformBrowser) { 'use strict';

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
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

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

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
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

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var COUNTRIES_DB = [
        {
            name: 'Afghanistan',
            alpha2Code: 'AF',
            alpha3Code: 'AFG',
            numericCode: '004'
        },
        {
            name: 'Albania',
            alpha2Code: 'AL',
            alpha3Code: 'ALB',
            numericCode: '008'
        },
        {
            name: 'Algeria',
            alpha2Code: 'DZ',
            alpha3Code: 'DZA',
            numericCode: '012'
        },
        {
            name: 'American Samoa',
            alpha2Code: 'AS',
            alpha3Code: 'ASM',
            numericCode: '016'
        },
        {
            name: 'Andorra',
            alpha2Code: 'AD',
            alpha3Code: 'AND',
            numericCode: '020'
        },
        {
            name: 'Angola',
            alpha2Code: 'AO',
            alpha3Code: 'AGO',
            numericCode: '024'
        },
        {
            name: 'Antigua and Barbuda',
            alpha2Code: 'AG',
            alpha3Code: 'ATG',
            numericCode: '028'
        },
        {
            name: 'Argentina',
            alpha2Code: 'AR',
            alpha3Code: 'ARG',
            numericCode: '032'
        },
        {
            name: 'Armenia',
            alpha2Code: 'AM',
            alpha3Code: 'ARM',
            numericCode: '051'
        },
        {
            name: 'Australia',
            alpha2Code: 'AU',
            alpha3Code: 'AUS',
            numericCode: '036'
        },
        {
            name: 'Austria',
            alpha2Code: 'AT',
            alpha3Code: 'AUT',
            numericCode: '040'
        },
        {
            name: 'Azerbaijan',
            alpha2Code: 'AZ',
            alpha3Code: 'AZE',
            numericCode: '031'
        },
        {
            name: 'Bahamas',
            alpha2Code: 'BS',
            alpha3Code: 'BHS',
            numericCode: '044'
        },
        {
            name: 'Bahrain',
            alpha2Code: 'BH',
            alpha3Code: 'BHR',
            numericCode: '048'
        },
        {
            name: 'Bangladesh',
            alpha2Code: 'BD',
            alpha3Code: 'BGD',
            numericCode: '050'
        },
        {
            name: 'Barbados',
            alpha2Code: 'BB',
            alpha3Code: 'BRB',
            numericCode: '052'
        },
        {
            name: 'Belarus',
            alpha2Code: 'BY',
            alpha3Code: 'BLR',
            numericCode: '112'
        },
        {
            name: 'Belgium',
            alpha2Code: 'BE',
            alpha3Code: 'BEL',
            numericCode: '056'
        },
        {
            name: 'Belize',
            alpha2Code: 'BZ',
            alpha3Code: 'BLZ',
            numericCode: '084'
        },
        {
            name: 'Benin',
            alpha2Code: 'BJ',
            alpha3Code: 'BEN',
            numericCode: '204'
        },
        {
            name: 'Bermuda',
            alpha2Code: 'BM',
            alpha3Code: 'BMU',
            numericCode: '060'
        },
        {
            name: 'Bhutan',
            alpha2Code: 'BT',
            alpha3Code: 'BTN',
            numericCode: '064'
        },
        {
            name: 'Bolivia',
            alpha2Code: 'BO',
            alpha3Code: 'BOL',
            numericCode: '068'
        },
        {
            name: 'Bonaire, Sint Eustatius and Saba',
            alpha2Code: 'BQ',
            alpha3Code: 'BES',
            numericCode: '535'
        },
        {
            name: 'Bosnia and Herzegovina',
            alpha2Code: 'BA',
            alpha3Code: 'BIH',
            numericCode: '070'
        },
        {
            name: 'Botswana',
            alpha2Code: 'BW',
            alpha3Code: 'BWA',
            numericCode: '072'
        },
        {
            name: 'Bouvet Island',
            alpha2Code: 'BV',
            alpha3Code: 'BVT',
            numericCode: '074'
        },
        {
            name: 'Brazil',
            alpha2Code: 'BR',
            alpha3Code: 'BRA',
            numericCode: '076'
        },
        {
            name: 'Brunei',
            alpha2Code: 'BN',
            alpha3Code: 'BRN',
            numericCode: '096'
        },
        {
            name: 'Bulgaria',
            alpha2Code: 'BG',
            alpha3Code: 'BGR',
            numericCode: '100'
        },
        {
            name: 'Burkina Faso',
            alpha2Code: 'BF',
            alpha3Code: 'BFA',
            numericCode: '854'
        },
        {
            name: 'Burundi',
            alpha2Code: 'BI',
            alpha3Code: 'BDI',
            numericCode: '108'
        },
        {
            name: 'Cabo Verde',
            alpha2Code: 'CV',
            alpha3Code: 'CPV',
            numericCode: '132'
        },
        {
            name: 'Cambodia',
            alpha2Code: 'KH',
            alpha3Code: 'KHM',
            numericCode: '116'
        },
        {
            name: 'Cameroon',
            alpha2Code: 'CM',
            alpha3Code: 'CMR',
            numericCode: '120'
        },
        {
            name: 'Canada',
            alpha2Code: 'CA',
            alpha3Code: 'CAN',
            numericCode: '124'
        },
        {
            name: 'Central African Republic',
            alpha2Code: 'CF',
            alpha3Code: 'CAF',
            numericCode: '140'
        },
        {
            name: 'Chad',
            alpha2Code: 'TD',
            alpha3Code: 'TCD',
            numericCode: '148'
        },
        {
            name: 'Chile',
            alpha2Code: 'CL',
            alpha3Code: 'CHL',
            numericCode: '152'
        },
        {
            name: 'China',
            alpha2Code: 'CN',
            alpha3Code: 'CHN',
            numericCode: '156'
        },
        {
            name: 'Colombia',
            alpha2Code: 'CO',
            alpha3Code: 'COL',
            numericCode: '170'
        },
        {
            name: 'Congo (Democratic Republic of the)',
            alpha2Code: 'CD',
            alpha3Code: 'COD',
            numericCode: '180'
        },
        {
            name: 'Congo (Republic of the)',
            alpha2Code: 'CG',
            alpha3Code: 'COG',
            numericCode: '178'
        },
        {
            name: 'Costa Rica',
            alpha2Code: 'CR',
            alpha3Code: 'CRI',
            numericCode: '188'
        },
        {
            name: 'Croatia',
            alpha2Code: 'HR',
            alpha3Code: 'HRV',
            numericCode: '191'
        },
        {
            name: 'Cuba',
            alpha2Code: 'CU',
            alpha3Code: 'CUB',
            numericCode: '192'
        },
        {
            name: 'Cyprus',
            alpha2Code: 'CY',
            alpha3Code: 'CYP',
            numericCode: '196'
        },
        {
            name: 'Czechia',
            alpha2Code: 'CZ',
            alpha3Code: 'CZE',
            numericCode: '203'
        },
        {
            name: 'Côte d\'Ivoire',
            alpha2Code: 'CI',
            alpha3Code: 'CIV',
            numericCode: '384'
        },
        {
            name: 'Denmark',
            alpha2Code: 'DK',
            alpha3Code: 'DNK',
            numericCode: '208'
        },
        {
            name: 'Djibouti',
            alpha2Code: 'DJ',
            alpha3Code: 'DJI',
            numericCode: '262'
        },
        {
            name: 'Dominica',
            alpha2Code: 'DM',
            alpha3Code: 'DMA',
            numericCode: '212'
        },
        {
            name: 'Dominican Republic',
            alpha2Code: 'DO',
            alpha3Code: 'DOM',
            numericCode: '214'
        },
        {
            name: 'Ecuador',
            alpha2Code: 'EC',
            alpha3Code: 'ECU',
            numericCode: '218'
        },
        {
            name: 'Egypt',
            alpha2Code: 'EG',
            alpha3Code: 'EGY',
            numericCode: '818'
        },
        {
            name: 'El Salvador',
            alpha2Code: 'SV',
            alpha3Code: 'SLV',
            numericCode: '222'
        },
        {
            name: 'Equatorial Guinea',
            alpha2Code: 'GQ',
            alpha3Code: 'GNQ',
            numericCode: '226'
        },
        {
            name: 'Eritrea',
            alpha2Code: 'ER',
            alpha3Code: 'ERI',
            numericCode: '232'
        },
        {
            name: 'Estonia',
            alpha2Code: 'EE',
            alpha3Code: 'EST',
            numericCode: '233'
        },
        {
            name: 'Eswatini',
            alpha2Code: 'SZ',
            alpha3Code: 'SWZ',
            numericCode: '748'
        },
        {
            name: 'Ethiopia',
            alpha2Code: 'ET',
            alpha3Code: 'ETH',
            numericCode: '231'
        },
        {
            name: 'Fiji',
            alpha2Code: 'FJ',
            alpha3Code: 'FJI',
            numericCode: '242'
        },
        {
            name: 'Finland',
            alpha2Code: 'FI',
            alpha3Code: 'FIN',
            numericCode: '246'
        },
        {
            name: 'France',
            alpha2Code: 'FR',
            alpha3Code: 'FRA',
            numericCode: '250'
        },
        {
            name: 'Gabon',
            alpha2Code: 'GA',
            alpha3Code: 'GAB',
            numericCode: '266'
        },
        {
            name: 'Gambia',
            alpha2Code: 'GM',
            alpha3Code: 'GMB',
            numericCode: '270'
        },
        {
            name: 'Georgia',
            alpha2Code: 'GE',
            alpha3Code: 'GEO',
            numericCode: '268'
        },
        {
            name: 'Germany',
            alpha2Code: 'DE',
            alpha3Code: 'DEU',
            numericCode: '276'
        },
        {
            name: 'Ghana',
            alpha2Code: 'GH',
            alpha3Code: 'GHA',
            numericCode: '288'
        },
        {
            name: 'Greece',
            alpha2Code: 'GR',
            alpha3Code: 'GRC',
            numericCode: '300'
        },
        {
            name: 'Greenland',
            alpha2Code: 'GL',
            alpha3Code: 'GRL',
            numericCode: '304'
        },
        {
            name: 'Guadeloupe',
            alpha2Code: 'GP',
            alpha3Code: 'GLP',
            numericCode: '312'
        },
        {
            name: 'Grenada',
            alpha2Code: 'GD',
            alpha3Code: 'GRD',
            numericCode: '308'
        },
        {
            name: 'Guatemala',
            alpha2Code: 'GT',
            alpha3Code: 'GTM',
            numericCode: '320'
        },
        {
            name: 'Guinea',
            alpha2Code: 'GN',
            alpha3Code: 'GIN',
            numericCode: '324'
        },
        {
            name: 'Guinea-Bissau',
            alpha2Code: 'GW',
            alpha3Code: 'GNB',
            numericCode: '624'
        },
        {
            name: 'Guyana',
            alpha2Code: 'GY',
            alpha3Code: 'GUY',
            numericCode: '328'
        },
        {
            name: 'Haiti',
            alpha2Code: 'HT',
            alpha3Code: 'HTI',
            numericCode: '332'
        },
        {
            name: 'Honduras',
            alpha2Code: 'HN',
            alpha3Code: 'HND',
            numericCode: '340'
        },
        {
            name: 'Hong Kong',
            alpha2Code: 'HK',
            alpha3Code: 'HKG',
            numericCode: '344'
        },
        {
            name: 'Hungary',
            alpha2Code: 'HU',
            alpha3Code: 'HUN',
            numericCode: '348'
        },
        {
            name: 'Iceland',
            alpha2Code: 'IS',
            alpha3Code: 'ISL',
            numericCode: '352'
        },
        {
            name: 'India',
            alpha2Code: 'IN',
            alpha3Code: 'IND',
            numericCode: '356'
        },
        {
            name: 'Indonesia',
            alpha2Code: 'ID',
            alpha3Code: 'IDN',
            numericCode: '360'
        },
        {
            name: 'Iran',
            alpha2Code: 'IR',
            alpha3Code: 'IRN',
            numericCode: '364'
        },
        {
            name: 'Iraq',
            alpha2Code: 'IQ',
            alpha3Code: 'IRQ',
            numericCode: '368'
        },
        {
            name: 'Ireland',
            alpha2Code: 'IE',
            alpha3Code: 'IRL',
            numericCode: '372'
        },
        {
            name: 'Israel',
            alpha2Code: 'IL',
            alpha3Code: 'ISR',
            numericCode: '376'
        },
        {
            name: 'Italy',
            alpha2Code: 'IT',
            alpha3Code: 'ITA',
            numericCode: '380'
        },
        {
            name: 'Jamaica',
            alpha2Code: 'JM',
            alpha3Code: 'JAM',
            numericCode: '388'
        },
        {
            name: 'Japan',
            alpha2Code: 'JP',
            alpha3Code: 'JPN',
            numericCode: '392'
        },
        {
            name: 'Jersey',
            alpha2Code: 'JE',
            alpha3Code: 'JEY',
            numericCode: '832'
        },
        {
            name: 'Jordan',
            alpha2Code: 'JO',
            alpha3Code: 'JOR',
            numericCode: '400'
        },
        {
            name: 'Kazakhstan',
            alpha2Code: 'KZ',
            alpha3Code: 'KAZ',
            numericCode: '398'
        },
        {
            name: 'Kenya',
            alpha2Code: 'KE',
            alpha3Code: 'KEN',
            numericCode: '404'
        },
        {
            name: 'Kiribati',
            alpha2Code: 'KI',
            alpha3Code: 'KIR',
            numericCode: '296'
        },
        {
            name: 'Korea (the Democratic People\'s Republic of)',
            alpha2Code: 'KP',
            alpha3Code: 'PRK',
            numericCode: '408'
        },
        {
            name: 'Korea (the Republic of)\t',
            alpha2Code: 'KR',
            alpha3Code: 'KOR',
            numericCode: '410'
        },
        {
            name: 'Kuwait',
            alpha2Code: 'KW',
            alpha3Code: 'KWT',
            numericCode: '414'
        },
        {
            name: 'Kyrgyzstan',
            alpha2Code: 'KG',
            alpha3Code: 'KGZ',
            numericCode: '417'
        },
        {
            name: 'Laos',
            alpha2Code: 'LA',
            alpha3Code: 'LAO',
            numericCode: '418'
        },
        {
            name: 'Latvia',
            alpha2Code: 'LV',
            alpha3Code: 'LVA',
            numericCode: '428'
        },
        {
            name: 'Lebanon',
            alpha2Code: 'LB',
            alpha3Code: 'LBN',
            numericCode: '422'
        },
        {
            name: 'Lesotho',
            alpha2Code: 'LS',
            alpha3Code: 'LSO',
            numericCode: '426'
        },
        {
            name: 'Liberia',
            alpha2Code: 'LR',
            alpha3Code: 'LBR',
            numericCode: '430'
        },
        {
            name: 'Libya',
            alpha2Code: 'LY',
            alpha3Code: 'LBY',
            numericCode: '434'
        },
        {
            name: 'Liechtenstein',
            alpha2Code: 'LI',
            alpha3Code: 'LIE',
            numericCode: '438'
        },
        {
            name: 'Lithuania',
            alpha2Code: 'LT',
            alpha3Code: 'LTU',
            numericCode: '440'
        },
        {
            name: 'Luxembourg',
            alpha2Code: 'LU',
            alpha3Code: 'LUX',
            numericCode: '442'
        },
        {
            name: 'Macao',
            alpha2Code: 'MO',
            alpha3Code: 'MAC',
            numericCode: '446'
        },
        {
            name: 'Madagascar',
            alpha2Code: 'MG',
            alpha3Code: 'MDG',
            numericCode: '450'
        },
        {
            name: 'Malawi',
            alpha2Code: 'MW',
            alpha3Code: 'MWI',
            numericCode: '454'
        },
        {
            name: 'Malaysia',
            alpha2Code: 'MY',
            alpha3Code: 'MYS',
            numericCode: '458'
        },
        {
            name: 'Maldives',
            alpha2Code: 'MV',
            alpha3Code: 'MDV',
            numericCode: '462'
        },
        {
            name: 'Mali',
            alpha2Code: 'ML',
            alpha3Code: 'MLI',
            numericCode: '466'
        },
        {
            name: 'Malta',
            alpha2Code: 'MT',
            alpha3Code: 'MLT',
            numericCode: '470'
        },
        {
            name: 'Mauritania',
            alpha2Code: 'MR',
            alpha3Code: 'MRT',
            numericCode: '478'
        },
        {
            name: 'Mauritius',
            alpha2Code: 'MU',
            alpha3Code: 'MUS',
            numericCode: '480'
        },
        {
            name: 'Mexico',
            alpha2Code: 'MX',
            alpha3Code: 'MEX',
            numericCode: '484'
        },
        {
            name: 'Moldova',
            alpha2Code: 'MD',
            alpha3Code: 'MDA',
            numericCode: '498'
        },
        {
            name: 'Monaco',
            alpha2Code: 'MC',
            alpha3Code: 'MCO',
            numericCode: '492'
        },
        {
            name: 'Mongolia',
            alpha2Code: 'MN',
            alpha3Code: 'MNG',
            numericCode: '496'
        },
        {
            name: 'Montenegro',
            alpha2Code: 'ME',
            alpha3Code: 'MNE',
            numericCode: '499'
        },
        {
            name: 'Morocco',
            alpha2Code: 'MA',
            alpha3Code: 'MAR',
            numericCode: '504'
        },
        {
            name: 'Mozambique',
            alpha2Code: 'MZ',
            alpha3Code: 'MOZ',
            numericCode: '508'
        },
        {
            name: 'Myanmar',
            alpha2Code: 'MM',
            alpha3Code: 'MMR',
            numericCode: '104'
        },
        {
            name: 'Namibia',
            alpha2Code: 'NA',
            alpha3Code: 'NAM',
            numericCode: '516'
        },
        {
            name: 'Nauru',
            alpha2Code: 'NR',
            alpha3Code: 'NRU',
            numericCode: '520'
        },
        {
            name: 'Nepal',
            alpha2Code: 'NP',
            alpha3Code: 'NPL',
            numericCode: '524'
        },
        {
            name: 'Netherlands',
            alpha2Code: 'NL',
            alpha3Code: 'NLD',
            numericCode: '528'
        },
        {
            name: 'New Caledonia',
            alpha2Code: 'NC',
            alpha3Code: 'NCL',
            numericCode: '540'
        },
        {
            name: 'New Zealand',
            alpha2Code: 'NZ',
            alpha3Code: 'NZL',
            numericCode: '554'
        },
        {
            name: 'Nicaragua',
            alpha2Code: 'NI',
            alpha3Code: 'NIC',
            numericCode: '558'
        },
        {
            name: 'Niger',
            alpha2Code: 'NE',
            alpha3Code: 'NER',
            numericCode: '562'
        },
        {
            name: 'Nigeria',
            alpha2Code: 'NG',
            alpha3Code: 'NGA',
            numericCode: '566'
        },
        {
            name: 'Norway',
            alpha2Code: 'NO',
            alpha3Code: 'NOR',
            numericCode: '578'
        },
        {
            name: 'Oman',
            alpha2Code: 'OM',
            alpha3Code: 'OMN',
            numericCode: '512'
        },
        {
            name: 'Pakistan',
            alpha2Code: 'PK',
            alpha3Code: 'PAK',
            numericCode: '586'
        },
        {
            name: 'Palau',
            alpha2Code: 'PW',
            alpha3Code: 'PLW',
            numericCode: '585'
        },
        {
            name: 'Palestine',
            alpha2Code: 'PS',
            alpha3Code: 'PSE',
            numericCode: '275'
        },
        {
            name: 'Panama',
            alpha2Code: 'PA',
            alpha3Code: 'PAN',
            numericCode: '591'
        },
        {
            name: 'Papua New Guinea',
            alpha2Code: 'PG',
            alpha3Code: 'PNG',
            numericCode: '598'
        },
        {
            name: 'Paraguay',
            alpha2Code: 'PY',
            alpha3Code: 'PRY',
            numericCode: '600'
        },
        {
            name: 'Peru',
            alpha2Code: 'PE',
            alpha3Code: 'PER',
            numericCode: '604'
        },
        {
            name: 'Philippines',
            alpha2Code: 'PH',
            alpha3Code: 'PHL',
            numericCode: '608'
        },
        {
            name: 'Poland',
            alpha2Code: 'PL',
            alpha3Code: 'POL',
            numericCode: '616'
        },
        {
            name: 'Portugal',
            alpha2Code: 'PT',
            alpha3Code: 'PRT',
            numericCode: '620'
        },
        {
            name: 'Puerto Rico',
            alpha2Code: 'PR',
            alpha3Code: 'PRI',
            numericCode: '630'
        },
        {
            name: 'Qatar',
            alpha2Code: 'QA',
            alpha3Code: 'QAT',
            numericCode: '634'
        },
        {
            name: 'Republic of North Macedonia',
            alpha2Code: 'MK',
            alpha3Code: 'MKD',
            numericCode: '807'
        },
        {
            name: 'Romania',
            alpha2Code: 'RO',
            alpha3Code: 'ROU',
            numericCode: '642'
        },
        {
            name: 'Russian Federation (the)',
            alpha2Code: 'RU',
            alpha3Code: 'RUS',
            numericCode: '643'
        },
        {
            name: 'Rwanda',
            alpha2Code: 'RW',
            alpha3Code: 'RWA',
            numericCode: '646'
        },
        {
            name: 'Saint Kitts and Nevis',
            alpha2Code: 'KN',
            alpha3Code: 'KNA',
            numericCode: '659'
        },
        {
            name: 'Saint Lucia',
            alpha2Code: 'LC',
            alpha3Code: 'LCA',
            numericCode: '662'
        },
        {
            name: 'Saint Vincent and the Grenadines',
            alpha2Code: 'VC',
            alpha3Code: 'VCT',
            numericCode: '670'
        },
        {
            name: 'Samoa',
            alpha2Code: 'WS',
            alpha3Code: 'WSM',
            numericCode: '882'
        },
        {
            name: 'San Marino',
            alpha2Code: 'SM',
            alpha3Code: 'SMR',
            numericCode: '674'
        },
        {
            name: 'Sao Tome and Principe',
            alpha2Code: 'ST',
            alpha3Code: 'STP',
            numericCode: '678'
        },
        {
            name: 'Saudi Arabia',
            alpha2Code: 'SA',
            alpha3Code: 'SAU',
            numericCode: '682'
        },
        {
            name: 'Senegal',
            alpha2Code: 'SN',
            alpha3Code: 'SEN',
            numericCode: '686'
        },
        {
            name: 'Serbia',
            alpha2Code: 'RS',
            alpha3Code: 'SRB',
            numericCode: '688'
        },
        {
            name: 'Seychelles',
            alpha2Code: 'SC',
            alpha3Code: 'SYC',
            numericCode: '690'
        },
        {
            name: 'Sierra Leone',
            alpha2Code: 'SL',
            alpha3Code: 'SLE',
            numericCode: '694'
        },
        {
            name: 'Singapore',
            alpha2Code: 'SG',
            alpha3Code: 'SGP',
            numericCode: '702'
        },
        {
            name: 'Slovakia',
            alpha2Code: 'SK',
            alpha3Code: 'SVK',
            numericCode: '703'
        },
        {
            name: 'Slovenia',
            alpha2Code: 'SI',
            alpha3Code: 'SVN',
            numericCode: '705'
        },
        {
            name: 'Solomon Islands',
            alpha2Code: 'SB',
            alpha3Code: 'SLB',
            numericCode: '090'
        },
        {
            name: 'Somalia',
            alpha2Code: 'SO',
            alpha3Code: 'SOM',
            numericCode: '706'
        },
        {
            name: 'South Africa',
            alpha2Code: 'ZA',
            alpha3Code: 'ZAF',
            numericCode: '710'
        },
        {
            name: 'South Sudan',
            alpha2Code: 'SS',
            alpha3Code: 'SSD',
            numericCode: '728'
        },
        {
            name: 'Spain',
            alpha2Code: 'ES',
            alpha3Code: 'ESP',
            numericCode: '724'
        },
        {
            name: 'Sri Lanka',
            alpha2Code: 'LK',
            alpha3Code: 'LKA',
            numericCode: '144'
        },
        {
            name: 'Sudan',
            alpha2Code: 'SD',
            alpha3Code: 'SDN',
            numericCode: '729'
        },
        {
            name: 'Suriname',
            alpha2Code: 'SR',
            alpha3Code: 'SUR',
            numericCode: '740'
        },
        {
            name: 'Sweden',
            alpha2Code: 'SE',
            alpha3Code: 'SWE',
            numericCode: '752'
        },
        {
            name: 'Switzerland',
            alpha2Code: 'CH',
            alpha3Code: 'CHE',
            numericCode: '756'
        },
        {
            name: 'Syrian Arab Republic',
            alpha2Code: 'SY',
            alpha3Code: 'SYR',
            numericCode: '760'
        },
        {
            name: 'Taiwan',
            alpha2Code: 'TW',
            alpha3Code: 'TWN',
            numericCode: '158'
        },
        {
            name: 'Tajikistan',
            alpha2Code: 'TJ',
            alpha3Code: 'TJK',
            numericCode: '762'
        },
        {
            name: 'Tanzania',
            alpha2Code: 'TZ',
            alpha3Code: 'TZA',
            numericCode: '834'
        },
        {
            name: 'Thailand',
            alpha2Code: 'TH',
            alpha3Code: 'THA',
            numericCode: '764'
        },
        {
            name: 'Timor-Leste',
            alpha2Code: 'TL',
            alpha3Code: 'TLS',
            numericCode: '626'
        },
        {
            name: 'Togo',
            alpha2Code: 'TG',
            alpha3Code: 'TGO',
            numericCode: '768'
        },
        {
            name: 'Tonga',
            alpha2Code: 'TO',
            alpha3Code: 'TON',
            numericCode: '776'
        },
        {
            name: 'Trinidad and Tobago',
            alpha2Code: 'TT',
            alpha3Code: 'TTO',
            numericCode: '780'
        },
        {
            name: 'Tunisia',
            alpha2Code: 'TN',
            alpha3Code: 'TUN',
            numericCode: '788'
        },
        {
            name: 'Turkey',
            alpha2Code: 'TR',
            alpha3Code: 'TUR',
            numericCode: '792'
        },
        {
            name: 'Turkmenistan',
            alpha2Code: 'TM',
            alpha3Code: 'TKM',
            numericCode: '795'
        },
        {
            name: 'Tuvalu',
            alpha2Code: 'TV',
            alpha3Code: 'TUV',
            numericCode: '798'
        },
        {
            name: 'Uganda',
            alpha2Code: 'UG',
            alpha3Code: 'UGA',
            numericCode: '800'
        },
        {
            name: 'Ukraine',
            alpha2Code: 'UA',
            alpha3Code: 'UKR',
            numericCode: '804'
        },
        {
            name: 'United Arab Emirates',
            alpha2Code: 'AE',
            alpha3Code: 'ARE',
            numericCode: '784'
        },
        {
            name: 'United Kingdom',
            alpha2Code: 'GB',
            alpha3Code: 'GBR',
            numericCode: '826'
        },
        {
            name: 'United States of America',
            alpha2Code: 'US',
            alpha3Code: 'USA',
            numericCode: '840'
        },
        {
            name: 'Uruguay',
            alpha2Code: 'UY',
            alpha3Code: 'URY',
            numericCode: '858'
        },
        {
            name: 'Uzbekistan',
            alpha2Code: 'UZ',
            alpha3Code: 'UZB',
            numericCode: '860'
        },
        {
            name: 'Vanuatu',
            alpha2Code: 'VU',
            alpha3Code: 'VUT',
            numericCode: '548'
        },
        {
            name: 'Venezuela',
            alpha2Code: 'VE',
            alpha3Code: 'VEN',
            numericCode: '862'
        },
        {
            name: 'Vietnam',
            alpha2Code: 'VN',
            alpha3Code: 'VNM',
            numericCode: '704'
        },
        {
            name: 'Yemen',
            alpha2Code: 'YE',
            alpha3Code: 'YEM',
            numericCode: '887'
        },
        {
            name: 'Zambia',
            alpha2Code: 'ZM',
            alpha3Code: 'ZMB',
            numericCode: '894'
        },
        {
            name: 'Zimbabwe',
            alpha2Code: 'ZW',
            alpha3Code: 'ZWE',
            numericCode: '716'
        }
    ];

    var _c0 = ["countryAutocomplete"];
    function MatSelectCountryComponent_mat_label_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-label");
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r0 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(ctx_r0.label);
    } }
    function MatSelectCountryComponent_mat_option_7_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-option", 7);
        core.ɵɵelement(1, "mat-icon", 8);
        core.ɵɵelementStart(2, "small");
        core.ɵɵtext(3);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var country_r3 = ctx.$implicit;
        core.ɵɵproperty("value", country_r3 == null ? null : country_r3.name);
        core.ɵɵadvance(1);
        core.ɵɵproperty("svgIcon", country_r3 == null ? null : country_r3.alpha2Code.toLowerCase());
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate2("", country_r3 == null ? null : country_r3.name, " - ", country_r3 == null ? null : country_r3.alpha3Code, "");
    } }
    /**
     * @author Anthony Nahas
     * @since 11.19
     * @version 1.0
     */
    var MatSelectCountryComponent = /** @class */ (function () {
        function MatSelectCountryComponent() {
            this.placeHolder = 'Select country';
            this.onCountrySelected = new core.EventEmitter();
            this.countryFormControl = new forms.FormControl();
            this.countries = COUNTRIES_DB;
            this.modelChanged = new rxjs.Subject();
            this.debounceTime = 300;
            this.filterString = '';
        }
        MatSelectCountryComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.subscription = this.modelChanged
                .pipe(operators.startWith(''), operators.debounceTime(this.debounceTime))
                .subscribe(function (value) {
                _this.filterString = value;
                _this._filter(value);
            });
        };
        MatSelectCountryComponent.prototype.ngOnChanges = function (changes) {
            if (changes.country) {
                if (changes.country.currentValue) {
                    var newValue_1 = changes.country.currentValue.toUpperCase();
                    this.selectedCountry = this.countries.find(function (country) {
                        return country.name.toUpperCase() === newValue_1
                            || country.alpha2Code === newValue_1
                            || country.alpha3Code === newValue_1
                            || country.numericCode === newValue_1;
                    });
                    this.countryFormControl.setValue(this.selectedCountry ? this.selectedCountry.name : '');
                }
                else {
                    this.selectedCountry = undefined;
                    this.countryFormControl.setValue('');
                }
            }
        };
        MatSelectCountryComponent.prototype._filter = function (value) {
            var filterValue = value.toLowerCase();
            // if not filtered, fetch reduced array
            if (this.itemsLoadSize && filterValue === '') {
                this.filteredOptions = this.countries.slice(0, this.itemsLoadSize);
            }
            else {
                this.filteredOptions = this.countries.filter(function (option) {
                    return option.name.toLowerCase().includes(filterValue)
                        || option.alpha2Code.toLowerCase().includes(filterValue)
                        || option.alpha3Code.toLowerCase().includes(filterValue);
                });
            }
        };
        MatSelectCountryComponent.prototype.onBlur = function () {
            if (this.countryFormControl.value || !this.nullable) {
                this.countryFormControl.setValue(this.selectedCountry ? this.selectedCountry.name : '');
            }
            else if (this.selectedCountry) {
                this.selectedCountry = null;
                this.onCountrySelected.emit(null);
            }
        };
        MatSelectCountryComponent.prototype.onOptionsSelected = function ($event) {
            this.selectedCountry = this.countries.find(function (country) { return country.name === $event.option.value; });
            this.onCountrySelected.emit(this.selectedCountry);
        };
        MatSelectCountryComponent.prototype.autocompleteScroll = function () {
            var _this = this;
            if (this.itemsLoadSize) {
                setTimeout(function () {
                    if (_this.statesAutocompleteRef &&
                        _this.autocompleteTrigger &&
                        _this.statesAutocompleteRef.panel) {
                        rxjs.fromEvent(_this.statesAutocompleteRef.panel.nativeElement, 'scroll')
                            .pipe(operators.takeUntil(_this.autocompleteTrigger.panelClosingActions))
                            .subscribe(function () {
                            var scrollTop = _this.statesAutocompleteRef.panel.nativeElement
                                .scrollTop;
                            var scrollHeight = _this.statesAutocompleteRef.panel.nativeElement
                                .scrollHeight;
                            var elementHeight = _this.statesAutocompleteRef.panel.nativeElement
                                .clientHeight;
                            var atBottom = scrollHeight === scrollTop + elementHeight;
                            if (atBottom) {
                                // fetch more data if not filtered
                                if (_this.filterString === '') {
                                    var fromIndex = _this.filteredOptions.length;
                                    var toIndex = +_this.filteredOptions.length + +_this.itemsLoadSize;
                                    _this.filteredOptions = __spread(_this.filteredOptions, _this.countries.slice(fromIndex, toIndex));
                                }
                            }
                        });
                    }
                });
            }
        };
        MatSelectCountryComponent.prototype.inputChanged = function (value) {
            this.modelChanged.next(value);
        };
        MatSelectCountryComponent.prototype.ngOnDestroy = function () {
            this.subscription.unsubscribe();
        };
        MatSelectCountryComponent.ɵfac = function MatSelectCountryComponent_Factory(t) { return new (t || MatSelectCountryComponent)(); };
        MatSelectCountryComponent.ɵcmp = core.ɵɵdefineComponent({ type: MatSelectCountryComponent, selectors: [["mat-select-country"]], viewQuery: function MatSelectCountryComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵviewQuery(_c0, true);
                core.ɵɵviewQuery(autocomplete.MatAutocompleteTrigger, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.statesAutocompleteRef = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.autocompleteTrigger = _t.first);
            } }, inputs: { appearance: "appearance", country: "country", label: "label", placeHolder: "placeHolder", disabled: "disabled", nullable: "nullable", readonly: "readonly", itemsLoadSize: "itemsLoadSize" }, outputs: { onCountrySelected: "onCountrySelected" }, features: [core.ɵɵNgOnChangesFeature], decls: 8, vars: 9, consts: [[3, "appearance"], [4, "ngIf"], ["matSuffix", "", 1, "mr-12", "s-20", "secondary-text", 3, "svgIcon"], ["type", "text", "aria-label", "country", "matInput", "", 3, "placeholder", "formControl", "matAutocomplete", "readonly", "disabled", "blur", "input"], [3, "opened", "optionSelected"], ["countryAutocomplete", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [3, "svgIcon"]], template: function MatSelectCountryComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "form");
                core.ɵɵelementStart(1, "mat-form-field", 0);
                core.ɵɵtemplate(2, MatSelectCountryComponent_mat_label_2_Template, 2, 1, "mat-label", 1);
                core.ɵɵelement(3, "mat-icon", 2);
                core.ɵɵelementStart(4, "input", 3);
                core.ɵɵlistener("blur", function MatSelectCountryComponent_Template_input_blur_4_listener() { return ctx.onBlur(); })("input", function MatSelectCountryComponent_Template_input_input_4_listener($event) { return ctx.inputChanged($event.target.value); });
                core.ɵɵelementEnd();
                core.ɵɵelementStart(5, "mat-autocomplete", 4, 5);
                core.ɵɵlistener("opened", function MatSelectCountryComponent_Template_mat_autocomplete_opened_5_listener() { return ctx.autocompleteScroll(); })("optionSelected", function MatSelectCountryComponent_Template_mat_autocomplete_optionSelected_5_listener($event) { return ctx.onOptionsSelected($event); });
                core.ɵɵtemplate(7, MatSelectCountryComponent_mat_option_7_Template, 4, 4, "mat-option", 6);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
            } if (rf & 2) {
                var _r1 = core.ɵɵreference(6);
                core.ɵɵadvance(1);
                core.ɵɵproperty("appearance", ctx.appearance);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.label);
                core.ɵɵadvance(1);
                core.ɵɵproperty("svgIcon", ctx.selectedCountry == null ? null : ctx.selectedCountry.alpha2Code.toLowerCase());
                core.ɵɵadvance(1);
                core.ɵɵproperty("placeholder", ctx.placeHolder)("formControl", ctx.countryFormControl)("matAutocomplete", _r1)("readonly", ctx.readonly)("disabled", ctx.disabled);
                core.ɵɵadvance(3);
                core.ɵɵproperty("ngForOf", ctx.filteredOptions);
            } }, directives: [forms.ɵangular_packages_forms_forms_y, forms.NgControlStatusGroup, forms.NgForm, formField.MatFormField, common.NgIf, icon.MatIcon, formField.MatSuffix, input.MatInput, forms.DefaultValueAccessor, autocomplete.MatAutocompleteTrigger, forms.NgControlStatus, forms.FormControlDirective, autocomplete.MatAutocomplete, common.NgForOf, formField.MatLabel, core$1.MatOption], styles: [""] });
        return MatSelectCountryComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(MatSelectCountryComponent, [{
            type: core.Component,
            args: [{
                    selector: 'mat-select-country',
                    templateUrl: 'mat-select-country.component.html',
                    styleUrls: ['mat-select-country.component.scss']
                }]
        }], null, { appearance: [{
                type: core.Input
            }], country: [{
                type: core.Input
            }], label: [{
                type: core.Input
            }], placeHolder: [{
                type: core.Input
            }], disabled: [{
                type: core.Input
            }], nullable: [{
                type: core.Input
            }], readonly: [{
                type: core.Input
            }], itemsLoadSize: [{
                type: core.Input
            }], statesAutocompleteRef: [{
                type: core.ViewChild,
                args: ['countryAutocomplete']
            }], autocompleteTrigger: [{
                type: core.ViewChild,
                args: [autocomplete.MatAutocompleteTrigger]
            }], onCountrySelected: [{
                type: core.Output
            }] }); })();

    /**
     * @author Anthony Nahas
     * @since 06.11.19
     */
    var MatSelectCountryModule = /** @class */ (function () {
        function MatSelectCountryModule(iconRegistry, sanitizer) {
            this.iconRegistry = iconRegistry;
            this.sanitizer = sanitizer;
            this.registerCountries();
        }
        MatSelectCountryModule.prototype.registerCountries = function () {
            var e_1, _a;
            try {
                for (var COUNTRIES_DB_1 = __values(COUNTRIES_DB), COUNTRIES_DB_1_1 = COUNTRIES_DB_1.next(); !COUNTRIES_DB_1_1.done; COUNTRIES_DB_1_1 = COUNTRIES_DB_1.next()) {
                    var country = COUNTRIES_DB_1_1.value;
                    var countryAlpha2Code = country.alpha2Code.toLowerCase();
                    this.iconRegistry
                        .addSvgIcon(countryAlpha2Code, this.sanitizer
                        .bypassSecurityTrustResourceUrl("assets/svg-country-flags/svg/" + countryAlpha2Code + ".svg"));
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (COUNTRIES_DB_1_1 && !COUNTRIES_DB_1_1.done && (_a = COUNTRIES_DB_1.return)) _a.call(COUNTRIES_DB_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        MatSelectCountryModule.ɵmod = core.ɵɵdefineNgModule({ type: MatSelectCountryModule });
        MatSelectCountryModule.ɵinj = core.ɵɵdefineInjector({ factory: function MatSelectCountryModule_Factory(t) { return new (t || MatSelectCountryModule)(core.ɵɵinject(icon.MatIconRegistry), core.ɵɵinject(platformBrowser.DomSanitizer)); }, imports: [[
                    common.CommonModule,
                    forms.FormsModule,
                    forms.ReactiveFormsModule,
                    http.HttpClientModule,
                    button.MatButtonModule,
                    menu.MatMenuModule,
                    input.MatInputModule,
                    autocomplete.MatAutocompleteModule,
                    icon.MatIconModule
                    // FlexLayoutModule
                ]] });
        return MatSelectCountryModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(MatSelectCountryModule, { declarations: [MatSelectCountryComponent], imports: [common.CommonModule,
            forms.FormsModule,
            forms.ReactiveFormsModule,
            http.HttpClientModule,
            button.MatButtonModule,
            menu.MatMenuModule,
            input.MatInputModule,
            autocomplete.MatAutocompleteModule,
            icon.MatIconModule
            // FlexLayoutModule
        ], exports: [MatSelectCountryComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(MatSelectCountryModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [MatSelectCountryComponent],
                    imports: [
                        common.CommonModule,
                        forms.FormsModule,
                        forms.ReactiveFormsModule,
                        http.HttpClientModule,
                        button.MatButtonModule,
                        menu.MatMenuModule,
                        input.MatInputModule,
                        autocomplete.MatAutocompleteModule,
                        icon.MatIconModule
                        // FlexLayoutModule
                    ],
                    exports: [MatSelectCountryComponent]
                }]
        }], function () { return [{ type: icon.MatIconRegistry }, { type: platformBrowser.DomSanitizer }]; }, null); })();

    exports.MatSelectCountryComponent = MatSelectCountryComponent;
    exports.MatSelectCountryModule = MatSelectCountryModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-material-extensions-select-country.umd.js.map
