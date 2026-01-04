// sw.js - Put this in your root folder
self.addEventListener('push', function(event) {
    const data = event.data.json();
    const options = {
        body: data.body,
        icon: 'https://img.icons8.com/color/96/000000/chat.png',
        badge: 'https://img.icons8.com/color/96/000000/chat.png'
    };
    event.waitUntil(
        self.notificationPermission.showNotification('Zychat: ' + data.title, options)
    );
});
