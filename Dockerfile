# Use official Node.js LTS image as base
FROM node:latest

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .
# Expose port 3000
EXPOSE 3000

# Start the Next.js production server
CMD ["npm", "run","dev"]
