class FieldManager {
  constructor(config) {
    // Retrieve maxFieldCount from config or use a default value
    this.maxFieldCount = config.get('maxFieldCount') || 5;
  }

  showFields(fields) {
    // Limit the fields to the specified maxFieldCount
    const fieldsToShow = fields.slice(0, this.maxFieldCount);
    fieldsToShow.forEach(field => {
      console.log(`Displaying field: ${field}`);
    });
  }
}

// Usage example:
const config = {
  get: (key) => {
    // Example config retrieval logic
    const configs = {
      maxFieldCount: 3,
    };
    return configs[key];
  },
};

const manager = new FieldManager(config);
const allFields = ['field1', 'field2', 'field3', 'field4', 'field5'];

manager.showFields(allFields);
// Output:
// Displaying field: field1
// Displaying field: field2
// Displaying field: field3
