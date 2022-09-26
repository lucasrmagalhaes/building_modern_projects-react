**GET /todos**
- Gives us an array of all the todos.

```
http://localhost:8080/todos
```

**POST /todos**
- Creates a new todo with a unique id, createdAt, and isCompleted properties.

**POST /todos/:id/completed**
- Marks a todo as completed.

**DELETE /todos/:id**
- Deletes a todo.