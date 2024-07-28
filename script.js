document.getElementById('newPostBtn').addEventListener('click', function () {
    document.getElementById('newPostModal').style.display = 'block';
});

document.getElementById('postBtn').addEventListener('click', function () {
    const newPostText = document.getElementById('newPostText').value;
    if (newPostText.trim()) {
        const messageContainer = document.createElement('div');
        messageContainer.classList.add('message');

        const timestamp = document.createElement('div');
        timestamp.classList.add('timestamp');
        const date = new Date();
        timestamp.innerText = `${date.getHours()}:${date.getMinutes()} - ${date.toLocaleDateString()}`;

        const messageText = document.createElement('div');
        messageText.classList.add('message-text');
        messageText.innerText = newPostText;

        messageContainer.appendChild(timestamp);
        messageContainer.appendChild(messageText);

        document.getElementById('messages').prepend(messageContainer);

        document.getElementById('newPostText').value = '';
        document.getElementById('newPostModal').style.display = 'none';
    }
});

window.onclick = function(event) {
    if (event.target == document.getElementById('newPostModal')) {
        document.getElementById('newPostModal').style.display = 'none';
    }
};
