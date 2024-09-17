function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');
    const modalContent = document.querySelector('.modal-content');

    // List of valid usernames and passwords
    const users = {
        'alex': 'ani1202',
        'ene': '1125',
        'jufo': 'henaro21',
        'shako': 'aptiaqiaversi69',
        'iva' : 'arana',
        'chelo' : 'chelo123',
        'podeksa' : 'sagiv70824',
        'butko' : 'sopo004',
        'daisy' : 'oda',
        'tato':'SHELBY1234$'
    };

    // Check if the entered username exists in the users object and if the password matches
    if (users[username] && users[username] === password) {
        modalText.textContent = 'Access Granted';
        modal.style.display = 'flex';
        modalContent.style.borderColor = '#00ff00'; // Green border for "Access Granted"
        
        setTimeout(() => {
            if (username === 'alex') {
                window.location.href = 'desktop.html'; // Redirect to desktop.html for "alex"
            } else if (username === 'daisy') {
                window.location.href = 'desktopani.html'; // Redirect to analist.html for "daisy"
            } else {
                window.location.href = 'display.html'; // Redirect to display.html for other users
            }
        }, 2000); // Wait 2 seconds before redirecting
        return false; // Prevent form submission
    } else {
        modalText.textContent = 'Access Denied';
        modal.style.display = 'flex';
        modalContent.style.borderColor = '#ff0000'; // Red border for "Access Denied"
        setTimeout(() => {
            modal.style.display = 'none';
        }, 2000); // Hide modal after 2 seconds
        return false; // Prevent form submission
    }
}
