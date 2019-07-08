// package: protobuf
// file: src/protobuf/Employee.proto

var src_protobuf_Employee_pb = require("../../src/protobuf/Employee_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var EmployeeMgmtService = (function () {
  function EmployeeMgmtService() {}
  EmployeeMgmtService.serviceName = "protobuf.EmployeeMgmtService";
  return EmployeeMgmtService;
}());

EmployeeMgmtService.GetAllEmployee = {
  methodName: "GetAllEmployee",
  service: EmployeeMgmtService,
  requestStream: false,
  responseStream: false,
  requestType: src_protobuf_Employee_pb.GetAllEmployeeRequest,
  responseType: src_protobuf_Employee_pb.GetAllEmployeeResponse
};

exports.EmployeeMgmtService = EmployeeMgmtService;

function EmployeeMgmtServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

EmployeeMgmtServiceClient.prototype.getAllEmployee = function getAllEmployee(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EmployeeMgmtService.GetAllEmployee, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.EmployeeMgmtServiceClient = EmployeeMgmtServiceClient;

