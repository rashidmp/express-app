# Express.js App with TypeScript

This is a basic Express.js application built with TypeScript.

## Installation

To get started with the app, clone the repository and install the dependencies.

```bash
git clone <repository-url>
cd express-app
npm install
```

## Usage

Build the TypeScript code and start the server.

```bash
npm run build
npm start
```

Open your browser and visit http://localhost:3000 to access the application.

## Development

During development, you can use the following command to run the app with automatic reloading.

```bash
npm run start:dev
```

This command uses [nodemon](https://nodemon.io/) to watch for file changes and automatically restart the server.

## File Uploads

This application supports file uploads using the `./upload` endpoint. Send a POST request with a file attached to upload it. The uploaded files will be stored in the `uploads/` directory.

## Configuration

The application can be configured using environment variables. Create a `.env` file in the root directory and specify the required environment variables. An example `.env` file:

```makefile
PORT=3000
```

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

License
This project is licensed under the [MIT License](https://chat.openai.com/LICENSE).
