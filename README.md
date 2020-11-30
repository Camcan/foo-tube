# FOO TUBE

Backend:

- REST-ish 
- Node
- Express
- Multer for processing the image upload
- ffmpeg for grabbing frames from video post-upload
- Hacky local file store class does the necessary things (tested...)

Frontend:

- React
- Includes hover preview of videos
- Tests for simplest part I could find (the interpolatePath utility)


Notably absent:

- Line comments
- JSDoc
- Unified approach to error handling (& display on upload form)
- Use of streams
- Data fetching framework


## To Run

Build frontend assets (outputs to `/dist`) 

```yarn build```

Run server (starts on port `8080` if none specified in `.env`)

```yarn start```

File uploads will appear in `/uploads` directory. File map will appear in `/video-db.json`;


