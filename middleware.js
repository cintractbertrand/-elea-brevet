// Accès protégé par mot de passe (Vercel Edge Middleware).
// Le mot de passe est lu dans la variable d'environnement SITE_PASSWORD, jamais écrit dans le dépôt.
// Le nom d'utilisateur est indifférent : seul le mot de passe compte.
export const config = { matcher: '/((?!favicon).*)' };

export default function middleware(request) {
  const expected = process.env.SITE_PASSWORD;
  if (!expected) return; // aucun mot de passe configuré : accès libre

  const [scheme, value] = (request.headers.get('authorization') || '').split(' ');
  if (scheme === 'Basic' && value) {
    const decoded = atob(value);
    const pwd = decoded.slice(decoded.indexOf(':') + 1);
    if (pwd === expected) return;
  }
  return new Response('Accès protégé. Mot de passe requis.', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="Révisions du brevet", charset="UTF-8"' },
  });
}
