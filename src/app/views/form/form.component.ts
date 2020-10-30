import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CatService} from '../../services/cat.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private catService: CatService,
    private route: Router
  ) {
    this.form = this.fb.group({
      name: [''],
      age: [''],
      race: [''],
      isAlive: []
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form.value);
    this.catService.create(this.form.value).subscribe(() => {
      this.route.navigate(['/cat']);
    });
  }

}
