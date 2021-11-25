const {defaultBucket} = require('../utils/dbconfig');
const {getUid} = require('../utils/utils');

async function uploadFile(path, filename) {

    // Upload the File
    const storage = await defaultBucket.upload(path, {
        public: true,
        destination: `/uploads/hashnode/${filename}`,
        metadata: {
            firebaseStorageDownloadTokens: getUid(),
        }
    });


    return storage[0].metadata.mediaLink;
}

module.exports = {
    uploadFile
}