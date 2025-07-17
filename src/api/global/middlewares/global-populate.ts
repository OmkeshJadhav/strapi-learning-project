/**
 * `global-populate` middleware
 */

import type { Core } from '@strapi/strapi';

const builtQuery = {
  banner: {
    populate: {
      BannerLink: true
    }
  },
  Header: {
    populate: {
      companyLogo: {
        populate: {
          image: {
            fields: ["url", "name"]
          }
        }
      },
      navItems: true,
      cta: true,
    }
  },
  Footer: {
    populate: {
      companyLogo: {
        populate: {
          image: {
            fields: ["url", "name"]
          }
        }
      },
      navItems: true,
      socialLinks: {
        populate: {
          image: {
            fields: ["url", "name"]
          }
        }
      }
    }
  }
}


export default (config, { strapi }: { strapi: Core.Strapi }) => {
  return async (ctx, next) => {
    // console.log("Query", ctx.query)
    // console.dir(ctx.query, { depth: null })
    ctx.query.populate = builtQuery
    strapi.log.info('In global-populate middleware.');

    // Write search, filter, pagination logic here
    await next();
  };
};
