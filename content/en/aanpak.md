## What we're building

### AI pipeline & methodology

The pipeline first generates several candidate summaries from the same article, then picks the best one for translation into Dutch.

![Diagram of the pipeline: summarization, readability evaluation, factuality evaluation and translation](pipeline.png)

Summarization top left, readability evaluation bottom right, factuality evaluation bottom left, and translation top right.

**Prompt engineering & personas.** Audience-targeted prompts, for example "explain this to a Dutch healthcare psychologist" or "explain this to a policy advisor." See the [prompts per audience](https://github.com/ubvu/wibt-tool/tree/main/prompts).

**Multiple open language models.** gpt-oss-120b and Gemma3-12b for summarization and evaluation, TranslateGemma-12b as the base for translation. Made available via [Nebula](https://networkinstitute.org/nebula/) (VU) and the [SURF AI Hub](https://www.surf.nl/en/themes/artificial-intelligence/projects-and-collaborations/ai-hub).

**LLM-as-a-judge for readability.** One evaluation agent scores each summary on sentence structure, language and jargon, information density and structure.

**Advocate, Skeptic and Adjudicator for factuality.** Two agents argue, sentence by sentence, for and against whether a claim follows from the source article. A third agent, the Adjudicator, decides.

**Evaluation with real users.** Factual accuracy is checked by the original authors and independent domain experts. Readability and usability are checked by healthcare psychologists and information specialists from the Dutch House of Representatives.

### Demo tool

A research prototype where users upload a scientific article as a PDF, choose an audience (general, healthcare psychologist, or information specialist at the House of Representatives), and generate a summary: a structured English version, an accessible plain-language Dutch version, and quality indicators for readability and factuality. Users can also compare different models, endpoints and temperature settings.

The tool is available in Dutch and English, built in Python and Marimo, and runs on models hosted on the VU Nebula AI infrastructure, the SURF AI Hub, and separate OpenAI-compatible endpoints. Code, prompts and documentation are open at [wibt-tool](https://github.com/ubvu/wibt-tool).

### Open code, prompts & data

- **Technical report.** Documentation of the pipeline, prompts, experiments and results, to be published via the [UKB Zenodo Community](https://zenodo.org/communities/ukb/).
- **Open GitHub repositories.** [wibt-tool](https://github.com/ubvu/wibt-tool) is the pipeline itself: agents, prompts per audience, a CLI and a Marimo GUI. Predecessors: [ResearchMadeReadable](https://github.com/ubvu/ResearchMadeReadable) and [Layman_Summaries](https://github.com/ubvu/Layman_Summaries). This repository is the public documentation and landing page.
- **Demonstration platform.** Built with Python and Marimo, used for workshops and evaluations.
- **Open-access publication**, to be published via the [VU Journal Browser](https://journalpublishingguide.vu.nl/).
- **Communication materials** for libraries (UKB, SHB), open access platforms such as [openjournals.nl](https://openjournals.nl/), publishers, discovery platforms (WorldCat, OpenAIRE), citizen-science platforms, and networks such as [NEWS – Science & Society](https://wetenschapensamenleving.nl/).
