// export const getCompetitionDetails = (competition) => {
//   for (let i = 0; i < csCompetitions.length; i++) {
//       if (csCompetitions[i].hasOwnProperty(competition)) {
//           return csCompetitions[i][competition];
//       }

//   }

//   // Check General Competitions
//   for (let i = 0; i < generalCompetitions.length; i++) {
//       if (generalCompetitions[i].hasOwnProperty(competition)) {
//           return generalCompetitions[i][competition];
//       }
//   }

//   // Check Robotics Competitions
//   for (let i = 0; i < roboticsCompetitions.length; i++) {
//       if (roboticsCompetitions[i].hasOwnProperty(competition)) {
//           return roboticsCompetitions[i][competition];
//       }
//   }

//   for (let i = 0; i < esports.length; i++) {
//       if (esports[i].hasOwnProperty(competition)) {
//           return esports[i][competition];
//       }
//   }

//   return null;
// }

// const getCsComp = () => {
//   return csCompetitions;
// }

// const getGenComp = () => {
//   return generalCompetitions;
// }

// const getRoboComp = () => {
//   return roboticsCompetitions
// }

// const getEsportsComp = () => {
//   return esports
// }

// const getBill = (competitionName) => {
//   let bill = 0;
//   const allCompetitions = [...csCompetitions, ...generalCompetitions, ...roboticsCompetitions, ...esports];
//   for (let i = 0; i < allCompetitions.length; i++) {
//       if (allCompetitions[i].name === competitionName) {
//           bill = allCompetitions[i].price;
//           break;
//       }
//   }
//   return bill;
// }

export const competitionsCategories = [
  {
    name: "Robo and Electronics",
    img: "https://www.teknofestpakistan.com/wp-content/uploads/2024/09/Code-to-conquer_-300x300.jpg",
    id: "RE",
    description: 'jwefkenfe fe we d ewd e ded e ded e de  ed e de d e de de d ed'
  },
  {
    name: "Graphics and Animations",
    img: "https://www.teknofestpakistan.com/wp-content/uploads/2024/09/Code-to-conquer_-300x300.jpg",
    id: "GA",
    description: 'jwefkenfe fe we d ewd e ded e ded e de  ed e de d e de de d ed'
  },
  {
    name: "Engineering Competitions",
    img: "https://www.teknofestpakistan.com/wp-content/uploads/2024/09/Code-to-conquer_-300x300.jpg",
    id: "EC",
    description: 'jwefkenfe fe we d ewd e ded e ded e de  ed e de d e de de d ed'
  },
  {
    name: "Development and programming",
    img: "https://www.teknofestpakistan.com/wp-content/uploads/2024/09/Code-to-conquer_-300x300.jpg",
    id: "DP",
    description: 'jwefkenfe fe we d ewd e ded e ded e de  ed e de d e de de d ed'
  },
  {
    name: "Data Science and Artificial Intelligence",
    img: "https://www.teknofestpakistan.com/wp-content/uploads/2024/09/Code-to-conquer_-300x300.jpg",
    id: "DSAI",
    description: 'jwefkenfe fe we d ewd e ded e ded e de  ed e de d e de de d ed'
  },
  {
    name: "Cyber Security",
    img: "https://www.teknofestpakistan.com/wp-content/uploads/2024/09/Code-to-conquer_-300x300.jpg",
    id: "CS",
        description: 'jwefkenfe fe we d ewd e ded e ded e de  ed e de d e de de d ed'
  },
  {
    name: "Business and Finance",
    img: "https://www.teknofestpakistan.com/wp-content/uploads/2024/09/Code-to-conquer_-300x300.jpg",
    id: "BF",
        description: 'jwefkenfe fe we d ewd e ded e ded e de  ed e de d e de de d ed'
  },
];

const roboAndElectronics = [
  {
    name: "Robo Soccer",
    id: "RE01",
    maxEntry: 20,
    minMembers: 1,
    maxMembers: 5,
    price: 1500,
    img: "https://www.teknofestpakistan.com/wp-content/uploads/2024/09/Line_following_School-300x300.jpg",
  },
  {
    name: "Line Following Robot",
    id: "RE02",
    maxEntry: 20,
    minMembers: 1,
    maxMembers: 5,
    price: 1500,
    img: "https://www.teknofestpakistan.com/wp-content/uploads/2024/09/Line_following_School-300x300.jpg",
  },
  {
    name: "Robo Sumo",
    id: "RE03",
    maxEntry: 20,
    minMembers: 1,
    maxMembers: 5,
    price: 1500,
    img: "https://www.teknofestpakistan.com/wp-content/uploads/2024/09/Line_following_School-300x300.jpg",
  },
  {
    name: "Robo Race",
    id: "RE04",
    maxEntry: 20,
    minMembers: 1,
    maxMembers: 5,
    price: 1500,
    img: "https://www.teknofestpakistan.com/wp-content/uploads/2024/09/Line_following_School-300x300.jpg",
  },
];

const graphicsAndAnimations = [
  {
    name: "2D Animation Challenge",
    id: "GA01",
    maxEntry: 65,
    minMembers: 1,
    maxMembers: 3,
    price: 1000,
    img: "https://www.teknofestpakistan.com/wp-content/uploads/2024/09/2D-300x300.jpg",
  },
  {
    name: "3D Animation Challenge",
    id: "GA02",
    maxEntry: 65,
    minMembers: 1,
    maxMembers: 3,
    price: 1000,
    img: "https://www.teknofestpakistan.com/wp-content/uploads/2024/09/2D-300x300.jpg",
  },
  {
    name: "Brand identity blitz",
    id: "GA03",
    maxEntry: 65,
    minMembers: 1,
    maxMembers: 3,
    price: 1000,
    img: "https://www.teknofestpakistan.com/wp-content/uploads/2024/09/2D-300x300.jpg",
  },
];

const EngineeringCompetitions = [
  {
    name: "Bridge Building",
    id: "EC01",
    maxEntry: 30,
    minMembers: 1,
    maxMembers: 4,
    price: 2000,
    img: "https://www.teknofestpakistan.com/wp-content/uploads/2024/09/Line_following_School-300x300.jpg",
  },
  {
    name: "Catapult Challenge",
    id: "EC02",
    maxEntry: 30,
    minMembers: 1,
    maxMembers: 4,
    price: 2000,
    img: "https://www.teknofestpakistan.com/wp-content/uploads/2024/09/Line_following_School-300x300.jpg",
  },
]

const DevelopmentAndProgramming = [
  {
    name: "Hackathon",
    id: "DP01",
    maxEntry: 50,
    minMembers: 1,
    maxMembers: 6,
    price: 2500,
    img: "https://www.teknofestpakistan.com/wp-content/uploads/2024/09/Line_following_School-300x300.jpg",
  },
  {
    name: "Code Golf",
    id: "DP02",
    maxEntry: 50,
    minMembers: 1,
    maxMembers: 6,
    price: 2500,
    img: "https://www.teknofestpakistan.com/wp-content/uploads/2024/09/Line_following_School-300x300.jpg",
  },
]

const DataScienceAndArtificialIntelligence = [
  {
    name: "Data Science Challenge",
    id: "DSAI01",
    maxEntry: 40,
    minMembers: 1,
    maxMembers: 5,
    price: 3000,
    img: "https://www.teknofestpakistan.com/wp-content/uploads/2024/09/Line_following_School-300x300.jpg",
  },
  {
    name: "AI Competition",
    id: "DSAI02",
    maxEntry: 40,
    minMembers: 1,
    maxMembers: 5,
    price: 3000,
    img: "https://www.teknofestpakistan.com/wp-content/uploads/2024/09/Line_following_School-300x300.jpg",
  },
]

const CyberSecurity = [
  {
    name: "Capture the Flag",
    id: "CS01",
    maxEntry: 60,
    minMembers: 1,
    maxMembers: 4,
    price: 1500,
    img: "https://www.teknofestpakistan.com/wp-content/uploads/2024/09/Line_following_School-300x300.jpg",
  },
  {
    name: "Penetration Testing",
    id: "CS02",
    maxEntry: 60,
    minMembers: 1,
    maxMembers: 4,
    price: 1500,
    img: "https://www.teknofestpakistan.com/wp-content/uploads/2024/09/Line_following_School-300x300.jpg",
  },
]

const BusinessAndFinance = [
  {
    name: "Stock Market Simulation",
    id: "BF01",
    maxEntry: 70,
    minMembers: 1,
    maxMembers: 5,
    price: 1000,
    img: "https://www.teknofestpakistan.com/wp-content/uploads/2024/09/Line_following_School-300x300.jpg",
  },
  {
    name: "Business Plan Competition",
    id: "BF02",
    maxEntry: 70,
    minMembers: 1,
    maxMembers: 5,
    price: 1000,
    img: "https://www.teknofestpakistan.com/wp-content/uploads/2024/09/Line_following_School-300x300.jpg",
  },  
]

export const getCompetitionDetails = (id) => {
  switch (id) {
    case 'RE': {
      return roboAndElectronics;
    }
    case 'GA': {
      return graphicsAndAnimations;
    }
    case 'EC': {
      return EngineeringCompetitions;
    }
    case 'DP': {
      return DevelopmentAndProgramming;
    }
    case 'DSAI': {
      return DataScienceAndArtificialIntelligence;
    }
    case 'CS': {
      return CyberSecurity;
    }
    case 'BF': {
      return BusinessAndFinance;
    }
    default: {
      return null;
    }
  }
}

const getCompetition = (competition) => {
  for (let i = 0; i < competitionsCategories.length; i++) {
    if (competitionsCategories[i].hasOwnProperty(competition)) {
      return competitionsCategories[i][competition];
    }
  }

  for (let i = 0; i < roboAndElectronics.length; i++) {
    if (roboAndElectronics[i].hasOwnProperty(competition)) {
      return roboAndElectronics[i][competition];
    }
  }

  for (let i = 0; i < graphicsAndAnimations.length; i++) {
    if (graphicsAndAnimations[i].hasOwnProperty(competition)) {
      return graphicsAndAnimations[i][competition];
    }
  }

  for (let i = 0; i < EngineeringCompetitions.length; i++) {
    if (EngineeringCompetitions[i].hasOwnProperty(competition)) {
      return EngineeringCompetitions[i][competition];
    }
  }

  for (let i = 0; i < DevelopmentAndProgramming.length; i++) {
    if (DevelopmentAndProgramming[i].hasOwnProperty(competition)) {
      return DevelopmentAndProgramming[i][competition];
    }
  }

  for (let i = 0; i < DataScienceAndArtificialIntelligence.length; i++) {
    if (DataScienceAndArtificialIntelligence[i].hasOwnProperty(competition)) {
      return DataScienceAndArtificialIntelligence[i][competition];
    }
  }

  for (let i = 0; i < CyberSecurity.length; i++) {
    if (CyberSecurity[i].hasOwnProperty(competition)) {
      return CyberSecurity[i][competition];
    }
  }

  for (let i = 0; i < BusinessAndFinance.length; i++) {
    if (BusinessAndFinance[i].hasOwnProperty(competition)) {
      return BusinessAndFinance[i][competition
      ];
    }
  }

  return null;
}