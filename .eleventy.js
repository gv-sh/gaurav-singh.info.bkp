const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addCollection("notes", function (collectionApi) {
        return collectionApi.getFilteredByGlob("notes/**/*.md");
    });
    eleventyConfig.addFilter("date", function (date) {
        return DateTime.fromJSDate(date).toFormat("dd.MM.yyyy");
    });
    eleventyConfig.addFilter("year", function (date) {
        return DateTime.fromJSDate(date).year;
    });

    eleventyConfig.addCollection("postsByYear", function (collectionApi) {
        let posts = collectionApi.getFilteredByGlob("notes/**/*.md");

        posts.forEach(post => {
            let year = DateTime.fromJSDate(post.date).year;
            post.data.year = year;
        });

        return posts.sort((a, b) => b.date - a.date);
    });
    eleventyConfig.addFilter("trimYear", function (postTitle) {
        return postTitle.replace(/,\s*\d{4}$/, "");
    });
}