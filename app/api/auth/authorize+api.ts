import {
  APP_SCHEME,
  BASE_URL,
  GOOGLE_AUTH_URL,
  GOOGLE_CLIENT_ID,
  GOOGLE_REDIRECT_URI,
} from '@/constants';

export async function GET(request: Request) {
  if (!GOOGLE_CLIENT_ID) {
    return Response.json(
      { error: 'Missing GOOGLE_CLIENT_ID environment variable' },
      { status: 500 }
    );
  }

  const url = new URL(request.url);
  let idpClientId: string;

  const internalClient = url.searchParams.get('client_id');

  const redirectUri = url.searchParams.get('redirect_uri');

  let platform;

  if (redirectUri === APP_SCHEME) {
    platform = 'mobile';
  } else if (redirectUri === BASE_URL) {
    platform = 'web';
  } else {
    return Response.json(
      { error: `Invalid redirect_uri ${redirectUri}` },
      { status: 400 }
    );
  }

  // use state to drive redirect back to platform
  let state = platform + '|' + url.searchParams.get('state');

  if (internalClient === 'google') {
    idpClientId = GOOGLE_CLIENT_ID;
  } else {
    return Response.json({ error: 'Invalid client' }, { status: 400 });
  }

  // additional enforcement
  if (!state) {
    return Response.json({ error: 'Invalid state' }, { status: 400 });
  }

  const params = new URLSearchParams({
    client_id: idpClientId,
    redirect_uri: GOOGLE_REDIRECT_URI,
    response_type: 'code',
    scope: url.searchParams.get('scope') || 'identity',
    state: state,
    // Could be disabled in prod to prevent reselecting on each login
    prompt: 'select_account',
  });

  const googleAuthUrl = GOOGLE_AUTH_URL + '?' + params.toString();

  console.log('Redirecting to Google OAuth URL:', googleAuthUrl);

  return Response.redirect(googleAuthUrl);
}
