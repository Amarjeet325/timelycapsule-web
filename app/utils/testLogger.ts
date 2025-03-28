import { logger } from './logger'; // Assuming logger.ts exists in the same directory

// Sample data with sensitive information
const sampleUserData = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  password: 'SuperSecretPassword123!',
  walletAddress: '0x1234567890abcdef1234567890abcdef12345678',
  creditCard: '4111-1111-1111-1111',
  ssn: '123-45-6789',
};

// Function to demonstrate different log levels
export function testLogLevels() {
  console.log('Testing different log levels:');
  logger.debug('This is a debug message');
  logger.info('This is an info message');
  logger.warn('This is a warning message');
  logger.error('This is an error message');
  console.log('Log levels test complete\n');
}

// Function to test logging sensitive information
export function testSensitiveData() {
  console.log('Testing logging with sensitive data:');
  logger.debug('User data received', { ...sampleUserData });
  logger.info('Authentication attempt', { 
    email: sampleUserData.email, 
    password: '[REDACTED]' // Demonstrating manual redaction
  });
  logger.warn('Failed login attempt', { 
    email: sampleUserData.email, 
    attempts: 3
  });
  logger.error('Payment processing error', {
    user: sampleUserData.email,
    cardNumber: sampleUserData.creditCard,
    error: 'Invalid card number'
  });
  console.log('Sensitive data test complete\n');
}

// Function to demonstrate logging in form submission scenario
export function testFormSubmission() {
  console.log('Testing form submission scenario:');
  
  // Simulate form validation
  logger.debug('Form validation started', { formType: 'signup' });
  
  // Simulate validation errors
  const validationErrors = {
    email: 'Invalid email format',
    password: 'Password must be at least 8 characters'
  };
  logger.warn('Form validation failed', { errors: validationErrors });
  
  // Simulate successful validation
  logger.info('Form validation successful', { formType: 'signup' });
  
  // Simulate form submission
  logger.debug('Form submission started', { 
    formData: {
      name: sampleUserData.name,
      email: sampleUserData.email,
      // Note: Sensitive data should be masked by the logger
      password: sampleUserData.password,
      walletAddress: sampleUserData.walletAddress
    }
  });
  
  // Simulate successful submission
  logger.info('Form submission successful', { 
    userId: '123e4567-e89b-12d3-a456-426614174000',
    timestamp: new Date().toISOString()
  });
  
  console.log('Form submission test complete\n');
}

// Function to demonstrate error handling and logging
export function testErrorScenario() {
  console.log('Testing error scenario:');
  
  try {
    // Simulate an error
    throw new Error('Something went wrong during wallet connection');
  } catch (error: any) {
    logger.error('Error connecting wallet', {
      walletAddress: sampleUserData.walletAddress,
      errorMessage: error.message,
      errorStack: error.stack
    });
  }
  
  // Simulate API error
  logger.error('API request failed', {
    endpoint: '/api/auth/signup',
    statusCode: 500,
    response: { message: 'Internal server error' }
  });
  
  console.log('Error scenario test complete\n');
}

// Main function to run all tests
export function runLoggerTests() {
  console.log('=== LOGGER TESTING UTILITY ===');
  console.log('This utility tests various logging scenarios.\n');
  
  testLogLevels();
  testSensitiveData();
  testFormSubmission();
  testErrorScenario();
  
  console.log('=== LOGGER TESTING COMPLETE ===');
  console.log('Check the console output to verify logger behavior.');
  console.log('Important: Ensure sensitive data like passwords, credit cards, and SSNs are properly masked.');
}

// Instructions for usage
console.log(`
To test the logger functionality, import the runLoggerTests function and call it:

import { runLoggerTests } from 'app/utils/testLogger';

// Run all tests
runLoggerTests();

// Or run individual test functions:
import { testLogLevels, testSensitiveData } from 'app/utils/testLogger';
testLogLevels();
testSensitiveData();
`);

// Export a default function for easy importing and running
export default runLoggerTests;

