# 笺事语阑 博客项目

## 项目地址
- 线上：https://js1lan.github.io/jianshiyulan/
- 仓库：https://github.com/JS1Lan/jianshiyulan

## 首次使用前安装
```bash
npx skills add https://github.com/Leonxlnx/taste-skill
```
在 Claude Code 中输入：`/install superpowers`

## 环境要求
- 前端设计优先使用 taste-skill (design-taste-frontend)
- 生成内容必须中文
- 预览时用 Chrome 隐私窗口打开，不需要等用户确认

## 常用操作
- 发布文章：用户给 docx → 提取内容 → 插入 fullArticles + sectionArticles → 更新计数和最新文章栏
- 更新密码：用户给5个地图的4位密码 → 直接替换
- 推代码：`git push` 到 GitHub，被墙时需要 Steam++
- 打开线上版：`start chrome --incognito "https://js1lan.github.io/jianshiyulan/"`
- 本地预览：`python -m http.server 8080`

## 文件说明
- index.html：博客主页（单文件，含 CSS + JS + HTML + 文章数据）
- data.json：站点配置数据
- playlist.json：75首音乐列表
- admin.html：内容管理后台
- sw.js：Service Worker（音乐缓存）
- GQM/：改枪码数据
- memory/：用户偏好备份

## 记忆文件
memory/ 目录包含用户偏好（中文输出、文件路径、vision工具等），新电脑上复制到 ~/.claude/projects/ 下即可恢复偏好。不复制也不影响博客修改。
