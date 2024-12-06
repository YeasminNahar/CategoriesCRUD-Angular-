import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { TaskCategory } from "../models/categories.model";
import {HttpClient} from '@angular/common/http';
@Injectable({
    providedIn: 'root'
  })
export class CategoriesService {
    baseUrl = 'http://localhost:5235/api/TaskCategory';
    constructor(private http: HttpClient) { }
    //Get all cards
    getAllCards(): Observable<TaskCategory[]>{
      return this.http.get<TaskCategory[]>(this.baseUrl);
    }
    public addCard(categorie: TaskCategory): Observable<TaskCategory>{
      categorie.id = '';
      return this.http.post<TaskCategory>(this.baseUrl, categorie);
    }
    deleteCard(id: string): Observable<TaskCategory>{
      return this.http.delete<TaskCategory>(this.baseUrl + '/' + id);
    }
    updateCard(categorie: TaskCategory): Observable<TaskCategory>{
      return this.http.put<TaskCategory>(this.baseUrl + '/' + categorie.id, categorie);
    }
  }
