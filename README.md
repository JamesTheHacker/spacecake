# SpaceCake

![Spacecake](https://i.imgur.com/wMl0oeQ.png, "")

I developed this project to help me quickly develop and deploy landing pages to Digital Ocean Spaces. It uses react, mobx and styled-components.

Note: If you're not a Digital Ocean customer you can get $10 free. That's enough money for 2 months hosting. [Click here to get your $10 free](https://m.do.co/c/dde4646baa31).

## Features

* Build and deploy to Digital Ocean Spaces (also works with S3)
* Sentry error reporting
* react
* mobx
* styled-components
* grid-styled
* shevyjs
* React Font Awesome
* Webpack
* Google Fonts from CDN

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

## Useful Resources

* [Mobx](mobx.js.org)
* [React](reactjs.org)
* [styled-components](styled-components.com)
* [styled-grid](github.com/jxnblk/grid-styled)
* [react-fontawesome](https://github.com/danawoodman/react-fontawesome)
* [ShevyJS](https://github.com/kyleshevlin/shevyjs)
* [Awesome Styled Components](https://github.com/styled-components/awesome-styled-components)
* [Awesome React](https://github.com/enaqx/awesome-react)

## Help!

If you can improve this project in any way please submit a PR. I welcome all PR's, issues and requests.

## TODO

