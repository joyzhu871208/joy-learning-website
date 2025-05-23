/**
 * 资源管理器 - 帮助添加和管理教学资源
 */

// 当前已有的资源列表可从resource-data.js中获取
// 这个工具可以帮助您轻松添加新资源

// 添加新资源的函数
function addNewResource(resourceId, resourceData) {
    // 检查资源ID是否已存在
    if (resourceDetails[resourceId]) {
        console.warn(`警告: 资源ID "${resourceId}" 已存在，将会被覆盖`);
    }
    
    // 验证资源数据的必填字段
    const requiredFields = ['title', 'description', 'introduction', 'videoUrl', 'pdfGuide'];
    const missingFields = requiredFields.filter(field => !resourceData[field]);
    
    if (missingFields.length > 0) {
        console.error(`错误: 缺少必填字段 ${missingFields.join(', ')}`);
        return false;
    }
    
    // 添加或更新资源
    resourceDetails[resourceId] = resourceData;
    console.log(`资源 "${resourceId}" 已添加/更新`);
    
    // 返回当前资源数量
    return Object.keys(resourceDetails).length;
}

// 创建资源对象的辅助函数
function createResource(title, description, introduction, videoUrl, pdfGuide, relatedResources = []) {
    return {
        title,
        description,
        introduction,
        videoUrl,
        pdfGuide,
        relatedResources
    };
}

// 生成用于resource-data.js的代码
function generateResourceDataCode() {
    let code = 'const resourceDetails = {\n';
    
    Object.entries(resourceDetails).forEach(([id, data], index, array) => {
        code += `    "${id}": {\n`;
        code += `        title: "${data.title}",\n`;
        code += `        description: "${data.description}",\n`;
        code += `        introduction: "${data.introduction}",\n`;
        code += `        videoUrl: "${data.videoUrl}",\n`;
        code += `        pdfGuide: "${data.pdfGuide}",\n`;
        
        if (data.relatedResources && data.relatedResources.length > 0) {
            code += '        relatedResources: [\n';
            data.relatedResources.forEach((resource, rIndex) => {
                code += '            {\n';
                code += `                id: "${resource.id}",\n`;
                code += `                title: "${resource.title}",\n`;
                code += `                description: "${resource.description}"\n`;
                code += '            }' + (rIndex < data.relatedResources.length - 1 ? ',\n' : '\n');
            });
            code += '        ]\n';
        } else {
            code += '        relatedResources: []\n';
        }
        
        code += '    }' + (index < array.length - 1 ? ',\n' : '\n');
    });
    
    code += '};';
    return code;
}

// 示例：如何使用这个工具添加新资源
/*
// 示例1：添加一个新的AI工具资源
const newResourceId = 'midjourney-images';
const newResourceData = createResource(
    '使用Midjourney生成教学图片',
    '5分钟掌握AI图像生成',
    'Midjourney是一款领先的AI图像生成工具，可以帮助教师创建生动有趣的教学素材。本教程将指导您如何使用Midjourney生成适合课堂使用的高质量图片。',
    './videos/midjourney-tutorial.mp4',
    './pdfs/midjourney-guide.pdf',
    [
        {
            id: 'dalle-images',
            title: '使用DALL-E生成教学图片',
            description: '另一种AI图像生成工具的使用教程'
        },
        {
            id: 'canva-design',
            title: '在Canva中使用AI图像',
            description: '如何将AI生成的图像整合到教学设计中'
        }
    ]
);

// 添加到资源列表
addNewResource(newResourceId, newResourceData);

// 生成更新后的资源数据代码
const updatedCode = generateResourceDataCode();
console.log(updatedCode);
*/

// 资源内容模板示例
const contentTemplates = {
    introduction: {
        aiAssistant: '[工具名称]是一款功能强大的AI助手，专为教师设计，可以帮助您[主要功能]。通过简单的提示和指令，您可以快速[工具主要用途]，大大提高教学效率并增强学生参与度。',
        contentCreation: '[工具名称]是一款直观易用的内容创建工具，让教师可以轻松[主要功能]。无需专业设计经验，您也能创建[创作内容类型]，为课堂带来更多创意和互动性。',
        videoEditing: '[工具名称]提供了简单但强大的视频编辑功能，特别适合教师制作教学视频。您可以轻松[主要功能]，即使没有专业视频制作经验也能创建引人入胜的教学内容。'
    },
    relatedResources: {
        aiTools: [
            { title: '使用ChatGPT生成教案', description: '快速创建结构化的教学计划' },
            { title: '使用Claude设计课堂活动', description: '生成创新的互动教学活动' },
            { title: '使用Copilot辅助教学备课', description: 'Microsoft AI助手在备课中的应用' }
        ],
        designTools: [
            { title: '使用Canva创建教学演示', description: '设计专业的教学幻灯片' },
            { title: '使用Piktochart制作信息图', description: '创建视觉化的学习资料' },
            { title: '使用Genially设计互动内容', description: '增加课堂参与度的互动元素' }
        ],
        videoTools: [
            { title: '使用CapCut编辑教学视频', description: '简单高效的视频编辑工具' },
            { title: '使用Loom录制讲解视频', description: '录制屏幕和讲解的简便工具' },
            { title: '使用VideoScribe创建动画', description: '制作引人入胜的教学动画' }
        ]
    }
};

// 导出功能
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        addNewResource,
        createResource,
        generateResourceDataCode,
        contentTemplates
    };
} 