# 笺事语阑 — 个人博客

玻璃拟态风格的个人主页与博客，包含 AI 工坊（技术学习分享）和三角洲行动专区（游戏工具与信息）。

## 技术栈

纯静态 HTML/CSS/JS，零依赖，无构建工具。部署到 Gitee Pages，国内快速访问。

## 文件结构

| 文件 | 说明 |
|------|------|
| `index.html` | 主页面，访问者看到的完整网站 |
| `data.json` | 所有动态内容数据（文章、密码、改枪码、链接等） |
| `admin.html` | 本地管理页面，表单编辑内容 → 导出 JSON |

## 本地预览

```bash
cd 项目目录
python -m http.server 8080
```

浏览器打开 `http://localhost:8080`

> 必须用 HTTP 服务器打开（不能直接双击 HTML），否则 fetch data.json 会因跨域策略失败。

## 编辑内容（两种方式）

### 方式一：admin.html 管理页面（推荐）

1. 打开 `admin.html`（可直接双击，但需与 data.json 同目录，或用 HTTP 服务器）
2. 在各区块表单中编辑内容
3. 点"导出 JSON" → "一键复制 JSON"
4. 打开 Gitee 仓库 → 编辑 `data.json` → 粘贴替换 → 提交
5. Gitee Pages 自动重新部署

### 方式二：直接编辑 data.json

在 Gitee 网页端直接编辑 `data.json` 文件，提交即部署。

## 部署到 Gitee Pages

1. 注册 [Gitee](https://gitee.com)（码云）账号
2. 创建新仓库（仓库名建议用英文，如 `jianshiyulan`）
3. 推送代码：
```bash
git remote add gitee https://gitee.com/你的用户名/仓库名.git
git push gitee master
```
4. 仓库页面 → 服务 → Gitee Pages → 部署分支选 `master` → 启动
5. 获取访问地址（格式：`https://你的用户名.gitee.io/仓库名`）

## 更新内容流程

```
打开 admin.html → 编辑 → 导出 JSON → 粘贴到 Gitee data.json → 提交 → 自动部署（约 1-2 分钟生效）
```

访问者打开同一个 URL，看到的永远是最新版本。
