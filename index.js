if (window.opener) {
    const readableURL = 'https://naver.com';
    if (/instagram/i.test(navigator.userAgent)) {
        window.open(readableURL, "_blank");
    } else {
        window.opener.postMessage(readableURL, '*');
        window.self.close();
    }
} else {
    alert("Window Opener is undefined");
}