# Get the proper golang image to run the app.
FROM node:alpine

# Add non-root user to be used in the second step.
RUN adduser -D appuser

# Set the current working directory inside the container.
WORKDIR /app

# Copy package.json and yarn.lock files.
COPY package.json yarn.lock ./

# Install all the dependencies.
RUN yarn install

# Copy the source code.
COPY . .

# Use a non-root user.
USER appuser

# CMD to run the app.
CMD ["yarn", "start"]
