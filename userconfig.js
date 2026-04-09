// User configuration for the startpage - update the palette, location, and your preferred tabs, categories, and links

// Define preferred palette for light and dark mode
// Available themes: latte, frappe, mocha, macchiato
const preferredLightTheme = latte;
const preferredDarkTheme = mocha;

let palette = initThemeSystem(preferredLightTheme, preferredDarkTheme);

const default_configuration = {
  overrideStorage: true,
  temperature: {
    location: "Liverpool",
    scale: "C",
  },
  clock: {
    format: "k:i p",
    icon_color: palette.maroon,
  },
  search: {
    engines: {
      w: ["https://en.wikipedia.org/wiki/", "Wikipedia"],
      d: ["https://duckduckgo.com/?q=", "DuckDuckGo"],
      g: ["https://google.com/search?q=", "Google"],
    },
    default: "d",
  },
  keybindings: {
    "s": "search-bar",
  },
  disabled: [],
  localIcons: true,
  localFonts: true,
  fastlink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "stuff",
      background_url: "src/img/banners/banner_18.gif",
      categories: [
        {
          name: "quicklinks",
          links: [
            {
              name: "musicForProgramming();",
              url: "https://musicforprogramming.net",
              icon: "music",
              icon_color: palette.green,
            },
            {
              name: "Hans Wehr",
              url: "https://ejtaal.net/aa",
              icon: "book-2",
              icon_color: palette.peach,
            },

          ],
        },
        {
          name: "stack",
          links: [
            {
              name: "Proton Mail",
              url: "https://mail.proton.me",
              icon: "mail",
              icon_color: palette.green,
            },
            {
              name: "Github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.peach,
            },
            {
              name: "ChatGPT",
              url: "https://chatgpt.com",
              icon: "robot",
              icon_color: palette.red,
            }
          ],
        },
        {
          name: "streaks",
          links: [
            {
              name: "Brilliant",
              url: "https://brilliant.org",
              icon: "bulb",
              icon_color: palette.green,
            },
            {
              name: "Boot.dev",
              url: "https://boot.dev",
              icon: "code",
              icon_color: palette.peach,
            },
            {
              name: "MonkeyType",
              url: "https://monkeytype.com",
              icon: "keyboard",
              icon_color: palette.red,
            },
          ],
        },
      ],
    },
    {
      name: "work",
      background_url: "src/img/banners/banner_07.gif",
      categories: [
        {
          name: "revision",
          links: [
            {
              name: "SaveMyExams",
              url: "https://www.savemyexams.com",
              icon: "bolt",
              icon_color: palette.green,
            },
            {
              name: "Quizlet",
              url: "https://quizlet.com",
              icon: "search",
              icon_color: palette.peach,
            }
          ],
        },
        {
          name: "platforms",
          links: [
            {
              name: "Google classroom",
              url: "https://classroom.google.com",
              icon: "school",
              icon_color: palette.green,
            },
            {
              name: "DreamClass",
              url: "https://stewards.dreamclass.io",
              icon: "notebook",
              icon_color: palette.peach,
            },
            {
              name: "Zoom",
              url: "https://app.zoom.us",
              icon: "video",
              icon_color: palette.red,
            },
            {
              name: "Teams",
              url: "https://teams.live.com",
              icon: "brand-teams",
              icon_color: palette.blue,
            }
          ],
        },
      ],
    },
    {
      name: "chi ll",
      background_url: "src/img/banners/banner_14.gif",
      categories: [
        {
          name: "media",
          links: [
            {
              name: "Youtube",
              url: "https://youtube.com",
              icon: "brand-youtube",
              icon_color: palette.green,
            },
            {
              name: "Reddit",
              url: "https://www.reddit.com",
              icon: "brand-reddit",
              icon_color: palette.peach,
            },
            {
              name: "Guardian",
              url: "https://www.theguardian.com",
              icon: "brand-guardian",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "dev",
          links: [
            {
              name: "Arch Linux",
              url: "https://archlinux.org",
              icon: "typography",
              icon_color: palette.green,
            },
            {
              name: "Cheatsheet",
              url: "https://devhints.io",
              icon: "prompt",
              icon_color: palette.peach,
            },
            {
              name: "Go Docs",
              url: "https://pkg.go.dev/",
              icon: "brand-golang",
              icon_color: palette.red,
            },
            {
              name: "Docker",
              url: "https://hub.docker.com",
              icon: "brand-docker",
              icon_color: palette.blue,
            },

          ],
        },
        {
          name: "games",
          links: [
            {
              name: "GDDL",
              url: "https://gdladder.com/",
              icon: "ladder",
              icon_color: palette.green,
            },
            {
              name: "GDCS",
              url: "https://www.gdcreatorschool.com/",
              icon: "school",
              icon_color: palette.peach,
            },
            {
              name: "Sporcle",
              url: "https://www.sporcle.com/games/category/geography",
              icon: "map-pin-question",
              icon_color: palette.red,
            },
          ],
        }
      ],
    },
  ],
};

const CONFIG = new Config(default_configuration, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.blue);
