const z = require('zod');

const bookSchema = z.object({
    title: z.string( { required_error: "Title - This is a required field" } ).min(3, {message: "Title must be a minimum of 3 letters"}).max(100, {message: "Title must be a maximum of 100 letters"}).regex(/^[a-zA-Z0-9\s\W]+$/, { message: "Enter Only Alphabets" }).trim(),
    author: z.string( { required_error: "Author - This is a required field" } ).min(3, {message: "Author must be a minimum of 3 letters"}).max(100, {message: "Author must be a maximum of 100 letters"}).regex(/^[a-zA-Z0-9\s\W]+$/, { message: "Enter Only Alphabets" }).trim(),
    publication: z.string( { required_error: "Publication - This is a required field" } ).min(3, {message: "Publication must be a minimum of 3 letters"}).max(100, {message: "Publication must be a maximum of 100 letters"}).regex(/^[a-zA-Z0-9\s\W]+$/, { message: "Enter Only Alphabets" }).trim(),
    genre: z.string( { required_error: "Genre - This is a required field" } ).min(3, {message: "Genre must be a minimum of 3 letters"}).max(100, {message: "Genre must be a maximum of 100 letters"}).regex(/^[a-zA-Z0-9\s\W]+$/, { message: "Enter Only Alphabets" }).trim(),
    description: z.string( { required_error: "Description - This is a required field" } ).min(3, {message: "Description must be a minimum of 3 letters"}).max(200, {message: "Description must be a maximum of 200 letters"}).regex(/^[a-zA-Z0-9\s\W]+$/, { message: "Enter Only Alphabets" }).trim()
});

module.exports = { bookSchema };