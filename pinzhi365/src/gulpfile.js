var gulp=require('gulp');//引入gulp插件
var html=require('gulp-minify-html');//引入html压缩插件
var sass=require('gulp-sass');//引入sass编译插件
var css=require('gulp-minify-css');//引入css压缩插件
var connect=require('gulp-connect');//配置自动刷新插件
var imagemin=require('gulp-imagemin');//图片压缩
/*var jshint=require('gulp-jshint');//JS错误检测
var uglify=require('gulp-uglify');//JS代码合并

var rename=require('gulp-rename');//
var rename=require('gulp-rename');//
var rename=require('gulp-rename');//
var rename=require('gulp-rename');//
var rename=require('gulp-rename');//
var rename=require('gulp-rename');//
var rename=require('gulp-rename');//
var rename=require('gulp-rename');//*/

gulp.task('copyhtml',function(){      //拷贝HTML（目录拷贝）
	gulp.src('html/*.html')
	.pipe(gulp.dest('../dist/'));
});

gulp.task('uglifyhtml',function(){    //压缩全部HTML
	gulp.src('html/*.html')
	.pipe(html())
	.pipe(gulp.dest('../dist/html/'))
});

gulp.task('watchhtml',function(){     //监听压缩全部HTML
	gulp.watch('html/*.html',function(){
		gulp.run('uglifyhtml');
	})
});

gulp.task('sass',function(){        //编译SASS
	gulp.src('scss/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('./css/'))
});

gulp.task('watchsass',function(){      //监听SASS编译
	gulp.watch('scss/*.scss',function(){
		gulp.run('sass');
	})
});

gulp.task('uglifycss',function(){      //压缩CSS
	gulp.src('css/*.css')
	.pipe(css())
	.pipe(gulp.dest('../dist/css/'));
});

gulp.task('watchcss',function(){       //监听CSS压缩
	gulp.watch('css/*.css',function(){
		gulp.run('uglifycss');
	})
});

gulp.task('connect',function(){    //创建自刷新
	connect.server({
		port:8888,
		livereload:true
	});
});

/*gulp.task('connecthtml',function(){    //创建自刷新任务
	gulp.src(['html/*.html','css/*.css'])
	.pipe(connect.reload())
});

gulp.task('connectwatch',function(){
	gulp.watch(['html/*.html','css/*.css'],['connecthtml'])
});*/

gulp.task('imagemin',function(){
	gulp.src('img/*.png')
	.pipe(imagemin())
	.pipe(gulp.dest('../dist/img'));
});
gulp.task('default',['watchhtml','watchsass','watchcss']);
//gulp.task('default',['watchhtml','watchsass','watchcss','connect','connectwatch']);
//gulp.task('default',['watchhtml']);
