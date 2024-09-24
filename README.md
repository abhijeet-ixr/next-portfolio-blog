# Personal blog cum portfolio starter kit with Next 14

I was creating a blog for my personal use using NextJS and Tailwind and decided to extract the basic setup to be used a template. Most of the templates available are just a starter kit and miss on something or other. This has everything that you need of for starting a blog:

- NextJS with app router
- MDX
- Contact API to send emails using Gmail / Nodemailer
- Tailwind CSS
- Tailwind typography
- Daisy UI
- Google Analytics
- JSON LD
- ESLint
- Prettier
- Env file

## Steps to build your blog:

- Clone this repo
- This project uses npm to manage node modules, so install the dependencies using `npm install` or `npm i`
- Run the project in dev mode using `npm run dev`
- Visit the browser at [http://localhost:3000](http://localhost:3000)

## Customizing the portfolio data

- Update the .env file with required values (but don't push it your repo)
- Replace the dummy data for landing page in `src/data` files with values that best describes you
- Replace with your icons and data for manifest, robots and sitemap files present in `src/app` directory
- Replace the email to, from and subject text in `src/app/api/contact/route.js`
- Update the SEO metadata in `src/app/page.js`, `src/app/blog/page.js` and `src/app/blog/[slug]/page.js`
- The landing page is broken into multiple sections `src/app/components/sections` - customize the text as needed
- Update the JSON LD data at `src/utils/jsonLD.js`
- Update the hero image at `public/img/about-image.png`

## Writing blogs

- Blogs are configured to be placed at `posts` directory at project root
- Cover images for the blog are to be placed at `public/img/blog/cover/file_name_to_be_blog_id`
- Images inside a blog are to placed at `public/img/blog/[create_a_directory_with_blog_id]/[image_name]`
- Each word in blog filename must be `-` separated as that would be your URL and ending with `.mdx` extension
- Each blog post will have two sections - metadata and content
- Metadata will used for SEO and page render both
- Content section will have your mdx data [https://mdxjs.com/](https://mdxjs.com/)

## Deployment

- I am using a VPS to host my hobby projects as that allows me to tinker around the server and learn the setup process
- Push your code to git
- Pull into your server
- Build for production using `npm run build`
- Fix any linting errors if thrown
- Install PM2
- Install Nginx
- Install certbot for HTTPS
- Create server block in Nginx
- Configure nginx to use HTTP/2
- Start your site using PM2 and configure it to start on server reboot