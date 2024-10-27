import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

// Models
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  usersUrl = 'https://jsonplaceholder.typicode.com/users';
  colorsUrl = 'https://random-flat-colors.vercel.app/api/random?count=5';

  constructor(private http: HttpClient) {}

  fetchUsersAndAssignColors(): Observable<any[]> {
    return this.http.get<any>(this.usersUrl).pipe(
      switchMap((response) => {
        const users: User[] = response;
        return this.http.get<{ colors: string[] }>(this.colorsUrl).pipe(
          map((colorsResponse) => {
            const colors = colorsResponse.colors;
            return users.map((user) => {
              const randomColor =
                colors[Math.floor(Math.random() * colors.length)];
              return { ...user, color: randomColor };
            });
          })
        );
      })
    );
  }
}
