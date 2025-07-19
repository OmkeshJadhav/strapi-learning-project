/**
 * `page-populate` middleware
 */

import type { Core } from '@strapi/strapi';

const pagesBuiltQuery = {
    blocks: {
      on:{
        "blocks.person-card": {
          populate: {
            image: {
              fields: ["url", "alternativeText"]
            }
          }
        }
      }
    }
  }

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In page-populate middleware.');
    ctx.query.populate = pagesBuiltQuery
    
    await next();
  };
};
