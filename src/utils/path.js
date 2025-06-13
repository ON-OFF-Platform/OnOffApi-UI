/* src/utils.path.js; PATH 객체를 사용하여 라우팅 경로를 관리 */

export const PATH = {
    HOME: '/',
    LOGIN: '/login'
}

export const deployHostName = import.meta.env.VITE_DEPLOY_HOSTNAME || 'http://localhost:5173';