import { Component, OnInit } from "@angular/core";
import { Observable, of, interval, combineLatest, pipe } from "rxjs";
import { map, startWith, switchMap } from "rxjs/operators";
import { UserService } from "../user.service";

@Component({
  selector: "app-leaderboard",
  templateUrl: "./leaderboard.component.html",
  styleUrls: ["./leaderboard.component.css"],
})
export class LeaderboardComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  user = this.userService.getUser();

  competitors = this.userService.getCompetitors()

  refresh$ = interval(1000);

  userList = [...this.competitors, this.user];

  sortedUserList$ = interval(1000).pipe(startWith(0), map(user => {
    return this.userList.sort((user1, user2) => (user1.score > user2.score ? -1 : 1));
  }))
}
