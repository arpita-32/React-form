# React Form Project

This project is a simple React form that demonstrates how to handle user input, form submission, and controlled components in React using the `useState` hook.

## Project Structure
```
react-form/
├── src/
│   ├── App.js
│   └── App.css
├── package.json
└── README.md
```

## Features
- Handles various input types: text, email, checkbox, radio buttons, textarea, and select dropdown.
- Uses `useState` to manage form state.
- Prevents default form submission to handle custom logic.
- Logs form data to the console upon submission.

## Getting Started

### Prerequisites
- Node.js and npm (or yarn) installed.

### Installation
1. Clone the repository:
```bash
git clone https://github.com/yourusername/react-form.git
```
2. Navigate to the project directory:
```bash
cd react-form
```
3. Install dependencies:
```bash
npm install
```

### Running the Project
To start the development server:
```bash
npm start
```
This will open the app in your default web browser at `http://localhost:3000/`.

## Form Fields
- **First Name**: Text input
- **Last Name**: Text input
- **Email**: Email input
- **Comments**: Textarea for multiline input
- **Visibility**: Checkbox to toggle visibility
- **Mode**: Radio buttons to select between "Online-Mode" and "Offline-Mode"
- **Favorite Car**: Dropdown to select a car from predefined options

## Form Submission
- On submission, the form prevents default behavior and logs the form data to the console.
- Form data is updated in real-time with each change, ensuring the UI stays in sync with the state.

## License
This project is licensed under the MIT License.

## Acknowledgments
- React documentation: https://reactjs.org/docs/getting-started.html
- Inspiration from hands-on learning with forms in React.

## Author
- [Your Name](https://github.com/yourusername)

---

Enjoy coding and customizing your React form!

