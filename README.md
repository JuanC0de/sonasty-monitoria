# Hipersensibilidad I–IV — actividad web

Aplicación estática (Vue 3 + Vite + Tailwind CSS) para estudiantes de medicina: cuatro casos clínicos, tabla comparativa, mini quiz y contador de aciertos. Sin backend; los datos viven en `src/data/clinicalData.js`.

```bash
npm install
npm run dev
```

`npm run dev` arranca Vite con `--host`: podrás abrir la URL de **Network** desde otro dispositivo en la misma LAN (asegúrate de que el firewall permita el puerto que muestre la consola, p. ej. 5174).

```bash
npm run build   # salida en dist/
```

## Git: push a GitHub (`JuanC0de` sin mezclar con otra cuenta)

Si **`gh`** o el llavero usan otra cuenta (p. ej. `recibotcol`), HTTPS puede devolver **403**. **Recomendado:** SSH con una clave solo para **JuanC0de**, usada **únicamente en este repo** vía `core.sshCommand` (no hace falta editar `~/.ssh/config`).

1. Crea la clave y súbela en GitHub (**Settings → SSH and GPG keys**, sesión **JuanC0de**):

   ```bash
   ssh-keygen -t ed25519 -f ~/.ssh/id_ed25519_juanc0de -C "juabo008@gmail.com"
   pbcopy < ~/.ssh/id_ed25519_juanc0de.pub   # pegar en GitHub
   ```

2. Comprueba la clave (forzando el archivo, igual que Git):

   ```bash
   ssh -i ~/.ssh/id_ed25519_juanc0de -o IdentitiesOnly=yes -T git@github.com
   ```

   Debe salir *Hi JuanC0de!*.

3. Este clon ya tiene configurado `core.sshCommand` y el remoto `git@github.com:JuanC0de/sonasty-monitoria.git`. Empuja:

   ```bash
   git push -u origin main
   ```

Usa **otra ruta de clave** si la generaste con otro nombre:  
`git config core.sshCommand "ssh -i /ruta/a/tu_clave -o IdentitiesOnly=yes"`

**Alternativa:** `gh auth login` como **JuanC0de** y `gh auth switch -u JuanC0de` antes del push (cambia la cuenta activa en todo el sistema).
