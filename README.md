# RSB Green Tech

Sitio web hecho con React y Vite para RSB Green Tech.

## Desarrollo local

```bash
npm install
npm run dev
```

## Build de produccion

```bash
npm run build
```

El resultado queda en `dist/`. Los archivos dentro de `public/`, incluido `contact.php`, tambien se copian automaticamente a `dist/`.

## Despliegue automatico a Hostinger

Este proyecto ya incluye el workflow [deploy-hostinger.yml](./.github/workflows/deploy-hostinger.yml).

Como funciona:

1. Cada push a la rama `main` ejecuta `npm ci` y `npm run build`.
2. GitHub Actions publica el contenido de `dist/` en la rama `production`.
3. Hostinger debe quedar conectado por Git a la rama `production`.
4. Cuando `production` reciba cambios, Hostinger puede desplegar automaticamente esa rama a `public_html`.

## Configuracion inicial

### 1. Convertir esta carpeta en repositorio Git

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin TU_REPO_GITHUB
git push -u origin main
```

### 2. Verificar GitHub Actions

Despues del primer push:

1. Entra a GitHub -> `Actions`
2. Revisa el workflow `Build and publish for Hostinger`
3. Confirma que se haya creado o actualizado la rama `production`

### 3. Conectar Hostinger a la rama `production`

En hPanel:

1. `Websites` -> `Manage`
2. Busca `Git`
3. Crea un nuevo despliegue apuntando a tu repositorio
4. Selecciona la rama `production`
5. Deja vacio `Install Path` si quieres publicar en `/public_html`

Notas:

- El directorio de destino debe estar vacio la primera vez o el despliegue puede fallar.
- Si el repo es privado, usa SSH y agrega la llave publica de Hostinger en GitHub.

## Auto deploy de Hostinger

Despues de crear el repositorio en hPanel:

1. Activa `Auto Deployment`
2. Copia la URL de webhook que te da Hostinger
3. En GitHub entra a `Settings` -> `Webhooks`
4. Crea un webhook con esa URL
5. Usa el evento de `push`

Con eso, el flujo queda asi:

- Tu haces push a `main`
- GitHub Actions genera `production`
- GitHub dispara el webhook
- Hostinger despliega `production` automaticamente

## Estructura de ramas recomendada

- `main`: codigo fuente React/Vite
- `production`: build listo para Hostinger
