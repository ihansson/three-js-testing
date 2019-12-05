export class System<T> {
	children: T[] = [];
	add(child: T){
		this.children.push(child)
	}
	remove(child: T){
		this.children = this.children.filter((_child: T): boolean => {
			return _child !== child;
		})
	}
	update(delta: number){
		this.children = this.children.filter((child: T): boolean => {
			return  (<any>child).update(delta);
		});
	}
	filter(prop: string, value: any): T[] {
		return this.children.filter((child: T) => {
			return (<any>child)[prop] === value;
		});
	}
}