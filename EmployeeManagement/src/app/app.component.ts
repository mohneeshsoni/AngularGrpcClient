import { Component } from '@angular/core';
import { ApiServiceService } from './api-service.service';
import { grpc } from '@improbable-eng/grpc-web';
import { EmployeeMgmtService } from 'src/protobuf/Employee_pb_service';
import { GetAllEmployeeRequest, GetAllEmployeeResponse } from 'src/protobuf/Employee_pb';
import { BrowserHeaders } from 'browser-headers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EmployeeManagement';

  constructor(
    private api: ApiServiceService
  ) { }

  getAllEmployee() {
    this.api.list('hero', 'Jo').then((data: object) => {
      console.log(data);
    });
  }

  call() {
    console.log("Click");
    this.getAllEmployee()
  }

  call1() {
    const req = new GetAllEmployeeRequest();
    req.setDeptName("Dept")

    grpc.invoke(EmployeeMgmtService.GetAllEmployee, {
      request: req,
      host: "http://localhost:50051",
      onMessage: (message: GetAllEmployeeResponse) => {
        console.log("got book: ", message.toObject());
      },
      onEnd: (code: grpc.Code, msg: string | undefined, trailers: BrowserHeaders) => {
        if (code == grpc.Code.OK) {
          console.log("all ok")
        } else {
          console.log("hit an error", code, msg, trailers);
        }
      }
    });


  }
}
