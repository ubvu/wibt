## Wat we bouwen

### AI-pijplijn & methodiek

De pijplijn genereert eerst meerdere kandidaat-samenvattingen uit hetzelfde artikel en kiest daarna de beste voor vertaling naar het Nederlands.

![Diagram van de pijplijn: samenvatting, leesbaarheidsevaluatie, feitelijkheidsevaluatie en vertaling](pipeline.png)

Samenvatting linksboven, leesbaarheidsevaluatie rechtsonder, feitelijkheidsevaluatie linksonder en vertaling rechtsboven.

**Prompt engineering & persona's.** Doelgroepgerichte prompts, bijvoorbeeld "leg dit uit aan een Nederlandse GZ-psycholoog" of "leg dit uit aan een beleidsadviseur". Bekijk de [prompts per doelgroep](https://github.com/ubvu/wibt-tool/tree/main/prompts).

**Meerdere open taalmodellen.** gpt-oss-120b en Gemma3-12b voor samenvatting en evaluatie, TranslateGemma-12b als basis voor de vertaling. Beschikbaar gesteld via [Nebula](https://networkinstitute.org/nebula/) (VU) en de [SURF AI-Hub](https://www.surf.nl/en/themes/artificial-intelligence/projects-and-collaborations/ai-hub).

**LLM-as-a-judge voor leesbaarheid.** Eén evaluatie-agent scoort elke samenvatting op zinsbouw, taal en jargon, informatiedichtheid en structuur.

**Advocate, Skeptic en Adjudicator voor feitelijkheid.** Twee agents beargumenteren per zin voor en tegen of die uit het bronartikel volgt. Een derde agent, de Adjudicator, beslist.

**Evaluatie met echte gebruikers.** Feitelijke juistheid door de oorspronkelijke auteurs en onafhankelijke domeinexperts. Leesbaarheid en bruikbaarheid door GZ-psychologen en informatiespecialisten van de Tweede Kamer.

### Demotool

Een onderzoeksprototype waarmee gebruikers een wetenschappelijk artikel uploaden als PDF, een doelgroep kiezen (algemeen, GZ-psycholoog of informatiespecialist Tweede Kamer), en een samenvatting genereren: een gestructureerde Engelse versie, een toegankelijke Nederlandse publieksvriendelijke versie, en kwaliteitsindicatoren voor leesbaarheid en feitelijkheid. Gebruikers kunnen ook verschillende modellen, endpoints en temperature-instellingen vergelijken.

De tool is beschikbaar in het Nederlands en Engels, gebouwd in Python en Marimo, en draait op modellen bij de VU Nebula AI-infrastructuur, de SURF AI-Hub en losse OpenAI-endpoints. Code, prompts en documentatie staan open op [wibt-tool](https://github.com/ubvu/wibt-tool).

### Open code, prompts & data

- **Technisch rapport.** Documentatie van pijplijn, prompts, experimenten en resultaten, te publiceren via de [UKB Zenodo Community](https://zenodo.org/communities/ukb/).
- **Open GitHub-repositories.** [wibt-tool](https://github.com/ubvu/wibt-tool) is de pijplijn zelf: agents, prompts per doelgroep, CLI en Marimo-GUI. Voorgangers: [ResearchMadeReadable](https://github.com/ubvu/ResearchMadeReadable) en [Layman_Summaries](https://github.com/ubvu/Layman_Summaries). Deze repository is de publieke documentatie en landingspagina.
- **Demonstratieplatform.** Python- en Marimo-gebaseerd, gebruikt voor workshops en evaluaties.
- **Open-accesspublicatie**, te publiceren via de [VU Journal Browser](https://journalpublishingguide.vu.nl/).
- **Communicatiematerialen** voor bibliotheken (UKB, SHB), open access platforms zoals [openjournals.nl](https://openjournals.nl/), uitgevers, discovery-platforms (WorldCat, OpenAIRE), citizen-scienceplatforms en netwerken zoals [NEWS – Wetenschap & Samenleving](https://wetenschapensamenleving.nl/).
