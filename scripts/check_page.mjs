async function run() {
  const url = 'https://inhubflow.online/blog/es/como-prospectar-en-linkedin-sin-que-te-bloqueen-la-cuenta';
  const res = await fetch(url);
  console.log('HTTP status:', res.status);
  const text = await res.text();
  const canonical = text.match(/<link[^>]+rel=["']canonical["'][^>]*>/i);
  const robots = text.match(/<meta[^>]+name=["']robots["'][^>]*>/i);
  const title = text.match(/<title[^>]*>([^<]+)<\/title>/i);
  console.log('Title:', title ? title[1] : 'None');
  console.log('Canonical:', canonical ? canonical[0] : 'None');
  console.log('Robots meta:', robots ? robots[0] : 'None');
  
  // Also check if noindex exists anywhere
  console.log('Has noindex?:', text.toLowerCase().includes('noindex'));
}
run();
