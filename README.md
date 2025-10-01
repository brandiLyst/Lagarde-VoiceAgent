# Fahrschule Lagarde - Website Prototype

Eine elegante, animierte Single-Page-Website für Fahrschule Lagarde mit einem modernen schwarz-weiß-roten Design.

## 🎨 Features

- **Elegantes Design** mit schwarz-weiß-roter Farbpalette
- **Vollständig animiert** mit Scroll-Effekten und Übergängen
- **Responsive Design** - funktioniert perfekt auf allen Geräten
- **Single Page** mit sanftem Scrollen zwischen Sektionen
- **Einbettungsbereiche** für Chatbot und Voice Bot
- **Moderne UI/UX** mit zeitgemäßen Best Practices

## 📁 Dateien

- `index.html` - Haupt-HTML-Struktur
- `styles.css` - Alle Styles und Animationen
- `script.js` - Interaktive Funktionen und Animationen
- `README.md` - Diese Datei

## 🚀 Verwendung

### Website öffnen

Öffnen Sie einfach die `index.html` Datei in Ihrem Browser:
- Doppelklick auf `index.html`
- Oder Rechtsklick → "Öffnen mit" → Ihren bevorzugten Browser wählen

### Chatbot & Voice Bot einbetten

#### Schritt 1: Öffnen Sie `index.html` in einem Texteditor

#### Schritt 2: Finden Sie die Einbettungsbereiche

Suchen Sie nach diesen zwei Abschnitten:

**Für den Chatbot** (Zeile ~143):
```html
<div class="embed-container" id="chatbot-embed">
    <!-- Your chatbot embed code goes here -->
    <div class="embed-placeholder">
        <p>Chatbot wird hier eingebettet</p>
        <small>Fügen Sie Ihren Embedding-Code in index.html ein</small>
    </div>
</div>
```

**Für den Voice Bot** (Zeile ~162):
```html
<div class="embed-container" id="voicebot-embed">
    <!-- Your voicebot embed code goes here -->
    <div class="embed-placeholder">
        <p>Voice-Bot wird hier eingebettet</p>
        <small>Fügen Sie Ihren Embedding-Code in index.html ein</small>
    </div>
</div>
```

#### Schritt 3: Ersetzen Sie den Platzhalter

Löschen Sie das `<div class="embed-placeholder">...</div>` und fügen Sie Ihren Embedding-Code ein:

**Beispiel:**
```html
<div class="embed-container" id="chatbot-embed">
    <!-- Ihr Chatbot-Code hier -->
    <iframe src="https://ihr-chatbot-link.com" width="100%" height="400px"></iframe>
</div>
```

#### Schritt 4: Speichern und aktualisieren

Speichern Sie die `index.html` und laden Sie die Seite in Ihrem Browser neu.

## 🎯 Sektionen

1. **Hero/Home** - Eindrucksvolle Startseite mit Call-to-Action
2. **Über uns** - Informationen über die Fahrschule mit Statistiken
3. **Leistungen** - 6 Service-Karten mit verschiedenen Angeboten
4. **Assistenten** - Bereiche für Chatbot und Voice Bot Integration
5. **Kontakt** - Kontaktinformationen und Formular
6. **Footer** - Navigation und Copyright

## 🎨 Farbschema

- **Primärrot**: `#dc143c`
- **Dunkelrot**: `#a00d2a`
- **Schwarz**: `#0a0a0a`
- **Weiß**: `#ffffff`
- **Hellgrau**: `#f5f5f5`

## ⚙️ Anpassungen

### Text ändern

Öffnen Sie `index.html` und bearbeiten Sie den Text direkt in den entsprechenden Abschnitten.

### Farben ändern

Öffnen Sie `styles.css` und ändern Sie die CSS-Variablen am Anfang der Datei:

```css
:root {
    --primary-red: #dc143c;
    --dark-red: #a00d2a;
    --black: #0a0a0a;
    --white: #ffffff;
    /* ... */
}
```

### Kontaktinformationen

Bearbeiten Sie die Kontaktinformationen im `#contact` Abschnitt in `index.html`:
- Adresse
- Telefonnummer
- E-Mail

## 📱 Responsive Breakpoints

- Desktop: > 968px
- Tablet: 568px - 968px
- Mobile: < 568px

## ✨ Animationen

Die Website enthält:
- Fade-in Animationen beim Laden
- Scroll-basierte Animationen
- Hover-Effekte auf allen interaktiven Elementen
- Parallax-Effekte im Hero-Bereich
- Animierte Statistik-Counter
- Schwebende Service-Icons

## 🌐 Browser-Kompatibilität

Getestet und funktioniert in:
- Chrome (empfohlen)
- Firefox
- Safari
- Edge

## 📝 Hinweise

- Die Website benötigt keine Installation oder Server
- Alle Dateien müssen im selben Ordner bleiben
- Internetverbindung erforderlich für Google Fonts
- Das Kontaktformular ist aktuell nur visuell (keine Backend-Integration)

## 🤝 Support

Bei Fragen oder Problemen können Sie:
1. Den Code in `index.html`, `styles.css` oder `script.js` überprüfen
2. Die Browser-Konsole für Fehlermeldungen öffnen (F12)
3. Sicherstellen, dass alle Dateien im selben Verzeichnis sind

---

Viel Erfolg mit Ihrer Fahrschule Lagarde Website! 🚗


