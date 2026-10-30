import { UserAuth } from '../types/tki';

export const AUTH_STORAGE_KEY = 'tki_user_auth_br';

export function normalizePhoneBR(str: string): string {
  if (!str) return '';
  const digits = String(str).replace(/[^\d]/g, '');
  if (digits.length === 11) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  } else if (digits.length === 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return digits;
}

export function normalizeIdentity(str: string): string {
  if (!str) return '';
  return String(str).trim().toLowerCase();
}

export function getStoredAuth(): UserAuth | null {
  try {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY);
    if (!raw) return null;
    const auth: UserAuth = JSON.parse(raw);
    if (!auth || (auth.status !== 'verified' && auth.status !== 'anonymous')) return null;
    if (auth.expires_at && new Date(auth.expires_at).getTime() < Date.now()) {
      localStorage.removeItem(AUTH_STORAGE_KEY);
      return null;
    }
    return auth;
  } catch (err) {
    return null;
  }
}

export function saveStoredAuth(profile: Partial<UserAuth>): UserAuth {
  const now = new Date();
  const expiresAt = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000); // 30 days
  const authData: UserAuth = {
    lead_id: profile.lead_id || `usr_${Date.now()}`,
    full_name: profile.full_name || 'Participante',
    phone: profile.phone || '',
    email: (profile.email || '').toLowerCase().trim(),
    organization: profile.organization || '',
    role: profile.role || 'Participante',
    status: profile.status || 'verified',
    verified_at: now.toISOString(),
    expires_at: expiresAt.toISOString(),
  };

  try {
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(authData));
  } catch (err) {
    console.warn('Não foi possível salvar a sessão no localStorage:', err);
  }

  return authData;
}

export function clearStoredAuth(): void {
  try {
    localStorage.removeItem(AUTH_STORAGE_KEY);
  } catch (err) {
    console.warn('Erro ao limpar sessão:', err);
  }
}
