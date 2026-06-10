FROM node:20-alpine

WORKDIR /app

# Enable the package manager bundled with the Node image.
RUN corepack enable

# Install dependencies in the image so Compose can start the app without host-side installs.
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Bring in the application source after dependencies are cached.
COPY . .

EXPOSE 5173

CMD ["yarn", "dev", "--host", "0.0.0.0", "--port", "5173"]
