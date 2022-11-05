# charlesancheta.com

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```bash
pnpm
```

### Local Development

In two separate shells:

```bash
# Transpile ReScript code
pnpm re:start 
# Start Docusaurus server
pnpm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without
having to restart the server.

### Build

```bash
pnpm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting
service.

### Deployment

Using SSH:

```bash
pnpm dep
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the
`gh-pages` branch.
