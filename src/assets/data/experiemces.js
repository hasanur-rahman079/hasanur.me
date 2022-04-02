import { v4 as uuidv4 } from "uuid";

const research = [
  {
    id: uuidv4(),
    title: "Research Assistant",
    institute: " ABEx Bio-Research Center",
    weblink: "https://research.abexbio.com/research-groups/",
    address: "East Azampur, Dhaka-1230, Bangladesh.",
    time: "Aug 2019 - Present",
    focus:
      "Reviewing Emerging Research Findings, Molecular Pharmacology Strategies and Drug Designing Using In-Silico Techniques.",
  },
];

const review = [
  {
    id: uuidv4(),
    title:
      "Prevalence and Population Biology of Mastitis-causing Streptococcus Uberis Using an MLST Based Approach. Journal of Advanced Biotechnology and Experimental Therapeutics.",
    doi: "https://doi.org/10.5455/jabet.2021.d132",
    verificaiton:
      "https://publons.com/researcher/3858949/md-hasanur-rahman/peer-review/",
    credential:
      "https://drive.google.com/file/d/10K8wWFcgFYI84GI8GOyLzEqNLsn-BslH/view?usp=sharing",
    date: "Mar 2021",
  },
];

const professional = [
  {
    id: uuidv4(),
    title: "Founder and CEO",
    institute: "ExomeIT",
    web: "https://exomeit.com/",
    time: "Dec 2020 - Present",
  },
];

const exportedObject = {
  research,
  review,
  professional,
};

export default exportedObject;
