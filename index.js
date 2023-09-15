if (/instagram/i.test(navigator.userAgent) || navigator.userAgent === undefined) {
    window.open("https://naver.com", "_blank");
} else {
    if (window.opener) {
        window.opener.postMessage("https://naver.com", '*');
        window.self.close();
    } else {
        alert("Window Opener is undefined")
    }
}