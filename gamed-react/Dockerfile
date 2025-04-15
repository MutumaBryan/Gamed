FROM node:18.21.1-alpine3.19
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev --prefer-offline
COPY . .
RUN npm run build

FROM nginx:1.25.3-alpine3.19
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
USER nginx
