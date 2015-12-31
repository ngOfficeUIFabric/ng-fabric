'use strict';
var fs = require('fs');
var config_1 = require('./build/gulp/config');
var gulp = require('gulp-help')(require('gulp'));
fs.readdirSync(config_1.BuildConfig.GULP_TASKS)
    .filter(function (filename) {
    return filename.match(/\.js$/i);
})
    .map(function (filename) {
    return {
        GulpTask: require(config_1.BuildConfig.GULP_TASKS + '/' + filename).GulpTask,
        name: filename.substr(0, filename.length - 3)
    };
})
    .forEach(function (file) {
    gulp.task(file.name, file.GulpTask.description, file.GulpTask.dependencies, file.GulpTask, {
        aliases: file.GulpTask.aliases,
        options: file.GulpTask.options
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImd1bHBmaWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUViLElBQVksRUFBRSxXQUFNLElBQUksQ0FBQyxDQUFBO0FBQ3pCLHVCQUEwQixxQkFBcUIsQ0FBQyxDQUFBO0FBQ2hELElBQUksSUFBSSxHQUFRLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQVl0RCxFQUFFLENBQUMsV0FBVyxDQUFDLG9CQUFXLENBQUMsVUFBVSxDQUFDO0tBQ25DLE1BQU0sQ0FBQyxVQUFDLFFBQWE7SUFDcEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDbEMsQ0FBQyxDQUFDO0tBQ0QsR0FBRyxDQUFDLFVBQUMsUUFBZ0I7SUFDcEIsTUFBTSxDQUFnQjtRQUNwQixRQUFRLEVBQUUsT0FBTyxDQUFDLG9CQUFXLENBQUMsVUFBVSxHQUFHLEdBQUcsR0FBRyxRQUFRLENBQUMsQ0FBQyxRQUFRO1FBQ25FLElBQUksRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztLQUM5QyxDQUFDO0FBQ0osQ0FBQyxDQUFDO0tBQ0QsT0FBTyxDQUFDLFVBQUMsSUFBbUI7SUFDM0IsSUFBSSxDQUFDLElBQUksQ0FDUCxJQUFJLENBQUMsSUFBSSxFQUNULElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFDMUIsSUFBSSxDQUFDLFFBQVEsRUFDYjtRQUNFLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU87UUFDOUIsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTztLQUMvQixDQUNGLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJndWxwZmlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcclxuaW1wb3J0IHtCdWlsZENvbmZpZ30gZnJvbSAnLi9idWlsZC9ndWxwL2NvbmZpZyc7XHJcbmxldCBndWxwOiBhbnkgPSByZXF1aXJlKCdndWxwLWhlbHAnKShyZXF1aXJlKCdndWxwJykpO1xyXG5cclxuLyoqXHJcbiAqIHlhcmdzIHZhcmlhYmxlcyBjYW4gYmUgcGFzc2VkIGluIHRvIGFsdGVyIHRoZSBiZWhhdmlvciwgd2hlbiBwcmVzZW50LlxyXG4gKiBFeGFtcGxlOiBndWxwIHNlcnZlLWRldlxyXG4gKlxyXG4gKiAtLXZlcmJvc2UgIDogVmFyaW91cyB0YXNrcyB3aWxsIHByb2R1Y2UgbW9yZSBvdXRwdXQgdG8gdGhlIGNvbnNvbGUuXHJcbiAqL1xyXG5cclxuLy8gKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstK1xyXG5cclxuLy8gbG9hZCBhbGwgZ3VscCB0YXNrcyAobG9jYXRlZCBpbiAuL2J1aWxkL2d1bHAvdGFza3MpXHJcbmZzLnJlYWRkaXJTeW5jKEJ1aWxkQ29uZmlnLkdVTFBfVEFTS1MpXHJcbiAgLmZpbHRlcigoZmlsZW5hbWU6IGFueSkgPT4ge1xyXG4gICAgcmV0dXJuIGZpbGVuYW1lLm1hdGNoKC9cXC5qcyQvaSk7XHJcbiAgfSlcclxuICAubWFwKChmaWxlbmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgICByZXR1cm4gPElHdWxwVGFza0ZpbGU+e1xyXG4gICAgICBHdWxwVGFzazogcmVxdWlyZShCdWlsZENvbmZpZy5HVUxQX1RBU0tTICsgJy8nICsgZmlsZW5hbWUpLkd1bHBUYXNrLFxyXG4gICAgICBuYW1lOiBmaWxlbmFtZS5zdWJzdHIoMCwgZmlsZW5hbWUubGVuZ3RoIC0gMylcclxuICAgIH07XHJcbiAgfSlcclxuICAuZm9yRWFjaCgoZmlsZTogSUd1bHBUYXNrRmlsZSkgPT4ge1xyXG4gICAgZ3VscC50YXNrKFxyXG4gICAgICBmaWxlLm5hbWUsXHJcbiAgICAgIGZpbGUuR3VscFRhc2suZGVzY3JpcHRpb24sXHJcbiAgICAgIGZpbGUuR3VscFRhc2suZGVwZW5kZW5jaWVzLFxyXG4gICAgICBmaWxlLkd1bHBUYXNrLFxyXG4gICAgICB7XHJcbiAgICAgICAgYWxpYXNlczogZmlsZS5HdWxwVGFzay5hbGlhc2VzLFxyXG4gICAgICAgIG9wdGlvbnM6IGZpbGUuR3VscFRhc2sub3B0aW9uc1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH0pO1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
