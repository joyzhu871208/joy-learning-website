/**
 * 资源卡片生成器 - 帮助在resources.html页面中生成资源卡片
 * 这个脚本可以自动从resource-data.js中读取资源数据，生成资源卡片HTML
 */

// 假设已引入resource-data.js

// 生成单个资源卡片的HTML
function generateResourceCard(id, resource) {
    return `
<div class="bg-white rounded-2xl overflow-hidden card-shadow tool-card">
    <img src="./images/${id}.jpg" alt="${resource.title}" class="w-full h-48 object-cover">
    <div class="p-6">
        <div class="flex justify-between items-start mb-2">
            <h3 class="font-bold text-xl">${resource.title}</h3>
        </div>
        <p class="text-gray-600 mb-4">${resource.description}</p>
        <a href="resource-detail.html?id=${id}" class="inline-block view-details-btn px-6 py-2 rounded-full text-sm font-bold">
            View Details
        </a>
    </div>
</div>`;
}

// 根据类别生成资源卡片列表
function generateResourceCardsByCategory(category, resourcesData) {
    // 资源类别映射
    const categoryMap = {
        'text': ['deepseek-writing', 'chatgpt-writing', 'claude-lesson'],
        'design': ['canva-design', 'midjourney-images', 'piktochart-infographic'],
        'video': ['capcut-editing', 'loom-recording', 'videoscribe-animation']
    };
    
    // 根据类别获取资源ID列表
    const resourceIds = categoryMap[category] || [];
    
    // 生成HTML
    let html = '';
    resourceIds.forEach(id => {
        if (resourcesData[id]) {
            html += generateResourceCard(id, resourcesData[id]);
        }
    });
    
    return html;
}

// 初始化资源页面
function initResourcesPage() {
    // 文本和教学辅助工具
    const textToolsContainer = document.getElementById('text-tools-container');
    if (textToolsContainer) {
        textToolsContainer.innerHTML = generateResourceCardsByCategory('text', resourceDetails);
    }
    
    // 设计和编辑工具
    const designToolsContainer = document.getElementById('design-tools-container');
    if (designToolsContainer) {
        designToolsContainer.innerHTML = generateResourceCardsByCategory('design', resourceDetails);
    }
    
    // 视频创作工具
    const videoToolsContainer = document.getElementById('video-tools-container');
    if (videoToolsContainer) {
        videoToolsContainer.innerHTML = generateResourceCardsByCategory('video', resourceDetails);
    }
}

// 等待DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 检查是否在resources.html页面
    if (document.getElementById('text-tools-container') || 
        document.getElementById('design-tools-container') || 
        document.getElementById('video-tools-container')) {
        initResourcesPage();
    }
}); 