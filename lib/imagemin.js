const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');

const dir = [
    'static/img/posts/24-farm/',
    'static/img/posts/apteka-life/',
    'static/img/posts/balter',
    'static/img/posts/configuration/',
    'static/img/posts/elite-taxi/',
    'static/img/posts/elite-taxi-site/',
    'static/img/posts/farmasfera/',
    'static/img/posts/foodloyalty/',
    'static/img/posts/gps-life/',
    'static/img/posts/instandart/',
    'static/img/posts/lootstore/',
    'static/img/posts/noop/',
    'static/img/posts/own-portfolio/',
    'static/img/posts/rosled/',
    'static/img/posts/rosled-app/',
    'static/img/posts/schedule-module/',
    'static/img/posts/siliconvalleycommerce/',
    'static/img/posts/vipshina/',
    'static/img/posts/webrotor/',
];

async function minImage(source){
    const path = source.split('/').slice(2).join('/');

    const files = await imagemin([source+'*.{jpg,png}'], {
        destination: 'build/'+path,
        plugins: [
            imageminMozjpeg({quality: 80}),
        ]
    });

    console.log(path);
    //=> [{data: <Buffer 89 50 4e …>, destinationPath: 'build/images/foo.jpg'}, …]
}

dir.forEach(minImage)