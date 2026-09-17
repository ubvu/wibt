# Partnerlogo's

Deze map is leeg omdat ik (Claude) in deze sandbox-omgeving geen toegang heb tot het open internet en dus geen officiële logo's van de partnerorganisaties kon downloaden. Ik wilde ook geen logo's "namaken", want dat zou het merk van KB, VU, SURF en de andere partners verkeerd kunnen weergeven.

## Wat ik nodig heb

Zet hier de officiële logobestanden neer, bij voorkeur als SVG (of PNG met transparante achtergrond, minimaal ~400px breed). Gebruik deze bestandsnamen, dan werkt de site automatisch zodra de bestanden er staan:

| Bestandsnaam | Organisatie |
|---|---|
| `kb.svg` | KB Nationale Bibliotheek |
| `vu-ub.svg` | Vrije Universiteit Amsterdam – UB |
| `vu-ai-behaviour.svg` | VU AI & Behaviour |
| `vu-open-science.svg` | VU Open Science |
| `nebula.svg` | Nebula – VU AI-infrastructuur |
| `parlement-wetenschap.svg` | Parlement & Wetenschap |
| `skils.svg` | SKILS |
| `surf.svg` | SURF AI-Hub |

Sommige van deze "organisaties" zijn interne programma's van de VU (AI & Behaviour, Open Science, Nebula) en delen mogelijk het VU-logo, of hebben geen eigen beeldmerk. Gebruik in dat geval gewoon `vu-ub.svg` nogmaals, of laat een bestand weg: de site valt dan terug op de organisatienaam als tekst.

## Daarna

Zodra de bestanden hier staan, werk ik `content/partners.md` bij zodat elk logo gekoppeld wordt aan de bijbehorende link. De opmaak (`assets/css/style.css`, sectie "Partners") staat al klaar: logo's worden in grijstinten getoond en krijgen kleur bij hover, met een vaste hoogte zodat alle logo's netjes op één lijn staan.
