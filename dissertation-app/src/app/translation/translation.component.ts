import { Component, OnInit } from '@angular/core';
import {NameService} from '../name.service'

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.css']
})
export class TranslationComponent implements OnInit {

  constructor(private nameService: NameService) { }

  ngOnInit(): void {
  }

  get name(): string {
    return this.nameService.name
  }

}
