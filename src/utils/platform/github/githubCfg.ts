/**
 * Github平台通用配置接口
 */
export interface IGithubCfg {
    /**
     * Github用户名
     */
    githubUser: string
    /**
     * Github仓库名称
     */
    githubRepo: string,
    /**
     * Github个人Token令牌
     */
    githubToken: string
    /**
     * 默认分支
     */
    defaultBranch: string
    /**
     * 文章存储的默认目录（相对于仓库根目录的相对路径，例如：docs/_posts/）
     */
    defaultPath: string
    /**
     * 默认提交信息
     */
    defaultMsg: string
    /**
     * 作者
     */
    author: string
    /**
     * 邮箱
     */
    email: string
    /**
     * 文章别名key
     */
    posidKey: string
}

/**
 * Github平台通用配置类
 */
export class GithubCfg implements IGithubCfg {
    author: string;
    defaultBranch: string;
    defaultMsg: string;
    defaultPath: string;
    email: string;
    githubRepo: string;
    githubToken: string;
    githubUser: string;
    posidKey: string = ""

    constructor() {
        this.githubUser = "";
        this.githubRepo = "";
        this.githubToken = "";
        this.defaultBranch = "main";
        this.defaultPath = "docs/_posts/";
        this.defaultMsg = "auto published by sy-post-publisher";
        this.author = "terwer";
        this.email = "youweics@163.com"
    }
}