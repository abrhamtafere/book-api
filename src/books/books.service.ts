import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  private books = [];

  create(createBookDto: CreateBookDto) {
    const book = { id: Date.now(), ...createBookDto };
    this.books.push(book);
    return book;
  }

  findAll() {
    return this.books;
  }

  findOne(id: number) {
    return this.books.find((book) => book.id === id);
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    const bookIndex = this.books.findIndex((book) => book.id === id);
    if (bookIndex !== -1) {
      this.books[bookIndex] = { ...this.books[bookIndex], ...updateBookDto };
      return this.books[bookIndex];
    }
    return null;
  }

  remove(id: number) {
    this.books = this.books.filter((book) => book.id !== id);
    return { deleted: true };
  }
}
