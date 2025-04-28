FROM node:18

RUN useradd -ms /bin/bash appuser

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . ./

COPY entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

RUN chown -R appuser:appuser /app

USER appuser

ENTRYPOINT ["/entrypoint.sh"]
