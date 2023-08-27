import Cookies from "js-cookie";

const setCookie = (cookieName, cookieBody) => Cookies.set(cookieName, cookieBody, { expires: 1 });

export default setCookie;