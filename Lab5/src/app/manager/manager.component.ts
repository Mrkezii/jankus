import {
  Component,
  OnInit,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { ProviderAst } from "@angular/compiler";
import { MatTableDataSource } from "@angular/material";
import { map } from "rxjs/operators";
import { User } from "./user.model";
import { HttpHeaders } from "@angular/common/http";
import { Observable, of, from } from "rxjs";
import { DataSource } from "@angular/cdk/collections";
import { MatPaginator } from "@angular/material/paginator";
import { MatButtonModule } from "@angular/material/button";
import { TableDataSource, ValidatorService } from "angular4-material-table";
import { ManagerService } from "../services/manager.service";
import { ManagerValidatorService } from "./manager-validator.service";

@Component({
  selector: "app-manager",
  templateUrl: "./manager.component.html",
  styleUrls: ["./manager.component.css"],
  providers: [ManagerService, ManagerValidatorService]
})
export class ManagerComponent implements OnInit {
  user: User[];
  constructor(
    private managerService: ManagerService,
    private managerValidatorService: ManagerValidatorService
  ) {}
  dataSource;
  displayedColumns = ["Item", "price", "Quantity", "Tax", "actions"];
  @Input() appComponent = this.dataSource;
  @Output() AppComponentChange = new EventEmitter<User[]>();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  cancelOrDelete(s) {
    console.log(s);
  }

  ngOnInit() {
    this.managerService.getUser().subscribe((data: User[]) => {
      console.log(data);
      this.dataSource = data;
      this.dataSource.paginator = this.paginator;
    });
  }
  updateUser(user) {
    this.managerService
      .updateUser(user)
      .subscribe(user => this.user.push(user));
  }
}
export class UserDataSource extends MatTableDataSource<any> {
  constructor(private managerService: ManagerService) {
    super();
  }
  disconnect() {}
}
