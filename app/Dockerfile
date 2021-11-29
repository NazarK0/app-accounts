FROM node:16
ENV PORT 4200
ENV TZ=Europe/Kiev
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
EXPOSE ${PORT} 
WORKDIR /app
COPY package.json .
RUN npm install -g @angular/cli @angular-devkit/build-angular && npm install
COPY . .

# FROM base AS development
# RUN npm start

# FROM base AS production
# ENV NODE_PATH=./dist
# RUN npm run build --prod