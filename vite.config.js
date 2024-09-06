// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Ensure that the app binds to 0.0.0.0 for external access
    port: process.env.PORT || 3000 // Use the platform-provided port or fall back to 3000 for local testing
  }
})

