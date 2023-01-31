const { SitemapStream, streamToPromise } = require("sitemap");
const { createServer } = require("http");
const { writeFile } = require("fs");
const Router = require("./router");

const websiteURL = "https://hasanur.me";
const hostname = websiteURL.replace(/https?:\/\//, "");
const assetsPath = "src/assets/";

const server = createServer((req, res) => {
  if (req.url === "/sitemap.xml") {
    res.setHeader("Content-Type", "application/xml");
    const smStream = new SitemapStream({ hostname });

    const routes = Router();
    routes.forEach((route) => {
      if (!route.path.includes(":") && !route.path.startsWith(assetsPath)) {
        smStream.write({
          url: `${websiteURL}${route.path}`,
          changefreq: "monthly",
          priority: 0.8,
        });
      }
    });

    smStream.end();
    streamToPromise(smStream).then((sm) => {
      writeFile("sitemap.xml", sm, (err) => {
        if (err) throw err;
        console.log("Sitemap file saved successfully");
      });
      res.end(sm);
    });
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
});

server.listen(3000, () => {
  console.log("Sitemap is available at http://localhost:3000/sitemap.xml");
});
