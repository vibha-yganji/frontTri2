---
title: Login/Signup
courses: {'compsci': {'week': 6}}
type: tangibles
layout: base
---

# Building a Secure Login/Signup System


## 1. Introduction (Vibha)

- Brief overview of the importance of secure authentication.
- Mention of the frontend and backend components.

## 2. Frontend Components Anusha

#### a. User Interface (UI)

- Explanation of Login and Signup page designs.
- Showcase of UI elements and navigation.

#### b. User Interaction

- Demonstration of input validation.
- Explanation of how authentication requests are sent to the backend (drawing)



## 3. Backend Components Isabel


To create and register a user, you can using the existing code in user.py in the api folder and update it, like this:

```python
class _CRUD(Resource):  # User API operation for Create, Read.  THe Update, Delete methods need to be implemented
        def post(self): # Create method
            ''' Read data for json body '''
            body = request.get_json()
            
            ''' Avoid garbage in, error checking '''
            # validate name
            name = body.get('name')
            if name is None or len(name) < 2:
                return {'message': f'Name is missing, or is less than 2 characters'}, 400
            # validate uid
            uid = body.get('uid')
            if uid is None or len(uid) < 2:
                return {'message': f'User ID is missing, or is less than 2 characters'}, 400
            # look for password and dob
            password = body.get('password')
            dob = body.get('dob')
            coins = 0
            
            
            tracking = body.get('tracking') #validate tracking
            #
            exercise = body.get('exercise') #validate exercise

            ''' #1: Key code block, setup USER OBJECT '''
            uo = User(name=name, #user name
                      uid=uid, tracking=tracking, exercise=exercise, dob=dob, coins=coins)
```

The `LoginAPI` class defines a resource for handling user login in a Flask application.

```python
class LoginAPI(Resource):
    def post(self):
        data = request.get_json()

        # Retrieve uid and password from the request data
        uid = data.get('uid')
        password = data.get('password')  
```

The post method handles HTTP POST requests.
Retrieves JSON data from the request body, expecting 'uid' and 'password' fields.

```python

        # Check if uid and password are provided
        if not uid or not password:
            response = {'message': 'Invalid credentials'}
            return make_response(jsonify(response), 401)

```

Input Validation:
Checks if both 'uid' and 'password' are provided in the request.
If not, it returns a JSON response with an 'Invalid credentials' message and a 401 (Unauthorized) status.

```python

        # Retrieve user by uid from the database
        user = User.query.filter_by(_uid=uid).first()

```

Database Query:
Retrieves a user from the database based on the provided 'uid'.
python
```python
        # Check if the user exists and the password is correct
        if user and user.is_password(password):
```

User Authentication:
Verifies if the user exists in the database and if the provided password matches the stored password (using a method is_password on the user object).
```python

            # Perform login operations here (if needed)

            # Construct the response with the user's name included
            response = {
                'message': 'Logged in successfully',
                'user': {
                    'name': user.name,  
                    'id': user.id
                }
            }
            return make_response(jsonify(response), 200)
```
Successful Login Response:
If the user exists and the password is correct, it constructs a JSON response indicating a successful login, including the user's name and ID.
python. If the user does not exist or the password is incorrect, it returns a JSON response with an 'Invalid UID or password' message and a 401 status.
LogoutAPI Resource:







## 4. Login Process/Signup   Justin  Frontend

#### a. Step-by-step walkthrough

- Frontend and backend interactions during the login/signup process.
- Demonstration of how the user gains access to protected routes.










### 6. Best Practices and Additional Features Vibja

- Brief discussion on additional security features (e.g., email verification, two-factor authentication).
- Emphasis on following best practices for security and privacy.


