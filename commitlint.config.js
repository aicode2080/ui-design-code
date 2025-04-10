module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'style']],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'scope-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 72]
  },
  helpUrl: '请按照以下格式提交：\n' +
    '  feat: 新功能\n' +
    '  fix: 修复问题\n' +
    '  style: 代码样式修改\n\n' +
    '示例：\n' +
    '  git commit -m "feat: 添加用户登录功能"\n' +
    '  git commit -m "fix: 修复登录页面样式问题"\n' +
    '  git commit -m "style: 调整代码缩进格式"'
}; 