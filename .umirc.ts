import { defineConfig } from 'dumi';

export default defineConfig({
  title: '橙柚',
  mode: 'site',
  logo: 'https://cy-picgo.oss-cn-hangzhou.aliyuncs.com/desktop.jpg',
  resolve: {
    includes: ['docs', 'packages'],
  },
  // more config: https://d.umijs.org/config
});
