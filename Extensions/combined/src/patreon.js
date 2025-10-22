/*
 * MODIFIED FILE - Return YouTube Dislike - Free Edition
 *
 * This file has been modified from the original Return YouTube Dislike extension.
 * Modification Date: October 22, 2025
 *
 * Changes made:
 * - Removed all Patreon authentication and premium feature functionality
 * - Made extension completely free with no paywalls
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Original work Copyright (C) Dmitry Selivanov & Community
 * Modified work Copyright (C) 2025
 */

let patreonState = {
  authenticated: false,
  user: null,
  sessionToken: null,
};

function initPatreonFeatures() {
  // Premium features disabled - extension is now completely free
}

function enablePremiumFeatures() {
  // Premium features disabled
}

function disablePremiumFeatures() {
  // Premium features disabled
}

function isPatreonUser() {
  return false;
}

function getPatreonTier() {
  return "none";
}

export { initPatreonFeatures, isPatreonUser, getPatreonTier, patreonState };
