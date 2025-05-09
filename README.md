# Lab08 - Frontend con React

Este proyecto es el frontend del Lab08, desarrollado con React. Puede ejecutarse localmente o desplegarse en [Render](https://render.com) sin problemas.

---

## 🚀 Pasos para desplegar el frontend

### 1. Clonar el repositorio

```bash
git clone https://github.com/ThiagoPharari/lab07-front-dwa.git
cd lab07-front-dwa
```

### 2. Instalar dependencias

Ejecuta el siguiente comando para instalar todas las dependencias necesarias:

```bash
npm install
```

### 3. Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto y define la siguiente variable:

```env
REACT_APP_BACK_URL=http://localhost:4000
```

> ⚠️ Si estás desplegando en **Render**, reemplaza el valor de `REACT_APP_BACK_URL` por la URL pública de tu backend desplegado, por ejemplo:

```env
REACT_APP_BACK_URL=https://mi-backend.onrender.com
```

### 4. Iniciar el servidor de desarrollo

Para ejecutar la aplicación localmente o cuando se despliegue:

```bash
npm start
```

---

## ✅ Notas

* Asegúrate de que la variable `REACT_APP_BACK_URL` apunte correctamente al backend, ya sea en local o en producción.
* Render detecta el uso de React y realiza el build automático si el repositorio está bien configurado.

---

Tu frontend ahora estará listo para conectarse al backend con JWT y funcionar correctamente en local o en la nube.
