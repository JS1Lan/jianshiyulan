# 换电脑后完整搭建博客环境

## 1. 装 Git

去 https://git-scm.com 下载安装。

## 2. 克隆项目

```bash
git clone https://github.com/JS1Lan/jianshiyulan.git
cd jianshiyulan
```

项目就下载到本地了，里面包含所有文件。

## 3. 装 Claude Code

VS Code 扩展商店搜 Claude Code 安装。

## 4. 装技能

### 4a. Superpowers Skills

```
/install superpowers
```

装上：ui-ux-pro-max、frontend-design、brainstorming、writing-plans 等。

### 4b. Taste-Skill（优先使用的前端设计技能）

```bash
npx skills add https://github.com/Leonxlnx/taste-skill
```

装上 13 个设计技能：design-taste-frontend（主技能，v2）、high-end-visual-design、minimalist-ui、industrial-brutalist-ui、redesign-existing-projects、image-to-code 等。做 UI 设计时优先调用 design-taste-frontend。

## 5. 配置 vision.js 识图工具

项目里已经包含了 `tools/vision.js`（114 行，千问 VL 识图脚本，API Key 已内置）。

### 设为全局命令（可选但推荐）

把 `tools/vision.cmd` 所在目录加到系统 PATH，或者：

在 `D:\AI\AI project\bin\` 下新建 `vision.cmd`：
```batch
@echo off
node "你的项目路径\tools\vision.js" %*
```

之后终端输入 `vision 图片路径` 就能直接识图。

### 在 Claude Code 中使用

对话中告诉我：`用 tools/vision.js 识别 <图片路径>`

## 6. 恢复 Memory（让 Claude Code 记住你的偏好）

把项目 `memory/` 文件夹里的全部文件复制到：

```
C:\Users\你的用户名\.claude\projects\C--Users-你的用户名\memory\
```

路径中 `你的用户名` 是你 Windows 登录用户名。如果目录不存在就手动创建。

复制后 Claude Code 会自动记住：中文输出、不要本地 URL 预览、生成文件放 D 盘等偏好。

## 7. 配置 GitHub Token（仅推代码时需要）

如果日常只改内容（admin.html → data.json → GitHub 网页端提交），跳过这步。

需要我从终端推代码时才需要：
1. GitHub → Settings → Developer settings → Tokens (classic)
2. Generate new token → 勾选 `repo` → 生成
3. 把 token 保存到项目根目录的 `.github-token` 文件

## 8. 本地预览

```bash
python -m http.server 8080
# 浏览器打开 http://localhost:8080
```

## 9. 日常使用

| 要做什么 | 怎么做 |
|----------|--------|
| 给别人看博客 | 发这个网址：https://js1lan.github.io/jianshiyulan/ |
| 改内容（文章/密码/改枪码） | 打开 `admin.html` → 编辑 → 导出JSON → GitHub网页端粘贴到 `data.json` |
| 改界面样式 | 告诉我"修改博客的xxx"，我改完推到 GitHub |
| 识图 | 告诉我 `用 tools/vision.js 识别 <图片路径>` |
