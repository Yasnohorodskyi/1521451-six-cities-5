
export function getCookie(cookieName) {
  const results = document.cookie.match(`(^|;) ?` + cookieName + `=([^;]*)(;|$)`);

  if (results) {
    return (unescape(results[2]));
  } else {
    return null;
  }
}

export function setCookie(name, value, expY, expM, expD, path, domain, secure) {
  const cookieString = name + `=` + escape(value);

  if (expY) {
    const expires = new Date(expY, expM, expD);
    cookieString += `; expires=` + expires.toGMTString();
  }

  if (path) {
    cookieString += `; path=` + escape(path);
  }

  if (domain) {
    cookieString += `; domain=` + escape(domain);
  }

  if (secure) {
    cookieString += `; secure`;
  }

  document.cookie = cookieString;
}


export function deleteCookie(cookieName) {
  const cookieDate = new Date();
  cookieDate.setTime(cookieDate.getTime() - 1);
  document.cookie = cookieName += `=; expires=` + cookieDate.toGMTString();
}
