# Login Screen – Frontend Assignment

## 🚀 Project Overview

A responsive login screen built with **React** and **TypeScript**, following the given design mock-up and assignment requirements. The project includes **form validation**, **error handling**, and adheres to **accessibility standards**.

---

## 🌐 Live URL & Repository

- **Live Application**: [https://eterna-infotech-frontend-assignment.vercel.app/](https://eterna-infotech-frontend-assignment.vercel.app/)

- **GitHub Repository**: [https://github.com/AishwaryaS9/Eterna-Infotech-Front-End-Assignment.git](https://github.com/AishwaryaS9/Eterna-Infotech-Front-End-Assignment.git)

---

## 🚪 Login Credentials

- **Example 1**:

  - **Email**: user@example.com

  - **Password**: Password1!

- **Example 2**:

  - **Email**: admin@example.com

  - **Password**: Admin123!

---

## ✨ Features

- **Design Accuracy**: Closely follows the provided design mock-up

- **Responsive Layout**: Works seamlessly on all screen sizes

- **Form Validations**:

  - Email must be in a valid format

  - Password must be at least 6 characters, include uppercase, lowercase, number, and special character

- **Error Handling**: Displays inline validation messages for incorrect inputs

- **Accessibility**:

  - Proper `aria-label`s and `aria-describedby` attributes

  - Keyboard- and screen-reader-friendly

- **Password Toggle**: Show/hide password functionality

- **Dummy Authentication**: Uses `dummyUsers` to simulate login

- **Toast Notifications**: Displays success/error messages with `react-hot-toast`

---

## 🛠️ Tech Stack

- **Frontend**: React.js, TypeScript, Vite

- **Styling**: Tailwind CSS

- **Icons**: `react-icons`

- **Toast Notifications**: `react-hot-toast`

---

## 🧪 Usage

- Enter a valid email and password.

- Click Sign In to simulate login.

- Click Sign In with Google (UI only, no real Google OAuth implemented).

- Resize the window or open in mobile view to check responsiveness.

## 🎨 Fonts

- Playfair Display (for headings)

- Inter (for body text)

---

## 📌 Deployment

Hosted on [Vercel](https://vercel.com/) for fast, reliable, and scalable deployment.

---

## 📂 Project Structure

```
login-screen/
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── public/
├── README.md
├── src/
│   ├── App.tsx
│   ├── assets/
│   │   ├── assets.ts
│   ├── index.css
│   ├── main.tsx
│   ├── pages/
│   │   ├── LoginScreen.tsx
│   ├── utils/
│   │   ├── data.ts
│   ├── vite-env.d.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vercel.json
├── vite.config.ts
```

---

## 📋 Installation & Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/AishwaryaS9/Eterna-Infotech-Front-End-Assignment.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Eterna-Infotech-Front-End-Assignment-main
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the application:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser to see the application.

## 🎯 Conclusion

This project demonstrates a fully functional, accessible, and responsive login screen built with React and TypeScript. It follows modern best practices, including proper code structure, form validation, error handling, and mobile-first responsiveness. With its clean design and smooth user experience, this implementation meets the core requirements of the assignment and provides a strong foundation for future enhancements such as API-based authentication or third-party login integrations.
