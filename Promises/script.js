const response = {
  json() {
    return new Promise((resolve, reject) => {
      console.log("Parsing JSON...");

      setTimeout(() => {
        const validJson = true; // change to false to test reject

        if (validJson) {
          resolve({ name: "Alice", age: 25 });
        } else {
          reject(new Error("Invalid JSON"));
        }
      }, 1000);
    });
  }
};


response.json().then(data => {
    console.log("JSON data received:", data);
    return data.name;
  })
  .then(name => {
    console.log("User name:", name);
  })
  .catch(error => {
    console.error("Error caught:", error.message);
  });

console.log("This runs BEFORE the Promise resolves");
console.log("hello");