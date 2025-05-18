# 📬 Notification Service

A simple and lightweight Notification Service built with **Node.js**, **Express**, and **MongoDB**, supporting **Email**, **SMS**, and **In-App** notifications.
No message queue (like Redis, RabbitMQ, or Kafka) is used — notifications are processed in real time on API request.

---

## 🧩 Features

- ✅ Send notifications via:
  - 📧 Email (via Gmail SMTP + Nodemailer)
  - 📱 SMS (via Twilio)
  - 🖥️ In-app (console mock)
- 🗃️ Stores all notifications in MongoDB
- 🔍 Retrieve a user's full notification history
- 🚫 No Redis / queueing dependency — great for small services

---

## 🚀 Tech Stack

- **Backend:** Node.js + Express.js
- **Database:** MongoDB (Mongoose)
- **Email Service:** Nodemailer
- **SMS Gateway:** Twilio
- **Environment Management:** dotenv

---

## ⚙️ Setup Instructions

### 🧱 Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [Twilio Account](https://www.twilio.com/try-twilio)

### 🛠️ Installation

```bash
# 1. Clone the repository
git clone [https://github.com/SukarnBharadwaj/notification-service)
cd notification-service

# 2. Install dependencies
npm install

# 3. initialize server
npm run dev
```

## API Endpoints

| Method | Endpoint                   | Description               |
| ------ | -------------------------- | ------------------------- |
| POST   | `/notification`            | Create a new notification |
| GET    | `/users/:id/notifications` | Get notification by ID    |

## 📦 Notification Types

| Type     | Expected userId format               | Description                          |
| :------- | :----------------------------------- | :----------------------------------- |
| `email`  | A valid email address                | Sends email using Gmail SMTP         |
| `sms`    | A phone number in E.164 format       | Sends SMS using Twilio               |
| `in-app` | Any user identifier (e.g., username) | Simulated in console (mock behavior) |

## env

```env
PORT=5000
MONGODB_URI=

# Email (Nodemailer with Gmail)
EMAIL_USER=
EMAIL_PASS=

# SMS (Twilio)
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_PHONE_NUMBER=
```

## 🧪 API Endpoints - Examples

Here are examples of how to interact with the notification service API:

### ✉️ Sending an Email Notification (`POST /notifications`)

**Request Body (JSON):**

```json
{
  "userId": "test@example.com",
  "type": "email",
  "message": "Hello and welcome to our service!"
}
```
#### Response

```json
{
  "success": true,
  "status": "sent"
}
````
