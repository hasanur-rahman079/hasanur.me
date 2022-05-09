import { v4 as uuidv4 } from "uuid";

const researchs = [
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

  {
    id: uuidv4(),
    title: "Research Assistant (Virtual)",
    institute:
      " Department of Pathology, College of Korean Medicine, Kyung Hee University",
    weblink: "https://khu.elsevierpure.com/en/persons/bonglee-kim/network/",
    address: "Seoul, 02447, Republic of Korea.",
    time: "Feb 2022 - Mar 2022",
    focus:
      "Molecular Signaling Pathways Design, Reviewing Cancer Immunotherapies.",
  },

  {
    id: uuidv4(),
    title: "Bioinformatician and Designer",
    institute: "Swift Integrity Computational Lab",
    weblink: "https://www.facebook.com/siclab.bd",
    address: "Savar, Dhaka, Bangladesh.",
    time: "Nov 2019 - Dec 2021",
    focus:
      "Anticancer Phytochemicals Analysis, Designing and Developing Molecular Biology Pathways",
  },

  {
    id: uuidv4(),
    title: "Research Fellow",
    institute: "Bangladesh University of Health Science (BUHS).",
    weblink: "https://www.researchgate.net/profile/Salima-Akter",
    address: "Dhaka, Bangladesh.",
    time: "Feb 2021 - Mar 2021",
    focus:
      "Under a Ministry of Education Research Project Titled: Effects of Insulin on Breast Cancer Growth and Proliferation Among Diabetic Patients in Bangladesh",
  },
];

// const professional = [
//   {
//     id: uuidv4(),
//     title: "Founder and CEO",
//     institute: "ExomeIT",
//     web: "https://exomeit.com/",
//     time: "Dec 2020 - Present",
//   },
// ];

export default researchs;

// const exportedObject = {
//   researchs,
//   review,
//   professional,
// };

// export default exportedObject;
