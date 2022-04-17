import { v4 as uuidv4 } from "uuid";

const publications = [
  {
    id: uuidv4(),
    title:
      "Molecular pharmacology and therapeutic advances of the pentacyclic triterpene lupeol.",
    authors:
      "Abdullah Al Mamun Sohag, Md. Tahmeed Hossain, Md. ArifurRahaman, Papia Rahman, Mohammad Shahinul Hasan, Rakhal Chandr Das, Md Kibri Khan, Mahmudul Hasan Sikder, Mahboob Alam, Md Jamal Uddin, MD. Hasanur Rahman, Md.Tahjib-Ul-Arif, Tofazzal Islam, II Soo Moon, Md. Abdul Hannan",
    journal: "Phytomedicine",
    issue: "99, p.154012.",
    date: "25 February 2022",
    doi: "https://doi.org/10.1016/j.phymed.2022.154012",
    if: "JCR IF: 5.340",
  },
  {
    id: uuidv4(),
    title:
      "Recent Advances in Ovarian Cancer: Therapeutic Strategies, Potential Biomarkers, and Technological Improvements.",
    authors:
      "Salima Akter, Md. Ataur Rahman, Mohammad Nazmul Hasan, Hajara Akhter, Priya Noor, Rokibul Islam, Yoonhwa Shin, MD. Hasanur Rahman, Md. Shamim Gazi, Md Nazmul Huda, Nguyen Minh Nam, Jinwook Chung, Sunhee Han, Bonglee Kim, Insug Kang, Joohun Ha, Wonchae Choe, Tae Gyu Choi and Sung Soo Kim",
    journal: "Cells",
    issue: "11(4), p.650.",
    date: "13 February 2022",
    doi: "https://doi.org/10.3390/cells11040650",
    if: "JCR IF: 6.6",
  },
  {
    id: uuidv4(),
    title:
      "p53 Modulation of Autophagy Signaling in Cancer Therapies: Perspectives Mechanism and Therapeutic Targets",
    authors:
      "Md Ataur Rahman, Moon Nyeo Park,  MD Hasanur Rahman, Md Mamunur Rashid, Rokibul Islam, Md Jamal Uddin, Md Abdul Hannan and Bonglee Kim",
    journal: "Frontiers in Cell and Developmental Biology",
    issue: "10",
    date: "26 January 2022",
    doi: "https://doi.org/10.3389/fcell.2022.761080",
    if: "JCR IF: 6.684",
  },
  {
    id: uuidv4(),
    title:
      "A Comprehensive Review of Recent Advancements in Cancer Immunotherapy and Generation of CAR T Cell by CRISPR-Cas9.",
    authors:
      "Md. Al Saber, Partha Biswas, Dipta Dey, Md. Abu Kaium, Md. Aminul Islam, Miss Ismoth Ara Tripty, MD. Hasanur Rahman, Tanjim Ishraq Rahaman, Md. Yeaman Biswas, Priyanka Paul, Md. Ataur Rahman, Md. Nazmul Hasan and Bonglee Kim",
    journal: "Processes",
    issue: "10(1)",
    date: "26 January 2022",
    doi: "https://doi.org/10.3390/pr10010016",
    if: "JCR IF: 2.847",
  },
  {
    id: uuidv4(),
    title:
      "Potential Therapeutic Action of Autophagy in Gastric Cancer Managements: Novel Treatment Strategies and Pharmacological Interventions. ",
    authors:
      "Md. Ataur Rahman, Kazi Rejvee Ahmed, MD. Hasanur Rahman, Moon Nyeo Park and Bonglee Kim",
    journal: "Frontiers in Pharmacology",
    issue: "12",
    date: "28 January 2022",
    doi: "https://doi.org/10.3389/fphar.2021.813703",
    if: "JCR IF: 5.810",
  },
  {
    id: uuidv4(),
    title:
      "Evaluation of in vitro and in silico anti-inflammatory potential of some selected medicinal plants of Bangladesh against cyclooxygenase-II enzyme",
    authors:
      "Md AminulIslam, Md Nazmul Hasan Zilani, Partha Biswas, Dhrubo Ahmed Khan, Md Hasanur Rahman, Ruqayyah Nahid, Nazmun Nahar, Abdus Samad, Foysal Ahammad, Md Nazmul Hasan",
    journal: "Journal of Ethnopharmacology",
    issue: "285, 114900",
    date: "15 December 2021",
    doi: "https://doi.org/10.1016/j.jep.2021.114900",
    if: "JCR IF: 4.360",
  },
  {
    id: uuidv4(),
    title:
      "Efficacy of complementary medicine for nonsteroidal anti-inflammatory drug-induced small intestinal injuries: A narrative review.",
    authors:
      "Minji Cho, KMD, MS, Bu, Youngmin Bu, KMD, PhD, Jae-Woo Park, KMD, PhD,  Hasanur Rahman, MD, Seok-Jae Ko, KMD, PhD",
    journal: "Medicine",
    issue: "100, e28005.",
    date: "03 December 2021",
    doi: "https://doi.org/10.1097/MD.0000000000028005",
    if: "JCR IF: 1.889",
  },
  {
    id: uuidv4(),
    title:
      "Metabolite profiling, anti-inflammatory, analgesic potentials of edible herb Colocasia gigantea and molecular docking study against COX-II enzyme ",
    authors:
      "Md Nazmul Hasan Zilani, Md Aminul Islam, Partha Biswas, Md Anisuzzman, Hemayet Hossain, Jamil A. Shilpi, Md Nazmul Hasan, Md Golam Hossain",
    journal: "Journal of Ethnopharmacology",
    issue: "285, 114900.",
    date: "28 August 2021",
    doi: "https://doi.org/10.1016/j.jep.2021.114577",
    if: "JCR IF: 4.360",
  },
  {
    id: uuidv4(),
    title:
      "Candidate Antiviral Drugs for COVID-19 and Their Environmental Implications: A Comprehensive Analysis. Environmental Science and Pollution Research",
    authors:
      "Partha Biswas, Mohammad Mehedi Hasan, Dipta Dey, Ana Carla dos Santos Costa, Shakil Ahmed Polash, Shabana Bibi, Nadim Ferdous, Md. Abu Kaium, MD. Hasanur Rahman, Fardin Kamal Jeet, Stavros Papadakos, Khairul Islam and Md. Sahab Uddin",
    journal: "Environmental Science and Pollution Research",
    issue: "28, 59570-59593.",
    date: "12 September 2021",
    doi: "https://doi.org/10.1007/s11356-021-16096-3",
    if: "JCR IF: 4.223",
  },
  {
    id: uuidv4(),
    title:
      "Potential of Bioactive Food Components against Gastric Cancer: Insights into Molecular Mechanism and Therapeutic Targets",
    authors:
      "Seog Young Kang, Dongwon Hwang, Soyoung Shin, Jinju Park, Myoungchan Kim, MD. Hasanur Rahman, Md. Ataur Rahman, Seong-Gyu Ko and Bonglee Kim",
    journal: "Cancers",
    issue: "13, 4502.",
    date: "7 September 2021",
    doi: "https://doi.org/10.3390/cancers13184502",
    if: "JCR IF: 6.639",
  },
  {
    id: uuidv4(),
    title:
      "Analysis of SYK Gene as a Prognostic Biomarker and Suggested Potential Bioactive Phytochemicals as an Alternative Therapeutic Option for Colorectal Cancer: An In-Silico Pharmaco-Informatics Investigation.",
    authors:
      "Partha Biswas, Dipta Dey, Atikur Rahman, Md. Aminul Islam, Tasmina Ferdous Susmi, Md. Abu Kaium, Md. Nazmul Hasan, MD. Hasanur Rahman, Shafi Mahmud, Md. Abu Saleh, Priyanka Paul, Md Rezanur Rahman, Md. Al Saber, Hangyeul Song, Md. Ataur Rahman and Bonglee Kim",
    journal: "Journal of Personalized Medicine",
    issue: "11, 888",
    date: "6 September 2021",
    doi: "https://doi.org/10.3390/jpm11090888",
    if: "JCR IF: 4.945",
  },
  {
    id: uuidv4(),
    title:
      "Phytochemicals as a Complement to Cancer Chemotherapy: Pharmacological Modulation of the Autophagy-Apoptosis Pathway. Frontiers in Pharmacology",
    authors:
      "Md. Ataur Rahman1, Md. Abdul Hannan, Raju Dash, MD. Hasanur Rahman, Rokibul Islam, Md Jamal Uddin, Abdullah Al Mamun Sohag, Md. Habibur Rahman and Hyewhon Rhim",
    journal: "Frontiers in Pharmacology",
    issue: "12",
    date: "07 May 2021",
    doi: "https://doi.org/10.3389/fphar.2021.639628",
    if: "JCR IF: 5.810",
  },
  {
    id: uuidv4(),
    title:
      "Potential Therapeutic Role of Phytochemicals to Mitigate Mitochondrial Dysfunctions in Alzheimer’s Disease",
    authors:
      "Md. Ataur Rahman, MD. Hasanur Rahman, Partha Biswas, Md. Shahadat Hossain, Rokibul Islam, Md. Abdul Hannan, Md Jamal Uddin and Hyewhon Rhim",
    journal: "Antioxidants",
    issue: "10, 23",
    date: "28 December 2020",
    doi: "https://doi.org/10.3390/antiox10010023",
    if: "JCR IF: 6.313",
  },
  {
    id: uuidv4(),
    title:
      "Modulatory Effects of Autophagy on APP Processing as a Potential Treatment Target for Alzheimer’s Disease",
    authors:
      "Md. Ataur Rahman, Md Saidur Rahman, MD. Hasanur Rahman, Mohammad Rasheduzzaman, ANM Mamun-Or-Rashid, Md Jamal Uddin, Md Rezanur Rahman, Hongik Hwang, Myung-Geol Pang and Hyewhon Rhim",
    journal: "Biomedicines",
    issue: "9, 5",
    date: "24 December 2020",
    doi: "https://doi.org/10.3390/biomedicines9010005",
    if: "JCR IF: 6.313",
  },
  {
    id: uuidv4(),
    title:
      "Assessing drug repurposing option for emerging viral diseases: concerns, solutions, and challenges for forthcoming viral battles",
    authors:
      "Subyeta Binte Sarwar, Faiza Khondokar, Hiya Islam, Md. Asad Ullah, Yusha Araf, Bishajit Sarkar, MD. Hasanur Rahman",
    journal: "Journal of Advanced Biotechnology and Experimental Therapeutics",
    issue: "4(1), p.74.",
    date: "14 December 2020",
    doi: "https://doi.org/10.5455/jabet.2021.d109",
    if: "[Scopus Indexed]",
  },
  {
    id: uuidv4(),
    title:
      "Molecular Insights into the Multifunctional Role of Natural Compounds: Autophagy Modulation and Cancer Prevention",
    authors:
      "Md. Ataur Rahman, MD. Hasanur Rahman, Md. Shahadat Hossain, Partha Biswas, Rokibul Islam, Md Jamal Uddin, Md. Habibur Rahman and Hyewhon Rhim",
    journal: "Biomedicines",
    issue: "8, 517",
    date: "19 November 2020",
    doi: "https://doi.org/10.3390/biomedicines8110517",
    if: "JCR IF: 6.081",
  },
  {
    id: uuidv4(),
    title:
      "Pathogenesis, Diagnosis and Possible Therapeutic Options for COVID-19.",
    authors:
      "Md. Asad Ullah, Yusha Araf, Bishajit Sarkar, Abu Tayab Moin, Riyan Al Islam Reshad, MD. Hasanur Rahman",
    journal: "Journal of Clinical and Experimental Investigations",
    issue: "11(4), em00755",
    date: "07 Oct 2020",
    doi: "https://doi.org/10.29333/jcei/8564",
    if: "[DOAJ Indexed]",
  },
  {
    id: uuidv4(),
    title:
      "Analysis of plant-derived phytochemicals as anticancer agents targeting cyclin dependent kinase-2, human topoisomerase IIa and vascular endothelial growth factor receptor-2",
    authors:
      "Bishajit Sarkar , Md. Asad Ullah , Syed Sajidul Islam , MD. Hasanur Rahman & Yusha Araf",
    journal: "Journal of Receptors and Signal Transduction",
    issue: "41, 217-233",
    date: "13 Aug 2020",
    doi: "https://doi.org/10.1080/10799893.2020.1805628",
    if: "JCR IF: 2.092",
  },
  {
    id: uuidv4(),
    title:
      "Designing novel epitope-based polyvalent vaccines against herpes simplex virus-1 and 2 exploiting the immunoinformatics approach",
    authors:
      "Bishajit Sarkar, Md. Asad Ullah, Yusha Araf, Sowmen Das, Md. Hasanur Rahman & Abu Tayab Moin",
    journal: "Journal of Biomolecular Structure and Dynamics",
    issue: "pp.1–21",
    date: "7 Aug 2020",
    doi: "https://doi.org/10.1080/07391102.2020.1803969",
    if: "JCR IF: 3.549",
  },
  {
    id: uuidv4(),
    title:
      "Current knowledge on mechanisms involved in SARS-CoV-2 infection and kidney diseases",
    authors:
      "MD. Hasanur Rahman, Md. Sarwar Zahan, Tasnin Al Hasib, Kazi Ahsan Ahmed, Mushira Khanam, MD. Sadman Omit, Akhi Moni1, Md Jamal Uddin",
    journal: "Journal of Advanced Biotechnology and Experimental Therapeutics",
    issue: "3(4), p.30",
    date: "19 July 2020",
    doi: "https://doi.org/10.5455/jabet.2020.d153",
    if: "[Scopus Indexed]",
  },
  {
    id: uuidv4(),
    title:
      "Curcumin analogs as the inhibitors of TLR4 pathway in inflammation and their drug like potentialities: a computer-based study",
    authors:
      "Md. Asad Ullah, Fatema Tuz Johora, Bishajit Sarkar, Yusha Araf & MD.Hasanur Rahman",
    journal: "Journal of Receptors and Signal Transduction",
    issue: "40, 324-338",
    date: "30 Mar 2020",
    doi: "https://doi.org/10.1080/10799893.2020.1742741",
    if: "JCR IF: 2.092",
  },
];

export default publications;
