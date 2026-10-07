type Paper = {
  no: string;
  role: string;
  roleNote: string;
  title: string;
  authors: string;
  venue: string;
  year: string;
  publisher: string;
  doi: string;
  doiUrl: string;
  officialUrl: string;
  officialLabel: string;
  pdf: string;
  pdfMeta: string;
  finding: string;
  limitation: string;
};

const PAPERS: Paper[] = [
  {
    no: "01",
    role: "Base Paper",
    roleNote: "Primary foundation of this thesis",
    title:
      "AI-Driven Student Performance Prediction in Higher Education Using Multi-Source Educational Data",
    authors: "Mohammad AlShaikh-Hasan, Alessandro Pandini et al.",
    venue:
      "Proc. 2nd International Conference on Computational Intelligence Approaches and Applications (ICCIAA), Amman, Jordan, 12–14 May 2026, pp. 1–6",
    year: "2026",
    publisher: "IEEE",
    doi: "10.1109/icciaa68481.2026.11544019",
    doiUrl: "https://doi.org/10.1109/icciaa68481.2026.11544019",
    officialUrl: "https://bura.brunel.ac.uk/handle/2438/33681",
    officialLabel: "Brunel BURA Repository",
    pdf: "/papers/alshaikh-2026.pdf",
    pdfMeta: "PDF · 908 KB · 6 pages",
    finding: "952 records (Univ. of Petra IT), XGBoost 85.2% accuracy / AUC 0.96, TreeSHAP identifies CILO #1 as top risk factor.",
    limitation: "End-of-term prediction only; no early midterm checkpoint, no automated CLO/PLO attainment engine.",
  },
  {
    no: "02",
    role: "Attainment Reference",
    roleNote: "Automated CLO/PLO calculation model",
    title: "A Framework for Efficient and Accurate Automated CLO and PLO Assessment",
    authors:
      "Hafedh Mahmoud Zayani, Walid Abdelfattah, Rahma Sellami, Jihane Ben Slimane, Amani Kachoukh",
    venue: "Engineering, Technology & Applied Science Research (ETASR), Vol. 14, No. 4, pp. 13362–13368",
    year: "2024",
    publisher: "ETASR (Scopus, open access, CC-BY 4.0)",
    doi: "10.48084/etasr.6846",
    doiUrl: "https://doi.org/10.48084/etasr.6846",
    officialUrl: "https://etasr.com/index.php/etasr/article/view/6846",
    officialLabel: "ETASR Journal Page",
    pdf: "/papers/zayani-2024.pdf",
    pdfMeta: "PDF · 1.4 MB · 7 pages",
    finding: "Two-workbook Excel model (section-level + course-level) cuts assessment time by ~50% across 3 programs, Northern Border University.",
    limitation: "Spreadsheet-based and manual; no machine-learning prediction, no explainability layer.",
  },
  {
    no: "03",
    role: "Rules Reference",
    roleNote: "Curriculum-mapping audit logic",
    title: "A Rule-based Approach toward Automating the Assessments of Academic Curriculum Mapping",
    authors: "Abdullah Alshanqiti, Tanweer Alam, Mohamed Benaida, Abdallah Namoun, Ahmad Taleb",
    venue: "Int. Journal of Advanced Computer Science and Applications (IJACSA), Vol. 11, No. 12",
    year: "2020",
    publisher: "The Science and Information Organization",
    doi: "10.14569/IJACSA.2020.0111285",
    doiUrl: "https://doi.org/10.14569/IJACSA.2020.0111285",
    officialUrl:
      "https://thesai.org/Publications/ViewPaper?Code=IJACSA&Issue=12&SerialNo=85&Volume=11",
    officialLabel: "THESAI Publication Page",
    pdf: "/papers/alshanqiti-2020.pdf",
    pdfMeta: "PDF · 507 KB",
    finding: "Four curriculum-mapping quality rules (coverage 3–5 courses per outcome, I/R/E progression) embedded in a web audit tool.",
    limitation: "Human if-then rules only; nothing is learned from data, no student-risk prediction.",
  },
  {
    no: "04",
    role: "Department Anchor",
    roleNote: "Home-department precedent (supervisor co-authored)",
    title: "Mining Educational Data to Predict Students Performance: A Comparative Study of Data Mining Techniques",
    authors: "Khaledun Nahar, Boishakhe Islam Shova, Tahmina Ria, Humayara Binte Rashid, A. H. M. Saiful Islam",
    venue: "Education and Information Technologies (Springer), Vol. 26, No. 5, pp. 6051–6067",
    year: "2021",
    publisher: "Springer Nature",
    doi: "10.1007/s10639-021-10575-3",
    doiUrl: "https://doi.org/10.1007/s10639-021-10575-3",
    officialUrl: "https://link.springer.com/article/10.1007/s10639-021-10575-3",
    officialLabel: "Springer Article Page",
    pdf: "/papers/nahar-2021.pdf",
    pdfMeta: "PDF · 1.9 MB · 17 pages",
    finding: "80 NDUB CSE students; prerequisite marks predict lab performance (DT 64.28%), all-theory features predict final grade (NB 73.07%).",
    limitation: "Small cohort, WEKA only, no cross-validation, no OBE CLO/PLO linkage, no deployment.",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-white text-[#1a2332]">
      {/* Top bar */}
      <div className="bg-[#0f2a44] text-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-2 text-[12px] tracking-wide">
          <span className="uppercase opacity-80">Notre Dame University Bangladesh · Dept. of CSE</span>
          <span className="hidden sm:inline opacity-80">Thesis Reference Library · 2026</span>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-[#e2e8f0]">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#b8923e]">
            AI-Driven Automated OBE + Early PLO Prediction
          </p>
          <h1 className="font-serif-academic mt-3 text-3xl font-bold leading-tight text-[#0f2a44] sm:text-4xl">
            Core Reference Papers
          </h1>
          <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-[#5b6b7f]">
            The four published works this thesis builds on. Each entry carries its official
            publication page and a readable PDF copy. All items are published works with
            valid DOIs — no preprints.
          </p>
          <div className="mt-5 flex flex-wrap gap-2 text-[12px]">
            <span className="rounded-full border border-[#e2e8f0] px-3 py-1">4 core papers</span>
            <span className="rounded-full border border-[#e2e8f0] px-3 py-1">2020 – 2026</span>
            <span className="rounded-full border border-[#e2e8f0] px-3 py-1">IEEE · Springer · ETASR · IJACSA</span>
          </div>
        </div>
      </header>

      {/* Papers */}
      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-10">
        <div className="flex flex-col gap-8">
          {PAPERS.map((p) => (
            <article
              key={p.no}
              className="overflow-hidden rounded-lg border border-[#e2e8f0] bg-white shadow-[0_1px_3px_rgba(15,42,68,0.08)]"
            >
              {/* Card header */}
              <div className="flex items-start justify-between gap-4 border-b border-[#e2e8f0] bg-[#f7f9fc] px-6 py-4">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-serif-academic text-[13px] font-bold text-[#b8923e]">{p.no}</span>
                    <span className="rounded bg-[#0f2a44] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                      {p.role}
                    </span>
                  </div>
                  <p className="mt-1 text-[12px] italic text-[#5b6b7f]">{p.roleNote}</p>
                </div>
                <span className="shrink-0 rounded border border-[#e2e8f0] bg-white px-2.5 py-1 text-[12px] font-semibold text-[#0f2a44]">
                  {p.year}
                </span>
              </div>

              {/* Card body */}
              <div className="px-6 py-5">
                <h2 className="font-serif-academic text-xl font-bold leading-snug text-[#0f2a44]">
                  {p.title}
                </h2>
                <p className="mt-2 text-[14px] text-[#1a2332]">{p.authors}</p>
                <p className="mt-1 text-[13px] italic leading-relaxed text-[#5b6b7f]">{p.venue}</p>
                <p className="mt-1 text-[13px] text-[#5b6b7f]">
                  Publisher: <span className="font-medium text-[#1a2332]">{p.publisher}</span>
                  {" · "}DOI:{" "}
                  <a
                    href={p.doiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[12.5px] text-[#1b3a5c] underline decoration-[#b8923e] decoration-2 underline-offset-2"
                  >
                    {p.doi}
                  </a>
                </p>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded border-l-2 border-[#1b7a4d] bg-[#f2faf5] px-4 py-3">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#1b7a4d]">Key finding</p>
                    <p className="mt-1 text-[13.5px] leading-relaxed">{p.finding}</p>
                  </div>
                  <div className="rounded border-l-2 border-[#b8923e] bg-[#fdf9ef] px-4 py-3">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#8a6d2b]">Limitation → our gap</p>
                    <p className="mt-1 text-[13.5px] leading-relaxed">{p.limitation}</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-5 flex flex-col gap-3 border-t border-[#e2e8f0] pt-4 sm:flex-row">
                  <a
                    href={p.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded bg-[#0f2a44] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#1b3a5c]"
                  >
                    <span aria-hidden>⌖</span> View Publication — {p.officialLabel}
                  </a>
                  <a
                    href={p.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded border border-[#0f2a44] px-5 py-2.5 text-[14px] font-semibold text-[#0f2a44] transition-colors hover:bg-[#0f2a44] hover:text-white"
                  >
                    <span aria-hidden>⬇</span> Open PDF <span className="font-normal opacity-70">({p.pdfMeta})</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* References strip */}
        <section className="mt-10 rounded-lg bg-[#0f2a44] px-6 py-6 text-white">
          <h3 className="font-serif-academic text-lg font-bold">Formal reference list (copy-ready)</h3>
          <ol className="mt-3 flex flex-col gap-2 text-[13px] leading-relaxed opacity-90">
            <li>1. AlShaikh-Hasan, M., Pandini, A., et al. (2026). AI-Driven Student Performance Prediction in Higher Education Using Multi-Source Educational Data. Proc. IEEE ICCIAA, Amman, pp. 1–6. https://doi.org/10.1109/icciaa68481.2026.11544019</li>
            <li>2. Zayani, H. M., Abdelfattah, W., Sellami, R., Ben Slimane, J., Kachoukh, A. (2024). A Framework for Efficient and Accurate Automated CLO and PLO Assessment. ETASR 14(4), 13362–13368. https://doi.org/10.48084/etasr.6846</li>
            <li>3. Alshanqiti, A., Alam, T., Benaida, M., Namoun, A., Taleb, A. (2020). A Rule-based Approach toward Automating the Assessments of Academic Curriculum Mapping. IJACSA 11(12). https://doi.org/10.14569/IJACSA.2020.0111285</li>
            <li>4. Nahar, K., Shova, B. I., Ria, T., Rashid, H. B., Islam, A. H. M. S. (2021). Mining educational data to predict students performance. Educ. Inf. Technol. 26(5), 6051–6067. https://doi.org/10.1007/s10639-021-10575-3</li>
          </ol>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#e2e8f0] bg-[#f7f9fc]">
        <div className="mx-auto flex max-w-5xl flex-col gap-1 px-6 py-6 text-[12.5px] text-[#5b6b7f] sm:flex-row sm:items-center sm:justify-between">
          <span>OBE Thesis Reference Library · Ishtiaq Ahmed (0692320005101035) · Supervisor: Head, Dept. of CSE · Co-supervisor: Humayra Binte Rashid</span>
          <span>Built with Next.js + Tailwind · PDFs served locally for offline projection</span>
        </div>
      </footer>
    </div>
  );
}
