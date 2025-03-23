type AircraftTypes = "Fixed-wing" | "Rotary-wing" | "Tiltrotor" | "Unknown";

type AircraftMapping = {
  [key: string]: { name: string; type: AircraftTypes; manufacturer: string, image: string };
};

export const aircraftTypes: AircraftMapping = {
    EUFI: {
      name: "EUROFIGHTER 2000",
      type: "Fixed-wing",
      manufacturer: "EUROFIGHTER",
      image: "EUFI",
    },
    B350: {
      name: "Super King Air 350",
      type: "Fixed-wing",
      manufacturer: "BEECHCRAFT",
      image: "PROP",
    },
    K35R: {
      name: "KC-135R/T Stratotanker",
      type: "Fixed-wing",
      manufacturer: "BOEING",
      image: "4-ENG",
    },
    E50P: {
      name: "EMB-500 Phenom 100",
      type: "Fixed-wing",
      manufacturer: "EMBRAER",
      image: "PJ",
    },
    PC9: {
      name: "PC-9 Hudournik",
      type: "Fixed-wing",
      manufacturer: "PILATUS",
      image: "PROP",
    },
    EC45: {
      name: "EC-145",
      type: "Rotary-wing",
      manufacturer: "AIRBUS HELICOPTERS",
      image: "H60",
    },
    EH10: {
      name: "EH-101 Merlin",
      type: "Rotary-wing",
      manufacturer: "AGUSTA WESTLAND",
      image: "H60",
    },
    A400: {
      name: "A-400M Atlas",
      type: "Fixed-wing",
      manufacturer: "AIRBUS",
      image: "4-ENG",
    },
    H64: {
      name: "AH-64 Apache",
      type: "Rotary-wing",
      manufacturer: "MCDONNELL DOUGLAS",
      image: "APACHE",
    },
    LYNX: {
      name: "AW-159 Super Lynx",
      type: "Rotary-wing",
      manufacturer: "AGUSTAWESTLAND",
      image: "H60",
    },
    B52: {
      name: "B-52H Stratofortress",
      type: "Fixed-wing",
      manufacturer: "Boeing",
      image: "4-ENG",
    },
    G12T: {
      name: "G-120TP",
      type: "Fixed-wing",
      manufacturer: "GROB",
      image: "PROP"
    },
    H47: {
      name: "CH-47 Chinook",
      type: "Rotary-wing",
      manufacturer: "BOEING-VERTOL",
      image: "CHINOOK"
    },
    C17: {
      name: "C-17A Globemaster III",
      type: "Fixed-wing",
      manufacturer: "Boeing",
      image: "4-ENG",
    },
    C295: {
      name: "C-295 Persuader",
      type: "Fixed-wing",
      manufacturer: "CASA",
      image: "PROP"
    },
    CL60: {
      name: "CL-600 Challenger",
      type: "Fixed-wing",
      manufacturer: "BOMBARDIER",
      image: "PJ"
    },
    C130: {
      name: "C-130 Hercules",
      type: "Fixed-wing",
      manufacturer: "LOCKHEED",
      image: "4-ENG"
    },
    IL76: {
      name: "Il-76/82",
      type: "Fixed-wing",
      manufacturer: "ILYUSHIN",
      image: "4-ENG"
    },
    GLF5: {
      name: "Gulfstream 5",
      type: "Fixed-wing",
      manufacturer: "GULFSTREAM",
      image: "PJ"
    },
    TWR: {
      name: "TWR",
      type: "Fixed-wing",
      manufacturer: "N/A",
      image: "TOWER"
    },
    A332: {
      name: "A-330-200",
      type: "Fixed-wing",
      manufacturer: "AIRBUS",
      image: "2-ENG"
    },
    A139: {
      name: "AW-139",
      type: "Rotary-wing",
      manufacturer: "AGUSTA",
      image: "H60"
    },
    E3TF: {
      name: "E-3 Sentry (TF33)",
      type: "Fixed-wing",
      manufacturer: "BOEING",
      image: "4-ENG"
    },
    P8: {
      name: "P-8 Poseidon",
      type: "Fixed-wing",
      manufacturer: "BOEING",
      image: "2-ENG"
    },
    AT76: {
      name: "ATR-72-600",
      type: "Fixed-wing",
      manufacturer: "ATR",
      image: "PROP"
    },
    R135: {
      name: "RC-135S Cobra Ball",
      type: "Fixed-wing",
      manufacturer: "Boeing",
      image: "4-ENG"
    },
    B762: {
      name: "767-200",
      type: "Fixed-wing",
      manufacturer: "BOEING",
      image: "2-ENG"
    },
    B77W: {
      name: "777-300ER",
      type: "Fixed-wing",
      manufacturer: "BOEING",
      image: "2-ENG"
    },
    A148: {
      name: "An-148",
      type: "Fixed-wing",
      manufacturer: "ANTONOV",
      image: "2-ENG"
    },
    EC35: {
      name: "EC-135/635",
      type: "Rotary-wing",
      manufacturer: "AIRBUS HELICOPTERS",
      image: "H60"
    },
    GLEX: {
      name: "BD-700 Global 6000/6500",
      type: "Fixed-wing",
      manufacturer: "BOMBARDIER",
      image: "PJ"
    },
    F900: {
      name: "Falcon 900",
      type: "Fixed-wing",
      manufacturer: "DASSAULT",
      image: "PJ"
    },
    FA7X: {
      name: "Falcon 7X",
      type: "Fixed-wing",
      manufacturer: "DASSAULT",
      image: "PJ"
    },
    DH8B: {
      name: "DHC-8-200 Dash 8",
      type: "Fixed-wing",
      manufacturer: "DE HAVILLAND",
      image: "PROP"
    },
    AS65: {
      name: "MH-65D Dolphin",
      type: "Rotary-wing",
      manufacturer: "Eurocopter",
      image: "H60"
    },
    C5M: {
      name: "C-5M Super Galaxy",
      type: "Fixed-wing",
      manufacturer: "Lockheed",
      image: "4-ENG"
    },
    H60: {
      name: "UH-60 Black Hawk",
      type: "Rotary-wing",
      manufacturer: "SIKORSKY",
      image: "H60"
    },
    C560: {
      name: "560 Citation Ultra",
      type: "Fixed-wing",
      manufacturer: "CESSNA",
      image: "PJ"
    },
    D328: {
      name: "328",
      type: "Fixed-wing",
      manufacturer: "DORNIER",
      image: "PROP"
    },
    TEX2: {
      name: "T-6A Texan II",
      type: "Fixed-wing",
      manufacturer: "Raytheon",
      image: "PROP"
    },
    HAWK: {
      name: "T-45 Goshawk",
      type: "Fixed-wing",
      manufacturer: "BRITISH AEROSPACE",
      image: "JET"
    },
    C27J: {
      name: "C-27J Spartan",
      type: "Fixed-wing",
      manufacturer: "Alenia",
      image: "PROP"
    },
    A119: {
      name: "AW-119 Koala",
      type: "Rotary-wing",
      manufacturer: "AGUSTA",
      image: "H60"
    },
    C30J: {
      name: "C-130J Super Hercules",
      type: "Fixed-wing",
      manufacturer: "LOCKHEED MARTIN",
      image: "4-ENG"
    },
    BE9L: {
      name: "90 King Air",
      type: "Fixed-wing",
      manufacturer: "BEECH",
      image: "PROP"
    },
    BE20: {
      name: "200 Super King Air",
      type: "Fixed-wing",
      manufacturer: "BEECH",
      image: "PROP"
    },
    T38: {
      name: "T-38 Talon",
      type: "Fixed-wing",
      manufacturer: "NORTHROP",
      image: "JET"
    },
    TUCA: {
      name: "EMB-312 Tucano",
      type: "Fixed-wing",
      manufacturer: "EMBRAER",
      image: "PROP"
    },
    A149: {
      name: "AW-149",
      type: "Rotary-wing",
      manufacturer: "AGUSTA",
      image: "H60"
    },
    H160: {
      name: "H-160",
      type: "Rotary-wing",
      manufacturer: "AIRBUS HELICOPTERS",
      image: "H60"
    },
    E550: {
      name: "EMB-550 Praetor 600",
      type: "Fixed-wing",
      manufacturer: "EMBRAER",
      image: "PJ"
    },
    C208: {
      name: "208 Caravan",
      type: "Fixed-wing",
      manufacturer: "CESSNA",
      image: "PROP"
    },
    E35L: {
      name: "EMB-135 Legacy",
      type: "Fixed-wing",
      manufacturer: "EMBRAER",
      image: "PJ"
    },
    B737: {
      name: "737-700",
      type: "Fixed-wing",
      manufacturer: "BOEING",
      image: "2-ENG"
    },
    C172: {
      name: "172 Skyhawk",
      type: "Fixed-wing",
      manufacturer: "CESSNA",
      image: "PROP"
    },
    V22: {
      name: "V-22 Osprey",
      type: "Tiltrotor",
      manufacturer: "BELL-BOEING",
      image: "OSPREY"
    },
    LJ35: {
      name: "35",
      type: "Fixed-wing",
      manufacturer: "LEARJET",
      image: "PJ"
    },
    A21N: {
      name: "A-321neo",
      type: "Fixed-wing",
      manufacturer: "AIRBUS",
      image: "2-ENG"
    },
    C25A: {
      name: "525A Citation CJ2",
      type: "Fixed-wing",
      manufacturer: "CESSNA",
      image: "PJ"
    },
    AT45: {
      name: "ATR-42-500",
      type: "Fixed-wing",
      manufacturer: "ATR",
      image: "PROP"
    },
    CP23: {
      name: "CAP-230/1/2",
      type: "Fixed-wing",
      manufacturer: "MUDRY",
      image: "PROP"
    },
    H53S: {
      name: "CH-53 Super Stallion",
      type: "Rotary-wing",
      manufacturer: "SIKORSKY",
      image: "H60"
    },
    TBM7: {
      name: "TBM-700A/B/C",
      type: "Fixed-wing",
      manufacturer: "SOCATA",
      image: "PROP"
    },
    D228: {
      name: "228",
      type: "Fixed-wing",
      manufacturer: "DORNIER",
      image: "PROP"
    },
    UH1Y: {
      name: "UH-1Y",
      type: "Rotary-wing",
      manufacturer: "BELL",
      image: "H60"
    },
    B412: {
      name: "412",
      type: "Rotary-wing",
      manufacturer: "BELL",
      image: "H60"
    },
    BTB2: {
      name: "TB-2",
      type: "Fixed-wing",
      manufacturer: "BAYKAR",
      image: "DRONE"
    },
    GLF4: {
      name: "Gulfstream 4",
      type: "Fixed-wing",
      manufacturer: "GULFSTREAM",
      image: "PJ"
    },
    PC21: {
      name: "PC-21",
      type: "Fixed-wing",
      manufacturer: "PILATUS",
      image: "PROP"
    },
    DHC6: {
      name: "DHC-6 Twin Otter",
      type: "Fixed-wing",
      manufacturer: "DE HAVILLAND",
      image: "PROP"
    },
    SW4: {
      name: "C-26D Metro III",
      type: "Fixed-wing",
      manufacturer: "FAIRCHILD",
      image: "PROP"
    },
    B190: {
      name: "1900",
      type: "Fixed-wing",
      manufacturer: "BEECH",
      image: "PROP"
    },
    B788: {
      name: "787-8 Dreamliner",
      type: "Fixed-wing",
      manufacturer: "BOEING",
      image: "2-ENG"
    },
    S92: {
      name: "S-92 Helibus",
      type: "Rotary-wing",
      manufacturer: "SIKORSKY",
      image: "H60"
    },
    B212: {
      name: "212",
      type: "Rotary-wing",
      manufacturer: "BELL",
      image: "H60"
    },
    SR20: {
      name: "T-53A Kaydet II",
      type: "Fixed-wing",
      manufacturer: "Cirrus",
      image: "PROP"
    },
    Q4: {
      name: "RQ-4 Global Hawk",
      type: "Fixed-wing",
      manufacturer: "NORTHROP GRUMMAN",
      image: "DRONE"
    },
    M28: {
      name: "M-28 Skytruck",
      type: "Fixed-wing",
      manufacturer: "PZL-MIELEC",
      image: "PROP"
    },
    W3: {
      name: "W-3",
      type: "Rotary-wing",
      manufacturer: "PZL-SWIDNIK",
      image: "H60"
    },
    MI8: {
      name: "Mi-8/9/17/19/171/172",
      type: "Rotary-wing",
      manufacturer: "MIL",
      image: "H60"
    },
    E390: {
      name: "EMB-390",
      type: "Fixed-wing",
      manufacturer: "EMBRAER",
      image: "2-ENG"
    },
    E3CF: {
      name: "E-3 Sentry (CFM56)",
      type: "Fixed-wing",
      manufacturer: "BOEING",
      image: "4-ENG"
    },
    B703: {
      name: "707-300",
      type: "Fixed-wing",
      manufacturer: "BOEING",
      image: "4-ENG"
    },
    A319: {
      name: "A-319",
      type: "Fixed-wing",
      manufacturer: "AIRBUS",
      image: "2-ENG"
    },
    IL62: {
      name: "Il-62",
      type: "Fixed-wing",
      manufacturer: "ILYUSHIN",
      image: "2-ENG"
    },
    PC12: {
      name: "PC-12",
      type: "Fixed-wing",
      manufacturer: "PILATUS",
      image: "PROP"
    },
    L410: {
      name: "L-410 Turbolet",
      type: "Fixed-wing",
      manufacturer: "LET",
      image: "PROP"
    },
    H25B: {
      name: "Hawker 750/850",
      type: "Fixed-wing",
      manufacturer: "HAWKER BEECHCRAFT",
      image: "PJ"
    },
    E190: {
      name: "ERJ-190-100",
      type: "Fixed-wing",
      manufacturer: "EMBRAER",
      image: "2-ENG"
    },
    CN35: {
      name: "HC-144A Ocean Sentry",
      type: "Fixed-wing",
      manufacturer: "CASA",
      image: "PROP"
    },
    AT43: {
      name: "ATR-42-300",
      type: "Fixed-wing",
      manufacturer: "ATR",
      image: "PROP"
    },
    C650: {
      name: "650 Citation",
      type: "Fixed-wing",
      manufacturer: "CESSNA",
      image: "PJ"
    },
    PUMA: {
      name: "SA-330 Puma",
      type: "Rotary-wing",
      manufacturer: "AEROSPATIALE",
      image: "H60"
    },
    T204: {
      name: "Tu-204/214/224/234",
      type: "Fixed-wing",
      manufacturer: "TUPOLEV",
      image: "2-ENG"
    },
    C501: {
      name: "501 Citation 1SP",
      type: "Fixed-wing",
      manufacturer: "CESSNA",
      image: "PJ"
    },
    F260: {
      name: "SF-260",
      type: "Fixed-wing",
      manufacturer: "AERMACCHI",
      image: "PROP"
    },
    KC2: {
      name: "C-2",
      type: "Fixed-wing",
      manufacturer: "KAWASAKI",
      image: "2-ENG"
    },
    E737: {
      name: "737-700 AEWC",
      type: "Fixed-wing",
      manufacturer: "BOEING",
      image: "2-ENG"
    },
    AS32: {
      name: "AS-332 Super Puma",
      type: "Rotary-wing",
      manufacturer: "AEROSPATIALE",
      image: "H60"
    },
    B738: {
      name: "737-800",
      type: "Fixed-wing",
      manufacturer: "BOEING",
      image: "2-ENG"
    },
    B773: {
      name: "777-300",
      type: "Fixed-wing",
      manufacturer: "BOEING",
      image: "2-ENG"
    },
    ATLA: {
      name: "Atlantic",
      type: "Fixed-wing",
      manufacturer: "BREGUET",
      image: "PROP"
    },
    E314: {
      name: "EMB-314 Super Tucano",
      type: "Fixed-wing",
      manufacturer: "EMBRAER",
      image: "PROP"
    },
    B38M: {
        name: "737 MAX 8",
        type: "Fixed-wing",
        manufacturer: "BOEING",
        image: "2-ENG",
      },
      SF34: {
        name: "340",
        type: "Fixed-wing",
        manufacturer: "SAAB",
        image: "PROP",
      },
      G115: {
        name: "G-115",
        type: "Fixed-wing",
        manufacturer: "GROB",
        image: "PROP",
      },
      AN26: {
        name: "An-26",
        type: "Fixed-wing",
        manufacturer: "ANTONOV",
        image: "PROP",
      },
      GLF6: {
        name: "G650",
        type: "Fixed-wing",
        manufacturer: "GULFSTREAM",
        image: "PJ",
      },
      B752: {
        name: "757-200",
        type: "Fixed-wing",
        manufacturer: "BOEING",
        image: "2-ENG",
      },
      IL96: {
        name: "Il-96",
        type: "Fixed-wing",
        manufacturer: "ILYUSHIN",
        image: "2-ENG",
      },
      PC6T: {
        name: "PC-6 Turbo-Porter",
        type: "Fixed-wing",
        manufacturer: "PILATUS",
        image: "PROP",
      },
      E121: {
        name: "EMB-121 Xingu",
        type: "Fixed-wing",
        manufacturer: "EMBRAER",
        image: "PROP",
      },
      E145: {
        name: "ERJ-145",
        type: "Fixed-wing",
        manufacturer: "EMBRAER",
        image: "2-ENG",
      },
      F5: {
        name: "F-5 Tiger 2",
        type: "Fixed-wing",
        manufacturer: "NORTHROP",
        image: "JET",
      },
      ASTR: {
        name: "Gulfstream G100",
        type: "Fixed-wing",
        manufacturer: "GULFSTREAM AEROSPACE",
        image: "PJ",
      },
      A359: {
        name: "A-350-900",
        type: "Fixed-wing",
        manufacturer: "AIRBUS",
        image: "2-ENG",
      },
      F100: {
        name: "FOKKER 100",
        type: "Fixed-wing",
        manufacturer: "FOKKER",
        image: "2-ENG",
      },
      EN48: {
        name: "TH-28",
        type: "Rotary-wing",
        manufacturer: "ENSTROM",
        image: "H60",
      },
      B06: {
        name: "206 JetRanger",
        type: "Rotary-wing",
        manufacturer: "BELL",
        image: "H60",
      },
      PC7: {
        name: "PC-7 Astr",
        type: "Fixed-wing",
        manufacturer: "PILATUS",
        image: "PROP",
      },
      P180: {
        name: "P-180 Avanti",
        type: "Fixed-wing",
        manufacturer: "PIAGGIO",
        image: "PJ",
      },
      AS50: {
        name: "AS-350 Ecureuil",
        type: "Rotary-wing",
        manufacturer: "AEROSPATIALE",
        image: "H60",
      },
      HRON: {
        name: "Heron Drone",
        type: "Fixed-wing",
        manufacturer: "IAI",
        image: "DRONE",
      },
      C68A: {
        name: "680 Citation Latitude",
        type: "Fixed-wing",
        manufacturer: "CESSNA",
        image: "PJ",
      },
      F15: {
        name: "F-15 Eagle",
        type: "Fixed-wing",
        manufacturer: "MCDONNELL-DOUGLAS",
        image: "JET",
      },
      MF17: {
        name: "T-17 Supporter",
        type: "Fixed-wing",
        manufacturer: "SAAB",
        image: "PROP",
      },
      FA50: {
        name: "Falcon 50",
        type: "Fixed-wing",
        manufacturer: "DASSAULT",
        image: "PJ",
      },
      FA10: {
        name: "Falcon 100",
        type: "Fixed-wing",
        manufacturer: "DASSAULT",
        image: "PJ",
      },
      GL5T: {
        name: "BD-700 Global 5000/5500",
        type: "Fixed-wing",
        manufacturer: "BOMBARDIER",
        image: "PJ",
      },
      B744: {
        name: "747-400",
        type: "Fixed-wing",
        manufacturer: "BOEING",
        image: "4-ENG",
      },
      A345: {
        name: "A-340-500",
        type: "Fixed-wing",
        manufacturer: "AIRBUS",
        image: "4-ENG",
      },
      F2TH: {
        name: "Falcon 2000",
        type: "Fixed-wing",
        manufacturer: "DASSAULT",
        image: "PJ",
      },
      EXPL: {
        name: "MD-900 Explorer",
        type: "Rotary-wing",
        manufacturer: "MCDONNELL-DOUGLAS",
        image: "H60",
      },
      A20N: {
        name: "A-320ne",
        type: "Fixed-wing",
        manufacturer: "AIRBUS",
        image: "2-ENG",
      },
      A321: {
        name: "A-321",
        type: "Fixed-wing",
        manufacturer: "AIRBUS",
        image: "2-ENG",
      },
      C2: {
        name: "C-2A Greyhound",
        type: "Fixed-wing",
        manufacturer: "GRUMMAN",
        image: "2-ENG"
      },
      BE40: {
        name: "T-1A Jayhawk",
        type: "Fixed-wing",
        manufacturer: "BEECHCRAFT",
        image: "PJ"
      },
      E2: {
        name: "E-2 Hawkeye",
        type: "Fixed-wing",
        manufacturer: "NORTHROP GRUMMAN",
        image: "2-ENG",
      },
      E6: {
        name: "E-6B Mercury",
        type: "Fixed-wing",
        manufacturer: "BOEING",
        image: "4-ENG"
      },
      P28A: {
        name: "2006 PA-28-140/150/160/180",
        type:"Fixed-wing",
        manufacturer: "PIPER",
        image: "PROP",
      },
      C182: {
        name: "1978 182 Skylane",
        type: "Fixed-wing",
        manufacturer: "CESSNA",
        image: "PROP",
      }
    };