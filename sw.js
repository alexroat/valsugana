// Service worker di congedo: sostituisce quello di Valsugana Offline, libera le cache e si disinstalla.
// L'app ora è su https://forcella.app
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil((async () => {
  for (const k of await caches.keys()) await caches.delete(k);
  await self.registration.unregister();
  for (const c of await self.clients.matchAll({ type: 'window' })) c.navigate(c.url);
})()));
