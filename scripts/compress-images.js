const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../public/images');
const outputDir = path.join(__dirname, '../public/images/compressed');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdir(imagesDir, (err, files) => {
    if (err) {
        console.error('Could not list the directory.', err);
        process.exit(1);
    }

    files.forEach((file, index) => {
        const filePath = path.join(imagesDir, file);
        const ext = path.extname(file).toLowerCase();

        if (['.png', '.jpg', '.jpeg'].includes(ext)) {
            console.log(`Compressing ${file}...`);

            const pipeline = sharp(filePath);

            if (ext === '.png') {
                pipeline.png({ quality: 80, compressionLevel: 9 });
            } else {
                pipeline.jpeg({ quality: 80, mozjpeg: true });
            }

            // Save to temporary path first then replace original if needed, 
            // but for safety we'll save to a 'compressed' folder first or formatted name.
            // User asked to "compress", usually implies overwrite or optimized version.
            // Given the large sizes (6MB+), replacing is best but risky if something goes wrong.
            // Let's modify the script to overwrite ONLY if successful, but for now let's overwrite 
            // since that's usually the goal of "compress script".
            // Actually, safe approach: write to temp, then move.

            const tempOutputPath = path.join(imagesDir, `temp_${file}`);

            pipeline.toFile(tempOutputPath)
                .then(info => {
                    console.log(`Compressed ${file}: ${info.size} bytes`);
                    // Overwrite original
                    fs.renameSync(tempOutputPath, filePath);
                })
                .catch(err => {
                    console.error(`Error compressing ${file}:`, err);
                });
        }
    });
});
