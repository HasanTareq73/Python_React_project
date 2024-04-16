FROM node:21-alpine as builder

WORKDIR /app

COPY package*.json ./

# Install dependencies
RUN npm install
RUN npm run build

COPY public public
COPY src src

# Build the React app
RUN ls -la .
RUN npm run build
RUN ls -la .
RUN ls -la build

# Stage 2 - Use Nginx to serve the build output
FROM nginx:1.25-alpine-slim

# Copy the build output from the builder stage to the nginx server directory
COPY --from=builder /app/public /var/www/html/react-client/static
COPY --from=builder /app/build /var/www/html/react-client/static


CMD ["nginx", "-g", "daemon off;"]

