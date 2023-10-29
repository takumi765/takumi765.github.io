const today = new Date();
console.log(typeof(today.getFullYear()));
const skillInfos_RAW = [
  {
    language: "C",
    peirod : {
      year : today.getFullYear()-2018,
      month: today.getMonth()-4,
    }
  },
  {
    language: "CSS",
    peirod : {
      year : today.getFullYear()-2019,
      month: today.getMonth()-3,
    }
  },
  {
    language: "HTML",
    peirod : {
      year : today.getFullYear()-2020,
      month: today.getMonth()-3,
    }
  },
  {
    language: "JavaScript",
    peirod : {
      year : today.getFullYear()-2021,
      month: today.getMonth()-10,
    }
  },
  {
    language: "TypeScript",
    peirod : {
      year : today.getFullYear()-2021,
      month: today.getMonth()-10,
    }
  },
  {
    language: "Python",
    peirod : {
      year : today.getFullYear()-2021,
      month: today.getMonth()-2,
    }
  },
  {
    language: "Visual Basic",
    peirod : {
      year : today.getFullYear()-2020,
      month: today.getMonth()-2,
    }
  },
  {
    language: "C#",
    peirod : {
      year : today.getFullYear()-2021,
      month: today.getMonth()-10,
    }
  },
  {
    language: "C++",
    peirod : {
      year : today.getFullYear()-2021,
      month: today.getMonth()-4,
    }
  },
  {
    language: "R",
    peirod : {
      year : today.getFullYear()-2023,
      month: today.getMonth()-4,
    }
  },
  {
    language: "PHP",
    peirod : {
      year : today.getFullYear()-2023,
      month: today.getMonth()-4,
    }
  },
  {
    language: "Docker",
    peirod : {
      year : today.getFullYear()-2023,
      month: today.getMonth()-4,
    }
  },
]

export default skillInfos_RAW;
