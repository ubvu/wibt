# Teksten bewerken

Alle tekst op de website (`index.html`) komt uit de `.md`-bestanden in deze map. Je hoeft geen HTML of code te kennen: pas een bestand aan zoals je een Word-document zou bewerken, met gewone Markdown-opmaak.

## Twee talen

De site is tweetalig. Elke taal heeft zijn eigen submap met exact dezelfde bestandsnamen:

- `content/nl/` — Nederlandse teksten (standaardtaal)
- `content/en/` — Engelse teksten

Pas je iets aan in `nl/motivatie.md`, werk dan ook `en/motivatie.md` bij zodat beide taalversies gelijk blijven lopen. De taalknop rechtsboven in de site (NL/EN) laat bezoekers zelf kiezen; hun keuze wordt onthouden voor een volgend bezoek.

Losse teksten die niet in een `.md`-bestand staan (menu-items, knoplabels, alt-tekst van de hero-afbeelding) staan in `assets/js/site.js`, bovenaan in het `UI`-object.

## Hoe werkt het?

- Elk bestand hoort bij één sectie van de pagina (zie de bestandsnamen hieronder).
- De site haalt deze bestanden automatisch op en zet ze om in de webpagina. Er is geen build-stap nodig: bewerk het bestand, commit en push, en de site is bijgewerkt.
- Werk je lokaal en wil je het resultaat zien? Open de site dan via een lokale server (bijvoorbeeld `python3 -m http.server` in de hoofdmap van de repository), niet door `index.html` rechtstreeks in de browser te openen. Anders kan de browser de tekstbestanden niet ophalen.

## Markdown-basis

```
# Kop 1
## Kop 2

Gewone alinea tekst. **Vet** en *cursief* werken zoals verwacht.

- Opsommingsteken
- Nog een punt

1. Genummerde lijst
2. Tweede punt

[Linktekst](https://example.com)

![Alt-tekst](bestandsnaam.png)
```

## Partnerlogo's met een naam eronder

In `partners.md` staat bij sommige VU-onderdelen (die hetzelfde VU-logo delen) een extra naam eronder, bijvoorbeeld:

```
- [![VU Open Science](assets/logos/vu-open-science.svg)](https://vu.nl/...)<span class="partner-name">Open Science</span>
```

Die `<span class="partner-name">...</span>` direct na de link is de tekst die klein onder het logo verschijnt. Laat 'm weg voor een partner met een eigen, herkenbaar logo.

## Afbeeldingen invoegen

Gebruik het pad **zoals gezien vanaf de website-root** (dus zonder `../` ervoor), bijvoorbeeld:

```
![Diagram van de pijplijn](pipeline.png)
```

## Bestandenoverzicht

| Bestand | Sectie op de pagina |
|---|---|
| `hero.md` | Titel, subtitel en knoppen bovenaan |
| `partners.md` | Samenwerkingspartners (onder de titel) |
| `motivatie.md` | Motivatie |
| `doelen.md` | Projectdoelen |
| `aanpak.md` | Wat we bouwen (pijplijn, demotool, open resources) |
| `resultaten.md` | Resultaten (inclusief cijfers-tabel) |
| `aanbevelingen.md` | Aanbevelingen |
| `onderzoekskader.md` | Onderzoekskader |
| `team.md` | Projectorganisatie (team, gebruikersgroepen, governance) |
| `tijdlijn.md` | Tijdlijn & status |
| `verder.md` | Gerelateerde repositories & projecten |
| `citeren.md` | Citeren |
| `contact.md` | Contact |
| `licentie.md` | Licentie |

## Een cijfer/tabel als opvallend blok

In `resultaten.md` staat een gewone Markdown-tabel met de kerncijfers. Die tabel wordt automatisch groter en opvallender weergegeven. Voeg je een rij toe of pas je een cijfer aan, dan verandert alleen de inhoud, niet de opmaak.
