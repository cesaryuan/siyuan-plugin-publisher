import { AuthMode, DynamicConfig, PlatformType, SubPlatformType } from "~/src/platforms/dynamicConfig.ts"
import { svgIcons } from "~/src/utils/svgIcons.ts"

/**
 * 通用平台定义
 */
export const mainPre = (t: any) => {
  return [
    {
      type: PlatformType.Common,
      title: t("setting.platform.universal"),
      img: "./images/universal.webp",
      description: t("setting.platform.universal.desc"),
    },
    {
      type: PlatformType.Github,
      title: t("setting.platform.github"),
      img: "./images/github.png",
      description: t("setting.platform.github.desc"),
    },
    {
      type: PlatformType.Gitlab,
      title: t("setting.platform.gitlab"),
      img: "./images/gitlab.jpg",
      description: t("setting.platform.gitlab.desc"),
    },
    {
      type: PlatformType.Metaweblog,
      title: t("setting.platform.metaweblog"),
      img: "./images/xmlrpc.png",
      description: t("setting.platform.metaweblog.desc"),
    },
    {
      type: PlatformType.Wordpress,
      title: t("setting.platform.wordpress"),
      img: "./images/wordpress-logo.svg",
      description: t("setting.platform.wordpress.desc"),
    },
    {
      type: PlatformType.Custom,
      title: t("setting.platform.custom"),
      img: "./images/http.png",
      description: t("setting.platform.custom.desc"),
    },
  ]
}

/**
 * 子平台预定义
 */
export const pre = {
  commonCfg: <DynamicConfig[]>[
    {
      platformType: PlatformType.Common,
      subPlatformType: SubPlatformType.Common_Yuque,
      platformKey: "common_Yuque",
      platformName: "语雀",
      platformIcon: svgIcons.iconIFYuque,
      authMode: AuthMode.API,
      isEnabled: false,
    },
    {
      platformType: PlatformType.Common,
      subPlatformType: SubPlatformType.Common_Notion,
      platformKey: "common_Notion",
      platformName: "Notion",
      platformIcon: svgIcons.iconIFNotion,
      authMode: AuthMode.API,
      isEnabled: false,
    },
    {
      platformType: PlatformType.Common,
      subPlatformType: SubPlatformType.Common_Halo,
      platformKey: "common_Halo",
      platformName: "Halo",
      platformIcon: svgIcons.iconIFHalo,
      authMode: AuthMode.API,
      isEnabled: false,
    },
  ],
  githubCfg: <DynamicConfig[]>[
    {
      platformType: PlatformType.Github,
      subPlatformType: SubPlatformType.Github_Hexo,
      platformKey: "github_Hexo",
      platformName: "Hexo",
      platformIcon: svgIcons.iconIFHexo,
      authMode: AuthMode.API,
      isEnabled: false,
    },
    {
      platformType: PlatformType.Github,
      subPlatformType: SubPlatformType.Github_Hugo,
      platformKey: "github_Hugo",
      platformName: "Hugo",
      platformIcon: svgIcons.iconIFHugo,
      authMode: AuthMode.API,
      isEnabled: false
    },
    {
      platformType: PlatformType.Github,
      subPlatformType: SubPlatformType.Github_Jekyll,
      platformKey: "github_Jekyll",
      platformName: "Jekyll",
      platformIcon: svgIcons.iconIFJekyll,
      authMode: AuthMode.API,
      isEnabled: false
    },
    {
      platformType: PlatformType.Github,
      subPlatformType: SubPlatformType.Github_Vuepress,
      platformKey: "github_Vuepress",
      platformName: "Vuepress",
      platformIcon: svgIcons.iconIFVuepress,
      authMode: AuthMode.API,
      isEnabled: false
    },
    {
      platformType: PlatformType.Github,
      subPlatformType: SubPlatformType.Github_Vuepress2,
      platformKey: "github_Vuepress2",
      platformName: "Vuepress2",
      platformIcon: svgIcons.iconIFVuepress2,
      authMode: AuthMode.API,
      isEnabled: false
    },
    {
      platformType: PlatformType.Github,
      subPlatformType: SubPlatformType.Github_Vitepress,
      platformKey: "github_Vitepress",
      platformName: "Vitepress",
      platformIcon: svgIcons.iconIFVue,
      authMode: AuthMode.API,
      isEnabled: false
    },
  ],
  gitlabCfg: <DynamicConfig[]>[
    {
      platformType: PlatformType.Gitlab,
      subPlatformType: SubPlatformType.Gitlab_Hexo,
      platformKey: "gitlab_Gitlabhexo",
      platformName: "Gitlabhexo",
      platformIcon: svgIcons.iconIFHexo,
      authMode: AuthMode.API,
      isEnabled: false,
    },
    {
      platformType: PlatformType.Gitlab,
      subPlatformType: SubPlatformType.Gitlab_Hugo,
      platformKey: "gitlab_Gitlabhugo",
      platformName: "Gitlabhugo",
      platformIcon: svgIcons.iconIFHugo,
      authMode: AuthMode.API,
      isEnabled: false
    },
    {
      platformType: PlatformType.Gitlab,
      subPlatformType: SubPlatformType.Gitlab_Jekyll,
      platformKey: "gitlab_Gitlabjekyll",
      platformName: "Gitlabjekyll",
      platformIcon: svgIcons.iconIFJekyll,
      authMode: AuthMode.API,
      isEnabled: false
    },
    {
      platformType: PlatformType.Gitlab,
      subPlatformType: SubPlatformType.Gitlab_Vuepress,
      platformKey: "gitlab_Gitlabvuepress",
      platformName: "Gitlabvuepress",
      platformIcon: svgIcons.iconIFVuepress,
      authMode: AuthMode.API,
      isEnabled: false
    },
    {
      platformType: PlatformType.Gitlab,
      subPlatformType: SubPlatformType.Gitlab_Vuepress2,
      platformKey: "gitlab_Gitlabvuepress2",
      platformName: "Gitlabvuepress2",
      platformIcon: svgIcons.iconIFVuepress2,
      authMode: AuthMode.API,
      isEnabled: false
    },
    {
      platformType: PlatformType.Gitlab,
      subPlatformType: SubPlatformType.Gitlab_Vitepress,
      platformKey: "gitlab_Gitlabvitepress",
      platformName: "Gitlabvitepress",
      platformIcon: svgIcons.iconIFVue,
      authMode: AuthMode.API,
      isEnabled: false
    },
  ],
  metaweblogCfg: <DynamicConfig[]>[
    {
      platformType: PlatformType.Metaweblog,
      subPlatformType: SubPlatformType.Metaweblog_Cnblogs,
      platformKey: "metaweblog_Cnblogs",
      platformName: "博客园",
      platformIcon: svgIcons.iconIFCnblogs,
      authMode: AuthMode.API,
      isEnabled: false,
    },
    {
      platformType: PlatformType.Metaweblog,
      subPlatformType: SubPlatformType.Metaweblog_Typecho,
      platformKey: "metaweblog_Typecho",
      platformName: "Typecho",
      platformIcon: svgIcons.iconIFTypecho,
      authMode: AuthMode.API,
      isEnabled: false,
    },
  ],
  wordpressCfg: <DynamicConfig[]>[
    {
      platformType: PlatformType.Wordpress,
      subPlatformType: SubPlatformType.Wordpress_Wordpress,
      platformKey: "wordpress_Wordpress",
      platformName: "Wordpress",
      platformIcon: svgIcons.iconIFWordpress,
      authMode: AuthMode.API,
      isEnabled: false,
    },
  ],
  customCfg: <DynamicConfig[]>[
    {
      platformType: PlatformType.Custom,
      subPlatformType: SubPlatformType.Custom_Zhihu,
      platformKey: "custom_Zhihu",
      platformName: "知乎",
      platformIcon: svgIcons.iconIFZhihu,
      authMode: AuthMode.WEBSITE,
      authUrl: "https://www.zhihu.com/signin",
      domain: "zhihu.com",
      isEnabled: false,
    },
    {
      platformType: PlatformType.Custom,
      subPlatformType: SubPlatformType.Custom_CSDN,
      platformKey: "custom_Csdn",
      platformName: "CSDN",
      platformIcon: svgIcons.iconIFCSDN,
      authMode: AuthMode.WEBSITE,
      authUrl: "https://passport.csdn.net/login",
      domain: "csdn.net",
      isEnabled: false,
    },
    {
      platformType: PlatformType.Custom,
      subPlatformType: SubPlatformType.Custom_Wechat,
      platformKey: "custom_Wechat",
      platformName: "微信公众号",
      platformIcon: svgIcons.iconIFWechat,
      authMode: AuthMode.WEBSITE,
      authUrl: "https://mp.weixin.qq.com/",
      domain: "qq.com",
      cookieLimit: true,
      isEnabled: false,
    },
    {
      platformType: PlatformType.Custom,
      subPlatformType: SubPlatformType.Custom_Jianshu,
      platformKey: "custom_Jianshu",
      platformName: "简书",
      platformIcon: svgIcons.iconIFJianshu,
      authMode: AuthMode.WEBSITE,
      authUrl: "https://www.jianshu.com/sign_in",
      domain: "jianshu.com",
      isEnabled: false,
    },
    {
      platformType: PlatformType.Custom,
      subPlatformType: SubPlatformType.Custom_Juejin,
      platformKey: "custom_Juejin",
      platformName: "掘金",
      platformIcon: svgIcons.iconIFJuejin,
      authMode: AuthMode.WEBSITE,
      authUrl: "https://juejin.cn/login",
      domain: "juejin.cn",
      isEnabled: false,
    },
  ],
  systemCfg: <DynamicConfig[]>[
    {
      platformType: PlatformType.System,
      subPlatformType: SubPlatformType.System_Siyuan,
      platformKey: "system_Siyuan",
      platformName: "思源笔记",
      platformIcon: svgIcons.iconIFSiyuan,
      authMode: AuthMode.API,
      isEnabled: true,
      isSys: true,
    },
  ],
}
