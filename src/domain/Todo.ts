export default interface Todo {
	//required
	checked: boolean;
	message: string;
	id: number;
	active: boolean;
	//optional
	foo?: boolean;
}
