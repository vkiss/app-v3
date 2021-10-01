import githubLogo from "$/assets/logos/github.svg";

import npmPackages from "$/controllers/context-menu/content/npm-packages";
import portfolio from "$/controllers/context-menu/content/portfolio";
import chromePlugins from "$/controllers/context-menu/content/chrome-plugins";
import divider from "$/controllers/context-menu/content/divider";

import labIcon from "$/assets/icons/lab.svg";
import iconEditor from "$/apps/iconEditor";

export default [
  npmPackages,
  portfolio,
  chromePlugins,
  divider,
  {
    "icon": labIcon,
    "icon_adjust": 2,
    "title": "lab",
    "sort": "abc",
    "itens": [
      {
        "label": "jicon",
        "app": iconEditor
      },
    ]
  },
  divider,
  {
    "icon": githubLogo,
    "iconAdjust": 3,
    "title": "exibir código fonte",
    "type": "link",
    "link": "https://github.com/vkiss/root"
  }
];
