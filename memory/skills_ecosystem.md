---
name: skills-ecosystem
description: 当前安装的所有 skills 概览，以及 vision.js 识图脚本的位置和用法
metadata: 
  node_type: memory
  type: reference
  originSessionId: ec9da839-e843-4e15-99f5-e23dc6217fca
---

## Superpowers Skills（已安装）

位置：`C:\Users\Asuna\.claude\plugins\superpowers\`

完整列表：
- `superpowers:brainstorming` — 创造性工作前的需求探索和设计
- `superpowers:writing-plans` — 多步骤任务的实现计划编写
- `superpowers:executing-plans` — 在独立 session 中执行已编写的计划
- `superpowers:subagent-driven-development` — 使用子代理并行执行独立任务
- `superpowers:dispatching-parallel-agents` — 2+ 独立任务并行调度
- `superpowers:test-driven-development` — 实现功能/bug修复前的 TDD 流程
- `superpowers:systematic-debugging` — 遇到 bug/测试失败时的调试流程
- `superpowers:verification-before-completion` — 完成工作前必须运行验证命令
- `superpowers:requesting-code-review` — 完成任务/主要功能后请求代码审查
- `superpowers:receiving-code-review` — 接收审查反馈后的处理流程
- `superpowers:finishing-a-development-branch` — 完成开发后的合并/PR/清理
- `superpowers:using-git-worktrees` — 需要隔离工作空间时使用 git worktree
- `superpowers:using-superpowers` — skills 使用入门（每次对话开始时加载）
- `superpowers:writing-skills` — 创建/编辑/验证 skills

## 自定义工具

### vision.js — 千问 VL 识图

- 路径：`F:\AI Study\AI Project\AI\未完\未完\vision.js`
- 全局命令：`vision <图片路径> [问题]`（通过 `D:\AI\AI project\bin\vision.cmd` 包装）
- 模型：qwen-vl-max（阿里云 DashScope）
- API Key：已硬编码在脚本中，无需额外配置
- 用途：当 Read 工具无法直接读取图片时，调用此脚本识图

### frontend-design — Anthropic 官方前端设计

- 路径：`~/.claude/skills/frontend-design/SKILL.md`
- 来源：`anthropics/claude-code/plugins/frontend-design/`
- 用途：创建高质量、有辨识度的前端界面，避免通用 AI 美学

### ui-ux-pro-max — UI/UX 设计智能

- 路径：`~/.claude/skills/ui-ux-pro-max/`
- 来源：`nextlevelbuilder/ui-ux-pro-max-skill`，版本 2.5.0
- 用途：67 种 UI 风格、96 色板、57 字体配对、99 UX 指南、25 图表类型、跨 13 技术栈
- 数据目录含 `data/` 和 `scripts/`

[[vision-tool]]
