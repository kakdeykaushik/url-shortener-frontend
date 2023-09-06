# Summary 
A minimal URL shortner app with user management made with using **Django**(backend) and **React**(Frontend) and hosted on **Heroku**(at the time of writing).


# Backend
Backend repo = https://github.com/kakdeykaushik/url-shortener-backend



# Live
BASE URL = https://kinara-frontend.herokuapp.com/



# Views
## 1. Register Page View - "/register"
    - Renders an Form with username and password field and a submit button. 
    - On successful submission of form(ie on user creation), a token is stored in local storage for Authentication.


## 2. Login Page View - "/login"
    - Similar to Register Page View.
    - Renders an Form with username and password field and a submit button. 
    - On successful submission of form(ie authenticating user details in database) a token is stored in local storage for Authentication.


## 3. Short Url Create View - "/create"
    - Renders a Form for submitting target url and a submit button.
    - On successful submission of form(ie creation of short Url), the short url is displayed on users screen.
    - Authentication required.

## 4. Admin Page View - "/admin/\<url>
    - Shows Url details to the user.
    - Only owner of short url can view these details.
    - Allows owner to enable and disable the url.
    - Allows owner to delete the url.
    - Authentication required.


