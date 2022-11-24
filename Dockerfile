FROM nginx:alpine
COPY /dist/EjemploApiDocker /usr/share/nginx/html
EXPOSE 80