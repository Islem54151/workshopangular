import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent {
  login = new FormControl('', Validators.required);
  pwd = new FormControl('', Validators.required);

  registreForm!: FormGroup;

  showLogin() {
    console.log(this.login);
  }
  ngOnInit() {
    this.registreForm = new FormGroup({
      cin: new FormControl('',Validators.pattern('^[0-9][8]$')),
      ft: new FormControl('', [Validators.required,Validators.minLength(3)]),
      ln: new FormControl('', Validators.required),
      ad: new FormControl('', Validators.required),
    });
  }

  reset(){
    this.registreForm.reset()
  }
}
