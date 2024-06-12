import {rest} from "msw";
import {URL_BASE} from "../api/urlApi";

export const hanlders = [
	rest.get(URL_BASE, (req, res, ctx) => {
		const nameParam = req.url.searchParams.get("name") ?? "";

		if (nameParam === "Rick") {
			return res(
				ctx.status(200),
				ctx.json({
					results: [
						{
							id: 1,
							image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
							name: "Rick",
							status: "Alive",
							species: "Human",
							gender: "Male",
						},
					],
				})
			);
		}

		return res(
			ctx.status(200),
			ctx.json({
				results: [
					{
						id: 1,
						image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
						name: "Rick",
						status: "Alive",
						species: "Human",
						gender: "Male",
					},
					{
						id: 2,
						image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
						name: "Morty",
						status: "Alive",
						species: "Human",
						gender: "Male",
					},
				],
			})
		);
	}),
];
