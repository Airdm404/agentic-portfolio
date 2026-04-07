import type { ProfileResponse } from '../types/profile';
import { buildApiUrl } from './api';

export async function fetchProfile(): Promise<ProfileResponse> {
  const response = await fetch(buildApiUrl('/profile'));

  if (!response.ok) {
    throw new Error('Failed to load profile');
  }

  return response.json();
}
