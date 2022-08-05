# eslint-config

custom eslint config for javascript, typescript, react, react typescript project

## List Of Package

- for javascript [eslint-config-alziqziq](packages/eslint-config-alziqziq)
- for typescript [eslint-config-alziqziq-typescript](packages/eslint-config-alziqziq-typescript)
- for react [eslint-config-alziqziq-react](packages/eslint-config-alziqziq-react)
- for react typescript [eslint-config-alziqziq-react-typescript](packages/eslint-config-alziqziq-react-typescript)

## Basic Configuration

- airbnb
- jsdoc
- import
- react

## Visual Studio Code

install eslint extension [here](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

add the following settings

```json
// .vscode/settings.json

{
  "editor.defaultFormatter": "dbaeumer.vscode-eslint",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.formatOnSave": true
}
```
