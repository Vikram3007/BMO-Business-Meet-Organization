// API Service Layer for BMO
// Connects React to the PHP REST API endpoints

import { ENDPOINTS } from "../config/api";

const defaultHeaders = {
  "Content-Type": "application/json",
  "Accept": "application/json",
};

/**
 * Generic fetch wrapper with timeout and error handling
 */
async function fetchApi(url, options = {}) {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
      headers: {
        ...defaultHeaders,
        ...(options.headers || {}),
      },
    });

    clearTimeout(timeoutId);

    const json = await response.json();
    return json;
  } catch (err) {
    if (err.name === "AbortError") {
      return { success: false, message: "Request timed out. Please try again." };
    }
    return {
      success: false,
      message: err.message || "Unable to reach server. Please check your network connection.",
    };
  }
}

/**
 * Fetch Event Settings & Countdown details
 */
export async function getEvent() {
  return await fetchApi(ENDPOINTS.EVENT);
}

/**
 * Fetch Overall Site / Organization Settings
 */
export async function getSettings() {
  return await fetchApi(ENDPOINTS.SETTINGS);
}

/**
 * Fetch Member Testimonials / Stories
 */
export async function getTestimonials() {
  return await fetchApi(ENDPOINTS.TESTIMONIALS);
}

/**
 * Fetch Memories / Gallery items
 */
export async function getGallery() {
  return await fetchApi(ENDPOINTS.GALLERY);
}

/**
 * Fetch 150 Week Journey Milestones
 */
export async function getJourney() {
  return await fetchApi(ENDPOINTS.JOURNEY);
}

/**
 * Submit Contact Form Message
 * @param {Object} data { full_name, business_name, phone, email, message }
 */
export async function submitContactForm(data) {
  return await fetchApi(ENDPOINTS.CONTACT, {
    method: "POST",
    body: JSON.stringify(data),
  });
}
