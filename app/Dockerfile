FROM node:14 AS base
WORKDIR /app
COPY package.json .
RUN npm i && npx browserslist@latest --update-db
COPY . .

FROM base AS development
ENV PORT 4200
EXPOSE ${PORT} 
ENV TZ=Europe/Kiev
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
CMD npm start --host=0.0.0.0 --port 4200

FROM base AS production
RUN npm run build