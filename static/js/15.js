(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./src/api/system/dict/type.js":
/*!*************************************!*\
  !*** ./src/api/system/dict/type.js ***!
  \*************************************/
/*! exports provided: listType, getType, addType, updateType, delType, exportType, listAllSimple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listType\", function() { return listType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getType\", function() { return getType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addType\", function() { return addType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateType\", function() { return updateType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"delType\", function() { return delType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"exportType\", function() { return exportType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listAllSimple\", function() { return listAllSimple; });\n/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ \"./src/utils/request.js\");\n // 查询字典类型列表\n\nfunction listType(query) {\n  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    url: '/system/dict-type/page',\n    method: 'get',\n    params: query\n  });\n} // 查询字典类型详细\n\nfunction getType(dictId) {\n  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    url: '/system/dict-type/get?id=' + dictId,\n    method: 'get'\n  });\n} // 新增字典类型\n\nfunction addType(data) {\n  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    url: '/system/dict-type/create',\n    method: 'post',\n    data: data\n  });\n} // 修改字典类型\n\nfunction updateType(data) {\n  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    url: '/system/dict-type/update',\n    method: 'put',\n    data: data\n  });\n} // 删除字典类型\n\nfunction delType(dictId) {\n  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    url: '/system/dict-type/delete?id=' + dictId,\n    method: 'delete'\n  });\n} // 导出字典类型\n\nfunction exportType(query) {\n  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    url: '/system/dict-type/export',\n    method: 'get',\n    params: query,\n    responseType: 'blob'\n  });\n} // 获取字典选择框列表\n\nfunction listAllSimple() {\n  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    url: '/system/dict-type/list-all-simple',\n    method: 'get'\n  });\n}\n\n//# sourceURL=webpack:///./src/api/system/dict/type.js?");

/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/*! exports provided: CommonStatusEnum, SystemMenuTypeEnum, SystemRoleTypeEnum, SystemDataScopeEnum, InfraCodegenTemplateTypeEnum, InfraJobStatusEnum, InfraApiErrorLogProcessStatusEnum, SystemUserSocialTypeEnum, PayChannelEnum, PayType, PayOrderStatusEnum, PayOrderNotifyStatusEnum, PayOrderRefundStatusEnum, PayRefundStatusEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CommonStatusEnum\", function() { return CommonStatusEnum; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SystemMenuTypeEnum\", function() { return SystemMenuTypeEnum; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SystemRoleTypeEnum\", function() { return SystemRoleTypeEnum; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SystemDataScopeEnum\", function() { return SystemDataScopeEnum; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InfraCodegenTemplateTypeEnum\", function() { return InfraCodegenTemplateTypeEnum; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InfraJobStatusEnum\", function() { return InfraJobStatusEnum; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InfraApiErrorLogProcessStatusEnum\", function() { return InfraApiErrorLogProcessStatusEnum; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SystemUserSocialTypeEnum\", function() { return SystemUserSocialTypeEnum; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PayChannelEnum\", function() { return PayChannelEnum; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PayType\", function() { return PayType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PayOrderStatusEnum\", function() { return PayOrderStatusEnum; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PayOrderNotifyStatusEnum\", function() { return PayOrderNotifyStatusEnum; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PayOrderRefundStatusEnum\", function() { return PayOrderRefundStatusEnum; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PayRefundStatusEnum\", function() { return PayRefundStatusEnum; });\n/**\r\n * Created by 芋道源码\r\n *\r\n * 枚举类\r\n */\n\n/**\r\n * 全局通用状态枚举\r\n */\nvar CommonStatusEnum = {\n  ENABLE: 0,\n  // 开启\n  DISABLE: 1 // 禁用\n\n};\n/**\r\n * 菜单的类型枚举\r\n */\n\nvar SystemMenuTypeEnum = {\n  DIR: 1,\n  // 目录\n  MENU: 2,\n  // 菜单\n  BUTTON: 3 // 按钮\n\n};\n/**\r\n * 角色的类型枚举\r\n */\n\nvar SystemRoleTypeEnum = {\n  SYSTEM: 1,\n  // 内置角色\n  CUSTOM: 2 // 自定义角色\n\n};\n/**\r\n * 数据权限的范围枚举\r\n */\n\nvar SystemDataScopeEnum = {\n  ALL: 1,\n  // 全部数据权限\n  DEPT_CUSTOM: 2,\n  // 指定部门数据权限\n  DEPT_ONLY: 3,\n  // 部门数据权限\n  DEPT_AND_CHILD: 4,\n  // 部门及以下数据权限\n  DEPT_SELF: 5 // 仅本人数据权限\n\n};\n/**\r\n * 代码生成模板类型\r\n */\n\nvar InfraCodegenTemplateTypeEnum = {\n  CRUD: 1,\n  // 基础 CRUD\n  TREE: 2,\n  // 树形 CRUD\n  SUB: 3 // 主子表 CRUD\n\n};\n/**\r\n * 任务状态的枚举\r\n */\n\nvar InfraJobStatusEnum = {\n  INIT: 0,\n  // 初始化中\n  NORMAL: 1,\n  // 运行中\n  STOP: 2 // 暂停运行\n\n};\n/**\r\n * API 异常数据的处理状态\r\n */\n\nvar InfraApiErrorLogProcessStatusEnum = {\n  INIT: 0,\n  // 未处理\n  DONE: 1,\n  // 已处理\n  IGNORE: 2 // 已忽略\n\n};\n/**\r\n * 用户的社交平台的类型枚举\r\n */\n\nvar SystemUserSocialTypeEnum = {\n  DINGTALK: {\n    title: '钉钉',\n    type: 20,\n    source: 'dingtalk',\n    img: 'https://s1.ax1x.com/2022/05/22/OzMDRs.png'\n  },\n  WECHAT_ENTERPRISE: {\n    title: '企业微信',\n    type: 30,\n    source: 'wechat_enterprise',\n    img: 'https://s1.ax1x.com/2022/05/22/OzMrzn.png'\n  }\n};\n/**\r\n * 支付渠道枚举\r\n */\n\nvar PayChannelEnum = {\n  WX_PUB: {\n    'code': 'wx_pub',\n    'name': '微信 JSAPI 支付'\n  },\n  WX_LITE: {\n    'code': 'wx_lite',\n    'name': '微信小程序支付'\n  },\n  WX_APP: {\n    'code': 'wx_app',\n    'name': '微信 APP 支付'\n  },\n  ALIPAY_PC: {\n    'code': 'alipay_pc',\n    'name': '支付宝 PC 网站支付'\n  },\n  ALIPAY_WAP: {\n    'code': 'alipay_wap',\n    'name': '支付宝 WAP 网站支付'\n  },\n  ALIPAY_APP: {\n    'code': 'alipay_app',\n    'name': '支付宝 APP 支付'\n  },\n  ALIPAY_QR: {\n    'code': 'alipay_qr',\n    'name': '支付宝扫码支付'\n  }\n};\n/**\r\n * 支付类型枚举\r\n */\n\nvar PayType = {\n  WECHAT: 'WECHAT',\n  ALIPAY: 'ALIPAY'\n};\n/**\r\n * 支付订单状态枚举\r\n */\n\nvar PayOrderStatusEnum = {\n  WAITING: {\n    status: 0,\n    name: '未支付'\n  },\n  SUCCESS: {\n    status: 10,\n    name: '已支付'\n  },\n  CLOSED: {\n    status: 20,\n    name: '未支付'\n  }\n};\n/**\r\n * 支付订单回调状态枚举\r\n */\n\nvar PayOrderNotifyStatusEnum = {\n  NO: {\n    status: 0,\n    name: '未通知'\n  },\n  SUCCESS: {\n    status: 10,\n    name: '通知成功'\n  },\n  FAILURE: {\n    status: 20,\n    name: '通知失败'\n  }\n};\n/**\r\n * 支付订单退款状态枚举\r\n */\n\nvar PayOrderRefundStatusEnum = {\n  NO: {\n    status: 0,\n    name: '未退款'\n  },\n  SOME: {\n    status: 10,\n    name: '部分退款'\n  },\n  ALL: {\n    status: 20,\n    name: '全部退款'\n  }\n};\n/**\r\n * 支付退款订单状态枚举\r\n */\n\nvar PayRefundStatusEnum = {\n  CREATE: {\n    status: 0,\n    name: '退款订单生成'\n  },\n  SUCCESS: {\n    status: 1,\n    name: '退款成功'\n  },\n  FAILURE: {\n    status: 2,\n    name: '退款失败'\n  },\n  PROCESSING_NOTIFY: {\n    status: 3,\n    name: '退款中，渠道通知结果'\n  },\n  PROCESSING_QUERY: {\n    status: 4,\n    name: '退款中，系统查询结果'\n  },\n  UNKNOWN_RETRY: {\n    status: 5,\n    name: '状态未知，请重试'\n  },\n  UNKNOWN_QUERY: {\n    status: 6,\n    name: '状态未知，系统查询结果'\n  },\n  CLOSE: {\n    status: 99,\n    name: '退款关闭'\n  }\n};\n\n//# sourceURL=webpack:///./src/utils/constants.js?");

/***/ })

}]);