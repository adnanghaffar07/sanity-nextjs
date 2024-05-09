# README for ca-nextjs-and-sanity Project

This project is a Next.js application initialized using [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It features a simple setup to get started with Next.js along with some integrated font optimization using [`next/font`](https://nextjs.org/docs/basic-features/font-optimization).

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- Node.js 20.12.2 or later
- A package manager like npm, yarn, pnpm, or bun

## Getting Started

These instructions will get your copy of the project up and running on your local machine for development and testing purposes.

### Installation

First, clone the repository to your local machine:

```bash
git clone https://github.com/adnanghaffar07/sanity-nextjs.git


Next, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Running the Development Server

To start the development server, run:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

After starting the development server, open [http://localhost:3000](http://localhost:3000) in your browser to see the application in action.

### Making Changes

You can start editing the required changes. The server auto-updates as you edit and save files.

## Features

- **Font Optimization:** The project uses `next/font` to automatically optimize and load Inter, a custom Google Font.

## Learn More

To deepen your knowledge about Next.js and its capabilities, consider the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - An interactive Next.js tutorial.

Feel free to check out and contribute to [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deployment

### Deploying on Vercel

The easiest way to deploy your Next.js app is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js. For more details on deployment, refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

>[!TIP]
>Follow the Instruction will be **higly appreciated**.

1. Sign Up/Login to Vercel:
If you haven't already, sign up for a Vercel account at [https://vercel.com/signup]. If you have an account, log in to your dashboard.

2. Install Vercel CLI (Command Line Interface):
`npm install -g vercel`

3. Navigate to Your Project Directory:
Open your terminal or command prompt and navigate to the directory of your project using the cd command.

4. Log in to Vercel CLI:
Log in to your Vercel account using the CLI by running:
`vercel login`

5. Deploy Your Project:
Once logged in, deploy your project by running:
`vercel --prod`

### Deployment

The front end of this project is deployed on Vercel. The deployment process is automated through Vercel's integration with your Git repository.

To deploy your changes, simply push your code to your Git repository. Vercel will automatically detect changes and deploy the updated version of your project.

For more information on deploying Next.js projects with Vercel, refer to the Vercel documentation.

### Sanity CMS

The content management system (CMS) for this project is powered by Sanity. The Sanity Studio is deployed separately from the front end and can be accessed at [https://codeautomation.sanity.studio/studio/structure]

To access the Sanity Studio:

1. Navigate to the URL provided.
2. Log in using your Sanity credentials.
3. Manage your content, schemas, and other settings within   the Sanity Studio dashboard.

### Setup Sanity CMS

1. Install Sanity CLI:

Install the Sanity CLI globally using npm:
`npm install -g @sanity/cli`

2. Initialize a New Sanity Project:

In your terminal, navigate to your Next.js project directory and run the following command to initialize a new Sanity project:
`sanity init`
Follow the prompts to create a new project. You can choose the default settings or customize them according to your requirements.

3. Set Up Your Sanity Project:

Once the project is initialized, you'll need to set up your Sanity project. This involves configuring schemas, creating content types, and defining data structures. You can do this using the Sanity Studio, which provides a graphical interface for managing your content.

4. Start the Sanity Studio:
Navigate to the `studio` directory within your Sanity project and start the Sanity Studio by running:
`sanity start`

5. Define Schemas and Content Types:

In the Sanity Studio, define schemas and content types for your project. This includes defining fields, specifying data types, and configuring relationships between different types of content.

6. Connect Next.js Project to Sanity:
To connect your Next.js project to Sanity, you'll need to install the `@sanity/client` package:
`npm install @sanity/client`
Then, create a new JavaScript file to initialize the Sanity client and connect to your Sanity project:

## sanityClient.js
```bash

import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'your-project-id',
  dataset: 'your-dataset-name',
  useCdn: true, // Set this to false if you want to enable preview mode
});

export default client;
```

Replace `your-project-id` and `your-dataset-name` with your actual Sanity project ID and dataset name.


### Deploy Sanity Studio on Sanity

1. Ensure Studio Configuration:
Make sure your Sanity Studio configuration is set up correctly. This includes defining schemas, configuring plugins, and setting up authentication if required.

2. Install Sanity CLI:
If you haven't already installed the Sanity CLI, you can do so by running:
`npm install -g @sanity/cli`

3. Deploy Studio:
Use the Sanity CLI to deploy the Studio. Navigate to your Sanity Studio directory and run:
`sanity deploy`
This command will deploy your Studio to the default hosting provided by Sanity.

4. Follow Deployment Instructions:
Follow the prompts and instructions provided by the CLI during the deployment process. You may need to log in to your Sanity account and authorize the deployment.

5. Access Deployed Studio:
Once the deployment is complete, you'll receive a URL where your Sanity Studio is hosted. You can access the deployed Studio by navigating to this URL in your web browser.

### Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch
3. Make your changes.
4. Commit your changes
5. Push to the branch 
6. Merge the Branch into main branch
7. Push the commits in main

## License

This project is licensed under the CodeAutomation.

---

Happy coding! 🚀
