/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/api/src/api.controller.ts":
/*!****************************************!*\
  !*** ./apps/api/src/api.controller.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const api_service_1 = __webpack_require__(/*! ./api.service */ "./apps/api/src/api.service.ts");
let ApiController = class ApiController {
    constructor(apiService) {
        this.apiService = apiService;
    }
    getHello() {
        return this.apiService.getHello();
    }
};
exports.ApiController = ApiController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], ApiController.prototype, "getHello", null);
exports.ApiController = ApiController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof api_service_1.ApiService !== "undefined" && api_service_1.ApiService) === "function" ? _a : Object])
], ApiController);


/***/ }),

/***/ "./apps/api/src/api.module.ts":
/*!************************************!*\
  !*** ./apps/api/src/api.module.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const api_controller_1 = __webpack_require__(/*! ./api.controller */ "./apps/api/src/api.controller.ts");
const api_service_1 = __webpack_require__(/*! ./api.service */ "./apps/api/src/api.service.ts");
const share_1 = __webpack_require__(/*! @lib/share */ "./libs/share/src/index.ts");
let ApiModule = class ApiModule {
};
exports.ApiModule = ApiModule;
exports.ApiModule = ApiModule = __decorate([
    (0, common_1.Module)({
        imports: [share_1.ShareModule],
        controllers: [api_controller_1.ApiController],
        providers: [api_service_1.ApiService],
    })
], ApiModule);


/***/ }),

/***/ "./apps/api/src/api.service.ts":
/*!*************************************!*\
  !*** ./apps/api/src/api.service.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let ApiService = class ApiService {
    getHello() {
        return 'Hello World!';
    }
};
exports.ApiService = ApiService;
exports.ApiService = ApiService = __decorate([
    (0, common_1.Injectable)()
], ApiService);


/***/ }),

/***/ "./libs/share/src/configuration/configuration.module.ts":
/*!**************************************************************!*\
  !*** ./libs/share/src/configuration/configuration.module.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConfigurationModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const Joi = __webpack_require__(/*! joi */ "joi");
const mongodb_config_1 = __webpack_require__(/*! ./mongodb.config */ "./libs/share/src/configuration/mongodb.config.ts");
const redis_config_1 = __webpack_require__(/*! ./redis.config */ "./libs/share/src/configuration/redis.config.ts");
const mongodb_schema_1 = __webpack_require__(/*! ./schemas/mongodb.schema */ "./libs/share/src/configuration/schemas/mongodb.schema.ts");
const redis_schema_1 = __webpack_require__(/*! ./schemas/redis.schema */ "./libs/share/src/configuration/schemas/redis.schema.ts");
const queue_config_1 = __webpack_require__(/*! ./queue.config */ "./libs/share/src/configuration/queue.config.ts");
const meilisearch_schema_1 = __webpack_require__(/*! ./schemas/meilisearch.schema */ "./libs/share/src/configuration/schemas/meilisearch.schema.ts");
const meilisearch_config_1 = __webpack_require__(/*! ./meilisearch.config */ "./libs/share/src/configuration/meilisearch.config.ts");
let ConfigurationModule = class ConfigurationModule {
};
exports.ConfigurationModule = ConfigurationModule;
exports.ConfigurationModule = ConfigurationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                cache: true,
                expandVariables: true,
                load: [
                    mongodb_config_1.buildMongoDBConfig,
                    redis_config_1.buildRedisConfig,
                    queue_config_1.buildQueueConfig,
                    meilisearch_config_1.buildMeilisearchConfig,
                ],
                validationSchema: Joi.object({
                    NODE_ENV: Joi.string()
                        .valid("development", "production", "test", "provision", "staging")
                        .default("development"),
                    WEB_PORT: Joi.number().default(3000),
                    WEB_API_PORT: Joi.number().default(3004),
                    CMS_PORT: Joi.number().default(3001),
                    CMS_API_PORT: Joi.number().default(3002),
                    BULLMQ_PORT: Joi.number().default(3003),
                    ...(0, redis_schema_1.redisConfigSchema)(true),
                    ...(0, mongodb_schema_1.mongodbConfigSchema)(true),
                    ...(0, redis_schema_1.redisConfigSchema)(true, "QUEUE"),
                    ...(0, meilisearch_schema_1.meilisearchConfigSchema)(true),
                    WEB_API_URI: Joi.string().optional(),
                    RESOURCE_API_URI: Joi.string().optional(),
                }),
            }),
        ],
    })
], ConfigurationModule);


/***/ }),

/***/ "./libs/share/src/configuration/meilisearch.config.ts":
/*!************************************************************!*\
  !*** ./libs/share/src/configuration/meilisearch.config.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.buildMeilisearchConfig = void 0;
const buildMeilisearchConfig = (configKeymap = "meilisearch", configPrefix = "MEILISEARCH", configKeys = null) => {
    let keys = {
        url: "URL",
        key: "KEY",
    };
    if (configPrefix != "") {
        for (const key in keys) {
            keys[key] = `${configPrefix}_${keys[key]}`;
        }
    }
    if (configKeys != null) {
        keys = configKeys;
    }
    const config = {};
    config[configKeymap] = {
        url: process.env[keys.url],
        key: process.env[keys.key],
    };
    return config;
};
exports.buildMeilisearchConfig = buildMeilisearchConfig;


/***/ }),

/***/ "./libs/share/src/configuration/mongodb.config.ts":
/*!********************************************************!*\
  !*** ./libs/share/src/configuration/mongodb.config.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.buildMongoDBConfig = void 0;
const redis_config_1 = __webpack_require__(/*! ./redis.config */ "./libs/share/src/configuration/redis.config.ts");
const buildMongoDBConfig = (configKeymap = "mongodb", configPrefix = "MONGODB", configKeys = null) => {
    let keys = {
        uri: "URI",
        cacheEnable: "CACHE_ENABLE",
    };
    if (configPrefix != "") {
        for (const key in keys) {
            keys[key] = `${configPrefix}_${keys[key]}`;
        }
    }
    if (configKeys != null) {
        keys = configKeys;
    }
    const config = {};
    config[configKeymap] = {
        uri: process.env[keys.uri],
        cacheEnable: process.env[keys.cacheEnable],
    };
    if (config[configKeymap].cacheEnable) {
        config[configKeymap] = {
            ...config[configKeymap],
            ...(0, redis_config_1.buildRedisConfig)("cache", "MONGODB_CACHE"),
        };
    }
    return config;
};
exports.buildMongoDBConfig = buildMongoDBConfig;


/***/ }),

/***/ "./libs/share/src/configuration/queue.config.ts":
/*!******************************************************!*\
  !*** ./libs/share/src/configuration/queue.config.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.buildQueueConfig = void 0;
const redis_config_1 = __webpack_require__(/*! ./redis.config */ "./libs/share/src/configuration/redis.config.ts");
const buildQueueConfig = () => (0, redis_config_1.buildRedisConfig)("queue", "QUEUE");
exports.buildQueueConfig = buildQueueConfig;


/***/ }),

/***/ "./libs/share/src/configuration/redis.config.ts":
/*!******************************************************!*\
  !*** ./libs/share/src/configuration/redis.config.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.buildRedisConfig = void 0;
const buildRedisConfig = (configKeymap = "redis", configPrefix = "REDIS", configKeys = null) => {
    let keys = {
        host: "HOST",
        port: "PORT",
        db: "DB",
        prefix: "PREFIX",
        auth: "AUTH",
        password: "PASSWORD",
    };
    if (configPrefix != "") {
        for (const key in keys) {
            keys[key] = `${configPrefix}_${keys[key]}`;
        }
    }
    if (configKeys != null) {
        keys = configKeys;
    }
    const config = {};
    config[configKeymap] = {
        host: process.env[keys.host],
        port: parseInt(process.env[`${keys.port}`]),
        db: parseInt(process.env[`${keys.db}`]),
        prefix: process.env[`${keys.prefix}`],
        auth: process.env[`${keys.auth}`] == "true",
        password: process.env[keys.password],
    };
    return config;
};
exports.buildRedisConfig = buildRedisConfig;


/***/ }),

/***/ "./libs/share/src/configuration/schemas/common.schema.ts":
/*!***************************************************************!*\
  !*** ./libs/share/src/configuration/schemas/common.schema.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.URI_SCHEMA = exports.PORT_SCHEMA = exports.HOST_SCHEMA = exports.ENV_SCHEMA = void 0;
const Joi = __webpack_require__(/*! joi */ "joi");
exports.ENV_SCHEMA = Joi.string()
    .valid("development", "production", "test", "provision", "staging")
    .default("development")
    .required();
exports.HOST_SCHEMA = Joi.string();
exports.PORT_SCHEMA = Joi.number();
exports.URI_SCHEMA = Joi.string();


/***/ }),

/***/ "./libs/share/src/configuration/schemas/meilisearch.schema.ts":
/*!********************************************************************!*\
  !*** ./libs/share/src/configuration/schemas/meilisearch.schema.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.meilisearchConfigSchema = meilisearchConfigSchema;
const Joi = __webpack_require__(/*! joi */ "joi");
const common_schema_1 = __webpack_require__(/*! @lib/share/configuration/schemas/common.schema */ "./libs/share/src/configuration/schemas/common.schema.ts");
function meilisearchConfigSchema(required = false, configPrefix = "MEILISEARCH", configKeys = null) {
    let keys = {
        url: "URL",
        key: "KEY",
    };
    if (configPrefix != "") {
        for (const key in keys) {
            keys[key] = `${configPrefix}_${keys[key]}`;
        }
    }
    const schema = {};
    schema[`${keys.url}`] = common_schema_1.HOST_SCHEMA.default("http://localhost:7700");
    schema[`${keys.key}`] = Joi.string().default("masterKey");
    if (required) {
        for (const key in schema) {
            schema[key] = schema[key].required();
        }
    }
    return schema;
}


/***/ }),

/***/ "./libs/share/src/configuration/schemas/mongodb.schema.ts":
/*!****************************************************************!*\
  !*** ./libs/share/src/configuration/schemas/mongodb.schema.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mongodbConfigSchema = mongodbConfigSchema;
const Joi = __webpack_require__(/*! joi */ "joi");
const common_schema_1 = __webpack_require__(/*! @lib/share/configuration/schemas/common.schema */ "./libs/share/src/configuration/schemas/common.schema.ts");
const redis_schema_1 = __webpack_require__(/*! @lib/share/configuration/schemas/redis.schema */ "./libs/share/src/configuration/schemas/redis.schema.ts");
function mongodbConfigSchema(required = false, configPrefix = "MONGODB", configKeys = null) {
    let keys = {
        uri: "URI",
        cacheEnable: "CACHE_ENABLE",
    };
    if (configPrefix != "") {
        for (const key in keys) {
            keys[key] = `${configPrefix}_${keys[key]}`;
        }
    }
    if (configKeys != null) {
        keys = configKeys;
    }
    const schema = {};
    schema[`${configPrefix}_URI`] = common_schema_1.HOST_SCHEMA.default("mongodb://admin:example@localhost:27017/p90db");
    schema[`${configPrefix}_CACHE_ENABLE`] = Joi.boolean().default(false);
    if (required) {
        for (const key in schema) {
            schema[key] = schema[key].required();
        }
    }
    return {
        ...schema,
        ...(process.env[`${configPrefix}_CACHE_ENABLE`] == "true" &&
            (0, redis_schema_1.redisConfigSchema)(required, `${configPrefix}_CACHE`)),
    };
}


/***/ }),

/***/ "./libs/share/src/configuration/schemas/redis.schema.ts":
/*!**************************************************************!*\
  !*** ./libs/share/src/configuration/schemas/redis.schema.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.redisConfigSchema = redisConfigSchema;
const Joi = __webpack_require__(/*! joi */ "joi");
const common_schema_1 = __webpack_require__(/*! @lib/share/configuration/schemas/common.schema */ "./libs/share/src/configuration/schemas/common.schema.ts");
function redisConfigSchema(required = false, configPrefix = "REDIS", configKeys = null) {
    let keys = {
        host: "HOST",
        port: "PORT",
        db: "DB",
        prefix: "PREFIX",
        auth: "AUTH",
        password: "PASSWORD",
    };
    if (configPrefix != "") {
        for (const key in keys) {
            keys[key] = `${configPrefix}_${keys[key]}`;
        }
    }
    if (configKeys != null) {
        keys = configKeys;
    }
    const schema = {};
    schema[`${keys.host}`] = common_schema_1.HOST_SCHEMA.default("localhost");
    schema[`${keys.port}`] = common_schema_1.PORT_SCHEMA.default(6379);
    schema[`${keys.db}`] = Joi.number().default(1);
    schema[`${keys.prefix}`] = Joi.string().default("");
    schema[`${keys.auth}`] = Joi.boolean().default(false);
    schema[`${keys.password}`] = Joi.string().allow(null, "").default("example");
    if (required) {
        for (const key in schema) {
            schema[key] = schema[key].required();
        }
    }
    return schema;
}


/***/ }),

/***/ "./libs/share/src/database/database.module.ts":
/*!****************************************************!*\
  !*** ./libs/share/src/database/database.module.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_execution_time_1 = __webpack_require__(/*! mongoose-execution-time */ "mongoose-execution-time");
const speedgoose_1 = __webpack_require__(/*! speedgoose */ "speedgoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
let DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRootAsync({
                useFactory: async (configService) => {
                    mongoose_2.default.plugin(mongoose_execution_time_1.logExecutionTime);
                    const mongoDBConfig = configService.get("mongodb");
                    if (mongoDBConfig.cacheEnable &&
                        configService.get("NODE_ENV") === "production") {
                        console.log("--------MongoDB Cache Enabled--------");
                        await (0, speedgoose_1.applySpeedGooseCacheLayer)(mongoose_2.default, {
                            redisOptions: {
                                ...(mongoDBConfig.cache.prefix &&
                                    mongoDBConfig.cache.prefix.length && {
                                    keyPrefix: `${mongoDBConfig.cache.prefix}_`,
                                }),
                            },
                            redisUri: `redis://${mongoDBConfig.cache.auth
                                ? `:${encodeURIComponent(mongoDBConfig.cache.password)}`
                                : ""}@${mongoDBConfig.cache.host}:${mongoDBConfig.cache.port}/${mongoDBConfig.cache.db}`,
                            debugConfig: {
                                enabled: true,
                            },
                        });
                    }
                    return {
                        uri: mongoDBConfig.uri,
                    };
                },
                inject: [config_1.ConfigService],
            }),
        ],
    })
], DatabaseModule);


/***/ }),

/***/ "./libs/share/src/index.ts":
/*!*********************************!*\
  !*** ./libs/share/src/index.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./share.module */ "./libs/share/src/share.module.ts"), exports);
__exportStar(__webpack_require__(/*! ./share.service */ "./libs/share/src/share.service.ts"), exports);


/***/ }),

/***/ "./libs/share/src/share.module.ts":
/*!****************************************!*\
  !*** ./libs/share/src/share.module.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShareModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const share_service_1 = __webpack_require__(/*! ./share.service */ "./libs/share/src/share.service.ts");
const database_module_1 = __webpack_require__(/*! ./database/database.module */ "./libs/share/src/database/database.module.ts");
const configuration_module_1 = __webpack_require__(/*! ./configuration/configuration.module */ "./libs/share/src/configuration/configuration.module.ts");
let ShareModule = class ShareModule {
};
exports.ShareModule = ShareModule;
exports.ShareModule = ShareModule = __decorate([
    (0, common_1.Module)({
        imports: [configuration_module_1.ConfigurationModule, database_module_1.DatabaseModule],
        providers: [share_service_1.ShareService],
        exports: [share_service_1.ShareService],
    })
], ShareModule);


/***/ }),

/***/ "./libs/share/src/share.service.ts":
/*!*****************************************!*\
  !*** ./libs/share/src/share.service.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShareService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let ShareService = class ShareService {
    slugify(str, lower_case = true, split = '-') {
        if (str) {
            str = String(str).toString();
            str = str.replace(/^\s+|\s+$/g, '');
            if (lower_case) {
                str = str.toLowerCase();
            }
            const swaps = {
                '0': ['°', '₀', '۰', '０'],
                '1': ['¹', '₁', '۱', '１'],
                '2': ['²', '₂', '۲', '２'],
                '3': ['³', '₃', '۳', '３'],
                '4': ['⁴', '₄', '۴', '٤', '４'],
                '5': ['⁵', '₅', '۵', '٥', '５'],
                '6': ['⁶', '₆', '۶', '٦', '６'],
                '7': ['⁷', '₇', '۷', '７'],
                '8': ['⁸', '₈', '۸', '８'],
                '9': ['⁹', '₉', '۹', '９'],
                a: [
                    'à',
                    'á',
                    'ả',
                    'ã',
                    'ạ',
                    'ă',
                    'ắ',
                    'ằ',
                    'ẳ',
                    'ẵ',
                    'ặ',
                    'â',
                    'ấ',
                    'ầ',
                    'ẩ',
                    'ẫ',
                    'ậ',
                    'ā',
                    'ą',
                    'å',
                    'α',
                    'ά',
                    'ἀ',
                    'ἁ',
                    'ἂ',
                    'ἃ',
                    'ἄ',
                    'ἅ',
                    'ἆ',
                    'ἇ',
                    'ᾀ',
                    'ᾁ',
                    'ᾂ',
                    'ᾃ',
                    'ᾄ',
                    'ᾅ',
                    'ᾆ',
                    'ᾇ',
                    'ὰ',
                    'ά',
                    'ᾰ',
                    'ᾱ',
                    'ᾲ',
                    'ᾳ',
                    'ᾴ',
                    'ᾶ',
                    'ᾷ',
                    'а',
                    'أ',
                    'အ',
                    'ာ',
                    'ါ',
                    'ǻ',
                    'ǎ',
                    'ª',
                    'ა',
                    'अ',
                    'ا',
                    'ａ',
                    'ä',
                ],
                b: ['б', 'β', 'ب', 'ဗ', 'ბ', 'ｂ'],
                c: ['ç', 'ć', 'č', 'ĉ', 'ċ', 'ｃ'],
                d: [
                    'ď',
                    'ð',
                    'đ',
                    'ƌ',
                    'ȡ',
                    'ɖ',
                    'ɗ',
                    'ᵭ',
                    'ᶁ',
                    'ᶑ',
                    'д',
                    'δ',
                    'د',
                    'ض',
                    'ဍ',
                    'ဒ',
                    'დ',
                    'ｄ',
                ],
                e: [
                    'é',
                    'è',
                    'ẻ',
                    'ẽ',
                    'ẹ',
                    'ê',
                    'ế',
                    'ề',
                    'ể',
                    'ễ',
                    'ệ',
                    'ë',
                    'ē',
                    'ę',
                    'ě',
                    'ĕ',
                    'ė',
                    'ε',
                    'έ',
                    'ἐ',
                    'ἑ',
                    'ἒ',
                    'ἓ',
                    'ἔ',
                    'ἕ',
                    'ὲ',
                    'έ',
                    'е',
                    'ё',
                    'э',
                    'є',
                    'ə',
                    'ဧ',
                    'ေ',
                    'ဲ',
                    'ე',
                    'ए',
                    'إ',
                    'ئ',
                    'ｅ',
                ],
                f: ['ф', 'φ', 'ف', 'ƒ', 'ფ', 'ｆ'],
                g: ['ĝ', 'ğ', 'ġ', 'ģ', 'г', 'ґ', 'γ', 'ဂ', 'გ', 'گ', 'ｇ'],
                h: ['ĥ', 'ħ', 'η', 'ή', 'ح', 'ه', 'ဟ', 'ှ', 'ჰ', 'ｈ'],
                i: [
                    'í',
                    'ì',
                    'ỉ',
                    'ĩ',
                    'ị',
                    'î',
                    'ï',
                    'ī',
                    'ĭ',
                    'į',
                    'ı',
                    'ι',
                    'ί',
                    'ϊ',
                    'ΐ',
                    'ἰ',
                    'ἱ',
                    'ἲ',
                    'ἳ',
                    'ἴ',
                    'ἵ',
                    'ἶ',
                    'ἷ',
                    'ὶ',
                    'ί',
                    'ῐ',
                    'ῑ',
                    'ῒ',
                    'ΐ',
                    'ῖ',
                    'ῗ',
                    'і',
                    'ї',
                    'и',
                    'ဣ',
                    'ိ',
                    'ီ',
                    'ည်',
                    'ǐ',
                    'ი',
                    'इ',
                    'ی',
                    'ｉ',
                ],
                j: ['ĵ', 'ј', 'Ј', 'ჯ', 'ج', 'ｊ'],
                k: ['ķ', 'ĸ', 'к', 'κ', 'Ķ', 'ق', 'ك', 'က', 'კ', 'ქ', 'ک', 'ｋ'],
                l: ['ł', 'ľ', 'ĺ', 'ļ', 'ŀ', 'л', 'λ', 'ل', 'လ', 'ლ', 'ｌ'],
                m: ['м', 'μ', 'م', 'မ', 'მ', 'ｍ'],
                n: ['ñ', 'ń', 'ň', 'ņ', 'ŉ', 'ŋ', 'ν', 'н', 'ن', 'န', 'ნ', 'ｎ'],
                o: [
                    'ó',
                    'ò',
                    'ỏ',
                    'õ',
                    'ọ',
                    'ô',
                    'ố',
                    'ồ',
                    'ổ',
                    'ỗ',
                    'ộ',
                    'ơ',
                    'ớ',
                    'ờ',
                    'ở',
                    'ỡ',
                    'ợ',
                    'ø',
                    'ō',
                    'ő',
                    'ŏ',
                    'ο',
                    'ὀ',
                    'ὁ',
                    'ὂ',
                    'ὃ',
                    'ὄ',
                    'ὅ',
                    'ὸ',
                    'ό',
                    'о',
                    'و',
                    'θ',
                    'ို',
                    'ǒ',
                    'ǿ',
                    'º',
                    'ო',
                    'ओ',
                    'ｏ',
                    'ö',
                ],
                p: ['п', 'π', 'ပ', 'პ', 'پ', 'ｐ'],
                q: ['ყ', 'ｑ'],
                r: ['ŕ', 'ř', 'ŗ', 'р', 'ρ', 'ر', 'რ', 'ｒ'],
                s: ['ś', 'š', 'ş', 'с', 'σ', 'ș', 'ς', 'س', 'ص', 'စ', 'ſ', 'ს', 'ｓ'],
                t: ['ť', 'ţ', 'т', 'τ', 'ț', 'ت', 'ط', 'ဋ', 'တ', 'ŧ', 'თ', 'ტ', 'ｔ'],
                u: [
                    'ú',
                    'ù',
                    'ủ',
                    'ũ',
                    'ụ',
                    'ư',
                    'ứ',
                    'ừ',
                    'ử',
                    'ữ',
                    'ự',
                    'û',
                    'ū',
                    'ů',
                    'ű',
                    'ŭ',
                    'ų',
                    'µ',
                    'у',
                    'ဉ',
                    'ု',
                    'ူ',
                    'ǔ',
                    'ǖ',
                    'ǘ',
                    'ǚ',
                    'ǜ',
                    'უ',
                    'उ',
                    'ｕ',
                    'ў',
                    'ü',
                ],
                v: ['в', 'ვ', 'ϐ', 'ｖ'],
                w: ['ŵ', 'ω', 'ώ', 'ဝ', 'ွ', 'ｗ'],
                x: ['χ', 'ξ', 'ｘ'],
                y: [
                    'ý',
                    'ỳ',
                    'ỷ',
                    'ỹ',
                    'ỵ',
                    'ÿ',
                    'ŷ',
                    'й',
                    'ы',
                    'υ',
                    'ϋ',
                    'ύ',
                    'ΰ',
                    'ي',
                    'ယ',
                    'ｙ',
                ],
                z: ['ź', 'ž', 'ż', 'з', 'ζ', 'ز', 'ဇ', 'ზ', 'ｚ'],
                aa: ['ع', 'आ', 'آ'],
                ae: ['æ', 'ǽ'],
                ai: ['ऐ'],
                ch: ['ч', 'ჩ', 'ჭ', 'چ'],
                dj: ['ђ', 'đ'],
                dz: ['џ', 'ძ'],
                ei: ['ऍ'],
                gh: ['غ', 'ღ'],
                ii: ['ई'],
                ij: ['ĳ'],
                kh: ['х', 'خ', 'ხ'],
                lj: ['љ'],
                nj: ['њ'],
                oe: ['ö', 'œ', 'ؤ'],
                oi: ['ऑ'],
                oii: ['ऒ'],
                ps: ['ψ'],
                sh: ['ш', 'შ', 'ش'],
                shch: ['щ'],
                ss: ['ß'],
                sx: ['ŝ'],
                th: ['þ', 'ϑ', 'ث', 'ذ', 'ظ'],
                ts: ['ц', 'ც', 'წ'],
                ue: ['ü'],
                uu: ['ऊ'],
                ya: ['я'],
                yu: ['ю'],
                zh: ['ж', 'ჟ', 'ژ'],
                '(c)': ['©'],
                A: [
                    'Á',
                    'À',
                    'Ả',
                    'Ã',
                    'Ạ',
                    'Ă',
                    'Ắ',
                    'Ằ',
                    'Ẳ',
                    'Ẵ',
                    'Ặ',
                    'Â',
                    'Ấ',
                    'Ầ',
                    'Ẩ',
                    'Ẫ',
                    'Ậ',
                    'Å',
                    'Ā',
                    'Ą',
                    'Α',
                    'Ά',
                    'Ἀ',
                    'Ἁ',
                    'Ἂ',
                    'Ἃ',
                    'Ἄ',
                    'Ἅ',
                    'Ἆ',
                    'Ἇ',
                    'ᾈ',
                    'ᾉ',
                    'ᾊ',
                    'ᾋ',
                    'ᾌ',
                    'ᾍ',
                    'ᾎ',
                    'ᾏ',
                    'Ᾰ',
                    'Ᾱ',
                    'Ὰ',
                    'Ά',
                    'ᾼ',
                    'А',
                    'Ǻ',
                    'Ǎ',
                    'Ａ',
                    'Ä',
                ],
                B: ['Б', 'Β', 'ब', 'Ｂ'],
                C: ['Ç', 'Ć', 'Č', 'Ĉ', 'Ċ', 'Ｃ'],
                D: ['Ď', 'Ð', 'Đ', 'Ɖ', 'Ɗ', 'Ƌ', 'ᴅ', 'ᴆ', 'Д', 'Δ', 'Ｄ'],
                E: [
                    'É',
                    'È',
                    'Ẻ',
                    'Ẽ',
                    'Ẹ',
                    'Ê',
                    'Ế',
                    'Ề',
                    'Ể',
                    'Ễ',
                    'Ệ',
                    'Ë',
                    'Ē',
                    'Ę',
                    'Ě',
                    'Ĕ',
                    'Ė',
                    'Ε',
                    'Έ',
                    'Ἐ',
                    'Ἑ',
                    'Ἒ',
                    'Ἓ',
                    'Ἔ',
                    'Ἕ',
                    'Έ',
                    'Ὲ',
                    'Е',
                    'Ё',
                    'Э',
                    'Є',
                    'Ə',
                    'Ｅ',
                ],
                F: ['Ф', 'Φ', 'Ｆ'],
                G: ['Ğ', 'Ġ', 'Ģ', 'Г', 'Ґ', 'Γ', 'Ｇ'],
                H: ['Η', 'Ή', 'Ħ', 'Ｈ'],
                I: [
                    'Í',
                    'Ì',
                    'Ỉ',
                    'Ĩ',
                    'Ị',
                    'Î',
                    'Ï',
                    'Ī',
                    'Ĭ',
                    'Į',
                    'İ',
                    'Ι',
                    'Ί',
                    'Ϊ',
                    'Ἰ',
                    'Ἱ',
                    'Ἳ',
                    'Ἴ',
                    'Ἵ',
                    'Ἶ',
                    'Ἷ',
                    'Ῐ',
                    'Ῑ',
                    'Ὶ',
                    'Ί',
                    'И',
                    'І',
                    'Ї',
                    'Ǐ',
                    'ϒ',
                    'Ｉ',
                ],
                J: ['Ｊ'],
                K: ['К', 'Κ', 'Ｋ'],
                L: ['Ĺ', 'Ł', 'Л', 'Λ', 'Ļ', 'Ľ', 'Ŀ', 'ल', 'Ｌ'],
                M: ['М', 'Μ', 'Ｍ'],
                N: ['Ń', 'Ñ', 'Ň', 'Ņ', 'Ŋ', 'Н', 'Ν', 'Ｎ'],
                O: [
                    'Ó',
                    'Ò',
                    'Ỏ',
                    'Õ',
                    'Ọ',
                    'Ô',
                    'Ố',
                    'Ồ',
                    'Ổ',
                    'Ỗ',
                    'Ộ',
                    'Ơ',
                    'Ớ',
                    'Ờ',
                    'Ở',
                    'Ỡ',
                    'Ợ',
                    'Ø',
                    'Ō',
                    'Ő',
                    'Ŏ',
                    'Ο',
                    'Ό',
                    'Ὀ',
                    'Ὁ',
                    'Ὂ',
                    'Ὃ',
                    'Ὄ',
                    'Ὅ',
                    'Ὸ',
                    'Ό',
                    'О',
                    'Θ',
                    'Ө',
                    'Ǒ',
                    'Ǿ',
                    'Ｏ',
                    'Ö',
                ],
                P: ['П', 'Π', 'Ｐ'],
                Q: ['Ｑ'],
                R: ['Ř', 'Ŕ', 'Р', 'Ρ', 'Ŗ', 'Ｒ'],
                S: ['Ş', 'Ŝ', 'Ș', 'Š', 'Ś', 'С', 'Σ', 'Ｓ'],
                T: ['Ť', 'Ţ', 'Ŧ', 'Ț', 'Т', 'Τ', 'Ｔ'],
                U: [
                    'Ú',
                    'Ù',
                    'Ủ',
                    'Ũ',
                    'Ụ',
                    'Ư',
                    'Ứ',
                    'Ừ',
                    'Ử',
                    'Ữ',
                    'Ự',
                    'Û',
                    'Ū',
                    'Ů',
                    'Ű',
                    'Ŭ',
                    'Ų',
                    'У',
                    'Ǔ',
                    'Ǖ',
                    'Ǘ',
                    'Ǚ',
                    'Ǜ',
                    'Ｕ',
                    'Ў',
                    'Ü',
                ],
                V: ['В', 'Ｖ'],
                W: ['Ω', 'Ώ', 'Ŵ', 'Ｗ'],
                X: ['Χ', 'Ξ', 'Ｘ'],
                Y: [
                    'Ý',
                    'Ỳ',
                    'Ỷ',
                    'Ỹ',
                    'Ỵ',
                    'Ÿ',
                    'Ῠ',
                    'Ῡ',
                    'Ὺ',
                    'Ύ',
                    'Ы',
                    'Й',
                    'Υ',
                    'Ϋ',
                    'Ŷ',
                    'Ｙ',
                ],
                Z: ['Ź', 'Ž', 'Ż', 'З', 'Ζ', 'Ｚ'],
                AE: ['Æ', 'Ǽ'],
                Ch: ['Ч'],
                Dj: ['Ђ'],
                Dz: ['Џ'],
                Gx: ['Ĝ'],
                Hx: ['Ĥ'],
                Ij: ['Ĳ'],
                Jx: ['Ĵ'],
                Kh: ['Х'],
                Lj: ['Љ'],
                Nj: ['Њ'],
                Oe: ['Œ'],
                Ps: ['Ψ'],
                Sh: ['Ш'],
                Shch: ['Щ'],
                Ss: ['ẞ'],
                Th: ['Þ'],
                Ts: ['Ц'],
                Ya: ['Я'],
                Yu: ['Ю'],
                Zh: ['Ж'],
            };
            Object.keys(swaps).forEach((swap) => {
                swaps[swap].forEach((s) => {
                    str = str.replace(new RegExp(s, 'g'), swap);
                });
            });
            str = str
                .replace(/[^a-z0-9A-Z -]/g, split)
                .replace(/\s+/g, split)
                .replace(/-+/g, split)
                .replace(/^-+/, '')
                .replace(/-+$/, '');
            if (!str) {
                return '';
            }
            return str.trim();
        }
        return null;
    }
    makeid(length = 7) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }
    async generateSlug(slug, service, condition = {}) {
        let slug_check = slug;
        for (let i = 0; i < 100; i++) {
            const count = await service.count({
                filter: {
                    slug: slug_check,
                    ...condition,
                },
            });
            if (count === 0) {
                break;
            }
            slug_check = this.slugify(slug + '-' + this.makeid(3));
        }
        return slug_check;
    }
};
exports.ShareService = ShareService;
exports.ShareService = ShareService = __decorate([
    (0, common_1.Injectable)()
], ShareService);


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/mongoose":
/*!***********************************!*\
  !*** external "@nestjs/mongoose" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),

/***/ "joi":
/*!**********************!*\
  !*** external "joi" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("joi");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "mongoose-execution-time":
/*!******************************************!*\
  !*** external "mongoose-execution-time" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("mongoose-execution-time");

/***/ }),

/***/ "speedgoose":
/*!*****************************!*\
  !*** external "speedgoose" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("speedgoose");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!******************************!*\
  !*** ./apps/api/src/main.ts ***!
  \******************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const api_module_1 = __webpack_require__(/*! ./api.module */ "./apps/api/src/api.module.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(api_module_1.ApiModule);
    await app.listen(process.env.port ?? 3000);
}
bootstrap();

})();

/******/ })()
;