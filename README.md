A portfolio blog project implemented using React and Django.
React is implemented using Redux and Redux Sagas whereas the backend API
is made using Django Rest Framework.

To Run:
1. Create a `config.json ` file in the root directory after cloning. The file should contain a key specifying whether the environment is `development` or `production`.
2. Run the `create_build.sh` script to build a production build.
3. Go to backend folder: `cd backend`
4. Either do `python manage.py runserver` or run using `gunicorn`
5. To run in development environment two different servers need to be started. Goto `backend` folder and do `python manage.py runserver`. Then, go to `frontend` folder and do `npm start`.

**Open to suggestions.**
 