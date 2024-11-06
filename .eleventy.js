const { DateTime } = require("luxon");


module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("CNAME");

    eleventyConfig.addPassthroughCopy({
        "node_modules/echo-css/src/styles.css": "assets/styles.css"
    });

    // Work - Projects, Teaching, Articles
    eleventyConfig.addCollection("articles", function (collectionApi) {
		return collectionApi.getFilteredByGlob(["work/articles/*.md"]);
	});

    eleventyConfig.addCollection("teaching", function (collectionApi) {
		return collectionApi.getFilteredByGlob(["work/teaching/**/*.md"]);
	});

    eleventyConfig.addCollection("projects", function (collectionApi) {
		return collectionApi.getFilteredByGlob(["work/projects/*.md"]);
	});

    // Notebook - Arts, Culture, Design, Dev, Maths, Reflect, Travel, Misc
    eleventyConfig.addCollection("arts", function (collectionApi) {
		return collectionApi.getFilteredByGlob(["notebook/arts/*.md"]);
	});

    eleventyConfig.addCollection("culture", function (collectionApi) {
		return collectionApi.getFilteredByGlob(["notebook/culture/*.md"]);
	});

    eleventyConfig.addCollection("design", function (collectionApi) {
		return collectionApi.getFilteredByGlob(["notebook/design/*.md"]);
	});

    eleventyConfig.addCollection("dev", function (collectionApi) {
		return collectionApi.getFilteredByGlob(["notebook/dev/*.md"]);
	});

    eleventyConfig.addCollection("maths", function (collectionApi) {
		return collectionApi.getFilteredByGlob(["notebook/maths/*.md"]);
	});

    eleventyConfig.addCollection("misc", function (collectionApi) {
		return collectionApi.getFilteredByGlob(["notebook/misc/*.md"]);
	});

    eleventyConfig.addCollection("reflect", function (collectionApi) {
		return collectionApi.getFilteredByGlob(["notebook/reflect/*.md"]);
	});

    eleventyConfig.addCollection("travel", function (collectionApi) {
		return collectionApi.getFilteredByGlob(["notebook/travel/*.md"]);
	});
    
    // Shoutouts

    eleventyConfig.addCollection("mentors", function (collectionApi) {
		return collectionApi.getFilteredByGlob(["shoutouts/mentors/*.md"]);
	});

    eleventyConfig.addCollection("peers", function (collectionApi) {
		return collectionApi.getFilteredByGlob(["shoutouts/peers/*.md"]);
	});

    eleventyConfig.addCollection("students", function (collectionApi) {
		return collectionApi.getFilteredByGlob(["shoutouts/students/*.md"]);
	});

    // Filters

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
