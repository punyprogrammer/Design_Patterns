// Factory Pattern
// It is a creational pattern that provides the way of creating a oject without specifying the class that will be created
// Instead a method is used for creating an objec

class EmailNotification {
  constructor({ email, message }) {
    this.email = email;
    this.message = message;
  }
  send() {
    console.log(`Sending message ${this.message} to email id ${this.email}`);
  }
}
class SMSNotification {
  constructor({ phone, message }) {
    this.phone = phone;
    this.message = message;
  }
  send() {
    console.log(`Sending message ${this.message} to phone ${this.phone}`);
  }
}
class PushNotification {
  constructor({ deviceId, message }) {
    this.deviceId = deviceId;
    this.message = message;
  }
  send() {
    console.log(`Sending message ${this.message} to device ${this.deviceId}`);
  }
}

class NotificationFactory {
  createNotification(type, config) {
    switch (type) {
      case "email":
        return new EmailNotification(config);
      case "sms":
        return new SMSNotification(config);
      case "push":
        return new PushNotification(config);
      default:
        throw new Error(`Notification type not supported`);
    }
  }
}
// Usage
const notificationFactory = new NotificationFactory();
// email notification
const emailNotification = notificationFactory.createNotification("email", {
  email: "adg190999@gmail.com",
  message: "Hi your subscription has expired",
});
emailNotification.send();
// sms notification
const smsNotification = notificationFactory.createNotification("sms", {
  phone: "9476685756",
  message: "Your trial has expired",
});
smsNotification.send();
// push notification
const pushNotification = notificationFactory.createNotification("push", {
  deviceId: "Mac-10SFSDFS",
  message: "A login was detected for the device",
});

pushNotification.send();
