import { Component } from '@angular/core';
import { ApiService } from './api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Library';
  inputAuthor: string = ""
  inputBook: string = ""
  inputDate: any = new Date();
  bookOutput: number = 0
  booksArray: Array<any> = []
  isShow = false

  p:number =1;
  isLoading = false;


  constructor(private apiService: ApiService,
) {
}

public btnSearchClicked(): void {
  this.isLoading = true;
  if (this.inputBook.length >= 2 || this.inputAuthor.length >= 2) {
    this.apiService.getBooks(this.inputBook, this.inputAuthor, this.inputDate).subscribe((data) => {
      console.log(data);
      this.bookOutput = data['numFound'];
      this.booksArray = data['docs'];
      console.log(this.booksArray);
      this.isShow = true;
      this.isLoading = false;
    })
  }

}


}
