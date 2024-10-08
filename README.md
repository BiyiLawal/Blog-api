---
# Blogging API

## Overview
This project is a simple RESTful API built using Node.js and Express for a personal blogging platform. It allows users to perform basic CRUD operations on blog posts, including creating, reading, updating, and deleting posts. The API also supports searching and filtering posts by keywords.

The idea for this was gotten from [roadmap](roadmap.sh) and full details can be found [here](https://roadmap.sh/projects/blogging-platform-api)

## Features
- **Create a New Blog Post:** Add a new blog post with a title, content, category, and tags.
- **Read Blog Posts:** Retrieve a single blog post or a list of all blog posts.
- **Update a Blog Post:** Modify the content, title, category, or tags of an existing post.
- **Delete a Blog Post:** Remove a blog post by its ID.
- **Search Blog Posts**
   **Search Functionality:** Users can search for blog posts by keywords in the title, content, or category.
   **Case-insensitive Search:** The search is case-insensitive, meaning it will match results regardless of the case of the search term.
-**Add Comments to Blog Posts**
   **Comment Functionality:** Users can add comments to individual blog posts.
   **Structured Comments:** Each comment includes the commenter's name, email, and the comment text.
   **View Comments:** Comments are associated with specific blog posts and can be retrieved when fetching a blog post.
- **Basic Error Handling:** Handles common errors such as invalid input and resource not found.

## Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Tools:** Thunder Client (for API testing)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/blogging-api.git
   cd blogging-api
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add your MongoDB connection string:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   ```

4. **Run the server:**
   ```bash
   npm start
   ```
   The server will run on `http://localhost:3000`.

## API Endpoints

### 1. Create a Blog Post
- **URL:** `POST /posts`
- **Body:**
  ```json
  {
    "title": "My First Blog Post",
    "content": "This is the content of my first blog post.",
    "category": "Technology",
    "tags": ["Tech", "Programming"]
  }
  ```
- **Response:**
  - `201 Created` with the new post data.

### 2. Get a Single Blog Post
- **URL:** `GET /posts/:id`
- **Response:**
  - `200 OK` with the post data.
  - `404 Not Found` if the post does not exist.

### 3. Get All Blog Posts
- **URL:** `GET /posts`
- **Response:**
  - `200 OK` with an array of all posts.

### 4. Update a Blog Post
- **URL:** `PUT /posts/:id`
- **Body:**
  ```json
  {
    "title": "Updated Title",
    "content": "Updated content",
    "category": "Updated Category",
    "tags": ["Updated", "Tags"]
  }
  ```
- **Response:**
  - `200 OK` with the updated post data.
  - `404 Not Found` if the post does not exist.

### 5. Delete a Blog Post
- **URL:** `DELETE /posts/:id`
- **Response:**
  - `204 No Content` on successful deletion.
  - `404 Not Found` if the post does not exist.

### 6. Search Blog Posts
- **URL:** `/posts?term=searchTerm`
- **Method: GET**
- **Response:**
   - `200 OK` with an array of matching blog posts.
   - `404 Not Found` if no posts match the search term.

### 6. Add Comments
- **URL:** `/posts/:postId/comments`
- **Method: POST**
- **Request Body**
   - `name`: The name of the commenter (required).
   - `email`: The email of the commenter (required).
   - `comment`: The comment text (required).
  ```json
    {
    "name": "John Doe",
    "email": "johndoe@example.com",
    "comment": "This is a great post!"
    }
  ```
  - **Example Response**
   ```json
    {
     "id": 1,
    "postId": 1,
    "name": "John Doe",
    "email": "johndoe@example.com",
    "comment": "This is a great post!",
    "createdAt": "2024-09-01T12:30:00Z"
  }
  ```

## Future Enhancements
- **Pagination:** Add support for paginating results in the GET endpoints.
- **Categories and Tags Management:** Separate management for categories and tags.
- **User Authentication:** Implement JWT-based authentication for secure access to the API.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request for review.

## License
This project is open-source and available under the [MIT License](LICENSE).

---
