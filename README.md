# CakeHaven


This is a front-end project set up using [Tailwind CSS](https://tailwindcss.com/) for styling and [Prettier](https://prettier.io/) for code formatting.

## Project Structure

The project is designed to build and watch for changes in CSS files using Tailwind CSS. Additionally, Prettier is used to ensure the formatting of HTML files is consistent throughout the project.

### Files and Directories

- `src/`: Contains the source CSS file (`input.css`) where you import the necessary Tailwind CSS directives.
- `build/`: The output directory where the compiled and minified CSS (`style.css`) will be placed.
- `tailwind.config.js`: Tailwind CSS configuration file.
- `package.json`: Defines the project's dependencies, dev dependencies, and scripts.

## Scripts

### `tailwind`

Runs Tailwind CSS in watch mode, which watches for changes in `src/input.css` and outputs the compiled `style.css` to the `build/css/` directory.

```bash
npm run tailwind



