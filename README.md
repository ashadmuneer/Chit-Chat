
## ChatMate - Real-Time Chat Application

Welcome to the repository for **ChatMate**, a real-time chat application built using React.js, Firebase, and Zustand. The application allows users to chat with each other in real-time, with support for media sharing and notifications.

## Demo

You can view the live version of the application here: [ChatMate](https://chatmate-justchat.netlify.app/)

## Features

- **Real-Time Chat**: Users can send and receive messages in real-time.
- **Media Sharing**: Users can share images and videos during conversations.
- **User Authentication**: Integrated with Firebase for secure user authentication and session management.
- **Notifications**: Real-time notifications using `react-toastify` for new messages and updates.
- **Emoji Support**: Integrated with `emoji-picker-react` for easy emoji selection.
- **Responsive Design**: Fully responsive design that adapts to different screen sizes.

## Tech Stack

### Frontend
- **React.js**: The main JavaScript library used for building the user interface.
- **Zustand**: For state management, particularly for managing chat messages and user sessions.
- **Tailwind CSS**: A utility-first CSS framework for styling the application.
- **React Router**: Used for navigation between different chat rooms or users.
- **react-toastify**: For real-time notifications on new messages.
- **emoji-picker-react**: For adding emoji support in chat.

### Backend
- **Firebase**: For authentication, real-time database, and media storage.
- **Firebase Authentication**: For secure login and session management.
- **Firebase Realtime Database**: For storing and retrieving chat messages and user data.

## Setup Instructions

### Prerequisites

Before getting started, make sure you have the following installed:

- **Node.js**: Recommended version 16 or higher.
- **Firebase Account**: Set up Firebase for authentication and database services.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ashadmuneer/ChatMate.git
   cd ChatMate
   ```

2. Install the required dependencies for the frontend:

   ```bash
   cd frontend
   npm install
   ```

3. Set up Firebase:
   - Create a Firebase project on the [Firebase Console](https://console.firebase.google.com/).
   - Add Firebase configuration (API keys and project details) to your `.env` file in the frontend directory.

     Example:

     ```
     REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
     REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
     REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
     ```

4. Start the development server:

   ```bash
   cd frontend
   npm run dev
   ```

5. Open your browser and go to ` http://localhost:5173` to view the application locally.

## Additional Features

- **Real-Time Messaging**: Instant communication with friends or groups.
- **Media Sharing**: Share images, videos, and other files in real-time.
- **Emoji Picker**: Use emojis in your messages for fun interactions.
- **User Authentication**: Sign in using Firebase Authentication.
- **Responsive Design**: Seamlessly works on both mobile and desktop devices.

## Contributing

I welcome contributions to this project! If you’d like to help improve the app, add features, or suggest improvements, feel free to fork the repository, make changes, and submit a pull request.

Here are some ideas for contribution:
- Fixing bugs or improving code quality
- Enhancing the UI/UX design
- Adding new features like voice chat or file sharing
- Improving message notification system

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

Thank you for visiting **ChitChat**! If you have any questions, suggestions, or just want to connect, feel free to reach out via email or through the platform’s contact form.

