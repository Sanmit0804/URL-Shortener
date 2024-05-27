# URL Shortener Website

This project is a simple URL shortener website built using JavaScript, Node.js, Express, and EJS. It allows users to create short links for long URLs.

## Features

- Shorten long URLs to easily share them
- View a list of all shortened URLs
- Track visit history for each short link

## Getting Started

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/url-shortener.git
   cd url-shortener
   
Install Dependencies:
``` npm install ```

## Set Up MongoDB:
* Make sure you have MongoDB installed and running.
* Update the MongoDB connection string in connect.js.
* Start the Server:
* ```npm start```

Access the Website: Open your browser and navigate to http://localhost:8001.

## Project Structure
* models/url.js: Defines the URL schema for MongoDB.
* Routes/url.js: Handles URL-related routes.
* Routes/staticRouter.js: Serves static files (CSS, images, etc.).
* views/home.ejs: EJS template for rendering the home page.

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
