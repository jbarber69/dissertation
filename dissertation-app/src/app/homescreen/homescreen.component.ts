import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms'

@Component({
  selector: "app-homescreen",
  templateUrl: "./homescreen.component.html",
  styleUrls: ["./homescreen.component.css"],
})
export class HomescreenComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  nameForm = new FormGroup({
    name: new FormControl(""),
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log("submitted")
    console.warn(this.nameForm.value);
  }
}
