/**
 * `blog-populate` middleware
 */

import type { Core } from '@strapi/strapi';

const blogsBuiltQuery = {
    blog: {
        populate: {
            featured_image: {
                fields: ["url", "alternativeText"]
            },
        }
    },
    authors: {
      fields: ['author_name', 'author_details'],
      populate: {
        author_image: {
          fields: ["url", "alternativeText"]
        }
      }
    },
    contentTag: true
}

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In blog-populate middleware.');
    ctx.query.populate = blogsBuiltQuery

    await next();
  };
};
