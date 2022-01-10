# Notes

Para el frontend utilice React en la version ^16.8.6
Para el backend utilice express en la version ^4.17.2, junto con MySQL para la base de datos con version ^2.18.1.
En el backend:
-en la carpeta controllers cree el CRUD para la app y en la carpeta routes se encuentran las rutas para cada una de las funciones del controller
-En el archivo db se encuentra la conexion con la base de datos
-En el archivo app se realiza la importacion de rutas, la configuracion del puerto 

En el frontend:
-en la carpeta pages se encuentran las vista de las tareas y un popUp

Para la ejecucion de la app: 
Se debe ejecutar en tres terminales distintas
Para levantar el backend:
cd backend/
npm install
npm start

Para levantar la base de datos:
cd backend/
mysql -u root -p
password: contrasena

Para levantar el frontend:
cd frontend/
npm install
npm start

