/**
 * `landing-page-populate` middleware
 */

import type { Core } from '@strapi/strapi';

const landingPageBuiltQuery = {
    blocks: {
      on: {
        "blocks.hero": {
          populate: {
            Links: true,
            Image: {
              fields: ["url", "alternativeText"]
            },
          }
        },
        "blocks.section-header": true,
        "blocks.card-grid":{
          populate:{
            cards:{
              populate:{
                cardImage:{
                  fields: ["url", "alternativeText"]
                }
              }
            }
          }
        },
        "blocks.card-with-content":{
          populate: {
            link: true,
            image: {
              fields: ["url", "alternativeText"]
            },
          }
        },
        "blocks.content-block": true,
        "blocks.person-card": {
          populate: {
            image: {
              fields: ["url", "alternativeText"]
            },
          }
        }
      }
    },
  }

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In landing-page-populate middleware.');
    ctx.query.populate = landingPageBuiltQuery
    await next();
  };
};
