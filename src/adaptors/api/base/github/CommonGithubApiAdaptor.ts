/*
 * Copyright (c) 2023, Terwer . All rights reserved.
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

import { BaseBlogApi } from "~/src/adaptors/api/base/baseBlogApi.ts"
import { createAppLogger } from "~/src/utils/appLogger.ts"
import { CategoryInfo, Post, UserBlog } from "zhi-blog-api"
import { CommonGithubClient, GithubConfig } from "zhi-github-middleware"
import { CommonGithubConfig } from "~/src/adaptors/api/base/github/CommonGithubConfig.ts"
import { StrUtil } from "zhi-common"
import { toRaw } from "vue"

/**
 * Github API 适配器
 *
 * @author terwer
 * @version 0.9.0
 * @since 0.9.0
 */
class CommonGithubApiAdaptor extends BaseBlogApi {
  private githubClient: CommonGithubClient

  constructor(appInstance: any, cfg: CommonGithubConfig) {
    super(appInstance, cfg)
    this.logger = createAppLogger("common-github-api-adaptor")

    const githubConfig = new GithubConfig(cfg.username, cfg.githubRepo, cfg.password)
    githubConfig.defaultBranch = cfg.githubBranch
    githubConfig.defaultPath = cfg.defaultPath
    githubConfig.defaultMsg = cfg.defaultMsg
    githubConfig.author = cfg.author
    githubConfig.email = cfg.email
    githubConfig.previewMdUrl = cfg.previewUrl
    githubConfig.previewUrl = cfg.previewPostUrl
    githubConfig.baseUrl = cfg.home
    githubConfig.mdFilenameRule = cfg.mdFilenameRule

    this.githubClient = new CommonGithubClient(githubConfig)
  }

  public async getUsersBlogs(): Promise<UserBlog[]> {
    const result: UserBlog[] = []

    const nodes = await this.githubClient.getGithubPageTreeNode("")
    this.logger.debug("getGithubPageTreeNode =>", nodes)

    // 数据适配
    if (nodes && nodes.length > 0) {
      const userblog: UserBlog = new UserBlog()
      const cfg = this.cfg as CommonGithubConfig
      userblog.blogid = cfg.defaultPath
      userblog.blogName = cfg.defaultPath
      userblog.url = StrUtil.pathJoin(StrUtil.pathJoin(cfg.home, cfg.username), cfg.githubRepo)
      result.push(userblog)
    }
    this.logger.debug("result result =>", result)

    return result
  }

  public async newPost(post: Post, publish?: boolean): Promise<string> {
    this.logger.debug("start newPost =>", { post: toRaw(post) })
    const filename = post.wp_slug
    const docPath = `/xxx/${filename}.md`
    throw new Error("newPost 开发中...")
    // const docPath = `${post.wp_slug}`
    // const res = await this.githubClient.publishGithubPage(docPath, post.description)
    //
    // if (!res?.content?.path) {
    //   throw new Error("Github 调用API异常")
    // }
    // return res.content.path
  }

  async editPost(postid: string, post: Post, publish?: boolean): Promise<boolean> {
    const res = await this.githubClient.updateGithubPage(post.postid, post.description)
    if (!res?.content?.path) {
      throw new Error("Hugo调用API异常")
    }
    return true
  }

  public async deletePost(postid: string): Promise<boolean> {
    const res = await this.githubClient.deleteGithubPage(postid)
    if (!res?.commit?.sha) {
      throw new Error("Hugo调用API异常")
    }
    return true
  }

  public async getCategories(): Promise<CategoryInfo[]> {
    return await Promise.resolve([])
  }

  public async getPreviewUrl(postid: string): Promise<string> {
    let previewUrl: string = "/test"
    // const newPostid = postid.substring(postid.lastIndexOf("/") + 1).replace(".md", "")
    // previewUrl = this.cfg.previewUrl.replace("[postid]", newPostid)
    // // 路径组合
    // previewUrl = StrUtil.pathJoin(StrUtil.pathJoin(this.cfg.home, this.cfg.username), previewUrl)
    //
    return previewUrl
  }

  public async getPostPreviewUrl(postid: string): Promise<string> {
    let previewUrl: string
    const newPostid = postid.substring(postid.lastIndexOf("/") + 1).replace(".md", "")
    previewUrl = this.cfg.previewUrl.replace("[postid]", newPostid)
    // 路径组合
    previewUrl = StrUtil.pathJoin(StrUtil.pathJoin(this.cfg.home, this.cfg.username), previewUrl)

    return previewUrl
  }
}

export { CommonGithubApiAdaptor }
