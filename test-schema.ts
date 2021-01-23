import {
  IColorConfigType,
  INumberConfigType,
  ISelectConfigType,
  ITextConfigType,
  TColorDefaultType,
  TNumberDefaultType,
  TSelectDefaultType,
  TTextDefaultType,
} from '@/core/FormComponents/types';
// import { baseConfig, baseDefault, ICommonBaseType } from '../../common';

export type TfooterSelectKeyType = 'left' | 'center' | 'right';

export type TFooterEditData = Array<
  IColorConfigType | INumberConfigType | ITextConfigType | ISelectConfigType<TfooterSelectKeyType>
>;
// export interface IFooterConfig extends ICommonBaseType {
export interface IFooterConfig {
  bgColor: TColorDefaultType;
  text: TTextDefaultType;
  color: TColorDefaultType;
  align: TSelectDefaultType<TfooterSelectKeyType>;
  fontSize: TNumberDefaultType;
  height: TNumberDefaultType;
}

export interface IFooterSchema {
  editData: TFooterEditData;
  config: IFooterConfig;
}

const Footer = {
  editData: [
    {
      key: 'pageType',
      name: '所属页面',
      type: 'Select',
      range: [
        {
          key: 'index',
          text: '首页',
        },
        {
          key: 'list',
          text: '列表页',
        },
        {
          key: 'detail',
          text: '详情页',
        },
      ],
    },
    {
      key: 'platform',
      name: '上报平台',
      type: 'checkbox',
      range: [
        {
          key: 'tcss',
          text: 'Tcss',
        },
        {
          key: 'moss',
          text: 'Moss',
        },
      ],
    },
    {
      key: 'pointType',
      name: '埋点类型',
      type: 'Radio',
      range: [
        {
          key: 0,
          text: '静态',
        },
        {
          key: 1,
          text: '动态',
        },
      ],
    },
    {
      key: 'isClickContent',
      name: '点击或内容上报',
      type: 'Select',
      range: [
        {
          key: 'click',
          text: '点击上报',
        },
        {
          key: 'content',
          text: '内容上报',
        },
      ],
    },
    {
      key: 'chName',
      name: '事件中文',
      type: 'Text',
      required: true,
    },
    {
      key: 'chDescription',
      name: '事件中文描述',
      type: 'Text',
    },
    {
      key: 'enName',
      name: '事件英文',
      type: 'Text',
    },
    {
      key: 'type',
      name: '事件类型',
      type: 'Select',
      range: [],
    },
    {
      key: 'action',
      name: '操作行为',
      type: 'Select',
      range: [],
    },
    {
      key: 'targettype',
      name: '内容类型',
      type: 'Select',
      range: [],
    },
    {
      key: 'froms',
      name: '内容来源',
      type: 'Select',
      range: [],
    },
  ],
  config: {
    pageType: 'rgba(0,0,0,1)',
    platform: 'moss',
    pointType: 0,
    isClickContent: 'click',
  },
};
export default Footer;
