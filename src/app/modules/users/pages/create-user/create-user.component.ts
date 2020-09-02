import { Component, OnInit, Input } from '@angular/core';
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
  @Input() id: string;
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

    if (this.id) {
      this.userService.getUserByID(this.id).subscribe(data => {
        Object.keys(this.form.value).forEach(key => {
          this.form.patchValue({ [`${key}`]: data[`${key}`] });
        });
      });
    }
  }

  closeModal(): void {
    this.modalCtrl.dismiss();
  }

  save(): void {
    if (!this.id) {
      this.userService.createUser(this.form.value).subscribe(
        () => {
          console.log('Usuario creado');
        },
        error => console.error(error),
      );
    } else {
      this.userService
        .updateUser({ _id: this.id, ...this.form.value })
        .subscribe(
          () => {
            console.log('Usuario actualizado.');
          },
          error => console.error(error),
        );
    }
  }
}
