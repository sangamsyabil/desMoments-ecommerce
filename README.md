# desMoments-ecommerce

### Run the application

You will need two terminals pointed to the frontend and backend directories to start the servers for this application.

- Run this command to start the backend server in the **backend** directory: [`python manage.py runserver`] (You have to run this command while you are sourced into the virtual environment)

### Procedure to run FE

You can either go with Yarn (version-1) or NPM. I personally like Yarn so I describe accordingly. Kindly follow the corresponding npm command incase if you use npm

- Yarn / npm

```sh
npm install yarn
```

### Installation

1. Clone the repo

```sh
git clone https://github.com/sangamsyabil/desMoments-ecommerce.git
```

2. Change the directory to frontend/

```sh
cd frontend
```

3. Install Node packages packages

```sh
yarn
```

4. Start localhost development server

```sh
yarn start
```

5. Testing

```sh
yarn test
```

6. For prettier

```sh
yarn prettier:fix
```

7. For production build

```sh
yarn build
```

8. Eject the application (At your own risk)

```
yarn eject
```

README for

- [backend](backend/README.md)
- [frontend](frontend/README.md)
