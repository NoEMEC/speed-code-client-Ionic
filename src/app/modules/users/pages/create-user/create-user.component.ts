import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { defaultData } from '@core/utils/forms';
import { UsersService } from '@core/services/users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  form: FormGroup;
  constructor(
    private modalCtrl: ModalController,
    private formBuilder: FormBuilder,
    private userService: UsersService,
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      nombre: defaultData(),
      apellido: defaultData(),
      identification: defaultData(),
    });
  }

  closeModal(): void {
    this.modalCtrl.dismiss();
  }

  save(): void {
    this.userService.createUser(this.form.value).subscribe(
      () => {
        console.log('Usuario creado');
      },
      error => console.error(error),
    );
  }
}
