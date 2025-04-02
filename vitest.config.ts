import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ["./src/setupTests.ts"],
    include: [
        "src/**/*.spec.tsx",
        "src/**/*.spec.ts",
        "src/**/*.test.ts",
        "src/**/*.test.tsx",
    ],
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "./src") }],
},
})