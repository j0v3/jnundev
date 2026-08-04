// =========================================================================
// DATA STRUCTURE FOR WEB PROJECTS (Easily editable via JSON/JS Object)
// =========================================================================
const webProjectsData = [
    {
        id: "web-1",
        category: "plataformas",
        title: "Nexus ERP SaaS",
        shortDesc: "Sistema robusto de gestão corporativa com controle financeiro e dashboards em tempo real.",
        fullDesc: "Plataforma de alta performance desenvolvida para gestão empresarial integrada. Conta com controle de estoque, emissão de relatórios dinâmicos, fluxo de caixa e gestão de acessos com autenticação segura.",
        stack: ["React", "PHP", "MySQL", "Docker", "Tailwind"],
        image: "https://placehold.co/600x400/0f172a/60a5fa?text=Nexus+ERP+SaaS+Platform",
        features: [
            "Dashboard interativo com gráficos em tempo real",
            "Arquitetura de dados otimizada em MySQL",
            "Autenticação JWT & permissões granulares",
            "Deploy automatizado via Docker em servidor Linux"
        ],
        liveDemoUrl: "#"
    },
    {
        id: "web-2",
        category: "ia",
        title: "Agente IA & Workflow N8n",
        shortDesc: "Orquestração de LLMs com n8n para atendimento automático no WhatsApp e qualificação de leads.",
        fullDesc: "Solução de automação de processos inteligentes. Conecta a API do OpenAI/Gemini ao CRM da empresa via workflows no N8n, respondendo dúvidas de clientes e agendando reuniões automaticamente.",
        stack: ["N8n", "Python", "OpenAI API", "Webhooks", "Docker"],
        image: "https://placehold.co/600x400/0f172a/a78bfa?text=n8n+%2B+AI+Workflow+Engine",
        features: [
            "Encadeamento de prompts e memória contextual",
            "Integração nativa com WhatsApp e CRM via Webhooks",
            "Redução de 80% no tempo de resposta inicial",
            "Painel de monitoramento de chamadas de API"
        ],
        liveDemoUrl: "#"
    },
    {
        id: "web-3",
        category: "sites",
        title: "Vortex Telecom Portal",
        shortDesc: "Landing page ultra rápida para provedor de fibra com simulador de velocidade e consulta de CEP.",
        fullDesc: "Website de altíssima conversão criado para provedor de telecomunicações. Possui simulador interativo de banda larga com canvas HTML5, verificação automática de viabilidade técnica por CEP e contratação inline.",
        stack: ["HTML5", "CSS3", "JavaScript", "Tailwind"],
        image: "https://placehold.co/600x400/0f172a/38bdf8?text=Vortex+Telecom+Landing+Page",
        features: [
            "Speedometer interativo com Canvas 2D",
            "Consumo de API CEP em tempo real",
            "Modal completo de login e assinatura de planos",
            "Design 100% responsivo e otimizado para SEO"
        ],
        liveDemoUrl: "#"
    },
    {
        id: "web-4",
        category: "plataformas",
        title: "DevMetrics Analytics",
        shortDesc: "Dashboard técnico para monitoramento de servidores, logs de erro e desempenho de código.",
        fullDesc: "Ferramenta interna criada para acompanhar a integridade de infraestruturas em tempo real, monitorar consumo de memória/CPU de containers Docker e enviar alertas críticos para o Telegram.",
        stack: ["Python", "React", "Docker", "Linux"],
        image: "https://placehold.co/600x400/0f172a/818cf8?text=DevMetrics+Server+Monitor",
        features: [
            "Coleta de métricas via daemon Python",
            "Alertas automáticos instantâneos",
            "Interface limpa em React com suporte a Dark Mode"
        ],
        liveDemoUrl: "#"
    },
    {
        id: "web-5",
        category: "ia",
        title: "AutoDoc Parser AI",
        shortDesc: "Leitor inteligente de notas fiscais e documentos usando visão computacional e LLMs.",
        fullDesc: "Sistema de extração de dados automatizada que recebe arquivos PDF ou imagens, processa via OCR e estrutura todas as informações contábeis diretamente em banco de dados SQL.",
        stack: ["Python", "MySQL", "UML", "LLMs"],
        image: "https://placehold.co/600x400/0f172a/c084fc?text=AutoDoc+AI+OCR+Parser",
        features: [
            "Extrator automático de campos fiscais",
            "Sanitização de dados em SQL com validação rigorosa",
            "Modelagem de banco estruturada via UML"
        ],
        liveDemoUrl: "#"
    },
    {
        id: "web-6",
        category: "sites",
        title: "MedCare Clínica Portal",
        shortDesc: "Site institucional completo com agendamento online de consultas e prontuário básico.",
        fullDesc: "Desenvolvimento web para clínica médica de médio porte. Permite que pacientes escolham horários, recebam confirmação no e-mail e acessem dados médicos em ambiente protegido.",
        stack: ["PHP", "HTML", "JS", "MySQL"],
        image: "https://placehold.co/600x400/0f172a/34d399?text=MedCare+Clinic+Portal",
        features: [
            "Agendamento com calendário dinâmico",
            "Envio automático de lembretes de consulta",
            "Painel administrativo para médicos"
        ],
        liveDemoUrl: "#"
    }
];


// =========================================================================
// DATA STRUCTURE FOR DESIGN PROJECTS
// =========================================================================
const designProjectsData = [
    {
        id: "des-1",
        title: "Branding & Figma UI Kit - TechPulse",
        category: "UI/UX & Branding",
        tools: ["Figma", "Affinity", "Canva"],
        image: "https://placehold.co/800x500/0e1526/a78bfa?text=TechPulse+Figma+UI+Kit+%26+Branding",
        description: "Projeto completo de identidade visual e prototipagem de telas para aplicativo financeiro no Figma. Inclui paleta de cores, tipografia, ícones customizados e guia de marca."
    },
    {
        id: "des-2",
        title: "Campanha de Mídia Social & Artes",
        category: "Social Media",
        tools: ["Affinity", "Canva"],
        image: "https://placehold.co/600x400/0e1526/60a5fa?text=Social+Media+Arts+%26+Posters",
        description: "Kit com 20+ artes para Instagram e LinkedIn com visual moderno, tipografia marcante e forte apelo visual."
    },
    {
        id: "des-3",
        title: "Design Gráfico Impresso (Flyers & Cartões)",
        category: "Material Impresso",
        tools: ["Affinity", "Figma"],
        image: "https://placehold.co/600x400/0e1526/38bdf8?text=Print+Flyers+%26+Business+Cards",
        description: "Criação de dobráveis, cartões de visita profissionais com verniz localizado e outdoors de alta resolução."
    },
    {
        id: "des-4",
        title: "Motion & Vídeos para Redes Sociais",
        category: "Multimídia",
        tools: ["Affinity", "Canva"],
        image: "https://placehold.co/600x400/0e1526/f43f5e?text=Video+Teasers+%26+Reels+Cover",
        description: "Edição de vídeos promocionais curtos, reels, vinhetas animadas e capas para YouTube."
    }
];


// =========================================================================
// WEB PROJECTS RENDERER
// =========================================================================
function renderWebProjects(filter = 'all') {
    const grid = document.getElementById('webProjectsGrid');
    grid.innerHTML = '';

    const filteredData = filter === 'all'
        ? webProjectsData
        : webProjectsData.filter(item => item.category === filter);

    filteredData.forEach(item => {
        const card = document.createElement('div');
        card.className = "project-card glass-card rounded-2xl overflow-hidden flex flex-col justify-between group cursor-pointer border border-slate-800";
        card.onclick = () => openProjectModal(item.id);

        card.innerHTML = `
            <div>
                <!-- Image with Hover Overlay Button -->
                <div class="relative overflow-hidden h-48 bg-slate-950">
                    <img src="${item.image}" alt="${item.title}" class="project-img w-full h-full object-cover transition-transform duration-500">
                    <div class="absolute inset-0 bg-slate-950/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <span class="overlay-btn bg-gradient-jnun text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2">
                            <span>Ver Detalhes do Projeto</span>
                            <i class="fa-solid fa-arrow-right"></i>
                        </span>
                    </div>
                </div>

                <!-- Card Content -->
                <div class="p-6 space-y-3">
                    <div class="flex items-center justify-between">
                        <h3 class="font-heading font-bold text-lg text-white group-hover:text-blue-400 transition-colors">${item.title}</h3>
                    </div>
                    <p class="text-xs text-slate-400 leading-relaxed">${item.shortDesc}</p>
                </div>
            </div>

            <!-- Tech Stack Badges Footer -->
            <div class="px-6 pb-6 pt-2 flex flex-wrap gap-1.5 border-t border-slate-800/60 mt-2">
                ${item.stack.map(tech => `<span class="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[10px] font-medium text-slate-300">${tech}</span>`).join('')}
            </div>
        `;
        grid.appendChild(card);
    });
}

function filterWebProjects(category, button) {
    document.querySelectorAll('.web-filter-btn').forEach(btn => {
        btn.className = "web-filter-btn px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-all text-xs font-medium";
    });
    if (button) {
        button.className = "web-filter-btn px-4 py-2 rounded-xl bg-blue-600 text-white font-bold transition-all text-xs";
    }
    renderWebProjects(category);
}


// =========================================================================
// DESIGN PROJECTS RENDERER (Split View)
// =========================================================================
let currentFeaturedDesignIndex = 0;

function renderDesignSection() {
    const featuredContainer = document.getElementById('designFeaturedContainer');
    const secondaryGrid = document.getElementById('designSecondaryGrid');

    const featured = designProjectsData[currentFeaturedDesignIndex];

    featuredContainer.innerHTML = `
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 text-[11px] font-bold uppercase tracking-wider mb-4 border border-purple-500/20">
            <i class="fa-solid fa-star"></i> Projeto de Design em Destaque
        </div>
        <h3 class="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-2">${featured.title}</h3>
        <p class="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">${featured.description}</p>

        <div class="rounded-2xl overflow-hidden border border-slate-700/80 mb-6 bg-slate-950">
            <img src="${featured.image}" alt="${featured.title}" class="w-full h-64 sm:h-80 object-cover">
        </div>

        <div class="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-800">
            <div class="flex items-center gap-2 text-xs font-medium text-slate-400">
                <span>Ferramentas:</span>
                ${featured.tools.map(t => `<span class="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-purple-300 text-[10px] font-bold">${t}</span>`).join('')}
            </div>
            <button onclick="openConsultModal()" class="text-xs text-purple-400 hover:text-purple-300 font-bold flex items-center gap-1.5">
                <span>Solicitar Design Parecido</span>
                <i class="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    `;

    secondaryGrid.innerHTML = '';
    designProjectsData.forEach((item, idx) => {
        if (idx === currentFeaturedDesignIndex) return;

        const card = document.createElement('div');
        card.className = "glass-card p-4 rounded-xl border border-slate-800 cursor-pointer hover:border-purple-500/40 transition-all flex flex-col justify-between";
        card.onclick = () => {
            currentFeaturedDesignIndex = idx;
            renderDesignSection();
        };

        card.innerHTML = `
            <div>
                <div class="rounded-lg overflow-hidden h-28 bg-slate-950 mb-3">
                    <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover">
                </div>
                <span class="text-[10px] text-purple-400 font-bold uppercase tracking-wide">${item.category}</span>
                <h5 class="font-heading font-bold text-xs text-white mt-0.5">${item.title}</h5>
            </div>
            <span class="text-[10px] text-slate-400 mt-2 block hover:text-slate-200">Clique para destacar →</span>
        `;
        secondaryGrid.appendChild(card);
    });
}


// =========================================================================
// PROJECT DETAIL MODAL (ADDITIONAL DETAILED PAGE VIEW)
// =========================================================================
function openProjectModal(projectId) {
    const project = webProjectsData.find(p => p.id === projectId);
    if (!project) return;

    const modalBody = document.getElementById('projectModalBody');
    modalBody.innerHTML = `
        <div class="space-y-4">
            <div class="flex items-center gap-2">
                <span class="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider">
                    ${project.category.toUpperCase()}
                </span>
            </div>
            <h2 class="font-heading font-extrabold text-3xl sm:text-4xl text-white">${project.title}</h2>
            <p class="text-sm text-slate-300 leading-relaxed">${project.fullDesc}</p>
        </div>

        <div class="my-6 rounded-2xl overflow-hidden border border-slate-700 bg-slate-950">
            <img src="${project.image}" alt="${project.title}" class="w-full max-h-96 object-cover">
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div class="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                <h4 class="font-heading font-bold text-sm text-white flex items-center gap-2">
                    <i class="fa-solid fa-layer-group text-blue-400"></i>
                    <span>Tecnologias & Ferramentas Utilizadas</span>
                </h4>
                <div class="flex flex-wrap gap-2">
                    ${project.stack.map(s => `<span class="px-3 py-1 rounded-lg bg-slate-800 text-xs font-semibold text-blue-300 border border-slate-700">${s}</span>`).join('')}
                </div>
            </div>

            <div class="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                <h4 class="font-heading font-bold text-sm text-white flex items-center gap-2">
                    <i class="fa-solid fa-circle-check text-purple-400"></i>
                    <span>Destaques da Solução</span>
                </h4>
                <ul class="space-y-1.5 text-xs text-slate-300">
                    ${project.features.map(f => `<li class="flex items-center gap-2"><i class="fa-solid fa-check text-purple-400 text-[10px]"></i> <span>${f}</span></li>`).join('')}
                </ul>
            </div>
        </div>

        <div class="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button onclick="closeProjectModal(); openConsultModal();" class="w-full sm:w-auto bg-gradient-jnun text-white font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg">
                Quero um Projeto Semelhante
            </button>
            <button onclick="closeProjectModal()" class="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-slate-700 text-slate-300 text-xs font-bold hover:bg-slate-800">
                Voltar ao Portfólio
            </button>
        </div>
    `;

    document.getElementById('projectDetailModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    document.getElementById('projectDetailModal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}


// =========================================================================
// CONSULTATION MODAL & HANDLERS
// =========================================================================
let pendingWhatsAppUrl = '';

function openConsultModal() {
    document.getElementById('consultModal').classList.remove('hidden');
}

function closeConsultModal() {
    document.getElementById('consultModal').classList.add('hidden');
}

function openConfirmModal(url, service) {
    pendingWhatsAppUrl = url;
    document.getElementById('confirmModalText').innerText = `Sua solicitação para ${service} está pronta para envio. Clique em enviar para abrir o WhatsApp com a mensagem formatada.`;
    document.getElementById('confirmModal').classList.remove('hidden');
}

function closeConfirmModal() {
    document.getElementById('confirmModal').classList.add('hidden');
}

function confirmWhatsAppSend() {
    closeConfirmModal();
    closeConsultModal();
    showToast('Abrindo WhatsApp com mensagem pronta...');

    setTimeout(() => {
        window.open(pendingWhatsAppUrl, '_blank', 'noopener');
        pendingWhatsAppUrl = '';
    }, 1400);
}

function handleConsultSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('consultName').value;
    const phone = document.getElementById('consultPhone').value;
    const email = document.getElementById('consultEmail').value;
    const service = document.getElementById('consultService').value;
    const message = document.getElementById('consultMessage').value.trim() || 'Sem descrição adicional no momento.';

    const whatsappNumber = '5583981628338'; // substitua pelo número real do WhatsApp no formato internacional sem +
    const whatsappText = `Olá, JnunDev!
*Gostaria de solicitar um orçamento.*

*Nome / Empresa:* ${name}
*Telefone / WhatsApp:* ${phone}
*E-mail:* ${email}
*Serviço desejado:* ${service}
*Resumo do projeto:* ${message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;

    openConfirmModal(whatsappUrl, service);
    console.log(`Solicitação de orçamento via WhatsApp de ${name} para o serviço: ${service}`);
}

function showToast(msg) {
    const toast = document.getElementById('toast');
    document.getElementById('toastMsg').innerText = msg;
    toast.classList.remove('hidden');

    setTimeout(() => {
        toast.classList.add('hidden');
    }, 4000);
}

function redirectWithToast(url, message) {
    showToast(message);
    setTimeout(() => {
        window.open(url, '_blank', 'noopener');
    }, 1400);
}


// Mobile Menu Toggle
const mobileBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}
document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
});


// =========================================================================
// INITIALIZATION ON WINDOW LOAD
// =========================================================================
window.onload = function() {
    renderWebProjects('all');
    renderDesignSection();
};
