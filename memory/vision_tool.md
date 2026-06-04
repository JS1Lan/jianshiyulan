---
name: vision-tool
description: 遇到无法直接读取的图片时，使用 vision.js 调用千问 VL 模型识图
metadata: 
  node_type: memory
  type: feedback
  originSessionId: ec9da839-e843-4e15-99f5-e23dc6217fca
---

当 Read 工具返回 "[Unsupported Image]" 或无法直接识别图片内容时，立即使用 `node "F:\AI Study\AI Project\AI\未完\未完\vision.js" <图片路径> "具体的识图需求"` 来识别图片。

**Why:** DeepSeek-v4-pro 不支持图片识别能力，但本地已配置好千问 qwen-vl-max 的 API（DASHSCOPE_API_KEY 已内置在 vision.js 中），可以绕过模型限制完成识图任务。

**How to apply:** 任何需要看图/截图的情况，直接调用 vision.js。API Key 已在脚本中硬编码，无需额外配置。全局命令 `vision` 也可通过 PATH 使用。
