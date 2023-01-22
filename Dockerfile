FROM node:18-alpine as build

# Create a directory for the app and set it as the working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install the dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy the source code
COPY . .

# Build the app
RUN npm run build

# ---

FROM nginx:1.19-alpine

# Copy the built app from the build stage
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Copy the NGINX configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose the port and start NGINX
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]