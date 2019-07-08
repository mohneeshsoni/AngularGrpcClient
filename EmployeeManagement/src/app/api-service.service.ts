import { Injectable } from '@angular/core';
import { EmployeeMgmtServiceClient, Status } from 'src/protobuf/Employee_pb_service';
import { GetAllEmployeeRequest, GetAllEmployeeResponse } from 'src/protobuf/Employee_pb';
import { Observable } from 'rxjs';
import { BrowserHeaders } from 'browser-headers';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  client: EmployeeMgmtServiceClient;

  constructor() { 

    this.client=new EmployeeMgmtServiceClient("http://localhost:50051")
  }



  list(path, val): Promise <object> {
    return new Promise((resolve, reject) => {
      console.log('ApiService.get', path, val);
      const req = new GetAllEmployeeRequest();
      req.setDeptName("Dept")
      const header=new BrowserHeaders();
      header.set("backend_tls_noverify","false")
      header.set("Access-Control-Allow-Origin","*")
      
      this.client.getAllEmployee(req, null, (err, response: GetAllEmployeeResponse) => {
       if (err) {
          return reject(err);;
        }
        console.log('ApiService.get.response', response.toObject());
         resolve(response.toObject());
      });
    });

  }

}
