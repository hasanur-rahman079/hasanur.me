import { v4 as uuidv4 } from "uuid";

const publications = [
  {
    id: uuidv4(),
    title:
      "Molecular pharmacology and therapeutic advances of the pentacyclic triterpene lupeol.",
    authors:
      "Sohag, A.A.M., Hossain, Md.T., Rahaman, Md.A., Rahman, P., Hasan, M.S., Das, R.C., Khan, M.K., Sikder, M.H., Alam, M., Uddin, M.J., Rahman, MD. H., Tahjib-Ul-Arif, Md., Islam, T., Moon, I.S. and Hannan, Md.A.",
    journal: "Phytomedicine",
    issue: "99, p.154012.",
    date: "25 February 2022",
    doi: "10.1016/j.phymed.2022.154012",
    if: "JCR IF: 5.340",
  },
  {
    id: uuidv4(),
    title:
      "Recent Advances in Ovarian Cancer: Therapeutic Strategies, Potential Biomarkers, and Technological Improvements.",
    authors:
      "Akter, S., Rahman, Md.A., Hasan, M.N., Akhter, H., Noor, P., Islam, R., Shin, Y., Rahman, MD. H., Gazi, Md.S., Huda, M.N., Nam, N.M., Chung, J., Han, S., Kim, B., Kang, I., Ha, J., Choe, W., Choi, T.G. and Kim, S.S.",
    journal: "Cells",
    issue: "11(4), p.650.",
    date: "13 February 2022",
    doi: "10.3390/cells11040650",
    if: "JCR IF: 6.6",
  },
  {
    id: uuidv4(),
    title:
      "p53 Modulation of Autophagy Signaling in Cancer Therapies: Perspectives Mechanism and Therapeutic Targets",
    authors:
      "Rahman, M.A., Park, M.N., Rahman, MD. H., Rashid, M.M., Islam, R., Uddin, M.J., Hannan, M.A. and Kim, B.",
    journal: "Frontiers in Cell and Developmental Biology",
    issue: "10",
    date: "26 January 2022",
    doi: "10.3389/fcell.2022.761080",
    if: "JCR IF: 6.684",
  },
  {
    id: uuidv4(),
    title:
      "A Comprehensive Review of Recent Advancements in Cancer Immunotherapy and Generation of CAR T Cell by CRISPR-Cas9.",
    authors:
      "Al Saber, Md., Biswas, P., Dey, D., Kaium, Md.A., Islam, Md.A., Tripty, M.I.A., Rahman, MD. H., Rahaman, T.I., Biswas, Md.Y., Paul, P., Rahman, Md.A., Hasan, Md.N. and Kim, B.",
    journal: "Processes",
    issue: "10(1)",
    date: "26 January 2022",
    doi: "10.3390/pr10010016",
    if: "JCR IF: 2.847",
  },
  {
    id: uuidv4(),
    title:
      "Potential Therapeutic Action of Autophagy in Gastric Cancer Managements: Novel Treatment Strategies and Pharmacological Interventions. ",
    authors:
      "Rahman, Md.A., Ahmed, K.R., Rahman, MD. H., Park, M.N. and Kim, B.",
    journal: "Frontiers in Pharmacology",
    issue: "12",
    date: "28 January 2022",
    doi: "10.3389/fphar.2021.813703",
    if: "JCR IF: 5.810",
  },
  {
    id: uuidv4(),
    title:
      "Efficacy of complementary medicine for nonsteroidal anti-inflammatory drug-induced small intestinal injuries: A narrative review.",
    authors: "Cho, M., Bu, Y., Park, J.W., Rahman, MD. H. & Ko, S.J.",
    journal: "Medicine",
    issue: "100, e28005.",
    date: "03 December 2021",
    doi: "10.1097/MD.0000000000028005",
    if: "JCR IF: 1.889",
  },
  {
    id: uuidv4(),
    title:
      "Evaluation of in vitro and in silico anti-inflammatory potential of some selected medicinal plants of Bangladesh against cyclooxygenase-II enzyme",
    authors:
      "Islam, M. A., Zilani, M. N. H., Biswas, P., Khan, D. A., Rahman, MD. H., Nahid, R., Nahar, N., Samad, A., Ahammad, F. & Hasan, M. N.",
    journal: "Journal of Ethnopharmacology",
    issue: "285, 114900.",
    date: "9 December 2021",
    doi: "10.1016/j.jep.2021.114900",
    if: "JCR IF: 4.360",
  },
  {
    id: uuidv4(),
    title:
      "Candidate Antiviral Drugs for COVID-19 and Their Environmental Implications: A Comprehensive Analysis. Environmental Science and Pollution Research",
    authors:
      "Biswas, P., Hasan, M. M., Dey, D., Dos Santos Costa, A. C., Polash, S. A., Bibi, S., Ferdous, N., Kaium, M. A., Rahman, MD. H., Jeet, F. K., Papakados, S., Islam, K. & Uddin, M. S.",
    journal: "Environmental Science and Pollution Research",
    issue: "28, 59570-59593.",
    date: "12 September 2021",
    doi: "10.1007/s11356-021-16096-3",
    if: "JCR IF: 4.223",
  },
  {
    id: uuidv4(),
    title:
      "Potential of Bioactive Food Components against Gastric Cancer: Insights into Molecular Mechanism and Therapeutic Targets",
    authors:
      "Kang, S. Y., Hwang, D., Shin, S., Park, J., Kim, M., Rahman, MD. H., Rahman, M. A., Ko, S.G. & Kim, B.",
    journal: "Cancers",
    issue: "13, 4502.",
    date: "7 September 2021",
    doi: "10.3390/cancers13184502",
    if: "JCR IF: 6.639",
  },
  {
    id: uuidv4(),
    title:
      "Analysis of SYK Gene as a Prognostic Biomarker and Suggested Potential Bioactive Phytochemicals as an Alternative Therapeutic Option for Colorectal Cancer: An In-Silico Pharmaco-Informatics Investigation.",
    authors:
      "Biswas, P., Dey, D., Rahman, A., Islam, M. A., Susmi, T. F., Kaium, M. A., Hasan, M. N., Rahman, MD. H., Mahmud, S., Saleh, M. A., Paul, P., Rahman, M. R., Al Saber, M., Song, H., Rahman, M. A. & Kim, B.",
    journal: "Journal of Personalized Medicine",
    issue: "11, 888",
    date: "6 September 2021",
    doi: "10.3390/jpm11090888",
    if: "JCR IF: 4.945",
  },
];

export default publications;
