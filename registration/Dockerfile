
FROM node:12.1.0-alpine

WORKDIR /app

COPY . .

RUN npm install
# if we are using sass or view templates
#RUN npm run sass

RUN npm test

#if we need to build or compile any files for production use
#RUN npm build

# Install app dependencies
#RUN npm install --production

EXPOSE 3000

CMD ["npm", "start"]
