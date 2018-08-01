import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
myForm:FormGroup;
  constructor(
    public navCtrl: NavController,
  public fb:FormBuilder
  ) {
this.myForm=this.fb.group({
name:['',[Validators.required]],
password:['',[Validators.pattern(/^[a-z0-9_-]{6,18}$/)]],
});
  }
saveData(){
  alert(JSON.stringify(this.myForm.value));
}
}
