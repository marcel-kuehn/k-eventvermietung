import type { ISbStoryData } from '@storyblok/astro';

export const getVersion = () => (import.meta.env.DEV ? 'draft' : 'published');
export const transformStoryToStaticPath = (
  story: ISbStoryData
): { params: { slug: string /* "/contact" */ } } => {
  return {
    params: { slug: story.full_slug },
  };
};

// ID's in storyblok may start with a number which is invalid in HTML.
// This function makes sure you can use a storyblok UID safely as an HTML ID.
export const makeSafeIDfromUID = (uid: string): string => {
  return `block-${uid}`;
};
