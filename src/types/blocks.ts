import type { Link, Image } from './ui';

export interface Block {
  _uid: string;
  component: string;
  [key: string]: any;
}

export interface BlockRendererProps {
  blocks: Block[];
}

export interface SectionProps {
  title?: string;
  text?: string;
  blocks: Block[];
  layout: 'tight' | 'default';
  _editable: string;
  _uid: string;
  component: string;
  id?: string;
}

export interface GridProps {
  blocks: Block[];
  desktopGap: string;
  mobileGap: string;
  mobileRowSize: number;
  tabletRowSize: number;
  desktopRowSize: number;
  _editable: string;
  _uid: string;
  component: string;
}

export interface FormProps {
  title: string;
  method: 'POST' | 'GET';
  action: string;
  formElements: Block[];
  cta: string;
  additionalElements?: Block[];
  _editable: string;
  _uid: string;
  component: string;
}

export interface Head {
  _uid: string;
  component: string;
  title: string;
  description: string;
  locale: string;
  robots: string;
  siteName: string;
  previewImage?: Image;
  type: string;
}

export interface RichTextProps {
  content: string;
  _editable: string;
  _uid: string;
  component: string;
}
