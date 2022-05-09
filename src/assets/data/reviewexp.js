import { v4 as uuidv4 } from "uuid";

const reviews = [
  {
    id: uuidv4(),
    title: "Reviewer",
    journal:
      "Journal of Advanced Biotechnology and Experimental Therapeutics (JABET)",
    website: "https://www.bsmiab.org/jabet/",
    credentials:
      "https://publons.com/researcher/3858949/md-hasanur-rahman/peer-review/",
    date: "Mar 2021 - Present",
    articles: "4",
  },

  {
    id: uuidv4(),
    title: "Reviewer",
    journal: "Briefings in Bioinformatics",
    website: "https://academic.oup.com/bib",
    credentials:
      "https://drive.google.com/file/d/10IXEuZ6lPaCcMTO6V1gzIePDRn5oprJq/view",
    date: "Mar 2021 - Present",
    articles: "2",
  },
];

export default reviews;
