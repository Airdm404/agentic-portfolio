import type { ProfileResponse } from '../types/profile';

const API_URL = 'http://localhost:3000/profile';

export async function fetchProfile(): Promise<ProfileResponse> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error('Failed to load profile');
  }

  return response.json();
}
