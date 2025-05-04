const resourceDetails = {
    "deepseek-lesson-plan": {
        title: "使用Deepseek生成教案",
        description: "3分钟掌握AI教案生成方法",
        introduction: "Deepseek是一款强大的AI助手，可以帮助教师快速生成高质量的教案。本教程将指导您如何使用Deepseek的教案生成功能，让备课更加高效。",
        videoUrl: "./videos/deepseek-lesson-plan.mp4",
        pdfGuide: "./pdfs/deepseek-lesson-plan-guide.pdf",
        relatedResources: [
            {
                id: "deepseek-exercise",
                title: "使用Deepseek生成练习题",
                description: "快速生成符合教学目标的练习题"
            },
            {
                id: "deepseek-feedback",
                title: "使用Deepseek生成学生反馈",
                description: "为学生作业生成个性化反馈"
            },
            {
                id: "chatgpt-lesson-plan",
                title: "使用ChatGPT优化教案",
                description: "使用ChatGPT完善和改进教案内容"
            }
        ]
    },
    "canva-bulk-creation": {
        title: "Canva可画批量创建教学资源",
        description: "5分钟掌握AI批量创建教学资源技巧",
        introduction: `在这期视频中，我将手把手教你如何用Canva，一键生成50张独一无二的学生海报。
无论是班级展示、评优表彰、毕业留念，还是日常鼓励，你都能用这个方法快速搞定。

你将学到：
✅ 如何导入学生名单
✅ 如何套用模板实现批量生成
✅ 如何一键导出高清海报
✅ 如何用最少的时间，做出最有心意的专属设计

这不仅能帮老师们节省大量时间，更能给学生带来被特别关注的惊喜和感动！
Canva不仅仅是一个设计工具，它能成为你教学中的"小助手"，帮你在繁忙中，依然传递温暖和关怀。

💡 适用人群：
班主任、科任老师、教务老师
需要制作班级展示、奖状、纪念册的教育工作者
想提升工作效率、又不想牺牲温度的老师们

📎 更多资源：
在我的网站里，你还能找到更多教师专用工具教学、模板推荐和AI应用技巧，一起用科技点亮教育吧！
别忘了关注我，获取更多实用教程哦～`,
        videoUrl: "https://player.bilibili.com/player.html?bvid=BV1gDV7zJEPF&page=1&high_quality=1",
        pdfGuide: "",
        relatedResources: [
            {
                id: "chatgpt-feedback",
                title: "使用ChatGPT生成学习反馈",
                description: "为学生提供个性化的学习建议"
            },
            {
                id: "chatgpt-rubric",
                title: "使用ChatGPT创建评分标准",
                description: "制定客观的作文评分标准"
            },
            {
                id: "claude-writing",
                title: "使用Claude批改作文",
                description: "另一个优秀的AI写作助手"
            }
        ]
    },
    'deepseek-writing': {
        id: 'deepseek-writing',
        translations: {
            en: {
                title: 'Deepseek for Writing',
                description: 'Create engaging content with AI assistance',
                features: [
                    'AI-powered writing assistance',
                    'Multiple writing styles',
                    'Grammar and style checking'
                ],
                tutorial: 'How to use Deepseek for writing...',
                tips: [
                    'Start with a clear outline',
                    'Use specific prompts',
                    'Review and edit AI suggestions'
                ]
            },
            zh: {
                title: 'Deepseek写作助手',
                description: '使用AI辅助创建优质内容',
                features: [
                    'AI驱动的写作辅助',
                    '多种写作风格',
                    '语法和风格检查'
                ],
                tutorial: '如何使用Deepseek进行写作...',
                tips: [
                    '从清晰的大纲开始',
                    '使用具体的提示词',
                    '审查并编辑AI建议'
                ]
            }
        },
        category: 'text',
        imageUrl: '../images/deepseek.jpg',
        difficulty: 'beginner'
    },
    'chatgpt-writing': {
        id: 'chatgpt-writing',
        translations: {
            en: {
                title: 'ChatGPT for Teachers',
                description: 'Enhance your teaching with ChatGPT',
                features: [
                    'Lesson plan generation',
                    'Exercise creation',
                    'Student engagement ideas'
                ],
                tutorial: 'Getting started with ChatGPT in education...',
                tips: [
                    'Be specific in your prompts',
                    'Verify AI-generated content',
                    'Adapt content to your teaching style'
                ]
            },
            zh: {
                title: 'ChatGPT教学助手',
                description: '使用ChatGPT提升教学效果',
                features: [
                    '生成教案',
                    '创建练习',
                    '学生互动创意'
                ],
                tutorial: 'ChatGPT教育应用入门...',
                tips: [
                    '使用具体的提示词',
                    '验证AI生成的内容',
                    '根据教学风格调整内容'
                ]
            }
        },
        category: 'text',
        imageUrl: '../images/chatgpt.jpg',
        difficulty: 'intermediate'
    }
    // 可以继续添加更多资源...
}; 