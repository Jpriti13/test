// Cucumber configuration settings

module.exports = {
  defaultTimeoutInterval: 30000,
  retries: { // Define retry settings
    run: 2, // Number of attempts to run a failed test
    // Define a retry strategy if desired
  },
  format: [
    'pretty', // Use a pretty print format for ease of reading
    'json:results.json' // Output results in JSON format
  ],
};