self.addEventListener('push', function(event) {
    const data = event.data ? event.data.json() : { message: 'New message in Zychat!' };
    
    event.waitUntil(
        self.registration.showNotification('Zychat', {
            body: data.message,
            icon: '/icon.png',
            vibrate: [200, 100, 200],
            tag: 'zychat-notif',
            renotify: true
        })
    );
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('/')
    );
});
