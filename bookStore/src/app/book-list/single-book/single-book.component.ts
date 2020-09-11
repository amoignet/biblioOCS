import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book.models';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.css']
})
export class SingleBookComponent implements OnInit {

  book: Book;

  constructor(private route: ActivatedRoute,
              private booksService: BooksService,
              private router: Router) {}

  ngOnInit(): void {
    this.book = new Book('', '');
    // tslint:disable-next-line: no-string-literal
    const id = this.route.snapshot.params['id'];
    this.booksService.getSingleBook(+id).then(
      (book: Book) => {
        this.book = book;
      }
    );
  }

  onBack(): void {
    this.router.navigate(['/books']);
  }
}
