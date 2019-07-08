// package: protobuf
// file: src/protobuf/Employee.proto

import * as src_protobuf_Employee_pb from "../../src/protobuf/Employee_pb";
import {grpc} from "@improbable-eng/grpc-web";

type EmployeeMgmtServiceGetAllEmployee = {
  readonly methodName: string;
  readonly service: typeof EmployeeMgmtService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_protobuf_Employee_pb.GetAllEmployeeRequest;
  readonly responseType: typeof src_protobuf_Employee_pb.GetAllEmployeeResponse;
};

export class EmployeeMgmtService {
  static readonly serviceName: string;
  static readonly GetAllEmployee: EmployeeMgmtServiceGetAllEmployee;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class EmployeeMgmtServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getAllEmployee(
    requestMessage: src_protobuf_Employee_pb.GetAllEmployeeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_protobuf_Employee_pb.GetAllEmployeeResponse|null) => void
  ): UnaryResponse;
  getAllEmployee(
    requestMessage: src_protobuf_Employee_pb.GetAllEmployeeRequest,
    callback: (error: ServiceError|null, responseMessage: src_protobuf_Employee_pb.GetAllEmployeeResponse|null) => void
  ): UnaryResponse;
}

