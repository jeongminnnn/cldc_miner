self.addEventListener("activate", Event => ProcessActivate(Event));
self.addEventListener("fetch", Event => ProcessFetch(Event));
self.addEventListener("install", Event => ProcessInstall(Event));

function ProcessActivate(Event)
{



	//console.log("Service worker: Activated");






}

function ProcessFetch(Event)
{





	//console.log("Service worker: Fetched");


	


	//console.log(Event);





	/*

	{
	// Let the browser do its default thing
	// for non-GET requests.
	if (event.request.method !== "GET") return;

	// Prevent the default, and handle the request ourselves.
	event.respondWith(
		(async () => {
		// Try to get the response from a cache.
		const cache = await caches.open("dynamic-v1");
		const cachedResponse = await cache.match(event.request);

		if (cachedResponse) {
			// If we found a match in the cache, return it, but also
			// update the entry in the cache in the background.
			event.waitUntil(cache.add(event.request));
			return cachedResponse;
		}

		// If we didn't find a match in the cache, use the network.
		return fetch(event.request);
		})()
	);
	}

	*/



}

function ProcessInstall(Event)
{



	//console.log("Service worker install now!");




}









































/*


  
  
  self.addEventListener("fetch", event => {
	console.log("Fetch intercepted for:", event.request.url);
	event.respondWith(
	  caches.match(event.request).then(cachedResponse => {
		if (cachedResponse) {
		  return cachedResponse;
		}
		return fetch(event.request);
	  })
	);
  });

  */