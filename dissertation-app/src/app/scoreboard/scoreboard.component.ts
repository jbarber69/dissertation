import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";

@Component({
  selector: "app-scoreboard",
  templateUrl: "./scoreboard.component.html",
  styleUrls: ["./scoreboard.component.css"],
})
export class ScoreboardComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  get score(): number {
    return this.userService.getScore();
  }
}
