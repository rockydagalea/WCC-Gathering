const timeZoneMap = {
  "America/Denver": "Mountain Time",
  "America/New_York": "Eastern Time",
  "America/Los_Angeles": "Pacific Time",
  "America/Chicago": "Central Time",
};

const scheduleData = {
  Wednesday: {
    "America/Denver": [
      //Mountain Time

      [
        "4:30 am",
        "Wednesday",
        "Prayer Meeting",
        "Calgary South",
        "93837702697",
        "418418",
      ],

      [
        "6:00 pm",
        "Wednesday",
        "Prayer Meeting",
        "Winnipeg North",
        "99331669339",
        "northwin",
      ],
      [
        "6:00 pm",
        "Wednesday",
        "Prayer Meeting",
        "Winnipeg Central",
        "93565651551",
        "centralwin",
      ],
      [
        "6:00 pm",
        "Wednesday",
        "Prayer Meeting",
        "Winnipeg East",
        "98932231333",
        "eastwin",
      ],
      [
        "6:00 pm",
        "Wednesday",
        "Prayer Meeting",
        "Neepawa",
        "2043337777",
        "neepawa",
      ],
      [
        "7:00 pm",
        "Wednesday",
        "Prayer Meeting",
        "Edmonton North",
        "96537944308",
        "mcgiedm",
      ],
      [
        "7:00 pm",
        "Wednesday",
        "Prayer Meeting",
        "Edmonton South",
        "99137872900",
        "mcgiedm",
      ],
      [
        "7:00 pm",
        "Wednesday",
        "Prayer Meeting",
        "Fort McMurray",
        "7802348888",
        "123456",
      ],
      [
        "7:00 pm",
        "Wednesday",
        "Prayer Meeting",
        "Red Deer",
        "4037778888",
        "mcgird",
      ],
      [
        "7:00 pm",
        "Wednesday",
        "Prayer Meeting",
        "Calgary South",
        "93837702697",
        "418418",
      ],
      [
        "7:00 pm",
        "Wednesday",
        "Prayer Meeting",
        "Regina",
        "4033334444",
        "regina",
      ],
      [
        "7:00 pm",
        "Wednesday",
        "Prayer Meeting",
        "Saskatoon",
        "4033337275",
        "saskatoon",
      ],
      [
        "7:30 pm",
        "Wednesday",
        "Prayer Meeting",
        "Vancouver",
        "3337773737",
        "333777",
      ],
    ],

    "America/Los_Angeles": [
      //Pacific Time
      [
        "3:30 am",
        "Wednesday",
        "Prayer Meeting",
        "Calgary South",
        "93837702697",
        "418418",
      ],
      [
        "5:00 pm",
        "Wednesday",
        "Prayer Meeting",
        "Winnipeg North",
        "99331669339",
        "northwin",
      ],
      [
        "5:00 pm",
        "Wednesday",
        "Prayer Meeting",
        "Winnipeg Central",
        "93565651551",
        "centralwin",
      ],
      [
        "5:00 pm",
        "Wednesday",
        "Prayer Meeting",
        "Winnipeg East",
        "98932231333",
        "eastwin",
      ],
      [
        "5:00 pm",
        "Wednesday",
        "Prayer Meeting",
        "Neepawa",
        "2043337777",
        "neepawa",
      ],

      [
        "6:00 pm",
        "Wednesday",
        "Prayer Meeting",
        "Edmonton North",
        "96537944308",
        "mcgiedm",
      ],
      [
        "6:00 pm",
        "Wednesday",
        "Prayer Meeting",
        "Edmonton South",
        "99137872900",
        "mcgiedm",
      ],
      [
        "6:00 pm",
        "Wednesday",
        "Prayer Meeting",
        "Fort McMurray",
        "7802348888",
        "123456",
      ],
      [
        "6:00 pm",
        "Wednesday",
        "Prayer Meeting",
        "Red Deer",
        "4037778888",
        "mcgird",
      ],
      [
        "6:00 pm",
        "Wednesday",
        "Prayer Meeting",
        "Calgary South",
        "93837702697",
        "418418",
      ],
      [
        "6:00 pm",
        "Wednesday",
        "Prayer Meeting",
        "Regina",
        "4033334444",
        "regina",
      ],
      [
        "6:00 pm",
        "Wednesday",
        "Prayer Meeting",
        "Saskatoon",
        "4033337275",
        "saskatoon",
      ],
      [
        "7:30 pm",
        "Wednesday",
        "Prayer Meeting",
        "Vancouver",
        "3337773737",
        "333777",
      ],
    ],
    "America/Chicago": [
      //Central Time
      [
        "5:30 am",
        "Wednesday",
        "Prayer Meeting",
        "Calgary South",
        "93837702697",
        "418418",
      ],

      [
        "7:00 pm",
        "Wednesday",
        "Prayer Meeting",
        "Winnipeg North",
        "99331669339",
        "northwin",
      ],
      [
        "7:00 pm",
        "Wednesday",
        "Prayer Meeting",
        "Winnipeg Central",
        "93565651551",
        "centralwin",
      ],
      [
        "7:00 pm",
        "Wednesday",
        "Prayer Meeting",
        "Winnipeg East",
        "98932231333",
        "eastwin",
      ],
      [
        "7:00 pm",
        "Wednesday",
        "Prayer Meeting",
        "Neepawa",
        "2043337777",
        "neepawa",
      ],
      [
        "8:00 pm",
        "Wednesday",
        "Prayer Meeting",
        "Edmonton North",
        "96537944308",
        "mcgiedm",
      ],
      [
        "8:00 pm",
        "Wednesday",
        "Prayer Meeting",
        "Edmonton South",
        "99137872900",
        "mcgiedm",
      ],
      [
        "8:00 pm",
        "Wednesday",
        "Prayer Meeting",
        "Fort McMurray",
        "7802348888",
        "123456",
      ],
      [
        "8:00 pm",
        "Wednesday",
        "Prayer Meeting",
        "Red Deer",
        "4037778888",
        "mcgird",
      ],
      [
        "8:00 pm",
        "Wednesday",
        "Prayer Meeting",
        "Calgary South",
        "93837702697",
        "418418",
      ],
      [
        "8:00 pm",
        "Wednesday",
        "Prayer Meeting",
        "Regina",
        "4033334444",
        "regina",
      ],
      [
        "8:00 pm",
        "Wednesday",
        "Prayer Meeting",
        "Saskatoon",
        "4033337275",
        "saskatoon",
      ],
      [
        "8:30 pm",
        "Wednesday",
        "Prayer Meeting",
        "Vancouver",
        "3337773737",
        "333777",
      ],
    ],
  },

  Thursday: {
    "America/Denver": [
      //Mountain Time
      [
        "6:00 pm",
        "Thursday",
        "Prayer Meeting",
        "Vancouver",
        "3337773737",
        "333777",
      ],
      [
        "7:00 pm",
        "Thursday",
        "Prayer Meeting",
        "Edmonton West",
        "96991041256",
        "mcgiedm",
      ],
      [
        "7:00 pm",
        "Thursday",
        "Prayer Meeting",
        "Edmonton Central",
        "96991041256",
        "mcgiedm",
      ],
      [
        "7:00 pm",
        "Thursday",
        "Prayer Meeting",
        "Calgary North",
        "4033331111",
        "418418",
      ],
      [
        "7:30 pm",
        "Thursday",
        "Prayer Meeting",
        "Grand Prairie",
        "97105863197",
        "via edmonton zoom",
      ],

      [
        "8:00 am",
        "Thursday",
        "Prayer Meeting",
        "Winnipeg East",
        "98932231333",
        "eastwin",
      ],
    ],
    "America/Los_Angeles": [
      //Pacific Time
      [
        "6:00 pm",
        "Thursday",
        "Prayer Meeting",
        "Vancouver",
        "3337773737",
        "333777",
      ],
      [
        "6:00 pm",
        "Thursday",
        "Prayer Meeting",
        "Edmonton West",
        "96991041256",
        "mcgiedm",
      ],
      [
        "6:00 pm",
        "Thursday",
        "Prayer Meeting",
        "Edmonton Central",
        "96991041256",
        "mcgiedm",
      ],

      [
        "6:00 pm",
        "Thursday",
        "Prayer Meeting",
        "Calgary North",
        "4033331111",
        "418418",
      ],
      [
        "6:30 pm",
        "Thursday",
        "Prayer Meeting",
        "Grand Prairie",
        "97105863197",
        "via edmonton zoom",
      ],
      [
        "7:00 am",
        "Thursday",
        "Prayer Meeting",
        "Winnipeg East",
        "98932231333",
        "eastwin",
      ],
    ],
    "America/Chicago": [
      //Central Time
      [
        "7:00 pm",
        "Thursday",
        "Prayer Meeting",
        "Vancouver",
        "3337773737",
        "333777",
      ],
      [
        "8:00 pm",
        "Thursday",
        "Prayer Meeting",
        "Edmonton West",
        "96991041256",
        "mcgiedm",
      ],
      [
        "8:00 pm",
        "Thursday",
        "Prayer Meeting",
        "Edmonton Central",
        "96991041256",
        "mcgiedm",
      ],
      [
        "8:00 pm",
        "Thursday",
        "Prayer Meeting",
        "Calgary North",
        "4033331111",
        "418418",
      ],
      [
        "8:30 pm",
        "Thursday",
        "Prayer Meeting",
        "Grand Prairie",
        "97105863197",
        "via edmonton zoom",
      ],

      [
        "9:00 am",
        "Thursday",
        "Prayer Meeting",
        "Winnipeg East",
        "98932231333",
        "eastwin",
      ],
    ],
  },

  Friday: {
    "America/Denver": [
      //Mountain Time

      [
        "6:00 pm",
        "Friday",
        "Worship Service",
        "Fort McMurray",
        "7802348888",
        "123456",
      ],
      [
        "6:00 pm",
        "Friday",
        "Worship Service",
        "Grand Prairie",
        "9715863197",
        "via edmonton zoom",
      ],
      [
        "6:00 pm",
        "Friday",
        "Worship Service",
        "Calgary North",
        "4033331111",
        "regina",
      ],
      [
        "6:00 pm",
        "Friday",
        "Worship Service",
        "Winnipeg North",
        "99331669339",
        "northwin",
      ],
      [
        "6:00 pm",
        "Friday",
        "Worship Service",
        "Winnipeg Central",
        "93565651551",
        "centralwin",
      ],
      [
        "6:00 pm",
        "Friday",
        "Worship Service",
        "Winnipeg East",
        "98932231333",
        "eastwin",
      ],
      [
        "6:00 pm",
        "Friday",
        "Worship Service",
        "Neepawa",
        "2043337777",
        "neepawa",
      ],
      [
        "6:30 pm",
        "Friday",
        "Worship Service",
        "Edmonton North",
        "96537944308",
        "mcgiedm",
      ],
      [
        "6:30 pm",
        "Friday",
        "Worship Service",
        "Saskatoon",
        "4033337275",
        "saskatoon",
      ],
      [
        "7:00 pm",
        "Friday",
        "Worship Service",
        "Edmonton South",
        "99137872900",
        "mcgiedm",
      ],
      [
        "7:00 pm",
        "Friday",
        "Worship Service",
        "Red Deer",
        "4037778888",
        "mcgird",
      ],
      [
        "7:00 pm",
        "Friday",
        "Worship Service",
        "Regina",
        "4033334444",
        "regina",
      ],
      [
        "7:30 pm",
        "Friday",
        "Worship Service",
        "Saskatoon",
        "4033337275",
        "saskatoon",
      ],
      [
        "7:30 pm",
        "Friday",
        "Worship Service",
        "Vancouver",
        "3337773737",
        "333777",
      ],
    ],

    "America/Los_Angeles": [
      //Pacific Time
      [
        "5:00 pm",
        "Friday",
        "Worship Service",
        "Fort McMurray",
        "7802348888",
        "123456",
      ],
      [
        "5:00 pm",
        "Friday",
        "Worship Service",
        "Grand Prairie",
        "9715863197",
        "via edmonton zoom",
      ],
      [
        "5:00 pm",
        "Friday",
        "Worship Service",
        "Calgary North",
        "4033331111",
        "regina",
      ],
      [
        "5:00 pm",
        "Friday",
        "Worship Service",
        "Winnipeg North",
        "99331669339",
        "northwin",
      ],
      [
        "5:00 pm",
        "Friday",
        "Worship Service",
        "Winnipeg Central",
        "93565651551",
        "centralwin",
      ],
      [
        "5:00 pm",
        "Friday",
        "Worship Service",
        "Winnipeg East",
        "98932231333",
        "eastwin",
      ],
      [
        "5:00 pm",
        "Friday",
        "Worship Service",
        "Neepawa",
        "2043337777",
        "neepawa",
      ],
      [
        "5:30 pm",
        "Friday",
        "Worship Service",
        "Edmonton North",
        "96537944308",
        "mcgiedm",
      ],
      [
        "5:30 pm",
        "Friday",
        "Worship Service",
        "Saskatoon",
        "4033337275",
        "saskatoon",
      ],
      [
        "6:00 pm",
        "Friday",
        "Worship Service",
        "Edmonton South",
        "99137872900",
        "mcgiedm",
      ],
      [
        "6:00 pm",
        "Friday",
        "Worship Service",
        "Red Deer",
        "4037778888",
        "mcgird",
      ],
      [
        "6:00 pm",
        "Friday",
        "Worship Service",
        "Regina",
        "4033334444",
        "regina",
      ],
      [
        "6:30 pm",
        "Friday",
        "Worship Service",
        "Saskatoon",
        "4033337275",
        "saskatoon",
      ],
      [
        "6:30 pm",
        "Friday",
        "Worship Service",
        "Vancouver",
        "3337773737",
        "333777",
      ],
    ],
    "America/Chicago": [
      //Central Time
      [
        "7:00 pm",
        "Friday",
        "Worship Service",
        "Fort McMurray",
        "7802348888",
        "123456",
      ],
      [
        "7:00 pm",
        "Friday",
        "Worship Service",
        "Grand Prairie",
        "9715863197",
        "via edmonton zoom",
      ],
      [
        "7:00 pm",
        "Friday",
        "Worship Service",
        "Calgary North",
        "4033331111",
        "regina",
      ],
      [
        "7:00 pm",
        "Friday",
        "Worship Service",
        "Winnipeg North",
        "99331669339",
        "northwin",
      ],
      [
        "7:00 pm",
        "Friday",
        "Worship Service",
        "Winnipeg Central",
        "93565651551",
        "centralwin",
      ],
      [
        "7:00 pm",
        "Friday",
        "Worship Service",
        "Winnipeg East",
        "98932231333",
        "eastwin",
      ],
      [
        "7:00 pm",
        "Friday",
        "Worship Service",
        "Neepawa",
        "2043337777",
        "neepawa",
      ],
      [
        "7:30 pm",
        "Friday",
        "Worship Service",
        "Edmonton North",
        "96537944308",
        "mcgiedm",
      ],
      [
        "7:30 pm",
        "Friday",
        "Worship Service",
        "Saskatoon",
        "4033337275",
        "saskatoon",
      ],
      [
        "8:00 pm",
        "Friday",
        "Worship Service",
        "Edmonton South",
        "99137872900",
        "mcgiedm",
      ],
      [
        "8:00 pm",
        "Friday",
        "Worship Service",
        "Red Deer",
        "4037778888",
        "mcgird",
      ],
      [
        "8:00 pm",
        "Friday",
        "Worship Service",
        "Regina",
        "4033334444",
        "regina",
      ],
      [
        "8:30 pm",
        "Friday",
        "Worship Service",
        "Saskatoon",
        "4033337275",
        "saskatoon",
      ],
      [
        "8:30 pm",
        "Friday",
        "Worship Service",
        "Vancouver",
        "3337773737",
        "333777",
      ],
    ],
  },
  Saturday: {
    "America/Denver": [
      //Mountain Time

      [
        "9:30 am",
        "Saturday",
        "Worship Service",
        "Edmonton West",
        "96991041256",
        "mcgiedm",
      ],
      [
        "9:30 am",
        "Saturday",
        "Worship Service",
        "Edmonton Central",
        "96991041256",
        "mcgiedm",
      ],
      [
        "10:00 am",
        "Saturday",
        "Worship Service",
        "Vancouver",
        "3337773737",
        "333777",
      ],
      [
        "10:00 am",
        "Saturday",
        "Worship Service",
        "Calgary South",
        "93837702697",
        "418418",
      ],
      [
        "10:00 am",
        "Saturday",
        "Worship Service",
        "Regina",
        "4033334444",
        "regina",
      ],
      [
        "11:00 am",
        "Saturday",
        "Thanksgiving",
        "Vancouver",
        "3337773737",
        "333777",
      ],
      [
        "12:30 pm",
        "Saturday",
        "Thanksgiving",
        "Edmonton West",
        "96991041256",
        "mcgiedm",
      ],
      [
        "12:30 pm",
        "Saturday",
        "Thanksgiving",
        "Edmonton Central",
        "96991041256",
        "mcgiedm",
      ],
      [
        "1:00 pm",
        "Saturday",
        "Worship Serivce",
        "Calgary North",
        "4033331111",
        "418418",
      ],
      [
        "1:00 pm",
        "Saturday",
        "Worship Serivce",
        "Winnipeg Central",
        "93565651551",
        "centralwin",
      ],
      [
        "4:00 pm",
        "Saturday",
        "Thanksgiving",
        "Calgary North",
        "4033331111",
        "418418",
      ],
      [
        "4:30 pm",
        "Saturday",
        "Thanksgiving",
        "Grand Prairie",
        "9715863197",
        "no password",
      ],
      ["5:00 pm", "Saturday", "Thanksgiving", "Regina", "4033334444", "regina"],
      [
        "5:00 pm",
        "Saturday",
        "Thanksgiving",
        "Saskatoon",
        "ask servant for link",
        "ask servant for link",
      ],
      [
        "6:30 pm",
        "Saturday",
        "Thanksgiving",
        "Winnipeg Central",
        "93565651551",
        "centralwin",
      ],
      [
        "10:00 pm",
        "Saturday",
        "Worship Serivce",
        "Grand Prairie",
        "9715863197",
        "via edmonton zoom",
      ],
    ],

    "America/Los_Angeles": [
      //Pacific Time
      [
        "8:30 am",
        "Saturday",
        "Worship Service",
        "Edmonton West",
        "96991041256",
        "mcgiedm",
      ],
      [
        "8:30 am",
        "Saturday",
        "Worship Service",
        "Edmonton Central",
        "96991041256",
        "mcgiedm",
      ],
      [
        "9:00 am",
        "Saturday",
        "Worship Service",
        "Vancouver",
        "3337773737",
        "333777",
      ],
      [
        "9:00 am",
        "Saturday",
        "Worship Service",
        "Calgary South",
        "93837702697",
        "418418",
      ],
      [
        "9:00 am",
        "Saturday",
        "Worship Service",
        "Regina",
        "4033334444",
        "regina",
      ],
      [
        "12:00 am",
        "Saturday",
        "Thanksgiving",
        "Vancouver",
        "3337773737",
        "333777",
      ],
      [
        "11:30 pm",
        "Saturday",
        "Thanksgiving",
        "Edmonton West",
        "96991041256",
        "mcgiedm",
      ],
      [
        "11:30 pm",
        "Saturday",
        "Thanksgiving",
        "Edmonton Central",
        "96991041256",
        "mcgiedm",
      ],
      [
        "12:00 pm",
        "Saturday",
        "Worship Serivce",
        "Calgary North",
        "4033331111",
        "418418",
      ],
      [
        "12:00 pm",
        "Saturday",
        "Worship Serivce",
        "Winnipeg Central",
        "93565651551",
        "centralwin",
      ],
      [
        "3:00 pm",
        "Saturday",
        "Thanksgiving",
        "Calgary North",
        "4033331111",
        "418418",
      ],
      [
        "3:30 pm",
        "Saturday",
        "Thanksgiving",
        "Grand Prairie",
        "9715863197",
        "no password",
      ],

      ["4:30 pm", "Saturday", "Thanksgiving", "Regina", "4033334444", "regina"],

      [
        "4:00 pm",
        "Saturday",
        "Thanksgiving",
        "Saskatoon",
        "ask servant for link",
        "ask servant for link",
      ],
      [
        "4:30 pm",
        "Saturday",
        "Thanksgiving",
        "Winnipeg Central",
        "93565651551",
        "centralwin",
      ],
      [
        "9:00 pm",
        "Saturday",
        "Worship Serivce",
        "Grand Prairie",
        "9715863197",
        "via edmonton zoom",
      ],
    ],
    "America/Chicago": [
      //Central Time
      [
        "10:30 am",
        "Saturday",
        "Worship Service",
        "Edmonton West",
        "96991041256",
        "mcgiedm",
      ],
      [
        "10:30 am",
        "Saturday",
        "Worship Service",
        "Edmonton Central",
        "96991041256",
        "mcgiedm",
      ],
      [
        "11:00 am",
        "Saturday",
        "Worship Service",
        "Vancouver",
        "3337773737",
        "333777",
      ],
      [
        "11:00 am",
        "Saturday",
        "Worship Service",
        "Calgary South",
        "93837702697",
        "418418",
      ],
      [
        "11:00 am",
        "Saturday",
        "Worship Service",
        "Regina",
        "4033334444",
        "regina",
      ],
      [
        "1:00 am",
        "Saturday",
        "Thanksgiving",
        "Vancouver",
        "3337773737",
        "333777",
      ],
      [
        "1:30 pm",
        "Saturday",
        "Thanksgiving",
        "Edmonton West",
        "96991041256",
        "mcgiedm",
      ],
      [
        "1:30 pm",
        "Saturday",
        "Thanksgiving",
        "Edmonton Central",
        "96991041256",
        "mcgiedm",
      ],
      [
        "2:00 pm",
        "Saturday",
        "Worship Serivce",
        "Calgary North",
        "4033331111",
        "418418",
      ],
      [
        "2:00 pm",
        "Saturday",
        "Worship Serivce",
        "Winnipeg Central",
        "93565651551",
        "centralwin",
      ],
      [
        "5:00 pm",
        "Saturday",
        "Thanksgiving",
        "Calgary North",
        "4033331111",
        "418418",
      ],
      [
        "5:30 pm",
        "Saturday",
        "Thanksgiving",
        "Grand Prairie",
        "9715863197",
        "no password",
      ],
      [
        "5:30 pm",
        "Saturday",
        "Thanksgiving",
        "Winnipeg Central",
        "93565651551",
        "centralwin",
      ],
      ["6:00 pm", "Saturday", "Thanksgiving", "Regina", "4033334444", "regina"],
      [
        "6:30 pm",
        "Saturday",
        "Thanksgiving",
        "Saskatoon",
        "ask servant for link",
        "ask servant for link",
      ],

      [
        "11:00 pm",
        "Saturday",
        "Worship Serivce",
        "Grand Prairie",
        "9715863197",
        "via edmonton zoom",
      ],
    ],
  },
  Sunday: {
    "America/Denver": [
      //Mountain Time

      [
        "7:30 am",
        "Sunday",
        "Prayer Meeting",
        "Calgary South",
        "93837702697",
        "418418",
      ],
      [
        "8:00 am",
        "Sunday",
        "Prayer Meeting",
        "Vancouver",
        "3337773737",
        "333777",
      ],
      [
        "8:00 am",
        "Sunday",
        "Worship Service",
        "Edmonton North",
        "96537944308",
        "mcgiedm",
      ],
      [
        "8:00 am",
        "Sunday",
        "Thanksgiving",
        "Fort McMurray",
        "7802348888",
        "123456",
      ],
      [
        "8:30 am",
        "Sunday",
        "Worship Service",
        "Neepawa",
        "2043337777",
        "neepawa",
      ],
      [
        "10:30 am",
        "Sunday",
        "Worship Service",
        "Vancouver",
        "3337773737",
        "333777",
      ],
      [
        "10:30 am",
        "Sunday",
        "Worship Service",
        "Calgary South",
        "93837702697",
        "418418",
      ],

      [
        "12:00 pm",
        "Sunday",
        "Thanksgiving",
        "Edmonton North",
        "96537944308",
        "mcgiedm",
      ],
      [
        "1:30 pm",
        "Sunday",
        "Thanksgiving",
        "Calgary South",
        "93837702697",
        "418418",
      ],

      [
        "6:00 pm",
        "Sunday",
        "Prayer Meeting",
        "Winnipeg East",
        "98932231333",
        "eastwin",
      ],
      [
        "6:00 pm",
        "Sunday",
        "Worship Service",
        "Winnipeg East",
        "98932231333",
        "eastwin",
      ],
    ],

    "America/Los_Angeles": [
      //Pacific Time
      [
        "6:30 am",
        "Sunday",
        "Prayer Meeting",
        "Calgary South",
        "93837702697",
        "418418",
      ],
      [
        "7:00 am",
        "Sunday",
        "Prayer Meeting",
        "Vancouver",
        "3337773737",
        "333777",
      ],
      [
        "7:00 am",
        "Sunday",
        "Worship Service",
        "Edmonton North",
        "96537944308",
        "mcgiedm",
      ],
      [
        "7:00 am",
        "Sunday",
        "Thanksgiving",
        "Fort McMurray",
        "7802348888",
        "123456",
      ],
      [
        "6:30 am",
        "Sunday",
        "Worship Service",
        "Neepawa",
        "2043337777",
        "neepawa",
      ],
      [
        "9:30 am",
        "Sunday",
        "Worship Service",
        "Vancouver",
        "3337773737",
        "333777",
      ],
      [
        "9:30 am",
        "Sunday",
        "Worship Service",
        "Calgary South",
        "93837702697",
        "418418",
      ],

      [
        "11:00 pm",
        "Sunday",
        "Thanksgiving",
        "Edmonton North",
        "96537944308",
        "mcgiedm",
      ],
      [
        "12:30 pm",
        "Sunday",
        "Thanksgiving",
        "Calgary South",
        "93837702697",
        "418418",
      ],

      [
        "4:00 pm",
        "Sunday",
        "Prayer Meeting",
        "Winnipeg East",
        "98932231333",
        "eastwin",
      ],
      [
        "4:00 pm",
        "Sunday",
        "Worship Service",
        "Winnipeg East",
        "98932231333",
        "eastwin",
      ],
    ],
    "America/Chicago": [
      //Central Time
      [
        "8:30 am",
        "Sunday",
        "Prayer Meeting",
        "Calgary South",
        "93837702697",
        "418418",
      ],
      [
        "9:00 am",
        "Sunday",
        "Prayer Meeting",
        "Vancouver",
        "3337773737",
        "333777",
      ],
      [
        "9:00 am",
        "Sunday",
        "Worship Service",
        "Edmonton North",
        "96537944308",
        "mcgiedm",
      ],
      [
        "9:00 am",
        "Sunday",
        "Thanksgiving",
        "Fort McMurray",
        "7802348888",
        "123456",
      ],
      [
        "9:30 am",
        "Sunday",
        "Worship Service",
        "Neepawa",
        "2043337777",
        "neepawa",
      ],
      [
        "11:30 am",
        "Sunday",
        "Worship Service",
        "Vancouver",
        "3337773737",
        "333777",
      ],
      [
        "11:30 am",
        "Sunday",
        "Worship Service",
        "Calgary South",
        "93837702697",
        "418418",
      ],

      [
        "1:00 pm",
        "Sunday",
        "Thanksgiving",
        "Edmonton North",
        "96537944308",
        "mcgiedm",
      ],
      [
        "2:30 pm",
        "Sunday",
        "Thanksgiving",
        "Calgary South",
        "93837702697",
        "418418",
      ],

      [
        "7:00 pm",
        "Sunday",
        "Prayer Meeting",
        "Winnipeg East",
        "98932231333",
        "eastwin",
      ],
      [
        "7:00 pm",
        "Sunday",
        "Worship Service",
        "Winnipeg East",
        "98932231333",
        "eastwin",
      ],
    ],
  },
};

function updateDateTime(
  timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
) {
  const now = new Date();
  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: timezone,
  };
  const timeOptions = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: timezone,
  };
  const formattedDate = now.toLocaleDateString("en-US", dateOptions);
  const formattedTime = now.toLocaleTimeString("en-US", timeOptions);
  const timezoneName = timeZoneMap[timezone] || timezone.replace("_", " ");
  document.getElementById(
    "datetime"
  ).textContent = `${formattedDate}, ${formattedTime} (${timezoneName})`;
}

function populateDateSlider() {
  const dateSlider = document.getElementById("dateSlider");
  const days = 7;
  const now = new Date();

  for (let i = 0; i < days; i++) {
    const day = new Date(now.getFullYear(), now.getMonth(), now.getDate() + i);
    const dateOptions = { month: "short", day: "numeric" };
    const dayOptions = { weekday: "long" };
    const date = day.toLocaleDateString(undefined, dateOptions);
    const dayName = day.toLocaleDateString(undefined, dayOptions);

    const dateItem = document.createElement("div");
    dateItem.className = "date-item";
    dateItem.innerHTML = `<div class="date">${date}</div><div class="day">${dayName}</div>`;
    dateItem.addEventListener("click", () => selectDate(dayName));
    dateSlider.appendChild(dateItem);
  }
}

function selectDate(day) {
  const selectedTimezone = document.getElementById("timezone").value;
  // Remove the 'selected' class from all date items
  const dateItems = document.querySelectorAll(".date-item");
  dateItems.forEach((item) => item.classList.remove("selected"));

  // Add the 'selected' class to the clicked date item
  const selectedItem = Array.from(dateItems).find(
    (item) => item.querySelector(".day").textContent === day
  );
  if (selectedItem) {
    selectedItem.classList.add("selected");
  }

  // Remove existing table content
  const table = document.getElementById("scheduleTable");
  table.innerHTML = "";

  // Add headers to the table
  const headers = [
    "Time",
    "Day",
    "Gathering",
    "Locale",
    "Zoom ID",
    "Passcode",
    "Information",
  ];
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  headers.forEach((header) => {
    const th = document.createElement("th");
    th.textContent = header;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Add table body
  const tbody = document.createElement("tbody");
  const data = scheduleData[day]?.[selectedTimezone];
  if (data) {
    data.forEach((row) => {
      const tr = document.createElement("tr");
      row.forEach((cell) => {
        const td = document.createElement("td");
        td.textContent = cell;
        tr.appendChild(td);
      });

      const copyButton = document.createElement("button");
      copyButton.textContent = "Copy Information";
      copyButton.className = "copy-btn";
      copyButton.addEventListener("click", function () {
        copyRowData(tr);
      });

      const actionCell = document.createElement("td");
      actionCell.appendChild(copyButton);
      tr.appendChild(actionCell);
      tbody.appendChild(tr);
    });
  } else {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.colSpan = headers.length;
    td.textContent = "No available playback schedule for this day";
    tr.appendChild(td);
    tbody.appendChild(tr);
  }
  table.appendChild(tbody);
}

let debounceTimer;
document.getElementById("timezone").addEventListener("change", function () {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    updateDateTime(this.value);
    const selectedDay = document.querySelector(".date-item.selected .day");
    if (selectedDay) {
      selectDate(selectedDay.textContent);
    }
  }, 300);
});

function copyRowData(row) {
  const table = document.getElementById("scheduleTable");
  const headers = Array.from(table.querySelectorAll("thead th")).map((th) =>
    th.textContent.trim()
  );
  const cells = row.querySelectorAll("td:not(:last-child)"); // Exclude the last cell which contains the button

  let textToCopy = "";
  headers.forEach((header, index) => {
    if (index < cells.length) {
      textToCopy += `${header}: ${cells[index].textContent.trim()}\n`; // Add label and cell content
    }
  });

  const textarea = document.createElement("textarea");
  textarea.value = textToCopy.trim(); // Remove trailing newline
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);

  alert("Data copied to clipboard!");
}

updateDateTime();
populateDateSlider();
setInterval(
  () => updateDateTime(document.getElementById("timezone").value),
  1000
);

document.getElementById("timezone").addEventListener("change", function () {
  updateDateTime(this.value);
  const selectedDay = document.querySelector(".date-item .selected .day");
  if (selectedDay) {
    selectDate(selectedDay.textContent);
  }
});
