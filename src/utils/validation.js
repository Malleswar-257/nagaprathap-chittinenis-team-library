// src/utils/validation.js

/**
 * Validation utility functions.
 */

import { isEmpty } from 'lodash';

/**
 * Validate email address.
 *
 * @param {string} email - Email address to validate.
 * @returns {boolean} True if email is valid, false otherwise.
 */
export function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

/**
 * Validate password.
 *
 * @param {string} password - Password to validate.
 * @returns {boolean} True if password is valid, false otherwise.
 */
export function isValidPassword(password) {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}

/**
 * Validate name.
 *
 * @param {string} name - Name to validate.
 * @returns {boolean} True if name is valid, false otherwise.
 */
export function isValidName(name) {
  const nameRegex = /^[a-zA-Z ]+$/;
  return nameRegex.test(name);
}

/**
 * Validate phone number.
 *
 * @param {string} phoneNumber - Phone number to validate.
 * @returns {boolean} True if phone number is valid, false otherwise.
 */
export function isValidPhoneNumber(phoneNumber) {
  const phoneNumberRegex = /^\d{10}$/;
  return phoneNumberRegex.test(phoneNumber);
}

/**
 * Validate registration form data.
 *
 * @param {object} data - Registration form data.
 * @returns {object} Validation result.
 */
export function validateRegistrationForm(data) {
  const errors = {};

  if (!isValidEmail(data.email)) {
    errors.email = 'Invalid email address';
  }

  if (!isValidPassword(data.password)) {
    errors.password = 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character';
  }

  if (!isValidName(data.firstName) || !isValidName(data.lastName)) {
    errors.name = 'Invalid name';
  }

  if (!isValidPhoneNumber(data.phoneNumber)) {
    errors.phoneNumber = 'Invalid phone number';
  }

  return errors;
}

/**
 * Validate login form data.
 *
 * @param {object} data - Login form data.
 * @returns {object} Validation result.
 */
export function validateLoginForm(data) {
  const errors = {};

  if (!isValidEmail(data.email)) {
    errors.email = 'Invalid email address';
  }

  if (isEmpty(data.password)) {
    errors.password = 'Password is required';
  }

  return errors;
}