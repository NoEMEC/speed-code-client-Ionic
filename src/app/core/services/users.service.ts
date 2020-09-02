import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { USER } from '@core/constanst/index';
import { ApiService } from '@core/services/api.service';
import { User } from '@core/models/User.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService extends ApiService {
  /**
   * getAllUsers
   */
  public getAllUsers(): Observable<any> {
    return this.get(USER.BASE);
  }

  /**
   * createUser
   */
  public createUser(user: User): Observable<any> {
    return this.post(USER.BASE, user);
  }

  /**
   * updateUser
   */
  public updateUser(user: User): Observable<any> {
    const { _id, ...data } = user;
    return this.update(`${USER.BASE}/${_id}`, data);
  }

  /**
   * deleteUser
   */
  public deleteUser(id: string): Observable<any> {
    return this.delete(`${USER.BASE}/${id}`);
  }

  /**
   * getUserByID
   */
  public getUserByID(id: string): Observable<any> {
    return this.get(`${USER.BASE}/${id}`);
  }
}
