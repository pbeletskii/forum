// POSTS_PER_PAGE: сколько сообщений отображается на одной странице
const POSTS_PER_PAGE = 20;
//REFRESH_TOKEN_TIME: как часто на сервер отправляется запрос на создание нового токена доступа.
// Убедитесь, что это число меньше срока действия токена в .env.
const REFRESH_TOKEN_TIME = 500 * 1000;
// MAX_COMMENT_DEPTH: глубина отображения комментариев.
// Должно быть таким же, как MAX_COMMENT_DEPTH в .env
const MAX_COMMENT_DEPTH = 3;
const API_URL = 'https://fforum.herokuapp.com';
export { POSTS_PER_PAGE, REFRESH_TOKEN_TIME, MAX_COMMENT_DEPTH, API_URL };
