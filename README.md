# **🎮 GameNode - Foro de Videojuegos**

## Proceso de Instalación

```bash
# Clonamos el repositorio:
git clone https://github.com/GameNode-Project/GameNode-Web.git 

# Una vez clonado, accedemos a la carpeta:
cd GameNode-Web

# Una vez dentro del proyecto, instalamos las dependencias:
npm install
```

> [!IMPORTANT]
> Si no tienes instalada la extensión oficial de Tailwind CSS, debes instalarla, te debería aparecer un panel en la parte derecha de debajo de tu pantalla para instalarla.

## Flujo de Git

- Cuando clonamos el repositorio, **git descarga todas las ramas que existen en remoto. Por defecto, aterrizarás en la main**.

- Como no tocamos la rama main, cambiamos a rama de desarrollo **dev**:
```bash
git switch dev
```

- Git detecta que existe una rama llamada **dev** en remoto, por lo que crea tu rama dev en local, la conecta con la del servidor y cambia todos para que se ajuste a lo que haya en dev.

- Ya con nuestra rama **dev** correctamente, vamos trabajando con ramas: 
```bash
# Creamos la rama de la nueva funcionalidad que queramos implementar
git checkout -b feature/... # En inglés

---

# Hacemos los commit en esta rama feature/...
git add . # O le damos al + para añadir todos los cambios en VSCode
git commit -m "" # En inglés o que genere el mensaje VSCode
git push origin feature/... # O le damos a publish branch en VSCODE

```

- Cuando terminemos, creamos el Pull Request desde GitHub siguiendo estos pasos: 

```
base: dev || compare: feature/...
```

```
Nos añadimos como creador: clickamos en assign yourself en el cuadro de la derecha que pone ASSIGNEES
```

```
Nos añadimos como revisores: clickamos en el icono de ajustes en el cuadro de la derecha que pone REVIEWERS
```

```
Añadimos la etiqueta correspondiente: clickamos en el icono de ajustes en el cuadro de la derecha que pone LABELS
  - Si añadimos una funcionalidad: enhancement
  - Si añadimos un cambio en la documentación: documentation
```

```
Los que esten de revisores revisan el codigo.
Para revisar el codigo: 
Para revisar a un compañero:

  1. git fetch origin (Actualizar lista de ramas).

  2. git switch nombre-rama-compañero (Cambiar a su código).

  3. npm install (IMPORTANTE: Asegurar dependencias).

  4. npm run dev (Probar el codigo)

Si está todo bien, aceptamos el Pull Request y BORRAMOS LA RAMA.

Si hay algun fallo, pones un comentario con los cambios sugeridos y quien haya creado el pull request lo corrige, el pull request se actualiza automaticamente con los nuevos cambios. Y cuando este correcto el revisor lo acepta

  - Una vez probado y aceptado volvemos a nuestra rama
  git switch nombre-de-tu-rama

  - Y eliminamos la rama del compañero al cual estavamos revisando
  git branch -d nombre-rama-compañero

```

- Cuando se acepta un Pull Request: 
```bash
# Volvemos a la rama dev
git switch dev

# Tremos los cambios que acabamos de mergear a dev en remoto a nuestro local
git pull origin dev

# Borramos la rama feature/... ya que aunque la hayamos borrado del remoto (GitHub) la rama sigue en local
git branch -d feature/...
```

> [!CAUTION]
> Bajar siempre los cambios del remoto a dev antes de hacer un pull request y antes de ponerse a trabajar:

  1.  Ve a dev y actualiza: git switch dev + git pull origin dev

  2. Vuelve a tu rama: git switch feature/mi-rama

  3. Fusiona lo nuevo: git merge dev

  4. Si hay conflictos, resuélvelos en local antes de subir.
