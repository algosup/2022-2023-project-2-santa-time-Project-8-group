FROM alpine:latest

RUN apk update
RUN apk add npm
RUN apk add nodejs

WORKDIR /app
COPY . .
RUN npm init -y
RUN npm i express
RUN npm i suncalc
RUN npm i path
RUN npm i fs

# # Install OpenSSH and set the password for root to "Docker!". In this example, "apk add" is the install instruction for an Alpine Linux-based image.
# RUN apk add openssh \
#      && echo "root:Docker!" | chpasswd 

# # Copy the sshd_config file to the /etc/ssh/ directory
# COPY sshd_config /etc/ssh/

# # Copy and configure the ssh_setup file
# RUN mkdir -p /tmp
# COPY ssh_setup.sh /tmp
# RUN chmod +x /tmp/ssh_setup.sh \
#     && (sleep 1;/tmp/ssh_setup.sh 2>&1 > /dev/null)
# # Open port 2222 for SSH access
# EXPOSE 2222
# RUN chmod +x startup.sh && chown root:root /app
ENV PORT=443
EXPOSE 80 443

# ENTRYPOINT [ "./startup.sh" ]
CMD ["node", "./app.js"]