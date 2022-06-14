FROM node:lts-alpine
#ENV NODE_ENV=development
WORKDIR /usr/src/app
RUN npm install -g npm@8.10.0

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install 

COPY . .
RUN chown -R node /usr/src/app
RUN yarn build
USER node
CMD ["yarn", "start"]
