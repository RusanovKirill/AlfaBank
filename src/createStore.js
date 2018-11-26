import { decorate, observable } from 'mobx';

class CreateStore {
	albums = []
	images = []
	filter = ''
}

decorate(CreateStore, {
	albums: observable,
	images: observable,
	filter: observable
})

const store = new CreateStore();

export default store;