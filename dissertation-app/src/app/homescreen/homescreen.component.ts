import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

import { NameService } from "../name.service";
import { UserService } from '../user.service'

@Component({
  selector: "app-homescreen",
  templateUrl: "./homescreen.component.html",
  styleUrls: ["./homescreen.component.css"],
})
export class HomescreenComponent implements OnInit {
  constructor(private router: Router, private nameService: NameService, private userService: UserService) {}

  ngOnInit(): void {}

  nameForm = new FormGroup({
    name: new FormControl(""),
  });

  onSubmit() {
    this.nameService.name = this.nameForm.value.name;
    this.userService.setName(this.nameForm.value.name)
    this.router.navigate(["/translation-component"]);
  }
}
