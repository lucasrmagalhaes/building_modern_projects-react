**GET /todos**
- Gives us an array of all the todos.

```
http://localhost:8080/todos
```

**POST /todos**
- Creates a new todo with a unique id, createdAt, and isCompleted properties.

```
http://localhost:8080/todos
```

```
{
    "text": "New todo!"
}
```

**DELETE /todos/:id**
- Deletes a todo.

```
http://localhost:8080/todos/:id
```

**POST /todos/:id/completed**
- Marks a todo as completed.

```
http://localhost:8080/todos/:id/completed
```