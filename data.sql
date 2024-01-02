DROP TABLE IF EXISTS books;

CREATE TABLE books (
  isbn TEXT PRIMARY KEY,
  amazon_url TEXT,
  author TEXT,
  language TEXT, 
  pages INTEGER,
  publisher TEXT,
  title TEXT, 
  year INTEGER
);

INSERT INTO books (isbn, amazon_url, author, language, pages, publisher, title, year)
VALUES
('9780141036144', 'https://www.amazon.com/1984-George-Orwell/dp/0141036141', 'George Orwell', 'English', 328, 'Penguin Books', '1984', 1949),
('9780061120084', 'https://www.amazon.com/To-Kill-Mockingbird-Harper-Lee/dp/0061120081', 'Harper Lee', 'English', 336, 'Harper Perennial Modern Classics', 'To Kill a Mockingbird', 1960),
('9780307272119', 'https://www.amazon.com/Kite-Runner-Khaled-Hosseini/dp/0307272117', 'Khaled Hosseini', 'English', 371, 'Riverhead Books', 'The Kite Runner', 2003),
('9781400033416', 'https://www.amazon.com/Catch-22-Joseph-Heller/dp/1400033411', 'Joseph Heller', 'English', 453, 'Scribner', 'Catch-22', 1961),
('9780679760801', 'https://www.amazon.com/One-Hundred-Years-Solitude-Gabriel/dp/0679760802', 'Gabriel García Márquez', 'Spanish', 417, 'Harper Perennial Modern Classics', 'One Hundred Years of Solitude', 1967),
('9780743273565', 'https://www.amazon.com/Fellowship-Ring-J-R-R-Tolkien/dp/0743273567', 'J.R.R. Tolkien', 'English', 423, 'Mariner Books', 'The Fellowship of the Ring', 1954),
('9780060850524', 'https://www.amazon.com/Freakonomics-Economist-Explores-Hidden-Everything/dp/0060850523', 'Steven D. Levitt, Stephen J. Dubner', 'English', 315, 'William Morrow Paperbacks', 'Freakonomics', 2005),
('9780062316097', 'https://www.amazon.com/Gone-Girl-Gillian-Flynn/dp/0062316095', 'Gillian Flynn', 'English', 560, 'Broadway Books', 'Gone Girl', 2012),
('9780385514231', 'https://www.amazon.com/Da-Vinci-Code-Dan-Brown/dp/0385514239', 'Dan Brown', 'English', 489, 'Doubleday', 'The Da Vinci Code', 2003),
('9780679434817', 'https://www.amazon.com/Into-Wild-Jon-Krakauer/dp/0679434817', 'Jon Krakauer', 'English', 240, 'Anchor', 'Into the Wild', 1996);
