FROM nginx:alpine

COPY . /usr/share/nginx/html

EXPOSE 80
HEAD


CMD ["nginx", "-g", "daemon off;"]
86ff8cc36194ef0022eed4c1dd4413d1e2a33997
