/*
 * Copyright (c) 2022-2023, Terwer . All rights reserved.
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * This code is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License version 2 only, as
 * published by the Free Software Foundation.  Terwer designates this
 * particular file as subject to the "Classpath" exception as provided
 * by Terwer in the LICENSE file that accompanied this code.
 *
 * This code is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License
 * version 2 for more details (a copy is included in the LICENSE file that
 * accompanied this code).
 *
 * You should have received a copy of the GNU General Public License version
 * 2 along with this work; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA.
 *
 * Please contact Terwer, Shenzhen, Guangdong, China, youweics@163.com
 * or visit www.terwer.space if you need additional information or have any
 * questions.
 */

export default {
  "lang.choose": "语言选择",
  "lang.choose.placeholder": "请选择语言",
  "theme.mode.choose": "切换模式",
  "theme.mode.dark": "暗黑模式",
  "theme.mode.light": "浅色模式",
  "service.tab.publish.service": "发布服务",
  "service.tab.publish.setting": "发布配置",
  "service.tab.post.bind": "文章绑定",
  "service.tab.service.switch": "服务开关",
  "service.tab.change.local": "个性设置",
  "main.publish.editmode": "编辑模式",
  "main.publish.editmode.simple": "简洁模式",
  "main.publish.editmode.complex": "详细模式",
  "main.publish.editmode.source": "源码模式",
  "main.publish.vuepress.tip":
    "推荐Vuepress的V1版本，配合 vuepress-theme-vdoing 使用，后续bug也只会对V1和此主题进行更新",
  "main.publish.github.error.tip":
    "配置错误或者api不可用，请检查。若修改过配置，请刷新页面",
  "main.publish.github": "发布页面",
  "main.publish.github.tip":
    "自动将文章的markdown文本发布到Vuepress对应的Github仓库（需要先进行相关配置）",
  "main.publish.github.no.tip":
    "您未开启Github pages发布，请切换源码模式复制YAML以及Markdown文本",
  "main.publish.github.choose.path": "选择目录",
  "main.publish.github.published.path": "发布路径",
  "main.publish.github.choose.path.use.default": "默认目录",
  "main.publish.github.choose.path.use.default.tip":
    "使用默认目录，则默认所有文章都发布在配置好的默认目录下（可在发布配置设置），无需每次发布的时候来选择目录，当前平台的默认目录为：",
  "main.publish.github.choose.title": "文件名称",
  "main.publish.github.choose.title.tip":
    "Vuepress-theme-vdoing支持文件名加上序号来标识，如果你不清楚此用法，请不要修改文件名",
  "main.publish.github.failure": "发布失败，请自行复制右侧文本",
  "main.publish.see.preview": "点击这里查看最新文章",
  "main.publish.see.md.preview": "点击这里查看MD文件",
  "main.publish.see.real.preview": "点击这里查看最新文章",
  "main.publish.to.wordpress": "发布到Wordpress",
  "main.title": "文章标题",
  "main.slug": "文章别名",
  "main.auto.fetch.slug": "自动生成别名",
  "main.use.google.translate": "使用Google翻译API",
  "main.use.hash": "别名后缀",
  "main.use.hash.tip":
    "不使用hash会展示更有意义的url，但是可能导致文章别名重复（后果是Vuepress会Build失败除非手动解决别名唯一问题），请知悉。",
  "main.force.refresh": "刷新别名",
  "main.force.refresh.tip":
    "为了防止误操作更新别名，别名不为空的时候默认不会更新别名，如需更新，请勾选刷新别名。",
  "main.desc": "文章摘要",
  "main.auto.fetch.desc": "自动提取摘要",
  "main.create.time": "发布时间",
  "main.create.time.placeholder": "请选择发布时间",
  "main.tag": "文章标签",
  "main.tag.new": "新标签",
  "main.auto.fetch.tag": "自动提取标签",
  "main.tag.auto.switch": "自动标签",
  "main.tag.auto.switch.no.tip": "自动标签已关闭，将不会自动生成标签",
  "main.cat": "文章分类",
  "main.cat.empty": "暂无分类",
  "main.cat.select": "请选择分类",
  "main.yaml.formatter": "YAML Formatter",
  "main.siyuan.to.yaml": "文章属性转YAML",
  "main.yaml.to.siyuan": "YAML转文章属性",
  "main.save.attr.to.siyuan": "保存属性到思源",
  "main.copy": "复制",
  "main.publish": "发布",
  "main.publish.loading": "发布中...",
  "main.loading": "加载中...",
  "main.update": "更新",
  "main.cancel": "取消",
  "main.publish.oneclick.attr": "一键生成属性",
  "main.publish.oneclick.attr.finish": "属性已生成",
  "main.publish.status.unpublish": "未发布",
  "main.publish.status.published": "已发布",
  "main.publish.to.vuepress": "发布到Vuepress",
  "main.publish.to.hugo": "发布到Hugo",
  "main.publish.to.hexo": "发布到Hexo",
  "main.publish.to.jekyll": "发布到Jekyll",
  "main.publish.to.jvue": "发布到JVue",
  "main.publish.to.conf": "发布到Confluence",
  "main.publish.to.cnblogs": "发布到博客园",
  "main.publish.to.liandi": "发布到链滴",
  "main.publish.to.yuque": "发布到语雀",
  "main.publish.to.kms": "发布到KMS",
  "main.opt.success": "操作成功",
  "main.opt.failure": "操作失败",
  "main.copy.success": "复制成功",
  "main.copy.failure": "复制失败",
  "main.opt.quick": "快捷操作",
  "main.opt.status.publish": "文章已发布",
  "main.opt.status.updated": "文章已更新",
  "main.opt.status.cancel": "文章发布已取消",
  "main.opt.loading": "操作中...",
  "main.opt.warning": "警告信息",
  "main.opt.tip": "温馨提示",
  "main.opt.ok": "确认",
  "main.opt.cancel": "取消",
  "main.opt.warning.tip": "此操作不可恢复，是否继续？",
  "setting.noneed": "无需配置",
  "setting.blog.setting": "设置",
  "setting.blog.index": "偏好设置",
  "setting.blog.type": "博客类型",
  "setting.blog.type.placeholder": "请选择博客类型",
  "setting.blog.type.wordpress.value": "Wordpress",
  "setting.blog.type.wordpress.label": "Wordpress",
  "setting.blog.type.metaweblog.value": "MetaweblogApi",
  "setting.blog.type.metaweblog.label": "Metaweblog API",
  "setting.blog.type.github.value": "Github",
  "setting.blog.type.github.label": "Github",
  "setting.blog.type.github.user": "Github用户名",
  "setting.blog.type.github.user.tip": "Github用户名，例如：terwer",
  "setting.blog.type.github.repo": "Github仓库名",
  "setting.blog.type.github.repo.tip": "Github仓库名，例如：terwer.github.io",
  "setting.blog.type.github.token": "Github令牌",
  "setting.blog.type.github.token.tip":
    "Github令牌，例如：ghp_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "setting.blog.type.github.token.gen": "Github 个人令牌生成地址",
  "setting.blog.type.github.default.branch": "默认分支",
  "setting.blog.type.github.default.branch.tip":
    "默认分支（旧版仓库为master，新版仓库默认为main），例如：main",
  "setting.blog.type.github.default.path": "存储目录",
  "setting.blog.type.github.default.path.tip":
    "存储目录（相对于仓库根目录的相对路径，默认所有文章都发布在这里），例如：docs/_posts",
  "setting.blog.type.github.msg": "提交信息",
  "setting.blog.type.github.msg.tip":
    "提交信息，例如：auto published by sy-post-publisher",
  "setting.blog.type.github.author": "作者",
  "setting.blog.type.github.author.tip": "作者，例如：terwer",
  "setting.blog.type.github.email": "邮箱",
  "setting.blog.type.github.email.tip": "邮箱",
  "setting.blog.url": "博客网址",
  "setting.blog.username": "账号",
  "setting.blog.password": "密码/Token",
  "setting.blog.apiurl": "API地址",
  "setting.blog.previewUrl": "预览规则",
  "setting.blog.previewUrl.tip":
    "预览规则（占位符：[yyyy] [MM] [dd] [postid]），例如：/post/[postid].html 或者 /[cats]/[yyyy]/[mm]/[dd]/[postid].html",
  "setting.blog.previewMdUrl": "MD预览规则",
  "setting.blog.previewMdUrl.tip":
    "MD文件预览规则（占位符：[user] [repo] [branch] [docpath]），例如：/[user]/[repo]/blob/[branch]/[docpath]",
  "setting.blog.mdFilenameRule": "文件规则",
  "setting.blog.mdFilenameRule.tip":
    "Markdown文件名规则（占位符：[yyyy] [MM] [dd] [slug] [filename] ），例如：[filename].md 或者 [yyyy]-[mm]-[dd]-[slug].md",
  "setting.blog.pageType": "发布格式",
  "setting.blog.validate": "验证",
  "setting.blog.save": "保存",
  "setting.blog.vali": "验证",
  "setting.blog.vali.tip":
    "强烈建议保存之前先验证配置以保证api的可用性，验证过程中将发送一篇测试文章，您可以稍后在平台手动删除它。您也可以先保存，稍后修改，但是在验证通过之前该api将不可使用。",
  "setting.blog.vali.tip.metaweblog":
    "配置错误或者api不可用，请检查。若修改过配置，请刷新页面",
  "setting.blog.vali.ing": "验证中...",
  "setting.blog.vali.ok": "验证通过，不要忘了点击下方保存哟(*^▽^*)",
  "setting.blog.vali.ok.metaweblog": "配置已保存并验证通过",
  "setting.blog.vali.error": "API验证失败，请检查配置",
  "setting.blog.platform.support.github": "您当前操作的是支持Github的平台：",
  "setting.blog.platform.support.metaweblog":
    "您当前操作的是支持metaweblog的平台：",
  "setting.blog.cancel": "取消",
  "setting.vuepress": "Vuepress",
  "setting.hugo": "Hugo",
  "setting.hexo": "Hexo",
  "setting.jekyll": "Jekyll",
  "setting.jvue": "JVue",
  "setting.conf": "Confluence",
  "setting.conf.tip":
    "发布到Confluence需要配合我的另一个适配器项目使用（强烈推荐），请参考：https://github.com/terwer/node-metaweblog-api-adaptor",
  "setting.cnblogs": "博客园",
  "setting.wordpress": "Wordpress",
  "setting.liandi": "链滴",
  "setting.yuque": "语雀",
  "setting.kms": "KMS",
  "setting.other1": "其他1",
  "service.switch.vuepress": "Vuepress",
  "service.switch.hugo": "Hugo",
  "service.switch.hexo": "Hexo",
  "service.switch.jekyll": "Jekyll",
  "service.switch.jvue": "JVue",
  "service.switch.conf": "Confluence",
  "service.switch.cnblogs": "博客园",
  "service.switch.wordpress": "Wordpress",
  "service.switch.yuque": "语雀",
  "service.switch.liandi": "链滴",
  "service.switch.wechat": "微信聊天",
  "service.switch.wemp": "微信公众号",
  "service.switch.zhihu": "知乎",
  "service.switch.kms": "知识仓库",
  "service.switch.must.select.one": "您必须选择一个至少平台",
  "post.bind.vuepress.slug": "Vuepress别名",
  "post.bind.hugo.slug": "Hugo别名",
  "post.bind.hexo.slug": "Hexo别名",
  "post.bind.jekyll.slug": "Jekyll别名",
  "post.bind.cnblogs.postid": "博客园别名",
  "post.bind.jvue.postid": "JVue的ID",
  "post.bind.conf.postid": "Conf的ID",
  "post.bind.wordpress.postid": "WP的ID",
  "post.bind.liandi.postid": "链滴的ID",
  "post.bind.yuque.postid": "语雀的ID",
  "post.bind.kms.postid": "KMS的ID",
  "post.bind.conf.save": "保存",
  "post.bind.conf.cancel": "取消",
  "form.validate.name.required": "请输入名称",
  "form.validate.name.length": "长度必须在0到1之间",
  "form.validate.github.auto.delete": "自动删除",
  "dynamic.platform.new": "平台管理",
  "dynamic.platform.tip":
    "如果内置的发布服务无法满足或者需要添加多个实例，您可以在这里添加受支持的平台，目前支持Github（HUGO、HEXO、Jekyll等）、metaweblog API（开源中国等）和Wordpress API",
  "dynamic.platform.type": "平台类型[必选]",
  "dynamic.platform.subtype": "子平台名称",
  "dynamic.platform.type.metaweblog": "metaweblog API",
  "dynamic.platform.type.wordpress": "Wordpress",
  "dynamic.platform.type.github": "Github",
  "dynamic.platform.type.custom": "自定义",
  "dynamic.platform.key": "平台key",
  "dynamic.platform.key.tip": "平台唯一标识，不能重复，例如：myblog",
  "dynamic.platform.name": "平台名称",
  "dynamic.platform.name.tip": "平台名称，例如：我的博客",
  "dynamic.platform.opt.add": "提交",
  "dynamic.platform.opt.noselect": "请选择平台类型",
  "dynamic.platform.opt.key.exist": "平台key已经存在",
  "dynamic.platform.opt.del.confirm":
    "删除此平台将会彻底移除此平台相关配置信息，是否继续？",
  "dynamic.platform.opt.del.select": "删除选中",
  "dynamic.platform.opt.item.select": "未选择",
  "dynamic.platform.opt.item.select.tip": "当前选择的是：",
  "dynamic.platform.opt.item.no.select.tip": "请选择要删除的行",
  "setting.common.home": "平台首页",
  "setting.common.tip": "平台首页，用于预览文章，例如：https://terwer.space",
  "setting.common.apiurl": "API地址",
  "setting.common.token": "鉴权token",
  "setting.common.token.gen": "Token生成地址",
  "setting.common.username": "用户名",
  "setting.common.username.gen": "访问策略设置",
  "setting.common.password": "密码",
  "setting.blog.platform.support.common": "您当前操作的平台是：",
  "platform.must.select.one":
    "哇哦，离使用就差一步啦 o(╥﹏╥)o ，您必须启用至少一个平台。如果上面列出的平台没有你想要的，可以在新增平台动态添加，支持Wordpress和Metaweblog API（例如博客园、oschina、51cto等）。有任何疑问欢迎邮件 youweics#163.com ",
  "blog.list.toptip":
    "温馨提示：单击表格行可以进入文章详情页，详情页有发布按钮哦! (〃'▽'〃)",
  "config.error.msg": "配置错误，请前往对应发布配置修改",
  "config.platform.none": "没有启用的发布平台，请前往服务开关开启",
  "post.delete.by.platform": "文章已被平台自行删除，请点击取消强制解除关联",
  "blog.top-data-tip":
    "温馨提示：1. 0.1.0+ 以后，可通过【偏好设置->思源地址】来修改默认伺服配置，支持本地和远程；如果是远程还需要设置token，如果使用浏览器插件或者挂件之外的访问方式还需要设置跨域请求代理。 2、升级新版之前强烈建议导出配置，防止配置丢失。 3、如果出现新版本不兼容的异常情况，建议清空配置。此操作不可恢复，请谨慎操作！",
  "blog.top-data-tip.siyuan":
    "温馨提示：1、当前处于挂件模式，从 0.1.0 版本开始，无需在所有页面引用挂件了，只需要在父级页面引用一个挂件即可。具体规则如下：(1). 如果检测到没有子文档，会兼容 0.0.3 版本以前的方式，展示当前文档的发布页面。 (2). 如果检测到有子文档，会以列表加分页的方式展示所有子文档列表。可单独选择某个子文档进行发布操作。 2、升级新版之前强烈建议导出配置，防止配置丢失。 3、如果出现新版本不兼容的异常情况，建议清空配置。此操作不可恢复，请谨慎操作！",
  "blog.newwin.open": "页签模式",
  "blog.change.siyuan.api": "思源地址",
  "setting.blog.siyuan.password":
    "思源笔记鉴权Token，请从【设置->关于】复制，如果是本地笔记留空即可",
  "setting.blog.siyuan.apiurl":
    "思源笔记的API地址，包括端口，例如：http://127.0.0.1:6806",
  "setting.blog.siyuan.current.apiurl": "当前API地址=>",
  "setting.blog.middlewareUrl": "跨域请求代理",
  "setting.blog.middlewareUrl.tip":
    "某些场景下需要（例如Firefox插件、自部署模式），其他情况可忽略",
  "setting.blog.middlewareUrl.my.tip":
    "如果没有部署代理，可以使用我的共享地址：https://api.terwer.space/api/middleware 。出于性能考虑，建议自己部署一份，请使用 https://github.com/terwer/node-metaweblog-api-adaptor 此项目进行部署。",
  "setting.conf.export": "导出配置",
  "setting.conf.import": "导入配置",
  "setting.conf.transport": "导入导出",
  "setting.conf.clear": "清空配置",
  "page.no.id": "请求非法，原因：pageId获取失败",
  "yaml.show.type.yaml": "YAML",
  "yaml.show.type.md": "MD正文",
  "yaml.show.type.yamlmd": "YAML+MD正文",
  "yaml.show.type.html": "HTML正文",
  "main.read.mode": "只读模式",
  "main.edit.mode": "编辑模式",
  "main.read.mode.tip":
    "温馨提示：只读模式下点击可直接复制，编辑模式下需要点击复制按钮复制。YAML转文章属性仅支持title、permalink、date、description、tags",
  "main.opt.onclick.confirm.tip":
    "此操作默认将重新生成除别名以外的所有属性，如果只想修改个别属性，请在详细模式点击单独的功能按钮进行对应操作，是否继续？",
  "main.cat.list.error": "分类获取失败",
  "main.yaml.no.save":
    "您编辑过YAML，点击确认可同步YAML到属性，取消将丢失YAML修改，是否继续？",
  "setting.github.baseUrl": "Git平台地址",
  "setting.github.baseUrl.tip":
    "Git平台地址，用于MD文件预览，默认是：https://github.com",
  "preference.setting.fixTitle": "去除标题编号",
  "preference.setting.removeH1": "去除正文H1",
  "preference.setting.removeH1.tip":
    "删除H1可能会误删除Markdown里面的#开头的注释，如需开启，请使用2个以上的#注释，是否继续？",
  "preference.setting.newWin": "新窗口操作",
  "siyuan.browser.show.close.btn": "显示关闭按钮",
  "siyuan.browser.menu.quick.btn": "一键快速发布",
  "siyuan.browser.menu.publish.btn":
    "文章发布（自动检测，有子文档->列表页；无子文档->发布页）",
  "siyuan.browser.menu.preview.btn": "文章预览（当前文章只读预览）",
  "siyuan.browser.menu.manage.btn": "文章管理（全部文章统一管理）",
  "siyuan.browser.menu.anki.btn": "Anki标记（配合ankisiyuan生成Anki标记）",
  "siyuan.browser.menu.picture.btn": "PicGO图床（支持图床配置与图片上传）",
  "anki.siyuan.deck": "牌组",
  "anki.siyuan.deck.new": "新牌组",
  "anki.siyuan.tag": "标签",
  "anki.siyuan.tag.new": "新标签",
  "picgo.chrome.tip":
    "您当前使用的是浏览器插件，需要从这里下载配置 PicGO 客户端：https://github.com/Molunerfinn/PicGo/releases",
  "picgo.siyuan.tip": "您当前使用的是思源笔记挂件，PicGO已内置，只需配置即可",
  "post.detail.button.copy.id": "复制本文ID",
  "post.detail.button.share.link": "复制分享链接",
  "post.detail.button.browser.open": "默认浏览器打开",
  "post.detail.button.pic.manage": "图片管理",
  "post.detail.button.anki.mark": "Anki标记",
  "post.detail.index.send.to.publish": "发布到其他平台",
  "post.detail.index.export.to.pdf": "导出为PDF",
  "picgo.upload.status": "上传状态",
  "picgo.upload.select.pic": "选择图片",
  "picgo.upload.clipboard": "剪贴板图片",
  "picgo.upload.onclick": "一键上传本地图片到图床",
  "picgo.download.onclick": "一键下载远程图片到本地",
  "picgo.download.local.to.bed": "上传本地图片到图床",
  "picgo.download.bed.to.local": "下载远程图片到本地",
  "picgo.pic.preview": "图片预览",
  "picgo.pic.setting": "图床设置",
  "picgo.pic.setting.no.tip":
    "由于您当前使用的是浏览器插件，无法直接集成 PicGO ，只能通过 HTTP 请求间接调用本地 PicGO 客户端上图片，请直接在本地 PicGO 客户端进行设置。如需体验更加完整的功能，请通过思源笔记挂件版挂载菜单打开新窗口的方式使用。详情请参考：https://docs.publish.terwer.space/post/the-pendant-mode-is-used-in-the-method-of-mounting-menu-169wrw.html",
  "github.use.permalink": "永久链接",
  "github.use.permalink.no.warn":
    "您已关闭永久链接，formatter将不会生成标记，这在某些特殊场景下可能有用，大部分情况下需要开启此选项，注意：目前仅仅在HUGO平台生效，主要是适配Docsy",
  "github.menu.title": "菜单标题",
  "github.menu.title.placeholder":
    "菜单栏标题（HUGO平台专用，为空则不显示在菜单）",
  "github.weight": "显示权重",
  "github.weight.placeholder": "权重（决定显示顺序，越小显示越靠前）",
  "github.use.date": "显示日期",
  "github.use.date.no.warn": "您已关闭日期显示，将不会在formatter生成date字段",
  "github.post.picgo.use": "使用图床",
  "github.post.picgo.use.tip":
    "启用此选项，将会自动将此文档包含的所有本地图片上传至自定义图床（远程图片不上传），请确保PicGO图床配置正确",
  "github.post.picgo.start.upload": "图床已开启，即将上传本地图片到图床",
  "github.post.picgo.picbed.error":
    "图片上传到图床失败，可能是图床配置错误，请检查图床配置",
  "setting.yuque.home.tip": "语雀平台首页，通常固定是：https://www.yuque.com/",
  "setting.yuque.username.tip":
    "语雀平台用户名，注意是【账户设置】里面固定连接里面的用户名，不是用户昵称哦(*^▽^*)",
  "setting.yuque.password.tip":
    "语雀平台的Token，请按照链接点击获取，只需要勾选【读取你的知识库】和【修改和读取你的文档】两个权限即可",
  "setting.yuque.apiurl.tip":
    "语雀平台的API地址，通常固定是：https://www.yuque.com/api/v2",
  "setting.liandi.home.tip": "链滴平台首页，通常固定是：https://ld246.com/",
  "setting.liandi.username.tip":
    "链滴平台用户名，注意是点击【个人主页】之后URL上member后面显示的用户名，不是用户昵称哦(*^▽^*)",
  "setting.liandi.password.tip": "链滴平台的Token，请按照链接点击获取",
  "setting.liandi.apiurl.tip":
    "链滴平台的API地址，通常固定是：https://ld246.com/api/v2",
  "setting.kms.home.tip":
    "KMS平台首页，例如：http://localhost:9564/kms16_release/kms/multidoc",
  "setting.kms.username.tip": "KMS平台Rest账户用户名，请按照链接指示创建",
  "setting.kms.password.tip": "KMS平台Rest账户密码，请按照链接指示创建",
  "setting.kms.apiurl.tip":
    "KMS平台的API地址，例如：http://localhost:9564/kms16_release/api/kms-multidoc/kmsMultidocKnowledgeRestService",
  "siyuan.local.share.tip":
    "温馨提示：如果发现分享链接或者浏览器打开无法显示或者网络连接被拒绝，请按照下面操作排查。1：思源笔记->设置->关于->打开网络伺服；2：在浏览器打开之后，点击底部思源地址，修改对应地址为局域网ip地址。",
  "setting.cnblogs.home.tip":
    "您的博客园首页，通常是：https://www.cnblogs.com/<您的用户名>",
  "setting.cnblogs.username.tip":
    "您的博客园MetaWeblog登录名，可前往您的博客园后台->设置查看，注意：是登录名，不是用户昵称哦(*^▽^*)",
  "setting.cnblogs.password.tip":
    "您的博客园MetaWeblog访问令牌，可前往您的博客园后台->设置查看",
  "setting.cnblogs.apiUrl.tip":
    "您的博客园MetaWeblog访问地址，可前往您的博客园后台->设置查看，通常是：https://rpc.cnblogs.com/metaweblog/<您的用户名>",
  "setting.cnblogs.previewUrl.tip":
    "博客园平台的文章预览规则，通常是：/p/[postid].html",

  "setting.wordpress.home.tip": "WordPress首页",
  "setting.wordpress.username.tip":
    "WordPress登录名，注意：是登录名，不是用户昵称哦(*^▽^*)",
  "setting.wordpress.password.tip": "WordPress登录密码",
  "setting.wordpress.apiUrl.tip":
    "WordPress的xmlrpc远程发布地址，通常是：https://<WordPress博客地址>/xmlrpc.php",
  "setting.wordpress.previewUrl.tip":
    "WordPress平台的文章预览规则，通常是：?p=[postid]",

  "setting.oschina.home.tip":
    "开源中国首页，通常是：https://my.oschina.net/<您的用户名>",
  "setting.oschina.username.tip": "开源中国登录名，可以输入登录邮箱",
  "setting.oschina.password.tip": "开源中国登录密码",
  "setting.oschina.apiUrl.tip":
    "开源中国的xmlrpc远程发布地址，通常固定是：https://www.oschina.net/action/xmlrpc",
  "setting.oschina.previewUrl.tip":
    "开源中国平台的文章预览规则，通常是：/blog/[postid]",

  "setting.typecho.home.tip": "Typecho平台的首页",
  "setting.typecho.username.tip": "Typecho平台登录名",
  "setting.typecho.password.tip": "Typecho平台密码",
  "setting.typecho.apiUrl.tip":
    "Typecho平台的xmlrpc远程发布地址，通常固定是：https://<平台地址>/index.php/action/xmlrpc",
  "setting.typecho.previewUrl.tip":
    "Typecho平台的文章预览规则，通常是：/index.php/archives/[postid]",

  "setting.jvue.home.tip": "JVue平台的首页",
  "setting.jvue.username.tip": "JVue平台登录名",
  "setting.jvue.password.tip": "JVue平台密码",
  "setting.jvue.apiUrl.tip":
    "JVue平台的xmlrpc远程发布地址，通常固定是：https://<平台地址>/xmlrpc",
  "setting.jvue.previewUrl.tip":
    "JVue平台的文章预览规则，通常是：/post/[postid].html",

  "setting.conf.home.tip":
    "Confluence Cloud，首页，通常是：https://<您的用户名>.atlassian.net/wiki/spaces/<空间名>",
  "setting.conf.username.tip": "Confluence登录名，可前往您的atlassian账户获取",
  "setting.conf.password.tip":
    "Confluence访问令牌，可前往您的atlassian账户获取",
  "setting.conf.apiUrl.tip":
    "可前往 https://developer.atlassian.com/cloud/confluence/rest/v1/#api-wiki-rest-api-content-get 查看文档",
  "setting.conf.previewUrl.tip":
    "Confluence平台文章预览规则，通常是：/pages/[postid]",
  "setting.picgo.refer.to": "详情请参考：",
  "setting.picgo.refer.to.online.doc": "PicGO配置在线文档",
  "setting.picgo.picbed": "图床设置",
  "setting.picgo.picgo": "PicGO设置",
  "main.opt.edit": "编辑",
  "main.opt.delete": "删除",
  "setting.picgo.picgo.open.config.file": "打开配置文件",
  "setting.picgo.picgo.click.to.open": "点击打开",
  "setting.picgo.picgo.choose.showed.picbed": "请选择显示的图床",
  "setting.picgo.picbed.selected.tip": "已选中",
  "setting.picgo.picbed.unselected.tip": "未选中",
  "setting.picgo.picbed.set.default": "设为默认图床",
  "setting.picgo.picbed.current.selected.tip": "已选中图床：",
  "setting.picgo.picbed.current.tip": "当前默认图床是：",
  "setting.picgo.picbed.uploader.config.name": "图床配置名",
  "setting.picgo.picbed.uploader.config.name.placeholder": "请输入配置名称",
  "setting.picgo.config.name": "配置名称",
  "setting.picgo.config.name.placeholder": "请输入配置名称",
  "setting.picgo.index.tip":
    "注意：1、此处上传的图片不会自动插入文档中，请手动点击按钮复制链接，然后 Ctrl+V 粘贴到文档中。2、对于文档当中原本已经存在的本地图片，点击上传之后不会直接替换原始图片，只会存储本地图片与图床图片的映射信息，需要在发布文章时手动勾选【使用图床】才会进行临时链接替换，请知悉。这样做是为了不破坏其他地方对文档图片的处理。当然，您也可以手动复制图床链接，然后删除原图片，替换为图床图片。3、该图片列表仅展示此文档包含的图片。",
  "setting.picgo.index.copy.link": "复制链接",
  "setting.picgo.setting.timestamp.rename": "时间戳重命名",
  "setting.picgo.setting.close": "关",
  "setting.picgo.setting.open": "开",
  "setting.picgo.setting.log.file": "日志文件",
  "setting.picgo.plugin": "插件设置",
  "setting.picgo.plugin.list": "插件列表",
  "setting.picgo.plugin.import.local": "导入本地插件",
  "setting.picgo.plugin.install": "安装",
  "setting.picgo.plugin.installing": "安装中",
  "setting.picgo.plugin.installed": "已安装",
  "setting.picgo.plugin.doing.something": "进行中",
  "setting.picgo.plugin.search.placeholder":
    "搜索npm上的PicGo插件，或者点击上方按钮查看优秀插件列表。推荐：watermark-elec、s3",
  "setting.picgo.plugin.gui.not.implemented":
    "该插件未对可视化界面进行优化, 是否继续安装?",
  "setting.picgo.setting.node.path": "Node安装路径",
  "setting.picgo.setting.node.path.tip":
    "请输入Node安装完整路径，例如：/opt/node16/bin，Node版本>=16",
  "setting.picgo.setting.node.registry": "NPM的registry",
  "setting.picgo.setting.node.registry.tip":
    "国内推荐：https://registry.npmmirror.com",
  "setting.picgo.setting.node.proxy": "NPM代理",
  "setting.picgo.setting.node.proxy.tip":
    "一般可留空，如有特殊需求可设置自定义代理",
  "setting.picgo.setting.config.tip":
    "注意：横线以上的属性会改变上传图片的行为，配置可自动保存。横线以下的属性仅仅在安装插件时用到，并且需要点击【确认】按钮才能保存。",
  "setting.picgo.plugin.install.success":
    "插件已经成功安装，请清除搜索关键字刷新列表。点击插件对应【设置】图标可查看插件详情，并对插件进行自定义设置。如果是图床扩展，请关闭重新打开，然后启用图床并进行设置。",
  "syp.about": "关于作者",
  "setting.picgo.plugin.uninstall": "卸载插件",
  "setting.picgo.plugin.uninstall.success": "插件已经成功卸载。",
  "setting.picgo.plugin.enable": "启用插件",
  "setting.picgo.plugin.disable": "禁用插件",
  "setting.picgo.plugin.update": "更新插件",
  "setting.picgo.plugin.config.setting": "插件设置",
  "setting.picgo.plugin.work": "已兼容",
  "setting.picgo.plugin.nowork": "不兼容",
  "setting.picgo.plugin.nouse": "不可用",
  "setting.picgo.plugin.update.success": "更新成功",
  "setting.conf.import.syp": "导入挂件配置",
  "setting.conf.import.picgo": "导入PicGO配置",
  "setting.conf.export.syp": "导出挂件配置",
  "setting.conf.export.picgo": "导出PicGO配置",
  "setting.conf.import.syp.tip":
    "请选择有效的历史备份json文件进行导入。注意：挂件配置会进行配置替换。",
  "setting.conf.import.picgo.tip":
    "请选择有效的历史备份json文件进行导入。注意：PicGO配置会直接进行文件替换。为了配置的兼容性，请卸载所有插件之后，进行PicGO配置导出操作。卸载PicGO插件不会删除插件配置，只会删除插件文件以及插件注册记录。请放心卸载。",
  "setting.conf.export.syp.tip":
    "将导出对应的json配置文件，强烈建议定期进行配置备份。原则上支持向后兼容。如有不兼容问题，会特别说明。",
  "setting.conf.export.picgo.tip":
    "将导出对应的json配置文件，强烈建议定期进行配置备份。原则上支持向后兼容。如有不兼容问题，会特别说明。",
  "setting.conf.clear.syp": "清空挂件配置",
  "setting.conf.clear.picgo": "清空PicGO配置",
  "setting.conf.clear.tip":
    "清空配置不可恢复，请谨慎操作。强烈建议先备份配置。",
}
