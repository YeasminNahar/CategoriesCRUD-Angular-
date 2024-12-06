import { Component } from '@angular/core';
import { TaskCategory } from './models/categories.model';
import { CategoriesService } from './service/categories.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CategoriesCRUD';
  categories: TaskCategory[] = [];
  categorie: TaskCategory = {
    id: '',
    name: '',
  }
  constructor(private categorieService: CategoriesService) {
  }
  ngOnInit(): void {
    this.getAllCards();
  }
  getAllCards() {
    debugger
    this.categorieService.getAllCards()
      .subscribe(
        response => {
          this.categories = response;
          this.categorie = {
             id: '',
           name: '',
          }
        }
      )
  }
  onSubmit() {
    debugger
    if (this.categorie.id === '') {
      this.categorieService.addCard(this.categorie)
        .subscribe(
          response => {
            this.getAllCards();
            this.categorie = response;
            this.categorie = {
              id: '',
              name: '',
              
            };
          }
        );
    } else {
      this.updateCard(this.categorie);
    }

  }
  deleteCard(id: string) {
    this.categorieService.deleteCard(id)
      .subscribe(
        response => {
          this.getAllCards();
        }
      )
  }
  populateForm(categorie: TaskCategory) {
    this.categorie = categorie;
  }
  updateCard(categorie: TaskCategory) {
    this.categorieService.updateCard(categorie)
      .subscribe(
        response => {
          this.getAllCards();
        }
      )
  }
}


