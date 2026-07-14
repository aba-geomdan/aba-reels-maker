import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import obfuscator from 'vite-plugin-javascript-obfuscator'

// GitHub Pages 배포용 설정
// base 값은 저장소 이름과 정확히 같아야 합니다: /aba-reels-maker/
export default defineConfig({
  plugins: [
    react(),
    obfuscator({
      apply: 'build',
      include: [/\.js$/],
      exclude: [/node_modules/],
      debugger: false,
      options: {
        compact: true,
        stringArray: true,
        stringArrayEncoding: ['base64'],
        stringArrayThreshold: 0.75,
        identifierNamesGenerator: 'hexadecimal',
        controlFlowFlattening: false,
        deadCodeInjection: false,
        debugProtection: false,
        selfDefending: false
      }
    })
  ],
  base: '/aba-reels-maker/',
})
