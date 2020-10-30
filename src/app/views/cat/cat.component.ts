import { Component, OnInit } from '@angular/core';
import {Cat} from '../../models/Cat';
import {CatService} from '../../services/cat.service';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss']
})
export class CatComponent implements OnInit {

  cats: Cat[] = [];

  constructor(private catService: CatService) {
    this.catService.getAll().subscribe(data => {
      this.cats = data;
      console.log(this.cats);
    });
  }

  ngOnInit() {
  }

  supprimer(id: number) {
    this.catService.delete(id).then(() => {
      this.cats = this.cats.filter(cat => cat.id !== id);
    });
  }

}
