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

---

**Why Do We Need Selectors?**
- Selectors give us a place to put logic for combining, filtering, transforming storing data.

---

```
npm install reselect
```

---

**Styled-Components**
- Allow us to define styles inside our JavaScript files.

---

```
npm install styled-components
```

---

```
npm install --save-dev mocha chai
```

```
npm install --save-dev @babel/register
```

---

```
npm run test
```

---

```
npm install --save-dev sinon
```

```
npm install --save-dev node-fetch@2.6.0
```

```
npm install --save-dev fetch-mock@9.0.0-beta.2
```