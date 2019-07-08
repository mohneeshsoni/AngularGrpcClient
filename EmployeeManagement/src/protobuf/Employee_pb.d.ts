// package: protobuf
// file: src/protobuf/Employee.proto

import * as jspb from "google-protobuf";

export class GetAllEmployeeResponse extends jspb.Message {
  clearEmployeeListList(): void;
  getEmployeeListList(): Array<Employee>;
  setEmployeeListList(value: Array<Employee>): void;
  addEmployeeList(value?: Employee, index?: number): Employee;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllEmployeeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllEmployeeResponse): GetAllEmployeeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllEmployeeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllEmployeeResponse;
  static deserializeBinaryFromReader(message: GetAllEmployeeResponse, reader: jspb.BinaryReader): GetAllEmployeeResponse;
}

export namespace GetAllEmployeeResponse {
  export type AsObject = {
    employeeListList: Array<Employee.AsObject>,
  }
}

export class GetAllEmployeeRequest extends jspb.Message {
  getDeptName(): string;
  setDeptName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllEmployeeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllEmployeeRequest): GetAllEmployeeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllEmployeeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllEmployeeRequest;
  static deserializeBinaryFromReader(message: GetAllEmployeeRequest, reader: jspb.BinaryReader): GetAllEmployeeRequest;
}

export namespace GetAllEmployeeRequest {
  export type AsObject = {
    deptName: string,
  }
}

export class Employee extends jspb.Message {
  getEmpId(): string;
  setEmpId(value: string): void;

  getEmpName(): string;
  setEmpName(value: string): void;

  getEmpEmail(): string;
  setEmpEmail(value: string): void;

  getEmpMobile(): string;
  setEmpMobile(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Employee.AsObject;
  static toObject(includeInstance: boolean, msg: Employee): Employee.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Employee, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Employee;
  static deserializeBinaryFromReader(message: Employee, reader: jspb.BinaryReader): Employee;
}

export namespace Employee {
  export type AsObject = {
    empId: string,
    empName: string,
    empEmail: string,
    empMobile: string,
  }
}

