const Constants = {
  IMAGES: {
    HEADSHOT: require("./images/me.jpg"),
  },
  LINKS: {
    EMAIL: "mailto:armanriahi1@gmail.com",
    LINKEDIN: "https://www.linkedin.com/in/arman-riahi/",
    GITHUB: "https://github.com/namrataffy",
    RESUME: "",
  },
  ICONS: {
    EMAIL: require("./images/emailIcon.png"),
    LINKEDIN: require("./images/linkedinIcon.png"),
    GITHUB: require("./images/githubIcon.png"),
    RESUME: require("./images/resumeIcon.png"),
  },

  PROJECTS: {
    splitsy: {
      title: "Splitsy",
      description:
        " A full stack web application that uses optical character recognition (OCR) technology to convert a user uploaded receipt image into a virtual receipt. Users can then easily add payers to the virtual receipt and assign items, simplifying the receipt “split up” process. Built with React, Node.js, Express, MySQL, Passport.js and OCR.space API.",
      github: "https://github.com/namrataffy/splitsy-1",
      image:
        "https://github.com/namrataffy/splitsy-1/raw/master/client/public/assets/img/splitsy.gif",
      link: "https://splitsy.herokuapp.com",
    },
    fitness: {
      title: "Fitness Tracker",
      description:
        "An app that allows a user to create and track daily workouts. Exercise info such as duration, weight, sets, reps, distant traveled and type is stored in a No SQL database, specifically MongoDB.",
      github: "https://github.com/namrataffy/Fitness_Tracker",
      image:
        "https://github.com/namrataffy/Fitness_Tracker/raw/master/images/sc1.png",
      link:
        "https://fitness-tracker-ar.herokuapp.com/?id=5e3db5086f651800176619c3",
    },
    reddit: {
      title: "Reddit Clone",
      description:
        "A full stack web application that mimics the primary functionality of the popular discussion forum 'Reddit'. Built with Node.js, Express, MySQL, and jQuery.",
      github: "https://github.com/namrataffy/Reddit_Clone",
      image: "./assets/images/screddit.png",
      link: "https://reddit-clone-ucb.herokuapp.com/",
    },
    watchlist: {
      title: "The WatchList",
      description:
        "A web app that leverages Guidebox API to allow users to search for movies and add/remove them from a WatchList. The search will display buttons that link to services that the movie is available on (Amazon, Netflix, etc). If the movie searched for is currently in theaters, the site will provide a map with local movie theaters through the use of Google Maps API.",
      github: "https://github.com/namrataffy/The_WatchList",
      image: "./assets/images/pulpficiton.png",
      link:
        "https://www.linkedin.com/posts/arman-riahi_as-a-part-of-the-uc-berkeley-full-stack-development-activity-6613946174774874112-kR4N",
    },
    employee: {
      title: "Employee Tracker",
      description:
        "This is a command line application that allows users to interact with a database (MySQL) for their employees. User's have the option to add and view departments, roles, and employees. In addition, a user may update a employee's role as well. The database is comrised of three tables; departments, roles, and employees. Through the use of various ID's, the three tables are joined to form a comprehensive table that displays all pertinent information regarding an employee.",
      github: "https://github.com/namrataffy/Employee_Tracker",
      image:
        "https://github.com/namrataffy/Employee_Tracker/raw/master/images/sc1.png",
      link: "https://github.com/namrataffy/Employee_Tracker",
    },
    burger: {
      title: "Burger App",
      description:
        "This is a burger application that allows users to create burgers and then 'Devour' them. Burgers are stored in a MySQL database with values for id, burger_name, and devoured (boolean). Express is used for routing the various api calls that create/devour burgers (via buttons).",
      github: "https://github.com/namrataffy/Burger_App",
      image:
        "https://github.com/namrataffy/Burger_App/raw/master/public/assets/images/sc1.png",
      link: "https://shielded-shore-94031.herokuapp.com/",
    },
    weather: {
      title: "Weather Dashboard",
      description:
        "A weather dashboard that displays the temperature, humidity, UV index, and wind speed for a searched city. In addition, a 5-day forecast will be displayed.",
      github: "https://github.com/namrataffy/Weather_Dashboard",
      image:
        "https://github.com/namrataffy/Weather_Dashboard/raw/master/assets/images/sc1.png",
      link: "https://namrataffy.github.io/Weather_Dashboard/",
    },
  },
};

export default Constants;
