function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');
    const modalContent = document.querySelector('.modal-content');

    // აღარ არის აქ პაროლები ბატონო ჯაყო :)
    const encodedUsers = {
        'YWxleA==': 'YW5pMTIwMg==',
        'ZW5l': 'MTEyNQ==',
        'anVmbw==': 'aGVuYXJvMjE=',
        'c2hha28=': 'YXB0aWFxaWF2ZXJzaTY5',
        'aXZh': 'YXJhbmE=',
        'Y2hlbG8=': 'Y2hlbG8xMjM=',
        'cG9kZWtzYQ==': 'c2FnaXY3MDgyNA==',
        'YnV0a28=': 'c29wbzAwNA==',
        'ZGFpc3k=': 'b2Rh',
        'dGF0bw==': 'IFNIRUxCWTEyMzQk',
        'enVrYQ==': 'a3V0YXB4YW5pYXNoYWtv',
        'oto': 'poter2007'
    };

    // Decoding function to convert base64 strings
    function decodeBase64(encodedString) {
        return atob(encodedString);
    }

    // Encode entered username and password for comparison
    const encodedUsername = btoa(username);
    const encodedPassword = btoa(password);

    // Validate encoded input against encoded users
    if (encodedUsers[encodedUsername] && encodedUsers[encodedUsername] === encodedPassword) {
        modalText.textContent = 'Access Granted';
        modal.style.display = 'flex';
        modalContent.style.borderColor = '#00ff00'; // Green border for "Access Granted"
        
        setTimeout(() => {
            if (encodedUsername === 'YWxleA==') {
                window.location.href = 'desktop.html'; // Redirect to desktop.html for "alex"
            } else if (encodedUsername === 'ZGFpc3k=') {
                window.location.href = 'desktopani.html'; // Redirect to analist.html for "daisy"
            } else {
                window.location.href = 'display.html'; // Redirect to display.html for other users
            }
        }, 2000); // Wait 2 seconds before redirecting
    } else {
        modalText.textContent = 'Access Denied';
        modal.style.display = 'flex';
        modalContent.style.borderColor = '#ff0000'; // Red border for "Access Denied"
        setTimeout(() => {
            modal.style.display = 'none';
        }, 2000); // Hide modal after 2 seconds
    }

    return false; // Prevent form submission
}
