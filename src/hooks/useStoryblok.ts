import type { Block, Head } from '@/types/blocks';
import { getVersion } from '@/utils/storyblok';
import {
  useStoryblokApi,
  type ISbStoryData,
  getLiveStory as sbGetLiveStory,
} from '@storyblok/astro';
import type { AstroGlobal } from 'astro';

export const useStoryblok = (astro: Readonly<AstroGlobal<any, any>>) => {
  const storyblokApi = useStoryblokApi();
  const version = getVersion();

  const getStories = async (): Promise<ISbStoryData[]> => {
    const { data } = await storyblokApi.get('cdn/stories', {
      content_type: 'page',
      version,
    });

    const stories = data.stories as Record<string, ISbStoryData>;
    return Object.values(stories);
  };

  const getLiveStory = async () => {
    const liveStory = await sbGetLiveStory(astro);
    return liveStory;
  };

  const getStoryContentBySlug = async (
    slug: string | undefined
  ): Promise<{ head: Head[]; body: Block[]; footer: Block[]; navigation: Block[] }> => {
    let liveStory: any;
    if (version === 'draft') {
      liveStory = await getLiveStory();
      if (liveStory) {
        return liveStory.content;
      }
    }

    const { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
      version,
    });

    const content = data.story.content;
    if (!content) {
      throw new Error('Content not found');
    }
    return content;
  };

  const getSiteConfig = async (): Promise<{ footer: Block[] }> => {
    const { data } = await storyblokApi.get('cdn/stories/site-config', {
      version,
    });

    const content = data.story.content;
    if (!content) {
      throw new Error('Site config not found');
    }
    return content;
  };

  return {
    getStories,
    getStoryContentBySlug,
    getSiteConfig,
  };
};
