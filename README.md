# codemirror-companion-extension

This package implements inline suggestions for the CodeMirror code editor. It's a backward-compatible fork of [saminzadeh's](https://github.com/saminzadeh/codemirror-extension-inline-suggestion/) project that allows the user to display text different than that being accepted, and to instantly trigger the completion function upon accepting the previous completion.

![Screenshot](example.png)

## Install

```bash
npm install codemirror-companion-extension --save
```

## Usage

[![Edit codemirror-extension-inline-suggestion](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?logo=codesandbox)](https://codesandbox.io/s/codemirror-extension-inline-suggestion-m5o8lf?fontsize=10&hidenavigation=1&theme=dark)

```tsx
import CodeMirror from '@uiw/react-codemirror';
import { inlineSuggestion } from 'codemirror-companion-extension';

const fetchSuggestion = async (state) => {
  // or make an async API call here based on editor state
  return 'hello';
};

function App() {
  return (
    <CodeMirror
      value=""
      height="200px"
      extensions={[
        inlineSuggestion({
          fetchFn: inlineSuggestion,
          delay: 1000,
          continue_suggesting: true,
        }),
      ]}
    />
  );
}

export default App;
```

## License

MIT
