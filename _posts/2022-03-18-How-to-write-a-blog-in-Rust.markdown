---
layout: post
date_time: "2022/03/18"
description: "How to write your blog in a fast and efficient language like Rust."
title: "How to write a blog in Rust."
show: true
tags: "static-site-generator rust programming"
---

## Preamble

Many years ago, when i was first learning about GitHub and the many wonderful features it had, I discovered that i could get my own website up and running on GitHub without too much drama and very little complication. I learned that the basic tool used by GitHub for their Pages service was Jekyll. Jekyll is a content-management system written in Ruby. Some people call it a static-site generator but CMS or SSG is the same thing. You have a bunch of Markdown files and maybe a configuration file and from this, Jekyll generates a website. Now, while I've developed multiple themes for Jekyll, among them <list of themes>, I recently discovered that Ruby is not very widely-spread and as a result, Jekyll might soon die off. While I hope this never happens, I don't want to take a chance and find out. To counteract this fear, I wrote my own static-site generator in my now-favourite language, Rust. After doing some research on other SSGs in Rust and Go, I decided that getting up and running seemed to complicated. I wanted something simple and light. So I wrote *Acid*. *Acid* is a light-weight supersonic static-site generator written in Rust by me. This post will be a quick getting-started guide to *Acid*.

## So! Let's get started!

Because *Acid* is written in Rust, you will need the Rust toolchain installed and available from the command-line. To do this, visit [https://www.rust-lang.org/](https://www.rust-lang.org/). Once that is done, check if you have Git installed.

To run *Acid* on your own machine and I haven't uploaded *Acid* to [Crates.io](https://crates.io), Rust's package registry, you will have to fetch ***Acid's*** source code from GitHub. This can be done with this command:

```bash
$ git clone https://github.com/iamtheblackunicorn/acid.git
```

Once that is done, change directory into *Acid*'s source directory and run the following command to compile *Acid*. (This might take some time.)

```bash
$ cargo build --release
```

This will produce an executable in the following location:

```text
target/release
```

Copy this executable to a location you can access from the command-line easily.


## Creating an *Acid* site.

### Creating the required files and directories.

Fist, we need to configure our *Acid* site. To do this, create a new directory called "mysite". Inside this directory, create two files called "config.json" and "index.markdown", respectively. Next, create four directories: "pages", "posts", "layouts", and "assets".

### Configuring your site.

Configure your site by putting the following into your "config.json" file:

```JSON
{
  "title":"My cool new site.",
  "baseurl":"/",
  "has_assets":"true",
  "assets_path":"assets",
  "description":"Describe your cool new site here."
}
```
- "title": The title of your site.
- "baseurl": The root URL of your project. In this case, we'll use "/".
- "has_assets": Does our site have static local assets? (A folder with CSS and Javascript?) Ours will, that is why we'll set this to "true".
- "assets_path": Where in our project are our static local assets? Since, in this project, we'll have our assets as a direct sub-folder of our project folder, we'll just fill this field with "assets".
- "description": A short description of our site, we'll need this for SEO.

### Creating some layouts.

The "layouts" folder that you created previously has our site's layouts in it. Our layouts are HTML files with Liquid variables and tags in them that allow us to recursively replace these variables with certain values. These values are supplied by our Markdown files and our configuration file. In the "layouts" directory, create a new file called "blog.html" and fill it with the following code:

```Liquid

```

A quick exaplanation: In the stylesheet link, we insert the link to our stylesheet and prepend that with our site's "baseurl".
Next, we fetch our site's description and fill that in too. After that, we fetch the site's title and put that in the page's title tag. That is the "head" section.

In the "body" section, we iterate over our site's posts, saved in the "posts" variable and display each post's title, description and URL so that readers can click on our post's link and read it.

The next layout we will create is the "post" layout. This layout will allow visitors of the site to read our posts in full length. Create a new file called "post.html" and fill it with this code:

```Liquid

```

The "head" section is the same as before. The "body" section displays our "page's" content (This is actually our post's content.) and the site's title.

Finally, create a new file in the "layouts" directory, called "page.html" and copy over the code from "post.html".

### Writing a new post!

Our site's posts all live in the "posts" directory. *Acid* looks in this directory for Markdown files and renders what it finds with the given layout. Create a new file called "2022-03-18-Hello.markdown" and fill it with the following:

```markdown
---
layout:post
title:Hello World!
description:A small 'Hello World' post!
---

## Hello World!

A small 'Hello' World post! This is nice, new, shiny blog!
```

The "layout" YAML variable tells *Acid* which layout to use. "title" and "description" have to be there because we requested it in the "post.html" layout previously.

### Making a content page.

If we wanted to create a content page, like an "About" page, we would create a file called "about.markdown" in the "pages" directory and fill it with the following:

```markdown
---
layout:page
title:About
---

## About

This is a sample about page. Write something about yourself here.
```

The YAML front-matter (The variables with "title", "layout", etc.) of this Markdown file is exactly the same as the one we used for the post, except that the layout is different.

### Making it all look pretty.

The pen-ultimate step in this walk-through is this: Now we've built most of the site, we need to make it all look good. For this we created the "assets" directory. Inside this "directory", create another directory called "css" and inside "css" create a file called "styles.css". Fill your stylesheet with the following CSS code:

```CSS
html,body {
  width: 100vw;
  height: 100vh;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: 0;
  padding: 0;
  background-color: #FFF;
}
h1 {
  text-align: center;
  margin: 0;
  padding-top: 30px;
  padding-bottom:3px;
  padding-left: 0px;
  padding-right: 0px;
  font-family: monospace;
  font-size: 35px;
  color: #00F900;
}
div.content {
  padding: 10px;
  border: 2px solid #000;
  margin: 0 auto;
  display: block;
  width: 60vw;
}
h2 {
  text-align: left;
  font-family: monospace;
  padding: 0;
  font-size: 30px;
  color: #000000;
}
h3 {
  text-align: left;
  font-family: monospace;
  font-size: 28px;
  padding: 0;
  color: #000000;
}
h4 {
  text-align: left;
  font-family: monospace;
  font-size: 26px;
  padding: 0;
  color: #000000;
}
p {
  text-align: left;
  font-family: monospace;
  font-size: 25px;
  padding: 0;
  color: #000000;
}
a {
  text-align: left;
  font-family: monospace;
  font-size: 25px;
  color: #000000;
  text-decoration: underline;
}
a:hover {
  color: #808080;
}
ul {
  list-style: disc;
}
li {
  text-align: left;
  font-family: monospace;
  font-size: 25px;
  padding: 10px;
  color: #000000;
}
hr {
  width: 100%;
  border: none;
  background-color: #000;
  padding: 0;
  margin: 0;
}
p.footer {
  text-align: center;
  font-family: monospace;
  font-size: 20px;
  padding: 0;
  color: #000000;
}
p.subtitle {
  font-style: italic;
  text-align: center;
  font-family: monospace;
  font-size: 20px;
  padding: 0;
  margin: 0;
  color: #000000;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  padding-bottom: 30px;
}
div.footer {
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  margin: 0;
  background-color: #FFF;
  border-top: 2px solid #000;
  border-bottom: none;
  border-left: none;
  border-right: none;
  position: fixed;
}
@media screen and (max-width: 800px){
  h1 {
    font-size: 30px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  div.content {
    width: 80vw;
  }
  h2 {
    font-size: 25px;
  }
  p {
    font-size: 22px;
  }
  li {
    font-size: 22px;
    padding: 10px;
  }
  p.subtitle {
    font-size: 15px;
  }
  p.footer {
    font-size: 15px;
  }
}
```

Now, *Acid* can load our stylesheet and our site looks somewhat put-together, albeit a bit minimalistic.

### Bringing it all together.

Finally, we need to fill the file called "index.markdown" we created previously. This file is the base for building the site's "index.html" and giving visitors an overview over our site's blog. So, to do this, we need to request the "blog" layout. To do this, fill "index.markdown" with the following code:

```markdown
---
layout:blog
title:My cool new site.
---
```

Great, now we can compile our site!

### Building our site!

Assuming that you copied the "acid" executable in such a way that is now available from the command-line, you can now run the following command in your site's root directory:

```bash
$ acid build .
```

## Final words

*Acid* *is* missing some features that Jekyll provides such as themes and live-reloading your site. This is because the project is still under active development by myself and I am still looking for efficient options to maybe implement these features in future updates. If you would like to try out *Acid*, check out the project's repository on GitHub [here]() or follow me on Twitter [here](https://twitter.com/angeldustduke). I would appreciate some stars on the project's GitHub repo and if you feel that you can help me make *Acid* better, please do not hesitate to contribute and file a Pull Request! If you would like to support me and buy me a coffee, send me some Ethereum tokens to [this address](0x5d7551C484bCd8769c57B4921a3FC80193b74Ce3). Finally, you can also read this post on my Hashnode blog [here]().
