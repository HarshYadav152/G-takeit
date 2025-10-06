import React from 'react'
import "../styles/about.css"

export default function About() {
  return (
    <>
      <div class="container">
        <div class="neumorphism text-center">
          <h1 class="mb-4">About Notebook Web App</h1>
          <p class="lead">
            Notebook Web App is a modern, cloud-based note-taking application designed to help you organize your thoughts, ideas, and tasks securely. Built with cutting-edge technologies, it offers a seamless and intuitive experience for users to create, manage, and access their notes anytime, anywhere.
          </p>
        </div>

        <div class="neumorphism">
          <h2 class="mb-4">Features</h2>
          <div class="row">
            <div class="col-md-6 mb-4">
              <div class="neumorphism p-3">
                <div class="feature-icon">📝</div>
                <h4>User Authentication</h4>
                <p>Secure signup and login functionality using JWT and bcrypt for password hashing. Your data is always protected.</p>
              </div>
            </div>
            <div class="col-md-6 mb-4">
              <div class="neumorphism p-3">
                <div class="feature-icon">🗂️</div>
                <h4>Note Management</h4>
                <p>Create, read, update, and delete notes effortlessly. All notes are stored securely in the cloud and associated with your account.</p>
              </div>
            </div>
            <div class="col-md-6 mb-4">
              <div class="neumorphism p-3">
                <div class="feature-icon">📱</div>
                <h4>Responsive Design</h4>
                <p>Built with Bootstrap, the app is fully responsive and works seamlessly on all devices, from desktops to smartphones.</p>
              </div>
            </div>
            <div class="col-md-6 mb-4">
              <div class="neumorphism p-3">
                <div class="feature-icon">🔒</div>
                <h4>Secure Cloud Storage</h4>
                <p>Your notes are stored in a MongoDB database, ensuring data integrity and security.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="neumorphism">
          <h2 class="mb-4">Technologies Used</h2>
          <div class="text-center">
            <div class="tech-icon">🚀 Node.js</div>
            <div class="tech-icon">🌐 Express.js</div>
            <div class="tech-icon">🗄️ MongoDB</div>
            <div class="tech-icon">🔑 JWT</div>
            <div class="tech-icon">🔒 bcrypt</div>
            <div class="tech-icon">🎨 Bootstrap</div>
          </div>
        </div>

        <div class="neumorphism text-center">
          <h2 class="mb-4">Get Started</h2>
          <p>Ready to organize your life? Sign up now and start taking notes effortlessly!</p>
          <a href="/signup" class="btn btn-primary">Sign Up</a>
        </div>
      </div>
    </>
  )
}
