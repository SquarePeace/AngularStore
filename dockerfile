# Stage 0: compile angular frontend
FROM node:alpine3.12 as build
WORKDIR /app
COPY . . 
RUN npm install
RUN npm run build --prod


# Stage 1: serve app with nginx server
FROM nginx:1.19.3-alpine
COPY --from=build /app/dist/AngularAppProof  /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80