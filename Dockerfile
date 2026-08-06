FROM nginxinc/nginx-unprivileged:latest

# Permissions change karne ke liye temporary root user banna padega
USER root

# Tumhari website ka code copy karna
COPY . /usr/share/nginx/html

# OpenShift ke random user ko folders mein likhne ki permission dena
RUN mkdir -p /var/cache/nginx/client_temp && \
    chmod -R 777 /var/cache/nginx /var/run /etc/nginx/conf.d

# Wapas safe unprivileged user par switch karna (security ke liye)
USER 101

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
