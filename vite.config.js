```javascript
import { defineConfig } from 'vite'
import { viteSingleFile } from "vite-plugin-singlefile"

export default defineConfig({
  plugins: [viteSingleFile()],
  base: './', // Relative base is fine with singlefile
})
```
