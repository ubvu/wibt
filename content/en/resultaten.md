## Results

We tested the pipeline on 59 scientific articles. Fourteen people from the target audiences rated 100 summaries in total for readability. Five independent experts and thirteen original authors together rated 49 summaries for factual accuracy.

| Figure | Meaning |
|---|---|
| 59 | scientific articles tested |
| 100 | readability ratings, from 14 audience members |
| 49 | factuality ratings, from experts and authors |
| 4.0 / 5 | median score for sentence structure and factuality |

*The underlying publication is still in preparation. The figures below come from the current draft and may change slightly.*

**Readability.** On a scale of 1 to 5, sentence structure, organization and comprehensibility scored a median of 4.0. Language use and information density landed almost exactly on their optimal score of 3.0: not too simple, not too complex. The overall readability score lagged a bit, with a median of 3.0. Participants often noted that individual sentences were too long or complicated to follow in one pass, partly due to the translation step into Dutch. Raters of the same summary regularly disagreed with each other, so readability is partly subjective. Healthcare psychologists rated some of the metrics higher than information specialists from the House of Representatives.

**Factuality.** Both factuality metrics scored a median of 4.0: how complete a summary was relative to the source article, and how reliable it was, meaning free of fabricated information. Original authors and independent experts rated factual accuracy comparably. External experts seem just as able to check summaries as the authors themselves.

**Language model as rater.** We also had a language model rate the summaries itself (LLM-as-judge). Its judgments systematically diverged from human judgments on almost every metric, and only ranked summaries similarly to humans for completeness. A human check therefore remains necessary for factual reliability.
