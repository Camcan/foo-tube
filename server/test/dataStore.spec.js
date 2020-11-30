import fs from 'fs';
import { VideoStore } from '../src/util/dataStore';

const sampleData = [
	{
		id: '123',
		title: 'Title1',
		filename: 'file1',
		frames: ['frame1']
	}
];

const sampleItem = {
	id: '321',
	title: 'name-sample',
	filename: 'file2',
	frames: ['frame1']
};

const dbPath = 'test-db.json';

const getLocalDbFile = () => fs.readFileSync(dbPath);

afterAll(() => {
	if (fs.existsSync(dbPath)) {
		return fs.unlinkSync(dbPath, (err) => console.log(err));
	}
});

describe('videoStore', () => {
	it('should read from local filesystem if file exists', () => {
		const emptyStore = new VideoStore(dbPath);
		expect(emptyStore.getAllVideos()).toEqual([]);
		fs.writeFileSync(dbPath, JSON.stringify(sampleData));
		const populatedStore = new VideoStore(dbPath);
		expect(populatedStore.getAllVideos()).toEqual(sampleData);
	});
	it('can add a video to store', () => {
		const store = new VideoStore(dbPath);
		const allRecords = store.getAllVideos();
		const initialData = [...allRecords];
		const addedRecord = store.addVideo(sampleItem);

		expect(addedRecord).toMatchObject(sampleItem);
		expect(allRecords.length).toBe(initialData.length + 1);
		expect(allRecords).toContain(addedRecord);
		expect(addedRecord).toHaveProperty('added');
		expect(addedRecord).toHaveProperty('modified');
	});
	it('can performs search with provided filter', () => {
		const store = new VideoStore(dbPath);
		const allVideos = store.getAllVideos();

		expect(
			store.searchVideos(({ title }) => {
				return title == sampleItem.title;
			})
		).toMatchObject([sampleItem]);
		expect(store.searchVideos(() => false)).toEqual([]);
	});
});
