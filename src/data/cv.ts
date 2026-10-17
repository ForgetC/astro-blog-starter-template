// Portfolio content, in French and English.
// Edit this file to update the site; every page reads from it.

export type Lang = 'fr' | 'en';

export type Element = 'air' | 'earth' | 'fire' | 'water';

export interface Pillar {
	element: Element;
	stone: string;
	title: string;
	pitch: string;
	tools: string[];
}

export interface Job {
	company: string;
	role: string;
	period: string;
	place: string;
	summary: string;
	highlights: string[];
	tags?: string[];
}

export const PROFILE = {
	name: 'Namoussi Yayaoui',
	email: 'contact@silush.com',
	linkedin: 'https://www.linkedin.com/in/namoussi-yayaoui',
	github: 'https://github.com/ForgetC',
	site: 'https://cv.silush.com',
};

const fr = {
	meta: {
		title: 'Namoussi Yayaoui · Cloud & Platform Engineer',
		description:
			"Cloud & Platform Engineer à Toulouse : infrastructures critiques 24/7, Kubernetes, AWS, Ansible et GitOps.",
	},
	nav: { elements: 'Éléments', experience: 'Parcours', education: 'Formation', lab: 'Lab', contact: 'Contact' },
	hero: {
		kicker: 'Cloud & Platform Engineer',
		tagline: "Je conçois et j'exploite des infrastructures critiques qui tournent 24 h/24.",
		location: 'Toulouse et périphérie',
		lead:
			"Ingénieur en systèmes d'information chez Marlink : datacenter, haute disponibilité, cloud et automatisation. J'exploite des environnements hybrides à grande échelle avec une obsession : la fiabilité, la sécurité et la performance.",
		ctaContact: 'Me contacter',
		ctaLinkedin: 'LinkedIn',
		stats: [
			{ value: '8+', label: "ans d'infra" },
			{ value: '24/7', label: 'environnements critiques' },
			{ value: 'M2', label: 'ingénierie informatique' },
		],
	},
	elements: {
		title: 'Les cinq éléments',
		intro:
			"Une infrastructure fiable tient sur quatre éléments. Le cinquième, c'est ce qui les fait fonctionner ensemble.",
		pillars: [
			{
				element: 'air',
				stone: 'Air',
				title: 'Cloud',
				pitch: 'Architectures cloud, hybrides et multi-cloud, conçues pour encaisser la charge.',
				tools: ['AWS (Solutions Architect)', 'Azure (AZ-900)', 'Hybrid & multi-cloud', 'Kubernetes', 'K3s', 'Rancher', 'Docker'],
			},
			{
				element: 'earth',
				stone: 'Terre',
				title: 'Datacenter',
				pitch: 'Le socle : virtualisation, stockage, réseau et sauvegarde en haute disponibilité.',
				tools: ['VMware vSphere/ESXi', 'Nutanix', 'Proxmox', 'HP Alletra / SAN', 'Veeam', 'NetBackup', 'Cisco · Juniper · Huawei · Brocade'],
			},
			{
				element: 'fire',
				stone: 'Feu',
				title: 'Cybersécurité',
				pitch: 'La sécurité by design : vulnérabilités, pare-feu et supervision.',
				tools: ['Qualys', 'Fortinet / FortiAnalyzer', 'Stormshield', 'Gestion des vulnérabilités', 'Centreon', 'Nagios'],
			},
			{
				element: 'water',
				stone: 'Eau',
				title: 'Automatisation',
				pitch: "Tout ce qui se répète devient du code : IaC, CI/CD et GitOps.",
				tools: ['Ansible', 'Bash', 'Python', 'Git', 'ArgoCD', 'CI/CD', 'Infrastructure as Code'],
			},
		] as Pillar[],
		fifth: {
			label: 'Le cinquième élément',
			title: "L'humain",
			text:
				"Leadership technique, autonomie, transmission et goût des problèmes complexes. Scrum Master, référent formation, point d'entrée DevOps : la technique ne vaut que si l'équipe avance avec.",
			traits: ['Leadership technique', 'Transmission', 'Agile / Kanban', 'FR · EN'],
		},
	},
	experience: {
		title: 'Parcours',
		present: "aujourd'hui",
		jobs: [
			{
				company: 'Marlink',
				role: "Ingénieur en systèmes d'information",
				period: "déc. 2024 – aujourd'hui",
				place: 'Toulouse',
				summary:
					'Infrastructures datacenter critiques, haute disponibilité, cybersécurité, virtualisation, cloud et automatisation, avec une forte orientation cloud-native et DevOps.',
				highlights: [
					'Administration et exploitation des infrastructures datacenter globales, maintien en conditions opérationnelles (RUN)',
					'Gestion des incidents critiques et supervision 24/7',
					'Déploiement et gestion des plateformes Kubernetes',
					'Industrialisation et automatisation des opérations (Ansible, GitOps)',
					'Gestion des vulnérabilités et remédiation sécurité',
					'Projets cloud, hybrid cloud et multi-cloud ; optimisation de la performance et de la résilience',
				],
				tags: ['Kubernetes', 'VMware', 'Nutanix', 'AWS', 'Ansible', 'ArgoCD', 'Qualys', 'Fortinet', 'Oracle RAC', 'PostgreSQL', 'Kafka'],
			},
			{
				company: 'Capgemini',
				role: 'Ingénieur systèmes',
				period: 'juin 2022 – nov. 2024',
				place: 'Montpellier',
				summary: 'Deux missions : fabrication et industrialisation, puis Scrum Master du Centre de Développement de Services.',
				highlights: [
					'Chaînes de production sous E-GEN / TWS-D, environnements de test et de production',
					'Pilotage des mises en production, en versions mensuelles ou en continuous delivery',
					"Scrum Master : indicateurs de service mensuels et plan d'amélioration continue",
					"Point d'entrée DevOps des clients, en lien avec la System Team et la ligne produit",
					'Référent formation : création d’un programme de formation vidéo pour l’équipe',
					'Support incidents de niveau 2',
				],
				tags: ['Industrialisation', 'Continuous Delivery', 'Scrum', 'Kanban', 'DevOps'],
			},
			{
				company: 'Groupe SAGES',
				role: 'Administrateur systèmes et réseaux',
				period: 'août 2018 – mai 2022',
				place: 'Béziers',
				summary: "Toute l'infrastructure : réseau, serveurs, virtualisation, sécurité et sauvegardes.",
				highlights: [
					'Hyperviseurs, commutateurs, routeurs, serveurs GNU/Linux et Windows',
					'Virtualisation VMware et Hyper-V',
					'Pare-feu Stormshield et Cisco ; VPN, NAT, DHCP, LDAP, DNS',
					'Exchange et Azure DevOps',
					'Supervision réseau et systèmes, politique de sauvegarde',
				],
				tags: ['VMware', 'Hyper-V', 'Stormshield', 'Cisco', 'Exchange'],
			},
		] as Job[],
		earlier: {
			title: 'Débuts',
			items: [
				{ company: 'Evidensee', role: 'Administrateur systèmes et réseaux', period: '2018', text: 'Audit réseau, Active Directory, virtualisation, sauvegarde et sécurisation.' },
				{ company: 'Hippocampe Net', role: 'Administrateur réseau et systèmes', period: '2017', text: "Parc informatique d'une école : Linux (Samba, LAMP, Nagios), Windows (AD), support N2/N3." },
				{ company: 'From Scratch', role: 'Intégrateur web', period: '2016', text: 'Création et migration de sites web.' },
			],
		},
	},
	education: {
		title: 'Formation',
		items: [
			{ school: 'CESI École Supérieure de l’Alternance', degree: 'Master 2, ingénierie informatique', period: '2020 – 2022' },
			{ school: 'ORT France', degree: 'Management infrastructure & sécurité', period: '2019 – 2020' },
			{ school: 'IUT de Saint-Malo', degree: 'Licence pro, administration réseaux et systèmes', period: '2017 – 2018' },
			{ school: 'Lycée Marc Bloch, Sérignan', degree: 'BTS SIO, option SISR', period: '2016 – 2017' },
			{ school: 'IUT de Béziers', degree: 'DUT Métiers du multimédia et de l’internet', period: '2014 – 2016' },
		],
		certTitle: 'Certifications',
		certs: [
			'AZ-900 : Microsoft Azure Fundamentals',
			'Windows Server 2019 : gestion de la sécurité des accès',
			'Cybersecurity Essentials',
			'Introduction to Cybersecurity',
		],
	},
	lab: {
		title: 'Le lab',
		intro: "Ce que je fais tourner pour moi, en dehors du travail. Ce site en fait partie.",
		items: [
			{ title: 'Edge & Zero Trust', text: 'Services publiés par Cloudflare Tunnel, sans port entrant, derrière Cloudflare Access (SSO + MFA). Ce site est servi par un Cloudflare Worker.' },
			{ title: 'VPN & DNS privé', text: 'WireGuard (wg-easy), AdGuard Home et Unbound en DNS-over-TLS avec validation DNSSEC.' },
			{ title: 'Automatisation', text: 'n8n auto-hébergé sur Oracle Cloud (ARM Ampere) avec PostgreSQL, conteneurisé et durci.' },
		],
	},
	contact: {
		title: 'On en parle ?',
		text: "Un projet d'infrastructure, une plateforme à fiabiliser ou simplement envie d'échanger : écris-moi.",
		email: 'Écrire un e-mail',
		linkedin: 'Voir mon LinkedIn',
	},
	ui: { theme: 'Changer de thème', lang: 'English', langHref: '/en/', footer: 'Conçu et hébergé sur Cloudflare Workers.' },
};

const en: typeof fr = {
	meta: {
		title: 'Namoussi Yayaoui · Cloud & Platform Engineer',
		description: 'Cloud & Platform Engineer in Toulouse, France: 24/7 critical infrastructure, Kubernetes, AWS, Ansible and GitOps.',
	},
	nav: { elements: 'Elements', experience: 'Experience', education: 'Education', lab: 'Lab', contact: 'Contact' },
	hero: {
		kicker: 'Cloud & Platform Engineer',
		tagline: 'I design and run critical infrastructure that stays up 24/7.',
		location: 'Toulouse, France',
		lead:
			'Information Systems Engineer at Marlink: datacenter, high availability, cloud and automation. I run large-scale hybrid environments with one obsession: reliability, security and performance.',
		ctaContact: 'Get in touch',
		ctaLinkedin: 'LinkedIn',
		stats: [
			{ value: '8+', label: 'years in infrastructure' },
			{ value: '24/7', label: 'critical environments' },
			{ value: 'MSc', label: 'computer engineering' },
		],
	},
	elements: {
		title: 'The five elements',
		intro: 'Reliable infrastructure stands on four elements. The fifth is what makes them work together.',
		pillars: [
			{
				element: 'air',
				stone: 'Air',
				title: 'Cloud',
				pitch: 'Cloud, hybrid and multi-cloud architectures built to take the load.',
				tools: ['AWS (Solutions Architect)', 'Azure (AZ-900)', 'Hybrid & multi-cloud', 'Kubernetes', 'K3s', 'Rancher', 'Docker'],
			},
			{
				element: 'earth',
				stone: 'Earth',
				title: 'Datacenter',
				pitch: 'The foundation: highly available virtualisation, storage, networking and backup.',
				tools: ['VMware vSphere/ESXi', 'Nutanix', 'Proxmox', 'HP Alletra / SAN', 'Veeam', 'NetBackup', 'Cisco · Juniper · Huawei · Brocade'],
			},
			{
				element: 'fire',
				stone: 'Fire',
				title: 'Cybersecurity',
				pitch: 'Security by design: vulnerability management, firewalls and monitoring.',
				tools: ['Qualys', 'Fortinet / FortiAnalyzer', 'Stormshield', 'Vulnerability management', 'Centreon', 'Nagios'],
			},
			{
				element: 'water',
				stone: 'Water',
				title: 'Automation',
				pitch: 'Anything done twice becomes code: IaC, CI/CD and GitOps.',
				tools: ['Ansible', 'Bash', 'Python', 'Git', 'ArgoCD', 'CI/CD', 'Infrastructure as Code'],
			},
		],
		fifth: {
			label: 'The fifth element',
			title: 'People',
			text:
				'Technical leadership, autonomy, knowledge sharing and a taste for hard problems. Scrum Master, training lead, DevOps point of contact: technology only matters if the team moves with it.',
			traits: ['Technical leadership', 'Knowledge sharing', 'Agile / Kanban', 'FR · EN'],
		},
	},
	experience: {
		title: 'Experience',
		present: 'present',
		jobs: [
			{
				company: 'Marlink',
				role: 'Information Systems Engineer',
				period: 'Dec 2024 – present',
				place: 'Toulouse',
				summary:
					'Critical datacenter infrastructure, high availability, cybersecurity, virtualisation, cloud and automation, with a strong cloud-native and DevOps focus.',
				highlights: [
					'Run and operate global datacenter infrastructure',
					'Critical incident management and 24/7 monitoring',
					'Deploy and manage Kubernetes platforms',
					'Industrialise and automate operations (Ansible, GitOps)',
					'Vulnerability management and security remediation',
					'Cloud, hybrid and multi-cloud projects; performance and resilience tuning',
				],
				tags: ['Kubernetes', 'VMware', 'Nutanix', 'AWS', 'Ansible', 'ArgoCD', 'Qualys', 'Fortinet', 'Oracle RAC', 'PostgreSQL', 'Kafka'],
			},
			{
				company: 'Capgemini',
				role: 'Systems Engineer',
				period: 'Jun 2022 – Nov 2024',
				place: 'Montpellier',
				summary: 'Two assignments: build & industrialisation, then Scrum Master of the Service Development Centre.',
				highlights: [
					'Production pipelines on E-GEN / TWS-D, test and production environments',
					'Release management, monthly or continuous delivery',
					'Scrum Master: monthly service KPIs and continuous improvement plan',
					'DevOps point of contact for clients, with the System Team and product line',
					'Training lead: built a video training programme for the team',
					'Level 2 incident support',
				],
				tags: ['Industrialisation', 'Continuous Delivery', 'Scrum', 'Kanban', 'DevOps'],
			},
			{
				company: 'Groupe SAGES',
				role: 'Systems & Network Administrator',
				period: 'Aug 2018 – May 2022',
				place: 'Béziers',
				summary: 'The whole stack: network, servers, virtualisation, security and backups.',
				highlights: [
					'Hypervisors, switches, routers, GNU/Linux and Windows servers',
					'VMware and Hyper-V virtualisation',
					'Stormshield and Cisco firewalls; VPN, NAT, DHCP, LDAP, DNS',
					'Exchange and Azure DevOps',
					'Network and systems monitoring, backup policy',
				],
				tags: ['VMware', 'Hyper-V', 'Stormshield', 'Cisco', 'Exchange'],
			},
		],
		earlier: {
			title: 'Early days',
			items: [
				{ company: 'Evidensee', role: 'Systems & Network Administrator', period: '2018', text: 'Network audit, Active Directory, virtualisation, backup and hardening.' },
				{ company: 'Hippocampe Net', role: 'Network & Systems Administrator', period: '2017', text: 'School IT estate: Linux (Samba, LAMP, Nagios), Windows (AD), L2/L3 support.' },
				{ company: 'From Scratch', role: 'Web Integrator', period: '2016', text: 'Website builds and migrations.' },
			],
		},
	},
	education: {
		title: 'Education',
		items: [
			{ school: 'CESI', degree: "Master's degree, computer engineering", period: '2020 – 2022' },
			{ school: 'ORT France', degree: 'Infrastructure & security management', period: '2019 – 2020' },
			{ school: 'IUT de Saint-Malo', degree: "Bachelor's, network & systems administration", period: '2017 – 2018' },
			{ school: 'Lycée Marc Bloch, Sérignan', degree: 'BTS SIO (infrastructure, systems & networks)', period: '2016 – 2017' },
			{ school: 'IUT de Béziers', degree: 'DUT, multimedia & internet', period: '2014 – 2016' },
		],
		certTitle: 'Certifications',
		certs: [
			'AZ-900: Microsoft Azure Fundamentals',
			'Windows Server 2019: access security management',
			'Cybersecurity Essentials',
			'Introduction to Cybersecurity',
		],
	},
	lab: {
		title: 'The lab',
		intro: 'What I run for myself, outside work. This site is part of it.',
		items: [
			{ title: 'Edge & Zero Trust', text: 'Services published through Cloudflare Tunnel with no inbound ports, behind Cloudflare Access (SSO + MFA). This site is served by a Cloudflare Worker.' },
			{ title: 'VPN & private DNS', text: 'WireGuard (wg-easy), AdGuard Home and Unbound over DNS-over-TLS with DNSSEC validation.' },
			{ title: 'Automation', text: 'Self-hosted n8n on Oracle Cloud (ARM Ampere) with PostgreSQL, containerised and hardened.' },
		],
	},
	contact: {
		title: "Let's talk",
		text: 'An infrastructure project, a platform to make reliable, or just a chat: drop me a line.',
		email: 'Send an email',
		linkedin: 'View my LinkedIn',
	},
	ui: { theme: 'Toggle theme', lang: 'Français', langHref: '/', footer: 'Designed and served on Cloudflare Workers.' },
};

export const CV: Record<Lang, typeof fr> = { fr, en };
