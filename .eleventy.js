const { DateTime } = require("luxon");


module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("CNAME");

    eleventyConfig.addCollection("education", function (collectionApi) {
		return collectionApi.getFilteredByGlob(["education/*.md"]);
	});

    eleventyConfig.addCollection("exchanges", function (collectionApi) {
		return collectionApi.getFilteredByGlob(["exchanges/*.md"]);
	});

    eleventyConfig.addCollection("mathscapes", function (collectionApi) {
		return collectionApi.getFilteredByGlob(["mathscapes/*.md"]);
	});

    eleventyConfig.addCollection("mentors", function (collectionApi) {
		return collectionApi.getFilteredByGlob(["mentors/*.md"]);
	});

    eleventyConfig.addCollection("unorganised", function (collectionApi) {
		return collectionApi.getFilteredByGlob(["unorganised/*.md"]);
	});

    eleventyConfig.addCollection("peers", function (collectionApi) {
		return collectionApi.getFilteredByGlob(["peers/*.md"]);
	});

    eleventyConfig.addCollection("projects", function (collectionApi) {
		return collectionApi.getFilteredByGlob(["projects/*.md"]);
	});

    eleventyConfig.addCollection("publications", function (collectionApi) {
		return collectionApi.getFilteredByGlob(["publications/*.md"]);
	});

    eleventyConfig.addCollection("reride", function (collectionApi) {
		return collectionApi.getFilteredByGlob(["reride/*.md"]);
	});

    eleventyConfig.addCollection("store", function (collectionApi) {
		return collectionApi.getFilteredByGlob(["store/*.md"]);
	});

    eleventyConfig.addCollection("study", function (collectionApi) {
		return collectionApi.getFilteredByGlob(["study/*.md"]);
	});

    eleventyConfig.addCollection("students", function (collectionApi) {
		return collectionApi.getFilteredByGlob(["students/*.md"]);
	});

    eleventyConfig.addCollection("teaching", function (collectionApi) {
		return collectionApi.getFilteredByGlob(["teaching/**/*.md"]);
	});

    eleventyConfig.addCollection("travel", function (collectionApi) {
		return collectionApi.getFilteredByGlob(["travel/*md"]);
	});
    
    eleventyConfig.addCollection("worked-at", function (collectionApi) {
		return collectionApi.getFilteredByGlob(["worked-at/*.md"]);
	});

    eleventyConfig.addCollection("writing", function (collectionApi) {
		return collectionApi.getFilteredByGlob(["writing/*.md"]);
	});

    eleventyConfig.addCollection("yearly-notes", function (collectionApi) {
		return collectionApi.getFilteredByGlob(["yearly-notes/*.md"]);
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
