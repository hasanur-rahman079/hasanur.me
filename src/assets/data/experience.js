import { v4 as uuidv4 } from "uuid";
import { orglogo } from "../../constants";

const Experiences = {
  research: [
    {
      id: uuidv4(),
      img: orglogo.jabet,
      title: "Editorial Assistant",
      institute:
        "Journal of Advanced Biotechnology and Experimental Therapeutics",
      weblink: "https://www.bsmiab.org/jabet/editorial-board/",
      address: "South Korea, Seoul,",
      time: "Jun 2020 - Present",
      focus:
        "Reviewing Emerging Research Findings, Molecular Pharmacology Strategies and Drug Designing Using In-Silico Techniques.",
    },

    {
      id: uuidv4(),
      img: orglogo.abex,
      title: "Research Associate",
      institute: "ABEx Bio-Research Center",
      weblink: "https://research.abexbio.com/research-groups/",
      address: "East Azampur, Dhaka-1230, Bangladesh.",
      time: "Aug 2019 - Present",
      focus:
        "Reviewing Emerging Research Findings, Molecular Pharmacology Strategies and Drug Designing Using In-Silico Techniques.",
    },

    {
      id: uuidv4(),
      img: orglogo.khu,
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
      img: orglogo.sicl,
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
      img: orglogo.buhs,
      title: "Research Fellow",
      institute: "Bangladesh University of Health Science (BUHS).",
      weblink: "https://www.researchgate.net/profile/Salima-Akter",
      address: "Dhaka, Bangladesh.",
      time: "Feb 2021 - Mar 2021",
      focus:
        "Under a Ministry of Education Research Project Titled: Effects of Insulin on Breast Cancer Growth and Proliferation Among Diabetic Patients in Bangladesh",
    },
  ],

  profexps: [
    {
      id: uuidv4(),
      img: orglogo.exomeit,
      title: "Founder and CEO",
      name: "ExomeIT",
      website: "https://www.exomeit.com/",
      date: "Dec 2020 - Present",
      location: "Dhaka, Bangladesh",
      focus:
        " Under a Ministry of Education Research Project Titled: Effects of Insulin on Breast Cancer Growth and Proliferation Among Diabetic Patients in Bangladesh",
    },

    {
      id: uuidv4(),
      img: orglogo.cob,
      title: "Chief Creative & Branding Officer",
      name: "Community of Biotechnology (COB)",
      website: "https://www.cobt.org/about/leaders",
      date: "Sep 2020 - Present",
      location: "Dhaka, Bangladesh",
      focus:
        " Under a Ministry of Education Research Project Titled: Effects of Insulin on Breast Cancer Growth and Proliferation Among Diabetic Patients in Bangladesh",
    },
  ],

  organizings: [
    {
      id: uuidv4(),
      img: orglogo.bsmiabfirst,
      title: "Executive Member",
      name: "1st BSMIAB-COB International Conference on COVID-19 Pandemic",
      website: "https://www.bsmiab.org/conference-2020/",
      date: "Nov 2020",
      location: "Dhaka, Bangladesh",
      focus: "Managing all",
    },

    {
      id: uuidv4(),
      img: orglogo.ibs,
      title: "Managing Team Leader",
      name: "International Biotech Symposium 2021",
      website:
        "https://www.cobt.org/events/international-biotech-symposium-2021/",
      date: "Feb 2021",
      location: "Dhaka, Bangladesh",
      focus: "Managing all",
    },

    {
      id: uuidv4(),
      img: orglogo.bsmiabSecond,
      title: "Executive Member",
      name: "2nd BSMIAB-COB International Conference on COVID-19 Pandemic",
      website:
        "https://www.cobt.org/events/2nd-bsmiab-cob-international-conference-on-covid-1/",
      date: "Nov 2021",
      location: "Dhaka, Bangladesh",
      focus: "Managing all",
    },
  ],
};

// const experience = research.concat(profexps, organizings);

// export default experience;

export default Experiences;
