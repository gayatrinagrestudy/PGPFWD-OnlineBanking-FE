import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private user: UserService) { }

}
