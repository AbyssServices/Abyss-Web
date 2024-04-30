FROM node:20.4-bookworm-slim
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 8080
CMD ["npm", "start"]
