export class Todo {
	constructor(
		public id: string,
		public text: string,
		public completed = false,
	) {}
}
