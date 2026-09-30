// API Configuration for BMO
// In development, this requests the Vite API middleware.
// In production on cPanel, requests go directly to /api/endpoints (or /api rewrite).

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "/api";

export const ENDPOINTS = {
  EVENT: `${API_BASE_URL}/event.php`,
  SETTINGS: `${API_BASE_URL}/settings.php`,
  TESTIMONIALS: `${API_BASE_URL}/testimonials.php`,
  GALLERY: `${API_BASE_URL}/gallery.php`,
  JOURNEY: `${API_BASE_URL}/journey.php`,
  CONTACT: `${API_BASE_URL}/contact.php`,
};
