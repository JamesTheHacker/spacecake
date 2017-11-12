# SpaceCake

![Spacecake](https://i.imgur.com/52xCV8Z.png, "")

I developed this project to help me quickly develop and deploy static landing pages to Digital Ocean Spaces (S3 is also supported). Spaces is perfect for hosting static pages and applications.

Bonus: If you're not a Digital Ocean customer you can get $10 free. That's enough money for 2 months hosting. [Click here to get your $10 free](https://m.do.co/c/dde4646baa31).

SpaceCake is perfect for:

* Sales letters and landing pages
* Newsletters
* CVs and resumes
* Small single page applications

## Features

* Deploy to Digital Ocean Spaces (and S3)
* ES6
* Bootstrap SASS
* jQuery
* Webpack
* Minification
* Seperate CSS and JS builds
* Google fonts CDN

## Usage

**Install**

   git clone http://github.com/JamesTheHacker/spacecake
   cd spacecake
   yarn install

**Launch Development Server**

SpaceCake has a built in development server with live reloading support.

    yarn run dev

After the development server starts navigate to `http://localhost:8080/`

## Deploy to Digital Ocean Spaces

**Generate Token**

1. Log into digital ocean and navigate to the following URL: `https://cloud.digitalocean.com/settings/api/tokens`.
2. Press the "Generate a new token" button and ensure the "write" box is checked.

Make a note of the key and secret. You'll need them in a moment.

**Create New Space**

A "space" is identical to a "bucket" on S3. In fact, Digital Ocean's Spaces feature is built on S3. SpaceCake will also work with S3 :)

Navigate to the following URL `https://cloud.digitalocean.com/spaces/new`. Enter a space name and ensure "Manage Access" is public.

Make a note of the space name.

**Create .env configuration**

Create a new `.env` file in the project's root directory with the following variables:

    KEY=XXXXXXXXXXXXXXXXX
    SECRET=XXXXXXXXXXXXXXXXXX
    BUCKET=bucket_name

* `KEY`: Digital Ocean/S3 access key
* `SECRET`: Digital Ocean/S3 secret
* `BUCKET`: Digital Ocean space name, or S3 bucket name

**Deploy!**

To deploy run the following command:

    yarn run deploy

If deployment was successful you should be able to navigate to your space and see everything working: `https://nyc3.digitaloceanspaces.com/SPACE_NAME/index.html`. Replace `SPACE` with the name of your space.

You can also get the public URL by navigating to your space on Digital Ocean and pressing the "Quick Share" button.

Here's one I done earlier: https://nyc3.digitaloceanspaces.com/jtest/index.html

## Minification

When deploying to spaces all `html`, `js` and `css` files are minified by default. Spacecake uses [purifycss](https://github.com/purifycss/purifycss) and [babel minify](https://github.com/babel/minify).

## Bootstrap SASS

Spacecake comes bundled with bootstrap, and SASS. SCSS files are stored in `src/scss`. SASS compilation is handled by [bootstrap-loader](https://github.com/shakacode/bootstrap-loader). Configuration is defined in the `.bootstraprc` file. See [bootstrap-loader](https://github.com/shakacode/bootstrap-loader) for configuration options.

## Assets

Images, videos, audio etc should be stored in the `src/assets` directory. Use [relative urls](https://vuejs-templates.github.io/webpack/static.html) when loading assets. Like so:

    <img src="./assets/logo.png">

## JavaScript

ES6 is supported via Babel. JS files should be included in the `src/js` directory. `src/js/app.js` is the applications entry point.

## Help!

If you can improve this project in any way please submit a PR. I welcome all PR's, issues and requests. Don't be afraid.