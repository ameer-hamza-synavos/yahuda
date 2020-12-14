# pull official base image
FROM node:14.15.1-alpine
WORKDIR /app 

ENV PATH /app/node_modules/.bin:$PATH

COPY ./package.json ./
# COPY ./yarn.lock ./
RUN npm install -g nodemon
RUN yarn install

COPY . .

EXPOSE 5000

CMD [ "yarn", "dev" ]