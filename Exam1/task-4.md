# ict-m324 - Task 1: Building and Package Management with NodeJS (JavaScript)

## Voraussetzungen

- Überprüfen Sie in einem Terminal mit `node -v` und `npm -v`, ob NPM korrekt installiert ist.
- Wenn nein, folgen Sie den Anweisungen hier (<https://docs.npmjs.com/downloading-and-installing-node-js-and-npm>). Überprüfen Sie mit obigen Befehlen, ob die Installation erfolgreich war.

## Build-Automatisierung mit Node.js

1. **Projekt Setup**:
   - Erstellen Sie ein neues privates Git Repo. Nennen Sie das Repo `M324`.
   - Fügen Sie mich als Owner hinzu: <roman.hatz@gibz.ch>
   - Kopieren Sie die URL ihres GitLab Projekts in das Abgabefeld in MS Forms.
   - Erstellen Sie ein neues Verzeichnis für diese Aufgabe und initialisieren Sie ein neues Node.js-Projekt.

     ```bash
     mkdir task-1
     cd task-1
     npm init
     ```

   - Sie können bei allen Eingabeaufforderungen den Default übernehmen (Return drücken).

   - Erstellen Sie eine `index.js` Datei:

     ```javascript
     // index.js
     console.log("Hello, World!");
     ```

2. **Script zum Starten des JS**:
   - Bearbeiten Sie die `package.json` Datei, um ein Startskript hinzuzufügen:

     ```json
     {
       "name": "my-project",
       "version": "1.0.0",
       "scripts": {
         // TIPP: hier hinzufügen
       },
       "dependencies": {}
     }
     ```

   - Führen Sie das Skript aus:

     ```bash
     npm run start
     ```

   - Das sollte die Nachricht "Hello, World!" in der Konsole ausgeben.

## Software Pakete installieren

- Installieren Sie ein Paket, das die Konsole einfärbt: <https://www.npmjs.com/package/chalk>:

```bash
npm install chalk
```

- Achten Sie darauf welche Dateien und Ordner angelegt werden.
- Fügen Sie eine `.gitignore` Datei hinzu und geben Sie den korrekten Inhalt ein.

- Verwenden Sie `chalk`, um die Ausgabe in der Konsole grün einzufärben.
- Tipps: Fügen Sie folgende Zeile im package.json hinzu und verwenden Sie import in der JS Datei:

```
  "type": "module",
```

## Software Pakete updaten

- Installieren Sie [npm-check-updates](https://www.npmjs.com/package/npm-check-updates). Installieren Sie dieses Paket global, es soll nicht im package.json landen (Tipp: mit `-g`)
- Da Sie das Paket gerade installiert haben, gibt es noch keine Updates. Ändern Sie die Version ihrer NPM Pakete, zB.
  "chalk": "^5.6.2" => "chalk": "^5.2.0"
- Führen Sie npm-check-updates aus und achten Sie auf die Ausgabe.
- Führen Sie das Update aus.

## Konflikte lösen

- Führen Sie `npm install eslint@3.12.1` aus.
- Anschliessend `npm install babel-eslint@10.1.0`
- Es tritt ein Problem auf. Achten Sie auf die Fehlerausgabe.
- Verwemden Sie `npm ls` und `npm explain`, um herauszufinden wo der Konflikt herkommt.
  Tipp: Sie müssen `npm uninstall eslint` verwenden, damit Sie `npm install babel-eslint@10.1.0` ausführen und dessen Dependencies untersuchen können.
- Fixen Sie den Fehler, damit `babel-eslint@10.1.0` installiert wird.

## Packages unterscheiden

- Bei NPM gibt es im package.json zwei Einträge: `devDependencies` statt `dependencies`. Recherchieren Sie was der Unterschied ist und ordnen Sie ihre Dependencies korrekt ein.
  Testen Sie mit `npm install --production`, ihre Applikation sollte noch lauffähig sein.

## Security Check

- Führen Sie `npm audit` aus. Was müssen Sie tun, damit es keine Audit Probleme mehr gibt?

## npm ci vs. npm install

- Installieren Sie ein beliebiges weiteres NPM Paket. Suchen Sie ein Paket bei <https://www.npmjs.com/> aus.
- Führen Sie `npm install [PAKETNAME]` aus. Verwenden Sie einen Git Client (oder `git status`) um zu sehen, ob und wo es im File System Änderungen gibt.
- Führen Sie anschliessend `npm ci` aus. Verwenden Sie einen Git Client (oder `git status`) um zu sehen, ob und wo es im File System Änderungen gibt.

## NPM Tools

- Recherchieren Sie was der Unterschied zwischen `npx` und `npm` ist. Erstellen Sie im package.json unter scripts einen neuen Eintrag, der die Nutzung von npx demonstriert.
