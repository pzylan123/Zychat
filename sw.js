// sw.js - The Background Worker
self.addEventListener('push', function(event) {
    const data = event.data.json();
    const options = {
        body: data.content,
        icon: '/icon.png', // Add an icon path here if you have one
        badge: '/icon.png',
        vibrate: [200, 100, 200],
        data: { url: '/' }
    };
    event.waitUntil(
        self.registration.showNotification(`New Message from ${data.sender}`, options)
    );
});
