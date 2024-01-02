const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();


const booksRoutes = require('./routes/books');


app.use(bodyParser.json());
app.use('/books', booksRoutes);

describe('Books routes', () => {

    describe('GET /books', () => {
        it('should return a list of books', async () => {
            const response = await request(app).get('/books');
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('books');
            expect(response.body.books).toBeInstanceOf(Array);
        });
    });

    describe('GET /books/:id', () => {
        it('should return a specific book', async () => {
            const bookId = '9780141036144';
            const response = await request(app).get(`/books/${bookId}`);
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('book');
        });
        it('should return a 404 for a non-existent book', async () => {
            const nonExistentBookId = 'non-existent-id';
            const response = await request(app).get(`/books/${nonExistentBookId}`);
            expect(response.status).toBe(404);
        });
    });

    describe('POST /books', () => {
        it('should create a new book', async () => {
            const newBookData = {
                "isbn": "9780142004234",
                "amazon_url": "https://www.amazon.com/The-Kite-Runner-Khaled-Hosseini/dp/0142004235",
                "author": "Khaled Hosseini",
                "language": "English",
                "pages": 371,
                "publisher": "Riverhead Books",
                "title": "The Kite Runner",
                "year": 2003
            };
            const response = await request(app).post('/books').send(newBookData);
            expect(response.status).toBe(201);
            expect(response.body).toHaveProperty('book');
      
        });
        it('should return a 400 for invalid data', async () => {
                const invalidBookData = {
                "isbn": "9780061120084",
                "amazon_url": "https://www.amazon.com/To-Kill-Mockingbird-Harper-Lee/dp/0061120081",
                "publisher": "Harper Perennial Modern Classics",
                "title": "To Kill a Mockingbird",
                "year": 1960
                };
                const response = await request(app).post('/books').send(invalidBookData);
                console.log("RESPONSE:   ", response, "===============================");
                expect(response.status).toBe(400);
        });
    });

    describe('PUT /books/:isbn', () => {
        it('should update an existing book', async () => {
            const bookIsbn = '9780141036144';
            const updatedBookData = {
                "isbn": "9780141036144",
                "amazon_url": "https://www.amazon.com/1984-George-Orwell/dp/0141036141",
                "author": "George Orwell",
                "language": "English",
                "pages": 328,
                "publisher": "Penguin Books",
                "title": "1984",
                "year": 1949
            };
            const response = await request(app)
                .put(`/books/${bookIsbn}`)
                .send(updatedBookData);
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('book');
        });
        it('should return a 404 for updating a non-existent book', async () => {
            const nonExistentBookIsbn = 'non-existent-isbn';
            const response = await request(app)
                .put(`/books/${nonExistentBookIsbn}`)
                .send({}); 
            expect(response.status).toBe(404);
        });
    });
    
    describe('DELETE /books/:isbn', () => {
        it('should delete an existing book', async () => {
            const bookIsbn = '9780141036144';
            const response = await request(app).delete(`/books/${bookIsbn}`);
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('message', 'Book deleted');
        });
        it('should return a 404 for deleting a non-existent book', async () => {
            const nonExistentBookIsbn = 'non-existent-isbn';
            const response = await request(app).delete(`/books/${nonExistentBookIsbn}`);
            expect(response.status).toBe(404);
        });
    });
});
