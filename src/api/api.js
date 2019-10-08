import global from "@/api/global";

const version = global.url + "/v" + global.version;
const checkVersion = global.url+"/";//打包
const api = {
  Login: version + "/user/login",
  GetProject: version + "/userProject/getProject",
  ChangePwd: version + "/user/changePwd",
  GetResModel: version + "/userProject/getResModel",
  GetResDrawing: version + "/userProject/getResDrawing",
  GetResMeterial: version + "/userProject/getResMeterial",
  CheckVersion: checkVersion+ "/version/checkVersion",
  Pay: version + "/userProject/pay",//支付宝支付
  OpenApp:version+"/app/openApp",//打开app
  AllApp:version+"/app/allApp",//所有下载app
};
export default api;
