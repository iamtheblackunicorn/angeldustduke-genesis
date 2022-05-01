<p align="center">
 <img src="https://angeldustduke.art/assets/images/banner/banner.png"/>
</p>

# Angeldust Duke :unicorn: :fire: :pill:

***Angeldust Duke: a bad b\*tch, a creative soul, and eccentric as f\*ck. :unicorn: :fire: :pill:***

![GitHub CI](https://github.com/iamtheblackunicorn/angeldustduke/actions/workflows/jekyll.yml/badge.svg)

## About :books:

Welcome to the Angeldust Duke's website. I will be filling this website as time goes along. For now this is all you need know: Mr. Angeldust Duke is: a bad b\*tch, a creative soul, and eccentric as f\*ck. This website is one of many experiments, enjoy! :)

## Features :test_tube:

- SEO.
- Optimized for mobile and desktop devices.
- Modern, minimalistic design.
- Extensively customizable.
- An RSS feed.
- Optimized for search engines and back-linking.
- Extensive support for posting links on social media platforms.

## Usage :books:

### Passive

If you want to "just" "use" this site, view it here (I own the domain.): [angeldustduke.art](https://angeldustduke.art).

### Active

Since this website relies on the Jekyll CMS to do all the heavy lifting, it is, in effect, also a Jekyll theme.
If you want to use this theme for your own site, here's what you need to do.

- 1.) Make sure you have the following tools installed and available from the command line.
  - Ruby for your platform.
  - Jekyll for Ruby.
  - Bundler for Ruby.
  - A GitHub account with an access token. (Google it if you do not know how to acquire this.)
  - Git for your platform.
  - CMake (Optional.)
  - Half an hour.
- 2.) Fetch this website's source code:
```bash
$ git clone https://your_github_token@github.com/iamtheblackunicorn/angeldustduke.git
```
- 3.) Change directory into the source's root directory:
```bash
$ cd angeldustduke
```
- 4.) Install the dependencies:
```bash
$ bundle install
```
- 5.) Check if the site serves/builds.
```bash
$ bundle exec jekyll serve # Or bundle exec jekyll build
```
- 6.) Customize everything as you see fit:
  - You can change the colors and fonts here: `_sass/angeldustduke/_variables.scss`.
  - You can change the site's base configuration by reading the file called `_config.yml`. Here's a list of all variables and what they do:
    - `analyticsID`: Google Analytics ID, if you want to track the site's usage.
    - `bannerDescription`: The description of your site's banner. (This will appear on social media.)
    - `banner`: Your site's banner. This *has* to be fetched from a third-party server and *has* to be a `PNG`, otherwise your site might break.
    - `footerText`: Text in the footer section.
    - `postedOnText`: Text to put below a post's title to tell readers when this post was updated last.
    - `year`: The current year.
    - `name`: Your site's name.
    - `owner`: Your name.
    - `logoDescription`: The description or name of your site's logo.
    - `menuText`: Text for the link to open the navigation menu.
    - `avatar`: URL to your site's avatar. ("Profile Picture".)
    - `postsExist`: Set this to `true` or `false` depending on wheter your site has posts or not.
    - `closeText`: Text for the link to close the navigation menu.
    - `readPostText`: Link text for reading posts for the `blog` layout.
    - `noPostText`: Description of why your site doesn't have any posts.
    - `noPostTitle`: What to display if your site doesn't have any posts.
    - `noPostUrl`: Link for redirecting users to a link if your site doesn't have any posts.
    - `viewNoPostUrl`: Text to display on the link for redirecting users to a link if your site doesn't have any posts.
    - `keywords`: Keywords of what your site is about for search engines to find your site.
    - `iconsPresent`: Set this to `true` or `false` if your site has icons.
    - `iconUrlIsAbsolute`: Set this to `true` or `false` if you're fetching the icons from a third-party server.
    - `57x57`: The URL to your icon of the given size.
    - `60x60`: The URL to your icon of the given size.
    - `72x72`: The URL to your icon of the given size.
    - `76x76`: The URL to your icon of the given size.
    - `114x114`: The URL to your icon of the given size.
    - `120x120`: The URL to your icon of the given size.
    - `144x144`: The URL to your icon of the given size.
    - `152x152`: The URL to your icon of the given size.
    - `180x180`: The URL to your icon of the given size.
    - `192x192`: The URL to your icon of the given size.
    - `32x32`: The URL to your icon of the given size.
    - `96x96`: The URL to your icon of the given size.
    - `16x16`: The URL to your icon of the given size.
    - `siteManifest`: The URL to your icon of the given size.
    - `144x144`: The URL to your icon of the given size.
    - `description`: Your site's description. What is your site about?

  - You can configure all posts as you see fit. Each post has the following variables that you can customize.
    - `layout`: Which layout you want to use for this post. `layout` has three possible configurations: `page`, `blog`, or `post`. This *has* to be set. We recommend that you use the `post` layout for posts. To see how the `page` layout os used, look at the standard [404 page](404.markdown).
    - `title`: The title of your post.
    - `description`: A short description of your post.
    - `layoutType`: What type of layout are you using for what? Populate this with `post`.
    - `banner`: Does your post have a cover image?
    - `show`: Tells Jekyll whether to display your post on the front page or not.
    - `bannerType`: What file type is your cover image? `png` or `jpg`?
    - `bannerUrlIsAbsolute`: Are you fetching the cover image from a third-party server? Set this to `true` or `false`.
    - Finally: You make a new post like this:
      - 1.) Create a file of the format `YYYY-MM-DD-Title-seperated-by-spaces.markdown` where `YYYY` is the year, `MM` is the month and `DD` is the day in the `_posts` directory.
      - 2.) Fill the file like this:
      ```markdown
      ---
      layout: "page"
      title: My first post!
      description: An awesome sample post.
      show: true
      banner: "https://example.com/some_image.png"
      bannerType: "png"
      bannerUrlIsAbsolute: true
      ---

      ## Your awesome post
      Your awesome text.
      ```
      - 3.) Enjoy. :)

## Note :scroll:
- *Angeldust Duke :unicorn: :fire: :pill:* by Alexander Abraham :black_heart: a.k.a. *"The Black Unicorn" :unicorn:*
- Licensed under the MIT license.
