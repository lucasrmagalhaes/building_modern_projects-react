**What Do We Need for React?**
1. index.html
2. Support for ES6
3. webpack
4. Root component
5. react-hot-loader

---

```
npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react
```

---

```
npm install react react-dom
```

---

```
npm install --save-dev webpack webpack-cli webpack-dev-server style-loader css-loader babel-loader
```

```
npx webpack-dev-server --mode development
```

```
localhost:3000
```

---

```
npm install -D @pmmmwh/react-refresh-webpack-plugin react-refresh
```

---

```
npm install redux react-redux
```

```
npm install @reduxjs/toolkit
```

```
npm install redux-persist
```

---

[Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

---

**Redux best practices**
- Export the connected and unconnected versions of a component.
- Keep Redux actions and async operations out of your reducers.
- Think carefully about connecting components.

---

**Side-Effect Libraries**
- Redux-Saga is more popular
- But Redux-Thunk is simpler

---

```
npm install redux-thunk redux-devtools-extension @babel/runtime
```

```
npm install --save-dev @babel/plugin-transform-runtime
```