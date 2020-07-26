module.exports = {
  types: [
    { value: 'feat', name: 'feat:     新增产品功能' },
    { value: 'fix', name: 'fix:      修复了一个 bug' },
    { value: 'docs', name: 'docs:     文档的变更' },
    {
      value: 'style',
      name:
        'style:    不改变代码含义的变动\n            (如删除空格、格式化、去掉末尾分号等。和 CSS 样式无关。)',
    },
    {
      value: 'refactor',
      name: 'refactor: 重构代码。不包括 bug 修复、新增功能',
    },
    {
      value: 'perf',
      name: 'perf:     性能优化',
    },
    { value: 'test', name: 'test:     添加、修改测试用例' },
    { value: 'fix', name: 'fix:      修复了一个 bug' },
    {
      value: 'chore',
      name: 'chore:    对构建过程或辅助工具和库的更改',
    },
    { value: 'revert', name: 'revert:   回滚 commit' },

  ],

  // 针对 React 项目
  scopes: [
    ['components', '组件相关'],
    ['hooks', 'hook 相关'],
    ['hoc', 'HOC'],
    ['utils', 'utils 相关'],
    ['antd', '对 antd 主题的调整'],
    ['element-ui', '对 element-ui 主题的调整'],
    ['styles', '样式相关'],
    ['deps', '项目依赖'],
    ['auth', '对 auth 修改'],
    ['other', '其他修改']
  ].map(([value, description]) => {
    return {
      value,
      name: `${value.padEnd(30)} (${description})`
    };
  }),

  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: 'TICKET-',
  ticketNumberRegExp: '\\d{1,5}',

  // it needs to match the value for field type. Eg.: 'fix'
  /*
  scopeOverrides: {
    fix: [
      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */
  // override the messages, defaults are as follows
  messages: {
    type: "请确保你的提交遵循了原子提交规范！\n选择你要提交的类型:",
    scope: '\n选择一个 scope (可选):',
    // used if allowCustomScopes is true
    customScope: 'Denote the SCOPE of this change:',
    subject: '填写一个简短精炼的描述语句:\n',
    body: '添加一个更加详细的描述，可以附上 bug 链接或截图链接 (可选)。使用 "|" 换行:\n',
    breaking: '列举非兼容性重大的变更 (可选):\n',
    footer: '列举出所有变更的 ISSUES CLOSED  (可选)。 例如.: #31, #34:\n',
    confirmCommit: '确认提交?',
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['特性', '修复'],
  // skip any questions you want
  skipQuestions: ['body'],

  // limit subject length
  subjectLimit: 100,
  // breaklineChar: '|', // It is supported for fields body and footer.
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true, // default is false
};
