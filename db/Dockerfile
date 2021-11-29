FROM node
WORKDIR /db
ENV PORT 3000
ENV TZ=Europe/Kiev
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
EXPOSE ${PORT} 
RUN npm install -g json-server
COPY . .
# RUN json-server --watch ./db.accounts.json
