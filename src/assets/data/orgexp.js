import { v4 as uuidv4 } from "uuid";

const organizings = [
  {
    id: uuidv4(),
    title: "Executive Member",
    name: "1st BSMIAB-COB International Conference on COVID-19 Pandemic",
    website: "https://www.bsmiab.org/conference-2020/",
    date: "Nov 2020",
  },

  {
    id: uuidv4(),
    title: "Managing Team Leader",
    name: "International Biotech Symposium 2021",
    website:
      "https://www.cobt.org/events/international-biotech-symposium-2021/",
    date: "Feb 2021",
  },

  {
    id: uuidv4(),
    title: "Executive Member",
    name: "2nd BSMIAB-COB International Conference on COVID-19 Pandemic",
    website:
      "https://www.cobt.org/events/2nd-bsmiab-cob-international-conference-on-covid-1/",
    date: "Nov 2021",
  },
];

export default organizings;
