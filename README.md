# nalamapp

## ⌨️ Running in iOS simulator

1. git clone https://github.com/sararu-nalam/nalamapp.git
2. cd nalamapp
3. yarn install
4. cd ios && pod install
5. open ios project in Xcode (open nalam.xcworkspace file)
6. build and run

## Linting on VS Code

In order to right linting in vs code you need to follow this steps:

1. Press fn + f1 in keyboard
2. Type `open settings` in search bar and select `Preference: Open Settings (JSON)` option
3. add the following config to the json settings:

```json
"eslint.validate": [
    "javascript",
    "javascriptreact",
    {
        "language" : "typescript",
        "autoFix": true
    },
    {
        "language" : "typescriptreact",
        "autoFix": true
    }
]
```
