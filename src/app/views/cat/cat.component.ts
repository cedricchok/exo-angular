import { Component, OnInit } from '@angular/core';
import {Cat} from '../../models/Cat';
import {CatService} from '../../services/cat.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss']
})
export class CatComponent implements OnInit {

  isFiltered = false;
  cats: Cat[] = [];
  catsFilter: Cat[];
  form: FormGroup;

  constructor(private catService: CatService, private fb: FormBuilder) {
    this.catService.getAll().subscribe(data => {
      this.cats = data;
      this.catsFilter = data;
    });

    this.form = this.fb.group({
      id: ['']
    });
  }

  ngOnInit() {
  }

  supprimer(id: number) {
    this.catService.delete(id).then(() => {
      this.cats = this.cats.filter(cat => cat.id !== id);
    });
  }

  filter() {
    let catId;
    catId = this.form.value; // Object
    console.log('catid = ' + catId.id);
    this.filterById(catId.id);
  }

  filterById(id: number) {
    this.catService.getById(id).subscribe(data => {
      console.log('data = ' + data.name);
      this.cats = this.catsFilter; // Reinitialize this.cats
      this.cats = this.cats.filter(cat => cat.id === data.id);
      this.isFiltered = true;
      console.log(this.cats);
    });
  }

  removeFilter() {
    this.cats = this.catsFilter;
    this.isFiltered = false;
  }

}
