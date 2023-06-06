# Auth Class

This `Auth` class is used to create the authentication flow. It extends the `ErrorHandler` class to handle errors and has all the required functions to create a basic authentication. The class provides the following functionality:

## Function: registerUser

This function allows the user to create the signup flow.

### Parameters

- `req`: The request object sent from the client.
- `res`: The response object sent to the client.
- `next`: The function to pass control to the next middleware function.
- `Model`: The database schema to be used.
- `Body`: The values to be inserted in the database.

### Description

This asynchronous function registers a user, sends an email verification link, and returns a token.

## Function: loginUser

This function allows the user to initiate the login flow.

### Parameters

- `req`: The request object sent from the client.
- `res`: The response object sent to the client.
- `next`: The function to pass control to the next middleware function.
- `Model`: The database schema to be used.

### Description

This asynchronous function logs in a user by checking their email and password, verifying their email status, and sending a token for authentication.

## Function: logoutUser

This function allows the user to logout and clears the current session of the user.

### Parameters

- `req`: The request object sent from the client.
- `res`: The response object sent to the client.
- `next`: The function to pass control to the next middleware function.

### Description

The function logs out a user by setting the token cookie to null and returning a success message.

## Function: forgotPassword

This function allows the user to change the password by receiving a token in email.

### Parameters

- `req`: The request object sent from the client.
- `res`: The response object sent to the client.
- `next`: The function to pass control to the next middleware function.
- `Model`: The database schema to be used.

### Description

If the user is not found in the database, an error message with status code 404 is returned. If the email is successfully sent to the user, a success message with status code 200 is returned. If there is an error sending the email, an error message with status code 500 is returned.

## Function: resetPassword

This function allows the user to reset the password using the token.

### Parameters

- `req`: The request object sent from the client.
- `res`: The response object sent to the client.
- `next`: The function to pass control to the next middleware function.
- `Model`: The database schema to be used.

### Description

If the user is not found, an error message "password reset token is invalid or expired" is returned. If the password and confirmPassword do not match, an error message "password does not match" is returned. If there are no errors, a token is sent with a status code of 201.

## Function: verifyUser

This function verifies a user's token and updates their verification status in the database.

### Parameters

- `req`: The request object sent from the client.
- `res`: The response object sent to the client.
- `next`: The function to pass control to the next middleware function.
- `Model`: The database schema to be used.

### Description

If the user is not found, an error message is returned with the message "verification token is invalid or expired". If the user is found and successfully verified, a token is sent with a status code of 201.

---


