FROM nginx:1.15.2-alpine
COPY ./docs-dist /var/www
COPY ./docker/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]
