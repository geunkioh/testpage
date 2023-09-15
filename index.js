try {
    if (/instagram/i.test(navigator.userAgent) || navigator.userAgent === undefined) {
        alert("This is inside instagram. It will go to instagram")
        window.open("https://naver.com", "_blank");
    } else {
        alert("No instagram")
        if (window.opener) {
            alert("There is opener")
            window.opener.postMessage("https://naver.com", '*');
            window.self.close();
        } else {
            alert("Window Opener is undefined")
            window.open("https://naver.com", "_blank");
        }
    }
}
catch (e) {
    console.log(e)
}