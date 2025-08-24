import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class Auth {
    private apiUrl = 'http://localhost:8080/auth'; // Adjust if your backend URL is different

    constructor(private http: HttpClient) { }

    login(credentials: any): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/login`, credentials).pipe(
            tap(response => {
                // Assuming the backend returns a token that you want to store
                if (response && response.token) {
                    localStorage.setItem('authToken', response.token);
                }
            })
        );
    }

    // You can add register(), logout(), etc. methods here later
}
