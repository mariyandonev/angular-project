# angular-project

The project is about a bookstore/library. Whithout registration the user can see rankings of the books and reviews from other users. Moreover, when the user is logged in, the user can see details about the books, his/her profile, create book/review...

REST-API:
base /api
test /api/test
books /api/books
reviews /api/reviews
users /api/users/logout, /api/users/login, /api/users/register

For the project:
You can see top rankings and certain information about the books without logging in
- if you log in
 + you can see all details for the books
 + you can see all books
 + you can see all reviews
 + you can check your profile and would be able to update/change your information
 + you can create a book and add it to your profile automatically
 + you WOULD be able to make a review for a certain book
 + you WOULD be able to subscripe/like for a book
 
 To create:
 
 1. User { 
   books,
   reviews,
   email,
   username,
   password,
 } 
 2. Book {
  subscribers,
  reviews,
  bookPrice,
  bookAuthor,
  bookName,
  userId,
}
3. Review {
  likes,
  text,
  userId,
  bookId,
}

