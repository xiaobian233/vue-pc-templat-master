// 运营总览
const operation = {
  operation_platform: "台",
  operation_facility_sum: "设备总数",
  operation_facility_onlineQuantity: "设备在线量",
  operation_currentMonth_facility_sum: "本月新增设备数",
  operation_data_series: "数据一系列",
  operation_facility_map: "设备分布地图",
  operation_map_pattern: "地图模式",
  operation_table_pattern: "表格模式",
  operation_thead_index: "序号",
  operation_thead_id: "设备ID",
  operation_thead_side: "地址",
  operation_thead_type: "机型",
  operation_thead_status: "状态",
  operation_thead_temperature: "温度",
  operation_thead_hotwindTemperature: "热风温度",
  operation_thead_statusMessage: "状态信息",
  operation_thead_errorRecord: "警告记录",
  operation_thead_dryingRecord: "烘干记录"
};
// 大数据分析
const bigData = {
  bigData_site: "地区",
  bigData_China: "中国",
  bigData_province: "省份",
  bigData_city: "市",
  bigData_county: "县",
  bigData_stand: "农机站",
  bigData_mark: "机台号",
  bigData_paddy: "稻谷",
  bigData_wheat: "小麦",
  bigData_maize: "玉米",
  bigData_others: "其他",
  bigData_dryingSum: "烘干数量(T)",

  bigData_content: "信息内容",
  bigData_DryerNo2: "Dryer  No.2",
  bigData_DataNo2: "Data  No.2",
  bigData_Data: "Data",
  bigData_Mois: "Mois",
  bigData_MoisVariation: "Mois.variation",
  bigData_HotAirTemp: "Hot air temp",
  bigData_SetTemp: "Set temp",
  bigData_OutsideTemp: "Outside temp",
  bigData_Alarm: "Alarm",
  bigData_Setting: "Setting",
  bigData_Result: "Result",
  bigData_Detail: "Detail",
  bigData_Return: "Return",
  bigData_AlarmRecord: "Alarm record",

  bigData_thead_Oparation: "Oparation",
  bigData_thead_No: "No",
  bigData_thead_Date: "Date",
  bigData_thead_StopTime: "Stop time",
  bigData_thead_Drying: "Drying",
  bigData_thead_time: "time",
  bigData_thead_Grain: "Grain",
  bigData_thead_Selection: "Selection",
  bigData_thead_Loaded: "Loaded",
  bigData_thead_amount: "amount",
  bigData_thead_Initial: "Initial",
  bigData_thead_mois: "mois",
  bigData_thead_Final: "Final",
  bigData_thead_Drying: "Drying",
  bigData_thead_rate: "rate",
  bigData_thead_Stop: "Stop",
  bigData_thead_condition: "condition",
  bigData_thead_Recording: "Recording",
  bigData_thead_Dryer: "Dryer",
  bigData_thead_Operating: "Operating",
  bigData_thead_condition: "condition",
  bigData_thead_Error: "Error",
  bigData_thead_Code: "Code",
  bigData_thead_name: "name",
  bigData_thead_Prodram: "Prodram"
};
// 登陆
const login = {
  login_userName: "请输入用户名",
  login_password: "请输入用户名",
  login_txt: "登录"
};
// 参数管理
const params = {
  params_add: "添加",
  params_edit: "修改",
  params_delete: "删除",
  params_index: "序号"
};
// 权限管理
const jurisdiction = {
  jurisdiction_add: "添加",
  jurisdiction_edit: "修改",
  jurisdiction_delete: "删除",
  jurisdiction_index: "序号",
  jurisdiction_user_name: "角色名称",
  jurisdiction_update_date: "更新日期",
  jurisdiction_update_person: "更新人",
  jurisdiction_setUp_date: "创建日期",
  jurisdiction_setUp_person: "创建人",
  jurisdiction_username: "请输入登录账号",
  jurisdiction_password: "请输入登录密码",
  jurisdiction_configuration: "权限配置：",
  jurisdiction_user_name: "角色名称：",
  jurisdiction_organization_name: "请输入组织名称",
  jurisdiction_add_user: "添加角色"
};

export const message = {
  hello: "你好,世界",

  catalog_operation: "运营总览",
  catalog_facility: "设备管理",
  catalog_bigData: "大数据分析",
  catalog_user: "用户管理",
  catalog_params: "参数管理",
  catalog_organization: "组织管理",
  catalog_jurisdiction: "权限管理",

  catalog_user_name: "姓名",

  ...operation,
  ...bigData,
  ...login,
  ...params,
  ...jurisdiction
};
