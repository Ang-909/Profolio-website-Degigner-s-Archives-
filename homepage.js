function updateTitle() {
    const newtitle = document.getElementById('username').value; // Get the value entered in the username field
    document.getElementById('Title').innerText = 'Welcome, ' + newtitle; // Set the inner text of the title element to the entered username
}
