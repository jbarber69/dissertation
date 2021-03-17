import { Injectable } from "@angular/core";
import { interval, of } from "rxjs";
import { map } from "rxjs/operators";

interface User {
  name: string,
  score: number
}

const dummyUsers = [
  { name: "John", score: 2 },
  { name: "Liam", score: 3 },
  { name: "Olivia", score: 5 },
  { name: "Emma", score: 4 },
];

@Injectable({
  providedIn: "root",
})
export class UserService {
  user: User = {
    name: 'Jack',
    score: 0
  }

  constructor(){
  }

  getUser(){
    return this.user
  }

  getScore(){
    return this.user.score
  }

  setName(name: string){
    this.user.name = name
  }

  addScore(){
    this.user.score += 1
  }

}
