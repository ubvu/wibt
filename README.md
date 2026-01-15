# Wetenschap in begrijpelijke taal / Research Made Readable

> Making open access scientific articles understandable for Dutch-speaking non-academic audiences using open and trustworthy generative AI.

This repository documents **Wetenschap in begrijpelijke taal**, a collaboration between:

- [KB Nationale Bibliotheek](https://www.kb.nl/)
- [Vrije Universiteit Amsterdam – University Library](https://www.ub.vu.nl/)
- [VU AI & Behaviour group](https://vu.nl/en/about-vu/more-about/artificial-intelligence)
- [Parlement & Wetenschap](https://www.knaw.nl/nl/over-de-knaw/wat-doet-de-knaw/parlement-wetenschap)
- [SKILS – praktijk voor psychologie & coaching](https://www.skils.nl/)
- [SURF – AI-hub & Research Cloud](https://www.surf.nl/en)

The project explores how **large language models (LLMs)** can generate **reliable, readable lay summaries** of scientific articles in Dutch, tailored to real-world users such as **GZ-psychologists** and **policy advisors** in the Dutch parliament. 

---

## Table of contents

1. [Motivation](#motivation)
2. [Project goals](#project-goals)
3. [What we are building](#what-we-are-building)
   - [AI pipeline & methodology](#ai-pipeline--methodology)
   - [Demo tool (prototype)](#demo-tool-prototype)
   - [Open code, prompts & data](#open-code-prompts--data)
4. [Research background](#research-background)
5. [Project organisation](#project-organisation)
6. [Timeline & status](#timeline--status)
7. [Related repositories & projects](#related-repositories--projects)
8. [How to cite](#how-to-cite)
9. [Contact](#contact)
10. [License](#license)

---

## Motivation

Open science has made more and more research articles **freely accessible**, but *not* necessarily **understandable**.

- An estimated **40% of open access articles are read by non-academic audiences** (teachers, healthcare professionals, policy makers, citizens).  
  See *Open for All: Exploring the reach of open access content to non-academic audiences* (Wirsching et al., 2020).  
  <https://doi.org/10.5281/zenodo.4143313>
- These readers often struggle with **dense language, jargon and complex abstracts**, even when they have access. :contentReference[oaicite:1]{index=1}
- At the same time, **misinformation** is often written in **simple, compelling language** and spreads easily online. :contentReference[oaicite:2]{index=2}

Meanwhile, researchers are increasingly asked to:

- demonstrate **societal impact**,
- engage in **public engagement** and **citizen science**,
- and communicate research outcomes to wider audiences.

However, writing good lay summaries is **time-consuming** and requires skills not all researchers have.

Generative AI offers a potential solution — but **current tools are not transparent, not always reliable, and often depend on Big Tech ecosystems**. We need **open, evaluable and trustworthy** alternatives.

---

## Project goals

The project aims to design and validate an **AI-based method** that:

1. **Generates Dutch lay summaries** of scientific articles, tailored to:
   - GZ-psychologists and other healthcare professionals,
   - policy staff in ministries and parliament,
   - and other non-academic professionals.
2. Uses **open and/or publicly governed LLMs** wherever possible (e.g. [WiLLMa – GPT-NL](https://www.gpt-nl.nl/), accessible via [SURF AI-hub](https://www.surf.nl/en/surf-lab-large-language-models)).
3. Is **transparent and reproducible**:
   - open prompts,
   - open code,
   - documented pipeline and evaluation metrics.
4. Is **reliably grounded in the original research**:
   - minimising hallucinations and over-generalisation,
   - preserving nuance where it matters.
5. Can be **scaled** by libraries and content platforms, not only by individual researchers.

Ultimately, we want to **bridge the gap between open access and real-world understanding**, and strengthen the role of libraries as **trusted intermediaries** between science and society. 

---

## What we are building

### AI pipeline & methodology

We are designing a summarisation pipeline that combines:

- **Prompt engineering & personas**  
  Carefully designed system prompts for different audiences (e.g. *“Explain this to a Dutch GZ-psychologist”*, *“Explain this to a policy advisor at a ministry”*).  
  Example prompt repository: <https://github.com/ubvu/Layman_Summaries> :contentReference[oaicite:4]{index=4}
- **Multiple LLM configurations**  
  We experiment with:
  - open models (e.g. WiLLMa / GPT-NL, LLaMA, Mistral),
  - closed models (e.g. GPT-4.x, Gemini) for benchmarking,  
  comparing readability, factuality and relevance. :contentReference[oaicite:5]{index=5}
- **Retrieval-Augmented Generation (RAG)**  
  Connecting the model to the source article (PDF/BibTeX) to reduce hallucinations and ensure traceability.
- **Evaluation with real users**  
  - **Factuality** checked by subject librarians and domain experts,
  - **Readability & usefulness** evaluated by GZ-psychologists and parliamentary staff via surveys and interviews.
- **Automated metrics** (inspired by state-of-the-art research): :contentReference[oaicite:6]{index=6}  
  - Readability: Flesch–Kincaid, LIX, SARI, etc.  
  - Relevance & coverage: ROUGE, BERTScore, semantic similarity.  
  - Factuality & hallucination detection: model-assisted evaluation (e.g. MSumBench-style key-fact checking).

The methodology is informed by our literature review on **LLM-based lay summarisation** (*State of the Art in LLM-Generated Lay Summaries of Scientific Articles*). :contentReference[oaicite:7]{index=7}

---

### Demo tool (prototype)

We are building a **research prototype** (not production-ready) that allows users to:

1. Upload or select a scientific article (PDF/BibTeX).
2. Choose a **target audience** (e.g. *GZ-psychologist*, *policy advisor*, *journalist*).
3. Generate:
   - a structured expert-level summary,
   - an accessible Dutch lay summary,
   - and quality indicators (readability, length, etc.).
4. Inspect and compare different **model + prompt configurations**.

The prototype is developed as a **Streamlit** application and runs on:

- [SURF Research Cloud](https://www.surf.nl/en/surf-research-cloud), and/or
- [VU Nebula AI infrastructure](https://networkinstitute.org/),  
using compute and models made available via the [SURF AI-hub](https://www.surf.nl/en/surf-lab-large-language-models). 

The prototype code and configuration will be released (or linked) here once the first public version is stable.

---

### Open code, prompts & data

The project will deliver the following open resources: 

- **[D1] Technical report**  
  A detailed description of the LLM pipeline, prompts, evaluation setup and best-performing configurations.  
  Planned location: *UKB Zenodo community* – <https://zenodo.org/communities/ukb/>

- **[D2] Open GitHub repository with code, prompts & benchmark data**  
  - Example / predecessor:  
    - <https://github.com/ubvu/ResearchMadeReadable> – *AI-Powered Research Summary Platform*  
    - <https://github.com/ubvu/Layman_Summaries> – prompt templates for lay summaries
  - This repository (`github.io`) functions as the **public landing page** and documentation.

- **[D3] Demonstration platform (prototype)**  
  Streamlit-based UI, deployed on SURF Research Cloud / VU Nebula, for experimentation and workshops.

- **[D4] Open access scientific article**  
  A peer-reviewed publication describing findings and recommendations, to be submitted via the [VU Journal Browser](https://research.vu.nl/en/publications/).

- **[D5] Communication materials**  
  Tailored outputs for:
  - university & national libraries (UKB, SHB),
  - open access and diamond OA platforms (e.g. [openjournals.nl](https://openjournals.nl/)),
  - publishers (e.g. Elsevier),
  - discovery platforms (e.g. [WorldCat](https://www.worldcat.org/), [OpenAIRE](https://www.openaire.eu/)),
  - citizen science & knowledge platforms (e.g. [openresearch.amsterdam](https://openresearch.amsterdam/), [Kenniscloud](https://www.kenniscloud.nl/)),
  - science communication networks such as [NEWS – Wetenschap & Samenleving](https://wetenschapensamenleving.nl/). 

---

## Research background

For context, we maintain a **state-of-the-art overview** of LLM-generated lay summaries of scientific articles. Key high-level findings: :contentReference[oaicite:11]{index=11}

- **Readability**  
  - LLMs (especially GPT-4 variants) often produce **more readable** lay summaries than those written by researchers.
  - Readability scores can improve by up to ~80% in some benchmarks, while required education level drops.

- **Factuality & bias**  
  - Models sometimes **hallucinate** or **over-generalise**, especially when summarising subtle or uncertain findings.
  - There is evidence of **generalisation bias** in LLM summarisation of scientific research (e.g. Peters & Chin-Yee, 2025).

- **Human-in-the-loop**  
  - Best results come from **AI + human expert** workflows, where LLMs produce drafts and humans:
    - correct factual errors,
    - add nuance,
    - adapt tone for specific audiences.

- **Methodologies**  
  - Retrieval-Augmented Generation (RAG), multi-agent setups and automated prompt refinement loops significantly impact quality.
  - Evaluation frameworks increasingly combine:
    - automatic metrics (ROUGE, BERTScore, SARI, etc.),
    - LLM-based judges,
    - and human expert ratings.

The full slide deck:  
**State of the Art in LLM-Generated Lay Summaries of Scientific Articles** – internal project presentation. :contentReference[oaicite:12]{index=12}

---

## Project organisation

### Core team

- **Astrid van Wesenbeeck** – Project Coordinator / Chief Open Science, KB  
- **Maurice Vanderfeesten** – Library Liaison / Innovation Manager, VU University Library  
- **Michel Klein** – Methodology & Supervision, Associate Professor AI, VU AI & Behaviour  
- **Githa** – Methodology & Supervision, VU AI & Behaviour  
- **Geoffrey** – Prompt engineering, survey coordination, development (CS & Social Science)  
- **Heleen van Manen** – Program manager PICA & information skills, KB 

### User groups

- **Policy staff of the Dutch House of Representatives**  
  Contact: **Hugo van Bergen**, Parlement & Wetenschap  
- **GZ-psychologists & other mental health professionals**  
  Contact: **Ulrika Léons**, SKILS :contentReference[oaicite:14]{index=14}

These groups help define **information needs**, **acceptability of tone** and **practical usefulness** of the summaries.

### Governance

We work with:

- a **steering committee (stuurgroep)** that ensures alignment with user needs, infrastructure and institutional goals;
- an **advisory group (adviesgroep)** that safeguards **public values, open science principles and societal impact** (NEWS, SURF, Waag Future Lab, VU Impact Board, etc.). 

---

## Timeline & status

Total project duration: **12 months**. 

1. **Months 1–3 – Preparation**
   - Literature review and state-of-the-art mapping
   - Defining user requirements with GZ-psychologists & policy staff
   - Setting up infrastructure (RAG pipeline, LLM access, storage)
   - Defining and curating the text corpus

2. **Months 4–7 – Experiments**
   - Designing and testing multiple LLM + prompt configurations
   - Running structured experiments per target group
   - Collecting human evaluations on factuality & readability

3. **Months 8–9 – Analysis**
   - Analysing which combinations work best for which use cases
   - Deriving general recommendations for Dutch lay summarisation

4. **Months 10–11 – Reporting**
   - Technical report (D1)
   - Draft scientific paper (D4)
   - Internal documentation

5. **Month 12 – Dissemination**
   - Public demos & workshops
   - Communication to libraries, publishers and platforms
   - Preparing follow-up and scaling scenarios

Current status and milestones will be tracked in this repository via [Issues](./issues) and [Project boards](./projects) (once available).

---

## Related repositories & projects

- 🔬 **Research prototype & platform**  
  <https://github.com/ubvu/ResearchMadeReadable> – AI-powered research summary & evaluation platform  
- 🧠 **Prompt templates for lay summaries**  
  <https://github.com/ubvu/Layman_Summaries> – system prompts and examples for different audiences  
- 🇳🇱 **GPT-NL / WiLLMa Dutch LLM**  
  <https://www.gpt-nl.nl/> – Dutch language model project (WiLLMa), accessible via SURF AI-hub  
  SURF demo portal: <https://fred.surf.nl/>

- 📊 **Open access readership study**  
  *Open for All* (Wirsching et al., 2020): <https://doi.org/10.5281/zenodo.4143313>

This GitHub Pages site (`github.io`) serves as a **human-readable project overview** and pointer to these technical resources.

---

## How to cite

A suggested generic citation for the project (update once official publications are out):

> Vanderfeesten, M., van Wesenbeeck, A., Klein, M., et al. (2025). *Wetenschap in begrijpelijke taal: LLM-gebaseerde samenvattingen van wetenschappelijke artikelen voor niet-wetenschappelijke doelgroepen.* Project documentation, KB Nationale Bibliotheek & Vrije Universiteit Amsterdam. Retrieved from <https://ubvu.github.io/REPO-NAME/>

Replace `REPO-NAME` with the actual repository slug once final.

When the **technical report (D1)** and **journal article (D4)** are published, please prefer those formal citations.

---

## Contact

For questions, collaborations or workshop invitations:

- **Astrid van Wesenbeeck** – KB, Chief Open Science  
  `astrid.vanwesenbeeck@kb.nl`
- **Maurice Vanderfeesten** – VU University Library, Innovation Manager  
  `maurice.vanderfeesten@vu.nl`
- **Michel Klein** – VU AI & Behaviour  
  `michel.klein@vu.nl`

You can also open an issue in this GitHub repository for technical questions or suggestions.

---

## License

The **code** in the related repositories will use an open source license (e.g. MIT or Apache-2.0).  
The **content of this `README` and project documentation** is released under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), unless otherwise noted.
