import { User } from '@core/models/User.model';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '@core/services/users.service';
import { ModalController } from '@ionic/angular';
import { CreateUserComponent } from './pages/create-user/create-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  users: User[] = [];
  constructor(
    private userService: UsersService,
    private modalCtrl: ModalController,
  ) {}

  ngOnInit() {
    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
    });
  }

  async createUser(id?: string) {
    const modal = await this.modalCtrl.create({
      component: CreateUserComponent,
      componentProps: { id },
    });
    return await modal.present();
  }

  delete(id: string): void {
    this.userService.deleteUser(id).subscribe(
      () => {
        console.log('Usuario eliminado!');
      },
      error => console.error(error),
    );
  }
}
