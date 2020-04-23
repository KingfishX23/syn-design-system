export const CerdasGroupLogo =
	"https://firebasestorage.googleapis.com/v0/b/cerdasproject.appspot.com/o/Landing%2FCerdasGroupLogo.webp?alt=media&token=5a4b6210-a75a-47a5-802b-dd420321d872";

export const MenuContents = [
	{ type: "single", level: 0, title: "Home", linkTo: "/", logo: null },
	{
		type: "multiple",
		level: 0,
		title: "Products",
		logo: null,
		contents: [
			{
				type: "multiple",
				level: 1,
				title: "UX Design",
				logo: null,
				contents: [
					{
						type: "single",
						level: 2,
						title: "You know Ill Go Get",
						linkTo: "/ux/GoGet",
						logo: null,
					},
				],
			},
			{
				type: "multiple",
				level: 1,
				title: "Music producers",
				logo: null,
				contents: [
					{
						type: "single",
						level: 2,
						title: "DJ rizki",
						linkTo: "/music/DJRizki",
						logo: null,
					},
				],
			},
		],
	},
	{ type: "divider" },
];
