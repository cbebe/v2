// @ts-check

const { extras } = require("../url.js");

/**
 * @param {string} label
 * @param {string} href
 * @returns {string}
 */
const createLink = (label, href) => `<a style="color: var(--ifm-footer-link-color)" href="${href}">${label}</a>`;

const DOCUSAURUS_LINK = createLink("Docusaurus️", extras.docusaurusUrl);
const MIT_LINK = createLink("MIT", extras.mitUrl);

const themeConfig =
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  ({
    colorMode: { defaultMode: "dark", respectPrefersColorScheme: false },
    navbar: require("./navbar").navbar,
    footer: {
      style: "dark",
      links: [],
      copyright: `Copyright © ${
        new Date().getFullYear()
      } Charles Ancheta. Built with ${DOCUSAURUS_LINK} and ❤️. ${MIT_LINK}`,
    },
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
    },
  });

module.exports = { themeConfig };
