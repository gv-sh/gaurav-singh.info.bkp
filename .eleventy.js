const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("CNAME");

    eleventyConfig.addCollection("notebook", function (collectionApi) {
        return collectionApi.getFilteredByGlob("notebook/**/*.md");
    });

    eleventyConfig.addFilter("date", function (date) {
        return DateTime.fromJSDate(date).toFormat("dd.MM.yyyy");
    });
    eleventyConfig.addFilter("year", function (date) {
        return DateTime.fromJSDate(date).year;
    });
    eleventyConfig.addFilter("capitalize", function (title) {
        return title.charAt(0).toUpperCase() + title.slice(1);
    });
    eleventyConfig.addFilter("trimYear", function (postTitle) {
        return postTitle.replace(/,\s*\d{4}$/, "");
    });
    eleventyConfig.addFilter("stripHtml", function (content) {
        return content.replace(/<[^>]*>?/g, "");
    });
    eleventyConfig.addFilter("unSlug", function (slug) {
        return slug.replace(/-/g, " ");
    });
    eleventyConfig.addFilter("toLowerCase", function (content) {
        return content.toLowerCase();
    });
    eleventyConfig.addFilter("push", function (array, item) {
        array.push(item);
        return array;
    });
    eleventyConfig.addFilter("sort", function (array) {
        return array.sort();
    });
}
