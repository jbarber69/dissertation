import { Injectable } from "@angular/core";

interface User {
  name: string;
  score: number;
}

    const competitors: User[] = [
      { name: "John", score: 17 },
      { name: "Liam", score: 29 },
      { name: "Olivia", score: 42 },
      { name: "Emma", score: 36 },
      { name: "Oliver", score: 15 },
      { name: "Ava", score: 24 },
      { name: "Noah", score: 20 },
      { name: "Alex", score: 30 },
      { name: "William", score: 31 },
      { name: "Isabella", score: 45 },
    ];
@Injectable({
  providedIn: "root",
})
export class UserService {
  user: User = {
    name: "Jack",
    score: 0,
  };

  constructor() {}

  getUser() {
    return this.user;
  }

  getScore() {
    return this.user.score;
  }

  setName(name: string) {
    this.user.name = name;
  }

  addScore() {
    this.user.score += 1;
  }

  getCompetitors() {
    return competitors;
  }

  getAverageScore(){
    let totalScore = 0
    for(let i = 0; i<competitors.length; i++){
      totalScore += competitors[i].score
    }

    return Math.round(totalScore/competitors.length)
  }
}
