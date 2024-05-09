Sure, here's a detailed `README.md` file for your application:

---

# QR Code Generator

This is a simple QR Code Generator application built with React for the frontend and Node.js/Express for the backend.

## Features

- Generate QR code from a URL
- Embed a logo in the QR code
- Download the generated QR code

## High Level Architecture

![Architecture](./images/QR-arch.png)

## Prerequisites

- Node.js
- npm

## Installation

### Backend

1. Navigate to the backend directory:

```bash
cd backend
```

2. Install the necessary packages:

```bash
npm install
```

3. Start the server:

```bash
node app.js
```

The server will start on port 3000.

### Frontend

1. Navigate to the frontend directory:

```bash
cd frontend
```

2. Install the necessary packages:

```bash
npm install
```

3. Start the React app:

```bash
npm start
```

The app will start on port 3001 (since 3000 port is used by express, after user confirmation).

## Usage

1. Open the app in your browser at `http://localhost:3001`.

2. Enter a URL in the text box.

3. Click the "Generate QR Code" button.

4. The QR code will be displayed below the button.

5. Click the "Download QR Code" link to download the QR code.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

This `README.md` file provides a brief description of the application, lists the features, specifies the prerequisites, provides installation and usage instructions, and includes sections for contributing and the license. You should replace the placeholders with the actual paths to your backend and frontend directories, and update the other sections as necessary.