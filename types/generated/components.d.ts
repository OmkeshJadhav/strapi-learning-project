import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksCardGrid extends Struct.ComponentSchema {
  collectionName: 'components_blocks_card_grids';
  info: {
    displayName: 'Card Grid';
    icon: 'dashboard';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.card', true>;
  };
}

export interface BlocksCardWithContent extends Struct.ComponentSchema {
  collectionName: 'components_blocks_card_with_contents';
  info: {
    displayName: 'Card With Content';
    icon: 'chartBubble';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.Component<'shared.link', false>;
  };
}

export interface BlocksContentBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_content_blocks';
  info: {
    displayName: 'Content Block';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    heading: Schema.Attribute.String;
  };
}

export interface BlocksFaqs extends Struct.ComponentSchema {
  collectionName: 'components_blocks_faqs';
  info: {
    displayName: 'Faqs';
  };
  attributes: {
    faq: Schema.Attribute.Component<'shared.card', true>;
  };
}

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
    icon: 'alien';
  };
  attributes: {
    descriptionText: Schema.Attribute.RichText;
    Heading: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Links: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface BlocksNewsletter extends Struct.ComponentSchema {
  collectionName: 'components_blocks_newsletters';
  info: {
    displayName: 'Newsletter';
  };
  attributes: {
    button: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    form_id: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
  };
}

export interface BlocksPersonCard extends Struct.ComponentSchema {
  collectionName: 'components_blocks_person_cards';
  info: {
    displayName: 'Person Card';
    icon: 'alien';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    person_designation: Schema.Attribute.String;
    person_details: Schema.Attribute.Text;
    person_name: Schema.Attribute.String;
  };
}

export interface BlocksSectionHeader extends Struct.ComponentSchema {
  collectionName: 'components_blocks_section_headers';
  info: {
    displayName: 'Section Header';
    icon: 'expand';
  };
  attributes: {
    anchorLink: Schema.Attribute.String;
    largeHeading: Schema.Attribute.String;
    smallHeading: Schema.Attribute.String;
  };
}

export interface LayoutBanner extends Struct.ComponentSchema {
  collectionName: 'components_layout_banners';
  info: {
    displayName: 'Banner';
  };
  attributes: {
    BannerLink: Schema.Attribute.Component<'shared.link', false>;
    description: Schema.Attribute.Text;
    isVisible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Label: Schema.Attribute.String;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    companyLogo: Schema.Attribute.Component<'shared.logo-link', false>;
    copyrightText: Schema.Attribute.Text;
    navItems: Schema.Attribute.Component<'shared.link', true>;
    socialLinks: Schema.Attribute.Component<'shared.logo-link', true>;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    companyLogo: Schema.Attribute.Component<'shared.logo-link', false>;
    cta: Schema.Attribute.Component<'shared.link', false>;
    navItems: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface SharedBlogContent extends Struct.ComponentSchema {
  collectionName: 'components_shared_blog_contents';
  info: {
    displayName: 'Blog Content';
    icon: 'cast';
  };
  attributes: {
    blog_text: Schema.Attribute.RichText;
    featured_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    title: Schema.Attribute.String;
  };
}

export interface SharedCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'Card';
    icon: 'file';
  };
  attributes: {
    cardDescription: Schema.Attribute.String;
    cardHeader: Schema.Attribute.String;
    cardImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isButtonLink: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['PRIMARY', 'SECONDARY']>;
  };
}

export interface SharedLogoLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_logo_links';
  info: {
    displayName: 'Logo Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.card-grid': BlocksCardGrid;
      'blocks.card-with-content': BlocksCardWithContent;
      'blocks.content-block': BlocksContentBlock;
      'blocks.faqs': BlocksFaqs;
      'blocks.hero': BlocksHero;
      'blocks.newsletter': BlocksNewsletter;
      'blocks.person-card': BlocksPersonCard;
      'blocks.section-header': BlocksSectionHeader;
      'layout.banner': LayoutBanner;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'shared.blog-content': SharedBlogContent;
      'shared.card': SharedCard;
      'shared.link': SharedLink;
      'shared.logo-link': SharedLogoLink;
    }
  }
}
