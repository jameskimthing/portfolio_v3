interface Skill {
	label: string;
	confidence: number;
}

const developmentSkills: Skill[] = [
	{ label: 'websites', confidence: 80 },
	{ label: 'mobile', confidence: 70 },
	{ label: 'backend', confidence: 70 },
	{ label: 'machine_learning', confidence: 50 },
	{ label: 'games', confidence: 40 }
];

const academicSkills: Skill[] = [
	{ label: 'calculus', confidence: 85 },
	{ label: 'physics', confidence: 80 },
	{ label: 'english', confidence: 75 }
];

export { developmentSkills, academicSkills };
