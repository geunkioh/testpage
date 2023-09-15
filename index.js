try {
    if (/instagram/i.test(navigator.userAgent) || navigator.userAgent === undefined) {
        alert("This is inside instagram. It will go to instagram")
        window.location.assign("https://www.example.com");
    } else {
        alert("No instagram")
        if (window.opener) {
            alert("There is opener")
            window.opener.postMessage("https://naver.com", '*');
            window.self.close();
        } else {
            alert("Window Opener is undefined")
            window.location.assign("https://www.example.com");
        }
    }
}
catch (e) {
    console.log(e);
}