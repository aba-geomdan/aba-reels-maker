import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages 배포용 설정
// base 값은 저장소 이름과 정확히 같아야 합니다: /aba-reels-maker/
export default defineConfig({
  plugins: [react()],
  base: '/aba-reels-maker/',
})
