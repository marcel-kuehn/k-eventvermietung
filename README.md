# K-Eventverleih

This project is a website, that is connected to a cms, build for a company that offers services and equipment for events. It was created with a focus on minimal JavaScript, small bundle size, and maximum page speed, while still providing a great experience for both developers and marketers.

## Concept

### Framework

This project uses [Astro](https://astro.build/) as the main framework.  
Astro is a web framework for content-driven websites that makes it possible to ship minimal JavaScript and lean templates, while still offering a modern developer experience with components, templating, TypeScript, and more.

### Design and CSS

This project follows a simplified version of [this design system](https://uxdesign.cc/designing-colour-system-d9d39f245e01) for consistent colors and UI, .  
Styling is implemented with [Tailwind CSS](https://tailwindcss.com/). Tailwind provides a good developer experience and it helps to keep the CSS bundle small and maintainable (in my opinion, not every dev would agree on that).

For further optimization [tailwind-merge](https://www.npmjs.com/package/tailwind-merge) was added, which merges and deduplicates utility classes, resulting in a even smaller HTML file.

### CMS & Deployments

To provide a smooth workflow for marketers, we use [Storyblok](https://www.storyblok.com/) as our CMS. One key benefit is the live preview while editing content.
Because of this, we run two separate instances:

**Staging Instance**

- Purpose: Enables marketers and non-technical users to preview changes.
- Runs as a Node process using Astro’s Server-Side Rendering (SSR).
- Fetches the latest draft content from Storyblok on every request and renders the site with this data.
- Any changes made are instantly visible in Storyblok’s preview.
- Redeployed automatically on push to the `main` branch, ensuring everyone works with the latest stable code.

**Production Instance**

- Purpose: Optimized for minimal JavaScript, small bundle size, and maximum speed.
- Runs as a static site using Astro’s Static Site Generation (SSG).
- Data is fetched only during build time, not on every request.
- Deployed as a static site, making global distribution via CDN possible for fast loading worldwide.
- Redeployed automatically on push to the `production` branch or when content is published in Storyblok (this is configured by adding a deploy hook in Vercel and then adding the hook url to the webhook settings in Storyblok, where you can choose on which events the Vercel hook gets called).
- Tradeoffs to keep in mind here:
  - This project has to be rebuild, when new content in Storyblok get published, so it takes a few minutes for everything to reload. I think it is worth it because we can heavily reduce our traffic usage to Storyblok using this approach and also distribute this site on a CDN, instead of having to run a Node process.
  - If content on sites is frequently **published** (not drafted!), this approach can lead to a lot of deployments. If you have multiple people publishing new content multiple times a day this approach is not for you. In my case I publish new content like once a month, so it's not a problem.

We use [Vercel](https://vercel.com/) as our hosting provider because it makes deployments seamless. Vercel automatically redeploys when changes are detected in the `main` or `production` branches.

### Project Structure

```
/public           Public assets (e.g. images, fonts)
/src              Source code
  /layouts        Shared layouts between pages
  /components     Reusable components (navigation, footer, UI, etc.)
    /ui           UI components (Button, Card, etc.)
    /blocks       Components the go beyond basic UI components. Each block can usually be configured in the cms.
  /pages          Page routes
  /styles         CSS (global styles, theme variables)
    global.css    Theme/design system variables and global classes
  /data           Data files (no functional code)
```

### Quality Control & Maintenance

All new changes must meet the following requirements:

- Must build successfully (checked by CI)
- Must pass linting (checked by CI and commitlint)
- Must be formatted correctly (checked by CI and commitlint)
- Must not include outdated or insecure packages (checked by CI)
- Must contain only valid and accessible HTML markup (checked by CI)
- Commits must follow [Conventional Commits](https://www.conventionalcommits.org/) (checked by commitlint)
- Must comply with WCAG accessibility guidelines (checked by developer/reviewer)
- Must update documentation when applicable (checked by developer/reviewer)
- Must deduplicate Tailwind classes (checked by developer/reviewer)
- Must use minimal JavaScript (checked by developer/reviewer)
- Must follow the [Front-End Checklist](https://github.com/thedaviddias/Front-End-Checklist) where applicable (checked by developer/reviewer)

Dependencies are updated weekly via Dependabot.

## Developing

### Getting Started

1. Read and understand the concept of this application.
2. Clone the repository.
3. Run `npm install` to install dependencies.
4. Create a `.env`. Refer to the `.env.example` file to see the configuration. You may need to contact the repo owners to get a valid api key.
5. Run `npm run dev` to start the local development server.
6. Open [http://localhost:4321](http://localhost:4321/) in your browser.

### Available Commands

All commands are run from the root of the project:

| Command                   | Description                                               |
| :------------------------ | :-------------------------------------------------------- |
| `npm install`             | Install dependencies                                      |
| `npm run dev`             | Start the local dev server at `localhost:4321`            |
| `npm run build`           | Build the production site to `./dist/`                    |
| `npm run preview`         | Preview your build locally before deploying               |
| `npm run lint`            | Run ESLint on the project                                 |
| `npm run lint:fix`        | Run ESLint and auto-fix problems                          |
| `npm run format`          | Format code with Prettier                                 |
| `npm run format:check`    | Check code formatting with Prettier                       |
| `npm run astro ...`       | Run Astro CLI commands (e.g., `astro add`, `astro check`) |
| `npm run astro -- --help` | Get help using the Astro CLI                              |

### Important links

**CMS:**

- [Storyblok Space](https://app.storyblok.com/#/me/spaces/287525828403985/dashboard)

**Staging/ Draft Environment:**

- [Website](https://k-eventvermietung-stage.vercel.app/home)
- [Vercel Project](https://vercel.com/marcel-kuehns-projects/k-eventvermietung-stage)

**Production/ Published Environment:**

- [Website](https://k-eventvermietung-production.vercel.app/home)
- [Vercel Project](https://vercel.com/marcel-kuehns-projects/k-eventvermietung-production)

### Contributing & Pull Requests

1. Pick an existing issue or open a new one to propose your changes.
2. Before submitting a PR, ensure your code follows the **Quality Control & Maintenance** section.
3. A maintainer will review your changes.
4. Thank you for contributing! 🎉
