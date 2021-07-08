# flat-rss-example
Generate usable RSS feeds from web-pages using GitHub OCTO Flat Data

This is really just an example and is based on my other RSS feed generators which run on AWS Lambda.

To use for a different page, just set the URL in flat.yaml and then write your own scraping code in postprocess.ts. Luckily Deno is close enough to Node.js that Cheerio works almost out of the box.

Most news-style pages are generally easy to scrape. You're just looking for a repeated div to base your grabbing of each article's title/url/image/summary

In this example, the latest copy of the source HTML is saved to the repo (not necessary) as tokyo-marathon.html and then the generated RSS is saved to the repo as tokyo-marathon.xml. But to be accessible to Feed readers like [Feedly](https://feedly.com) you need to serve up the output as content-type application/xml. I do this by using [jsDelivr](https://www.jsdelivr.com/)

So the RSS feed for the [Tokyo Marathon news page](https://www.marathon.tokyo/en/news/) can be found at https://cdn.jsdelivr.net/gh/conoro/flat-rss-example/tokyo-marathon.xml


# TO-DO
* Let one repo do the scraping for many sites.
* Persist data over time for historical purposes
* Error handling
* More examples based on previous scrapers I've done like South China Morning Post

Copyright Conor O'Neill, 2021 (conor@conoroneill.com)

License Apache 2.0

