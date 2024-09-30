Proejct DevopsFrontend

DESCRIPTION

- This is a simple Frontend that render data about SHL (Swedish Hockey League) teams and players.
- The project also includes a CI/CD workflow that automatically tests the application, creates a Docker image, pushes it to Docker Hub, and notifies Render.com to auto-deploy the updated image.
- The project is the frontend part to render my backend data: https://github.com/MartinHDesign/devOpsBackend

FEATURES

- Display a homepage where you can select one of three SHL Hockey teams.
- Render nine players from selected team with picture and information of each player.

TECH STACK

- Node.js
- Vue.js
- Vite
- Axios
- TypeScript
- Docker
- Jest (for testing)
- Github Actions (for CI/CD)

REQUIREMENTS

- Github account
- Docker account
- Render.com account
- Node.js (Download from official Node.js webpage)
- Postgress database in cloud (Render.com can provide one)
- Devopsbackend project upp and running: https://github.com/MartinHDesign/devOpsBackend

INSTALLATION
To run the entire project

- 1.0 Clone repository

- 1.2 Build image: docker build -t docker-username/application-name .

  - 1.2.1 Push image: docker push docker-username/application-name:latest

- 1.3 Create new Web service from existing image(The image you pushed to hub.docker) on Render.com

  - 1.3.1 Add environment variables to your web service
    Environment variables required:
    - VITE_PLAYERS_URL
    - VITE_TEAM_URL

- 1.4 Add secrets to the repository in your github Actions secrets
  Required secrets:

  - DOCKER_PASSWORD
  - DOCKER_USERNAME
  - RENDER_HOOK_LATEST (Deploy hook provided by render.com)

- 2.0 Every push to the main branch will automatically build and deploy the updated Docker image to Render.com.
