self.addEventListener('push', function(event) {
    const data = event.data ? event.data.json() : { content: 'New Message!' };
    
    const options = {
        body: data.content,
        icon: '/icon.png', // Add a 192x192 icon to your GitHub
        badge: '/icon.png',
        vibrate: [100, 50, 100],
        data: { url: 'https://pzylan123.github.io/Zychat/' },
        tag: 'zychat-new-msg', // Groups messages together
        renotify: true
    };

    event.waitUntil(
        self.registration.showNotification('ZyChat Zenith', options)
    );
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(clients.openWindow(event.notification.data.url));
});
