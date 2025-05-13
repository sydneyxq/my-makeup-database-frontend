# My Makeup Database

This is the frontend code of the web application, My Makeup Database, that allows users to explore a vast range of makeup products by categories such as brand, price range, and country.

## User Interface
<img width="939" alt="My Makeup Database UI" src="https://github.com/user-attachments/assets/0af4fb0a-042a-4458-9dc7-c95749abbe97" />


If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```


```
