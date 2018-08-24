'use strict';

let gulp = require('gulp');
let errorNotifier = require('gulp-error-notifier');
let plugins = require('gulp-load-plugins');
let minimist = require('minimist');
let mkdir = require('mkdir-p');
let options = minimist(process.argv.slice(2));

const _ = plugins();

let log = console.log.bind(console, 'Logger: ');

// Directory where styles can be found
mkdir.sync('dist');

const config = {
  minify: options.min || options.minify || false,

  postcss: {
    autoprefixer: {
      browsers: [ '> 0.25%' ],
      cascade: true
    }
  },

  sass: {
    outputStyle: 'expanded',
    sourceMap: true,
    errLogToConsole: true
  },

  html: {
    baseDir: './src',
  }
};


const path = {
  sass: {
    source: [
      './src/sass/**/*.s[a|c]ss'
    ],
    entry: './src/sass/index.s[a|c]ss',
    dest: './dist/',
    docsDest: './docs/.vuepress/public/'
  },

  html: {
    source: [
      './src/*.html'
    ],
    dest: './dist/'
  },

  // static: {
  //   source: [
  //     './source/static/**/*'
  //   ],
  //   dest: pathModule.join(root, './public/')
  // }
};


gulp.task('default', [ 'build', 'watch' ]);


gulp.task('watch', () => {
  log('Watch');

  for (let task in path) {
    _.watch( [ path[ task ].source[0] ], () => gulp.start(task) );
  }

  if (!config.minify) {
    _.livereload.listen();
  }
});

gulp.task('build', Object.keys(path), () => {
  log('Build')

  for (let task in path) {
    gulp.start(task);
  }
});

/*
gulp.task('css', () => {
  log('Css');

  gulp.src(path.css.source)
    // .pipe(_.changed(path.css.dest))
    .pipe(errorNotifier())
    // .pipe(_.rigger())

    // minify
    .pipe(_.concatCss('main.css'))
    // .pipe(_.rename({ dirname: '' }))

    .pipe(_.postcss([
        require('postcss-custom-properties'),
        require('autoprefixer')(config.postcss.autoprefixer),
    ]))

    .pipe(_.if(config.minify, _.cleanCss()))

    .pipe(gulp.dest(path.css.dest))
    .pipe(_.livereload());
});
*/

gulp.task('sass', () => {
  log('Sass');

  gulp.src(path.sass.entry)
    .pipe(_.changed(path.sass.dest))
    .pipe(errorNotifier())

    .pipe(_.sassGlob())
    .pipe(_.sass(config.sass))

    .pipe(_.postcss([
        require('postcss-custom-properties', {
          preserve: false
        }),
        require('autoprefixer')(config.postcss.autoprefixer),
    ]))

    // docs
    .pipe(_.rename({ basename: 'dicehub-ui' }))
    .pipe(gulp.dest(path.sass.docsDest))

    // ui
    .pipe(_.rename({ basename: 'dicehub-ui' }))
    .pipe(gulp.dest(path.sass.dest))
    .pipe(_.livereload())
    .pipe(_.cleanCss())
    .pipe(_.rename({ basename: 'dicehub-ui.min' }))
    .pipe(gulp.dest(path.sass.dest));
});

gulp.task('html', () => {
  log('Html');

  gulp.src(path.html.source)
    .pipe(_.include({}))
    .pipe(gulp.dest(path.html.dest))
    .pipe(_.livereload());
});

// gulp.task('static', () => {
//   log('Static');

//   gulp.src(path.static.source)
//     .pipe(gulp.dest(path.static.dest))
//     .pipe(_.livereload());
// });
